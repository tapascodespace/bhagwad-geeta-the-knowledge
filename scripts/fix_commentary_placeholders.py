"""Replace 'See commentary under C.V' and '.' explanation placeholders in gita-data.json."""

from __future__ import annotations

import json
import re
import shutil
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA_PATH = ROOT / "src" / "data" / "gita-data.json"
AUDIT_DIR = ROOT / "docs" / "audit"

CROSS_REF_RE = re.compile(
    r"^See\s+[Cc]ommentary\s+under\s+(\d+)\.(\d+)\.?,?\s*$",
    re.IGNORECASE,
)

# English explanations for verses that only had "." (no cross-ref target).
EN_OVERRIDES: dict[tuple[int, int], str] = {
    (4, 16): (
        "Even the wise are bewildered in determining what is action and what is inaction. "
        "In common life we call bodily movement action and rest inaction; in philosophy the "
        "distinction is subtler. Action is not good or bad in itself; its purpose fixes its "
        "character. Even a fine-looking act may be sinful if the motive is low. Hence even "
        "seers (kavis) are confused about karma and akarma. The Lord now promises to teach "
        "Arjuna that truth by knowing which one may be freed from worldly bondage. It is well "
        "known that every movement is action and mere sitting still is inaction—yet the "
        "secret of action is profound, as the next verses will show."
    ),
    (4, 17): (
        "Life is essentially active; the end of activity is death. In an active life alone "
        "can one rise or fall. Stagnant water putrefies, while flowing stream-water stays pure; "
        "so long as life-force is present, action cannot wholly cease. The sages therefore "
        "classified all human acts: constructive duty (karma) and destructive forbidden acts "
        "(vikarma), with inaction (akarma) as the deepest mystery. Duty acts are of three "
        "kinds—nitya, naimittika, and kamya—while forbidden acts drag man below his humanity. "
        "The path of action is hard to understand; hence one must know properly what action, "
        "forbidden action, and inaction truly are."
    ),
    (8, 5): (
        "The great sage Vyasa repeatedly teaches in the Vedanta that a soul remains identified "
        "with a body only so long as that body serves the experiences it desires; when that "
        "purpose is fulfilled the body is left forever, without further duty, attachment, or "
        "pride toward it. At the moment of separation the mind holds whatever subject carried "
        "the soul's strongest desire or ambition in any life—a reasonable doctrine. Meditation "
        "and devotion train the mind to one-pointedness on the Lord. Such a seeker leaves the "
        "body at death remembering Him alone and attains His state; of this there is no doubt. "
        "The last dominant thought before death fixes the soul's future course."
    ),
    (10, 16): (
        "Arjuna has understood that the Lord is the support of the worlds; yet through the "
        "senses, mind, and intellect he still meets only objects, feelings, and thoughts that "
        "seem far from divine. Like bulbs lit by one current, all glories in creation express "
        "one power, yet the intellect cannot grasp the whole. He therefore asks Krishna to "
        "describe His divine manifestations (vibhutis) by which He pervades and fills these "
        "worlds, so that he may know and meditate on Him in definite forms."
    ),
    (10, 41): (
        "The examples given in this chapter only hint at the Lord's glories; they do not exhaust "
        "the truth. Through discernment we may see the eternal and divine in this changing "
        "world. Wherever there is greatness, splendour, or power in any being or thing, know "
        "it as a ray of the Lord's limitless splendour. That test of recognition is meant for "
        "every student of the Gita: see God in whatever shines with majesty, beauty, or strength."
    ),
    (11, 29): (
        "The oneness of the unmanifest and manifest creation was shown by the river-ocean "
        "simile in the previous verse. No simile is perfect: rivers lack conscious will in "
        "merging with the sea, so one might doubt whether living beings act like water. To "
        "show that beings are likewise drawn helplessly toward death, the Lord compares them "
        "to moths rushing with great speed into a blazing fire to perish. Thus warriors enter "
        "His flaming mouths as if hastening to their own destruction."
    ),
    (11, 31): (
        "Having seen the Lord's fierce universal form, Arjuna now perceives His holiness and "
        "divinity. He bows and asks who this terrible form is, begs mercy, and wishes to know "
        "the original Being—for he does not understand the Lord's purpose. His eagerness to "
        "know is natural in distress, yet it is stirred as much by fear of the battle's outcome "
        "as by pure insight into the divine truth."
    ),
}


def verse_index(data: list) -> dict[tuple[int, int], dict]:
    return {(chapter["id"], verse["id"]): verse for chapter in data for verse in chapter["verses"]}


