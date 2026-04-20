// ===== 코스 타입 =====
export type GradeId = 'foundation' | 'grade1' | 'grade2' | 'grade3';

export interface CourseInfo {
  id: GradeId;
  title: string;
  subtitle: string;
  description: string;
  color: string;        // Tailwind color class
  colorHex: string;     // hex for gradients
  icon: string;         // emoji
  totalDays: number;
  parts: PartInfo[];
}

export interface PartInfo {
  partNumber: number;
  title: string;
  startDay: number;
  endDay: number;
}

// ===== 69강 강의 메타데이터 =====
export interface Lecture {
  lectureNumber: number;
  title: string;
  youtubeVideoId: string;
  category: string;          // 유형01~유형07
  tags: string[];
}

// ===== Day 콘텐츠 =====
export interface DayContent {
  dayNumber: number;
  part: number;
  title: string;
  subtitle: string;
  isTest?: boolean;          // 미니테스트 Day
  lectures: LectureMapping[];
  concepts: ConceptBlock[];
  problems: Problem[];
  realLifeExample?: string;
  warmupQuestions?: Problem[];
}

export interface LectureMapping {
  lectureNumber: number;
  youtubeVideoId: string;
  title: string;
  startTime?: number;        // 초 단위
  endTime?: number;          // 초 단위
  description: string;
  ebsLectureUrl?: string;    // EBS 풀강의 외부 링크
}

export interface ConceptBlock {
  id: string;
  title: string;
  content: string;           // KaTeX 수식 포함 가능 ($...$)
  type: 'definition' | 'formula' | 'example' | 'tip' | 'warning';
}

export interface Problem {
  id: string;
  type: 'multiple-choice' | 'short-answer';
  difficulty: 'basic' | 'applied' | 'challenge';
  question: string;
  options?: string[];
  answer: string;
  explanation: string;
  relatedConcept?: string;
}

// ===== 학생 진도 (localStorage) =====
export interface StudentProfile {
  name: string;
  createdAt: string;
  courses: Partial<Record<GradeId, CourseProgress>>;
}

export interface CourseProgress {
  level: number;
  xp: number;
  badges: string[];
  streak: number;
  lastStudyDate: string;
  days: Record<number, DayRecord>;
}

export interface DayRecord {
  status: 'locked' | 'available' | 'in-progress' | 'completed';
  warmupScore?: number;
  practiceScore?: number;
  completedAt?: string;
  timeSpent?: number;
  summary?: string;
  videoWatched?: boolean;
}

// ===== 이번 주 학습 대비 (학교 메일 기반) =====
export interface WeeklySchedule {
  weekOf: string;              // ISO date (e.g., "2026-04-21") - 월요일 기준
  sourceEmail: {
    from: string;              // e.g., "Mutte (담임)"
    receivedAt: string;        // ISO date
    rawExcerpt?: string;       // 원문 요약/발췌 (선택)
  };
  thisWeek: {
    covered: string[];         // 이번 주에 학교에서 배운 주제 (영어 용어)
  };
  nextWeek: {
    quiz?: {
      date: string;            // ISO date (시험일)
      topics: string[];        // 시험 범위
    };
    newTopics: string[];       // 다음 주 새 주제
    notes?: string[];          // 기타 공지 (조기하교 등)
  };
  prep: WeeklyPrepItem[];      // 대비 섹션 (주제별)
}

export interface WeeklyPrepItem {
  id: string;
  kind: 'quiz-review' | 'new-topic';
  englishTerm: string;         // 학교에서 쓰는 영어 용어 (e.g., "Finding Slope")
  koreanTerm: string;          // 한국어 교과서 용어 (e.g., "기울기")
  summary: string;             // 한 줄 요약
  concepts: ConceptBlock[];    // 개념 카드 (기존 타입 재사용)
  videos?: LectureMapping[];   // 추천 영상 (기존 타입 재사용)
  problems: Problem[];         // 연습 문제 (기존 타입 재사용)
}

// ===== 게이미피케이션 =====
export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  condition: string;
  course?: GradeId;
}

export interface XPEvent {
  type: 'problem' | 'test' | 'day-complete' | 'streak';
  amount: number;
}
