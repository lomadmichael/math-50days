'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { flashcards, topics, type Flashcard, type FlashcardLevel } from '@/data/flashcards';

type DeckFilter = 'all' | FlashcardLevel;
type CardState = 'front' | 'back';

const STORAGE_KEY = 'math-50days:flashcard-progress';

interface CardProgress {
  known: Set<string>;
  review: Set<string>;
}

function loadProgress(): CardProgress {
  if (typeof window === 'undefined') return { known: new Set(), review: new Set() };
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { known: new Set(), review: new Set() };
    const parsed = JSON.parse(raw) as { known: string[]; review: string[] };
    return { known: new Set(parsed.known), review: new Set(parsed.review) };
  } catch {
    return { known: new Set(), review: new Set() };
  }
}

function saveProgress(progress: CardProgress) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ known: [...progress.known], review: [...progress.review] })
    );
  } catch { /* noop */ }
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function FlashcardsPage() {
  const [deck, setDeck] = useState<DeckFilter>('bc-g8');
  const [topicFilter, setTopicFilter] = useState<string>('all');
  const [cards, setCards] = useState<Flashcard[]>([]);
  const [index, setIndex] = useState(0);
  const [face, setFace] = useState<CardState>('front');
  const [progress, setProgress] = useState<CardProgress>({ known: new Set(), review: new Set() });
  const [isLoaded, setIsLoaded] = useState(false);
  const [showSummary, setShowSummary] = useState(false);

  // Load saved progress on mount
  useEffect(() => {
    setProgress(loadProgress());
    setIsLoaded(true);
  }, []);

  // Available topics for current deck
  const availableTopics = useMemo(() => {
    const filtered = flashcards.filter(
      (f) => deck === 'all' || f.level === deck || f.level === 'both'
    );
    return ['all', ...Array.from(new Set(filtered.map((f) => f.topic)))];
  }, [deck]);

  // Build card list whenever deck/topic changes
  useEffect(() => {
    let filtered = flashcards.filter(
      (f) => deck === 'all' || f.level === deck || f.level === 'both'
    );
    if (topicFilter !== 'all') {
      filtered = filtered.filter((f) => f.topic === topicFilter);
    }
    setCards(filtered);
    setIndex(0);
    setFace('front');
    setShowSummary(false);
  }, [deck, topicFilter]);

  const currentCard = cards[index] ?? null;

  const updateProgress = useCallback(
    (id: string, action: 'known' | 'review') => {
      setProgress((prev) => {
        const next: CardProgress = {
          known: new Set(prev.known),
          review: new Set(prev.review),
        };
        if (action === 'known') {
          next.known.add(id);
          next.review.delete(id);
        } else {
          next.review.add(id);
          next.known.delete(id);
        }
        saveProgress(next);
        return next;
      });
    },
    []
  );

  const handleKnown = () => {
    if (!currentCard) return;
    updateProgress(currentCard.id, 'known');
    goNext();
  };

  const handleReview = () => {
    if (!currentCard) return;
    updateProgress(currentCard.id, 'review');
    goNext();
  };

  const goNext = () => {
    if (index + 1 >= cards.length) {
      setShowSummary(true);
    } else {
      setIndex((i) => i + 1);
      setFace('front');
    }
  };

  const goPrev = () => {
    if (index > 0) {
      setIndex((i) => i - 1);
      setFace('front');
    }
  };

  const handleShuffle = () => {
    setCards((c) => shuffle(c));
    setIndex(0);
    setFace('front');
    setShowSummary(false);
  };

  const handleReset = () => {
    setIndex(0);
    setFace('front');
    setShowSummary(false);
  };

  const knownCount = isLoaded ? cards.filter((c) => progress.known.has(c.id)).length : 0;
  const reviewCount = isLoaded ? cards.filter((c) => progress.review.has(c.id)).length : 0;
  const progressPct = cards.length > 0 ? Math.round(((knownCount + reviewCount) / cards.length) * 100) : 0;

  const deckOptions: { value: DeckFilter; label: string; color: string }[] = [
    { value: 'bc-g8', label: 'BC Grade 8', color: 'rose' },
    { value: 'kr-g1', label: '한국 중1', color: 'blue' },
    { value: 'all', label: '전체', color: 'violet' },
  ];

  const colorMap: Record<string, string> = {
    rose: 'border-rose-500/40 bg-rose-500/10 text-rose-300',
    blue: 'border-blue-500/40 bg-blue-500/10 text-blue-300',
    violet: 'border-violet-500/40 bg-violet-500/10 text-violet-300',
  };
  const activeColor = deckOptions.find((d) => d.value === deck)?.color ?? 'violet';

  return (
    <div className="min-h-screen bg-background pb-16">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-white/10">
        <div className="max-w-2xl mx-auto px-4 py-4 flex items-center gap-3">
          <Link
            href="/"
            className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-white/10 transition-all"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </Link>
          <div className="flex-1">
            <h1 className="text-lg font-bold text-foreground flex items-center gap-2">
              <span>🗂️</span>
              <span>용어 플래시카드</span>
            </h1>
            <p className="text-xs text-muted-foreground">BC Grade 8 · 한국 중1 수학 용어</p>
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-6 space-y-5">
        {/* Deck selector */}
        <div className="flex gap-2 flex-wrap">
          {deckOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => { setDeck(opt.value); setTopicFilter('all'); }}
              className={`px-4 py-2 rounded-xl text-sm font-medium border transition-all ${
                deck === opt.value
                  ? colorMap[opt.color]
                  : 'border-white/10 bg-white/5 text-muted-foreground hover:bg-white/10'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Topic filter */}
        <div className="flex gap-2 flex-wrap">
          {availableTopics.map((t) => (
            <button
              key={t}
              onClick={() => { setTopicFilter(t); }}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                topicFilter === t
                  ? 'bg-violet-500 text-white'
                  : 'bg-white/5 text-muted-foreground hover:bg-white/10'
              }`}
            >
              {t === 'all' ? '전체 주제' : t}
            </button>
          ))}
        </div>

        {/* Progress bar */}
        <div>
          <div className="flex items-center justify-between text-xs text-muted-foreground mb-1.5">
            <span>진행률 {progressPct}%</span>
            <span>{index + 1} / {cards.length} 장</span>
          </div>
          <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-violet-500 to-purple-500"
              initial={{ width: 0 }}
              animate={{ width: `${progressPct}%` }}
              transition={{ duration: 0.4 }}
            />
          </div>
          <div className="flex gap-4 mt-2 text-xs">
            <span className="text-emerald-400">✓ 알아요 {knownCount}</span>
            <span className="text-amber-400">↩ 복습 {reviewCount}</span>
          </div>
        </div>

        {/* Card area */}
        <AnimatePresence mode="wait">
          {showSummary ? (
            <motion.div
              key="summary"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="rounded-3xl border border-violet-500/20 bg-violet-500/5 p-10 text-center space-y-4"
            >
              <div className="text-5xl">🎉</div>
              <h2 className="text-2xl font-bold text-foreground">덱 완료!</h2>
              <p className="text-muted-foreground text-sm">
                알아요 <span className="text-emerald-400 font-semibold">{knownCount}장</span> ·
                복습 필요 <span className="text-amber-400 font-semibold">{reviewCount}장</span>
              </p>
              <div className="flex gap-3 justify-center pt-2">
                <button
                  onClick={handleReset}
                  className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-white/10 transition-all"
                >
                  처음부터
                </button>
                <button
                  onClick={handleShuffle}
                  className="px-5 py-2.5 rounded-xl bg-violet-500 text-white text-sm font-medium hover:bg-violet-600 transition-all"
                >
                  섞어서 다시
                </button>
              </div>
            </motion.div>
          ) : currentCard ? (
            <motion.div
              key={`${currentCard.id}-${face}`}
              initial={{ opacity: 0, rotateY: face === 'back' ? -90 : 90, scale: 0.97 }}
              animate={{ opacity: 1, rotateY: 0, scale: 1 }}
              exit={{ opacity: 0, rotateY: face === 'front' ? -90 : 90 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              style={{ perspective: 1200 }}
            >
              <button
                onClick={() => setFace((f) => (f === 'front' ? 'back' : 'front'))}
                className="w-full text-left"
              >
                <div className={`relative rounded-3xl border p-8 min-h-[260px] flex flex-col justify-between transition-all cursor-pointer select-none
                  ${face === 'front'
                    ? `border-${activeColor}-500/20 bg-gradient-to-br from-${activeColor}-500/10 to-${activeColor}-500/5`
                    : 'border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 to-emerald-500/5'
                  }`}
                >
                  {/* Topic badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-muted-foreground">
                      {currentCard.topic}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {face === 'front' ? '클릭하면 뒤집어요 →' : '← 앞면 보기'}
                    </span>
                  </div>

                  {/* Card content */}
                  {face === 'front' ? (
                    <div className="flex-1 flex flex-col justify-center space-y-3">
                      <p className="text-3xl font-bold text-foreground">{currentCard.english}</p>
                      <p className="text-sm text-muted-foreground font-mono">{currentCard.example}</p>
                    </div>
                  ) : (
                    <div className="flex-1 flex flex-col justify-center space-y-3">
                      <p className="text-3xl font-bold text-emerald-300">{currentCard.korean}</p>
                      <p className="text-sm text-violet-300 font-mono">{currentCard.example}</p>
                      <p className="text-xs text-muted-foreground">{currentCard.english}</p>
                    </div>
                  )}

                  {/* Known indicator */}
                  {isLoaded && progress.known.has(currentCard.id) && (
                    <span className="absolute top-4 right-4 text-emerald-400 text-lg">✓</span>
                  )}
                </div>
              </button>
            </motion.div>
          ) : (
            <div className="text-center py-20 text-muted-foreground">카드가 없습니다.</div>
          )}
        </AnimatePresence>

        {/* Navigation & action buttons */}
        {!showSummary && currentCard && (
          <div className="space-y-3">
            {/* Know / Review buttons */}
            {face === 'back' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid grid-cols-2 gap-3"
              >
                <button
                  onClick={handleReview}
                  className="py-3 rounded-2xl border border-amber-500/30 bg-amber-500/10 text-amber-300 font-medium hover:bg-amber-500/20 transition-all text-sm"
                >
                  ↩ 다시 볼게요
                </button>
                <button
                  onClick={handleKnown}
                  className="py-3 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 font-medium hover:bg-emerald-500/20 transition-all text-sm"
                >
                  ✓ 알아요!
                </button>
              </motion.div>
            )}

            {/* Prev / Next / Shuffle */}
            <div className="flex items-center gap-3">
              <button
                onClick={goPrev}
                disabled={index === 0}
                className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-muted-foreground hover:text-foreground hover:bg-white/10 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              >
                ← 이전
              </button>
              <button
                onClick={handleShuffle}
                className="flex-1 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-muted-foreground hover:text-foreground hover:bg-white/10 transition-all text-center"
              >
                🔀 섞기
              </button>
              <button
                onClick={goNext}
                className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-muted-foreground hover:text-foreground hover:bg-white/10 transition-all"
              >
                다음 →
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
