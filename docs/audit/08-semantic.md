# Step 8 - Cross-Language Semantic Consistency

This step aggregates semantic-risk signals from Steps 3-7. It does not auto-fix any text. Items are marked `NEEDS_HUMAN_REVIEW` because reliable semantic correction requires a canonical source and human review.

## Method

- Used Step 3 Sanskrit source/numbering issues as Sanskrit risk signals.
- Used Step 5 Hindi low-overlap/off-by-one heuristics as Hindi risk signals.
- Used Step 6 English low-overlap/off-by-one heuristics as English risk signals.
- Marked Bengali as semantically unverified because Step 7 found no legal canonical Bengali source and many structural issues.
- Added duplicate-explanation risks found in Step 2 around BG 6.20-22.

## Important Limitation

This is a risk triage, not a final Sanskrit-scholar semantic judgment for every verse. A verse in this report means it needs human review before correction; absence from the high-risk section does not prove doctrinal accuracy.

## Summary

| Severity | Count |
| --- | ---: |
| HIGH | 395 |
| MEDIUM | 306 |
| LOW | 0 |
| Total risk items | 701 |

## Category Counts

- hindi: 533
- bengali: 701
- english: 519
- sanskrit: 231
- semantic: 3

## Findings

### [BG 1.3] severity: HIGH

categories: hindi, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- Hindi low overlap with reference: score=0.11
- Bengali devanagari_letter_leakage
- Bengali possible_hindi_transliteration_in_bengali_script

### [BG 1.7] severity: HIGH

categories: english, sanskrit, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.04
- Sanskrit core differs from vedabase beyond punctuation normalization
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 1.12] severity: HIGH

categories: english, sanskrit, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.00
- Sanskrit core differs from vedabase beyond punctuation normalization
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 1.13] severity: HIGH

categories: english, hindi, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.00
- Hindi low overlap with reference: score=0.00
- Bengali devanagari_letter_leakage
- Bengali possible_hindi_transliteration_in_bengali_script

### [BG 1.20] severity: HIGH

categories: hindi, sanskrit, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- Hindi low overlap with reference: score=0.00
- Sanskrit core differs from vedabase beyond punctuation normalization
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 1.21] severity: HIGH

categories: hindi, sanskrit, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- Hindi low overlap with reference: score=0.10
- Sanskrit core differs from vedabase beyond punctuation normalization
- Bengali devanagari_letter_leakage
- Bengali possible_hindi_transliteration_in_bengali_script

### [BG 1.22] severity: HIGH

categories: hindi, sanskrit, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- Hindi low overlap with reference: score=0.06
- Sanskrit core differs from vedabase beyond punctuation normalization
- Bengali devanagari_letter_leakage
- Bengali possible_hindi_transliteration_in_bengali_script

### [BG 1.23] severity: HIGH

categories: bengali

status: NEEDS_HUMAN_REVIEW

notes:
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 1.24] severity: HIGH

categories: hindi, sanskrit, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- Hindi low overlap with reference: score=0.11
- Sanskrit core differs from vedabase beyond punctuation normalization
- Bengali devanagari_letter_leakage
- Bengali possible_hindi_transliteration_in_bengali_script

### [BG 1.25] severity: HIGH

categories: english, hindi, sanskrit, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.04
- Hindi low overlap with reference: score=0.00
- Sanskrit core differs from vedabase beyond punctuation normalization
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 1.26] severity: HIGH

categories: hindi, sanskrit, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- Hindi low overlap with reference: score=0.00
- Sanskrit core differs from vedabase beyond punctuation normalization
- Bengali devanagari_letter_leakage
- Bengali possible_hindi_transliteration_in_bengali_script

### [BG 1.27] severity: HIGH

categories: english, hindi, sanskrit, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.04
- Hindi low overlap with reference: score=0.00
- Sanskrit core differs from vedabase beyond punctuation normalization
- Bengali devanagari_letter_leakage
- Bengali possible_hindi_transliteration_in_bengali_script

### [BG 1.30] severity: HIGH

categories: sanskrit, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- Sanskrit core differs from vedabase beyond punctuation normalization
- Bengali devanagari_letter_leakage
- Bengali possible_hindi_transliteration_in_bengali_script

### [BG 1.32] severity: HIGH

