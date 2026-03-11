import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 6,
  part: 2,
  title: '분수의 뜻과 종류',
  subtitle: '분수를 확실히 이해하면 중학교 유리수가 쉬워져요!',
  lectures: [],
  concepts: [
    {
      id: 'f2d6-c1',
      title: '분수란?',
      content: '**분수**는 전체를 똑같이 나눈 것 중 일부를 나타내는 수입니다.\n\n$\\frac{3}{4}$ → 전체를 $4$등분한 것 중 $3$개\n\n- **분자**: 위의 수 ($3$) — 취한 부분\n- **분모**: 아래의 수 ($4$) — 전체를 나눈 수\n\n중학교에서는 이것을 **유리수**라고 부릅니다!',
      type: 'definition',
    },
    {
      id: 'f2d6-c2',
      title: '분수의 종류',
      content: '**진분수:** 분자 < 분모 → $\\frac{2}{5}$, $\\frac{3}{7}$\n(0보다 크고 1보다 작은 수)\n\n**가분수:** 분자 $\\geq$ 분모 → $\\frac{5}{3}$, $\\frac{7}{7}$\n(1 이상인 수)\n\n**대분수:** 자연수와 진분수의 합 → $2\\frac{1}{3}$\n($2\\frac{1}{3} = 2 + \\frac{1}{3}$)',
      type: 'definition',
    },
    {
      id: 'f2d6-c3',
      title: '대분수 ↔ 가분수 변환',
      content: '**대분수 → 가분수:**\n$2\\frac{3}{5} = \\frac{2 \\times 5 + 3}{5} = \\frac{13}{5}$\n\n**가분수 → 대분수:**\n$\\frac{17}{4} = 17 \\div 4 = 4 \\cdots 1$\n따라서 $\\frac{17}{4} = 4\\frac{1}{4}$\n\n이 변환은 분수 계산에서 아주 자주 사용됩니다!',
      type: 'formula',
    },
  ],
  problems: [
    {
      id: 'fd6-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '다음 중 진분수는?',
      options: ['$\\frac{7}{5}$', '$\\frac{5}{5}$', '$\\frac{3}{8}$', '$2\\frac{1}{4}$'],
      answer: '$\\frac{3}{8}$',
      explanation: '진분수는 분자 < 분모인 분수입니다.\n$\\frac{3}{8}$에서 $3 < 8$이므로 진분수입니다.\n\n$\\frac{7}{5}$: 가분수, $\\frac{5}{5}$: 가분수, $2\\frac{1}{4}$: 대분수',
    },
    {
      id: 'fd6-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: '$3\\frac{2}{7}$를 가분수로 나타내면 $\\frac{a}{7}$입니다. $a$의 값을 구하시오.',
      answer: '23',
      explanation: '$3\\frac{2}{7} = \\frac{3 \\times 7 + 2}{7} = \\frac{21 + 2}{7} = \\frac{23}{7}$\n\n따라서 $a = 23$',
    },
    {
      id: 'fd6-p3',
      type: 'short-answer',
      difficulty: 'basic',
      question: '$\\frac{19}{6}$을 대분수로 나타내면 $A\\frac{B}{6}$입니다. $A$의 값을 구하시오.',
      answer: '3',
      explanation: '$19 \\div 6 = 3 \\cdots 1$\n\n따라서 $\\frac{19}{6} = 3\\frac{1}{6}$이고, $A = 3$입니다.',
    },
    {
      id: 'fd6-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$\\frac{a}{6}$이 진분수가 되려면 $a$가 될 수 있는 자연수는 모두 몇 개?',
      options: ['$4$개', '$5$개', '$6$개', '$7$개'],
      answer: '$5$개',
      explanation: '진분수: 분자 < 분모이므로 $a < 6$\n$a$는 자연수이므로 $a = 1, 2, 3, 4, 5$\n\n총 $5$개입니다.',
    },
    {
      id: 'fd6-p5',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '다음 중 $1$보다 큰 분수를 모두 고른 것은?\n\n(가) $\\frac{4}{3}$ (나) $\\frac{6}{7}$ (다) $\\frac{9}{9}$ (라) $\\frac{11}{8}$',
      options: ['(가), (라)', '(가), (다), (라)', '(가), (다)', '(나), (라)'],
      answer: '(가), (라)',
      explanation: '1보다 큰 분수는 분자 > 분모인 가분수입니다.\n\n(가) $\\frac{4}{3}$: $4 > 3$ ✓\n(나) $\\frac{6}{7}$: $6 < 7$ ✗\n(다) $\\frac{9}{9} = 1$: 1과 같음 ✗\n(라) $\\frac{11}{8}$: $11 > 8$ ✓',
    },
    {
      id: 'fd6-p6',
      type: 'short-answer',
      difficulty: 'challenge',
      question: '$\\frac{a}{4}$가 $2$보다 크고 $4$보다 작은 자연수가 아닌 가분수일 때, $a$가 될 수 있는 자연수의 개수를 구하시오.',
      answer: '7',
      explanation: '$2 < \\frac{a}{4} < 4$에서\n$8 < a < 16$\n\n$a$는 자연수이므로 $a = 9, 10, 11, 12, 13, 14, 15$\n\n이 중 $\\frac{a}{4}$가 자연수가 되는 경우($a = 12$)도 포함하면 $7$개입니다.',
    },
  ],
  realLifeExample: '피자를 8조각으로 나눠서 3조각 먹었다면 3/8을 먹은 거예요. 분수는 음식 나누기, 시간 계산(1시간의 3/4은 45분) 등 일상에서 항상 쓰입니다!',
};

export default dayContent;
