import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 23,
  part: 4,
  title: '정비례 관계',
  subtitle: '한쪽이 커지면 다른 쪽도 같은 비율로 커지는 정비례를 배워 보자!',
  lectures: [],
  concepts: [
    {
      id: 'g1d23-c1',
      title: '정비례란?',
      content: '• **정비례**: $x$가 2배, 3배, ...가 되면 $y$도 2배, 3배, ...가 되는 관계\n• 식: $y = ax$ ($a \\neq 0$인 상수)\n• $a$를 **비례상수**라 한다\n• $x$와 $y$의 비 $\\frac{y}{x} = a$로 항상 일정!',
      type: 'concept',
    },
    {
      id: 'g1d23-c2',
      title: '정비례 그래프',
      content: '• $y = ax$의 그래프는 **원점을 지나는 직선**\n• $a > 0$: 오른쪽 위로 올라가는 직선 (제1, 3사분면)\n• $a < 0$: 오른쪽 아래로 내려가는 직선 (제2, 4사분면)\n• $|a|$가 클수록 그래프가 y축에 **가까워** (가파름)',
      type: 'formula',
    },
    {
      id: 'g1d23-c3',
      title: '비례상수 구하기',
      content: '• $y = ax$에 한 점의 좌표 $(x, y)$를 대입하면 $a$를 구할 수 있다\n• 예: 점 $(2, 6)$을 지나면 $6 = a \\times 2$ → $a = 3$\n• 따라서 $y = 3x$',
      type: 'formula',
    },
  ],
  problems: [
    {
      id: 'g1d23-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '다음 중 $y$가 $x$에 정비례하는 것은?',
      options: ['$y = 3x + 1$', '$y = -2x$', '$y = \\frac{6}{x}$', '$y = x^2$'],
      answer: '$y = -2x$',
      explanation: '정비례: $y = ax$ 형태 ($a \\neq 0$)\n\n$y = 3x + 1$: 상수항 +1 있음 ✗\n$y = -2x$: $a = -2$인 정비례 ✓\n$y = \\frac{6}{x}$: 반비례 ✗\n$y = x^2$: 이차식 ✗',
    },
    {
      id: 'g1d23-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: '$y$가 $x$에 정비례하고, $x = 3$일 때 $y = 12$이다. 비례상수 $a$의 값을 구하시오.',
      answer: '4',
      explanation: '$y = ax$에 $x = 3$, $y = 12$ 대입\n\n$12 = a \\times 3$\n$a = 4$',
    },
    {
      id: 'g1d23-p3',
      type: 'short-answer',
      difficulty: 'applied',
      question: '$y = -3x$의 그래프가 지나는 사분면을 모두 쓰시오. (예: 제1, 3사분면)',
      answer: '제2, 4사분면',
      explanation: '$y = -3x$에서 $a = -3 < 0$\n\n$a < 0$이면 그래프는 오른쪽 아래로 내려가므로 **제2사분면**과 **제4사분면**을 지납니다.',
    },
    {
      id: 'g1d23-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$y$가 $x$에 정비례하고 점 $(-2, 8)$을 지날 때, $x = 5$에서의 $y$값은?',
      options: ['-20', '-15', '15', '20'],
      answer: '-20',
      explanation: '$y = ax$에 $(-2, 8)$ 대입:\n$8 = a \\times (-2)$\n$a = -4$\n\n$y = -4x$에 $x = 5$ 대입:\n$y = -4 \\times 5 = -20$',
    },
    {
      id: 'g1d23-p5',
      type: 'short-answer',
      difficulty: 'challenge',
      question: '$y = ax$의 그래프가 점 $(4, -6)$을 지난다. 이 그래프 위의 점 중 $y = 9$인 점의 $x$좌표를 구하시오.',
      answer: '-6',
      explanation: '$y = ax$에 $(4, -6)$ 대입:\n$-6 = 4a$ → $a = -\\frac{3}{2}$\n\n$y = -\\frac{3}{2}x$에서 $y = 9$일 때:\n$9 = -\\frac{3}{2}x$\n$x = 9 \\times (-\\frac{2}{3}) = -6$',
    },
  ],
  realLifeExample: '시속 60km로 달리는 자동차의 이동거리는 시간에 정비례합니다! $y = 60x$ (y: 거리km, x: 시간). 환율도 정비례의 예시인데, 1달러 = 1300원이면 $y = 1300x$로 계산할 수 있어요.',
};

export default dayContent;
