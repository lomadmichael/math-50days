'use client';

import { use, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { courses, getPartForDay } from '@/data/curriculum';
import { getVideosForDay, EBS_COURSE_URL } from '@/data/videoMappings';
import { getEbsLecturesForDay } from '@/data/ebsLectures';
import { useProgress } from '@/hooks/useProgress';
import { GradeId, DayContent, LectureMapping } from '@/lib/types';
import YouTubePlayer from '@/components/YouTubePlayer';
import ConceptNote from '@/components/ConceptNote';
import Problem from '@/components/Problem';
import FloatingAITutor from '@/components/FloatingAITutor';
import MathRenderer from '@/components/MathRenderer';
import { ProblemAttemptsProvider } from '@/hooks/useProblemAttempts';

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
  const [activeTab, setActiveTab] = useState<TabId>('lecture');
  const [dayContent, setDayContent] = useState<DayContent | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [answeredCount, setAnsweredCount] = useState(0);
  const [summaryText, setSummaryText] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);

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

  const handleComplete = () => {
    if (isCompleted) return;
    setIsCompleted(true);
    completeDay(gradeId, dayNumber, totalProblems > 0 ? Math.round((correctCount / totalProblems) * 100) : undefined);
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
    <ProblemAttemptsProvider>
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
                <textarea
                  value={summaryText}
                  onChange={(e) => setSummaryText(e.target.value)}
                  placeholder="오늘 배운 핵심 내용을 3줄로 정리해보세요..."
                  className="w-full h-32 px-4 py-3 rounded-xl bg-card border border-white/10 text-foreground text-sm resize-none outline-none focus:border-violet-500/50 transition-colors placeholder:text-muted-foreground/50"
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

      {/* 플로팅 샘 버튼 (우측 하단) — Day 페이지 어디서든 접근 가능 */}
      <FloatingAITutor
        dayTitle={dayContent?.title}
        dayConcepts={dayContent?.concepts?.map(c => ({
          title: c.title,
          content: c.content,
        }))}
        gradeLabel={course?.title}
      />
    </div>
    </ProblemAttemptsProvider>
  );
}
