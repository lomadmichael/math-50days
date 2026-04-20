import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 15,
  part: 3,
  title: '일차식(Linear Expression)의 계산 (곱셈/나눗셈)',
  subtitle: '일차식(Linear Expression)에 수를 곱하고 나누는 방법과 분배법칙(Distributive Property)을 배워보자.',
  lectures: [],
  concepts: [
    {
      id: 'g1d15-c1',
      title: '일차식(Linear Expression) × 수',
      content: '일차식에 수를 곱할 때는 **분배법칙(Distributive Property)**을 사용합니다.\n\n$$a(b + c) = ab + ac$$\n\n예:\n$$3(2x + 5) = 3 \\times 2x + 3 \\times 5 = 6x + 15$$\n$$-2(4x - 3) = -2 \\times 4x + (-2) \\times (-3) = -8x + 6$$\n\n**부호에 주의!** 음수를 곱하면 각 항의 부호가 바뀝니다.',
      type: 'formula',
    },
    {
      id: 'g1d15-c2',
      title: '일차식(Linear Expression) ÷ 수',
      content: '일차식을 수로 나눌 때는 **각 항을 나누기**하면 됩니다.\n\n$$(6x + 9) \\div 3 = \\frac{6x + 9}{3} = \\frac{6x}{3} + \\frac{9}{3} = 2x + 3$$\n\n$$(8x - 12) \\div (-4) = \\frac{8x}{-4} + \\frac{-12}{-4} = -2x + 3$$\n\n나눗셈은 역수의 곱셈으로 바꿀 수도 있습니다:\n$$(6x + 9) \\div 3 = (6x + 9) \\times \\frac{1}{3}$$',
      type: 'formula',
    },
    {
      id: 'g1d15-c3',
      title: '복잡한 일차식(Linear Expression)의 계산',
      content: '여러 연산이 섞인 일차식 계산 순서:\n\n**1단계**: 분배법칙(Distributive Property)으로 괄호 풀기\n**2단계**: 동류항(Like Terms)끼리 모으기\n**3단계**: 계수(Coefficient)끼리 계산\n\n예: $2(3x - 1) - 3(x + 4)$\n$= 6x - 2 - 3x - 12$ (괄호 풀기)\n$= (6x - 3x) + (-2 - 12)$ (동류항 모으기)\n$= 3x - 14$ (계산)',
      type: 'formula',
    },
  ],
  problems: [
    {
      id: 'g1d15-p1',
      type: 'short-answer',
      difficulty: 'basic',
      question: '$4(3x - 2)$를 계산하시오. (예: 12x-8)',
      answer: '12x-8',
      explanation: '$4(3x - 2)$\n$= 4 \\times 3x + 4 \\times (-2)$\n$= 12x - 8$',
    },
    {
      id: 'g1d15-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$-3(2x - 5)$의 결과는?',
      options: ['$-6x - 15$', '$-6x + 15$', '$6x + 15$', '$6x - 15$'],
      answer: '$-6x + 15$',
      explanation: '$-3(2x - 5)$\n$= (-3) \\times 2x + (-3) \\times (-5)$\n$= -6x + 15$\n\n음수를 곱하면 각 항의 부호가 바뀝니다!',
    },
    {
      id: 'g1d15-p3',
      type: 'short-answer',
      difficulty: 'basic',
      question: '$(10x - 15) \\div 5$를 계산하시오. (예: 2x-3)',
      answer: '2x-3',
      explanation: '$(10x - 15) \\div 5$\n$= \\frac{10x}{5} - \\frac{15}{5}$\n$= 2x - 3$',
    },
    {
      id: 'g1d15-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$5(2x + 1) - 3(4x - 3)$을 간단히 하면?',
      options: ['$-2x + 14$', '$-2x - 4$', '$22x + 14$', '$-2x + 8$'],
      answer: '$-2x + 14$',
      explanation: '$5(2x + 1) - 3(4x - 3)$\n$= 10x + 5 - 12x + 9$\n$= (10x - 12x) + (5 + 9)$\n$= -2x + 14$',
    },
    {
      id: 'g1d15-p5',
      type: 'short-answer',
      difficulty: 'challenge',
      question: '$\\frac{3(2x - 4)}{6} - \\frac{2(x + 3)}{4}$를 계산하시오. (예: x/2-1)',
      answer: 'x/2-7/2',
      explanation: '$\\frac{3(2x - 4)}{6} - \\frac{2(x + 3)}{4}$\n\n$= \\frac{6x - 12}{6} - \\frac{2x + 6}{4}$\n\n$= (x - 2) - (\\frac{x}{2} + \\frac{3}{2})$\n\n$= x - 2 - \\frac{x}{2} - \\frac{3}{2}$\n\n$= \\frac{x}{2} + (-2 - \\frac{3}{2})$\n\n$= \\frac{x}{2} - \\frac{7}{2}$',
    },
  ],
  realLifeExample: '분배법칙(Distributive Property)은 암산의 비법이기도 합니다! 예를 들어 $12 \\times 98$을 계산할 때, $12 \\times (100 - 2) = 1200 - 24 = 1176$처럼 쉽게 계산할 수 있어요. 할인 계산에서도 "정가의 30% 할인"은 정가 $\\times 0.7$, 즉 분배법칙의 활용이랍니다!',
};

export default dayContent;
