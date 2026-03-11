import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 44,
  part: 7,
  title: '확률의 뜻과 기본 성질',
  subtitle: '확률이란 무엇인지, 기본 성질을 알아보자!',
  lectures: [],
  concepts: [
    {
      id: 'g2d44-c1',
      title: '확률의 뜻',
      content: '어떤 시행에서 사건 $A$가 일어날 **확률**:\\n\\n$$P(A) = \\\\frac{\\\\text{사건 } A\\\\text{가 일어나는 경우의 수}}{\\\\text{모든 경우의 수}}$$\\n\\n예) 주사위에서 짝수가 나올 확률:\\n$P = \\\\frac{3}{6} = \\\\frac{1}{2}$',
      type: 'definition',
    },
    {
      id: 'g2d44-c2',
      title: '확률의 기본 성질',
      content: '모든 확률 $P(A)$에 대해:\\n\\n$$0 \\\\leq P(A) \\\\leq 1$$\\n\\n• $P(A) = 0$: 절대 일어나지 않는 사건 (불가능한 사건)\\n• $P(A) = 1$: 반드시 일어나는 사건 (확실한 사건)\\n• 모든 경우의 확률의 합 $= 1$',
      type: 'formula',
    },
    {
      id: 'g2d44-c3',
      title: '확률의 표현',
      content: '확률은 분수, 소수, 백분율로 표현할 수 있습니다.\\n\\n예) 주사위에서 $3$이 나올 확률:\\n• 분수: $\\\\frac{1}{6}$\\n• 소수: 약 $0.167$\\n• 백분율: 약 $16.7\\\\%$\\n\\n시험에서는 보통 **기약분수**로 답합니다.',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'g2d44-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '주사위를 한 번 던질 때, $3$의 배수가 나올 확률은?',
      options: ['$\\\\frac{1}{6}$', '$\\\\frac{1}{3}$', '$\\\\frac{1}{2}$', '$\\\\frac{2}{3}$'],
      answer: '$\\\\frac{1}{3}$',
      explanation: '$3$의 배수: $3, 6$ → $2$가지\\n전체: $6$가지\\n확률 $= \\\\frac{2}{6} = \\\\frac{1}{3}$',
    },
    {
      id: 'g2d44-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: '1부터 10까지 적힌 카드에서 한 장을 뽑을 때, 소수가 나올 확률을 기약분수로 구하시오.',
      answer: '2/5',
      explanation: '소수: $2, 3, 5, 7$ → $4$가지\\n전체: $10$가지\\n확률 $= \\\\frac{4}{10} = \\\\frac{2}{5}$',
    },
    {
      id: 'g2d44-p3',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '동전 $2$개를 동시에 던질 때, 모두 앞면이 나올 확률은?',
      options: ['$\\\\frac{1}{2}$', '$\\\\frac{1}{3}$', '$\\\\frac{1}{4}$', '$\\\\frac{3}{4}$'],
      answer: '$\\\\frac{1}{4}$',
      explanation: '모든 경우: (앞앞), (앞뒤), (뒤앞), (뒤뒤) → $4$가지\\n모두 앞면: (앞앞) → $1$가지\\n확률 $= \\\\frac{1}{4}$',
    },
    {
      id: 'g2d44-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question: '두 개의 주사위를 던질 때, 눈의 합이 $7$이 될 확률을 기약분수로 구하시오.',
      answer: '1/6',
      explanation: '눈의 합이 $7$인 경우:\\n$(1,6), (2,5), (3,4), (4,3), (5,2), (6,1)$ → $6$가지\\n전체: $36$가지\\n확률 $= \\\\frac{6}{36} = \\\\frac{1}{6}$',
    },
    {
      id: 'g2d44-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '빨간 공 $3$개, 파란 공 $5$개, 노란 공 $2$개가 들어 있는 주머니에서 공 $1$개를 꺼낼 때, 빨간 공 또는 노란 공이 나올 확률은?',
      options: ['$\\\\frac{3}{10}$', '$\\\\frac{2}{5}$', '$\\\\frac{1}{2}$', '$\\\\frac{3}{5}$'],
      answer: '$\\\\frac{1}{2}$',
      explanation: '전체: $3 + 5 + 2 = 10$개\\n빨간 또는 노란: $3 + 2 = 5$개\\n확률 $= \\\\frac{5}{10} = \\\\frac{1}{2}$',
    },
  ],
  realLifeExample: '일기예보에서 "비 올 확률 70%"라고 하는 것은 과거 비슷한 기상 조건에서 100번 중 약 70번 비가 왔다는 뜻이에요! 확률은 날씨 예보, 보험료 계산, 게임 밸런싱 등 일상 곳곳에서 사용되는 중요한 개념이랍니다.',
};

export default dayContent;
