'use client';

import { use, useEffect, useState } from 'react';
import { courses, getPartForDay } from '@/data/curriculum';
import { GradeId, DayContent } from '@/lib/types';
import MathRenderer from '@/components/MathRenderer';

export default function PrintDayPage({
  params,
}: {
  params: Promise<{ grade: string; dayNumber: string }>;
}) {
  const { grade, dayNumber: dayStr } = use(params);
  const gradeId = grade as GradeId;
  const dayNumber = parseInt(dayStr);
  const course = courses[gradeId];
  const partNumber = getPartForDay(gradeId, dayNumber);
  const part = course?.parts.find((p) => p.partNumber === partNumber);

  const [dayContent, setDayContent] = useState<DayContent | null>(null);
  const [hidePractice, setHidePractice] = useState(false);

  useEffect(() => {
    async function loadContent() {
      try {
        const mod = await import(
          `@/data/${gradeId}/days/day${String(dayNumber).padStart(2, '0')}`
        );
        setDayContent(mod.default || mod.dayContent);
      } catch {
        setDayContent(null);
      }
    }
    loadContent();
  }, [gradeId, dayNumber]);

  if (!course) {
    return <p className="p-8 text-red-500">존재하지 않는 코스입니다.</p>;
  }

  return (
    <>
      {/* Print-only styles injected via a style tag */}
      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { background: white !important; color: black !important; }
          .print-page { max-width: 100% !important; padding: 0 !important; }
        }
        @page {
          size: A4;
          margin: 15mm 15mm 15mm 15mm;
        }
      `}</style>

      {/* Control bar (hidden when printing) */}
      <div className="no-print sticky top-0 z-50 bg-background/90 backdrop-blur border-b border-white/10 px-4 py-3 flex items-center gap-3">
        <button
          onClick={() => history.back()}
          className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm text-muted-foreground hover:text-foreground transition-all"
        >
          ← 돌아가기
        </button>
        <button
          onClick={() => setHidePractice((v) => !v)}
          className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm text-muted-foreground hover:text-foreground transition-all"
        >
          {hidePractice ? '문제 보기' : '문제 숨기기'}
        </button>
        <button
          onClick={() => window.print()}
          className="ml-auto px-4 py-2 rounded-lg bg-violet-500 text-white text-sm font-medium hover:bg-violet-600 transition-all flex items-center gap-2"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 6 2 18 2 18 9" />
            <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
            <rect x="6" y="14" width="12" height="8" />
          </svg>
          프린트
        </button>
      </div>

      {/* Printable body */}
      <div className="print-page max-w-3xl mx-auto px-6 py-8 text-foreground" style={{ fontFamily: 'Georgia, serif' }}>
        {/* Title block */}
        <div className="mb-6 pb-4 border-b-2 border-foreground/20">
          <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
            {course.title} · PART {partNumber}: {part?.title}
          </div>
          <h1 className="text-3xl font-bold text-foreground">
            Day {dayNumber}:{' '}
            {dayContent?.title ? (
              <MathRenderer content={dayContent.title} inline />
            ) : (
              part?.title || '학습'
            )}
          </h1>
          {dayContent?.subtitle && (
            <p className="mt-1 text-muted-foreground text-sm">
              <MathRenderer content={dayContent.subtitle} inline />
            </p>
          )}
        </div>

        {/* Concepts */}
        {dayContent?.concepts && dayContent.concepts.length > 0 && (
          <section className="mb-8">
            <h2 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <span>📌</span> 핵심 개념
            </h2>
            <div className="space-y-5">
              {dayContent.concepts.map((concept) => (
                <div key={concept.id} className="rounded-xl border border-white/10 p-4 bg-card/30">
                  <h3 className="font-semibold text-foreground mb-2 text-sm">
                    {concept.title}
                  </h3>
                  <div className="text-sm text-foreground/80 leading-relaxed prose prose-invert max-w-none">
                    <MathRenderer content={concept.content} />
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Practice Problems */}
        {!hidePractice && dayContent?.problems && dayContent.problems.length > 0 && (
          <section>
            <h2 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <span>✏️</span> 연습 문제
            </h2>
            <div className="space-y-4">
              {dayContent.problems.map((problem, idx) => (
                <div key={problem.id} className="rounded-xl border border-white/10 p-4 bg-card/30">
                  <p className="text-sm font-medium text-foreground mb-2">
                    {idx + 1}.{' '}
                    <MathRenderer content={problem.question} inline />
                  </p>

                  {problem.type === 'multiple-choice' && problem.options && (
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      {problem.options.map((opt, oi) => (
                        <div
                          key={oi}
                          className="text-xs border border-white/5 rounded-lg px-3 py-2 text-muted-foreground"
                        >
                          {String.fromCharCode(65 + oi)}.{' '}
                          <MathRenderer content={opt} inline />
                        </div>
                      ))}
                    </div>
                  )}

                  {problem.type === 'short-answer' && (
                    <div className="mt-2 h-8 border-b border-white/20 w-48" />
                  )}

                  {/* Answer (for review copy) */}
                  <details className="mt-3 no-print">
                    <summary className="text-xs text-muted-foreground cursor-pointer">
                      정답 보기
                    </summary>
                    <div className="mt-1 text-xs text-emerald-400">
                      <MathRenderer content={problem.answer} inline />
                    </div>
                  </details>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Footer */}
        <div className="mt-10 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-muted-foreground">
          <span>50일 수학 · {course.title} Day {dayNumber}</span>
          <span>인쇄일: {new Date().toLocaleDateString('ko-KR')}</span>
        </div>
      </div>
    </>
  );
}
