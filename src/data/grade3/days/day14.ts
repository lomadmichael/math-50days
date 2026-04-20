import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 14,
  part: 2,
  title: '미니테스트 + 복습',
  subtitle: 'PART 2 총정리: 다항식의 곱셈과 인수분해',
  lectures: [],
  concepts: [
    {
      id: 'g3d14-c1',
      title: 'PART 2 핵심 공식 정리',
      content: '곱셈공식:\\n① $(a+b)^2 = a^2 + 2ab + b^2$\\n② $(a-b)^2 = a^2 - 2ab + b^2$\\n③ $(a+b)(a-b) = a^2 - b^2$\\n④ $(x+a)(x+b) = x^2 + (a+b)x + ab$\\n\\n인수분해는 곱셈공식의 역과정!',
      type: 'formula',
    },
    {
      id: 'g3d14-c2',
      title: '인수분해 순서',
      content: '① 공통인수가 있는지 먼저 확인\\n② 완전제곱식인지 확인: $a^2 \\pm 2ab + b^2$\\n③ 합차공식인지 확인: $a^2 - b^2$\\n④ $x^2 + (a+b)x + ab$ 꼴인지 확인\\n⑤ $ax^2 + bx + c$ 꼴이면 십자가법\\n⑥ 치환 또는 묶기 시도',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'g3d14-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$(3x - 2)^2$을 전개하면?',
      options: ['$9x^2 - 4$', '$9x^2 - 6x + 4$', '$9x^2 - 12x + 4$', '$3x^2 - 12x + 4$'],
      answer: '$9x^2 - 12x + 4$',
      explanation: '$(3x-2)^2 = 9x^2 - 2 \\times 3x \\times 2 + 4 = 9x^2 - 12x + 4$입니다.',
    },
    {
      id: 'g3d14-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$x^2 - 8x + 16$을 인수분해하면?',
      options: ['$(x-4)^2$', '$(x+4)^2$', '$(x-2)(x-8)$', '$(x-16)(x-1)$'],
      answer: '$(x-4)^2$',
      explanation: '$x^2 - 8x + 16 = x^2 - 2 \\times 4x + 4^2 = (x-4)^2$입니다.',
    },
    {
      id: 'g3d14-p3',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$x^2 - 3x - 18$을 인수분해하면?',
      options: ['$(x-6)(x+3)$', '$(x+6)(x-3)$', '$(x-9)(x+2)$', '$(x+9)(x-2)$'],
      answer: '$(x-6)(x+3)$',
      explanation: '합이 $-3$, 곱이 $-18$인 두 수는 $-6$과 $3$이므로 $(x-6)(x+3)$입니다.',
    },
    {
      id: 'g3d14-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$a+b = 8$, $ab = 15$일 때, $(a-b)^2$의 값은?',
      options: ['$2$', '$4$', '$34$', '$49$'],
      answer: '$4$',
      explanation: '$(a-b)^2 = (a+b)^2 - 4ab = 64 - 60 = 4$입니다.',
    },
    {
      id: 'g3d14-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '$3x^2 + 10x - 8$을 인수분해하면?',
      options: ['$(3x-2)(x+4)$', '$(3x+2)(x-4)$', '$(x+2)(3x-4)$', '$(x-2)(3x+4)$'],
      answer: '$(3x-2)(x+4)$',
      explanation: '$3 \\times 4 + (-2) \\times 1 = 10$이고 $(-2) \\times 4 = -8$이므로 $(3x-2)(x+4)$입니다.',
    },
    {
      id: 'g3d14-p6',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '$99^2 + 2 \\times 99 + 1$의 값은?',
      options: ['$9801$', '$9900$', '$10000$', '$10001$'],
      answer: '$10000$',
      explanation: '$99^2 + 2 \\times 99 + 1 = (99+1)^2 = 100^2 = 10000$입니다.',
    },
  ],
  realLifeExample: '곱셈공식과 인수분해는 프로그래밍에서 코드 최적화에 활용됩니다. 예를 들어 $a^2 - b^2$을 계산할 때 $(a+b)(a-b)$로 바꾸면 곱셈 1번 + 덧셈/뺄셈 2번으로 끝나, 제곱을 직접 계산하는 것보다 효율적입니다.',
};

export default dayContent;
