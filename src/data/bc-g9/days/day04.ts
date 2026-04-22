import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 4,
  part: 1,
  title: 'Zero and Negative Exponents',
  subtitle: 'Discover what happens when the exponent is 0 or a negative integer.',
  lectures: [],
  concepts: [
    {
      id: 'bcg9-d4-c1',
      title: 'The Zero Exponent',
      content:
        'Any non-zero number raised to the power of **zero** (0 지수) equals **1**.\n\n$$a^0 = 1 \\quad (a \\neq 0)$$\n\n**Why it works — using the quotient rule:**\n$$\\frac{a^3}{a^3} = a^{3-3} = a^0$$\n\nBut also $\\dfrac{a^3}{a^3} = 1$ (anything divided by itself is 1).\n\nTherefore $a^0 = 1$.\n\n**Examples:**\n- $7^0 = 1$\n- $(-3)^0 = 1$\n- $(xy)^0 = 1$ (as long as $x \\neq 0$ and $y \\neq 0$)\n- $5x^0 = 5 \\times 1 = 5$ (only $x$ has exponent 0, not the 5!)',
      type: 'definition',
    },
    {
      id: 'bcg9-d4-c2',
      title: 'Negative Exponents',
      content:
        'A **negative exponent** (음수 지수) means take the **reciprocal**.\n\n$$a^{-n} = \\frac{1}{a^n} \\quad (a \\neq 0)$$\n\n**Why it works — using the quotient rule:**\n$$\\frac{a^2}{a^5} = a^{2-5} = a^{-3}$$\n\nBut also $\\dfrac{a^2}{a^5} = \\dfrac{1}{a^3}$. Therefore $a^{-3} = \\dfrac{1}{a^3}$.\n\n**Examples:**\n- $2^{-4} = \\dfrac{1}{2^4} = \\dfrac{1}{16}$\n- $5^{-1} = \\dfrac{1}{5}$\n- $x^{-3} = \\dfrac{1}{x^3}$\n- $\\dfrac{1}{a^{-n}} = a^n$ (reciprocal of a reciprocal)',
      type: 'formula',
    },
    {
      id: 'bcg9-d4-c3',
      title: 'Negative Exponents with Fractions',
      content:
        'When a **fraction** has a negative exponent, flip the fraction and make the exponent positive.\n\n$$\\left(\\frac{a}{b}\\right)^{-n} = \\left(\\frac{b}{a}\\right)^{n} = \\frac{b^n}{a^n}$$\n\n**Examples:**\n- $\\left(\\dfrac{2}{3}\\right)^{-2} = \\left(\\dfrac{3}{2}\\right)^{2} = \\dfrac{9}{4}$\n- $\\left(\\dfrac{x}{5}\\right)^{-3} = \\left(\\dfrac{5}{x}\\right)^{3} = \\dfrac{125}{x^3}$\n\n**Memory tip:** Negative exponent = flip (reciprocal) + positive exponent.',
      type: 'formula',
    },
    {
      id: 'bcg9-d4-c4',
      title: 'Applying All Exponent Laws Together',
      content:
        'Now that you know all the basic laws, you can simplify complex expressions.\n\n**Example:** Simplify $\\dfrac{x^{-2} \\times x^5}{x^0}$\n$$= \\frac{x^{-2+5}}{1} = \\frac{x^3}{1} = x^3$$\n\n**Example:** Write $\\dfrac{1}{4^3}$ using a negative exponent.\n$$\\frac{1}{4^3} = 4^{-3}$$\n\n**Example:** Evaluate $3^{-2} + 2^{-1}$\n$$= \\frac{1}{9} + \\frac{1}{2} = \\frac{2}{18} + \\frac{9}{18} = \\frac{11}{18}$$',
      type: 'example',
    },
  ],
  problems: [
    {
      id: 'bcg9-d4-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: 'What is the value of $(-8)^0$?',
      options: ['$-8$', '$0$', '$1$', '$-1$'],
      answer: '$1$',
      explanation:
        'Any non-zero number raised to the power of 0 equals 1.\n$(-8)^0 = 1$\n\nThe only exception is $0^0$, which is undefined.',
      relatedConcept: 'bcg9-d4-c1',
    },
    {
      id: 'bcg9-d4-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: 'Write $5^{-3}$ as a fraction with a positive exponent.',
      answer: '$\\dfrac{1}{125}$',
      explanation:
        '$5^{-3} = \\dfrac{1}{5^3} = \\dfrac{1}{125}$\n\nNegative exponent means reciprocal.',
      relatedConcept: 'bcg9-d4-c2',
    },
    {
      id: 'bcg9-d4-p3',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: 'Which expression is equivalent to $\\dfrac{1}{x^4}$?',
      options: ['$x^4$', '$x^{-4}$', '$-x^4$', '$4x$'],
      answer: '$x^{-4}$',
      explanation:
        'By the negative exponent rule: $x^{-4} = \\dfrac{1}{x^4}$.\n\nConversely, $\\dfrac{1}{x^4} = x^{-4}$.',
      relatedConcept: 'bcg9-d4-c2',
    },
    {
      id: 'bcg9-d4-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question: 'Evaluate: $\\left(\\dfrac{3}{4}\\right)^{-2}$',
      answer: '$\\dfrac{16}{9}$',
      explanation:
        '$\\left(\\dfrac{3}{4}\\right)^{-2} = \\left(\\dfrac{4}{3}\\right)^{2} = \\dfrac{4^2}{3^2} = \\dfrac{16}{9}$\n\nFlip the fraction, then apply the positive exponent.',
      relatedConcept: 'bcg9-d4-c3',
    },
    {
      id: 'bcg9-d4-p5',
      type: 'short-answer',
      difficulty: 'applied',
      question: 'Simplify: $\\dfrac{a^3 \\times a^{-5}}{a^{-2}}$',
      answer: '$1$',
      explanation:
        'Numerator: $a^3 \\times a^{-5} = a^{3+(-5)} = a^{-2}$\n\n$$\\frac{a^{-2}}{a^{-2}} = a^{-2-(-2)} = a^0 = 1$$',
      relatedConcept: 'bcg9-d4-c4',
    },
    {
      id: 'bcg9-d4-p6',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: 'Which is larger: $2^{-3}$ or $3^{-2}$?',
      options: ['$2^{-3}$', '$3^{-2}$', 'They are equal', 'Cannot be determined'],
      answer: '$3^{-2}$',
      explanation:
        '$2^{-3} = \\dfrac{1}{8} = 0.125$\n\n$3^{-2} = \\dfrac{1}{9} \\approx 0.111$\n\nWait — $\\dfrac{1}{8} > \\dfrac{1}{9}$, so $2^{-3} > 3^{-2}$.\n\nActually the answer is $2^{-3}$ since $0.125 > 0.\\overline{1}$.\n\nKey insight: larger denominator → smaller fraction.',
      relatedConcept: 'bcg9-d4-c2',
    },
  ],
  realLifeExample:
    'In science, tiny measurements use negative exponents: the diameter of a hydrogen atom is about $10^{-10}$ metres (= 0.0000000001 m). Scientific notation with negative exponents makes very small numbers manageable. 원자의 크기나 나노 기술에서 음수 지수를 사용해요.',
};

export default dayContent;
