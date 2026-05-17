#!/usr/bin/env python3
"""
Generate verse MP3s with edge-tts (no API login) and upload to Supabase verse-audio.

Sanskrit shlokas: Devanagari -> IAST via vendored sanscript, then TTS.
Hindi/English: translation and explanation from gita-data.json.

Requires: pip install -r scripts/requirements.txt
Optional env (repo root .env): VITE_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY
"""

from __future__ import annotations

import argparse
import asyncio
import base64
import hashlib
import json
import os
import re
import sys
import time
from pathlib import Path

import requests

_SCRIPTS = Path(__file__).resolve().parent
if str(_SCRIPTS) not in sys.path:
    sys.path.insert(0, str(_SCRIPTS))

ROOT = Path(__file__).resolve().parents[1]
DATA_PATH = ROOT / "src" / "data" / "gita-data.json"
BUCKET = "verse-audio"

# edge-tts neural voices (no account required)
VOICES = {
    "hi": "hi-IN-SwaraNeural",
    "en": "en-IN-NeerjaNeural",
    "shloka": "en-US-JennyNeural",  # IAST via sanscript reads more reliably than raw Devanagari
}

RATE = "-15%"  # slightly slower for clarity
REQUEST_DELAY_SEC = 0.35
MAX_RETRIES = 3


def load_env() -> None:
    env_path = ROOT / ".env"
    if not env_path.is_file():
        return
    for line in env_path.read_text(encoding="utf-8").splitlines():
        line = line.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        key, _, val = line.partition("=")
        key = key.strip()
        val = val.strip().strip('"').strip("'")
        os.environ.setdefault(key, val)


def audio_filename(chapter: int, verse: int, part: str, lang: str | None) -> str:
    if part == "shloka":
        return f"ch{chapter}-v{verse}-shloka.mp3"
    return f"ch{chapter}-v{verse}-{lang}-{part}.mp3"


def public_url(supabase_url: str, name: str) -> str:
    base = supabase_url.rstrip("/")
    return f"{base}/storage/v1/object/public/{BUCKET}/{name}"


def object_exists(supabase_url: str, name: str) -> bool:
    try:
        r = requests.head(public_url(supabase_url, name), timeout=15)
        return r.status_code == 200
    except requests.RequestException:
        return False


def pick_text(block: dict, lang: str) -> str:
    return (block.get(lang) or block.get("en") or block.get("hi") or "").strip()


def clean_english_explanation(raw: str) -> str:
    if not raw:
        return ""
    idx = raw.find("Commentary")
    if idx == -1:
        if (raw.count("?") or 0) >= 3:
            return ""
        return raw.strip()
    return raw[idx + len("Commentary") :].strip()


def shloka_tts_text(sanskrit: str) -> str:
    from sanskrit_translit import devanagari_to_iast

    iast = devanagari_to_iast(sanskrit)
    # Single paragraph for TTS (pause between lines as comma)
    return re.sub(r"\s*\n\s*", ". ", iast).strip()


async def synthesize(text: str, voice: str, out_path: Path) -> None:
    import edge_tts

    communicate = edge_tts.Communicate(text, voice, rate=RATE)
    await communicate.save(str(out_path))


def upload_mp3_direct(supabase_url: str, service_key: str, name: str, data: bytes) -> None:
    url = f"{supabase_url.rstrip('/')}/storage/v1/object/{BUCKET}/{name}"
    r = requests.post(
        url,
        headers={
            "Authorization": f"Bearer {service_key}",
            "apikey": service_key,
            "Content-Type": "audio/mpeg",
            "x-upsert": "true",
        },
        data=data,
        timeout=120,
    )
    if r.status_code not in (200, 201):
        raise RuntimeError(f"Upload failed {name}: {r.status_code} {r.text[:300]}")


def upload_mp3_edge(supabase_url: str, anon_key: str, name: str, data: bytes) -> None:
    """Upload via deployable upload-verse-audio edge function (no local service role)."""
    url = f"{supabase_url.rstrip('/')}/functions/v1/upload-verse-audio"
    r = requests.post(
        url,
        headers={
            "Authorization": f"Bearer {anon_key}",
            "apikey": anon_key,
            "Content-Type": "application/json",
        },
        json={"filename": name, "audioBase64": base64.b64encode(data).decode("ascii")},
        timeout=120,
    )
    if r.status_code != 200:
        raise RuntimeError(f"Edge upload failed {name}: {r.status_code} {r.text[:300]}")
    body = r.json()
    if not body.get("ok"):
        raise RuntimeError(f"Edge upload rejected {name}: {body}")


def upload_mp3(
    supabase_url: str,
    service_key: str,
    anon_key: str,
    name: str,
    data: bytes,
) -> None:
    if service_key:
        upload_mp3_direct(supabase_url, service_key, name, data)
    elif anon_key:
        upload_mp3_edge(supabase_url, anon_key, name, data)
    else:
        raise RuntimeError("Need SUPABASE_SERVICE_ROLE_KEY or VITE_SUPABASE_PUBLISHABLE_KEY for upload")


def text_hash(text: str) -> str:
    return hashlib.sha256(text.encode("utf-8")).hexdigest()[:16]


