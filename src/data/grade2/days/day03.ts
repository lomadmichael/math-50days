import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 3,
  part: 1,
  title: '지수법칙 (1)',
  subtitle: '같은 밑의 곱과 거듭제곱의 거듭제곱을 마스터하자!',
  lectures: [],
  concepts: [
    {
      id: 'g2d3-c1',
      title: '거듭제곱의 뜻',
      content: '같은 수나 문자를 여러 번 곱한 것을 **거듭제곱**이라 합니다.\n\n$a^n = \\underbrace{a \\times a \\times \\cdots \\times a}_{n\\text{개}}$\n\n- $a$: **밑**, $n$: **지수**\n- $2^3 = 2 \\times 2 \\times 2 = 8$\n- $(-3)^2 = (-3) \\times (-3) = 9$',
      type: 'definition',
    },
    {
      id: 'g2d3-c2',
      title: '지수법칙 ① 같은 밑의 곱',
      content: '**같은 밑**의 거듭제곱의 곱은 **지수를 더합니다**.\n\n$$a^m \\times a^n = a^{m+n}$$\n\n예:\n- $2^3 \\times 2^4 = 2^{3+4} = 2^7 = 128$\n- $x^5 \\times x^2 = x^{5+2} = x^7$\n- $3^2 \\times 3 = 3^2 \\times 3^1 = 3^3 = 27$',
      type: 'formula',
    },
    {
      id: 'g2d3-c3',
      title: '지수법칙 ② 거듭제곱의 거듭제곱',
      content: '거듭제곱을 다시 거듭제곱하면 **지수를 곱합니다**.\n\n$$(a^m)^n = a^{m \\times n}$$\n\n예:\n- $(2^3)^4 = 2^{3 \\times 4} = 2^{12}$\n- $(x^2)^5 = x^{2 \\times 5} = x^{10}$\n- $(5^4)^3 = 5^{12}$',
      type: 'formula',
    },
    {
      id: 'g2d3-c4',
      title: '주의! 밑이 다르면 안 돼요',
      content: '지수법칙은 **밑이 같을 때만** 적용할 수 있습니다.\n\n$2^3 \\times 3^4$는 더 이상 간단히 할 수 없습니다!\n\n또한, 곱셈과 덧셈을 혼동하지 마세요.\n- $a^2 \\times a^3 = a^5$ ✓ (곱 → 지수 덧셈)\n- $a^2 + a^3 \\neq a^5$ ✗ (덧셈은 지수법칙 아님!)',
      type: 'warning',
    },
  ],
  problems: [
    {
      id: 'g2d3-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$3^4 \\times 3^2$을 계산하면?',
      options: ['$3^6$', '$3^8$', '$9^6$', '$3^2$'],
      answer: '$3^6$',
      explanation: '같은 밑 3의 곱이므로 지수를 더합니다.\n$3^4 \\times 3^2 = 3^{4+2} = 3^6 = 729$',
    },
    {
      id: 'g2d3-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: '$(x^3)^4$을 간단히 하면 $x^a$이다. $a$의 값을 구하시오.',
      answer: '12',
      explanation: '$(x^3)^4 = x^{3 \\times 4} = x^{12}$\n\n거듭제곱의 거듭제곱이므로 지수를 곱합니다.\n따라서 $a = 12$',
    },
    {
      id: 'g2d3-p3',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$a^3 \\times a^5 \\times a^2$를 간단히 하면?',
      options: ['$a^{30}$', '$a^{10}$', '$a^{15}$', '$a^8$'],
      answer: '$a^{10}$',
      explanation: '같은 밑의 곱이므로 지수를 모두 더합니다.\n$a^3 \\times a^5 \\times a^2 = a^{3+5+2} = a^{10}$',
    },
    {
      id: 'g2d3-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$2^5 \\times 4^3$을 $2$의 거듭제곱으로 나타내면?',
      options: ['$2^8$', '$2^{11}$', '$2^{15}$', '$2^{10}$'],
      answer: '$2^{11}$',
      explanation: '$4 = 2^2$이므로\n$2^5 \\times 4^3 = 2^5 \\times (2^2)^3 = 2^5 \\times 2^6 = 2^{11}$',
    },
    {
      id: 'g2d3-p5',
      type: 'short-answer',
      difficulty: 'applied',
      question: '$(3^2)^x = 3^{10}$일 때, $x$의 값을 구하시오.',
      answer: '5',
      explanation: '$(3^2)^x = 3^{2x}$\n$3^{2x} = 3^{10}$\n\n밑이 같으므로 지수도 같아야 합니다.\n$2x = 10$\n$x = 5$',
    },
    {
      id: 'g2d3-p6',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '$8^{10} \\times 16^5$를 $2$의 거듭제곱으로 나타내면?',
      options: ['$2^{30}$', '$2^{40}$', '$2^{50}$', '$2^{60}$'],
      answer: '$2^{50}$',
      explanation: '$8 = 2^3$, $16 = 2^4$이므로\n$8^{10} \\times 16^5 = (2^3)^{10} \\times (2^4)^5 = 2^{30} \\times 2^{20} = 2^{50}$',
    },
  ],
  realLifeExample: '컴퓨터 메모리는 2의 거듭제곱으로 표현됩니다. 1GB = $2^{30}$ 바이트, 1TB = $2^{40}$ 바이트. 즉 1TB = $2^{10}$ GB = 1024 GB입니다. 지수법칙 덕분에 이런 변환이 쉬워집니다!',
};

export default dayContent;
