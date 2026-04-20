'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AITutor from './AITutor';

interface FloatingAITutorProps {
  dayTitle?: string;
  dayConcepts?: Array<{ title: string; content: string }>;
  gradeLabel?: string;
  /** 버블 위 라벨 (선택). 예: "샘에게 물어보기" */
  label?: string;
}

export default function FloatingAITutor(props: FloatingAITutorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  // ESC 로 닫기
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen]);

  // 열렸을 때 body 스크롤 잠금 (모바일에서 뒤 스크롤 방지)
  useEffect(() => {
    if (!isOpen) return;
    const mq = window.matchMedia('(max-width: 767px)');
    if (!mq.matches) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  const open = () => {
    setIsOpen(true);
    setHasInteracted(true);
  };

  return (
    <>
      {/* 플로팅 버튼 */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            key="fab"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            onClick={open}
            aria-label="샘에게 질문하기"
            className="fixed bottom-5 right-5 md:bottom-6 md:right-6 z-40 group"
          >
            {/* 라벨 tooltip (데스크탑에서 호버 시) */}
            <span className="hidden md:group-hover:inline-flex absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap px-3 py-1.5 rounded-lg bg-foreground/90 text-background text-xs font-medium shadow-lg">
              샘에게 질문하기
            </span>

            {/* 메인 버블 */}
            <span className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 shadow-lg shadow-violet-500/30 hover:shadow-xl hover:shadow-violet-500/40 transition-shadow">
              {/* 펄스 링 (첫 인터랙션 전에만) */}
              {!hasInteracted && (
                <span className="absolute inset-0 rounded-full bg-violet-500 animate-ping opacity-20" />
              )}
              <span className="text-2xl md:text-3xl" role="img" aria-hidden="true">
                💬
              </span>
              {/* 작은 별 뱃지 */}
              <span className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 rounded-full bg-amber-400 text-[10px] font-bold text-amber-950 shadow">
                ✨
              </span>
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* 채팅 패널 */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* 모바일 백드롭 */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              className="md:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            />

            {/* 패널 본체 */}
            <motion.div
              key="panel"
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.96 }}
              transition={{ type: 'spring', damping: 24, stiffness: 260 }}
              className="fixed z-50
                         bottom-0 right-0 left-0 md:bottom-6 md:right-6 md:left-auto md:top-auto
                         md:w-[420px] md:max-h-[min(640px,calc(100vh-6rem))]
                         max-h-[85vh] h-auto
                         flex flex-col
                         rounded-t-2xl md:rounded-2xl
                         bg-card border border-violet-500/20 shadow-2xl shadow-violet-900/20
                         overflow-hidden"
            >
              {/* 헤더 */}
              <div className="flex items-center gap-3 px-4 py-3 border-b border-white/5 bg-gradient-to-r from-violet-500/10 to-cyan-500/10">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center text-lg shrink-0">
                  🤖
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-foreground">샘(Sam)</h3>
                  <p className="text-xs text-muted-foreground truncate">
                    {props.dayTitle ? `지금 맥락: ${props.dayTitle}` : '친절한 수학 튜터'}
                  </p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="닫기"
                  className="w-8 h-8 rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/10 flex items-center justify-center transition-colors"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* 챗 본체 — AITutor embedded 모드 */}
              <div className="flex-1 min-h-0">
                <AITutor
                  dayTitle={props.dayTitle}
                  dayConcepts={props.dayConcepts}
                  gradeLabel={props.gradeLabel}
                  embedded
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
