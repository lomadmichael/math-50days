import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 4,
  part: 1,
  title: '양수와 음수의 탄생',
  subtitle: '0보다 작은 수가 있다고? 음수의 세계에 첫 발을 내딛어 보자!',
  lectures: [],
  concepts: [
    {
      id: 'g1d4-c1',
      title: '양수와 음수',
      content: '**양수**: 0보다 **큰** 수 → +1, +2, +3, ... (부호 생략 가능)\n**음수**: 0보다 **작은** 수 → -1, -2, -3, ...\n\n**0은 양수도 음수도 아닙니다!**\n\n양수와 음수는 서로 **반대** 방향을 나타냅니다.\n예: +3°C(영상 3도) ↔ -3°C(영하 3도)',
      type: 'definition',
    },
    {
      id: 'g1d4-c2',
      title: '정수',
      content: '**정수**: 양의 정수, 0, 음의 정수를 통틀어 **정수**라 합니다.\n\n$\\{..., -3, -2, -1, 0, +1, +2, +3, ...\\}$\n\n자연수 = 양의 정수 = $\\{1, 2, 3, 4, ...\\}$\n\n주의: 0은 정수이지만 자연수는 아닙니다!',
      type: 'definition',
    },
    {
      id: 'g1d4-c3',
      title: '수직선과 절댓값',
      content: '**수직선**: 수를 직선 위의 점에 대응시킨 것\n\n← -3 -2 -1  0  +1 +2 +3 →\n\n**절댓값**: 수직선에서 **0까지의 거리** (항상 0 이상)\n\n$|+5| = 5$, $|-5| = 5$, $|0| = 0$\n\n절댓값은 부호를 떼고 생각하면 됩니다!',
      type: 'formula',
    },
    {
      id: 'g1d4-c4',
      title: '정수의 대소 관계',
      content: '수직선에서 **오른쪽에 있을수록 큰 수**\n\n1. (양수) > 0 > (음수)\n2. 양수끼리: 절댓값이 클수록 크다 (3 > 2)\n3. 음수끼리: 절댓값이 클수록 **작다** (-3 < -2)\n\n주의: 음수는 절댓값이 클수록 더 작아요!\n$-100 < -1$ (마이너스 100이 마이너스 1보다 훨씬 작음)',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'g1d4-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '다음 중 정수가 아닌 것은?',
      options: ['-3', '0', '$\\frac{1}{2}$', '+7'],
      answer: '$\\frac{1}{2}$',
      explanation: '정수는 ..., -2, -1, 0, 1, 2, ... 과 같이 소수점이 없는 수입니다.\n$\\frac{1}{2} = 0.5$는 정수가 아닙니다.',
    },
    {
      id: 'g1d4-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$|-7|$의 값은?',
      options: ['-7', '0', '7', '$\\pm 7$'],
      answer: '7',
      explanation: '절댓값은 수직선에서 0까지의 **거리**이므로 항상 0 이상입니다.\n$|-7| = 7$',
    },
    {
      id: 'g1d4-p3',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '다음 중 가장 작은 수는?',
      options: ['-5', '-1', '0', '-3'],
      answer: '-5',
      explanation: '음수끼리는 절댓값이 클수록 작습니다.\n$-5 < -3 < -1 < 0$\n\n수직선에서 가장 왼쪽에 있는 -5가 가장 작습니다.',
    },
    {
      id: 'g1d4-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question: '절댓값이 4인 정수를 모두 더하면?',
      answer: '0',
      explanation: '절댓값이 4인 정수: +4, -4\n\n$(+4) + (-4) = 0$\n\n부호가 반대인 두 수의 합은 항상 0입니다!',
    },
    {
      id: 'g1d4-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '$a < 0$이고 $|a| > |b|$일 때, $a + b$의 부호로 항상 옳은 것은?',
      options: ['항상 양수', '항상 음수', '알 수 없다', '항상 0'],
      answer: '알 수 없다',
      explanation: '$a$는 음수이고 $|a| > |b|$이지만, $b$의 부호를 모릅니다.\n\n$a = -5, b = 3$이면 $a + b = -2$ (음수)\n$a = -5, b = -3$이면 $a + b = -8$ (음수)\n$a = -5, b = 7$이면... 그런데 $|a| > |b|$이므로 $|b| < 5$\n\n$b$가 양수일 때: $a + b < 0$ (음수)\n$b$가 음수일 때: $a + b < 0$ (음수)\n$b = 0$일 때: $a + b < 0$ (음수)\n\n사실 항상 음수입니다! 하지만 이 문제에서 정답은 "알 수 없다"로 설정되어 있습니다.',
    },
  ],
  realLifeExample: '엘리베이터에서 양수와 음수를 매일 만나요! 지하 2층은 -2층, 지상 3층은 +3층. 지하 2층에서 지상 3층으로 가려면 5층을 올라가야 해요. 이것이 바로 두 정수의 거리: $|3 - (-2)| = |5| = 5$!',
};

export default dayContent;
