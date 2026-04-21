import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 2,
  part: 1,
  title: 'Square Roots — Introduction',
  subtitle: 'The opposite of squaring: what number times itself gives you this?',
  lectures: [],
  concepts: [
    {
      id: 'bcg8-d2-c1',
      title: 'What is a Square Root?',
      content: 'The **square root** (제곱근) of a number $n$ is the value that, when multiplied by itself, gives $n$.\n\nWe write it using the **radical symbol** (근호) $\\sqrt{\\phantom{x}}$:\n\n$$\\sqrt{n} = x \\quad \\text{means} \\quad x \\times x = n$$\n\nFor example:\n- $\\sqrt{9} = 3$ because $3 \\times 3 = 9$\n- $\\sqrt{25} = 5$ because $5 \\times 5 = 25$\n- $\\sqrt{100} = 10$ because $10 \\times 10 = 100$\n\nSquare root is the **inverse operation** (역연산) of squaring.',
      type: 'definition',
    },
    {
      id: 'bcg8-d2-c2',
      title: 'Square Roots of Perfect Squares',
      content: 'Every perfect square has a **whole number** square root:\n\n$$\\begin{array}{c|c}\n\\text{Perfect Square} & \\text{Square Root} \\\\ \\hline\n1 & \\sqrt{1} = 1 \\\\\n4 & \\sqrt{4} = 2 \\\\\n9 & \\sqrt{9} = 3 \\\\\n16 & \\sqrt{16} = 4 \\\\\n25 & \\sqrt{25} = 5 \\\\\n36 & \\sqrt{36} = 6 \\\\\n49 & \\sqrt{49} = 7 \\\\\n64 & \\sqrt{64} = 8 \\\\\n81 & \\sqrt{81} = 9 \\\\\n100 & \\sqrt{100} = 10 \\\\\n121 & \\sqrt{121} = 11 \\\\\n144 & \\sqrt{144} = 12 \\\\\n\\end{array}$$\n\n**팁**: 이 표를 외워두면 제곱근 계산이 훨씬 빨라져요!',
      type: 'formula',
    },
    {
      id: 'bcg8-d2-c3',
      title: 'Positive Square Root vs. Negative Square Root',
      content: 'Technically, every positive number has **two** square roots: one positive and one negative.\n\nFor example: $3 \\times 3 = 9$ AND $(-3) \\times (-3) = 9$\n\nSo both $3$ and $-3$ are square roots of $9$.\n\nHowever, in BC Grade 8, when we write $\\sqrt{9}$, we always mean the **positive (principal) square root**:\n$$\\sqrt{9} = 3 \\quad (\\text{not } -3)$$\n\n**경고**: In problems, $\\sqrt{n}$ always refers to the positive answer unless stated otherwise!',
      type: 'warning',
    },
    {
      id: 'bcg8-d2-c4',
      title: 'Squaring and Square Rooting Cancel Each Other',
      content: 'Squaring and taking a square root are **inverse operations** — they undo each other:\n\n$$\\sqrt{n^2} = n \\quad (\\text{for positive } n)$$\n$$(\\sqrt{n})^2 = n$$\n\nExamples:\n- $\\sqrt{7^2} = \\sqrt{49} = 7$\n- $(\\sqrt{16})^2 = 4^2 = 16$\n- $\\sqrt{5^2} = 5$\n\nThink of it like addition and subtraction: $+3$ and $-3$ undo each other, so $\\sqrt{\\phantom{x}}$ and $^2$ undo each other.\n\n**유용한 팁**: 제곱하고 제곱근 하면 원래 수로 돌아와요!',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'bcg8-d2-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: 'What is $\\sqrt{64}$?',
      options: ['6', '7', '8', '9'],
      answer: '8',
      explanation: '$\\sqrt{64} = 8$ because $8 \\times 8 = 64$.\n\nVerify: $8^2 = 64$ ✓\n\n**힌트**: 어떤 수를 두 번 곱하면 64가 될까요?',
      relatedConcept: 'bcg8-d2-c2',
    },
    {
      id: 'bcg8-d2-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: 'Calculate $\\sqrt{144}$.',
      answer: '12',
      explanation: '$\\sqrt{144} = 12$ because $12 \\times 12 = 144$.\n\n**힌트**: 144는 완전제곱수예요. $12^2 = 144$!',
      relatedConcept: 'bcg8-d2-c2',
    },
    {
      id: 'bcg8-d2-p3',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: 'Which expression equals 5?',
      options: ['$\\sqrt{10}$', '$\\sqrt{20}$', '$\\sqrt{25}$', '$\\sqrt{30}$'],
      answer: '$\\sqrt{25}$',
      explanation: '$\\sqrt{25} = 5$ because $5 \\times 5 = 25$.\n\n$\\sqrt{10} \\approx 3.16$, $\\sqrt{20} \\approx 4.47$, $\\sqrt{30} \\approx 5.48$ — none of these equal exactly 5.\n\n**힌트**: $5^2$을 계산해 보세요.',
      relatedConcept: 'bcg8-d2-c1',
    },
    {
      id: 'bcg8-d2-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question: 'A square pool has an area of 121 square metres. What is the side length of the pool?',
      answer: '11 m',
      explanation: 'Area $= \\text{side}^2$\n$121 = \\text{side}^2$\n$\\text{side} = \\sqrt{121} = 11$\n\nThe side length is **11 metres**.\n\n**힌트**: 정사각형 넓이를 알 때 한 변 길이 = 넓이의 제곱근!',
      relatedConcept: 'bcg8-d2-c1',
    },
    {
      id: 'bcg8-d2-p5',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: 'Which of the following is correct?',
      options: [
        '$(\\sqrt{36})^2 = 6$',
        '$(\\sqrt{36})^2 = 18$',
        '$(\\sqrt{36})^2 = 36$',
        '$(\\sqrt{36})^2 = 72$',
      ],
      answer: '$(\\sqrt{36})^2 = 36$',
      explanation: '$(\\sqrt{36})^2 = 36$ because squaring and square rooting are inverse operations — they cancel each other!\n\n$\\sqrt{36} = 6$, and $6^2 = 36$. ✓\n\n**핵심**: $(\\sqrt{n})^2 = n$ 항상 성립해요.',
      relatedConcept: 'bcg8-d2-c4',
    },
  ],
  realLifeExample: 'When you know the area of a square room, you use a square root to find the side length. A 49 m² room has sides of $\\sqrt{49} = 7$ metres. 넓이를 알면 제곱근으로 한 변의 길이를 구할 수 있어요!',
};

export default dayContent;
