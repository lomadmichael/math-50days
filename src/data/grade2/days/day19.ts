import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 19,
  part: 3,
  title: '연립방정식 - 대입법',
  subtitle: '한 식을 다른 식에 대입하여 연립방정식을 풀자!',
  lectures: [],
  concepts: [
    {
      id: 'g2d19-c1',
      title: '대입법이란?',
      content: '한 방정식을 **한 미지수에 대해 정리**한 후, 다른 방정식에 **대입**하여 푸는 방법입니다.\n\n$\\\\begin{cases} y = 2x + 1 \\\\cdots ① \\\\\\\\ 3x + y = 11 \\\\cdots ② \\\\end{cases}$\n\n①을 ②에 대입: $3x + (2x + 1) = 11$\n$5x + 1 = 11$\n$x = 2$\n①에 대입: $y = 2(2) + 1 = 5$',
      type: 'definition',
    },
    {
      id: 'g2d19-c2',
      title: '대입법 풀이 순서',
      content: '**① 한 식을 한 미지수에 대해 정리**\n  → 계수가 1 또는 -1인 미지수를 정리하면 편합니다.\n\n**② 정리한 식을 다른 식에 대입**\n\n**③ 미지수 1개인 방정식을 풀기**\n\n**④ 구한 값을 대입하여 나머지 구하기**\n\n**⑤ 검산하기**',
      type: 'formula',
    },
    {
      id: 'g2d19-c3',
      title: '대입법이 편한 경우',
      content: '다음과 같은 경우 대입법이 가감법보다 편합니다:\n\n- 한 미지수의 계수가 1 또는 -1인 경우\n  $\\\\begin{cases} x = 3y - 2 \\\\\\\\ 2x + y = 10 \\\\end{cases}$\n\n- 이미 한 미지수에 대해 정리된 경우\n  $\\\\begin{cases} y = -x + 5 \\\\\\\\ y = 2x - 1 \\\\end{cases}$\n\n두 번째의 경우 $-x + 5 = 2x - 1$ → $x = 2$, $y = 3$',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'g2d19-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$\\\\begin{cases} y = x + 3 \\\\\\\\ 2x + y = 12 \\\\end{cases}$의 해는?',
      options: ['$x = 3, y = 6$', '$x = 4, y = 7$', '$x = 2, y = 5$', '$x = 5, y = 8$'],
      answer: '$x = 3, y = 6$',
      explanation: '①을 ②에 대입: $2x + (x + 3) = 12$\n$3x + 3 = 12$\n$3x = 9$ → $x = 3$\n$y = 3 + 3 = 6$',
    },
    {
      id: 'g2d19-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: '$\\\\begin{cases} x = 2y - 1 \\\\\\\\ 3x + 4y = 17 \\\\end{cases}$에서 $y$의 값을 구하시오.',
      answer: '2',
      explanation: '①을 ②에 대입: $3(2y - 1) + 4y = 17$\n$6y - 3 + 4y = 17$\n$10y = 20$ → $y = 2$\n$x = 2(2) - 1 = 3$',
    },
    {
      id: 'g2d19-p3',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$\\\\begin{cases} y = -2x + 7 \\\\\\\\ y = x - 2 \\\\end{cases}$의 해는?',
      options: ['$x = 3, y = 1$', '$x = 2, y = 3$', '$x = 1, y = 5$', '$x = 4, y = -1$'],
      answer: '$x = 3, y = 1$',
      explanation: '두 식의 $y$가 같으므로:\n$-2x + 7 = x - 2$\n$-3x = -9$ → $x = 3$\n$y = 3 - 2 = 1$',
    },
    {
      id: 'g2d19-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question: '$\\\\begin{cases} 2x - y = 5 \\\\\\\\ x + 3y = 8 \\\\end{cases}$를 대입법으로 풀 때, $x$의 값을 구하시오.',
      answer: '23/7',
      explanation: '①에서 $y = 2x - 5$\n②에 대입: $x + 3(2x - 5) = 8$\n$x + 6x - 15 = 8$\n$7x = 23$\n$x = \\\\frac{23}{7}$',
    },
    {
      id: 'g2d19-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '$\\\\begin{cases} 3x + 2y = 7 \\\\\\\\ 6x + 4y = 14 \\\\end{cases}$의 해는?',
      options: ['$x = 1, y = 2$', '해가 없다', '해가 무수히 많다', '$x = 3, y = -1$'],
      answer: '해가 무수히 많다',
      explanation: '② $\\\\div 2$: $3x + 2y = 7$로 ①과 같습니다.\n\n두 식이 동일하므로 해가 무수히 많습니다.\n$y = \\\\frac{7 - 3x}{2}$를 만족하는 모든 $(x, y)$가 해입니다.',
    },
  ],
  realLifeExample: '형과 동생의 나이의 합이 30살이고, 형이 동생보다 4살 많다면? $\\\\begin{cases} x + y = 30 \\\\\\\\ x = y + 4 \\\\end{cases}$에서 대입법으로 $(y + 4) + y = 30$ → $y = 13$, $x = 17$. 형은 17살, 동생은 13살입니다!',
};

export default dayContent;
