import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 5,
  part: 1,
  title: '단항식의 계산',
  subtitle: '단항식의 곱셈과 나눗셈을 지수법칙으로 깔끔하게!',
  lectures: [],
  concepts: [
    {
      id: 'g2d5-c1',
      title: '단항식이란?',
      content: '**단항식**은 수와 문자의 곱으로만 이루어진 식입니다.\n\n단항식: $3x$, $-2x^2y$, $\\\\frac{1}{2}ab^3$, $5$ (상수도 단항식)\n\n단항식의 **계수**: 문자 앞의 수\n단항식의 **차수**: 문자의 지수의 합\n\n$-2x^2y$의 계수: $-2$, 차수: $2 + 1 = 3$',
      type: 'definition',
    },
    {
      id: 'g2d5-c2',
      title: '단항식의 곱셈',
      content: '단항식의 곱셈은 **계수는 계수끼리**, **문자는 문자끼리** 곱합니다.\n\n$3x^2 \\\\times 4x^3 = (3 \\\\times 4) \\\\times (x^2 \\\\times x^3) = 12x^5$\n\n$(-2a^2b) \\\\times 5ab^3 = (-2 \\\\times 5) \\\\times (a^2 \\\\times a) \\\\times (b \\\\times b^3) = -10a^3b^4$',
      type: 'formula',
    },
    {
      id: 'g2d5-c3',
      title: '단항식의 나눗셈',
      content: '단항식의 나눗셈은 **계수는 계수끼리**, **문자는 문자끼리** 나눕니다.\n\n$12x^5 \\\\div 4x^2 = \\\\frac{12}{4} \\\\times x^{5-2} = 3x^3$\n\n$-10a^3b^4 \\\\div 2a^2b = \\\\frac{-10}{2} \\\\times a^{3-2} \\\\times b^{4-1} = -5ab^3$',
      type: 'formula',
    },
    {
      id: 'g2d5-c4',
      title: '곱셈과 나눗셈이 섞인 경우',
      content: '나눗셈을 분수의 곱셈으로 바꾸어 계산하면 편리합니다.\n\n$6x^3y \\\\times 2xy^2 \\\\div 3x^2y = \\\\frac{6x^3y \\\\times 2xy^2}{3x^2y}$\n$= \\\\frac{12x^4y^3}{3x^2y} = 4x^2y^2$',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'g2d5-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$5x^3 \\\\times 2x^4$를 계산하면?',
      options: ['$7x^7$', '$10x^7$', '$10x^{12}$', '$7x^{12}$'],
      answer: '$10x^7$',
      explanation: '계수끼리: $5 \\\\times 2 = 10$\n문자끼리: $x^3 \\\\times x^4 = x^7$\n\n$5x^3 \\\\times 2x^4 = 10x^7$',
    },
    {
      id: 'g2d5-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: '$18x^6 \\\\div 6x^2$의 결과를 구하시오.',
      answer: '3x^4',
      explanation: '$18x^6 \\\\div 6x^2 = \\\\frac{18}{6} \\\\times x^{6-2} = 3x^4$',
    },
    {
      id: 'g2d5-p3',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$(-3a^2b) \\\\times 4ab^2$를 계산하면?',
      options: ['$-12a^3b^3$', '$-12a^2b^2$', '$12a^3b^3$', '$-7a^3b^3$'],
      answer: '$-12a^3b^3$',
      explanation: '계수: $(-3) \\\\times 4 = -12$\n$a$: $a^2 \\\\times a = a^3$\n$b$: $b \\\\times b^2 = b^3$\n\n$(-3a^2b) \\\\times 4ab^2 = -12a^3b^3$',
    },
    {
      id: 'g2d5-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$(-2x^2y)^3$을 계산하면?',
      options: ['$-6x^6y^3$', '$-8x^6y^3$', '$8x^6y^3$', '$-8x^5y^3$'],
      answer: '$-8x^6y^3$',
      explanation: '$(-2x^2y)^3 = (-2)^3 \\\\times (x^2)^3 \\\\times y^3 = -8x^6y^3$\n\n각각에 지수 3을 적용합니다.',
    },
    {
      id: 'g2d5-p5',
      type: 'short-answer',
      difficulty: 'applied',
      question: '$8a^4b^3 \\\\div (-2ab)^2$를 계산하시오.',
      answer: '2a^2b',
      explanation: '$(-2ab)^2 = 4a^2b^2$\n\n$8a^4b^3 \\\\div 4a^2b^2 = \\\\frac{8}{4} \\\\times a^{4-2} \\\\times b^{3-2} = 2a^2b$',
    },
    {
      id: 'g2d5-p6',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '$(3x^2y)^2 \\\\times (-2xy^3) \\\\div 6x^3y$를 계산하면?',
      options: ['$-3x^2y^4$', '$3x^2y^4$', '$-3x^4y^4$', '$-6x^2y^4$'],
      answer: '$-3x^2y^4$',
      explanation: '$(3x^2y)^2 = 9x^4y^2$\n\n$9x^4y^2 \\\\times (-2xy^3) = -18x^5y^5$\n\n$-18x^5y^5 \\\\div 6x^3y = -3x^2y^4$',
    },
  ],
  realLifeExample: '직육면체의 부피는 가로 $\\\\times$ 세로 $\\\\times$ 높이입니다. 한 변이 $2x$인 정육면체의 부피는 $(2x)^3 = 8x^3$이 됩니다. 단항식 계산은 도형의 넓이나 부피를 구할 때 자주 사용됩니다!',
};

export default dayContent;
