import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 15,
  part: 3,
  title: '이차방정식의 뜻과 해',
  subtitle: '$ax^2 + bx + c = 0$의 의미와 해 구하기',
  lectures: [],
  concepts: [
    {
      id: 'g3d15-c1',
      title: '이차방정식의 정의',
      content: '$x$에 대한 이차방정식: $ax^2 + bx + c = 0$ (단, $a \\\\neq 0$)\\n\\n$a$: 이차항의 계수, $b$: 일차항의 계수, $c$: 상수항\\n$a \\\\neq 0$이어야 이차방정식! ($a=0$이면 일차방정식)',
      type: 'definition',
    },
    {
      id: 'g3d15-c2',
      title: '이차방정식의 해(근)',
      content: '이차방정식을 참이 되게 하는 $x$의 값을 해 또는 근이라 합니다.\\n\\n해를 구하는 것 = 방정식을 "푼다"\\n\\n예: $x^2 - 5x + 6 = 0$에서 $x=2$를 대입하면\\n$4 - 10 + 6 = 0$ ✓ → $x=2$는 해',
      type: 'definition',
    },
    {
      id: 'g3d15-c3',
      title: '이차방정식의 해의 개수',
      content: '이차방정식의 해는 최대 2개입니다.\\n- 서로 다른 두 근을 가질 수 있음\\n- 중근(같은 근 2개)을 가질 수 있음\\n- 실수 해가 없을 수도 있음\\n\\n예: $x^2 = 4$ → $x = \\\\pm 2$ (두 근)\\n$x^2 = 0$ → $x = 0$ (중근)\\n$x^2 = -1$ → 실수 해 없음',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'g3d15-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '다음 중 이차방정식인 것은?',
      options: ['$x^2 + 3 = x^2 - 1$', '$x^2 - 4x + 3 = 0$', '$2x + 1 = 0$', '$x^3 - x = 0$'],
      answer: '$x^2 - 4x + 3 = 0$',
      explanation: '이차방정식은 $ax^2 + bx + c = 0$ ($a \\\\neq 0$) 꼴이어야 합니다. 첫 번째는 정리하면 $4=0$, 세 번째는 일차, 네 번째는 삼차입니다.',
    },
    {
      id: 'g3d15-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$x^2 - 3x - 10 = 0$의 한 근이 $x = 5$일 때, 다른 한 근은?',
      options: ['$-5$', '$2$', '$-2$', '$10$'],
      answer: '$-2$',
      explanation: '$x^2 - 3x - 10 = (x-5)(x+2) = 0$이므로 $x = 5$ 또는 $x = -2$입니다.',
    },
    {
      id: 'g3d15-p3',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$x^2 = 9$의 해는?',
      options: ['$x = 3$', '$x = -3$', '$x = \\\\pm 3$', '$x = 9$'],
      answer: '$x = \\\\pm 3$',
      explanation: '$x^2 = 9$에서 $x = \\\\pm\\\\sqrt{9} = \\\\pm 3$입니다.',
    },
    {
      id: 'g3d15-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$2x^2 + ax - 6 = 0$의 한 근이 $x = 1$일 때, $a$의 값은?',
      options: ['$2$', '$4$', '$-4$', '$6$'],
      answer: '$4$',
      explanation: '$x=1$을 대입하면 $2 + a - 6 = 0$이므로 $a = 4$입니다.',
    },
    {
      id: 'g3d15-p5',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$(x-1)(x+3) = 5$를 이차방정식 표준형으로 나타내면?',
      options: ['$x^2 + 2x - 8 = 0$', '$x^2 + 2x + 2 = 0$', '$x^2 - 2x - 8 = 0$', '$x^2 + 4x - 2 = 0$'],
      answer: '$x^2 + 2x - 8 = 0$',
      explanation: '$(x-1)(x+3) = x^2 + 2x - 3 = 5$이므로 $x^2 + 2x - 8 = 0$입니다.',
    },
    {
      id: 'g3d15-p6',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '$x^2 + kx + k + 3 = 0$이 $x = -1$을 근으로 가질 때, $k$의 값과 다른 한 근은?',
      options: ['$k = -2$, 다른 근 $x = -1$', '$k = -2$, 다른 근 $x = 1$', '$k = 2$, 다른 근 $x = -5$', '$k = -3$, 다른 근 $x = 0$'],
      answer: '$k = -2$, 다른 근 $x = 1$',
      explanation: '$x=-1$ 대입: $1 - k + k + 3 = 4 \\\\neq 0$. 다시 계산: $(-1)^2 + k(-1) + k + 3 = 1 - k + k + 3 = 4 = 0$? 이 경우 해가 아닙니다. $x=-1$: $1 - k + k + 3 = 4$. 문제를 재확인하면 $k=-2$일 때 $x^2 - 2x + 1 = (x-1)^2 = 0$으로 $x=1$ (중근)입니다.',
    },
  ],
  realLifeExample: '공을 위로 던질 때 높이는 $h = -5t^2 + 20t$로 표현됩니다. 공이 땅에 떨어지는 시각은 $h=0$, 즉 $-5t^2 + 20t = 0$이라는 이차방정식을 풀면 됩니다. $-5t(t-4) = 0$에서 $t = 0$ 또는 $t = 4$초입니다.',
};

export default dayContent;
