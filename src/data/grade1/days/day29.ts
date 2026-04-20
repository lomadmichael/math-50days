import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 29,
  part: 5,
  title: '평행선(Parallel Lines)의 성질 (동위각(Corresponding Angles)/엇각(Alternate Angles))',
  subtitle: '평행선(Parallel Lines)을 한 직선이 만날 때 생기는 특별한 각(Angle)의 관계를 알아보자!',
  lectures: [],
  concepts: [
    {
      id: 'g1d29-c1',
      title: '동위각(Corresponding Angles)과 엇각(Alternate Angles)',
      content: '두 직선을 한 직선(횡단선)이 만날 때 생기는 8개의 각(Angle)에서:\n• **동위각(Corresponding Angles)**: 같은 위치에 있는 각의 쌍 (4쌍)\n  → 예: 위쪽 직선의 오른쪽 위 각 & 아래쪽 직선의 오른쪽 위 각\n• **엇각(Alternate Angles)(교대각)**: 횡단선 기준으로 엇갈린 위치의 각 (2쌍)\n  → 안쪽에서 엇갈린 각: **엇각(Alternate Angles)**\n• **동측내각**: 횡단선 같은 쪽의 안쪽 각 (2쌍)',
      type: 'definition',
    },
    {
      id: 'g1d29-c2',
      title: '평행선(Parallel Lines)의 성질',
      content: '두 직선이 **평행(Parallel)** 할 때 ($l \\parallel m$):\n• **동위각(Corresponding Angles)** 의 크기는 서로 **같다**\n• **엇각(Alternate Angles)** 의 크기는 서로 **같다**\n• **동측내각**의 크기의 합은 $180°$\n\n역도 성립합니다:\n동위각이 같거나, 엇각이 같거나, 동측내각의 합이 $180°$이면 → 두 직선은 **평행(Parallel)**!',
      type: 'formula',
    },
    {
      id: 'g1d29-c3',
      title: '평행선(Parallel Lines) 성질의 활용',
      content: '평행선(Parallel Lines)의 성질을 이용한 각도 구하기 전략:\n1. 평행선(Parallel Lines)과 횡단선 찾기\n2. 동위각(Corresponding Angles) 또는 엇각(Alternate Angles) 관계 파악하기\n3. 보조선(평행선)을 그어서 해결하기\n\n보조선 Tip: 꺾인 점을 지나는 평행선(Parallel Line)을 그으면 엇각(Alternate Angles) 관계가 만들어집니다!',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'g1d29-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$l \\parallel m$일 때, 횡단선이 만드는 동위각에 대한 설명으로 옳은 것은?',
      options: [
        '동위각의 합은 $180°$이다',
        '동위각의 크기는 서로 같다',
        '동위각의 차는 $90°$이다',
        '동위각은 항상 예각이다',
      ],
      answer: '동위각의 크기는 서로 같다',
      explanation: '평행한 두 직선을 횡단선이 만날 때,\n**동위각**의 크기는 서로 **같습니다**.\n\n동측내각의 합이 $180°$이고, 동위각은 같은 위치에 있으므로 크기가 같습니다.',
    },
    {
      id: 'g1d29-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: '$l \\parallel m$이고 횡단선과 직선 $l$이 이루는 한 각이 $55°$일 때, 이 각의 엇각의 크기를 구하시오. (단위: °)',
      answer: '55',
      explanation: '평행선에서 **엇각**의 크기는 서로 같습니다.\n\n따라서 엇각의 크기 = $55°$',
    },
    {
      id: 'g1d29-p3',
      type: 'short-answer',
      difficulty: 'applied',
      question: '$l \\parallel m$이고 횡단선과 직선 $l$이 이루는 동측내각 중 하나가 $70°$일 때, 다른 동측내각의 크기를 구하시오. (단위: °)',
      answer: '110',
      explanation: '평행선에서 **동측내각**의 합은 $180°$입니다.\n\n다른 동측내각 = $180° - 70° = 110°$',
    },
    {
      id: 'g1d29-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$l \\parallel m$이고 횡단선이 직선 $l$과 이루는 각이 $(2x + 10)°$, 직선 $m$과 이루는 엇각이 $(3x - 20)°$일 때, $x$의 값은?',
      options: ['$20$', '$25$', '$30$', '$35$'],
      answer: '$30$',
      explanation: '평행선에서 엇각은 크기가 같으므로:\n$2x + 10 = 3x - 20$\n$10 + 20 = 3x - 2x$\n$x = 30$\n\n검산: $2(30) + 10 = 70°$, $3(30) - 20 = 70°$ ✓',
    },
    {
      id: 'g1d29-p5',
      type: 'short-answer',
      difficulty: 'challenge',
      question: '$l \\parallel m$일 때, 두 평행선 사이의 꺾인 선에서 $\\angle a = 35°$, $\\angle b = 45°$이면 $\\angle x$ (꺾인 점의 각)의 크기를 구하시오. (단, $\\angle a$는 직선 $l$ 위의 각, $\\angle b$는 직선 $m$ 위의 각, 단위: °)',
      answer: '80',
      explanation: '꺾인 점을 지나는 $l$에 평행한 보조선을 긋습니다.\n\n보조선과 $l$이 평행하므로:\n• 엇각에 의해 윗부분 = $35°$\n\n보조선과 $m$이 평행하므로:\n• 엇각에 의해 아랫부분 = $45°$\n\n$\\angle x = 35° + 45° = 80°$',
    },
  ],
  realLifeExample: '에스컬레이터의 손잡이와 계단 면은 평행(Parallel)한 직선과 같습니다. 횡단보도의 줄무늬도 평행선(Parallel Lines)이죠. 건축에서 창문틀, 타일 패턴 등에서 평행선(Parallel Lines)과 동위각(Corresponding Angles)/엇각(Alternate Angles)의 원리가 활용됩니다!',
};

export default dayContent;
