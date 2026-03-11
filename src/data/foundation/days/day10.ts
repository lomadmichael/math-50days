import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 10,
  part: 2,
  title: '분수의 나눗셈 (역수)',
  subtitle: '분수를 나눈다 = 역수를 곱한다! 이 원리를 알면 유리수 나눗셈도 문제없어요.',
  lectures: [],
  concepts: [
    {
      id: 'f2d10-c1',
      title: '역수란?',
      content: '두 수를 곱해서 $1$이 되면, 한 수를 다른 수의 **역수**라고 합니다.\n\n$\\frac{3}{4}$의 역수: $\\frac{4}{3}$ → $\\frac{3}{4} \\times \\frac{4}{3} = 1$\n\n$5$의 역수: $\\frac{1}{5}$ → $5 \\times \\frac{1}{5} = 1$\n\n**주의:** $0$은 역수가 없습니다! ($0$에 무엇을 곱해도 $1$이 안 됨)',
      type: 'definition',
    },
    {
      id: 'f2d10-c2',
      title: '분수의 나눗셈 = 역수의 곱셈',
      content: '분수를 나눌 때는 **나누는 수의 역수를 곱합니다**.\n\n$\\frac{2}{3} \\div \\frac{4}{5} = \\frac{2}{3} \\times \\frac{5}{4} = \\frac{10}{12} = \\frac{5}{6}$\n\n왜 이렇게 될까?\n$\\frac{2}{3} \\div \\frac{4}{5}$는 "$\\frac{2}{3}$ 안에 $\\frac{4}{5}$가 몇 개 들어가나?"라는 의미입니다.',
      type: 'formula',
    },
    {
      id: 'f2d10-c3',
      title: '자연수 ÷ 분수, 분수 ÷ 자연수',
      content: '**자연수 ÷ 분수:**\n$3 \\div \\frac{2}{5} = 3 \\times \\frac{5}{2} = \\frac{15}{2} = 7\\frac{1}{2}$\n\n**분수 ÷ 자연수:**\n$\\frac{4}{7} \\div 2 = \\frac{4}{7} \\times \\frac{1}{2} = \\frac{4}{14} = \\frac{2}{7}$\n\n자연수 $a$의 역수는 $\\frac{1}{a}$임을 기억하세요!',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'fd10-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$\\frac{7}{9}$의 역수는?',
      options: ['$\\frac{9}{7}$', '$\\frac{7}{9}$', '$-\\frac{7}{9}$', '$\\frac{1}{7}$'],
      answer: '$\\frac{9}{7}$',
      explanation: '역수는 분자와 분모를 바꾼 것입니다.\n$\\frac{7}{9}$의 역수: $\\frac{9}{7}$\n\n검산: $\\frac{7}{9} \\times \\frac{9}{7} = \\frac{63}{63} = 1$ ✓',
    },
    {
      id: 'fd10-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: '$\\frac{3}{4} \\div \\frac{1}{2}$를 계산하시오. (대분수로)',
      answer: '1 1/2',
      explanation: '$\\frac{3}{4} \\div \\frac{1}{2} = \\frac{3}{4} \\times \\frac{2}{1} = \\frac{6}{4} = \\frac{3}{2} = 1\\frac{1}{2}$',
    },
    {
      id: 'fd10-p3',
      type: 'short-answer',
      difficulty: 'basic',
      question: '$\\frac{5}{6} \\div 3$을 기약분수로 계산하시오.',
      answer: '5/18',
      explanation: '$\\frac{5}{6} \\div 3 = \\frac{5}{6} \\times \\frac{1}{3} = \\frac{5}{18}$',
    },
    {
      id: 'fd10-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$2\\frac{1}{3} \\div 1\\frac{1}{6}$의 값은?',
      options: ['$1$', '$2$', '$\\frac{7}{6}$', '$3$'],
      answer: '$2$',
      explanation: '가분수로 변환:\n$2\\frac{1}{3} = \\frac{7}{3}$, $1\\frac{1}{6} = \\frac{7}{6}$\n\n$\\frac{7}{3} \\div \\frac{7}{6} = \\frac{7}{3} \\times \\frac{6}{7}$\n\n약분: $7$과 $7$ → $1$과 $1$, $6$과 $3$ → $2$와 $1$\n\n$= \\frac{1}{1} \\times \\frac{2}{1} = 2$',
    },
    {
      id: 'fd10-p5',
      type: 'short-answer',
      difficulty: 'applied',
      question: '끈 $\\frac{5}{6}$m를 $\\frac{1}{3}$m씩 자르면 몇 도막이 되는지 구하시오.',
      answer: '2',
      explanation: '$\\frac{5}{6} \\div \\frac{1}{3} = \\frac{5}{6} \\times \\frac{3}{1} = \\frac{15}{6} = \\frac{5}{2} = 2\\frac{1}{2}$\n\n$\\frac{1}{3}$m 도막 $2$개를 만들 수 있고, $\\frac{1}{6}$m가 남습니다.\n\n완전한 도막 수: $2$개',
    },
    {
      id: 'fd10-p6',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '$\\frac{a}{b}$의 역수가 $\\frac{a}{b}$ 자기 자신일 때, $\\frac{a}{b}$로 가능한 값은?',
      options: ['$\\frac{1}{2}$', '$1$', '$2$', '$0$'],
      answer: '$1$',
      explanation: '$\\frac{a}{b}$의 역수는 $\\frac{b}{a}$\n\n$\\frac{a}{b} = \\frac{b}{a}$이려면 $a = b$\n\n따라서 $\\frac{a}{b} = \\frac{a}{a} = 1$\n\n$1$의 역수는 $1$ 자기 자신입니다!',
    },
  ],
  realLifeExample: '주스 3/4리터를 1/8리터짜리 컵에 나눠 담으면? 3/4 ÷ 1/8 = 6컵! 역수를 곱하면 쉽게 구할 수 있어요.',
};

export default dayContent;
