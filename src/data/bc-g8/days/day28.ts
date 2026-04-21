import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 28,
  part: 5,
  title: 'Tree Diagrams',
  subtitle: 'Map out every possible outcome with a clear visual tree!',
  lectures: [],
  concepts: [
    {
      id: 'bcg8-d28-c1',
      title: 'What is a Tree Diagram? (수형도란?)',
      content:
        'A **tree diagram (수형도)** is a visual tool to list all possible **outcomes (결과)** of a compound event.\n\n- Each **branch** represents one possible outcome\n- At each stage, new branches split off\n- Read across all branches from left to right to find each complete outcome\n\nTree diagrams help you count outcomes without missing any!',
      type: 'definition',
    },
    {
      id: 'bcg8-d28-c2',
      title: 'Building a Tree Diagram (수형도 그리기)',
      content:
        'Example: Flip a coin, then roll a die (1–3 only).\n\n```\nFlip          Roll      Outcome\n         ┌── 1 ──→  H1\n    H ───┤── 2 ──→  H2\n         └── 3 ──→  H3\n\n         ┌── 1 ──→  T1\n    T ───┤── 2 ──→  T2\n         └── 3 ──→  T3\n```\n\nTotal outcomes: $2 \\times 3 = 6$\n\nThe **Counting Principle (곱셈 원리)**: multiply the number of choices at each stage.',
      type: 'example',
    },
    {
      id: 'bcg8-d28-c3',
      title: 'Finding Probability from a Tree (수형도로 확률 구하기)',
      content:
        'Count the **favorable outcomes (유리한 결과)** and divide by the **total outcomes (전체 결과)**.\n\nFrom the coin-and-die example:\n$P(\\text{Heads and even number}) = ?$\n\nFavorable outcomes: H2 → 1 outcome\nTotal outcomes: 6\n\n$P(\\text{H and even}) = \\frac{1}{6}$',
      type: 'formula',
    },
    {
      id: 'bcg8-d28-c4',
      title: 'Counting Principle (곱셈 원리)',
      content:
        'You do NOT always need to draw the full tree — use the **Counting Principle**:\n\nIf event 1 has $m$ outcomes and event 2 has $n$ outcomes, then the compound event has $m \\times n$ total outcomes.\n\nExample: Choose a shirt (3 colors) and pants (4 styles):\n$3 \\times 4 = 12$ different outfits total!\n\nThis works for 3 or more events too: $m \\times n \\times p \\times ...$',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'bcg8-d28-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question:
        'You flip a coin twice. How many total outcomes are there? (Draw a tree diagram to help.)',
      options: ['2', '4', '6', '8'],
      answer: '4',
      explanation:
        'First flip: H or T (2 outcomes)\nSecond flip: H or T (2 outcomes)\nTotal: $2 \\times 2 = 4$ outcomes: HH, HT, TH, TT',
    },
    {
      id: 'bcg8-d28-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question:
        'A lunch menu has 3 soups and 4 sandwiches. How many different soup-and-sandwich combinations are possible?',
      answer: '12',
      explanation:
        'Using the Counting Principle: $3 \\times 4 = 12$ combinations.\nYou could draw a tree with 3 branches for soup, each splitting into 4 branches for sandwich.',
    },
    {
      id: 'bcg8-d28-p3',
      type: 'multiple-choice',
      difficulty: 'basic',
      question:
        'A coin is flipped twice. What is $P(\\text{at least one Head})$?',
      options: ['$\\frac{1}{4}$', '$\\frac{1}{2}$', '$\\frac{3}{4}$', '$1$'],
      answer: '$\\frac{3}{4}$',
      explanation:
        'All outcomes: HH, HT, TH, TT (4 total)\nAt least one Head: HH, HT, TH (3 outcomes)\n$P = \\frac{3}{4}$\n\nAlternative: $P(\\text{at least one Head}) = 1 - P(\\text{no Heads}) = 1 - \\frac{1}{4} = \\frac{3}{4}$',
    },
    {
      id: 'bcg8-d28-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question:
        'A school offers 2 math courses, 3 science courses, and 2 electives. How many different course combinations of one from each subject are possible?',
      answer: '12',
      explanation:
        'Counting Principle: $2 \\times 3 \\times 2 = 12$ combinations.\nTree would have 2 branches → each splits 3 ways → each splits 2 ways: $2 \\times 3 \\times 2 = 12$.',
    },
    {
      id: 'bcg8-d28-p5',
      type: 'short-answer',
      difficulty: 'challenge',
      question:
        'A bag has 2 red (R) and 1 blue (B) ball. You draw one ball, do NOT replace it, and draw again. Draw a tree diagram (in your head) and find $P(\\text{both red})$.',
      answer: '1/3',
      explanation:
        'First draw: R, R, or B (3 balls equally likely)\n\nIf first is R1: second can be R2 or B → 2 outcomes\nIf first is R2: second can be R1 or B → 2 outcomes\nIf first is B: second can be R1 or R2 → 2 outcomes\n\nTotal outcomes: 6\nBoth red: (R1,R2) and (R2,R1) → 2 outcomes\n$P = \\frac{2}{6} = \\frac{1}{3}$',
    },
  ],
  realLifeExample:
    'Video game designers use tree diagrams to plan all possible player choices and game outcomes. A simple game with 3 decisions and 2 choices each has $2^3 = 8$ possible story paths! (게임 개발자들이 스토리 분기를 설계할 때 수형도를 씁니다. 3번 선택, 각 2가지 = 총 8가지 결말!)',
};

export default dayContent;
