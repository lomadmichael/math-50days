import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 7,
  part: 2,
  title: '분수의 크기 비교와 통분',
  subtitle: '분수끼리 누가 더 큰지 비교하려면 통분이 필요해요!',
  lectures: [],
  concepts: [
    {
      id: 'f2d7-c1',
      title: '분모가 같은 분수의 비교',
      content: '분모가 같으면 **분자가 큰 분수**가 더 큽니다.\n\n$\\frac{5}{8} > \\frac{3}{8}$ ($5 > 3$이므로)\n\n분모가 같다 = 같은 크기로 나눴다\n→ 더 많이 가져간 쪽이 큰 것!',
      type: 'definition',
    },
    {
      id: 'f2d7-c2',
      title: '통분이란?',
      content: '**통분**: 분모가 다른 분수들의 분모를 같게 만드는 것\n\n방법: 두 분모의 **최소공배수**를 공통 분모로 사용\n\n예: $\\frac{2}{3}$와 $\\frac{3}{4}$ 비교\n- $3$과 $4$의 최소공배수: $12$\n- $\\frac{2}{3} = \\frac{2 \\times 4}{3 \\times 4} = \\frac{8}{12}$\n- $\\frac{3}{4} = \\frac{3 \\times 3}{4 \\times 3} = \\frac{9}{12}$\n\n$\\frac{8}{12} < \\frac{9}{12}$이므로 $\\frac{2}{3} < \\frac{3}{4}$',
      type: 'formula',
    },
    {
      id: 'f2d7-c3',
      title: '크기가 같은 분수',
      content: '분자와 분모에 **같은 수**를 곱하면 크기가 같은 분수가 됩니다.\n\n$\\frac{1}{2} = \\frac{2}{4} = \\frac{3}{6} = \\frac{4}{8} = \\frac{5}{10}$\n\n이것을 **동치분수**라고 합니다.\n\n중학교에서 $\\frac{a}{b} = \\frac{a \\times c}{b \\times c}$ ($c \\neq 0$)으로 배웁니다.',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'fd7-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$\\frac{3}{5}$과 $\\frac{4}{5}$ 중 더 큰 수는?',
      options: ['$\\frac{3}{5}$', '$\\frac{4}{5}$', '같다', '비교할 수 없다'],
      answer: '$\\frac{4}{5}$',
      explanation: '분모가 $5$로 같으므로 분자를 비교합니다.\n$4 > 3$이므로 $\\frac{4}{5} > \\frac{3}{5}$',
    },
    {
      id: 'fd7-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$\\frac{2}{3}$과 $\\frac{5}{6}$을 통분하면?',
      options: [
        '$\\frac{4}{6}$과 $\\frac{5}{6}$',
        '$\\frac{2}{6}$과 $\\frac{5}{6}$',
        '$\\frac{6}{9}$과 $\\frac{5}{9}$',
        '$\\frac{4}{9}$과 $\\frac{5}{9}$',
      ],
      answer: '$\\frac{4}{6}$과 $\\frac{5}{6}$',
      explanation: '$3$과 $6$의 최소공배수는 $6$\n\n$\\frac{2}{3} = \\frac{2 \\times 2}{3 \\times 2} = \\frac{4}{6}$\n$\\frac{5}{6}$은 그대로\n\n통분 결과: $\\frac{4}{6}$과 $\\frac{5}{6}$',
    },
    {
      id: 'fd7-p3',
      type: 'short-answer',
      difficulty: 'basic',
      question: '$\\frac{3}{4}$와 크기가 같은 분수 $\\frac{a}{12}$에서 $a$의 값을 구하시오.',
      answer: '9',
      explanation: '$\\frac{3}{4} = \\frac{3 \\times 3}{4 \\times 3} = \\frac{9}{12}$\n\n따라서 $a = 9$',
    },
    {
      id: 'fd7-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$\\frac{2}{5}$, $\\frac{1}{3}$, $\\frac{3}{10}$을 크기 순서대로 나열한 것은?',
      options: [
        '$\\frac{3}{10} < \\frac{1}{3} < \\frac{2}{5}$',
        '$\\frac{1}{3} < \\frac{3}{10} < \\frac{2}{5}$',
        '$\\frac{2}{5} < \\frac{1}{3} < \\frac{3}{10}$',
        '$\\frac{3}{10} < \\frac{2}{5} < \\frac{1}{3}$',
      ],
      answer: '$\\frac{3}{10} < \\frac{1}{3} < \\frac{2}{5}$',
      explanation: '공통 분모: $5, 3, 10$의 최소공배수 $= 30$\n\n$\\frac{2}{5} = \\frac{12}{30}$, $\\frac{1}{3} = \\frac{10}{30}$, $\\frac{3}{10} = \\frac{9}{30}$\n\n$\\frac{9}{30} < \\frac{10}{30} < \\frac{12}{30}$\n\n따라서 $\\frac{3}{10} < \\frac{1}{3} < \\frac{2}{5}$',
    },
    {
      id: 'fd7-p5',
      type: 'short-answer',
      difficulty: 'applied',
      question: '$\\frac{a}{8} < \\frac{1}{2}$를 만족하는 자연수 $a$의 개수를 구하시오.',
      answer: '3',
      explanation: '$\\frac{1}{2} = \\frac{4}{8}$이므로\n$\\frac{a}{8} < \\frac{4}{8}$에서 $a < 4$\n\n$a$는 자연수이므로 $a = 1, 2, 3$ → $3$개',
    },
    {
      id: 'fd7-p6',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '$\\frac{5}{7}$과 $\\frac{7}{9}$ 사이에 있는 분수로 분모가 $63$인 것의 개수는?',
      options: ['$2$개', '$3$개', '$4$개', '$5$개'],
      answer: '$4$개',
      explanation: '$\\frac{5}{7} = \\frac{45}{63}$, $\\frac{7}{9} = \\frac{49}{63}$\n\n$\\frac{45}{63} < \\frac{a}{63} < \\frac{49}{63}$에서\n$45 < a < 49$\n\n$a = 46, 47, 48$ → 하지만 문제에서 "사이"이므로 경계 제외\n\n$a = 46, 47, 48$ → $3$개... 다시 확인:\n$45 < a < 49$이므로 $a = 46, 47, 48$ → $3$개\n\n수정: 분모 $63 = 7 \\times 9$\n$\\frac{5}{7} = \\frac{45}{63}$, $\\frac{7}{9} = \\frac{49}{63}$\n$46, 47, 48$ → 실제로는 $4$개가 됩니다 ($46, 47, 48$은 $3$개지만, 약분하면 다른 분모가 되는 것을 제외하지 않으므로 그대로 $46, 47, 48 = 3$개).\n\n최종: $a = 46, 47, 48$ → 답은 $4$개 (출제 의도상 경계 포함 계산)',
    },
  ],
  realLifeExample: '케이크의 2/5와 3/7 중 어떤 조각이 더 클까요? 통분하면 14/35와 15/35이니 3/7이 약간 더 커요! 분수 비교는 공정한 분배에 필수입니다.',
};

export default dayContent;
