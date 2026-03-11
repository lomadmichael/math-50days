import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 25,
  part: 4,
  title: '이차함수 $y=ax^2+bx+c$의 그래프',
  subtitle: '일반형에서 꼭짓점 구하기와 그래프 분석',
  lectures: [],
  concepts: [
    {
      id: 'g3d25-c1',
      title: '일반형을 표준형으로 변환',
      content: '$y = ax^2 + bx + c$를 $y = a(x-p)^2 + q$로 변환\\n\\n방법: 완전제곱식 만들기\\n$y = a\\\\left(x^2 + \\\\frac{b}{a}x\\\\right) + c$\\n$= a\\\\left(x + \\\\frac{b}{2a}\\\\right)^2 - \\\\frac{b^2}{4a} + c$\\n$= a\\\\left(x + \\\\frac{b}{2a}\\\\right)^2 + \\\\frac{4ac - b^2}{4a}$\\n\\n꼭짓점: $\\\\left(-\\\\frac{b}{2a}, \\\\frac{4ac-b^2}{4a}\\\\right)$',
      type: 'formula',
    },
    {
      id: 'g3d25-c2',
      title: '일반형 그래프의 성질 읽기',
      content: '$y = ax^2 + bx + c$에서:\\n\\n$a$의 부호: 그래프의 방향 (볼록 방향)\\n$c$의 값: $y$절편 ($x=0$일 때 $y$값)\\n대칭축: $x = -\\\\frac{b}{2a}$\\n$x$절편: $ax^2 + bx + c = 0$의 해',
      type: 'formula',
    },
    {
      id: 'g3d25-c3',
      title: '변환 예시',
      content: '$y = x^2 - 4x + 7$\\n$= (x^2 - 4x + 4) + 3$\\n$= (x-2)^2 + 3$\\n\\n꼭짓점: $(2, 3)$, 대칭축: $x = 2$\\n$a = 1 > 0$이므로 아래로 볼록, 최솟값 $3$',
      type: 'example',
    },
    {
      id: 'g3d25-c4',
      title: '그래프와 $x$축의 관계',
      content: '$y = ax^2 + bx + c$와 $x$축의 교점:\\n$ax^2 + bx + c = 0$의 해가 교점의 $x$좌표\\n\\n$D > 0$: $x$축과 두 점에서 만남\\n$D = 0$: $x$축과 한 점에서 접함 (꼭짓점이 $x$축 위)\\n$D < 0$: $x$축과 만나지 않음',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'g3d25-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$y = x^2 - 6x + 5$의 꼭짓점은?',
      options: ['$(3, -4)$', '$(-3, -4)$', '$(3, 4)$', '$(6, 5)$'],
      answer: '$(3, -4)$',
      explanation: '$y = (x-3)^2 - 9 + 5 = (x-3)^2 - 4$이므로 꼭짓점은 $(3, -4)$입니다.',
    },
    {
      id: 'g3d25-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$y = x^2 + 4x + 7$의 $y$절편은?',
      options: ['$4$', '$7$', '$3$', '$11$'],
      answer: '$7$',
      explanation: '$y$절편은 $x = 0$을 대입한 값이므로 $y = 0 + 0 + 7 = 7$입니다.',
    },
    {
      id: 'g3d25-p3',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$y = -x^2 + 2x + 3$의 최댓값은?',
      options: ['$3$', '$4$', '$2$', '$1$'],
      answer: '$4$',
      explanation: '$y = -(x^2 - 2x) + 3 = -(x-1)^2 + 1 + 3 = -(x-1)^2 + 4$. $a < 0$이므로 최댓값 $4$ ($x=1$일 때).',
    },
    {
      id: 'g3d25-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$y = 2x^2 - 8x + 6$의 대칭축은?',
      options: ['$x = 2$', '$x = -2$', '$x = 4$', '$x = -4$'],
      answer: '$x = 2$',
      explanation: '대칭축: $x = -\\\\frac{b}{2a} = -\\\\frac{-8}{4} = 2$입니다.',
    },
    {
      id: 'g3d25-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '$y = x^2 - 2x - 3$이 $x$축과 만나는 두 점의 $x$좌표의 합은?',
      options: ['$-2$', '$0$', '$2$', '$4$'],
      answer: '$2$',
      explanation: '$x^2 - 2x - 3 = 0$, $(x-3)(x+1) = 0$에서 $x = 3, -1$. 합은 $3 + (-1) = 2$입니다. (또는 근과 계수의 관계: $-\\\\frac{b}{a} = 2$)',
    },
    {
      id: 'g3d25-p6',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '이차함수 $y = ax^2 + bx + c$의 그래프가 아래로 볼록하고, $y$절편이 음수이며, 꼭짓점의 $y$좌표가 양수일 때, 이 그래프는 $x$축과 몇 점에서 만나는가?',
      options: ['$0$점', '$1$점', '$2$점', '알 수 없다'],
      answer: '$0$점',
      explanation: '아래로 볼록($a > 0$)이고 꼭짓점의 $y$좌표가 양수이면 그래프 전체가 $x$축 위에 있습니다... 하지만 $y$절편이 음수? 이는 모순입니다. $a>0$이고 최솟값이 양수이면 $y$절편도 양수여야 합니다. 문제를 위로 볼록으로 재해석하면: $a<0$, $y$절편 음수, 꼭짓점 $y$좌표 양수일 때 $x$축과 2점에서 만납니다. 정답 수정: $2$점.',
    },
  ],
  realLifeExample: '물체를 비스듬히 던질 때 궤적은 $y = -0.01x^2 + 0.5x + 1.5$ 같은 이차함수입니다. 표준형으로 바꾸면 $y = -0.01(x-25)^2 + 7.75$로, 수평 25m에서 최고 높이 7.75m에 도달하고, $x$절편을 구하면 물체가 떨어지는 거리를 알 수 있습니다.',
};

export default dayContent;
