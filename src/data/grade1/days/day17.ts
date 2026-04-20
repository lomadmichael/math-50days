import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 17,
  part: 3,
  title: '일차방정식(Linear Equation) 풀이',
  subtitle: '방정식(Equation)이란 무엇이고, 일차방정식(Linear Equation)은 어떻게 풀까?',
  lectures: [],
  concepts: [
    {
      id: 'g1d17-c1',
      title: '방정식(Equation)과 항등식(Identity)',
      content: '• **방정식(Equation)**: 미지수(Unknown)의 값에 따라 참이 되기도 하고 거짓이 되기도 하는 등식\n  예) $2x + 1 = 7$ → $x = 3$일 때만 참\n• **항등식(Identity)**: 미지수에 어떤 값을 넣어도 항상 참인 등식\n  예) $2(x + 1) = 2x + 2$ → 항상 참\n• **해(Solution / Root)**: 방정식을 참이 되게 하는 미지수의 값\n• **풀다**: 방정식의 해를 구하는 것',
      type: 'definition',
    },
    {
      id: 'g1d17-c2',
      title: '일차방정식(Linear Equation)의 풀이',
      content: '**일차방정식(Linear Equation)**: 미지수의 차수가 1인 방정식 (예: $ax + b = 0$, $a \\neq 0$)\n\n**풀이 순서**:\n① 괄호가 있으면 분배법칙(Distributive Property)으로 풀기\n② 미지수가 포함된 항은 **좌변**으로, 상수항은 **우변**으로 이항\n③ 양변을 정리 (동류항 계산)\n④ 미지수의 계수(Coefficient)로 양변을 나누기\n\n**이항(Transposition)**: 한쪽 변의 항을 **부호를 바꾸어** 다른 쪽으로 옮기는 것\n$x + 3 = 7$ → $x = 7 - 3$ → $x = 4$',
      type: 'formula',
    },
    {
      id: 'g1d17-c3',
      title: '일차방정식(Linear Equation) 풀이 예시',
      content: '**예시**: $3x - 5 = 2x + 4$를 풀어라.\n\n① $x$항은 좌변, 상수항은 우변으로 이항:\n$3x - 2x = 4 + 5$\n② 양변 정리:\n$x = 9$\n\n**검산**: $3(9) - 5 = 22$, $2(9) + 4 = 22$ ✓\n\n**예시**: $2(x + 3) = 10$\n① 분배: $2x + 6 = 10$\n② 이항: $2x = 10 - 6 = 4$\n③ 양변을 2로 나눔: $x = 2$',
      type: 'example',
    },
  ],
  problems: [
    {
      id: 'g1d17-p1',
      type: 'short-answer',
      difficulty: 'basic',
      question: '$x + 7 = 12$의 해를 구하시오.',
      answer: '5',
      explanation: '$x + 7 = 12$\n\n양변에서 7을 빼면 (이항):\n$x = 12 - 7 = 5$',
    },
    {
      id: 'g1d17-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: '$5x = 35$의 해를 구하시오.',
      answer: '7',
      explanation: '$5x = 35$\n\n양변을 5로 나누면:\n$x = \\dfrac{35}{5} = 7$',
    },
    {
      id: 'g1d17-p3',
      type: 'short-answer',
      difficulty: 'applied',
      question: '$4x - 3 = 2x + 9$의 해를 구하시오.',
      answer: '6',
      explanation: '$x$항은 좌변, 상수항은 우변으로 이항:\n$4x - 2x = 9 + 3$\n$2x = 12$\n$x = 6$\n\n**검산**: $4(6) - 3 = 21$, $2(6) + 9 = 21$ ✓',
    },
    {
      id: 'g1d17-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$3(x - 2) = x + 8$의 해는?',
      options: ['$x = 5$', '$x = 7$', '$x = 8$', '$x = 10$'],
      answer: '$x = 7$',
      explanation: '분배법칙: $3x - 6 = x + 8$\n\n이항: $3x - x = 8 + 6$\n$2x = 14$\n$x = 7$\n\n**검산**: $3(7-2) = 15$, $7 + 8 = 15$ ✓',
    },
    {
      id: 'g1d17-p5',
      type: 'short-answer',
      difficulty: 'challenge',
      question: '$\\dfrac{x + 1}{2} = \\dfrac{2x - 3}{3}$의 해를 구하시오.',
      answer: '9',
      explanation: '양변에 6(분모 2와 3의 최소공배수)을 곱하면:\n$3(x + 1) = 2(2x - 3)$\n$3x + 3 = 4x - 6$\n\n이항: $3x - 4x = -6 - 3$\n$-x = -9$\n$x = 9$\n\n**검산**: $\\dfrac{9+1}{2} = 5$, $\\dfrac{2(9)-3}{3} = 5$ ✓',
    },
  ],
  realLifeExample: '일차방정식(Linear Equation)은 일상에서 "모르는 값 구하기"에 활용됩니다. 예를 들어, 과자 3봉지와 음료 1개를 사서 5,000원을 냈는데 거스름돈이 500원이었다면, 과자 한 봉지 가격을 x로 놓고 방정식을 세울 수 있어요!',
};

export default dayContent;
