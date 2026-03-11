import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 4,
  part: 1,
  title: '혼합 계산과 계산 순서',
  subtitle: '사칙연산이 섞여 있을 때 어떤 순서로 계산할까? 이것이 중학교 식의 계산의 핵심!',
  lectures: [],
  concepts: [
    {
      id: 'f1d4-c1',
      title: '계산 순서의 약속',
      content: '사칙연산이 섞여 있을 때의 **계산 순서**:\n\n**1순위:** 괄호 안을 먼저 계산\n**2순위:** 곱셈과 나눗셈을 왼쪽부터 계산\n**3순위:** 덧셈과 뺄셈을 왼쪽부터 계산\n\n예: $3 + 4 \\times 2 = 3 + 8 = 11$ (곱셈 먼저!)\n$3 + 4 \\times 2 \\neq 14$ (왼쪽부터 하면 틀려요!)',
      type: 'formula',
    },
    {
      id: 'f1d4-c2',
      title: '괄호의 역할',
      content: '**괄호**는 계산 순서를 바꿔줍니다.\n\n- $3 + 4 \\times 2 = 3 + 8 = 11$\n- $(3 + 4) \\times 2 = 7 \\times 2 = 14$\n\n괄호가 있으면 **무조건 괄호 안을 먼저** 계산합니다.\n\n중학교에서 $a(b + c) = ab + ac$ 같은 식을 배울 때 이 원리가 중요합니다!',
      type: 'definition',
    },
    {
      id: 'f1d4-c3',
      title: '혼합 계산 실수 피하기',
      content: '흔한 실수 모음:\n\n**실수 1:** $8 - 3 + 2 = 8 - 5 = 3$ ✗\n→ 올바른 풀이: $8 - 3 + 2 = 5 + 2 = 7$ ✓ (왼쪽부터!)\n\n**실수 2:** $12 \\div 3 \\times 2 = 12 \\div 6 = 2$ ✗\n→ 올바른 풀이: $12 \\div 3 \\times 2 = 4 \\times 2 = 8$ ✓ (왼쪽부터!)\n\n덧셈·뺄셈끼리, 곱셈·나눗셈끼리는 **왼쪽부터** 순서대로!',
      type: 'warning',
    },
  ],
  problems: [
    {
      id: 'fd4-p1',
      type: 'short-answer',
      difficulty: 'basic',
      question: '$5 + 3 \\times 4$를 계산하시오.',
      answer: '17',
      explanation: '곱셈을 먼저 계산합니다.\n$5 + 3 \\times 4 = 5 + 12 = 17$',
    },
    {
      id: 'fd4-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: '$(8 + 2) \\times 5 - 10$을 계산하시오.',
      answer: '40',
      explanation: '괄호 → 곱셈 → 뺄셈 순서로 계산합니다.\n$(8 + 2) \\times 5 - 10 = 10 \\times 5 - 10 = 50 - 10 = 40$',
    },
    {
      id: 'fd4-p3',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$24 \\div 6 + 2 \\times 3$의 값은?',
      options: ['$6$', '$10$', '$15$', '$18$'],
      answer: '$10$',
      explanation: '나눗셈과 곱셈을 먼저, 왼쪽부터 계산합니다.\n$24 \\div 6 + 2 \\times 3 = 4 + 6 = 10$',
    },
    {
      id: 'fd4-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '다음 중 계산 결과가 다른 하나는?',
      options: [
        '$2 \\times (3 + 5)$',
        '$2 \\times 3 + 2 \\times 5$',
        '$(2 \\times 3) + 5$',
        '$2 \\times 8$',
      ],
      answer: '$(2 \\times 3) + 5$',
      explanation: '- $2 \\times (3 + 5) = 2 \\times 8 = 16$\n- $2 \\times 3 + 2 \\times 5 = 6 + 10 = 16$\n- $(2 \\times 3) + 5 = 6 + 5 = 11$ ← 이것만 다릅니다!\n- $2 \\times 8 = 16$\n\n이것이 **분배법칙**: $a \\times (b + c) = a \\times b + a \\times c$',
    },
    {
      id: 'fd4-p5',
      type: 'short-answer',
      difficulty: 'applied',
      question: '$100 - (25 + 15) \\times 2$를 계산하시오.',
      answer: '20',
      explanation: '괄호 → 곱셈 → 뺄셈 순서:\n$100 - (25 + 15) \\times 2$\n$= 100 - 40 \\times 2$\n$= 100 - 80$\n$= 20$',
    },
    {
      id: 'fd4-p6',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '☐ 안에 $+$, $-$, $\\times$, $\\div$ 중 하나를 넣어 $8$ ☐ $4$ ☐ $2 = 6$을 만들 때, 앞의 ☐에 들어갈 연산은?',
      options: ['$+$', '$-$', '$\\times$', '$\\div$'],
      answer: '$-$',
      explanation: '여러 경우를 시도합니다.\n\n$8 - 4 \\div 2 = 8 - 2 = 6$ ✓ (나눗셈 먼저!)\n\n앞의 ☐에는 $-$가, 뒤의 ☐에는 $\\div$가 들어갑니다.',
    },
  ],
  realLifeExample: '피자 2판(각 8조각)에서 3조각을 먹었다면? 2 × 8 - 3 = 13조각 남아요. 곱셈을 먼저 해야 맞는 답이 나옵니다!',
};

export default dayContent;
