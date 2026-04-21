'use client';

import { useCallback, useEffect, useState } from 'react';

/**
 * Spaced Repetition 복습 스케줄러 (간단 SM-2 변형)
 * - localStorage: 'math-50days:review-queue'
 * - 맞힘 → interval 2배 (1→2→4→8일)
 * - 틀림 → interval 리셋 (1일)
 */

const STORAGE_KEY = 'math-50days:review-queue';

export interface ReviewItem {
  conceptId: string;
  /** sourceId 예: 'grade1/day/3' */
  sourceId: string;
  /** 사람이 읽을 수 있는 출처 라벨 */
  sourceLabel: string;
  /** 개념 제목 */
  conceptTitle: string;
  /** 개념 내용 (KaTeX 수식 포함 가능) */
  conceptContent: string;
  /** 관련 Problem id 목록 */
  problemIds: string[];
  /** 마지막 복습 시각 (ms) */
  lastReviewed: number;
  /** 현재 복습 간격 (일) */
  interval: number;
  /** 다음 복습 예정 시각 (ms) */
  dueAt: number;
  /** 누적 정답 수 */
  correctCount: number;
  /** 누적 복습 수 */
  totalCount: number;
}

type ReviewStore = Record<string, ReviewItem>;

function loadStore(): ReviewStore {
  if (typeof window === 'undefined') return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    return JSON.parse(raw) as ReviewStore;
  } catch {
    return {};
  }
}

function saveStore(store: ReviewStore) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
  } catch {
    // noop
  }
}

/** Day 완료 시 해당 Day의 개념들을 review queue에 자동 추가 (1일 후 예약) */
export function scheduleConceptsForReview(input: {
  sourceId: string;
  sourceLabel: string;
  concepts: Array<{
    id: string;
    title: string;
    content: string;
  }>;
  problemIds?: string[];
}) {
  if (typeof window === 'undefined') return;
  const store = loadStore();
  const now = Date.now();
  const oneDayMs = 24 * 60 * 60 * 1000;

  input.concepts.forEach((concept) => {
    // 이미 있으면 덮어쓰지 않음 (기존 schedule 유지)
    if (!store[concept.id]) {
      store[concept.id] = {
        conceptId: concept.id,
        sourceId: input.sourceId,
        sourceLabel: input.sourceLabel,
        conceptTitle: concept.title,
        conceptContent: concept.content,
        problemIds: input.problemIds ?? [],
        lastReviewed: now,
        interval: 1,
        dueAt: now + oneDayMs,
        correctCount: 0,
        totalCount: 0,
      };
    }
  });

  saveStore(store);
  window.dispatchEvent(new CustomEvent('review-queue-updated'));
}

/** 복습 완료 시 정답 여부에 따라 다음 간격 업데이트 */
export function markReviewed(conceptId: string, correct: boolean) {
  if (typeof window === 'undefined') return;
  const store = loadStore();
  const item = store[conceptId];
  if (!item) return;

  const now = Date.now();
  const oneDayMs = 24 * 60 * 60 * 1000;

  const newInterval = correct ? Math.min(item.interval * 2, 64) : 1;
  const newDueAt = now + newInterval * oneDayMs;

  store[conceptId] = {
    ...item,
    lastReviewed: now,
    interval: newInterval,
    dueAt: newDueAt,
    correctCount: item.correctCount + (correct ? 1 : 0),
    totalCount: item.totalCount + 1,
  };

  saveStore(store);
  window.dispatchEvent(new CustomEvent('review-queue-updated'));
}

/** dueAt <= now 인 개념 목록 반환 */
export function getDueReviews(): ReviewItem[] {
  const store = loadStore();
  const now = Date.now();
  return Object.values(store)
    .filter((item) => item.dueAt <= now)
    .sort((a, b) => a.dueAt - b.dueAt);
}

/** 전체 review queue 구독 훅 */
export function useReviewSchedule() {
  const [items, setItems] = useState<ReviewItem[]>([]);
  const [dueItems, setDueItems] = useState<ReviewItem[]>([]);

  const reload = useCallback(() => {
    const store = loadStore();
    const all = Object.values(store);
    const now = Date.now();
    setItems(all);
    setDueItems(all.filter((i) => i.dueAt <= now).sort((a, b) => a.dueAt - b.dueAt));
  }, []);

  useEffect(() => {
    reload();
    const onStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) reload();
    };
    const onLocal = () => reload();
    window.addEventListener('storage', onStorage);
    window.addEventListener('review-queue-updated', onLocal);
    return () => {
      window.removeEventListener('storage', onStorage);
      window.removeEventListener('review-queue-updated', onLocal);
    };
  }, [reload]);

  const removeItem = useCallback(
    (conceptId: string) => {
      const store = loadStore();
      delete store[conceptId];
      saveStore(store);
      reload();
      window.dispatchEvent(new CustomEvent('review-queue-updated'));
    },
    [reload]
  );

  const clearAll = useCallback(() => {
    saveStore({});
    reload();
    window.dispatchEvent(new CustomEvent('review-queue-updated'));
  }, [reload]);

  return {
    items,
    dueItems,
    dueCount: dueItems.length,
    totalCount: items.length,
    reload,
    removeItem,
    clearAll,
  };
}

/** SSR 안전 — 배지 카운트만 필요할 때 */
export function getDueCount(): number {
  if (typeof window === 'undefined') return 0;
  return getDueReviews().length;
}
