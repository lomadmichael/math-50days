import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 24,
  part: 4,
  title: '반비례 관계',
  subtitle: '한쪽이 커지면 다른 쪽은 작아지는 반비례를 알아보자!',
  lectures: [],
  concepts: [
    {
      id: 'g1d24-c1',
      title: '반비례란?',
      content: '• **반비례**: $x$가 2배, 3배, ...가 되면 $y$는 $\\frac{1}{2}$배, $\\frac{1}{3}$배, ...가 되는 관계\n• 식: $y = \\frac{a}{x}$ ($a \\neq 0$인 상수)\n• $a$를 **비례상수**라 한다\n• $x \\times y = a$로 곱이 항상 일정!',
      type: 'concept',
    },
    {
      id: 'g1d24-c2',
      title: '반비례 그래프',
      content: '• $y = \\frac{a}{x}$의 그래프는 **쌍곡선** (매끄러운 곡선 한 쌍)\n• $a > 0$: 제1사분면과 제3사분면에 곡선\n• $a < 0$: 제2사분면과 제4사분면에 곡선\n• 그래프는 x축과 y축에 **한없이 가까워지지만 만나지 않는다**\n• $|a|$가 클수록 원점에서 **멀리** 떨어진 곡선',
      type: 'formula',
    },
    {
      id: 'g1d24-c3',
      title: '반비례 비례상수 구하기',
      content: '• $y = \\frac{a}{x}$에 한 점의 좌표를 대입하면 $a = x \\times y$\n• 예: 점 $(3, 4)$를 지나면 $a = 3 \\times 4 = 12$\n• 따라서 $y = \\frac{12}{x}$',
      type: 'formula',
    },
  ],
  problems: [
    {
      id: 'g1d24-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '다음 중 $y$가 $x$에 반비례하는 것은?',
      options: ['$y = 5x$', '$y = x + 5$', '$y = \\frac{5}{x}$', '$y = 5$'],
      answer: '$y = \\frac{5}{x}$',
      explanation: '반비례: $y = \\frac{a}{x}$ 형태\n\n$y = 5x$: 정비례 ✗\n$y = x + 5$: 일차식 ✗\n$y = \\frac{5}{x}$: $a = 5$인 반비례 ✓\n$y = 5$: 상수 ✗',
    },
    {
      id: 'g1d24-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: '$y$가 $x$에 반비례하고, $x = 4$일 때 $y = 6$이다. 비례상수 $a$의 값을 구하시오.',
      answer: '24',
      explanation: '$y = \\frac{a}{x}$에서 $a = x \\times y$\n\n$a = 4 \\times 6 = 24$',
    },
    {
      id: 'g1d24-p3',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$y = \\frac{-12}{x}$의 그래프가 지나는 사분면은?',
      options: ['제1, 3사분면', '제2, 4사분면', '제1, 2사분면', '제3, 4사분면'],
      answer: '제2, 4사분면',
      explanation: '$a = -12 < 0$\n\n$a < 0$이면 반비례 그래프는 **제2사분면**과 **제4사분면**을 지납니다.',
    },
    {
      id: 'g1d24-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question: '$y$가 $x$에 반비례하고 점 $(-3, 8)$을 지난다. $x = 6$일 때 $y$의 값을 구하시오.',
      answer: '-4',
      explanation: '$a = x \\times y = (-3) \\times 8 = -24$\n\n$y = \\frac{-24}{x}$에 $x = 6$ 대입:\n$y = \\frac{-24}{6} = -4$',
    },
    {
      id: 'g1d24-p5',
      type: 'short-answer',
      difficulty: 'challenge',
      question: '$y = \\frac{a}{x}$의 그래프가 점 $(2, -5)$를 지난다. $x = -2$일 때 $y$의 값을 구하시오.',
      answer: '5',
      explanation: '$a = 2 \\times (-5) = -10$\n$y = \\frac{-10}{x}$\n\n$x = -2$ 대입:\n$y = \\frac{-10}{-2} = 5$',
    },
  ],
  realLifeExample: '속력과 시간은 반비례 관계입니다! 거리가 120km일 때, 시속 60km면 2시간, 시속 40km면 3시간이 걸려요. $\\text{속력} \\times \\text{시간} = 120$으로 항상 일정하죠.',
};

export default dayContent;
