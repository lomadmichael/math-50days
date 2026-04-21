import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 4,
  part: 1,
  title: 'Pythagorean Theorem — Introduction',
  subtitle: 'The most famous theorem in geometry: $a^2 + b^2 = c^2$',
  lectures: [],
  concepts: [
    {
      id: 'bcg8-d4-c1',
      title: 'Right Triangles and Their Parts',
      content: 'A **right triangle** (직각삼각형) is a triangle with one angle equal to 90°.\n\nThe three sides of a right triangle have special names:\n- **Legs** (다리, 짧은 변): the two sides that form the right angle. We call them $a$ and $b$.\n- **Hypotenuse** (빗변): the longest side, always opposite the right angle. We call it $c$.\n\nThe right angle is marked with a small square (□) in diagrams.\n\n$$\\boxed{\\text{Hypotenuse is always opposite the right angle!}}$$\n\n**팁**: 빗변(hypotenuse)은 항상 가장 긴 변이에요!',
      type: 'definition',
    },
    {
      id: 'bcg8-d4-c2',
      title: 'The Pythagorean Theorem',
      content: 'For any right triangle with legs $a$ and $b$, and hypotenuse $c$:\n\n$$\\boxed{a^2 + b^2 = c^2}$$\n\nThis means: **the sum of the squares of the two legs equals the square of the hypotenuse.**\n\n**Example:** A right triangle has legs $a = 3$ and $b = 4$. Find $c$.\n$$c^2 = 3^2 + 4^2 = 9 + 16 = 25$$\n$$c = \\sqrt{25} = 5$$\n\nThe **3-4-5 triangle** is the most famous right triangle! These three numbers are called a **Pythagorean triple** (피타고라스 수).',
      type: 'formula',
    },
    {
      id: 'bcg8-d4-c3',
      title: 'Why Does It Work? (Visual Proof)',
      content: 'Imagine drawing squares on each side of a right triangle:\n- Square on leg $a$: area $= a^2$\n- Square on leg $b$: area $= b^2$\n- Square on hypotenuse $c$: area $= c^2$\n\nThe **Pythagorean Theorem** says:\n$$\\text{(Area of square on } a) + \\text{(Area of square on } b) = \\text{(Area of square on } c)$$\n\nFor the 3-4-5 triangle:\n- Square on leg 3: area = $9$ small squares\n- Square on leg 4: area = $16$ small squares\n- Square on hypotenuse 5: area = $25$ small squares\n- $9 + 16 = 25$ ✓\n\n**시각화**: 두 다리의 정사각형 넓이를 합하면 빗변의 정사각형 넓이가 돼요!',
      type: 'example',
    },
    {
      id: 'bcg8-d4-c4',
      title: 'Common Pythagorean Triples',
      content: '**Pythagorean triples** (피타고라스 수) are sets of three whole numbers that satisfy $a^2 + b^2 = c^2$:\n\n| $a$ | $b$ | $c$ |\n|-----|-----|-----|\n| 3 | 4 | 5 |\n| 5 | 12 | 13 |\n| 8 | 15 | 17 |\n| 7 | 24 | 25 |\n\nMultiples also work! $6$-$8$-$10$ (double of 3-4-5), $9$-$12$-$15$ (triple):\n$$6^2 + 8^2 = 36 + 64 = 100 = 10^2 \\checkmark$$\n\n**팁**: 시험에서 3-4-5와 5-12-13을 외워두면 계산 없이 빗변을 알 수 있어요!',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'bcg8-d4-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: 'In a right triangle, which side is the hypotenuse?',
      options: [
        'The shortest side',
        'The side opposite the right angle',
        'The side adjacent to the right angle',
        'Any of the three sides',
      ],
      answer: 'The side opposite the right angle',
      explanation: 'The **hypotenuse** is always the side opposite the 90° (right) angle, and it is always the longest side.\n\n**힌트**: "Opposite the right angle" — 직각의 맞은편 변이 빗변!',
      relatedConcept: 'bcg8-d4-c1',
    },
    {
      id: 'bcg8-d4-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: 'A right triangle has legs $a = 6$ and $b = 8$. What is $c^2$?',
      options: ['28', '100', '64', '48'],
      answer: '100',
      explanation: '$c^2 = a^2 + b^2 = 6^2 + 8^2 = 36 + 64 = 100$\n\nNote: $c = \\sqrt{100} = 10$. This is a 6-8-10 triangle (double of 3-4-5)!\n\n**힌트**: $a^2 + b^2$을 계산하면 $c^2$이에요.',
      relatedConcept: 'bcg8-d4-c2',
    },
    {
      id: 'bcg8-d4-p3',
      type: 'short-answer',
      difficulty: 'basic',
      question: 'Verify that 5, 12, 13 is a Pythagorean triple by checking whether $5^2 + 12^2 = 13^2$.',
      answer: 'Yes, because $25 + 144 = 169$',
      explanation: '$5^2 = 25$\n$12^2 = 144$\n$13^2 = 169$\n\n$25 + 144 = 169$ ✓\n\nYes, 5-12-13 is a Pythagorean triple!\n\n**팁**: 이 삼각형 꼭 외워두세요! 시험에 자주 나와요.',
      relatedConcept: 'bcg8-d4-c4',
    },
    {
      id: 'bcg8-d4-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: 'Which set of numbers is NOT a Pythagorean triple?',
      options: ['3, 4, 5', '6, 8, 10', '5, 11, 12', '8, 15, 17'],
      answer: '5, 11, 12',
      explanation: 'Check each:\n- $3^2 + 4^2 = 9 + 16 = 25 = 5^2$ ✓\n- $6^2 + 8^2 = 36 + 64 = 100 = 10^2$ ✓\n- $5^2 + 11^2 = 25 + 121 = 146 \\neq 144 = 12^2$ ✗\n- $8^2 + 15^2 = 64 + 225 = 289 = 17^2$ ✓\n\n**5, 11, 12 is NOT a Pythagorean triple** because $146 \\neq 144$.\n\n**힌트**: 가장 큰 수를 $c$로 놓고 $a^2 + b^2 = c^2$인지 확인하세요.',
      relatedConcept: 'bcg8-d4-c4',
    },
    {
      id: 'bcg8-d4-p5',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: 'A right triangle has legs $a = 9$ cm and $b = 12$ cm. Using the Pythagorean theorem, what is the correct setup to find $c$?',
      options: [
        '$c = 9 + 12$',
        '$c^2 = 9^2 + 12^2$',
        '$c^2 = 12^2 - 9^2$',
        '$c = \\sqrt{9 + 12}$',
      ],
      answer: '$c^2 = 9^2 + 12^2$',
      explanation: 'The Pythagorean theorem states $a^2 + b^2 = c^2$.\n\nWith $a = 9$ and $b = 12$:\n$c^2 = 9^2 + 12^2 = 81 + 144 = 225$\n$c = \\sqrt{225} = 15$\n\nThis is a 9-12-15 triangle (3× the 3-4-5 triple)!\n\n**힌트**: 반드시 $a^2 + b^2 = c^2$ 공식을 사용해야 해요.',
      relatedConcept: 'bcg8-d4-c2',
    },
  ],
  realLifeExample: 'Ancient Egyptians used ropes knotted at 3-4-5 intervals to make perfect right angles when building the pyramids! Today, construction workers still use the 3-4-5 rule to check corners. 수천 년 전부터 피타고라스 정리가 건축에 활용됐어요!',
};

export default dayContent;
