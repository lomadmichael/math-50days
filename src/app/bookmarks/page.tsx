'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useBookmarks } from '@/hooks/useBookmarks';
import { courses } from '@/data/curriculum';
import { GradeId } from '@/lib/types';

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

export default function BookmarksPage() {
  const { bookmarkList, removeBookmark, isLoaded } = useBookmarks();

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
              <span>★</span>
              <span>북마크</span>
            </h1>
            <p className="text-xs text-muted-foreground">
              즐겨찾기한 Day 모음
            </p>
          </div>
          {bookmarkList.length > 0 && (
            <span className="text-xs text-muted-foreground px-2 py-1 rounded-full bg-white/5 border border-white/10">
              {bookmarkList.length}개
            </span>
          )}
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {!isLoaded ? (
          <div className="flex items-center justify-center py-20">
            <div className="w-6 h-6 border-2 border-white/20 border-t-white/80 rounded-full animate-spin" />
          </div>
        ) : bookmarkList.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl border border-white/10 bg-card/50 p-12 text-center"
          >
            <div className="text-5xl mb-4">★</div>
            <p className="text-base font-medium text-foreground mb-2">북마크가 없어요</p>
            <p className="text-sm text-muted-foreground">
              Day 학습 중 상단 별 아이콘을 눌러 북마크를 추가해보세요!
            </p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <AnimatePresence initial={false}>
              {bookmarkList.map((entry) => {
                const course = courses[entry.gradeId];
                const gradient = gradeColors[entry.gradeId];
                const border = gradeBorderColors[entry.gradeId];
                return (
                  <motion.div
                    key={`${entry.gradeId}/${entry.dayNumber}`}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.15 } }}
                    className={`rounded-2xl border ${border} bg-card overflow-hidden group`}
                  >
                    <div className={`h-1 bg-gradient-to-r ${gradient}`} />
                    <div className="p-4 flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white font-bold text-sm shrink-0`}>
                        {entry.dayNumber}
                      </div>
                      <div className="flex-1 min-w-0">
                        <Link
                          href={`/${entry.gradeId}/day/${entry.dayNumber}`}
                          className="block group-hover:text-foreground transition-colors"
                        >
                          <div className="text-xs text-muted-foreground mb-0.5">
                            {course?.title} · Day {entry.dayNumber}
                          </div>
                          <div className="text-sm font-medium text-foreground truncate">
                            {entry.title}
                          </div>
                        </Link>
                      </div>
                      <button
                        onClick={() => removeBookmark(entry.gradeId, entry.dayNumber)}
                        className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-amber-400 hover:bg-white/10 hover:text-muted-foreground transition-all"
                        title="북마크 제거"
                        aria-label="북마크 제거"
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        )}
      </main>
    </div>
  );
}
