import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 45,
  part: 7,
  title: '확률의 계산 (1)',
  subtitle: '사건의 확률을 다양한 방법으로 계산해 보자!',
  lectures: [],
  concepts: [
    {
      id: 'g2d45-c1',
      title: '확률의 덧셈 (배반사건)',
      content: '두 사건 $A$, $B$가 **동시에 일어나지 않을 때** (배반사건):\\n\\n$$P(A \\text{ 또는 } B) = P(A) + P(B)$$\\n\\n예) 주사위에서 $1$ 또는 $6$이 나올 확률:\\n$P = \\frac{1}{6} + \\frac{1}{6} = \\frac{2}{6} = \\frac{1}{3}$',
      type: 'formula',
    },
    {
      id: 'g2d45-c2',
      title: '확률의 덧셈 (일반)',
      content: '두 사건이 동시에 일어날 수 있을 때:\\n\\n$$P(A \\text{ 또는 } B) = P(A) + P(B) - P(A \\text{ 그리고 } B)$$\\n\\n겹치는 부분을 빼야 합니다!\\n\\n예) 52장의 카드에서 하트 또는 킹을 뽑을 확률:\\n$P = \\frac{13}{52} + \\frac{4}{52} - \\frac{1}{52} = \\frac{16}{52} = \\frac{4}{13}$',
      type: 'formula',
    },
    {
      id: 'g2d45-c3',
      title: '확률 계산의 핵심',
      content: '확률 문제 풀이 순서:\\n① 전체 경우의 수 구하기\\n② 사건의 경우의 수 구하기\\n③ 확률 = 사건 / 전체\\n\\n⚠️ 각 경우가 일어날 가능성이 **같아야** 확률을 이렇게 구할 수 있음!\\n(예: 동전의 앞뒤, 주사위의 각 눈)',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'g2d45-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '주사위를 던질 때, $2$ 이하 또는 $5$ 이상이 나올 확률은?',
      options: ['$\\frac{1}{3}$', '$\\frac{1}{2}$', '$\\frac{2}{3}$', '$\\frac{5}{6}$'],
      answer: '$\\frac{2}{3}$',
      explanation: '$2$ 이하: $\\{1, 2\\}$ → $\\frac{2}{6}$\\n$5$ 이상: $\\{5, 6\\}$ → $\\frac{2}{6}$\\n겹치는 것 없으므로:\\n$P = \\frac{2}{6} + \\frac{2}{6} = \\frac{4}{6} = \\frac{2}{3}$',
    },
    {
      id: 'g2d45-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: '1부터 12까지 적힌 카드에서 한 장을 뽑을 때, $3$의 배수가 나올 확률을 기약분수로 구하시오.',
      answer: '1/3',
      explanation: '$3$의 배수: $3, 6, 9, 12$ → $4$가지\\n전체: $12$가지\\n확률 $= \\frac{4}{12} = \\frac{1}{3}$',
    },
    {
      id: 'g2d45-p3',
      type: 'short-answer',
      difficulty: 'applied',
      question: '1부터 20까지의 카드에서 한 장을 뽑을 때, $4$의 배수 또는 $6$의 배수가 나올 확률을 기약분수로 구하시오.',
      answer: '7/20',
      explanation: '$4$의 배수: $4, 8, 12, 16, 20$ → $5$개\\n$6$의 배수: $6, 12, 18$ → $3$개\\n$12$의 배수(겹침): $12$ → $1$개\\n\\n$P = \\frac{5 + 3 - 1}{20} = \\frac{7}{20}$',
    },
    {
      id: 'g2d45-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '두 개의 주사위를 던질 때, 눈의 합이 $4$ 또는 $10$이 될 확률은?',
      options: ['$\\frac{1}{12}$', '$\\frac{1}{6}$', '$\\frac{5}{36}$', '$\\frac{1}{4}$'],
      answer: '$\\frac{1}{6}$',
      explanation: '합이 $4$: $(1,3), (2,2), (3,1)$ → $3$가지\\n합이 $10$: $(4,6), (5,5), (6,4)$ → $3$가지\\n겹치지 않으므로:\\n$P = \\frac{3 + 3}{36} = \\frac{6}{36} = \\frac{1}{6}$',
    },
    {
      id: 'g2d45-p5',
      type: 'short-answer',
      difficulty: 'challenge',
      question: '남학생 $3$명, 여학생 $4$명 중 대표 $2$명을 뽑을 때, 적어도 $1$명이 여학생일 확률을 기약분수로 구하시오.',
      answer: '6/7',
      explanation: '전체: $_7C_2 = 21$가지\\n모두 남학생: $_3C_2 = 3$가지\\n\\n적어도 1명 여학생 = 전체 - 모두 남학생\\n$P = \\frac{21 - 3}{21} = \\frac{18}{21} = \\frac{6}{7}$',
    },
  ],
  realLifeExample: '복권 당첨 확률을 계산해 볼까요? 45개 숫자에서 6개를 맞추는 로또의 1등 확률은 약 1/8,145,060이에요! 이렇게 작은 확률도 정확히 계산할 수 있는 것이 확률의 힘입니다.',
};

export default dayContent;
