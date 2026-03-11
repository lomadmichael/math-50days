import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 1,
  part: 1,
  title: '제곱근의 뜻',
  subtitle: '$\\\\sqrt{a}$의 의미와 표현',
  lectures: [],
  concepts: [
    {
      id: 'g3d1-c1',
      title: '제곱근의 정의',
      content: '어떤 수 $x$를 제곱하여 $a$가 될 때, 즉 $x^2 = a$일 때, $x$를 $a$의 제곱근이라 합니다.\\n예를 들어, $3^2 = 9$이고 $(-3)^2 = 9$이므로 9의 제곱근은 $3$과 $-3$입니다.',
      type: 'definition',
    },
    {
      id: 'g3d1-c2',
      title: '근호(√)의 사용',
      content: '양수 $a$의 양의 제곱근을 $\\\\sqrt{a}$, 음의 제곱근을 $-\\\\sqrt{a}$로 나타냅니다.\\n$a$의 제곱근을 한꺼번에 $\\\\pm\\\\sqrt{a}$로 표현합니다.\\n0의 제곱근은 0 하나뿐입니다.',
      type: 'formula',
    },
    {
      id: 'g3d1-c3',
      title: '제곱근과 제곱의 관계',
      content: '$\\\\sqrt{4} = 2$ (4의 양의 제곱근)\\n$-\\\\sqrt{4} = -2$ (4의 음의 제곱근)\\n주의: $\\\\sqrt{4} \\\\neq \\\\pm 2$입니다. $\\\\sqrt{4}$는 양의 제곱근만을 뜻합니다.',
      type: 'warning',
    },
    {
      id: 'g3d1-c4',
      title: '완전제곱수의 제곱근',
      content: '$\\\\sqrt{1} = 1$, $\\\\sqrt{4} = 2$, $\\\\sqrt{9} = 3$, $\\\\sqrt{16} = 4$, $\\\\sqrt{25} = 5$\\n$\\\\sqrt{36} = 6$, $\\\\sqrt{49} = 7$, $\\\\sqrt{64} = 8$, $\\\\sqrt{81} = 9$, $\\\\sqrt{100} = 10$\\n이처럼 완전제곱수의 제곱근은 자연수가 됩니다.',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'g3d1-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '49의 제곱근을 모두 구하면?',
      options: ['$7$', '$-7$', '$\\\\pm 7$', '$\\\\sqrt{49}$'],
      answer: '$\\\\pm 7$',
      explanation: '$7^2 = 49$이고 $(-7)^2 = 49$이므로 49의 제곱근은 $7$과 $-7$, 즉 $\\\\pm 7$입니다.',
    },
    {
      id: 'g3d1-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$\\\\sqrt{64}$의 값은?',
      options: ['$\\\\pm 8$', '$8$', '$-8$', '$32$'],
      answer: '$8$',
      explanation: '$\\\\sqrt{64}$는 64의 양의 제곱근이므로 $\\\\sqrt{64} = 8$입니다.',
    },
    {
      id: 'g3d1-p3',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '다음 중 $\\\\sqrt{25}$와 같은 값은?',
      options: ['$\\\\pm 5$', '$-5$', '$5$', '$12.5$'],
      answer: '$5$',
      explanation: '$\\\\sqrt{25}$는 25의 양의 제곱근이므로 $5$입니다.',
    },
    {
      id: 'g3d1-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$(-\\\\sqrt{5})^2$의 값은?',
      options: ['$-5$', '$5$', '$\\\\sqrt{5}$', '$25$'],
      answer: '$5$',
      explanation: '$(-\\\\sqrt{5})^2 = (-\\\\sqrt{5}) \\\\times (-\\\\sqrt{5}) = 5$입니다.',
    },
    {
      id: 'g3d1-p5',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '제곱근 $\\\\sqrt{a}$가 존재하기 위한 $a$의 조건은?',
      options: ['$a > 0$', '$a \\\\geq 0$', '$a \\\\neq 0$', '모든 실수'],
      answer: '$a \\\\geq 0$',
      explanation: '음수의 제곱근은 실수 범위에서 존재하지 않으므로 $a \\\\geq 0$이어야 합니다. $a = 0$일 때 $\\\\sqrt{0} = 0$입니다.',
    },
    {
      id: 'g3d1-p6',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '$x^2 = 12$일 때, $x$의 값을 모두 구하면?',
      options: ['$\\\\sqrt{12}$', '$2\\\\sqrt{3}$', '$\\\\pm 2\\\\sqrt{3}$', '$\\\\pm 6$'],
      answer: '$\\\\pm 2\\\\sqrt{3}$',
      explanation: '$x^2 = 12$에서 $x = \\\\pm\\\\sqrt{12} = \\\\pm\\\\sqrt{4 \\\\times 3} = \\\\pm 2\\\\sqrt{3}$입니다.',
    },
  ],
  realLifeExample: '건물을 지을 때 정사각형 바닥의 넓이가 50$m^2$라면, 한 변의 길이는 $\\\\sqrt{50} = 5\\\\sqrt{2} \\\\approx 7.07$m가 됩니다. 이처럼 제곱근은 넓이로부터 길이를 구할 때 핵심적으로 사용됩니다.',
};

export default dayContent;
