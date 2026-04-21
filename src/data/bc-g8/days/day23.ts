import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 23,
  part: 4,
  title: 'Slope — Rate of Change',
  subtitle: 'Learn to measure steepness: rise over run!',
  lectures: [],
  concepts: [
    {
      id: 'bcg8-d23-c1',
      title: 'What is Slope? (기울기란?)',
      content:
        '**Slope (기울기)** measures how steep a line is — how much it goes up or down for every step to the right.\n\nThink of it like a hill:\n- A steep hill has a **large** slope\n- A gentle hill has a **small** slope\n- A flat road has a slope of **0**\n\nSlope tells us the **rate of change (변화율)**: how fast $y$ changes as $x$ increases.',
      type: 'definition',
    },
    {
      id: 'bcg8-d23-c2',
      title: 'Rise Over Run Formula (기울기 공식)',
      content:
        'Slope is calculated as:\n\n$$m = \\frac{\\text{rise}}{\\text{run}} = \\frac{y_2 - y_1}{x_2 - x_1}$$\n\n- **Rise (수직 변화)**: vertical change (up = positive, down = negative)\n- **Run (수평 변화)**: horizontal change (right = positive, left = negative)\n\nExample: from $(1, 2)$ to $(3, 8)$:\n$m = \\frac{8-2}{3-1} = \\frac{6}{2} = 3$',
      type: 'formula',
    },
    {
      id: 'bcg8-d23-c3',
      title: 'Positive, Negative, Zero, and Undefined Slope',
      content:
        '**Positive slope (양의 기울기)**: line goes up from left to right ↗\n\n**Negative slope (음의 기울기)**: line goes down from left to right ↘\n\n**Zero slope (기울기 0)**: horizontal line ─ (e.g., $y = 4$)\n\n**Undefined slope (정의 불가)**: vertical line | (e.g., $x = 3$) — you cannot divide by zero!',
      type: 'tip',
    },
    {
      id: 'bcg8-d23-c4',
      title: 'Slope from a Graph (그래프에서 기울기 읽기)',
      content:
        'To find slope from a graph:\n1. Pick **two clear points** on the line (points that hit grid intersections)\n2. Count the **rise** (how many units up or down)\n3. Count the **run** (how many units to the right)\n4. Calculate $m = \\frac{\\text{rise}}{\\text{run}}$\n\nWarning: always count the run going **right** to keep your sign correct!',
      type: 'warning',
    },
  ],
  problems: [
    {
      id: 'bcg8-d23-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: 'What is the slope of the line passing through $(0, 0)$ and $(4, 8)$?',
      options: ['$\\frac{1}{2}$', '$2$', '$4$', '$8$'],
      answer: '$2$',
      explanation:
        '$m = \\frac{8 - 0}{4 - 0} = \\frac{8}{4} = 2$\nFor every 1 step right, the line goes up 2.',
    },
    {
      id: 'bcg8-d23-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question:
        'Find the slope of the line through $(-1, 3)$ and $(2, -3)$.',
      answer: '-2',
      explanation:
        '$m = \\frac{-3 - 3}{2 - (-1)} = \\frac{-6}{3} = -2$\nNegative slope — the line goes down from left to right.',
    },
    {
      id: 'bcg8-d23-p3',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: 'A horizontal line has slope:',
      options: ['Positive', 'Negative', 'Zero', 'Undefined'],
      answer: 'Zero',
      explanation:
        'A horizontal line has no rise — it stays at the same $y$-value. So rise $= 0$ and $m = \\frac{0}{\\text{run}} = 0$.',
    },
    {
      id: 'bcg8-d23-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question:
        'A ramp rises 3 m over a horizontal distance of 12 m. What is the slope (as a fraction)?',
      options: ['$\\frac{1}{4}$', '$\\frac{1}{3}$', '$\\frac{3}{4}$', '$4$'],
      answer: '$\\frac{1}{4}$',
      explanation:
        '$m = \\frac{\\text{rise}}{\\text{run}} = \\frac{3}{12} = \\frac{1}{4}$\nFor every 4 m forward, the ramp rises 1 m.',
    },
    {
      id: 'bcg8-d23-p5',
      type: 'short-answer',
      difficulty: 'challenge',
      question:
        'Two points on a line are $A(2, k)$ and $B(5, 13)$. The slope is $m = 3$. Find the value of $k$.',
      answer: '4',
      explanation:
        '$m = \\frac{13 - k}{5 - 2} = 3$\n$\\frac{13 - k}{3} = 3$\n$13 - k = 9$\n$k = 4$',
    },
  ],
  realLifeExample:
    'Road signs in BC show grade percentages: "8% grade" means the road rises 8 m for every 100 m horizontal — that is a slope of $0.08$! Steep mountain highways have higher slope values. (BC 도로 표지판의 "경사도 8%"는 기울기 0.08을 뜻합니다!)',
};

export default dayContent;
