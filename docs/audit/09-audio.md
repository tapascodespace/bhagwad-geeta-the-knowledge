# Step 9 - ElevenLabs Audio Audit

Audited public Supabase Storage MP3 availability and basic size/duration sanity. No ElevenLabs API calls were made and no audio was regenerated.

## Method

- Expected files were derived from `docs/audit/02-coverage.csv` and the naming convention in `src/lib/audio-url.ts`.
- Ran public `HEAD` requests against `https://iiddeudiakdfmpqoynks.supabase.co/storage/v1/object/public/verse-audio`.
- Estimated duration from `content-length` assuming the configured ElevenLabs output format `mp3_44100_128` (128 kbps). This is a sanity estimate, not decoded audio duration.
- Voice ID and filename-to-spoken-content mapping cannot be fully verified from public MP3 URLs because the app does not store generation metadata, voice id, source text hash, transcript, or duration.

## Coverage By File Kind

| File kind | Exists | Expected | Missing |
| --- | ---: | ---: | ---: |
| bn_explanation | 20 | 701 | 681 |
| bn_translation | 20 | 701 | 681 |
| en_explanation | 20 | 701 | 681 |
| en_translation | 20 | 701 | 681 |
| hi_explanation | 267 | 701 | 434 |
| hi_translation | 267 | 701 | 434 |
| sa_shloka | 267 | 701 | 434 |

## Missing Audio Files

- BG 1.1: ch1-v1-en-translation.mp3
- BG 1.1: ch1-v1-en-explanation.mp3
- BG 1.1: ch1-v1-bn-translation.mp3
- BG 1.1: ch1-v1-bn-explanation.mp3
- BG 1.2: ch1-v2-en-translation.mp3
- BG 1.2: ch1-v2-en-explanation.mp3
- BG 1.2: ch1-v2-bn-translation.mp3
- BG 1.2: ch1-v2-bn-explanation.mp3
- BG 1.3: ch1-v3-en-translation.mp3
- BG 1.3: ch1-v3-en-explanation.mp3
- BG 1.3: ch1-v3-bn-translation.mp3
- BG 1.3: ch1-v3-bn-explanation.mp3
- BG 1.4: ch1-v4-en-translation.mp3
- BG 1.4: ch1-v4-en-explanation.mp3
- BG 1.4: ch1-v4-bn-translation.mp3
- BG 1.4: ch1-v4-bn-explanation.mp3
- BG 1.5: ch1-v5-en-translation.mp3
- BG 1.5: ch1-v5-en-explanation.mp3
- BG 1.5: ch1-v5-bn-translation.mp3
- BG 1.5: ch1-v5-bn-explanation.mp3
- BG 1.6: ch1-v6-en-translation.mp3
- BG 1.6: ch1-v6-en-explanation.mp3
- BG 1.6: ch1-v6-bn-translation.mp3
- BG 1.6: ch1-v6-bn-explanation.mp3
- BG 1.7: ch1-v7-en-translation.mp3
- BG 1.7: ch1-v7-en-explanation.mp3
- BG 1.7: ch1-v7-bn-translation.mp3
- BG 1.7: ch1-v7-bn-explanation.mp3
- BG 1.8: ch1-v8-en-translation.mp3
- BG 1.8: ch1-v8-en-explanation.mp3
- BG 1.8: ch1-v8-bn-translation.mp3
- BG 1.8: ch1-v8-bn-explanation.mp3
- BG 1.9: ch1-v9-en-translation.mp3
- BG 1.9: ch1-v9-en-explanation.mp3
- BG 1.9: ch1-v9-bn-translation.mp3
- BG 1.9: ch1-v9-bn-explanation.mp3
- BG 1.10: ch1-v10-en-translation.mp3
- BG 1.10: ch1-v10-en-explanation.mp3
- BG 1.10: ch1-v10-bn-translation.mp3
- BG 1.10: ch1-v10-bn-explanation.mp3
- BG 1.11: ch1-v11-en-translation.mp3
- BG 1.11: ch1-v11-en-explanation.mp3
- BG 1.11: ch1-v11-bn-translation.mp3
- BG 1.11: ch1-v11-bn-explanation.mp3
- BG 1.12: ch1-v12-en-translation.mp3
- BG 1.12: ch1-v12-en-explanation.mp3
- BG 1.12: ch1-v12-bn-translation.mp3
- BG 1.12: ch1-v12-bn-explanation.mp3
- BG 1.13: ch1-v13-en-translation.mp3
- BG 1.13: ch1-v13-en-explanation.mp3
- BG 1.13: ch1-v13-bn-translation.mp3
- BG 1.13: ch1-v13-bn-explanation.mp3
- BG 1.14: ch1-v14-en-translation.mp3
- BG 1.14: ch1-v14-en-explanation.mp3
- BG 1.14: ch1-v14-bn-translation.mp3
- BG 1.14: ch1-v14-bn-explanation.mp3
- BG 1.15: ch1-v15-en-translation.mp3
- BG 1.15: ch1-v15-en-explanation.mp3
- BG 1.15: ch1-v15-bn-translation.mp3
- BG 1.15: ch1-v15-bn-explanation.mp3
- BG 1.16: ch1-v16-en-translation.mp3
- BG 1.16: ch1-v16-en-explanation.mp3
- BG 1.16: ch1-v16-bn-translation.mp3
- BG 1.16: ch1-v16-bn-explanation.mp3
- BG 1.17: ch1-v17-en-translation.mp3
- BG 1.17: ch1-v17-en-explanation.mp3
- BG 1.17: ch1-v17-bn-translation.mp3
- BG 1.17: ch1-v17-bn-explanation.mp3
- BG 1.18: ch1-v18-en-translation.mp3
- BG 1.18: ch1-v18-en-explanation.mp3
- BG 1.18: ch1-v18-bn-translation.mp3
- BG 1.18: ch1-v18-bn-explanation.mp3
- BG 1.19: ch1-v19-en-translation.mp3
- BG 1.19: ch1-v19-en-explanation.mp3
- BG 1.19: ch1-v19-bn-translation.mp3
- BG 1.19: ch1-v19-bn-explanation.mp3
- BG 1.20: ch1-v20-en-translation.mp3
- BG 1.20: ch1-v20-en-explanation.mp3
- BG 1.20: ch1-v20-bn-translation.mp3
- BG 1.20: ch1-v20-bn-explanation.mp3
- BG 1.21: ch1-v21-en-translation.mp3
- BG 1.21: ch1-v21-en-explanation.mp3
- BG 1.21: ch1-v21-bn-translation.mp3
- BG 1.21: ch1-v21-bn-explanation.mp3
- BG 1.22: ch1-v22-en-translation.mp3
- BG 1.22: ch1-v22-en-explanation.mp3
- BG 1.22: ch1-v22-bn-translation.mp3
- BG 1.22: ch1-v22-bn-explanation.mp3
- BG 1.23: ch1-v23-en-translation.mp3
- BG 1.23: ch1-v23-en-explanation.mp3
- BG 1.23: ch1-v23-bn-translation.mp3
- BG 1.23: ch1-v23-bn-explanation.mp3
- BG 1.24: ch1-v24-en-translation.mp3
- BG 1.24: ch1-v24-en-explanation.mp3
- BG 1.24: ch1-v24-bn-translation.mp3
- BG 1.24: ch1-v24-bn-explanation.mp3
- BG 1.25: ch1-v25-en-translation.mp3
- BG 1.25: ch1-v25-en-explanation.mp3
- BG 1.25: ch1-v25-bn-translation.mp3
- BG 1.25: ch1-v25-bn-explanation.mp3
- BG 1.26: ch1-v26-en-translation.mp3
- BG 1.26: ch1-v26-en-explanation.mp3
- BG 1.26: ch1-v26-bn-translation.mp3
- BG 1.26: ch1-v26-bn-explanation.mp3
- BG 1.27: ch1-v27-en-translation.mp3
- BG 1.27: ch1-v27-en-explanation.mp3
- BG 1.27: ch1-v27-bn-translation.mp3
- BG 1.27: ch1-v27-bn-explanation.mp3
- BG 1.28: ch1-v28-en-translation.mp3
- BG 1.28: ch1-v28-en-explanation.mp3
- BG 1.28: ch1-v28-bn-translation.mp3
- BG 1.28: ch1-v28-bn-explanation.mp3
- BG 1.29: ch1-v29-en-translation.mp3
- BG 1.29: ch1-v29-en-explanation.mp3
- BG 1.29: ch1-v29-bn-translation.mp3
- BG 1.29: ch1-v29-bn-explanation.mp3
- BG 1.30: ch1-v30-en-translation.mp3
- BG 1.30: ch1-v30-en-explanation.mp3
- BG 1.30: ch1-v30-bn-translation.mp3
- BG 1.30: ch1-v30-bn-explanation.mp3

