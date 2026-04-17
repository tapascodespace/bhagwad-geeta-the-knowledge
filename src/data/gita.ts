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

export const pickText = (text: LocalizedText, lang: Language): string => {
  return text[lang] || text.en || text.hi || text.bn || "";
};

export const getChapterName = (chapter: Chapter, lang: Language): string => {
  const name = chapter.name[lang];
  if (name && name.trim()) return name;
  return chapter.name.sanskrit || chapter.name.en;
};
