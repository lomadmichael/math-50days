'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { courses, caCourses } from '@/data/curriculum';
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

// 학년별 하이라이트 배지 (아들 현재 학년은 Grade 8)
const gradeBadges: Partial<Record<GradeId, { label: string; color: string }>> = {
  'bc-g8': { label: '현재 학년', color: 'bg-rose-500/20 text-rose-300' },
  'bc-g9': { label: '내년 대비', color: 'bg-amber-500/20 text-amber-300' },
  'bc-g67': { label: '복습용', color: 'bg-sky-500/20 text-sky-300' },
};

export default function CaHomePage() {
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
              <span>🇨🇦</span>
              <span>캐나다 BC 과정</span>
            </h1>
            <p className="text-xs text-muted-foreground">Surrey 교육청 공식 · 영어 메인 + 한국어 보조</p>
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
            Math, made for <span className="bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">BC Canada</span>
          </h2>
          <p className="text-muted-foreground text-base max-w-xl mx-auto">
            Grandview Heights Secondary · Surrey 교육청 공식 커리큘럼 기반.<br />
            영어 수업과 100% 동기화, 한국어 보조 설명으로 이해 두 배.
          </p>
        </motion.section>

        {/* 이번 주 학습 대비 (캐나다 메인 배너) */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10"
        >
          <Link href="/this-week">
            <div className="group relative overflow-hidden rounded-2xl border border-violet-500/30 bg-gradient-to-br from-violet-500/15 via-purple-500/10 to-violet-500/15 hover:border-violet-400/50 transition-all duration-300 hover:-translate-y-0.5">
              <div className="p-6 flex items-center gap-5">
                <div className="w-16 h-16 rounded-2xl bg-violet-500/25 flex items-center justify-center text-4xl shrink-0">
                  📬
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-xl font-bold text-foreground">이번 주 학교 수학 대비</h3>
                    <span className="text-[10px] uppercase tracking-wider bg-violet-500/25 text-violet-200 px-2 py-0.5 rounded-full font-semibold">
                      MAIN
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    담임 선생님 주간 메일 기반 · 다음 주 Quiz·새 주제 예습·샘(Sam)에게 질문
                  </p>
                </div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-violet-400 opacity-80 group-hover:translate-x-1 transition-transform shrink-0">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </div>
            </div>
          </Link>
        </motion.section>

        {/* Course Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {caCourses.map((gradeId, index) => {
            const course = courses[gradeId];
            const completed = isLoaded ? getCompletedDaysCount(gradeId) : 0;
            const progress = isLoaded ? getCourseProgress(gradeId) : null;
            const percentage = Math.round((completed / course.totalDays) * 100);
            const hasStarted = completed > 0;
            const badge = gradeBadges[gradeId];

            return (
              <motion.div
                key={gradeId}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <Link href={`/${gradeId}`}>
                  <div
                    className={`group relative overflow-hidden rounded-2xl border ${gradeBorders[gradeId]} bg-card hover:shadow-2xl ${gradeGlows[gradeId]} transition-all duration-300 hover:-translate-y-1 h-full`}
                  >
                    <div className={`h-1.5 bg-gradient-to-r ${gradeGradients[gradeId]}`} />
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">{course.icon}</span>
                          <h3 className="text-lg font-bold text-foreground">{course.title}</h3>
                        </div>
                        {badge && (
                          <span className={`text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full font-semibold ${badge.color}`}>
                            {badge.label}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground mb-5 line-clamp-3 min-h-[3em]">
                        {course.description}
                      </p>
                      <div className="mb-4">
                        <div className="flex items-center justify-between text-xs mb-2">
                          <span className="text-muted-foreground">
                            Day {completed}/{course.totalDays}
                          </span>
                          <span className="font-medium text-foreground">{percentage}%</span>
                        </div>
                        <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            className={`h-full rounded-full bg-gradient-to-r ${gradeGradients[gradeId]}`}
                            initial={{ width: 0 }}
                            animate={{ width: `${percentage}%` }}
                            transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                          />
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        {hasStarted && progress ? (
                          <span className="text-xs text-muted-foreground">
                            Lv.{progress.level} · {progress.xp} XP
                          </span>
                        ) : (
                          <span className="text-xs text-muted-foreground">
                            {course.parts.length} parts
                          </span>
                        )}
                        <span className={`text-xs font-medium bg-gradient-to-r ${gradeGradients[gradeId]} bg-clip-text text-transparent group-hover:opacity-80 transition-opacity flex items-center gap-1`}>
                          {hasStarted ? '이어서' : '시작'}
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-70">
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
          className="rounded-2xl border border-rose-500/20 bg-rose-500/5 p-6 mb-8"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-rose-500/10 flex items-center justify-center text-2xl shrink-0">
              🎓
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">BC 커리큘럼에 대해</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                캐나다 BC 교육청 공식 Grade 6-7-8-9 수학 과정. <strong className="text-rose-400">Grade 8</strong> 은
                현재 학년이라 풀 콘텐츠가 준비돼 있어요. Grade 6-7 · Grade 9 는 구조만 있고 콘텐츠는 점진 확장 예정.
                모든 개념·문제는 <strong className="text-rose-400">영어 메인</strong> 이고 수학 용어는 처음 등장 시 한국어가 병기돼요.
                AI 튜터 샘(Sam) 도 BC 과정에서는 영어 중심 + 한국어 요약 모드로 자동 전환됩니다.
              </p>
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="border-t border-white/5 py-6 text-center text-xs text-muted-foreground">
        <p>Based on BC Ministry of Education Mathematics Curriculum · Khan Academy + 정승제</p>
      </footer>
    </div>
  );
}
