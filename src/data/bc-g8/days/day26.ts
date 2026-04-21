import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 26,
  part: 4,
  title: 'Solving 2-Step Linear Equations',
  subtitle: 'Two operations, two steps — undo them in the right order!',
  lectures: [],
  concepts: [
    {
      id: 'bcg8-d26-c1',
      title: 'What is a 2-Step Equation? (2단계 방정식이란?)',
      content:
        'A **2-step equation (2단계 방정식)** requires two operations to solve.\n\nExamples:\n- $2x + 3 = 11$ (multiply, then add)\n- $\\frac{y}{4} - 1 = 5$ (divide, then subtract)\n- $-3n + 7 = -8$ (multiply by negative, then add)\n\nTo solve, **undo the operations in reverse order** (BEDMAS backwards).',
      type: 'definition',
    },
    {
      id: 'bcg8-d26-c2',
      title: 'The 2-Step Strategy (2단계 풀이 전략)',
      content:
        'Always follow these two steps:\n\n**Step 1:** Undo addition or subtraction first\n**Step 2:** Undo multiplication or division second\n\nExample: $2x + 3 = 11$\n- Step 1: Subtract 3 from both sides → $2x = 8$\n- Step 2: Divide both sides by 2 → $x = 4$\n\nCheck: $2(4) + 3 = 8 + 3 = 11$ ✓',
      type: 'formula',
    },
    {
      id: 'bcg8-d26-c3',
      title: 'Example with Negatives (음수 포함 예제)',
      content:
        'Solve: $-3n + 7 = -8$\n\n- Step 1: Subtract 7 from both sides:\n  $-3n + 7 - 7 = -8 - 7$\n  $-3n = -15$\n- Step 2: Divide both sides by $-3$:\n  $n = \\frac{-15}{-3} = 5$\n\nCheck: $-3(5) + 7 = -15 + 7 = -8$ ✓\n\nRemember: negative ÷ negative = positive!',
      type: 'example',
    },
    {
      id: 'bcg8-d26-c4',
      title: 'Example with Fractions (분수 포함 예제)',
      content:
        'Solve: $\\frac{y}{4} - 1 = 5$\n\n- Step 1: Add 1 to both sides:\n  $\\frac{y}{4} = 6$\n- Step 2: Multiply both sides by 4:\n  $y = 24$\n\nCheck: $\\frac{24}{4} - 1 = 6 - 1 = 5$ ✓\n\nTip: Always **check your answer** by substituting it back into the original equation!',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'bcg8-d26-p1',
      type: 'short-answer',
      difficulty: 'basic',
      question: 'Solve: $3x + 4 = 19$',
      answer: '5',
      explanation:
        'Step 1: $3x + 4 - 4 = 19 - 4 \\Rightarrow 3x = 15$\nStep 2: $x = \\frac{15}{3} = 5$\nCheck: $3(5) + 4 = 19$ ✓',
    },
    {
      id: 'bcg8-d26-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: 'Solve: $\\frac{n}{2} + 6 = 10$',
      answer: '8',
      explanation:
        'Step 1: $\\frac{n}{2} = 10 - 6 = 4$\nStep 2: $n = 4 \\times 2 = 8$\nCheck: $\\frac{8}{2} + 6 = 4 + 6 = 10$ ✓',
    },
    {
      id: 'bcg8-d26-p3',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: 'Which equation has the solution $x = -2$?',
      options: ['$5x + 6 = -4$', '$5x - 6 = 4$', '$-5x + 6 = 4$', '$5x + 6 = 4$'],
      answer: '$5x + 6 = -4$',
      explanation:
        'Test $x = -2$ in $5x + 6 = -4$:\n$5(-2) + 6 = -10 + 6 = -4$ ✓\nThe others do not give $-4$ when $x = -2$.',
    },
    {
      id: 'bcg8-d26-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question:
        'A phone plan costs $10/month plus $0.25 per text. Last month you paid $17.50. Write a 2-step equation and solve for the number of texts $t$.',
      answer: '30',
      explanation:
        'Equation: $0.25t + 10 = 17.50$\nStep 1: $0.25t = 7.50$\nStep 2: $t = \\frac{7.50}{0.25} = 30$\nYou sent **30 texts**.',
    },
    {
      id: 'bcg8-d26-p5',
      type: 'short-answer',
      difficulty: 'challenge',
      question:
        'Solve: $-\\frac{2}{3}x + 5 = -1$',
      answer: '9',
      explanation:
        'Step 1: $-\\frac{2}{3}x = -1 - 5 = -6$\nStep 2: Multiply both sides by $-\\frac{3}{2}$:\n$x = -6 \\times (-\\frac{3}{2}) = \\frac{18}{2} = 9$\nCheck: $-\\frac{2}{3}(9) + 5 = -6 + 5 = -1$ ✓',
    },
  ],
  realLifeExample:
    'You worked $h$ hours and earned $12 per hour. After buying lunch for $8, you had $28 left. Equation: $12h - 8 = 28 \\Rightarrow h = 3$. You worked 3 hours! (시급 $12에서 점심값 $8을 빼고 $28이 남았다면? 2단계 방정식으로 근무 시간을 구합니다.)',
};

export default dayContent;
