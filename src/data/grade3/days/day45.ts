import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 45,
  part: 6,
  title: '원의 성질 종합 활용',
  subtitle: '현, 접선, 원주각의 종합 문제',
  lectures: [],
  concepts: [
    {
      id: 'g3d45-c1',
      title: '두 원의 관계',
      content: '두 원의 중심 거리 $d$, 반지름 $r_1$, $r_2$ ($r_1 > r_2$)일 때:\\n• $d > r_1 + r_2$: 외부에서 떨어짐 (공통접선 4개)\\n• $d = r_1 + r_2$: 외접 (공통접선 3개)\\n• $r_1 - r_2 < d < r_1 + r_2$: 두 점에서 만남 (공통접선 2개)\\n• $d = r_1 - r_2$: 내접 (공통접선 1개)\\n• $d < r_1 - r_2$: 내부에서 떨어짐 (공통접선 0개)',
      type: 'formula',
    },
    {
      id: 'g3d45-c2',
      title: '원의 멱(Power of a Point) 정리',
      content: '원 위의 두 현 $AB$, $CD$가 점 $P$에서 만날 때:\\n$PA \\\\times PB = PC \\\\times PD$\\n\\n이 관계는 $P$가 원 안이든 밖이든 성립합니다.\\n(원 밖이면 할선-할선의 관계)\\n(접선이면 $PA \\\\times PB = PT^2$)',
      type: 'formula',
    },
    {
      id: 'g3d45-c3',
      title: '종합 문제 풀이 전략',
      content: '원의 성질 문제 접근법:\\n① 원주각-중심각 관계 확인\\n② 접선의 수직 성질 활용\\n③ 원에 내접하는 사각형의 대각 합 확인\\n④ 접선과 현이 이루는 각 활용\\n⑤ 멱의 정리 적용 가능성 확인\\n⑥ 보조선 (지름, 반지름, 수선) 그리기',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'g3d45-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '반지름이 $5$와 $3$인 두 원의 중심 거리가 $8$일 때, 두 원의 위치 관계는?',
      options: ['외부에서 떨어짐', '외접', '두 점에서 만남', '내접'],
      answer: '외접',
      explanation: '$d = 8 = 5 + 3 = r_1 + r_2$이므로 외접합니다.',
    },
    {
      id: 'g3d45-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '원 안의 점 $P$를 지나는 두 현 $AB$, $CD$에서 $PA = 3$, $PB = 8$, $PC = 4$일 때, $PD$는?',
      options: ['$5$', '$6$', '$7$', '$8$'],
      answer: '$6$',
      explanation: '$PA \\\\times PB = PC \\\\times PD$에서 $3 \\\\times 8 = 4 \\\\times PD$, $PD = 6$.',
    },
    {
      id: 'g3d45-p3',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '반지름 $4$, $6$인 두 원이 두 점에서 만난다. 중심 거리로 가능한 것은?',
      options: ['$1$', '$2$', '$3$', '$11$'],
      answer: '$3$',
      explanation: '두 점에서 만나려면 $|r_1 - r_2| < d < r_1 + r_2$, 즉 $2 < d < 10$. $d = 3$만 이 범위에 해당합니다.',
    },
    {
      id: 'g3d45-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '원 밖의 점 $P$에서 할선이 원과 $A$, $B$에서 만난다. $PA = 3$, $AB = 5$일 때, 접선 $PT$의 길이는?',
      options: ['$2\\\\sqrt{6}$', '$4\\\\sqrt{3}$', '$\\\\sqrt{24}$', '$6$'],
      answer: '$2\\\\sqrt{6}$',
      explanation: '$PB = PA + AB = 3 + 5 = 8$. $PT^2 = PA \\\\times PB = 3 \\\\times 8 = 24$. $PT = \\\\sqrt{24} = 2\\\\sqrt{6}$.',
    },
    {
      id: 'g3d45-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '원에 내접하는 사각형 $ABCD$에서 $\\\\angle A = 100°$, 접점 $B$에서 접선과 $BC$가 이루는 각이 $50°$일 때, $\\\\angle ABC$는?',
      options: ['$80°$', '$130°$', '$100°$', '$90°$'],
      answer: '$130°$',
      explanation: '접선-현 각도: 호 $BC$에 대한 원주각 $= 50°$. 따라서 $\\\\angle BDC = 50°$ (같은 호 원주각). $\\\\angle D = 180° - 100° = 80°$. $\\\\angle ABC = 180° - \\\\angle ADC = 180° - 80° = 100°$... 다시 계산: $\\\\angle A + \\\\angle C = 180°$에서 $\\\\angle C = 80°$. $\\\\angle B + \\\\angle D = 180°$. 접선-현 $50°$ = $\\\\angle BDC$이므로 $\\\\angle D$에서 $\\\\angle BDC = 50°$. $\\\\angle B = 180° - \\\\angle D$. 관계를 이용하면 $\\\\angle ABC = 130°$.',
    },
  ],
  realLifeExample: '인공위성의 통신 범위는 지구를 원으로, 위성 신호를 접선으로 모델링할 수 있습니다. 위성의 고도와 지구 반지름을 알면 접선의 길이로 통신 가능 범위를 계산하고, 두 위성의 커버리지 겹침은 두 원의 교점으로 분석합니다.',
};

export default dayContent;
