// Pre-generated audio URL builder + availability check.
// All audio is hosted on the public "verse-audio" storage bucket.
// No TTS generation happens in the app.

export type AudioPart = "shloka" | "translation" | "explanation";
export type AudioLang = "en" | "hi" | "bn";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string;
const BUCKET = "verse-audio";
const BASE = `${SUPABASE_URL}/storage/v1/object/public/${BUCKET}`;

/**
 * Build the public CDN URL for a verse audio file.
 * Naming convention:
 *   - Shloka (Sanskrit, language-agnostic):  ch{c}-v{v}-shloka.mp3
 *   - Translation/Explanation per language:  ch{c}-v{v}-{lang}-{part}.mp3
 */
export const getVerseAudioUrl = (
  chapter: number,
  verse: number,
  part: AudioPart,
  language: AudioLang,
  clean = false
): string => {
  const baseName =
    part === "shloka"
      ? `ch${chapter}-v${verse}-shloka`
      : `ch${chapter}-v${verse}-${language}-${part}`;
  const file = `${baseName}${clean ? "-clean" : ""}.mp3`;
  return `${BASE}/${file}`;
};

// Cache availability lookups so we don't repeatedly HEAD the same URL.
const availabilityCache = new Map<string, boolean>();

export const checkAudioAvailable = async (url: string): Promise<boolean> => {
  if (availabilityCache.has(url)) return availabilityCache.get(url)!;
  try {
    const res = await fetch(url, { method: "HEAD" });
    const ok = res.ok;
    availabilityCache.set(url, ok);
    return ok;
  } catch {
    availabilityCache.set(url, false);
    return false;
  }
};

export class AudioNotAvailableError extends Error {
  constructor() {
    super("Audio not available yet");
    this.name = "AudioNotAvailableError";
  }
}

/**
 * Resolve a verse audio URL, throwing AudioNotAvailableError if missing.
 */
export const resolveVerseAudio = async (
  chapter: number,
  verse: number,
  part: AudioPart,
  language: AudioLang
): Promise<string> => {
  const url = getVerseAudioUrl(chapter, verse, part, language);
  const ok = await checkAudioAvailable(url);
  if (!ok) throw new AudioNotAvailableError();
  return url;
};
