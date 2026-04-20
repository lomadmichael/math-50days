import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 6,
  part: 1,
  title: '정수(Integer)의 곱셈(Multiplication)과 나눗셈(Division)',
  subtitle: '부호(Sign) 규칙만 알면 끝! 곱셈(Multiplication)과 나눗셈(Division)에서 부호가 어떻게 결정되는지 배우자.',
  lectures: [],
  concepts: [
    {
      id: 'g1d6-c1',
      title: '정수(Integer)의 곱셈(Multiplication) - 부호(Sign) 규칙',
      content: '**같은 부호끼리 곱하면 → 양수(Positive Number, +)**\n$(+) \\times (+) = (+)$\n$(-) \\times (-) = (+)$\n\n**다른 부호끼리 곱하면 → 음수(Negative Number, -)**\n$(+) \\times (-) = (-)$\n$(-) \\times (+) = (-)$\n\n예:\n$(+3) \\times (+4) = +12$\n$(-3) \\times (-4) = +12$\n$(-3) \\times (+4) = -12$\n$(+3) \\times (-4) = -12$',
      type: 'formula',
    },
    {
      id: 'g1d6-c2',
      title: '여러 수의 곱셈',
      content: '**음수가 짝수 개** → 결과는 **양수**\n**음수가 홀수 개** → 결과는 **음수**\n\n예: $(-2) \\times (-3) \\times (-1) = ?$\n음수가 3개(홀수) → 결과는 음수\n절댓값: $2 \\times 3 \\times 1 = 6$\n답: $-6$\n\n주의: 0이 하나라도 있으면 결과는 항상 0!',
      type: 'tip',
    },
    {
      id: 'g1d6-c3',
      title: '정수(Integer)의 나눗셈(Division)',
      content: '나눗셈(Division)도 곱셈(Multiplication)과 **같은 부호(Sign) 규칙**!\n\n$(+) \\div (+) = (+)$, $(-) \\div (-) = (+)$\n$(+) \\div (-) = (-)$, $(-) \\div (+) = (-)$\n\n예:\n$(+12) \\div (+3) = +4$\n$(-12) \\div (-3) = +4$\n$(+12) \\div (-3) = -4$\n$(-12) \\div (+3) = -4$',
      type: 'formula',
    },
    {
      id: 'g1d6-c4',
      title: '곱셈(Multiplication)의 법칙들',
      content: '곱셈에서도 성립하는 법칙:\n\n**교환법칙(Commutative Property)**: $a \\times b = b \\times a$\n**결합법칙(Associative Property)**: $(a \\times b) \\times c = a \\times (b \\times c)$\n**분배법칙(Distributive Property)**: $a \\times (b + c) = a \\times b + a \\times c$\n\n분배법칙(Distributive Property)은 앞으로 문자식에서 아주 많이 사용됩니다!',
      type: 'formula',
    },
  ],
  problems: [
    {
      id: 'g1d6-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$(-5) \\times (+4)$의 값은?',
      options: ['-20', '-9', '+9', '+20'],
      answer: '-20',
      explanation: '다른 부호끼리 곱하면 음수!\n$(-5) \\times (+4) = -20$',
    },
    {
      id: 'g1d6-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$(-3) \\times (-2) \\times (-4)$의 값은?',
      options: ['+24', '-24', '+9', '-9'],
      answer: '-24',
      explanation: '음수가 3개(홀수) → 결과는 음수\n절댓값: $3 \\times 2 \\times 4 = 24$\n답: $-24$',
    },
    {
      id: 'g1d6-p3',
      type: 'short-answer',
      difficulty: 'basic',
      question: '$(-36) \\div (-9)$의 값을 구하시오.',
      answer: '4',
      explanation: '같은 부호끼리 나누면 양수!\n$(-36) \\div (-9) = +4$',
    },
    {
      id: 'g1d6-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question: '$(-2)^3 \\times 3$의 값을 구하시오.',
      answer: '-24',
      explanation: '$(-2)^3 = (-2) \\times (-2) \\times (-2) = -8$\n\n$(-8) \\times 3 = -24$\n\n$(-2)^3$에서 음수가 3개(홀수)이므로 결과는 음수!',
    },
    {
      id: 'g1d6-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '$(-1)^{100} + (-1)^{99}$의 값은?',
      options: ['2', '-2', '0', '1'],
      answer: '0',
      explanation: '$(-1)^{100}$: 음수가 100개(짝수) → $+1$\n$(-1)^{99}$: 음수가 99개(홀수) → $-1$\n\n$1 + (-1) = 0$',
    },
  ],
  realLifeExample: '"적의 적은 나의 편!" 음수의 곱셈 부호 규칙과 같아요. 빚(-) 을 없애면(-) 이득(+)! (-) × (-) = (+)인 셈이죠. 영화 리뷰에서 "나쁘지 않다(not bad)"도 이중부정으로 긍정이 되는 것과 같은 원리입니다.',
};

export default dayContent;
