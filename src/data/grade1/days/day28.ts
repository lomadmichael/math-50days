import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 28,
  part: 5,
  title: '위치관계(Positional Relationship) (평행(Parallel)/수직(Perpendicular))',
  subtitle: '직선(Line)과 직선(Line), 직선(Line)과 점(Point) 사이의 위치관계(Positional Relationship)를 알아보자!',
  lectures: [],
  concepts: [
    {
      id: 'g1d28-c1',
      title: '두 직선(Line)의 위치관계(Positional Relationship)',
      content: '같은 평면(Plane) 위의 두 직선(Line)은 다음 세 가지 관계 중 하나입니다.\n• **만난다** (한 점(Point)에서 교차): 교점이 1개\n• **평행(Parallel)하다**: 만나지 않는다 → 기호: $l \\parallel m$\n• **일치한다**: 완전히 겹친다 (같은 직선)\n\n※ 공간에서는 **꼬인 위치(Skew)** (만나지도, 평행하지도 않는 관계)도 있습니다.',
      type: 'definition',
    },
    {
      id: 'g1d28-c2',
      title: '수직(Perpendicular)과 수선(Perpendicular Line)',
      content: '• **수직(Perpendicular)**: 두 직선이 만나서 이루는 각이 $90°$ (직각(Right Angle))일 때 → 기호: $l \\perp m$\n• **수선(Perpendicular Line)**: 직선에 수직인 선\n• **수선의 발**: 수선(Perpendicular Line)과 직선이 만나는 점(Point)\n• **점과 직선 사이의 거리**: 점에서 직선에 내린 **수선(Perpendicular Line)의 길이** (최단 거리!)',
      type: 'formula',
    },
    {
      id: 'g1d28-c3',
      title: '평행선(Parallel Lines) 사이의 거리',
      content: '• **평행선(Parallel Lines) 사이의 거리**: 한 직선 위의 점에서 다른 직선에 내린 수선(Perpendicular Line)의 길이\n• 평행(Parallel)한 두 직선 사이의 거리는 **어디서 재든 항상 같다!**\n• 이 성질을 이용하면 평행선 사이의 넓이 문제를 쉽게 풀 수 있습니다.',
      type: 'definition',
    },
  ],
  problems: [
    {
      id: 'g1d28-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '두 직선 $l$과 $m$이 한 점에서 만나서 이루는 각 중 하나가 $90°$일 때, 두 직선의 관계를 나타내는 기호는?',
      options: ['$l \\parallel m$', '$l \\perp m$', '$l = m$', '$l > m$'],
      answer: '$l \\perp m$',
      explanation: '두 직선이 만나서 이루는 각이 $90°$이면 **수직**이라 하고,\n기호로 $l \\perp m$으로 나타냅니다.\n$l \\parallel m$은 평행을 나타내는 기호입니다.',
    },
    {
      id: 'g1d28-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '점 P에서 직선 $l$까지의 거리를 구하는 방법으로 옳은 것은?',
      options: [
        '점 P에서 직선 위의 아무 점까지의 거리',
        '점 P에서 직선에 내린 수선의 길이',
        '점 P에서 직선의 양 끝점까지 거리의 평균',
        '점 P에서 직선과 평행하게 잰 거리',
      ],
      answer: '점 P에서 직선에 내린 수선의 길이',
      explanation: '점에서 직선까지의 거리는 점에서 직선에 **수선**을 내렸을 때의 길이입니다.\n이것이 점에서 직선까지의 **최단 거리**입니다.',
    },
    {
      id: 'g1d28-p3',
      type: 'short-answer',
      difficulty: 'applied',
      question: '직선 $l$ 위에 있지 않은 점 P에서 직선 $l$에 수선을 내려 수선의 발을 H라 하자. $\\overline{PH} = 5$ cm이고, 직선 $l$ 위의 점 A에 대해 $\\overline{PA} = 13$ cm일 때, $\\overline{AH}$의 길이를 구하시오. (단위: cm)',
      answer: '12',
      explanation: '삼각형 PHA에서 $\\angle PHA = 90°$ (수선이므로)\n\n피타고라스 정리:\n$\\overline{PA}^2 = \\overline{PH}^2 + \\overline{AH}^2$\n$13^2 = 5^2 + \\overline{AH}^2$\n$169 = 25 + \\overline{AH}^2$\n$\\overline{AH}^2 = 144$\n$\\overline{AH} = 12$ cm',
    },
    {
      id: 'g1d28-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '같은 평면 위에 있는 세 직선 $l$, $m$, $n$에 대해 $l \\parallel m$이고 $m \\parallel n$이면, $l$과 $n$의 관계는?',
      options: ['$l \\perp n$', '$l \\parallel n$', '만난다', '알 수 없다'],
      answer: '$l \\parallel n$',
      explanation: '평행의 **추이적 성질**:\n$l \\parallel m$이고 $m \\parallel n$이면 $l \\parallel n$\n\n같은 방향으로 평행한 직선은 서로 평행합니다.',
    },
    {
      id: 'g1d28-p5',
      type: 'short-answer',
      difficulty: 'challenge',
      question: '같은 평면 위에 서로 다른 직선 5개가 있을 때, 교점의 최대 개수를 구하시오.',
      answer: '10',
      explanation: '서로 다른 5개의 직선이 모두 다른 점에서 만날 때 교점이 최대입니다.\n\n5개의 직선에서 2개를 뽑는 조합:\n$_5C_2 = \\frac{5 \\times 4}{2 \\times 1} = 10$\n\n따라서 교점의 최대 개수는 **10개**입니다.',
    },
  ],
  realLifeExample: '도로의 교차로는 직선(Line)의 위치관계(Positional Relationship)를 보여줍니다. 평행(Parallel)한 도로(고속도로 차선), 수직(Perpendicular)으로 만나는 사거리, 비스듬히 만나는 삼거리 등 다양한 위치관계가 도시 설계에 활용됩니다!',
};

export default dayContent;
