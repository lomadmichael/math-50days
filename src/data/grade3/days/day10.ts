import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 10,
  part: 2,
  title: '곱셈공식의 변형',
  subtitle: '$a^2+b^2$, $a^3+b^3$ 등의 활용',
  lectures: [],
  concepts: [
    {
      id: 'g3d10-c1',
      title: '$a^2 + b^2$ 구하기',
      content: '$(a+b)^2 = a^2 + 2ab + b^2$에서\\n$a^2 + b^2 = (a+b)^2 - 2ab$\\n\\n$(a-b)^2 = a^2 - 2ab + b^2$에서\\n$a^2 + b^2 = (a-b)^2 + 2ab$\\n\\n$a+b$와 $ab$를 알면 $a^2+b^2$를 구할 수 있습니다.',
      type: 'formula',
    },
    {
      id: 'g3d10-c2',
      title: '$(a+b)^2$와 $(a-b)^2$의 관계',
      content: '$(a+b)^2 - (a-b)^2 = 4ab$\\n$(a+b)^2 + (a-b)^2 = 2(a^2+b^2)$\\n\\n예: $a+b = 7$, $a-b = 3$이면\\n$ab = \\\\frac{(a+b)^2 - (a-b)^2}{4} = \\\\frac{49 - 9}{4} = 10$',
      type: 'formula',
    },
    {
      id: 'g3d10-c3',
      title: '$a^3 + b^3$, $a^3 - b^3$',
      content: '$a^3 + b^3 = (a+b)(a^2 - ab + b^2)$\\n$a^3 - b^3 = (a-b)(a^2 + ab + b^2)$\\n\\n$a+b$와 $ab$를 알 때:\\n$a^3 + b^3 = (a+b)^3 - 3ab(a+b)$\\n$a^3 - b^3 = (a-b)^3 + 3ab(a-b)$',
      type: 'formula',
    },
  ],
  problems: [
    {
      id: 'g3d10-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$a + b = 5$, $ab = 6$일 때, $a^2 + b^2$의 값은?',
      options: ['$11$', '$13$', '$19$', '$25$'],
      answer: '$13$',
      explanation: '$a^2 + b^2 = (a+b)^2 - 2ab = 25 - 12 = 13$입니다.',
    },
    {
      id: 'g3d10-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$a - b = 3$, $ab = 4$일 때, $a^2 + b^2$의 값은?',
      options: ['$13$', '$15$', '$17$', '$21$'],
      answer: '$17$',
      explanation: '$a^2 + b^2 = (a-b)^2 + 2ab = 9 + 8 = 17$입니다.',
    },
    {
      id: 'g3d10-p3',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$x + \\\\frac{1}{x} = 3$일 때, $x^2 + \\\\frac{1}{x^2}$의 값은?',
      options: ['$5$', '$7$', '$9$', '$11$'],
      answer: '$7$',
      explanation: '$\\\\left(x + \\\\frac{1}{x}\\\\right)^2 = x^2 + 2 + \\\\frac{1}{x^2} = 9$이므로 $x^2 + \\\\frac{1}{x^2} = 7$입니다.',
    },
    {
      id: 'g3d10-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$a + b = 6$, $a - b = 2$일 때, $ab$의 값은?',
      options: ['$6$', '$8$', '$10$', '$12$'],
      answer: '$8$',
      explanation: '$(a+b)^2 - (a-b)^2 = 4ab$에서 $36 - 4 = 4ab$이므로 $ab = 8$입니다.',
    },
    {
      id: 'g3d10-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '$a + b = 4$, $ab = 3$일 때, $a^3 + b^3$의 값은?',
      options: ['$28$', '$36$', '$48$', '$52$'],
      answer: '$28$',
      explanation: '$a^3 + b^3 = (a+b)^3 - 3ab(a+b) = 64 - 3 \\\\times 3 \\\\times 4 = 64 - 36 = 28$입니다.',
    },
    {
      id: 'g3d10-p6',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '$x = \\\\sqrt{3}+1$, $y = \\\\sqrt{3}-1$일 때, $x^2 + xy + y^2$의 값은?',
      options: ['$8$', '$10$', '$12$', '$14$'],
      answer: '$10$',
      explanation: '$x + y = 2\\\\sqrt{3}$, $xy = (\\\\sqrt{3})^2 - 1^2 = 2$이므로 $x^2 + y^2 = (x+y)^2 - 2xy = 12 - 4 = 8$. 따라서 $x^2 + xy + y^2 = 8 + 2 = 10$입니다.',
    },
  ],
  realLifeExample: '두 물체의 속력의 합이 $v_1 + v_2 = 10$m/s이고 곱이 $v_1 v_2 = 24$일 때, 운동에너지의 합에 비례하는 $v_1^2 + v_2^2 = 10^2 - 2 \\\\times 24 = 52$를 곱셈공식의 변형으로 바로 구할 수 있습니다.',
};

export default dayContent;
