import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 8,
  part: 2,
  title: '분수의 덧셈과 뺄셈',
  subtitle: '통분해서 분모를 맞추면 분수도 쉽게 더하고 뺄 수 있어요!',
  lectures: [],
  concepts: [
    {
      id: 'f2d8-c1',
      title: '분모가 같은 분수의 덧셈·뺄셈',
      content: '분모가 같으면 **분자끼리만** 더하거나 빼면 됩니다.\n\n$\\frac{2}{7} + \\frac{3}{7} = \\frac{2+3}{7} = \\frac{5}{7}$\n\n$\\frac{5}{9} - \\frac{2}{9} = \\frac{5-2}{9} = \\frac{3}{9} = \\frac{1}{3}$\n\n결과가 약분 가능하면 반드시 **약분**합니다!',
      type: 'formula',
    },
    {
      id: 'f2d8-c2',
      title: '분모가 다른 분수의 덧셈·뺄셈',
      content: '분모가 다르면 **통분** 후 계산합니다.\n\n예: $\\frac{1}{3} + \\frac{1}{4}$\n- 공통 분모: $12$ ($3$과 $4$의 최소공배수)\n- $\\frac{1}{3} = \\frac{4}{12}$, $\\frac{1}{4} = \\frac{3}{12}$\n- $\\frac{4}{12} + \\frac{3}{12} = \\frac{7}{12}$\n\n이 과정이 중학교 **유리수의 덧셈·뺄셈**과 같습니다!',
      type: 'formula',
    },
    {
      id: 'f2d8-c3',
      title: '대분수의 덧셈·뺄셈',
      content: '**방법 1:** 자연수끼리, 분수끼리 따로 계산\n$2\\frac{1}{3} + 1\\frac{1}{4} = (2+1) + (\\frac{1}{3}+\\frac{1}{4}) = 3 + \\frac{7}{12} = 3\\frac{7}{12}$\n\n**방법 2:** 가분수로 바꿔서 계산\n$2\\frac{1}{3} + 1\\frac{1}{4} = \\frac{7}{3} + \\frac{5}{4} = \\frac{28}{12} + \\frac{15}{12} = \\frac{43}{12} = 3\\frac{7}{12}$',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'fd8-p1',
      type: 'short-answer',
      difficulty: 'basic',
      question: '$\\frac{3}{8} + \\frac{5}{8}$을 계산하시오. (기약분수로)',
      answer: '1',
      explanation: '$\\frac{3}{8} + \\frac{5}{8} = \\frac{8}{8} = 1$',
    },
    {
      id: 'fd8-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$\\frac{1}{2} + \\frac{1}{3}$의 값은?',
      options: ['$\\frac{2}{5}$', '$\\frac{5}{6}$', '$\\frac{1}{6}$', '$\\frac{2}{6}$'],
      answer: '$\\frac{5}{6}$',
      explanation: '통분: $\\frac{1}{2} = \\frac{3}{6}$, $\\frac{1}{3} = \\frac{2}{6}$\n\n$\\frac{3}{6} + \\frac{2}{6} = \\frac{5}{6}$',
    },
    {
      id: 'fd8-p3',
      type: 'short-answer',
      difficulty: 'basic',
      question: '$\\frac{7}{10} - \\frac{1}{5}$을 계산하시오. (기약분수로)',
      answer: '1/2',
      explanation: '통분: $\\frac{1}{5} = \\frac{2}{10}$\n\n$\\frac{7}{10} - \\frac{2}{10} = \\frac{5}{10} = \\frac{1}{2}$',
    },
    {
      id: 'fd8-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$2\\frac{3}{4} - 1\\frac{1}{2}$의 값은?',
      options: ['$1\\frac{1}{4}$', '$1\\frac{1}{2}$', '$\\frac{5}{4}$', '$1\\frac{1}{4}$과 $\\frac{5}{4}$ 모두'],
      answer: '$1\\frac{1}{4}$과 $\\frac{5}{4}$ 모두',
      explanation: '$2\\frac{3}{4} - 1\\frac{1}{2}$\n\n자연수끼리: $2 - 1 = 1$\n분수끼리: $\\frac{3}{4} - \\frac{1}{2} = \\frac{3}{4} - \\frac{2}{4} = \\frac{1}{4}$\n\n답: $1\\frac{1}{4} = \\frac{5}{4}$ (둘 다 같은 값)',
    },
    {
      id: 'fd8-p5',
      type: 'short-answer',
      difficulty: 'applied',
      question: '$\\frac{2}{3} + \\frac{3}{4} + \\frac{1}{6}$을 계산하시오. (대분수로)',
      answer: '1 7/12',
      explanation: '공통 분모: $3, 4, 6$의 최소공배수 $= 12$\n\n$\\frac{2}{3} = \\frac{8}{12}$, $\\frac{3}{4} = \\frac{9}{12}$, $\\frac{1}{6} = \\frac{2}{12}$\n\n$\\frac{8}{12} + \\frac{9}{12} + \\frac{2}{12} = \\frac{19}{12} = 1\\frac{7}{12}$',
    },
    {
      id: 'fd8-p6',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '$\\frac{1}{2} + \\frac{1}{6} + \\frac{1}{12}$의 값은?',
      options: ['$\\frac{3}{4}$', '$\\frac{7}{12}$', '$\\frac{5}{6}$', '$\\frac{3}{20}$'],
      answer: '$\\frac{3}{4}$',
      explanation: '공통 분모: $12$\n\n$\\frac{1}{2} = \\frac{6}{12}$, $\\frac{1}{6} = \\frac{2}{12}$, $\\frac{1}{12} = \\frac{1}{12}$\n\n$\\frac{6}{12} + \\frac{2}{12} + \\frac{1}{12} = \\frac{9}{12} = \\frac{3}{4}$\n\n참고: $\\frac{1}{2} = \\frac{1}{3} + \\frac{1}{6}$처럼 분수를 쪼개는 것을 **단위분수 분해**라고 합니다.',
    },
  ],
  realLifeExample: '요리할 때 밀가루 2/3컵과 설탕 1/4컵을 섞으면 총 몇 컵일까요? 통분하면 8/12 + 3/12 = 11/12컵이에요. 분수 연산은 요리의 기본!',
};

export default dayContent;
