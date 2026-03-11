import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 5,
  part: 1,
  title: '제곱근의 곱셈과 나눗셈',
  subtitle: '$\\\\sqrt{a} \\\\times \\\\sqrt{b}$와 $\\\\frac{\\\\sqrt{a}}{\\\\sqrt{b}}$',
  lectures: [],
  concepts: [
    {
      id: 'g3d5-c1',
      title: '제곱근의 곱셈',
      content: '$a \\\\geq 0$, $b \\\\geq 0$일 때:\\n$\\\\sqrt{a} \\\\times \\\\sqrt{b} = \\\\sqrt{ab}$\\n$\\\\sqrt{ab} = \\\\sqrt{a} \\\\times \\\\sqrt{b}$\\n\\n예: $\\\\sqrt{3} \\\\times \\\\sqrt{5} = \\\\sqrt{15}$\\n$\\\\sqrt{2} \\\\times \\\\sqrt{8} = \\\\sqrt{16} = 4$',
      type: 'formula',
    },
    {
      id: 'g3d5-c2',
      title: '제곱근의 나눗셈',
      content: '$a \\\\geq 0$, $b > 0$일 때:\\n$\\\\frac{\\\\sqrt{a}}{\\\\sqrt{b}} = \\\\sqrt{\\\\frac{a}{b}}$\\n$\\\\sqrt{\\\\frac{a}{b}} = \\\\frac{\\\\sqrt{a}}{\\\\sqrt{b}}$\\n\\n예: $\\\\frac{\\\\sqrt{12}}{\\\\sqrt{3}} = \\\\sqrt{\\\\frac{12}{3}} = \\\\sqrt{4} = 2$',
      type: 'formula',
    },
    {
      id: 'g3d5-c3',
      title: '근호 안을 간단히 하기',
      content: '$\\\\sqrt{a^2 \\\\times b} = a\\\\sqrt{b}$ (단, $a > 0$, $b \\\\geq 0$)\\n\\n예: $\\\\sqrt{12} = \\\\sqrt{4 \\\\times 3} = 2\\\\sqrt{3}$\\n$\\\\sqrt{48} = \\\\sqrt{16 \\\\times 3} = 4\\\\sqrt{3}$\\n$\\\\sqrt{75} = \\\\sqrt{25 \\\\times 3} = 5\\\\sqrt{3}$',
      type: 'tip',
    },
    {
      id: 'g3d5-c4',
      title: '근호 안에 넣기',
      content: '$a\\\\sqrt{b} = \\\\sqrt{a^2 \\\\times b}$ (단, $a > 0$)\\n\\n예: $3\\\\sqrt{2} = \\\\sqrt{9 \\\\times 2} = \\\\sqrt{18}$\\n$2\\\\sqrt{5} = \\\\sqrt{4 \\\\times 5} = \\\\sqrt{20}$\\n대소 비교에 유용합니다.',
      type: 'example',
    },
  ],
  problems: [
    {
      id: 'g3d5-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$\\\\sqrt{3} \\\\times \\\\sqrt{12}$의 값은?',
      options: ['$6$', '$\\\\sqrt{36}$', '$4$', '$36$'],
      answer: '$6$',
      explanation: '$\\\\sqrt{3} \\\\times \\\\sqrt{12} = \\\\sqrt{36} = 6$입니다.',
    },
    {
      id: 'g3d5-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$\\\\sqrt{50}$을 간단히 하면?',
      options: ['$5\\\\sqrt{2}$', '$2\\\\sqrt{5}$', '$25\\\\sqrt{2}$', '$10\\\\sqrt{5}$'],
      answer: '$5\\\\sqrt{2}$',
      explanation: '$\\\\sqrt{50} = \\\\sqrt{25 \\\\times 2} = 5\\\\sqrt{2}$입니다.',
    },
    {
      id: 'g3d5-p3',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$\\\\frac{\\\\sqrt{20}}{\\\\sqrt{5}}$의 값은?',
      options: ['$\\\\sqrt{4}$', '$4$', '$2$', '$\\\\sqrt{15}$'],
      answer: '$2$',
      explanation: '$\\\\frac{\\\\sqrt{20}}{\\\\sqrt{5}} = \\\\sqrt{\\\\frac{20}{5}} = \\\\sqrt{4} = 2$입니다.',
    },
    {
      id: 'g3d5-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$\\\\sqrt{72}$를 가장 간단한 형태로 나타내면?',
      options: ['$6\\\\sqrt{2}$', '$3\\\\sqrt{8}$', '$2\\\\sqrt{18}$', '$36\\\\sqrt{2}$'],
      answer: '$6\\\\sqrt{2}$',
      explanation: '$\\\\sqrt{72} = \\\\sqrt{36 \\\\times 2} = 6\\\\sqrt{2}$입니다. 근호 안의 수가 가장 작은 것이 가장 간단한 형태입니다.',
    },
    {
      id: 'g3d5-p5',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$2\\\\sqrt{3} \\\\times 3\\\\sqrt{2}$의 값은?',
      options: ['$5\\\\sqrt{5}$', '$6\\\\sqrt{6}$', '$6\\\\sqrt{5}$', '$5\\\\sqrt{6}$'],
      answer: '$6\\\\sqrt{6}$',
      explanation: '$2\\\\sqrt{3} \\\\times 3\\\\sqrt{2} = (2 \\\\times 3) \\\\times (\\\\sqrt{3} \\\\times \\\\sqrt{2}) = 6\\\\sqrt{6}$입니다.',
    },
    {
      id: 'g3d5-p6',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '$\\\\sqrt{2} \\\\times \\\\sqrt{6} \\\\times \\\\sqrt{3}$의 값은?',
      options: ['$6$', '$\\\\sqrt{36}$', '$3\\\\sqrt{4}$', '$6$과 $\\\\sqrt{36}$ 모두'],
      answer: '$6$',
      explanation: '$\\\\sqrt{2} \\\\times \\\\sqrt{6} \\\\times \\\\sqrt{3} = \\\\sqrt{2 \\\\times 6 \\\\times 3} = \\\\sqrt{36} = 6$입니다.',
    },
  ],
  realLifeExample: '정사각형 타일의 넓이가 $18cm^2$일 때 한 변의 길이는 $\\\\sqrt{18} = 3\\\\sqrt{2} \\\\approx 4.24$cm입니다. 이 타일 2장을 이어 붙인 직사각형의 넓이는 $36cm^2$이고, 대각선의 길이를 구할 때도 제곱근의 곱셈이 활용됩니다.',
};

export default dayContent;
