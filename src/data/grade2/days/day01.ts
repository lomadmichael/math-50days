import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 1,
  part: 1,
  title: '유리수와 순환소수 (1)',
  subtitle: '유한소수와 순환소수를 판별하고, 분수를 소수로 바꿔보자!',
  lectures: [],
  concepts: [
    {
      id: 'g2d1-c1',
      title: '유한소수와 무한소수',
      content: '소수점 아래의 숫자가 **유한개**인 소수를 **유한소수**, **무한개**인 소수를 **무한소수**라 합니다.\n\n- 유한소수: $0.5$, $0.25$, $1.375$\n- 무한소수: $0.333...$, $0.142857142857...$, $\\pi = 3.14159...$',
      type: 'definition',
    },
    {
      id: 'g2d1-c2',
      title: '순환소수란?',
      content: '무한소수 중에서 소수점 아래의 어떤 부분이 **한없이 되풀이**되는 소수를 **순환소수**라 합니다.\n\n순환되는 숫자의 묶음을 **순환마디**라 하고, 순환마디의 양 끝 숫자 위에 점을 찍어 나타냅니다.\n\n$0.333... = 0.\\dot{3}$\n$0.121212... = 0.\\dot{1}\\dot{2}$\n$1.2345345... = 1.2\\dot{3}4\\dot{5}$',
      type: 'definition',
    },
    {
      id: 'g2d1-c3',
      title: '유한소수가 되는 분수 판별법',
      content: '기약분수의 분모를 소인수분해했을 때, 분모의 소인수가 **2와 5뿐**이면 유한소수로 나타낼 수 있습니다.\n\n$\\frac{3}{8} = \\frac{3}{2^3}$ → 유한소수 ✓\n$\\frac{7}{20} = \\frac{7}{2^2 \\times 5}$ → 유한소수 ✓\n$\\frac{1}{6} = \\frac{1}{2 \\times 3}$ → 순환소수 (3이 있으므로)',
      type: 'formula',
    },
    {
      id: 'g2d1-c4',
      title: '판별 꿀팁',
      content: '기약분수로 먼저 만들어야 합니다!\n\n$\\frac{6}{15}$의 경우:\n$\\frac{6}{15} = \\frac{2}{5}$ (기약분수)\n분모 5의 소인수가 5뿐이므로 → **유한소수** ✓\n\n기약분수로 안 바꾸고 15의 소인수(3, 5)로 판단하면 틀립니다!',
      type: 'warning',
    },
  ],
  problems: [
    {
      id: 'g2d1-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$\\frac{3}{12}$을 소수로 나타내면?',
      options: ['유한소수', '순환소수', '무한소수(순환하지 않는)', '판별 불가'],
      answer: '유한소수',
      explanation: '$\\frac{3}{12} = \\frac{1}{4} = \\frac{1}{2^2}$\n\n기약분수의 분모의 소인수가 2뿐이므로 유한소수입니다.\n$\\frac{1}{4} = 0.25$',
    },
    {
      id: 'g2d1-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '다음 중 순환소수인 것은?',
      options: ['$0.125$', '$0.\\dot{3}$', '$\\pi$', '$0.1010010001...$'],
      answer: '$0.\\dot{3}$',
      explanation: '$0.\\dot{3} = 0.333...$으로 3이 한없이 반복되므로 순환소수입니다.\n\n$0.125$는 유한소수, $\\pi$와 $0.1010010001...$은 순환하지 않는 무한소수입니다.',
    },
    {
      id: 'g2d1-p3',
      type: 'short-answer',
      difficulty: 'basic',
      question: '$\\frac{5}{6}$을 소수로 나타내면 순환소수입니다. 순환마디를 쓰시오.',
      answer: '3',
      explanation: '$\\frac{5}{6} = 0.8333... = 0.8\\dot{3}$\n\n분모 6 = $2 \\times 3$에 소인수 3이 포함되어 있으므로 순환소수가 됩니다.\n순환마디는 3입니다.',
    },
    {
      id: 'g2d1-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '다음 분수 중 유한소수로 나타낼 수 있는 것은?',
      options: ['$\\frac{1}{3}$', '$\\frac{7}{30}$', '$\\frac{9}{40}$', '$\\frac{5}{12}$'],
      answer: '$\\frac{9}{40}$',
      explanation: '$\\frac{9}{40}$에서 분모 $40 = 2^3 \\times 5$\n\n분모의 소인수가 2와 5뿐이므로 유한소수입니다.\n\n나머지: $\\frac{1}{3}$(분모에 3), $\\frac{7}{30} = \\frac{7}{2 \\times 3 \\times 5}$(분모에 3), $\\frac{5}{12} = \\frac{5}{2^2 \\times 3}$(분모에 3)',
    },
    {
      id: 'g2d1-p5',
      type: 'short-answer',
      difficulty: 'applied',
      question: '$\\frac{a}{2^2 \\times 5 \\times 7}$이 유한소수가 되도록 하는 가장 작은 자연수 $a$를 구하시오.',
      answer: '7',
      explanation: '분모의 소인수 중 2, 5 외에 7이 있으므로, 분자 $a$에 7이 포함되어야 약분 후 분모에 7이 사라집니다.\n\n$a = 7$이면 $\\frac{7}{2^2 \\times 5 \\times 7} = \\frac{1}{2^2 \\times 5} = \\frac{1}{20} = 0.05$\n\n따라서 가장 작은 자연수 $a = 7$',
    },
    {
      id: 'g2d1-p6',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '$\\frac{a}{60}$이 유한소수가 되게 하는 한 자리 자연수 $a$의 개수는?',
      options: ['1개', '2개', '3개', '4개'],
      answer: '3개',
      explanation: '$60 = 2^2 \\times 3 \\times 5$이므로 분모의 소인수 3을 약분해야 합니다.\n\n$a$가 3의 배수이어야 합니다. 한 자리 자연수 중 3의 배수: 3, 6, 9\n\n$\\frac{3}{60} = \\frac{1}{20}$ ✓, $\\frac{6}{60} = \\frac{1}{10}$ ✓, $\\frac{9}{60} = \\frac{3}{20}$ ✓\n\n따라서 **3개**',
    },
  ],
  realLifeExample: '야구 선수의 타율을 계산할 때, 3타수 1안타면 타율은 $\\frac{1}{3} = 0.\\dot{3} = 0.333...$입니다. 이것이 바로 순환소수! 그래서 타율을 소수 셋째 자리까지 반올림해서 "3할 3푼 3리"라고 표현합니다.',
};

export default dayContent;
