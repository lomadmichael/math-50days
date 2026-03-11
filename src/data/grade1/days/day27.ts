import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 27,
  part: 5,
  title: '점, 선, 면, 각',
  subtitle: '도형의 가장 기본이 되는 요소들! 점, 선, 면, 그리고 각의 세계로 들어가 보자.',
  lectures: [],
  concepts: [
    {
      id: 'g1d27-c1',
      title: '점, 선, 면의 정의',
      content: '• **점**: 위치만 있고 크기가 없는 것 (점 A)\n• **선**: 점이 움직인 자취, 곧은 정도에 따라 직선·반직선·선분으로 구분\n• **직선**: 양쪽으로 끝없이 뻗은 곧은 선 → $\\overleftrightarrow{AB}$\n• **반직선**: 한 점에서 시작하여 한쪽으로 끝없이 뻗은 선 → $\\overrightarrow{AB}$\n• **선분**: 두 점을 잇는 가장 짧은 직선 부분 → $\\overline{AB}$\n• **면**: 선이 움직인 자취, 평평한 면을 **평면**이라 함',
      type: 'definition',
    },
    {
      id: 'g1d27-c2',
      title: '각의 정의와 종류',
      content: '• **각**: 한 점(꼭짓점)에서 시작하는 두 반직선이 이루는 도형 → $\\angle AOB$\n• **예각**: $0° < \\angle < 90°$\n• **직각**: $\\angle = 90°$ (기호: ㄱ)\n• **둔각**: $90° < \\angle < 180°$\n• **평각**: $\\angle = 180°$ (일직선)\n• **맞꼭지각**: 두 직선이 만날 때 마주 보는 각 → 항상 같다!',
      type: 'formula',
    },
    {
      id: 'g1d27-c3',
      title: '맞꼭지각의 성질',
      content: '두 직선이 한 점에서 만나면 **4개의 각**이 생깁니다.\n• **맞꼭지각**은 서로 같다: $\\angle a = \\angle c$, $\\angle b = \\angle d$\n• 이웃한 두 각의 합은 $180°$: $\\angle a + \\angle b = 180°$\n• 이 성질을 이용해 한 각만 알면 나머지 세 각을 모두 구할 수 있습니다!',
      type: 'formula',
    },
  ],
  problems: [
    {
      id: 'g1d27-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '다음 중 각의 종류가 올바르게 짝지어진 것은?',
      options: ['$45°$ → 둔각', '$90°$ → 예각', '$120°$ → 둔각', '$180°$ → 직각'],
      answer: '$120°$ → 둔각',
      explanation: '$45°$는 예각 ($0° < 45° < 90°$)\n$90°$는 직각\n$120°$는 둔각 ($90° < 120° < 180°$) ✓\n$180°$는 평각',
    },
    {
      id: 'g1d27-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '두 점 A, B를 지나는 직선, 반직선, 선분의 개수를 차례로 나열한 것은?',
      options: ['1, 1, 1', '1, 2, 1', '2, 2, 1', '1, 2, 2'],
      answer: '1, 2, 1',
      explanation: '• 직선: 두 점을 지나는 직선은 **1개** ($\\overleftrightarrow{AB}$)\n• 반직선: 시작점이 다를 수 있으므로 **2개** ($\\overrightarrow{AB}$, $\\overrightarrow{BA}$)\n• 선분: 두 점을 잇는 선분은 **1개** ($\\overline{AB}$)',
    },
    {
      id: 'g1d27-p3',
      type: 'short-answer',
      difficulty: 'applied',
      question: '두 직선이 한 점에서 만나서 생긴 4개의 각 중 하나가 $65°$일 때, 나머지 세 각의 크기를 모두 구하시오. (크기가 작은 것부터 쉼표로 구분)',
      answer: '65, 115, 115',
      explanation: '맞꼭지각의 성질:\n• 맞꼭지각 = $65°$\n• 이웃한 각 = $180° - 65° = 115°$\n• 나머지 맞꼭지각 = $115°$\n\n따라서 $65°, 115°, 115°$',
    },
    {
      id: 'g1d27-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question: '두 직선이 한 점에서 만들어진 맞꼭지각 중 하나가 $3x + 10°$이고 맞은편 각이 $5x - 20°$일 때, $x$의 값을 구하시오.',
      answer: '15',
      explanation: '맞꼭지각은 크기가 같으므로:\n$3x + 10 = 5x - 20$\n$30 = 2x$\n$x = 15$\n\n검산: $3(15) + 10 = 55°$, $5(15) - 20 = 55°$ ✓',
    },
    {
      id: 'g1d27-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '시계에서 3시 30분일 때, 시침과 분침이 이루는 작은 쪽의 각도는?',
      options: ['$60°$', '$75°$', '$90°$', '$105°$'],
      answer: '$75°$',
      explanation: '3시 30분일 때:\n• 분침: 6을 가리킴 → $180°$ 위치\n• 시침: 3과 4 사이의 정가운데 → $105°$ 위치\n  (시침은 1시간에 $30°$, 30분이면 $15°$ 이동 → $90° + 15° = 105°$)\n\n작은 쪽 각도 = $180° - 105° = 75°$',
    },
  ],
  realLifeExample: '건축가는 건물을 설계할 때 점, 선, 면, 각을 모두 사용합니다. 시계 바늘이 이루는 각도, 도로의 교차 각도, 지붕의 기울기 등 일상에서 각도는 매우 중요한 역할을 합니다!',
};

export default dayContent;
