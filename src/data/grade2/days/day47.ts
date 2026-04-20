import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 47,
  part: 7,
  title: '확률의 계산 (3)',
  subtitle: '연속으로 일어나는 사건의 확률을 구해 보자!',
  lectures: [],
  concepts: [
    {
      id: 'g2d47-c1',
      title: '독립사건의 확률',
      content: '두 사건 $A$, $B$가 서로 영향을 주지 않을 때 (독립사건):\\n\\n$$P(A \\text{ 그리고 } B) = P(A) \\times P(B)$$\\n\\n예) 동전을 2번 던져 모두 앞면:\\n$P = \\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{4}$\\n\\n첫 번째 결과가 두 번째에 영향 없음 → 독립!',
      type: 'formula',
    },
    {
      id: 'g2d47-c2',
      title: '종속사건의 확률',
      content: '첫 번째 결과가 두 번째에 영향을 주는 경우 (종속사건):\\n\\n$$P(A \\text{ 그리고 } B) = P(A) \\times P(B|A)$$\\n\\n$P(B|A)$: $A$가 일어난 후 $B$가 일어날 확률\\n\\n예) 카드 5장(빨강 3, 파랑 2)에서 비복원 추출로 2장 뽑기:\\n첫 번째 빨강: $\\frac{3}{5}$\\n두 번째도 빨강: $\\frac{2}{4}$ (남은 카드에서!)\\n$P = \\frac{3}{5} \\times \\frac{2}{4} = \\frac{6}{20} = \\frac{3}{10}$',
      type: 'formula',
    },
    {
      id: 'g2d47-c3',
      title: '복원 추출 vs 비복원 추출',
      content: '• **복원 추출**: 뽑은 것을 다시 넣음 → 독립사건 (전체 수 변하지 않음)\\n• **비복원 추출**: 뽑은 것을 넣지 않음 → 종속사건 (전체 수 줄어듦)\\n\\n문제에서 "다시 넣지 않고", "연속으로" 등의 표현을 잘 확인하세요!',
      type: 'warning',
    },
  ],
  problems: [
    {
      id: 'g2d47-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '주사위를 $2$번 던질 때, 두 번 모두 $6$이 나올 확률은?',
      options: ['$\\frac{1}{6}$', '$\\frac{1}{12}$', '$\\frac{1}{36}$', '$\\frac{1}{3}$'],
      answer: '$\\frac{1}{36}$',
      explanation: '독립사건이므로:\\n$P = \\frac{1}{6} \\times \\frac{1}{6} = \\frac{1}{36}$',
    },
    {
      id: 'g2d47-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: '동전을 $4$번 던질 때, 모두 앞면이 나올 확률을 기약분수로 구하시오.',
      answer: '1/16',
      explanation: '독립사건이므로:\\n$P = \\left(\\frac{1}{2}\\right)^4 = \\frac{1}{16}$',
    },
    {
      id: 'g2d47-p3',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '빨간 공 $4$개, 흰 공 $6$개가 있는 주머니에서 공을 $1$개 꺼내고 다시 넣은 후 또 $1$개를 꺼낼 때, $2$번 모두 빨간 공일 확률은?',
      options: ['$\\frac{2}{15}$', '$\\frac{4}{25}$', '$\\frac{6}{25}$', '$\\frac{2}{5}$'],
      answer: '$\\frac{4}{25}$',
      explanation: '복원 추출 → 독립사건\\n$P = \\frac{4}{10} \\times \\frac{4}{10} = \\frac{16}{100} = \\frac{4}{25}$',
    },
    {
      id: 'g2d47-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question: '빨간 공 $4$개, 흰 공 $6$개가 있는 주머니에서 공을 $1$개 꺼내고 다시 넣지 않고 또 $1$개를 꺼낼 때, $2$번 모두 빨간 공일 확률을 기약분수로 구하시오.',
      answer: '2/15',
      explanation: '비복원 추출 → 종속사건\\n첫 번째 빨강: $\\frac{4}{10}$\\n두 번째 빨강 (빨강 3개, 전체 9개 남음): $\\frac{3}{9}$\\n$P = \\frac{4}{10} \\times \\frac{3}{9} = \\frac{12}{90} = \\frac{2}{15}$',
    },
    {
      id: 'g2d47-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: 'A가 과녁을 맞출 확률은 $\\frac{2}{3}$, B가 맞출 확률은 $\\frac{3}{4}$이다. 두 사람이 동시에 쏠 때, 적어도 한 명이 맞출 확률은?',
      options: ['$\\frac{5}{12}$', '$\\frac{1}{12}$', '$\\frac{11}{12}$', '$\\frac{7}{12}$'],
      answer: '$\\frac{11}{12}$',
      explanation: '여사건: 둘 다 빗나감\\nA 빗나갈 확률: $1 - \\frac{2}{3} = \\frac{1}{3}$\\nB 빗나갈 확률: $1 - \\frac{3}{4} = \\frac{1}{4}$\\n\\n$P(\\text{둘 다 빗나감}) = \\frac{1}{3} \\times \\frac{1}{4} = \\frac{1}{12}$\\n$P(\\text{적어도 1명}) = 1 - \\frac{1}{12} = \\frac{11}{12}$',
    },
  ],
  realLifeExample: '게임에서 아이템 드롭 확률이 10%라면, 연속 5번 도전해서 한 번도 안 나올 확률은 0.9^5 = 약 59%예요! 적어도 1번은 나올 확률은 1 - 0.59 = 약 41%밖에 안 됩니다. 연속 사건의 확률을 알면 게임 전략도 세울 수 있어요!',
};

export default dayContent;