categories: english, sanskrit, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.02
- Sanskrit core differs from vedabase beyond punctuation normalization
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 1.33] severity: HIGH

categories: english, sanskrit, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.00
- Sanskrit core differs from vedabase beyond punctuation normalization
- Bengali devanagari_letter_leakage
- Bengali possible_hindi_transliteration_in_bengali_script

### [BG 1.34] severity: HIGH

categories: hindi, sanskrit, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- Hindi low overlap with reference: score=0.00
- Sanskrit core differs from vedabase beyond punctuation normalization
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 1.35] severity: HIGH

categories: english, sanskrit, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.04
- Sanskrit core differs from vedabase beyond punctuation normalization
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 1.36] severity: HIGH

categories: english, sanskrit, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.00
- Sanskrit core differs from vedabase beyond punctuation normalization
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 1.37] severity: HIGH

categories: english, sanskrit, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- Possible English off-by-one: possible off-by-one: current=0.00, prev=0.20, next=0.00; vedabase combines verses 37-38
- Sanskrit core differs from vedabase beyond punctuation normalization
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 1.40] severity: HIGH

categories: english, sanskrit, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.00
- Sanskrit core differs from vedabase beyond punctuation normalization
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 1.41] severity: HIGH

categories: english, sanskrit, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.00
- Sanskrit core differs from vedabase beyond punctuation normalization
- Bengali devanagari_letter_leakage
- Bengali possible_hindi_transliteration_in_bengali_script

### [BG 1.42] severity: HIGH

categories: english, sanskrit, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.00
- Sanskrit core differs from vedabase beyond punctuation normalization
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 1.43] severity: HIGH

categories: english, sanskrit, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.00
- Sanskrit core differs from vedabase beyond punctuation normalization
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 1.45] severity: HIGH

categories: english, sanskrit, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.00
- Sanskrit core differs from vedabase beyond punctuation normalization
- Bengali devanagari_letter_leakage
- Bengali possible_hindi_transliteration_in_bengali_script

### [BG 1.46] severity: HIGH

categories: english, hindi, sanskrit, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- Possible English off-by-one: possible off-by-one: current=0.00, prev=0.20, next=0.00
- Hindi low overlap with reference: score=0.02
- Sanskrit core differs from vedabase beyond punctuation normalization
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 1.47] severity: HIGH

categories: english, hindi, sanskrit, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English source issue: no_source_slug_found_in_chapter_index (vedabase chapter index ends at BG 1.46; stored verse numbering differs from source)
- Hindi low overlap with reference: score=0.00
- Sanskrit source/numbering issue: no_source_slug_found_in_chapter_index (vedabase chapter index ends at BG 1.46; stored BG 1.47 appears to correspond to vedabase BG 1.46 closing shloka)
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 2.1] severity: HIGH

categories: english, hindi, sanskrit, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.09
- Hindi low overlap with reference: score=0.00
- Sanskrit core differs from vedabase beyond punctuation normalization
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 2.2] severity: HIGH

categories: english, hindi, sanskrit, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.03
- Hindi low overlap with reference: score=0.00
- Sanskrit core differs from vedabase beyond punctuation normalization
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 2.3] severity: HIGH

categories: hindi, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- Hindi low overlap with reference: score=0.09
- Bengali devanagari_letter_leakage
- Bengali possible_hindi_transliteration_in_bengali_script

### [BG 2.4] severity: HIGH

categories: hindi, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- Hindi low overlap with reference: score=0.04
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 2.5] severity: HIGH

categories: english, hindi, sanskrit, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.02
- Hindi low overlap with reference: score=0.00
- Sanskrit core differs from vedabase beyond punctuation normalization
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 2.6] severity: HIGH

categories: english, sanskrit, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.03
- Sanskrit core differs from vedabase beyond punctuation normalization
- Bengali devanagari_letter_leakage
- Bengali possible_hindi_transliteration_in_bengali_script

### [BG 2.8] severity: HIGH

categories: english, hindi, sanskrit, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.06
- Hindi low overlap with reference: score=0.03
- Sanskrit core differs from vedabase beyond punctuation normalization
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 2.9] severity: HIGH