... 3906 additional missing audio files omitted. Full details are in `09-audio-results.json`.

## Suspicious Duration Or Size

- BG 5.27: ch5-v27-hi-explanation.mp3, bytes=22613, estimatedSeconds=1.41
- BG 6.20: ch6-v20-hi-explanation.mp3, bytes=22613, estimatedSeconds=1.41
- BG 6.21: ch6-v21-hi-explanation.mp3, bytes=22613, estimatedSeconds=1.41
- BG 6.22: ch6-v22-hi-explanation.mp3, bytes=22613, estimatedSeconds=1.41
- BG 6.24: ch6-v24-hi-explanation.mp3, bytes=22613, estimatedSeconds=1.41

## Voice ID Consistency

Could not verify per-file voice ID consistency from existing files. The available code only shows that the TTS proxy allows a set of voices and defaults to `JBFqnCBsd6RMkjVDRZzb` (George). No per-object metadata ties generated MP3s to a voice id.

## Filename To Content Mapping

Could not verify spoken content from the MP3 files without transcription. Filename existence was verified, but whether `ch2-v13-hi-translation.mp3` actually speaks BG 2.13 requires either stored source-text hashes from generation time or an ASR/transcription pass.

## Sanskrit Input Format Recommendation

The app runtime never sends text to ElevenLabs. The edge functions accept whatever `text` the generation script sends. Current repo code does not show a Sanskrit-specific phoneticization layer; if generation scripts send raw Devanagari shlokas, Sanskrit pronunciation risk is high. For future generation, store generation metadata and consider an IAST/phonetic input strategy for Sanskrit rather than raw Devanagari only.

## Stop Point

No audio files were changed or generated. Step 10 can proceed after review.
