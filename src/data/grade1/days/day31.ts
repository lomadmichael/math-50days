import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 31,
  part: 5,
  title: '삼각형(Triangle)의 합동 조건(Congruence Conditions)',
  subtitle: '두 삼각형(Triangle)이 완전히 같은 모양과 크기를 가지려면? 합동(Congruence)의 비밀을 파헤쳐 보자!',
  lectures: [],
  concepts: [
    {
      id: 'g1d31-c1',
      title: '합동(Congruence)의 뜻',
      content: '• **합동(Congruence)**: 모양과 크기가 완전히 같은 두 도형 → 기호: $\\triangle ABC \\equiv \\triangle DEF$\n• 합동(Congruence)인 두 삼각형(Triangle)에서:\n  - **대응변(Side)** 의 길이가 같다: $\\overline{AB} = \\overline{DE}$, $\\overline{BC} = \\overline{EF}$, $\\overline{CA} = \\overline{FD}$\n  - **대응각(Angle)** 의 크기가 같다: $\\angle A = \\angle D$, $\\angle B = \\angle E$, $\\angle C = \\angle F$\n• 합동(Congruence) 기호를 쓸 때는 대응하는 꼭짓점(Vertex) 순서를 맞춰야 합니다!',
      type: 'definition',
    },
    {
      id: 'g1d31-c2',
      title: '삼각형(Triangle)의 합동 조건(Congruence Conditions)',
      content: '두 삼각형(Triangle)이 합동(Congruence)이 되려면 다음 중 하나를 만족하면 됩니다:\n\n• **SSS 합동(SSS Congruence, Side-Side-Side)**: 세 쌍의 대응변(Side)의 길이가 각각 같을 때\n• **SAS 합동(SAS Congruence, Side-Angle-Side)**: 두 쌍의 대응변(Side)의 길이가 같고, 그 **끼인각(Angle)** 의 크기가 같을 때\n• **ASA 합동(ASA Congruence, Angle-Side-Angle)**: 한 쌍의 대응변(Side)의 길이가 같고, 그 **양 끝 각(Angle)** 의 크기가 각각 같을 때',
      type: 'formula',
    },
    {
      id: 'g1d31-c3',
      title: '합동(Congruence)이 아닌 경우 주의!',
      content: '⚠️ 합동(Congruence) 조건이 되지 **않는** 것들:\n• **AAA**: 세 각(Angle)이 같아도 크기가 다를 수 있음 (닮음)\n• **SSA**: 두 변(Side)과 끼인각이 아닌 한 각(Angle) → 삼각형(Triangle)이 2개 만들어질 수 있음\n\n합동(Congruence) 조건을 적용할 때는 반드시:\n1. 대응하는 변(Side)과 각(Angle)을 정확히 파악\n2. SAS(Side-Angle-Side)에서 "끼인각"인지 확인\n3. ASA(Angle-Side-Angle)에서 "양 끝 각"인지 확인',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'g1d31-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '다음 중 삼각형의 합동 조건이 아닌 것은?',
      options: ['SSS', 'SAS', 'ASA', 'AAA'],
      answer: 'AAA',
      explanation: '**AAA** (세 각이 같음)는 합동 조건이 아닙니다.\n세 각이 같으면 모양은 같지만 크기가 다를 수 있습니다.\n이것은 **닮음** 조건입니다.\n\nSSS, SAS, ASA만 삼각형의 합동 조건입니다.',
    },
    {
      id: 'g1d31-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$\\triangle ABC \\equiv \\triangle DEF$일 때, $\\angle B$의 대응각은?',
      options: ['$\\angle D$', '$\\angle E$', '$\\angle F$', '$\\angle A$'],
      answer: '$\\angle E$',
      explanation: '$\\triangle ABC \\equiv \\triangle DEF$에서\n대응하는 꼭짓점 순서:\nA ↔ D, **B ↔ E**, C ↔ F\n\n따라서 $\\angle B$의 대응각은 $\\angle E$입니다.',
    },
    {
      id: 'g1d31-p3',
      type: 'short-answer',
      difficulty: 'applied',
      question: '$\\triangle ABC \\equiv \\triangle DEF$에서 $\\overline{AB} = 5$ cm, $\\overline{BC} = 7$ cm, $\\overline{CA} = 6$ cm일 때, $\\overline{EF}$의 길이를 구하시오. (단위: cm)',
      answer: '7',
      explanation: '$\\triangle ABC \\equiv \\triangle DEF$에서\n대응변: $\\overline{AB} = \\overline{DE}$, $\\overline{BC} = \\overline{EF}$, $\\overline{CA} = \\overline{FD}$\n\n$\\overline{BC} = \\overline{EF}$이므로\n$\\overline{EF} = 7$ cm',
    },
    {
      id: 'g1d31-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '두 삼각형에서 $\\overline{AB} = \\overline{DE}$, $\\overline{BC} = \\overline{EF}$, $\\angle C = \\angle F$일 때, 이 두 삼각형이 합동이라고 할 수 있는가?',
      options: [
        'SSS 합동이다',
        'SAS 합동이다',
        'ASA 합동이다',
        '합동이라 할 수 없다',
      ],
      answer: '합동이라 할 수 없다',
      explanation: 'SAS 합동이 되려면 두 변과 그 **끼인각**이 같아야 합니다.\n\n여기서 $\\angle C$는 $\\overline{BC}$와 $\\overline{CA}$ 사이의 각이지,\n$\\overline{AB}$와 $\\overline{BC}$ 사이의 끼인각($\\angle B$)이 아닙니다.\n\n따라서 이 조건만으로는 합동이라 할 수 없습니다. (SSA)',
    },
    {
      id: 'g1d31-p5',
      type: 'short-answer',
      difficulty: 'challenge',
      question: '$\\triangle ABC$에서 $\\angle A = 50°$, $\\overline{AB} = 8$ cm, $\\overline{AC} = 6$ cm이다. $\\triangle DEF \\equiv \\triangle ABC$일 때, SAS 합동을 이용하려면 $\\triangle DEF$에서 어떤 조건이 필요한지, $\\angle D$의 크기를 구하시오. (단위: °)',
      answer: '50',
      explanation: 'SAS 합동: 두 변과 끼인각이 같아야 합니다.\n\n$\\triangle ABC$에서 $\\angle A = 50°$는 $\\overline{AB}$와 $\\overline{AC}$의 끼인각입니다.\n\n$\\triangle DEF$에서 대응하면:\n$\\overline{DE} = \\overline{AB} = 8$ cm\n$\\overline{DF} = \\overline{AC} = 6$ cm\n$\\angle D = \\angle A = 50°$ (끼인각)\n\n따라서 $\\angle D = 50°$',
    },
  ],
  realLifeExample: '공장에서 같은 규격의 부품을 만들 때 합동(Congruence)의 개념이 사용됩니다. 자동차 좌우 대칭 부품, 타일 붙이기, 퍼즐 조각 맞추기 등에서 합동(Congruence)인 도형을 찾아 활용하는 것이 중요합니다!',
};

export default dayContent;
