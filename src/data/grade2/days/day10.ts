import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 10,
  part: 2,
  title: '부등식의 성질',
  subtitle: '부등호의 방향과 부등식의 기본 성질을 확실히 이해하자!',
  lectures: [],
  concepts: [
    {
      id: 'g2d10-c1',
      title: '부등식이란?',
      content: '부등호($<$, $>$, $\\\\leq$, $\\\\geq$)를 사용하여 두 수 또는 식의 대소 관계를 나타낸 식을 **부등식**이라 합니다.\n\n- $x > 3$: $x$는 3보다 크다\n- $x \\\\leq 5$: $x$는 5 이하이다\n- $2x + 1 < 7$: $2x + 1$은 7보다 작다',
      type: 'definition',
    },
    {
      id: 'g2d10-c2',
      title: '부등식의 성질 ① 덧셈/뺄셈',
      content: '부등식의 양변에 같은 수를 더하거나 빼어도 **부등호의 방향은 변하지 않습니다**.\n\n$a < b$이면:\n- $a + c < b + c$\n- $a - c < b - c$\n\n예: $3 < 5$이면 $3 + 2 < 5 + 2$ → $5 < 7$ ✓',
      type: 'formula',
    },
    {
      id: 'g2d10-c3',
      title: '부등식의 성질 ② 양수 곱셈/나눗셈',
      content: '양변에 **양수**를 곱하거나 나누면 부등호의 **방향이 변하지 않습니다**.\n\n$a < b$이고 $c > 0$이면:\n- $ac < bc$\n- $\\\\frac{a}{c} < \\\\frac{b}{c}$\n\n예: $2 < 6$이면 $2 \\\\times 3 < 6 \\\\times 3$ → $6 < 18$ ✓',
      type: 'formula',
    },
    {
      id: 'g2d10-c4',
      title: '부등식의 성질 ③ 음수 곱셈/나눗셈',
      content: '양변에 **음수**를 곱하거나 나누면 부등호의 **방향이 반대**로 바뀝니다!\n\n$a < b$이고 $c < 0$이면:\n- $ac > bc$\n- $\\\\frac{a}{c} > \\\\frac{b}{c}$\n\n예: $2 < 6$이면 $2 \\\\times (-1) > 6 \\\\times (-1)$ → $-2 > -6$ ✓\n\n이것이 부등식에서 **가장 중요한 성질**입니다!',
      type: 'warning',
    },
  ],
  problems: [
    {
      id: 'g2d10-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '"$x$는 $-2$보다 크거나 같다"를 부등식으로 나타내면?',
      options: ['$x > -2$', '$x \\\\geq -2$', '$x < -2$', '$x \\\\leq -2$'],
      answer: '$x \\\\geq -2$',
      explanation: '"크거나 같다"는 $\\\\geq$ (이상)을 사용합니다.\n따라서 $x \\\\geq -2$',
    },
    {
      id: 'g2d10-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$a < b$일 때, 다음 중 항상 옳은 것은?',
      options: ['$-a < -b$', '$-a > -b$', '$2a > 2b$', '$a + 1 > b$'],
      answer: '$-a > -b$',
      explanation: '$a < b$의 양변에 $-1$을 곱하면 부등호가 바뀝니다.\n$-a > -b$ ✓',
    },
    {
      id: 'g2d10-p3',
      type: 'short-answer',
      difficulty: 'basic',
      question: '$-3 < x \\\\leq 5$를 만족하는 정수 $x$의 개수를 구하시오.',
      answer: '8',
      explanation: '$-3 < x \\\\leq 5$를 만족하는 정수:\n$x = -2, -1, 0, 1, 2, 3, 4, 5$\n\n$x = -3$은 포함하지 않고(미만), $x = 5$는 포함합니다(이하).\n따라서 **8개**',
    },
    {
      id: 'g2d10-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$a > b > 0$일 때, 다음 중 항상 옳은 것은?',
      options: ['$a^2 < b^2$', '$\\\\frac{1}{a} > \\\\frac{1}{b}$', '$a - b > 0$', '$-a > -b$'],
      answer: '$a - b > 0$',
      explanation: '$a > b$이므로 양변에서 $b$를 빼면 $a - b > 0$ ✓\n\n$a^2 > b^2$ (양수이므로), $\\\\frac{1}{a} < \\\\frac{1}{b}$ (양수에서 역수는 반대), $-a < -b$',
    },
    {
      id: 'g2d10-p5',
      type: 'short-answer',
      difficulty: 'applied',
      question: '$-2 \\\\leq a < 3$일 때, $2a + 1$의 값의 범위에서 최솟값을 구하시오.',
      answer: '-3',
      explanation: '$-2 \\\\leq a < 3$의 각 변에 2를 곱하면:\n$-4 \\\\leq 2a < 6$\n각 변에 1을 더하면:\n$-3 \\\\leq 2a + 1 < 7$\n\n따라서 최솟값은 $-3$',
    },
    {
      id: 'g2d10-p6',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '$1 < a < 4$, $-2 < b < 3$일 때, $a - b$의 값의 범위는?',
      options: ['$-2 < a-b < 6$', '$-1 < a-b < 2$', '$3 < a-b < 7$', '$-2 < a-b < 7$'],
      answer: '$-2 < a-b < 6$',
      explanation: '$a - b$의 범위를 구하려면:\n$a$의 최솟값과 $b$의 최댓값 → $a - b$의 최솟값\n$a$의 최댓값과 $b$의 최솟값 → $a - b$의 최댓값\n\n$1 - 3 < a - b < 4 - (-2)$\n$-2 < a - b < 6$',
    },
  ],
  realLifeExample: '놀이공원에서 "키 $120$ cm 이상 탑승 가능"이라는 안내판은 부등식으로 $h \\\\geq 120$입니다. 일상에서 "이하", "이상", "미만", "초과" 같은 표현은 모두 부등식으로 나타낼 수 있습니다!',
};

export default dayContent;
