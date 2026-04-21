'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { courses, courseOrder } from '@/data/curriculum';
import { GradeId, DayContent } from '@/lib/types';

interface SearchResult {
  gradeId: GradeId;
  dayNumber: number;
  title: string;
  matchedConcepts: string[];
}

const gradeColors: Record<GradeId, string> = {
  foundation: 'from-orange-500 to-amber-500',
  grade1: 'from-blue-500 to-cyan-500',
  grade2: 'from-purple-500 to-violet-500',
  'bc-g67': 'from-sky-500 to-cyan-500',
  'bc-g8': 'from-rose-500 to-pink-500',
  'bc-g9': 'from-amber-500 to-yellow-500',
  grade3: 'from-emerald-500 to-teal-500',
};

const gradeBorderColors: Record<GradeId, string> = {
  foundation: 'border-orange-500/20',
  grade1: 'border-blue-500/20',
  grade2: 'border-purple-500/20',
  'bc-g67': 'border-sky-500/20',
  'bc-g8': 'border-rose-500/20',
  'bc-g9': 'border-amber-500/20',
  grade3: 'border-emerald-500/20',
};

function highlightText(text: string, keyword: string): React.ReactNode {
  if (!keyword || keyword.length < 2) return text;
  const regex = new RegExp(`(${keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  const parts = text.split(regex);
  return (
    <>
      {parts.map((part, i) =>
        regex.test(part) ? (
          <mark key={i} className="bg-yellow-400/30 text-yellow-200 rounded px-0.5">
            {part}
          </mark>
        ) : (
          part
        )
      )}
    </>
  );
}

// 전체 Day 목록 생성 (gradeId + dayNumber 조합)
function getAllDayRefs(): Array<{ gradeId: GradeId; dayNumber: number }> {
  const refs: Array<{ gradeId: GradeId; dayNumber: number }> = [];
  for (const gradeId of courseOrder) {
    const course = courses[gradeId];
    for (let d = 1; d <= course.totalDays; d++) {
      refs.push({ gradeId, dayNumber: d });
    }
  }
  return refs;
}

// 캐시: 한 번 로드된 Day 내용
const dayCache = new Map<string, DayContent | null>();

async function loadDay(gradeId: GradeId, dayNumber: number): Promise<DayContent | null> {
  const key = `${gradeId}/${dayNumber}`;
  if (dayCache.has(key)) return dayCache.get(key)!;
  try {
    const padded = String(dayNumber).padStart(2, '0');
    const mod = await import(`@/data/${gradeId}/days/day${padded}`);
    const content: DayContent = mod.default || mod.dayContent;
    dayCache.set(key, content);
    return content;
  } catch {
    dayCache.set(key, null);
    return null;
  }
}

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [searching, setSearching] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const abortRef = useRef<boolean>(false);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const runSearch = useCallback(async (kw: string) => {
    if (kw.length < 2) {
      setResults([]);
      setSearching(false);
      return;
    }
    abortRef.current = true; // 이전 검색 중단 신호
    const thisAbort = false;
    abortRef.current = false;

    setSearching(true);
    const found: SearchResult[] = [];
    const kwLower = kw.toLowerCase();
    const allDays = getAllDayRefs();

    for (const { gradeId, dayNumber } of allDays) {
      if (abortRef.current) break;
      const content = await loadDay(gradeId, dayNumber);
      if (!content) continue;

      const titleMatch = content.title?.toLowerCase().includes(kwLower);
      const matchedConcepts = (content.concepts || [])
        .filter(
          (c) =>
            c.title.toLowerCase().includes(kwLower) ||
            c.content.toLowerCase().includes(kwLower)
        )
        .map((c) => c.title);

      if (titleMatch || matchedConcepts.length > 0) {
        found.push({
          gradeId,
          dayNumber,
          title: content.title || `Day ${dayNumber}`,
          matchedConcepts,
        });
      }
    }

    if (!abortRef.current) {
      setResults(found);
      setSearching(false);
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => runSearch(query), 300);
    return () => {
      clearTimeout(timer);
      abortRef.current = true;
    };
  }, [query, runSearch]);

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
            <h1 className="text-lg font-bold text-foreground">검색</h1>
            <p className="text-xs text-muted-foreground">전체 Day · 개념 검색</p>
          </div>
        </div>
        {/* 검색 입력창 */}
        <div className="max-w-4xl mx-auto px-4 pb-4">
          <div className="relative">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="개념, 제목 검색 (최소 2글자)..."
              className="w-full pl-10 pr-10 py-3 rounded-xl bg-white/5 border border-white/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-white/30 focus:bg-white/8 transition-all text-sm"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-6">
        {/* 상태별 렌더링 */}
        {query.length > 0 && query.length < 2 ? (
          <p className="text-center text-sm text-muted-foreground py-10">
            2글자 이상 입력하세요
          </p>
        ) : searching ? (
          <div className="flex flex-col items-center justify-center py-16 gap-3">
            <div className="w-6 h-6 border-2 border-white/20 border-t-white/80 rounded-full animate-spin" />
            <p className="text-sm text-muted-foreground">검색 중...</p>
          </div>
        ) : query.length >= 2 && results.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-4xl mb-3">🔍</div>
            <p className="text-sm text-muted-foreground">
              &quot;{query}&quot;에 해당하는 Day가 없어요
            </p>
          </motion.div>
        ) : results.length > 0 ? (
          <div>
            <p className="text-xs text-muted-foreground mb-4">
              {results.length}개 결과
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <AnimatePresence>
                {results.map((r) => {
                  const course = courses[r.gradeId];
                  const gradient = gradeColors[r.gradeId];
                  const border = gradeBorderColors[r.gradeId];
                  return (
                    <motion.div
                      key={`${r.gradeId}/${r.dayNumber}`}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`rounded-2xl border ${border} bg-card overflow-hidden group`}
                    >
                      <div className={`h-1 bg-gradient-to-r ${gradient}`} />
                      <Link href={`/${r.gradeId}/day/${r.dayNumber}`}>
                        <div className="p-4">
                          <div className="flex items-start gap-3">
                            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white font-bold text-sm shrink-0`}>
                              {r.dayNumber}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-xs text-muted-foreground mb-0.5">
                                {course?.title} · Day {r.dayNumber}
                              </div>
                              <div className="text-sm font-medium text-foreground group-hover:text-white transition-colors">
                                {highlightText(r.title, query)}
                              </div>
                              {r.matchedConcepts.length > 0 && (
                                <div className="mt-2 flex flex-wrap gap-1">
                                  {r.matchedConcepts.slice(0, 3).map((c) => (
                                    <span
                                      key={c}
                                      className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-muted-foreground"
                                    >
                                      {highlightText(c, query)}
                                    </span>
                                  ))}
                                  {r.matchedConcepts.length > 3 && (
                                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-muted-foreground">
                                      +{r.matchedConcepts.length - 3}
                                    </span>
                                  )}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-5xl mb-4">🔍</div>
            <p className="text-muted-foreground text-sm">
              학습할 개념이나 단원명을 검색해보세요
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
