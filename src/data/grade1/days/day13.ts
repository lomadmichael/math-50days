import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 13,
  part: 3,
  title: '식의 값(Value of Expression) 구하기',
  subtitle: '문자에 수를 대입(Substitution)하여 식의 값(Value of Expression)을 구하는 방법을 익혀보자.',
  lectures: [],
  concepts: [
    {
      id: 'g1d13-c1',
      title: '대입(Substitution)과 식의 값(Value of Expression)',
      content: '**대입(Substitution)**: 문자 대신 수를 넣는 것\n**식의 값(Value of Expression)**: 문자에 수를 대입하여 계산한 결과\n\n예: $2x + 3$에서 $x = 4$일 때\n$$2 \\times 4 + 3 = 8 + 3 = 11$$\n\n주의: 대입(Substitution)할 때 **곱셈(Multiplication) 기호**를 다시 써야 합니다!\n$2x$에 $x = 4$ → $2 \\times 4$ (○) / $24$ (✗)',
      type: 'definition',
    },
    {
      id: 'g1d13-c2',
      title: '음수(Negative Number) 대입(Substitution) 시 주의점',
      content: '음수(Negative Number)를 대입할 때는 반드시 **괄호**를 사용합니다!\n\n$x^2$에 $x = -3$ 대입(Substitution):\n$$(-3)^2 = 9$$ ✓\n$$-3^2 = -9$$ ✗ (이건 $-(3^2)$의 의미)\n\n$2x$에 $x = -5$ 대입:\n$$2 \\times (-5) = -10$$ ✓',
      type: 'formula',
    },
    {
      id: 'g1d13-c3',
      title: '여러 문자가 있는 식의 값(Value of Expression)',
      content: '문자가 2개 이상인 식도 각 문자에 값을 대입(Substitution)하면 됩니다.\n\n예: $3a - 2b + 1$에서 $a = 2$, $b = -1$일 때\n$$3 \\times 2 - 2 \\times (-1) + 1$$\n$$= 6 + 2 + 1 = 9$$\n\n대입 후에는 **연산 순서**(괄호 → 거듭제곱(Power) → 곱셈(Multiplication)/나눗셈(Division) → 덧셈(Addition)/뺄셈(Subtraction))를 지켜 계산합니다.',
      type: 'formula',
    },
  ],
  problems: [
    {
      id: 'g1d13-p1',
      type: 'short-answer',
      difficulty: 'basic',
      question: '$3x - 7$에서 $x = 5$일 때, 식의 값을 구하시오.',
      answer: '8',
      explanation: '$3 \\times 5 - 7 = 15 - 7 = 8$',
    },
    {
      id: 'g1d13-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: '$x^2 - 2x$에서 $x = -3$일 때, 식의 값을 구하시오.',
      answer: '15',
      explanation: '$(-3)^2 - 2 \\times (-3)$\n$= 9 - (-6)$\n$= 9 + 6 = 15$',
    },
    {
      id: 'g1d13-p3',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$\\frac{a + b}{2}$에서 $a = 7$, $b = 3$일 때 식의 값은?',
      options: ['$2$', '$5$', '$10$', '$\\frac{7}{3}$'],
      answer: '$5$',
      explanation: '$\\frac{7 + 3}{2} = \\frac{10}{2} = 5$\n\n이 식은 $a$와 $b$의 **평균**을 구하는 식입니다!',
    },
    {
      id: 'g1d13-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question: '$2a^2 - 3ab$에서 $a = -1$, $b = 4$일 때, 식의 값을 구하시오.',
      answer: '14',
      explanation: '$2 \\times (-1)^2 - 3 \\times (-1) \\times 4$\n$= 2 \\times 1 - (-12)$\n$= 2 + 12 = 14$',
    },
    {
      id: 'g1d13-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '$a = -2$, $b = \\frac{1}{3}$일 때, $a^2b - ab^2$의 값은?',
      options: ['$-\\frac{10}{9}$', '$\\frac{10}{9}$', '$-\\frac{14}{9}$', '$\\frac{14}{9}$'],
      answer: '$\\frac{14}{9}$',
      explanation: '$a^2b = (-2)^2 \\times \\frac{1}{3} = 4 \\times \\frac{1}{3} = \\frac{4}{3}$\n\n$ab^2 = (-2) \\times (\\frac{1}{3})^2 = (-2) \\times \\frac{1}{9} = -\\frac{2}{9}$\n\n$a^2b - ab^2 = \\frac{4}{3} - (-\\frac{2}{9}) = \\frac{12}{9} + \\frac{2}{9} = \\frac{14}{9}$',
    },
  ],
  realLifeExample: '식의 값(Value of Expression) 구하기는 실생활 곳곳에서 쓰입니다! 예를 들어, 원의 넓이 공식 $S = \\pi r^2$에서 반지름 $r = 5$ cm를 대입(Substitution)하면 넓이를 바로 구할 수 있어요. 공식에 값만 넣으면 되니까 매번 새로 유도할 필요가 없죠!',
};

export default dayContent;
