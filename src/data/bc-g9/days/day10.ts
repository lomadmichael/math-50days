import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 10,
  part: 2,
  title: 'Multiplying a Polynomial by a Monomial',
  subtitle: 'Use the distributive property to multiply every term in a polynomial by a monomial.',
  lectures: [],
  concepts: [
    {
      id: 'bcg9-d10-c1',
      title: 'The Distributive Property',
      content:
        'The **distributive property** (분배법칙) states:\n\n$$a(b + c) = ab + ac$$\n\nTo multiply a **monomial** (단항식) by a **polynomial**, multiply the monomial by **every term** in the polynomial.\n\n**Example:** $3x(2x^2 - 5x + 4)$\n\n$$= 3x \\times 2x^2 + 3x \\times (-5x) + 3x \\times 4$$\n$$= 6x^3 - 15x^2 + 12x$$\n\n**Rule for multiplying terms:**\n- Multiply the **coefficients**\n- Add the **exponents** of the same variable (product rule)',
      type: 'formula',
    },
    {
      id: 'bcg9-d10-c2',
      title: 'Multiplying with Negative Monomials',
      content:
        'When the monomial is **negative**, every sign in the polynomial flips.\n\n**Example:** $-2x(3x^2 - x + 5)$\n\n$$= -2x \\times 3x^2 + (-2x) \\times (-x) + (-2x) \\times 5$$\n$$= -6x^3 + 2x^2 - 10x$$\n\n**Sign rules for multiplication:**\n- $(+)(+) = +$\n- $(+)(-) = -$\n- $(-)(+) = -$\n- $(-)(-)= +$\n\n**Common mistake:** $-2x(-x) = -2x^2$ is WRONG. $(-2x)(-x) = +2x^2$.',
      type: 'formula',
    },
    {
      id: 'bcg9-d10-c3',
      title: 'Expanding and Simplifying',
      content:
        'After expanding, you may need to **combine like terms** if there are multiple groups.\n\n**Example:** Expand and simplify $3x(x + 2) - x(2x - 5)$\n\nStep 1 — Distribute each monomial:\n$$3x \\cdot x + 3x \\cdot 2 - x \\cdot 2x - x \\cdot (-5)$$\n$$= 3x^2 + 6x - 2x^2 + 5x$$\n\nStep 2 — Combine like terms:\n$$(3x^2 - 2x^2) + (6x + 5x)$$\n$$= x^2 + 11x$$',
      type: 'example',
    },
    {
      id: 'bcg9-d10-c4',
      title: 'Multiplying Monomials with Multiple Variables',
      content:
        'When the monomial or polynomial contains **multiple variables**, apply the exponent rules for each variable separately.\n\n**Example:** $2ab^2 \\times (3a^2 - ab + b)$\n\n$$= 2ab^2 \\times 3a^2 + 2ab^2 \\times (-ab) + 2ab^2 \\times b$$\n$$= 6a^{1+2}b^2 - 2a^{1+1}b^{2+1} + 2ab^{2+1}$$\n$$= 6a^3b^2 - 2a^2b^3 + 2ab^3$$\n\n**Tip:** Handle each variable\'s exponents independently.',
      type: 'example',
    },
  ],
  problems: [
    {
      id: 'bcg9-d10-p1',
      type: 'short-answer',
      difficulty: 'basic',
      question: 'Expand: $4(3x^2 - 2x + 1)$',
      answer: '$12x^2 - 8x + 4$',
      explanation:
        'Distribute 4 to each term:\n$4 \\times 3x^2 = 12x^2$\n$4 \\times (-2x) = -8x$\n$4 \\times 1 = 4$\n\nResult: $12x^2 - 8x + 4$',
      relatedConcept: 'bcg9-d10-c1',
    },
    {
      id: 'bcg9-d10-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: 'Expand: $-3x(2x^2 - x - 4)$',
      answer: '$-6x^3 + 3x^2 + 12x$',
      explanation:
        '$-3x \\times 2x^2 = -6x^3$\n$-3x \\times (-x) = +3x^2$\n$-3x \\times (-4) = +12x$\n\nResult: $-6x^3 + 3x^2 + 12x$',
      relatedConcept: 'bcg9-d10-c2',
    },
    {
      id: 'bcg9-d10-p3',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: 'Which is the correct expansion of $5x(x - 3)$?',
      options: ['$5x^2 - 3$', '$5x^2 - 15x$', '$5x^2 - 15$', '$5x - 15x$'],
      answer: '$5x^2 - 15x$',
      explanation:
        '$5x \\times x = 5x^2$\n$5x \\times (-3) = -15x$\n\nResult: $5x^2 - 15x$',
      relatedConcept: 'bcg9-d10-c1',
    },
    {
      id: 'bcg9-d10-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question: 'Expand and simplify: $2x(x + 3) + 4x(x - 1)$',
      answer: '$6x^2 + 2x$',
      explanation:
        'First group: $2x(x+3) = 2x^2 + 6x$\nSecond group: $4x(x-1) = 4x^2 - 4x$\n\nCombine: $(2x^2 + 4x^2) + (6x - 4x) = 6x^2 + 2x$',
      relatedConcept: 'bcg9-d10-c3',
    },
    {
      id: 'bcg9-d10-p5',
      type: 'multiple-choice',
      difficulty: 'applied',
      question:
        'A rectangle has width $2x$ and length $(3x + 5)$. What is its area?',
      options: ['$6x + 10$', '$5x + 5$', '$6x^2 + 10x$', '$6x^2 + 5$'],
      answer: '$6x^2 + 10x$',
      explanation:
        'Area $= \\text{width} \\times \\text{length} = 2x(3x + 5)$\n$= 2x \\times 3x + 2x \\times 5$\n$= 6x^2 + 10x$',
      relatedConcept: 'bcg9-d10-c1',
    },
    {
      id: 'bcg9-d10-p6',
      type: 'short-answer',
      difficulty: 'challenge',
      question: 'Expand and simplify: $3x(2x - 5) - 2x(x - 4) + x^2$',
      answer: '$5x^2 - 7x$',
      explanation:
        'Expand each group:\n$3x(2x-5) = 6x^2 - 15x$\n$-2x(x-4) = -2x^2 + 8x$\n$x^2 = x^2$\n\nCombine: $(6x^2 - 2x^2 + x^2) + (-15x + 8x)$\n$= 5x^2 - 7x$',
      relatedConcept: 'bcg9-d10-c3',
    },
  ],
  realLifeExample:
    'If a store sells $x$ items at a price of $(5x + 3)$ dollars each, the total revenue is $x(5x + 3) = 5x^2 + 3x$ dollars. Multiplying a monomial by a polynomial gives the total as a polynomial. 판매량과 가격이 변수로 표현될 때 총 수익도 다항식으로 나타나요.',
};

export default dayContent;
