# Actionable English, Hindi, Explanation, and Audio Check

This is a focused follow-up to the broad audit. Bengali is intentionally excluded because it is being checked separately.

No text or audio was changed in this pass.

## Immediate Confirmed Issues

### BG 1.46 / BG 1.47 Numbering And Meaning Alignment

Severity: HIGH

The app stores Chapter 1 with 47 verses. Vedabase's Chapter 1 source index ends at `BG 1.46`, and that vedabase `BG 1.46` contains the closing Sanjaya verse:

```text
Sañjaya said: Arjuna, having thus spoken ...
```

The app stores that closing Sanjaya verse as `BG 1.47`.

Current app state:

- `BG 1.46` is Arjuna saying it would be better to be killed unarmed.
- `BG 1.47` is Sanjaya saying Arjuna cast aside his bow and sat down.

This may be valid in another edition, but it must be treated as a source-version decision before fixing. If the app uses vedabase as canonical, Chapter 1 needs a deliberate remapping decision.

### BG 1.37 / BG 1.38 Meaning Risk

Severity: HIGH

Vedabase combines `BG 1.37-38`, while the app stores them separately. The English audit flagged `BG 1.37` as a possible off-by-one risk. This should be manually reviewed before editing because combined-source verses can make lexical checks look worse than the actual meaning.

### BG 6.20-22 Hindi Explanations

Severity: HIGH

The app has Hindi explanations set to `No commentary.` for:

- `BG 6.20`
- `BG 6.21`
- `BG 6.22`

Then `BG 6.23` contains a long explanation that explicitly says:

```text
इन चार श्लोकों में योग की स्थिति का सम्पूर्ण वर्णन...
```

This is a real explanation-placement problem. Either the combined commentary should intentionally live only on `BG 6.23`, or the UI/content should make clear that `BG 6.20-23` share one commentary. Right now `No commentary.` is misleading.

### BG 6.20-24 English Explanations

Severity: MEDIUM/HIGH

English explanations for this same range contain word-for-word glossary residue like:

```text
यत्र where? उपरमते attains ...
```

This is not app-quality explanation prose. It likely came from a source field that mixed synonyms and commentary. These should be cleaned or replaced only after choosing the source policy.

## Audio Issues Tied To These Text Problems

### Short Hindi Explanation Audio

Severity: HIGH

Existing files suspiciously short by content-length estimate:

- `ch5-v27-hi-explanation.mp3`
- `ch6-v20-hi-explanation.mp3`
- `ch6-v21-hi-explanation.mp3`
- `ch6-v22-hi-explanation.mp3`
- `ch6-v24-hi-explanation.mp3`

Estimated duration is about `1.41s`, which strongly suggests truncated or placeholder audio. Do not regenerate until the text fields are corrected.

### Audio Coverage

Severity: HIGH

Expected public MP3 files: `4907`

Missing public MP3 files: `4026`

Coverage by logical set:

- Sanskrit shloka: `267/701`
- Hindi translation/explanation: `267/701`
- English translation/explanation: `20/701`
- Bengali translation/explanation: `20/701`

## Fix Order Recommendation

1. Decide canonical numbering for Chapter 1: vedabase `46` verses vs app/current `47`.
2. Fix Chapter 1 English/Hindi text alignment around `BG 1.36-47`.
3. Fix `BG 6.20-24` Hindi and English explanations.
4. Re-run checks for those exact verses.
5. Regenerate only the affected audio files after text approval.
6. Add audio metadata before more generation: source text hash, voice id, model id, language code, generated timestamp, and duration.

## Do Not Do Yet

- Do not bulk rewrite all English/Hindi translations based only on lexical score.
- Do not regenerate ElevenLabs audio while text source decisions are unresolved.
- Do not touch Bengali in this pass.
