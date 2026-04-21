'use client';

import { useMemo } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useProgress } from '@/hooks/useProgress';
import { useMistakeNotebook } from '@/hooks/useMistakeNotebook';
import { courses, krCourses, caCourses } from '@/data/curriculum';
import { GradeId } from '@/lib/types';

// ──────────────────────────────────────────────────────────────────────────
// Helpers
// ──────────────────────────────────────────────────────────────────────────

function getStartOfWeek(): Date {
  const now = new Date();
  const day = now.getDay(); // 0=Sun
  const diff = now.getDate() - day + (day === 0 ? -6 : 1); // Mon
  const monday = new Date(now.setDate(diff));
  monday.setHours(0, 0, 0, 0);
  return monday;
}

function formatDate(isoString: string): string {
  return new Date(isoString).toLocaleDateString('ko-KR', {
    month: 'short',
    day: 'numeric',
    weekday: 'short',
  });
}

function relativeDay(isoString: string): string {
  const diff = Math.floor(
    (Date.now() - new Date(isoString).getTime()) / 86400000
  );
  if (diff === 0) return '오늘';
  if (diff === 1) return '어제';
  return `${diff}일 전`;
}

// ──────────────────────────────────────────────────────────────────────────
// Page
// ──────────────────────────────────────────────────────────────────────────

