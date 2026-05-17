#!/usr/bin/env python3
"""Upload MP3s from tmp/verse-audio-out to Supabase (direct or edge function)."""

from __future__ import annotations

import argparse
import os
import sys
from pathlib import Path

import requests

_SCRIPTS = Path(__file__).resolve().parent
if str(_SCRIPTS) not in sys.path:
    sys.path.insert(0, str(_SCRIPTS))

from generate_audio_free import load_env, upload_mp3  # noqa: E402

ROOT = Path(__file__).resolve().parents[1]
DEFAULT_DIR = ROOT / "tmp" / "verse-audio-out"


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--dir", type=Path, default=DEFAULT_DIR)
    args = parser.parse_args()

    load_env()
    supabase_url = os.environ.get("VITE_SUPABASE_URL", "").strip()
    service_key = (
        os.environ.get("SUPABASE_SECRET_KEY", "").strip()
        or os.environ.get("SUPABASE_SERVICE_ROLE_KEY", "").strip()
    )
    anon_key = os.environ.get("VITE_SUPABASE_PUBLISHABLE_KEY", "").strip()

    if not supabase_url or not (service_key or anon_key):
        print("Need VITE_SUPABASE_URL and a Supabase key in .env", file=sys.stderr)
        sys.exit(1)

    files = sorted(args.dir.glob("*.mp3"))
    if not files:
        print(f"No MP3 files in {args.dir}", file=sys.stderr)
        sys.exit(1)

    ok = fail = 0
    for path in files:
        try:
            upload_mp3(supabase_url, service_key, anon_key, path.name, path.read_bytes())
            print(f"OK {path.name}")
            ok += 1
        except Exception as e:
            print(f"FAIL {path.name}: {e}", file=sys.stderr)
            fail += 1
    print(f"Done: uploaded={ok} failed={fail}")


if __name__ == "__main__":
    main()
