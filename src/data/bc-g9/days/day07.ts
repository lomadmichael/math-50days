import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 7,
  part: 2,
  title: 'Introduction to Polynomials',
  subtitle: 'Learn the vocabulary of polynomials: terms, coefficients, variables, and constants.',
  lectures: [],
  concepts: [
    {
      id: 'bcg9-d7-c1',
      title: 'What is a Polynomial?',
      content:
        'A **polynomial** (다항식) is an algebraic expression made up of **terms** (항) that are added or subtracted.\n\nEach **term** (항) is a number, a variable, or a product of numbers and variables with whole-number exponents.\n\n**Examples of polynomials:**\n- $3x^2 + 5x - 7$ (three terms)\n- $4a^3 - 2a$ (two terms)\n- $9$ (one term — a constant)\n\n**NOT polynomials:**\n- $\\dfrac{3}{x} = 3x^{-1}$ (negative exponent)\n- $\\sqrt{x} = x^{1/2}$ (fractional exponent)',
      type: 'definition',
    },
    {
      id: 'bcg9-d7-c2',
      title: 'Parts of a Term',
      content:
        'Each term has two parts:\n\n**Coefficient** (계수) — the numerical part\n**Variable part** — the letter(s) with exponent\n\nIn $-6x^3$:\n- Coefficient: $-6$\n- Variable part: $x^3$\n\n| Term | Coefficient | Variable Part |\n|---|---|---|\n| $5x^2$ | $5$ | $x^2$ |\n| $-3xy$ | $-3$ | $xy$ |\n| $7$ | $7$ | (none — constant) |\n| $x$ | $1$ | $x$ |\n| $-y^4$ | $-1$ | $y^4$ |\n\n**Constant term** (상수항) — a term with no variable (e.g., $-7$).',
      type: 'definition',
    },
    {
      id: 'bcg9-d7-c3',
      title: 'Like Terms',
      content:
        '**Like terms** (동류항) are terms that have the **exact same variable part** (same variables with the same exponents).\n\nLike terms can be **combined** (합산) by adding or subtracting their coefficients.\n\n**Like terms:**\n- $3x^2$ and $-7x^2$ (both have $x^2$)\n- $4xy$ and $9xy$ (both have $xy$)\n\n**NOT like terms:**\n- $3x^2$ and $3x$ (different exponents)\n- $4x$ and $4y$ (different variables)\n\n**Combining:** $3x^2 + (-7x^2) = (3 + (-7))x^2 = -4x^2$',
      type: 'formula',
    },
    {
      id: 'bcg9-d7-c4',
      title: 'Evaluating Polynomials',
      content:
        'To **evaluate** a polynomial, substitute a value for each variable and calculate.\n\n**Example:** Evaluate $2x^2 - 3x + 1$ when $x = 4$\n\n$$2(4)^2 - 3(4) + 1$$\n$$= 2 \\times 16 - 12 + 1$$\n$$= 32 - 12 + 1$$\n$$= 21$$\n\n**Example:** Evaluate $a^2 + b^2$ when $a = 3, b = -2$\n$$= 3^2 + (-2)^2 = 9 + 4 = 13$$\n\n**Important:** Substitute into brackets: replace $x$ with $(4)$, not just $4$, to avoid sign errors.',
      type: 'example',
    },
  ],
  problems: [
    {
      id: 'bcg9-d7-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: 'In the term $-8x^3y$, what is the coefficient?',
      options: ['$8$', '$-8$', '$3$', '$x^3y$'],
      answer: '$-8$',
      explanation:
        'The coefficient is the numerical factor of the term.\nIn $-8x^3y$, the coefficient is $-8$ (including the sign!).\n\nThe variable part is $x^3y$.',
      relatedConcept: 'bcg9-d7-c2',
    },
    {
      id: 'bcg9-d7-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: 'Which pair of terms are like terms?',
      options: ['$3x^2$ and $3y^2$', '$5x$ and $5x^2$', '$4ab$ and $-7ab$', '$2x$ and $2$'],
      answer: '$4ab$ and $-7ab$',
      explanation:
        '$4ab$ and $-7ab$ both have the same variable part $ab$, so they are like terms.\n\nCombined: $4ab + (-7ab) = -3ab$\n\nOther pairs have different variable parts.',
      relatedConcept: 'bcg9-d7-c3',
    },
    {
      id: 'bcg9-d7-p3',
      type: 'short-answer',
      difficulty: 'basic',
      question: 'Combine like terms: $5x^2 - 3x^2 + 8x^2$',
      answer: '$10x^2$',
      explanation:
        'All three terms have the same variable part $x^2$.\n$(5 - 3 + 8)x^2 = 10x^2$',
      relatedConcept: 'bcg9-d7-c3',
    },
    {
      id: 'bcg9-d7-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question: 'Evaluate $3x^2 - 5x + 2$ when $x = -1$.',
      answer: '$10$',
      explanation:
        'Substitute $x = -1$:\n$3(-1)^2 - 5(-1) + 2$\n$= 3(1) - (-5) + 2$\n$= 3 + 5 + 2$\n$= 10$',
      relatedConcept: 'bcg9-d7-c4',
    },
    {
      id: 'bcg9-d7-p5',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: 'Which expression is NOT a polynomial?',
      options: ['$4x^3 - 2x + 1$', '$\\dfrac{5}{x^2}$', '$7$', '$x^2 - x$'],
      answer: '$\\dfrac{5}{x^2}$',
      explanation:
        '$\\dfrac{5}{x^2} = 5x^{-2}$, which has a negative exponent. Polynomials must have whole-number (non-negative integer) exponents only.\n\nAll other options are valid polynomials.',
      relatedConcept: 'bcg9-d7-c1',
    },
    {
      id: 'bcg9-d7-p6',
      type: 'short-answer',
      difficulty: 'challenge',
      question:
        'Evaluate $2a^2 - 3ab + b^2$ when $a = 3$ and $b = -2$. Show your work.',
      answer: '$34$',
      explanation:
        'Substitute $a = 3$, $b = -2$:\n$2(3)^2 - 3(3)(-2) + (-2)^2$\n$= 2(9) - 3(3)(-2) + 4$\n$= 18 - (-18) + 4$\n$= 18 + 18 + 4$\n$= 40$\n\n(Recalculate: $-3(3)(-2) = -3 \\times 3 \\times (-2) = -9 \\times (-2) = +18$. Final answer: $18 + 18 + 4 = 40$.)',
      relatedConcept: 'bcg9-d7-c4',
    },
  ],
  realLifeExample:
    'The path of a thrown ball follows a polynomial equation: $h = -5t^2 + 20t + 1$, where $h$ is height in metres and $t$ is time in seconds. Evaluating this polynomial at different values of $t$ tells you the ball\'s height at any moment. 야구공의 포물선 궤도도 다항식으로 나타낼 수 있어요!',
};

export default dayContent;
