import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 12,
  part: 2,
  title: 'Dividing a Polynomial by a Monomial',
  subtitle: 'Divide each term of a polynomial by a monomial using fraction rules and exponent laws.',
  lectures: [],
  concepts: [
    {
      id: 'bcg9-d12-c1',
      title: 'Dividing a Polynomial by a Monomial',
      content:
        'To divide a **polynomial** by a **monomial** (다항식 ÷ 단항식), divide **each term** of the polynomial by the monomial separately.\n\n$$\\frac{a + b}{c} = \\frac{a}{c} + \\frac{b}{c}$$\n\n**Example:** $\\dfrac{6x^3 + 9x^2 - 3x}{3x}$\n\n$$= \\frac{6x^3}{3x} + \\frac{9x^2}{3x} + \\frac{-3x}{3x}$$\n\n$$= 2x^{3-1} + 3x^{2-1} - 1$$\n\n$$= 2x^2 + 3x - 1$$\n\n**Remember:** Use the **quotient of powers rule** ($a^m \\div a^n = a^{m-n}$) for the variables.',
      type: 'formula',
    },
    {
      id: 'bcg9-d12-c2',
      title: 'Dividing Coefficients and Exponents Separately',
      content:
        'When dividing terms, handle the **number part** and **variable part** separately:\n\n**Example:** $\\dfrac{-15x^4}{5x^2}$\n\n$$= \\frac{-15}{5} \\times \\frac{x^4}{x^2} = -3 \\times x^{4-2} = -3x^2$$\n\n**Example:** $\\dfrac{12a^3b^2}{-4ab}$\n\n$$= \\frac{12}{-4} \\times \\frac{a^3}{a} \\times \\frac{b^2}{b} = -3 \\times a^{3-1} \\times b^{2-1} = -3a^2b$$\n\n**Sign rule:** Dividing a negative by a positive (or vice versa) gives a negative result.',
      type: 'formula',
    },
    {
      id: 'bcg9-d12-c3',
      title: 'Full Division Example',
      content:
        'Let\'s work through a complete example step by step.\n\n**Example:** $\\dfrac{8x^4 - 12x^3 + 4x^2}{4x^2}$\n\nStep 1 — Split into separate fractions:\n$$\\frac{8x^4}{4x^2} - \\frac{12x^3}{4x^2} + \\frac{4x^2}{4x^2}$$\n\nStep 2 — Divide each term:\n$$2x^{4-2} - 3x^{3-2} + 1$$\n$$= 2x^2 - 3x + 1$$\n\n**Check:** Multiply the answer by the divisor:\n$4x^2(2x^2 - 3x + 1) = 8x^4 - 12x^3 + 4x^2$ ✓',
      type: 'example',
    },
    {
      id: 'bcg9-d12-c4',
      title: 'Avoiding Common Mistakes',
      content:
        '**Mistake 1 — Dividing only the first term:**\n$$\\frac{6x^2 + 4x}{2x} \\neq 3x + 4x \\quad \\text{(WRONG)}$$\n$$\\frac{6x^2 + 4x}{2x} = 3x + 2 \\quad \\text{(CORRECT)}$$\n\n**Mistake 2 — Forgetting to divide the constant:**\n$$\\frac{x^2 + 3x + 6}{3} \\neq x^2 + x + 6 \\quad \\text{(WRONG)}$$\n$$= \\frac{x^2}{3} + x + 2 \\quad \\text{(CORRECT)}$$\n\n**Mistake 3 — Exponent subtraction errors:**\n$$\\frac{x^5}{x^2} \\neq x^{5 \\div 2} \\quad \\text{(WRONG)}$$\n$$= x^{5-2} = x^3 \\quad \\text{(CORRECT)}$$',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'bcg9-d12-p1',
      type: 'short-answer',
      difficulty: 'basic',
      question: 'Divide: $\\dfrac{10x^3 + 5x^2}{5x}$',
      answer: '$2x^2 + x$',
      explanation:
        '$\\dfrac{10x^3}{5x} + \\dfrac{5x^2}{5x}$\n$= 2x^{3-1} + 1 \\cdot x^{2-1}$\n$= 2x^2 + x$',
      relatedConcept: 'bcg9-d12-c1',
    },
    {
      id: 'bcg9-d12-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: 'Simplify: $\\dfrac{-18a^4b^3}{6a^2b}$',
      answer: '$-3a^2b^2$',
      explanation:
        '$\\dfrac{-18}{6} = -3$\n$\\dfrac{a^4}{a^2} = a^{4-2} = a^2$\n$\\dfrac{b^3}{b} = b^{3-1} = b^2$\n\nResult: $-3a^2b^2$',
      relatedConcept: 'bcg9-d12-c2',
    },
    {
      id: 'bcg9-d12-p3',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: 'What is $\\dfrac{12x^4 - 8x^2 + 4x}{4x}$?',
      options: ['$3x^3 - 2x + 1$', '$3x^3 - 2x^2 + 1$', '$3x^4 - 2x + 1$', '$12x^3 - 8x + 4$'],
      answer: '$3x^3 - 2x + 1$',
      explanation:
        '$\\dfrac{12x^4}{4x} - \\dfrac{8x^2}{4x} + \\dfrac{4x}{4x}$\n$= 3x^{4-1} - 2x^{2-1} + 1$\n$= 3x^3 - 2x + 1$',
      relatedConcept: 'bcg9-d12-c1',
    },
    {
      id: 'bcg9-d12-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question: 'Divide: $\\dfrac{9x^5 - 6x^4 + 3x^3}{-3x^2}$',
      answer: '$-3x^3 + 2x^2 - x$',
      explanation:
        '$\\dfrac{9x^5}{-3x^2} + \\dfrac{-6x^4}{-3x^2} + \\dfrac{3x^3}{-3x^2}$\n$= -3x^{5-2} + 2x^{4-2} - x^{3-2}$\n$= -3x^3 + 2x^2 - x$',
      relatedConcept: 'bcg9-d12-c2',
    },
    {
      id: 'bcg9-d12-p5',
      type: 'multiple-choice',
      difficulty: 'applied',
      question:
        'A rectangle has area $(15x^3 - 10x^2 + 5x)$ cm² and width $5x$ cm. What is the length?',
      options: ['$3x^2 - 2x + 1$ cm', '$3x^2 - 2x$ cm', '$10x^2 - 5x$ cm', '$3x - 2 + 1$ cm'],
      answer: '$3x^2 - 2x + 1$ cm',
      explanation:
        'Length $= \\dfrac{\\text{Area}}{\\text{Width}} = \\dfrac{15x^3 - 10x^2 + 5x}{5x}$\n\n$= 3x^2 - 2x + 1$',
      relatedConcept: 'bcg9-d12-c3',
    },
    {
      id: 'bcg9-d12-p6',
      type: 'short-answer',
      difficulty: 'challenge',
      question:
        'Find the value of $k$ if $\\dfrac{kx^3 + 8x^2 - 4x}{2x} = 3x^2 + 4x - 2$.',
      answer: '$k = 6$',
      explanation:
        'Divide each term: $\\dfrac{kx^3}{2x} = \\dfrac{k}{2}x^2$\n\nFor this to equal $3x^2$: $\\dfrac{k}{2} = 3$, so $k = 6$.\n\nVerification: $\\dfrac{6x^3 + 8x^2 - 4x}{2x} = 3x^2 + 4x - 2$ ✓',
      relatedConcept: 'bcg9-d12-c3',
    },
  ],
  realLifeExample:
    'If a factory produces $(20x^3 - 15x^2 + 5x)$ items using $5x$ machines, the output per machine is $\\frac{20x^3-15x^2+5x}{5x} = 4x^2 - 3x + 1$. Dividing polynomials by monomials models real-world rate problems. 공장 생산성 계산에도 단항식 나눗셈이 활용돼요.',
};

export default dayContent;
