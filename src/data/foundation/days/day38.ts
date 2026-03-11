import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 38,
  part: 8,
  title: '간단한 등식 풀기',
  subtitle: '일차방정식 — 미지수 구하기',
  lectures: [],
  concepts: [
    {
      id: 'f8d38-c1',
      title: '등식이란?',
      content:
        '등호($=$)를 사용하여 좌변과 우변이 같다는 것을 나타낸 식\\n예) $x + 3 = 7$, $2x = 10$\\n\\n등식의 성질: 양변에 같은 수를 더하거나 빼거나 곱하거나 나눠도 등식은 성립합니다.',
      type: 'definition',
    },
    {
      id: 'f8d38-c2',
      title: '등식 풀기 (일차방정식)',
      content:
        '$x$를 한쪽에 모으고 숫자를 다른 쪽에 모읍니다.\\n\\n$x + 5 = 12$ → 양변에서 5를 빼면 $x = 7$\\n$3x = 15$ → 양변을 3으로 나누면 $x = 5$\\n$2x + 3 = 11$ → $2x = 8$ → $x = 4$',
      type: 'formula',
    },
    {
      id: 'f8d38-c3',
      title: '검산하기',
      content:
        '구한 답을 원래 식에 대입하여 양변이 같은지 확인합니다.\\n예) $x = 4$를 $2x + 3 = 11$에 대입 → $2 \\\\times 4 + 3 = 8 + 3 = 11$ ✓',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'fd38-p1',
      type: 'short-answer',
      difficulty: 'basic',
      question: '$x + 8 = 15$일 때, $x$의 값은?',
      answer: '7',
      explanation: '$x = 15 - 8 = 7$',
    },
    {
      id: 'fd38-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: '$4x = 24$일 때, $x$의 값은?',
      answer: '6',
      explanation: '$x = 24 \\\\div 4 = 6$',
    },
    {
      id: 'fd38-p3',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$3x - 5 = 16$일 때, $x$의 값은?',
      options: ['5', '6', '7', '8'],
      answer: '7',
      explanation:
        '$3x = 16 + 5 = 21$, $x = 21 \\\\div 3 = 7$',
    },
    {
      id: 'fd38-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question:
        '어떤 수의 5배에서 3을 빼면 22입니다. 어떤 수를 구하세요.',
      answer: '5',
      explanation:
        '$5x - 3 = 22$ → $5x = 25$ → $x = 5$',
    },
    {
      id: 'fd38-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '$2(x + 3) = 14$일 때, $x$의 값은?',
      options: ['3', '4', '5', '7'],
      answer: '4',
      explanation:
        '방법1: $2x + 6 = 14$ → $2x = 8$ → $x = 4$\\n방법2: $x + 3 = 7$ → $x = 4$',
    },
    {
      id: 'fd38-p6',
      type: 'short-answer',
      difficulty: 'challenge',
      question: '$\\\\frac{x}{3} + 2 = 6$일 때, $x$의 값은?',
      answer: '12',
      explanation:
        '$\\\\frac{x}{3} = 4$ → $x = 4 \\\\times 3 = 12$',
    },
  ],
  realLifeExample:
    '"과자 몇 봉지를 사서 5명이 나눠 먹으면 한 사람당 3개씩이다"를 식으로 쓰면 $\\\\frac{x}{5} = 3$, 즉 $x = 15$봉지예요. 이처럼 방정식은 모르는 것을 찾을 때 사용합니다!',
};

export default dayContent;
