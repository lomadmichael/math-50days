import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 25,
  part: 4,
  title: 'Solving 1-Step Linear Equations',
  subtitle: 'Find the unknown — keep the equation balanced like a scale!',
  lectures: [],
  concepts: [
    {
      id: 'bcg8-d25-c1',
      title: 'What is a Linear Equation? (일차방정식이란?)',
      content:
        'A **linear equation (일차방정식)** has a variable (unknown) raised to the power of 1.\n\nExamples of linear equations:\n- $x + 5 = 12$\n- $y - 3 = 7$\n- $3n = 18$\n- $\\frac{x}{4} = 6$\n\nThe **solution (해)** is the value of the variable that makes the equation true.',
      type: 'definition',
    },
    {
      id: 'bcg8-d25-c2',
      title: 'The Balance Principle (저울 원리)',
      content:
        'An equation is like a balanced scale ⚖️\n\n**Whatever you do to one side, do the same to the other side!**\n\nThis is called the **balance principle (균형 원리)** or "keeping equations balanced."\n\nGoal: **isolate the variable (변수를 혼자 놔두기)** — get $x$ by itself on one side.',
      type: 'tip',
    },
    {
      id: 'bcg8-d25-c3',
      title: 'Solving Addition and Subtraction Equations (덧셈/뺄셈 방정식)',
      content:
        'Use the **opposite operation (역연산)** to undo what is done to the variable.\n\n**Example 1:** $x + 5 = 12$\nSubtract 5 from both sides: $x + 5 - 5 = 12 - 5$\n$x = 7$ ✓\n\n**Example 2:** $y - 3 = 10$\nAdd 3 to both sides: $y - 3 + 3 = 10 + 3$\n$y = 13$ ✓\n\nAlways **check** by substituting back!',
      type: 'example',
    },
    {
      id: 'bcg8-d25-c4',
      title: 'Solving Multiplication and Division Equations (곱셈/나눗셈 방정식)',
      content:
        '**Example 1:** $3n = 18$\nDivide both sides by 3: $\\frac{3n}{3} = \\frac{18}{3}$\n$n = 6$ ✓\n\n**Example 2:** $\\frac{x}{4} = 5$\nMultiply both sides by 4: $\\frac{x}{4} \\times 4 = 5 \\times 4$\n$x = 20$ ✓\n\nUndo multiplication with division, and division with multiplication.',
      type: 'formula',
    },
  ],
  problems: [
    {
      id: 'bcg8-d25-p1',
      type: 'short-answer',
      difficulty: 'basic',
      question: 'Solve: $x + 9 = 15$',
      answer: '6',
      explanation:
        'Subtract 9 from both sides:\n$x + 9 - 9 = 15 - 9$\n$x = 6$\nCheck: $6 + 9 = 15$ ✓',
    },
    {
      id: 'bcg8-d25-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: 'Solve: $4m = 28$',
      answer: '7',
      explanation:
        'Divide both sides by 4:\n$\\frac{4m}{4} = \\frac{28}{4}$\n$m = 7$\nCheck: $4(7) = 28$ ✓',
    },
    {
      id: 'bcg8-d25-p3',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: 'Which is the solution to $y - 6 = -2$?',
      options: ['$y = -8$', '$y = 4$', '$y = -4$', '$y = 8$'],
      answer: '$y = 4$',
      explanation:
        'Add 6 to both sides:\n$y - 6 + 6 = -2 + 6$\n$y = 4$\nCheck: $4 - 6 = -2$ ✓',
    },
    {
      id: 'bcg8-d25-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question:
        'You bought a book and spent $12. You now have $23 left. Write and solve an equation to find how much money $m$ you started with.',
      options: ['$m - 12 = 23$, so $m = 35$', '$m + 12 = 23$, so $m = 11$', '$12m = 23$, so $m \\approx 1.9$', '$m - 23 = 12$, so $m = 35$'],
      answer: '$m - 12 = 23$, so $m = 35$',
      explanation:
        'You started with $m$ dollars and spent $12, leaving $23.\nEquation: $m - 12 = 23$\nAdd 12: $m = 35$\nYou started with **$35**.',
    },
    {
      id: 'bcg8-d25-p5',
      type: 'short-answer',
      difficulty: 'challenge',
      question:
        'Solve: $\\frac{x}{-3} = 8$',
      answer: '-24',
      explanation:
        'Multiply both sides by $-3$:\n$x = 8 \\times (-3) = -24$\nCheck: $\\frac{-24}{-3} = 8$ ✓',
    },
  ],
  realLifeExample:
    'You split a restaurant bill equally among 4 friends, and each paid $15. Equation: $\\frac{b}{4} = 15 \\Rightarrow b = 60$. The total bill was $60! (4명이 각자 $15를 냈다면, 총 금액을 구하는 1단계 방정식이 됩니다.)',
};

export default dayContent;
