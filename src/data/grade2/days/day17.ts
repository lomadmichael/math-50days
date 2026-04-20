import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 17,
  part: 3,
  title: '연립일차방정식의 뜻',
  subtitle: '미지수가 2개인 일차방정식과 연립방정식을 이해하자!',
  lectures: [],
  concepts: [
    {
      id: 'g2d17-c1',
      title: '미지수가 2개인 일차방정식',
      content: '$ax + by + c = 0$ ($a \\neq 0$, $b \\neq 0$) 꼴의 방정식을 **미지수가 2개인 일차방정식**이라 합니다.\n\n예: $x + y = 5$, $2x - 3y = 7$\n\n이 방정식의 해: 방정식을 참이 되게 하는 $x$, $y$의 값의 쌍\n$x + y = 5$의 해: $(1, 4)$, $(2, 3)$, $(0, 5)$, ... → **무수히 많다!**',
      type: 'definition',
    },
    {
      id: 'g2d17-c2',
      title: '연립일차방정식이란?',
      content: '미지수가 2개인 일차방정식 2개를 한 쌍으로 묶은 것을 **연립일차방정식**(연립방정식)이라 합니다.\n\n$\\begin{cases} x + y = 5 \\\\ x - y = 1 \\end{cases}$\n\n연립방정식의 해: 두 방정식을 **동시에** 만족하는 $x$, $y$의 값의 쌍\n\n$x = 3$, $y = 2$일 때:\n$3 + 2 = 5$ ✓, $3 - 2 = 1$ ✓\n→ 해: $x = 3$, $y = 2$',
      type: 'definition',
    },
    {
      id: 'g2d17-c3',
      title: '해가 주어진 연립방정식',
      content: '연립방정식의 해가 주어지면 그 값을 대입하여 미지의 계수를 구할 수 있습니다.\n\n$\\begin{cases} ax + 2y = 8 \\\\ x - by = 5 \\end{cases}$의 해가 $x = 2$, $y = 1$일 때,\n\n$2a + 2 = 8$ → $a = 3$\n$2 - b = 5$ → $b = -3$',
      type: 'example',
    },
  ],
  problems: [
    {
      id: 'g2d17-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '다음 중 미지수가 2개인 일차방정식은?',
      options: ['$x^2 + y = 3$', '$xy = 6$', '$3x - 2y = 5$', '$\\frac{1}{x} + y = 2$'],
      answer: '$3x - 2y = 5$',
      explanation: '미지수가 2개인 일차방정식은 $x$, $y$의 차수가 모두 1이어야 합니다.\n$x^2$은 2차, $xy$는 2차, $\\frac{1}{x}$는 $x^{-1}$이므로 일차가 아닙니다.',
    },
    {
      id: 'g2d17-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: '$x + 2y = 7$을 만족하는 자연수 해 $(x, y)$의 개수를 구하시오.',
      answer: '3',
      explanation: '$x = 7 - 2y$에서 $x$가 자연수이려면:\n$y = 1$ → $x = 5$ ✓\n$y = 2$ → $x = 3$ ✓\n$y = 3$ → $x = 1$ ✓\n$y = 4$ → $x = -1$ ✗\n\n$(5,1)$, $(3,2)$, $(1,3)$으로 **3개**',
    },
    {
      id: 'g2d17-p3',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '연립방정식 $\\begin{cases} x + y = 7 \\\\ x - y = 3 \\end{cases}$의 해는?',
      options: ['$x = 5, y = 2$', '$x = 4, y = 3$', '$x = 3, y = 4$', '$x = 2, y = 5$'],
      answer: '$x = 5, y = 2$',
      explanation: '두 식을 더하면: $2x = 10$ → $x = 5$\n$5 + y = 7$ → $y = 2$\n\n확인: $5 - 2 = 3$ ✓',
    },
    {
      id: 'g2d17-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question: '연립방정식 $\\begin{cases} ax + y = 7 \\\\ x + by = -1 \\end{cases}$의 해가 $x = 2$, $y = -1$일 때, $a + b$의 값을 구하시오.',
      answer: '7',
      explanation: '$2a + (-1) = 7$ → $2a = 8$ → $a = 4$\n$2 + b(-1) = -1$ → $-b = -3$ → $b = 3$\n\n$a + b = 4 + 3 = 7$',
    },
    {
      id: 'g2d17-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '연립방정식 $\\begin{cases} x - y = 3 \\\\ 2x - 2y = 6 \\end{cases}$의 해는?',
      options: ['해가 하나', '해가 없다', '해가 무수히 많다', '$x = 3, y = 0$'],
      answer: '해가 무수히 많다',
      explanation: '두 번째 식을 2로 나누면 $x - y = 3$으로, 첫 번째 식과 같습니다.\n\n두 방정식이 사실상 같으므로 해가 무수히 많습니다.\n예: $(3,0)$, $(4,1)$, $(5,2)$, ...',
    },
  ],
  realLifeExample: '과일 가게에서 사과 $x$개와 배 $y$개를 샀습니다. 총 개수가 10개이고($x + y = 10$), 총 금액이 15,000원($1000x + 2000y = 15000$)이라면, 연립방정식을 풀어 사과 5개, 배 5개라는 것을 알 수 있습니다!',
};

export default dayContent;
