from __future__ import annotations

import json
import re
import shutil
from collections import Counter, defaultdict
from datetime import datetime, timezone
from io import BytesIO
from pathlib import Path
from zipfile import ZipFile

from PyPDF2 import PdfReader


ROOT = Path(__file__).resolve().parents[1]
DATA_PATH = ROOT / "src" / "data" / "gita-data.json"
RESULTS_PATH = ROOT / "docs" / "audit" / "10-repo-verification-results.json"
ZIP_PATH = ROOT / "Srimaad Bhagavad Gita (Bengali Version) [18 Chapters]-20260516T133542Z-3-001.zip"
AUDIT_DIR = ROOT / "docs" / "audit"
FIX_REPORT_PATH = AUDIT_DIR / "11-content-fix-report.md"
BENGALI_REPORT_PATH = AUDIT_DIR / "11-bengali-source-extraction.json"


DEVANAGARI_RE = re.compile(r"[\u0900-\u097f]")
BENGALI_RE = re.compile(r"[\u0980-\u09ff]")
GLYPH_CODE_RE = re.compile(r"/G[0-9A-F]{2,3}")


def load_json(path: Path):
    return json.loads(path.read_text(encoding="utf-8"))


def write_json(path: Path, data) -> None:
    path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


def verse_index(data):
    return {(chapter["id"], verse["id"]): verse for chapter in data for verse in chapter["verses"]}


def nonempty_lines(value: str) -> list[str]:
    return [line.strip() for line in (value or "").splitlines() if line.strip()]


def get_nested(record: dict, *keys: str) -> str:
    cur = record
    for key in keys:
        if not isinstance(cur, dict):
            return ""
        cur = cur.get(key, "")
    return cur or ""


def set_nested(record: dict, value: str, *keys: str) -> None:
    cur = record
    for key in keys[:-1]:
        cur = cur[key]
    cur[keys[-1]] = value


def first_next_line_present(chapter: int, verse_id: int, current: str, index: dict[tuple[int, int], dict]) -> bool:
    next_verse = index.get((chapter, verse_id + 1))
    if not next_verse:
        return False
    next_lines = nonempty_lines(next_verse.get("transliteration", ""))
    if not next_lines:
        return False
    words = next_lines[0].split()[:3]
    return len(words) >= 2 and " ".join(words).lower() in current.lower()


def fix_english_quotes(data, findings) -> list[dict]:
    index = verse_index(data)
    changed = []
    for finding in findings:
        if finding["category"] != "english_translation_unmatched_quotes" or finding["status"] != "PERSISTS":
            continue
        key = (finding["chapter"], finding["verse"])
        verse = index.get(key)
        if not verse:
            continue
        current = get_nested(verse, "translation", "en")
        if current.count('"') % 2 != 1:
            continue
        updated = current.rstrip() + '"'
        if updated != current:
            set_nested(verse, updated, "translation", "en")
            changed.append({"ref": finding["ref"], "field": "translation.en", "before": current, "after": updated})
    return changed


def fix_transliteration_merges(data, findings) -> list[dict]:
    index = verse_index(data)
    changed = []
    for finding in findings:
        if finding["category"] != "transliteration_possible_merge" or finding["status"] != "PERSISTS":
            continue
        key = (finding["chapter"], finding["verse"])
        verse = index.get(key)
        if not verse:
            continue

        current = verse.get("transliteration", "")
        current_lines = nonempty_lines(current)
        sanskrit_lines = nonempty_lines(verse.get("sanskrit", ""))
        target_line_count = max(1, len(sanskrit_lines))

        filtered = [
            line
            for line in current_lines
            if not DEVANAGARI_RE.search(line) and not BENGALI_RE.search(line) and not GLYPH_CODE_RE.search(line)
        ]
        reason = "removed non-transliteration script lines"

        if len(filtered) > target_line_count:
            filtered = filtered[:target_line_count]
            reason = "trimmed extra transliteration lines"

        if first_next_line_present(finding["chapter"], finding["verse"], "\n".join(filtered), index):
            filtered = filtered[:target_line_count]
            reason = "removed next-verse transliteration contamination"

        updated = "\n".join(filtered).strip()
        if updated and updated != current.strip():
            verse["transliteration"] = updated
            changed.append(
                {
                    "ref": finding["ref"],
                    "field": "transliteration",
                    "reason": reason,
                    "before": current,
                    "after": updated,
                }
            )
    return changed


