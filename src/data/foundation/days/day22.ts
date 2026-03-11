import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 22,
  part: 5,
  title: '두 양의 비교, 비의 뜻',
  subtitle: '두 수를 비교하는 방법 "비"! 중학교 일차방정식의 기초가 되는 개념이에요.',
  lectures: [],
  concepts: [
    {
      id: 'f5d22-c1',
      title: '비란?',
      content: '두 수를 나눗셈으로 비교하는 것을 **비**라고 합니다.\n\n$a$와 $b$의 비 → $a : b$ (a 대 b)\n\n예: 사과 $3$개와 배 $5$개의 비 → $3 : 5$\n\n**비의 의미:**\n- $3 : 5$는 "사과가 $3$이면 배는 $5$"라는 뜻\n- 비의 **기호 ":"**는 나눗셈($\\div$)과 같은 의미입니다!',
      type: 'definition',
    },
    {
      id: 'f5d22-c2',
      title: '비의 성질',
      content: '비의 양쪽에 **같은 수**를 곱하거나 나누어도 비는 같습니다.\n\n$2 : 3 = 4 : 6 = 6 : 9 = 10 : 15$\n\n$12 : 8 = 6 : 4 = 3 : 2$ (양쪽을 $4$로 나눔)\n\n가장 간단한 자연수의 비로 나타내는 것이 **기본!**\n$12 : 8$의 가장 간단한 비 → $3 : 2$ ($\\gcd(12, 8) = 4$로 나눔)',
      type: 'formula',
    },
    {
      id: 'f5d22-c3',
      title: '분수, 소수의 비를 간단히',
      content: '**분수의 비:** 분모의 최소공배수를 곱합니다.\n$\\frac{2}{3} : \\frac{3}{4}$ → 양쪽에 $12$를 곱하면 $8 : 9$\n\n**소수의 비:** 소수점을 없앱니다.\n$0.3 : 0.5$ → 양쪽에 $10$을 곱하면 $3 : 5$\n$1.2 : 0.8$ → 양쪽에 $10$을 곱하면 $12 : 8 = 3 : 2$',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'fd22-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$15 : 25$를 가장 간단한 자연수의 비로 나타내면?',
      options: ['$3 : 5$', '$5 : 3$', '$1 : 5$', '$15 : 25$'],
      answer: '$3 : 5$',
      explanation: '$\\gcd(15, 25) = 5$\n\n$15 : 25 = (15 \\div 5) : (25 \\div 5) = 3 : 5$',
    },
    {
      id: 'fd22-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: '$4 : 7 = 12 :$ ☐ 에서 ☐에 들어갈 수를 구하시오.',
      answer: '21',
      explanation: '$4 : 7 = 12 :$ ☐\n$4$에 $3$을 곱하면 $12$이므로\n$7 \\times 3 = 21$\n\n따라서 ☐ $= 21$',
    },
    {
      id: 'fd22-p3',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$0.6 : 0.9$를 가장 간단한 자연수의 비로 나타내면?',
      options: ['$6 : 9$', '$2 : 3$', '$3 : 2$', '$1 : 1.5$'],
      answer: '$2 : 3$',
      explanation: '$0.6 : 0.9$ → 양쪽에 $10$을 곱하면 $6 : 9$\n$\\gcd(6, 9) = 3$으로 나누면 $2 : 3$',
    },
    {
      id: 'fd22-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question: '$\\frac{3}{4} : \\frac{5}{6}$을 가장 간단한 자연수의 비로 나타낼 때, 두 수의 합을 구하시오.',
      answer: '19',
      explanation: '$\\frac{3}{4} : \\frac{5}{6}$ → 양쪽에 $\\text{lcm}(4, 6) = 12$를 곱하면\n$\\frac{3}{4} \\times 12 : \\frac{5}{6} \\times 12 = 9 : 10$\n\n두 수의 합: $9 + 10 = 19$',
    },
    {
      id: 'fd22-p5',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '형과 동생의 용돈 비가 $5 : 3$이고, 형의 용돈이 $15000$원일 때, 동생의 용돈은?',
      options: ['$3000$원', '$6000$원', '$9000$원', '$12000$원'],
      answer: '$9000$원',
      explanation: '$5 : 3 = 15000 :$ ☐\n$5$에 $3000$을 곱하면 $15000$이므로\n동생: $3 \\times 3000 = 9000$원',
    },
    {
      id: 'fd22-p6',
      type: 'short-answer',
      difficulty: 'challenge',
      question: '$A : B = 2 : 3$이고 $B : C = 4 : 5$일 때, $A : B : C$를 가장 간단한 자연수의 비로 나타낼 때 $A$의 값을 구하시오.',
      answer: '8',
      explanation: '$B$를 같게 만듭니다.\n$A : B = 2 : 3$에서 $B = 3$\n$B : C = 4 : 5$에서 $B = 4$\n\n$B$의 최소공배수: $\\text{lcm}(3, 4) = 12$\n\n$A : B = 8 : 12$ ($\\times 4$)\n$B : C = 12 : 15$ ($\\times 3$)\n\n$A : B : C = 8 : 12 : 15$\n따라서 $A = 8$',
    },
  ],
  realLifeExample: '음식 레시피에서 "밀가루와 물의 비 3:2"라고 하면, 밀가루 300g에 물 200g을 넣는 거예요. 비는 정확한 비율을 유지하는 데 핵심!',
};

export default dayContent;
