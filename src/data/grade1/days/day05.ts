import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 5,
  part: 1,
  title: '정수(Integer)의 덧셈(Addition)과 뺄셈(Subtraction)',
  subtitle: '양수(Positive Number)끼리, 음수(Negative Number)끼리, 그리고 부호(Sign)가 다른 수의 덧셈(Addition)과 뺄셈(Subtraction)을 마스터하자!',
  lectures: [],
  concepts: [
    {
      id: 'g1d5-c1',
      title: '부호(Sign)가 같은 두 정수(Integer)의 덧셈(Addition)',
      content: '**같은 부호끼리 더할 때**: 절댓값(Absolute Value)을 더하고, **공통 부호**를 붙인다\n\n$(+3) + (+5) = +(3+5) = +8$\n$(-3) + (-5) = -(3+5) = -8$\n\n양수(Positive Number) + 양수 = 양수\n음수(Negative Number) + 음수 = 음수',
      type: 'formula',
    },
    {
      id: 'g1d5-c2',
      title: '부호(Sign)가 다른 두 정수(Integer)의 덧셈(Addition)',
      content: '**다른 부호끼리 더할 때**: 절댓값(Absolute Value)의 **차**를 구하고, **절댓값이 큰 쪽의 부호**를 붙인다\n\n$(+7) + (-3) = +(7-3) = +4$\n$(+3) + (-7) = -(7-3) = -4$\n\n줄다리기를 생각하면 쉬워요! 센 쪽이 이기고, 차이만큼 당겨집니다.',
      type: 'formula',
    },
    {
      id: 'g1d5-c3',
      title: '정수(Integer)의 뺄셈(Subtraction)',
      content: '뺄셈(Subtraction)은 **부호를 바꿔서 더하기**로 바꾼다!\n\n$a - b = a + (-b)$\n\n예시:\n$(+5) - (+3) = (+5) + (-3) = +2$\n$(+5) - (-3) = (+5) + (+3) = +8$\n$(-5) - (+3) = (-5) + (-3) = -8$\n$(-5) - (-3) = (-5) + (+3) = -2$\n\n핵심: 빼기 → 부호 바꿔서 더하기!',
      type: 'formula',
    },
    {
      id: 'g1d5-c4',
      title: '덧셈(Addition)의 교환법칙(Commutative Property)과 결합법칙(Associative Property)',
      content: '정수(Integer)의 덧셈에서도 성립합니다!\n\n**교환법칙(Commutative Property)**: $a + b = b + a$\n**결합법칙(Associative Property)**: $(a + b) + c = a + (b + c)$\n\n여러 수를 더할 때 **양수끼리, 음수끼리** 모아서 계산하면 편리해요!\n\n예: $(+3) + (-5) + (+7) + (-2)$\n$= (3 + 7) + (-5 + (-2))$\n$= 10 + (-7) = 3$',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'g1d5-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$(-8) + (+3)$의 값은?',
      options: ['-11', '-5', '+5', '+11'],
      answer: '-5',
      explanation: '부호가 다르므로: 절댓값의 차 $= 8 - 3 = 5$\n\n절댓값이 큰 $-8$의 부호(-)를 붙이면: $-5$',
    },
    {
      id: 'g1d5-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$(+6) - (-4)$의 값은?',
      options: ['+2', '-2', '+10', '-10'],
      answer: '+10',
      explanation: '빼기를 더하기로 바꿉니다:\n$(+6) - (-4) = (+6) + (+4) = +10$',
    },
    {
      id: 'g1d5-p3',
      type: 'short-answer',
      difficulty: 'basic',
      question: '$(-9) - (-5)$의 값을 구하시오.',
      answer: '-4',
      explanation: '$(-9) - (-5) = (-9) + (+5)$\n\n부호가 다르므로: $9 - 5 = 4$, 절댓값이 큰 쪽 부호(-) → $-4$',
    },
    {
      id: 'g1d5-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question: '$(+5) + (-12) + (+7) + (-3)$의 값을 구하시오.',
      answer: '-3',
      explanation: '양수끼리: $5 + 7 = 12$\n음수끼리: $(-12) + (-3) = -15$\n\n$12 + (-15) = -3$',
    },
    {
      id: 'g1d5-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '어떤 정수 $x$에 대해 $x + (-7) = -3$일 때, $x$의 값은?',
      options: ['-10', '-4', '4', '10'],
      answer: '4',
      explanation: '$x + (-7) = -3$\n$x = -3 - (-7) = -3 + 7 = 4$\n\n검산: $4 + (-7) = -3$ ✓',
    },
  ],
  realLifeExample: '통장에 5만원이 있는데(+5) 8만원을 써야 한다면(-8)? (+5) + (-8) = -3, 즉 3만원이 부족해요! 은행에서 마이너스 통장이 바로 이런 원리입니다.',
};

export default dayContent;
