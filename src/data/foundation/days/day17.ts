import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 17,
  part: 4,
  title: '소수(素數) 찾기',
  subtitle: '약수가 1과 자기 자신뿐인 특별한 수! 소인수분해의 핵심 재료예요.',
  lectures: [],
  concepts: [
    {
      id: 'f4d17-c1',
      title: '소수(素數)란?',
      content: '**소수(素數)**는 $1$보다 큰 자연수 중, 약수가 **$1$과 자기 자신뿐**인 수입니다.\n\n소수: $2, 3, 5, 7, 11, 13, 17, 19, 23, 29, ...$\n\n**주의:**\n- $1$은 소수가 아닙니다! (약속)\n- $2$는 **유일한 짝수 소수**입니다.\n- 소수가 아닌 $2$ 이상의 자연수를 **합성수**라고 합니다.',
      type: 'definition',
    },
    {
      id: 'f4d17-c2',
      title: '에라토스테네스의 체',
      content: '소수를 찾는 가장 유명한 방법!\n\n**1단계:** $1$을 지운다.\n**2단계:** $2$를 남기고, $2$의 배수를 모두 지운다.\n**3단계:** $3$을 남기고, $3$의 배수를 모두 지운다.\n**4단계:** $5$를 남기고, $5$의 배수를 모두 지운다.\n**5단계:** $7$을 남기고, $7$의 배수를 모두 지운다.\n...\n\n남은 수가 모두 소수입니다!\n\n$100$ 이하의 소수를 찾으려면 $\\sqrt{100} = 10$ 이하의 소수($2, 3, 5, 7$)의 배수만 지우면 됩니다.',
      type: 'formula',
    },
    {
      id: 'f4d17-c3',
      title: '소인수분해',
      content: '자연수를 **소수들의 곱**으로 나타내는 것이 **소인수분해**입니다.\n\n예: $60 = 2 \\times 2 \\times 3 \\times 5 = 2^2 \\times 3 \\times 5$\n\n소인수분해 방법 (나눗셈 이용):\n$60 \\div 2 = 30$\n$30 \\div 2 = 15$\n$15 \\div 3 = 5$\n$5$는 소수 → 끝!\n\n$60 = 2^2 \\times 3 \\times 5$',
      type: 'example',
    },
  ],
  problems: [
    {
      id: 'fd17-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '다음 중 소수인 것은?',
      options: ['$1$', '$9$', '$11$', '$15$'],
      answer: '$11$',
      explanation: '$1$: 소수 아님 (약속)\n$9 = 3 \\times 3$: 합성수\n$11$: 약수가 $1$과 $11$뿐 → **소수** ✓\n$15 = 3 \\times 5$: 합성수',
    },
    {
      id: 'fd17-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: '$10$보다 크고 $20$보다 작은 소수를 모두 더하면?',
      answer: '60',
      explanation: '$10$~$20$ 사이의 소수: $11, 13, 17, 19$\n\n$11 + 13 + 17 + 19 = 60$',
    },
    {
      id: 'fd17-p3',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$42$를 소인수분해하면?',
      options: ['$2 \\times 3 \\times 7$', '$2 \\times 21$', '$6 \\times 7$', '$2^2 \\times 3 \\times 7$'],
      answer: '$2 \\times 3 \\times 7$',
      explanation: '$42 \\div 2 = 21$\n$21 \\div 3 = 7$\n$7$은 소수\n\n$42 = 2 \\times 3 \\times 7$\n\n($2 \\times 21$과 $6 \\times 7$은 소인수분해가 아닙니다. 모든 인수가 소수여야 합니다.)',
    },
    {
      id: 'fd17-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question: '$180$을 소인수분해하면 $2^a \\times 3^b \\times 5^c$입니다. $a + b + c$의 값을 구하시오.',
      answer: '5',
      explanation: '$180 \\div 2 = 90$\n$90 \\div 2 = 45$\n$45 \\div 3 = 15$\n$15 \\div 3 = 5$\n$5$는 소수\n\n$180 = 2^2 \\times 3^2 \\times 5$\n\n$a = 2, b = 2, c = 1$\n$a + b + c = 5$',
    },
    {
      id: 'fd17-p5',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$2$, $3$, $5$ 이외의 소수 중 가장 작은 수는?',
      options: ['$6$', '$7$', '$9$', '$11$'],
      answer: '$7$',
      explanation: '$6 = 2 \\times 3$ (합성수)\n$7$: 약수가 $1$과 $7$뿐 → **소수** ✓\n\n$7$이 $2, 3, 5$ 다음으로 작은 소수입니다.',
    },
    {
      id: 'fd17-p6',
      type: 'short-answer',
      difficulty: 'challenge',
      question: '연속하는 두 소수의 합이 $24$일 때, 두 소수 중 작은 수를 구하시오.',
      answer: '11',
      explanation: '소수를 나열: $2, 3, 5, 7, 11, 13, 17, 19, 23, ...$\n\n연속하는 두 소수의 합이 $24$:\n$11 + 13 = 24$ ✓\n\n따라서 작은 수는 $11$',
    },
  ],
  realLifeExample: '인터넷 보안(암호화)은 큰 소수 두 개를 곱한 수를 이용합니다. 소수는 수학의 기본 단위이면서 동시에 우리의 온라인 안전을 지키는 핵심이에요!',
};

export default dayContent;
