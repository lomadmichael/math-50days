import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 8,
  part: 2,
  title: '곱셈공식 (1)',
  subtitle: '$(a+b)^2$, $(a-b)^2$ 전개',
  lectures: [],
  concepts: [
    {
      id: 'g3d8-c1',
      title: '$(a+b)^2$ 전개',
      content: '$(a+b)^2 = a^2 + 2ab + b^2$\\n\\n유도: $(a+b)^2 = (a+b)(a+b)$\\n$= a^2 + ab + ba + b^2 = a^2 + 2ab + b^2$\\n\\n예: $(x+3)^2 = x^2 + 6x + 9$',
      type: 'formula',
    },
    {
      id: 'g3d8-c2',
      title: '$(a-b)^2$ 전개',
      content: '$(a-b)^2 = a^2 - 2ab + b^2$\\n\\n유도: $(a-b)^2 = (a-b)(a-b)$\\n$= a^2 - ab - ba + b^2 = a^2 - 2ab + b^2$\\n\\n예: $(x-5)^2 = x^2 - 10x + 25$',
      type: 'formula',
    },
    {
      id: 'g3d8-c3',
      title: '곱셈공식 활용 팁',
      content: '$(a+b)^2$에서 중간항의 부호는 항상 $+$\\n$(a-b)^2$에서 중간항의 부호는 항상 $-$\\n마지막 항은 두 공식 모두 $+$\\n\\n$(2x+3y)^2 = 4x^2 + 12xy + 9y^2$\\n$(3a-2b)^2 = 9a^2 - 12ab + 4b^2$',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'g3d8-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$(x+4)^2$을 전개하면?',
      options: ['$x^2 + 16$', '$x^2 + 4x + 16$', '$x^2 + 8x + 16$', '$x^2 + 8x + 8$'],
      answer: '$x^2 + 8x + 16$',
      explanation: '$(x+4)^2 = x^2 + 2 \\\\times x \\\\times 4 + 4^2 = x^2 + 8x + 16$입니다.',
    },
    {
      id: 'g3d8-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$(x-6)^2$을 전개하면?',
      options: ['$x^2 - 36$', '$x^2 - 6x + 36$', '$x^2 - 12x + 36$', '$x^2 + 12x + 36$'],
      answer: '$x^2 - 12x + 36$',
      explanation: '$(x-6)^2 = x^2 - 2 \\\\times x \\\\times 6 + 6^2 = x^2 - 12x + 36$입니다.',
    },
    {
      id: 'g3d8-p3',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$(2x+5)^2$을 전개하면?',
      options: ['$4x^2 + 10x + 25$', '$4x^2 + 20x + 25$', '$2x^2 + 20x + 25$', '$4x^2 + 25$'],
      answer: '$4x^2 + 20x + 25$',
      explanation: '$(2x+5)^2 = (2x)^2 + 2 \\\\times 2x \\\\times 5 + 5^2 = 4x^2 + 20x + 25$입니다.',
    },
    {
      id: 'g3d8-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$101^2$을 곱셈공식으로 계산하면?',
      options: ['$10000$', '$10201$', '$10101$', '$10200$'],
      answer: '$10201$',
      explanation: '$101^2 = (100+1)^2 = 100^2 + 2 \\\\times 100 \\\\times 1 + 1^2 = 10000 + 200 + 1 = 10201$입니다.',
    },
    {
      id: 'g3d8-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '$(\\\\sqrt{3}+\\\\sqrt{2})^2$의 값은?',
      options: ['$5$', '$5 + 2\\\\sqrt{6}$', '$5 + \\\\sqrt{6}$', '$7$'],
      answer: '$5 + 2\\\\sqrt{6}$',
      explanation: '$(\\\\sqrt{3}+\\\\sqrt{2})^2 = 3 + 2\\\\sqrt{3}\\\\cdot\\\\sqrt{2} + 2 = 5 + 2\\\\sqrt{6}$입니다.',
    },
    {
      id: 'g3d8-p6',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '$(x+y)^2 = 25$이고 $xy = 6$일 때, $x^2 + y^2$의 값은?',
      options: ['$13$', '$19$', '$31$', '$37$'],
      answer: '$13$',
      explanation: '$(x+y)^2 = x^2 + 2xy + y^2 = 25$이므로 $x^2 + y^2 = 25 - 2xy = 25 - 12 = 13$입니다.',
    },
  ],
  realLifeExample: '한 변의 길이가 $a$인 정사각형 땅에 사방 $b$만큼 확장하면 새 넓이는 $(a+b)^2 = a^2 + 2ab + b^2$입니다. 원래 넓이 $a^2$에 띠 모양 부분 $2ab + b^2$이 추가된 것으로, 토지 확장 비용 계산에 활용됩니다.',
};

export default dayContent;
