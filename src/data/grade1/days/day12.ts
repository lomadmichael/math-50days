import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 12,
  part: 3,
  title: '왜 문자를 쓸까? — 문자식(Algebraic Expression)의 시작',
  subtitle: '수학에서 문자를 사용하는 이유를 알아보고, 문자식(Algebraic Expression)으로 수량을 나타내는 방법을 배워보자.',
  lectures: [],
  concepts: [
    {
      id: 'g1d12-c1',
      title: '문자의 사용 — 문자식(Algebraic Expression)',
      content: '수학에서 **문자**를 사용하면 다양한 상황을 **하나의 식**으로 간결하게 나타낼 수 있습니다.\n\n예: "어떤 수에 3을 더하면 10이다"\n→ $x + 3 = 10$\n\n문자를 쓰면 **일반적인 관계**를 표현할 수 있어 훨씬 편리합니다! 이런 식을 **문자식(Algebraic Expression)**이라 합니다.',
      type: 'definition',
    },
    {
      id: 'g1d12-c2',
      title: '문자를 사용한 식의 표현',
      content: '**곱셈 기호의 생략**\n• $a \\times b = ab$ (문자끼리)\n• $3 \\times x = 3x$ (수 × 문자 → 수를 앞에)\n• $x \\times x = x^2$\n• $1 \\times x = x$ (계수 1 생략)\n• $(-1) \\times x = -x$ (계수 -1 생략)\n\n**나눗셈은 분수로**\n• $a \\div b = \\frac{a}{b}$\n• $x \\div 3 = \\frac{x}{3}$',
      type: 'formula',
    },
    {
      id: 'g1d12-c3',
      title: '항(Term), 계수(Coefficient), 상수항(Constant Term)',
      content: '식 $3x + 5$에서:\n• **항(Term)**: 식을 이루는 각각의 부분 → $3x$와 $5$\n• **계수(Coefficient)**: 문자에 곱해진 수 → $3x$에서 **3**이 $x$의 계수(Coefficient)\n• **상수항(Constant Term)**: 문자를 포함하지 않는 항 → **5**\n\n예: $-2a + 4b - 7$에서\n→ $a$의 계수: $-2$, $b$의 계수: $4$, 상수항: $-7$',
      type: 'definition',
    },
  ],
  problems: [
    {
      id: 'g1d12-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$a \\times 5 + b \\div 2$를 올바르게 나타낸 것은?',
      options: ['$a5 + b2$', '$5a + \\frac{b}{2}$', '$5a + 2b$', '$a5 + \\frac{2}{b}$'],
      answer: '$5a + \\frac{b}{2}$',
      explanation: '• $a \\times 5 = 5a$ (수를 문자 앞에)\n• $b \\div 2 = \\frac{b}{2}$ (나눗셈은 분수로)\n\n따라서 $5a + \\frac{b}{2}$',
    },
    {
      id: 'g1d12-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: '식 $-4x + 7y - 3$에서 $x$의 계수를 구하시오.',
      answer: '-4',
      explanation: '$-4x$에서 $x$에 곱해진 수는 $-4$입니다.\n\n부호를 포함하여 $x$의 계수는 **$-4$**입니다.',
    },
    {
      id: 'g1d12-p3',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '한 개에 $x$원인 사과 3개와 한 개에 $y$원인 배 2개의 전체 가격을 식으로 나타내면?',
      options: ['$3 + x + 2 + y$', '$5xy$', '$3x + 2y$', '$\\frac{3}{x} + \\frac{2}{y}$'],
      answer: '$3x + 2y$',
      explanation: '사과 3개: $x \\times 3 = 3x$(원)\n배 2개: $y \\times 2 = 2y$(원)\n\n전체 가격: $3x + 2y$(원)',
    },
    {
      id: 'g1d12-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question: '가로의 길이가 $a$ cm, 세로의 길이가 $b$ cm인 직사각형의 둘레의 길이를 식으로 나타내시오. (예: 2a+2b)',
      answer: '2a+2b',
      explanation: '직사각형의 둘레 = (가로 + 세로) × 2\n$= (a + b) \\times 2$\n$= 2a + 2b$ (cm)\n\n또는 $2(a + b)$로 나타낼 수도 있습니다.',
    },
    {
      id: 'g1d12-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '식 $\\frac{2x - 3y + 6}{4}$에서 $x$의 계수, $y$의 계수, 상수항을 순서대로 나타내면?',
      options: ['$2, -3, 6$', '$\\frac{1}{2}, -\\frac{3}{4}, \\frac{3}{2}$', '$\\frac{2}{4}, \\frac{3}{4}, \\frac{6}{4}$', '$2, 3, 6$'],
      answer: '$\\frac{1}{2}, -\\frac{3}{4}, \\frac{3}{2}$',
      explanation: '$\\frac{2x - 3y + 6}{4} = \\frac{2x}{4} - \\frac{3y}{4} + \\frac{6}{4}$\n$= \\frac{1}{2}x - \\frac{3}{4}y + \\frac{3}{2}$\n\n$x$의 계수: $\\frac{1}{2}$\n$y$의 계수: $-\\frac{3}{4}$\n상수항: $\\frac{3}{2}$',
    },
  ],
  realLifeExample: '문자식(Algebraic Expression)을 사용하면 복잡한 관계를 간단히 표현할 수 있어요! 예를 들어, 택시 기본요금이 4800원이고 추가 요금이 거리 $x$ km마다 1000원이라면, 총 요금은 $4800 + 1000x$(원)으로 나타낼 수 있습니다. 거리만 알면 바로 요금을 계산할 수 있죠!',
};

export default dayContent;
