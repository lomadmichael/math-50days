import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 34,
  part: 6,
  title: '다각형(Polygon)의 내각(Interior Angle)과 외각(Exterior Angle)',
  subtitle: '다각형(Polygon)의 내각의 합(Sum of Interior Angles)과 외각의 합(Sum of Exterior Angles)을 공식으로 구해 보자!',
  lectures: [],
  concepts: [
    {
      id: 'g1d34-c1',
      title: '다각형(Polygon)의 내각의 합(Sum of Interior Angles)',
      content: '• **내각(Interior Angle)**: 다각형(Polygon)의 내부에 있는 각\n• $n$각형(n-gon)의 **내각의 합(Sum of Interior Angles)**: $(n - 2) \\times 180°$\n• 삼각형(Triangle): $(3-2) \\times 180° = 180°$\n• 사각형(Quadrilateral): $(4-2) \\times 180° = 360°$\n• 오각형(Pentagon): $(5-2) \\times 180° = 540°$\n• 원리: $n$각형은 한 꼭짓점(Vertex)에서 대각선(Diagonal)을 그으면 $(n-2)$개의 삼각형(Triangle)으로 나뉨',
      type: 'formula',
    },
    {
      id: 'g1d34-c2',
      title: '다각형(Polygon)의 외각의 합(Sum of Exterior Angles)',
      content: '• **외각(Exterior Angle)**: 다각형(Polygon)의 한 변(Side)과 그 이웃 변의 연장선이 이루는 각\n• 내각(Interior Angle) + 외각(Exterior Angle) = $180°$ (하나의 꼭짓점(Vertex)에서)\n• **모든 다각형(Polygon)의 외각의 합(Sum of Exterior Angles) = $360°$** (변의 수에 관계없이 항상 일정!)\n• 이것은 삼각형(Triangle)이든 십각형이든 외각(Exterior Angle)의 합은 항상 $360°$',
      type: 'formula',
    },
    {
      id: 'g1d34-c3',
      title: '정다각형(Regular Polygon)의 한 내각(Interior Angle)과 한 외각(Exterior Angle)',
      content: '• 정$n$각형(Regular n-gon)의 한 내각(Interior Angle): $\\dfrac{(n-2) \\times 180°}{n}$\n• 정$n$각형(Regular n-gon)의 한 외각(Exterior Angle): $\\dfrac{360°}{n}$\n• 예) 정육각형(Regular Hexagon)의 한 내각(Interior Angle): $\\dfrac{4 \\times 180°}{6} = 120°$\n• 예) 정육각형(Regular Hexagon)의 한 외각(Exterior Angle): $\\dfrac{360°}{6} = 60°$\n• 한 내각(Interior Angle) + 한 외각(Exterior Angle) = $180°$',
      type: 'formula',
    },
  ],
  problems: [
    {
      id: 'g1d34-p1',
      type: 'short-answer',
      difficulty: 'basic',
      question: '칠각형의 내각의 합을 구하시오. (단위: 도)',
      answer: '900',
      explanation: '칠각형의 내각의 합: $(7-2) \\times 180° = 5 \\times 180° = 900°$',
    },
    {
      id: 'g1d34-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '다음 중 다각형의 외각의 합에 대한 설명으로 옳은 것은?',
      options: [
        '삼각형의 외각의 합은 180°이다',
        '사각형의 외각의 합은 720°이다',
        '변의 수가 많을수록 외각의 합이 커진다',
        '모든 다각형의 외각의 합은 360°이다',
      ],
      answer: '모든 다각형의 외각의 합은 360°이다',
      explanation: '다각형의 **외각의 합은 변의 수에 관계없이 항상 $360°$**입니다.\n\n삼각형이든 십각형이든 외각의 합은 모두 같습니다.',
    },
    {
      id: 'g1d34-p3',
      type: 'short-answer',
      difficulty: 'applied',
      question: '정십이각형의 한 내각의 크기를 구하시오. (단위: 도)',
      answer: '150',
      explanation: '정$n$각형의 한 내각: $\\dfrac{(n-2) \\times 180°}{n}$\n\n정십이각형($n = 12$): $\\dfrac{(12-2) \\times 180°}{12} = \\dfrac{1800°}{12} = 150°$',
    },
    {
      id: 'g1d34-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question: '한 외각의 크기가 $40°$인 정다각형은 정 몇 각형인지 구하시오.',
      answer: '9',
      explanation: '정$n$각형의 한 외각: $\\dfrac{360°}{n}$\n\n$\\dfrac{360°}{n} = 40°$\n\n$n = \\dfrac{360}{40} = 9$\n\n따라서 **정구각형**입니다.',
    },
    {
      id: 'g1d34-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '오각형의 내각 중 네 개의 크기가 각각 $100°$, $110°$, $120°$, $130°$일 때, 나머지 한 내각의 크기는?',
      options: ['$60°$', '$70°$', '$80°$', '$90°$'],
      answer: '$80°$',
      explanation: '오각형의 내각의 합: $(5-2) \\times 180° = 540°$\n\n나머지 한 내각: $540° - (100° + 110° + 120° + 130°)$\n$= 540° - 460° = 80°$',
    },
  ],
  realLifeExample: '정지 표지판은 정팔각형(Regular Octagon) 모양인데, 한 내각(Interior Angle)이 135°입니다. 타일이나 벽돌을 빈틈없이 깔 때도 내각(Interior Angle)의 크기를 고려해야 합니다. 정삼각형(Triangle)(60°), 정사각형(Regular Quadrilateral)(90°), 정육각형(Regular Hexagon)(120°)만 평면을 빈틈없이 채울 수 있어요!',
};

export default dayContent;
