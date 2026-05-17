import rawData from "./gita-data.json";
import type { Language } from "@/i18n/translations";

export interface LocalizedText {
  hi: string;
  bn: string;
  en: string;
}

export interface ChapterName extends LocalizedText {
  sanskrit: string;
}

export interface Verse {
  id: number;
  sanskrit: string;
  transliteration: string;
  translation: LocalizedText;
  explanation: LocalizedText;
}

export interface Chapter {
  id: number;
  verseCount: number;
  name: ChapterName;
  meaning: LocalizedText;
  summary: LocalizedText;
  verses: Verse[];
}

export const chapters: Chapter[] = rawData as Chapter[];

// Keep this defensive cleanup for any legacy imported explanation that still
// includes a Sanskrit word-by-word gloss before the English prose commentary.
const cleanEnglishCommentary = (raw: string): string => {
  if (!raw) return "";
  const idx = raw.indexOf("Commentary");
  if (idx === -1) {
    // No commentary marker — the whole field is just the Sanskrit gloss,
    // which is not useful as an English explanation.
    // Heuristic: gloss entries are full of "?" separators. If so, hide it.
    if ((raw.match(/\?/g) || []).length >= 3) return "";
    return raw.trim();
  }
  return raw.slice(idx + "Commentary".length).trim();
};

export const pickText = (text: LocalizedText, lang: Language): string => {
  const value = text[lang] || text.en || text.hi || text.bn || "";
  if (lang === "en" && value === text.en) {
    return cleanEnglishCommentary(value);
  }
  return value;
};

export const getChapterName = (chapter: Chapter, lang: Language): string => {
  const name = chapter.name[lang];
  if (name && name.trim()) return name;
  return chapter.name.sanskrit || chapter.name.en;
};
