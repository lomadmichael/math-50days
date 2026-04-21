'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useProgress } from '@/hooks/useProgress';
import { courses, courseOrder } from '@/data/curriculum';
import { GradeId } from '@/lib/types';

const gradeGradients: Record<GradeId, string> = {
  foundation: 'from-orange-500 to-amber-500',
  grade1: 'from-blue-500 to-cyan-500',
  grade2: 'from-purple-500 to-violet-500',
  grade3: 'from-emerald-500 to-teal-500',
  'bc-g67': 'from-sky-500 to-cyan-500',
  'bc-g8': 'from-rose-500 to-pink-500',
  'bc-g9': 'from-amber-500 to-yellow-500',
};

const gradeColors: Record<GradeId, string> = {
  foundation: 'text-orange-400',
  grade1: 'text-blue-400',
  grade2: 'text-purple-400',
  grade3: 'text-emerald-400',
  'bc-g67': 'text-sky-400',
  'bc-g8': 'text-rose-400',
  'bc-g9': 'text-amber-400',
};

const levelTitles: Record<number, string> = {
  1: '수학 새싹',
  2: '수학 탐험가',
  3: '수학 도전자',
  4: '수학 해결사',
  5: '수학 전략가',
  6: '수학 달인',
  7: '수학 마스터',
};

const streakBadges = [
  { days: 3, icon: '🔥', title: '3일 연속', desc: '꾸준함의 시작' },
  { days: 7, icon: '🔥', title: '7일 연속', desc: '1주일 완주!' },
  { days: 14, icon: '💪', title: '14일 연속', desc: '2주 연속 대단해!' },
  { days: 30, icon: '🏆', title: '30일 연속', desc: '한 달 마스터' },
  { days: 50, icon: '👑', title: '50일 완주', desc: '전설의 수학러' },
];

