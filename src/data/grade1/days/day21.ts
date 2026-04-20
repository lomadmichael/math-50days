import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 21,
  part: 4,
  title: '좌표평면(Coordinate Plane) 이해하기',
  subtitle: '점의 위치를 숫자 쌍으로 나타내는 좌표평면(Coordinate Plane)의 세계로 들어가 보자!',
  lectures: [],
  concepts: [
    {
      id: 'g1d21-c1',
      title: '좌표평면(Coordinate Plane)과 좌표축(Coordinate Axes)',
      content: '• **좌표평면(Coordinate Plane)**: 가로축(**x축(x-axis)**)과 세로축(**y축(y-axis)**)이 직각으로 만나는 평면\n• **원점(Origin)**: x축과 y축이 만나는 점, $O(0, 0)$\n• x축 위의 점: $y = 0$ → $(a, 0)$\n• y축 위의 점: $x = 0$ → $(0, b)$',
      type: 'definition',
    },
    {
      id: 'g1d21-c2',
      title: '순서쌍(Ordered Pair)과 좌표(Coordinates)',
      content: '• **순서쌍(Ordered Pair)**: 두 수를 순서대로 짝지은 것 $(x, y)$\n• $x$좌표(x-coordinate): 원점에서 **오른쪽(+)** 또는 **왼쪽(-)** 으로 이동한 거리\n• $y$좌표(y-coordinate): 원점에서 **위쪽(+)** 또는 **아래쪽(-)** 으로 이동한 거리\n• 주의: $(2, 3)$과 $(3, 2)$는 서로 **다른 점**이다!',
      type: 'definition',
    },
    {
      id: 'g1d21-c3',
      title: '사분면(Quadrant)',
      content: '좌표평면은 x축과 y축에 의해 **4개의 영역**으로 나뉩니다.\n• **제1사분면(1st Quadrant)**: $x > 0, y > 0$ (오른쪽 위)\n• **제2사분면(2nd Quadrant)**: $x < 0, y > 0$ (왼쪽 위)\n• **제3사분면(3rd Quadrant)**: $x < 0, y < 0$ (왼쪽 아래)\n• **제4사분면(4th Quadrant)**: $x > 0, y < 0$ (오른쪽 아래)\n• 축 위의 점은 어떤 사분면에도 속하지 않음!',
      type: 'formula',
    },
  ],
  problems: [
    {
      id: 'g1d21-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '점 $A(-3, 5)$는 제 몇 사분면 위의 점인가?',
      options: ['제1사분면', '제2사분면', '제3사분면', '제4사분면'],
      answer: '제2사분면',
      explanation: '$x = -3 < 0$, $y = 5 > 0$\n\n$x < 0$이고 $y > 0$이면 **제2사분면**입니다.',
    },
    {
      id: 'g1d21-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: '점 $B(4, 0)$은 어느 축 위에 있는가? (x축 또는 y축)',
      answer: 'x축',
      explanation: '$y$좌표가 $0$이므로 **x축** 위의 점입니다.\n\nx축 위의 점은 항상 $(a, 0)$ 형태입니다.',
    },
    {
      id: 'g1d21-p3',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '점 $P(a, -2)$가 제3사분면 위의 점일 때, $a$의 부호는?',
      options: ['$a > 0$', '$a < 0$', '$a = 0$', '알 수 없다'],
      answer: '$a < 0$',
      explanation: '제3사분면: $x < 0$이고 $y < 0$\n\n$y = -2 < 0$ ✓\n제3사분면이려면 $x = a < 0$이어야 합니다.',
    },
    {
      id: 'g1d21-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question: '점 $A(3, -4)$에서 x축까지의 거리를 구하시오.',
      answer: '4',
      explanation: 'x축까지의 거리는 $y$좌표의 **절댓값**입니다.\n\n$|{-4}| = 4$',
    },
    {
      id: 'g1d21-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '점 $A(a, b)$가 제4사분면 위의 점일 때, 점 $B(-a, -b)$는 제 몇 사분면 위의 점인가?',
      options: ['제1사분면', '제2사분면', '제3사분면', '제4사분면'],
      answer: '제2사분면',
      explanation: '제4사분면: $a > 0$, $b < 0$\n\n$B(-a, -b)$에서:\n$-a < 0$ (양수의 음수)\n$-b > 0$ (음수의 음수)\n\n$x < 0, y > 0$ → **제2사분면**',
    },
  ],
  realLifeExample: '좌표평면(Coordinate Plane)은 지도 앱에서 위치를 나타낼 때 사용됩니다! GPS의 위도와 경도도 순서쌍(Ordered Pair) 형태이고, 게임에서 캐릭터의 위치도 좌표(Coordinates)로 표현해요.',
};

export default dayContent;