categories: hindi, sanskrit, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- Hindi low overlap with reference: score=0.09
- Sanskrit core differs from vedabase beyond punctuation normalization
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 2.11] severity: HIGH

categories: hindi, sanskrit, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- Hindi low overlap with reference: score=0.03
- Sanskrit core differs from vedabase beyond punctuation normalization
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 2.12] severity: HIGH

categories: english, hindi, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.04
- Hindi low overlap with reference: score=0.06
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 2.13] severity: HIGH

categories: bengali

status: NEEDS_HUMAN_REVIEW

notes:
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 2.16] severity: HIGH

categories: english, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.09
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 2.18] severity: HIGH

categories: bengali

status: NEEDS_HUMAN_REVIEW

notes:
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 2.20] severity: HIGH

categories: english, hindi, sanskrit, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.06
- Hindi low overlap with reference: score=0.11
- Sanskrit core differs from vedabase beyond punctuation normalization
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 2.22] severity: HIGH

categories: english, hindi, sanskrit, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.04
- Hindi low overlap with reference: score=0.00
- Sanskrit core differs from vedabase beyond punctuation normalization
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 2.23] severity: HIGH

categories: english, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.00
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 2.25] severity: HIGH

categories: hindi, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- Hindi low overlap with reference: score=0.05
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 2.26] severity: HIGH

categories: english, hindi, sanskrit, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.00
- Hindi low overlap with reference: score=0.09
- Sanskrit core differs from vedabase beyond punctuation normalization
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 2.27] severity: HIGH

categories: english, hindi, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.04
- Hindi low overlap with reference: score=0.07
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 2.28] severity: HIGH

categories: hindi, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- Hindi low overlap with reference: score=0.00
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 2.31] severity: HIGH

categories: english, hindi, sanskrit, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.00
- Hindi low overlap with reference: score=0.04
- Sanskrit core differs from vedabase beyond punctuation normalization
- Bengali devanagari_letter_leakage
- Bengali possible_hindi_transliteration_in_bengali_script

### [BG 2.32] severity: HIGH

categories: english, hindi, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.04
- Hindi low overlap with reference: score=0.04
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 2.33] severity: HIGH

categories: english, hindi, sanskrit, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.00
- Hindi low overlap with reference: score=0.00
- Sanskrit core differs from vedabase beyond punctuation normalization
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 2.36] severity: HIGH

categories: hindi, sanskrit, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- Hindi low overlap with reference: score=0.05
- Sanskrit core differs from vedabase beyond punctuation normalization
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 2.37] severity: HIGH

categories: english, hindi, sanskrit, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.04
- Hindi low overlap with reference: score=0.00
- Sanskrit core differs from vedabase beyond punctuation normalization
- Bengali devanagari_letter_leakage
- Bengali possible_hindi_transliteration_in_bengali_script

### [BG 2.38] severity: HIGH

categories: english, hindi, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.08
- Hindi low overlap with reference: score=0.05
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 2.39] severity: HIGH

categories: english, hindi, sanskrit, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.00
- Hindi low overlap with reference: score=0.00
- Sanskrit core differs from vedabase beyond punctuation normalization
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 2.40] severity: HIGH

categories: english, hindi, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.08
- Hindi low overlap with reference: score=0.00
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 2.41] severity: HIGH

categories: english, hindi, sanskrit, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.04
- Hindi low overlap with reference: score=0.10
- Sanskrit core differs from vedabase beyond punctuation normalization
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 2.42] severity: HIGH

categories: english, hindi, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.09
- Hindi low overlap with reference: score=0.00
- Bengali devanagari_letter_leakage
- Bengali possible_hindi_transliteration_in_bengali_script

### [BG 2.44] severity: HIGH

categories: english, hindi, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.03
- Hindi low overlap with reference: score=0.07
- Bengali devanagari_letter_leakage
- Bengali possible_hindi_transliteration_in_bengali_script

### [BG 2.46] severity: HIGH

categories: english, sanskrit, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.03
- Sanskrit core differs from vedabase beyond punctuation normalization
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 2.48] severity: HIGH

categories: english, hindi, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.06
- Hindi low overlap with reference: score=0.00
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 2.49] severity: HIGH

categories: english, hindi, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.00
- Hindi low overlap with reference: score=0.00
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 2.50] severity: HIGH