export default function ProfilePage() {
  const { profile, isLoaded, getCourseProgress, getCompletedDaysCount } = useProgress();

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">로딩 중...</div>
      </div>
    );
  }

  // Aggregate stats
  let totalXP = 0;
  let totalCompleted = 0;
  let totalDays = 0;
  let maxStreak = 0;
  let maxLevel = 1;

  courseOrder.forEach(gradeId => {
    const progress = getCourseProgress(gradeId);
    totalXP += progress.xp;
    totalCompleted += getCompletedDaysCount(gradeId);
    totalDays += courses[gradeId].totalDays;
    if (progress.streak > maxStreak) maxStreak = progress.streak;
    if (progress.level > maxLevel) maxLevel = progress.level;
  });

  const overallPercentage = Math.round((totalCompleted / totalDays) * 100);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-white/10">
        <div className="max-w-3xl mx-auto px-4 py-4 flex items-center gap-3">
          <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </Link>
          <h1 className="text-lg font-bold text-foreground">내 프로필</h1>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-6 space-y-6">
        {/* Profile Card */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl border border-violet-500/20 bg-gradient-to-br from-violet-500/10 to-purple-500/5 p-6"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-3xl">
              {maxLevel >= 5 ? '🏅' : maxLevel >= 3 ? '📐' : '📚'}
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground">
                Lv.{maxLevel} {levelTitles[maxLevel] || '수학 새싹'}
              </h2>
              <p className="text-sm text-muted-foreground">
                총 {totalXP} XP 획득
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-3">
            <div className="rounded-xl bg-white/5 border border-white/10 p-3 text-center">
              <div className="text-2xl font-bold text-foreground">{totalCompleted}</div>
              <div className="text-xs text-muted-foreground">완료한 Day</div>
            </div>
            <div className="rounded-xl bg-white/5 border border-white/10 p-3 text-center">
              <div className="text-2xl font-bold text-amber-400">🔥 {maxStreak}</div>
              <div className="text-xs text-muted-foreground">최고 스트릭</div>
            </div>
            <div className="rounded-xl bg-white/5 border border-white/10 p-3 text-center">
              <div className="text-2xl font-bold text-foreground">{overallPercentage}%</div>
              <div className="text-xs text-muted-foreground">전체 진도</div>
            </div>
          </div>
        </motion.section>

        {/* Course Progress */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h3 className="text-lg font-bold text-foreground mb-3">코스별 진도</h3>
          <div className="space-y-3">
            {courseOrder.map(gradeId => {
              const course = courses[gradeId];
              const progress = getCourseProgress(gradeId);
              const completed = getCompletedDaysCount(gradeId);
              const pct = Math.round((completed / course.totalDays) * 100);

              return (
                <Link key={gradeId} href={`/${gradeId}`}>
                  <div className="rounded-xl border border-white/10 bg-card p-4 hover:bg-card/80 transition-colors mb-3">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{course.icon}</span>
                        <span className={`font-medium ${gradeColors[gradeId]}`}>{course.title}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        Lv.{progress.level} · {progress.xp} XP
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full bg-gradient-to-r ${gradeGradients[gradeId]}`}
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                      <span className="text-xs text-muted-foreground w-16 text-right">
                        {completed}/{course.totalDays}일
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </motion.section>

        {/* Streak Badges */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-lg font-bold text-foreground mb-3">스트릭 뱃지</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {streakBadges.map(badge => {
              const earned = maxStreak >= badge.days;
              return (
                <div
                  key={badge.days}
                  className={`rounded-xl border p-4 text-center transition-all ${
                    earned
                      ? 'border-amber-500/30 bg-amber-500/10'
                      : 'border-white/5 bg-card/30 opacity-40'
                  }`}
                >
                  <div className="text-3xl mb-2">{earned ? badge.icon : '🔒'}</div>
                  <div className="text-sm font-medium text-foreground">{badge.title}</div>
                  <div className="text-xs text-muted-foreground mt-1">{badge.desc}</div>
                </div>
              );
            })}
          </div>
        </motion.section>

        {/* Study History */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-lg font-bold text-foreground mb-3">최근 학습 기록</h3>
          <div className="rounded-xl border border-white/10 bg-card overflow-hidden">
            {(() => {
              const records: { gradeId: GradeId; day: number; date: string }[] = [];
              courseOrder.forEach(gradeId => {
                const progress = getCourseProgress(gradeId);
                Object.entries(progress.days).forEach(([dayNum, record]) => {
                  if (record.status === 'completed' && record.completedAt) {
                    records.push({ gradeId, day: Number(dayNum), date: record.completedAt });
                  }
                });
              });
              records.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
              const recent = records.slice(0, 10);

              if (recent.length === 0) {
                return (
                  <div className="p-6 text-center text-muted-foreground text-sm">
                    아직 완료한 학습이 없습니다. 첫 Day를 시작해보세요!
                  </div>
                );
              }

              return recent.map((r, i) => (
                <div
                  key={`${r.gradeId}-${r.day}`}
                  className={`flex items-center justify-between px-4 py-3 ${
                    i > 0 ? 'border-t border-white/5' : ''
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`text-sm font-medium ${gradeColors[r.gradeId]}`}>
                      {courses[r.gradeId].title}
                    </span>
                    <span className="text-sm text-foreground">Day {r.day}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {new Date(r.date).toLocaleDateString('ko-KR')}
                  </span>
                </div>
              ));
            })()}
          </div>
        </motion.section>

        {/* Reset Button */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="pt-4 pb-8"
        >
          <button
            onClick={() => {
              if (confirm('모든 학습 데이터를 초기화하시겠습니까? 이 작업은 되돌릴 수 없습니다.')) {
                localStorage.removeItem('math50days-profile');
                window.location.href = '/';
              }
            }}
            className="w-full text-center text-sm text-muted-foreground hover:text-rose-400 transition-colors py-2"
          >
            학습 데이터 초기화
          </button>
        </motion.section>
      </main>
    </div>
  );
}
