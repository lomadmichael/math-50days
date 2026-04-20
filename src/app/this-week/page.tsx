'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { thisWeek } from '@/data/thisWeek';
import { WeeklyPrepItem } from '@/lib/types';
import ConceptNote from '@/components/ConceptNote';
import Problem from '@/components/Problem';
import FloatingAITutor from '@/components/FloatingAITutor';

export default function ThisWeekPage() {
  const quizItems = thisWeek.prep.filter((p) => p.kind === 'quiz-review');
  const newItems = thisWeek.prep.filter((p) => p.kind === 'new-topic');

  // AI Tutor 컨텍스트: 학생 프로필 + 이번 주 주제들을 샘에게 전달
  const studentProfile =
    '학생은 2012년 7월생 (현재 13세), 캐나다 BC주 Surrey교육청 Grandview Heights Secondary Grade 8 재학 중. ' +
    '영어로 수업을 듣고 있어서 영어 수학 용어와 한국어 용어를 함께 알려주면 학교 수업 이해에 도움이 됩니다. ' +
    'Grade 8 BC 커리큘럼은 한국식 중1~중2 범위 (일차함수·겉넓이·부피·확률 기초)와 비슷합니다.';

  const tutorDayTitle = `이번 주 학습 대비 — ${thisWeek.nextWeek.quiz ? 'Quiz + ' : ''}새 주제`;
  const tutorConcepts = [
    { title: '[학생 프로필]', content: studentProfile },
    ...thisWeek.prep.flatMap((p) =>
      p.concepts.map((c) => ({
        title: `[${p.englishTerm} / ${p.koreanTerm}] ${c.title}`,
        content: c.content,
      }))
    ),
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-white/10">
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
          <div>
            <h1 className="text-lg font-bold text-foreground">이번 주 학습 대비</h1>
            <p className="text-xs text-muted-foreground">
              학교 주간 메일 기반 · {formatWeekOf(thisWeek.weekOf)}
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 space-y-10">
        {/* Hero / 메일 요약 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="rounded-2xl border border-violet-500/20 bg-gradient-to-br from-violet-500/10 via-purple-500/5 to-violet-500/10 p-6"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-violet-500/20 flex items-center justify-center text-2xl shrink-0">
              📬
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs text-violet-300 mb-1">
                {thisWeek.sourceEmail.from} · {thisWeek.sourceEmail.receivedAt} 수신
              </div>
              <h2 className="text-xl font-bold text-foreground mb-3">
                다음 주에 이것을 배워요
              </h2>

              {thisWeek.nextWeek.quiz && (
                <div className="mb-3 flex items-start gap-2">
                  <span className="text-amber-400 text-sm shrink-0 mt-0.5">🎯</span>
                  <div className="text-sm text-foreground">
                    <span className="font-semibold text-amber-300">
                      Unit Quiz ({thisWeek.nextWeek.quiz.date})
                    </span>{' '}
                    — {thisWeek.nextWeek.quiz.topics.join(', ')}
                  </div>
                </div>
              )}

              <div className="mb-3 flex items-start gap-2">
                <span className="text-emerald-400 text-sm shrink-0 mt-0.5">📘</span>
                <div className="text-sm text-foreground">
                  <span className="font-semibold text-emerald-300">새 주제</span> —{' '}
                  {thisWeek.nextWeek.newTopics.join(', ')}
                </div>
              </div>

              {thisWeek.nextWeek.notes && thisWeek.nextWeek.notes.length > 0 && (
                <div className="mt-4 pt-3 border-t border-white/10 space-y-1.5">
                  {thisWeek.nextWeek.notes.map((n, i) => (
                    <p key={i} className="text-xs text-muted-foreground flex items-start gap-1.5">
                      <span className="shrink-0">📌</span>
                      <span>{n}</span>
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>

          {thisWeek.thisWeek.covered.length > 0 && (
            <div className="mt-4 pt-4 border-t border-white/10">
              <p className="text-xs text-muted-foreground mb-1.5">이번 주 학교에서 배운 것</p>
              <div className="flex flex-wrap gap-1.5">
                {thisWeek.thisWeek.covered.map((c) => (
                  <span
                    key={c}
                    className="inline-flex items-center px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-foreground/80"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          )}
        </motion.section>

        {/* Quiz 대비 섹션 */}
        {quizItems.length > 0 && (
          <PrepSection
            title="📝 Quiz 대비"
            subtitle={
              thisWeek.nextWeek.quiz
                ? `${thisWeek.nextWeek.quiz.date} Quiz 범위 복습`
                : '시험 대비 복습'
            }
            accent="amber"
            items={quizItems}
          />
        )}

        {/* 새 주제 예습 섹션 */}
        {newItems.length > 0 && (
          <PrepSection
            title="📘 새 주제 예습"
            subtitle="다음 주 배울 개념을 미리 만나보기"
            accent="emerald"
            items={newItems}
          />
        )}

        {/* 업데이트 안내 */}
        <section className="rounded-xl border border-white/5 bg-card/50 p-5">
          <div className="flex items-start gap-3">
            <div className="text-xl shrink-0">🔄</div>
            <div className="text-sm text-muted-foreground leading-relaxed">
              <p className="font-medium text-foreground mb-1">매주 자동 업데이트되지는 않아요</p>
              <p>
                학교에서 새 메일이 오면 부모님이 Claude Code에 붙여넣어 이 페이지 데이터를
                갱신해야 해요. 원본 파일:{' '}
                <code className="text-xs text-violet-300 bg-violet-500/10 px-1.5 py-0.5 rounded">
                  src/data/thisWeek.ts
                </code>
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 py-6 text-center text-xs text-muted-foreground">
        <p>학교 선생님의 주간 메일을 기반으로 구성된 학습 대비 자료입니다</p>
      </footer>

      {/* 플로팅 샘 버튼 (우측 하단) */}
      <FloatingAITutor
        gradeLabel="이번 주 학습 대비"
        dayTitle={tutorDayTitle}
        dayConcepts={tutorConcepts}
      />
    </div>
  );
}

