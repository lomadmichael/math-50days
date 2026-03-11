import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 7,
  part: 1,
  title: '미니테스트 + 복습',
  subtitle: 'PART 1 총정리: 제곱근과 실수',
  lectures: [],
  concepts: [
    {
      id: 'g3d7-c1',
      title: 'PART 1 핵심 요약',
      content: '① 제곱근: $x^2 = a$일 때 $x = \\\\pm\\\\sqrt{a}$\\n② 성질: $\\\\sqrt{a^2} = |a|$, $(\\\\sqrt{a})^2 = a$\\n③ 실수 = 유리수 + 무리수\\n④ 곱셈: $\\\\sqrt{a} \\\\times \\\\sqrt{b} = \\\\sqrt{ab}$\\n⑤ 나눗셈: $\\\\frac{\\\\sqrt{a}}{\\\\sqrt{b}} = \\\\sqrt{\\\\frac{a}{b}}$\\n⑥ 유리화: $\\\\frac{a}{\\\\sqrt{b}} = \\\\frac{a\\\\sqrt{b}}{b}$\\n⑦ 덧뺄셈: 같은 종류끼리만 가능',
      type: 'tip',
    },
    {
      id: 'g3d7-c2',
      title: '자주 틀리는 포인트',
      content: '✗ $\\\\sqrt{4} = \\\\pm 2$ → ✓ $\\\\sqrt{4} = 2$ (양의 제곱근만)\\n✗ $\\\\sqrt{a+b} = \\\\sqrt{a} + \\\\sqrt{b}$ → ✗ (성립하지 않음)\\n✗ $\\\\sqrt{(-3)^2} = -3$ → ✓ $\\\\sqrt{(-3)^2} = 3$\\n✗ 순환소수는 무리수 → ✓ 순환소수는 유리수',
      type: 'warning',
    },
  ],
  problems: [
    {
      id: 'g3d7-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$\\\\sqrt{81}$의 값은?',
      options: ['$\\\\pm 9$', '$9$', '$-9$', '$81$'],
      answer: '$9$',
      explanation: '$\\\\sqrt{81}$은 81의 양의 제곱근이므로 $9$입니다.',
    },
    {
      id: 'g3d7-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '다음 중 무리수인 것은?',
      options: ['$\\\\sqrt{25}$', '$0.\\\\overline{142857}$', '$\\\\sqrt{7}$', '$-\\\\frac{3}{4}$'],
      answer: '$\\\\sqrt{7}$',
      explanation: '$\\\\sqrt{25} = 5$ (유리수), $0.\\\\overline{142857}$ (순환소수=유리수), $-\\\\frac{3}{4}$ (유리수). $\\\\sqrt{7}$만 무리수입니다.',
    },
    {
      id: 'g3d7-p3',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$\\\\sqrt{18} \\\\times \\\\sqrt{2}$의 값은?',
      options: ['$\\\\sqrt{20}$', '$6$', '$4\\\\sqrt{2}$', '$36$'],
      answer: '$6$',
      explanation: '$\\\\sqrt{18} \\\\times \\\\sqrt{2} = \\\\sqrt{36} = 6$입니다.',
    },
    {
      id: 'g3d7-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$\\\\frac{4}{\\\\sqrt{2}} - \\\\sqrt{2}$의 값은?',
      options: ['$\\\\sqrt{2}$', '$2\\\\sqrt{2}$', '$0$', '$3\\\\sqrt{2}$'],
      answer: '$\\\\sqrt{2}$',
      explanation: '$\\\\frac{4}{\\\\sqrt{2}} = \\\\frac{4\\\\sqrt{2}}{2} = 2\\\\sqrt{2}$이므로 $2\\\\sqrt{2} - \\\\sqrt{2} = \\\\sqrt{2}$입니다.',
    },
    {
      id: 'g3d7-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '$a = \\\\sqrt{5} + 2$, $b = \\\\sqrt{5} - 2$일 때, $a^2 + b^2$의 값은?',
      options: ['$16$', '$18$', '$20$', '$10$'],
      answer: '$18$',
      explanation: '$a^2 = (\\\\sqrt{5}+2)^2 = 5 + 4\\\\sqrt{5} + 4 = 9 + 4\\\\sqrt{5}$\\n$b^2 = (\\\\sqrt{5}-2)^2 = 5 - 4\\\\sqrt{5} + 4 = 9 - 4\\\\sqrt{5}$\\n$a^2 + b^2 = 18$입니다.',
    },
    {
      id: 'g3d7-p6',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '$\\\\frac{1}{\\\\sqrt{3}+\\\\sqrt{2}}$을 유리화하면?',
      options: ['$\\\\sqrt{3} - \\\\sqrt{2}$', '$\\\\sqrt{3} + \\\\sqrt{2}$', '$\\\\frac{\\\\sqrt{3}-\\\\sqrt{2}}{5}$', '$\\\\frac{1}{\\\\sqrt{5}}$'],
      answer: '$\\\\sqrt{3} - \\\\sqrt{2}$',
      explanation: '$\\\\frac{1}{\\\\sqrt{3}+\\\\sqrt{2}} \\\\times \\\\frac{\\\\sqrt{3}-\\\\sqrt{2}}{\\\\sqrt{3}-\\\\sqrt{2}} = \\\\frac{\\\\sqrt{3}-\\\\sqrt{2}}{3-2} = \\\\sqrt{3}-\\\\sqrt{2}$입니다.',
    },
  ],
  realLifeExample: 'PART 1에서 배운 제곱근은 건축, 물리, 공학 등 다양한 분야의 기초입니다. 예를 들어 자유낙하 시간 $t = \\\\sqrt{\\\\frac{2h}{g}}$에서 높이 $h = 20$m일 때 낙하 시간은 $t = \\\\sqrt{\\\\frac{40}{9.8}} \\\\approx 2.02$초입니다.',
};

export default dayContent;
