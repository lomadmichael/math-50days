import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 46,
  part: 7,
  title: '확률의 계산 (2)',
  subtitle: '여사건의 확률을 활용하여 효율적으로 문제를 풀어 보자!',
  lectures: [],
  concepts: [
    {
      id: 'g2d46-c1',
      title: '여사건이란?',
      content: '사건 $A$가 일어나지 않는 사건을 $A$의 **여사건**이라 하고 $A^c$로 나타냅니다.\\n\\n예) 주사위에서 "짝수" 사건의 여사건 = "홀수"\\n예) "적어도 1개 당첨"의 여사건 = "모두 꽝"',
      type: 'definition',
    },
    {
      id: 'g2d46-c2',
      title: '여사건의 확률',
      content: '$$P(A^c) = 1 - P(A)$$\\n\\n또는 반대로:\\n$$P(A) = 1 - P(A^c)$$\\n\\n"적어도 ~"가 나오면 여사건을 생각하자!\\n직접 구하기 어려운 확률 → 여사건으로 쉽게!',
      type: 'formula',
    },
    {
      id: 'g2d46-c3',
      title: '여사건 활용이 유리한 경우',
      content: '"적어도 하나"가 포함된 문제에서 여사건이 유리합니다:\\n\\n• "적어도 1개 당첨" → 여사건: "모두 꽝"\\n• "적어도 1명 여학생" → 여사건: "모두 남학생"\\n• "적어도 1개 짝수" → 여사건: "모두 홀수"\\n\\n경우가 적은 쪽을 계산하는 것이 효율적!',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'g2d46-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '주사위를 던질 때, $4$ 이하가 나올 확률은?',
      options: ['$\\\\frac{1}{3}$', '$\\\\frac{1}{2}$', '$\\\\frac{2}{3}$', '$\\\\frac{5}{6}$'],
      answer: '$\\\\frac{2}{3}$',
      explanation: '직접: $\\\\frac{4}{6} = \\\\frac{2}{3}$\\n\\n여사건 활용: $5$ 이상 나올 확률 $= \\\\frac{2}{6} = \\\\frac{1}{3}$\\n$P = 1 - \\\\frac{1}{3} = \\\\frac{2}{3}$',
    },
    {
      id: 'g2d46-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: '어떤 사건 $A$가 일어날 확률이 $\\\\frac{3}{8}$일 때, $A$가 일어나지 않을 확률을 기약분수로 구하시오.',
      answer: '5/8',
      explanation: '$P(A^c) = 1 - P(A) = 1 - \\\\frac{3}{8} = \\\\frac{5}{8}$',
    },
    {
      id: 'g2d46-p3',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '동전 $3$개를 동시에 던질 때, 적어도 $1$개가 앞면일 확률은?',
      options: ['$\\\\frac{1}{8}$', '$\\\\frac{3}{8}$', '$\\\\frac{5}{8}$', '$\\\\frac{7}{8}$'],
      answer: '$\\\\frac{7}{8}$',
      explanation: '여사건: 모두 뒷면\\n$P(\\\\text{모두 뒷면}) = \\\\frac{1}{2} \\\\times \\\\frac{1}{2} \\\\times \\\\frac{1}{2} = \\\\frac{1}{8}$\\n\\n적어도 1개 앞면:\\n$P = 1 - \\\\frac{1}{8} = \\\\frac{7}{8}$',
    },
    {
      id: 'g2d46-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question: '두 개의 주사위를 던질 때, 눈의 합이 $4$ 이상일 확률을 기약분수로 구하시오.',
      answer: '11/12',
      explanation: '여사건: 눈의 합이 $3$ 이하\\n합이 $2$: $(1,1)$ → $1$가지\\n합이 $3$: $(1,2), (2,1)$ → $2$가지\\n합계: $3$가지\\n\\n$P(3\\\\text{ 이하}) = \\\\frac{3}{36} = \\\\frac{1}{12}$\\n$P(4\\\\text{ 이상}) = 1 - \\\\frac{1}{12} = \\\\frac{11}{12}$',
    },
    {
      id: 'g2d46-p5',
      type: 'short-answer',
      difficulty: 'challenge',
      question: '불량률이 $10\\\\%$인 제품 $2$개를 검사할 때, 적어도 $1$개가 불량일 확률을 기약분수로 구하시오.',
      answer: '19/100',
      explanation: '양품 확률 $= \\\\frac{9}{10}$\\n여사건: 모두 양품\\n$P(\\\\text{모두 양품}) = \\\\frac{9}{10} \\\\times \\\\frac{9}{10} = \\\\frac{81}{100}$\\n\\n적어도 1개 불량:\\n$P = 1 - \\\\frac{81}{100} = \\\\frac{19}{100}$',
    },
  ],
  realLifeExample: '생일 역설을 아시나요? 23명만 모여도 같은 생일인 사람이 있을 확률이 50%를 넘어요! 이걸 구할 때 "적어도 한 쌍이 같은 생일"의 여사건인 "모두 다른 생일"의 확률을 먼저 계산하면 쉽습니다. 여사건은 복잡한 확률을 간단하게 만들어 주는 마법 같은 도구예요!',
};

export default dayContent;
