import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 40,
  part: 6,
  title: '피타고라스 정리 (2)',
  subtitle: '피타고라스 정리를 다양한 문제에 활용해 보자!',
  lectures: [],
  concepts: [
    {
      id: 'g2d40-c1',
      title: '좌표평면에서 두 점 사이의 거리',
      content: '두 점 $A(x_1, y_1)$, $B(x_2, y_2)$ 사이의 거리:\\n\\n$$\\overline{AB} = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$\\n\\n이것은 피타고라스 정리의 직접적인 응용!\\n가로 거리와 세로 거리로 직각삼각형을 만들면 됩니다.',
      type: 'formula',
    },
    {
      id: 'g2d40-c2',
      title: '직각삼각형의 높이 구하기',
      content: '이등변삼각형 $ABC$에서 $\\overline{AB} = \\overline{AC}$이고 밑변에 수선을 내리면 직각삼각형이 생깁니다.\\n\\n꼭지에서 밑변에 내린 수선의 발 $H$:\\n$$\\overline{AH} = \\sqrt{\\overline{AB}^2 - \\overline{BH}^2}$$\\n\\n$\\overline{BH} = \\frac{1}{2}\\overline{BC}$ (밑변의 절반)',
      type: 'formula',
    },
    {
      id: 'g2d40-c3',
      title: '대각선의 길이',
      content: '직사각형의 가로 $a$, 세로 $b$일 때 대각선:\\n$$d = \\sqrt{a^2 + b^2}$$\\n\\n정사각형의 한 변 $a$일 때 대각선:\\n$$d = \\sqrt{2}a$$',
      type: 'formula',
    },
    {
      id: 'g2d40-c4',
      title: '실생활 활용 팁',
      content: '피타고라스 정리 활용 문제 유형:\\n• 사다리 문제: 벽에 기대 세운 사다리\\n• 거리 문제: 최단 거리 구하기\\n• 넓이 문제: 높이를 먼저 구한 후 넓이 계산\\n• 대각선 문제: 직사각형, TV 화면 크기\\n\\n항상 직각삼각형을 찾는 것이 핵심!',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'g2d40-p1',
      type: 'short-answer',
      difficulty: 'basic',
      question: '두 점 $A(1, 2)$, $B(4, 6)$ 사이의 거리를 구하시오.',
      answer: '5',
      explanation: '$\\overline{AB} = \\sqrt{(4-1)^2 + (6-2)^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$',
    },
    {
      id: 'g2d40-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: '가로 $12$cm, 세로 $5$cm인 직사각형의 대각선의 길이를 구하시오.',
      answer: '13',
      explanation: '$d = \\sqrt{12^2 + 5^2} = \\sqrt{144 + 25} = \\sqrt{169} = 13$(cm)',
    },
    {
      id: 'g2d40-p3',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '한 변의 길이가 $6$cm인 정삼각형의 높이는?',
      options: ['$3$cm', '$3\\sqrt{2}$cm', '$3\\sqrt{3}$cm', '$6\\sqrt{3}$cm'],
      answer: '$3\\sqrt{3}$cm',
      explanation: '정삼각형의 높이를 $h$라 하면:\\n밑변의 절반 $= 3$cm\\n$h = \\sqrt{6^2 - 3^2} = \\sqrt{36 - 9} = \\sqrt{27} = 3\\sqrt{3}$(cm)',
    },
    {
      id: 'g2d40-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question: '길이 $10$m인 사다리를 벽에 기대 세웠더니 사다리 아래쪽이 벽에서 $6$m 떨어져 있다. 사다리가 벽에 닿는 높이를 구하시오.',
      answer: '8',
      explanation: '사다리(빗변) $= 10$m, 바닥(밑변) $= 6$m\\n높이 $= \\sqrt{10^2 - 6^2} = \\sqrt{100 - 36} = \\sqrt{64} = 8$(m)',
    },
    {
      id: 'g2d40-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '한 변의 길이가 $4$cm인 정사각형의 대각선 위에 한 꼭짓점을 갖는 정삼각형이 있다. 정사각형의 대각선의 길이는?',
      options: ['$4$cm', '$4\\sqrt{2}$cm', '$4\\sqrt{3}$cm', '$8$cm'],
      answer: '$4\\sqrt{2}$cm',
      explanation: '정사각형의 한 변 $= 4$cm\\n대각선 $= \\sqrt{4^2 + 4^2} = \\sqrt{32} = 4\\sqrt{2}$(cm)',
    },
  ],
  realLifeExample: 'TV 화면 크기가 55인치라는 것은 대각선 길이가 55인치라는 뜻이에요! 가로세로 비율이 16:9일 때 피타고라스 정리로 실제 가로, 세로 길이를 계산할 수 있습니다. 또한 드론이 최단 거리로 이동할 때도 피타고라스 정리를 활용하죠!',
};

export default dayContent;
