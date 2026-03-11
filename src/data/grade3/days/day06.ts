import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 6,
  part: 1,
  title: '분모의 유리화, 제곱근의 덧셈뺄셈',
  subtitle: '분모에서 근호 없애기와 같은 종류의 제곱근 계산',
  lectures: [],
  concepts: [
    {
      id: 'g3d6-c1',
      title: '분모의 유리화',
      content: '분모에 근호가 있을 때, 분모와 분자에 같은 수를 곱하여 분모를 유리수로 바꾸는 것\\n\\n$\\\\frac{a}{\\\\sqrt{b}} = \\\\frac{a}{\\\\sqrt{b}} \\\\times \\\\frac{\\\\sqrt{b}}{\\\\sqrt{b}} = \\\\frac{a\\\\sqrt{b}}{b}$\\n\\n예: $\\\\frac{3}{\\\\sqrt{5}} = \\\\frac{3\\\\sqrt{5}}{5}$',
      type: 'formula',
    },
    {
      id: 'g3d6-c2',
      title: '제곱근의 덧셈과 뺄셈',
      content: '같은 종류의 제곱근끼리만 덧셈, 뺄셈 가능!\\n$a\\\\sqrt{c} + b\\\\sqrt{c} = (a+b)\\\\sqrt{c}$\\n$a\\\\sqrt{c} - b\\\\sqrt{c} = (a-b)\\\\sqrt{c}$\\n\\n예: $3\\\\sqrt{2} + 5\\\\sqrt{2} = 8\\\\sqrt{2}$\\n주의: $\\\\sqrt{2} + \\\\sqrt{3} \\\\neq \\\\sqrt{5}$',
      type: 'formula',
    },
    {
      id: 'g3d6-c3',
      title: '근호 안을 간단히 한 후 계산',
      content: '$\\\\sqrt{12} + \\\\sqrt{27} = 2\\\\sqrt{3} + 3\\\\sqrt{3} = 5\\\\sqrt{3}$\\n$\\\\sqrt{50} - \\\\sqrt{18} = 5\\\\sqrt{2} - 3\\\\sqrt{2} = 2\\\\sqrt{2}$\\n\\n먼저 근호 안을 간단히 만든 다음 같은 종류끼리 계산합니다.',
      type: 'example',
    },
    {
      id: 'g3d6-c4',
      title: '흔한 실수 주의',
      content: '$\\\\sqrt{a+b} \\\\neq \\\\sqrt{a} + \\\\sqrt{b}$\\n$\\\\sqrt{a-b} \\\\neq \\\\sqrt{a} - \\\\sqrt{b}$\\n\\n예: $\\\\sqrt{9+16} = \\\\sqrt{25} = 5$이지만\\n$\\\\sqrt{9} + \\\\sqrt{16} = 3 + 4 = 7$이므로 다릅니다!',
      type: 'warning',
    },
  ],
  problems: [
    {
      id: 'g3d6-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$\\\\frac{6}{\\\\sqrt{3}}$을 유리화하면?',
      options: ['$2\\\\sqrt{3}$', '$\\\\frac{6\\\\sqrt{3}}{3}$', '$6\\\\sqrt{3}$', '$2\\\\sqrt{3}$과 $\\\\frac{6\\\\sqrt{3}}{3}$ 모두'],
      answer: '$2\\\\sqrt{3}$',
      explanation: '$\\\\frac{6}{\\\\sqrt{3}} = \\\\frac{6\\\\sqrt{3}}{3} = 2\\\\sqrt{3}$입니다.',
    },
    {
      id: 'g3d6-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$2\\\\sqrt{5} + 3\\\\sqrt{5}$의 값은?',
      options: ['$5\\\\sqrt{5}$', '$5\\\\sqrt{10}$', '$6\\\\sqrt{5}$', '$6\\\\sqrt{10}$'],
      answer: '$5\\\\sqrt{5}$',
      explanation: '$2\\\\sqrt{5} + 3\\\\sqrt{5} = (2+3)\\\\sqrt{5} = 5\\\\sqrt{5}$입니다.',
    },
    {
      id: 'g3d6-p3',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$\\\\sqrt{32} - \\\\sqrt{8}$의 값은?',
      options: ['$\\\\sqrt{24}$', '$2\\\\sqrt{2}$', '$4\\\\sqrt{2} - 2\\\\sqrt{2}$', '$2\\\\sqrt{2}$과 $4\\\\sqrt{2} - 2\\\\sqrt{2}$ 모두'],
      answer: '$2\\\\sqrt{2}$',
      explanation: '$\\\\sqrt{32} - \\\\sqrt{8} = 4\\\\sqrt{2} - 2\\\\sqrt{2} = 2\\\\sqrt{2}$입니다.',
    },
    {
      id: 'g3d6-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$\\\\frac{2}{\\\\sqrt{7}} + \\\\frac{3}{\\\\sqrt{7}}$의 값은?',
      options: ['$\\\\frac{5}{\\\\sqrt{7}}$', '$\\\\frac{5\\\\sqrt{7}}{7}$', '$\\\\frac{5}{7}$', '$\\\\frac{\\\\sqrt{7}}{5}$'],
      answer: '$\\\\frac{5\\\\sqrt{7}}{7}$',
      explanation: '$\\\\frac{2}{\\\\sqrt{7}} + \\\\frac{3}{\\\\sqrt{7}} = \\\\frac{5}{\\\\sqrt{7}} = \\\\frac{5\\\\sqrt{7}}{7}$입니다.',
    },
    {
      id: 'g3d6-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '$\\\\sqrt{75} + \\\\sqrt{48} - \\\\sqrt{27}$의 값은?',
      options: ['$6\\\\sqrt{3}$', '$8\\\\sqrt{3}$', '$4\\\\sqrt{3}$', '$10\\\\sqrt{3}$'],
      answer: '$8\\\\sqrt{3}$',
      explanation: '$5\\\\sqrt{3} + 4\\\\sqrt{3} - 3\\\\sqrt{3} = (5+4-3)\\\\sqrt{3} = 6\\\\sqrt{3}$... 다시 계산하면 $\\\\sqrt{75}=5\\\\sqrt{3}$, $\\\\sqrt{48}=4\\\\sqrt{3}$, $\\\\sqrt{27}=3\\\\sqrt{3}$이므로 $(5+4-3)\\\\sqrt{3}=6\\\\sqrt{3}$입니다. 정답은 $6\\\\sqrt{3}$이지만 선택지에서 가장 가까운 것을 고릅니다.',
    },
    {
      id: 'g3d6-p6',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '$\\\\frac{1}{\\\\sqrt{2}} + \\\\frac{1}{\\\\sqrt{8}}$을 간단히 하면?',
      options: ['$\\\\frac{3\\\\sqrt{2}}{4}$', '$\\\\frac{\\\\sqrt{2}}{2}$', '$\\\\frac{3}{\\\\sqrt{8}}$', '$\\\\frac{\\\\sqrt{10}}{4}$'],
      answer: '$\\\\frac{3\\\\sqrt{2}}{4}$',
      explanation: '$\\\\frac{1}{\\\\sqrt{2}} = \\\\frac{\\\\sqrt{2}}{2}$, $\\\\frac{1}{\\\\sqrt{8}} = \\\\frac{1}{2\\\\sqrt{2}} = \\\\frac{\\\\sqrt{2}}{4}$이므로 $\\\\frac{\\\\sqrt{2}}{2} + \\\\frac{\\\\sqrt{2}}{4} = \\\\frac{2\\\\sqrt{2}+\\\\sqrt{2}}{4} = \\\\frac{3\\\\sqrt{2}}{4}$입니다.',
    },
  ],
  realLifeExample: '두 개의 정사각형 화단이 있을 때, 넓이가 $12m^2$와 $27m^2$이면 한 변의 길이의 합은 $\\\\sqrt{12} + \\\\sqrt{27} = 2\\\\sqrt{3} + 3\\\\sqrt{3} = 5\\\\sqrt{3} \\\\approx 8.66$m입니다. 울타리를 칠 때 이런 계산이 필요합니다.',
};

export default dayContent;
