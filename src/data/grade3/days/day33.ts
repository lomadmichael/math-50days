import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 33,
  part: 5,
  title: '삼각비의 표와 예각 삼각비',
  subtitle: '삼각비의 표 읽기와 역으로 각도 구하기',
  lectures: [],
  concepts: [
    {
      id: 'g3d33-c1',
      title: '삼각비의 표 사용법',
      content: '삼각비의 표에서 각도에 대응하는 $\\\\sin$, $\\\\cos$, $\\\\tan$ 값을 읽습니다.\\n예) $\\\\sin 37° \\\\approx 0.6018$, $\\\\cos 37° \\\\approx 0.7986$, $\\\\tan 37° \\\\approx 0.7536$\\n\\n역으로, 삼각비 값이 주어지면 표에서 각도를 찾을 수 있습니다.\\n예) $\\\\sin A = 0.5$ → $A = 30°$',
      type: 'definition',
    },
    {
      id: 'g3d33-c2',
      title: '여각의 관계',
      content: '두 예각 $A$, $B$가 $A + B = 90°$일 때 (여각):\\n$\\\\sin A = \\\\cos B$, $\\\\cos A = \\\\sin B$\\n$\\\\sin A = \\\\cos(90° - A)$\\n$\\\\cos A = \\\\sin(90° - A)$\\n\\n예) $\\\\sin 30° = \\\\cos 60°$, $\\\\sin 70° = \\\\cos 20°$',
      type: 'formula',
    },
    {
      id: 'g3d33-c3',
      title: '삼각비 값의 범위와 변화',
      content: '각 $A$가 $0°$에서 $90°$로 커질 때:\\n• $\\\\sin A$: $0$에서 $1$로 증가\\n• $\\\\cos A$: $1$에서 $0$으로 감소\\n• $\\\\tan A$: $0$에서 무한대로 증가\\n\\n$\\\\sin 45° = \\\\cos 45°$이고, $45°$보다 크면 $\\\\sin > \\\\cos$',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'g3d33-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$\\\\sin 50°$와 같은 값은?',
      options: ['$\\\\cos 50°$', '$\\\\cos 40°$', '$\\\\sin 40°$', '$\\\\tan 40°$'],
      answer: '$\\\\cos 40°$',
      explanation: '여각의 관계: $\\\\sin 50° = \\\\cos(90° - 50°) = \\\\cos 40°$.',
    },
    {
      id: 'g3d33-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$\\\\sin 25° = 0.4226$일 때, $\\\\cos 65°$의 값은?',
      options: ['$0.4226$', '$0.5774$', '$0.9063$', '$0.4663$'],
      answer: '$0.4226$',
      explanation: '$\\\\cos 65° = \\\\sin(90° - 65°) = \\\\sin 25° = 0.4226$.',
    },
    {
      id: 'g3d33-p3',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$\\\\sin A > \\\\cos A$를 만족하는 예각 $A$의 범위는?',
      options: ['$0° < A < 45°$', '$45° < A < 90°$', '$A = 45°$', '$0° < A < 90°$'],
      answer: '$45° < A < 90°$',
      explanation: '$\\\\sin A = \\\\cos A$인 $A = 45°$를 기준으로, $A > 45°$이면 $\\\\sin A > \\\\cos A$입니다.',
    },
    {
      id: 'g3d33-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$0° < A < 90°$에서 $\\\\sin A = \\\\cos A$를 만족하는 각 $A$는?',
      options: ['$30°$', '$45°$', '$60°$', '$90°$'],
      answer: '$45°$',
      explanation: '$\\\\sin A = \\\\cos A$에서 $\\\\tan A = 1$이므로 $A = 45°$.',
    },
    {
      id: 'g3d33-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '$\\\\sin 20° = a$일 때, $\\\\cos 70° + \\\\sin 70° \\\\times \\\\tan 20°$의 값은?',
      options: ['$a$', '$2a$', '$\\\\frac{1}{a}$', '$a + 1$'],
      answer: '$2a$',
      explanation: '$\\\\cos 70° = \\\\sin 20° = a$, $\\\\sin 70° = \\\\cos 20°$, $\\\\tan 20° = \\\\frac{\\\\sin 20°}{\\\\cos 20°} = \\\\frac{a}{\\\\cos 20°}$. $\\\\sin 70° \\\\times \\\\tan 20° = \\\\cos 20° \\\\times \\\\frac{a}{\\\\cos 20°} = a$. 합: $a + a = 2a$.',
    },
  ],
  realLifeExample: '항해에서 선박의 진행 방향과 목적지 사이의 각도를 측정한 후, 삼각비의 표를 이용하여 목적지까지의 거리와 방향을 정확하게 계산합니다. GPS 이전에는 이 방법이 항해의 핵심이었습니다.',
};

export default dayContent;
