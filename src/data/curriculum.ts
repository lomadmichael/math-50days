import { CourseInfo, GradeId } from '@/lib/types';

export const courses: Record<GradeId, CourseInfo> = {
  foundation: {
    id: 'foundation',
    title: '기초탄탄',
    subtitle: '50일 수학',
    description: '초등 기초부터 중학 수학 진입까지. 분수, 약수와 배수, 비와 비율, 도형 기초를 탄탄하게!',
    color: 'orange',
    colorHex: '#F97316',
    icon: '🧱',
    totalDays: 50,
    parts: [
      { partNumber: 1, title: '수 감각', startDay: 1, endDay: 5 },
      { partNumber: 2, title: '분수', startDay: 6, endDay: 11 },
      { partNumber: 3, title: '소수(小數)', startDay: 12, endDay: 15 },
      { partNumber: 4, title: '약수와 배수', startDay: 16, endDay: 21 },
      { partNumber: 5, title: '비와 비율', startDay: 22, endDay: 26 },
      { partNumber: 6, title: '도형 기초', startDay: 27, endDay: 31 },
      { partNumber: 7, title: '측정과 단위', startDay: 32, endDay: 35 },
      { partNumber: 8, title: '규칙과 식', startDay: 36, endDay: 39 },
      { partNumber: 9, title: '자료와 가능성', startDay: 40, endDay: 43 },
      { partNumber: 10, title: '중학 연결', startDay: 44, endDay: 50 },
    ],
  },
  grade1: {
    id: 'grade1',
    title: '중1',
    subtitle: '50일 수학',
    description: '소인수분해부터 통계까지. 중학교 1학년 수학의 모든 핵심 개념을 50일에 완성!',
    color: 'blue',
    colorHex: '#3B82F6',
    icon: '📘',
    totalDays: 50,
    parts: [
      { partNumber: 1, title: '수와 연산', startDay: 1, endDay: 11 },
      { partNumber: 2, title: '문자와 식', startDay: 12, endDay: 20 },
      { partNumber: 3, title: '좌표와 그래프', startDay: 21, endDay: 26 },
      { partNumber: 4, title: '기본도형', startDay: 27, endDay: 32 },
      { partNumber: 5, title: '평면도형', startDay: 33, endDay: 37 },
      { partNumber: 6, title: '입체도형', startDay: 38, endDay: 43 },
      { partNumber: 7, title: '자료의 정리', startDay: 44, endDay: 50 },
    ],
  },
  grade2: {
    id: 'grade2',
    title: '중2',
    subtitle: '50일 수학',
    description: '순환소수, 연립방정식, 일차함수, 도형의 닮음까지. 중2 수학의 산을 넘자!',
    color: 'purple',
    colorHex: '#8B5CF6',
    icon: '📙',
    totalDays: 50,
    parts: [
      { partNumber: 1, title: '수와 식', startDay: 1, endDay: 9 },
      { partNumber: 2, title: '부등식', startDay: 10, endDay: 16 },
      { partNumber: 3, title: '연립방정식', startDay: 17, endDay: 22 },
      { partNumber: 4, title: '일차함수', startDay: 23, endDay: 29 },
      { partNumber: 5, title: '도형의 성질', startDay: 30, endDay: 34 },
      { partNumber: 6, title: '도형의 닮음', startDay: 35, endDay: 41 },
      { partNumber: 7, title: '확률', startDay: 42, endDay: 50 },
    ],
  },
  grade3: {
    id: 'grade3',
    title: '중3',
    subtitle: '50일 수학',
    description: '제곱근, 이차방정식, 이차함수, 삼각비, 원의 성질. 고등 수학의 문을 열자!',
    color: 'emerald',
    colorHex: '#10B981',
    icon: '📗',
    totalDays: 50,
    parts: [
      { partNumber: 1, title: '제곱근과 실수', startDay: 1, endDay: 7 },
      { partNumber: 2, title: '다항식', startDay: 8, endDay: 14 },
      { partNumber: 3, title: '이차방정식', startDay: 15, endDay: 22 },
      { partNumber: 4, title: '이차함수', startDay: 23, endDay: 30 },
      { partNumber: 5, title: '삼각비', startDay: 31, endDay: 38 },
      { partNumber: 6, title: '원의 성질', startDay: 39, endDay: 46 },
      { partNumber: 7, title: '통계', startDay: 47, endDay: 50 },
    ],
  },
};

export const courseOrder: GradeId[] = ['foundation', 'grade1', 'grade2', 'grade3'];

// 미니테스트 Day 번호들 (각 PART 마지막)
export function getTestDays(gradeId: GradeId): number[] {
  const course = courses[gradeId];
  return course.parts.map(p => p.endDay);
}

// Day가 속한 PART 찾기
export function getPartForDay(gradeId: GradeId, dayNumber: number): number {
  const course = courses[gradeId];
  const part = course.parts.find(p => dayNumber >= p.startDay && dayNumber <= p.endDay);
  return part?.partNumber ?? 1;
}
