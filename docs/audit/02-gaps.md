# Step 2 - Inventory & Gap Report

Generated from `src/data/gita-data.json` and public Supabase Storage HEAD checks. This report does not verify scriptural correctness or make fixes.

## Coverage Rules

- `has_sanskrit` is true when the verse record has non-empty `sanskrit` text.
- `has_hindi`, `has_english`, and `has_bengali` are true only when both `translation.{lang}` and `explanation.{lang}` are non-empty.
- `has_audio_sa` is true when `ch{chapter}-v{verse}-shloka.mp3` exists in `verse-audio`.
- `has_audio_hi`, `has_audio_en`, and `has_audio_bn` are true only when both `translation` and `explanation` MP3s exist for that language.
- Chapter 13 is evaluated with 35 verses, matching the current dataset and the edition-dependent allowance in the audit prompt.

## Totals

| Item | Present | Expected |
| --- | ---: | ---: |
| Verse records | 701 | 701 |
| Sanskrit text | 701 | 701 |
| Hindi text | 701 | 701 |
| English text | 701 | 701 |
| Bengali text | 701 | 701 |
| Sanskrit audio | 267 | 701 |
| Hindi audio | 267 | 701 |
| English audio | 20 | 701 |
| Bengali audio | 20 | 701 |

## Missing Entire Verse Records

None found.

## Chapter Count Mismatches

None found.

## Text Gaps

None found by non-empty field coverage. This does not mean translations are semantically correct; that is handled by later verification steps.

## Audio Gap Counts By Part

| Note | Count |
| --- | ---: |
| `missing_audio_bn_explanation` | 681 |
| `missing_audio_bn_translation` | 681 |
| `missing_audio_en_explanation` | 681 |
| `missing_audio_en_translation` | 681 |
| `missing_audio_hi_explanation` | 434 |
| `missing_audio_hi_translation` | 434 |
| `missing_audio_shloka` | 434 |

## Audio Gap Examples

