import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 11,
  part: 2,
  title: '미니테스트 + 복습',
  subtitle: 'PART 2 분수 총정리! 분수의 뜻부터 사칙연산까지 모두 확인해요.',
  isTest: true,
  lectures: [],
  concepts: [
    {
      id: 'f2d11-c1',
      title: 'PART 2 핵심 정리',
      content: '**1. 분수의 종류:** 진분수(분자<분모), 가분수(분자≥분모), 대분수\n\n**2. 통분:** 분모를 최소공배수로 통일 → 크기 비교, 덧셈·뺄셈에 사용\n\n**3. 분수의 곱셈:** 분자끼리, 분모끼리 곱하기 (미리 약분!)\n\n**4. 분수의 나눗셈:** 나누는 수의 역수를 곱하기\n\n**5. 역수:** 곱해서 $1$이 되는 수 ($0$은 역수 없음)\n\n이 모든 것이 중학교 **유리수의 사칙연산**과 직결됩니다!',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'fd11-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$\\frac{17}{5}$을 대분수로 나타내면?',
      options: ['$3\\frac{1}{5}$', '$3\\frac{2}{5}$', '$2\\frac{7}{5}$', '$3\\frac{3}{5}$'],
      answer: '$3\\frac{2}{5}$',
      explanation: '$17 \\div 5 = 3 \\cdots 2$\n따라서 $\\frac{17}{5} = 3\\frac{2}{5}$',
    },
    {
      id: 'fd11-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: '$\\frac{3}{4} + \\frac{2}{3}$을 계산하시오. (대분수로)',
      answer: '1 5/12',
      explanation: '통분: $\\frac{3}{4} = \\frac{9}{12}$, $\\frac{2}{3} = \\frac{8}{12}$\n\n$\\frac{9}{12} + \\frac{8}{12} = \\frac{17}{12} = 1\\frac{5}{12}$',
    },
    {
      id: 'fd11-p3',
      type: 'short-answer',
      difficulty: 'applied',
      question: '$\\frac{5}{8} \\times \\frac{4}{15}$를 기약분수로 계산하시오.',
      answer: '1/6',
      explanation: '$\\frac{5}{8} \\times \\frac{4}{15}$\n\n약분: $5$와 $15$ → $1$과 $3$, $4$와 $8$ → $1$과 $2$\n\n$= \\frac{1}{2} \\times \\frac{1}{3} = \\frac{1}{6}$',
    },
    {
      id: 'fd11-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$\\frac{7}{10} \\div \\frac{3}{5}$의 값은?',
      options: ['$\\frac{7}{6}$', '$\\frac{21}{50}$', '$\\frac{6}{7}$', '$1\\frac{1}{6}$'],
      answer: '$\\frac{7}{6}$',
      explanation: '$\\frac{7}{10} \\div \\frac{3}{5} = \\frac{7}{10} \\times \\frac{5}{3}$\n\n약분: $5$와 $10$ → $1$과 $2$\n\n$= \\frac{7}{2} \\times \\frac{1}{3} = \\frac{7}{6}$\n\n$\\frac{7}{6} = 1\\frac{1}{6}$이므로 두 답 모두 맞지만, 기약분수로는 $\\frac{7}{6}$',
    },
    {
      id: 'fd11-p5',
      type: 'short-answer',
      difficulty: 'challenge',
      question: '$\\frac{2}{3} + \\frac{2}{3} \\times \\frac{1}{2} - \\frac{1}{4}$를 계산하시오. (기약분수로)',
      answer: '3/4',
      explanation: '계산 순서: 곱셈 먼저!\n\n$\\frac{2}{3} + \\frac{2}{3} \\times \\frac{1}{2} - \\frac{1}{4}$\n$= \\frac{2}{3} + \\frac{1}{3} - \\frac{1}{4}$\n$= \\frac{3}{3} - \\frac{1}{4}$\n$= 1 - \\frac{1}{4}$\n$= \\frac{3}{4}$',
    },
    {
      id: 'fd11-p6',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '어떤 분수에 $\\frac{3}{4}$을 곱해야 할 것을 잘못하여 $\\frac{3}{4}$으로 나누었더니 $\\frac{8}{9}$이 되었습니다. 바르게 계산한 값은?',
      options: ['$\\frac{3}{8}$', '$\\frac{1}{3}$', '$\\frac{1}{2}$', '$\\frac{3}{4}$'],
      answer: '$\\frac{1}{2}$',
      explanation: '잘못한 계산: 어떤 수 $\\div \\frac{3}{4} = \\frac{8}{9}$\n\n어떤 수 $= \\frac{8}{9} \\times \\frac{3}{4} = \\frac{24}{36} = \\frac{2}{3}$\n\n바른 계산: $\\frac{2}{3} \\times \\frac{3}{4} = \\frac{6}{12} = \\frac{1}{2}$\n\n검산: $\\frac{2}{3} \\div \\frac{3}{4} = \\frac{2}{3} \\times \\frac{4}{3} = \\frac{8}{9}$ ✓',
    },
  ],
  realLifeExample: '분수는 시간 관리에도 필수예요. 1시간의 3/4은 45분, 하루의 1/3은 8시간. 분수를 잘 다루면 시간 계획을 정확하게 세울 수 있습니다!',
};

export default dayContent;