categories: english, hindi, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.08
- Hindi low overlap with reference: score=0.04
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 2.52] severity: HIGH

categories: hindi, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- Hindi low overlap with reference: score=0.00
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 2.53] severity: HIGH

categories: english, hindi, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.04
- Hindi low overlap with reference: score=0.00
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 2.55] severity: HIGH

categories: hindi, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- Hindi low overlap with reference: score=0.10
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 2.56] severity: HIGH

categories: hindi, sanskrit, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- Hindi low overlap with reference: score=0.03
- Sanskrit core differs from vedabase beyond punctuation normalization
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 2.57] severity: HIGH

categories: english, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.00
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 2.59] severity: HIGH

categories: english, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.00
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 2.60] severity: HIGH

categories: hindi, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- Hindi low overlap with reference: score=0.12
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 2.61] severity: HIGH

categories: english, hindi, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.00
- Hindi low overlap with reference: score=0.00
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 2.63] severity: HIGH

categories: english, hindi, sanskrit, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.00
- Hindi low overlap with reference: score=0.03
- Sanskrit core differs from vedabase beyond punctuation normalization
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 2.64] severity: HIGH

categories: english, hindi, sanskrit, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.00
- Hindi low overlap with reference: score=0.00
- Sanskrit core differs from vedabase beyond punctuation normalization
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 2.65] severity: HIGH

categories: english, hindi, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.00
- Hindi low overlap with reference: score=0.12
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 2.67] severity: HIGH

categories: hindi, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- Hindi low overlap with reference: score=0.07
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 2.70] severity: HIGH

categories: english, hindi, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.09
- Hindi low overlap with reference: score=0.04
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 3.3] severity: HIGH

categories: english, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.00
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 3.4] severity: HIGH

categories: english, hindi, sanskrit, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.00
- Hindi low overlap with reference: score=0.00
- Sanskrit core differs from vedabase beyond punctuation normalization
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 3.5] severity: HIGH

categories: english, hindi, sanskrit, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.07
- Hindi low overlap with reference: score=0.08
- Sanskrit core differs from vedabase beyond punctuation normalization
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 3.6] severity: HIGH

categories: english, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.05
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 3.8] severity: HIGH

categories: english, hindi, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.00
- Hindi low overlap with reference: score=0.04
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 3.9] severity: HIGH

categories: english, hindi, sanskrit, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.06
- Hindi low overlap with reference: score=0.03
- Sanskrit core differs from vedabase beyond punctuation normalization
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 3.13] severity: HIGH

categories: english, hindi, sanskrit, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.00
- Hindi low overlap with reference: score=0.10
- Sanskrit core differs from vedabase beyond punctuation normalization
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 3.16] severity: HIGH

categories: english, hindi, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.10
- Hindi low overlap with reference: score=0.08
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 3.21] severity: HIGH

categories: english, hindi, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.06
- Hindi low overlap with reference: score=0.08
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 3.23] severity: HIGH

categories: english, hindi, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.05
- Hindi low overlap with reference: score=0.00
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 3.25] severity: HIGH

categories: english, hindi, sanskrit, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.04
- Hindi low overlap with reference: score=0.06
- Sanskrit core differs from vedabase beyond punctuation normalization
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 3.26] severity: HIGH

categories: hindi, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- Hindi low overlap with reference: score=0.05
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 3.28] severity: HIGH

categories: english, hindi, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.03
- Hindi low overlap with reference: score=0.08
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 3.31] severity: HIGH

categories: english, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.00
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 3.32] severity: HIGH

categories: hindi, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- Hindi low overlap with reference: score=0.04
- Bengali devanagari_letter_leakage
- Bengali possible_hindi_transliteration_in_bengali_script

### [BG 3.33] severity: HIGH

categories: english, hindi, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.05
- Hindi low overlap with reference: score=0.10
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 3.34] severity: HIGH

categories: english, hindi, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.04
- Hindi low overlap with reference: score=0.00
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 3.36] severity: HIGH

categories: english, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.00
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 3.37] severity: HIGH

categories: english, hindi, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.03
- Hindi low overlap with reference: score=0.08
- Bengali devanagari_letter_leakage
- Bengali possible_hindi_transliteration_in_bengali_script

### [BG 3.38] severity: HIGH

