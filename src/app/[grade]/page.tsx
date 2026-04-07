'use client';

import { use } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { courses, getTestDays } from '@/data/curriculum';
import { useProgress } from '@/hooks/useProgress';
import { GradeId } from '@/lib/types';

const gradeGradients: Record<GradeId, string> = {
  foundation: 'from-orange-500 to-amber-500',
  grade1: 'from-blue-500 to-cyan-500',
  grade2: 'from-purple-500 to-violet-500',
  grade3: 'from-emerald-500 to-teal-500',
};

const gradeColors: Record<GradeId, string> = {
  foundation: 'text-orange-400',
  grade1: 'text-blue-400',
  grade2: 'text-purple-400',
  grade3: 'text-emerald-400',
};

const gradeBg: Record<GradeId, string> = {
  foundation: 'bg-orange-500',
  grade1: 'bg-blue-500',
  grade2: 'bg-purple-500',
  grade3: 'bg-emerald-500',
};

const gradeBgLight: Record<GradeId, string> = {
  foundation: 'bg-orange-500/10',
  grade1: 'bg-blue-500/10',
  grade2: 'bg-purple-500/10',
  grade3: 'bg-emerald-500/10',
};

export default function CourseDashboard({ params }: { params: Promise<{ grade: string }> }) {
  const { grade } = use(params);
  const gradeId = grade as GradeId;
  const course = courses[gradeId];
  const { isLoaded, getCourseProgress, getDayStatus, initCourse, getCompletedDaysCount } = useProgress();

  if (!course) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">존재하지 않는 코스입니다.</p>
      </div>
    );
  }

  const progress = isLoaded ? getCourseProgress(gradeId) : null;
  const completedCount = isLoaded ? getCompletedDaysCount(gradeId) : 0;
  const testDays = getTestDays(gradeId);

  // Initialize course on first visit
  if (isLoaded && !progress?.days[1]) {
    initCourse(gradeId);
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
          <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </Link>
          <div className="flex items-center gap-2">
            <span className="text-xl">{course.icon}</span>
            <div>
              <h1 className="text-lg font-bold text-foreground">{course.title}</h1>
              <p className="text-xs text-muted-foreground">{course.subtitle}</p>
            </div>
          </div>
          {progress && (
            <div className="ml-auto flex items-center gap-3 text-sm">
              <span className={`font-medium ${gradeColors[gradeId]}`}>Lv.{progress.level}</span>
              <span className="text-muted-foreground">{progress.xp} XP</span>
              {progress.streak > 0 && (
                <span className="text-amber-400">🔥 {progress.streak}</span>
              )}
            </div>
          )}
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-6">
        {/* Progress Overview */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">전체 진도</span>
            <span className="text-sm font-medium text-foreground">
              {completedCount}/{course.totalDays}일 완료
            </span>
          </div>
          <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
            <motion.div
              className={`h-full rounded-full bg-gradient-to-r ${gradeGradients[gradeId]}`}
              initial={{ width: 0 }}
              animate={{ width: `${Math.round((completedCount / course.totalDays) * 100)}%` }}
              transition={{ duration: 1 }}
            />
          </div>
        </motion.div>

        {/* Parts & Days */}
        {course.parts.map((part, partIdx) => {
          const partDays = Array.from(
            { length: part.endDay - part.startDay + 1 },
            (_, i) => part.startDay + i
          );
          const completedInPart = partDays.filter(d => {
            const s = isLoaded ? getDayStatus(gradeId, d) : { status: 'available' };
            return s.status === 'completed';
          }).length;
          const partProgress = Math.round((completedInPart / partDays.length) * 100);

          return (
            <motion.section
              key={part.partNumber}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: partIdx * 0.05 }}
              className="mb-8"
            >
              {/* Part Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-8 h-8 rounded-lg ${gradeBgLight[gradeId]} flex items-center justify-center text-sm font-bold ${gradeColors[gradeId]}`}>
                  {part.partNumber}
                </div>
                <div className="flex-1">
                  <h2 className="text-base font-semibold text-foreground">
                    PART {part.partNumber}: {part.title}
                  </h2>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${gradeGradients[gradeId]} transition-all duration-500`}
                        style={{ width: `${partProgress}%` }}
                      />
                    </div>
                    <span className="text-xs text-muted-foreground">{partProgress}%</span>
                  </div>
                </div>
              </div>

              {/* Day Grid */}
              <div className="grid grid-cols-5 sm:grid-cols-7 gap-2">
                {partDays.map((dayNum) => {
                  const dayRecord = isLoaded ? getDayStatus(gradeId, dayNum) : { status: 'available' as const };
                  const isTest = testDays.includes(dayNum);
                  const isCompleted = dayRecord.status === 'completed';
                  const isInProgress = dayRecord.status === 'in-progress';

                  return (
                    <Link
                      key={dayNum}
                      href={`/${gradeId}/day/${dayNum}`}
                    >
                      <div
                        className={`
                          relative aspect-square rounded-xl flex flex-col items-center justify-center text-sm font-medium
                          transition-all duration-200
                          ${isCompleted
                            ? `${gradeBg[gradeId]} text-white shadow-lg`
                            : 'bg-card border border-white/10 text-foreground hover:border-white/20 hover:-translate-y-0.5 hover:shadow-md cursor-pointer'
                          }
                          ${isInProgress ? 'ring-2 ring-offset-2 ring-offset-background ring-violet-500 animate-pulse' : ''}
                        `}
                      >
                        <span className="text-xs opacity-60 mb-0.5">Day</span>
                        <span className={`text-base font-bold ${isCompleted ? 'text-white' : ''}`}>{dayNum}</span>
                        {isTest && (
                          <span className="absolute -top-1 -right-1 text-xs">⭐</span>
                        )}
                        {isCompleted && (
                          <span className="absolute bottom-1 text-[10px]">✓</span>
                        )}
                      </div>
                    </Link>
                  );
                })}
              </div>
            </motion.section>
          );
        })}
      </main>
    </div>
  );
}
