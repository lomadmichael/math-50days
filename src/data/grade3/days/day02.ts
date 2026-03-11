import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 2,
  part: 1,
  title: '제곱근의 성질',
  subtitle: '$\\\\sqrt{a^2}=|a|$와 제곱근의 핵심 성질',
  lectures: [],
  concepts: [
    {
      id: 'g3d2-c1',
      title: '제곱근의 핵심 성질',
      content: '① $(\\\\sqrt{a})^2 = a$ (단, $a \\\\geq 0$)\\n② $(-\\\\sqrt{a})^2 = a$ (단, $a \\\\geq 0$)\\n③ $\\\\sqrt{a^2} = |a|$ (모든 실수 $a$에 대해)\\n\\n$\\\\sqrt{a^2} = |a|$가 핵심! $a$가 음수일 수도 있으므로 절댓값을 씌웁니다.',
      type: 'formula',
    },
    {
      id: 'g3d2-c2',
      title: '√(a²) = |a|의 이해',
      content: '$\\\\sqrt{3^2} = \\\\sqrt{9} = 3 = |3|$\\n$\\\\sqrt{(-3)^2} = \\\\sqrt{9} = 3 = |-3|$\\n$\\\\sqrt{(-5)^2} = \\\\sqrt{25} = 5 = |-5|$\\n\\n$\\\\sqrt{a^2}$는 항상 0 이상의 수가 됩니다.',
      type: 'example',
    },
    {
      id: 'g3d2-c3',
      title: '제곱근의 대소 관계',
      content: '$a > 0$, $b > 0$일 때:\\n$a > b$이면 $\\\\sqrt{a} > \\\\sqrt{b}$\\n$\\\\sqrt{a} > \\\\sqrt{b}$이면 $a > b$\\n\\n예: $\\\\sqrt{5}$와 $\\\\sqrt{3}$의 크기 비교 → $5 > 3$이므로 $\\\\sqrt{5} > \\\\sqrt{3}$',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'g3d2-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$\\\\sqrt{(-7)^2}$의 값은?',
      options: ['$-7$', '$7$', '$49$', '$\\\\pm 7$'],
      answer: '$7$',
      explanation: '$\\\\sqrt{(-7)^2} = |-7| = 7$입니다.',
    },
    {
      id: 'g3d2-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$(\\\\sqrt{11})^2$의 값은?',
      options: ['$\\\\sqrt{11}$', '$11$', '$121$', '$\\\\pm 11$'],
      answer: '$11$',
      explanation: '$(\\\\sqrt{11})^2 = 11$입니다. 제곱근을 제곱하면 원래 수가 됩니다.',
    },
    {
      id: 'g3d2-p3',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$a < 0$일 때, $\\\\sqrt{a^2}$를 간단히 하면?',
      options: ['$a$', '$-a$', '$|a|$', '$a^2$'],
      answer: '$-a$',
      explanation: '$\\\\sqrt{a^2} = |a|$이고, $a < 0$이면 $|a| = -a$이므로 $\\\\sqrt{a^2} = -a$입니다.',
    },
    {
      id: 'g3d2-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$\\\\sqrt{7}$, $3$, $\\\\sqrt{10}$을 작은 것부터 나열하면?',
      options: [
        '$\\\\sqrt{7} < 3 < \\\\sqrt{10}$',
        '$\\\\sqrt{7} < \\\\sqrt{10} < 3$',
        '$3 < \\\\sqrt{7} < \\\\sqrt{10}$',
        '$\\\\sqrt{10} < \\\\sqrt{7} < 3$',
      ],
      answer: '$\\\\sqrt{7} < 3 < \\\\sqrt{10}$',
      explanation: '$\\\\sqrt{7} \\\\approx 2.65$, $3 = \\\\sqrt{9}$, $\\\\sqrt{10} \\\\approx 3.16$이므로 $\\\\sqrt{7} < 3 < \\\\sqrt{10}$입니다.',
    },
    {
      id: 'g3d2-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '$\\\\sqrt{(x-3)^2} = 3-x$가 성립하려면 $x$의 범위는?',
      options: ['$x > 3$', '$x \\\\geq 3$', '$x < 3$', '$x \\\\leq 3$'],
      answer: '$x \\\\leq 3$',
      explanation: '$\\\\sqrt{(x-3)^2} = |x-3|$이고 이것이 $3-x = -(x-3)$와 같으려면 $x-3 \\\\leq 0$, 즉 $x \\\\leq 3$이어야 합니다.',
    },
  ],
  realLifeExample: '스마트폰 화면의 대각선 길이를 구할 때 피타고라스 정리를 사용합니다. 가로 12cm, 세로 5cm인 화면의 대각선은 $\\\\sqrt{12^2 + 5^2} = \\\\sqrt{169} = 13$cm입니다. 이때 제곱근의 성질이 활용됩니다.',
};

export default dayContent;
