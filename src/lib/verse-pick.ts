import { chapters, type Chapter, type Verse } from "@/data/gita";

export const hashString = (value: string) => {
  let hash = 2166136261;
  for (let i = 0; i < value.length; i += 1) {
    hash ^= value.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
};

const allVerses: { chapterId: number; verseIndex: number }[] = [];
chapters.forEach((c) => {
  c.verses.forEach((_, i) => allVerses.push({ chapterId: c.id, verseIndex: i }));
});

export const pickVerseBySeed = (seed: string): { chapter: Chapter; verse: Verse } => {
  const idx = hashString(`gita-verse:${seed}`) % allVerses.length;
  const pick = allVerses[idx];
  const chapter = chapters.find((c) => c.id === pick.chapterId)!;
  const verse = chapter.verses[pick.verseIndex];
  return { chapter, verse };
};

export const pickIndexBySeed = (seed: string, count: number) =>
  count > 0 ? hashString(seed) % count : 0;
