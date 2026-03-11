import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 32,
  part: 5,
  title: '평행사변형의 성질',
  subtitle: '평행사변형의 다양한 성질을 배워 보자!',
  lectures: [],
  concepts: [
    {
      id: 'g2d32-c1',
      title: '평행사변형의 정의',
      content: '**평행사변형**: 두 쌍의 대변이 각각 평행한 사각형\\n\\n$\\\\square ABCD$에서 $\\\\overline{AB} \\\\parallel \\\\overline{DC}$이고 $\\\\overline{AD} \\\\parallel \\\\overline{BC}$',
      type: 'definition',
    },
    {
      id: 'g2d32-c2',
      title: '평행사변형의 성질',
      content: '평행사변형에서:\\n\\n**성질 1**: 두 쌍의 대변의 길이가 각각 같다\\n$\\\\overline{AB} = \\\\overline{DC}$, $\\\\overline{AD} = \\\\overline{BC}$\\n\\n**성질 2**: 두 쌍의 대각의 크기가 각각 같다\\n$\\\\angle A = \\\\angle C$, $\\\\angle B = \\\\angle D$\\n\\n**성질 3**: 두 대각선은 서로 다른 것을 이등분한다\\n$\\\\overline{OA} = \\\\overline{OC}$, $\\\\overline{OB} = \\\\overline{OD}$ (O는 대각선의 교점)',
      type: 'formula',
    },
    {
      id: 'g2d32-c3',
      title: '평행사변형이 되는 조건',
      content: '사각형이 평행사변형이 되려면 다음 중 하나만 만족하면 됩니다:\\n\\n① 두 쌍의 대변이 각각 평행\\n② 두 쌍의 대변의 길이가 각각 같음\\n③ 두 쌍의 대각의 크기가 각각 같음\\n④ 두 대각선이 서로 다른 것을 이등분\\n⑤ 한 쌍의 대변이 평행하고 그 길이가 같음',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'g2d32-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '평행사변형 $ABCD$에서 $\\\\overline{AB} = 8$cm, $\\\\overline{BC} = 5$cm일 때, $\\\\overline{CD}$의 길이는?',
      options: ['$5$cm', '$8$cm', '$10$cm', '$13$cm'],
      answer: '$8$cm',
      explanation: '평행사변형에서 대변의 길이가 같으므로\\n$\\\\overline{CD} = \\\\overline{AB} = 8$cm',
    },
    {
      id: 'g2d32-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: '평행사변형 $ABCD$에서 $\\\\angle A = 70°$일 때, $\\\\angle B$의 크기를 구하시오.',
      answer: '110',
      explanation: '평행사변형에서 이웃한 두 각의 합은 $180°$\\n$\\\\angle A + \\\\angle B = 180°$\\n$70° + \\\\angle B = 180°$\\n$\\\\angle B = 110°$',
    },
    {
      id: 'g2d32-p3',
      type: 'short-answer',
      difficulty: 'applied',
      question: '평행사변형 $ABCD$에서 두 대각선의 교점을 $O$라 할 때, $\\\\overline{AC} = 16$cm, $\\\\overline{BD} = 12$cm이다. $\\\\overline{OA} + \\\\overline{OB}$의 값을 구하시오.',
      answer: '14',
      explanation: '대각선이 서로 이등분하므로\\n$\\\\overline{OA} = \\\\frac{1}{2} \\\\times 16 = 8$(cm)\\n$\\\\overline{OB} = \\\\frac{1}{2} \\\\times 12 = 6$(cm)\\n\\n$\\\\overline{OA} + \\\\overline{OB} = 8 + 6 = 14$(cm)',
    },
    {
      id: 'g2d32-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '다음 중 사각형 $ABCD$가 반드시 평행사변형이 되는 조건은?',
      options: [
        '$\\\\overline{AB} = \\\\overline{CD}$, $\\\\overline{AD} = \\\\overline{BC}$',
        '$\\\\angle A = \\\\angle B$, $\\\\angle C = \\\\angle D$',
        '$\\\\overline{AB} = \\\\overline{BC}$, $\\\\overline{CD} = \\\\overline{DA}$',
        '$\\\\overline{AB} \\\\parallel \\\\overline{CD}$, $\\\\overline{AB} \\\\neq \\\\overline{CD}$',
      ],
      answer: '$\\\\overline{AB} = \\\\overline{CD}$, $\\\\overline{AD} = \\\\overline{BC}$',
      explanation: '두 쌍의 대변의 길이가 각각 같으면 평행사변형입니다.\\n\\n나머지는 평행사변형이 아닌 경우가 존재합니다.',
    },
    {
      id: 'g2d32-p5',
      type: 'short-answer',
      difficulty: 'challenge',
      question: '평행사변형 $ABCD$에서 $\\\\angle A : \\\\angle B = 2 : 3$일 때, $\\\\angle C$의 크기를 구하시오.',
      answer: '72',
      explanation: '$\\\\angle A + \\\\angle B = 180°$ (이웃한 각)\\n비율 $2 : 3$이므로 $\\\\angle A = 180° \\\\times \\\\frac{2}{5} = 72°$\\n\\n$\\\\angle C = \\\\angle A = 72°$ (대각)',
    },
  ],
  realLifeExample: '접이식 빨래 건조대나 가위의 교차 구조가 평행사변형의 성질을 이용해요! 대각선이 서로를 이등분하는 성질 덕분에 접었다 펼 때 좌우 대칭을 유지할 수 있습니다.',
};

export default dayContent;
