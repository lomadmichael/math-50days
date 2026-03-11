import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 9,
  part: 2,
  title: '분수의 곱셈',
  subtitle: '분수의 곱셈은 분자끼리, 분모끼리! 단순하지만 강력한 원리예요.',
  lectures: [],
  concepts: [
    {
      id: 'f2d9-c1',
      title: '분수 × 자연수',
      content: '분수에 자연수를 곱하면 **분자에만** 곱합니다.\n\n$\\frac{2}{5} \\times 3 = \\frac{2 \\times 3}{5} = \\frac{6}{5} = 1\\frac{1}{5}$\n\n의미: $\\frac{2}{5}$를 $3$번 더한 것\n$\\frac{2}{5} + \\frac{2}{5} + \\frac{2}{5} = \\frac{6}{5}$',
      type: 'definition',
    },
    {
      id: 'f2d9-c2',
      title: '분수 × 분수',
      content: '**분자는 분자끼리, 분모는 분모끼리** 곱합니다.\n\n$\\frac{2}{3} \\times \\frac{4}{5} = \\frac{2 \\times 4}{3 \\times 5} = \\frac{8}{15}$\n\n의미: $\\frac{4}{5}$의 $\\frac{2}{3}$만큼\n→ 전체의 $\\frac{4}{5}$를 다시 $3$등분하여 $2$개 취함',
      type: 'formula',
    },
    {
      id: 'f2d9-c3',
      title: '곱셈 전에 약분하기',
      content: '곱하기 전에 **대각선끼리 약분**하면 계산이 쉬워집니다.\n\n$\\frac{3}{8} \\times \\frac{4}{9}$\n\n$3$과 $9$를 약분: $3 \\div 3 = 1$, $9 \\div 3 = 3$\n$4$와 $8$을 약분: $4 \\div 4 = 1$, $8 \\div 4 = 2$\n\n$= \\frac{1}{2} \\times \\frac{1}{3} = \\frac{1}{6}$\n\n이 방법을 쓰면 큰 수를 다룰 필요가 없습니다!',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'fd9-p1',
      type: 'short-answer',
      difficulty: 'basic',
      question: '$\\frac{3}{7} \\times 4$를 계산하시오. (대분수로)',
      answer: '1 5/7',
      explanation: '$\\frac{3}{7} \\times 4 = \\frac{12}{7} = 1\\frac{5}{7}$',
    },
    {
      id: 'fd9-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$\\frac{2}{3} \\times \\frac{3}{4}$의 값은?',
      options: ['$\\frac{6}{12}$', '$\\frac{1}{2}$', '$\\frac{5}{7}$', '$\\frac{6}{7}$'],
      answer: '$\\frac{1}{2}$',
      explanation: '$\\frac{2}{3} \\times \\frac{3}{4}$\n\n약분: $2$와 $4$ → $1$과 $2$, $3$과 $3$ → $1$과 $1$\n\n$= \\frac{1}{1} \\times \\frac{1}{2} = \\frac{1}{2}$\n\n또는: $\\frac{2 \\times 3}{3 \\times 4} = \\frac{6}{12} = \\frac{1}{2}$',
    },
    {
      id: 'fd9-p3',
      type: 'short-answer',
      difficulty: 'basic',
      question: '$\\frac{5}{6} \\times \\frac{3}{10}$을 기약분수로 계산하시오.',
      answer: '1/4',
      explanation: '$\\frac{5}{6} \\times \\frac{3}{10}$\n\n약분: $5$와 $10$ → $1$과 $2$, $3$과 $6$ → $1$과 $2$\n\n$= \\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{4}$',
    },
    {
      id: 'fd9-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$1\\frac{2}{3} \\times 2\\frac{1}{4}$의 값은?',
      options: ['$3\\frac{3}{4}$', '$2\\frac{2}{12}$', '$3\\frac{1}{2}$', '$4$'],
      answer: '$3\\frac{3}{4}$',
      explanation: '대분수를 가분수로 변환:\n$1\\frac{2}{3} = \\frac{5}{3}$, $2\\frac{1}{4} = \\frac{9}{4}$\n\n$\\frac{5}{3} \\times \\frac{9}{4}$\n\n약분: $9$와 $3$ → $3$과 $1$\n\n$= \\frac{5}{1} \\times \\frac{3}{4} = \\frac{15}{4} = 3\\frac{3}{4}$',
    },
    {
      id: 'fd9-p5',
      type: 'short-answer',
      difficulty: 'applied',
      question: '직사각형의 가로가 $\\frac{3}{5}$m, 세로가 $\\frac{2}{3}$m일 때, 넓이를 구하시오. (기약분수, 단위 생략)',
      answer: '2/5',
      explanation: '넓이 $= \\frac{3}{5} \\times \\frac{2}{3}$\n\n약분: $3$과 $3$ → $1$과 $1$\n\n$= \\frac{1}{5} \\times \\frac{2}{1} = \\frac{2}{5}$ (m$^2$)',
    },
    {
      id: 'fd9-p6',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '$\\frac{1}{2} \\times \\frac{2}{3} \\times \\frac{3}{4} \\times \\frac{4}{5}$의 값은?',
      options: ['$\\frac{1}{5}$', '$\\frac{1}{10}$', '$\\frac{1}{20}$', '$\\frac{4}{5}$'],
      answer: '$\\frac{1}{5}$',
      explanation: '분자끼리: $1 \\times 2 \\times 3 \\times 4 = 24$\n분모끼리: $2 \\times 3 \\times 4 \\times 5 = 120$\n\n$\\frac{24}{120} = \\frac{1}{5}$\n\n또는 연속으로 약분하면:\n$\\frac{1}{\\cancel{2}} \\times \\frac{\\cancel{2}}{\\cancel{3}} \\times \\frac{\\cancel{3}}{\\cancel{4}} \\times \\frac{\\cancel{4}}{5} = \\frac{1}{5}$',
    },
  ],
  realLifeExample: '방 넓이가 가로 3과 2/3미터, 세로 2와 1/2미터라면? 분수의 곱셈으로 넓이를 구합니다. 건축, 인테리어에서 분수 곱셈은 필수!',
};

export default dayContent;
