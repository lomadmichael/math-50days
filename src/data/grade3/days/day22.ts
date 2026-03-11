import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 22,
  part: 3,
  title: '미니테스트 + 복습',
  subtitle: 'PART 3 총정리: 이차방정식',
  lectures: [],
  concepts: [
    {
      id: 'g3d22-c1',
      title: 'PART 3 핵심 요약',
      content: '① 이차방정식: $ax^2 + bx + c = 0$ ($a \\\\neq 0$)\\n② 인수분해: $AB = 0 \\\\Rightarrow A = 0$ 또는 $B = 0$\\n③ 완전제곱식: $(x+p)^2 = q$ → $x = -p \\\\pm \\\\sqrt{q}$\\n④ 근의 공식: $x = \\\\frac{-b \\\\pm \\\\sqrt{b^2-4ac}}{2a}$\\n⑤ 판별식: $D = b^2 - 4ac$로 근의 개수 판단\\n⑥ 활용: 미지수 설정 → 방정식 수립 → 풀이 → 검증',
      type: 'formula',
    },
    {
      id: 'g3d22-c2',
      title: '풀이법 선택 전략',
      content: '① 우선 인수분해 시도 (가장 빠름)\\n② 인수분해가 안 되면 근의 공식 사용\\n③ 계수가 간단하면 완전제곱식도 유용\\n④ 근의 개수만 알면 될 때는 판별식만 계산',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'g3d22-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$x^2 - 5x - 14 = 0$의 해는?',
      options: ['$x = 7, -2$', '$x = -7, 2$', '$x = 7, 2$', '$x = -7, -2$'],
      answer: '$x = 7, -2$',
      explanation: '$(x-7)(x+2) = 0$이므로 $x = 7$ 또는 $x = -2$입니다.',
    },
    {
      id: 'g3d22-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$x^2 - 10x + 25 = 0$의 해는?',
      options: ['$x = 5$ (중근)', '$x = -5$ (중근)', '$x = 5, -5$', '$x = 25$'],
      answer: '$x = 5$ (중근)',
      explanation: '$(x-5)^2 = 0$이므로 $x = 5$ (중근)입니다.',
    },
    {
      id: 'g3d22-p3',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$x^2 - 3x - 1 = 0$의 해는?',
      options: [
        '$x = \\\\frac{3 \\\\pm \\\\sqrt{13}}{2}$',
        '$x = \\\\frac{3 \\\\pm \\\\sqrt{5}}{2}$',
        '$x = \\\\frac{-3 \\\\pm \\\\sqrt{13}}{2}$',
        '$x = 3 \\\\pm \\\\sqrt{13}$',
      ],
      answer: '$x = \\\\frac{3 \\\\pm \\\\sqrt{13}}{2}$',
      explanation: '근의 공식: $x = \\\\frac{3 \\\\pm \\\\sqrt{9+4}}{2} = \\\\frac{3 \\\\pm \\\\sqrt{13}}{2}$입니다.',
    },
    {
      id: 'g3d22-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$x^2 + mx + 9 = 0$이 중근을 가질 때, 양수 $m$의 값은?',
      options: ['$3$', '$6$', '$9$', '$18$'],
      answer: '$6$',
      explanation: '$D = m^2 - 36 = 0$에서 $m = \\\\pm 6$. 양수이므로 $m = 6$입니다.',
    },
    {
      id: 'g3d22-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '연속하는 두 자연수의 제곱의 합이 85일 때, 두 수의 합은?',
      options: ['$11$', '$13$', '$15$', '$17$'],
      answer: '$13$',
      explanation: '$n^2 + (n+1)^2 = 85$, $2n^2 + 2n + 1 = 85$, $2n^2 + 2n - 84 = 0$, $n^2 + n - 42 = 0$, $(n+7)(n-6) = 0$에서 $n = 6$. 두 수는 6, 7이고 합은 13.',
    },
    {
      id: 'g3d22-p6',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '이차방정식 $x^2 - (a+1)x + a = 0$의 한 근이 1일 때, 다른 한 근은?',
      options: ['$a$', '$a+1$', '$a-1$', '$\\\\frac{a}{a+1}$'],
      answer: '$a$',
      explanation: '$x=1$ 대입: $1 - (a+1) + a = 0$ ✓ (항등식). 인수분해하면 $(x-1)(x-a) = 0$이므로 다른 한 근은 $a$입니다.',
    },
  ],
  realLifeExample: 'PART 3의 이차방정식은 과학, 공학, 경제학의 핵심 도구입니다. 포물선 운동, 최적 가격 책정, 전기 회로의 전류 계산 등에 모두 이차방정식이 사용됩니다. 고등학교 수학에서도 가장 자주 등장하는 개념입니다.',
};

export default dayContent;
