import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 18,
  part: 4,
  title: '공약수와 최대공약수',
  subtitle: '두 수의 공통 약수를 찾고, 가장 큰 공약수를 구해봐요!',
  lectures: [],
  concepts: [
    {
      id: 'f4d18-c1',
      title: '공약수와 최대공약수',
      content: '**공약수**: 두 수의 공통된 약수\n**최대공약수(GCD)**: 공약수 중 가장 큰 수\n\n$12$의 약수: $1, 2, 3, 4, 6, 12$\n$18$의 약수: $1, 2, 3, 6, 9, 18$\n\n공약수: $1, 2, 3, 6$\n최대공약수: $6$\n\n기호: $\\gcd(12, 18) = 6$',
      type: 'definition',
    },
    {
      id: 'f4d18-c2',
      title: '소인수분해로 최대공약수 구하기',
      content: '**소인수분해** 후 **공통 소인수의 최소 지수**를 곱합니다.\n\n$48 = 2^4 \\times 3$\n$36 = 2^2 \\times 3^2$\n\n공통 소인수: $2$와 $3$\n$2$의 최소 지수: $\\min(4, 2) = 2$\n$3$의 최소 지수: $\\min(1, 2) = 1$\n\n$\\gcd(48, 36) = 2^2 \\times 3 = 12$',
      type: 'formula',
    },
    {
      id: 'f4d18-c3',
      title: '최대공약수의 활용',
      content: '**활용 1: 균등 배분**\n사과 $24$개, 귤 $36$개를 최대한 많은 학생에게 똑같이 나눠주려면?\n→ $\\gcd(24, 36) = 12$명에게 나눠줄 수 있습니다.\n\n**활용 2: 약분**\n$\\frac{24}{36}$을 약분하려면?\n→ $\\gcd(24, 36) = 12$로 나누면 $\\frac{2}{3}$\n\n최대공약수는 분수의 약분에 핵심적으로 사용됩니다!',
      type: 'example',
    },
  ],
  problems: [
    {
      id: 'fd18-p1',
      type: 'short-answer',
      difficulty: 'basic',
      question: '$\\gcd(20, 30)$을 구하시오.',
      answer: '10',
      explanation: '$20$의 약수: $1, 2, 4, 5, 10, 20$\n$30$의 약수: $1, 2, 3, 5, 6, 10, 15, 30$\n\n공약수: $1, 2, 5, 10$\n최대공약수: $10$',
    },
    {
      id: 'fd18-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$\\gcd(15, 25)$는?',
      options: ['$3$', '$5$', '$15$', '$75$'],
      answer: '$5$',
      explanation: '$15 = 3 \\times 5$\n$25 = 5^2$\n\n공통 소인수: $5$ (최소 지수 $1$)\n\n$\\gcd(15, 25) = 5$',
    },
    {
      id: 'fd18-p3',
      type: 'short-answer',
      difficulty: 'basic',
      question: '$\\gcd(12, 18)$을 이용하여 $\\frac{12}{18}$을 약분하시오. (기약분수로)',
      answer: '2/3',
      explanation: '$\\gcd(12, 18) = 6$\n\n$\\frac{12}{18} = \\frac{12 \\div 6}{18 \\div 6} = \\frac{2}{3}$',
    },
    {
      id: 'fd18-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$\\gcd(48, 72)$는?',
      options: ['$8$', '$12$', '$24$', '$36$'],
      answer: '$24$',
      explanation: '$48 = 2^4 \\times 3$\n$72 = 2^3 \\times 3^2$\n\n공통 소인수: $2$(최소 $3$), $3$(최소 $1$)\n\n$\\gcd(48, 72) = 2^3 \\times 3 = 24$',
    },
    {
      id: 'fd18-p5',
      type: 'short-answer',
      difficulty: 'applied',
      question: '가로 $54$cm, 세로 $36$cm인 직사각형을 같은 크기의 정사각형으로 빈틈없이 자르려면, 정사각형 한 변의 최대 길이는?',
      answer: '18',
      explanation: '정사각형 한 변의 길이는 $54$와 $36$의 공약수여야 합니다.\n최대로 크게 하려면 최대공약수!\n\n$\\gcd(54, 36) = 18$\n\n$18$cm 정사각형으로 자르면: $3 \\times 2 = 6$개',
    },
    {
      id: 'fd18-p6',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '두 자연수 $A$, $B$의 최대공약수가 $12$이고 $A = 36$일 때, $B$가 될 수 있는 가장 작은 두 자리 수는?',
      options: ['$12$', '$24$', '$36$', '$48$'],
      answer: '$12$',
      explanation: '$\\gcd(36, B) = 12$이므로 $B$는 $12$의 배수입니다.\n또한 $\\gcd(36, B) = 12$이지 $36$이 아니어야 하므로, $B$는 $36$의 배수가 아닌 $12$의 배수.\n\n$12$의 배수: $12, 24, 36, 48, ...$\n$\\gcd(36, 12) = 12$ ✓\n\n가장 작은 두 자리 수: $12$',
    },
  ],
  realLifeExample: '꽃다발을 만들 때 장미 48송이와 튤립 36송이를 같은 수의 꽃으로 나눠 최대한 많은 다발을 만들려면? GCD(48,36)=12, 12다발을 만들 수 있어요!',
};

export default dayContent;
