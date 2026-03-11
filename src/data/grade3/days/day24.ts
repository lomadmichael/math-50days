import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 24,
  part: 4,
  title: '이차함수 $y=a(x-p)^2+q$의 그래프',
  subtitle: '꼭짓점이 $(p, q)$인 포물선',
  lectures: [],
  concepts: [
    {
      id: 'g3d24-c1',
      title: '$y = ax^2$의 평행이동',
      content: '$y = ax^2$의 그래프를\\n$x$축 방향으로 $p$만큼, $y$축 방향으로 $q$만큼 평행이동하면\\n$y = a(x-p)^2 + q$\\n\\n주의: $x$축 방향은 부호 반대! $(x-p)$에서 $+p$만큼 이동',
      type: 'formula',
    },
    {
      id: 'g3d24-c2',
      title: '$y = a(x-p)^2 + q$의 성질',
      content: '꼭짓점: $(p, q)$\\n대칭축: 직선 $x = p$\\n\\n$a > 0$: 아래로 볼록, $y$의 최솟값 = $q$\\n$a < 0$: 위로 볼록, $y$의 최댓값 = $q$\\n\\n$|a|$의 크기: 그래프의 폭 결정 (기본형과 동일)',
      type: 'formula',
    },
    {
      id: 'g3d24-c3',
      title: '단계별 이동 이해',
      content: '$y = 2x^2$ → $y = 2(x-3)^2$: $x$축 방향으로 $+3$ 이동\\n꼭짓점: $(0,0)$ → $(3,0)$\\n\\n$y = 2x^2$ → $y = 2x^2 + 5$: $y$축 방향으로 $+5$ 이동\\n꼭짓점: $(0,0)$ → $(0,5)$\\n\\n$y = 2(x-3)^2 + 5$: 꼭짓점 $(3, 5)$',
      type: 'example',
    },
    {
      id: 'g3d24-c4',
      title: '최댓값과 최솟값',
      content: '$a > 0$: $x = p$일 때 최솟값 $q$ (최댓값 없음)\\n$a < 0$: $x = p$일 때 최댓값 $q$ (최솟값 없음)\\n\\n예: $y = -3(x-1)^2 + 7$\\n$a = -3 < 0$이므로 $x = 1$일 때 최댓값 $7$',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'g3d24-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$y = 2(x-1)^2 + 3$의 꼭짓점의 좌표는?',
      options: ['$(1, 3)$', '$(-1, 3)$', '$(2, 3)$', '$(1, -3)$'],
      answer: '$(1, 3)$',
      explanation: '$y = a(x-p)^2 + q$에서 꼭짓점은 $(p, q)$이므로 $(1, 3)$입니다.',
    },
    {
      id: 'g3d24-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$y = -(x+2)^2 - 1$의 대칭축은?',
      options: ['$x = 2$', '$x = -2$', '$x = -1$', '$x = 1$'],
      answer: '$x = -2$',
      explanation: '$y = -(x-(-2))^2 - 1$이므로 대칭축은 $x = -2$입니다.',
    },
    {
      id: 'g3d24-p3',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$y = 3(x-2)^2 - 5$의 최솟값은?',
      options: ['$-5$', '$2$', '$3$', '$7$'],
      answer: '$-5$',
      explanation: '$a = 3 > 0$이므로 아래로 볼록이고, $x = 2$일 때 최솟값 $-5$를 가집니다.',
    },
    {
      id: 'g3d24-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$y = -2x^2$의 그래프를 $x$축 방향으로 $-3$, $y$축 방향으로 $4$만큼 이동하면?',
      options: ['$y = -2(x+3)^2 + 4$', '$y = -2(x-3)^2 + 4$', '$y = -2(x+3)^2 - 4$', '$y = -2(x-3)^2 - 4$'],
      answer: '$y = -2(x+3)^2 + 4$',
      explanation: '$x$축 방향 $-3$ → $(x-(-3)) = (x+3)$, $y$축 방향 $+4$이므로 $y = -2(x+3)^2 + 4$입니다.',
    },
    {
      id: 'g3d24-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '꼭짓점이 $(2, -3)$이고 점 $(4, 5)$를 지나는 이차함수의 식은?',
      options: ['$y = 2(x-2)^2 - 3$', '$y = (x-2)^2 - 3$', '$y = 3(x-2)^2 - 3$', '$y = \\\\frac{1}{2}(x-2)^2 - 3$'],
      answer: '$y = 2(x-2)^2 - 3$',
      explanation: '$y = a(x-2)^2 - 3$에 $(4, 5)$를 대입: $5 = 4a - 3$, $a = 2$. 따라서 $y = 2(x-2)^2 - 3$.',
    },
    {
      id: 'g3d24-p6',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '$y = -\\\\frac{1}{2}(x-4)^2 + 8$이 $x$축과 만나는 두 점 사이의 거리는?',
      options: ['$4$', '$8$', '$6$', '$10$'],
      answer: '$8$',
      explanation: '$y = 0$: $-\\\\frac{1}{2}(x-4)^2 + 8 = 0$, $(x-4)^2 = 16$, $x-4 = \\\\pm 4$, $x = 0$ 또는 $x = 8$. 거리 = $8 - 0 = 8$.',
    },
  ],
  realLifeExample: '농구에서 슛한 공의 궤적은 $y = -0.05(x-5)^2 + 4$와 같은 이차함수로 나타낼 수 있습니다. 꼭짓점 $(5, 4)$는 공이 가장 높은 지점(수평거리 5m, 높이 4m)을 의미하며, 골대의 위치와 높이에 맞게 슛 각도를 조절합니다.',
};

export default dayContent;
