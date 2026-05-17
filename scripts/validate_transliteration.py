#!/usr/bin/env python3
"""Compare stored transliteration vs IAST generated from Sanskrit (vendored sanscript)."""

from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path

_SCRIPTS = Path(__file__).resolve().parent
if str(_SCRIPTS) not in sys.path:
    sys.path.insert(0, str(_SCRIPTS))

from sanskrit_translit import devanagari_to_iast, normalize_for_compare

ROOT = Path(__file__).resolve().parents[1]
DATA_PATH = ROOT / "src" / "data" / "gita-data.json"
DEFAULT_OUT = ROOT / "docs" / "audit" / "14-transliteration-sanscript-check.json"


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--output", type=Path, default=DEFAULT_OUT)
    parser.add_argument("--limit", type=int, default=0, help="Max verses to report (0 = all)")
    args = parser.parse_args()

    data = json.loads(DATA_PATH.read_text(encoding="utf-8"))
    exact = 0
    loose_match = 0
    mismatches: list[dict] = []

    for chapter in data:
        ch_id = chapter["id"]
        for verse in chapter["verses"]:
            ref = f"BG {ch_id}.{verse['id']}"
            stored = (verse.get("transliteration") or "").strip()
            sanskrit = (verse.get("sanskrit") or "").strip()
            if not sanskrit:
                continue
            generated = devanagari_to_iast(sanskrit)
            if stored == generated:
                exact += 1
                continue
            if normalize_for_compare(stored) == normalize_for_compare(generated):
                loose_match += 1
                continue
            mismatches.append(
                {
                    "ref": ref,
                    "stored_preview": stored[:200],
                    "generated_preview": generated[:200],
                }
            )

    total = exact + loose_match + len(mismatches)
    summary = {
        "total_compared": total,
        "exact_matches": exact,
        "loose_matches": loose_match,
        "mismatches": len(mismatches),
        "note": "Loose match ignores spacing/hyphens and normalizes śh→sh. Style differs from vedabase IAST.",
    }
    report = {"summary": summary, "mismatch_samples": mismatches[: args.limit or len(mismatches)]}

    args.output.parent.mkdir(parents=True, exist_ok=True)
    args.output.write_text(json.dumps(report, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(json.dumps(summary, indent=2))
    print(f"Wrote {args.output}")


if __name__ == "__main__":
    main()