categories: sanskrit, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- Sanskrit core differs from vedabase beyond punctuation normalization
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 3.40] severity: HIGH

categories: bengali

status: NEEDS_HUMAN_REVIEW

notes:
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 3.42] severity: HIGH

categories: hindi, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- Hindi low overlap with reference: score=0.00
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 3.43] severity: HIGH

categories: english, hindi, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.03
- Hindi low overlap with reference: score=0.03
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 4.2] severity: HIGH

categories: english, hindi, sanskrit, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.00
- Hindi low overlap with reference: score=0.00
- Sanskrit core differs from vedabase beyond punctuation normalization
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 4.3] severity: HIGH

categories: english, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.07
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 4.6] severity: HIGH

categories: sanskrit, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- Sanskrit core differs from vedabase beyond punctuation normalization
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 4.7] severity: HIGH

categories: sanskrit, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- Sanskrit core differs from vedabase beyond punctuation normalization
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 4.8] severity: HIGH

categories: english, hindi, sanskrit, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.00
- Hindi low overlap with reference: score=0.00
- Sanskrit core differs from vedabase beyond punctuation normalization
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 4.10] severity: HIGH

categories: hindi, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- Hindi low overlap with reference: score=0.08
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 4.13] severity: HIGH

categories: english, hindi, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.09
- Hindi low overlap with reference: score=0.00
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 4.14] severity: HIGH

categories: english, hindi, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.07
- Hindi low overlap with reference: score=0.05
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 4.17] severity: HIGH

categories: english, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.04
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 4.18] severity: HIGH

categories: hindi, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- Hindi low overlap with reference: score=0.09
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 4.20] severity: HIGH

categories: english, hindi, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.04
- Hindi low overlap with reference: score=0.09
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 4.22] severity: HIGH

categories: english, hindi, sanskrit, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.03
- Hindi low overlap with reference: score=0.06
- Sanskrit core differs from vedabase beyond punctuation normalization
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 4.24] severity: HIGH

categories: english, hindi, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.00
- Hindi low overlap with reference: score=0.09
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 4.27] severity: HIGH

categories: hindi, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- Hindi low overlap with reference: score=0.00
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 4.28] severity: HIGH

categories: english, hindi, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.00
- Hindi low overlap with reference: score=0.04
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 4.29] severity: HIGH

categories: hindi, sanskrit, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- Hindi low overlap with reference: score=0.05
- Sanskrit core differs from vedabase beyond punctuation normalization
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 4.33] severity: HIGH

categories: english, hindi, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.00
- Hindi low overlap with reference: score=0.05
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 4.35] severity: HIGH

categories: english, hindi, sanskrit, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.00
- Hindi low overlap with reference: score=0.00
- Sanskrit core differs from vedabase beyond punctuation normalization
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 4.37] severity: HIGH

categories: hindi, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- Hindi low overlap with reference: score=0.12
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 4.38] severity: HIGH

categories: english, hindi, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.03
- Hindi low overlap with reference: score=0.00
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 4.39] severity: HIGH

categories: english, hindi, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.00
- Hindi low overlap with reference: score=0.05
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 4.40] severity: HIGH

categories: english, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.07
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 4.41] severity: HIGH

categories: hindi, sanskrit, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- Hindi low overlap with reference: score=0.00
- Sanskrit core differs from vedabase beyond punctuation normalization
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 4.42] severity: HIGH

categories: english, hindi, sanskrit, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.04
- Hindi low overlap with reference: score=0.00
- Sanskrit core differs from vedabase beyond punctuation normalization
- Bengali devanagari_letter_leakage
- Bengali possible_hindi_transliteration_in_bengali_script

### [BG 5.2] severity: HIGH

categories: sanskrit, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- Sanskrit core differs from vedabase beyond punctuation normalization
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 5.3] severity: HIGH

categories: sanskrit, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- Sanskrit core differs from vedabase beyond punctuation normalization
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 5.4] severity: HIGH

categories: english, hindi, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.00
- Hindi low overlap with reference: score=0.07
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 5.6] severity: HIGH

categories: english, hindi, sanskrit, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.00
- Hindi low overlap with reference: score=0.11
- Sanskrit core differs from vedabase beyond punctuation normalization
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 5.7] severity: HIGH

