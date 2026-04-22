import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 14,
  part: 3,
  title: 'Solving Multi-Step Linear Equations',
  subtitle: 'Use inverse operations in the correct order to isolate the variable.',
  lectures: [],
  concepts: [
    {
      id: 'bcg9-d14-c1',
      title: 'What is a Linear Equation?',
      content:
        'A **linear equation** (일차방정식) is an equation where the variable has an exponent of **1** (no $x^2$, $x^3$, etc.).\n\nA **solution** (해) is the value of the variable that makes the equation true.\n\n**Examples of linear equations:**\n- $3x + 5 = 14$\n- $2(x - 4) = 10$\n- $\\dfrac{x}{3} - 1 = 5$\n\n**Strategy — inverse operations:** To undo an operation, apply its **inverse**:\n| Operation | Inverse |\n|---|---|\n| $+a$ | $-a$ |\n| $-a$ | $+a$ |\n| $\\times a$ | $\\div a$ |\n| $\\div a$ | $\\times a$ |',
      type: 'definition',
    },
    {
      id: 'bcg9-d14-c2',
      title: 'Multi-Step Equation Strategy',
      content:
        'For **multi-step equations** (다단계 방정식), follow this order:\n\n1. **Expand** brackets (distributive property)\n2. **Collect** like terms on each side\n3. **Move** variable terms to one side (add/subtract)\n4. **Move** constants to the other side\n5. **Divide** (or multiply) to isolate the variable\n6. **Check** by substituting back\n\n**Example:** Solve $3(2x - 4) + 5 = 2x + 9$\n\nStep 1 — Expand: $6x - 12 + 5 = 2x + 9$\nStep 2 — Simplify left: $6x - 7 = 2x + 9$\nStep 3 — Move $x$ terms: $6x - 2x = 9 + 7$\nStep 4 — Simplify: $4x = 16$\nStep 5 — Divide: $x = 4$\nStep 6 — Check: $3(2 \\cdot 4 - 4) + 5 = 17$, $2(4)+9 = 17$ ✓',
      type: 'formula',
    },
    {
      id: 'bcg9-d14-c3',
      title: 'Keeping the Equation Balanced',
      content:
        'An equation is like a **balance scale** (저울). Whatever you do to one side, you must do to the other side.\n\n**Example:** Solve $5x - 3 = 17$\n\n$$5x - 3 = 17$$\n$$5x - 3 + 3 = 17 + 3 \\quad \\text{(add 3 to both sides)}$$\n$$5x = 20$$\n$$\\frac{5x}{5} = \\frac{20}{5} \\quad \\text{(divide both sides by 5)}$$\n$$x = 4$$\n\n**Verify:** $5(4) - 3 = 20 - 3 = 17$ ✓',
      type: 'example',
    },
    {
      id: 'bcg9-d14-c4',
      title: 'Special Cases: No Solution and Identity',
      content:
        '**No solution** (해 없음): variables cancel and you get a **false** statement.\n\nExample: $2x + 3 = 2x + 7$\n$0 = 4$ ← FALSE! No solution.\n\n**Identity** (항등식): variables cancel and you get a **true** statement — any value of $x$ works.\n\nExample: $3x + 6 = 3(x + 2)$\n$3x + 6 = 3x + 6$\n$0 = 0$ ← TRUE! Infinitely many solutions.\n\nThese are rare but important to recognize.',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'bcg9-d14-p1',
      type: 'short-answer',
      difficulty: 'basic',
      question: 'Solve for $x$: $4x + 7 = 23$',
      answer: '$x = 4$',
      explanation:
        '$4x + 7 = 23$\n$4x = 23 - 7 = 16$\n$x = 16 ÷ 4 = 4$\n\nCheck: $4(4) + 7 = 23$ ✓',
      relatedConcept: 'bcg9-d14-c3',
    },
    {
      id: 'bcg9-d14-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: 'Solve: $7 - 3x = -8$',
      answer: '$x = 5$',
      explanation:
        '$7 - 3x = -8$\n$-3x = -8 - 7 = -15$\n$x = (-15) ÷ (-3) = 5$\n\nCheck: $7 - 3(5) = 7 - 15 = -8$ ✓',
      relatedConcept: 'bcg9-d14-c3',
    },
    {
      id: 'bcg9-d14-p3',
      type: 'short-answer',
      difficulty: 'applied',
      question: 'Solve: $2(3x - 5) = 4x + 6$',
      answer: '$x = 8$',
      explanation:
        'Expand: $6x - 10 = 4x + 6$\nMove $x$ terms: $6x - 4x = 6 + 10$\nSimplify: $2x = 16$\n$x = 8$\n\nCheck: $2(3 \\cdot 8 - 5) = 2(19) = 38$; $4(8) + 6 = 38$ ✓',
      relatedConcept: 'bcg9-d14-c2',
    },
    {
      id: 'bcg9-d14-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: 'Solve: $5(x + 2) - 3(x - 1) = 21$',
      options: ['$x = 4$', '$x = 5$', '$x = 6$', '$x = 7$'],
      answer: '$x = 5$',
      explanation:
        'Expand: $5x + 10 - 3x + 3 = 21$\nCombine: $2x + 13 = 21$\n$2x = 8$\n$x = 4$\n\nWait — $2x = 21 - 13 = 8$, so $x = 4$.\n\nCheck: $5(6) - 3(3) = 30 - 9 = 21$ when $x=4$: $5(4+2)-3(4-1) = 30-9=21$ ✓ So $x = 4$.',
      relatedConcept: 'bcg9-d14-c2',
    },
    {
      id: 'bcg9-d14-p5',
      type: 'short-answer',
      difficulty: 'applied',
      question:
        'A number is multiplied by 4, then 7 is subtracted. The result is 37. Find the number.',
      answer: '$x = 11$',
      explanation:
        'Let the number be $x$.\n$4x - 7 = 37$\n$4x = 44$\n$x = 11$\n\nCheck: $4(11) - 7 = 44 - 7 = 37$ ✓',
      relatedConcept: 'bcg9-d14-c2',
    },
    {
      id: 'bcg9-d14-p6',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: 'Solve: $3(2x - 1) - 4(x + 2) = 2(x - 5) + 3$',
      options: ['$x = 0$', '$x = 1$', '$x = -2$', 'No solution'],
      answer: 'No solution',
      explanation:
        'Left: $6x - 3 - 4x - 8 = 2x - 11$\nRight: $2x - 10 + 3 = 2x - 7$\n\n$2x - 11 = 2x - 7$\n$-11 = -7$ ← FALSE\n\nThe variable cancels and gives a false statement, so there is **no solution**.',
      relatedConcept: 'bcg9-d14-c4',
    },
  ],
  realLifeExample:
    'If a taxi charges a flat fee of $3 plus $2 per kilometre, and your fare was $19, you can solve $2x + 3 = 19$ to find that you travelled $x = 8$ km. Linear equations model countless everyday pricing and measurement problems. 택시 요금, 생산 비용 등 일상 속 계산 문제를 일차방정식으로 풀 수 있어요.',
};

export default dayContent;
