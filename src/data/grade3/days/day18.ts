import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 18,
  part: 3,
  title: '근의 공식',
  subtitle: '모든 이차방정식을 풀 수 있는 만능 공식',
  lectures: [],
  concepts: [
    {
      id: 'g3d18-c1',
      title: '근의 공식',
      content: '$ax^2 + bx + c = 0$ ($a \\neq 0$)의 해:\\n\\n$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$\\n\\n이 공식은 완전제곱식 풀이법을 일반화한 것입니다.\\n인수분해가 안 되는 이차방정식도 풀 수 있습니다!',
      type: 'formula',
    },
    {
      id: 'g3d18-c2',
      title: '근의 공식 유도',
      content: '$ax^2 + bx + c = 0$에서\\n$x^2 + \\frac{b}{a}x = -\\frac{c}{a}$\\n$\\left(x + \\frac{b}{2a}\\right)^2 = \\frac{b^2 - 4ac}{4a^2}$\\n$x + \\frac{b}{2a} = \\pm\\frac{\\sqrt{b^2-4ac}}{2a}$\\n$x = \\frac{-b \\pm \\sqrt{b^2-4ac}}{2a}$',
      type: 'definition',
    },
    {
      id: 'g3d18-c3',
      title: '짝수 공식 (b가 짝수일 때)',
      content: '$b = 2b\'$일 때 더 간단한 공식:\\n$x = \\frac{-b\' \\pm \\sqrt{b\'^2 - ac}}{a}$\\n\\n예: $x^2 - 6x + 2 = 0$에서 $b\' = -3$\\n$x = \\frac{3 \\pm \\sqrt{9 - 2}}{1} = 3 \\pm \\sqrt{7}$',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'g3d18-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$x^2 + 3x + 1 = 0$의 해는?',
      options: [
        '$x = \\frac{-3 \\pm \\sqrt{5}}{2}$',
        '$x = \\frac{3 \\pm \\sqrt{5}}{2}$',
        '$x = \\frac{-3 \\pm \\sqrt{13}}{2}$',
        '$x = -3 \\pm \\sqrt{5}$',
      ],
      answer: '$x = \\frac{-3 \\pm \\sqrt{5}}{2}$',
      explanation: '$a=1, b=3, c=1$을 대입하면 $x = \\frac{-3 \\pm \\sqrt{9-4}}{2} = \\frac{-3 \\pm \\sqrt{5}}{2}$입니다.',
    },
    {
      id: 'g3d18-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$x^2 - 4x + 1 = 0$의 해는?',
      options: ['$x = 2 \\pm \\sqrt{3}$', '$x = 4 \\pm \\sqrt{3}$', '$x = 2 \\pm \\sqrt{5}$', '$x = -2 \\pm \\sqrt{3}$'],
      answer: '$x = 2 \\pm \\sqrt{3}$',
      explanation: '$x = \\frac{4 \\pm \\sqrt{16-4}}{2} = \\frac{4 \\pm \\sqrt{12}}{2} = \\frac{4 \\pm 2\\sqrt{3}}{2} = 2 \\pm \\sqrt{3}$입니다.',
    },
    {
      id: 'g3d18-p3',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$2x^2 - 3x - 1 = 0$의 해는?',
      options: [
        '$x = \\frac{3 \\pm \\sqrt{17}}{4}$',
        '$x = \\frac{-3 \\pm \\sqrt{17}}{4}$',
        '$x = \\frac{3 \\pm \\sqrt{7}}{4}$',
        '$x = \\frac{3 \\pm \\sqrt{17}}{2}$',
      ],
      answer: '$x = \\frac{3 \\pm \\sqrt{17}}{4}$',
      explanation: '$a=2, b=-3, c=-1$: $x = \\frac{3 \\pm \\sqrt{9+8}}{4} = \\frac{3 \\pm \\sqrt{17}}{4}$입니다.',
    },
    {
      id: 'g3d18-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$3x^2 + 2x - 2 = 0$의 해는?',
      options: [
        '$x = \\frac{-1 \\pm \\sqrt{7}}{3}$',
        '$x = \\frac{-2 \\pm \\sqrt{28}}{6}$',
        '$x = \\frac{1 \\pm \\sqrt{7}}{3}$',
        '$x = \\frac{-1 \\pm \\sqrt{7}}{3}$과 $x = \\frac{-2 \\pm \\sqrt{28}}{6}$ 모두',
      ],
      answer: '$x = \\frac{-1 \\pm \\sqrt{7}}{3}$',
      explanation: '$x = \\frac{-2 \\pm \\sqrt{4+24}}{6} = \\frac{-2 \\pm \\sqrt{28}}{6} = \\frac{-2 \\pm 2\\sqrt{7}}{6} = \\frac{-1 \\pm \\sqrt{7}}{3}$입니다.',
    },
    {
      id: 'g3d18-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '$x^2 - 2\\sqrt{3}x + 2 = 0$의 해는?',
      options: ['$x = \\sqrt{3} \\pm 1$', '$x = \\sqrt{3} \\pm \\sqrt{2}$', '$x = 3 \\pm 1$', '$x = \\sqrt{2} \\pm \\sqrt{3}$'],
      answer: '$x = \\sqrt{3} \\pm 1$',
      explanation: '$x = \\frac{2\\sqrt{3} \\pm \\sqrt{12-8}}{2} = \\frac{2\\sqrt{3} \\pm 2}{2} = \\sqrt{3} \\pm 1$입니다.',
    },
  ],
  realLifeExample: '브레이크를 밟은 후 자동차의 이동 거리가 $d = v_0 t - 5t^2$일 때, 시속 $v_0 = 30$m/s에서 50m를 이동하는 시간은 $5t^2 - 30t + 50 = 0$. 근의 공식으로 $t = \\frac{30 \\pm \\sqrt{900-1000}}{10}$이므로 실수 해가 없어 50m 이내에 멈춥니다.',
};

export default dayContent;
