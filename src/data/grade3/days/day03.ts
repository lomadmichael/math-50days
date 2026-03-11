import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 3,
  part: 1,
  title: '무리수와 실수',
  subtitle: '유리수가 아닌 수, 실수의 체계',
  lectures: [],
  concepts: [
    {
      id: 'g3d3-c1',
      title: '유리수와 무리수',
      content: '유리수: $\\\\frac{b}{a}$ (단, $a$, $b$는 정수, $a \\\\neq 0$) 꼴로 나타낼 수 있는 수\\n→ 유한소수 또는 순환소수\\n\\n무리수: 유리수가 아닌 수 → 순환하지 않는 무한소수\\n예: $\\\\sqrt{2} = 1.41421356...$, $\\\\pi = 3.14159265...$',
      type: 'definition',
    },
    {
      id: 'g3d3-c2',
      title: '실수의 분류',
      content: '실수 = 유리수 + 무리수\\n\\n유리수: 정수(양의 정수, 0, 음의 정수) + 정수가 아닌 유리수\\n무리수: $\\\\sqrt{2}$, $-\\\\sqrt{3}$, $\\\\pi$, $1+\\\\sqrt{5}$ 등\\n\\n모든 실수는 수직선 위의 한 점에 대응합니다.',
      type: 'definition',
    },
    {
      id: 'g3d3-c3',
      title: '무리수 판별법',
      content: '$\\\\sqrt{a}$가 무리수인 조건: $a$가 완전제곱수가 아닌 양수일 때\\n\\n$\\\\sqrt{4} = 2$ → 유리수 (4는 완전제곱수)\\n$\\\\sqrt{5}$ → 무리수 (5는 완전제곱수가 아님)\\n$\\\\sqrt{0.25} = 0.5$ → 유리수',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'g3d3-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '다음 중 무리수인 것은?',
      options: ['$\\\\sqrt{9}$', '$\\\\sqrt{5}$', '$0.\\\\overline{3}$', '$\\\\frac{7}{2}$'],
      answer: '$\\\\sqrt{5}$',
      explanation: '$\\\\sqrt{9} = 3$ (유리수), $0.\\\\overline{3} = \\\\frac{1}{3}$ (유리수), $\\\\frac{7}{2}$ (유리수). $\\\\sqrt{5}$는 5가 완전제곱수가 아니므로 무리수입니다.',
    },
    {
      id: 'g3d3-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '다음 중 유리수인 것은?',
      options: ['$\\\\sqrt{2}$', '$\\\\pi$', '$\\\\sqrt{16}$', '$\\\\sqrt{3} + 1$'],
      answer: '$\\\\sqrt{16}$',
      explanation: '$\\\\sqrt{16} = 4$이므로 유리수입니다. 나머지는 모두 무리수입니다.',
    },
    {
      id: 'g3d3-p3',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$\\\\sqrt{n}$이 유리수가 되는 자연수 $n$은 1부터 20까지 몇 개인가?',
      options: ['$2$개', '$3$개', '$4$개', '$5$개'],
      answer: '$4$개',
      explanation: '$\\\\sqrt{1}=1$, $\\\\sqrt{4}=2$, $\\\\sqrt{9}=3$, $\\\\sqrt{16}=4$로 완전제곱수 1, 4, 9, 16의 4개입니다.',
    },
    {
      id: 'g3d3-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '다음 중 옳은 것은?',
      options: [
        '무리수는 수직선 위에 나타낼 수 없다',
        '순환소수는 무리수이다',
        '유리수와 무리수를 합하면 실수이다',
        '$\\\\sqrt{2}$는 분수로 나타낼 수 있다',
      ],
      answer: '유리수와 무리수를 합하면 실수이다',
      explanation: '실수 = 유리수 ∪ 무리수입니다. 무리수도 수직선 위에 나타낼 수 있고, 순환소수는 유리수이며, $\\\\sqrt{2}$는 분수로 나타낼 수 없습니다.',
    },
    {
      id: 'g3d3-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '$a$가 유리수이고 $b$가 무리수일 때, 다음 중 항상 무리수인 것은?',
      options: ['$a + b$', '$a \\\\times b$', '$a - a$', '$b \\\\times b$'],
      answer: '$a + b$',
      explanation: '$a \\\\neq 0$인 유리수와 무리수의 합은 항상 무리수입니다. $a \\\\times b$는 $a=0$이면 유리수, $b \\\\times b$도 유리수가 될 수 있습니다(예: $\\\\sqrt{2} \\\\times \\\\sqrt{2} = 2$). 단, $a \\\\neq 0$일 때 $a+b$는 항상 무리수입니다.',
    },
  ],
  realLifeExample: '원의 둘레를 구할 때 $2\\\\pi r$을 사용하는데, $\\\\pi$는 무리수입니다. 반지름이 5cm인 원의 둘레는 $10\\\\pi \\\\approx 31.4159...$cm로, 정확한 값은 소수점이 끝없이 계속되는 무리수입니다.',
};

export default dayContent;