async def run(args: argparse.Namespace) -> None:
    load_env()
    supabase_url = os.environ.get("VITE_SUPABASE_URL", "").strip()
    service_key = (
        os.environ.get("SUPABASE_SECRET_KEY", "").strip()
        or os.environ.get("SUPABASE_SERVICE_ROLE_KEY", "").strip()
    )
    anon_key = os.environ.get("VITE_SUPABASE_PUBLISHABLE_KEY", "").strip()

    if not args.dry_run and args.upload and not supabase_url:
        print("Set VITE_SUPABASE_URL in .env, or use --dry-run / --no-upload", file=sys.stderr)
        sys.exit(1)
    if not args.dry_run and args.upload and not (service_key or anon_key):
        print(
            "Set SUPABASE_SERVICE_ROLE_KEY or VITE_SUPABASE_PUBLISHABLE_KEY for upload",
            file=sys.stderr,
        )
        sys.exit(1)

    data = json.loads(DATA_PATH.read_text(encoding="utf-8"))
    out_dir = Path(args.output_dir)
    out_dir.mkdir(parents=True, exist_ok=True)
    meta_path = out_dir / "generation-metadata.jsonl"
    generated = skipped = failed = 0

    tasks: list[tuple[int, int, str, str, str]] = []
    for chapter in data:
        ch = chapter["id"]
        if args.chapter and ch != args.chapter:
            continue
        for verse in chapter["verses"]:
            v = verse["id"]
            if args.verse and v != args.verse:
                continue

            specs: list[tuple[str, str | None, str]] = []
            if "shloka" in args.parts:
                specs.append(("shloka", None, shloka_tts_text(verse.get("sanskrit", ""))))
            if "hi" in args.langs:
                t = pick_text(verse.get("translation", {}), "hi")
                e = pick_text(verse.get("explanation", {}), "hi")
                if t:
                    specs.append(("translation", "hi", t))
                if e:
                    specs.append(("explanation", "hi", e))
            if "en" in args.langs:
                t = pick_text(verse.get("translation", {}), "en")
                e = clean_english_explanation(pick_text(verse.get("explanation", {}), "en"))
                if t:
                    specs.append(("translation", "en", t))
                if e:
                    specs.append(("explanation", "en", e))

            for part, lang, text in specs:
                if not text or len(text) < 2:
                    continue
                tasks.append((ch, v, part, lang or "", text))

    if args.max > 0:
        tasks = tasks[: args.max]

    for i, (ch, v, part, lang, text) in enumerate(tasks, 1):
        name = audio_filename(ch, v, part, lang or "en")
        if args.only_missing and supabase_url and object_exists(supabase_url, name):
            skipped += 1
            continue

        voice_key = "shloka" if part == "shloka" else (lang or "en")
        voice = VOICES.get(voice_key, VOICES["en"])
        local = out_dir / name

        try:
            if args.dry_run:
                print(f"[dry-run] {name} voice={voice} chars={len(text)}")
                generated += 1
                continue

            last_err: Exception | None = None
            for attempt in range(1, MAX_RETRIES + 1):
                try:
                    await synthesize(text, voice, local)
                    last_err = None
                    break
                except Exception as e:
                    last_err = e
                    if attempt < MAX_RETRIES:
                        await asyncio.sleep(2 * attempt)
            if last_err:
                raise last_err

            meta = {
                "file": name,
                "chapter": ch,
                "verse": v,
                "part": part,
                "lang": lang or None,
                "voice": voice,
                "engine": "edge-tts",
                "text_hash": text_hash(text),
                "text_preview": text[:120],
            }
            with meta_path.open("a", encoding="utf-8") as mf:
                mf.write(json.dumps(meta, ensure_ascii=False) + "\n")

            if args.upload:
                try:
                    upload_mp3(supabase_url, service_key, anon_key, name, local.read_bytes())
                except Exception as up_err:
                    print(
                        f"WARN [{i}/{len(tasks)}] {name}: saved locally, upload failed: {up_err}",
                        file=sys.stderr,
                    )
                    failed += 1
                    await asyncio.sleep(REQUEST_DELAY_SEC)
                    continue
            print(f"OK [{i}/{len(tasks)}] {name}")
            generated += 1
            await asyncio.sleep(REQUEST_DELAY_SEC)
        except Exception as e:
            print(f"FAIL [{i}/{len(tasks)}] {name}: {e}", file=sys.stderr)
            failed += 1

    print(f"Done: generated={generated} skipped={skipped} failed={failed}")
    if args.upload and not service_key and anon_key:
        print("Uploaded via upload-verse-audio edge function (deploy if uploads failed).")


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--chapter", type=int, default=0)
    parser.add_argument("--verse", type=int, default=0)
    parser.add_argument("--langs", default="hi,en", help="Comma-separated: hi,en")
    parser.add_argument(
        "--parts",
        default="shloka,translation,explanation",
        help="Comma-separated parts",
    )
    parser.add_argument("--only-missing", action="store_true", help="Skip if public URL exists")
    parser.add_argument("--max", type=int, default=0, help="Max files to process (0 = all)")
    parser.add_argument("--dry-run", action="store_true")
    parser.add_argument("--no-upload", dest="upload", action="store_false", default=True)
    parser.add_argument(
        "--output-dir",
        type=Path,
        default=ROOT / "tmp" / "verse-audio-out",
    )
    args = parser.parse_args()
    args.langs = [x.strip() for x in args.langs.split(",") if x.strip()]
    args.parts = [x.strip() for x in args.parts.split(",") if x.strip()]

    asyncio.run(run(args))


if __name__ == "__main__":
    main()