export default function ParentReportPage() {
  const { profile, isLoaded, getCourseProgress } = useProgress();
  const { entries, analytics } = useMistakeNotebook();

  const weekStart = useMemo(() => getStartOfWeek(), []);

  // ── 1. This-week completed days ─────────────────────────────────────────
  const weeklyDays = useMemo(() => {
    if (!isLoaded) return [];
    const allGrades: GradeId[] = [...krCourses, ...caCourses];
    const result: { grade: GradeId; dayNumber: number; completedAt: string }[] = [];

    for (const gradeId of allGrades) {
      const cp = getCourseProgress(gradeId);
      for (const [dayStr, record] of Object.entries(cp.days)) {
        if (record.status === 'completed' && record.completedAt) {
          const completedDate = new Date(record.completedAt);
          if (completedDate >= weekStart) {
            result.push({
              grade: gradeId,
              dayNumber: parseInt(dayStr),
              completedAt: record.completedAt,
            });
          }
        }
      }
    }

    return result.sort(
      (a, b) =>
        new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime()
    );
  }, [isLoaded, getCourseProgress, weekStart]);

  // ── 2. All-time stats ───────────────────────────────────────────────────
  const allTimeStats = useMemo(() => {
    if (!isLoaded) return { completedDays: 0, totalXP: 0, maxStreak: 0 };
    const allGrades: GradeId[] = [...krCourses, ...caCourses];
    let completedDays = 0;
    let totalXP = 0;
    let maxStreak = 0;
    for (const gradeId of allGrades) {
      const cp = getCourseProgress(gradeId);
      completedDays += Object.values(cp.days).filter(
        (d) => d.status === 'completed'
      ).length;
      totalXP += cp.xp;
      maxStreak = Math.max(maxStreak, cp.streak);
    }
    return { completedDays, totalXP, maxStreak };
  }, [isLoaded, getCourseProgress]);

  // ── 3. Problems solved this week ────────────────────────────────────────
  const weeklyProblems = useMemo(() => {
    const weekStartTs = weekStart.getTime();
    const weekEntries = entries.filter((e) => e.lastAttemptedAt >= weekStartTs);
    const total = weekEntries.reduce((sum, e) => {
      return (
        sum +
        e.history.filter((h) => h.at >= weekStartTs).length
      );
    }, 0);
    const correct = weekEntries.reduce((sum, e) => {
      return (
        sum +
        e.history.filter((h) => h.at >= weekStartTs && h.isCorrect).length
      );
    }, 0);
    return { total, correct, accuracy: total > 0 ? Math.round((correct / total) * 100) : null };
  }, [entries, weekStart]);

  // ── 4. Weak topics (most wrong) ─────────────────────────────────────────
  const weakTopics = useMemo(() => {
    const topicMap: Record<string, number> = {};
    for (const entry of entries) {
      const wrongCount = entry.history.filter((h) => !h.isCorrect).length;
      if (wrongCount === 0) continue;
      const topic = entry.sectionLabel || entry.sourceLabel;
      topicMap[topic] = (topicMap[topic] || 0) + wrongCount;
    }
    return Object.entries(topicMap)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3);
  }, [entries]);

  // ── 5. Per-course progress ──────────────────────────────────────────────
  const courseStats = useMemo(() => {
    if (!isLoaded) return [];
    const allGrades: GradeId[] = [...krCourses, ...caCourses];
    return allGrades.map((gradeId) => {
      const cp = getCourseProgress(gradeId);
      const total = courses[gradeId].totalDays;
      const done = Object.values(cp.days).filter(
        (d) => d.status === 'completed'
      ).length;
      return { gradeId, title: courses[gradeId].title, done, total, pct: Math.round((done / total) * 100) };
    }).filter((c) => c.done > 0);
  }, [isLoaded, getCourseProgress]);

  const studentName = profile.name || '학생';

  return (
    <div className="min-h-screen bg-background pb-16">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-white/10">
        <div className="max-w-3xl mx-auto px-4 py-4 flex items-center gap-3">
          <Link
            href="/"
            className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-white/10 transition-all"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </Link>
          <div className="flex-1">
            <h1 className="text-lg font-bold text-foreground flex items-center gap-2">
              <span>📊</span>
              <span>부모 리포트</span>
            </h1>
            <p className="text-xs text-muted-foreground">
              {studentName}의 한 주 학습 현황
            </p>
          </div>
          <button
            onClick={() => window.print()}
            className="px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-sm text-muted-foreground hover:text-foreground hover:bg-white/10 transition-all flex items-center gap-2"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 6 2 18 2 18 9" />
              <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
              <rect x="6" y="14" width="12" height="8" />
            </svg>
            프린트
          </button>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-8 space-y-8">
        {/* Week header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-foreground mb-1">
            이번 주 학습 요약
          </h2>
          <p className="text-sm text-muted-foreground">
            {weekStart.toLocaleDateString('ko-KR', { month: 'long', day: 'numeric' })} ~{' '}
            {new Date(weekStart.getTime() + 6 * 86400000).toLocaleDateString('ko-KR', {
              month: 'long',
              day: 'numeric',
            })}
          </p>
        </motion.div>

        {/* ── Quick stats ── */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3"
        >
          <StatTile
            icon="📅"
            label="이번 주 완료 Day"
            value={weeklyDays.length.toString()}
            sub="개"
            color="violet"
          />
          <StatTile
            icon="✏️"
            label="풀이한 문제"
            value={weeklyProblems.total.toString()}
            sub="문제"
            color="sky"
          />
          <StatTile
            icon="🎯"
            label="정답률"
            value={weeklyProblems.accuracy !== null ? `${weeklyProblems.accuracy}` : '—'}
            sub={weeklyProblems.accuracy !== null ? '%' : ''}
            color="emerald"
          />
          <StatTile
            icon="🔥"
            label="최장 스트릭"
            value={allTimeStats.maxStreak.toString()}
            sub="일 연속"
            color="amber"
          />
        </motion.section>

        {/* ── Mistake notebook summary ── */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="rounded-2xl border border-white/10 bg-card/30 p-6 space-y-4"
        >
          <h3 className="text-base font-semibold text-foreground flex items-center gap-2">
            <span>📓</span> 오답 노트 현황
          </h3>
          <div className="grid grid-cols-3 gap-3">
            <div className="text-center">
              <div className="text-2xl font-bold text-rose-400">{analytics.currentlyWrong}</div>
              <div className="text-xs text-muted-foreground mt-0.5">현재 틀린 문제</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-400">{analytics.resolved}</div>
              <div className="text-xs text-muted-foreground mt-0.5">해결한 문제</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-violet-400">{analytics.total}</div>
              <div className="text-xs text-muted-foreground mt-0.5">전체 기록</div>
            </div>
          </div>
        </motion.section>

        {/* ── Weak topics ── */}
        {weakTopics.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="rounded-2xl border border-rose-500/20 bg-rose-500/5 p-6 space-y-4"
          >
            <h3 className="text-base font-semibold text-foreground flex items-center gap-2">
              <span>⚠️</span> 많이 틀린 개념 Top 3
            </h3>
            <div className="space-y-2">
              {weakTopics.map(([topic, count], idx) => (
                <div key={topic} className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-rose-500/20 text-rose-300 text-xs font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <span className="text-sm text-foreground/80 flex-1 min-w-0 truncate">{topic}</span>
                  <span className="text-xs text-rose-400 shrink-0">{count}번 틀림</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground">
              💡 이 개념들을 중점적으로 복습하면 좋아요.
            </p>
          </motion.section>
        )}

        {/* ── This-week day list ── */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="rounded-2xl border border-white/10 bg-card/30 p-6 space-y-4"
        >
          <h3 className="text-base font-semibold text-foreground flex items-center gap-2">
            <span>✅</span> 이번 주 완료한 Day
          </h3>
          {weeklyDays.length === 0 ? (
            <p className="text-sm text-muted-foreground py-4 text-center">
              이번 주 아직 완료한 Day가 없어요.
            </p>
          ) : (
            <div className="space-y-2">
              {weeklyDays.map((d) => (
                <div
                  key={`${d.grade}-${d.dayNumber}`}
                  className="flex items-center gap-3 py-2 border-b border-white/5 last:border-0"
                >
                  <span className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 text-sm shrink-0">
                    ✓
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-foreground">
                      {courses[d.grade]?.title} · Day {d.dayNumber}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {formatDate(d.completedAt)}
                    </p>
                  </div>
                  <span className="text-xs text-muted-foreground shrink-0">
                    {relativeDay(d.completedAt)}
                  </span>
                </div>
              ))}
            </div>
          )}
        </motion.section>

        {/* ── Course progress ── */}
        {courseStats.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="rounded-2xl border border-white/10 bg-card/30 p-6 space-y-4"
          >
            <h3 className="text-base font-semibold text-foreground flex items-center gap-2">
              <span>📈</span> 과목별 진도
            </h3>
            <div className="space-y-3">
              {courseStats.map((cs) => (
                <div key={cs.gradeId}>
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-foreground">{cs.title}</span>
                    <span className="text-muted-foreground text-xs">
                      {cs.done} / {cs.total} Day ({cs.pct}%)
                    </span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-violet-500 to-purple-500"
                      initial={{ width: 0 }}
                      animate={{ width: `${cs.pct}%` }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* ── Overall badges ── */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="grid grid-cols-3 gap-3"
        >
          <div className="rounded-2xl border border-violet-500/20 bg-violet-500/5 p-4 text-center">
            <div className="text-2xl mb-1">🏅</div>
            <div className="text-xl font-bold text-violet-300">{allTimeStats.totalXP}</div>
            <div className="text-xs text-muted-foreground">누적 XP</div>
          </div>
          <div className="rounded-2xl border border-sky-500/20 bg-sky-500/5 p-4 text-center">
            <div className="text-2xl mb-1">📚</div>
            <div className="text-xl font-bold text-sky-300">{allTimeStats.completedDays}</div>
            <div className="text-xs text-muted-foreground">완료한 Day</div>
          </div>
          <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-4 text-center">
            <div className="text-2xl mb-1">🔥</div>
            <div className="text-xl font-bold text-amber-300">{allTimeStats.maxStreak}</div>
            <div className="text-xs text-muted-foreground">최장 스트릭</div>
          </div>
        </motion.section>

        {/* ── Note ── */}
        <p className="text-xs text-muted-foreground text-center pb-4">
          데이터는 이 기기의 로컬 저장소 기준 · 마지막 업데이트: {new Date().toLocaleString('ko-KR')}
        </p>
      </main>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────────────────
// Sub-components
// ──────────────────────────────────────────────────────────────────────────

function StatTile({
  icon,
  label,
  value,
  sub,
  color,
}: {
  icon: string;
  label: string;
  value: string;
  sub: string;
  color: 'violet' | 'sky' | 'emerald' | 'amber';
}) {
  const colors: Record<string, string> = {
    violet: 'border-violet-500/20 bg-violet-500/5',
    sky: 'border-sky-500/20 bg-sky-500/5',
    emerald: 'border-emerald-500/20 bg-emerald-500/5',
    amber: 'border-amber-500/20 bg-amber-500/5',
  };
  const textColors: Record<string, string> = {
    violet: 'text-violet-300',
    sky: 'text-sky-300',
    emerald: 'text-emerald-300',
    amber: 'text-amber-300',
  };

  return (
    <div className={`rounded-2xl border p-4 ${colors[color]}`}>
      <div className="text-xl mb-2">{icon}</div>
      <div className={`text-2xl font-bold ${textColors[color]}`}>
        {value}
        <span className="text-sm font-normal ml-0.5">{sub}</span>
      </div>
      <div className="text-xs text-muted-foreground mt-0.5">{label}</div>
    </div>
  );
}
