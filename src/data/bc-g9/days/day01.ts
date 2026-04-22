import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 1,
  part: 1,
  title: 'Powers and Exponents — Review',
  subtitle: 'Understand base, exponent, and how repeated multiplication is written as a power.',
  lectures: [],
  concepts: [
    {
      id: 'bcg9-d1-c1',
      title: 'What is a Power?',
      content:
        'A **power** (거듭제곱) is a shorthand for repeated multiplication.\n\n$$a^n = \\underbrace{a \\times a \\times \\cdots \\times a}_{n \\text{ times}}$$\n\n- $a$ is called the **base** (밑)\n- $n$ is called the **exponent** (지수)\n\n**Examples:**\n- $2^5 = 2 \\times 2 \\times 2 \\times 2 \\times 2 = 32$\n- $3^4 = 3 \\times 3 \\times 3 \\times 3 = 81$\n- $(-2)^3 = (-2) \\times (-2) \\times (-2) = -8$\n\nThe expression $2^5$ is read as **"two to the fifth power"** or **"two to the power of five."**',
      type: 'definition',
    },
    {
      id: 'bcg9-d1-c2',
      title: 'Base and Exponent Rules',
      content:
        'Pay attention to what the **base** actually is:\n\n| Expression | Base | Exponent | Value |\n|---|---|---|---|\n| $3^4$ | $3$ | $4$ | $81$ |\n| $(-3)^4$ | $-3$ | $4$ | $81$ |\n| $-3^4$ | $3$ | $4$ | $-81$ |\n\n**Key Rule:** $(-3)^4$ means $(-3) \\times (-3) \\times (-3) \\times (-3) = +81$ (even exponent → positive)\n\n$-3^4$ means $-(3^4) = -81$ (the negative sign is NOT part of the base)\n\n**Odd vs Even Exponent with Negative Base:**\n- $(-a)^{\\text{even}} > 0$ (양수)\n- $(-a)^{\\text{odd}} < 0$ (음수)',
      type: 'formula',
    },
    {
      id: 'bcg9-d1-c3',
      title: 'Evaluating Powers',
      content:
        'To evaluate a power, multiply the base by itself the number of times indicated by the exponent.\n\n**Example 1:** Evaluate $(-4)^3$\n$$(-4)^3 = (-4) \\times (-4) \\times (-4) = 16 \\times (-4) = -64$$\n\n**Example 2:** Evaluate $\\left(\\frac{2}{3}\\right)^2$\n$$\\left(\\frac{2}{3}\\right)^2 = \\frac{2}{3} \\times \\frac{2}{3} = \\frac{4}{9}$$\n\n**Example 3:** Evaluate $0.2^3$\n$$0.2^3 = 0.2 \\times 0.2 \\times 0.2 = 0.04 \\times 0.2 = 0.008$$',
      type: 'example',
    },
    {
      id: 'bcg9-d1-c4',
      title: 'Powers with Base 1, 0, and 10',
      content:
        'Some special cases are very useful to remember:\n\n**Base 1:** $1^n = 1$ for any exponent $n$\n\n**Base 0:** $0^n = 0$ for any positive exponent $n$\n\n**Base 10 (십진법의 기초):**\n$$10^1 = 10, \\quad 10^2 = 100, \\quad 10^3 = 1{,}000, \\quad 10^6 = 1{,}000{,}000$$\n\nThe exponent tells you how many zeros follow the 1. Powers of 10 are the foundation of our **decimal system** (십진법).',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'bcg9-d1-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: 'What is the value of $2^6$?',
      options: ['12', '32', '64', '128'],
      answer: '64',
      explanation:
        '$2^6 = 2 \\times 2 \\times 2 \\times 2 \\times 2 \\times 2 = 64$\n\nStep by step: $2^1=2$, $2^2=4$, $2^3=8$, $2^4=16$, $2^5=32$, $2^6=64$.',
      relatedConcept: 'bcg9-d1-c1',
    },
    {
      id: 'bcg9-d1-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: 'Which expression has a value of $-27$?',
      options: ['$3^3$', '$(-3)^3$', '$-3^2$', '$(-3)^2$'],
      answer: '$(-3)^3$',
      explanation:
        '$(-3)^3 = (-3) \\times (-3) \\times (-3) = 9 \\times (-3) = -27$\n\nOther options:\n- $3^3 = +27$\n- $-3^2 = -(3 \\times 3) = -9$\n- $(-3)^2 = (-3)\\times(-3) = +9$',
      relatedConcept: 'bcg9-d1-c2',
    },
    {
      id: 'bcg9-d1-p3',
      type: 'short-answer',
      difficulty: 'basic',
      question: 'Evaluate $\\left(\\frac{1}{2}\\right)^4$. Write your answer as a fraction.',
      answer: '$\\frac{1}{16}$',
      explanation:
        '$\\left(\\frac{1}{2}\\right)^4 = \\frac{1}{2} \\times \\frac{1}{2} \\times \\frac{1}{2} \\times \\frac{1}{2} = \\frac{1 \\times 1 \\times 1 \\times 1}{2 \\times 2 \\times 2 \\times 2} = \\frac{1}{16}$',
      relatedConcept: 'bcg9-d1-c3',
    },
    {
      id: 'bcg9-d1-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: 'In the expression $(-5)^4$, what is the base and what is the exponent?',
      options: [
        'Base: $5$, Exponent: $4$',
        'Base: $-5$, Exponent: $4$',
        'Base: $-5$, Exponent: $-4$',
        'Base: $4$, Exponent: $-5$',
      ],
      answer: 'Base: $-5$, Exponent: $4$',
      explanation:
        'The parentheses include the negative sign, so the base is $-5$. The exponent is $4$.\n$(-5)^4 = (-5)\\times(-5)\\times(-5)\\times(-5) = 625$\n\nIf it were $-5^4$ (no parentheses), the base would be $5$ and the answer would be $-625$.',
      relatedConcept: 'bcg9-d1-c2',
    },
    {
      id: 'bcg9-d1-p5',
      type: 'short-answer',
      difficulty: 'applied',
      question:
        'A bacteria culture doubles every hour. If there are 3 bacteria at the start, how many are there after 5 hours? Write your answer using a power, then evaluate.',
      answer: '$3 \\times 2^5 = 96$',
      explanation:
        'Starting with 3 bacteria, doubling each hour:\n$$\\text{After } n \\text{ hours} = 3 \\times 2^n$$\nAfter 5 hours: $3 \\times 2^5 = 3 \\times 32 = 96$ bacteria.',
      relatedConcept: 'bcg9-d1-c1',
    },
    {
      id: 'bcg9-d1-p6',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: 'Which of the following is equal to $(-1)^{99}$?',
      options: ['$-1$', '$1$', '$99$', '$-99$'],
      answer: '$-1$',
      explanation:
        'For a base of $-1$:\n- Even exponent → $(-1)^{\\text{even}} = +1$\n- Odd exponent → $(-1)^{\\text{odd}} = -1$\n\nSince 99 is odd, $(-1)^{99} = -1$.\n\nThis is a useful pattern: $(-1)^n$ alternates between $-1$ and $+1$.',
      relatedConcept: 'bcg9-d1-c2',
    },
  ],
  realLifeExample:
    'Computer storage is measured in powers of 2: 1 KB = $2^{10}$ bytes, 1 MB = $2^{20}$ bytes, 1 GB = $2^{30}$ bytes. 컴퓨터 저장 용량의 단위는 모두 2의 거듭제곱으로 표현돼요!',
};

export default dayContent;
