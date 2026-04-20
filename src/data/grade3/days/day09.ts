import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 9,
  part: 2,
  title: '곱셈공식 (2)',
  subtitle: '$(a+b)(a-b)$와 $(x+a)(x+b)$',
  lectures: [],
  concepts: [
    {
      id: 'g3d9-c1',
      title: '합차공식',
      content: '$(a+b)(a-b) = a^2 - b^2$\\n\\n유도: $(a+b)(a-b) = a^2 - ab + ba - b^2 = a^2 - b^2$\\n\\n예: $(x+3)(x-3) = x^2 - 9$\\n$(2x+5)(2x-5) = 4x^2 - 25$',
      type: 'formula',
    },
    {
      id: 'g3d9-c2',
      title: '$(x+a)(x+b)$ 전개',
      content: '$(x+a)(x+b) = x^2 + (a+b)x + ab$\\n\\n$x^2$의 계수: 1\\n$x$의 계수: $a+b$ (두 상수의 합)\\n상수항: $ab$ (두 상수의 곱)\\n\\n예: $(x+2)(x+5) = x^2 + 7x + 10$\\n$(x-3)(x+4) = x^2 + x - 12$',
      type: 'formula',
    },
    {
      id: 'g3d9-c3',
      title: '합차공식의 수 계산 활용',
      content: '$97 \\times 103 = (100-3)(100+3) = 100^2 - 3^2 = 10000 - 9 = 9991$\\n$52 \\times 48 = (50+2)(50-2) = 50^2 - 2^2 = 2500 - 4 = 2496$\\n\\n두 수의 평균에서 같은 양만큼 차이나면 합차공식 사용 가능!',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'g3d9-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$(x+7)(x-7)$을 전개하면?',
      options: ['$x^2 + 49$', '$x^2 - 49$', '$x^2 - 14x + 49$', '$x^2 + 14x - 49$'],
      answer: '$x^2 - 49$',
      explanation: '합차공식에 의해 $(x+7)(x-7) = x^2 - 7^2 = x^2 - 49$입니다.',
    },
    {
      id: 'g3d9-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$(x+3)(x+5)$를 전개하면?',
      options: ['$x^2 + 8x + 15$', '$x^2 + 15x + 8$', '$x^2 + 8x + 8$', '$x^2 + 15$'],
      answer: '$x^2 + 8x + 15$',
      explanation: '$(x+3)(x+5) = x^2 + (3+5)x + 3 \\times 5 = x^2 + 8x + 15$입니다.',
    },
    {
      id: 'g3d9-p3',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$(x-4)(x+6)$을 전개하면?',
      options: ['$x^2 + 2x - 24$', '$x^2 - 2x - 24$', '$x^2 + 10x - 24$', '$x^2 - 10x + 24$'],
      answer: '$x^2 + 2x - 24$',
      explanation: '$(x-4)(x+6) = x^2 + (-4+6)x + (-4)(6) = x^2 + 2x - 24$입니다.',
    },
    {
      id: 'g3d9-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$(3x+2)(3x-2)$를 전개하면?',
      options: ['$9x^2 - 4$', '$9x^2 + 4$', '$3x^2 - 4$', '$9x^2 - 12x + 4$'],
      answer: '$9x^2 - 4$',
      explanation: '$(3x+2)(3x-2) = (3x)^2 - 2^2 = 9x^2 - 4$입니다.',
    },
    {
      id: 'g3d9-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '$(\\sqrt{5}+\\sqrt{3})(\\sqrt{5}-\\sqrt{3})$의 값은?',
      options: ['$2$', '$\\sqrt{2}$', '$8$', '$\\sqrt{15}$'],
      answer: '$2$',
      explanation: '합차공식에 의해 $(\\sqrt{5})^2 - (\\sqrt{3})^2 = 5 - 3 = 2$입니다.',
    },
    {
      id: 'g3d9-p6',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '$(x+1)(x+2)(x+3)(x+4)$에서 $x=0$일 때의 값은?',
      options: ['$10$', '$24$', '$12$', '$20$'],
      answer: '$24$',
      explanation: '$x=0$을 대입하면 $1 \\times 2 \\times 3 \\times 4 = 24$입니다.',
    },
  ],
  realLifeExample: '사진 프레임의 바깥 변이 $(x+3)$cm이고 안쪽 변이 $(x-3)$cm인 정사각형일 때, 프레임의 넓이는 $(x+3)^2 - (x-3)^2 = (x+3+x-3)(x+3-x+3) = 2x \\times 6 = 12x$로 곱셈공식을 활용하면 쉽게 구할 수 있습니다.',
};

export default dayContent;
