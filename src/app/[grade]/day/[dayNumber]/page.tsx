'use client';

import { use, useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import confetti from 'canvas-confetti';
import { courses, getPartForDay } from '@/data/curriculum';
import { getVideosForDay, EBS_COURSE_URL } from '@/data/videoMappings';
import { getEbsLecturesForDay } from '@/data/ebsLectures';
import { useProgress } from '@/hooks/useProgress';
import { useBookmarks } from '@/hooks/useBookmarks';
import { GradeId, DayContent, LectureMapping } from '@/lib/types';
import YouTubePlayer from '@/components/YouTubePlayer';
import ConceptNote from '@/components/ConceptNote';
import Problem from '@/components/Problem';
import FloatingAITutor from '@/components/FloatingAITutor';
import MathRenderer from '@/components/MathRenderer';
import SummaryEditor from '@/components/SummaryEditor';
import { ProblemAttemptsProvider } from '@/hooks/useProblemAttempts';
import UnitTestMode from '@/components/UnitTestMode';
import { scheduleConceptsForReview } from '@/hooks/useReviewScheduler';

const tabs = [
  { id: 'lecture', label: '강의', icon: '📺' },
  { id: 'practice', label: '연습', icon: '✏️' },
  { id: 'summary', label: '정리', icon: '📝' },
] as const;

type TabId = typeof tabs[number]['id'];

const gradeGradients: Record<GradeId, string> = {
  foundation: 'from-orange-500 to-amber-500',
  grade1: 'from-blue-500 to-cyan-500',
  grade2: 'from-purple-500 to-violet-500',
  'bc-g67': 'from-sky-500 to-cyan-500',
  'bc-g8': 'from-rose-500 to-pink-500',
  'bc-g9': 'from-amber-500 to-yellow-500',
  grade3: 'from-emerald-500 to-teal-500',
};

export default function DayPage({ params }: { params: Promise<{ grade: string; dayNumber: string }> }) {
  const { grade, dayNumber: dayStr } = use(params);
  const gradeId = grade as GradeId;
  const dayNumber = parseInt(dayStr);
  const course = courses[gradeId];
  const partNumber = getPartForDay(gradeId, dayNumber);
  const part = course?.parts.find(p => p.partNumber === partNumber);

  const { isLoaded, getDayStatus, completeDay, addXP } = useProgress();
  const { isBookmarked, toggleBookmark } = useBookmarks();
  const [activeTab, setActiveTab] = useState<TabId>('lecture');
  const [dayContent, setDayContent] = useState<DayContent | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [answeredCount, setAnsweredCount] = useState(0);
  const [summaryText, setSummaryText] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);
  const [testModeActive, setTestModeActive] = useState(false);

  // Load day content dynamically + inject video mappings
  useEffect(() => {
    async function loadContent() {
      try {
        const mod = await import(`@/data/${gradeId}/days/day${String(dayNumber).padStart(2, '0')}`);
        const content: DayContent = mod.default || mod.dayContent;

        // 중앙 매핑에서 이 Day에 해당하는 YouTube 영상 가져오기
        const videos = getVideosForDay(gradeId, dayNumber);

        let enrichedLectures: LectureMapping[];

        if (videos.length > 0) {
          // YouTube 매핑이 있으면 매핑 데이터로 lectures 구성
          enrichedLectures = videos.map((v, i) => ({
            lectureNumber: i + 1,
            youtubeVideoId: v.youtubeVideoId,
            title: v.title,
            description: v.description,
            ebsLectureUrl: EBS_COURSE_URL,
          }));
        } else if (content.lectures && content.lectures.length > 0) {
          // 기존 lectures가 있으면 EBS URL만 추가
          enrichedLectures = content.lectures.map(l => ({
            ...l,
            ebsLectureUrl: l.ebsLectureUrl || EBS_COURSE_URL,
          }));
        } else {
          // 둘 다 없으면 EBS 링크만 제공
          enrichedLectures = [{
            lectureNumber: 0,
            youtubeVideoId: '',
            title: `Day ${dayNumber} - ${content.title}`,
            description: 'EBS 정승제의 50일 수학 풀강의',
            ebsLectureUrl: EBS_COURSE_URL,
          }];
        }

        setDayContent({ ...content, lectures: enrichedLectures });
      } catch {
        // No content file yet - use placeholder
        setDayContent(null);
      }
    }
    loadContent();
  }, [gradeId, dayNumber]);

  if (!course) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">존재하지 않는 코스입니다.</p>
      </div>
    );
  }

  const dayRecord = isLoaded ? getDayStatus(gradeId, dayNumber) : { status: 'available' as const };
  const totalProblems = dayContent?.problems.length || 0;

  const fireConfetti = useCallback(() => {
    // 코스별 색상 파레트
    const palettes: Record<GradeId, string[]> = {
      foundation: ['#F97316', '#FB923C', '#FCD34D'],
      grade1:     ['#3B82F6', '#06B6D4', '#93C5FD'],
      grade2:     ['#8B5CF6', '#7C3AED', '#C4B5FD'],
      'bc-g67':   ['#0EA5E9', '#38BDF8', '#7DD3FC'],
      'bc-g8':    ['#F43F5E', '#FB7185', '#FECDD3'],
      'bc-g9':    ['#F59E0B', '#FCD34D', '#FDE68A'],
      grade3:     ['#10B981', '#34D399', '#6EE7B7'],
    };
    const colors = palettes[gradeId] || ['#8B5CF6', '#EC4899', '#F59E0B'];

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors,
      ticks: 50,
    });
    setTimeout(() => {
      confetti({
        particleCount: 40,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.65 },
        colors,
        ticks: 40,
      });
      confetti({
        particleCount: 40,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.65 },
        colors,
        ticks: 40,
      });
    }, 200);
  }, [gradeId]);

  const handleComplete = () => {
    if (isCompleted) return;
    setIsCompleted(true);
    completeDay(gradeId, dayNumber, totalProblems > 0 ? Math.round((correctCount / totalProblems) * 100) : undefined);
    fireConfetti();
    // 개념들을 복습 스케줄러에 자동 등록 (1일 후 재복습)
    if (dayContent?.concepts && dayContent.concepts.length > 0) {
      scheduleConceptsForReview({
        sourceId: `${gradeId}/day/${dayNumber}`,
        sourceLabel: `${course?.title ?? gradeId} · Day ${dayNumber}`,
        concepts: dayContent.concepts.map((c) => ({
          id: c.id,
          title: c.title,
          content: c.content,
        })),
        problemIds: dayContent.problems.map((p) => p.id),
      });
    }
  };

  const handleCorrect = () => {
    setCorrectCount(prev => prev + 1);
    setAnsweredCount(prev => prev + 1);
    addXP(gradeId, 10);
  };

  const handleWrong = () => {
    setAnsweredCount(prev => prev + 1);
  };

  return (
    <ProblemAttemptsProvider
      source={{
        id: `${gradeId}/day/${dayNumber}`,
        label: `${course?.title ?? gradeId} · Day ${dayNumber}${dayContent?.title ? ` - ${dayContent.title}` : ''}`,
      }}
    >
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-white/10">
        <div className="max-w-3xl mx-auto px-4 py-3">
          <div className="flex items-center gap-3">
            <Link href={`/${gradeId}`} className="text-muted-foreground hover:text-foreground transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </Link>
            <div className="flex-1">
              <h1 className="text-base font-bold text-foreground">
                Day {dayNumber}:{' '}
                {dayContent?.title ? (
                  <MathRenderer content={dayContent.title} inline />
                ) : (
                  part?.title || '학습'
                )}
              </h1>
              <p className="text-xs text-muted-foreground">
                PART {partNumber}: {part?.title}
              </p>
            </div>
            {/* 북마크 버튼 */}
            <button
              onClick={() =>
                toggleBookmark(
                  gradeId,
                  dayNumber,
                  dayContent?.title || part?.title || `Day ${dayNumber}`
                )
              }
              className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all hover:bg-white/10 ${
                isBookmarked(gradeId, dayNumber)
                  ? 'text-amber-400'
                  : 'text-muted-foreground'
              }`}
              title={isBookmarked(gradeId, dayNumber) ? '북마크 제거' : '북마크 추가'}
              aria-label={isBookmarked(gradeId, dayNumber) ? '북마크 제거' : '북마크 추가'}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill={isBookmarked(gradeId, dayNumber) ? 'currentColor' : 'none'}
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </button>
            {/* 프린트 버튼 */}
            <Link
              href={`/print/${gradeId}/${dayNumber}`}
              className="w-9 h-9 rounded-xl flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-white/10 transition-all"
              title="프린트용 보기"
              aria-label="프린트용 보기"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 6 2 18 2 18 9" />
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                <rect x="6" y="14" width="12" height="8" />
              </svg>
            </Link>
            {dayRecord.status === 'completed' && (
              <span className="text-xs px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-400 font-medium">
                완료
              </span>
            )}
          </div>

          {/* Progress bar */}
          <div className="mt-2 h-1 bg-muted rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full bg-gradient-to-r ${gradeGradients[gradeId]} transition-all duration-500`}
              style={{
                width: `${activeTab === 'lecture' ? 33 : activeTab === 'practice' ? 66 : 100}%`
              }}
            />
          </div>
        </div>
      </header>

      {/* Tab Navigation */}
      <div className="sticky top-[76px] z-40 backdrop-blur-xl bg-background/80 border-b border-white/5">
        <div className="max-w-3xl mx-auto px-4 flex gap-1 py-2">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-all flex items-center justify-center gap-1.5
                ${activeTab === tab.id
                  ? 'bg-white/10 text-foreground'
                  : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
                }
              `}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-4 py-6">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Lecture Tab */}
          {activeTab === 'lecture' && (
            <div className="space-y-6">
              {dayContent?.lectures && dayContent.lectures.length > 0 ? (
                dayContent.lectures.map((lecture, i) => (
                  <YouTubePlayer
                    key={i}
                    lecture={lecture}
                    ebsLectures={getEbsLecturesForDay(gradeId, dayNumber)}
                  />
                ))
              ) : (
                <div className="rounded-xl bg-muted/20 border border-white/5 p-8 text-center">
                  <div className="text-4xl mb-3">📚</div>
                  <p className="text-muted-foreground text-sm">
                    이 Day는 개념 노트로 학습합니다
                  </p>
                </div>
              )}

              {/* Concept Notes */}
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                  📌 핵심 정리
                </h3>
                <ConceptNote concepts={dayContent?.concepts || []} />
              </div>
            </div>
          )}

          {/* Practice Tab */}
          {activeTab === 'practice' && (
            <div className="space-y-4">
              {/* 단원평가 버튼 — isTest Day 또는 문제가 있는 모든 Day */}
              {dayContent?.problems && dayContent.problems.length > 0 && (
                <div className="flex items-center justify-between p-3 rounded-xl border border-amber-500/20 bg-amber-500/5">
                  <div>
                    <div className="text-sm font-medium text-foreground flex items-center gap-1.5">
                      <span>📝</span>
                      {dayContent.isTest ? '단원평가 Day' : '시험 모드로 도전'}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      힌트 없이 풀고 종료 후 채점
                    </div>
                  </div>
                  <button
                    onClick={() => setTestModeActive(true)}
                    className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-white text-xs font-semibold transition-colors"
                  >
                    시험 모드
                  </button>
                </div>
              )}

              {/* Score Header */}
              {answeredCount > 0 && (
                <div className="flex items-center justify-between p-3 rounded-xl bg-muted/20 border border-white/5">
                  <span className="text-sm text-muted-foreground">진행</span>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-emerald-400">{correctCount}개 정답</span>
                    <span className="text-sm text-muted-foreground">
                      {answeredCount}/{totalProblems}
                    </span>
                  </div>
                </div>
              )}

              {dayContent?.problems && dayContent.problems.length > 0 ? (
                dayContent.problems.map((problem, i) => (
                  <Problem
                    key={problem.id}
                    problem={problem}
                    index={i}
                    onCorrect={handleCorrect}
                    onWrong={handleWrong}
                    sectionLabel={dayContent?.title ? `Day ${dayNumber} - ${dayContent.title}` : undefined}
                  />
                ))
              ) : (
                <div className="rounded-xl bg-muted/20 border border-white/5 p-8 text-center">
                  <div className="text-4xl mb-3">✏️</div>
                  <p className="text-muted-foreground text-sm">
                    연습 문제가 준비 중입니다
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Summary Tab */}
          {activeTab === 'summary' && (
            <div className="space-y-6">
              {/* Real-life Example */}
              {dayContent?.realLifeExample && (
                <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-5">
                  <h3 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                    🌍 실생활 연결
                  </h3>
                  <div className="text-sm text-foreground/80 leading-relaxed">
                    <MathRenderer content={dayContent.realLifeExample} />
                  </div>
                </div>
              )}

              {/* 3-line Summary */}
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                  ✍️ 오늘 배운 것 정리
                </h3>
                <SummaryEditor
                  value={summaryText}
                  onChange={setSummaryText}
                  placeholder="오늘 배운 핵심 내용을 3줄로 정리해보세요. 수식은 위 버튼으로 넣거나 $x^2$ 처럼 달러 기호로 감싸세요."
                />
              </div>

              {/* Score Summary */}
              {totalProblems > 0 && answeredCount > 0 && (
                <div className="rounded-xl border border-white/10 bg-card p-5">
                  <h3 className="text-sm font-semibold text-foreground mb-3">오늘의 성적</h3>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-foreground">{correctCount}</div>
                      <div className="text-xs text-muted-foreground">정답</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground">{totalProblems - correctCount}</div>
                      <div className="text-xs text-muted-foreground">오답</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-emerald-400">
                        {Math.round((correctCount / totalProblems) * 100)}%
                      </div>
                      <div className="text-xs text-muted-foreground">정답률</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Complete Button */}
              {!isCompleted && dayRecord.status !== 'completed' ? (
                <button
                  onClick={handleComplete}
                  className={`w-full py-4 rounded-xl text-white font-medium text-sm bg-gradient-to-r ${gradeGradients[gradeId]} hover:opacity-90 transition-opacity`}
                >
                  학습 완료 (+30 XP)
                </button>
              ) : (
                <div className="text-center py-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                  <div className="text-2xl mb-2">🎉</div>
                  <p className="text-sm font-medium text-emerald-400">Day {dayNumber} 학습 완료!</p>
                  <Link
                    href={`/${gradeId}`}
                    className="text-xs text-muted-foreground hover:text-foreground mt-2 inline-block"
                  >
                    대시보드로 돌아가기 →
                  </Link>
                </div>
              )}
            </div>
          )}
        </motion.div>
      </main>

      {/* 단원평가 시험 모드 */}
      {testModeActive && dayContent?.problems && dayContent.problems.length > 0 && (
        <div className="fixed inset-0 z-[60] overflow-y-auto">
          <UnitTestMode
            problems={dayContent.problems}
            dayLabel={dayContent.title ? `Day ${dayNumber} - ${dayContent.title}` : `Day ${dayNumber}`}
            sourceId={`${gradeId}/day/${dayNumber}`}
            sourceLabel={`${course?.title ?? gradeId} · Day ${dayNumber}`}
            timeLimitMinutes={dayContent.isTest ? 30 : 20}
            onExit={() => setTestModeActive(false)}
            onComplete={(score, total) => {
              addXP(gradeId, score * 5);
            }}
          />
        </div>
      )}

      {/* 플로팅 샘 버튼 (우측 하단) — Day 페이지 어디서든 접근 가능 */}
      <FloatingAITutor
        dayTitle={dayContent?.title}
        dayConcepts={dayContent?.concepts?.map(c => ({
          title: c.title,
          content: c.content,
        }))}
        gradeLabel={course?.title}
        languageMode={course?.primaryLanguage === 'en' ? 'en' : 'ko'}
      />
    </div>
    </ProblemAttemptsProvider>
  );
}
