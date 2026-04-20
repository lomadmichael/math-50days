import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 13,
  part: 2,
  title: '인수분해 (3)',
  subtitle: '$ax^2+bx+c$ 꼴과 복잡한 식의 인수분해',
  lectures: [],
  concepts: [
    {
      id: 'g3d13-c1',
      title: '$ax^2 + bx + c$ 인수분해 (십자가법)',
      content: '$ax^2 + bx + c$에서 $a \\neq 1$일 때:\\n$a$를 두 수의 곱으로, $c$도 두 수의 곱으로 나눈 뒤\\n교차 곱의 합이 $b$가 되는 조합을 찾습니다.\\n\\n예: $2x^2 + 5x + 3$\\n$2 \\times 1 = 2$ (앞), $1 \\times 3 = 3$ (뒤)\\n$2 \\times 3 + 1 \\times 1 = 7$ ✗, $2 \\times 1 + 1 \\times 3 = 5$ ✓\\n$\\therefore (2x+3)(x+1)$',
      type: 'formula',
    },
    {
      id: 'g3d13-c2',
      title: '치환을 이용한 인수분해',
      content: '복잡한 식에서 공통 부분을 하나의 문자로 치환\\n\\n예: $(x+1)^2 + 3(x+1) + 2$\\n$t = x+1$로 치환하면 $t^2 + 3t + 2 = (t+1)(t+2)$\\n$= (x+2)(x+3)$',
      type: 'tip',
    },
    {
      id: 'g3d13-c3',
      title: '공통 부분 묶기',
      content: '$x^2 + xy - 2x - 2y$\\n$= x(x+y) - 2(x+y) = (x+y)(x-2)$\\n\\n항을 적절히 묶어서 공통인수를 만들어냅니다.\\n2개씩 묶거나, 3+1로 묶는 경우도 있습니다.',
      type: 'example',
    },
  ],
  problems: [
    {
      id: 'g3d13-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$2x^2 + 7x + 3$을 인수분해하면?',
      options: ['$(2x+1)(x+3)$', '$(2x+3)(x+1)$', '$(x+1)(x+3)$', '$(2x-1)(x-3)$'],
      answer: '$(2x+1)(x+3)$',
      explanation: '$2 \\times 3 + 1 \\times 1 = 7$이므로 $(2x+1)(x+3)$입니다.',
    },
    {
      id: 'g3d13-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$3x^2 - 5x - 2$를 인수분해하면?',
      options: ['$(3x+1)(x-2)$', '$(3x-1)(x+2)$', '$(3x-2)(x+1)$', '$(3x+2)(x-1)$'],
      answer: '$(3x+1)(x-2)$',
      explanation: '$3 \\times (-2) + 1 \\times 1 = -5$이므로 $(3x+1)(x-2)$입니다.',
    },
    {
      id: 'g3d13-p3',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$6x^2 + 11x + 3$을 인수분해하면?',
      options: ['$(2x+3)(3x+1)$', '$(6x+1)(x+3)$', '$(3x+3)(2x+1)$', '$(2x+1)(3x+3)$'],
      answer: '$(2x+3)(3x+1)$',
      explanation: '$2 \\times 1 + 3 \\times 3 = 11$이므로 $(2x+3)(3x+1)$입니다.',
    },
    {
      id: 'g3d13-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$(x+2)^2 - 5(x+2) + 6$을 인수분해하면?',
      options: ['$(x-1)(x)$', '$(x+5)(x-1)$', '$(x)(x-1)$', '$(x-1)(x+5)$'],
      answer: '$(x-1)(x)$',
      explanation: '$t = x+2$로 치환하면 $t^2 - 5t + 6 = (t-2)(t-3)$. 다시 대입하면 $(x+2-2)(x+2-3) = x(x-1)$입니다.',
    },
    {
      id: 'g3d13-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '$x^2 - y^2 + x + y$를 인수분해하면?',
      options: ['$(x+y)(x-y+1)$', '$(x-y)(x+y+1)$', '$(x+y+1)(x-y)$', '$(x+y)(x-y+1)$'],
      answer: '$(x+y)(x-y+1)$',
      explanation: '$x^2 - y^2 + x + y = (x+y)(x-y) + (x+y) = (x+y)(x-y+1)$입니다.',
    },
    {
      id: 'g3d13-p6',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '$4x^2 - 8x + 3$을 인수분해하면?',
      options: ['$(2x-1)(2x-3)$', '$(4x-1)(x-3)$', '$(4x-3)(x-1)$', '$(2x+1)(2x-3)$'],
      answer: '$(2x-1)(2x-3)$',
      explanation: '$2 \\times (-3) + (-1) \\times 2 = -8$, $(-1)(-3) = 3$이므로 $(2x-1)(2x-3)$입니다.',
    },
  ],
  realLifeExample: '이익을 나타내는 식이 $-2x^2 + 10x - 12$일 때, $-2(x^2 - 5x + 6) = -2(x-2)(x-3)$으로 인수분해하면 이익이 0이 되는 가격($x=2, x=3$)을 바로 알 수 있습니다. 이것이 경제학에서 손익분기점 분석입니다.',
};

export default dayContent;
