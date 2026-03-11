import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 14,
  part: 3,
  title: '분수와 소수의 관계',
  subtitle: '분수를 소수로, 소수를 분수로! 순환소수의 기초까지 알아봐요.',
  lectures: [],
  concepts: [
    {
      id: 'f3d14-c1',
      title: '분수 → 소수 변환',
      content: '분수를 소수로 바꾸려면 **분자 ÷ 분모**를 계산합니다.\n\n$\\frac{3}{4} = 3 \\div 4 = 0.75$ (나누어떨어짐 = **유한소수**)\n\n$\\frac{1}{3} = 1 \\div 3 = 0.333...$ (무한히 반복 = **순환소수**)\n$= 0.\\overline{3}$으로 표기\n\n분모를 소인수분해했을 때 $2$와 $5$만 있으면 → 유한소수\n그 외의 소인수가 있으면 → 순환소수',
      type: 'formula',
    },
    {
      id: 'f3d14-c2',
      title: '소수 → 분수 변환',
      content: '**유한소수 → 분수:**\n$0.6 = \\frac{6}{10} = \\frac{3}{5}$\n$0.35 = \\frac{35}{100} = \\frac{7}{20}$\n$0.125 = \\frac{125}{1000} = \\frac{1}{8}$\n\n소수점 아래 자릿수만큼 $10$, $100$, $1000$... 을 분모로 넣고 약분!',
      type: 'formula',
    },
    {
      id: 'f3d14-c3',
      title: '자주 쓰이는 분수↔소수',
      content: '외워두면 편한 변환표:\n\n$\\frac{1}{2} = 0.5$, $\\frac{1}{4} = 0.25$, $\\frac{3}{4} = 0.75$\n$\\frac{1}{5} = 0.2$, $\\frac{2}{5} = 0.4$, $\\frac{3}{5} = 0.6$\n$\\frac{1}{8} = 0.125$, $\\frac{3}{8} = 0.375$\n$\\frac{1}{3} = 0.\\overline{3}$, $\\frac{2}{3} = 0.\\overline{6}$\n$\\frac{1}{6} = 0.1\\overline{6}$, $\\frac{5}{6} = 0.8\\overline{3}$\n\n이 변환들은 중학교 내내 사용됩니다!',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'fd14-p1',
      type: 'short-answer',
      difficulty: 'basic',
      question: '$\\frac{7}{20}$을 소수로 나타내시오.',
      answer: '0.35',
      explanation: '$\\frac{7}{20} = \\frac{7 \\times 5}{20 \\times 5} = \\frac{35}{100} = 0.35$\n\n또는: $7 \\div 20 = 0.35$',
    },
    {
      id: 'fd14-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: '$0.45$를 기약분수로 나타내시오.',
      answer: '9/20',
      explanation: '$0.45 = \\frac{45}{100}$\n\n$45$와 $100$의 최대공약수: $5$\n\n$\\frac{45}{100} = \\frac{9}{20}$',
    },
    {
      id: 'fd14-p3',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$\\frac{1}{6}$을 소수로 나타내면?',
      options: ['$0.6$', '$0.16$', '$0.1\\overline{6}$', '$0.\\overline{16}$'],
      answer: '$0.1\\overline{6}$',
      explanation: '$1 \\div 6 = 0.16666...$\n\n$6$이 무한히 반복되므로 $0.1\\overline{6}$\n\n($1$은 반복되지 않고, $6$만 반복)',
    },
    {
      id: 'fd14-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '다음 분수 중 유한소수로 나타낼 수 있는 것은?',
      options: ['$\\frac{5}{6}$', '$\\frac{7}{12}$', '$\\frac{3}{8}$', '$\\frac{4}{9}$'],
      answer: '$\\frac{3}{8}$',
      explanation: '분모를 소인수분해했을 때 $2$와 $5$만 있으면 유한소수:\n\n$6 = 2 \\times 3$ → 순환소수\n$12 = 2^2 \\times 3$ → 순환소수\n$8 = 2^3$ → **유한소수** ✓\n$9 = 3^2$ → 순환소수\n\n$\\frac{3}{8} = 0.375$',
    },
    {
      id: 'fd14-p5',
      type: 'short-answer',
      difficulty: 'applied',
      question: '$\\frac{2}{3}$와 $0.65$ 중 더 큰 수는 무엇인지, 큰 수를 소수 둘째 자리까지 반올림하여 쓰시오.',
      answer: '0.67',
      explanation: '$\\frac{2}{3} = 0.\\overline{6} = 0.6666...$\n$0.65$\n\n$0.6666... > 0.65$이므로 $\\frac{2}{3}$이 더 큽니다.\n\n소수 둘째 자리까지 반올림: $0.67$ (셋째 자리 $6 \\geq 5$이므로 올림)',
    },
    {
      id: 'fd14-p6',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '$0.\\overline{9}$(0.999...)의 값은?',
      options: ['$0.9$', '$0.99$', '$1$보다 약간 작다', '$1$과 같다'],
      answer: '$1$과 같다',
      explanation: '$x = 0.\\overline{9} = 0.999...$로 놓으면\n$10x = 9.999...$\n$10x - x = 9$\n$9x = 9$\n$x = 1$\n\n놀랍게도 $0.\\overline{9} = 1$입니다!\n또한 $\\frac{1}{3} = 0.\\overline{3}$이므로 $3 \\times \\frac{1}{3} = 3 \\times 0.\\overline{3} = 0.\\overline{9} = 1$ ✓',
    },
  ],
  realLifeExample: '시험에서 83점을 받았다면 100점 만점에 0.83, 즉 83/100이에요. 할인율 30%는 0.3이고, 원가의 7/10만 내면 됩니다. 분수와 소수 변환은 할인 계산의 핵심!',
};

export default dayContent;
