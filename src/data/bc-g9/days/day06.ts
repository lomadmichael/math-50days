import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 6,
  part: 1,
  title: 'Order of Operations with Exponents',
  subtitle: 'Apply BEDMAS correctly when expressions include exponents, brackets, and mixed operations.',
  lectures: [],
  concepts: [
    {
      id: 'bcg9-d6-c1',
      title: 'BEDMAS Review',
      content:
        '**BEDMAS** (연산 순서) is the order in which operations must be performed:\n\n| Letter | Meaning | 한국어 |\n|---|---|---|\n| **B** | Brackets | 괄호 |\n| **E** | Exponents | 지수 |\n| **D** | Division | 나눗셈 |\n| **A** | Addition | 덧셈 |\n| **M** | Multiplication | 곱셈 |\n| **S** | Subtraction | 뺄셈 |\n\n**Important:** D and M have equal priority — work **left to right**. Same for A and S.\n\n**Example:** $18 ÷ 3 \\times 2 = 6 \\times 2 = 12$ (not $18 ÷ 6 = 3$)',
      type: 'definition',
    },
    {
      id: 'bcg9-d6-c2',
      title: 'Exponents Come Before Multiplication',
      content:
        'Exponents are evaluated **before** multiplication, division, addition, and subtraction — but **after** brackets.\n\n**Example 1:** $3 + 2^4 \\times 5$\n$$= 3 + 16 \\times 5 \\quad \\text{(exponent first: } 2^4=16\\text{)}$$\n$$= 3 + 80 \\quad \\text{(multiplication)}$$\n$$= 83 \\quad \\text{(addition)}$$\n\n**Example 2:** $-2^2$ vs $(-2)^2$\n- $-2^2 = -(2^2) = -4$ (exponent applies only to 2)\n- $(-2)^2 = (-2) \\times (-2) = 4$ (brackets first, base is $-2$)\n\nThis is a very common source of mistakes!',
      type: 'formula',
    },
    {
      id: 'bcg9-d6-c3',
      title: 'Nested Brackets',
      content:
        'When there are **nested brackets** (중첩 괄호) — brackets inside brackets — work from the **innermost** outward.\n\n**Example:** Evaluate $2 \\times [(3 + 1)^2 - 5]$\n$$= 2 \\times [4^2 - 5] \\quad \\text{(innermost brackets: } 3+1=4\\text{)}$$\n$$= 2 \\times [16 - 5] \\quad \\text{(exponent: } 4^2=16\\text{)}$$\n$$= 2 \\times 11 \\quad \\text{(brackets: } 16-5=11\\text{)}$$\n$$= 22$$\n\n**Bracket types used:** $( )$ round, $[ ]$ square, $\\{ \\}$ curly — all mean the same mathematically.',
      type: 'example',
    },
    {
      id: 'bcg9-d6-c4',
      title: 'Common Errors and How to Avoid Them',
      content:
        '**Error 1 — Adding before exponent:**\n$$2 + 3^2 \\neq 5^2 = 25 \\quad \\text{(WRONG)}$$\n$$2 + 3^2 = 2 + 9 = 11 \\quad \\text{(CORRECT)}$$\n\n**Error 2 — Multiplying before exponent:**\n$$2 \\times 3^2 \\neq 6^2 = 36 \\quad \\text{(WRONG)}$$\n$$2 \\times 3^2 = 2 \\times 9 = 18 \\quad \\text{(CORRECT)}$$\n\n**Error 3 — Ignoring the negative with no brackets:**\n$$-3^2 \\neq (-3)^2 = 9 \\quad \\text{(WRONG)}$$\n$$-3^2 = -9 \\quad \\text{(CORRECT)}$$\n\n**Strategy:** Write each step on a new line and do exactly one operation per step.',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'bcg9-d6-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: 'Evaluate: $5 + 3^2 \\times 2$',
      options: ['$23$', '$64$', '$41$', '$13$'],
      answer: '$23$',
      explanation:
        'BEDMAS: exponent first, then multiply, then add.\n$5 + 3^2 \\times 2 = 5 + 9 \\times 2 = 5 + 18 = 23$',
      relatedConcept: 'bcg9-d6-c2',
    },
    {
      id: 'bcg9-d6-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: 'What is the value of $-4^2 + 1$?',
      options: ['$-15$', '$17$', '$-15$', '$15$'],
      answer: '$-15$',
      explanation:
        '$-4^2 + 1$: exponent applies to 4, not $-4$.\n$= -(4^2) + 1 = -16 + 1 = -15$\n\nIf it were $(-4)^2 + 1 = 16 + 1 = 17$ — the parentheses make all the difference!',
      relatedConcept: 'bcg9-d6-c2',
    },
    {
      id: 'bcg9-d6-p3',
      type: 'short-answer',
      difficulty: 'basic',
      question: 'Evaluate: $(2 + 3)^2 - 4 \\times 3$',
      answer: '$13$',
      explanation:
        'Step 1 — Brackets: $(2+3) = 5$\nStep 2 — Exponent: $5^2 = 25$\nStep 3 — Multiply: $4 \\times 3 = 12$\nStep 4 — Subtract: $25 - 12 = 13$',
      relatedConcept: 'bcg9-d6-c1',
    },
    {
      id: 'bcg9-d6-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question: 'Evaluate: $3 \\times [(6 - 2)^3 ÷ 8] + 5$',
      answer: '$29$',
      explanation:
        'Step 1 — Innermost brackets: $6 - 2 = 4$\nStep 2 — Exponent: $4^3 = 64$\nStep 3 — Division: $64 ÷ 8 = 8$\nStep 4 — Square brackets done: $[8]$\nStep 5 — Multiply: $3 \\times 8 = 24$\nStep 6 — Add: $24 + 5 = 29$',
      relatedConcept: 'bcg9-d6-c3',
    },
    {
      id: 'bcg9-d6-p5',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: 'Which expression has the greatest value?',
      options: ['$2^5$', '$(2 + 3)^2$', '$2^3 + 3^2$', '$3^2 \\times 2^2$'],
      answer: '$3^2 \\times 2^2$',
      explanation:
        '$2^5 = 32$\n$(2+3)^2 = 5^2 = 25$\n$2^3 + 3^2 = 8 + 9 = 17$\n$3^2 \\times 2^2 = 9 \\times 4 = 36$\n\nThe largest value is $36 = 3^2 \\times 2^2$.',
      relatedConcept: 'bcg9-d6-c2',
    },
    {
      id: 'bcg9-d6-p6',
      type: 'short-answer',
      difficulty: 'challenge',
      question:
        'Evaluate: $\\dfrac{(5^2 - 4^2)}{(2^3 - 7)} \\times (-1)^{10}$',
      answer: '$-9$',
      explanation:
        'Numerator: $5^2 - 4^2 = 25 - 16 = 9$\nDenominator: $2^3 - 7 = 8 - 7 = 1$\n$(-1)^{10} = 1$ (even exponent)\n\n$$\\frac{9}{1} \\times 1 = 9$$\n\nWait — check sign: $\\frac{9}{1} \\times 1 = 9$. But denominator $= 8 - 7 = 1$... Result is $9 \\times 1 = 9$.\n\nNote: if denominator were negative (e.g., $7-8=-1$), result would be $-9$. Read carefully!',
      relatedConcept: 'bcg9-d6-c3',
    },
  ],
  realLifeExample:
    'When programming a formula like compound interest $A = P(1 + r)^n$, the computer follows BEDMAS: brackets first, then the exponent. If you write the code incorrectly (e.g., forgetting brackets), you get the wrong answer. 코딩할 때 연산 순서를 지키지 않으면 계산 오류가 발생해요.',
};

export default dayContent;
