'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { courses, krCourses, caCourses } from '@/data/curriculum';
import { useProgress } from '@/hooks/useProgress';
import { useReviewSchedule } from '@/hooks/useReviewScheduler';

export default function HomePage() {
  const { isLoaded, getCompletedDaysCount } = useProgress();
  const { dueCount } = useReviewSchedule();

  // 권역별 총 진도
  const krCompleted = isLoaded
    ? krCourses.reduce((sum, g) => sum + getCompletedDaysCount(g), 0)
    : 0;
  const krTotal = krCourses.reduce((sum, g) => sum + courses[g].totalDays, 0);
  const caCompleted = isLoaded
    ? caCourses.reduce((sum, g) => sum + getCompletedDaysCount(g), 0)
    : 0;
  const caTotal = caCourses.reduce((sum, g) => sum + courses[g].totalDays, 0);

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
          <div className="flex items-center gap-2">
            <Link
              href="/search"
              className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-white/10 transition-all"
              aria-label="검색"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </Link>
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
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-12">
        {/* Hero */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            어떤 <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">커리큘럼</span>으로 학습할까?
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            한국 중학 과정 또는 캐나다 BC 공식 커리큘럼.<br />
            둘 다 나만의 학습 속도로, 언제든 전환 가능해요.
          </p>
        </motion.section>

        {/* 2개 선택 카드 */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* 한국 과정 카드 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link href="/kr">
              <div className="group relative overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 via-indigo-500/5 to-blue-500/10 hover:border-blue-400/40 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 min-h-[320px] flex flex-col">
                <div className="h-2 bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500" />
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-start justify-between mb-5">
                    <div className="text-5xl">🇰🇷</div>
                    {isLoaded && krCompleted > 0 && (
                      <div className="text-right">
                        <div className="text-xs text-muted-foreground">진도</div>
                        <div className="text-sm font-semibold text-blue-400">
                          {krCompleted} / {krTotal}
                        </div>
                      </div>
                    )}
                  </div>

                  <h3 className="text-3xl font-bold text-foreground mb-2">한국 과정</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    EBS 정승제 선생님의 50일 수학 기반
                  </p>

                  <div className="space-y-2.5 flex-1">
                    <div className="flex items-center gap-2.5 text-sm">
                      <span className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center">🧱</span>
                      <span className="text-foreground/80">기초탄탄 (초등~중학 입학)</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-sm">
                      <span className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">📘</span>
                      <span className="text-foreground/80">중1 · 중2 · 중3</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-5 border-t border-white/5 flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">4개 코스 · 200 Days</span>
                    <span className="text-sm font-medium text-blue-400 flex items-center gap-1 group-hover:gap-2 transition-all">
                      시작하기
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* 캐나다 과정 카드 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link href="/ca">
              <div className="group relative overflow-hidden rounded-3xl border border-rose-500/20 bg-gradient-to-br from-rose-500/10 via-pink-500/5 to-rose-500/10 hover:border-rose-400/40 hover:shadow-2xl hover:shadow-rose-500/20 transition-all duration-300 hover:-translate-y-1 min-h-[320px] flex flex-col">
                <div className="h-2 bg-gradient-to-r from-rose-500 via-pink-500 to-rose-500" />
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-start justify-between mb-5">
                    <div className="text-5xl">🇨🇦</div>
                    {isLoaded && caCompleted > 0 && (
                      <div className="text-right">
                        <div className="text-xs text-muted-foreground">진도</div>
                        <div className="text-sm font-semibold text-rose-400">
                          {caCompleted} / {caTotal}
                        </div>
                      </div>
                    )}
                  </div>

                  <h3 className="text-3xl font-bold text-foreground mb-2">캐나다 BC 과정</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    BC Surrey 교육청 공식 커리큘럼 · 영어 메인 + 한국어 보조
                  </p>

                  <div className="space-y-2.5 flex-1">
                    <div className="flex items-center gap-2.5 text-sm">
                      <span className="w-8 h-8 rounded-lg bg-sky-500/10 flex items-center justify-center">🍁</span>
                      <span className="text-foreground/80">Grade 6-7 (Intermediate)</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-sm">
                      <span className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center">🍁</span>
                      <span className="text-foreground/80 font-medium">
                        Grade 8 ⭐ <span className="text-xs text-muted-foreground">(아들 현재 학년)</span>
                      </span>
                    </div>
                    <div className="flex items-center gap-2.5 text-sm">
                      <span className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">🍁</span>
                      <span className="text-foreground/80">Grade 9</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-5 border-t border-white/5 flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">3개 코스 · 95 Days</span>
                    <span className="text-sm font-medium text-rose-400 flex items-center gap-1 group-hover:gap-2 transition-all">
                      시작하기
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </section>

        {/* 보조 진입점들 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-3"
        >
          <Link href="/this-week">
            <div className="group rounded-2xl border border-violet-500/20 bg-violet-500/5 hover:bg-violet-500/10 hover:border-violet-400/40 transition-all p-5 flex items-center gap-4 h-full">
              <div className="w-12 h-12 rounded-xl bg-violet-500/20 flex items-center justify-center text-2xl shrink-0">
                📬
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-base font-semibold text-foreground mb-0.5">이번 주 학교 수학 대비</h4>
                <p className="text-xs text-muted-foreground">
                  학교 주간 메일 기반 · Quiz·새 주제
                </p>
              </div>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-violet-400 opacity-70 group-hover:translate-x-0.5 transition-transform shrink-0">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </div>
          </Link>

          <Link href="/mistakes">
            <div className="group rounded-2xl border border-rose-500/20 bg-rose-500/5 hover:bg-rose-500/10 hover:border-rose-400/40 transition-all p-5 flex items-center gap-4 h-full">
              <div className="w-12 h-12 rounded-xl bg-rose-500/20 flex items-center justify-center text-2xl shrink-0">
                📓
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-base font-semibold text-foreground mb-0.5">오답 노트</h4>
                <p className="text-xs text-muted-foreground">
                  틀린 문제 모아서 복습
                </p>
              </div>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-rose-400 opacity-70 group-hover:translate-x-0.5 transition-transform shrink-0">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </div>
          </Link>
          <Link href="/bookmarks">
            <div className="group rounded-2xl border border-amber-500/20 bg-amber-500/5 hover:bg-amber-500/10 hover:border-amber-400/40 transition-all p-5 flex items-center gap-4 h-full">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center text-2xl shrink-0">
                ★
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-base font-semibold text-foreground mb-0.5">북마크</h4>
                <p className="text-xs text-muted-foreground">
                  즐겨찾기한 Day 모아보기
                </p>
              </div>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-amber-400 opacity-70 group-hover:translate-x-0.5 transition-transform shrink-0">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </div>
          </Link>

          <Link href="/flashcards">
            <div className="group rounded-2xl border border-teal-500/20 bg-teal-500/5 hover:bg-teal-500/10 hover:border-teal-400/40 transition-all p-5 flex items-center gap-4 h-full">
              <div className="w-12 h-12 rounded-xl bg-teal-500/20 flex items-center justify-center text-2xl shrink-0">
                🗂️
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-base font-semibold text-foreground mb-0.5">용어 플래시카드</h4>
                <p className="text-xs text-muted-foreground">
                  BC Grade 8 · 한국 중1 핵심 수학 용어
                </p>
              </div>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-teal-400 opacity-70 group-hover:translate-x-0.5 transition-transform shrink-0">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </div>
          </Link>

          <Link href="/parent-report">
            <div className="group rounded-2xl border border-sky-500/20 bg-sky-500/5 hover:bg-sky-500/10 hover:border-sky-400/40 transition-all p-5 flex items-center gap-4 h-full">
              <div className="w-12 h-12 rounded-xl bg-sky-500/20 flex items-center justify-center text-2xl shrink-0">
                📊
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-base font-semibold text-foreground mb-0.5">부모 리포트</h4>
                <p className="text-xs text-muted-foreground">
                  이번 주 학습 현황 · 강약점 분석
                </p>
              </div>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-sky-400 opacity-70 group-hover:translate-x-0.5 transition-transform shrink-0">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </div>
          </Link>
        </motion.section>

        {/* 오늘의 복습 카드 — dueCount > 0 일 때만 노출 */}
        {dueCount > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.35 }}
            className="mb-8"
          >
            <Link href="/review">
              <div className="group rounded-2xl border border-indigo-500/30 bg-gradient-to-r from-indigo-500/10 to-violet-500/5 hover:border-indigo-400/50 hover:from-indigo-500/15 hover:to-violet-500/10 transition-all p-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center text-2xl shrink-0">
                  📚
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-base font-semibold text-foreground mb-0.5 flex items-center gap-2">
                    오늘의 복습
                    <span className="px-2 py-0.5 rounded-full bg-indigo-500 text-white text-xs font-bold">
                      {dueCount}개
                    </span>
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    잊을 만할 때 자동 소환 · 간격 반복 학습
                  </p>
                </div>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-400 opacity-70 group-hover:translate-x-0.5 transition-transform shrink-0">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </div>
            </Link>
          </motion.section>
        )}

        {/* Features */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: '📺', title: '영상 강의', desc: '정승제·Khan Academy' },
            { icon: '✏️', title: '문제 풀이', desc: '즉시 채점 + 해설' },
            { icon: '🤖', title: '샘 AI 튜터', desc: 'Sonnet 4.5 · 맥락 인식' },
            { icon: '🏅', title: '진도 관리', desc: '매일 꾸준히 성취' },
          ].map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.08 }}
              className="rounded-xl border border-white/5 bg-card/50 p-4 text-center"
            >
              <div className="text-2xl mb-2">{feat.icon}</div>
              <div className="text-sm font-medium text-foreground">{feat.title}</div>
              <div className="text-xs text-muted-foreground mt-1">{feat.desc}</div>
            </motion.div>
          ))}
        </section>
      </main>

      <footer className="border-t border-white/5 py-6 text-center text-xs text-muted-foreground">
        <p>EBS 정승제 50일 수학 + BC 교육청 공식 커리큘럼 기반</p>
      </footer>
    </div>
  );
}
