import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 12,
  part: 2,
  title: '인수분해 (2)',
  subtitle: '$x^2 + (a+b)x + ab$ 꼴의 인수분해',
  lectures: [],
  concepts: [
    {
      id: 'g3d12-c1',
      title: '$x^2 + (a+b)x + ab$ 인수분해',
      content: '$x^2 + (a+b)x + ab = (x+a)(x+b)$\\n\\n합이 $x$의 계수, 곱이 상수항인 두 수를 찾으면 됩니다.\\n\\n예: $x^2 + 7x + 12$에서 합이 7, 곱이 12인 두 수 → 3, 4\\n$\\\\therefore x^2 + 7x + 12 = (x+3)(x+4)$',
      type: 'formula',
    },
    {
      id: 'g3d12-c2',
      title: '두 수 찾기 전략',
      content: '① 상수항의 부호가 $+$: 두 수의 부호가 같다\\n  → $x$의 계수가 $+$이면 둘 다 $+$, $-$이면 둘 다 $-$\\n② 상수항의 부호가 $-$: 두 수의 부호가 다르다\\n  → 절댓값이 큰 수의 부호가 $x$의 계수의 부호와 같다',
      type: 'tip',
    },
    {
      id: 'g3d12-c3',
      title: '다양한 예제',
      content: '$x^2 - 5x + 6$: 합 $-5$, 곱 $6$ → $-2, -3$ → $(x-2)(x-3)$\\n$x^2 + x - 12$: 합 $1$, 곱 $-12$ → $4, -3$ → $(x+4)(x-3)$\\n$x^2 - 3x - 10$: 합 $-3$, 곱 $-10$ → $-5, 2$ → $(x-5)(x+2)$',
      type: 'example',
    },
  ],
  problems: [
    {
      id: 'g3d12-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$x^2 + 5x + 6$을 인수분해하면?',
      options: ['$(x+1)(x+6)$', '$(x+2)(x+3)$', '$(x+5)(x+1)$', '$(x-2)(x-3)$'],
      answer: '$(x+2)(x+3)$',
      explanation: '합이 5, 곱이 6인 두 수는 2와 3이므로 $(x+2)(x+3)$입니다.',
    },
    {
      id: 'g3d12-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$x^2 - 7x + 10$을 인수분해하면?',
      options: ['$(x-1)(x-10)$', '$(x-2)(x-5)$', '$(x+2)(x-5)$', '$(x-7)(x+10)$'],
      answer: '$(x-2)(x-5)$',
      explanation: '합이 $-7$, 곱이 $10$인 두 수는 $-2$와 $-5$이므로 $(x-2)(x-5)$입니다.',
    },
    {
      id: 'g3d12-p3',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$x^2 + 2x - 15$를 인수분해하면?',
      options: ['$(x+3)(x-5)$', '$(x-3)(x+5)$', '$(x+15)(x-1)$', '$(x+1)(x-15)$'],
      answer: '$(x-3)(x+5)$',
      explanation: '합이 2, 곱이 $-15$인 두 수는 $-3$과 $5$이므로 $(x-3)(x+5)$입니다.',
    },
    {
      id: 'g3d12-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$x^2 - x - 20$을 인수분해하면?',
      options: ['$(x-4)(x+5)$', '$(x+4)(x-5)$', '$(x-10)(x+2)$', '$(x+10)(x-2)$'],
      answer: '$(x+4)(x-5)$',
      explanation: '합이 $-1$, 곱이 $-20$인 두 수는 $4$와 $-5$이므로 $(x+4)(x-5)$입니다.',
    },
    {
      id: 'g3d12-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '$x^2 - 11x + 24$를 인수분해하면?',
      options: ['$(x-3)(x-8)$', '$(x-4)(x-6)$', '$(x-2)(x-12)$', '$(x-1)(x-24)$'],
      answer: '$(x-3)(x-8)$',
      explanation: '합이 $-11$, 곱이 $24$인 두 수는 $-3$과 $-8$이므로 $(x-3)(x-8)$입니다.',
    },
    {
      id: 'g3d12-p6',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '$(x-1)(x+3) + k$가 완전제곱식이 되려면 $k$의 값은?',
      options: ['$1$', '$4$', '$-3$', '$7$'],
      answer: '$4$',
      explanation: '$(x-1)(x+3) = x^2 + 2x - 3$이므로 $x^2 + 2x - 3 + k = x^2 + 2x + (k-3)$. 완전제곱식이 되려면 $k-3 = 1$이므로 $k = 4$. 확인: $x^2 + 2x + 1 = (x+1)^2$.',
    },
  ],
  realLifeExample: '직사각형의 넓이가 $x^2 + 7x + 12$일 때, 인수분해하면 $(x+3)(x+4)$이므로 가로가 $(x+3)$, 세로가 $(x+4)$인 직사각형입니다. $x=5$이면 가로 8m, 세로 9m인 방이 됩니다.',
};

export default dayContent;
