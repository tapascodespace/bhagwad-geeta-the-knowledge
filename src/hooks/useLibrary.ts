import { useEffect, useState, useCallback } from "react";

const UNLOCKED_KEY = "library:unlocked";
const PROGRESS_KEY = "library:progress";
const READER_PREFS_KEY = "library:reader-prefs";

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
