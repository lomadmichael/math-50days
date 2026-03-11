import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 5,
  part: 1,
  title: '미니테스트 + 복습',
  subtitle: 'PART 1 수 감각 총정리! 큰 수, 사칙연산, 혼합 계산을 모두 확인해요.',
  isTest: true,
  lectures: [],
  concepts: [
    {
      id: 'f1d5-c1',
      title: 'PART 1 핵심 정리',
      content: '**1. 자릿값:** 각 자리의 숫자는 자리에 따라 다른 값을 나타냅니다.\n\n**2. 덧셈·뺄셈:** 같은 자리끼리 계산, 받아올림/받아내림 주의\n\n**3. 곱셈·나눗셈:** 곱셈의 교환/결합/분배법칙 활용, 나눗셈의 검산\n\n**4. 계산 순서:** 괄호 → 곱셈·나눗셈 → 덧셈·뺄셈 (같은 순위는 왼쪽부터)\n\n이 모든 것이 중학교 **정수와 유리수의 연산**의 기초입니다!',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'fd5-p1',
      type: 'short-answer',
      difficulty: 'basic',
      question: '$72658$에서 $6$이 나타내는 값을 구하시오.',
      answer: '6000',
      explanation: '$72658$에서 $6$은 천의 자리에 있으므로 $6 \\times 1000 = 6000$입니다.',
    },
    {
      id: 'fd5-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: '$835 + 467$을 계산하시오.',
      answer: '1302',
      explanation: '일의 자리: $5 + 7 = 12$ → $2$ 쓰고 $1$ 올림\n십의 자리: $3 + 6 + 1 = 10$ → $0$ 쓰고 $1$ 올림\n백의 자리: $8 + 4 + 1 = 13$\n\n답: $1302$',
    },
    {
      id: 'fd5-p3',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$45 \\times 8 \\div 4 + 10$의 값은?',
      options: ['$80$', '$90$', '$100$', '$110$'],
      answer: '$100$',
      explanation: '곱셈·나눗셈을 왼쪽부터 먼저 계산합니다.\n$45 \\times 8 \\div 4 + 10$\n$= 360 \\div 4 + 10$\n$= 90 + 10$\n$= 100$',
    },
    {
      id: 'fd5-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question: '$(150 - 30) \\div 4 \\times 2$를 계산하시오.',
      answer: '60',
      explanation: '괄호 → 나눗셈 → 곱셈 순서:\n$(150 - 30) \\div 4 \\times 2 = 120 \\div 4 \\times 2 = 30 \\times 2 = 60$',
    },
    {
      id: 'fd5-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '어떤 수에 $6$을 곱해야 할 것을 잘못하여 $6$으로 나누었더니 $15$가 되었습니다. 바르게 계산한 답은?',
      options: ['$90$', '$540$', '$150$', '$360$'],
      answer: '$540$',
      explanation: '잘못한 계산: 어떤 수 $\\div 6 = 15$\n어떤 수 $= 15 \\times 6 = 90$\n\n바른 계산: $90 \\times 6 = 540$',
    },
    {
      id: 'fd5-p6',
      type: 'short-answer',
      difficulty: 'challenge',
      question: '$\\overline{3A5} + \\overline{B72} = 877$일 때, $A + B$의 값을 구하시오. ($A$, $B$는 한 자리 숫자)',
      answer: '5',
      explanation: '일의 자리: $5 + 2 = 7$ ✓\n십의 자리: $A + 7 = ?7$ → 올림 없으면 $A + 7$의 일의 자리가 $7$ → $A = 0$\n\n$A = 0$이면: $305 + B72 = 877$\n$B72 = 877 - 305 = 572$\n$B = 5$\n\n$A + B = 0 + 5 = 5$',
    },
  ],
  realLifeExample: '수 감각은 모든 수학의 기본이에요. 가게에서 물건 가격 계산, 거스름돈 확인, 할인율 계산까지 모두 수 감각이 필요합니다!',
};

export default dayContent;
