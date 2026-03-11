import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 6,
  part: 1,
  title: '다항식의 덧셈과 뺄셈',
  subtitle: '동류항끼리 모아서 깔끔하게 정리하자!',
  lectures: [],
  concepts: [
    {
      id: 'g2d6-c1',
      title: '다항식과 동류항',
      content: '**다항식**: 단항식의 합으로 이루어진 식\n예: $3x^2 + 2x - 5$\n\n**동류항**: 문자와 차수가 같은 항\n- $3x^2$과 $-5x^2$ → 동류항 ✓\n- $2xy$와 $-7xy$ → 동류항 ✓\n- $3x^2$과 $3x$ → 동류항이 아님 ✗ (차수가 다름)',
      type: 'definition',
    },
    {
      id: 'g2d6-c2',
      title: '다항식의 덧셈',
      content: '다항식의 덧셈은 **동류항끼리 모아 계수를 더합니다**.\n\n$(3x^2 + 2x - 1) + (x^2 - 5x + 4)$\n$= (3x^2 + x^2) + (2x - 5x) + (-1 + 4)$\n$= 4x^2 - 3x + 3$',
      type: 'formula',
    },
    {
      id: 'g2d6-c3',
      title: '다항식의 뺄셈',
      content: '뺄셈은 **빼는 다항식의 각 항의 부호를 바꾸어** 더합니다.\n\n$(3x^2 + 2x - 1) - (x^2 - 5x + 4)$\n$= 3x^2 + 2x - 1 - x^2 + 5x - 4$\n$= (3 - 1)x^2 + (2 + 5)x + (-1 - 4)$\n$= 2x^2 + 7x - 5$',
      type: 'formula',
    },
    {
      id: 'g2d6-c4',
      title: '부호 바꾸기 실수 주의!',
      content: '뺄셈에서 괄호를 풀 때 **모든 항**의 부호를 바꿔야 합니다.\n\n$-(x^2 - 3x + 2)$\n$= -x^2 + 3x - 2$ ✓\n$= -x^2 - 3x + 2$ ✗ (부호 바꾸기 실수!)\n\n특히 마이너스 뒤의 괄호에 주의하세요!',
      type: 'warning',
    },
  ],
  problems: [
    {
      id: 'g2d6-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$(2x^2 + 3x) + (4x^2 - x)$를 계산하면?',
      options: ['$6x^2 + 2x$', '$6x^2 + 4x$', '$6x^4 + 2x^2$', '$8x^4$'],
      answer: '$6x^2 + 2x$',
      explanation: '동류항끼리 더합니다.\n$(2x^2 + 4x^2) + (3x - x) = 6x^2 + 2x$',
    },
    {
      id: 'g2d6-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: '$(5a - 3b) - (2a - 7b)$를 계산하시오.',
      answer: '3a+4b',
      explanation: '$5a - 3b - 2a + 7b = (5 - 2)a + (-3 + 7)b = 3a + 4b$\n\n빼는 괄호의 부호를 모두 바꿉니다.',
    },
    {
      id: 'g2d6-p3',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '다음 중 $3x^2y$의 동류항은?',
      options: ['$5xy^2$', '$-2x^2y$', '$3xy$', '$x^2y^2$'],
      answer: '$-2x^2y$',
      explanation: '동류항은 문자와 각 문자의 차수가 같아야 합니다.\n$3x^2y$와 $-2x^2y$는 모두 $x^2y$ 형태이므로 동류항입니다.',
    },
    {
      id: 'g2d6-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$(x^2 - 3x + 5) - (2x^2 + x - 3)$을 계산하면?',
      options: ['$-x^2 - 4x + 8$', '$-x^2 - 2x + 8$', '$-x^2 - 4x + 2$', '$3x^2 - 4x + 8$'],
      answer: '$-x^2 - 4x + 8$',
      explanation: '$x^2 - 3x + 5 - 2x^2 - x + 3$\n$= (1 - 2)x^2 + (-3 - 1)x + (5 + 3)$\n$= -x^2 - 4x + 8$',
    },
    {
      id: 'g2d6-p5',
      type: 'short-answer',
      difficulty: 'applied',
      question: '$A = 2x^2 + 3x - 1$, $B = x^2 - 2x + 4$일 때, $2A - B$를 계산하시오.',
      answer: '3x^2+8x-6',
      explanation: '$2A = 2(2x^2 + 3x - 1) = 4x^2 + 6x - 2$\n\n$2A - B = (4x^2 + 6x - 2) - (x^2 - 2x + 4)$\n$= 4x^2 + 6x - 2 - x^2 + 2x - 4$\n$= 3x^2 + 8x - 6$',
    },
    {
      id: 'g2d6-p6',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '어떤 다항식 $A$에서 $(x^2 - 2x + 3)$을 빼야 할 것을 잘못하여 더했더니 $3x^2 + x + 1$이 되었다. 바르게 계산한 결과는?',
      options: ['$x^2 + 5x - 5$', '$x^2 - 3x + 7$', '$x^2 + 5x + 7$', '$x^2 + 5x - 1$'],
      answer: '$x^2 + 5x - 5$',
      explanation: '잘못된 식: $A + (x^2 - 2x + 3) = 3x^2 + x + 1$\n$A = 3x^2 + x + 1 - x^2 + 2x - 3 = 2x^2 + 3x - 2$\n\n바른 계산: $A - (x^2 - 2x + 3)$\n$= 2x^2 + 3x - 2 - x^2 + 2x - 3$\n$= x^2 + 5x - 5$',
    },
  ],
  realLifeExample: '가게에서 사과를 $x$개, 배를 $y$개 샀는데, 사과 한 개에 $3$원, 배 한 개에 $5$원입니다. 사과값은 $3x$원, 배값은 $5y$원이고, 총 비용 $3x + 5y$원은 다항식입니다!',
};

export default dayContent;
