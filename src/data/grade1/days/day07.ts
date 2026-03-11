import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 7,
  part: 1,
  title: '미니테스트 + 복습',
  subtitle: 'PART 1 수와 연산 총정리! 지금까지 배운 내용을 확인해 보자.',
  lectures: [],
  concepts: [
    {
      id: 'g1d7-c1',
      title: 'PART 1 핵심 요약: 약수와 배수',
      content: '• **약수**: 어떤 수를 나누어 떨어지게 하는 수\n• **소수**: 약수가 1과 자기 자신뿐인 수 (1은 소수 ✗)\n• **소인수분해**: 자연수를 소수의 곱으로 나타내기\n• 약수의 개수: $a^p \\times b^q$ → $(p+1)(q+1)$\n• **최대공약수**: 공통 소인수의 **낮은** 거듭제곱의 곱\n• **최소공배수**: 모든 소인수의 **높은** 거듭제곱의 곱',
      type: 'formula',
    },
    {
      id: 'g1d7-c2',
      title: 'PART 1 핵심 요약: 정수와 연산',
      content: '• **정수**: ..., -2, -1, 0, 1, 2, ... (0은 양수도 음수도 아님)\n• **절댓값**: 수직선에서 0까지의 거리 → 항상 ≥ 0\n• 덧셈: 같은 부호 → 절댓값 더하기 / 다른 부호 → 절댓값 빼기\n• 뺄셈: 부호 바꿔서 더하기! $a - b = a + (-b)$\n• 곱셈·나눗셈 부호: 같으면 +, 다르면 -\n• 음수 거듭제곱: 짝수 개 → +, 홀수 개 → -',
      type: 'formula',
    },
  ],
  problems: [
    {
      id: 'g1d7-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '다음 중 소수인 것을 모두 고르면?  2, 9, 11, 15, 23',
      options: ['2, 11', '2, 11, 23', '2, 9, 23', '11, 15, 23'],
      answer: '2, 11, 23',
      explanation: '2: 소수 ✓ (유일한 짝수 소수)\n9 = 3² ✗\n11: 소수 ✓\n15 = 3×5 ✗\n23: 소수 ✓',
    },
    {
      id: 'g1d7-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: '$180$을 소인수분해하시오. $2^a \\times 3^b \\times 5^c$ 일 때, $a + b + c$의 값은?',
      answer: '5',
      explanation: '$180 = 2^2 \\times 3^2 \\times 5$\n\n$a = 2, b = 2, c = 1$\n$a + b + c = 2 + 2 + 1 = 5$',
    },
    {
      id: 'g1d7-p3',
      type: 'short-answer',
      difficulty: 'basic',
      question: '48과 72의 최대공약수를 구하시오.',
      answer: '24',
      explanation: '$48 = 2^4 \\times 3$\n$72 = 2^3 \\times 3^2$\n\n$\\text{GCD} = 2^3 \\times 3 = 24$',
    },
    {
      id: 'g1d7-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$(-3) + (+8) - (-5) + (-2)$의 값은?',
      options: ['6', '8', '-8', '-2'],
      answer: '8',
      explanation: '$= (-3) + (+8) + (+5) + (-2)$\n\n양수: $8 + 5 = 13$\n음수: $(-3) + (-2) = -5$\n\n$13 + (-5) = 8$',
    },
    {
      id: 'g1d7-p5',
      type: 'short-answer',
      difficulty: 'applied',
      question: '$(-2)^4 \\div (-4) \\times (-3)$의 값을 구하시오.',
      answer: '12',
      explanation: '$(-2)^4 = 16$ (음수 4개 = 짝수 → 양수)\n\n$16 \\div (-4) = -4$\n$(-4) \\times (-3) = 12$',
    },
    {
      id: 'g1d7-p6',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '$2^3 \\times 3^2$의 약수 중에서 홀수인 것은 몇 개인가?',
      options: ['2개', '3개', '4개', '6개'],
      answer: '3개',
      explanation: '$72 = 2^3 \\times 3^2$\n\n홀수 약수는 2를 포함하지 않는 약수입니다.\n$3^0, 3^1, 3^2$ → 1, 3, 9\n\n따라서 **3개**',
    },
    {
      id: 'g1d7-p7',
      type: 'short-answer',
      difficulty: 'challenge',
      question: '두 정수 $a$, $b$에 대해 $|a| = 3$, $|b| = 5$이고 $a + b < 0$일 때, $a \\times b$의 최댓값을 구하시오.',
      answer: '15',
      explanation: '$|a| = 3$ → $a = 3$ 또는 $a = -3$\n$|b| = 5$ → $b = 5$ 또는 $b = -5$\n\n$a + b < 0$이 되려면:\n• $a = 3, b = -5$ → $a + b = -2 < 0$ ✓ → $a \\times b = -15$\n• $a = -3, b = -5$ → $a + b = -8 < 0$ ✓ → $a \\times b = 15$\n• $a = -3, b = 5$ → $a + b = 2 > 0$ ✗\n\n최댓값: $15$',
    },
  ],
  realLifeExample: 'PART 1 총정리! 소인수분해는 비밀번호 보안에, 정수의 연산은 은행 입출금/온도 변화/해발고도 계산에 사용됩니다. 수학은 일상 곳곳에 숨어있어요!',
};

export default dayContent;
