import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 39,
  part: 8,
  title: '미니테스트 + 복습',
  subtitle: 'PART 8 총정리 — 규칙과 식',
  isTest: true,
  lectures: [],
  concepts: [
    {
      id: 'f8d39-c1',
      title: '규칙과 식 핵심 정리',
      content:
        '• 수의 규칙: 등차(+일정), 등비($\\\\times$일정), 계차(차이가 변함)\\n• 문자 식: 곱셈 기호 생략, 나눗셈은 분수로\\n• 등식 풀기: $x$를 한쪽에, 숫자를 다른 쪽에 모으기\\n• 검산: 답을 대입하여 확인',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'fd39-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '5, 10, 15, 20, □ — □에 들어갈 수는?',
      options: ['22', '23', '25', '30'],
      answer: '25',
      explanation: '5씩 증가하는 규칙이므로 $20 + 5 = 25$',
    },
    {
      id: 'fd39-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: '$x - 9 = 14$일 때, $x$의 값은?',
      answer: '23',
      explanation: '$x = 14 + 9 = 23$',
    },
    {
      id: 'fd39-p3',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$b \\\\times b$를 간단히 나타내면?',
      options: ['$2b$', '$b + b$', '$b^2$', '$bb$'],
      answer: '$b^2$',
      explanation: '같은 문자를 두 번 곱하면 지수로 나타냅니다. $b^2$',
    },
    {
      id: 'fd39-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question: '$4x + 2 = 30$일 때, $x$의 값은?',
      answer: '7',
      explanation: '$4x = 28$, $x = 7$',
    },
    {
      id: 'fd39-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question:
        '1, 4, 9, 16, 25, □ — □에 들어갈 수는?',
      options: ['30', '34', '36', '49'],
      answer: '36',
      explanation:
        '$1^2, 2^2, 3^2, 4^2, 5^2, 6^2$ → 제곱수의 나열이므로 $6^2 = 36$',
    },
    {
      id: 'fd39-p6',
      type: 'short-answer',
      difficulty: 'challenge',
      question:
        '연속하는 두 짝수의 합이 26입니다. 작은 수를 구하세요.',
      answer: '12',
      explanation:
        '작은 수를 $x$라 하면 $x + (x + 2) = 26$ → $2x + 2 = 26$ → $2x = 24$ → $x = 12$',
    },
  ],
  realLifeExample:
    '코딩에서 변수를 사용하는 것은 수학의 문자 사용과 같아요. "score = score + 10"은 "$x$에 10을 더한다"는 뜻이에요. 수학의 식 세우기가 프로그래밍의 기초입니다!',
};

export default dayContent;
