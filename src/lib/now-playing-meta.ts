import type { AudioPart } from "@/lib/audio-url";
import type { NowPlayingMeta } from "@/lib/media-session";

const partLabel: Record<AudioPart, string> = {
  shloka: "Sanskrit Shloka",
  translation: "Translation",
  explanation: "Explanation",
};

export const buildNowPlayingMeta = (
  chapter: number,
  verse: number,
  part: AudioPart,
  chapterName?: string,
): NowPlayingMeta => ({
  title: `Chapter ${chapter}, Verse ${verse}`,
  artist: partLabel[part],
  album: chapterName ? `${chapterName} — Bhagavad Gita` : "Srimad Bhagavad Gita",
});
