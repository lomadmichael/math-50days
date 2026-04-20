import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 16,
  part: 3,
  title: '인수분해를 이용한 풀이',
  subtitle: '$AB = 0$이면 $A = 0$ 또는 $B = 0$',
  lectures: [],
  concepts: [
    {
      id: 'g3d16-c1',
      title: '인수분해를 이용한 풀이 원리',
      content: '$AB = 0$이면 $A = 0$ 또는 $B = 0$\\n\\n이차방정식의 좌변을 인수분해하여 두 일차식의 곱으로 만든 후,\\n각각을 0으로 놓아 해를 구합니다.\\n\\n$x^2 - 5x + 6 = 0$\\n$(x-2)(x-3) = 0$\\n$x = 2$ 또는 $x = 3$',
      type: 'formula',
    },
    {
      id: 'g3d16-c2',
      title: '풀이 절차',
      content: '① 우변을 0으로 만든다 (모든 항을 좌변으로 이항)\\n② 좌변을 인수분해한다\\n③ 각 인수를 0으로 놓고 해를 구한다\\n\\n주의: $(x-1)(x-2) = 6$에서 바로 $x-1=6$ 또는 $x-2=6$으로 풀면 안 됩니다!\\n반드시 우변이 0이어야 합니다.',
      type: 'warning',
    },
    {
      id: 'g3d16-c3',
      title: '다양한 유형',
      content: '$x^2 = 3x$ → $x^2 - 3x = 0$ → $x(x-3) = 0$ → $x = 0$ 또는 $x = 3$\\n$2x^2 + 5x - 3 = 0$ → $(2x-1)(x+3) = 0$ → $x = \\frac{1}{2}$ 또는 $x = -3$\\n\\n양변을 $x$로 나누면 $x=0$인 해를 잃어버릴 수 있으니 주의!',
      type: 'example',
    },
  ],
  problems: [
    {
      id: 'g3d16-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$x^2 - 7x + 12 = 0$의 해는?',
      options: ['$x = 3, 4$', '$x = 2, 6$', '$x = -3, -4$', '$x = 1, 12$'],
      answer: '$x = 3, 4$',
      explanation: '$x^2 - 7x + 12 = (x-3)(x-4) = 0$이므로 $x = 3$ 또는 $x = 4$입니다.',
    },
    {
      id: 'g3d16-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$x^2 + 2x = 0$의 해는?',
      options: ['$x = 0$', '$x = -2$', '$x = 0, -2$', '$x = 2$'],
      answer: '$x = 0, -2$',
      explanation: '$x(x+2) = 0$이므로 $x = 0$ 또는 $x = -2$입니다.',
    },
    {
      id: 'g3d16-p3',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$x^2 - 9 = 0$의 해는?',
      options: ['$x = 3$', '$x = -3$', '$x = \\pm 3$', '$x = 9$'],
      answer: '$x = \\pm 3$',
      explanation: '$(x+3)(x-3) = 0$이므로 $x = 3$ 또는 $x = -3$입니다.',
    },
    {
      id: 'g3d16-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$2x^2 - x - 3 = 0$의 해는?',
      options: ['$x = 1, -\\frac{3}{2}$', '$x = -1, \\frac{3}{2}$', '$x = \\frac{1}{2}, -3$', '$x = 3, -\\frac{1}{2}$'],
      answer: '$x = -1, \\frac{3}{2}$',
      explanation: '$2x^2 - x - 3 = (2x-3)(x+1) = 0$이므로 $x = \\frac{3}{2}$ 또는 $x = -1$입니다.',
    },
    {
      id: 'g3d16-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '$x^2 - 6x + 9 = 0$의 해는?',
      options: ['$x = 3$ (중근)', '$x = -3$ (중근)', '$x = 3, -3$', '$x = 9$'],
      answer: '$x = 3$ (중근)',
      explanation: '$(x-3)^2 = 0$이므로 $x = 3$ (중근)입니다.',
    },
    {
      id: 'g3d16-p6',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '$(x+1)(x-2) = 4$의 해는?',
      options: ['$x = -2, 3$', '$x = 1, 2$', '$x = -1, 4$', '$x = 0, 1$'],
      answer: '$x = -2, 3$',
      explanation: '$(x+1)(x-2) = 4$에서 $x^2 - x - 2 = 4$, $x^2 - x - 6 = 0$, $(x-3)(x+2) = 0$이므로 $x = 3$ 또는 $x = -2$입니다.',
    },
  ],
  realLifeExample: '직사각형의 가로가 $(x+3)$m, 세로가 $(x-1)$m이고 넓이가 $21m^2$일 때, $(x+3)(x-1) = 21$을 풀면 $x^2 + 2x - 24 = 0$, $(x+6)(x-4) = 0$에서 $x = 4$ (양수). 가로 7m, 세로 3m입니다.',
};

export default dayContent;
