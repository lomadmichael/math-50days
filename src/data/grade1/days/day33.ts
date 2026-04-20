import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 33,
  part: 6,
  title: '다각형(Polygon)의 성질',
  subtitle: '삼각형(Triangle)부터 십각형까지! 다각형(Polygon)의 이름과 성질, 대각선(Diagonal)의 개수를 알아보자.',
  lectures: [],
  concepts: [
    {
      id: 'g1d33-c1',
      title: '다각형(Polygon)의 정의와 이름',
      content: '• **다각형(Polygon)**: 세 개 이상의 선분으로 둘러싸인 평면도형\n• **꼭짓점(Vertex)**: 두 변이 만나는 점\n• **변(Side)**: 다각형을 이루는 각 선분\n• 이름: 삼각형(Triangle)(3), 사각형(Quadrilateral)(4), 오각형(Pentagon)(5), 육각형(Hexagon)(6), 칠각형(7), 팔각형(8), 구각형(9), 십각형(10)\n• **$n$각형(n-gon)** 의 꼭짓점(Vertex), 변(Side), 내각(Interior Angle)의 수는 모두 $n$개',
      type: 'definition',
    },
    {
      id: 'g1d33-c2',
      title: '정다각형(Regular Polygon)',
      content: '• **정다각형(Regular Polygon)**: 모든 변(Side)의 길이가 같고, 모든 내각(Interior Angle)의 크기가 같은 다각형(Polygon)\n• 정삼각형(Regular Triangle), 정사각형(Regular Quadrilateral), 정오각형(Regular Pentagon), 정육각형(Regular Hexagon) 등\n• 주의: 변(Side)의 길이만 같다고 정다각형(Regular Polygon)이 아님 → **내각(Interior Angle)도 모두 같아야** 함\n• 예) 마름모는 변(Side)의 길이가 모두 같지만 내각(Interior Angle)이 다를 수 있으므로 정다각형(Regular Polygon)이 아닐 수 있음',
      type: 'definition',
    },
    {
      id: 'g1d33-c3',
      title: '대각선(Diagonal)의 개수',
      content: '• **대각선(Diagonal)**: 다각형(Polygon)에서 이웃하지 않는 두 꼭짓점(Vertex)을 이은 선분\n• 한 꼭짓점(Vertex)에서 그을 수 있는 대각선(Diagonal)의 수: $n - 3$개\n• **$n$각형(n-gon)의 대각선(Diagonal)의 총 개수**: $\\dfrac{n(n-3)}{2}$\n• 예) 오각형(Pentagon): $\\dfrac{5 \\times 2}{2} = 5$개\n• 예) 육각형(Hexagon): $\\dfrac{6 \\times 3}{2} = 9$개',
      type: 'formula',
    },
  ],
  problems: [
    {
      id: 'g1d33-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '다음 중 정다각형에 대한 설명으로 옳은 것은?',
      options: [
        '모든 변의 길이가 같으면 정다각형이다',
        '모든 내각의 크기가 같으면 정다각형이다',
        '모든 변의 길이가 같고 모든 내각의 크기가 같으면 정다각형이다',
        '대각선의 길이가 모두 같으면 정다각형이다',
      ],
      answer: '모든 변의 길이가 같고 모든 내각의 크기가 같으면 정다각형이다',
      explanation: '정다각형은 **모든 변의 길이가 같고** 동시에 **모든 내각의 크기가 같은** 다각형입니다.\n\n변의 길이만 같은 마름모나 내각만 같은 직사각형은 정다각형이 아닙니다.',
    },
    {
      id: 'g1d33-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: '팔각형의 한 꼭짓점에서 그을 수 있는 대각선의 개수를 구하시오.',
      answer: '5',
      explanation: '$n$각형의 한 꼭짓점에서 그을 수 있는 대각선의 수는 $n - 3$개입니다.\n\n팔각형: $8 - 3 = 5$개',
    },
    {
      id: 'g1d33-p3',
      type: 'short-answer',
      difficulty: 'applied',
      question: '십각형의 대각선의 총 개수를 구하시오.',
      answer: '35',
      explanation: '$n$각형의 대각선의 총 개수: $\\dfrac{n(n-3)}{2}$\n\n십각형($n = 10$): $\\dfrac{10 \\times 7}{2} = \\dfrac{70}{2} = 35$개',
    },
    {
      id: 'g1d33-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '대각선의 총 개수가 20개인 다각형은?',
      options: ['칠각형', '팔각형', '구각형', '십각형'],
      answer: '팔각형',
      explanation: '$\\dfrac{n(n-3)}{2} = 20$\n\n$n(n-3) = 40$\n\n$n = 8$일 때: $8 \\times 5 = 40$ ✓\n\n따라서 **팔각형**입니다.',
    },
    {
      id: 'g1d33-p5',
      type: 'short-answer',
      difficulty: 'challenge',
      question: '어떤 다각형의 한 꼭짓점에서 그을 수 있는 대각선의 수가 7개일 때, 이 다각형의 대각선의 총 개수를 구하시오.',
      answer: '35',
      explanation: '한 꼭짓점에서의 대각선 수: $n - 3 = 7$\n\n$n = 10$ (십각형)\n\n대각선의 총 개수: $\\dfrac{10 \\times 7}{2} = 35$개',
    },
  ],
  realLifeExample: '축구공은 정오각형(Regular Pentagon)과 정육각형(Regular Hexagon)으로 이루어져 있고, 벌집은 정육각형(Regular Hexagon) 구조입니다. 건축에서도 다각형(Polygon)의 성질을 이용해 튼튼하고 아름다운 구조물을 설계합니다!',
};

export default dayContent;
