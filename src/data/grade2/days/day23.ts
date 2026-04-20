import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 23,
  part: 4,
  title: '함수의 뜻과 일차함수',
  subtitle: '함수가 무엇인지, 일차함수의 기본 개념을 알아보자!',
  lectures: [],
  concepts: [
    {
      id: 'g2d23-c1',
      title: '함수란?',
      content: '두 변수 $x$, $y$에 대하여 $x$의 값이 변함에 따라 $y$의 값이 **하나씩** 정해지는 관계를 $y$는 $x$의 **함수**라고 합니다.\n\n함수인 예:\n- $y = 2x + 1$ → $x = 1$이면 $y = 3$ (하나)\n- $y = x^2$ → $x = 3$이면 $y = 9$ (하나)\n\n함수가 아닌 예:\n- $y^2 = x$ → $x = 4$이면 $y = 2$ 또는 $y = -2$ (두 개!)',
      type: 'definition',
    },
    {
      id: 'g2d23-c2',
      title: '함숫값',
      content: '함수 $f(x)$에서 $x = a$일 때의 $y$ 값을 **함숫값** $f(a)$라 합니다.\n\n$f(x) = 3x - 1$일 때:\n- $f(2) = 3 \\times 2 - 1 = 5$\n- $f(-1) = 3 \\times (-1) - 1 = -4$\n- $f(0) = 3 \\times 0 - 1 = -1$',
      type: 'definition',
    },
    {
      id: 'g2d23-c3',
      title: '일차함수란?',
      content: '$y = ax + b$ ($a \\neq 0$) 꼴로 나타낼 수 있는 함수를 **일차함수**라 합니다.\n\n일차함수: $y = 2x + 3$, $y = -x$, $y = \\frac{1}{2}x - 4$\n\n일차함수가 아닌 것:\n- $y = 3$ (상수함수, $a = 0$)\n- $y = x^2 + 1$ ($x$의 2차)\n- $y = \\frac{1}{x}$ ($x$가 분모)',
      type: 'definition',
    },
    {
      id: 'g2d23-c4',
      title: '일차함수의 식 구하기',
      content: '두 조건이 주어지면 일차함수 $y = ax + b$를 구할 수 있습니다.\n\n예: $f(1) = 3$이고 $f(3) = 7$인 일차함수\n$a + b = 3$, $3a + b = 7$\n빼면: $2a = 4$ → $a = 2$, $b = 1$\n$f(x) = 2x + 1$',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'g2d23-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '다음 중 $y$가 $x$의 함수인 것은?',
      options: ['$x^2 + y^2 = 1$', '$|y| = x$', '$y = 5x - 2$', '$x = 3$'],
      answer: '$y = 5x - 2$',
      explanation: '$y = 5x - 2$는 $x$ 값 하나에 $y$ 값이 하나씩 대응하므로 함수입니다.\n$x^2 + y^2 = 1$이나 $|y| = x$는 하나의 $x$에 두 개의 $y$가 대응할 수 있으므로 함수가 아닙니다.',
    },
    {
      id: 'g2d23-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: '$f(x) = -2x + 5$일 때, $f(3)$의 값을 구하시오.',
      answer: '-1',
      explanation: '$f(3) = -2(3) + 5 = -6 + 5 = -1$',
    },
    {
      id: 'g2d23-p3',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '다음 중 일차함수인 것은?',
      options: ['$y = x^2 + 1$', '$y = \\frac{3}{x}$', '$y = 7$', '$y = -4x + 3$'],
      answer: '$y = -4x + 3$',
      explanation: '일차함수는 $y = ax + b$ ($a \\neq 0$) 꼴이어야 합니다.\n$y = -4x + 3$에서 $a = -4 \\neq 0$이므로 일차함수입니다.',
    },
    {
      id: 'g2d23-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question: '$f(x) = ax + 3$에서 $f(2) = 7$일 때, $a$의 값을 구하시오.',
      answer: '2',
      explanation: '$f(2) = 2a + 3 = 7$\n$2a = 4$\n$a = 2$',
    },
    {
      id: 'g2d23-p5',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$f(x) = 3x - 1$일 때, $f(a) = 11$을 만족하는 $a$의 값은?',
      options: ['$2$', '$3$', '$4$', '$5$'],
      answer: '$4$',
      explanation: '$f(a) = 3a - 1 = 11$\n$3a = 12$\n$a = 4$',
    },
    {
      id: 'g2d23-p6',
      type: 'short-answer',
      difficulty: 'challenge',
      question: '일차함수 $f(x)$가 $f(1) = 5$, $f(4) = -1$을 만족할 때, $f(0)$의 값을 구하시오.',
      answer: '7',
      explanation: '$f(x) = ax + b$로 놓으면\n$a + b = 5$, $4a + b = -1$\n빼면: $3a = -6$ → $a = -2$, $b = 7$\n\n$f(x) = -2x + 7$\n$f(0) = 7$',
    },
  ],
  realLifeExample: '택시 요금은 일차함수입니다! 기본요금이 4,800원이고 km당 1,200원이면 $y = 1200x + 4800$. $x$에 거리를 넣으면 요금 $y$가 하나로 정해집니다. 이것이 바로 "함수"입니다!',
};

export default dayContent;
