import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 14,
  part: 3,
  title: '일차식의 계산 (덧셈/뺄셈)',
  subtitle: '동류항을 모아 일차식의 덧셈과 뺄셈을 계산하는 방법을 배워보자.',
  lectures: [],
  concepts: [
    {
      id: 'g1d14-c1',
      title: '동류항이란?',
      content: '**동류항**: 문자와 차수가 같은 항\n\n예: $3x$와 $-5x$ → 동류항 ✓ (둘 다 $x$)\n$2x$와 $2x^2$ → 동류항 ✗ (차수가 다름)\n$4a$와 $4b$ → 동류항 ✗ (문자가 다름)\n$7$과 $-3$ → 동류항 ✓ (둘 다 상수항)\n\n동류항끼리만 더하고 뺄 수 있습니다!',
      type: 'definition',
    },
    {
      id: 'g1d14-c2',
      title: '동류항의 덧셈과 뺄셈',
      content: '동류항끼리는 **계수끼리** 더하거나 빼면 됩니다.\n\n$$3x + 5x = (3 + 5)x = 8x$$\n$$7a - 4a = (7 - 4)a = 3a$$\n$$-2y + 6y = (-2 + 6)y = 4y$$\n\n문자 부분은 그대로 두고, 계수만 계산하면 OK!',
      type: 'formula',
    },
    {
      id: 'g1d14-c3',
      title: '일차식의 덧셈과 뺄셈',
      content: '**일차식의 덧셈**: 괄호를 풀고 동류항끼리 모아 계산\n$$(3x + 2) + (5x - 4) = 3x + 2 + 5x - 4 = 8x - 2$$\n\n**일차식의 뺄셈**: 빼는 식의 각 항의 부호를 바꾸고 동류항끼리 계산\n$$(3x + 2) - (5x - 4) = 3x + 2 - 5x + 4 = -2x + 6$$\n\n뺄셈에서 **부호 바꾸기**를 실수하지 않도록 주의!',
      type: 'formula',
    },
  ],
  problems: [
    {
      id: 'g1d14-p1',
      type: 'short-answer',
      difficulty: 'basic',
      question: '$4x + 7x - 3x$를 계산하시오. (예: 8x)',
      answer: '8x',
      explanation: '모두 $x$의 동류항이므로 계수끼리 계산합니다.\n$4x + 7x - 3x = (4 + 7 - 3)x = 8x$',
    },
    {
      id: 'g1d14-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$5a - 3 + 2a + 8$을 간단히 하면?',
      options: ['$7a + 5$', '$7a - 5$', '$3a + 5$', '$12a$'],
      answer: '$7a + 5$',
      explanation: '동류항끼리 모으기:\n$x$항: $5a + 2a = 7a$\n상수항: $-3 + 8 = 5$\n\n따라서 $7a + 5$',
    },
    {
      id: 'g1d14-p3',
      type: 'short-answer',
      difficulty: 'basic',
      question: '$(2x + 5) + (3x - 9)$를 계산하시오. (예: 5x-4)',
      answer: '5x-4',
      explanation: '$(2x + 5) + (3x - 9)$\n$= 2x + 5 + 3x - 9$\n$= (2x + 3x) + (5 - 9)$\n$= 5x - 4$',
    },
    {
      id: 'g1d14-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$(6x - 1) - (4x + 3)$의 결과는?',
      options: ['$2x + 2$', '$2x - 4$', '$10x - 4$', '$10x + 2$'],
      answer: '$2x - 4$',
      explanation: '뺄셈 → 부호 바꾸기!\n$(6x - 1) - (4x + 3)$\n$= 6x - 1 - 4x - 3$\n$= (6x - 4x) + (-1 - 3)$\n$= 2x - 4$',
    },
    {
      id: 'g1d14-p5',
      type: 'short-answer',
      difficulty: 'challenge',
      question: '$3(x + 2) - 2(x - 5)$를 계산하시오. (예: x+16)',
      answer: 'x+16',
      explanation: '분배법칙으로 괄호 풀기:\n$3(x + 2) - 2(x - 5)$\n$= 3x + 6 - 2x + 10$\n$= (3x - 2x) + (6 + 10)$\n$= x + 16$',
    },
  ],
  realLifeExample: '일차식의 계산은 생활 속 비용 비교에 유용합니다! A 요금제가 월 기본료 $3000 + 100x$(원), B 요금제가 $5000 + 60x$(원)이라면, 요금 차이는 $(5000 + 60x) - (3000 + 100x) = 2000 - 40x$(원)으로 간단히 비교할 수 있어요.',
};

export default dayContent;
