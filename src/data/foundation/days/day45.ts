import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 45,
  part: 10,
  title: '문자로 식 세우기 첫걸음',
  subtitle: '중1 문자와 식 — 본격 문자 사용',
  lectures: [],
  concepts: [
    {
      id: 'f10d45-c1',
      title: '문자식의 표현 규칙',
      content:
        '중학교에서는 문자를 적극적으로 사용합니다.\\n• $a \\times b = ab$ (곱셈 기호 생략)\\n• $a \\times a = a^2$\\n• $1 \\times a = a$ (1은 생략)\\n• $a \\div b = \\frac{a}{b}$ (나눗셈은 분수)\\n• 숫자를 문자 앞에: $3 \\times x = 3x$ (O), $x \\times 3 = x3$ (X)',
      type: 'formula',
    },
    {
      id: 'f10d45-c2',
      title: '대입과 식의 값',
      content:
        '문자에 수를 넣는 것을 "대입"이라 합니다.\\n예) $2x + 3$에 $x = 4$를 대입하면\\n$2 \\times 4 + 3 = 8 + 3 = 11$',
      type: 'definition',
    },
    {
      id: 'f10d45-c3',
      title: '항, 계수, 차수',
      content:
        '$3x^2 + 5x - 7$에서\\n• 항: $3x^2$, $5x$, $-7$ (덧셈으로 연결된 각 부분)\\n• 계수: $x^2$의 계수는 3, $x$의 계수는 5\\n• 상수항: $-7$ (문자가 없는 항)\\n• 차수: 가장 높은 거듭제곱 = 2 (이차식)',
      type: 'definition',
    },
  ],
  problems: [
    {
      id: 'fd45-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$x \\times 5 \\times y$를 올바르게 나타낸 것은?',
      options: ['$x5y$', '$5xy$', '$xy5$', '$5 + xy$'],
      answer: '$5xy$',
      explanation:
        '숫자를 맨 앞에 쓰고 곱셈 기호를 생략합니다. $5xy$',
    },
    {
      id: 'fd45-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: '$3a - 2$에 $a = 5$를 대입한 값은?',
      answer: '13',
      explanation: '$3 \\times 5 - 2 = 15 - 2 = 13$',
    },
    {
      id: 'fd45-p3',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$4x + 7$에서 $x$의 계수는?',
      options: ['4', '7', '$4x$', '11'],
      answer: '4',
      explanation:
        '$x$ 앞에 붙은 숫자가 계수이므로 4입니다.',
    },
    {
      id: 'fd45-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question:
        '$x^2 + 2x - 5$에 $x = 3$을 대입한 값은?',
      answer: '10',
      explanation:
        '$3^2 + 2 \\times 3 - 5 = 9 + 6 - 5 = 10$',
    },
    {
      id: 'fd45-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '다음 중 일차식인 것은?',
      options: ['$x^2 + 1$', '$3x - 5$', '$5$', '$\\frac{1}{x}$'],
      answer: '$3x - 5$',
      explanation:
        '일차식은 문자의 최고 차수가 1인 식입니다. $3x - 5$는 $x$의 차수가 1이므로 일차식입니다.',
    },
  ],
  realLifeExample:
    '스마트폰 데이터 요금이 기본료 5000원에 1GB당 2000원이면, $x$GB 사용 시 요금은 $2000x + 5000$원이에요. 문자를 사용하면 어떤 경우든 하나의 식으로 표현할 수 있어요!',
};

export default dayContent;
