import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 32,
  part: 5,
  title: '미니테스트 + 복습',
  subtitle: 'PART 5 기본도형 총정리! 점(Point)·선(Line)·면(Plane)부터 삼각형(Triangle)의 합동(Congruence)까지 확인해 보자.',
  lectures: [],
  concepts: [
    {
      id: 'g1d32-c1',
      title: 'PART 5 핵심 요약: 기본도형과 위치관계(Positional Relationship)',
      content: '• **직선(Line)·반직선(Ray)·선분(Line Segment)**: 양쪽 무한 / 한쪽 무한 / 두 점 사이\n• **맞꼭지각(Vertical Angles)**: 크기가 같다\n• **평행(Parallel)**: $l \\parallel m$ → 만나지 않는 두 직선\n• **수직(Perpendicular)**: $l \\perp m$ → 만나서 $90°$\n• **동위각(Corresponding Angles)**: 평행선에서 같은 위치의 각 → 크기 같다\n• **엇각(Alternate Angles)**: 평행선에서 엇갈린 위치의 각 → 크기 같다\n• **동측내각**: 합이 $180°$',
      type: 'formula',
    },
    {
      id: 'g1d32-c2',
      title: 'PART 5 핵심 요약: 작도(Construction)와 합동(Congruence)',
      content: '• **작도(Construction) 도구**: 눈금 없는 자(Ruler) + 컴퍼스(Compass)\n• **삼각형(Triangle) 결정 조건**: SSS(Side-Side-Side), SAS(Side-Angle-Side), ASA(Angle-Side-Angle) (AAA는 ✗)\n• **삼각형(Triangle) 성립 조건**: 가장 긴 변(Side) < 나머지 두 변의 합\n• **합동(Congruence) 기호**: $\\triangle ABC \\equiv \\triangle DEF$ (꼭짓점(Vertex) 순서 주의!)\n• **합동 조건(Congruence Conditions)**: SSS(Side-Side-Side), SAS(Side-Angle-Side), ASA(Angle-Side-Angle)\n• 합동(Congruence)이면 대응변(Side)의 길이, 대응각(Angle)의 크기가 각각 같다',
      type: 'formula',
    },
  ],
  problems: [
    {
      id: 'g1d32-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$130°$는 어떤 종류의 각인가?',
      options: ['예각', '직각', '둔각', '평각'],
      answer: '둔각',
      explanation: '• 예각: $0° < \\angle < 90°$\n• 직각: $\\angle = 90°$\n• 둔각: $90° < \\angle < 180°$\n• 평각: $\\angle = 180°$\n\n$90° < 130° < 180°$이므로 **둔각**입니다.',
    },
    {
      id: 'g1d32-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: '두 직선이 한 점에서 만나서 생긴 맞꼭지각 중 하나가 $72°$일 때, 이웃한 각의 크기를 구하시오. (단위: °)',
      answer: '108',
      explanation: '이웃한 두 각의 합은 $180°$이므로:\n$180° - 72° = 108°$',
    },
    {
      id: 'g1d32-p3',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '다음 중 세 변의 길이로 삼각형을 만들 수 있는 것은?',
      options: ['2, 3, 7', '4, 4, 8', '5, 6, 10', '3, 3, 7'],
      answer: '5, 6, 10',
      explanation: '가장 긴 변 < 나머지 두 변의 합:\n• 2, 3, 7 → $2 + 3 = 5 < 7$ ✗\n• 4, 4, 8 → $4 + 4 = 8 = 8$ (같으면 불가) ✗\n• 5, 6, 10 → $5 + 6 = 11 > 10$ ✓\n• 3, 3, 7 → $3 + 3 = 6 < 7$ ✗',
    },
    {
      id: 'g1d32-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question: '$l \\parallel m$이고 횡단선과 직선 $l$이 이루는 각이 $(3x + 15)°$, 엇각이 $(5x - 25)°$일 때, $x$의 값을 구하시오.',
      answer: '20',
      explanation: '평행선에서 엇각의 크기는 같으므로:\n$3x + 15 = 5x - 25$\n$15 + 25 = 5x - 3x$\n$40 = 2x$\n$x = 20$\n\n검산: $3(20) + 15 = 75°$, $5(20) - 25 = 75°$ ✓',
    },
    {
      id: 'g1d32-p5',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$\\triangle ABC \\equiv \\triangle DEF$에서 $\\angle A = 60°$, $\\angle B = 80°$일 때, $\\angle F$의 크기는?',
      options: ['$40°$', '$60°$', '$80°$', '$100°$'],
      answer: '$40°$',
      explanation: '삼각형의 내각의 합 = $180°$\n$\\angle C = 180° - 60° - 80° = 40°$\n\n$\\triangle ABC \\equiv \\triangle DEF$에서\nC ↔ F이므로\n$\\angle F = \\angle C = 40°$',
    },
    {
      id: 'g1d32-p6',
      type: 'short-answer',
      difficulty: 'challenge',
      question: '세 변의 길이가 $a$, $a + 2$, $12$인 삼각형이 만들어질 때, 자연수 $a$의 최솟값을 구하시오.',
      answer: '6',
      explanation: '삼각형 성립 조건: 가장 긴 변 < 나머지 두 변의 합\n\n$a + 2 \\geq a$이므로, 가장 긴 변은 $12$ 또는 $a + 2$\n\n① $12$가 가장 긴 변일 때: $12 < a + (a + 2) = 2a + 2$\n   $10 < 2a$ → $a > 5$ → $a \\geq 6$\n\n② $a + 2$가 가장 긴 변일 때 ($a + 2 \\geq 12$, 즉 $a \\geq 10$):\n   $a + 2 < a + 12$ → $2 < 12$ (항상 성립)\n\n따라서 $a$의 최솟값은 **6**\n\n검산: $a = 6$ → 6, 8, 12 → $6 + 8 = 14 > 12$ ✓',
    },
    {
      id: 'g1d32-p7',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '$l \\parallel m$일 때, 두 평행선 사이의 꺾인 선에서 한 각이 $40°$이고 다른 각이 $55°$이면, 꺾인 점의 각의 크기는?',
      options: ['$85°$', '$90°$', '$95°$', '$105°$'],
      answer: '$95°$',
      explanation: '꺾인 점을 지나는 평행선 보조선을 긋습니다.\n\n보조선과 $l$이 평행 → 엇각으로 윗부분 = $40°$\n보조선과 $m$이 평행 → 엇각으로 아랫부분 = $55°$\n\n꺾인 점의 각 = $40° + 55° = 95°$',
    },
  ],
  realLifeExample: 'PART 5 총정리! 기본도형의 성질은 건축, 디자인, 공학의 기초입니다. GPS 위치 측정에 삼각측량법이, 건물 구조에 삼각형(Triangle)의 안정성이, 도로 설계에 평행선(Parallel Lines)과 각(Angle)도가 활용됩니다!',
};

export default dayContent;
