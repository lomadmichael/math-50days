import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 13,
  part: 2,
  title: 'Word Problems with Polynomials',
  subtitle: 'Build and evaluate polynomial expressions to solve real-world problems.',
  lectures: [],
  concepts: [
    {
      id: 'bcg9-d13-c1',
      title: 'Translating Words to Polynomial Expressions',
      content:
        'Many real-world situations can be modelled by polynomial expressions.\n\n**Key phrases to watch for:**\n| Phrase | Operation |\n|---|---|\n| "more than", "increased by" | $+$ |\n| "less than", "decreased by" | $-$ |\n| "times", "product of" | $\\times$ |\n| "squared", "to the second power" | exponent 2 |\n\n**Example:** A rectangle has a length that is 3 more than twice its width $w$.\n- Width: $w$\n- Length: $2w + 3$\n- Perimeter: $2(w + 2w + 3) = 2(3w + 3) = 6w + 6$\n- Area: $w(2w + 3) = 2w^2 + 3w$',
      type: 'definition',
    },
    {
      id: 'bcg9-d13-c2',
      title: 'Perimeter and Area Problems',
      content:
        'Geometric problems often lead to polynomial expressions.\n\n**Square with side $s$:**\n- Perimeter $= 4s$\n- Area $= s^2$\n\n**Rectangle with width $w$ and length $l$:**\n- Perimeter $= 2(l + w) = 2l + 2w$\n- Area $= lw$\n\n**Example:** A square has side $(x + 5)$ cm.\n- Perimeter $= 4(x + 5) = 4x + 20$ cm\n- Area $= (x + 5)^2 = x^2 + 10x + 25$ cm²\n\n**Example:** A rectangular pool is $(3x - 1)$ m long and $(x + 2)$ m wide.\n- Area $= (3x-1)(x+2) = 3x^2 + 6x - x - 2 = 3x^2 + 5x - 2$ m²',
      type: 'formula',
    },
    {
      id: 'bcg9-d13-c3',
      title: 'Setting Up and Solving from Context',
      content:
        '**Problem-solving strategy:**\n1. Define your variable clearly (e.g., "Let $x$ = the number of...")\n2. Write a polynomial expression for the situation\n3. Evaluate or simplify as needed\n4. State the answer with units\n\n**Example:** A movie theatre charges $(2x + 5)$ dollars per ticket and sells $(3x - 2)$ tickets. Write a polynomial for total revenue.\n\nTotal revenue $= (2x + 5)(3x - 2)$\n$= 6x^2 - 4x + 15x - 10$\n$= 6x^2 + 11x - 10$ dollars\n\nIf $x = 10$: Revenue $= 6(100) + 11(10) - 10 = 600 + 110 - 10 = \\$700$.',
      type: 'example',
    },
    {
      id: 'bcg9-d13-c4',
      title: 'Consecutive Integers and Number Problems',
      content:
        'Many number problems use **consecutive integers** (연속 정수):\n\n- Consecutive integers: $n, \\ n+1, \\ n+2$\n- Consecutive even/odd integers: $n, \\ n+2, \\ n+4$\n\n**Example:** The sum of three consecutive integers is $66$. Find them.\n$$n + (n+1) + (n+2) = 66$$\n$$3n + 3 = 66$$\n$$3n = 63$$\n$$n = 21$$\n\nThe integers are $21, 22, 23$.\n\n**Check:** $21 + 22 + 23 = 66$ ✓',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'bcg9-d13-p1',
      type: 'short-answer',
      difficulty: 'basic',
      question:
        'A square has side length $(x + 3)$ cm. Write a polynomial expression for its perimeter.',
      answer: '$(4x + 12)$ cm',
      explanation:
        'Perimeter of a square $= 4 \\times \\text{side}$\n$= 4(x + 3) = 4x + 12$ cm',
      relatedConcept: 'bcg9-d13-c2',
    },
    {
      id: 'bcg9-d13-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question:
        'The length of a rectangle is $(2x + 1)$ and the width is $(x - 3)$. Which expression represents the area?',
      options: [
        '$2x^2 - 3$',
        '$2x^2 - 5x - 3$',
        '$3x - 2$',
        '$2x^2 + 5x - 3$',
      ],
      answer: '$2x^2 - 5x - 3$',
      explanation:
        'Area $= (2x+1)(x-3)$\n$= 2x^2 - 6x + x - 3$\n$= 2x^2 - 5x - 3$',
      relatedConcept: 'bcg9-d13-c2',
    },
    {
      id: 'bcg9-d13-p3',
      type: 'short-answer',
      difficulty: 'basic',
      question:
        'Three consecutive integers have a sum of $57$. Find the integers.',
      answer: '$18, 19, 20$',
      explanation:
        'Let the integers be $n, n+1, n+2$.\n$n + (n+1) + (n+2) = 57$\n$3n + 3 = 57$\n$3n = 54$\n$n = 18$\n\nThe integers are $18, 19, 20$.\nCheck: $18 + 19 + 20 = 57$ ✓',
      relatedConcept: 'bcg9-d13-c4',
    },
    {
      id: 'bcg9-d13-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question:
        'A rectangular field is $(5x - 2)$ m long and $(3x + 1)$ m wide. Write a simplified polynomial for its area. Then find the area when $x = 4$.',
      answer: 'Area $= 15x^2 - x - 2$; when $x = 4$, Area $= 238$ m²',
      explanation:
        'Area $= (5x-2)(3x+1)$\n$= 15x^2 + 5x - 6x - 2$\n$= 15x^2 - x - 2$\n\nWhen $x = 4$:\n$15(16) - 4 - 2 = 240 - 6 = 234$ m²\n\n(Note: $15(4)^2 - 4 - 2 = 240 - 4 - 2 = 234$ m²)',
      relatedConcept: 'bcg9-d13-c3',
    },
    {
      id: 'bcg9-d13-p5',
      type: 'multiple-choice',
      difficulty: 'applied',
      question:
        'A store sells notebooks for $(x + 2)$ dollars each and pens for $(x - 1)$ dollars each. A student buys 3 notebooks and 5 pens. Which expression gives the total cost?',
      options: [
        '$8x + 1$',
        '$8x + 4$',
        '$3x + 6 + 5x - 5$',
        '$8x + 11$',
      ],
      answer: '$8x + 1$',
      explanation:
        'Cost of notebooks: $3(x+2) = 3x + 6$\nCost of pens: $5(x-1) = 5x - 5$\n\nTotal $= 3x + 6 + 5x - 5 = 8x + 1$ dollars',
      relatedConcept: 'bcg9-d13-c1',
    },
    {
      id: 'bcg9-d13-p6',
      type: 'short-answer',
      difficulty: 'challenge',
      question:
        'A large square has side $(2x + 3)$ m. A smaller square with side $(x - 1)$ m is removed from one corner. Write a polynomial for the remaining shaded area.',
      answer: '$3x^2 + 14x + 8$ m²',
      explanation:
        'Large area: $(2x+3)^2 = 4x^2 + 12x + 9$\nSmall area: $(x-1)^2 = x^2 - 2x + 1$\n\nRemaining $= (4x^2 + 12x + 9) - (x^2 - 2x + 1)$\n$= 4x^2 + 12x + 9 - x^2 + 2x - 1$\n$= 3x^2 + 14x + 8$ m²',
      relatedConcept: 'bcg9-d13-c2',
    },
  ],
  realLifeExample:
    'A landscaper designs a garden where a square flower bed of side $(x+2)$ m sits inside a rectangular lawn of dimensions $(3x+1)$ m by $(2x+4)$ m. The grass area = lawn area − flower bed area, all expressed as polynomials. 정원 설계에서도 다항식을 이용해 면적을 계산해요.',
};

export default dayContent;
