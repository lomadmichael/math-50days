import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 42,
  part: 6,
  title: '원주각의 성질 활용',
  subtitle: '원주각의 다양한 활용 문제',
  lectures: [],
  concepts: [
    {
      id: 'g3d42-c1',
      title: '원주각의 역(逆)',
      content: '선분 $AB$에 대하여 같은 쪽에 있는 두 점 $C$, $D$에서\\n$\\\\angle ACB = \\\\angle ADB$이면, 네 점 $A$, $B$, $C$, $D$는 한 원 위에 있습니다.\\n\\n이것이 원주각의 역이며, 네 점이 한 원 위에 있는지 판별하는 데 사용됩니다.',
      type: 'definition',
    },
    {
      id: 'g3d42-c2',
      title: '호와 원주각의 비례',
      content: '같은 원에서 호의 길이와 원주각의 크기는 비례합니다.\\n\\n호 $AB$의 길이 : 호 $CD$의 길이 = $\\\\angle APB$ : $\\\\angle CPD$\\n(단, $P$는 원 위의 같은 점)\\n\\n이 성질로 알 수 없는 각이나 호의 길이를 비례식으로 구할 수 있습니다.',
      type: 'formula',
    },
    {
      id: 'g3d42-c3',
      title: '원주각과 삼각형',
      content: '원에 내접하는 삼각형에서:\\n• 지름을 밑변으로 하면 꼭짓각 $= 90°$\\n• 한 변의 대각은 그 변의 맞은편 호에 대한 원주각\\n• 삼각형의 외접원의 중심은 세 변의 수직이등분선의 교점\\n• 외접원의 반지름 $R$: $\\\\frac{a}{\\\\sin A} = 2R$ (사인 법칙)',
      type: 'example',
    },
  ],
  problems: [
    {
      id: 'g3d42-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '원에 내접하는 삼각형 $ABC$에서 호 $BC$에 대한 원주각 $\\\\angle BAC = 40°$이다. 호 $BC$에 대한 중심각은?',
      options: ['$20°$', '$40°$', '$80°$', '$120°$'],
      answer: '$80°$',
      explanation: '중심각 $= 2 \\\\times$ 원주각 $= 2 \\\\times 40° = 80°$.',
    },
    {
      id: 'g3d42-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '원 위의 네 점 $A$, $B$, $C$, $D$에서 호 $AB$ : 호 $CD$ = $2$ : $3$이다. $\\\\angle APB = 30°$일 때, $\\\\angle CPD$는? ($P$는 원 위의 점)',
      options: ['$20°$', '$45°$', '$30°$', '$50°$'],
      answer: '$45°$',
      explanation: '호의 비 $= 2:3$이므로 원주각의 비도 $2:3$. $30°:x = 2:3$에서 $x = 45°$.',
    },
    {
      id: 'g3d42-p3',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '원에 내접하는 삼각형 $ABC$에서 $\\\\angle A = 50°$, $\\\\angle B = 70°$일 때, 호 $AB$에 대한 중심각은?',
      options: ['$100°$', '$120°$', '$140°$', '$60°$'],
      answer: '$120°$',
      explanation: '$\\\\angle C = 180° - 50° - 70° = 60°$. 호 $AB$에 대한 원주각이 $\\\\angle C = 60°$이므로, 중심각 $= 2 \\\\times 60° = 120°$.',
    },
    {
      id: 'g3d42-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '원 위의 점 $A$, $B$, $C$, $D$가 순서대로 있고, $\\\\angle AOB = 60°$, $\\\\angle BOC = 100°$일 때, $\\\\angle ADC$의 크기는? ($O$: 원의 중심)',
      options: ['$50°$', '$80°$', '$160°$', '$100°$'],
      answer: '$80°$',
      explanation: '호 $ABC$에 대한 중심각 $= 60° + 100° = 160°$. $\\\\angle ADC$ (호 $ABC$에 대한 원주각) $= \\\\frac{160°}{2} = 80°$.',
    },
    {
      id: 'g3d42-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '반지름이 $R$인 원에 내접하는 삼각형 $ABC$에서 $\\\\angle A = 30°$일 때, $BC$의 길이는?',
      options: ['$R$', '$R\\\\sqrt{2}$', '$R\\\\sqrt{3}$', '$2R$'],
      answer: '$R$',
      explanation: '사인 법칙: $\\\\frac{BC}{\\\\sin A} = 2R$. $BC = 2R\\\\sin 30° = 2R \\\\times \\\\frac{1}{2} = R$.',
    },
  ],
  realLifeExample: 'GPS 위성 항법에서 여러 위성의 신호를 수신하여 자신의 위치를 결정할 때, 원주각의 성질이 이용됩니다. 두 기지국에서 보내는 신호의 각도차를 이용하면 수신자가 특정 원호 위에 있음을 알 수 있습니다.',
};

export default dayContent;
