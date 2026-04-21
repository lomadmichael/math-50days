import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 21,
  part: 4,
  title: 'Linear Relations — Introduction',
  subtitle: 'Discover patterns in tables and rules — the foundation of linear thinking!',
  lectures: [],
  concepts: [
    {
      id: 'bcg8-d21-c1',
      title: 'What is a Linear Relation? (일차 관계란?)',
      content:
        'A **linear relation (일차 관계)** is a relationship between two variables where the change is constant.\n\nImagine saving $5 every day:\n- Day 1 → $5\n- Day 2 → $10\n- Day 3 → $15\n\nEvery time the day increases by 1, the savings increase by the same amount ($5). That constant change is the key!',
      type: 'definition',
    },
    {
      id: 'bcg8-d21-c2',
      title: 'Patterns and Tables of Values (패턴과 표)',
      content:
        'We can organize a linear relation in a **table of values (값의 표)**:\n\n| $x$ (input) | $y$ (output) |\n|---|---|\n| 1 | 3 |\n| 2 | 5 |\n| 3 | 7 |\n| 4 | 9 |\n\nNotice: each time $x$ goes up by 1, $y$ goes up by 2. This is called the **constant difference (일정한 차이)**.',
      type: 'example',
    },
    {
      id: 'bcg8-d21-c3',
      title: 'Writing a Rule (규칙 쓰기)',
      content:
        'From the table above, we can write a rule:\n\n$y = 2x + 1$\n\nCheck: when $x = 1$, $y = 2(1) + 1 = 3$ ✓\nWhen $x = 3$, $y = 2(3) + 1 = 7$ ✓\n\nThis rule (rule = 규칙) works for every row in the table!',
      type: 'formula',
    },
    {
      id: 'bcg8-d21-c4',
      title: 'How to Spot a Linear Relation (선형 관계 구별법)',
      content:
        'A relation is **linear** if the differences between consecutive $y$-values are always the same.\n\n**Linear example:**\ny values: 2, 5, 8, 11 → differences: +3, +3, +3 ✓\n\n**Not linear:**\ny values: 1, 4, 9, 16 → differences: +3, +5, +7 ✗ (not constant)',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'bcg8-d21-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question:
        'Which table of values represents a linear relation?\n\n**Table A:** x: 1,2,3,4 → y: 2,4,8,16\n**Table B:** x: 1,2,3,4 → y: 3,6,9,12',
      options: ['Table A only', 'Table B only', 'Both tables', 'Neither table'],
      answer: 'Table B only',
      explanation:
        'Table B: differences are +3, +3, +3 — constant, so it is linear.\nTable A: differences are +2, +4, +8 — not constant, so it is NOT linear (it is exponential).',
    },
    {
      id: 'bcg8-d21-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question:
        'A table shows: when $x = 1$, $y = 4$; when $x = 2$, $y = 7$; when $x = 3$, $y = 10$. What is the constant difference?',
      answer: '3',
      explanation:
        '$7 - 4 = 3$ and $10 - 7 = 3$. The constant difference (일정한 차이) is **3**.',
    },
    {
      id: 'bcg8-d21-p3',
      type: 'short-answer',
      difficulty: 'basic',
      question:
        'Complete the table for the rule $y = 3x - 1$:\n$x = 1$: $y = ?$\n$x = 2$: $y = ?$\n$x = 3$: $y = ?$',
      answer: '2, 5, 8',
      explanation:
        '$x=1$: $y = 3(1) - 1 = 2$\n$x=2$: $y = 3(2) - 1 = 5$\n$x=3$: $y = 3(3) - 1 = 8$\nSo the values are **2, 5, 8**.',
    },
    {
      id: 'bcg8-d21-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question:
        'A pizza shop charges $8 per pizza plus a $3 delivery fee. Which rule represents the total cost $y$ for $x$ pizzas?',
      options: ['$y = 3x + 8$', '$y = 8x + 3$', '$y = 8x - 3$', '$y = 11x$'],
      answer: '$y = 8x + 3$',
      explanation:
        'Each pizza costs $8, so $x$ pizzas cost $8x$. The delivery fee is a fixed $3, added on top. Total: $y = 8x + 3$.',
    },
    {
      id: 'bcg8-d21-p5',
      type: 'short-answer',
      difficulty: 'challenge',
      question:
        'The rule for a linear relation is $y = mx + b$. A table gives: $(1, 5)$ and $(3, 11)$. Find the rule.',
      answer: 'y = 3x + 2',
      explanation:
        'Constant difference: from $x=1$ to $x=3$, $y$ goes from 5 to 11, a change of 6 over 2 steps → $m = 6 \\div 2 = 3$.\nNow find $b$: $5 = 3(1) + b$ → $b = 2$.\nRule: $y = 3x + 2$.',
    },
  ],
  realLifeExample:
    'You earn $12 per hour at a part-time job. The total pay $y$ for $x$ hours is $y = 12x$ — a perfect linear relation! Every extra hour adds exactly $12. (시간당 $12를 번다면, 총 급여는 시간 수에 정비례 — 이것이 일차 관계입니다!)',
};

export default dayContent;