- BG 1.1: missing_audio_en_translation, missing_audio_en_explanation, missing_audio_bn_translation, missing_audio_bn_explanation
- BG 1.2: missing_audio_en_translation, missing_audio_en_explanation, missing_audio_bn_translation, missing_audio_bn_explanation
- BG 1.3: missing_audio_en_translation, missing_audio_en_explanation, missing_audio_bn_translation, missing_audio_bn_explanation
- BG 1.4: missing_audio_en_translation, missing_audio_en_explanation, missing_audio_bn_translation, missing_audio_bn_explanation
- BG 1.5: missing_audio_en_translation, missing_audio_en_explanation, missing_audio_bn_translation, missing_audio_bn_explanation
- BG 1.6: missing_audio_en_translation, missing_audio_en_explanation, missing_audio_bn_translation, missing_audio_bn_explanation
- BG 1.7: missing_audio_en_translation, missing_audio_en_explanation, missing_audio_bn_translation, missing_audio_bn_explanation
- BG 1.8: missing_audio_en_translation, missing_audio_en_explanation, missing_audio_bn_translation, missing_audio_bn_explanation
- BG 1.9: missing_audio_en_translation, missing_audio_en_explanation, missing_audio_bn_translation, missing_audio_bn_explanation
- BG 1.10: missing_audio_en_translation, missing_audio_en_explanation, missing_audio_bn_translation, missing_audio_bn_explanation
- BG 1.11: missing_audio_en_translation, missing_audio_en_explanation, missing_audio_bn_translation, missing_audio_bn_explanation
- BG 1.12: missing_audio_en_translation, missing_audio_en_explanation, missing_audio_bn_translation, missing_audio_bn_explanation
- BG 1.13: missing_audio_en_translation, missing_audio_en_explanation, missing_audio_bn_translation, missing_audio_bn_explanation
- BG 1.14: missing_audio_en_translation, missing_audio_en_explanation, missing_audio_bn_translation, missing_audio_bn_explanation
- BG 1.15: missing_audio_en_translation, missing_audio_en_explanation, missing_audio_bn_translation, missing_audio_bn_explanation
- BG 1.16: missing_audio_en_translation, missing_audio_en_explanation, missing_audio_bn_translation, missing_audio_bn_explanation
- BG 1.17: missing_audio_en_translation, missing_audio_en_explanation, missing_audio_bn_translation, missing_audio_bn_explanation
- BG 1.18: missing_audio_en_translation, missing_audio_en_explanation, missing_audio_bn_translation, missing_audio_bn_explanation
- BG 1.19: missing_audio_en_translation, missing_audio_en_explanation, missing_audio_bn_translation, missing_audio_bn_explanation
- BG 1.20: missing_audio_en_translation, missing_audio_en_explanation, missing_audio_bn_translation, missing_audio_bn_explanation
- BG 1.21: missing_audio_en_translation, missing_audio_en_explanation, missing_audio_bn_translation, missing_audio_bn_explanation
- BG 1.22: missing_audio_en_translation, missing_audio_en_explanation, missing_audio_bn_translation, missing_audio_bn_explanation
- BG 1.23: missing_audio_en_translation, missing_audio_en_explanation, missing_audio_bn_translation, missing_audio_bn_explanation
- BG 1.24: missing_audio_en_translation, missing_audio_en_explanation, missing_audio_bn_translation, missing_audio_bn_explanation
- BG 1.25: missing_audio_en_translation, missing_audio_en_explanation, missing_audio_bn_translation, missing_audio_bn_explanation
- BG 1.26: missing_audio_en_translation, missing_audio_en_explanation, missing_audio_bn_translation, missing_audio_bn_explanation
- BG 1.27: missing_audio_en_translation, missing_audio_en_explanation, missing_audio_bn_translation, missing_audio_bn_explanation
- BG 1.28: missing_audio_en_translation, missing_audio_en_explanation, missing_audio_bn_translation, missing_audio_bn_explanation
- BG 1.29: missing_audio_en_translation, missing_audio_en_explanation, missing_audio_bn_translation, missing_audio_bn_explanation
- BG 1.30: missing_audio_en_translation, missing_audio_en_explanation, missing_audio_bn_translation, missing_audio_bn_explanation
- BG 1.31: missing_audio_en_translation, missing_audio_en_explanation, missing_audio_bn_translation, missing_audio_bn_explanation
- BG 1.32: missing_audio_en_translation, missing_audio_en_explanation, missing_audio_bn_translation, missing_audio_bn_explanation
- BG 1.33: missing_audio_en_translation, missing_audio_en_explanation, missing_audio_bn_translation, missing_audio_bn_explanation
- BG 1.34: missing_audio_en_translation, missing_audio_en_explanation, missing_audio_bn_translation, missing_audio_bn_explanation
- BG 1.35: missing_audio_en_translation, missing_audio_en_explanation, missing_audio_bn_translation, missing_audio_bn_explanation
- BG 1.36: missing_audio_en_translation, missing_audio_en_explanation, missing_audio_bn_translation, missing_audio_bn_explanation
- BG 1.37: missing_audio_en_translation, missing_audio_en_explanation, missing_audio_bn_translation, missing_audio_bn_explanation
- BG 1.38: missing_audio_en_translation, missing_audio_en_explanation, missing_audio_bn_translation, missing_audio_bn_explanation
- BG 1.39: missing_audio_en_translation, missing_audio_en_explanation, missing_audio_bn_translation, missing_audio_bn_explanation
- BG 1.40: missing_audio_en_translation, missing_audio_en_explanation, missing_audio_bn_translation, missing_audio_bn_explanation
- BG 1.41: missing_audio_en_translation, missing_audio_en_explanation, missing_audio_bn_translation, missing_audio_bn_explanation
- BG 1.42: missing_audio_en_translation, missing_audio_en_explanation, missing_audio_bn_translation, missing_audio_bn_explanation
- BG 1.43: missing_audio_en_translation, missing_audio_en_explanation, missing_audio_bn_translation, missing_audio_bn_explanation
- BG 1.44: missing_audio_en_translation, missing_audio_en_explanation, missing_audio_bn_translation, missing_audio_bn_explanation
- BG 1.45: missing_audio_en_translation, missing_audio_en_explanation, missing_audio_bn_translation, missing_audio_bn_explanation
- BG 1.46: missing_audio_en_translation, missing_audio_en_explanation, missing_audio_bn_translation, missing_audio_bn_explanation
- BG 1.47: missing_audio_en_translation, missing_audio_en_explanation, missing_audio_bn_translation, missing_audio_bn_explanation
- BG 2.21: missing_audio_en_translation, missing_audio_en_explanation, missing_audio_bn_translation, missing_audio_bn_explanation
- BG 2.22: missing_audio_en_translation, missing_audio_en_explanation, missing_audio_bn_translation, missing_audio_bn_explanation
- BG 2.23: missing_audio_en_translation, missing_audio_en_explanation, missing_audio_bn_translation, missing_audio_bn_explanation
- BG 2.24: missing_audio_en_translation, missing_audio_en_explanation, missing_audio_bn_translation, missing_audio_bn_explanation
- BG 2.25: missing_audio_en_translation, missing_audio_en_explanation, missing_audio_bn_translation, missing_audio_bn_explanation
- BG 2.26: missing_audio_en_translation, missing_audio_en_explanation, missing_audio_bn_translation, missing_audio_bn_explanation
- BG 2.27: missing_audio_en_translation, missing_audio_en_explanation, missing_audio_bn_translation, missing_audio_bn_explanation
- BG 2.28: missing_audio_en_translation, missing_audio_en_explanation, missing_audio_bn_translation, missing_audio_bn_explanation
- BG 2.29: missing_audio_en_translation, missing_audio_en_explanation, missing_audio_bn_translation, missing_audio_bn_explanation
- BG 2.30: missing_audio_en_translation, missing_audio_en_explanation, missing_audio_bn_translation, missing_audio_bn_explanation
- BG 2.31: missing_audio_en_translation, missing_audio_en_explanation, missing_audio_bn_translation, missing_audio_bn_explanation
- BG 2.32: missing_audio_en_translation, missing_audio_en_explanation, missing_audio_bn_translation, missing_audio_bn_explanation
- BG 2.33: missing_audio_en_translation, missing_audio_en_explanation, missing_audio_bn_translation, missing_audio_bn_explanation
- BG 2.34: missing_audio_en_translation, missing_audio_en_explanation, missing_audio_bn_translation, missing_audio_bn_explanation
- BG 2.35: missing_audio_en_translation, missing_audio_en_explanation, missing_audio_bn_translation, missing_audio_bn_explanation
- BG 2.36: missing_audio_en_translation, missing_audio_en_explanation, missing_audio_bn_translation, missing_audio_bn_explanation
- BG 2.37: missing_audio_en_translation, missing_audio_en_explanation, missing_audio_bn_translation, missing_audio_bn_explanation
- BG 2.38: missing_audio_en_translation, missing_audio_en_explanation, missing_audio_bn_translation, missing_audio_bn_explanation
- BG 2.39: missing_audio_en_translation, missing_audio_en_explanation, missing_audio_bn_translation, missing_audio_bn_explanation
- BG 2.40: missing_audio_en_translation, missing_audio_en_explanation, missing_audio_bn_translation, missing_audio_bn_explanation
- BG 2.41: missing_audio_en_translation, missing_audio_en_explanation, missing_audio_bn_translation, missing_audio_bn_explanation
- BG 2.42: missing_audio_en_translation, missing_audio_en_explanation, missing_audio_bn_translation, missing_audio_bn_explanation
- BG 2.43: missing_audio_en_translation, missing_audio_en_explanation, missing_audio_bn_translation, missing_audio_bn_explanation
- BG 2.44: missing_audio_en_translation, missing_audio_en_explanation, missing_audio_bn_translation, missing_audio_bn_explanation
- BG 2.45: missing_audio_en_translation, missing_audio_en_explanation, missing_audio_bn_translation, missing_audio_bn_explanation
- BG 2.46: missing_audio_en_translation, missing_audio_en_explanation, missing_audio_bn_translation, missing_audio_bn_explanation
- BG 2.47: missing_audio_en_translation, missing_audio_en_explanation, missing_audio_bn_translation, missing_audio_bn_explanation
- BG 2.48: missing_audio_en_translation, missing_audio_en_explanation, missing_audio_bn_translation, missing_audio_bn_explanation
- BG 2.49: missing_audio_en_translation, missing_audio_en_explanation, missing_audio_bn_translation, missing_audio_bn_explanation
- BG 2.50: missing_audio_en_translation, missing_audio_en_explanation, missing_audio_bn_translation, missing_audio_bn_explanation
- BG 2.51: missing_audio_en_translation, missing_audio_en_explanation, missing_audio_bn_translation, missing_audio_bn_explanation
- BG 2.52: missing_audio_en_translation, missing_audio_en_explanation, missing_audio_bn_translation, missing_audio_bn_explanation
- BG 2.53: missing_audio_en_translation, missing_audio_en_explanation, missing_audio_bn_translation, missing_audio_bn_explanation

... 601 more omitted from this summary; see `02-coverage.csv`.

## Off-By-One Suspicion Heuristics

These are structural heuristics only. Semantic off-by-one detection requires canonical source comparison in later steps.

- BG 6.20-21: duplicate hi explanation in adjacent verses
- BG 6.21-22: duplicate hi explanation in adjacent verses
- BG 6.20-21: duplicate bn explanation in adjacent verses
- BG 6.21-22: duplicate bn explanation in adjacent verses

## Rows With Any Note

681 of 701 rows contain at least one note.

- Rows with any text gap: 0
- Rows with any audio gap: 681

See `docs/audit/02-coverage.csv` for the full matrix.

## Stop Point

Per Step 2, no fixes were made. Proceed to Sanskrit/source verification only after review.
