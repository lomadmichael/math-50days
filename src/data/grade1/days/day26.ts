import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 26,
  part: 4,
  title: '미니테스트 + 복습',
  subtitle: 'PART 4 좌표와 그래프 총정리! 지금까지 배운 내용을 확인해 보자.',
  lectures: [],
  concepts: [
    {
      id: 'g1d26-c1',
      title: 'PART 4 핵심 요약: 좌표평면과 그래프',
      content: '• **좌표평면**: x축(가로)과 y축(세로)이 원점 $O(0,0)$에서 만남\n• **사분면**: 제1(+,+), 제2(-,+), 제3(-,-), 제4(+,-)\n• 축 위의 점은 사분면에 속하지 않음\n• 그래프 올라감 → 증가, 내려감 → 감소, 수평 → 일정\n• 가파를수록 변화 속도가 빠름',
      type: 'formula',
    },
    {
      id: 'g1d26-c2',
      title: 'PART 4 핵심 요약: 정비례와 반비례',
      content: '• **정비례**: $y = ax$ → 원점을 지나는 직선, $\\frac{y}{x} = a$ 일정\n  - $a > 0$: 제1, 3사분면 / $a < 0$: 제2, 4사분면\n• **반비례**: $y = \\frac{a}{x}$ → 쌍곡선, $xy = a$ 일정\n  - $a > 0$: 제1, 3사분면 / $a < 0$: 제2, 4사분면\n• 비례상수 구하기: 한 점의 좌표를 식에 대입!',
      type: 'formula',
    },
  ],
  problems: [
    {
      id: 'g1d26-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '점 $(5, -3)$은 제 몇 사분면 위의 점인가?',
      options: ['제1사분면', '제2사분면', '제3사분면', '제4사분면'],
      answer: '제4사분면',
      explanation: '$x = 5 > 0$, $y = -3 < 0$\n\n$x > 0$이고 $y < 0$이면 **제4사분면**입니다.',
    },
    {
      id: 'g1d26-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: '점 $A(0, -7)$은 어느 축 위에 있는가? (x축 또는 y축)',
      answer: 'y축',
      explanation: '$x$좌표가 $0$이므로 **y축** 위의 점입니다.\n\ny축 위의 점은 항상 $(0, b)$ 형태입니다.',
    },
    {
      id: 'g1d26-p3',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '다음 중 $y$가 $x$에 정비례하는 것은?',
      options: ['$y = 2x + 3$', '$y = \\frac{4}{x}$', '$y = -7x$', '$y = x^2$'],
      answer: '$y = -7x$',
      explanation: '정비례: $y = ax$ 형태 ($a \\neq 0$)\n\n$y = 2x + 3$: 상수항 있음 ✗\n$y = \\frac{4}{x}$: 반비례 ✗\n$y = -7x$: $a = -7$인 정비례 ✓\n$y = x^2$: 이차식 ✗',
    },
    {
      id: 'g1d26-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question: '$y$가 $x$에 정비례하고, $x = 4$일 때 $y = -8$이다. $x = -3$일 때 $y$의 값을 구하시오.',
      answer: '6',
      explanation: '$y = ax$에 $(4, -8)$ 대입:\n$-8 = 4a$ → $a = -2$\n\n$y = -2x$에 $x = -3$ 대입:\n$y = -2 \\times (-3) = 6$',
    },
    {
      id: 'g1d26-p5',
      type: 'short-answer',
      difficulty: 'applied',
      question: '$y$가 $x$에 반비례하고, $x = 3$일 때 $y = -8$이다. $x = -6$일 때 $y$의 값을 구하시오.',
      answer: '4',
      explanation: '$a = x \\times y = 3 \\times (-8) = -24$\n\n$y = \\frac{-24}{x}$에 $x = -6$ 대입:\n$y = \\frac{-24}{-6} = 4$',
    },
    {
      id: 'g1d26-p6',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '점 $A(a, b)$가 제2사분면 위의 점일 때, 점 $B(b, -a)$는 제 몇 사분면 위의 점인가?',
      options: ['제1사분면', '제2사분면', '제3사분면', '제4사분면'],
      answer: '제1사분면',
      explanation: '제2사분면: $a < 0$, $b > 0$\n\n$B(b, -a)$에서:\n$b > 0$ (양수)\n$-a > 0$ (음수의 음수 = 양수)\n\n$x > 0, y > 0$ → **제1사분면**',
    },
    {
      id: 'g1d26-p7',
      type: 'short-answer',
      difficulty: 'challenge',
      question: '$y = \\frac{a}{x}$의 그래프와 $y = bx$의 그래프가 모두 점 $(2, 3)$을 지날 때, $a + b$의 값을 구하시오. (단, $a$, $b$는 비례상수)',
      answer: '\\frac{15}{2}',
      explanation: '$y = \\frac{a}{x}$에 $(2, 3)$ 대입:\n$3 = \\frac{a}{2}$ → $a = 6$\n\n$y = bx$에 $(2, 3)$ 대입:\n$3 = 2b$ → $b = \\frac{3}{2}$\n\n$a + b = 6 + \\frac{3}{2} = \\frac{15}{2}$',
    },
  ],
  realLifeExample: 'PART 4 총정리! 좌표평면은 지도 앱과 GPS에, 그래프 해석은 뉴스 데이터 분석에, 정비례는 환율 계산에, 반비례는 속력과 시간 관계에 활용됩니다. 좌표와 그래프는 세상을 읽는 도구예요!',
};

export default dayContent;
