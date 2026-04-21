'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Problem as ProblemType } from '@/lib/types';
import MathRenderer from './MathRenderer';
import { logMistakeAttempt } from '@/hooks/useMistakeNotebook';

// ─── 시험 모드 진행 상태 ───────────────────────────────────
type TestPhase = 'confirm' | 'testing' | 'result';

interface Answer {
  problemId: string;
  value: string; // 선택지 or 단답 입력
}

interface UnitTestModeProps {
  problems: ProblemType[];
  dayLabel: string;         // 예: "Day 5 - 방정식"
  sourceId: string;         // 예: 'grade1/day/5'
  sourceLabel: string;      // 예: 'BC Grade 8 · Day 5'
  timeLimitMinutes?: number; // 기본 30분
  onExit: () => void;       // 시험 취소/종료 후 호출
  onComplete?: (score: number, total: number) => void;
}

// ─── 타이머 포맷 ───────────────────────────────────────────
function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60).toString().padStart(2, '0');
  const s = (seconds % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

// ─── 시험 시작 전 확인 모달 ───────────────────────────────
function ConfirmModal({
  timeLimitMinutes,
  onStartTest,
  onStartPractice,
  onCancel,
}: {
  timeLimitMinutes: number;
  onStartTest: () => void;
  onStartPractice: () => void;
  onCancel: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="w-full max-w-sm rounded-2xl border border-white/10 bg-card p-6 space-y-5"
      >
        <div className="text-center">
          <div className="text-4xl mb-3">📝</div>
          <h2 className="text-lg font-bold text-foreground mb-1">단원평가</h2>
          <p className="text-sm text-muted-foreground">학습 모드를 선택하세요</p>
        </div>

        <div className="space-y-3 text-sm">
          <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-4 space-y-1.5">
            <div className="font-semibold text-amber-400 flex items-center gap-1.5">
              <span>⏱️</span> 시험 모드
            </div>
            <ul className="space-y-1 text-muted-foreground text-xs">
              <li>• 제한 시간: {timeLimitMinutes}분</li>
              <li>• 힌트·해설 없음</li>
              <li>• 종료 후 채점 + 해설 확인</li>
              <li>• 틀린 문제 오답 노트 자동 기록</li>
            </ul>
          </div>
          <div className="rounded-xl border border-blue-500/20 bg-blue-500/5 p-4 space-y-1.5">
            <div className="font-semibold text-blue-400 flex items-center gap-1.5">
              <span>📖</span> 연습 모드
            </div>
            <ul className="space-y-1 text-muted-foreground text-xs">
              <li>• 시간 제한 없음</li>
              <li>• 즉시 채점 + 해설 표시</li>
              <li>• 힌트 사용 가능</li>
            </ul>
          </div>
        </div>

        <div className="space-y-2">
          <button
            onClick={onStartTest}
            className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-white font-semibold text-sm transition-colors"
          >
            시험 모드 시작
          </button>
          <button
            onClick={onStartPractice}
            className="w-full py-3 rounded-xl bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 font-medium text-sm transition-colors"
          >
            연습 모드로 풀기
          </button>
          <button
            onClick={onCancel}
            className="w-full py-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            취소
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── 단일 시험 문제 카드 ──────────────────────────────────
function TestProblemCard({
  problem,
  index,
  answer,
  onChange,
}: {
  problem: ProblemType;
  index: number;
  answer: string;
  onChange: (value: string) => void;
}) {
  const difficultyBadge = {
    basic: { label: '기본', color: 'bg-blue-500/10 text-blue-400' },
    applied: { label: '응용', color: 'bg-purple-500/10 text-purple-400' },
    challenge: { label: '도전', color: 'bg-rose-500/10 text-rose-400' },
  }[problem.difficulty];

  return (
    <div className="rounded-xl border border-white/10 bg-card p-5">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-sm font-bold text-muted-foreground">Q{index + 1}</span>
        <span className={`text-xs px-2 py-0.5 rounded-full ${difficultyBadge.color}`}>
          {difficultyBadge.label}
        </span>
        {answer && (
          <span className="ml-auto text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400">
            답 입력됨
          </span>
        )}
      </div>

      <div className="mb-5">
        <MathRenderer content={problem.question} className="text-foreground" />
      </div>

      {problem.type === 'multiple-choice' && problem.options && (
        <div className="space-y-2">
          {problem.options.map((option, i) => {
            const optionLabel = String.fromCharCode(0x2460 + i);
            const isSelected = answer === option;
            return (
              <button
                key={i}
                onClick={() => onChange(option)}
                className={`w-full text-left px-4 py-3 rounded-xl border transition-all text-sm flex items-center gap-3
                  ${isSelected
                    ? 'border-amber-500/50 bg-amber-500/10 text-foreground'
                    : 'border-white/10 text-foreground hover:border-white/20 hover:bg-white/5'
                  }
                `}
              >
                <span className="text-base">{optionLabel}</span>
                <MathRenderer content={option} />
              </button>
            );
          })}
        </div>
      )}

      {problem.type === 'short-answer' && (
        <input
          type="text"
          value={answer}
          onChange={(e) => onChange(e.target.value)}
          placeholder="답을 입력하세요"
          className="w-full px-4 py-3 rounded-xl border border-white/10 focus:border-amber-500/50 bg-transparent text-foreground text-sm outline-none transition-all"
        />
      )}
    </div>
  );
}

// ─── 결과 화면 ────────────────────────────────────────────
function ResultScreen({
  problems,
  answers,
  elapsed,
  onExit,
}: {
  problems: ProblemType[];
  answers: Map<string, string>;
  elapsed: number;
  onExit: () => void;
}) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const graded = problems.map((p) => {
    const given = answers.get(p.id) ?? '';
    const correct = given.trim() === p.answer.trim();
    return { problem: p, given, correct };
  });

  const correctCount = graded.filter((g) => g.correct).length;
  const total = graded.length;
  const pct = total > 0 ? Math.round((correctCount / total) * 100) : 0;
  const wrongItems = graded.filter((g) => !g.correct);

  const grade =
    pct >= 90 ? { label: 'A', color: 'text-emerald-400' }
    : pct >= 80 ? { label: 'B', color: 'text-blue-400' }
    : pct >= 70 ? { label: 'C', color: 'text-amber-400' }
    : { label: 'D', color: 'text-rose-400' };

  return (
    <div className="space-y-6">
      {/* 결과 요약 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl border border-white/10 bg-card p-6 text-center space-y-4"
      >
        <div className="text-5xl mb-1">
          {pct >= 80 ? '🎉' : pct >= 60 ? '💪' : '📚'}
        </div>
        <h2 className="text-xl font-bold text-foreground">시험 결과</h2>

        <div className={`text-6xl font-bold ${grade.color}`}>{grade.label}</div>

        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-foreground">{correctCount}</div>
            <div className="text-xs text-muted-foreground">정답</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-rose-400">{total - correctCount}</div>
            <div className="text-xs text-muted-foreground">오답</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-emerald-400">{pct}%</div>
            <div className="text-xs text-muted-foreground">정답률</div>
          </div>
        </div>

        <div className="text-xs text-muted-foreground">
          소요 시간: {formatTime(elapsed)}
        </div>
      </motion.div>

      {/* 틀린 문제 해설 */}
      {wrongItems.length > 0 && (
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
            <span>❌</span> 틀린 문제 해설
            <span className="text-xs font-normal text-muted-foreground">({wrongItems.length}개)</span>
          </h3>
          {wrongItems.map(({ problem, given }, i) => (
            <div key={problem.id} className="rounded-xl border border-rose-500/20 bg-rose-500/5 overflow-hidden">
              <button
                className="w-full p-4 text-left flex items-start gap-3"
                onClick={() => setExpandedId(expandedId === problem.id ? null : problem.id)}
              >
                <span className="shrink-0 text-sm font-bold text-rose-400">
                  Q{problems.indexOf(problem) + 1}
                </span>
                <div className="flex-1 min-w-0 text-sm text-foreground/90 leading-relaxed">
                  <MathRenderer content={problem.question} />
                </div>
                <svg
                  width="18" height="18" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  className="shrink-0 text-muted-foreground transition-transform"
                  style={{ transform: expandedId === problem.id ? 'rotate(180deg)' : 'none' }}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              <AnimatePresence>
                {expandedId === problem.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="border-t border-rose-500/20 px-4 pb-4 pt-3 space-y-3"
                  >
                    <div className="text-xs text-muted-foreground">
                      내 답: <span className="text-rose-300 font-mono">{given || '(미입력)'}</span>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      정답: <span className="text-emerald-300"><MathRenderer content={problem.answer} inline /></span>
                    </div>
                    <div className="rounded-lg bg-muted/30 p-3 text-sm text-foreground/80">
                      <div className="text-xs font-medium text-muted-foreground mb-1.5">해설</div>
                      <MathRenderer content={problem.explanation} />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      )}

      {wrongItems.length === 0 && (
        <div className="text-center text-sm text-emerald-400 py-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
          모든 문제를 맞혔습니다! 완벽해요.
        </div>
      )}

      <button
        onClick={onExit}
        className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/15 text-foreground text-sm font-medium transition-colors"
      >
        학습 화면으로 돌아가기
      </button>
    </div>
  );
}

// ─── 메인 컴포넌트 ────────────────────────────────────────
export default function UnitTestMode({
  problems,
  dayLabel,
  sourceId,
  sourceLabel,
  timeLimitMinutes = 30,
  onExit,
  onComplete,
}: UnitTestModeProps) {
  const [phase, setPhase] = useState<TestPhase>('confirm');
  const [answers, setAnswers] = useState<Map<string, string>>(new Map());
  const [timeLeft, setTimeLeft] = useState(timeLimitMinutes * 60);
  const [elapsed, setElapsed] = useState(0);
  const startTimeRef = useRef<number>(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // 타이머
  useEffect(() => {
    if (phase !== 'testing') return;
    startTimeRef.current = Date.now();

    timerRef.current = setInterval(() => {
      const passed = Math.floor((Date.now() - startTimeRef.current) / 1000);
      const remaining = timeLimitMinutes * 60 - passed;
      setElapsed(passed);

      if (remaining <= 0) {
        clearInterval(timerRef.current!);
        handleSubmit();
      } else {
        setTimeLeft(remaining);
      }
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  const handleSubmit = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    const passed = Math.floor((Date.now() - startTimeRef.current) / 1000);
    setElapsed(passed);

    // 오답 노트 기록
    problems.forEach((p) => {
      const given = answers.get(p.id) ?? '';
      const isCorrect = given.trim() === p.answer.trim();
      logMistakeAttempt({
        problemId: p.id,
        question: p.question,
        studentAnswer: given,
        correctAnswer: p.answer,
        isCorrect,
        options: p.options,
        type: p.type,
        sectionLabel: dayLabel,
        sourceId,
        sourceLabel,
      });
    });

    const correct = problems.filter((p) => (answers.get(p.id) ?? '').trim() === p.answer.trim()).length;
    onComplete?.(correct, problems.length);
    setPhase('result');
  }, [answers, problems, dayLabel, sourceId, sourceLabel, onComplete]);

  const answeredCount = [...answers.values()].filter(Boolean).length;
  const isUrgent = timeLeft <= 300 && timeLeft > 0; // 5분 이하

  return (
    <>
      {/* 시험 시작 확인 모달 */}
      <AnimatePresence>
        {phase === 'confirm' && (
          <ConfirmModal
            timeLimitMinutes={timeLimitMinutes}
            onStartTest={() => setPhase('testing')}
            onStartPractice={onExit}
            onCancel={onExit}
          />
        )}
      </AnimatePresence>

      {/* 시험 진행 화면 */}
      {phase === 'testing' && (
        <div className="min-h-screen bg-background pb-24">
          {/* 고정 타이머 헤더 */}
          <div className="sticky top-0 z-50 backdrop-blur-xl bg-background/90 border-b border-white/10">
            <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-foreground">시험 진행 중</span>
                <span className="text-xs text-muted-foreground">
                  {answeredCount}/{problems.length} 풀이 완료
                </span>
              </div>

              <div className={`flex items-center gap-2 px-3 py-1.5 rounded-xl font-mono text-sm font-bold
                ${isUrgent
                  ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
                  : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                }
              `}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                {formatTime(timeLeft)}
              </div>
            </div>

            {/* 진행 바 */}
            <div className="h-1 bg-muted">
              <div
                className="h-full bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-300"
                style={{ width: `${(answeredCount / problems.length) * 100}%` }}
              />
            </div>
          </div>

          {/* 문제 목록 */}
          <main className="max-w-3xl mx-auto px-4 py-6 space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs text-muted-foreground">{dayLabel}</span>
              <span className="text-xs text-amber-500/70">— 힌트·해설 없음</span>
            </div>

            {problems.map((p, i) => (
              <TestProblemCard
                key={p.id}
                problem={p}
                index={i}
                answer={answers.get(p.id) ?? ''}
                onChange={(val) => {
                  setAnswers((prev) => {
                    const next = new Map(prev);
                    next.set(p.id, val);
                    return next;
                  });
                }}
              />
            ))}
          </main>

          {/* 제출 버튼 (하단 고정) */}
          <div className="fixed bottom-0 left-0 right-0 z-40 bg-background/90 backdrop-blur-xl border-t border-white/10 p-4">
            <div className="max-w-3xl mx-auto">
              <button
                onClick={() => {
                  const unanswered = problems.length - answeredCount;
                  if (unanswered > 0) {
                    if (!confirm(`아직 ${unanswered}개 문제를 풀지 않았어요. 그래도 제출할까요?`)) return;
                  }
                  handleSubmit();
                }}
                className="w-full py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-white font-semibold text-sm transition-colors"
              >
                시험 제출 ({answeredCount}/{problems.length})
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 결과 화면 */}
      {phase === 'result' && (
        <div className="min-h-screen bg-background">
          <div className="max-w-3xl mx-auto px-4 py-8">
            <ResultScreen
              problems={problems}
              answers={answers}
              elapsed={elapsed}
              onExit={onExit}
            />
          </div>
        </div>
      )}
    </>
  );
}
