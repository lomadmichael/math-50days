import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 11,
  part: 2,
  title: '일차부등식 풀이 (1)',
  subtitle: '일차방정식처럼 풀되, 음수 곱셈에서 부등호 방향만 주의!',
  lectures: [],
  concepts: [
    {
      id: 'g2d11-c1',
      title: '일차부등식이란?',
      content: '부등식을 정리했을 때 $ax + b > 0$ ($a \\neq 0$) 꼴로 나타낼 수 있는 부등식을 **일차부등식**이라 합니다.\n\n예: $2x - 3 > 5$, $-x + 4 \\leq 7$, $3(x - 1) < x + 5$',
      type: 'definition',
    },
    {
      id: 'g2d11-c2',
      title: '일차부등식 풀이 방법',
      content: '일차방정식과 같은 방법으로 풀되, **음수를 곱하거나 나눌 때 부등호 방향을 바꿉니다**.\n\n예: $2x - 3 > 5$\n$2x > 5 + 3$\n$2x > 8$\n$x > 4$\n\n예: $-3x + 6 \\leq 0$\n$-3x \\leq -6$\n$x \\geq 2$ (음수로 나누므로 부등호 반대!)',
      type: 'formula',
    },
    {
      id: 'g2d11-c3',
      title: '해를 수직선에 나타내기',
      content: '부등식의 해를 수직선에 나타내는 방법:\n\n- $x > a$: $a$에 빈 원(○)을 찍고 오른쪽 화살표\n- $x \\geq a$: $a$에 채운 원(●)을 찍고 오른쪽 화살표\n- $x < a$: $a$에 빈 원(○)을 찍고 왼쪽 화살표\n- $x \\leq a$: $a$에 채운 원(●)을 찍고 왼쪽 화살표\n\n빈 원 = 그 점 미포함, 채운 원 = 그 점 포함',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'g2d11-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$3x + 2 > 11$의 해는?',
      options: ['$x > 3$', '$x < 3$', '$x > \\frac{11}{3}$', '$x \\geq 3$'],
      answer: '$x > 3$',
      explanation: '$3x + 2 > 11$\n$3x > 9$\n$x > 3$',
    },
    {
      id: 'g2d11-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: '$-2x + 8 \\leq 0$의 해를 구하시오. ($x \\geq ?$ 형태로 답)',
      answer: '4',
      explanation: '$-2x \\leq -8$\n$x \\geq 4$ (양변을 $-2$로 나누면 부등호 방향 반대)\n\n따라서 $x \\geq 4$',
    },
    {
      id: 'g2d11-p3',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$5 - x < 2$의 해는?',
      options: ['$x < 3$', '$x > 3$', '$x < -3$', '$x > -3$'],
      answer: '$x > 3$',
      explanation: '$5 - x < 2$\n$-x < 2 - 5$\n$-x < -3$\n$x > 3$ (음수로 나누므로 부등호 반대)',
    },
    {
      id: 'g2d11-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$4x - 7 \\geq 2x + 3$의 해는?',
      options: ['$x \\geq 5$', '$x \\leq 5$', '$x \\geq -2$', '$x \\leq -2$'],
      answer: '$x \\geq 5$',
      explanation: '$4x - 2x \\geq 3 + 7$\n$2x \\geq 10$\n$x \\geq 5$',
    },
    {
      id: 'g2d11-p5',
      type: 'short-answer',
      difficulty: 'applied',
      question: '$3(x - 2) > x + 4$를 만족하는 가장 작은 정수 $x$를 구하시오.',
      answer: '6',
      explanation: '$3x - 6 > x + 4$\n$2x > 10$\n$x > 5$\n\n$x > 5$를 만족하는 가장 작은 정수는 $6$',
    },
    {
      id: 'g2d11-p6',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '$-2(x + 3) \\leq 4 - 3(x - 1)$의 해는?',
      options: ['$x \\leq 13$', '$x \\geq 13$', '$x \\leq -13$', '$x \\geq -13$'],
      answer: '$x \\leq 13$',
      explanation: '$-2x - 6 \\leq 4 - 3x + 3$\n$-2x - 6 \\leq 7 - 3x$\n$-2x + 3x \\leq 7 + 6$\n$x \\leq 13$',
    },
  ],
  realLifeExample: '한 달 용돈이 30,000원인데, 한 권에 3,000원인 만화책을 사려고 합니다. "만화책을 $x$권 사도 5,000원이 남으려면" → $30000 - 3000x \\geq 5000$, 즉 $x \\leq 8.33...$이므로 최대 8권까지 살 수 있습니다.',
};

export default dayContent;
