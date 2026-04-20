import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 19,
  part: 3,
  title: '판별식과 근의 개수',
  subtitle: '$b^2 - 4ac$로 해의 존재 여부 판단하기',
  lectures: [],
  concepts: [
    {
      id: 'g3d19-c1',
      title: '판별식이란?',
      content: '$ax^2 + bx + c = 0$에서 $D = b^2 - 4ac$를 판별식이라 합니다.\\n\\n$D > 0$: 서로 다른 두 실근\\n$D = 0$: 중근 (같은 근 2개)\\n$D < 0$: 실수 해가 없음\\n\\n근호 안의 값이 양수, 0, 음수 중 어떤 것이냐에 따라 결정됩니다.',
      type: 'formula',
    },
    {
      id: 'g3d19-c2',
      title: '판별식의 활용',
      content: '해를 직접 구하지 않고도 해의 개수를 알 수 있습니다.\\n\\n예: $x^2 - 6x + 9 = 0$ → $D = 36 - 36 = 0$ → 중근\\n$x^2 + x + 1 = 0$ → $D = 1 - 4 = -3 < 0$ → 해 없음\\n$x^2 - 3x + 1 = 0$ → $D = 9 - 4 = 5 > 0$ → 두 실근',
      type: 'example',
    },
    {
      id: 'g3d19-c3',
      title: '미지수가 포함된 판별식',
      content: '$x^2 + kx + 4 = 0$이 중근을 가질 조건:\\n$D = k^2 - 16 = 0$ → $k = \\pm 4$\\n\\n$x^2 - 2x + m = 0$이 서로 다른 두 근을 가질 조건:\\n$D = 4 - 4m > 0$ → $m < 1$',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'g3d19-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$x^2 + 2x + 5 = 0$의 판별식 $D$의 값은?',
      options: ['$-16$', '$-4$', '$4$', '$24$'],
      answer: '$-16$',
      explanation: '$D = 2^2 - 4 \\times 1 \\times 5 = 4 - 20 = -16$입니다.',
    },
    {
      id: 'g3d19-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$x^2 - 4x + 4 = 0$의 근의 개수는?',
      options: ['$0$개', '$1$개(중근)', '$2$개', '무한히 많다'],
      answer: '$1$개(중근)',
      explanation: '$D = 16 - 16 = 0$이므로 중근을 가집니다. $(x-2)^2 = 0$에서 $x=2$ (중근).',
    },
    {
      id: 'g3d19-p3',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$2x^2 - 5x + 1 = 0$의 근의 개수는?',
      options: ['$0$개', '$1$개', '$2$개', '알 수 없다'],
      answer: '$2$개',
      explanation: '$D = 25 - 8 = 17 > 0$이므로 서로 다른 두 실근을 가집니다.',
    },
    {
      id: 'g3d19-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$x^2 + 6x + k = 0$이 중근을 가지도록 하는 $k$의 값은?',
      options: ['$3$', '$6$', '$9$', '$12$'],
      answer: '$9$',
      explanation: '$D = 36 - 4k = 0$이므로 $k = 9$입니다.',
    },
    {
      id: 'g3d19-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '$x^2 - 4x + m = 0$이 서로 다른 두 근을 가지려면?',
      options: ['$m < 4$', '$m > 4$', '$m = 4$', '$m \\leq 4$'],
      answer: '$m < 4$',
      explanation: '$D = 16 - 4m > 0$이므로 $m < 4$입니다.',
    },
    {
      id: 'g3d19-p6',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '$kx^2 + 4x + 1 = 0$이 실수 해를 가지지 않을 조건은? (단, $k > 0$)',
      options: ['$k > 4$', '$k < 4$', '$k = 4$', '$k \\geq 4$'],
      answer: '$k > 4$',
      explanation: '$D = 16 - 4k < 0$이므로 $k > 4$입니다.',
    },
  ],
  realLifeExample: '포물선 모양 다리의 높이가 $y = -x^2 + 6x - 10$일 때, 다리가 수면($y=0$)에 닿는지 확인하려면 판별식을 씁니다. $D = 36 - 40 = -4 < 0$이므로 수면에 닿지 않아 배가 지나갈 수 있습니다.',
};

export default dayContent;
