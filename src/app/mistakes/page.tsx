'use client';

import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useMistakeNotebook, type MistakeEntry } from '@/hooks/useMistakeNotebook';
import MathRenderer from '@/components/MathRenderer';

type Filter = 'currently-wrong' | 'ever-wrong' | 'all';

export default function MistakesPage() {
  const { entries, deleteEntry, clearAll, analytics } = useMistakeNotebook();
  const [filter, setFilter] = useState<Filter>('currently-wrong');

  const filtered = useMemo(() => {
    const list = entries.filter((e) => {
      const last = e.history[e.history.length - 1];
      const everWrong = e.history.some((h) => !h.isCorrect);
      if (filter === 'currently-wrong') return last && !last.isCorrect;
      if (filter === 'ever-wrong') return everWrong;
      return true;
    });
    // 최근 시도 순
    return list.sort((a, b) => b.lastAttemptedAt - a.lastAttemptedAt);
  }, [entries, filter]);

  // 출처별 그룹핑 (시각 정리)
  const bySource = useMemo(() => {
    const groups: Record<string, MistakeEntry[]> = {};
    filtered.forEach((e) => {
      const key = e.sourceLabel || e.sourceId;
      if (!groups[key]) groups[key] = [];
      groups[key].push(e);
    });
    return groups;
  }, [filtered]);

  return (
    <div className="min-h-screen bg-background pb-16">
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-background/80 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-3">
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
              <span>📓</span>
              <span>오답 노트</span>
            </h1>
            <p className="text-xs text-muted-foreground">
              내가 틀렸던 문제를 모아서 복습
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 space-y-6">
        {/* 통계 배지 */}
        <div className="grid grid-cols-3 gap-3">
          <StatCard
            label="현재 틀림"
            value={analytics.currentlyWrong}
            color="rose"
            hint="마지막 시도가 오답"
          />
          <StatCard
            label="해결됨"
            value={analytics.resolved}
            color="emerald"
            hint="틀렸다가 맞힘"
          />
          <StatCard
            label="전체"
            value={analytics.total}
            color="violet"
            hint="누적 풀이 문제"
          />
        </div>

        {/* 필터 탭 */}
        <div className="flex gap-2 items-center">
          <FilterButton active={filter === 'currently-wrong'} onClick={() => setFilter('currently-wrong')}>
            ❌ 현재 틀린 것만
          </FilterButton>
          <FilterButton active={filter === 'ever-wrong'} onClick={() => setFilter('ever-wrong')}>
            🔄 한 번이라도 틀린 것
          </FilterButton>
          <FilterButton active={filter === 'all'} onClick={() => setFilter('all')}>
            📄 전체
          </FilterButton>
          {entries.length > 0 && (
            <button
              onClick={() => {
                if (confirm('오답 노트 전부 삭제할까요? 되돌릴 수 없어요.')) clearAll();
              }}
              className="ml-auto text-xs text-muted-foreground hover:text-rose-400 transition-colors"
            >
              전부 비우기
            </button>
          )}
        </div>

        {/* 항목 리스트 */}
        {filtered.length === 0 ? (
          <div className="rounded-2xl border border-white/10 bg-card/50 p-10 text-center">
            <div className="text-4xl mb-3">✨</div>
            <p className="text-sm text-muted-foreground mb-1">
              {filter === 'currently-wrong' && '지금 막히는 문제가 없어요!'}
              {filter === 'ever-wrong' && '틀린 문제가 아직 없어요.'}
              {filter === 'all' && '아직 풀이 기록이 없어요.'}
            </p>
            <p className="text-xs text-muted-foreground">
              Day 를 풀면 자동으로 여기에 기록돼요.
            </p>
          </div>
        ) : (
          <div className="space-y-8">
            {Object.entries(bySource).map(([sourceLabel, items]) => (
              <section key={sourceLabel}>
                <h2 className="text-sm font-semibold text-foreground/90 mb-3 flex items-center gap-2">
                  <span className="text-muted-foreground">📍</span>
                  <span>{sourceLabel}</span>
                  <span className="text-xs text-muted-foreground font-normal">
                    {items.length}문제
                  </span>
                </h2>
                <div className="space-y-3">
                  <AnimatePresence initial={false}>
                    {items.map((e) => (
                      <MistakeCard
                        key={e.problemId}
                        entry={e}
                        onDelete={() => deleteEntry(e.problemId)}
                      />
                    ))}
                  </AnimatePresence>
                </div>
              </section>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

function StatCard({
  label,
  value,
  color,
  hint,
}: {
  label: string;
  value: number;
  color: 'rose' | 'emerald' | 'violet';
  hint: string;
}) {
  const colorClasses = {
    rose: 'border-rose-500/20 bg-rose-500/5 text-rose-300',
    emerald: 'border-emerald-500/20 bg-emerald-500/5 text-emerald-300',
    violet: 'border-violet-500/20 bg-violet-500/5 text-violet-300',
  }[color];
  return (
    <div className={`rounded-xl border p-4 ${colorClasses}`}>
      <div className="text-[10px] uppercase tracking-wider opacity-80">{label}</div>
      <div className="text-3xl font-bold text-foreground mt-1">{value}</div>
      <div className="text-xs opacity-70 mt-0.5">{hint}</div>
    </div>
  );
}

function FilterButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
        active
          ? 'bg-violet-500 text-white shadow-sm'
          : 'bg-white/5 text-muted-foreground hover:text-foreground hover:bg-white/10'
      }`}
    >
      {children}
    </button>
  );
}

function MistakeCard({
  entry,
  onDelete,
}: {
  entry: MistakeEntry;
  onDelete: () => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const last = entry.history[entry.history.length - 1];
  const wrongTimes = entry.history.filter((h) => !h.isCorrect).length;
  const totalTries = entry.history.length;
  const resolved = last && last.isCorrect && entry.history.some((h) => !h.isCorrect);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className={`rounded-xl border ${
        resolved
          ? 'border-emerald-500/20 bg-emerald-500/5'
          : last && !last.isCorrect
          ? 'border-rose-500/20 bg-rose-500/5'
          : 'border-white/10 bg-card'
      } overflow-hidden`}
    >
      <div className="p-4 cursor-pointer" onClick={() => setExpanded((v) => !v)}>
        <div className="flex items-start gap-3">
          <div className="shrink-0 mt-0.5">
            {resolved ? (
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 text-sm">
                ✓
              </span>
            ) : last && !last.isCorrect ? (
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-rose-500/20 text-rose-400 text-sm font-bold">
                ✗
              </span>
            ) : (
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white/10 text-muted-foreground text-xs">
                ?
              </span>
            )}
          </div>
          <div className="flex-1 min-w-0">
            {entry.sectionLabel && (
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">
                {entry.sectionLabel}
              </div>
            )}
            <div className="text-sm text-foreground/90 leading-relaxed">
              <MathRenderer content={entry.question} />
            </div>
            <div className="mt-2 flex items-center gap-3 text-xs text-muted-foreground">
              {wrongTimes > 0 && (
                <span className="text-rose-400">
                  {wrongTimes}번 틀림
                </span>
              )}
              <span>{totalTries}회 시도</span>
              <span>{formatRelative(entry.lastAttemptedAt)}</span>
            </div>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setExpanded((v) => !v);
            }}
            className="text-muted-foreground hover:text-foreground shrink-0 p-1"
            aria-label="펼치기"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ transform: expanded ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        </div>
      </div>

      {expanded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="px-4 pb-4 pt-0 border-t border-white/5 space-y-3"
        >
          {/* 정답 */}
          <div>
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">
              정답
            </div>
            <div className="text-sm text-emerald-300">
              <MathRenderer content={entry.correctAnswer} inline />
            </div>
          </div>

          {/* 시도 기록 */}
          <div>
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1.5">
              내 시도 ({entry.history.length}회)
            </div>
            <div className="space-y-1.5">
              {entry.history.map((h, idx) => (
                <div
                  key={idx}
                  className={`flex items-center gap-2 text-xs px-2.5 py-1.5 rounded-md ${
                    h.isCorrect
                      ? 'bg-emerald-500/10 text-emerald-300'
                      : 'bg-rose-500/10 text-rose-300'
                  }`}
                >
                  <span>{h.isCorrect ? '✓' : '✗'}</span>
                  <span className="flex-1 font-mono">"{h.answer || '(미입력)'}"</span>
                  <span className="text-muted-foreground/70 shrink-0">
                    {formatRelative(h.at)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 액션 */}
          <div className="flex items-center justify-between pt-1">
            <button
              onClick={(ev) => {
                ev.stopPropagation();
                if (confirm('이 문제를 오답 노트에서 삭제할까요?')) onDelete();
              }}
              className="text-xs text-muted-foreground hover:text-rose-400"
            >
              삭제
            </button>
            <span className="text-xs text-muted-foreground">
              💡 샘(AI 튜터)에게 "이 문제 설명해줘"라고 물어보세요
            </span>
          </div>
        </motion.div>
      )}
    </motion.article>
  );
}

function formatRelative(ts: number): string {
  const now = Date.now();
  const diff = now - ts;
  const min = Math.floor(diff / 60000);
  const hr = Math.floor(diff / 3600000);
  const day = Math.floor(diff / 86400000);
  if (min < 1) return '방금';
  if (min < 60) return `${min}분 전`;
  if (hr < 24) return `${hr}시간 전`;
  if (day < 7) return `${day}일 전`;
  return new Date(ts).toLocaleDateString('ko-KR');
}