categories: english, hindi, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.00
- Hindi low overlap with reference: score=0.10
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 5.11] severity: HIGH

categories: english, hindi, sanskrit, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.00
- Hindi low overlap with reference: score=0.12
- Sanskrit core differs from vedabase beyond punctuation normalization
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 5.12] severity: HIGH

categories: english, hindi, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.03
- Hindi low overlap with reference: score=0.05
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 5.15] severity: HIGH

categories: english, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.00
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 5.16] severity: HIGH

categories: english, hindi, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.00
- Hindi low overlap with reference: score=0.00
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 5.20] severity: HIGH

categories: english, hindi, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.04
- Hindi low overlap with reference: score=0.04
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 5.22] severity: HIGH

categories: hindi, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- Hindi low overlap with reference: score=0.00
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 5.23] severity: HIGH

categories: english, hindi, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.09
- Hindi low overlap with reference: score=0.00
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 5.24] severity: HIGH

categories: english, hindi, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.04
- Hindi low overlap with reference: score=0.04
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 5.25] severity: HIGH

categories: english, hindi, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.06
- Hindi low overlap with reference: score=0.11
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 5.26] severity: HIGH

categories: english, hindi, sanskrit, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.07
- Hindi low overlap with reference: score=0.00
- Sanskrit core differs from vedabase beyond punctuation normalization
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 5.28] severity: HIGH

categories: bengali

status: NEEDS_HUMAN_REVIEW

notes:
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 5.29] severity: HIGH

categories: english, hindi, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.09
- Hindi low overlap with reference: score=0.04
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 6.1] severity: HIGH

categories: english, hindi, sanskrit, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.08
- Hindi low overlap with reference: score=0.00
- Sanskrit core differs from vedabase beyond punctuation normalization
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 6.2] severity: HIGH

categories: english, sanskrit, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.00
- Sanskrit core differs from vedabase beyond punctuation normalization
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 6.3] severity: HIGH

categories: hindi, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- Hindi low overlap with reference: score=0.03
- Bengali devanagari_letter_leakage
- Bengali possible_hindi_transliteration_in_bengali_script

### [BG 6.4] severity: HIGH

categories: english, sanskrit, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.09
- Sanskrit core differs from vedabase beyond punctuation normalization
- Bengali devanagari_letter_leakage
- Bengali possible_hindi_transliteration_in_bengali_script

### [BG 6.5] severity: HIGH

categories: english, sanskrit, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.00
- Sanskrit core differs from vedabase beyond punctuation normalization
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 6.6] severity: HIGH

categories: english, hindi, sanskrit, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.00
- Hindi low overlap with reference: score=0.03
- Sanskrit core differs from vedabase beyond punctuation normalization
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 6.7] severity: HIGH

categories: english, hindi, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.04
- Hindi low overlap with reference: score=0.00
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 6.8] severity: HIGH

categories: english, hindi, sanskrit, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.02
- Hindi low overlap with reference: score=0.04
- Sanskrit core differs from vedabase beyond punctuation normalization
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 6.9] severity: HIGH

categories: english, hindi, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.00
- Hindi low overlap with reference: score=0.00
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 6.11] severity: HIGH

categories: english, hindi, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.08
- Hindi low overlap with reference: score=0.00
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 6.12] severity: HIGH

categories: english, hindi, sanskrit, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.00
- Hindi low overlap with reference: score=0.00
- Sanskrit core differs from vedabase beyond punctuation normalization
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 6.13] severity: HIGH

categories: english, hindi, sanskrit, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.06
- Hindi low overlap with reference: score=0.03
- Sanskrit core differs from vedabase beyond punctuation normalization
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 6.14] severity: HIGH

categories: english, hindi, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.00
- Hindi low overlap with reference: score=0.00
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 6.20] severity: HIGH

categories: english, sanskrit, bengali, semantic

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.05
- Sanskrit core differs from vedabase beyond punctuation normalization
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali no_bengali_script
- Adjacent duplicate Hindi/Bengali explanation risk around BG 6.20-22

### [BG 6.21] severity: HIGH

categories: english, bengali, semantic

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.01
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali no_bengali_script
- Adjacent duplicate Hindi/Bengali explanation risk around BG 6.20-22

