'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { courses, courseOrder } from '@/data/curriculum';
import { useProgress } from '@/hooks/useProgress';
import { GradeId } from '@/lib/types';

const gradeGradients: Record<GradeId, string> = {
  foundation: 'from-orange-500 to-amber-500',
  grade1: 'from-blue-500 to-cyan-500',
  grade2: 'from-purple-500 to-violet-500',
  grade3: 'from-emerald-500 to-teal-500',
};

const gradeGlows: Record<GradeId, string> = {
  foundation: 'hover:shadow-orange-500/20',
  grade1: 'hover:shadow-blue-500/20',
  grade2: 'hover:shadow-purple-500/20',
  grade3: 'hover:shadow-emerald-500/20',
};

const gradeBorders: Record<GradeId, string> = {
  foundation: 'border-orange-500/20',
  grade1: 'border-blue-500/20',
  grade2: 'border-purple-500/20',
  grade3: 'border-emerald-500/20',
};

export default function HomePage() {
  const { isLoaded, getCompletedDaysCount, getCourseProgress } = useProgress();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
              50
            </div>
            <div>
              <h1 className="text-lg font-bold text-foreground">50일 수학</h1>
              <p className="text-xs text-muted-foreground">중학교 맞춤 학습</p>
            </div>
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

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            수학, <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">50일</span>이면 달라진다
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            EBS 정승제 선생님의 검증된 커리큘럼으로<br />
            초등 기초부터 중3 완성까지, 매일 50분씩
          </p>
        </motion.section>

        {/* 이번 주 학습 대비 배너 (학교 메일 기반) */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10"
        >
          <Link href="/this-week">
            <div className="group relative overflow-hidden rounded-2xl border border-violet-500/20 bg-gradient-to-br from-violet-500/15 via-purple-500/10 to-violet-500/15 hover:border-violet-400/40 transition-all duration-300 hover:-translate-y-0.5">
              <div className="p-5 md:p-6 flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-violet-500/20 flex items-center justify-center text-3xl shrink-0">
                  📬
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-bold text-foreground">이번 주 학습 대비</h3>
                    <span className="text-[10px] uppercase tracking-wider bg-violet-500/20 text-violet-300 px-2 py-0.5 rounded-full font-semibold">
                      NEW
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    학교 선생님 주간 메일 기반 · 다음 주 Quiz·새 주제 예습·샘에게 질문
                  </p>
                </div>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-violet-400 opacity-70 group-hover:translate-x-0.5 transition-transform shrink-0"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </div>
            </div>
          </Link>
        </motion.section>

        {/* Course Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {courseOrder.map((gradeId, index) => {
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
                    {/* Gradient top bar */}
                    <div className={`h-1.5 bg-gradient-to-r ${gradeGradients[gradeId]}`} />

                    <div className="p-6">
                      {/* Course header */}
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-2xl">{course.icon}</span>
                            <h3 className="text-xl font-bold text-foreground">
                              {course.title}
                            </h3>
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

                      {/* Description */}
                      <p className="text-sm text-muted-foreground mb-5 line-clamp-2">
                        {course.description}
                      </p>

                      {/* Progress */}
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

                      {/* CTA */}
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
          className="rounded-2xl border border-violet-500/20 bg-violet-500/5 p-6 mb-8"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center text-2xl shrink-0">
              💡
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">어떤 코스를 선택해야 할까?</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                초등 수학이 불안하다면 <strong className="text-orange-400">기초탄탄</strong>부터 시작하세요.
                현재 학년에 맞는 코스를 선택하면 됩니다. 각 코스는 독립적이라 어디서든 시작할 수 있어요.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Features */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { icon: '📺', title: '영상 강의', desc: '정승제 선생님 직강' },
            { icon: '✏️', title: '문제 풀이', desc: '즉시 채점 + 해설' },
            { icon: '🔥', title: '학습 스트릭', desc: '매일 꾸준히' },
            { icon: '🏅', title: '뱃지 수집', desc: '성취감 UP' },
          ].map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + i * 0.1 }}
              className="rounded-xl border border-white/5 bg-card/50 p-4 text-center"
            >
              <div className="text-2xl mb-2">{feat.icon}</div>
              <div className="text-sm font-medium text-foreground">{feat.title}</div>
              <div className="text-xs text-muted-foreground mt-1">{feat.desc}</div>
            </motion.div>
          ))}
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-6 text-center text-xs text-muted-foreground">
        <p>EBS 정승제 선생님의 50일 수학을 기반으로 제작되었습니다</p>
      </footer>
    </div>
  );
}
