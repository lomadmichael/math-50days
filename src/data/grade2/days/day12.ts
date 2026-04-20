import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 12,
  part: 2,
  title: '일차부등식 풀이 (2)',
  subtitle: '괄호, 분수, 소수가 포함된 복잡한 일차부등식도 거뜬히!',
  lectures: [],
  concepts: [
    {
      id: 'g2d12-c1',
      title: '괄호가 있는 부등식',
      content: '분배법칙으로 괄호를 풀고 동류항을 정리합니다.\n\n예: $2(3x - 1) \\leq 4(x + 2)$\n$6x - 2 \\leq 4x + 8$\n$2x \\leq 10$\n$x \\leq 5$',
      type: 'example',
    },
    {
      id: 'g2d12-c2',
      title: '분수가 있는 부등식',
      content: '**분모의 최소공배수를 양변에 곱하여** 분수를 없앱니다.\n\n예: $\\frac{x}{2} - \\frac{x+1}{3} > 1$\n양변에 6을 곱하면:\n$3x - 2(x+1) > 6$\n$3x - 2x - 2 > 6$\n$x > 8$',
      type: 'formula',
    },
    {
      id: 'g2d12-c3',
      title: '소수가 있는 부등식',
      content: '**10의 거듭제곱을 양변에 곱하여** 소수를 없앱니다.\n\n예: $0.3x - 1.2 \\geq 0.5x$\n양변에 10을 곱하면:\n$3x - 12 \\geq 5x$\n$-2x \\geq 12$\n$x \\leq -6$ (음수로 나누므로 부등호 반대)',
      type: 'formula',
    },
    {
      id: 'g2d12-c4',
      title: '분모가 음수일 때 주의!',
      content: '양변에 음수인 분모를 곱할 때 **부등호 방향이 바뀝니다**!\n\n$\\frac{x-1}{-2} > 3$\n양변에 $-2$를 곱하면:\n$x - 1 < -6$ (부등호 반대!)\n$x < -5$',
      type: 'warning',
    },
  ],
  problems: [
    {
      id: 'g2d12-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$\\frac{x}{3} + 1 > 3$의 해는?',
      options: ['$x > 6$', '$x > 2$', '$x > 8$', '$x < 6$'],
      answer: '$x > 6$',
      explanation: '$\\frac{x}{3} > 2$\n양변에 3을 곱하면:\n$x > 6$',
    },
    {
      id: 'g2d12-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: '$0.2x + 1 \\leq 0.6x - 3$의 해를 구하시오. ($x \\geq ?$ 형태로 답)',
      answer: '10',
      explanation: '양변에 10을 곱하면:\n$2x + 10 \\leq 6x - 30$\n$-4x \\leq -40$\n$x \\geq 10$',
    },
    {
      id: 'g2d12-p3',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$\\frac{2x-1}{3} \\geq \\frac{x+2}{2}$의 해는?',
      options: ['$x \\geq 8$', '$x \\leq 8$', '$x \\geq 4$', '$x \\leq 4$'],
      answer: '$x \\geq 8$',
      explanation: '양변에 6을 곱하면:\n$2(2x-1) \\geq 3(x+2)$\n$4x - 2 \\geq 3x + 6$\n$x \\geq 8$',
    },
    {
      id: 'g2d12-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question: '$\\frac{3x+1}{4} - \\frac{x-2}{3} < 2$를 만족하는 가장 큰 정수 $x$를 구하시오.',
      answer: '2',
      explanation: '양변에 12를 곱하면:\n$3(3x+1) - 4(x-2) < 24$\n$9x + 3 - 4x + 8 < 24$\n$5x + 11 < 24$\n$5x < 13$\n$x < 2.6$\n\n가장 큰 정수는 $2$',
    },
    {
      id: 'g2d12-p5',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$0.5(x - 4) > 0.3x + 0.2$의 해는?',
      options: ['$x > 11$', '$x > 8$', '$x < 11$', '$x > 3$'],
      answer: '$x > 11$',
      explanation: '양변에 10을 곱하면:\n$5(x - 4) > 3x + 2$\n$5x - 20 > 3x + 2$\n$2x > 22$\n$x > 11$',
    },
    {
      id: 'g2d12-p6',
      type: 'short-answer',
      difficulty: 'challenge',
      question: '$\\frac{x-a}{2} < \\frac{x+1}{3}$의 해가 $x < 5$일 때, 상수 $a$의 값을 구하시오.',
      answer: '1',
      explanation: '양변에 6을 곱하면:\n$3(x - a) < 2(x + 1)$\n$3x - 3a < 2x + 2$\n$x < 3a + 2$\n\n$x < 5$이므로:\n$3a + 2 = 5$\n$3a = 3$\n$a = 1$',
    },
  ],
  realLifeExample: '택시 요금이 기본요금 3,800원에 거리 $x$ km마다 1,200원이 추가됩니다. 총 요금이 15,000원 이하가 되려면: $3800 + 1200x \\leq 15000$ → $x \\leq 9.33...$, 즉 최대 9 km까지 탈 수 있습니다.',
};

export default dayContent;
