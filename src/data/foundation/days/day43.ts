import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 43,
  part: 9,
  title: '미니테스트 + 복습',
  subtitle: 'PART 9 총정리 — 자료와 가능성',
  isTest: true,
  lectures: [],
  concepts: [
    {
      id: 'f9d43-c1',
      title: '자료와 가능성 핵심 정리',
      content:
        '• 평균 = $\\\\frac{합계}{개수}$\\n• 중앙값: 크기순 나열 후 가운데 값\\n• 최빈값: 가장 자주 나타나는 값\\n• 확률 = $\\\\frac{원하는 경우의 수}{전체 경우의 수}$\\n• 경우의 수 곱의 법칙: 동시에 일어날 때 곱함',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'fd43-p1',
      type: 'short-answer',
      difficulty: 'basic',
      question: '70, 80, 90의 평균은?',
      answer: '80',
      explanation:
        '$\\\\frac{70 + 80 + 90}{3} = \\\\frac{240}{3} = 80$',
    },
    {
      id: 'fd43-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '주사위를 던져서 5 이상이 나올 확률은?',
      options: [
        '$\\\\frac{1}{6}$',
        '$\\\\frac{2}{6}$',
        '$\\\\frac{1}{3}$',
        '$\\\\frac{5}{6}$',
      ],
      answer: '$\\\\frac{1}{3}$',
      explanation:
        '5 이상: 5, 6 → 2가지, 확률 = $\\\\frac{2}{6} = \\\\frac{1}{3}$',
    },
    {
      id: 'fd43-p3',
      type: 'short-answer',
      difficulty: 'applied',
      question:
        '2, 4, 4, 6, 8에서 중앙값은?',
      answer: '4',
      explanation:
        '크기순으로 나열하면 2, 4, 4, 6, 8 → 가운데(3번째) 값은 4',
    },
    {
      id: 'fd43-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question:
        '원그래프에서 "독서" 항목이 전체의 20%일 때, 중심각은 몇 도인가요?',
      options: ['$20°$', '$36°$', '$72°$', '$90°$'],
      answer: '$72°$',
      explanation:
        '$360° \\\\times 0.2 = 72°$',
    },
    {
      id: 'fd43-p5',
      type: 'short-answer',
      difficulty: 'challenge',
      question:
        '음식 3종류와 음료 4종류가 있습니다. 세트 메뉴(음식 1 + 음료 1)를 고르는 경우의 수는?',
      answer: '12',
      explanation:
        '곱의 법칙: $3 \\\\times 4 = 12$가지',
    },
    {
      id: 'fd43-p6',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question:
        '4명의 시험 점수가 75, 80, 85, 90입니다. 한 명이 추가되어 평균이 84점이 되려면 새 학생의 점수는?',
      options: ['84점', '86점', '88점', '90점'],
      answer: '90점',
      explanation:
        '기존 합 = 330, 목표 합 = $84 \\\\times 5 = 420$, 새 점수 = $420 - 330 = 90$점',
    },
  ],
  realLifeExample:
    '일기예보에서 "비 올 확률 70%"라고 하면 경우의 수를 기반으로 계산한 것이에요. 우산을 챙길지 말지 확률을 보고 합리적으로 결정할 수 있습니다!',
};

export default dayContent;
