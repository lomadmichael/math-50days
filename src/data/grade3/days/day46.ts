import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 46,
  part: 6,
  title: '미니테스트 + 복습',
  subtitle: 'PART 6 총정리: 원의 성질',
  isTest: true,
  lectures: [],
  concepts: [
    {
      id: 'g3d46-c1',
      title: 'PART 6 핵심 정리: 원의 성질',
      content: '① 중심에서 현에 수선 → 현을 이등분. 현의 길이: $2\\sqrt{r^2 - d^2}$\\n② 접선 ⊥ 반지름 (접점에서). 접선의 길이: $\\sqrt{OP^2 - r^2}$\\n③ 원주각 $= \\frac{1}{2} \\times$ 중심각. 같은 호의 원주각은 같다.\\n④ 반원에 대한 원주각 $= 90°$\\n⑤ 내접 사각형: 대각의 합 $= 180°$\\n⑥ 접선-현 각 $=$ 원주각. 멱의 정리: $PA \\times PB = PC \\times PD$',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'g3d46-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '반지름 $10$인 원에서 현의 길이가 $16$일 때, 원의 중심에서 현까지의 거리는?',
      options: ['$4$', '$6$', '$8$', '$5$'],
      answer: '$6$',
      explanation: '현의 반 $= 8$. $d = \\sqrt{10^2 - 8^2} = \\sqrt{36} = 6$.',
    },
    {
      id: 'g3d46-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '중심각 $120°$에 대한 원주각은?',
      options: ['$30°$', '$60°$', '$120°$', '$240°$'],
      answer: '$60°$',
      explanation: '원주각 $= \\frac{1}{2} \\times 120° = 60°$.',
    },
    {
      id: 'g3d46-p3',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '원에 내접하는 사각형에서 $\\angle A = 3x$, $\\angle C = 2x$일 때, $x$의 값은?',
      options: ['$30°$', '$36°$', '$40°$', '$45°$'],
      answer: '$36°$',
      explanation: '$3x + 2x = 180°$에서 $5x = 180°$, $x = 36°$.',
    },
    {
      id: 'g3d46-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '원 밖의 점에서 접선의 길이가 $12$, 할선의 원 내부 부분 길이가 $7$, 원 외부 부분 길이가 $x$일 때, $x$는?',
      options: ['$9$', '$16$', '$8$', '$7$'],
      answer: '$9$',
      explanation: '$PT^2 = PA \\times PB$. $144 = x(x + 7)$. $x^2 + 7x - 144 = 0$. $(x + 16)(x - 9) = 0$. $x = 9$ (양수).',
    },
    {
      id: 'g3d46-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '원 안에서 두 현 $AB$, $CD$가 점 $P$에서 만난다. $PA = 4$, $PB = 9$, $PC = 6$일 때, $CD$의 길이는?',
      options: ['$6$', '$10$', '$12$', '$15$'],
      answer: '$12$',
      explanation: '$PA \\times PB = PC \\times PD$. $4 \\times 9 = 6 \\times PD$, $PD = 6$. $CD = PC + PD = 6 + 6 = 12$.',
    },
    {
      id: 'g3d46-p6',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '반지름 $r$인 원에서 접점 $T$에서의 접선과 현 $TA$가 이루는 각이 $30°$이다. 호 $TA$ (짧은 호)에 대한 중심각은?',
      options: ['$30°$', '$60°$', '$120°$', '$150°$'],
      answer: '$60°$',
      explanation: '접선-현 각도 $30°$ = 호 $TA$에 대한 원주각. 중심각 $= 2 \\times 30° = 60°$.',
    },
  ],
  realLifeExample: '원의 성질은 기계 공학(기어 설계, 베어링), 건축(아치, 돔), 천문학(행성 궤도), 컴퓨터 그래픽스(원 그리기 알고리즘) 등에서 광범위하게 사용됩니다. 고등학교에서는 원의 방정식으로 확장됩니다.',
};

export default dayContent;
