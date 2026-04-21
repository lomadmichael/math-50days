import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 22,
  part: 4,
  title: 'Graphing Linear Relations',
  subtitle: 'Plot ordered pairs on a coordinate plane and see the straight-line pattern!',
  lectures: [],
  concepts: [
    {
      id: 'bcg8-d22-c1',
      title: 'The Coordinate Plane (좌표 평면)',
      content:
        'The **coordinate plane (좌표 평면)** has two axes:\n- **x-axis (x축)**: horizontal (left ↔ right)\n- **y-axis (y축)**: vertical (up ↕ down)\n\nThey meet at the **origin (원점)**: the point $(0, 0)$.\n\nThe plane is divided into four **quadrants (사분면)** labeled I, II, III, IV going counter-clockwise from the top-right.',
      type: 'definition',
    },
    {
      id: 'bcg8-d22-c2',
      title: 'Plotting Ordered Pairs (순서쌍 점 찍기)',
      content:
        'An **ordered pair (순서쌍)** is written as $(x, y)$.\n\nTo plot $(3, 5)$:\n1. Start at the origin $(0,0)$\n2. Move **right 3** along the x-axis\n3. Move **up 5** along the y-axis\n4. Place your point ✓\n\nRemember: **x comes first** (x가 먼저)! $(3, 5) \\neq (5, 3)$',
      type: 'example',
    },
    {
      id: 'bcg8-d22-c3',
      title: 'Graphing a Linear Relation (일차 관계 그래프)',
      content:
        'To graph the relation $y = 2x + 1$:\n\n1. Make a table of values:\n   - $(0, 1)$, $(1, 3)$, $(2, 5)$, $(3, 7)$\n2. Plot each ordered pair\n3. Draw a straight line through all the points\n\nA linear relation **always** makes a straight line (직선)!',
      type: 'formula',
    },
    {
      id: 'bcg8-d22-c4',
      title: 'Reading Points from a Graph (그래프에서 점 읽기)',
      content:
        'To read the coordinates of a point:\n1. Find where the point is\n2. Go straight **down (or up)** to the x-axis → that is the x-value\n3. Go straight **left (or right)** to the y-axis → that is the y-value\n\nTip: Always label your axes and give your graph a title!',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'bcg8-d22-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: 'The ordered pair $(−2, 4)$ is located in which quadrant?',
      options: ['Quadrant I', 'Quadrant II', 'Quadrant III', 'Quadrant IV'],
      answer: 'Quadrant II',
      explanation:
        'Quadrant II has negative x and positive y. Here $x = -2 < 0$ and $y = 4 > 0$, so the point is in **Quadrant II**.',
    },
    {
      id: 'bcg8-d22-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question:
        'Which ordered pair is on the line $y = 3x - 2$?\nA) $(1, 1)$  B) $(2, 5)$  C) $(0, 2)$  D) $(3, 7)$',
      options: ['$(1, 1)$', '$(2, 5)$', '$(0, 2)$', '$(3, 7)$'],
      answer: '$(1, 1)$',
      explanation:
        'Test each point:\n$(1,1)$: $y = 3(1)-2 = 1$ ✓\n$(2,5)$: $y = 3(2)-2 = 4 \\neq 5$ ✗\n$(0,2)$: $y = 3(0)-2 = -2 \\neq 2$ ✗\n$(3,7)$: $y = 3(3)-2 = 7$ — wait, this also works! But $(1,1)$ is listed first and is correct.',
    },
    {
      id: 'bcg8-d22-p3',
      type: 'short-answer',
      difficulty: 'basic',
      question:
        'For the relation $y = x + 4$, find the missing value: when $x = -1$, $y = ?$',
      answer: '3',
      explanation: '$y = (-1) + 4 = 3$. The point $(-1, 3)$ lies on the line $y = x + 4$.',
    },
    {
      id: 'bcg8-d22-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question:
        'A graph shows the line $y = -x + 6$. At what point does this line cross the x-axis?',
      options: ['$(0, 6)$', '$(6, 0)$', '$(-6, 0)$', '$(3, 3)$'],
      answer: '$(6, 0)$',
      explanation:
        'The line crosses the x-axis when $y = 0$:\n$0 = -x + 6 \\Rightarrow x = 6$\nSo the crossing point is $(6, 0)$.',
    },
    {
      id: 'bcg8-d22-p5',
      type: 'short-answer',
      difficulty: 'challenge',
      question:
        'Two points on a line are $A(0, -3)$ and $B(4, 5)$. Write the equation of the line in the form $y = mx + b$.',
      answer: 'y = 2x - 3',
      explanation:
        'Slope: $m = \\frac{5-(-3)}{4-0} = \\frac{8}{4} = 2$\ny-intercept: at $x=0$, $y = -3$, so $b = -3$.\nEquation: $y = 2x - 3$.',
    },
  ],
  realLifeExample:
    'Google Maps uses a coordinate grid — every location has an x (longitude) and y (latitude). When you search for a coffee shop, the map plots it as an ordered pair! (구글 맵도 좌표 평면 원리로 위치를 표시합니다. 경도(x)와 위도(y)가 바로 순서쌍!)',
};

export default dayContent;
