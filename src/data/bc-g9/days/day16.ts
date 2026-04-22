import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 16,
  part: 3,
  title: 'Equations with Fractions and Decimals',
  subtitle: 'Clear fractions by multiplying by the LCD, and convert decimals to integers before solving.',
  lectures: [],
  concepts: [
    {
      id: 'bcg9-d16-c1',
      title: 'Solving Equations with Fractions',
      content:
        'To solve equations with **fractions** (분수 방정식), multiply every term by the **LCD** (Lowest Common Denominator, 최소공배수) to **clear the fractions**.\n\n**Example:** Solve $\\dfrac{x}{3} + 2 = \\dfrac{x}{4} + 5$\n\nLCD of 3 and 4 is 12. Multiply every term by 12:\n$$12 \\cdot \\frac{x}{3} + 12 \\cdot 2 = 12 \\cdot \\frac{x}{4} + 12 \\cdot 5$$\n$$4x + 24 = 3x + 60$$\n$$4x - 3x = 60 - 24$$\n$$x = 36$$\n\n**Check:** $\\dfrac{36}{3} + 2 = 14$; $\\dfrac{36}{4} + 5 = 14$ ✓',
      type: 'formula',
    },
    {
      id: 'bcg9-d16-c2',
      title: 'Finding the LCD',
      content:
        '**LCD** (최소공분모) is the smallest number divisible by all denominators.\n\n**Method — List multiples or prime factor:**\n\n| Denominators | LCD |\n|---|---|\n| 2 and 3 | 6 |\n| 4 and 6 | 12 |\n| 2, 3, and 5 | 30 |\n| 6 and 9 | 18 |\n\n**Example:** $\\dfrac{x}{6} - \\dfrac{x+1}{4} = 1$\n\nLCD $= 12$:\n$$12 \\cdot \\frac{x}{6} - 12 \\cdot \\frac{x+1}{4} = 12 \\cdot 1$$\n$$2x - 3(x+1) = 12$$\n$$2x - 3x - 3 = 12$$\n$$-x = 15$$\n$$x = -15$$\n\n**Important:** When multiplying a fraction by LCD, the denominator cancels completely.',
      type: 'formula',
    },
    {
      id: 'bcg9-d16-c3',
      title: 'Solving Equations with Decimals',
      content:
        'To solve equations with **decimals** (소수 방정식), multiply every term by a power of 10 to **convert to integers**.\n\n**Rule:** Multiply by $10^n$ where $n$ is the number of decimal places.\n\n**Example:** Solve $0.3x + 0.7 = 1.6$\n\nMultiply every term by 10:\n$$3x + 7 = 16$$\n$$3x = 9$$\n$$x = 3$$\n\n**Example:** Solve $0.25x - 0.5 = 0.75x + 1$\n\nMultiply by 100:\n$$25x - 50 = 75x + 100$$\n$$-50 - 100 = 75x - 25x$$\n$$-150 = 50x$$\n$$x = -3$$',
      type: 'example',
    },
    {
      id: 'bcg9-d16-c4',
      title: 'Mixed Fractions and Whole Numbers',
      content:
        'Sometimes an equation has a mix of fractions and whole numbers.\n\n**Example:** Solve $\\dfrac{2x - 1}{5} = 3$\n\nMultiply both sides by 5:\n$$2x - 1 = 15$$\n$$2x = 16$$\n$$x = 8$$\n\n**Example:** Solve $2 - \\dfrac{3x}{4} = \\dfrac{x}{2}$\n\nMultiply by 4:\n$$8 - 3x = 2x$$\n$$8 = 5x$$\n$$x = \\frac{8}{5} = 1.6$$\n\n**Note:** Answers can be fractions — leave as $\\dfrac{8}{5}$ or write as $1.6$.',
      type: 'example',
    },
  ],
  problems: [
    {
      id: 'bcg9-d16-p1',
      type: 'short-answer',
      difficulty: 'basic',
      question: 'Solve: $\\dfrac{x}{5} + 3 = 7$',
      answer: '$x = 20$',
      explanation:
        'Subtract 3: $\\dfrac{x}{5} = 4$\nMultiply by 5: $x = 20$\n\nCheck: $\\dfrac{20}{5} + 3 = 4 + 3 = 7$ ✓',
      relatedConcept: 'bcg9-d16-c1',
    },
    {
      id: 'bcg9-d16-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: 'Solve: $0.4x - 1.2 = 2.8$',
      answer: '$x = 10$',
      explanation:
        'Multiply by 10: $4x - 12 = 28$\n$4x = 40$\n$x = 10$\n\nCheck: $0.4(10) - 1.2 = 4 - 1.2 = 2.8$ ✓',
      relatedConcept: 'bcg9-d16-c3',
    },
    {
      id: 'bcg9-d16-p3',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: 'What is the LCD for the equation $\\dfrac{x}{4} + \\dfrac{x}{6} = 5$?',
      options: ['$10$', '$12$', '$24$', '$4$'],
      answer: '$12$',
      explanation:
        'The LCD of 4 and 6:\nMultiples of 4: 4, 8, **12**, 16...\nMultiples of 6: 6, **12**, 18...\n\nLCD = 12',
      relatedConcept: 'bcg9-d16-c2',
    },
    {
      id: 'bcg9-d16-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question: 'Solve: $\\dfrac{x}{4} + \\dfrac{x}{6} = 5$',
      answer: '$x = 12$',
      explanation:
        'LCD = 12. Multiply every term by 12:\n$3x + 2x = 60$\n$5x = 60$\n$x = 12$\n\nCheck: $\\dfrac{12}{4} + \\dfrac{12}{6} = 3 + 2 = 5$ ✓',
      relatedConcept: 'bcg9-d16-c2',
    },
    {
      id: 'bcg9-d16-p5',
      type: 'short-answer',
      difficulty: 'applied',
      question: 'Solve: $\\dfrac{x+3}{2} - \\dfrac{x-1}{3} = 2$',
      answer: '$x = 3$',
      explanation:
        'LCD = 6. Multiply by 6:\n$3(x+3) - 2(x-1) = 12$\n$3x + 9 - 2x + 2 = 12$\n$x + 11 = 12$\n$x = 1$\n\n(Check: $\\frac{4}{2} - \\frac{0}{3} = 2 - 0 = 2$ ✓ so $x=1$)',
      relatedConcept: 'bcg9-d16-c2',
    },
    {
      id: 'bcg9-d16-p6',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: 'Solve: $0.5(x - 4) = 0.25(x + 8)$',
      options: ['$x = 0$', '$x = 8$', '$x = 12$', '$x = 16$'],
      answer: '$x = 12$',
      explanation:
        'Multiply by 100 (or 4):\n$50(x-4) = 25(x+8)$\n$50x - 200 = 25x + 200$\n$25x = 400$\n$x = 16$\n\nCheck: $0.5(16-4) = 0.5(12) = 6$; $0.25(16+8) = 0.25(24) = 6$ ✓ So $x = 16$.',
      relatedConcept: 'bcg9-d16-c3',
    },
  ],
  realLifeExample:
    'When calculating medication dosages, nurses use equations like $\\dfrac{d}{250} = \\dfrac{2}{5}$ to find the correct dose $d$ in mL. Clearing the fraction gives $d = 100$ mL. Fraction equations are critical in healthcare and chemistry calculations. 의약품 용량 계산에도 분수 방정식이 꼭 필요해요.',
};

export default dayContent;
