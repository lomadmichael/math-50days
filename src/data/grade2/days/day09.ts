import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 9,
  part: 1,
  title: '미니테스트 + 복습',
  subtitle: 'PART 1 총정리! 유리수, 지수법칙, 식의 계산을 점검하자!',
  isTest: true,
  lectures: [],
  concepts: [
    {
      id: 'g2d9-c1',
      title: 'PART 1 핵심 정리',
      content: '**1. 유리수와 순환소수**\n- 기약분수의 분모의 소인수가 2, 5뿐이면 유한소수\n- 순환소수 → 분수: 순환마디 이용\n\n**2. 지수법칙**\n- $a^m \\\\times a^n = a^{m+n}$\n- $(a^m)^n = a^{mn}$\n- $a^m \\\\div a^n = a^{m-n}$\n- $(ab)^n = a^nb^n$\n\n**3. 식의 계산**\n- 단항식의 곱셈/나눗셈: 계수는 계수끼리, 문자는 문자끼리\n- 다항식의 덧셈/뺄셈: 동류항끼리\n- 등식의 변형: 원하는 문자로 정리',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'g2d9-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '다음 분수 중 유한소수로 나타낼 수 있는 것은?',
      options: ['$\\\\frac{3}{7}$', '$\\\\frac{7}{12}$', '$\\\\frac{11}{25}$', '$\\\\frac{5}{6}$'],
      answer: '$\\\\frac{11}{25}$',
      explanation: '$25 = 5^2$이므로 분모의 소인수가 5뿐입니다.\n따라서 유한소수로 나타낼 수 있습니다.\n$\\\\frac{11}{25} = 0.44$',
    },
    {
      id: 'g2d9-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: '$0.\\\\dot{4}\\\\dot{5}$를 기약분수로 나타내시오. (분자/분모 형태로 답)',
      answer: '5/11',
      explanation: '$x = 0.\\\\dot{4}\\\\dot{5}$\n$100x = 45.\\\\dot{4}\\\\dot{5}$\n$99x = 45$\n$x = \\\\frac{45}{99} = \\\\frac{5}{11}$',
    },
    {
      id: 'g2d9-p3',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$(2^3)^2 \\\\times 2^4 \\\\div 2^7$의 값은?',
      options: ['$2$', '$4$', '$8$', '$16$'],
      answer: '$8$',
      explanation: '$(2^3)^2 = 2^6$\n$2^6 \\\\times 2^4 = 2^{10}$\n$2^{10} \\\\div 2^7 = 2^3 = 8$',
    },
    {
      id: 'g2d9-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question: '$(-3x^2y)^2 \\\\times 2xy^3$을 계산하시오.',
      answer: '18x^5y^5',
      explanation: '$(-3x^2y)^2 = 9x^4y^2$\n$9x^4y^2 \\\\times 2xy^3 = 18x^5y^5$',
    },
    {
      id: 'g2d9-p5',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$2x(x - 3) - (x^2 + x - 6)$을 계산하면?',
      options: ['$x^2 - 7x + 6$', '$x^2 + 7x - 6$', '$x^2 - 7x - 6$', '$3x^2 - 7x + 6$'],
      answer: '$x^2 - 7x + 6$',
      explanation: '$2x^2 - 6x - x^2 - x + 6 = x^2 - 7x + 6$',
    },
    {
      id: 'g2d9-p6',
      type: 'short-answer',
      difficulty: 'challenge',
      question: '$ax + by = c$를 $y$에 대해 풀면 $y = \\\\frac{c - ax}{b}$이다. $a = 2$, $b = 3$, $c = 12$, $x = 3$일 때 $y$의 값을 구하시오.',
      answer: '2',
      explanation: '$y = \\\\frac{c - ax}{b} = \\\\frac{12 - 2 \\\\times 3}{3} = \\\\frac{12 - 6}{3} = \\\\frac{6}{3} = 2$',
    },
  ],
  realLifeExample: 'PART 1에서 배운 내용은 과학, 공학, 경제학 등 다양한 분야에서 활용됩니다. 지수법칙은 컴퓨터 과학에서, 식의 계산은 물리 공식 변형에서, 순환소수는 금융 계산에서 핵심적인 역할을 합니다.',
};

export default dayContent;