def is_placeholder(text: str) -> bool:
    t = (text or "").strip()
    return t == "." or bool(CROSS_REF_RE.match(t))


def backup_data() -> Path:
    AUDIT_DIR.mkdir(parents=True, exist_ok=True)
    stamp = datetime.now(timezone.utc).strftime("%Y%m%dT%H%M%SZ")
    dest = AUDIT_DIR / f"15-gita-data-before-commentary-placeholder-fix-{stamp}.json"
    shutil.copy2(DATA_PATH, dest)
    return dest


def apply_fixes(data: list) -> list[dict]:
    index = verse_index(data)
    changes: list[dict] = []

    for chapter in data:
        ch_id = chapter["id"]
        for verse in chapter["verses"]:
            v_id = verse["id"]
            explanation = verse.setdefault("explanation", {})

            for lang in ("hi", "en", "bn"):
                raw = explanation.get(lang, "") or ""
                if not is_placeholder(raw):
                    continue

                m = CROSS_REF_RE.match(raw.strip())
                if m:
                    target = (int(m.group(1)), int(m.group(2)))
                    source = index.get(target)
                    if not source:
                        changes.append(
                            {
                                "ref": f"{ch_id}.{v_id}",
                                "lang": lang,
                                "status": "skipped",
                                "reason": f"target {target[0]}.{target[1]} missing",
                            }
                        )
                        continue
                    replacement = (source.get("explanation") or {}).get(lang, "")
                    if not replacement or is_placeholder(replacement):
                        changes.append(
                            {
                                "ref": f"{ch_id}.{v_id}",
                                "lang": lang,
                                "status": "skipped",
                                "reason": f"target {target[0]}.{target[1]} {lang} still placeholder",
                            }
                        )
                        continue
                    explanation[lang] = replacement
                    changes.append(
                        {
                            "ref": f"{ch_id}.{v_id}",
                            "lang": lang,
                            "status": "copied",
                            "from": f"{target[0]}.{target[1]}",
                        }
                    )
                    continue

                if lang == "en" and raw.strip() == ".":
                    # Paired verses: share commentary with the following verse.
                    if (ch_id, v_id) == (5, 8):
                        donor = index.get((5, 9))
                    elif (ch_id, v_id) == (11, 41):
                        donor = index.get((11, 42))
                    else:
                        donor = None

                    if donor:
                        replacement = (donor.get("explanation") or {}).get("en", "")
                        if replacement and not is_placeholder(replacement):
                            explanation["en"] = replacement
                            changes.append(
                                {
                                    "ref": f"{ch_id}.{v_id}",
                                    "lang": "en",
                                    "status": "copied",
                                    "from": f"{ch_id}.{v_id + 1}",
                                }
                            )
                            continue

                    override = EN_OVERRIDES.get((ch_id, v_id))
                    if override:
                        explanation["en"] = override
                        changes.append(
                            {
                                "ref": f"{ch_id}.{v_id}",
                                "lang": "en",
                                "status": "override",
                            }
                        )
                    else:
                        changes.append(
                            {
                                "ref": f"{ch_id}.{v_id}",
                                "lang": "en",
                                "status": "skipped",
                                "reason": "no override defined",
                            }
                        )

    return changes


def verify(data: list) -> list[str]:
    remaining = []
    for chapter in data:
        for verse in chapter["verses"]:
            exp = verse.get("explanation", {})
            for lang in ("hi", "en", "bn"):
                if is_placeholder(exp.get(lang, "") or ""):
                    remaining.append(f"{chapter['id']}.{verse['id']} ({lang})")
    return remaining


def main() -> None:
    data = json.loads(DATA_PATH.read_text(encoding="utf-8"))
    backup = backup_data()
    changes = apply_fixes(data)
    remaining = verify(data)

    DATA_PATH.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

    report = {
        "backup": str(backup.relative_to(ROOT)),
        "changes": changes,
        "change_count": len(changes),
        "remaining_placeholders": remaining,
    }
    report_path = AUDIT_DIR / "15-commentary-placeholder-fix-report.json"
    report_path.write_text(json.dumps(report, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

    print(f"Backup: {backup}")
    print(f"Applied {len(changes)} fixes")
    if remaining:
        print("Remaining placeholders:")
        for item in remaining:
            print(f"  - {item}")
    else:
        print("All commentary placeholders resolved.")


if __name__ == "__main__":
    main()
