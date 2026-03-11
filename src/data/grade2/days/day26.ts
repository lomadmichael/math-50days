import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 26,
  part: 4,
  title: '일차함수의 식 구하기',
  subtitle: '조건이 주어졌을 때 일차함수의 식을 구하는 방법을 배워 보자!',
  lectures: [],
  concepts: [
    {
      id: 'g2d26-c1',
      title: '기울기와 y절편이 주어진 경우',
      content: '기울기가 $a$이고 $y$절편이 $b$이면\\n$$y = ax + b$$\\n에 바로 대입하면 됩니다.\\n\\n예) 기울기 $2$, $y$절편 $-3$ → $y = 2x - 3$',
      type: 'formula',
    },
    {
      id: 'g2d26-c2',
      title: '기울기와 한 점이 주어진 경우',
      content: '기울기가 $a$이고 점 $(x_1, y_1)$을 지나면\\n$$y = ax + b$$\\n에 $x_1$, $y_1$을 대입하여 $b$를 구합니다.\\n\\n예) 기울기 $3$, 점 $(1, 5)$를 지남\\n$5 = 3 \\\\times 1 + b$ → $b = 2$ → $y = 3x + 2$',
      type: 'formula',
    },
    {
      id: 'g2d26-c3',
      title: '두 점이 주어진 경우',
      content: '두 점 $(x_1, y_1)$, $(x_2, y_2)$가 주어지면\\n① 기울기 $a = \\\\frac{y_2 - y_1}{x_2 - x_1}$을 구한다\\n② $y = ax + b$에 한 점을 대입하여 $b$를 구한다\\n\\n예) $(1, 3)$, $(3, 7)$ → $a = \\\\frac{7-3}{3-1} = 2$ → $y = 2x + b$\\n$3 = 2 \\\\times 1 + b$ → $b = 1$ → $y = 2x + 1$',
      type: 'formula',
    },
    {
      id: 'g2d26-c4',
      title: 'x절편과 y절편이 주어진 경우',
      content: '$x$절편이 $p$이면 점 $(p, 0)$, $y$절편이 $q$이면 점 $(0, q)$를 지납니다.\\n두 점 $(p, 0)$과 $(0, q)$로 기울기를 구하면:\\n$$a = \\\\frac{q - 0}{0 - p} = -\\\\frac{q}{p}$$\\n따라서 $y = -\\\\frac{q}{p}x + q$',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'g2d26-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '기울기가 $-2$이고 $y$절편이 $5$인 일차함수의 식은?',
      options: ['$y = 2x + 5$', '$y = -2x + 5$', '$y = -2x - 5$', '$y = 5x - 2$'],
      answer: '$y = -2x + 5$',
      explanation: '기울기 $a = -2$, $y$절편 $b = 5$이므로\\n$y = ax + b = -2x + 5$',
    },
    {
      id: 'g2d26-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: '기울기가 $3$이고 점 $(2, 1)$을 지나는 일차함수의 식을 $y = ax + b$ 형태로 구하시오.',
      answer: 'y = 3x - 5',
      explanation: '$y = 3x + b$에 $(2, 1)$ 대입:\\n$1 = 3 \\\\times 2 + b$\\n$1 = 6 + b$ → $b = -5$\\n\\n따라서 $y = 3x - 5$',
    },
    {
      id: 'g2d26-p3',
      type: 'short-answer',
      difficulty: 'applied',
      question: '두 점 $(1, -1)$, $(4, 5)$를 지나는 일차함수의 식을 구하시오.',
      answer: 'y = 2x - 3',
      explanation: '기울기 $a = \\\\frac{5 - (-1)}{4 - 1} = \\\\frac{6}{3} = 2$\\n\\n$y = 2x + b$에 $(1, -1)$ 대입:\\n$-1 = 2 \\\\times 1 + b$ → $b = -3$\\n\\n따라서 $y = 2x - 3$',
    },
    {
      id: 'g2d26-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$x$절편이 $3$이고 $y$절편이 $-6$인 일차함수의 식은?',
      options: ['$y = 2x - 6$', '$y = -2x + 6$', '$y = 2x + 6$', '$y = -2x - 6$'],
      answer: '$y = 2x - 6$',
      explanation: '두 점 $(3, 0)$, $(0, -6)$을 지남\\n기울기 $a = \\\\frac{-6 - 0}{0 - 3} = \\\\frac{-6}{-3} = 2$\\n$y$절편이 $-6$이므로 $y = 2x - 6$',
    },
    {
      id: 'g2d26-p5',
      type: 'short-answer',
      difficulty: 'challenge',
      question: '일차함수 $y = ax + b$의 그래프가 점 $(-2, 7)$을 지나고 $y = 3x + 1$의 그래프와 $y$축 위에서 만난다. $a + b$의 값을 구하시오.',
      answer: '-2',
      explanation: '$y = 3x + 1$의 $y$절편은 $1$이므로 두 그래프가 $y$축 위의 점 $(0, 1)$에서 만남\\n\\n$b = 1$이고 점 $(-2, 7)$을 지나므로:\\n$7 = a \\\\times (-2) + 1$\\n$6 = -2a$ → $a = -3$\\n\\n$a + b = -3 + 1 = -2$',
    },
  ],
  realLifeExample: '택시 요금을 일차함수로 나타낼 수 있어요! 기본요금 4,800원에 거리 1km당 1,000원 추가라면 y = 1000x + 4800 이 됩니다. 요금표의 두 지점 정보만 알면 일차함수 식을 세워서 임의 거리의 요금을 계산할 수 있답니다.',
};

export default dayContent;
