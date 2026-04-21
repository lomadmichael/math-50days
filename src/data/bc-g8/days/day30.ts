import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 30,
  part: 5,
  title: 'Unit Review & Mini Test',
  subtitle: 'Show what you know! Linear Relations + Probability + Data — all in one test.',
  isTest: true,
  lectures: [],
  concepts: [
    {
      id: 'bcg8-d30-c1',
      title: 'Part 4 Review: Linear Relations Key Formulas (일차 관계 핵심 공식)',
      content:
        '**Slope (기울기):**\n$$m = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{\\text{rise}}{\\text{run}}$$\n\n**Slope-Intercept Form (기울기-y절편 형태):**\n$$y = mx + b$$\n- $m$ = slope, $b$ = y-intercept\n\n**2-Step Equation Strategy:**\n1. Undo addition/subtraction first\n2. Undo multiplication/division second\n\nAlways check your answer by substituting back!',
      type: 'formula',
    },
    {
      id: 'bcg8-d30-c2',
      title: 'Part 5 Review: Probability & Data Key Formulas (확률 및 데이터 핵심 공식)',
      content:
        '**Basic Probability (기본 확률):**\n$$P(\\text{event}) = \\frac{\\text{favorable outcomes}}{\\text{total outcomes}}$$\n\n**Independent Events (독립 사건):**\n$$P(A \\text{ and } B) = P(A) \\times P(B)$$\n\n**Central Tendency (중심 경향):**\n- Mean = $\\frac{\\text{sum}}{\\text{count}}$\n- Median = middle value (sort first!)\n- Mode = most frequent value\n- Range = max $-$ min',
      type: 'formula',
    },
    {
      id: 'bcg8-d30-c3',
      title: 'Common Mistakes to Avoid (자주 하는 실수)',
      content:
        '1. **Slope sign**: going down = negative slope. Double-check!\n2. **Ordered pairs**: $(x, y)$ — x comes first, always.\n3. **2-Step equations**: undo addition/subtraction BEFORE multiplication/division.\n4. **Independent events**: only multiply if events truly do not affect each other.\n5. **Median with even count**: average the two middle values.\n6. **Mean vs. Median**: use median when there are outliers.',
      type: 'warning',
    },
    {
      id: 'bcg8-d30-c4',
      title: 'Test Strategy Tips (시험 전략)',
      content:
        'For this mini test:\n- Read each question carefully\n- Show your work step by step — partial marks matter!\n- Check your answers by substituting back (equations) or verifying totals (probability)\n- If stuck, move on and come back\n- Estimate first to catch obvious errors\n\nYou have practiced all of these topics — trust your preparation!',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'bcg8-d30-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question:
        '[Linear Relations] A table shows: $(1, 5)$, $(2, 8)$, $(3, 11)$, $(4, 14)$. What is the rule?',
      options: ['$y = 2x + 3$', '$y = 3x + 2$', '$y = 3x - 2$', '$y = 5x$'],
      answer: '$y = 3x + 2$',
      explanation:
        'Constant difference: $8-5 = 3$, so slope $m = 3$.\nWhen $x=1$: $y = 3(1) + b = 5 \\Rightarrow b = 2$.\nRule: $y = 3x + 2$.\nCheck: $x=4$: $3(4)+2=14$ ✓',
    },
    {
      id: 'bcg8-d30-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question:
        '[Slope] Find the slope of the line through $(2, 6)$ and $(5, 15)$.',
      answer: '3',
      explanation:
        '$m = \\frac{15 - 6}{5 - 2} = \\frac{9}{3} = 3$',
    },
    {
      id: 'bcg8-d30-p3',
      type: 'short-answer',
      difficulty: 'basic',
      question:
        '[Equations] Solve: $5x - 7 = 18$',
      answer: '5',
      explanation:
        'Step 1: $5x = 18 + 7 = 25$\nStep 2: $x = \\frac{25}{5} = 5$\nCheck: $5(5) - 7 = 25 - 7 = 18$ ✓',
    },
    {
      id: 'bcg8-d30-p4',
      type: 'multiple-choice',
      difficulty: 'basic',
      question:
        '[Probability] You flip a coin and roll a 6-sided die. What is $P(\\text{Heads and a number less than 3})$?',
      options: ['$\\frac{1}{6}$', '$\\frac{1}{4}$', '$\\frac{1}{3}$', '$\\frac{2}{3}$'],
      answer: '$\\frac{1}{6}$',
      explanation:
        '$P(\\text{Heads}) = \\frac{1}{2}$\n$P(< 3) = P(1 \\text{ or } 2) = \\frac{2}{6} = \\frac{1}{3}$\n$P(\\text{Heads and } < 3) = \\frac{1}{2} \\times \\frac{1}{3} = \\frac{1}{6}$',
    },
    {
      id: 'bcg8-d30-p5',
      type: 'short-answer',
      difficulty: 'applied',
      question:
        '[Data] Test scores: 65, 72, 80, 80, 88, 95. Find the mean and median.',
      answer: 'Mean = 80, Median = 80',
      explanation:
        '**Mean:** $\\frac{65+72+80+80+88+95}{6} = \\frac{480}{6} = 80$\n\n**Median:** 6 values → average of 3rd and 4th:\n$\\frac{80 + 80}{2} = 80$\n\nBoth mean and median equal 80 — a symmetric dataset!',
    },
    {
      id: 'bcg8-d30-p6',
      type: 'multiple-choice',
      difficulty: 'applied',
      question:
        '[Graphing] A line has equation $y = -2x + 6$. What are its slope and y-intercept?',
      options: [
        'slope $= 6$, y-intercept $= -2$',
        'slope $= -2$, y-intercept $= 6$',
        'slope $= 2$, y-intercept $= -6$',
        'slope $= -6$, y-intercept $= 2$',
      ],
      answer: 'slope $= -2$, y-intercept $= 6$',
      explanation:
        'In $y = mx + b$: $m = -2$ (slope) and $b = 6$ (y-intercept).\nThe line crosses the y-axis at $(0, 6)$ and goes down 2 for every 1 step right.',
    },
    {
      id: 'bcg8-d30-p7',
      type: 'short-answer',
      difficulty: 'challenge',
      question:
        '[Challenge] A line passes through $(0, -4)$ and $(3, 8)$. A point $(k, 20)$ is also on the line. Find $k$.',
      answer: '6',
      explanation:
        'Slope: $m = \\frac{8-(-4)}{3-0} = \\frac{12}{3} = 4$\nY-intercept: $b = -4$ (given by $(0,-4)$)\nEquation: $y = 4x - 4$\nSolve for $k$ when $y = 20$:\n$20 = 4k - 4 \\Rightarrow 4k = 24 \\Rightarrow k = 6$',
    },
  ],
  realLifeExample:
    'Everything you learned in Parts 4 and 5 connects! A scientist collects data (Part 5 — data analysis), finds a linear pattern (Part 4 — linear relations), writes an equation (Part 4 — slope & y-intercept), and predicts future outcomes with probability (Part 5). Math is a complete toolkit! (데이터 수집 → 선형 패턴 발견 → 방정식 작성 → 확률로 예측 — 이게 바로 실제 과학자의 사고 흐름입니다!)',
};

export default dayContent;
