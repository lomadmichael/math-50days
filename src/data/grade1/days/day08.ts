import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 8,
  part: 2,
  title: '유리수(Rational Number)의 개념',
  subtitle: '분수로 나타낼 수 있는 수, 유리수(Rational Number)! 정수(Integer)와 어떤 관계일까?',
  lectures: [
    {
      lectureNumber: 1,
      youtubeVideoId: '',
      title: '01강 다항식 [유형01-01~유형01-02]',
      description: '이 강의에서 분수와 유리수 관련 부분을 시청하세요',
    },
  ],
  concepts: [
    {
      id: 'g1d8-c1',
      title: '유리수(Rational Number)란?',
      content: '**유리수(Rational Number)**: $\\frac{a}{b}$ (a, b는 정수(Integer), $b \\neq 0$) 꼴로 나타낼 수 있는 수\n\n예: $\\frac{1}{2}$, $-\\frac{3}{4}$, $0.5$, $3$ ($= \\frac{3}{1}$)\n\n**모든 정수는 유리수입니다!** ($a = \\frac{a}{1}$)\n\n유리수 = 정수 + 정수가 아닌 유리수',
      type: 'definition',
    },
    {
      id: 'g1d8-c2',
      title: '유리수(Rational Number)의 분류',
      content: '유리수는 크게 세 종류:\n\n1. **양의 유리수**: 0보다 큰 유리수(Rational Number) ($\\frac{1}{3}$, $2.5$)\n2. **0(Zero)**: 양도 음도 아님\n3. **음의 유리수**: 0보다 작은 유리수 ($-\\frac{2}{3}$, $-0.7$)\n\n정수(Integer)로 분류하면:\n• 양의 정수(자연수, Natural Number): 1, 2, 3, ...\n• 0\n• 음의 정수: -1, -2, -3, ...\n• 정수가 아닌 유리수: $\\frac{1}{2}$, $-\\frac{3}{4}$, ...',
      type: 'definition',
    },
    {
      id: 'g1d8-c3',
      title: '수직선(Number Line) 위의 유리수(Rational Number)',
      content: '유리수는 수직선(Number Line) 위의 점에 대응됩니다.\n\n$\\frac{3}{4}$: 0과 1 사이를 4등분한 것 중 3번째\n$-\\frac{1}{2}$: -1과 0 사이를 2등분한 것 중 1번째\n\n유리수의 대소비교(Comparison):\n• 수직선에서 오른쪽이 더 크다\n• $-\\frac{1}{2} < 0 < \\frac{1}{3} < \\frac{3}{4} < 1$',
      type: 'example',
    },
    {
      id: 'g1d8-c4',
      title: '유리수(Rational Number)의 절댓값(Absolute Value)',
      content: '유리수에서도 절댓값(Absolute Value)은 **0까지의 거리**!\n\n$|\\frac{3}{4}| = \\frac{3}{4}$\n$|-\\frac{5}{2}| = \\frac{5}{2}$\n\n절댓값이 같고 부호(Sign)가 반대인 두 유리수의 합은 0\n$\\frac{3}{4} + (-\\frac{3}{4}) = 0$',
      type: 'formula',
    },
  ],
  problems: [
    {
      id: 'g1d8-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '다음 중 유리수가 아닌 것은?',
      options: ['$-3$', '$\\frac{0}{5}$', '$0.\\overline{3}$', '$\\sqrt{2}$'],
      answer: '$\\sqrt{2}$',
      explanation: '$\\sqrt{2}$는 분수로 나타낼 수 없는 **무리수**입니다.\n\n$-3 = \\frac{-3}{1}$ ✓\n$\\frac{0}{5} = 0$ ✓\n$0.\\overline{3} = \\frac{1}{3}$ ✓',
    },
    {
      id: 'g1d8-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '다음 수를 작은 순서대로 나열하면?\n$-\\frac{1}{2}$, $\\frac{2}{3}$, $-1$, $0$',
      options: [
        '$-1 < -\\frac{1}{2} < 0 < \\frac{2}{3}$',
        '$-\\frac{1}{2} < -1 < 0 < \\frac{2}{3}$',
        '$-1 < 0 < -\\frac{1}{2} < \\frac{2}{3}$',
        '$0 < -\\frac{1}{2} < -1 < \\frac{2}{3}$',
      ],
      answer: '$-1 < -\\frac{1}{2} < 0 < \\frac{2}{3}$',
      explanation: '수직선에서 왼쪽부터: $-1$, $-\\frac{1}{2}$, $0$, $\\frac{2}{3}$',
    },
    {
      id: 'g1d8-p3',
      type: 'short-answer',
      difficulty: 'basic',
      question: '$|-\\frac{7}{3}|$의 값을 기약분수로 나타내시오.',
      answer: '7/3',
      explanation: '절댓값은 부호를 떼면 됩니다.\n$|-\\frac{7}{3}| = \\frac{7}{3}$',
    },
    {
      id: 'g1d8-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '정수가 아닌 유리수는 어느 것인가?',
      options: ['$-5$', '$\\frac{6}{3}$', '$\\frac{7}{4}$', '$0$'],
      answer: '$\\frac{7}{4}$',
      explanation: '$-5$: 정수 ✓\n$\\frac{6}{3} = 2$: 정수 ✓\n$\\frac{7}{4} = 1.75$: 정수가 아닌 유리수 ✓\n$0$: 정수 ✓',
    },
    {
      id: 'g1d8-p5',
      type: 'short-answer',
      difficulty: 'challenge',
      question: '절댓값이 $\\frac{5}{2}$ 이하인 정수의 개수를 구하시오.',
      answer: '5',
      explanation: '$|x| \\leq \\frac{5}{2} = 2.5$\n\n$-2.5 \\leq x \\leq 2.5$\n\n이 범위의 정수: $-2, -1, 0, 1, 2$ → **5개**',
    },
  ],
  realLifeExample: '피자 한 판을 8조각으로 나눠서 3조각 먹으면 $\\frac{3}{8}$만큼 먹은 거예요. 이처럼 일상에서 분수(유리수, Rational Number)를 계속 사용합니다. 할인율 30%도 $\\frac{30}{100} = \\frac{3}{10}$으로 유리수!',
};

export default dayContent;
