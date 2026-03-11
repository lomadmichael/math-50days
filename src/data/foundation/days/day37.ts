import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 37,
  part: 8,
  title: '식으로 나타내기',
  subtitle: '일차식 세우기 — 문장을 수식으로 바꾸기',
  lectures: [],
  concepts: [
    {
      id: 'f8d37-c1',
      title: '문자를 사용한 식',
      content:
        '모르는 수를 $x$로 놓고 문장을 식으로 바꿉니다.\\n• "어떤 수에 3을 더하면 10" → $x + 3 = 10$\\n• "어떤 수의 2배" → $2x$ (곱하기 기호 생략)\\n• "어떤 수보다 5 작은 수" → $x - 5$',
      type: 'definition',
    },
    {
      id: 'f8d37-c2',
      title: '곱하기 기호 생략 규칙',
      content:
        '문자가 포함된 곱셈에서 $\\\\times$ 기호를 생략합니다.\\n• $3 \\\\times x = 3x$\\n• $x \\\\times y = xy$\\n• $1 \\\\times x = x$ (1은 생략)\\n• $x \\\\times x = x^2$\\n\\n나눗셈은 분수로 씁니다: $x \\\\div 3 = \\\\frac{x}{3}$',
      type: 'formula',
    },
    {
      id: 'f8d37-c3',
      title: '식 세우기 연습',
      content:
        '핵심 표현과 수식 변환:\\n• "~의 몇 배" → 곱하기\\n• "~보다 많은/큰" → 더하기\\n• "~보다 적은/작은" → 빼기\\n• "똑같이 나누면" → 나누기',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'fd37-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '"어떤 수 $x$에 5를 더한 것"을 식으로 나타내면?',
      options: ['$5x$', '$x + 5$', '$x - 5$', '$\\\\frac{x}{5}$'],
      answer: '$x + 5$',
      explanation: '"~에 5를 더한 것"이므로 $x + 5$입니다.',
    },
    {
      id: 'fd37-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$a \\\\times 7$을 간단히 나타내면?',
      options: ['$a + 7$', '$a7$', '$7a$', '$\\\\frac{a}{7}$'],
      answer: '$7a$',
      explanation:
        '문자와 숫자의 곱에서 숫자를 앞에 쓰고 $\\\\times$를 생략합니다. $7a$',
    },
    {
      id: 'fd37-p3',
      type: 'short-answer',
      difficulty: 'applied',
      question:
        '사과 한 개에 $x$원입니다. 5개를 사고 1000원을 냈을 때 거스름돈을 식으로 나타내세요. (예: 1000-5x)',
      answer: '1000-5x',
      explanation:
        '사과 5개 가격은 $5x$원이고, 거스름돈은 $1000 - 5x$원입니다.',
    },
    {
      id: 'fd37-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question:
        '"형의 나이는 동생보다 4살 많다. 동생의 나이를 $x$세라 할 때 형의 나이는?"',
      options: ['$4x$세', '$(x + 4)$세', '$(x - 4)$세', '$\\\\frac{x}{4}$세'],
      answer: '$(x + 4)$세',
      explanation:
        '형은 동생보다 4살 많으므로 동생 나이에 4를 더합니다. $x + 4$',
    },
    {
      id: 'fd37-p5',
      type: 'short-answer',
      difficulty: 'challenge',
      question:
        '정삼각형의 한 변의 길이가 $a$cm일 때, 둘레를 식으로 나타내세요. (예: 3a)',
      answer: '3a',
      explanation:
        '정삼각형은 세 변의 길이가 같으므로 둘레 = $a + a + a = 3a$cm',
    },
  ],
  realLifeExample:
    '편의점에서 $x$원짜리 음료 3개와 1500원짜리 과자 1개를 사면 총 금액은 $3x + 1500$원이에요. 이처럼 가격을 모를 때 문자로 놓으면 전체 비용을 식으로 나타낼 수 있어요!',
};

export default dayContent;
