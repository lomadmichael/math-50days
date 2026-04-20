import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 43,
  part: 6,
  title: '원에 내접하는 사각형',
  subtitle: '대각의 합이 $180°$',
  lectures: [],
  concepts: [
    {
      id: 'g3d43-c1',
      title: '원에 내접하는 사각형의 성질',
      content: '원에 내접하는 사각형 $ABCD$에서:\\n$\\angle A + \\angle C = 180°$ (대각의 합)\\n$\\angle B + \\angle D = 180°$\\n\\n이유: $\\angle A$는 호 $BCD$에 대한 원주각, $\\angle C$는 호 $BAD$에 대한 원주각.\\n호 $BCD$ + 호 $BAD$ = 전체 원이므로 원주각의 합 $= \\frac{360°}{2} = 180°$.',
      type: 'formula',
    },
    {
      id: 'g3d43-c2',
      title: '원에 내접하는 사각형의 외각',
      content: '원에 내접하는 사각형에서 한 꼭짓점의 외각은\\n그 대각과 같습니다.\\n\\n$\\angle A$의 외각 $= 180° - \\angle A = \\angle C$\\n\\n이 성질은 원에 내접하는 사각형을 증명하는 데에도 사용됩니다.',
      type: 'formula',
    },
    {
      id: 'g3d43-c3',
      title: '원에 내접하는 사각형의 판별',
      content: '사각형이 원에 내접하기 위한 조건:\\n① 대각의 합이 $180°$이다.\\n② 한 외각이 그 대각과 같다.\\n③ 같은 선분에 대해 같은 쪽의 두 각이 같다.\\n\\n위 조건 중 하나만 만족하면 그 사각형은 원에 내접합니다.',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'g3d43-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '원에 내접하는 사각형 $ABCD$에서 $\\angle A = 70°$일 때, $\\angle C$는?',
      options: ['$70°$', '$110°$', '$90°$', '$180°$'],
      answer: '$110°$',
      explanation: '대각의 합이 $180°$이므로 $\\angle C = 180° - 70° = 110°$.',
    },
    {
      id: 'g3d43-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '원에 내접하는 사각형 $ABCD$에서 $\\angle B = 85°$일 때, $\\angle D$는?',
      options: ['$85°$', '$95°$', '$105°$', '$75°$'],
      answer: '$95°$',
      explanation: '$\\angle B + \\angle D = 180°$이므로 $\\angle D = 180° - 85° = 95°$.',
    },
    {
      id: 'g3d43-p3',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '원에 내접하는 사각형 $ABCD$에서 $\\angle A : \\angle C = 2 : 3$일 때, $\\angle A$의 크기는?',
      options: ['$60°$', '$72°$', '$90°$', '$108°$'],
      answer: '$72°$',
      explanation: '$\\angle A + \\angle C = 180°$이고 $\\angle A : \\angle C = 2 : 3$이므로 $\\angle A = 180° \\times \\frac{2}{5} = 72°$.',
    },
    {
      id: 'g3d43-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '사각형 $ABCD$에서 $\\angle A = 80°$, $\\angle B = 100°$, $\\angle C = 100°$, $\\angle D = 80°$이다. 이 사각형은 원에 내접하는가?',
      options: ['내접한다', '내접하지 않는다', '판단할 수 없다', '$\\angle A = \\angle D$이므로 내접한다'],
      answer: '내접한다',
      explanation: '$\\angle A + \\angle C = 80° + 100° = 180°$이고 $\\angle B + \\angle D = 100° + 80° = 180°$이므로 원에 내접합니다.',
    },
    {
      id: 'g3d43-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '원에 내접하는 사각형 $ABCD$에서 $\\angle BAD = 100°$이고 $BC$를 연장한 선 위의 점 $E$에 대해 $\\angle DCE$는?',
      options: ['$80°$', '$100°$', '$110°$', '$70°$'],
      answer: '$100°$',
      explanation: '$\\angle BCD = 180° - 100° = 80°$ (대각의 합). $\\angle DCE = 180° - 80° = 100°$ (일직선). 또는 외각의 성질에 의해 $\\angle DCE = \\angle BAD = 100°$.',
    },
  ],
  realLifeExample: '원형 시계 문자판에서 12시, 3시, 6시, 9시의 네 점은 원에 내접하는 사각형(정사각형)을 이룹니다. 대각의 합이 $180°$인 성질은 시계 디자인이나 원형 로고 설계에서 균형 잡힌 배치를 만드는 데 활용됩니다.',
};

export default dayContent;
