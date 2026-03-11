import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 27,
  part: 4,
  title: '일차함수와 일차방정식의 관계',
  subtitle: '일차함수의 그래프와 일차방정식은 어떤 관계가 있을까?',
  lectures: [],
  concepts: [
    {
      id: 'g2d27-c1',
      title: '일차방정식과 일차함수의 관계',
      content: '일차방정식 $ax + by + c = 0$ ($b \\\\neq 0$)을 $y$에 대해 풀면\\n$$y = -\\\\frac{a}{b}x - \\\\frac{c}{b}$$\\n이것은 기울기 $-\\\\frac{a}{b}$, $y$절편 $-\\\\frac{c}{b}$인 일차함수입니다.\\n\\n즉, **일차방정식의 해의 집합 = 일차함수의 그래프**',
      type: 'definition',
    },
    {
      id: 'g2d27-c2',
      title: 'x = k 꼴의 그래프',
      content: '$x = k$ (상수)의 그래프는 점 $(k, 0)$을 지나고 **$y$축에 평행한 직선**입니다.\\n\\n• 이 직선 위의 모든 점은 $x$좌표가 $k$로 같음\\n• 기울기는 정의되지 않음 (수직선)\\n• 일차함수가 아님! ($y = ax + b$ 형태가 아니므로)',
      type: 'definition',
    },
    {
      id: 'g2d27-c3',
      title: 'y = k 꼴의 그래프',
      content: '$y = k$ (상수)의 그래프는 점 $(0, k)$를 지나고 **$x$축에 평행한 직선**입니다.\\n\\n• 이 직선 위의 모든 점은 $y$좌표가 $k$로 같음\\n• 기울기가 $0$인 직선\\n• $y = 0 \\\\cdot x + k$이므로 일차함수(상수함수)에 해당',
      type: 'definition',
    },
    {
      id: 'g2d27-c4',
      title: '일차방정식의 그래프 그리기 팁',
      content: '$ax + by + c = 0$의 그래프를 그릴 때:\\n① $x = 0$을 대입하여 $y$절편 구하기\\n② $y = 0$을 대입하여 $x$절편 구하기\\n③ 두 절편을 좌표평면에 찍고 연결!\\n\\n예) $2x + 3y - 6 = 0$\\n$x = 0$: $y = 2$ → $(0, 2)$\\n$y = 0$: $x = 3$ → $(3, 0)$',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'g2d27-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '일차방정식 $2x - y + 4 = 0$을 일차함수로 나타내면?',
      options: ['$y = 2x + 4$', '$y = -2x + 4$', '$y = 2x - 4$', '$y = -2x - 4$'],
      answer: '$y = 2x + 4$',
      explanation: '$2x - y + 4 = 0$에서 $y$에 대해 풀면:\\n$-y = -2x - 4$\\n$y = 2x + 4$',
    },
    {
      id: 'g2d27-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '다음 중 $y$축에 평행한 직선의 방정식은?',
      options: ['$y = 3$', '$x = -2$', '$y = x$', '$x + y = 0$'],
      answer: '$x = -2$',
      explanation: '$y$축에 평행한 직선은 $x = k$ 꼴입니다.\\n$x = -2$는 $y$축에 평행하고 점 $(-2, 0)$을 지나는 수직선입니다.',
    },
    {
      id: 'g2d27-p3',
      type: 'short-answer',
      difficulty: 'basic',
      question: '일차방정식 $3x + 2y - 12 = 0$의 그래프의 $x$절편을 구하시오.',
      answer: '4',
      explanation: '$x$절편은 $y = 0$을 대입:\\n$3x + 2 \\\\times 0 - 12 = 0$\\n$3x = 12$ → $x = 4$\\n\\n따라서 $x$절편은 $4$',
    },
    {
      id: 'g2d27-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question: '직선 $ax + 2y - 8 = 0$이 점 $(2, 1)$을 지날 때, 상수 $a$의 값을 구하시오.',
      answer: '3',
      explanation: '점 $(2, 1)$을 대입:\\n$a \\\\times 2 + 2 \\\\times 1 - 8 = 0$\\n$2a + 2 - 8 = 0$\\n$2a = 6$ → $a = 3$',
    },
    {
      id: 'g2d27-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '직선 $2x - 3y + 6 = 0$과 $x$축, $y$축으로 둘러싸인 삼각형의 넓이는?',
      options: ['$3$', '$4$', '$6$', '$9$'],
      answer: '$3$',
      explanation: '$x$절편: $y = 0$ 대입 → $2x + 6 = 0$ → $x = -3$\\n$y$절편: $x = 0$ 대입 → $-3y + 6 = 0$ → $y = 2$\\n\\n밑변 $= |-3| = 3$, 높이 $= |2| = 2$\\n넓이 $= \\\\frac{1}{2} \\\\times 3 \\\\times 2 = 3$',
    },
  ],
  realLifeExample: '온도 단위 변환식 F = 1.8C + 32는 섭씨(C)와 화씨(F)의 관계를 나타내는 일차함수예요. 이것을 일차방정식으로 쓰면 1.8C - F + 32 = 0이 됩니다. 방정식과 함수는 같은 관계를 다른 방식으로 표현한 것이죠!',
};

export default dayContent;
