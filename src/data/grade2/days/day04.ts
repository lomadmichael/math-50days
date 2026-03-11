import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 4,
  part: 1,
  title: '지수법칙 (2)',
  subtitle: '같은 밑의 나눗셈, 지수가 0이거나 음수인 경우를 알아보자!',
  lectures: [],
  concepts: [
    {
      id: 'g2d4-c1',
      title: '지수법칙 ③ 같은 밑의 나눗셈',
      content: '같은 밑의 거듭제곱의 나눗셈은 **지수를 뺍니다**.\n\n$$a^m \\\\div a^n = a^{m-n} \\\\quad (a \\\\neq 0,\\\\; m > n)$$\n\n예:\n- $5^7 \\\\div 5^3 = 5^{7-3} = 5^4 = 625$\n- $x^8 \\\\div x^2 = x^{8-2} = x^6$',
      type: 'formula',
    },
    {
      id: 'g2d4-c2',
      title: '지수가 0인 경우',
      content: '$a^0 = 1$ (단, $a \\\\neq 0$)\n\n**왜 그럴까?**\n$a^3 \\\\div a^3 = a^{3-3} = a^0$\n$a^3 \\\\div a^3 = 1$ (같은 수끼리 나누면 1)\n따라서 $a^0 = 1$\n\n예: $5^0 = 1$, $(-2)^0 = 1$, $100^0 = 1$',
      type: 'definition',
    },
    {
      id: 'g2d4-c3',
      title: '지수법칙 ④ 곱의 거듭제곱',
      content: '곱의 거듭제곱은 각각에 지수를 적용합니다.\n\n$$(ab)^n = a^n \\\\times b^n$$\n$$\\\\left(\\\\frac{a}{b}\\\\right)^n = \\\\frac{a^n}{b^n} \\\\quad (b \\\\neq 0)$$\n\n예:\n- $(2x)^3 = 2^3 \\\\times x^3 = 8x^3$\n- $\\\\left(\\\\frac{3}{5}\\\\right)^2 = \\\\frac{9}{25}$',
      type: 'formula',
    },
    {
      id: 'g2d4-c4',
      title: '음수 밑의 거듭제곱 주의!',
      content: '$(-a)^n$에서 지수가 **짝수**이면 양수, **홀수**이면 음수입니다.\n\n- $(-2)^4 = 16$ (짝수 지수 → 양수)\n- $(-2)^3 = -8$ (홀수 지수 → 음수)\n\n$-2^4 = -(2^4) = -16$과 $(-2)^4 = 16$은 다릅니다!',
      type: 'warning',
    },
  ],
  problems: [
    {
      id: 'g2d4-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$7^5 \\\\div 7^2$를 계산하면?',
      options: ['$7^3$', '$7^7$', '$7^{10}$', '$1^3$'],
      answer: '$7^3$',
      explanation: '같은 밑 7의 나눗셈이므로 지수를 뺍니다.\n$7^5 \\\\div 7^2 = 7^{5-2} = 7^3 = 343$',
    },
    {
      id: 'g2d4-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: '$(-5)^0$의 값을 구하시오.',
      answer: '1',
      explanation: '0이 아닌 모든 수의 0제곱은 1입니다.\n$(-5)^0 = 1$',
    },
    {
      id: 'g2d4-p3',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$(3a)^2$를 전개하면?',
      options: ['$3a^2$', '$6a^2$', '$9a^2$', '$9a$'],
      answer: '$9a^2$',
      explanation: '$(3a)^2 = 3^2 \\\\times a^2 = 9a^2$\n\n곱의 거듭제곱은 각각에 지수를 적용합니다.',
    },
    {
      id: 'g2d4-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$\\\\frac{6^8}{6^5 \\\\times 6^2}$를 계산하면?',
      options: ['$6$', '$6^2$', '$6^3$', '$6^{15}$'],
      answer: '$6$',
      explanation: '분모: $6^5 \\\\times 6^2 = 6^7$\n\n$\\\\frac{6^8}{6^7} = 6^{8-7} = 6^1 = 6$',
    },
    {
      id: 'g2d4-p5',
      type: 'short-answer',
      difficulty: 'applied',
      question: '$(-2)^3 \\\\times (-2)^2 \\\\div (-2)^4$의 값을 구하시오.',
      answer: '-2',
      explanation: '$(-2)^3 \\\\times (-2)^2 \\\\div (-2)^4$\n$= (-2)^{3+2} \\\\div (-2)^4$\n$= (-2)^5 \\\\div (-2)^4$\n$= (-2)^{5-4}$\n$= (-2)^1 = -2$',
    },
    {
      id: 'g2d4-p6',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '$2^{10} \\\\times 5^{10}$의 값은?',
      options: ['$10^{10}$', '$10^{20}$', '$7^{10}$', '$10^{100}$'],
      answer: '$10^{10}$',
      explanation: '$(ab)^n = a^n \\\\times b^n$의 역으로,\n$2^{10} \\\\times 5^{10} = (2 \\\\times 5)^{10} = 10^{10}$\n\n$10^{10} = 10000000000$ (100억)',
    },
  ],
  realLifeExample: '과학에서 매우 큰 수나 작은 수를 나타낼 때 지수법칙을 사용합니다. 지구에서 태양까지의 거리는 약 $1.5 \\\\times 10^8$ km이고, 수소 원자의 크기는 약 $1.2 \\\\times 10^{-10}$ m입니다.',
};

export default dayContent;
