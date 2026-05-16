# Content Accuracy Audit Summary

Step 10 checkpoint summary. No content or audio files have been fixed or regenerated.

## Expected Vs Found

| Item | Found | Expected |
| --- | ---: | ---: |
| Verse records | 701 | 701 |
| Sanskrit text fields | 701 | 701 |
| Hindi text fields | 701 | 701 |
| English text fields | 701 | 701 |
| Bengali text fields | 701 | 701 |
| Sanskrit audio sets | 267 | 701 |
| Hindi audio sets | 267 | 701 |
| English audio sets | 20 | 701 |
| Bengali audio sets | 20 | 701 |

## Defect Counts By Category

| Category | HIGH | MEDIUM | LOW / Other | Notes |
| --- | ---: | ---: | ---: | --- |
| Sanskrit | 230 | 313 | 157 | 700/701 compared; 1 numbering/source issue remains. |
| Transliteration | 0 | 667 | 32 | Compared against vedabase verse text, no dependency added. |
| Hindi | 0 | 533 | 156 | Compared against accessible Hindi reference, not vedabase Hindi. |
| English | 3 | 515 | 166 | Compared against vedabase with short reference phrases only. |
| Bengali | 426 | 1364 | 28 | Bengali is UNVERIFIED_SOURCE pending canonical source. |
| Semantic risk | 395 | 306 | 0 | Aggregated risk triage; all require human review. |
| Audio | 4026 missing | 5 suspicious | 0 | Voice/content mapping cannot be proven from current metadata. |

## Top Critical Review Items

| Item | Severity | Category | Why it matters |
| --- | --- | --- | --- |
| BG 1.47 | HIGH | sanskrit/english | Stored chapter 1 has verse 47, while vedabase source index ends at 1.46; stored 1.47 appears to correspond to vedabase 1.46. |
| BG 1.46 | HIGH | english | English translation appears one verse behind relative to vedabase 1.46. |
| BG 1.37 | HIGH | english | Possible off-by-one against combined vedabase 1.37-38 source. |
| BG 6.20-22 | HIGH | semantic | Adjacent duplicate Hindi/Bengali explanation risk from Step 2. |
| Bengali column | HIGH | bengali | Marked UNVERIFIED_SOURCE; 1364 fields look like Hindi transliteration in Bengali script. |
| Audio metadata | HIGH | audio | No generation metadata exists for voice id/source hash/transcript, so filename-to-content and voice consistency cannot be proven. |
| Audio coverage | HIGH | audio | Only 267/701 Sanskrit and Hindi audio sets exist; English/Bengali only 20/701 each. |
| BG 5.27 hi explanation audio | MEDIUM | audio | Estimated duration 1.41s, suspiciously short. |
| BG 6.20-22 hi explanation audio | MEDIUM | audio | Estimated duration 1.41s on duplicate-risk explanation files. |
| Sanskrit suffix convention | MEDIUM | sanskrit | 0 exact matches against vedabase due suffix/punctuation conventions; review before normalization. |
| Transliteration style | MEDIUM | transliteration | 699/700 compared transliterations differ from vedabase style. |
| Hindi source alignment | MEDIUM | hindi | 533 medium low-overlap findings against Hindi reference; no strong off-by-one detected. |
| English source alignment | MEDIUM | english | 515 medium low-overlap findings against vedabase; likely style/source differences plus some true risks. |
| Sanskrit pronunciation path | MEDIUM | audio | No Sanskrit phoneticization layer found for future TTS generation. |
| Chapter 13 count | LOW | coverage | Dataset uses 35 verses, matching one accepted edition variant but should be kept explicit. |
| Bengali Devanagari letter leakage | HIGH | bengali | 426 Bengali fields contain actual Devanagari letters beyond danda punctuation. |
| Bengali source decision | HIGH | bengali | Need choose legal canonical Bengali source before semantic fixes or audio regeneration. |
| Combined source verses | MEDIUM | source mapping | 73 verses come from combined vedabase pages; scripts must preserve mapping. |
| Missing audio files | HIGH | audio | 4026 expected public MP3 files are missing. |
| Existing audio short files | MEDIUM | audio | 5 existing files are suspiciously short by content-length estimate. |

## Proposed Fix Order

1. Resolve source-of-truth decisions before editing: especially Chapter 1 verse numbering, Bengali canonical source, and whether to align Sanskrit punctuation to vedabase or preserve current app convention.
2. Fix HIGH text identity issues first: Chapter 1 numbering/off-by-one candidates, BG 6.20-22 duplicate explanation risk, and actual Devanagari leakage in Bengali fields.
3. Decide whether Bengali should be temporarily hidden, marked beta, or replaced from a legal canonical source before any Bengali audio generation.
4. Normalize Sanskrit/transliteration only after choosing display conventions; do not mechanically replace all 700 differences.
5. Re-run Steps 3-8 for any changed chapter before touching audio.
6. Regenerate audio only for text that changed and only after explicit approval, starting with verified Sanskrit/Hindi files.
7. Add generation metadata for future audio: source text hash, voice id, model id, language code, generated_at, and duration.

## Reports Produced

- `docs/audit/01-data-map.md`
- `docs/audit/02-coverage.csv`
- `docs/audit/02-gaps.md`
- `docs/audit/03-sanskrit.md`
- `docs/audit/04-transliteration.md`
- `docs/audit/05-hindi.md`
- `docs/audit/06-english.md`
- `docs/audit/07-bengali.md`
- `docs/audit/08-semantic.md`
- `docs/audit/09-audio.md`

Machine-readable detail JSON files are also present for Steps 3-9.

## Required Checkpoint

Stop here. Fixes and any ElevenLabs/audio regeneration require approval before proceeding to Step 11.