def extract_bengali_source() -> dict:
    report = {
        "source_zip": str(ZIP_PATH.relative_to(ROOT)),
        "status": "not_started",
        "ocr_available": False,
        "usable_for_replacement": False,
        "chapters": [],
        "notes": [],
    }
    if not ZIP_PATH.exists():
        report["status"] = "missing_zip"
        report["notes"].append("Bengali source zip was not found.")
        return report

    try:
        with ZipFile(ZIP_PATH) as archive:
            names = sorted(name for name in archive.namelist() if re.search(r"Gita Chapter \d+\.pdf$", name))
            for name in names:
                chapter_match = re.search(r"Gita Chapter (\d+)\.pdf$", name)
                chapter_id = int(chapter_match.group(1)) if chapter_match else None
                raw = archive.read(name)
                reader = PdfReader(BytesIO(raw))
                text = "\n".join(page.extract_text() or "" for page in reader.pages)
                bengali_chars = len(BENGALI_RE.findall(text))
                glyph_codes = len(GLYPH_CODE_RE.findall(text))
                verse_markers = len(re.findall(r"(?:অধ্যায়|শ্লোক|শ্রীমদ|গীতা|\d+\.\d+)", text))
                report["chapters"].append(
                    {
                        "chapter": chapter_id,
                        "entry": name,
                        "pages": len(reader.pages),
                        "extracted_chars": len(text),
                        "bengali_chars": bengali_chars,
                        "glyph_codes": glyph_codes,
                        "verse_marker_hits": verse_markers,
                        "sample": text[:400],
                    }
                )
    except Exception as exc:
        report["status"] = "error"
        report["notes"].append(f"{type(exc).__name__}: {exc}")
        return report

    usable_chapters = [
        chapter for chapter in report["chapters"] if chapter["bengali_chars"] > 500 and chapter["glyph_codes"] < 100
    ]
    report["status"] = "extracted_unusable" if not usable_chapters else "extracted_partially_usable"
    report["usable_for_replacement"] = len(usable_chapters) == 18
    if not report["usable_for_replacement"]:
        report["notes"].append(
            "Direct extraction is not reliable enough for Bengali replacement. The PDFs expose custom /Gxx glyph codes and no usable ToUnicode mapping via PyPDF2."
        )
        report["notes"].append(
            "No local OCR stack was detected during implementation, so Bengali fields were left unchanged."
        )
    return report


def summarize_remaining(data, original_results) -> dict:
    idx = verse_index(data)
    remaining = Counter()
    for finding in original_results["findings"]:
        verse = idx.get((finding["chapter"], finding["verse"]))
        if not verse:
            remaining["missing_verse"] += 1
            continue
        category = finding["category"]
        if category == "english_translation_unmatched_quotes":
            if get_nested(verse, "translation", "en").count('"') % 2 == 1:
                remaining[category] += 1
        elif category == "transliteration_possible_merge" and finding["status"] == "PERSISTS":
            transliteration = verse.get("transliteration", "")
            if first_next_line_present(finding["chapter"], finding["verse"], transliteration, idx):
                remaining[category] += 1
            elif len(nonempty_lines(transliteration)) > len(nonempty_lines(verse.get("sanskrit", ""))):
                remaining[category] += 1
        elif finding["status"] == "PERSISTS":
            remaining[category] += 1
    return dict(remaining)


def write_fix_report(quote_changes, translit_changes, bengali_report, remaining) -> None:
    lines = [
        "# Bhagavad Gita Content Fix Report",
        "",
        f"Generated: {datetime.now(timezone.utc).isoformat()}",
        "",
        "## Changes Applied",
        "",
        f"- English unmatched quote fixes applied: {len(quote_changes)}.",
        f"- Confirmed transliteration contamination fixes applied: {len(translit_changes)}.",
        "- Bengali replacements applied: 0.",
        "",
        "## Bengali Source Extraction",
        "",
        f"- Source status: `{bengali_report['status']}`.",
        f"- Usable for replacement: `{bengali_report['usable_for_replacement']}`.",
    ]
    for note in bengali_report.get("notes", []):
        lines.append(f"- {note}")

    lines.extend(
        [
            "",
            "## Remaining High-Level Findings",
            "",
        ]
    )
    for category, count in sorted(remaining.items()):
        lines.append(f"- `{category}`: {count}")

    lines.extend(
        [
            "",
            "## Guardrails Followed",
            "",
            "- No audio was regenerated.",
            "- No Supabase data was mutated.",
            "- Bengali fields were not replaced because the provided PDFs did not extract into reliable verse-aligned Bengali Unicode text in this environment.",
        ]
    )
    FIX_REPORT_PATH.write_text("\n".join(lines) + "\n", encoding="utf-8")


def main() -> None:
    AUDIT_DIR.mkdir(parents=True, exist_ok=True)
    data = load_json(DATA_PATH)
    results = load_json(RESULTS_PATH)
    findings = results["findings"]

    backup_path = AUDIT_DIR / "11-gita-data-before-content-fix.json"
    if not backup_path.exists():
        shutil.copyfile(DATA_PATH, backup_path)

    quote_changes = fix_english_quotes(data, findings)
    translit_changes = fix_transliteration_merges(data, findings)
    bengali_report = extract_bengali_source()
    write_json(BENGALI_REPORT_PATH, bengali_report)

    write_json(DATA_PATH, data)
    remaining = summarize_remaining(data, results)
    write_fix_report(quote_changes, translit_changes, bengali_report, remaining)

    summary = {
        "quote_changes": len(quote_changes),
        "transliteration_changes": len(translit_changes),
        "bengali_replacements": 0,
        "bengali_source_status": bengali_report["status"],
        "remaining": remaining,
        "report": str(FIX_REPORT_PATH.relative_to(ROOT)),
        "bengali_report": str(BENGALI_REPORT_PATH.relative_to(ROOT)),
    }
    print(json.dumps(summary, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
