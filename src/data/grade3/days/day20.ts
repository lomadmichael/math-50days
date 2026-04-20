import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 20,
  part: 3,
  title: '이차방정식 활용 (1)',
  subtitle: '수, 연속 정수 문제',
  lectures: [],
  concepts: [
    {
      id: 'g3d20-c1',
      title: '이차방정식 활용 문제 풀이 절차',
      content: '① 미지수 $x$를 정한다\\n② 문제의 조건을 이차방정식으로 세운다\\n③ 이차방정식을 푼다\\n④ 문제의 조건에 맞는 해를 선택한다\\n\\n주의: 이차방정식의 해가 반드시 문제의 답은 아닙니다!\\n조건 확인이 필수 (자연수, 양수 등)',
      type: 'tip',
    },
    {
      id: 'g3d20-c2',
      title: '연속 정수 문제',
      content: '연속하는 두 정수: $n$, $n+1$\\n연속하는 세 정수: $n-1$, $n$, $n+1$ (가운데를 기준으로)\\n연속하는 두 짝수: $2n$, $2n+2$\\n연속하는 두 홀수: $2n-1$, $2n+1$',
      type: 'definition',
    },
    {
      id: 'g3d20-c3',
      title: '수에 관한 문제 예시',
      content: '\"어떤 양수의 제곱에서 3을 빼면 그 수의 2배가 된다\"\\n$x^2 - 3 = 2x$ → $x^2 - 2x - 3 = 0$\\n$(x-3)(x+1) = 0$ → $x = 3$ 또는 $x = -1$\\n양수이므로 $x = 3$',
      type: 'example',
    },
  ],
  problems: [
    {
      id: 'g3d20-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '연속하는 두 자연수의 곱이 56일 때, 두 수는?',
      options: ['$6, 7$', '$7, 8$', '$8, 9$', '$4, 14$'],
      answer: '$7, 8$',
      explanation: '$n(n+1) = 56$, $n^2 + n - 56 = 0$, $(n+8)(n-7) = 0$에서 $n=7$ (자연수). 따라서 7과 8입니다.',
    },
    {
      id: 'g3d20-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '어떤 양수에 그 수보다 5 큰 수를 곱하면 36이다. 어떤 양수는?',
      options: ['$3$', '$4$', '$6$', '$9$'],
      answer: '$4$',
      explanation: '$x(x+5) = 36$, $x^2 + 5x - 36 = 0$, $(x+9)(x-4) = 0$에서 $x=4$ (양수)입니다.',
    },
    {
      id: 'g3d20-p3',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '연속하는 세 자연수의 제곱의 합이 50일 때, 세 수의 합은?',
      options: ['$9$', '$12$', '$15$', '$18$'],
      answer: '$12$',
      explanation: '$(n-1)^2 + n^2 + (n+1)^2 = 50$, $3n^2 + 2 = 50$, $n^2 = 16$, $n = 4$. 세 수는 3, 4, 5이고 합은 12입니다.',
    },
    {
      id: 'g3d20-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '어떤 수의 제곱이 그 수의 6배보다 7 크다. 이 수를 모두 구하면?',
      options: ['$7$', '$-1$', '$7, -1$', '$7, 1$'],
      answer: '$7, -1$',
      explanation: '$x^2 = 6x + 7$, $x^2 - 6x - 7 = 0$, $(x-7)(x+1) = 0$에서 $x = 7$ 또는 $x = -1$입니다.',
    },
    {
      id: 'g3d20-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '1부터 $n$까지 자연수의 합이 $\\frac{n(n+1)}{2} = 78$일 때, $n$의 값은?',
      options: ['$10$', '$11$', '$12$', '$13$'],
      answer: '$12$',
      explanation: '$n(n+1) = 156$, $n^2 + n - 156 = 0$, $(n+13)(n-12) = 0$에서 $n = 12$ (자연수)입니다.',
    },
    {
      id: 'g3d20-p6',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '연속하는 두 짝수의 곱이 168일 때, 큰 수는?',
      options: ['$12$', '$14$', '$16$', '$18$'],
      answer: '$14$',
      explanation: '$2n(2n+2) = 168$, $4n^2 + 4n - 168 = 0$, $n^2 + n - 42 = 0$, $(n+7)(n-6) = 0$에서 $n=6$. 두 수는 12, 14이고 큰 수는 14입니다.',
    },
  ],
  realLifeExample: '학교 운동장에 학생들이 모여 악수를 합니다. 모든 사람이 다른 모든 사람과 한 번씩 악수하여 총 45번의 악수가 이루어졌다면, $\\frac{n(n-1)}{2} = 45$에서 $n^2 - n - 90 = 0$, $(n-10)(n+9) = 0$으로 학생 수는 10명입니다.',
};

export default dayContent;
