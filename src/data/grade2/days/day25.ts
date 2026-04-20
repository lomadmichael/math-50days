import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 25,
  part: 4,
  title: '기울기와 y절편',
  subtitle: '직선의 기울기가 무엇이고 어떻게 구하는지 알아보자!',
  lectures: [],
  concepts: [
    {
      id: 'g2d25-c1',
      title: '기울기란?',
      content: '일차함수 $y = ax + b$에서 $a$를 **기울기**라 합니다.\n\n기울기 = $\\frac{y\\text{의 증가량}}{x\\text{의 증가량}} = \\frac{\\Delta y}{\\Delta x}$\n\n두 점 $(x_1, y_1)$, $(x_2, y_2)$를 지나는 직선의 기울기:\n$$a = \\frac{y_2 - y_1}{x_2 - x_1}$$\n\n예: 점 $(1, 3)$, $(4, 9)$를 지나는 직선의 기울기\n$a = \\frac{9 - 3}{4 - 1} = \\frac{6}{3} = 2$',
      type: 'definition',
    },
    {
      id: 'g2d25-c2',
      title: '기울기의 의미',
      content: '기울기 $a$의 부호에 따라 그래프의 모양이 달라집니다.\n\n- $a > 0$: **오른쪽 위로** 올라감 (우상향)\n- $a < 0$: **오른쪽 아래로** 내려감 (우하향)\n- $|a|$가 클수록 직선이 **가파름**\n- $|a|$가 작을수록 직선이 **완만함**\n\n예: $y = 3x$는 $y = x$보다 가파르고, $y = \\frac{1}{2}x$는 $y = x$보다 완만합니다.',
      type: 'formula',
    },
    {
      id: 'g2d25-c3',
      title: '기울기와 y절편으로 식 구하기',
      content: '기울기가 $a$이고 $y$절편이 $b$이면:\n$$y = ax + b$$\n\n예: 기울기 $-2$, $y$절편 $5$ → $y = -2x + 5$\n\n**한 점과 기울기로 식 구하기**:\n기울기 $3$, 점 $(2, 7)$을 지남\n$y = 3x + b$에서 $7 = 6 + b$ → $b = 1$\n$y = 3x + 1$',
      type: 'formula',
    },
    {
      id: 'g2d25-c4',
      title: '평행한 두 직선',
      content: '두 직선이 **평행**하면 **기울기가 같습니다**.\n\n$y = 2x + 1$과 $y = 2x - 3$은 기울기가 모두 2이므로 평행합니다.\n(단, $y$절편이 달라야 평행. 같으면 같은 직선!)\n\n$y = 3x + 5$에 평행한 직선의 기울기는 반드시 $3$입니다.',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'g2d25-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '두 점 $(1, 2)$, $(3, 8)$을 지나는 직선의 기울기는?',
      options: ['$2$', '$3$', '$4$', '$6$'],
      answer: '$3$',
      explanation: '기울기 = $\\frac{8 - 2}{3 - 1} = \\frac{6}{2} = 3$',
    },
    {
      id: 'g2d25-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: '$y = -\\frac{2}{3}x + 4$의 기울기를 구하시오. (분수로 답하시오)',
      answer: '-2/3',
      explanation: '$y = ax + b$에서 $a = -\\frac{2}{3}$이 기울기입니다.',
    },
    {
      id: 'g2d25-p3',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '다음 중 오른쪽 아래로 내려가는 그래프는?',
      options: ['$y = 2x + 1$', '$y = x$', '$y = -3x + 2$', '$y = \\frac{1}{2}x - 4$'],
      answer: '$y = -3x + 2$',
      explanation: '기울기가 음수이면 오른쪽 아래로 내려갑니다.\n$y = -3x + 2$의 기울기 $a = -3 < 0$',
    },
    {
      id: 'g2d25-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question: '기울기가 $2$이고 점 $(3, 5)$를 지나는 일차함수의 $y$절편을 구하시오.',
      answer: '-1',
      explanation: '$y = 2x + b$에 $(3, 5)$를 대입:\n$5 = 2(3) + b$\n$5 = 6 + b$\n$b = -1$\n\n$y = 2x - 1$이고, $y$절편은 $-1$',
    },
    {
      id: 'g2d25-p5',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$y = 3x - 1$에 평행하고 점 $(0, 4)$를 지나는 직선의 식은?',
      options: ['$y = 3x + 4$', '$y = 4x + 3$', '$y = -3x + 4$', '$y = 3x - 4$'],
      answer: '$y = 3x + 4$',
      explanation: '평행하므로 기울기 = $3$\n점 $(0, 4)$를 지나므로 $y$절편 = $4$\n\n$y = 3x + 4$',
    },
    {
      id: 'g2d25-p6',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '세 점 $(-1, 5)$, $(1, 1)$, $(a, -5)$가 한 직선 위에 있을 때, $a$의 값은?',
      options: ['$3$', '$4$', '$5$', '$6$'],
      answer: '$4$',
      explanation: '$(-1, 5)$와 $(1, 1)$의 기울기: $\\frac{1-5}{1-(-1)} = \\frac{-4}{2} = -2$\n\n$(1, 1)$과 $(a, -5)$의 기울기도 $-2$:\n$\\frac{-5 - 1}{a - 1} = -2$\n$\\frac{-6}{a - 1} = -2$\n$-6 = -2(a - 1)$\n$-6 = -2a + 2$\n$2a = 8$ → $a = 4$',
    },
  ],
  realLifeExample: '산을 오를 때 "경사도 15%"라는 표지판은 수평 100 m 갈 때 높이가 15 m 올라간다는 뜻입니다. 이것이 바로 기울기! $\\frac{15}{100} = 0.15$. 기울기가 클수록 가파른 오르막이고, 기울기가 음수면 내리막길입니다.',
};

export default dayContent;
