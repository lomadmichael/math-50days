import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 25,
  part: 5,
  title: '정비례와 반비례',
  subtitle: '두 양 사이의 관계를 파악하자! 중학교 좌표와 그래프의 기초가 되는 핵심 개념이에요.',
  lectures: [],
  concepts: [
    {
      id: 'f5d25-c1',
      title: '정비례란?',
      content: '한 양이 $2$배, $3$배, ... 될 때 다른 양도 $2$배, $3$배, ... 되는 관계\n\n**정비례 관계:** $y = ax$ ($a \\neq 0$)\n\n예: 속력이 $60$km/h일 때\n- $1$시간 → $60$km\n- $2$시간 → $120$km\n- $3$시간 → $180$km\n\n$y = 60x$ (거리 $=$ 속력 $\\times$ 시간)\n\n**특징:** $\\frac{y}{x} = a$ (일정한 값)',
      type: 'definition',
    },
    {
      id: 'f5d25-c2',
      title: '반비례란?',
      content: '한 양이 $2$배, $3$배, ... 될 때 다른 양이 $\\frac{1}{2}$배, $\\frac{1}{3}$배, ... 되는 관계\n\n**반비례 관계:** $y = \\frac{a}{x}$ 또는 $xy = a$ ($a \\neq 0$)\n\n예: 넓이가 $24$cm$^2$인 직사각형\n- 가로 $1$cm → 세로 $24$cm\n- 가로 $2$cm → 세로 $12$cm\n- 가로 $3$cm → 세로 $8$cm\n- 가로 $4$cm → 세로 $6$cm\n\n$xy = 24$ (가로 $\\times$ 세로 $=$ 넓이)\n\n**특징:** $x \\times y = a$ (일정한 값)',
      type: 'definition',
    },
    {
      id: 'f5d25-c3',
      title: '정비례·반비례 구별법',
      content: '**정비례 확인:** $\\frac{y}{x}$가 항상 같은 값 → 정비례\n\n| $x$ | $1$ | $2$ | $3$ | $4$ |\n|---|---|---|---|---|\n| $y$ | $5$ | $10$ | $15$ | $20$ |\n\n$\\frac{y}{x} = 5$ (항상 같음) → 정비례 ($y = 5x$)\n\n**반비례 확인:** $x \\times y$가 항상 같은 값 → 반비례\n\n| $x$ | $1$ | $2$ | $3$ | $6$ |\n|---|---|---|---|---|\n| $y$ | $12$ | $6$ | $4$ | $2$ |\n\n$x \\times y = 12$ (항상 같음) → 반비례 ($y = \\frac{12}{x}$)',
      type: 'tip',
    },
    {
      id: 'f5d25-c4',
      title: '좌표 평면 미리보기',
      content: '정비례와 반비례는 **좌표 평면** 위에 그래프로 나타낼 수 있습니다.\n\n**정비례 그래프:** 원점을 지나는 **직선**\n$y = 2x$ → $(1, 2), (2, 4), (3, 6)$을 지나는 직선\n\n**반비례 그래프:** 원점을 지나지 않는 **곡선** (쌍곡선)\n$y = \\frac{6}{x}$ → $(1, 6), (2, 3), (3, 2), (6, 1)$을 지나는 곡선\n\n중학교에서 이 그래프를 자세히 배웁니다!',
      type: 'formula',
    },
  ],
  problems: [
    {
      id: 'fd25-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$y = 3x$일 때, $x = 5$이면 $y$의 값은?',
      options: ['$8$', '$12$', '$15$', '$18$'],
      answer: '$15$',
      explanation: '$y = 3x = 3 \\times 5 = 15$',
    },
    {
      id: 'fd25-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: '$xy = 36$일 때, $x = 9$이면 $y$의 값을 구하시오.',
      answer: '4',
      explanation: '$xy = 36$에서 $9 \\times y = 36$\n$y = 4$',
    },
    {
      id: 'fd25-p3',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '다음 중 반비례 관계인 것은?',
      options: [
        '속력과 거리',
        '가로와 세로 (넓이 일정)',
        '시간과 거리 (속력 일정)',
        '개수와 전체 가격 (단가 일정)',
      ],
      answer: '가로와 세로 (넓이 일정)',
      explanation: '넓이가 일정할 때: 가로 $\\times$ 세로 $=$ 넓이 (일정)\n→ $xy = k$ → 반비례\n\n나머지는 모두 정비례 관계입니다.',
    },
    {
      id: 'fd25-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$y$가 $x$에 정비례하고, $x = 4$일 때 $y = 12$입니다. $x = 7$일 때 $y$의 값은?',
      options: ['$15$', '$18$', '$21$', '$24$'],
      answer: '$21$',
      explanation: '$y = ax$에서 $12 = a \\times 4$, $a = 3$\n\n$y = 3x$이므로 $x = 7$일 때\n$y = 3 \\times 7 = 21$',
    },
    {
      id: 'fd25-p5',
      type: 'short-answer',
      difficulty: 'applied',
      question: '$12$명이 $6$일 걸리는 일을 $8$명이 하면 며칠 걸리는지 구하시오.',
      answer: '9',
      explanation: '사람 수와 일수는 반비례 관계입니다.\n\n$12 \\times 6 = 8 \\times x$\n$72 = 8x$\n$x = 9$일',
    },
    {
      id: 'fd25-p6',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '$y$가 $x$에 반비례하고, $x = 3$일 때 $y = 8$입니다. $y = 2$일 때 $x$의 값은?',
      options: ['$6$', '$8$', '$10$', '$12$'],
      answer: '$12$',
      explanation: '$xy = a$에서 $3 \\times 8 = 24$, $a = 24$\n\n$xy = 24$이므로 $y = 2$일 때\n$2x = 24$, $x = 12$',
    },
  ],
  realLifeExample: '자전거로 30km를 가려면 시속 10km면 3시간, 시속 15km면 2시간 걸려요. 속력과 시간은 반비례 관계! 빨리 갈수록 시간은 줄어듭니다.',
};

export default dayContent;
