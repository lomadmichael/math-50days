import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 15,
  part: 3,
  title: '미니테스트 + 복습',
  subtitle: 'PART 3 소수 총정리! 소수의 뜻, 연산, 분수와의 관계를 모두 확인해요.',
  isTest: true,
  lectures: [],
  concepts: [
    {
      id: 'f3d15-c1',
      title: 'PART 3 핵심 정리',
      content: '**1. 소수의 자릿값:** 소수점 아래 첫째($\\frac{1}{10}$), 둘째($\\frac{1}{100}$), 셋째($\\frac{1}{1000}$) 자리\n\n**2. 소수의 사칙연산:**\n- 덧셈·뺄셈: 소수점 맞추기\n- 곱셈: 소수점 아래 자릿수의 합\n- 나눗셈: 나누는 수를 자연수로 만들기\n\n**3. 분수 ↔ 소수:**\n- 분수 → 소수: 분자 ÷ 분모\n- 소수 → 분수: 분모에 $10$의 거듭제곱, 약분\n- 분모의 소인수가 $2$, $5$뿐이면 유한소수\n\n이 내용이 중학교 **유리수와 순환소수** 단원의 기초입니다!',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'fd15-p1',
      type: 'short-answer',
      difficulty: 'basic',
      question: '$6.3 - 2.75$를 계산하시오.',
      answer: '3.55',
      explanation: '$\\quad 6.30$\n$- 2.75$\n$= 3.55$',
    },
    {
      id: 'fd15-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: '$1.5 \\times 0.4$를 계산하시오.',
      answer: '0.6',
      explanation: '$15 \\times 4 = 60$\n소수점 아래: $1 + 1 = 2$자리\n$0.60 = 0.6$',
    },
    {
      id: 'fd15-p3',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$0.24$를 기약분수로 나타내면?',
      options: ['$\\frac{6}{25}$', '$\\frac{12}{50}$', '$\\frac{24}{100}$', '$\\frac{4}{15}$'],
      answer: '$\\frac{6}{25}$',
      explanation: '$0.24 = \\frac{24}{100}$\n\n$24$와 $100$의 최대공약수: $4$\n\n$\\frac{24}{100} = \\frac{6}{25}$',
    },
    {
      id: 'fd15-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question: '$7.2 \\div 0.08$을 계산하시오.',
      answer: '90',
      explanation: '양쪽에 $100$을 곱합니다.\n$\\frac{7.2}{0.08} = \\frac{720}{8} = 90$',
    },
    {
      id: 'fd15-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '다음 중 $\\frac{5}{12}$를 소수로 나타낸 것은?',
      options: ['$0.41\\overline{6}$', '$0.\\overline{416}$', '$0.4\\overline{16}$', '$0.4\\overline{6}$'],
      answer: '$0.41\\overline{6}$',
      explanation: '$5 \\div 12 = 0.41666...$\n\n$41$까지는 반복되지 않고, $6$이 무한히 반복됩니다.\n\n따라서 $\\frac{5}{12} = 0.41\\overline{6}$',
    },
    {
      id: 'fd15-p6',
      type: 'short-answer',
      difficulty: 'challenge',
      question: '$0.3 + \\frac{1}{4} + 0.15$를 계산하여 소수로 나타내시오.',
      answer: '0.7',
      explanation: '모두 소수로 통일:\n$0.3 + 0.25 + 0.15 = 0.7$\n\n또는 모두 분수로:\n$\\frac{3}{10} + \\frac{1}{4} + \\frac{15}{100} = \\frac{30}{100} + \\frac{25}{100} + \\frac{15}{100} = \\frac{70}{100} = 0.7$',
    },
  ],
  realLifeExample: '마트에서 사과 1.2kg(1200원/kg)과 배 0.8kg(2500원/kg)을 사면? 1.2×1200 + 0.8×2500 = 1440 + 2000 = 3440원! 소수와 분수를 자유롭게 다루면 장보기가 쉬워져요.',
};

export default dayContent;
