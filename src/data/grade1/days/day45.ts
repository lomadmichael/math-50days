import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 45,
  part: 8,
  title: '도수분포표와 히스토그램',
  subtitle: '자료를 구간별로 정리하고 그래프로 나타내 보자!',
  lectures: [],
  concepts: [
    {
      id: 'g1d45-c1',
      title: '도수분포표',
      content: '**도수분포표**는 자료를 일정한 구간(**계급**)으로 나누고, 각 구간에 속하는 자료의 수(**도수**)를 정리한 표입니다.\n\n주요 용어:\n• **계급**: 자료를 나눈 구간 (예: 50이상~60미만)\n• **계급의 크기**: 각 구간의 너비 (예: $60 - 50 = 10$)\n• **계급값**: 각 계급의 가운데 값 (예: $\\frac{50 + 60}{2} = 55$)\n• **도수**: 각 계급에 속하는 자료의 수\n\n도수의 합 = 전체 자료의 수',
      type: 'definition',
    },
    {
      id: 'g1d45-c2',
      title: '히스토그램',
      content: '**히스토그램**은 도수분포표를 막대그래프로 나타낸 것입니다.\n\n특징:\n• 가로축: 계급 (구간), 세로축: 도수\n• 막대 사이에 **빈틈이 없음** (일반 막대그래프와 다른 점!)\n• 막대의 넓이 = 계급의 크기 $\\times$ 도수\n• 모든 막대의 넓이의 합 = 계급의 크기 $\\times$ 도수의 합\n\n히스토그램을 보면 자료의 분포 모양을 한눈에 파악할 수 있습니다.',
      type: 'concept',
    },
  ],
  problems: [
    {
      id: 'g1d45-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '도수분포표에서 계급이 "40이상~50미만"일 때, 이 계급의 계급값은?',
      options: ['40', '45', '50', '90'],
      answer: '45',
      explanation: '계급값은 계급의 양 끝 값의 평균입니다.\n\n$\\frac{40 + 50}{2} = 45$',
    },
    {
      id: 'g1d45-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: '도수분포표의 계급이 10이상~20미만, 20이상~30미만, 30이상~40미만일 때, 계급의 크기는?',
      answer: '10',
      explanation: '계급의 크기 = 계급의 위 끝 값 - 아래 끝 값\n\n$20 - 10 = 10$\n\n모든 계급의 크기는 동일하게 $10$입니다.',
    },
    {
      id: 'g1d45-p3',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '다음 도수분포표에서 60점 이상인 학생 수는?\n\n| 계급(점) | 도수(명) |\n|----------|----------|\n| 40~50 | 3 |\n| 50~60 | 7 |\n| 60~70 | 12 |\n| 70~80 | 8 |\n| 합계 | 30 |',
      options: ['8명', '12명', '20명', '27명'],
      answer: '20명',
      explanation: '60점 이상인 학생:\n60~70: 12명\n70~80: 8명\n\n$12 + 8 = 20$명',
    },
    {
      id: 'g1d45-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question: '히스토그램에서 계급의 크기가 5이고 도수의 합이 40일 때, 모든 막대의 넓이의 합은?',
      answer: '200',
      explanation: '모든 막대의 넓이의 합 = 계급의 크기 $\\times$ 도수의 합\n\n$= 5 \\times 40 = 200$',
    },
    {
      id: 'g1d45-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '도수분포표의 계급의 크기가 10이고 전체 학생이 50명이다. 70이상~80미만인 계급의 도수가 15명일 때, 히스토그램에서 이 계급의 막대 넓이가 전체 넓이에서 차지하는 비율은?',
      options: ['15%', '25%', '30%', '35%'],
      answer: '30%',
      explanation: '이 계급의 막대 넓이 = $10 \\times 15 = 150$\n전체 넓이 = $10 \\times 50 = 500$\n\n비율 = $\\frac{150}{500} \\times 100 = 30\\%$\n\n(또는 간단히 $\\frac{15}{50} \\times 100 = 30\\%$)',
    },
  ],
  realLifeExample: '히스토그램은 뉴스에서 가장 자주 보는 통계 그래프 중 하나입니다. 학생들의 성적 분포, 도시별 인구 분포, 하루 평균 기온의 분포 등을 한눈에 보여줄 때 히스토그램이 사용됩니다!',
};

export default dayContent;
