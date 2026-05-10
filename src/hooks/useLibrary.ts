import { useEffect, useState, useCallback, useMemo } from "react";
import { usePurchases } from "@/hooks/usePurchases";

const PROGRESS_KEY = "library:progress";
const READER_PREFS_KEY = "library:reader-prefs";
const BOOK_BOOKMARKS_KEY = "library:book-bookmarks";

export const readProgressMap = (): Record<string, number> => {
  try {
    const raw = localStorage.getItem(PROGRESS_KEY);
    return raw ? (JSON.parse(raw) as Record<string, number>) : {};
  } catch {
    return {};
  }
};

export interface BookBookmark {
  bookId: string;
  lang: "hi" | "en";
  sectionId: number;
  title: string;
  bookTitle: string;
  savedAt: number;
}

const readBookBookmarks = (): BookBookmark[] => {
  try {
    const raw = localStorage.getItem(BOOK_BOOKMARKS_KEY);
    return raw ? (JSON.parse(raw) as BookBookmark[]) : [];
  } catch {
    return [];
  }
};

export const useBookBookmarks = () => {
  const [items, setItems] = useState<BookBookmark[]>(() => readBookBookmarks());

  useEffect(() => {
    const onStorage = () => setItems(readBookBookmarks());
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const isBookmarked = useCallback(
    (bookId: string, lang: "hi" | "en", sectionId: number) =>
      items.some((b) => b.bookId === bookId && b.lang === lang && b.sectionId === sectionId),
    [items],
  );

  const toggle = useCallback((entry: BookBookmark) => {
    const current = readBookBookmarks();
    const exists = current.some(
      (b) => b.bookId === entry.bookId && b.lang === entry.lang && b.sectionId === entry.sectionId,
    );
    const next = exists
      ? current.filter(
          (b) => !(b.bookId === entry.bookId && b.lang === entry.lang && b.sectionId === entry.sectionId),
        )
      : [...current, entry];
    localStorage.setItem(BOOK_BOOKMARKS_KEY, JSON.stringify(next));
    setItems(next);
  }, []);

  const remove = useCallback((bookId: string, lang: "hi" | "en", sectionId: number) => {
    const next = readBookBookmarks().filter(
      (b) => !(b.bookId === bookId && b.lang === lang && b.sectionId === sectionId),
    );
    localStorage.setItem(BOOK_BOOKMARKS_KEY, JSON.stringify(next));
    setItems(next);
  }, []);

  return { items, isBookmarked, toggle, remove };
};

const readSet = (): Set<string> => {
  try {
    const raw = localStorage.getItem(UNLOCKED_KEY);
    return new Set(raw ? (JSON.parse(raw) as string[]) : []);
  } catch {
    return new Set();
  }
};

export const useUnlockedBooks = () => {
  const [unlocked, setUnlocked] = useState<Set<string>>(() => readSet());

  useEffect(() => {
    const onStorage = () => setUnlocked(readSet());
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const unlock = useCallback((bookId: string) => {
    const next = readSet();
    next.add(bookId);
    localStorage.setItem(UNLOCKED_KEY, JSON.stringify([...next]));
    setUnlocked(new Set(next));
  }, []);

  const isUnlocked = useCallback((bookId: string) => unlocked.has(bookId), [unlocked]);

  return { isUnlocked, unlock };
};

export const useReadingProgress = (bookId: string) => {
  const [section, setSection] = useState<number>(() => {
    try {
      const raw = localStorage.getItem(PROGRESS_KEY);
      const map = raw ? (JSON.parse(raw) as Record<string, number>) : {};
      return map[bookId] ?? 1;
    } catch {
      return 1;
    }
  });

  const save = useCallback(
    (s: number) => {
      setSection(s);
      try {
        const raw = localStorage.getItem(PROGRESS_KEY);
        const map = raw ? (JSON.parse(raw) as Record<string, number>) : {};
        map[bookId] = s;
        localStorage.setItem(PROGRESS_KEY, JSON.stringify(map));
      } catch {
        /* ignore */
      }
    },
    [bookId],
  );

  return { section, setSection: save };
};

export interface ReaderPrefs {
  fontSize: number; // 14 - 22
  theme: "light" | "dark";
}

export const useReaderPrefs = () => {
  const [prefs, setPrefs] = useState<ReaderPrefs>(() => {
    try {
      const raw = localStorage.getItem(READER_PREFS_KEY);
      if (raw) return JSON.parse(raw) as ReaderPrefs;
    } catch {
      /* ignore */
    }
    return { fontSize: 18, theme: "light" };
  });

  const update = useCallback((next: Partial<ReaderPrefs>) => {
    setPrefs((p) => {
      const merged = { ...p, ...next };
      try {
        localStorage.setItem(READER_PREFS_KEY, JSON.stringify(merged));
      } catch {
        /* ignore */
      }
      return merged;
    });
  }, []);

  return { prefs, update };
};
