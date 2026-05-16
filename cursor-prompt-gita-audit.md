# Cursor Prompt — Bhagavad Gita App Translation & Audio Accuracy Audit

> Paste everything below this line into Cursor (Composer / Agent mode preferred so it can read across the whole repo).

---

## ROLE

You are a senior engineer + Sanskrit-literate auditor working on a multilingual Bhagavad Gita app. Your job is not to ship features — it is to **find and fix correctness defects** in the content layer (text + audio) without losing or corrupting any existing data.

## CONTEXT

The app presents the Bhagavad Gita in four content modalities per verse:

1. **Sanskrit** — original Devanagari shloka
2. **Hindi** translation
3. **English** translation
4. **Bengali** translation
5. **Audio** — generated via ElevenLabs (per language, per verse)

There are reports of three classes of defects:

- **Wrong translations** — a Hindi/English/Bengali rendering doesn't match the meaning of the Sanskrit it's paired with.
- **Skipped shlokas** — verses missing entirely or paired with the *next* verse's translation (off-by-one).
- **Audio drift** — ElevenLabs audio doesn't match the displayed text, is truncated, uses the wrong language voice, or mispronounces Sanskrit.

**Source of truth:** [vedabase.io](https://vedabase.io/en/library/bg/) — *Bhagavad-gītā As It Is* by A.C. Bhaktivedanta Swami Prabhupada (ISKCON edition). When in doubt, this is the canonical reference. For Bengali, prefer the ISKCON Bengali edition; if unavailable, flag and use Swami Jagadishwarananda's translation.

**Expected scope:** 18 chapters, ~700 verses total. Approximate per-chapter counts (verify against vedabase.io — Chapter 13 varies between 34 and 35 across editions):

| Ch | Verses | Ch | Verses | Ch | Verses |
|----|--------|----|--------|----|--------|
| 1  | 47     | 7  | 30     | 13 | 34 or 35 |
| 2  | 72     | 8  | 28     | 14 | 27     |
| 3  | 43     | 9  | 34     | 15 | 20     |
| 4  | 42     | 10 | 42     | 16 | 24     |
| 5  | 29     | 11 | 55     | 17 | 28     |
| 6  | 47     | 12 | 20     | 18 | 78     |

Combined verses (e.g., 1.16–18 shown as a single block) are acceptable **only if** the source treats them the same way. Otherwise treat as a defect.

---

## MISSION

Run a top-to-bottom correctness audit, produce a human-readable report, and only then begin fixes — one chapter at a time, with diffs I can review.

## NON-NEGOTIABLE RULES

1. **Do not delete or overwrite any content before backing it up.** First commit on a new branch must be the untouched baseline.
2. **Work on a new branch:** `audit/content-accuracy-YYYYMMDD`.
3. **Do not invent translations.** If you're unsure about a verse, mark it `NEEDS_HUMAN_REVIEW` and move on. Hallucinated Sanskrit or fabricated Bengali is worse than a known gap.
4. **Preserve formatting.** Whatever pipeline renders Devanagari (fonts, line breaks, danda `।`/`॥` marks) must keep working.
5. **No mass auto-replacement.** Every text or audio mutation is a separate, reviewable change with a before/after diff.
6. **ElevenLabs costs money.** Never re-generate audio in bulk. Only regenerate the specific files flagged as defective, and only after the corresponding text fix is approved.
7. **Ask before destructive ops** (DB migrations, schema changes, deleting audio files).

---

## STEP 1 — DISCOVER THE DATA LAYER

The storage mechanism is unknown. Find it before changing anything.

1. Scan the repo for shloka data. Look for:
   - JSON / YAML / TS files with keys like `sanskrit`, `hindi`, `english`, `bengali`, `chapter`, `verse`, `shloka`, `sloka`.
   - DB clients: Supabase, Firebase, Prisma, Mongo, Postgres, MySQL, Sanity, Strapi, Contentful.
   - Audio file references (`.mp3`, `.wav`, ElevenLabs SDK calls, `voice_id`, `xi-api-key`).
   - Localization frameworks (i18next, next-intl, react-intl) — these may be hiding translations.
2. Produce a file `docs/audit/01-data-map.md` containing:
   - Where each language's text lives (file path, table, collection, API).
   - The schema/shape of a single verse record (paste a real example).
   - Where audio files live (path, bucket, CDN, naming convention).
   - Where the ElevenLabs voice IDs and language mappings are configured.
3. **Stop and show me this map before proceeding.** I'll confirm before you go further.

---

## STEP 2 — INVENTORY & GAP REPORT

Using the data map from Step 1, build a coverage matrix.

1. For every (chapter, verse) pair expected from the table above, check whether the following exist and are non-empty:
   - Sanskrit
   - Hindi
   - English
   - Bengali
   - Audio: Sanskrit
   - Audio: Hindi
   - Audio: English
   - Audio: Bengali (if your app generates Bengali audio — confirm scope)
2. Output `docs/audit/02-coverage.csv` with columns:
   `chapter,verse,has_sanskrit,has_hindi,has_english,has_bengali,has_audio_sa,has_audio_hi,has_audio_en,has_audio_bn,notes`
3. Output `docs/audit/02-gaps.md` summarizing:
   - Verses missing entirely.
   - Off-by-one suspicions (e.g., verse 2.13 holds 2.14's translation — detect by checking if the *next* verse looks empty/duplicated).
   - Chapters whose verse count doesn't match the expected total.
4. **Do not fix anything yet.** Just report.

---

## STEP 3 — SANSKRIT VERIFICATION

For every Sanskrit shloka in the dataset:

1. Compare against `https://vedabase.io/en/library/bg/{chapter}/{verse}/`.
2. Check for:
   - Devanagari character accuracy (wrong vowel signs, missing anusvāra `ं` / visarga `ः`, broken conjuncts).
   - Sandhi mistakes.
   - Missing or duplicated danda marks (`।` for half-shloka, `॥` for full).
   - Verse-number suffix (e.g., `॥ १ ॥` at end) — should be consistent across the dataset.
   - Encoding issues: mojibake, mixed Unicode normalization (NFC vs NFD).
3. Write findings to `docs/audit/03-sanskrit.md`. Use this format per defect:
   ```
   [BG 2.13] severity: HIGH
   current: <paste current value>
   expected: <paste vedabase value>
   diff: <what's different in one line>
   ```
4. Note: vedabase.io may use slightly different paragraph breaks; line breaks aren't defects, but character-level differences are.

---

## STEP 4 — TRANSLITERATION CHECK (IF PRESENT)

If the app stores an IAST / ITRANS / Harvard-Kyoto transliteration alongside the Devanagari:

1. Regenerate the expected transliteration deterministically from the (now verified) Devanagari using a known library (e.g., `indic-transliteration` for Python or `@indic-transliteration/sanscript` for JS).
2. Diff against stored value. Report mismatches in `docs/audit/04-transliteration.md`.

If no transliteration field exists, skip this step and note it.

---

## STEP 5 — HINDI TRANSLATION ACCURACY

For each verse:

1. Cross-reference the Hindi translation against vedabase.io's Hindi edition if available; otherwise against Gita Press's Hindi rendering (commonly available in public references).
2. Flag if:
   - The Hindi text refers to a concept absent from the Sanskrit (likely off-by-one or wrong pairing).
   - Proper nouns are mis-transliterated (Arjuna → अर्जुन, not अरजुन).
   - The Hindi clearly translates a *different* English source rather than the Sanskrit (sometimes happens when translations are double-hops).
3. Report to `docs/audit/05-hindi.md` with same severity/diff format.

---

## STEP 6 — ENGLISH TRANSLATION ACCURACY

1. Compare against vedabase.io's English translation (Prabhupada's word-for-word + translation).
2. **Do not paste large blocks of vedabase.io's translation into the audit report** — it's copyrighted. Reference the verse URL and quote at most a short identifying phrase per defect.
3. Flag:
   - Off-by-one verse pairings.
   - Translations that contradict the Sanskrit meaning.
   - Missing verses.
   - Translations that look AI-generated and drift (hallucinated terms, modern English idiom in a verse that should be doctrinal).
4. Report to `docs/audit/06-english.md`.

---

## STEP 7 — BENGALI TRANSLATION ACCURACY

1. Reference: ISKCON Bengali edition of Bhagavad-gītā As It Is. If unavailable in the codebase or via legal source, flag the entire Bengali column as `UNVERIFIED_SOURCE` and stop attempting fixes for Bengali pending my decision.
2. Check:
   - Bengali script correctness (no Devanagari leakage, no Assamese ৰ/ৱ mixed in).
   - Off-by-one pairings (same heuristic as Hindi).
   - Proper noun transliteration (অর্জুন, কৃষ্ণ, etc.).
3. Report to `docs/audit/07-bengali.md`.

---

## STEP 8 — CROSS-LANGUAGE SEMANTIC CONSISTENCY

This catches the case where all four fields exist but mean different things.

1. For each verse, generate a short English gloss from the Sanskrit (via your reasoning, not a translation API — note this is your interpretation).
2. Confirm the Hindi, English, and Bengali translations all align with that gloss.
3. If one of the three diverges significantly (e.g., English talks about duty, Hindi talks about devotion, with no Sanskrit basis for either), flag as `SEMANTIC_DIVERGENCE` in `docs/audit/08-semantic.md`.
4. Mark these `NEEDS_HUMAN_REVIEW` — do not auto-fix semantic divergences. I'll review.

---

## STEP 9 — ELEVENLABS AUDIO AUDIT

1. For every audio file, verify:
   - **Filename ↔ content mapping** (e.g., `2_13_sa.mp3` should be Sanskrit for BG 2.13, not 2.14).
   - **Voice ID consistency** — Sanskrit/Hindi/English/Bengali should each use a stable, language-appropriate voice. Mismatched voice IDs across the same language are a defect.
   - **Duration sanity** — files under ~2 seconds or wildly longer than peers in the same chapter are suspicious (likely truncated or runaway generation).
   - **Existence** — every (verse, language) pair that should have audio actually has it.
2. **Sanskrit pronunciation is the biggest risk with ElevenLabs.** Audit the script that *feeds* ElevenLabs — is it sending raw Devanagari, IAST, or a phoneticized form? Raw Devanagari often pronounces poorly; IAST or a custom phonetic spelling typically produces better results.
3. Produce `docs/audit/09-audio.md` with:
   - List of missing files.
   - List of files with wrong voice ID.
   - List of suspiciously short/long files.
   - Recommendation on Sanskrit input format (Devanagari vs IAST vs phonetic).
4. **Do not regenerate any audio in this step.** Audio regeneration happens only in Step 11, file by file, after I approve.

---

## STEP 10 — CONSOLIDATED AUDIT REPORT

Produce `docs/audit/00-summary.md` with:

- Total verses expected vs. found per language.
- Defect counts by severity (HIGH / MEDIUM / LOW) and category (sanskrit / hindi / english / bengali / semantic / audio).
- Top 20 most critical defects with links to the per-step reports.
- A proposed fix order (suggest doing all HIGH severity text fixes first, then audio regeneration for those verses, then MEDIUM, then LOW).

**Stop here and show me the summary. I will approve the fix plan before any content changes.**

---

## STEP 11 — FIX PROTOCOL (only after my approval)

1. Work chapter by chapter, in order (1 → 18).
2. For each chapter:
   - Apply text fixes in a single commit per language. Commit message format: `fix(bg-{ch}): correct {lang} for verses {list}`.
   - Show me the diff before pushing.
3. After text fixes for a chapter are merged, regenerate **only the specific audio files** whose corresponding text changed. Never regenerate an entire chapter or language wholesale.
4. After regeneration, re-run the Step 9 checks for that chapter to confirm voice ID, duration sanity, and filename mapping.
5. Items marked `NEEDS_HUMAN_REVIEW` are skipped — accumulate them in `docs/audit/99-pending-review.md` for me to handle manually.

---

## DELIVERABLES CHECKLIST

By the end you should have created:

- [ ] Branch `audit/content-accuracy-YYYYMMDD`
- [ ] `docs/audit/00-summary.md`
- [ ] `docs/audit/01-data-map.md`
- [ ] `docs/audit/02-coverage.csv` + `02-gaps.md`
- [ ] `docs/audit/03-sanskrit.md`
- [ ] `docs/audit/04-transliteration.md` (or note skipped)
- [ ] `docs/audit/05-hindi.md`
- [ ] `docs/audit/06-english.md`
- [ ] `docs/audit/07-bengali.md`
- [ ] `docs/audit/08-semantic.md`
- [ ] `docs/audit/09-audio.md`
- [ ] `docs/audit/99-pending-review.md`
- [ ] One PR per chapter for fixes (only after approval)

---

## CHECKPOINTS — DO NOT SKIP

You **must** pause and wait for me at each of these:

- ✋ After Step 1 (data map confirmation)
- ✋ After Step 10 (summary + fix plan approval)
- ✋ Before any ElevenLabs API call in Step 11

Begin with Step 1.