// ─── 섹션 컴포넌트 ───
function PrepSection({
  title,
  subtitle,
  accent,
  items,
}: {
  title: string;
  subtitle: string;
  accent: 'amber' | 'emerald';
  items: WeeklyPrepItem[];
}) {
  const accentClasses = {
    amber: 'text-amber-300 border-amber-500/20 bg-amber-500/5',
    emerald: 'text-emerald-300 border-emerald-500/20 bg-emerald-500/5',
  }[accent];

  return (
    <section>
      <div className="mb-5">
        <h2 className="text-xl font-bold text-foreground">{title}</h2>
        <p className="text-sm text-muted-foreground">{subtitle}</p>
      </div>
      <div className="space-y-6">
        {items.map((item, i) => (
          <motion.article
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className={`rounded-2xl border ${accentClasses} p-5 md:p-6 space-y-5`}
          >
            <header>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1.5">
                <h3 className="text-lg font-bold text-foreground">{item.koreanTerm}</h3>
                <span className="text-sm text-muted-foreground font-medium">
                  ({item.englishTerm})
                </span>
              </div>
              <p className="text-sm text-foreground/80 leading-relaxed">{item.summary}</p>
            </header>

            {item.concepts.length > 0 && (
              <div>
                <h4 className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-2.5">
                  개념 정리
                </h4>
                <ConceptNote concepts={item.concepts} />
              </div>
            )}

            {item.problems.length > 0 && (
              <div>
                <h4 className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-2.5">
                  연습 문제 ({item.problems.length}개)
                </h4>
                <div className="space-y-3">
                  {item.problems.map((p, idx) => (
                    <Problem key={p.id} problem={p} index={idx} />
                  ))}
                </div>
              </div>
            )}
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function formatWeekOf(iso: string): string {
  const d = new Date(iso);
  if (isNaN(d.getTime())) return iso;
  return `${d.getMonth() + 1}월 ${d.getDate()}일 주`;
}
