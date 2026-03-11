import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 21,
  part: 4,
  title: '미니테스트 + 복습',
  subtitle: 'PART 4 약수와 배수 총정리! 소인수분해부터 최대공약수·최소공배수까지 확인해요.',
  isTest: true,
  lectures: [],
  concepts: [
    {
      id: 'f4d21-c1',
      title: 'PART 4 핵심 정리',
      content: '**1. 약수와 배수:** 나누어떨어지면 약수, 곱하면 배수\n\n**2. 소수(素數):** 약수가 $1$과 자기 자신뿐 ($2$는 유일한 짝수 소수)\n\n**3. 소인수분해:** 자연수를 소수들의 곱으로 표현\n\n**4. 최대공약수(GCD):** 공통 소인수의 최소 지수 곱 → 약분에 활용\n\n**5. 최소공배수(LCM):** 모든 소인수의 최대 지수 곱 → 통분에 활용\n\n**6. 관계식:** $\\gcd(a,b) \\times \\text{lcm}(a,b) = a \\times b$',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'fd21-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$90$을 소인수분해하면?',
      options: ['$2 \\times 3^2 \\times 5$', '$2 \\times 3 \\times 15$', '$2^2 \\times 3 \\times 5$', '$2 \\times 5 \\times 9$'],
      answer: '$2 \\times 3^2 \\times 5$',
      explanation: '$90 \\div 2 = 45$\n$45 \\div 3 = 15$\n$15 \\div 3 = 5$\n\n$90 = 2 \\times 3^2 \\times 5$',
    },
    {
      id: 'fd21-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: '$\\gcd(36, 54)$를 구하시오.',
      answer: '18',
      explanation: '$36 = 2^2 \\times 3^2$\n$54 = 2 \\times 3^3$\n\n$\\gcd = 2^1 \\times 3^2 = 2 \\times 9 = 18$',
    },
    {
      id: 'fd21-p3',
      type: 'short-answer',
      difficulty: 'applied',
      question: '$\\text{lcm}(15, 20, 12)$를 구하시오.',
      answer: '60',
      explanation: '$15 = 3 \\times 5$\n$20 = 2^2 \\times 5$\n$12 = 2^2 \\times 3$\n\n$\\text{lcm} = 2^2 \\times 3 \\times 5 = 60$',
    },
    {
      id: 'fd21-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$\\frac{48}{72}$를 기약분수로 나타내면?',
      options: ['$\\frac{4}{6}$', '$\\frac{2}{3}$', '$\\frac{8}{12}$', '$\\frac{16}{24}$'],
      answer: '$\\frac{2}{3}$',
      explanation: '$\\gcd(48, 72) = 24$\n\n$\\frac{48}{72} = \\frac{48 \\div 24}{72 \\div 24} = \\frac{2}{3}$',
    },
    {
      id: 'fd21-p5',
      type: 'short-answer',
      difficulty: 'challenge',
      question: '두 자연수의 최대공약수가 $8$, 최소공배수가 $120$일 때, 두 수 중 하나가 $24$이면 다른 수를 구하시오.',
      answer: '40',
      explanation: '$\\gcd \\times \\text{lcm} = a \\times b$\n$8 \\times 120 = 24 \\times b$\n$960 = 24b$\n$b = 40$\n\n검산: $\\gcd(24, 40) = 8$ ✓, $\\text{lcm}(24, 40) = 120$ ✓',
    },
    {
      id: 'fd21-p6',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '$1$부터 $100$까지의 자연수 중 $2$의 배수도 아니고 $3$의 배수도 아닌 수의 개수는?',
      options: ['$33$개', '$34$개', '$50$개', '$67$개'],
      answer: '$33$개',
      explanation: '포함-배제 원리:\n$2$의 배수: $100 \\div 2 = 50$개\n$3$의 배수: $100 \\div 3 = 33$개\n$6$의 배수 (중복): $100 \\div 6 = 16$개\n\n$2$ 또는 $3$의 배수: $50 + 33 - 16 = 67$개\n\n둘 다 아닌 수: $100 - 67 = 33$개',
    },
  ],
  realLifeExample: '약수와 배수는 시간표 만들기에도 쓰여요. 수학은 3일마다, 영어는 4일마다 시험이면 LCM(3,4)=12일마다 같은 날 시험을 봅니다!',
};

export default dayContent;
