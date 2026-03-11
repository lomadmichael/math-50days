import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 47,
  part: 8,
  title: '상대도수와 대푯값',
  subtitle: '비율로 비교하고, 자료를 대표하는 값을 찾아보자!',
  lectures: [],
  concepts: [
    {
      id: 'g1d47-c1',
      title: '상대도수',
      content: '**상대도수**는 각 계급의 도수가 전체에서 차지하는 비율입니다.\n\n$$\\text{상대도수} = \\frac{\\text{그 계급의 도수}}{\\text{도수의 합(전체 자료 수)}}$$\n\n특징:\n• $0 \\leq$ 상대도수 $\\leq 1$\n• 모든 계급의 상대도수의 합 $= 1$\n• **전체 자료 수가 다른 두 집단**을 비교할 때 유용!\n\n예: 전체 40명 중 A계급 도수가 8명이면\n상대도수 $= \\frac{8}{40} = 0.2$ (또는 20%)',
      type: 'formula',
    },
    {
      id: 'g1d47-c2',
      title: '대푯값: 평균, 중앙값, 최빈값',
      content: '자료를 대표하는 하나의 값을 **대푯값**이라 합니다.\n\n• **평균**: 모든 자료의 합 $\\div$ 자료의 수\n$$\\text{평균} = \\frac{x_1 + x_2 + \\cdots + x_n}{n}$$\n\n• **중앙값**: 자료를 크기순으로 나열했을 때 **가운데** 값\n  - 자료 수가 홀수: 가운데 1개\n  - 자료 수가 짝수: 가운데 2개의 평균\n\n• **최빈값**: 가장 **자주 나타나는** 값 (2개 이상일 수도 있음)\n\n극단적인 값이 있으면 평균보다 **중앙값**이 더 적절한 대푯값!',
      type: 'formula',
    },
  ],
  problems: [
    {
      id: 'g1d47-p1',
      type: 'short-answer',
      difficulty: 'basic',
      question: '전체 학생 수가 50명이고, 어떤 계급의 도수가 10명일 때, 이 계급의 상대도수는?',
      answer: '0.2',
      explanation: '상대도수 $= \\frac{10}{50} = 0.2$',
    },
    {
      id: 'g1d47-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: '자료 3, 5, 7, 8, 12의 중앙값은?',
      answer: '7',
      explanation: '자료를 크기순으로 나열: 3, 5, **7**, 8, 12\n\n자료 수가 5개(홀수)이므로 가운데인 3번째 값이 중앙값입니다.\n\n중앙값 = $7$',
    },
    {
      id: 'g1d47-p3',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '자료 2, 4, 4, 6, 8, 8, 8, 10에서 최빈값과 중앙값을 차례로 구하면?',
      options: ['8, 6', '4, 7', '8, 7', '4, 6'],
      answer: '8, 7',
      explanation: '최빈값: 8이 3번으로 가장 많이 나타남 → **8**\n\n중앙값: 자료 수가 8개(짝수)이므로 4번째와 5번째의 평균\n$\\frac{6 + 8}{2} = 7$ → **7**',
    },
    {
      id: 'g1d47-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question: 'A반(30명)에서 80점 이상의 상대도수가 0.4이고, B반(50명)에서 80점 이상의 상대도수가 0.3일 때, 두 반을 합쳐 80점 이상인 학생은 모두 몇 명인가?',
      answer: '27',
      explanation: 'A반 80점 이상: $30 \\times 0.4 = 12$명\nB반 80점 이상: $50 \\times 0.3 = 15$명\n\n합계: $12 + 15 = 27$명',
    },
    {
      id: 'g1d47-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '5명의 월급이 200만, 200만, 250만, 300만, 3000만 원일 때, 이 자료의 대푯값으로 가장 적절한 것은?',
      options: [
        '평균 (790만 원)',
        '중앙값 (250만 원)',
        '최빈값 (200만 원)',
        '최댓값 (3000만 원)',
      ],
      answer: '중앙값 (250만 원)',
      explanation: '평균 = $\\frac{200+200+250+300+3000}{5} = \\frac{3950}{5} = 790$만 원\n\n3000만 원이라는 극단적인 값 때문에 평균이 크게 올라갔습니다.\n대부분의 사람 월급은 200~300만 원대이므로, 평균 790만 원은 자료를 대표하기 어렵습니다.\n\n이런 경우 **중앙값(250만 원)**이 가장 적절한 대푯값입니다.',
    },
  ],
  realLifeExample: '뉴스에서 "평균 연봉"이 높아 보이는 이유는 소수의 고소득자 때문입니다. 실제 대부분의 사람들의 소득을 보려면 중앙값이 더 정확해요. 국가에서도 소득 통계를 발표할 때 평균과 중앙값을 함께 제시합니다!',
};

export default dayContent;
