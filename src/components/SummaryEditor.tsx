'use client';

import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MathRenderer from './MathRenderer';
import MathField from './MathField';

interface SummaryEditorProps {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}

/** 텍스트에 바로 들어가는 Unicode 기호 (수식 모드 불필요) */
const UNICODE_SYMBOLS = [
  { label: 'π', ch: 'π' },
  { label: '°', ch: '°' },
  { label: '×', ch: '×' },
  { label: '÷', ch: '÷' },
  { label: '±', ch: '±' },
  { label: '≤', ch: '≤' },
  { label: '≥', ch: '≥' },
  { label: '≠', ch: '≠' },
  { label: '∞', ch: '∞' },
];

export default function SummaryEditor({ value, onChange, placeholder }: SummaryEditorProps) {
  const [showPreview, setShowPreview] = useState(true);
  const [mathModalOpen, setMathModalOpen] = useState(false);
  const [pendingLatex, setPendingLatex] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  /** 커서 위치에 텍스트 삽입 (앞뒤 공백 자동) */
  const insertAtCursor = (text: string) => {
    const textarea = textareaRef.current;
    if (!textarea) {
      const sep = value && !/\s$/.test(value) ? ' ' : '';
      onChange(value + sep + text);
      return;
    }
    const start = textarea.selectionStart ?? value.length;
    const end = textarea.selectionEnd ?? value.length;
    const before = value.slice(0, start);
    const after = value.slice(end);

    const prevChar = before.slice(-1);
    const nextChar = after.charAt(0);
    const needsBefore = before.length > 0 && prevChar !== ' ' && prevChar !== '\n';
    const needsAfter = after.length > 0 && nextChar !== ' ' && nextChar !== '\n';
    const prefix = needsBefore ? ' ' : '';
    const suffix = needsAfter ? ' ' : '';

    const next = before + prefix + text + suffix + after;
    onChange(next);
    requestAnimationFrame(() => {
      const pos = start + prefix.length + text.length;
      textarea.focus();
      textarea.setSelectionRange(pos, pos);
    });
  };

  const openMathModal = () => {
    setPendingLatex('');
    setMathModalOpen(true);
  };

  const insertMathAndClose = () => {
    const latex = pendingLatex.trim();
    if (latex) {
      insertAtCursor(`$${latex}$`);
    }
    setMathModalOpen(false);
    setPendingLatex('');
  };

  return (
    <div className="space-y-2">
      {/* 상단 도구 바 */}
      <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3 space-y-3">
        {/* 수식 만들기 (주력 버튼) */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={openMathModal}
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-violet-500 to-cyan-500 text-white text-sm font-semibold hover:opacity-90 transition-opacity shadow-sm"
          >
            <span>🧮</span>
            <span>수식 만들기</span>
          </button>
          <span className="text-xs text-muted-foreground">
            버튼을 눌러 x², 분수, 루트 등을 <strong className="text-foreground">보면서</strong> 입력하세요
          </span>
        </div>

        {/* Unicode 기호 — 그냥 누르면 바로 삽입 */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
            자주 쓰는 기호
          </span>
          {UNICODE_SYMBOLS.map((s) => (
            <button
              key={s.label}
              type="button"
              onClick={() => insertAtCursor(s.ch)}
              className="w-9 h-9 rounded-md bg-white/5 hover:bg-violet-500/20 border border-white/10 hover:border-violet-400/40 text-sm text-foreground/90 hover:text-violet-200 transition-all"
              title={s.label}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {/* 텍스트 입력창 */}
      <textarea
        ref={textareaRef}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder ?? '오늘 배운 내용을 적어보세요. 수식이 필요하면 위의 "수식 만들기" 버튼을 누르세요.'}
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

      {/* 수식 만들기 모달 */}
      <AnimatePresence>
        {mathModalOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
              onClick={() => setMathModalOpen(false)}
            />
            <motion.div
              key="modal"
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.96 }}
              transition={{ type: 'spring', damping: 24, stiffness: 280 }}
              className="fixed z-50 inset-x-4 top-[12vh] md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-[560px] max-w-full
                         rounded-2xl bg-card border border-violet-500/30 shadow-2xl shadow-violet-900/30 overflow-hidden"
            >
              {/* 헤더 */}
              <div className="flex items-center gap-3 px-5 py-4 border-b border-white/10 bg-gradient-to-r from-violet-500/10 to-cyan-500/10">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center text-xl">
                  🧮
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-bold text-foreground">수식 만들기</h3>
                  <p className="text-xs text-muted-foreground">
                    x², 분수, 루트 등을 버튼으로 넣고 결과를 바로 확인
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setMathModalOpen(false)}
                  className="w-8 h-8 rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/10 flex items-center justify-center"
                  aria-label="닫기"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* MathField 에디터 */}
              <div className="p-5 space-y-4">
                <div>
                  <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">
                    수식 입력 (가상 키보드는 오른쪽 아래 키보드 아이콘 클릭)
                  </label>
                  <MathField
                    value={pendingLatex}
                    onChange={setPendingLatex}
                    autoFocus
                    placeholder="예: x^2 + 3x - 4"
                  />
                </div>

                {/* 빠른 템플릿 */}
                <div>
                  <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">
                    빠른 템플릿
                  </label>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      { label: 'x²', latex: 'x^2' },
                      { label: 'x³', latex: 'x^3' },
                      { label: '√', latex: '\\sqrt{x}' },
                      { label: '분수', latex: '\\frac{a}{b}' },
                      { label: 'y=mx+b', latex: 'y = mx + b' },
                      { label: 'a²+b²=c²', latex: 'a^2 + b^2 = c^2' },
                      { label: '기울기', latex: 'm = \\frac{y_2 - y_1}{x_2 - x_1}' },
                    ].map((t) => (
                      <button
                        key={t.label}
                        type="button"
                        onClick={() => setPendingLatex(t.latex)}
                        className="px-3 py-1.5 rounded-md bg-white/5 hover:bg-violet-500/20 border border-white/10 hover:border-violet-400/40 text-xs text-foreground/90 hover:text-violet-200 transition-all"
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 프리뷰 */}
                <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/5 px-4 py-3 min-h-[60px] flex items-center justify-center">
                  {pendingLatex.trim() ? (
                    <MathRenderer content={`$${pendingLatex}$`} />
                  ) : (
                    <span className="text-xs text-muted-foreground">
                      수식을 입력하면 여기에 렌더된 결과가 보여요
                    </span>
                  )}
                </div>
              </div>

              {/* 푸터 */}
              <div className="flex items-center justify-end gap-2 px-5 py-3 border-t border-white/10 bg-black/20">
                <button
                  type="button"
                  onClick={() => setMathModalOpen(false)}
                  className="px-4 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-white/5"
                >
                  취소
                </button>
                <button
                  type="button"
                  onClick={insertMathAndClose}
                  disabled={!pendingLatex.trim()}
                  className="px-5 py-2 rounded-lg bg-gradient-to-r from-violet-500 to-cyan-500 text-white text-sm font-semibold hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed transition-opacity"
                >
                  수식 삽입
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
