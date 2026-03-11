import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 16,
  part: 4,
  title: '약수와 배수 찾기',
  subtitle: '약수와 배수를 빠르게 찾는 방법! 소인수분해의 기초를 다져요.',
  lectures: [],
  concepts: [
    {
      id: 'f4d16-c1',
      title: '약수 찾기',
      content: '어떤 수를 나누어떨어지게 하는 수가 **약수**입니다.\n\n$36$의 약수 찾기:\n$1 \\times 36$, $2 \\times 18$, $3 \\times 12$, $4 \\times 9$, $6 \\times 6$\n\n약수: $1, 2, 3, 4, 6, 9, 12, 18, 36$ (총 $9$개)\n\n**팁:** $\\sqrt{36} = 6$까지만 확인하면 됩니다. $6$까지 나눠보면 짝이 자동으로 나옵니다!',
      type: 'definition',
    },
    {
      id: 'f4d16-c2',
      title: '배수 판별법',
      content: '빠르게 배수를 판별하는 방법:\n\n**2의 배수:** 일의 자리가 $0, 2, 4, 6, 8$ (짝수)\n**3의 배수:** 각 자릿수의 합이 $3$의 배수\n**4의 배수:** 끝 두 자리가 $4$의 배수\n**5의 배수:** 일의 자리가 $0$ 또는 $5$\n**9의 배수:** 각 자릿수의 합이 $9$의 배수\n\n예: $378$ → $3+7+8=18$ → $3$의 배수 ✓, $9$의 배수 ✓',
      type: 'formula',
    },
    {
      id: 'f4d16-c3',
      title: '약수의 개수 구하기',
      content: '약수의 개수를 빠르게 구하는 방법:\n\n$36 = 2^2 \\times 3^2$\n\n약수의 개수 $= (2+1) \\times (2+1) = 9$개\n\n공식: $n = a^p \\times b^q \\times c^r$일 때\n약수의 개수 $= (p+1)(q+1)(r+1)$\n\n이것이 중학교 **소인수분해**의 핵심 활용법입니다!',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'fd16-p1',
      type: 'short-answer',
      difficulty: 'basic',
      question: '$48$의 약수의 개수를 구하시오.',
      answer: '10',
      explanation: '$48$의 약수: $1, 2, 3, 4, 6, 8, 12, 16, 24, 48$\n\n$1 \\times 48$, $2 \\times 24$, $3 \\times 16$, $4 \\times 12$, $6 \\times 8$\n\n총 $10$개',
    },
    {
      id: 'fd16-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '다음 중 $3$의 배수이면서 $4$의 배수인 것은?',
      options: ['$15$', '$28$', '$36$', '$45$'],
      answer: '$36$',
      explanation: '$3$과 $4$의 공배수 = $12$의 배수\n\n$15 = 3 \\times 5$ (4의 배수 ✗)\n$28 = 4 \\times 7$ (3의 배수 ✗)\n$36 = 12 \\times 3$ (12의 배수 ✓)\n$45 = 9 \\times 5$ (4의 배수 ✗)',
    },
    {
      id: 'fd16-p3',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$234$는 $9$의 배수인가?',
      options: ['예', '아니요'],
      answer: '예',
      explanation: '각 자릿수의 합: $2 + 3 + 4 = 9$\n$9$는 $9$의 배수이므로 $234$는 $9$의 배수입니다. ✓\n\n검산: $234 \\div 9 = 26$',
    },
    {
      id: 'fd16-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question: '$1$부터 $100$까지의 자연수 중 $6$의 배수의 개수를 구하시오.',
      answer: '16',
      explanation: '$6$의 배수: $6, 12, 18, ..., 96$\n\n$100 \\div 6 = 16.66...$\n\n따라서 $6$의 배수는 $16$개',
    },
    {
      id: 'fd16-p5',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$72 = 2^3 \\times 3^2$일 때, $72$의 약수의 개수는?',
      options: ['$8$개', '$10$개', '$12$개', '$14$개'],
      answer: '$12$개',
      explanation: '약수의 개수 공식:\n$(3+1) \\times (2+1) = 4 \\times 3 = 12$개',
    },
    {
      id: 'fd16-p6',
      type: 'short-answer',
      difficulty: 'challenge',
      question: '세 자리 수 $\\overline{5A2}$가 $3$의 배수가 되게 하는 한 자리 수 $A$를 모두 더한 값을 구하시오.',
      answer: '15',
      explanation: '각 자릿수의 합: $5 + A + 2 = 7 + A$\n\n$7 + A$가 $3$의 배수가 되려면:\n$A = 2$ → $9$ ✓\n$A = 5$ → $12$ ✓\n$A = 8$ → $15$ ✓\n\n$A$의 합: $2 + 5 + 8 = 15$',
    },
  ],
  realLifeExample: '학교에서 36명을 모둠으로 나눌 때, 가능한 모둠 수는 36의 약수: 1, 2, 3, 4, 6, 9, 12, 18, 36명 모둠으로 나눌 수 있어요! 약수는 공정한 분배의 핵심입니다.',
};

export default dayContent;
