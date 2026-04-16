import { useState, useEffect, useCallback } from 'react';

export interface BookmarkKey {
  chapterId: number;
  verseId: number;
}

const STORAGE_KEY = 'gita-bookmarks';

function getStoredBookmarks(): BookmarkKey[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

export function useBookmarks() {
  const [bookmarks, setBookmarks] = useState<BookmarkKey[]>(getStoredBookmarks);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(bookmarks));
  }, [bookmarks]);

  const isBookmarked = useCallback(
    (chapterId: number, verseId: number) =>
      bookmarks.some((b) => b.chapterId === chapterId && b.verseId === verseId),
    [bookmarks]
  );

  const toggleBookmark = useCallback((chapterId: number, verseId: number) => {
    setBookmarks((prev) => {
      const exists = prev.some((b) => b.chapterId === chapterId && b.verseId === verseId);
      if (exists) return prev.filter((b) => !(b.chapterId === chapterId && b.verseId === verseId));
      return [...prev, { chapterId, verseId }];
    });
  }, []);

  return { bookmarks, isBookmarked, toggleBookmark };
}
