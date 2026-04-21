import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 24,
  part: 4,
  title: 'Y-Intercept and Slope-Intercept Form',
  subtitle: 'Master $y = mx + b$ — the most important line equation in Grade 8!',
  lectures: [],
  concepts: [
    {
      id: 'bcg8-d24-c1',
      title: 'What is the Y-Intercept? (y절편이란?)',
      content:
        'The **y-intercept (y절편)** is where a line crosses the y-axis.\n\nAt the y-axis, $x = 0$ always. So to find the y-intercept, substitute $x = 0$ into the equation.\n\nExample: $y = 3x + 7$\nWhen $x = 0$: $y = 3(0) + 7 = 7$\nThe y-intercept is $(0, 7)$, and we call it $b = 7$.',
      type: 'definition',
    },
    {
      id: 'bcg8-d24-c2',
      title: 'Slope-Intercept Form: $y = mx + b$',
      content:
        'The **slope-intercept form (기울기-y절편 형태)** of a line is:\n\n$$y = mx + b$$\n\n- $m$ = **slope (기울기)** — steepness of the line\n- $b$ = **y-intercept (y절편)** — where the line starts on the y-axis\n\nExample: $y = -2x + 5$\n- Slope: $m = -2$ (going down)\n- Y-intercept: $b = 5$ → point $(0, 5)$',
      type: 'formula',
    },
    {
      id: 'bcg8-d24-c3',
      title: 'Graphing from $y = mx + b$ (공식으로 그래프 그리기)',
      content:
        'To graph $y = 2x - 1$:\n\n1. Plot the y-intercept: $(0, -1)$\n2. Use the slope $m = 2 = \\frac{2}{1}$ → go **up 2, right 1** from the y-intercept\n3. Plot the next point: $(1, 1)$\n4. Continue and draw the line\n\nTwo points are enough to draw any straight line!',
      type: 'example',
    },
    {
      id: 'bcg8-d24-c4',
      title: 'Reading $m$ and $b$ from an Equation (방정식에서 m과 b 읽기)',
      content:
        'Make sure the equation is in $y = mx + b$ form first!\n\nExample: $2y = 6x + 10$\nDivide both sides by 2: $y = 3x + 5$\nNow you can read: $m = 3$, $b = 5$ ✓\n\nWarning: if $y$ has a coefficient, divide first before reading $m$ and $b$!',
      type: 'warning',
    },
  ],
  problems: [
    {
      id: 'bcg8-d24-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: 'What is the y-intercept of the line $y = -4x + 9$?',
      options: ['$-4$', '$9$', '$0$', '$-9$'],
      answer: '$9$',
      explanation:
        'In $y = mx + b$, the y-intercept is $b$. Here $b = 9$, so the line crosses the y-axis at $(0, 9)$.',
    },
    {
      id: 'bcg8-d24-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question:
        'Write the slope and y-intercept for: $y = \\frac{1}{2}x - 3$',
      answer: 'slope = 1/2, y-intercept = -3',
      explanation:
        'Comparing with $y = mx + b$: $m = \\frac{1}{2}$ and $b = -3$.\nThe line crosses the y-axis at $(0, -3)$ and rises 1 unit for every 2 units to the right.',
    },
    {
      id: 'bcg8-d24-p3',
      type: 'multiple-choice',
      difficulty: 'basic',
      question:
        'A line has slope $m = 3$ and y-intercept $b = -2$. What is the equation?',
      options: ['$y = -2x + 3$', '$y = 3x - 2$', '$y = 3x + 2$', '$y = -3x + 2$'],
      answer: '$y = 3x - 2$',
      explanation:
        'Substitute $m = 3$ and $b = -2$ into $y = mx + b$:\n$y = 3x + (-2) = 3x - 2$',
    },
    {
      id: 'bcg8-d24-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question:
        'A cell phone plan charges a flat fee of $20/month plus $0.05 per text. Which equation represents the monthly cost $C$ for $t$ texts?',
      options: [
        '$C = 20t + 0.05$',
        '$C = 0.05t + 20$',
        '$C = 0.05t - 20$',
        '$C = 20t - 0.05$',
      ],
      answer: '$C = 0.05t + 20$',
      explanation:
        'Rate per text (slope) $= \\$0.05$, flat fee (y-intercept) $= \\$20$.\nEquation: $C = 0.05t + 20$.\nCheck: 0 texts → $C = \\$20$ (just the flat fee) ✓',
    },
    {
      id: 'bcg8-d24-p5',
      type: 'short-answer',
      difficulty: 'challenge',
      question:
        'A line passes through $(2, 7)$ and has slope $m = -3$. Find the y-intercept $b$.',
      answer: '13',
      explanation:
        'Use $y = mx + b$ with the known point $(2, 7)$ and $m = -3$:\n$7 = -3(2) + b$\n$7 = -6 + b$\n$b = 13$\nEquation: $y = -3x + 13$',
    },
  ],
  realLifeExample:
    'A taxi charges $3 flat fee plus $2 per km. Equation: $y = 2x + 3$ — slope $m=2$ (cost per km) and y-intercept $b=3$ (starting fee). You can predict any trip cost instantly! (택시 기본요금 $3 + km당 $2 = 선형 방정식 $y=2x+3$. 기울기와 y절편이 실생활 요금 계산에 딱!)',
};

export default dayContent;
