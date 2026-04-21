'use client';

import { useCallback } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { GradeId } from '@/lib/types';

export interface BookmarkEntry {
  gradeId: GradeId;
  dayNumber: number;
  title: string;
  addedAt: number;
}

type BookmarkMap = Record<string, BookmarkEntry>;

const STORAGE_KEY = 'math-50days:bookmarks';

export function useBookmarks() {
  const [bookmarks, setBookmarks, isLoaded] = useLocalStorage<BookmarkMap>(
    STORAGE_KEY,
    {}
  );

  const getKey = (gradeId: GradeId, dayNumber: number) =>
    `${gradeId}/${dayNumber}`;

  const isBookmarked = useCallback(
    (gradeId: GradeId, dayNumber: number) => {
      return !!bookmarks[getKey(gradeId, dayNumber)];
    },
    [bookmarks]
  );

  const toggleBookmark = useCallback(
    (gradeId: GradeId, dayNumber: number, title: string) => {
      const key = getKey(gradeId, dayNumber);
      setBookmarks((prev) => {
        if (prev[key]) {
          const next = { ...prev };
          delete next[key];
          return next;
        }
        return {
          ...prev,
          [key]: { gradeId, dayNumber, title, addedAt: Date.now() },
        };
      });
    },
    [setBookmarks]
  );

  const removeBookmark = useCallback(
    (gradeId: GradeId, dayNumber: number) => {
      const key = getKey(gradeId, dayNumber);
      setBookmarks((prev) => {
        const next = { ...prev };
        delete next[key];
        return next;
      });
    },
    [setBookmarks]
  );

  const bookmarkList = Object.values(bookmarks).sort(
    (a, b) => b.addedAt - a.addedAt
  );

  return { isLoaded, bookmarks, bookmarkList, isBookmarked, toggleBookmark, removeBookmark };
}
