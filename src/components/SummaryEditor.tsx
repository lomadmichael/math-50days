'use client';

import { useRef, useState } from 'react';
import MathRenderer from './MathRenderer';

interface SummaryEditorProps {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}

/**
 * 수식 삽입 버튼 정의
 * - 수학 모드 필요한 것(지수, 분수 등)은 `$...$` 로 감싸서 삽입
 * - 단독으로 표시 가능한 기호(π, ∞, ≤ 등)는 Unicode 문자로 삽입 → $...$ 없이도 보임
 */
const SYMBOL_GROUPS = [
  {
    label: '지수·제곱근',
    buttons: [
      { label: 'x²', snippet: '$x^2$' },
      { label: 'x³', snippet: '$x^3$' },
      { label: 'xⁿ', snippet: '$x^{n}$' },
      { label: '√□', snippet: '$\\sqrt{}$', cursorOffset: -2 },
      { label: '∛□', snippet: '$\\sqrt[3]{}$', cursorOffset: -2 },
    ],
  },
  {
    label: '분수·계산',
    buttons: [
      { label: '½ 분수', snippet: '$\\frac{}{}$', cursorOffset: -4 },
      { label: '×', snippet: '×' },
      { label: '÷', snippet: '÷' },
      { label: '±', snippet: '±' },
    ],
  },
  {
    label: '기호',
    buttons: [
      { label: 'π', snippet: 'π' },
      { label: '°', snippet: '°' },
      { label: '≤', snippet: '≤' },
      { label: '≥', snippet: '≥' },
      { label: '≠', snippet: '≠' },
      { label: '∞', snippet: '∞' },
    ],
  },
  {
    label: '자주 쓰는 식',
    buttons: [
      { label: 'y=mx+b', snippet: '$y = mx + b$' },
      { label: 'a²+b²=c²', snippet: '$a^2 + b^2 = c^2$' },
      { label: '기울기', snippet: '$m = \\frac{y_2 - y_1}{x_2 - x_1}$' },
    ],
  },
];

export default function SummaryEditor({ value, onChange, placeholder }: SummaryEditorProps) {
  const [showPreview, setShowPreview] = useState(true);
  const [showHelp, setShowHelp] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  /** 현재 커서 위치에 snippet 삽입 */
  const insertSnippet = (snippet: string, cursorOffset = 0) => {
    const textarea = textareaRef.current;
    if (!textarea) {
      onChange(value + (value && !/\s$/.test(value) ? ' ' : '') + snippet);
      return;
    }
    const start = textarea.selectionStart ?? value.length;
    const end = textarea.selectionEnd ?? value.length;
    const before = value.slice(0, start);
    const after = value.slice(end);

    // `$...$` 수식끼리 붙으면 KaTeX 가 `$$..$$` 로 오해. 앞뒤 공백 확보.
    const prevChar = before.slice(-1);
    const nextChar = after.charAt(0);
    const needsSpaceBefore =
      before.length > 0 &&
      prevChar !== ' ' &&
      prevChar !== '\n' &&
      prevChar !== '\t';
    const needsSpaceAfter =
      after.length > 0 &&
      nextChar !== ' ' &&
      nextChar !== '\n' &&
      nextChar !== '\t' &&
      // snippet 이 `$` 로 끝나고 뒤가 `$` 면 구분 공백 필수
      (snippet.endsWith('$') || /[a-zA-Z]$/.test(snippet) ? nextChar !== '' : false);

    const prefix = needsSpaceBefore ? ' ' : '';
    const suffix = needsSpaceAfter ? ' ' : '';
    const next = before + prefix + snippet + suffix + after;
    onChange(next);

    // 다음 프레임에 커서 위치 조정
    requestAnimationFrame(() => {
      const cursorPos = start + prefix.length + snippet.length + cursorOffset;
      textarea.focus();
      textarea.setSelectionRange(cursorPos, cursorPos);
    });
  };

  return (
    <div className="space-y-2">
      {/* 수식 도우미 툴바 */}
      <div className="rounded-xl border border-white/10 bg-white/[0.02] overflow-hidden">
        <div className="flex items-center justify-between px-3 py-2 border-b border-white/5">
          <span className="text-xs text-muted-foreground flex items-center gap-1.5">
            <span>✏️</span>
            <span>수식 넣기</span>
          </span>
          <button
            type="button"
            onClick={() => setShowHelp((v) => !v)}
            className="text-xs text-violet-400 hover:text-violet-300"
          >
            {showHelp ? '닫기' : '도움말'}
          </button>
        </div>

        {showHelp && (
          <div className="px-3 py-2.5 text-xs text-muted-foreground space-y-1 bg-violet-500/5 border-b border-violet-500/10">
            <p>• <strong className="text-foreground">버튼</strong>을 누르면 수식이 자동 삽입돼요.</p>
            <p>• 수식은 <code className="text-violet-300">$...$</code> 로 감싸야 렌더링돼요. 예: <code className="text-violet-300">$x^2$</code> → $x^2$</p>
            <p>• <code className="text-violet-300">^</code> 뒤 여러 글자는 <code className="text-violet-300">{'{ }'}</code>로: <code className="text-violet-300">$x^{'{10}'}$</code></p>
            <p>• 아래 프리뷰에서 결과를 바로 확인할 수 있어요.</p>
          </div>
        )}

        <div className="p-3 space-y-2">
          {SYMBOL_GROUPS.map((group) => (
            <div key={group.label} className="flex items-center gap-2 flex-wrap">
              <span className="text-[10px] uppercase tracking-wider text-muted-foreground w-20 shrink-0">
                {group.label}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {group.buttons.map((b) => (
                  <button
                    key={b.label}
                    type="button"
                    onClick={() => insertSnippet(b.snippet, b.cursorOffset ?? 0)}
                    className="px-2.5 py-1 rounded-md bg-white/5 hover:bg-violet-500/20 border border-white/10 hover:border-violet-400/40 text-xs text-foreground/90 hover:text-violet-200 transition-all"
                    title={b.snippet}
                  >
                    {b.label}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 입력창 */}
      <textarea
        ref={textareaRef}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full h-32 px-4 py-3 rounded-xl bg-card border border-white/10 text-foreground text-sm resize-none outline-none focus:border-violet-500/50 transition-colors placeholder:text-muted-foreground/50"
      />

      {/* 라이브 프리뷰 */}
      {value.trim() && (
        <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 overflow-hidden">
          <div className="flex items-center justify-between px-3 py-2 border-b border-emerald-500/10">
            <span className="text-xs text-emerald-300 flex items-center gap-1.5">
              <span>👀</span>
              <span>미리보기</span>
            </span>
            <button
              type="button"
              onClick={() => setShowPreview((v) => !v)}
              className="text-xs text-emerald-400/80 hover:text-emerald-300"
            >
              {showPreview ? '숨기기' : '보기'}
            </button>
          </div>
          {showPreview && (
            <div className="px-4 py-3 text-sm text-foreground/90 leading-relaxed">
              <MathRenderer content={value} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
