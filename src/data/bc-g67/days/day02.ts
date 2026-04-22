import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 2,
  part: 1,
  title: 'Integers — Introduction',
  subtitle: 'Positive and negative numbers on the number line (정수 도입)',
  lectures: [],
  concepts: [
    {
      id: 'bcg67-d2-c1',
      title: 'What Are Integers?',
      content: '**Integers** (정수) are all the whole numbers — positive, negative, and zero.\n\n$$\\ldots, -4, -3, -2, -1, 0, 1, 2, 3, 4, \\ldots$$\n\n- **Positive integers** (양의 정수): $1, 2, 3, 4, \\ldots$ (greater than zero)\n- **Zero**: $0$ (neither positive nor negative)\n- **Negative integers** (음의 정수): $-1, -2, -3, -4, \\ldots$ (less than zero)\n\n**Note:** Fractions like $\\frac{1}{2}$ and decimals like $1.5$ are **not** integers.\n\n**Real-life examples of negative integers:**\n- Temperature: $-10°C$ (ten degrees below zero)\n- Underground floors: $-2$ (second basement level)\n- Debt: $-\\$50$ (you owe fifty dollars)',
      type: 'definition',
    },
    {
      id: 'bcg67-d2-c2',
      title: 'The Number Line',
      content: 'A **number line** (수직선) shows integers in order from left to right.\n\n$$\\xleftarrow{\\quad} -5 \\quad -4 \\quad -3 \\quad -2 \\quad -1 \\quad 0 \\quad 1 \\quad 2 \\quad 3 \\quad 4 \\quad 5 \\xrightarrow{\\quad}$$\n\n**Key rules:**\n- Numbers get **larger** as you move **right**\n- Numbers get **smaller** as you move **left**\n- $-4$ is to the left of $-1$, so $-4 < -1$\n- $3$ is to the right of $-3$, so $3 > -3$\n\n**팁 (Tip):** Think of the number line like a thermometer. Right/up = warmer = larger number.',
      type: 'formula',
    },
    {
      id: 'bcg67-d2-c3',
      title: 'Opposite Integers and Absolute Value',
      content: '**Opposite integers** (반대 정수) are the same distance from 0, but on opposite sides.\n\n- The opposite of $5$ is $-5$\n- The opposite of $-8$ is $8$\n- The opposite of $0$ is $0$\n\n**Absolute value** (절댓값) is the **distance** from zero — always positive (or zero).\n\nWe write absolute value with vertical bars: $|\\text{number}|$\n\n$$|7| = 7 \\qquad |-7| = 7 \\qquad |0| = 0$$\n\nThink of it as "how far away from 0" — direction doesn\'t matter.',
      type: 'definition',
    },
    {
      id: 'bcg67-d2-c4',
      title: 'Comparing and Ordering Integers',
      content: 'To compare integers, always use the **number line**:\n\n**Rule:** The integer **further right** is **greater**.\n\n**Examples:**\n- $-2 > -7$ because $-2$ is to the right of $-7$\n- $0 > -5$ because $0$ is to the right of any negative number\n- $-1 < 1$ because $-1$ is to the left of $1$\n\n**Ordering from least to greatest:** $-8, -3, 0, 2, 5$\n\n**Common mistake:** Many students think $-10 > -2$ because 10 is bigger. But on the number line, $-10$ is far to the **left**, so $-10 < -2$.',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'bcg67-d2-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: 'Which of the following is an integer?',
      options: ['3.5', '-7', '¾', '0.01'],
      answer: '-7',
      explanation: '**Integers** are whole numbers (positive, negative, or zero) — no fractions or decimals.\n\n- $3.5$ → decimal, not an integer\n- $-7$ → negative whole number ✓ **integer!**\n- $\\frac{3}{4}$ → fraction, not an integer\n- $0.01$ → decimal, not an integer\n\n**힌트:** 정수는 소수나 분수가 아닌 온전한 수예요.',
      relatedConcept: 'bcg67-d2-c1',
    },
    {
      id: 'bcg67-d2-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: 'Which inequality is correct?',
      options: ['-8 > -3', '-1 > 0', '-5 < -2', '0 < -4'],
      answer: '-5 < -2',
      explanation: 'Use the number line — further right means greater:\n\n- $-8 > -3$? No, $-8$ is to the left of $-3$, so $-8 < -3$ ✗\n- $-1 > 0$? No, $-1$ is to the left of $0$, so $-1 < 0$ ✗\n- $-5 < -2$? Yes! $-5$ is to the left of $-2$ ✓\n- $0 < -4$? No, $0$ is to the right of $-4$, so $0 > -4$ ✗\n\n$$\\mathbf{-5 < -2}$$',
      relatedConcept: 'bcg67-d2-c2',
    },
    {
      id: 'bcg67-d2-p3',
      type: 'short-answer',
      difficulty: 'basic',
      question: 'What is the absolute value of -13? Write your answer as a number.',
      answer: '13',
      explanation: '**Absolute value** (절댓값) is the distance from zero, always positive.\n\n$$|-13| = 13$$\n\n$-13$ is 13 steps away from 0 on the number line, so its absolute value is $13$.',
      relatedConcept: 'bcg67-d2-c3',
    },
    {
      id: 'bcg67-d2-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: 'A submarine is at -200 m (200 metres below sea level). A fish is at -50 m. Which is deeper, and by how much?',
      options: [
        'The submarine is deeper by 150 m',
        'The fish is deeper by 150 m',
        'The submarine is deeper by 250 m',
        'They are at the same depth',
      ],
      answer: 'The submarine is deeper by 150 m',
      explanation: '"Deeper" means a more negative number (further below 0).\n\n$-200 < -50$, so the submarine is deeper.\n\nDifference: $|-200| - |-50| = 200 - 50 = 150$ metres\n\nThe **submarine** is deeper by **150 m**.\n\n**힌트:** 더 작은(더 음수인) 수가 더 깊은 곳에 있어요.',
      relatedConcept: 'bcg67-d2-c4',
    },
    {
      id: 'bcg67-d2-p5',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: 'Order these integers from least to greatest: 3, -6, 0, -1, 8, -10',
      options: [
        '-10, -6, -1, 0, 3, 8',
        '8, 3, 0, -1, -6, -10',
        '-1, -6, -10, 0, 3, 8',
        '-10, -1, -6, 0, 3, 8',
      ],
      answer: '-10, -6, -1, 0, 3, 8',
      explanation: 'Place all numbers on the number line from left (smallest) to right (largest):\n\n$$-10 < -6 < -1 < 0 < 3 < 8$$\n\nLeast to greatest: $\\mathbf{-10, -6, -1, 0, 3, 8}$\n\n**힌트:** 음수는 절댓값이 클수록 더 작은 수예요!',
      relatedConcept: 'bcg67-d2-c4',
    },
    {
      id: 'bcg67-d2-p6',
      type: 'short-answer',
      difficulty: 'challenge',
      question: 'An integer is 4 units to the right of -7 on the number line. What is the integer?',
      answer: '-3',
      explanation: 'Starting at $-7$, move **4 units to the right**:\n\n$$-7 + 4 = -3$$\n\n$$\\ldots -7 \\xrightarrow{+1} -6 \\xrightarrow{+1} -5 \\xrightarrow{+1} -4 \\xrightarrow{+1} -3 \\ldots$$\n\nThe integer is $\\mathbf{-3}$.',
      relatedConcept: 'bcg67-d2-c2',
    },
  ],
  realLifeExample:
    'In Vancouver, temperatures can drop to -5°C in winter and rise to 22°C in summer. That\'s a range of 27 degrees! Integers help us describe temperatures below zero. 밴쿠버 겨울 최저기온 -5°C는 영하 5도로, 음의 정수로 나타낼 수 있어요.',
};

export default dayContent;
