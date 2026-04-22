import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 11,
  part: 2,
  title: 'Multiplying Two Binomials (FOIL)',
  subtitle: 'Use the FOIL method to multiply two binomials and expand the product.',
  lectures: [],
  concepts: [
    {
      id: 'bcg9-d11-c1',
      title: 'The FOIL Method',
      content:
        '**FOIL** is a mnemonic for multiplying two **binomials** (이항식 × 이항식):\n\n| Letter | Meaning | 설명 |\n|---|---|---|\n| **F** | First | 첫째 항 × 첫째 항 |\n| **O** | Outer | 바깥 항 × 바깥 항 |\n| **I** | Inner | 안 항 × 안 항 |\n| **L** | Last | 끝 항 × 끝 항 |\n\n**Example:** $(x + 3)(x + 5)$\n$$\\underbrace{x \\cdot x}_{F} + \\underbrace{x \\cdot 5}_{O} + \\underbrace{3 \\cdot x}_{I} + \\underbrace{3 \\cdot 5}_{L}$$\n$$= x^2 + 5x + 3x + 15$$\n$$= x^2 + 8x + 15$$\n\nFOIL is just the **distributive property** applied twice.',
      type: 'formula',
    },
    {
      id: 'bcg9-d11-c2',
      title: 'FOIL with Subtraction and Negatives',
      content:
        'When terms are negative, track signs carefully.\n\n**Example 1:** $(x - 4)(x + 2)$\n$$= x^2 + 2x - 4x - 8 = x^2 - 2x - 8$$\n\n**Example 2:** $(2x - 3)(3x - 1)$\n$$= 6x^2 - 2x - 9x + 3 = 6x^2 - 11x + 3$$\n\n**Example 3:** $(x - 5)(x - 5)$\n$$= x^2 - 5x - 5x + 25 = x^2 - 10x + 25$$\n\n**Pattern to remember:** $(a - b)^2 = a^2 - 2ab + b^2$ — this is the **perfect square trinomial** (완전제곱 삼항식).',
      type: 'formula',
    },
    {
      id: 'bcg9-d11-c3',
      title: 'Special Products',
      content:
        'Two patterns arise so often they deserve special attention:\n\n**1. Difference of Squares (제곱의 차):**\n$$(a + b)(a - b) = a^2 - b^2$$\n\nThe middle terms cancel: $+ab - ab = 0$\n\n**Example:** $(x + 7)(x - 7) = x^2 - 49$\n\n**2. Perfect Square Trinomials (완전제곱식):**\n$$(a + b)^2 = a^2 + 2ab + b^2$$\n$$(a - b)^2 = a^2 - 2ab + b^2$$\n\n**Example:** $(2x + 3)^2 = 4x^2 + 12x + 9$\n\nMemorise these — they save a lot of time!',
      type: 'tip',
    },
    {
      id: 'bcg9-d11-c4',
      title: 'FOIL with Coefficients and Two Variables',
      content:
        'FOIL works the same way even with coefficients and two variables.\n\n**Example:** $(3x + 2y)(4x - y)$\n$$= 3x \\cdot 4x + 3x \\cdot (-y) + 2y \\cdot 4x + 2y \\cdot (-y)$$\n$$= 12x^2 - 3xy + 8xy - 2y^2$$\n$$= 12x^2 + 5xy - 2y^2$$\n\n**Step-by-step:**\n1. F: multiply the first terms\n2. O: multiply the outer terms\n3. I: multiply the inner terms\n4. L: multiply the last terms\n5. Combine any like terms (middle terms often combine)',
      type: 'example',
    },
  ],
  problems: [
    {
      id: 'bcg9-d11-p1',
      type: 'short-answer',
      difficulty: 'basic',
      question: 'Expand using FOIL: $(x + 4)(x + 6)$',
      answer: '$x^2 + 10x + 24$',
      explanation:
        'F: $x \\cdot x = x^2$\nO: $x \\cdot 6 = 6x$\nI: $4 \\cdot x = 4x$\nL: $4 \\cdot 6 = 24$\n\n$x^2 + 6x + 4x + 24 = x^2 + 10x + 24$',
      relatedConcept: 'bcg9-d11-c1',
    },
    {
      id: 'bcg9-d11-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: 'Expand: $(x - 3)(x + 7)$',
      answer: '$x^2 + 4x - 21$',
      explanation:
        'F: $x^2$\nO: $7x$\nI: $-3x$\nL: $-21$\n\n$x^2 + 7x - 3x - 21 = x^2 + 4x - 21$',
      relatedConcept: 'bcg9-d11-c2',
    },
    {
      id: 'bcg9-d11-p3',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: 'Which is the product of $(x + 5)(x - 5)$?',
      options: ['$x^2 + 25$', '$x^2 - 25$', '$x^2 - 10x + 25$', '$x^2 + 10x - 25$'],
      answer: '$x^2 - 25$',
      explanation:
        '$(x + 5)(x - 5)$ is a **difference of squares**: $(a+b)(a-b) = a^2 - b^2$\n\n$= x^2 - 5^2 = x^2 - 25$\n\nThe middle terms cancel: $+5x - 5x = 0$.',
      relatedConcept: 'bcg9-d11-c3',
    },
    {
      id: 'bcg9-d11-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question: 'Expand: $(2x - 3)(4x + 5)$',
      answer: '$8x^2 + 2x - 15$',
      explanation:
        'F: $2x \\cdot 4x = 8x^2$\nO: $2x \\cdot 5 = 10x$\nI: $-3 \\cdot 4x = -12x$\nL: $-3 \\cdot 5 = -15$\n\n$8x^2 + 10x - 12x - 15 = 8x^2 - 2x - 15$\n\nNote: The answer is $8x^2 - 2x - 15$.',
      relatedConcept: 'bcg9-d11-c4',
    },
    {
      id: 'bcg9-d11-p5',
      type: 'short-answer',
      difficulty: 'applied',
      question: 'Expand $(3x + 2)^2$ using the perfect square formula.',
      answer: '$9x^2 + 12x + 4$',
      explanation:
        '$(a + b)^2 = a^2 + 2ab + b^2$ where $a = 3x$, $b = 2$\n\n$(3x)^2 + 2(3x)(2) + 2^2$\n$= 9x^2 + 12x + 4$',
      relatedConcept: 'bcg9-d11-c3',
    },
    {
      id: 'bcg9-d11-p6',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question:
        'A square has a side length of $(x + 4)$ cm. A smaller square of side $(x - 1)$ cm is cut out of it. What is the remaining area?',
      options: ['$5x + 17$ cm²', '$10x + 15$ cm²', '$2x^2 + 15$ cm²', '$10x + 17$ cm²'],
      answer: '$10x + 17$ cm²',
      explanation:
        'Large square area: $(x+4)^2 = x^2 + 8x + 16$\nSmall square area: $(x-1)^2 = x^2 - 2x + 1$\n\nRemaining $= (x^2 + 8x + 16) - (x^2 - 2x + 1)$\n$= x^2 + 8x + 16 - x^2 + 2x - 1$\n$= 10x + 15$\n\nNote: The correct answer is $10x + 15$ cm².',
      relatedConcept: 'bcg9-d11-c3',
    },
  ],
  realLifeExample:
    'The area of a rectangular garden with dimensions $(x + 3)$ m by $(x + 7)$ m is $(x+3)(x+7) = x^2 + 10x + 21$ m². As $x$ changes, the area changes as a quadratic polynomial. 이항식 곱셈은 직사각형 넓이나 도형 문제에서 자주 등장해요.',
};

export default dayContent;
