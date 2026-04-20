'use client';

import { createContext, useCallback, useContext, useState, ReactNode } from 'react';

/**
 * 학생의 문제 풀이 시도 기록 — 샘(AI 튜터)에게 풀이 상황을 공유하기 위해 사용.
 *
 * 흐름:
 *   1. <ProblemAttemptsProvider> 로 페이지를 감싸면 하위 컴포넌트들이 공유 상태 사용 가능.
 *   2. <Problem> 이 채점되면 recordAttempt() 를 호출해 결과를 저장.
 *   3. <FloatingAITutor> 가 attempts 를 읽어 시스템 프롬프트 컨텍스트로 전달.
 */

export interface ProblemAttempt {
  problemId: string;
  question: string;
  studentAnswer: string;
  correctAnswer: string;
  isCorrect: boolean;
  /** 선택지 객관식이면 옵션 목록 (맥락 제공용) */
  options?: string[];
  /** 주관식/객관식 구분 */
  type: 'multiple-choice' | 'short-answer';
  /** 선택 라벨 (예: "Finding Slope", "직육면체 부피") */
  sectionLabel?: string;
  attemptedAt: number;
}

interface ProblemAttemptsContextValue {
  attempts: ProblemAttempt[];
  /** 이미 같은 problemId 있으면 덮어쓰기, 없으면 추가 */
  recordAttempt: (a: Omit<ProblemAttempt, 'attemptedAt'>) => void;
  reset: () => void;
}

const Ctx = createContext<ProblemAttemptsContextValue | null>(null);

export function ProblemAttemptsProvider({ children }: { children: ReactNode }) {
  const [attempts, setAttempts] = useState<ProblemAttempt[]>([]);

  const recordAttempt = useCallback(
    (a: Omit<ProblemAttempt, 'attemptedAt'>) => {
      setAttempts((prev) => {
        const existing = prev.findIndex((x) => x.problemId === a.problemId);
        const next: ProblemAttempt = { ...a, attemptedAt: Date.now() };
        if (existing >= 0) {
          const copy = prev.slice();
          copy[existing] = next;
          return copy;
        }
        return [...prev, next];
      });
    },
    []
  );

  const reset = useCallback(() => setAttempts([]), []);

  return (
    <Ctx.Provider value={{ attempts, recordAttempt, reset }}>{children}</Ctx.Provider>
  );
}

/** Provider 가 없으면 null 반환 (선택적 사용) */
export function useProblemAttempts(): ProblemAttemptsContextValue | null {
  return useContext(Ctx);
}

/**
 * AI 튜터 시스템 프롬프트에 삽입할 수 있는 읽기 쉬운 요약 문자열 생성.
 * 비어있으면 빈 문자열 반환.
 */
export function formatAttemptsForTutor(attempts: ProblemAttempt[]): string {
  if (attempts.length === 0) return '';

  const correct = attempts.filter((a) => a.isCorrect);
  const wrong = attempts.filter((a) => !a.isCorrect);

  const lines: string[] = [];
  lines.push(`## 지금 학생의 문제 풀이 상황`);
  lines.push(
    `총 ${attempts.length}문제 시도 · 정답 ${correct.length}개 · 오답 ${wrong.length}개`
  );

  if (wrong.length > 0) {
    lines.push('');
    lines.push(`### ❌ 틀린 문제 (${wrong.length}개) — 이 문제들을 집중적으로 도와주세요`);
    wrong.forEach((a, i) => {
      lines.push('');
      lines.push(`**${i + 1}.${a.sectionLabel ? ` [${a.sectionLabel}]` : ''} 문제**: ${a.question}`);
      if (a.options && a.options.length > 0) {
        lines.push(`- 선택지: ${a.options.join(' / ')}`);
      }
      lines.push(`- 학생이 고른 답: "${a.studentAnswer || '(미입력)'}"`);
      lines.push(`- 실제 정답: "${a.correctAnswer}"`);
    });
  }

  if (correct.length > 0) {
    lines.push('');
    lines.push(`### ✅ 맞힌 문제 (${correct.length}개) — 참고만`);
    correct.forEach((a, i) => {
      lines.push(
        `${i + 1}.${a.sectionLabel ? ` [${a.sectionLabel}]` : ''} ${a.question.slice(0, 60)}${a.question.length > 60 ? '…' : ''} → "${a.studentAnswer}"`
      );
    });
  }

  lines.push('');
  lines.push(
    `💡 학생이 "오답 설명해줘" 같이 말하면, 위 틀린 문제들을 구체적으로 하나씩 설명해주세요. 어떤 문제였냐고 되묻지 말고 바로 분석하세요.`
  );

  return lines.join('\n');
}
