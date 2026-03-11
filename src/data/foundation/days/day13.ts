import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 13,
  part: 3,
  title: '소수의 사칙연산',
  subtitle: '소수의 덧셈·뺄셈·곱셈·나눗셈을 한 번에 정리! 소수점 위치가 핵심이에요.',
  lectures: [],
  concepts: [
    {
      id: 'f3d13-c1',
      title: '소수의 덧셈·뺄셈',
      content: '**소수점을 맞추고** 같은 자리끼리 계산합니다.\n\n$3.45 + 2.7 = ?$\n$\\quad 3.45$\n$+ 2.70$ (소수점 맞추기!)\n$= 6.15$\n\n$5.2 - 3.68 = ?$\n$\\quad 5.20$\n$- 3.68$\n$= 1.52$\n\n소수점 아래 자릿수가 다르면 $0$을 채워서 맞춰주세요!',
      type: 'formula',
    },
    {
      id: 'f3d13-c2',
      title: '소수의 곱셈',
      content: '소수를 곱할 때는 **소수점 아래 자릿수의 합**만큼 소수점을 찍습니다.\n\n$0.3 \\times 0.4 = ?$\n$3 \\times 4 = 12$ → 소수점 아래: $1 + 1 = 2$자리\n→ $0.12$\n\n$2.5 \\times 1.3 = ?$\n$25 \\times 13 = 325$ → 소수점 아래: $1 + 1 = 2$자리\n→ $3.25$',
      type: 'formula',
    },
    {
      id: 'f3d13-c3',
      title: '소수의 나눗셈',
      content: '나누는 수를 **자연수로 만들어** 계산합니다.\n\n$4.8 \\div 0.6 = ?$\n→ $\\frac{4.8}{0.6} = \\frac{48}{6} = 8$ (양쪽에 $10$을 곱함)\n\n$3.25 \\div 0.5 = ?$\n→ $\\frac{3.25}{0.5} = \\frac{32.5}{5} = 6.5$ (양쪽에 $10$을 곱함)\n\n이것은 분수로 바꾸면 더 쉽습니다:\n$4.8 \\div 0.6 = \\frac{48}{10} \\div \\frac{6}{10} = \\frac{48}{10} \\times \\frac{10}{6} = 8$',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'fd13-p1',
      type: 'short-answer',
      difficulty: 'basic',
      question: '$4.56 + 3.8$을 계산하시오.',
      answer: '8.36',
      explanation: '$\\quad 4.56$\n$+ 3.80$\n$= 8.36$\n\n소수점을 맞추고 같은 자리끼리 더합니다.',
    },
    {
      id: 'fd13-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: '$7.2 - 3.85$를 계산하시오.',
      answer: '3.35',
      explanation: '$\\quad 7.20$\n$- 3.85$\n$= 3.35$\n\n$7.2 = 7.20$으로 맞춘 후 뺍니다.',
    },
    {
      id: 'fd13-p3',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$0.6 \\times 0.7$의 값은?',
      options: ['$4.2$', '$0.42$', '$0.042$', '$42$'],
      answer: '$0.42$',
      explanation: '$6 \\times 7 = 42$\n소수점 아래 자릿수: $1 + 1 = 2$자리\n따라서 $0.42$',
    },
    {
      id: 'fd13-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question: '$3.6 \\div 0.4$를 계산하시오.',
      answer: '9',
      explanation: '양쪽에 $10$을 곱하면:\n$\\frac{3.6}{0.4} = \\frac{36}{4} = 9$',
    },
    {
      id: 'fd13-p5',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$2.4 \\times 0.5 + 1.8 \\div 0.3$의 값은?',
      options: ['$5.2$', '$7.2$', '$6.0$', '$8.2$'],
      answer: '$7.2$',
      explanation: '곱셈·나눗셈을 먼저 계산:\n$2.4 \\times 0.5 = 1.2$\n$1.8 \\div 0.3 = 6$\n\n$1.2 + 6 = 7.2$',
    },
    {
      id: 'fd13-p6',
      type: 'short-answer',
      difficulty: 'challenge',
      question: '$0.125 \\times 8$을 계산하시오.',
      answer: '1',
      explanation: '$0.125 = \\frac{1}{8}$이므로\n$0.125 \\times 8 = \\frac{1}{8} \\times 8 = 1$\n\n또는: $125 \\times 8 = 1000$ → 소수점 $3$자리 → $1.000 = 1$',
    },
  ],
  realLifeExample: '편의점에서 1200원짜리 음료 2.5병분(큰 병)을 사면? 1200 × 2.5 = 3000원! 소수 연산은 할인 계산, 무게 측정 등 일상 곳곳에 쓰여요.',
};

export default dayContent;
