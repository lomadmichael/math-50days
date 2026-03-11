import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 38,
  part: 6,
  title: '평행선과 선분의 비 (2)',
  subtitle: '삼각형의 중점연결정리를 알아보자!',
  lectures: [],
  concepts: [
    {
      id: 'g2d38-c1',
      title: '삼각형의 중점연결정리',
      content: '$\\\\triangle ABC$에서 $\\\\overline{AB}$의 중점 $M$과 $\\\\overline{AC}$의 중점 $N$을 연결하면:\\n\\n$$\\\\overline{MN} \\\\parallel \\\\overline{BC}, \\\\quad \\\\overline{MN} = \\\\frac{1}{2}\\\\overline{BC}$$\\n\\n두 변의 중점을 연결한 선분은 나머지 변에 평행하고 길이가 절반!',
      type: 'formula',
    },
    {
      id: 'g2d38-c2',
      title: '중점연결정리의 역',
      content: '$\\\\triangle ABC$에서 $\\\\overline{AB}$의 중점 $M$을 지나고 $\\\\overline{BC}$에 평행한 직선이 $\\\\overline{AC}$와 만나는 점을 $N$이라 하면:\\n\\n$N$은 $\\\\overline{AC}$의 중점이다!\\n\\n한 변의 중점을 지나고 다른 변에 평행한 직선 → 나머지 변의 중점을 지남',
      type: 'formula',
    },
    {
      id: 'g2d38-c3',
      title: '사다리꼴에서의 중점연결',
      content: '사다리꼴 $ABCD$에서 $\\\\overline{AD} \\\\parallel \\\\overline{BC}$이고, 두 변 $\\\\overline{AB}$, $\\\\overline{CD}$의 중점을 $M$, $N$이라 하면:\\n\\n$$\\\\overline{MN} = \\\\frac{\\\\overline{AD} + \\\\overline{BC}}{2}$$\\n\\n(윗변과 아랫변의 평균!)',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'g2d38-p1',
      type: 'short-answer',
      difficulty: 'basic',
      question: '$\\\\triangle ABC$에서 $M$, $N$이 각각 $\\\\overline{AB}$, $\\\\overline{AC}$의 중점이고 $\\\\overline{BC} = 14$cm일 때, $\\\\overline{MN}$의 길이를 구하시오.',
      answer: '7',
      explanation: '중점연결정리: $\\\\overline{MN} = \\\\frac{1}{2}\\\\overline{BC} = \\\\frac{1}{2} \\\\times 14 = 7$(cm)',
    },
    {
      id: 'g2d38-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$\\\\triangle ABC$에서 $\\\\overline{AB}$의 중점 $M$과 $\\\\overline{AC}$의 중점 $N$을 연결할 때, $\\\\overline{MN}$과 $\\\\overline{BC}$의 관계는?',
      options: ['수직이다', '평행하다', '같은 길이이다', '관계없다'],
      answer: '평행하다',
      explanation: '중점연결정리에 의해 $\\\\overline{MN} \\\\parallel \\\\overline{BC}$\\n또한 $\\\\overline{MN} = \\\\frac{1}{2}\\\\overline{BC}$',
    },
    {
      id: 'g2d38-p3',
      type: 'short-answer',
      difficulty: 'applied',
      question: '$\\\\triangle ABC$에서 세 변의 중점을 $D$, $E$, $F$라 하자. $\\\\overline{AB} = 10$, $\\\\overline{BC} = 12$, $\\\\overline{CA} = 8$일 때, $\\\\triangle DEF$의 둘레를 구하시오.',
      answer: '15',
      explanation: '중점연결정리에 의해 $\\\\triangle DEF$의 각 변은 원래 삼각형 변의 절반:\\n$\\\\overline{DE} = \\\\frac{1}{2} \\\\times 8 = 4$\\n$\\\\overline{EF} = \\\\frac{1}{2} \\\\times 10 = 5$\\n$\\\\overline{FD} = \\\\frac{1}{2} \\\\times 12 = 6$\\n\\n둘레 $= 4 + 5 + 6 = 15$',
    },
    {
      id: 'g2d38-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question: '사다리꼴 $ABCD$에서 $\\\\overline{AD} \\\\parallel \\\\overline{BC}$이고 $\\\\overline{AD} = 6$cm, $\\\\overline{BC} = 14$cm이다. 두 변의 중점을 연결한 선분의 길이를 구하시오.',
      answer: '10',
      explanation: '사다리꼴의 중점연결:\\n$\\\\overline{MN} = \\\\frac{\\\\overline{AD} + \\\\overline{BC}}{2} = \\\\frac{6 + 14}{2} = 10$(cm)',
    },
    {
      id: 'g2d38-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '$\\\\triangle ABC$에서 $\\\\overline{AB}$의 중점 $M$, $\\\\overline{AC}$의 중점 $N$일 때, $\\\\triangle AMN$과 $\\\\triangle ABC$의 넓이비는?',
      options: ['$1 : 2$', '$1 : 3$', '$1 : 4$', '$1 : 8$'],
      answer: '$1 : 4$',
      explanation: '$\\\\triangle AMN \\\\sim \\\\triangle ABC$ (SAS 닮음)\\n닮음비 $= 1 : 2$\\n넓이비 $= 1^2 : 2^2 = 1 : 4$\\n\\n즉, $\\\\triangle AMN$의 넓이는 $\\\\triangle ABC$의 $\\\\frac{1}{4}$',
    },
  ],
  realLifeExample: '삼각형 모양의 천막에서 양쪽 기둥의 중간 높이에 수평 지지대를 설치하면, 그 지지대의 길이는 바닥 밑변의 정확히 절반이 됩니다. 이것이 바로 중점연결정리! 공학과 건축에서 구조물 설계 시 자주 활용되는 원리예요.',
};

export default dayContent;
