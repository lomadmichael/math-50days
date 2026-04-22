import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 4,
  part: 1,
  title: 'Multiplying and Dividing Integers',
  subtitle: 'Sign rules for products and quotients of positive and negative numbers (정수 곱셈·나눗셈)',
  lectures: [],
  concepts: [
    {
      id: 'bcg67-d4-c1',
      title: 'Sign Rules for Multiplication',
      content: 'Multiplying integers follows simple sign rules:\n\n$$\\begin{array}{c|c}\n\\text{Signs} & \\text{Result} \\\\ \\hline\n+ \\times + & + \\text{ (positive)} \\\\\n+ \\times - & - \\text{ (negative)} \\\\\n- \\times + & - \\text{ (negative)} \\\\\n- \\times - & + \\text{ (positive)}\n\\end{array}$$\n\n**Memory trick:** Same signs → **positive**. Different signs → **negative**.\n\n**Examples:**\n$$3 \\times 4 = 12 \\qquad 3 \\times (-4) = -12$$\n$$(-3) \\times 4 = -12 \\qquad (-3) \\times (-4) = 12$$\n\n**Why does $(-) \\times (-) = +$?** Think of it as "the opposite of the opposite". If owing $5$ is $-5$, then "the opposite of owing $5$" is **having** $5$.',
      type: 'formula',
    },
    {
      id: 'bcg67-d4-c2',
      title: 'Sign Rules for Division',
      content: 'Division follows the **exact same sign rules** as multiplication:\n\n$$\\begin{array}{c|c}\n\\text{Signs} & \\text{Result} \\\\ \\hline\n+ \\div + & + \\\\\n+ \\div - & - \\\\\n- \\div + & - \\\\\n- \\div - & +\n\\end{array}$$\n\n**Examples:**\n$$20 \\div 4 = 5 \\qquad 20 \\div (-4) = -5$$\n$$(-20) \\div 4 = -5 \\qquad (-20) \\div (-4) = 5$$\n\n**Quick check:** Since multiplication and division are inverse operations, if $(-3) \\times (-4) = 12$, then $12 \\div (-3) = -4$.',
      type: 'formula',
    },
    {
      id: 'bcg67-d4-c3',
      title: 'Multiplying More Than Two Integers',
      content: 'When multiplying more than two integers, **count the negative signs**:\n\n- **Even** number of negative signs → **positive** result\n- **Odd** number of negative signs → **negative** result\n\n**Example 1:** $(-2) \\times (-3) \\times (-1)$\n→ Three negatives (odd) → **negative**\n$$(-2) \\times (-3) \\times (-1) = 6 \\times (-1) = -6$$\n\n**Example 2:** $(-2) \\times (-3) \\times (-1) \\times (-2)$\n→ Four negatives (even) → **positive**\n$$(-2) \\times (-3) \\times (-1) \\times (-2) = 6 \\times 2 = 12$$\n\n**팁:** Just count the minus signs before doing any arithmetic!',
      type: 'tip',
    },
    {
      id: 'bcg67-d4-c4',
      title: 'Zero in Multiplication and Division',
      content: '**Multiplying by zero:**\n$$n \\times 0 = 0 \\quad \\text{for any integer } n$$\n\n**Dividing zero:**\n$$0 \\div n = 0 \\quad \\text{for any non-zero integer } n$$\n\n**Dividing by zero:**\n$$n \\div 0 = \\text{undefined (정의되지 않음)}$$\n\nDivision by zero is **impossible** — you cannot split something into 0 equal groups.\n\n**Examples:**\n$$(-7) \\times 0 = 0$$\n$$0 \\div (-5) = 0$$\n$$8 \\div 0 = \\text{undefined}$$',
      type: 'warning',
    },
  ],
  problems: [
    {
      id: 'bcg67-d4-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: 'Calculate: $(-8) \\times 5$',
      options: ['-40', '-3', '3', '40'],
      answer: '-40',
      explanation: 'Different signs: positive $\\times$ negative = **negative**.\n\n$$8 \\times 5 = 40$$\n$$(-8) \\times 5 = -40$$\n\n**힌트:** 부호가 다르면 → 음수!',
      relatedConcept: 'bcg67-d4-c1',
    },
    {
      id: 'bcg67-d4-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: 'Calculate: $(-36) \\div (-9)$',
      options: ['-4', '-3', '3', '4'],
      answer: '4',
      explanation: 'Same signs: negative $\\div$ negative = **positive**.\n\n$$36 \\div 9 = 4$$\n$$(-36) \\div (-9) = +4$$\n\n**힌트:** 같은 부호끼리 나누면 → 양수!',
      relatedConcept: 'bcg67-d4-c2',
    },
    {
      id: 'bcg67-d4-p3',
      type: 'short-answer',
      difficulty: 'basic',
      question: 'Calculate: $(-3) \\times (-4) \\times (-2)$',
      answer: '-24',
      explanation: 'Count the negative signs: **three** (odd) → result is **negative**.\n\n$$(-3) \\times (-4) \\times (-2)$$\n$$= 12 \\times (-2)$$\n$$= -24$$\n\n**힌트:** 음수 부호가 홀수 개 → 결과는 음수!',
      relatedConcept: 'bcg67-d4-c3',
    },
    {
      id: 'bcg67-d4-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: 'A submarine descends at a rate of 15 metres per minute. How far below the surface is it after 6 minutes? Express as a negative integer.',
      options: ['-90 m', '-21 m', '21 m', '90 m'],
      answer: '-90 m',
      explanation: 'The submarine moves $-15$ m each minute (descending = negative direction).\n\n$$(-15) \\times 6 = -90$$\n\nAfter 6 minutes, the submarine is at $\\mathbf{-90}$ **m** (90 metres below the surface).\n\n**힌트:** 하강 = 음수 방향이에요.',
      relatedConcept: 'bcg67-d4-c1',
    },
    {
      id: 'bcg67-d4-p5',
      type: 'short-answer',
      difficulty: 'applied',
      question: 'A football team loses 6 yards on each of 3 plays. What is the total change in yards? (Express as an integer.)',
      answer: '-18',
      explanation: 'Losing 6 yards = $-6$ per play.\n$$(-6) \\times 3 = -18$$\n\nThe total change is $\\mathbf{-18}$ yards (the team lost 18 yards in total).',
      relatedConcept: 'bcg67-d4-c1',
    },
    {
      id: 'bcg67-d4-p6',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: 'What is the value of $(-2)^4$?',
      options: ['-16', '-8', '8', '16'],
      answer: '16',
      explanation: '$(-2)^4 = (-2) \\times (-2) \\times (-2) \\times (-2)$\n\n**Count the negatives:** 4 negatives (even) → **positive**\n\n$$(-2) \\times (-2) = 4$$\n$$4 \\times (-2) = -8$$\n$$-8 \\times (-2) = 16$$\n\n$$(-2)^4 = \\mathbf{16}$$\n\n**주의:** $-2^4 = -(2^4) = -16$ (부호가 밖에 있으면 달라요!)',
      relatedConcept: 'bcg67-d4-c3',
    },
  ],
  realLifeExample:
    'When you film a video in reverse, each second that passes is like subtracting time. If a ball falls at 5 m/s, playing the video backward for 3 seconds shows the ball going up: $(-5) \\times (-3) = +15$ m upward. Negative × negative = positive! 영상을 거꾸로 재생하면 음수 곱하기 음수가 양수가 되는 원리와 같아요.',
};

export default dayContent;
