'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Problem as ProblemType } from '@/lib/types';
import { useProblemAttempts } from '@/hooks/useProblemAttempts';
import MathRenderer from './MathRenderer';

interface ProblemProps {
  problem: ProblemType;
  index: number;
  onCorrect?: () => void;
  onWrong?: () => void;
  /** AI 튜터 컨텍스트 저장 시 표시할 섹션 라벨 (예: "Finding Slope") */
  sectionLabel?: string;
}

export default function Problem({ problem, index, onCorrect, onWrong, sectionLabel }: ProblemProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const attemptsCtx = useProblemAttempts();

  const isCorrect = problem.type === 'multiple-choice'
    ? selected === problem.answer
    : inputValue.trim() === problem.answer.trim();

  const handleSubmit = () => {
    if (problem.type === 'multiple-choice' && !selected) return;
    if (problem.type === 'short-answer' && !inputValue.trim()) return;

    setShowResult(true);

    // 샘(AI 튜터) 에게 풀이 상황 공유하기 위해 시도 기록
    attemptsCtx?.recordAttempt({
      problemId: problem.id,
      question: problem.question,
      studentAnswer: problem.type === 'multiple-choice' ? (selected ?? '') : inputValue.trim(),
      correctAnswer: problem.answer,
      isCorrect,
      type: problem.type,
      options: problem.options,
      sectionLabel,
    });

    if (isCorrect) {
      onCorrect?.();
    } else {
      onWrong?.();
    }
  };

  const difficultyBadge = {
    basic: { label: '기본', color: 'bg-blue-500/10 text-blue-400' },
    applied: { label: '응용', color: 'bg-purple-500/10 text-purple-400' },
    challenge: { label: '도전', color: 'bg-rose-500/10 text-rose-400' },
  }[problem.difficulty];

  return (
    <div className={`rounded-xl border ${
      showResult
        ? isCorrect
          ? 'border-emerald-500/30 bg-emerald-500/5'
          : 'border-rose-500/30 bg-rose-500/5'
        : 'border-white/10 bg-card'
    } p-5 transition-all`}>
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <span className="text-sm font-bold text-muted-foreground">Q{index + 1}</span>
        <span className={`text-xs px-2 py-0.5 rounded-full ${difficultyBadge.color}`}>
          {difficultyBadge.label}
        </span>
      </div>

      {/* Question */}
      <div className="mb-5">
        <MathRenderer content={problem.question} className="text-foreground" />
      </div>

      {/* Multiple Choice */}
      {problem.type === 'multiple-choice' && problem.options && (
        <div className="space-y-2 mb-4">
          {problem.options.map((option, i) => {
            const optionLabel = String.fromCharCode(0x2460 + i); // ①②③④⑤
            const isSelected = selected === option;
            const isAnswer = option === problem.answer;

            return (
              <button
                key={i}
                onClick={() => !showResult && setSelected(option)}
                disabled={showResult}
                className={`w-full text-left px-4 py-3 rounded-xl border transition-all text-sm flex items-center gap-3
                  ${showResult
                    ? isAnswer
                      ? 'border-emerald-500/50 bg-emerald-500/10 text-emerald-400'
                      : isSelected && !isAnswer
                        ? 'border-rose-500/50 bg-rose-500/10 text-rose-400'
                        : 'border-white/5 text-muted-foreground'
                    : isSelected
                      ? 'border-violet-500/50 bg-violet-500/10 text-foreground'
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

      {/* Short Answer */}
      {problem.type === 'short-answer' && (
        <div className="mb-4">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => !showResult && setInputValue(e.target.value)}
            disabled={showResult}
            placeholder="답을 입력하세요"
            className={`w-full px-4 py-3 rounded-xl border bg-transparent text-foreground text-sm outline-none transition-all
              ${showResult
                ? isCorrect
                  ? 'border-emerald-500/50'
                  : 'border-rose-500/50'
                : 'border-white/10 focus:border-violet-500/50'
              }
            `}
            onKeyDown={(e) => e.key === 'Enter' && !showResult && handleSubmit()}
          />
          {showResult && !isCorrect && (
            <p className="text-xs text-emerald-400 mt-2">
              정답: <MathRenderer content={problem.answer} inline />
            </p>
          )}
        </div>
      )}

      {/* Submit / Result */}
      {!showResult ? (
        <button
          onClick={handleSubmit}
          className="w-full py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium transition-colors"
        >
          확인하기
        </button>
      ) : (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="space-y-3"
          >
            {/* Result Badge */}
            <div className={`text-center py-2 rounded-lg text-sm font-medium ${
              isCorrect ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'
            }`}>
              {isCorrect ? '🎉 정답입니다!' : '❌ 다시 한번 생각해보세요'}
            </div>

            {/* Explanation Toggle */}
            <button
              onClick={() => setShowExplanation(!showExplanation)}
              className="w-full text-center text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              {showExplanation ? '해설 접기 ▲' : '해설 보기 ▼'}
            </button>

            {showExplanation && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="rounded-lg bg-muted/30 p-4 text-sm text-foreground/80"
              >
                <MathRenderer content={problem.explanation} />
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}
