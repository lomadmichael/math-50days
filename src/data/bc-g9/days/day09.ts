import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 9,
  part: 2,
  title: 'Adding and Subtracting Polynomials',
  subtitle: 'Combine like terms to add and subtract polynomial expressions.',
  lectures: [],
  concepts: [
    {
      id: 'bcg9-d9-c1',
      title: 'Adding Polynomials',
      content:
        'To **add polynomials** (다항식의 덧셈), remove the brackets and combine **like terms** (동류항끼리 계산).\n\n**Example:** $(3x^2 + 5x - 2) + (x^2 - 3x + 7)$\n\nStep 1 — Remove brackets:\n$$3x^2 + 5x - 2 + x^2 - 3x + 7$$\n\nStep 2 — Group like terms:\n$$(3x^2 + x^2) + (5x - 3x) + (-2 + 7)$$\n\nStep 3 — Combine:\n$$4x^2 + 2x + 5$$\n\n**Tip:** You can also add vertically by aligning like terms in columns.',
      type: 'formula',
    },
    {
      id: 'bcg9-d9-c2',
      title: 'Subtracting Polynomials',
      content:
        'To **subtract polynomials** (다항식의 뺄셈), distribute the negative sign to every term in the second polynomial, then combine like terms.\n\n**Example:** $(4x^2 - 3x + 1) - (2x^2 + x - 5)$\n\nStep 1 — Distribute the minus sign:\n$$4x^2 - 3x + 1 \\underbrace{-2x^2 - x + 5}_{\\text{sign flipped on every term}}$$\n\nStep 2 — Group like terms:\n$$(4x^2 - 2x^2) + (-3x - x) + (1 + 5)$$\n\nStep 3 — Combine:\n$$2x^2 - 4x + 6$$\n\n**Most common error:** Forgetting to flip ALL signs inside the subtracted polynomial.',
      type: 'formula',
    },
    {
      id: 'bcg9-d9-c3',
      title: 'Vertical Method',
      content:
        'The **vertical method** (세로 계산) lines up like terms in columns — useful for longer polynomials.\n\n**Example:** $(2x^3 - x^2 + 4) - (x^3 + 3x^2 - 2x + 1)$\n\n$$\\begin{array}{r}\n2x^3 - x^2 + 0x + 4 \\\\\n-(x^3 + 3x^2 - 2x + 1) \\\\\n\\hline\nx^3 - 4x^2 + 2x + 3\n\\end{array}$$\n\n**Note:** Insert $0x$ for missing degree terms to keep columns aligned (e.g., if there\'s no $x$ term in the first polynomial).',
      type: 'example',
    },
    {
      id: 'bcg9-d9-c4',
      title: 'Simplifying Expressions with Multiple Groups',
      content:
        'When simplifying expressions with multiple groups, handle all brackets first, then collect like terms.\n\n**Example:** Simplify $(5x - 3) + 2(x + 4) - (3x - 1)$\n\nStep 1 — Expand brackets (distribute 2 and -1):\n$$5x - 3 + 2x + 8 - 3x + 1$$\n\nStep 2 — Collect like terms:\n$$(5x + 2x - 3x) + (-3 + 8 + 1)$$\n$$= 4x + 6$$\n\n**Reminder:** Only **like terms** can be combined. $4x$ and $6$ are NOT like terms.',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'bcg9-d9-p1',
      type: 'short-answer',
      difficulty: 'basic',
      question: 'Add: $(2x^2 + 3x - 1) + (x^2 - 5x + 4)$',
      answer: '$3x^2 - 2x + 3$',
      explanation:
        'Remove brackets, then combine like terms:\n$(2x^2 + x^2) + (3x - 5x) + (-1 + 4)$\n$= 3x^2 - 2x + 3$',
      relatedConcept: 'bcg9-d9-c1',
    },
    {
      id: 'bcg9-d9-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: 'Subtract: $(6x^2 - 4x + 2) - (3x^2 + x - 5)$',
      answer: '$3x^2 - 5x + 7$',
      explanation:
        'Distribute the negative sign:\n$6x^2 - 4x + 2 - 3x^2 - x + 5$\nCombine: $(6-3)x^2 + (-4-1)x + (2+5)$\n$= 3x^2 - 5x + 7$',
      relatedConcept: 'bcg9-d9-c2',
    },
    {
      id: 'bcg9-d9-p3',
      type: 'multiple-choice',
      difficulty: 'basic',
      question:
        'What is the result of $(7x - 3) - (4x + 5)$?',
      options: ['$3x - 8$', '$3x + 2$', '$11x + 2$', '$3x - 2$'],
      answer: '$3x - 8$',
      explanation:
        '$(7x - 3) - (4x + 5)$\n$= 7x - 3 - 4x - 5$\n$= (7x - 4x) + (-3 - 5)$\n$= 3x - 8$',
      relatedConcept: 'bcg9-d9-c2',
    },
    {
      id: 'bcg9-d9-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question: 'Simplify: $(3x^2 - x + 4) + (x^2 + 2x - 7) - (2x^2 - 3x + 1)$',
      answer: '$2x^2 + 4x - 4$',
      explanation:
        'Remove all brackets, distribute the last minus sign:\n$3x^2 - x + 4 + x^2 + 2x - 7 - 2x^2 + 3x - 1$\n\nCombine: $(3+1-2)x^2 + (-1+2+3)x + (4-7-1)$\n$= 2x^2 + 4x - 4$',
      relatedConcept: 'bcg9-d9-c4',
    },
    {
      id: 'bcg9-d9-p5',
      type: 'multiple-choice',
      difficulty: 'applied',
      question:
        'A rectangle has a perimeter of $(10x + 8)$ cm. One side has length $(3x - 1)$ cm. What is the length of the adjacent side?',
      options: ['$2x + 5$ cm', '$4x + 5$ cm', '$7x + 9$ cm', '$2x + 3$ cm'],
      answer: '$2x + 5$ cm',
      explanation:
        'Perimeter $= 2(l + w)$, so $l + w = \\dfrac{10x + 8}{2} = 5x + 4$\n\n$w = (5x + 4) - (3x - 1) = 5x + 4 - 3x + 1 = 2x + 5$\n\nThe adjacent side is $2x + 5$ cm.',
      relatedConcept: 'bcg9-d9-c2',
    },
    {
      id: 'bcg9-d9-p6',
      type: 'short-answer',
      difficulty: 'challenge',
      question:
        'Find the polynomial $P(x)$ such that $(2x^3 - x + 5) + P(x) = 5x^3 + 3x^2 + 2x - 1$.',
      answer: '$3x^3 + 3x^2 + 3x - 6$',
      explanation:
        '$P(x) = (5x^3 + 3x^2 + 2x - 1) - (2x^3 - x + 5)$\n$= 5x^3 + 3x^2 + 2x - 1 - 2x^3 + x - 5$\n$= (5-2)x^3 + 3x^2 + (2+1)x + (-1-5)$\n$= 3x^3 + 3x^2 + 3x - 6$',
      relatedConcept: 'bcg9-d9-c2',
    },
  ],
  realLifeExample:
    'In construction, the total cost of building two sections of a house might be $(5000x + 12000)$ and $(3000x - 2000)$ dollars, where $x$ is the number of windows. Adding these gives $8000x + 10000$ — the total cost. 건설 현장에서 비용 계산에 다항식 덧셈이 사용돼요.',
};

export default dayContent;
