'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useReviewSchedule, markReviewed, ReviewItem } from '@/hooks/useReviewScheduler';
import MathRenderer from '@/components/MathRenderer';

// ─── 복습 카드 컴포넌트 ───────────────────────────────────
function ReviewCard({
  item,
  onDone,
}: {
  item: ReviewItem;
  onDone: (correct: boolean) => void;
}) {
  const [revealed, setRevealed] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -30 }}
      className="rounded-2xl border border-white/10 bg-card overflow-hidden"
    >
      {/* 카드 헤더 */}
      <div className="px-5 pt-5 pb-3 flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">
            {item.sourceLabel}
          </div>
          <h3 className="text-sm font-semibold text-foreground">{item.conceptTitle}</h3>
        </div>

        {/* 간격 뱃지 */}
        <div className="shrink-0 px-2 py-1 rounded-lg bg-violet-500/10 text-violet-400 text-xs font-medium">
          {item.interval}일 간격
        </div>
      </div>

      {/* 개념 내용 */}
      <div className="px-5 pb-4">
        <div className="rounded-xl bg-muted/20 border border-white/5 p-4 text-sm text-foreground/80 leading-relaxed">
          <MathRenderer content={item.conceptContent} />
        </div>
      </div>

      {/* 자가 평가 — 이 개념 기억나나요? */}
      {!revealed ? (
        <div className="px-5 pb-5">
          <button
            onClick={() => setRevealed(true)}
            className="w-full py-2.5 rounded-xl border border-white/10 text-muted-foreground text-sm hover:text-foreground hover:bg-white/5 transition-all"
          >
            이 개념이 기억나나요? 자가 평가하기
          </button>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="border-t border-white/5 px-5 py-4 space-y-3"
        >
          <p className="text-xs text-center text-muted-foreground">
            이 개념을 얼마나 잘 알고 있나요?
          </p>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => onDone(false)}
              className="py-3 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/20 text-rose-400 text-sm font-medium transition-all"
            >
              헷갈려요 (1일 후 복습)
            </button>
            <button
              onClick={() => onDone(true)}
              className="py-3 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 text-emerald-400 text-sm font-medium transition-all"
            >
              잘 알아요 ({item.interval * 2}일 후 복습)
            </button>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

// ─── 업커밍 아이템 미니 목록 ─────────────────────────────
function UpcomingList({ items }: { items: ReviewItem[] }) {
  const now = Date.now();
  const upcoming = items
    .filter((i) => i.dueAt > now)
    .sort((a, b) => a.dueAt - b.dueAt)
    .slice(0, 5);

  if (upcoming.length === 0) return null;

  return (
    <div className="rounded-2xl border border-white/10 bg-card/50 p-4 space-y-3">
      <h3 className="text-sm font-semibold text-foreground">예정된 복습</h3>
      <div className="space-y-2">
        {upcoming.map((item) => {
          const daysLeft = Math.ceil((item.dueAt - now) / (24 * 60 * 60 * 1000));
          return (
            <div key={item.conceptId} className="flex items-center gap-3 text-sm">
              <div className="flex-1 min-w-0">
                <span className="text-foreground/80 truncate block">{item.conceptTitle}</span>
                <span className="text-xs text-muted-foreground">{item.sourceLabel}</span>
              </div>
              <span className="text-xs text-violet-400 shrink-0">
                {daysLeft}일 후
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── 메인 페이지 ─────────────────────────────────────────
export default function ReviewPage() {
  const { dueItems, items, dueCount, totalCount, clearAll, reload } = useReviewSchedule();
  const [completedIds, setCompletedIds] = useState<Set<string>>(new Set());
  const [showAll, setShowAll] = useState(false);

  const pendingItems = dueItems.filter((i) => !completedIds.has(i.conceptId));
  const allDone = pendingItems.length === 0 && dueCount > 0;

  const handleDone = (item: ReviewItem, correct: boolean) => {
    markReviewed(item.conceptId, correct);
    setCompletedIds((prev) => new Set([...prev, item.conceptId]));
    reload();
  };

  return (
    <div className="min-h-screen bg-background pb-16">
      {/* 헤더 */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-background/80 border-b border-white/10">
        <div className="max-w-3xl mx-auto px-4 py-4 flex items-center gap-3">
          <Link
            href="/"
            className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-white/10 transition-all"
            aria-label="홈으로"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </Link>
          <div className="flex-1">
            <h1 className="text-lg font-bold text-foreground flex items-center gap-2">
              <span>📚</span>
              <span>오늘의 복습</span>
            </h1>
            <p className="text-xs text-muted-foreground">
              잊을 만할 때 자동 소환 · 간격 반복 학습
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-8 space-y-6">
        {/* 통계 */}
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-4">
            <div className="text-[10px] uppercase tracking-wider text-amber-400/80">오늘 복습 필요</div>
            <div className="text-3xl font-bold text-foreground mt-1">{dueCount}</div>
            <div className="text-xs text-muted-foreground">개 개념</div>
          </div>
          <div className="rounded-xl border border-violet-500/20 bg-violet-500/5 p-4">
            <div className="text-[10px] uppercase tracking-wider text-violet-400/80">전체 등록</div>
            <div className="text-3xl font-bold text-foreground mt-1">{totalCount}</div>
            <div className="text-xs text-muted-foreground">개 개념 추적 중</div>
          </div>
        </div>

        {/* 복습 카드 목록 */}
        {dueCount === 0 && totalCount === 0 && (
          <div className="rounded-2xl border border-white/10 bg-card/50 p-10 text-center">
            <div className="text-4xl mb-3">✨</div>
            <p className="text-sm text-muted-foreground mb-1">
              아직 복습 예정 개념이 없어요.
            </p>
            <p className="text-xs text-muted-foreground">
              Day를 완료하면 개념들이 자동으로 여기 추가됩니다.
            </p>
          </div>
        )}

        {dueCount > 0 && allDone && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-8 text-center space-y-3"
          >
            <div className="text-4xl">🎉</div>
            <p className="text-lg font-bold text-emerald-400">오늘의 복습 완료!</p>
            <p className="text-sm text-muted-foreground">
              모든 개념 복습을 마쳤어요. 잘하셨습니다!
            </p>
          </motion.div>
        )}

        {pendingItems.length > 0 && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-semibold text-foreground">
                지금 복습할 개념 ({pendingItems.length}개)
              </h2>
              <span className="text-xs text-muted-foreground">
                완료: {completedIds.size}/{dueCount}
              </span>
            </div>

            <AnimatePresence>
              {pendingItems.map((item) => (
                <ReviewCard
                  key={item.conceptId}
                  item={item}
                  onDone={(correct) => handleDone(item, correct)}
                />
              ))}
            </AnimatePresence>
          </div>
        )}

        {/* 예정된 복습 */}
        <UpcomingList items={items} />

        {/* 전체 목록 토글 */}
        {totalCount > 0 && (
          <div className="pt-2">
            <button
              onClick={() => setShowAll((v) => !v)}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
            >
              {showAll ? '목록 접기 ▲' : `전체 목록 보기 (${totalCount}개) ▼`}
            </button>

            <AnimatePresence>
              {showAll && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-3 space-y-2"
                >
                  {items
                    .sort((a, b) => a.dueAt - b.dueAt)
                    .map((item) => {
                      const now = Date.now();
                      const overdue = item.dueAt <= now;
                      const daysLeft = Math.ceil((item.dueAt - now) / (24 * 60 * 60 * 1000));
                      return (
                        <div
                          key={item.conceptId}
                          className={`flex items-center gap-3 p-3 rounded-xl border text-sm ${
                            overdue
                              ? 'border-amber-500/20 bg-amber-500/5'
                              : 'border-white/5 bg-card/30'
                          }`}
                        >
                          <div className="flex-1 min-w-0">
                            <div className="text-foreground/80 truncate">{item.conceptTitle}</div>
                            <div className="text-xs text-muted-foreground">{item.sourceLabel}</div>
                          </div>
                          <div className="shrink-0 text-xs">
                            {overdue ? (
                              <span className="text-amber-400">복습 필요</span>
                            ) : (
                              <span className="text-muted-foreground">{daysLeft}일 후</span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  {totalCount > 0 && (
                    <button
                      onClick={() => {
                        if (confirm('복습 일정을 전부 초기화할까요? 되돌릴 수 없어요.')) {
                          clearAll();
                        }
                      }}
                      className="text-xs text-muted-foreground hover:text-rose-400 transition-colors mt-2"
                    >
                      전부 초기화
                    </button>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </main>
    </div>
  );
}
