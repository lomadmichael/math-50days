import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 8,
  part: 1,
  title: '등식의 변형',
  subtitle: '등식을 변형하여 원하는 문자에 대해 풀어보자!',
  lectures: [],
  concepts: [
    {
      id: 'g2d8-c1',
      title: '등식의 성질',
      content: '등식의 양변에 같은 수를 더하거나, 빼거나, 곱하거나, 나눌 수 있습니다.\n\n$a = b$이면:\n- $a + c = b + c$\n- $a - c = b - c$\n- $ac = bc$\n- $\\frac{a}{c} = \\frac{b}{c}$ (단, $c \\neq 0$)',
      type: 'definition',
    },
    {
      id: 'g2d8-c2',
      title: '등식의 변형 (특정 문자에 대해 풀기)',
      content: '공식이나 등식에서 원하는 문자를 좌변에 남기고 나머지를 우변으로 이항합니다.\n\n예: $2x + y = 5$를 $x$에 대해 풀면\n$2x = 5 - y$\n$x = \\frac{5 - y}{2}$\n\n예: $S = \\frac{1}{2}ah$를 $h$에 대해 풀면\n$2S = ah$\n$h = \\frac{2S}{a}$',
      type: 'formula',
    },
    {
      id: 'g2d8-c3',
      title: '분수가 있는 등식 변형',
      content: '분수가 있으면 먼저 **양변에 분모를 곱하여** 분수를 없앱니다.\n\n$\\frac{x}{3} + \\frac{y}{2} = 1$을 $x$에 대해 풀기:\n양변에 6을 곱하면: $2x + 3y = 6$\n$2x = 6 - 3y$\n$x = \\frac{6 - 3y}{2}$',
      type: 'example',
    },
    {
      id: 'g2d8-c4',
      title: '변형 시 주의사항',
      content: '1. 양변을 **0이 될 수 있는 문자로 나누면 안 됩니다**.\n2. 부호에 주의! 양변에 음수를 곱하면 부등호 방향이 바뀝니다 (부등식의 경우).\n3. 이항할 때 부호를 바꾸는 것을 잊지 마세요!\n\n$ax - b = c$ → $ax = c + b$ → $x = \\frac{c + b}{a}$',
      type: 'warning',
    },
  ],
  problems: [
    {
      id: 'g2d8-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$3x - y = 6$을 $y$에 대해 풀면?',
      options: ['$y = 3x + 6$', '$y = 3x - 6$', '$y = -3x + 6$', '$y = 6 - x$'],
      answer: '$y = 3x - 6$',
      explanation: '$3x - y = 6$\n$-y = 6 - 3x$\n$y = -6 + 3x = 3x - 6$',
    },
    {
      id: 'g2d8-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: '$v = v_0 + at$를 $t$에 대해 풀면 $t = $? ($v - v_0$을 $a$로 나눈 형태로 답하시오)',
      answer: '(v-v_0)/a',
      explanation: '$v = v_0 + at$\n$v - v_0 = at$\n$t = \\frac{v - v_0}{a}$',
    },
    {
      id: 'g2d8-p3',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$S = \\frac{(a+b)h}{2}$를 $a$에 대해 풀면?',
      options: ['$a = \\frac{2S}{h} - b$', '$a = \\frac{2S - b}{h}$', '$a = \\frac{S}{2h} - b$', '$a = 2Sh - b$'],
      answer: '$a = \\frac{2S}{h} - b$',
      explanation: '$2S = (a + b)h$\n$\\frac{2S}{h} = a + b$\n$a = \\frac{2S}{h} - b$',
    },
    {
      id: 'g2d8-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$\\frac{x}{a} - \\frac{y}{b} = 1$을 $y$에 대해 풀면?',
      options: ['$y = \\frac{bx}{a} - b$', '$y = b - \\frac{bx}{a}$', '$y = \\frac{bx - ab}{a}$', '$y = \\frac{bx}{a} - b$과 $y = \\frac{bx - ab}{a}$은 같다'],
      answer: '$y = \\frac{bx}{a} - b$과 $y = \\frac{bx - ab}{a}$은 같다',
      explanation: '$\\frac{x}{a} - \\frac{y}{b} = 1$\n$\\frac{x}{a} - 1 = \\frac{y}{b}$\n$y = b\\left(\\frac{x}{a} - 1\\right) = \\frac{bx}{a} - b = \\frac{bx - ab}{a}$\n\n두 형태 모두 같은 답입니다.',
    },
    {
      id: 'g2d8-p5',
      type: 'short-answer',
      difficulty: 'applied',
      question: '$C = \\frac{5}{9}(F - 32)$를 $F$에 대해 풀면 $F = \\frac{9C}{5} + ?$이다. ?에 들어갈 수를 구하시오.',
      answer: '32',
      explanation: '$C = \\frac{5}{9}(F - 32)$\n$\\frac{9C}{5} = F - 32$\n$F = \\frac{9C}{5} + 32$\n\n이것은 섭씨를 화씨로 바꾸는 공식입니다.',
    },
    {
      id: 'g2d8-p6',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '$\\frac{1}{f} = \\frac{1}{a} + \\frac{1}{b}$를 $b$에 대해 풀면?',
      options: ['$b = \\frac{af}{a - f}$', '$b = \\frac{af}{a + f}$', '$b = \\frac{a - f}{af}$', '$b = a + f$'],
      answer: '$b = \\frac{af}{a - f}$',
      explanation: '$\\frac{1}{b} = \\frac{1}{f} - \\frac{1}{a} = \\frac{a - f}{af}$\n\n역수를 취하면: $b = \\frac{af}{a - f}$\n\n이것은 렌즈의 공식입니다!',
    },
  ],
  realLifeExample: '온도 변환 공식 $C = \\frac{5}{9}(F - 32)$에서, 섭씨 온도를 알면 화씨를 구할 수 있습니다. $F = \\frac{9C}{5} + 32$로 변형하면, 체온 $36.5$도는 화씨 $\\frac{9 \\times 36.5}{5} + 32 = 97.7$도입니다!',
};

export default dayContent;
