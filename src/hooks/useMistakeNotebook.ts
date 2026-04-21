'use client';

import { useCallback, useEffect, useState } from 'react';

/**
 * 오답 노트 — localStorage 에 모든 Day 의 풀이 시도를 영속 저장.
 * 나중에 /mistakes 페이지에서 주제별·개념별로 틀린 문제를 복습할 수 있게.
 */

const STORAGE_KEY = 'math-50days:mistake-notebook';

export interface MistakeEntry {
  problemId: string;
  question: string;
  correctAnswer: string;
  options?: string[];
  type: 'multiple-choice' | 'short-answer';
  /** 연습 구간 (예: "Finding Slope (기울기)" 또는 "Day 4 - Pythagorean") */
  sectionLabel?: string;
  /** 'bc-g8', 'grade1', 'this-week' 등 출처 식별자 */
  sourceId: string;
  /** 사람이 읽을 수 있는 출처 라벨 (예: "BC Grade 8 - Day 4") */
  sourceLabel: string;
  /** 시간 순 attempt 기록 (최신이 뒤) */
  history: Array<{ at: number; answer: string; isCorrect: boolean }>;
  firstAttemptedAt: number;
  lastAttemptedAt: number;
}

/** 전체 entries 를 problemId → MistakeEntry 로 저장 */
type NotebookStore = Record<string, MistakeEntry>;

function loadStore(): NotebookStore {
  if (typeof window === 'undefined') return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    return JSON.parse(raw) as NotebookStore;
  } catch {
    return {};
  }
}

function saveStore(store: NotebookStore) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
  } catch {
    // noop
  }
}

/**
 * 새 attempt 를 오답 노트에 기록 (모든 시도 기록, 맞춘 것도 포함).
 * Problem 컴포넌트가 채점 직후 호출.
 */
export function logMistakeAttempt(input: {
  problemId: string;
  question: string;
  studentAnswer: string;
  correctAnswer: string;
  isCorrect: boolean;
  options?: string[];
  type: 'multiple-choice' | 'short-answer';
  sectionLabel?: string;
  sourceId: string;
  sourceLabel: string;
}) {
  const store = loadStore();
  const now = Date.now();
  const existing = store[input.problemId];
  if (existing) {
    existing.history.push({
      at: now,
      answer: input.studentAnswer,
      isCorrect: input.isCorrect,
    });
    existing.lastAttemptedAt = now;
    // 메타데이터 최신화 (라벨 등이 바뀌었을 수 있으므로)
    existing.sectionLabel = input.sectionLabel ?? existing.sectionLabel;
    existing.sourceLabel = input.sourceLabel;
    store[input.problemId] = existing;
  } else {
    store[input.problemId] = {
      problemId: input.problemId,
      question: input.question,
      correctAnswer: input.correctAnswer,
      options: input.options,
      type: input.type,
      sectionLabel: input.sectionLabel,
      sourceId: input.sourceId,
      sourceLabel: input.sourceLabel,
      history: [
        { at: now, answer: input.studentAnswer, isCorrect: input.isCorrect },
      ],
      firstAttemptedAt: now,
      lastAttemptedAt: now,
    };
  }
  saveStore(store);
  // 다른 탭·페이지에 변경 알림 (storage 이벤트는 다른 탭에만 발생하므로 커스텀 이벤트도)
  window.dispatchEvent(new CustomEvent('mistake-notebook-updated'));
}

/** 전체 오답 노트 상태를 구독하는 훅 */
export function useMistakeNotebook() {
  const [entries, setEntries] = useState<MistakeEntry[]>([]);

  const reload = useCallback(() => {
    const store = loadStore();
    setEntries(Object.values(store));
  }, []);

  useEffect(() => {
    reload();
    const onStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) reload();
    };
    const onLocal = () => reload();
    window.addEventListener('storage', onStorage);
    window.addEventListener('mistake-notebook-updated', onLocal);
    return () => {
      window.removeEventListener('storage', onStorage);
      window.removeEventListener('mistake-notebook-updated', onLocal);
    };
  }, [reload]);

  const deleteEntry = useCallback((problemId: string) => {
    const store = loadStore();
    delete store[problemId];
    saveStore(store);
    reload();
    window.dispatchEvent(new CustomEvent('mistake-notebook-updated'));
  }, [reload]);

  const clearAll = useCallback(() => {
    saveStore({});
    reload();
    window.dispatchEvent(new CustomEvent('mistake-notebook-updated'));
  }, [reload]);

  /** 분석 유틸 */
  const analytics = {
    total: entries.length,
    everWrong: entries.filter((e) => e.history.some((h) => !h.isCorrect)).length,
    currentlyWrong: entries.filter((e) => {
      const last = e.history[e.history.length - 1];
      return last && !last.isCorrect;
    }).length,
    resolved: entries.filter((e) => {
      const last = e.history[e.history.length - 1];
      return last && last.isCorrect && e.history.some((h) => !h.isCorrect);
    }).length,
  };

  return { entries, deleteEntry, clearAll, reload, analytics };
}

/** 전체 entry 수 요약만 필요할 때 (배지 카운트 등). SSR 안전. */
export function getMistakeCount(): { currentlyWrong: number; total: number } {
  const entries = Object.values(loadStore());
  const currentlyWrong = entries.filter((e) => {
    const last = e.history[e.history.length - 1];
    return last && !last.isCorrect;
  }).length;
  return { currentlyWrong, total: entries.length };
}
