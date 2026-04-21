'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { courses, krCourses } from '@/data/curriculum';
import { useProgress } from '@/hooks/useProgress';
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

const gradeGlows: Record<GradeId, string> = {
  foundation: 'hover:shadow-orange-500/20',
  grade1: 'hover:shadow-blue-500/20',
  grade2: 'hover:shadow-purple-500/20',
  grade3: 'hover:shadow-emerald-500/20',
  'bc-g67': 'hover:shadow-sky-500/20',
  'bc-g8': 'hover:shadow-rose-500/20',
  'bc-g9': 'hover:shadow-amber-500/20',
};

const gradeBorders: Record<GradeId, string> = {
  foundation: 'border-orange-500/20',
  grade1: 'border-blue-500/20',
  grade2: 'border-purple-500/20',
  grade3: 'border-emerald-500/20',
  'bc-g67': 'border-sky-500/20',
  'bc-g8': 'border-rose-500/20',
  'bc-g9': 'border-amber-500/20',
};

export default function KrHomePage() {
  const { isLoaded, getCompletedDaysCount, getCourseProgress } = useProgress();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center gap-3">
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
              <span>🇰🇷</span>
              <span>한국 과정</span>
            </h1>
            <p className="text-xs text-muted-foreground">EBS 정승제 50일 수학 기반</p>
          </div>
          <Link
            href="/profile"
            className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-white/10 transition-all"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </Link>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-10">
        {/* Hero */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            수학, <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">50일</span>이면 달라진다
          </h2>
          <p className="text-muted-foreground text-base max-w-xl mx-auto">
            EBS 정승제 선생님의 검증된 커리큘럼으로<br />
            초등 기초부터 중3 완성까지, 매일 50분씩
          </p>
        </motion.section>

        {/* Course Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {krCourses.map((gradeId, index) => {
            const course = courses[gradeId];
            const completed = isLoaded ? getCompletedDaysCount(gradeId) : 0;
            const progress = isLoaded ? getCourseProgress(gradeId) : null;
            const percentage = Math.round((completed / course.totalDays) * 100);
            const hasStarted = completed > 0;

            return (
              <motion.div
                key={gradeId}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/${gradeId}`}>
                  <div
                    className={`group relative overflow-hidden rounded-2xl border ${gradeBorders[gradeId]} bg-card hover:shadow-2xl ${gradeGlows[gradeId]} transition-all duration-300 hover:-translate-y-1`}
                  >
                    <div className={`h-1.5 bg-gradient-to-r ${gradeGradients[gradeId]}`} />
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-2xl">{course.icon}</span>
                            <h3 className="text-xl font-bold text-foreground">{course.title}</h3>
                          </div>
                          <p className="text-sm text-muted-foreground">{course.subtitle}</p>
                        </div>
                        {hasStarted && progress && (
                          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 text-sm font-medium">
                            <span>🔥</span>
                            <span>{progress.streak}일</span>
                          </div>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mb-5 line-clamp-2">
                        {course.description}
                      </p>
                      <div className="mb-4">
                        <div className="flex items-center justify-between text-sm mb-2">
                          <span className="text-muted-foreground">
                            Day {completed}/{course.totalDays}
                          </span>
                          <span className="font-medium text-foreground">{percentage}%</span>
                        </div>
                        <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            className={`h-full rounded-full bg-gradient-to-r ${gradeGradients[gradeId]}`}
                            initial={{ width: 0 }}
                            animate={{ width: `${percentage}%` }}
                            transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                          />
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          {hasStarted && progress && (
                            <span className="text-xs text-muted-foreground">
                              Lv.{progress.level} · {progress.xp} XP
                            </span>
                          )}
                        </div>
                        <span className={`text-sm font-medium bg-gradient-to-r ${gradeGradients[gradeId]} bg-clip-text text-transparent group-hover:opacity-80 transition-opacity flex items-center gap-1`}>
                          {hasStarted ? '이어서 학습' : '시작하기'}
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-70">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </section>

        {/* Info Banner */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="rounded-2xl border border-blue-500/20 bg-blue-500/5 p-6 mb-8"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-2xl shrink-0">
              💡
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">어떤 코스를 선택해야 할까?</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                초등 수학이 불안하다면 <strong className="text-orange-400">기초탄탄</strong>부터 시작하세요.
                현재 학년에 맞는 코스를 선택하면 됩니다. 각 코스는 독립적이라 어디서든 시작할 수 있어요.
                영어 수학 용어는 모든 Day에 이미 병기되어 있습니다.
              </p>
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="border-t border-white/5 py-6 text-center text-xs text-muted-foreground">
        <p>EBS 정승제 선생님의 50일 수학을 기반으로 제작되었습니다</p>
      </footer>
    </div>
  );
}
