import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 2,
  part: 1,
  title: 'Laws of Exponents — Product and Quotient',
  subtitle: 'Multiply and divide powers with the same base using exponent rules.',
  lectures: [],
  concepts: [
    {
      id: 'bcg9-d2-c1',
      title: 'Product of Powers Rule',
      content:
        'When you **multiply** two powers with the **same base** (같은 밑), **add** the exponents.\n\n$$a^m \\times a^n = a^{m+n}$$\n\n**Why it works:**\n$$2^3 \\times 2^4 = (2 \\times 2 \\times 2) \\times (2 \\times 2 \\times 2 \\times 2) = 2^7$$\n\nYou simply count all the 2s: $3 + 4 = 7$ of them.\n\n**Examples:**\n- $x^5 \\times x^3 = x^{5+3} = x^8$\n- $3^2 \\times 3^6 = 3^{2+6} = 3^8 = 6561$\n- $(-4)^2 \\times (-4)^3 = (-4)^{2+3} = (-4)^5 = -1024$\n\n**Important:** This rule only works when the **bases are the same**. $2^3 \\times 3^4$ cannot be simplified this way.',
      type: 'formula',
    },
    {
      id: 'bcg9-d2-c2',
      title: 'Quotient of Powers Rule',
      content:
        'When you **divide** two powers with the **same base**, **subtract** the exponents.\n\n$$\\frac{a^m}{a^n} = a^{m-n} \\quad (a \\neq 0)$$\n\n**Why it works:**\n$$\\frac{2^5}{2^3} = \\frac{2 \\times 2 \\times 2 \\times 2 \\times 2}{2 \\times 2 \\times 2} = 2 \\times 2 = 2^2$$\n\nThree 2s cancel out: $5 - 3 = 2$ remain.\n\n**Examples:**\n- $\\frac{x^9}{x^4} = x^{9-4} = x^5$\n- $\\frac{5^7}{5^3} = 5^{7-3} = 5^4 = 625$\n- $\\frac{y^6}{y^6} = y^{6-6} = y^0 = 1$',
      type: 'formula',
    },
    {
      id: 'bcg9-d2-c3',
      title: 'Combining Both Rules',
      content:
        'You can apply both rules in the same expression.\n\n**Example 1:** Simplify $\\dfrac{x^8 \\times x^3}{x^5}$\n$$\\frac{x^8 \\times x^3}{x^5} = \\frac{x^{8+3}}{x^5} = \\frac{x^{11}}{x^5} = x^{11-5} = x^6$$\n\n**Example 2:** Simplify $\\dfrac{2^4 \\times 2^3}{2^2 \\times 2}$\n$$\\frac{2^4 \\times 2^3}{2^2 \\times 2^1} = \\frac{2^7}{2^3} = 2^{7-3} = 2^4 = 16$$\n\n**Step strategy:**\n1. Combine numerator (product rule)\n2. Combine denominator (product rule)\n3. Divide (quotient rule)',
      type: 'example',
    },
    {
      id: 'bcg9-d2-c4',
      title: 'Common Mistakes to Avoid',
      content:
        '**Mistake 1 — Adding instead of multiplying bases:**\n$$2^3 \\times 2^4 \\neq 4^7 \\quad \\text{(WRONG)}$$\n$$2^3 \\times 2^4 = 2^7 \\quad \\text{(CORRECT)}$$\n\n**Mistake 2 — Applying the rule to different bases:**\n$$2^3 \\times 3^4 \\neq 6^7 \\quad \\text{(WRONG — cannot combine)}$$\n\n**Mistake 3 — Subtracting in the wrong order:**\n$$\\frac{a^3}{a^7} \\neq a^4 \\quad \\text{(WRONG)}$$\n$$\\frac{a^3}{a^7} = a^{3-7} = a^{-4} \\quad \\text{(CORRECT)}$$\n\nAlways subtract: **(numerator exponent) − (denominator exponent)**.',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'bcg9-d2-p1',
      type: 'short-answer',
      difficulty: 'basic',
      question: 'Simplify: $x^4 \\times x^7$',
      answer: '$x^{11}$',
      explanation:
        'Using the product rule: $x^4 \\times x^7 = x^{4+7} = x^{11}$\n\nBoth powers have the same base $x$, so add the exponents.',
      relatedConcept: 'bcg9-d2-c1',
    },
    {
      id: 'bcg9-d2-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: 'Simplify: $\\dfrac{a^{10}}{a^4}$',
      answer: '$a^6$',
      explanation:
        'Using the quotient rule: $\\dfrac{a^{10}}{a^4} = a^{10-4} = a^6$\n\nSame base $a$, subtract the exponents.',
      relatedConcept: 'bcg9-d2-c2',
    },
    {
      id: 'bcg9-d2-p3',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: 'Which of the following equals $3^9$?',
      options: ['$3^4 \\times 3^4$', '$3^5 \\times 3^4$', '$3^3 \\times 3^3$', '$3^6 \\times 3^2$'],
      answer: '$3^5 \\times 3^4$',
      explanation:
        '$3^5 \\times 3^4 = 3^{5+4} = 3^9$ ✓\n\nOther options:\n- $3^4 \\times 3^4 = 3^8$\n- $3^3 \\times 3^3 = 3^6$\n- $3^6 \\times 3^2 = 3^8$',
      relatedConcept: 'bcg9-d2-c1',
    },
    {
      id: 'bcg9-d2-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question: 'Simplify: $\\dfrac{m^9 \\times m^2}{m^4}$',
      answer: '$m^7$',
      explanation:
        'Step 1 — Product rule on numerator: $m^9 \\times m^2 = m^{9+2} = m^{11}$\n\nStep 2 — Quotient rule: $\\dfrac{m^{11}}{m^4} = m^{11-4} = m^7$',
      relatedConcept: 'bcg9-d2-c3',
    },
    {
      id: 'bcg9-d2-p5',
      type: 'multiple-choice',
      difficulty: 'applied',
      question:
        'A rectangle has a length of $2^7$ cm and a width of $2^3$ cm. What is its area in the form $2^n$ cm²?',
      options: ['$2^4$ cm²', '$2^{10}$ cm²', '$2^{21}$ cm²', '$4^{10}$ cm²'],
      answer: '$2^{10}$ cm²',
      explanation:
        'Area $= \\text{length} \\times \\text{width} = 2^7 \\times 2^3 = 2^{7+3} = 2^{10}$ cm²\n\n$2^{10} = 1024$ cm²',
      relatedConcept: 'bcg9-d2-c1',
    },
    {
      id: 'bcg9-d2-p6',
      type: 'short-answer',
      difficulty: 'challenge',
      question:
        'Find the value of $n$ if $\\dfrac{5^n \\times 5^3}{5^4} = 5^6$.',
      answer: '$n = 7$',
      explanation:
        'Simplify the left side:\n$$\\frac{5^n \\times 5^3}{5^4} = \\frac{5^{n+3}}{5^4} = 5^{n+3-4} = 5^{n-1}$$\n\nSet equal to right side:\n$$5^{n-1} = 5^6$$\n$$n - 1 = 6$$\n$$n = 7$$',
      relatedConcept: 'bcg9-d2-c3',
    },
  ],
  realLifeExample:
    'When multiplying large numbers on a calculator in scientific form — like $10^3 \\times 10^4 = 10^7$ — the product rule saves time. 과학 계산에서 큰 수를 곱하거나 나눌 때 지수 법칙을 사용하면 훨씬 빠르게 계산할 수 있어요.',
};

export default dayContent;
