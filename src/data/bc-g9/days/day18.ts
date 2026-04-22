import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 18,
  part: 3,
  title: 'Solving Linear Inequalities',
  subtitle: 'Apply the same steps as equations — but remember to flip the sign when multiplying or dividing by a negative number.',
  lectures: [],
  concepts: [
    {
      id: 'bcg9-d18-c1',
      title: 'Solving Inequalities Like Equations',
      content:
        'Most steps for solving inequalities are the **same** as solving equations:\n- Add or subtract the same value from both sides\n- Multiply or divide both sides by the same **positive** value\n\n**Example:** Solve $3x - 4 > 11$\n\n$$3x - 4 + 4 > 11 + 4$$\n$$3x > 15$$\n$$x > 5$$\n\n**Graph:** Open circle at 5, arrow pointing right.\n\n**Solution set** (해집합): all real numbers greater than 5. We write: $x > 5$ or in set notation $\\{x \\in \\mathbb{R} \\mid x > 5\\}$.',
      type: 'formula',
    },
    {
      id: 'bcg9-d18-c2',
      title: 'The Flip Rule — Multiplying/Dividing by a Negative',
      content:
        'The key difference from equations: when you **multiply or divide both sides by a negative number**, you must **flip (reverse) the inequality sign** (부등호 방향 전환).\n\n**Why?** Consider $3 > 1$. Multiply both sides by $-1$:\n$$-3 \\underbrace{>}_{\\text{wrong}} -1 \\quad \\text{should be} \\quad -3 < -1 \\checkmark$$\n\n**Example:** Solve $-2x + 5 \\leq 11$\n$$-2x \\leq 6$$\n$$x \\geq -3 \\quad \\text{(sign flipped: divided by } -2\\text{)}$$\n\n**Example:** Solve $-\\dfrac{x}{4} > 2$\n$$x < -8 \\quad \\text{(multiplied by } -4\\text{, sign flipped)}$$',
      type: 'formula',
    },
    {
      id: 'bcg9-d18-c3',
      title: 'Multi-Step Inequalities',
      content:
        'For **multi-step inequalities** (다단계 부등식), follow the same strategy as multi-step equations, remembering the flip rule.\n\n**Example:** Solve $3(2x - 1) \\geq 4x + 9$\n\nStep 1 — Expand:\n$$6x - 3 \\geq 4x + 9$$\n\nStep 2 — Move variables:\n$$6x - 4x \\geq 9 + 3$$\n$$2x \\geq 12$$\n\nStep 3 — Divide by positive 2 (no flip):\n$$x \\geq 6$$\n\n**Check** with $x = 6$: $3(11) = 33 \\geq 4(6)+9 = 33$ ✓\n**Check** with $x = 7$: $3(13) = 39 \\geq 37$ ✓',
      type: 'example',
    },
    {
      id: 'bcg9-d18-c4',
      title: 'Word Problems with Inequalities',
      content:
        'Many real-world problems ask for a **range** of values rather than a single answer.\n\n**Example:** You want to spend at most $50 on books. Each book costs $8, and there is a one-time shipping fee of $6. How many books $n$ can you buy?\n\n$$8n + 6 \\leq 50$$\n$$8n \\leq 44$$\n$$n \\leq 5.5$$\n\nSince $n$ must be a whole number: $n \\leq 5$.\n\nYou can buy **at most 5 books**.\n\n**Tip:** In word problems, always check whether the answer must be an integer and whether negative values make sense.',
      type: 'example',
    },
  ],
  problems: [
    {
      id: 'bcg9-d18-p1',
      type: 'short-answer',
      difficulty: 'basic',
      question: 'Solve and graph: $x + 5 < 9$',
      answer: '$x < 4$ (open circle at 4, arrow left)',
      explanation:
        '$x + 5 < 9$\n$x < 9 - 5$\n$x < 4$\n\nGraph: open circle at 4, shaded arrow pointing to the left.',
      relatedConcept: 'bcg9-d18-c1',
    },
    {
      id: 'bcg9-d18-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: 'Solve: $-4x > 20$',
      answer: '$x < -5$',
      explanation:
        'Divide both sides by $-4$ — **flip the sign**!\n$$x < \\frac{20}{-4} = -5$$\n$$x < -5$$\n\nCheck with $x = -6$: $-4(-6) = 24 > 20$ ✓\nCheck with $x = -4$: $-4(-4) = 16 > 20$? NO ✓ (correct, $-4$ should not be a solution)',
      relatedConcept: 'bcg9-d18-c2',
    },
    {
      id: 'bcg9-d18-p3',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: 'Solve: $-3x + 6 \\geq 15$',
      options: ['$x \\geq -3$', '$x \\leq -3$', '$x \\geq 3$', '$x \\leq 3$'],
      answer: '$x \\leq -3$',
      explanation:
        '$-3x + 6 \\geq 15$\n$-3x \\geq 9$\nDivide by $-3$ → **flip sign**: $x \\leq -3$\n\nCheck with $x = -4$: $-3(-4)+6 = 18 \\geq 15$ ✓\nCheck with $x = 0$: $6 \\geq 15$? NO ✓',
      relatedConcept: 'bcg9-d18-c2',
    },
    {
      id: 'bcg9-d18-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question: 'Solve: $4(x - 2) < 2x + 8$',
      answer: '$x < 8$',
      explanation:
        'Expand: $4x - 8 < 2x + 8$\n$4x - 2x < 8 + 8$\n$2x < 16$\n$x < 8$\n\nCheck with $x = 7$: $4(5) = 20 < 2(7)+8 = 22$ ✓',
      relatedConcept: 'bcg9-d18-c3',
    },
    {
      id: 'bcg9-d18-p5',
      type: 'multiple-choice',
      difficulty: 'applied',
      question:
        'A student needs at least 80 average to make the honour roll. She scored 72, 85, and 79 on three tests. What is the minimum score she needs on the 4th test?',
      options: ['$82$', '$83$', '$84$', '$85$'],
      answer: '$84$',
      explanation:
        'Let $s$ = score on 4th test.\n$$\\frac{72 + 85 + 79 + s}{4} \\geq 80$$\n$$\\frac{236 + s}{4} \\geq 80$$\n$$236 + s \\geq 320$$\n$$s \\geq 84$$\n\nShe needs at least **84** on the 4th test.',
      relatedConcept: 'bcg9-d18-c4',
    },
    {
      id: 'bcg9-d18-p6',
      type: 'short-answer',
      difficulty: 'challenge',
      question: 'Solve: $\\dfrac{2x - 5}{3} \\leq \\dfrac{x + 1}{2}$',
      answer: '$x \\leq 13$',
      explanation:
        'Multiply by LCD = 6:\n$2(2x-5) \\leq 3(x+1)$\n$4x - 10 \\leq 3x + 3$\n$4x - 3x \\leq 3 + 10$\n$x \\leq 13$\n\nCheck with $x = 13$: LHS $= \\dfrac{21}{3} = 7$; RHS $= \\dfrac{14}{2} = 7$. $7 \\leq 7$ ✓\nCheck with $x = 14$: LHS $= \\dfrac{23}{3} \\approx 7.67$; RHS $= \\dfrac{15}{2} = 7.5$. $7.67 \\leq 7.5$? NO ✓',
      relatedConcept: 'bcg9-d18-c3',
    },
  ],
  realLifeExample:
    'To stay within a budget of $200 for a party, with $50 fixed costs and each guest costing $15, solve $15n + 50 \\leq 200$ to get $n \\leq 10$. You can invite at most 10 guests. Inequalities are ideal for budget planning and resource management. 파티 예산 계획이나 자원 배분에 일차부등식이 실용적으로 활용돼요.',
};

export default dayContent;
