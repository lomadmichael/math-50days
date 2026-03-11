import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 10,
  part: 2,
  title: '수의 체계 정리',
  subtitle: '자연수부터 유리수까지, 수의 세계를 한눈에 정리하자!',
  lectures: [],
  concepts: [
    {
      id: 'g1d10-c1',
      title: '수의 체계 (중1 범위)',
      content: '**자연수** ⊂ **정수** ⊂ **유리수**\n\n• 자연수: 1, 2, 3, 4, ...\n• 정수: ..., -2, -1, 0, 1, 2, ...\n• 유리수: $\\frac{a}{b}$ (a, b 정수, $b \\neq 0$)\n\n모든 자연수는 정수이고, 모든 정수는 유리수입니다!\n(중2에서 무리수, 중3에서 실수를 배우게 됩니다)',
      type: 'definition',
    },
    {
      id: 'g1d10-c2',
      title: '유리수의 소수 표현',
      content: '유리수를 소수로 나타내면:\n\n**유한소수**: 나누어떨어지는 것\n$\\frac{1}{4} = 0.25$, $\\frac{3}{8} = 0.375$\n\n**순환소수**: 같은 숫자가 반복\n$\\frac{1}{3} = 0.333... = 0.\\overline{3}$\n$\\frac{2}{7} = 0.\\overline{285714}$\n\n유리수는 반드시 유한소수 또는 순환소수로 표현됩니다!',
      type: 'formula',
    },
    {
      id: 'g1d10-c3',
      title: '수의 성질 정리',
      content: '**덧셈의 항등원**: 0 ($a + 0 = a$)\n**곱셈의 항등원**: 1 ($a \\times 1 = a$)\n**덧셈의 역원**: $-a$ ($a + (-a) = 0$)\n**곱셈의 역원(역수)**: $\\frac{1}{a}$ ($a \\times \\frac{1}{a} = 1$, $a \\neq 0$)\n\n0은 역수가 없습니다! (0으로 나눌 수 없음)',
      type: 'formula',
    },
    {
      id: 'g1d10-c4',
      title: '자주 틀리는 포인트',
      content: '• 0은 양수가 아니다! (양수도 음수도 아님)\n• 0은 자연수가 아니다! (1부터 시작)\n• 0은 유리수다! ($\\frac{0}{1} = 0$)\n• 모든 정수는 유리수다! ($5 = \\frac{5}{1}$)\n• $\\frac{a}{0}$은 정의되지 않는다! (0으로 나눌 수 없음)\n• $-(-a) = a$ (마이너스 마이너스는 플러스)',
      type: 'warning',
    },
  ],
  problems: [
    {
      id: 'g1d10-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '다음 중 옳은 것은?',
      options: [
        '0은 자연수이다',
        '모든 정수는 유리수이다',
        '모든 유리수는 정수이다',
        '음의 정수는 유리수가 아니다',
      ],
      answer: '모든 정수는 유리수이다',
      explanation: '정수 $a = \\frac{a}{1}$이므로 모든 정수는 유리수입니다.\n\n0은 자연수가 아닙니다.\n$\\frac{1}{2}$은 유리수이지만 정수가 아닙니다.\n$-3 = \\frac{-3}{1}$은 유리수입니다.',
    },
    {
      id: 'g1d10-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: '$\\frac{5}{8}$을 소수로 나타내면?',
      answer: '0.625',
      explanation: '$5 \\div 8 = 0.625$ (유한소수)',
    },
    {
      id: 'g1d10-p3',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$-3$에 대한 설명으로 옳지 않은 것은?',
      options: ['정수이다', '유리수이다', '자연수이다', '음수이다'],
      answer: '자연수이다',
      explanation: '$-3$은 음의 정수이므로 자연수(양의 정수)가 아닙니다.\n\n정수 ✓, 유리수 ✓, 음수 ✓, 자연수 ✗',
    },
    {
      id: 'g1d10-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question: '$-5$의 역수와 $\\frac{2}{3}$의 역수의 합을 구하시오. (분수로)',
      answer: '13/10',
      explanation: '$-5$의 역수: $-\\frac{1}{5}$\n$\\frac{2}{3}$의 역수: $\\frac{3}{2}$\n\n$-\\frac{1}{5} + \\frac{3}{2} = -\\frac{2}{10} + \\frac{15}{10} = \\frac{13}{10}$',
    },
    {
      id: 'g1d10-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '다음 중 유한소수로 나타낼 수 있는 분수는?',
      options: ['$\\frac{1}{3}$', '$\\frac{1}{6}$', '$\\frac{3}{8}$', '$\\frac{5}{7}$'],
      answer: '$\\frac{3}{8}$',
      explanation: '분모의 소인수가 2와 5만으로 이루어진 분수만 유한소수!\n\n$\\frac{1}{3}$: 분모 3 → 순환소수\n$\\frac{1}{6}$: 분모 $2 \\times 3$ → 순환소수\n$\\frac{3}{8}$: 분모 $2^3$ → **유한소수** ✓\n$\\frac{5}{7}$: 분모 7 → 순환소수',
    },
  ],
  realLifeExample: '컴퓨터는 모든 수를 0과 1(이진수)로 저장해요. 유한소수는 정확히 저장되지만, 순환소수는 근사값만 저장됩니다. 그래서 프로그래밍에서 0.1 + 0.2가 정확히 0.3이 안 되는 현상이 생겨요! 수의 체계를 이해하면 이런 현상도 이해할 수 있습니다.',
};

export default dayContent;
