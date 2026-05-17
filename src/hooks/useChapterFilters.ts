import { useMemo, useState } from "react";
import { chapters, getChapterName, type Chapter } from "@/data/gita";
import type { Language } from "@/i18n/translations";

export type ChapterRangeFilter = "all" | "1-6" | "7-12" | "13-18";

const RANGE_MAP: Record<ChapterRangeFilter, (id: number) => boolean> = {
  all: () => true,
  "1-6": (id) => id >= 1 && id <= 6,
  "7-12": (id) => id >= 7 && id <= 12,
  "13-18": (id) => id >= 13 && id <= 18,
};

export const useChapterFilters = (language: Language) => {
  const [query, setQuery] = useState("");
  const [range, setRange] = useState<ChapterRangeFilter>("all");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return chapters.filter((ch) => {
      if (!RANGE_MAP[range](ch.id)) return false;
      if (!q) return true;
      const name = getChapterName(ch, language).toLowerCase();
      return name.includes(q) || String(ch.id).includes(q);
    });
  }, [query, range, language]);

  return { query, setQuery, range, setRange, filtered };
};

export type { Chapter };
