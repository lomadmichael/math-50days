import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 27,
  part: 4,
  title: '이차함수의 최댓값과 최솟값',
  subtitle: '$a > 0$이면 최솟값, $a < 0$이면 최댓값',
  lectures: [],
  concepts: [
    {
      id: 'g3d27-c1',
      title: '이차함수의 최댓값과 최솟값',
      content: '$y = a(x - p)^2 + q$에서:\\n• $a > 0$일 때: $x = p$에서 최솟값 $q$ (아래로 볼록)\\n• $a < 0$일 때: $x = p$에서 최댓값 $q$ (위로 볼록)\\n\\n꼭짓점의 $y$좌표가 최댓값 또는 최솟값입니다.',
      type: 'formula',
    },
    {
      id: 'g3d27-c2',
      title: '일반형에서 최댓값/최솟값 구하기',
      content: '$y = ax^2 + bx + c$를 꼭짓점 형태로 변환:\\n$y = a\\\\left(x + \\\\frac{b}{2a}\\\\right)^2 - \\\\frac{b^2 - 4ac}{4a}$\\n\\n최댓값 또는 최솟값: $-\\\\frac{b^2 - 4ac}{4a}$\\n이때 $x = -\\\\frac{b}{2a}$',
      type: 'formula',
    },
    {
      id: 'g3d27-c3',
      title: '제한된 범위에서의 최댓값·최솟값',
      content: '$x$의 범위가 제한된 경우, 꼭짓점이 범위 안에 있는지 확인해야 합니다.\\n• 범위 안에 꼭짓점이 있으면: 꼭짓점에서 최댓값 또는 최솟값\\n• 범위 밖이면: 양 끝점에서의 함숫값을 비교하여 결정',
      type: 'warning',
    },
  ],
  problems: [
    {
      id: 'g3d27-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$y = 2(x - 3)^2 + 5$의 최솟값은?',
      options: ['$3$', '$5$', '$2$', '$-5$'],
      answer: '$5$',
      explanation: '$a = 2 > 0$이므로 아래로 볼록이고, $x = 3$에서 최솟값 $5$를 가집니다.',
    },
    {
      id: 'g3d27-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$y = -(x + 1)^2 + 4$의 최댓값은?',
      options: ['$1$', '$-1$', '$4$', '$-4$'],
      answer: '$4$',
      explanation: '$a = -1 < 0$이므로 위로 볼록이고, $x = -1$에서 최댓값 $4$를 가집니다.',
    },
    {
      id: 'g3d27-p3',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$y = x^2 - 6x + 11$의 최솟값을 구하면?',
      options: ['$2$', '$3$', '$11$', '$-2$'],
      answer: '$2$',
      explanation: '$y = (x-3)^2 - 9 + 11 = (x-3)^2 + 2$이므로 $x = 3$에서 최솟값 $2$입니다.',
    },
    {
      id: 'g3d27-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$y = -2x^2 + 8x - 5$의 최댓값과 그때의 $x$값을 바르게 짝지은 것은?',
      options: ['$x = 2$, 최댓값 $3$', '$x = 4$, 최댓값 $3$', '$x = 2$, 최댓값 $-5$', '$x = -2$, 최댓값 $3$'],
      answer: '$x = 2$, 최댓값 $3$',
      explanation: '$y = -2(x^2 - 4x) - 5 = -2(x-2)^2 + 8 - 5 = -2(x-2)^2 + 3$. $a = -2 < 0$이므로 $x = 2$에서 최댓값 $3$.',
    },
    {
      id: 'g3d27-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '$y = x^2 - 4x + 1$ ($0 \\\\leq x \\\\leq 5$)에서 최댓값과 최솟값의 합은?',
      options: ['$3$', '$5$', '$6$', '$-3$'],
      answer: '$3$',
      explanation: '$y = (x-2)^2 - 3$. 범위 $0 \\\\leq x \\\\leq 5$에서 꼭짓점 $x = 2$일 때 최솟값 $-3$. 끝점: $x = 0$일 때 $1$, $x = 5$일 때 $6$. 최댓값 $6$. 합: $6 + (-3) = 3$.',
    },
  ],
  realLifeExample: '야구에서 공을 던지면 공의 높이는 이차함수로 나타낼 수 있습니다. 이차함수의 최댓값은 공이 도달하는 최고 높이를 의미하며, 이를 통해 홈런 여부를 판단할 수 있습니다.',
};

export default dayContent;
