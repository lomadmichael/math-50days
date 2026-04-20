import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 36,
  part: 6,
  title: '삼각형의 닮음 조건',
  subtitle: '두 삼각형이 닮음인지 판별하는 세 가지 조건을 알아보자!',
  lectures: [],
  concepts: [
    {
      id: 'g2d36-c1',
      title: '삼각형의 닮음 조건 (AA 닮음)',
      content: '**AA 닮음**: 두 쌍의 대응각의 크기가 각각 같으면 닮음\\n\\n$\\angle A = \\angle D$, $\\angle B = \\angle E$이면\\n$\\triangle ABC \\sim \\triangle DEF$\\n\\n(세 번째 각은 자동으로 같아짐: 내각의 합 $180°$)',
      type: 'formula',
    },
    {
      id: 'g2d36-c2',
      title: '삼각형의 닮음 조건 (SAS 닮음)',
      content: '**SAS 닮음**: 두 쌍의 대응변의 비가 같고, 그 끼인각의 크기가 같으면 닮음\\n\\n$\\frac{\\overline{AB}}{\\overline{DE}} = \\frac{\\overline{AC}}{\\overline{DF}}$이고 $\\angle A = \\angle D$이면\\n$\\triangle ABC \\sim \\triangle DEF$',
      type: 'formula',
    },
    {
      id: 'g2d36-c3',
      title: '삼각형의 닮음 조건 (SSS 닮음)',
      content: '**SSS 닮음**: 세 쌍의 대응변의 비가 모두 같으면 닮음\\n\\n$\\frac{\\overline{AB}}{\\overline{DE}} = \\frac{\\overline{BC}}{\\overline{EF}} = \\frac{\\overline{CA}}{\\overline{FD}}$이면\\n$\\triangle ABC \\sim \\triangle DEF$',
      type: 'formula',
    },
    {
      id: 'g2d36-c4',
      title: 'AA 닮음이 가장 많이 쓰여요!',
      content: '실전에서는 **AA 닮음**이 가장 자주 사용됩니다.\\n\\n각도를 찾는 단서:\\n• 맞꼭지각 (두 직선이 만날 때)\\n• 평행선의 엇각, 동위각\\n• 공통 각\\n• 직각 ($90°$)',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'g2d36-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$\\triangle ABC$에서 $\\angle A = 50°$, $\\angle B = 70°$이고 $\\triangle DEF$에서 $\\angle D = 50°$, $\\angle F = 60°$일 때, 두 삼각형의 관계는?',
      options: ['합동이다', '닮음이다', '닮음이 아니다', '알 수 없다'],
      answer: '닮음이다',
      explanation: '$\\triangle ABC$: $\\angle C = 180° - 50° - 70° = 60°$\\n$\\triangle DEF$: $\\angle E = 180° - 50° - 60° = 70°$\\n\\n$\\angle A = \\angle D = 50°$, $\\angle B = \\angle E = 70°$\\n→ **AA 닮음**으로 $\\triangle ABC \\sim \\triangle DEF$',
    },
    {
      id: 'g2d36-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '다음 중 두 삼각형이 항상 닮음인 것은?',
      options: ['두 이등변삼각형', '두 직각삼각형', '두 정삼각형', '두 직각이등변삼각형'],
      answer: '두 정삼각형',
      explanation: '정삼각형은 세 각이 모두 $60°$이므로 두 정삼각형은 항상 AA 닮음입니다.\\n\\n직각이등변삼각형도 항상 닮음이지만, 정삼각형이 가장 대표적인 예시입니다.',
    },
    {
      id: 'g2d36-p3',
      type: 'short-answer',
      difficulty: 'applied',
      question: '$\\triangle ABC \\sim \\triangle ADE$이고 $\\overline{AB} = 12$, $\\overline{AD} = 8$, $\\overline{BC} = 15$일 때, $\\overline{DE}$의 길이를 구하시오.',
      answer: '10',
      explanation: '닮음비 $= \\overline{AB} : \\overline{AD} = 12 : 8 = 3 : 2$\\n\\n$\\frac{\\overline{BC}}{\\overline{DE}} = \\frac{3}{2}$\\n$\\frac{15}{\\overline{DE}} = \\frac{3}{2}$\\n$\\overline{DE} = 10$',
    },
    {
      id: 'g2d36-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question: '$\\overline{AB} = 6$, $\\overline{AC} = 9$, $\\overline{DE} = 4$, $\\overline{DF} = 6$이고 $\\angle A = \\angle D$일 때, $\\triangle ABC$와 $\\triangle DEF$가 닮음인지 판별하고 닮음비를 구하시오. (a:b 형태로)',
      answer: '3:2',
      explanation: '$\\frac{\\overline{AB}}{\\overline{DE}} = \\frac{6}{4} = \\frac{3}{2}$\\n$\\frac{\\overline{AC}}{\\overline{DF}} = \\frac{9}{6} = \\frac{3}{2}$\\n\\n두 변의 비가 같고 끼인각이 같으므로 **SAS 닮음**\\n닮음비 $= 3 : 2$',
    },
    {
      id: 'g2d36-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '$\\triangle ABC$에서 $\\overline{BC}$ 위의 점 $D$에 대해 $\\angle BAD = \\angle C$일 때, 닮음인 두 삼각형은?',
      options: [
        '$\\triangle ABD \\sim \\triangle ACB$',
        '$\\triangle ABD \\sim \\triangle ABC$',
        '$\\triangle ADB \\sim \\triangle ACB$',
        '$\\triangle ABD \\sim \\triangle CAB$',
      ],
      answer: '$\\triangle ABD \\sim \\triangle ACB$',
      explanation: '$\\triangle ABD$와 $\\triangle ACB$에서:\\n$\\angle BAD = \\angle C$ (조건)\\n$\\angle B$: 공통\\n→ **AA 닮음**: $\\triangle ABD \\sim \\triangle ACB$',
    },
  ],
  realLifeExample: '그림자를 이용해 건물 높이를 구할 수 있어요! 같은 시각에 막대의 그림자와 건물의 그림자를 재면, 태양 광선의 각도가 같으므로 AA 닮음이 성립합니다. 비례식으로 건물 높이를 계산할 수 있죠!',
};

export default dayContent;
