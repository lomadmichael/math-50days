import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 19,
  part: 4,
  title: '공배수와 최소공배수',
  subtitle: '두 수의 공통 배수 중 가장 작은 수! 통분과 분수 계산의 핵심이에요.',
  lectures: [],
  concepts: [
    {
      id: 'f4d19-c1',
      title: '공배수와 최소공배수',
      content: '**공배수**: 두 수의 공통된 배수\n**최소공배수(LCM)**: 공배수 중 가장 작은 수\n\n$4$의 배수: $4, 8, 12, 16, 20, 24, ...$\n$6$의 배수: $6, 12, 18, 24, 30, ...$\n\n공배수: $12, 24, 36, ...$\n최소공배수: $12$\n\n공배수는 최소공배수의 **배수**입니다!',
      type: 'definition',
    },
    {
      id: 'f4d19-c2',
      title: '소인수분해로 최소공배수 구하기',
      content: '**소인수분해** 후 **모든 소인수의 최대 지수**를 곱합니다.\n\n$12 = 2^2 \\times 3$\n$18 = 2 \\times 3^2$\n\n모든 소인수: $2$와 $3$\n$2$의 최대 지수: $\\max(2, 1) = 2$\n$3$의 최대 지수: $\\max(1, 2) = 2$\n\n$\\text{lcm}(12, 18) = 2^2 \\times 3^2 = 36$\n\n**공식:** $\\gcd(a, b) \\times \\text{lcm}(a, b) = a \\times b$',
      type: 'formula',
    },
    {
      id: 'f4d19-c3',
      title: '최소공배수의 활용',
      content: '**활용 1: 통분**\n$\\frac{5}{12} + \\frac{7}{18}$을 계산하려면 공통 분모 필요\n→ $\\text{lcm}(12, 18) = 36$\n\n**활용 2: 동시에 만나는 시점**\nA 버스는 $8$분 간격, B 버스는 $12$분 간격\n동시에 출발한 후 다시 만나는 시간?\n→ $\\text{lcm}(8, 12) = 24$분 후',
      type: 'example',
    },
  ],
  problems: [
    {
      id: 'fd19-p1',
      type: 'short-answer',
      difficulty: 'basic',
      question: '$\\text{lcm}(6, 8)$을 구하시오.',
      answer: '24',
      explanation: '$6 = 2 \\times 3$, $8 = 2^3$\n\n$\\text{lcm}(6, 8) = 2^3 \\times 3 = 24$\n\n또는: $6$의 배수 $6, 12, 18, 24, ...$ / $8$의 배수 $8, 16, 24, ...$\n최소공배수: $24$',
    },
    {
      id: 'fd19-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$\\text{lcm}(9, 12)$는?',
      options: ['$3$', '$36$', '$72$', '$108$'],
      answer: '$36$',
      explanation: '$9 = 3^2$, $12 = 2^2 \\times 3$\n\n$\\text{lcm}(9, 12) = 2^2 \\times 3^2 = 4 \\times 9 = 36$',
    },
    {
      id: 'fd19-p3',
      type: 'short-answer',
      difficulty: 'basic',
      question: '$\\gcd(8, 12) = 4$일 때, $\\text{lcm}(8, 12)$를 구하시오.',
      answer: '24',
      explanation: '$\\gcd \\times \\text{lcm} = a \\times b$ 공식 이용:\n$4 \\times \\text{lcm} = 8 \\times 12 = 96$\n$\\text{lcm} = 96 \\div 4 = 24$',
    },
    {
      id: 'fd19-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '두 톱니바퀴 A($15$개 톱니)와 B($20$개 톱니)가 맞물려 돌 때, 처음 위치로 동시에 돌아오려면 A는 최소 몇 바퀴를 돌아야 하나?',
      options: ['$3$바퀴', '$4$바퀴', '$5$바퀴', '$6$바퀴'],
      answer: '$4$바퀴',
      explanation: '동시에 원래 위치로 돌아오려면 $\\text{lcm}(15, 20) = 60$개의 톱니가 지나가야 합니다.\n\nA는 $60 \\div 15 = 4$바퀴\nB는 $60 \\div 20 = 3$바퀴',
    },
    {
      id: 'fd19-p5',
      type: 'short-answer',
      difficulty: 'applied',
      question: '$\\text{lcm}(4, 6, 9)$를 구하시오.',
      answer: '36',
      explanation: '$4 = 2^2$, $6 = 2 \\times 3$, $9 = 3^2$\n\n모든 소인수의 최대 지수:\n$2^2 \\times 3^2 = 4 \\times 9 = 36$',
    },
    {
      id: 'fd19-p6',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '두 자연수의 최대공약수가 $6$, 최소공배수가 $72$일 때, 두 수의 곱은?',
      options: ['$432$', '$72$', '$144$', '$216$'],
      answer: '$432$',
      explanation: '$\\gcd \\times \\text{lcm} = a \\times b$\n\n$6 \\times 72 = 432$\n\n따라서 두 수의 곱은 $432$',
    },
  ],
  realLifeExample: '신호등 A는 30초마다, 신호등 B는 45초마다 바뀝니다. 동시에 바뀐 후 다시 동시에 바뀌는 것은? LCM(30,45)=90초(1분 30초) 후예요!',
};

export default dayContent;
