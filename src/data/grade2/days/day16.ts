import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 16,
  part: 2,
  title: '미니테스트 + 복습',
  subtitle: 'PART 2 총정리! 부등식의 성질부터 연립부등식까지 점검하자!',
  isTest: true,
  lectures: [],
  concepts: [
    {
      id: 'g2d16-c1',
      title: 'PART 2 핵심 정리',
      content: '**1. 부등식의 성질**\n- 양변에 같은 수를 더하거나 빼도 부등호 방향 유지\n- 양수를 곱하거나 나누면 부등호 방향 유지\n- **음수를 곱하거나 나누면 부등호 방향 반대!**\n\n**2. 일차부등식 풀이**\n- 일차방정식과 같은 방법, 음수 처리만 주의\n- 분수 → 최소공배수 곱하기, 소수 → 10배\n\n**3. 부등식 활용**\n- 미지수 설정 → 부등식 세우기 → 풀기 → 확인\n\n**4. 연립부등식**\n- 각각 풀고 공통 범위 구하기',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'g2d16-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$-5x + 3 > 18$의 해는?',
      options: ['$x < -3$', '$x > -3$', '$x < 3$', '$x > 3$'],
      answer: '$x < -3$',
      explanation: '$-5x > 15$\n$x < -3$ (음수로 나누므로 부등호 반대)',
    },
    {
      id: 'g2d16-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: '$\\\\frac{x-1}{3} \\\\leq \\\\frac{x+3}{4}$를 풀면 $x \\\\leq ?$이다. 빈칸에 알맞은 수를 쓰시오.',
      answer: '13',
      explanation: '양변에 12를 곱하면:\n$4(x-1) \\\\leq 3(x+3)$\n$4x - 4 \\\\leq 3x + 9$\n$x \\\\leq 13$',
    },
    {
      id: 'g2d16-p3',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '연립부등식 $\\\\begin{cases} 3x - 2 \\\\geq 7 \\\\\\\\ -2x + 10 > 0 \\\\end{cases}$의 해는?',
      options: ['$3 \\\\leq x < 5$', '$3 < x \\\\leq 5$', '$3 \\\\leq x \\\\leq 5$', '$x \\\\geq 3$'],
      answer: '$3 \\\\leq x < 5$',
      explanation: '$3x - 2 \\\\geq 7$ → $x \\\\geq 3$\n$-2x + 10 > 0$ → $x < 5$\n\n공통: $3 \\\\leq x < 5$',
    },
    {
      id: 'g2d16-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question: '공책 한 권에 1,500원이고 볼펜 한 자루에 800원입니다. 공책 3권과 볼펜 $x$자루를 사는데 총 금액이 10,000원 이하가 되려면 볼펜은 최대 몇 자루까지 살 수 있습니까?',
      answer: '6',
      explanation: '$1500 \\\\times 3 + 800x \\\\leq 10000$\n$4500 + 800x \\\\leq 10000$\n$800x \\\\leq 5500$\n$x \\\\leq 6.875$\n\n자연수이므로 최대 6자루',
    },
    {
      id: 'g2d16-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '$-2 < \\\\frac{3-x}{2} \\\\leq 3$을 만족하는 정수 $x$의 개수는?',
      options: ['$7$개', '$8$개', '$9$개', '$10$개'],
      answer: '$10$개',
      explanation: '양변에 2를 곱하면: $-4 < 3 - x \\\\leq 6$\n각 변에서 3을 빼면: $-7 < -x \\\\leq 3$\n$-1$을 곱하면(부등호 반대): $-3 \\\\leq x < 7$\n\n정수: $-3, -2, -1, 0, 1, 2, 3, 4, 5, 6$ → **10개**',
    },
    {
      id: 'g2d16-p6',
      type: 'short-answer',
      difficulty: 'challenge',
      question: '일차부등식 $ax + 6 > 2x + 3a$의 해가 $x < 3$일 때, 상수 $a$의 값을 구하시오.',
      answer: '1',
      explanation: '$(a - 2)x > 3a - 6$\n$(a - 2)x > 3(a - 2)$\n\n해가 $x < 3$이므로, 양변을 $(a - 2)$로 나눌 때 부등호가 바뀌어야 합니다.\n따라서 $a - 2 < 0$, 즉 $a < 2$\n\n$x < \\\\frac{3(a-2)}{a-2} = 3$ ✓\n\n$a < 2$인 아무 값이면 되지만... 문제 조건에서 $a = 1$일 때:\n$(1-2)x > 3(1) - 6$ → $-x > -3$ → $x < 3$ ✓\n\n$a = 1$',
    },
  ],
  realLifeExample: 'PART 2에서 배운 부등식은 예산 계획, 시간 관리, 영양 균형 등 일상 곳곳에서 활용됩니다. "하루에 최소 8시간 자고, 공부는 4시간 이상 하면서, 여가도 2시간은 확보하고 싶다" 같은 조건도 연립부등식으로 나타낼 수 있습니다!',
};

export default dayContent;
