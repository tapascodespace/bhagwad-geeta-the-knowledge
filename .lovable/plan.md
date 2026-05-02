## Goal

Use your new ElevenLabs API key (with the 200k credits) to batch-generate the missing verse MP3s and upload them to the `verse-audio` storage bucket so the app plays them instantly with no runtime credit cost.

## Current state

- Frontend reads pre-generated MP3s from the public `verse-audio` bucket.
- Two existing TTS proxy functions:
  - `tts-default` → uses `ELEVENLABS_API_KEY`
  - `tts-account1` → uses `ELEVENLABS_API_KEY_ACCOUNT1`
- Both keys are already configured, but you say the new key has the credits.

## Plan

### 1. Add the new key as a secret
Prompt you to save the new key as `ELEVENLABS_API_KEY_ACCOUNT2` (keeps existing keys intact so we can fall back).

### 2. Create a new edge function `tts-account2`
Same shape as `tts-account1`, but reads `ELEVENLABS_API_KEY_ACCOUNT2`. Acts as the TTS proxy for the generation script.

### 3. Generation script (sandbox, one-off)
Run a Node script in `/tmp` that:
- Iterates all chapters/verses in `src/data/gita.ts`.
- For each verse + part (`shloka`, `hi-translation`, `hi-explanation`, and optionally `en-*`/`bn-*` if you want), checks `verse-audio` bucket via HEAD for the expected filename.
- If missing, calls `tts-account2` with the right text, voice, and `language_code`.
- Uploads the returned MP3 to `verse-audio` using the service role key with the exact naming convention:
  - `ch{c}-v{v}-shloka.mp3`
  - `ch{c}-v{v}-{lang}-{part}.mp3`
- Logs progress + remaining-credits estimate, retries on 429, skips on 4xx.

### 4. Confirm before bulk run
Before generating thousands of files, ask which scope to generate:
- Only Hindi (translation + explanation) — smallest, matches the Library/Hindi-only direction.
- Hindi + Sanskrit shlokas.
- All three languages (en/hi/bn) for every verse.

### 5. Verify
After generation, spot-check a few verses in the app (e.g. Chapter 2, Verse 47) to confirm they play without the "Audio not available yet" toast.

## Questions for you before I start

1. What name should the new key be saved as? (Default: `ELEVENLABS_API_KEY_ACCOUNT2`.)
2. Which scope should I generate? (Hindi only / Hindi + Sanskrit / all languages.)
3. Same voice as before (`JBFqnCBsd6RMkjVDRZzb` — George) or a different one?

Once you approve, I'll: add the secret request, create `tts-account2`, then run the generator.