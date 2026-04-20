import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 7,
  part: 1,
  title: '다항식과 단항식의 곱셈/나눗셈',
  subtitle: '분배법칙으로 다항식을 단항식과 곱하고 나누자!',
  lectures: [],
  concepts: [
    {
      id: 'g2d7-c1',
      title: '다항식 × 단항식',
      content: '**분배법칙**을 이용하여 단항식을 각 항에 곱합니다.\n\n$(a + b) \\times c = ac + bc$\n\n예: $(2x^2 + 3x) \\times 4x$\n$= 2x^2 \\times 4x + 3x \\times 4x$\n$= 8x^3 + 12x^2$',
      type: 'formula',
    },
    {
      id: 'g2d7-c2',
      title: '단항식 × 다항식',
      content: '단항식이 앞에 있어도 분배법칙은 동일합니다.\n\n$c \\times (a + b) = ca + cb$\n\n예: $-3x \\times (x^2 - 2x + 5)$\n$= -3x \\times x^2 + (-3x) \\times (-2x) + (-3x) \\times 5$\n$= -3x^3 + 6x^2 - 15x$',
      type: 'example',
    },
    {
      id: 'g2d7-c3',
      title: '다항식 ÷ 단항식',
      content: '다항식의 **각 항을 단항식으로 나눕니다**.\n\n$(a + b) \\div c = \\frac{a}{c} + \\frac{b}{c}$\n\n예: $(6x^3 - 4x^2 + 2x) \\div 2x$\n$= \\frac{6x^3}{2x} - \\frac{4x^2}{2x} + \\frac{2x}{2x}$\n$= 3x^2 - 2x + 1$',
      type: 'formula',
    },
    {
      id: 'g2d7-c4',
      title: '부호 처리 팁',
      content: '음수를 곱하거나 나눌 때 **부호에 특히 주의**하세요.\n\n$-2x(3x - 4) = -6x^2 + 8x$\n\n마이너스와 마이너스가 만나면 플러스!\n$(-2x) \\times (-4) = +8x$ ✓\n$(-2x) \\times (-4) = -8x$ ✗',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'g2d7-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$3x(2x + 5)$를 전개하면?',
      options: ['$6x^2 + 5$', '$6x^2 + 15x$', '$6x + 15x$', '$5x^2 + 15x$'],
      answer: '$6x^2 + 15x$',
      explanation: '$3x \\times 2x + 3x \\times 5 = 6x^2 + 15x$',
    },
    {
      id: 'g2d7-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: '$(10x^2 - 5x) \\div 5x$를 계산하시오.',
      answer: '2x-1',
      explanation: '$\\frac{10x^2}{5x} - \\frac{5x}{5x} = 2x - 1$',
    },
    {
      id: 'g2d7-p3',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$-2a(3a^2 - a + 4)$를 전개하면?',
      options: ['$-6a^3 + 2a^2 - 8a$', '$-6a^3 - 2a^2 + 8a$', '$-6a^3 + 2a^2 + 8a$', '$6a^3 - 2a^2 - 8a$'],
      answer: '$-6a^3 + 2a^2 - 8a$',
      explanation: '$(-2a)(3a^2) + (-2a)(-a) + (-2a)(4)$\n$= -6a^3 + 2a^2 - 8a$',
    },
    {
      id: 'g2d7-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question: '$(12x^3y - 8x^2y^2 + 4xy) \\div (-4xy)$를 계산하시오.',
      answer: '-3x^2+2xy-1',
      explanation: '$\\frac{12x^3y}{-4xy} - \\frac{8x^2y^2}{-4xy} + \\frac{4xy}{-4xy}$\n$= -3x^2 + 2xy - 1$',
    },
    {
      id: 'g2d7-p5',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$2x(x + 3) - x(2x - 1)$을 계산하면?',
      options: ['$7x$', '$4x^2 + 7x$', '$7x^2$', '$4x^2 + 5x$'],
      answer: '$7x$',
      explanation: '$2x^2 + 6x - 2x^2 + x = 7x$\n\n$2x^2$과 $-2x^2$이 상쇄됩니다.',
    },
    {
      id: 'g2d7-p6',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '$(6x^2 + 9x) \\div 3x - (4x^2 - 2x) \\div 2x$를 계산하면?',
      options: ['$4$', '$2$', '$x + 2$', '$4x$'],
      answer: '$4$',
      explanation: '$(6x^2 + 9x) \\div 3x = 2x + 3$\n$(4x^2 - 2x) \\div 2x = 2x - 1$\n\n$(2x + 3) - (2x - 1) = 2x + 3 - 2x + 1 = 4$',
    },
  ],
  realLifeExample: '직사각형의 넓이가 $6x^2 + 3x$이고 가로 길이가 $3x$라면, 세로 길이는 $(6x^2 + 3x) \\div 3x = 2x + 1$입니다. 다항식 나눗셈으로 도형의 변의 길이를 구할 수 있습니다!',
};

export default dayContent;
