import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 12,
  part: 3,
  title: '소수의 뜻과 자릿값',
  subtitle: '소수(小數)는 1보다 작은 부분을 나타내는 또 다른 방법! 유리수의 소수 표현을 배워요.',
  lectures: [],
  concepts: [
    {
      id: 'f3d12-c1',
      title: '소수란?',
      content: '**소수(小數)**는 $1$보다 작은 부분을 **소수점**으로 나타낸 수입니다.\n\n$0.1 = \\frac{1}{10}$ (영 점 일)\n$0.01 = \\frac{1}{100}$ (영 점 영 일)\n$0.001 = \\frac{1}{1000}$ (영 점 영 영 일)\n\n소수점 아래 자릿수:\n- **소수 첫째 자리**: $\\frac{1}{10}$의 자리\n- **소수 둘째 자리**: $\\frac{1}{100}$의 자리\n- **소수 셋째 자리**: $\\frac{1}{1000}$의 자리',
      type: 'definition',
    },
    {
      id: 'f3d12-c2',
      title: '소수의 크기 비교',
      content: '소수의 크기 비교는 **높은 자리부터** 비교합니다.\n\n예: $3.46$과 $3.52$ 비교\n- 일의 자리: $3 = 3$\n- 소수 첫째 자리: $4 < 5$\n- 따라서 $3.46 < 3.52$\n\n**주의:** $0.5 = 0.50 = 0.500$ (뒤에 $0$을 붙여도 같은 값!)',
      type: 'formula',
    },
    {
      id: 'f3d12-c3',
      title: '소수와 분수의 관계 미리보기',
      content: '소수는 분모가 $10$, $100$, $1000$, ... 인 분수입니다.\n\n$0.3 = \\frac{3}{10}$\n$0.25 = \\frac{25}{100} = \\frac{1}{4}$\n$0.125 = \\frac{125}{1000} = \\frac{1}{8}$\n\n이 관계를 이해하면 Day 14에서 배울 **분수↔소수 변환**이 쉬워집니다!',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'fd12-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$2.573$에서 $7$이 나타내는 값은?',
      options: ['$7$', '$0.7$', '$0.07$', '$0.007$'],
      answer: '$0.07$',
      explanation: '$2.573$에서 $7$은 소수 둘째 자리에 있으므로\n$7 \\times 0.01 = 0.07$을 나타냅니다.',
    },
    {
      id: 'fd12-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '다음 중 가장 큰 수는?',
      options: ['$0.45$', '$0.405$', '$0.5$', '$0.449$'],
      answer: '$0.5$',
      explanation: '소수 첫째 자리부터 비교:\n$0.5 = 0.500$, $0.45 = 0.450$, $0.449$, $0.405$\n\n첫째 자리: $5 > 4$이므로 $0.5$가 가장 큽니다.',
    },
    {
      id: 'fd12-p3',
      type: 'short-answer',
      difficulty: 'basic',
      question: '$0.75$를 분수로 나타내시오. (기약분수로)',
      answer: '3/4',
      explanation: '$0.75 = \\frac{75}{100} = \\frac{3}{4}$ ($25$로 약분)',
    },
    {
      id: 'fd12-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question: '$\\frac{3}{8}$을 소수로 나타내시오.',
      answer: '0.375',
      explanation: '$\\frac{3}{8} = 3 \\div 8 = 0.375$\n\n또는: $\\frac{3}{8} = \\frac{3 \\times 125}{8 \\times 125} = \\frac{375}{1000} = 0.375$',
    },
    {
      id: 'fd12-p5',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$0.1$이 $23$개이면 어떤 수인가?',
      options: ['$0.23$', '$2.3$', '$23$', '$0.023$'],
      answer: '$2.3$',
      explanation: '$0.1 \\times 23 = 2.3$\n\n$0.1$이 $10$개면 $1$, $20$개면 $2$, $23$개면 $2.3$',
    },
    {
      id: 'fd12-p6',
      type: 'short-answer',
      difficulty: 'challenge',
      question: '$0.\\overline{A}$가 $\\frac{A}{9}$와 같을 때, $A = 4$이면 $0.\\overline{4}$의 값을 분수로 쓰시오. (기약분수로)',
      answer: '4/9',
      explanation: '$0.\\overline{4} = 0.4444...$\n\n$x = 0.\\overline{4}$로 놓으면\n$10x = 4.\\overline{4}$\n$10x - x = 4$\n$9x = 4$\n$x = \\frac{4}{9}$\n\n이것이 중학교에서 배울 **순환소수**의 기초입니다!',
    },
  ],
  realLifeExample: '달리기 기록이 12.35초와 12.4초라면 누가 더 빠를까요? 12.35 < 12.40이니 12.35초가 더 빠른 기록! 체육 시간에도 소수가 쓰여요.',
};

export default dayContent;
