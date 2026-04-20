import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 16,
  part: 3,
  title: '등식(Equation)의 성질(Properties of Equality)',
  subtitle: '등식(Equation)이란 무엇이고, 양변에 같은 연산을 하면 어떻게 될까?',
  lectures: [],
  concepts: [
    {
      id: 'g1d16-c1',
      title: '등식(Equation)이란?',
      content: '**등식(Equation)**: 등호(=)를 사용하여 두 식이 같음을 나타낸 식입니다.\n\n• $3 + 5 = 8$ → 등식 ✓\n• $2x + 1 = 7$ → 등식 ✓ (미지수(Unknown) 포함)\n• $x + 3 > 5$ → 등식 ✗ (부등식)\n\n등호 왼쪽을 **좌변**, 오른쪽을 **우변**, 둘을 합쳐 **양변**이라 합니다.',
      type: 'definition',
    },
    {
      id: 'g1d16-c2',
      title: '등식의 성질(Properties of Equality)',
      content: '$a = b$일 때 다음이 성립합니다.\n\n① **양변에 같은 수를 더해도** 등식은 성립: $a + c = b + c$\n② **양변에서 같은 수를 빼도** 등식은 성립: $a - c = b - c$\n③ **양변에 같은 수를 곱해도** 등식은 성립: $a \\times c = b \\times c$\n④ **양변을 0이 아닌 같은 수로 나누어도** 등식은 성립: $\\dfrac{a}{c} = \\dfrac{b}{c}$ (단, $c \\neq 0$)',
      type: 'formula',
    },
    {
      id: 'g1d16-c3',
      title: '등식의 성질(Properties of Equality) 활용',
      content: '등식의 성질을 이용하면 미지수(Unknown)의 값을 구할 수 있습니다.\n\n**예시**: $x + 5 = 12$\n→ 양변에서 5를 빼면: $x + 5 - 5 = 12 - 5$\n→ $x = 7$\n\n**예시**: $3x = 15$\n→ 양변을 3으로 나누면: $\\dfrac{3x}{3} = \\dfrac{15}{3}$\n→ $x = 5$',
      type: 'example',
    },
  ],
  problems: [
    {
      id: 'g1d16-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '다음 중 등식인 것은?',
      options: ['$3x + 2$', '$x - 1 > 5$', '$2x + 3 = 9$', '$4x - 7$'],
      answer: '$2x + 3 = 9$',
      explanation: '등식은 등호(=)를 사용하여 두 식이 같음을 나타낸 식입니다.\n\n$2x + 3 = 9$만 등호가 있으므로 등식입니다.',
    },
    {
      id: 'g1d16-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: '$x + 8 = 15$일 때, 등식의 성질을 이용하여 $x$의 값을 구하시오.',
      answer: '7',
      explanation: '양변에서 8을 빼면:\n$x + 8 - 8 = 15 - 8$\n$x = 7$',
    },
    {
      id: 'g1d16-p3',
      type: 'short-answer',
      difficulty: 'basic',
      question: '$4x = 28$일 때, $x$의 값을 구하시오.',
      answer: '7',
      explanation: '양변을 4로 나누면:\n$\\dfrac{4x}{4} = \\dfrac{28}{4}$\n$x = 7$',
    },
    {
      id: 'g1d16-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$a = b$일 때, 다음 중 항상 성립하지 **않는** 것은?',
      options: ['$a + 3 = b + 3$', '$2a = 2b$', '$a \\div 0 = b \\div 0$', '$a - 5 = b - 5$'],
      answer: '$a \\div 0 = b \\div 0$',
      explanation: '등식의 성질에서 나눗셈은 **0이 아닌 수**로 나누어야 합니다.\n\n0으로 나누는 것은 정의되지 않으므로 $a \\div 0 = b \\div 0$은 성립하지 않습니다.',
    },
    {
      id: 'g1d16-p5',
      type: 'short-answer',
      difficulty: 'applied',
      question: '$\\dfrac{x}{3} = 6$일 때, $x$의 값을 구하시오.',
      answer: '18',
      explanation: '양변에 3을 곱하면:\n$\\dfrac{x}{3} \\times 3 = 6 \\times 3$\n$x = 18$',
    },
  ],
  realLifeExample: '등식의 성질은 저울의 원리와 같습니다! 양팔 저울이 평형일 때, 양쪽에 같은 무게를 올리거나 빼도 평형이 유지되는 것처럼, 등식도 양변에 같은 연산을 하면 등호가 유지됩니다.',
};

export default dayContent;