### [BG 6.22] severity: HIGH

categories: english, bengali, semantic

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.05
- Bengali devanagari_letter_leakage
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali no_bengali_script
- Adjacent duplicate Hindi/Bengali explanation risk around BG 6.20-22

### [BG 6.26] severity: HIGH

categories: hindi, sanskrit, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- Hindi low overlap with reference: score=0.05
- Sanskrit core differs from vedabase beyond punctuation normalization
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 6.27] severity: HIGH

categories: english, hindi, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.03
- Hindi low overlap with reference: score=0.08
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 6.28] severity: HIGH

categories: english, hindi, sanskrit, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.00
- Hindi low overlap with reference: score=0.05
- Sanskrit core differs from vedabase beyond punctuation normalization
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 6.30] severity: HIGH

categories: bengali

status: NEEDS_HUMAN_REVIEW

notes:
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 6.31] severity: HIGH

categories: english, hindi, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.00
- Hindi low overlap with reference: score=0.00
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 6.33] severity: HIGH

categories: english, hindi, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.08
- Hindi low overlap with reference: score=0.00
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 6.34] severity: HIGH

categories: english, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.10
- Bengali devanagari_letter_leakage
- Bengali possible_hindi_transliteration_in_bengali_script

### [BG 6.35] severity: HIGH

categories: english, hindi, sanskrit, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.00
- Hindi low overlap with reference: score=0.03
- Sanskrit core differs from vedabase beyond punctuation normalization
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 6.37] severity: HIGH

categories: english, hindi, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.03
- Hindi low overlap with reference: score=0.00
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 6.40] severity: HIGH

categories: english, hindi, sanskrit, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.06
- Hindi low overlap with reference: score=0.03
- Sanskrit core differs from vedabase beyond punctuation normalization
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 6.41] severity: HIGH

categories: english, hindi, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.00
- Hindi low overlap with reference: score=0.03
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 6.43] severity: HIGH

categories: english, hindi, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.00
- Hindi low overlap with reference: score=0.00
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 6.44] severity: HIGH

categories: english, hindi, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.00
- Hindi low overlap with reference: score=0.00
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 6.47] severity: HIGH

categories: english, hindi, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.00
- Hindi low overlap with reference: score=0.00
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 7.2] severity: HIGH

categories: hindi, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- Hindi low overlap with reference: score=0.00
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 7.4] severity: HIGH

categories: hindi, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- Hindi low overlap with reference: score=0.03
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 7.5] severity: HIGH

categories: english, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.04
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 7.6] severity: HIGH

categories: english, hindi, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.00
- Hindi low overlap with reference: score=0.10
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 7.8] severity: HIGH

categories: english, hindi, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.03
- Hindi low overlap with reference: score=0.04
- Bengali devanagari_letter_leakage
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali no_bengali_script

### [BG 7.10] severity: HIGH

categories: hindi, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- Hindi low overlap with reference: score=0.00
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 7.11] severity: HIGH

categories: hindi, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- Hindi low overlap with reference: score=0.00
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 7.12] severity: HIGH

categories: english, hindi, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.03
- Hindi low overlap with reference: score=0.00
- Bengali devanagari_letter_leakage
- Bengali possible_hindi_transliteration_in_bengali_script

### [BG 7.14] severity: HIGH

categories: english, hindi, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.08
- Hindi low overlap with reference: score=0.04
- Bengali devanagari_letter_leakage
- Bengali possible_hindi_transliteration_in_bengali_script

### [BG 7.15] severity: HIGH

categories: english, hindi, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.04
- Hindi low overlap with reference: score=0.00
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 7.16] severity: HIGH

categories: english, hindi, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.07
- Hindi low overlap with reference: score=0.00
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage

### [BG 7.19] severity: HIGH

categories: english, hindi, bengali

status: NEEDS_HUMAN_REVIEW

notes:
- English low overlap with vedabase: score=0.07
- Hindi low overlap with reference: score=0.00
- Bengali possible_hindi_transliteration_in_bengali_script
- Bengali devanagari_letter_leakage


521 additional semantic-risk items omitted from expanded output. Full details are available in `08-semantic-results.json`.


## Stop Point

No text was changed. Step 9 can proceed after review.
