import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 24,
  part: 4,
  title: '일차함수의 그래프',
  subtitle: '일차함수의 그래프가 직선인 이유와 그래프 그리는 법을 배우자!',
  lectures: [],
  concepts: [
    {
      id: 'g2d24-c1',
      title: '일차함수의 그래프는 직선',
      content: '일차함수 $y = ax + b$의 그래프는 **직선**입니다.\n\n$y = 2x + 1$의 그래프를 그리려면:\n\n| $x$ | $-1$ | $0$ | $1$ | $2$ |\n| $y$ | $-1$ | $1$ | $3$ | $5$ |\n\n이 점들을 좌표평면에 찍으면 한 직선 위에 있습니다.\n직선은 **두 점**만 알면 그릴 수 있습니다!',
      type: 'definition',
    },
    {
      id: 'g2d24-c2',
      title: '그래프 그리는 간편법',
      content: '일차함수의 그래프는 **두 점**만 찍으면 됩니다.\n\n가장 쉬운 방법: $x = 0$, $y = 0$인 점 이용\n\n$y = 3x - 6$의 경우:\n- $x = 0$이면 $y = -6$ → 점 $(0, -6)$\n- $y = 0$이면 $x = 2$ → 점 $(2, 0)$\n\n이 두 점을 연결하면 그래프 완성!',
      type: 'tip',
    },
    {
      id: 'g2d24-c3',
      title: '$x$절편과 $y$절편',
      content: '**$y$절편**: 그래프가 $y$축과 만나는 점의 $y$ 좌표 ($x = 0$일 때의 $y$ 값)\n→ $y = ax + b$에서 $y$절편은 $b$\n\n**$x$절편**: 그래프가 $x$축과 만나는 점의 $x$ 좌표 ($y = 0$일 때의 $x$ 값)\n→ $y = ax + b$에서 $0 = ax + b$이므로 $x = -\\frac{b}{a}$',
      type: 'definition',
    },
    {
      id: 'g2d24-c4',
      title: '그래프의 평행이동',
      content: '$y = ax$의 그래프를 $y$축 방향으로 $b$만큼 평행이동하면 $y = ax + b$가 됩니다.\n\n- $b > 0$: 위로 $b$만큼 이동\n- $b < 0$: 아래로 $|b|$만큼 이동\n\n예: $y = 2x$를 위로 3만큼 이동 → $y = 2x + 3$\n$y = 2x$를 아래로 1만큼 이동 → $y = 2x - 1$',
      type: 'formula',
    },
  ],
  problems: [
    {
      id: 'g2d24-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$y = -x + 3$의 $y$절편은?',
      options: ['$-1$', '$1$', '$3$', '$-3$'],
      answer: '$3$',
      explanation: '$y = -x + 3$에서 $y$절편은 $b = 3$입니다.\n$x = 0$일 때 $y = 3$이므로 점 $(0, 3)$에서 $y$축과 만납니다.',
    },
    {
      id: 'g2d24-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: '$y = 2x - 4$의 $x$절편을 구하시오.',
      answer: '2',
      explanation: '$y = 0$으로 놓으면:\n$0 = 2x - 4$\n$2x = 4$\n$x = 2$\n\n$x$절편은 2, 즉 점 $(2, 0)$에서 $x$축과 만납니다.',
    },
    {
      id: 'g2d24-p3',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$y = 3x$의 그래프를 $y$축 방향으로 $-5$만큼 평행이동한 그래프의 식은?',
      options: ['$y = 3x + 5$', '$y = 3x - 5$', '$y = -2x$', '$y = 3(x - 5)$'],
      answer: '$y = 3x - 5$',
      explanation: '$y = 3x$를 $y$축 방향으로 $-5$만큼 이동하면 $y = 3x + (-5) = 3x - 5$',
    },
    {
      id: 'g2d24-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '일차함수 $y = ax + 2$의 그래프가 점 $(3, -4)$를 지날 때, $a$의 값은?',
      options: ['$-2$', '$-1$', '$1$', '$2$'],
      answer: '$-2$',
      explanation: '$-4 = 3a + 2$\n$3a = -6$\n$a = -2$',
    },
    {
      id: 'g2d24-p5',
      type: 'short-answer',
      difficulty: 'applied',
      question: '일차함수 $y = -3x + 6$의 그래프와 $x$축, $y$축으로 둘러싸인 삼각형의 넓이를 구하시오.',
      answer: '6',
      explanation: '$y$절편: 6 → 점 $(0, 6)$\n$x$절편: $0 = -3x + 6$ → $x = 2$ → 점 $(2, 0)$\n\n밑변 = 2, 높이 = 6\n넓이 = $\\frac{1}{2} \\times 2 \\times 6 = 6$',
    },
    {
      id: 'g2d24-p6',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '두 일차함수 $y = 2x + 1$과 $y = -x + 7$의 그래프의 교점의 좌표는?',
      options: ['$(1, 3)$', '$(2, 5)$', '$(3, 4)$', '$(4, 3)$'],
      answer: '$(2, 5)$',
      explanation: '교점: $2x + 1 = -x + 7$\n$3x = 6$ → $x = 2$\n$y = 2(2) + 1 = 5$\n\n교점: $(2, 5)$',
    },
  ],
  realLifeExample: '물을 끓일 때 온도 변화는 일차함수 그래프로 나타낼 수 있습니다. 처음 온도가 20도이고 1분마다 8도씩 오르면 $y = 8x + 20$. 이 직선 그래프에서 100도(끓는점)에 도달하는 시간 $x = 10$분을 쉽게 찾을 수 있습니다!',
};

export default dayContent;
