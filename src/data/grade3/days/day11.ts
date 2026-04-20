import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 11,
  part: 2,
  title: '인수분해 (1)',
  subtitle: '공통인수 묶기와 완전제곱식',
  lectures: [],
  concepts: [
    {
      id: 'g3d11-c1',
      title: '인수분해란?',
      content: '하나의 다항식을 두 개 이상의 인수(다항식)의 곱으로 나타내는 것\\n전개의 역과정입니다.\\n\\n전개: $(x+2)(x+3) = x^2 + 5x + 6$\\n인수분해: $x^2 + 5x + 6 = (x+2)(x+3)$',
      type: 'definition',
    },
    {
      id: 'g3d11-c2',
      title: '공통인수 묶기',
      content: '$ma + mb = m(a+b)$\\n\\n예: $2x^2 + 6x = 2x(x+3)$\\n$3a^2b - 6ab^2 = 3ab(a-2b)$\\n\\n항상 공통인수를 먼저 찾는 것이 인수분해의 첫 단계입니다!',
      type: 'formula',
    },
    {
      id: 'g3d11-c3',
      title: '완전제곱식으로 인수분해',
      content: '$a^2 + 2ab + b^2 = (a+b)^2$\\n$a^2 - 2ab + b^2 = (a-b)^2$\\n\\n예: $x^2 + 10x + 25 = (x+5)^2$\\n$4x^2 - 12x + 9 = (2x-3)^2$\\n\\n판별법: 양 끝이 완전제곱수이고, 가운데가 $2 \\times$(양 끝의 제곱근의 곱)',
      type: 'formula',
    },
    {
      id: 'g3d11-c4',
      title: '합차공식의 인수분해',
      content: '$a^2 - b^2 = (a+b)(a-b)$\\n\\n예: $x^2 - 16 = (x+4)(x-4)$\\n$9x^2 - 25 = (3x+5)(3x-5)$\\n$4a^2 - 9b^2 = (2a+3b)(2a-3b)$',
      type: 'formula',
    },
  ],
  problems: [
    {
      id: 'g3d11-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$3x^2 - 12x$를 인수분해하면?',
      options: ['$3(x^2 - 4x)$', '$3x(x - 4)$', '$x(3x - 12)$', '$3x(x + 4)$'],
      answer: '$3x(x - 4)$',
      explanation: '공통인수 $3x$를 묶으면 $3x^2 - 12x = 3x(x - 4)$입니다.',
    },
    {
      id: 'g3d11-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$x^2 + 6x + 9$를 인수분해하면?',
      options: ['$(x+3)^2$', '$(x+9)(x+1)$', '$(x+3)(x-3)$', '$(x-3)^2$'],
      answer: '$(x+3)^2$',
      explanation: '$x^2 + 6x + 9 = x^2 + 2 \\times 3 \\times x + 3^2 = (x+3)^2$입니다.',
    },
    {
      id: 'g3d11-p3',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$x^2 - 25$를 인수분해하면?',
      options: ['$(x-5)^2$', '$(x+5)^2$', '$(x+5)(x-5)$', '$(x-25)(x+1)$'],
      answer: '$(x+5)(x-5)$',
      explanation: '$x^2 - 25 = x^2 - 5^2 = (x+5)(x-5)$입니다.',
    },
    {
      id: 'g3d11-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$4x^2 - 20x + 25$를 인수분해하면?',
      options: ['$(2x-5)^2$', '$(2x+5)^2$', '$(4x-5)(x-5)$', '$(2x-5)(2x+5)$'],
      answer: '$(2x-5)^2$',
      explanation: '$4x^2 - 20x + 25 = (2x)^2 - 2 \\times 2x \\times 5 + 5^2 = (2x-5)^2$입니다.',
    },
    {
      id: 'g3d11-p5',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$16a^2 - 49b^2$를 인수분해하면?',
      options: ['$(4a-7b)^2$', '$(4a+7b)(4a-7b)$', '$(16a+49b)(a-b)$', '$(8a+7b)(8a-7b)$'],
      answer: '$(4a+7b)(4a-7b)$',
      explanation: '$16a^2 - 49b^2 = (4a)^2 - (7b)^2 = (4a+7b)(4a-7b)$입니다.',
    },
    {
      id: 'g3d11-p6',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '$2x^2 - 8$을 완전히 인수분해하면?',
      options: ['$2(x^2 - 4)$', '$2(x-2)(x+2)$', '$(2x-4)(x+2)$', '$2(x-4)(x+2)$'],
      answer: '$2(x-2)(x+2)$',
      explanation: '$2x^2 - 8 = 2(x^2 - 4) = 2(x+2)(x-2)$입니다. 공통인수를 먼저 묶은 후 합차공식을 적용합니다.',
    },
  ],
  realLifeExample: '직사각형 넓이가 $x^2 + 6x + 9$일 때, 이를 $(x+3)^2$으로 인수분해하면 한 변이 $(x+3)$인 정사각형임을 알 수 있습니다. 인수분해는 도형의 구조를 파악하는 데 유용합니다.',
};

export default dayContent;
