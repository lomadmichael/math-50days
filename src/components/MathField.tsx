'use client';

import { useEffect, useRef } from 'react';
import type { MathfieldElement } from 'mathlive';

interface MathFieldProps {
  value: string;
  onChange: (latex: string) => void;
  placeholder?: string;
  autoFocus?: boolean;
}

/**
 * MathLive `<math-field>` 웹 컴포넌트 React 래퍼.
 * 학생이 x², 분수, 루트 등을 시각적으로 입력하면 내부적으로 LaTeX 로 변환.
 * 출력은 $ 감싸지 않은 순수 LaTeX — 부모가 필요에 따라 `$...$` 로 래핑.
 */
export default function MathField({
  value,
  onChange,
  placeholder = '여기에 수식을 입력하세요',
  autoFocus = false,
}: MathFieldProps) {
  const ref = useRef<MathfieldElement | null>(null);

  // 클라이언트에서만 mathlive 모듈 로드 (SSR 호환)
  useEffect(() => {
    let mounted = true;
    (async () => {
      await import('mathlive');
      if (!mounted) return;
      const el = ref.current;
      if (!el) return;
      // 초기 값 동기화
      if (el.value !== value) el.value = value;
      if (autoFocus) {
        setTimeout(() => el.focus(), 50);
      }
    })();
    return () => {
      mounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // value prop 변경 시 반영
  useEffect(() => {
    const el = ref.current;
    if (el && el.value !== value) {
      el.value = value;
    }
  }, [value]);

  return (
    // @ts-expect-error — web component element
    <math-field
      ref={ref}
      onInput={(e: React.FormEvent<MathfieldElement>) => {
        onChange((e.target as MathfieldElement).value);
      }}
      placeholder={placeholder}
      style={{
        width: '100%',
        minHeight: '56px',
        padding: '12px 16px',
        borderRadius: '12px',
        background: 'rgba(255,255,255,0.05)',
        border: '1px solid rgba(139,92,246,0.3)',
        color: 'var(--foreground)',
        fontSize: '18px',
        outline: 'none',
      }}
    />
  );
}
