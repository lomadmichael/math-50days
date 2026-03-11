import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 31,
  part: 5,
  title: '직각삼각형의 합동 조건',
  subtitle: '직각삼각형만의 특별한 합동 조건을 알아보자!',
  lectures: [],
  concepts: [
    {
      id: 'g2d31-c1',
      title: '삼각형의 합동 조건 복습',
      content: '두 삼각형이 합동이 되려면 (일반 삼각형):\\n\\n• **SSS 합동**: 세 변의 길이가 각각 같을 때\\n• **SAS 합동**: 두 변의 길이와 그 끼인각이 같을 때\\n• **ASA 합동**: 한 변의 길이와 그 양 끝각이 같을 때',
      type: 'definition',
    },
    {
      id: 'g2d31-c2',
      title: '직각삼각형의 합동 조건',
      content: '직각삼각형에서는 추가 합동 조건이 있습니다:\\n\\n• **RHS 합동**: 빗변의 길이와 다른 한 변의 길이가 같을 때\\n  ($R$: Right angle, $H$: Hypotenuse, $S$: Side)\\n\\n• **RHA 합동**: 빗변의 길이와 한 예각의 크기가 같을 때\\n  ($R$: Right angle, $H$: Hypotenuse, $A$: Angle)\\n\\n직각이 이미 하나의 조건을 제공하기 때문에 가능!',
      type: 'formula',
    },
    {
      id: 'g2d31-c3',
      title: 'RHS 합동의 활용',
      content: 'RHS 합동은 이등변삼각형의 성질을 증명할 때 자주 사용됩니다.\\n\\n예) 이등변삼각형 $ABC$에서 꼭지각의 이등분선 $AD$를 그으면\\n$\\\\triangle ABD$와 $\\\\triangle ACD$에서:\\n• $\\\\angle ADB = \\\\angle ADC = 90°$ (수직)\\n• $\\\\overline{AB} = \\\\overline{AC}$ (이등변)\\n• $\\\\overline{AD}$: 공통\\n→ **RHS 합동**!',
      type: 'example',
    },
  ],
  problems: [
    {
      id: 'g2d31-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '두 직각삼각형에서 빗변의 길이가 $10$cm로 같고, 다른 한 변의 길이가 $6$cm로 같다. 이때 사용되는 합동 조건은?',
      options: ['SSS 합동', 'SAS 합동', 'ASA 합동', 'RHS 합동'],
      answer: 'RHS 합동',
      explanation: '직각삼각형에서 빗변(H)과 다른 한 변(S)의 길이가 같으므로\\n**RHS 합동** 조건에 해당합니다.',
    },
    {
      id: 'g2d31-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '직각삼각형 $ABC$와 $DEF$에서 $\\\\angle C = \\\\angle F = 90°$이다. $\\\\overline{AB} = \\\\overline{DE}$, $\\\\angle A = \\\\angle D$일 때, 합동 조건은?',
      options: ['SSS 합동', 'SAS 합동', 'RHS 합동', 'RHA 합동'],
      answer: 'RHA 합동',
      explanation: '직각(R), 빗변(H) $\\\\overline{AB} = \\\\overline{DE}$, 한 예각(A) $\\\\angle A = \\\\angle D$\\n→ **RHA 합동**',
    },
    {
      id: 'g2d31-p3',
      type: 'short-answer',
      difficulty: 'applied',
      question: '직각삼각형 $ABC$에서 $\\\\angle C = 90°$, $\\\\overline{AB} = 13$cm, $\\\\overline{AC} = 5$cm일 때, $\\\\overline{BC}$의 길이를 구하시오.',
      answer: '12',
      explanation: '피타고라스 정리: $\\\\overline{AB}^2 = \\\\overline{AC}^2 + \\\\overline{BC}^2$\\n$13^2 = 5^2 + \\\\overline{BC}^2$\\n$169 = 25 + \\\\overline{BC}^2$\\n$\\\\overline{BC}^2 = 144$\\n$\\\\overline{BC} = 12$(cm)',
    },
    {
      id: 'g2d31-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '다음 중 두 직각삼각형이 합동임을 보일 수 있는 조건이 아닌 것은?',
      options: ['빗변과 한 예각이 같다', '빗변과 다른 한 변이 같다', '두 예각이 각각 같다', '한 변과 그 양 끝각이 같다'],
      answer: '두 예각이 각각 같다',
      explanation: '두 예각만 같으면 크기(변의 길이)를 알 수 없어 합동이 아닌 닮음일 수 있습니다.\\n\\n변의 길이에 대한 정보가 하나도 없으면 합동 판정 불가!',
    },
    {
      id: 'g2d31-p5',
      type: 'short-answer',
      difficulty: 'challenge',
      question: '점 $P$에서 $\\\\angle XOY$의 두 변 $OX$, $OY$에 내린 수선의 발을 각각 $A$, $B$라 하자. $\\\\overline{PA} = \\\\overline{PB}$이면 $\\\\overline{OA} = \\\\overline{OB}$임을 보이기 위해 사용할 합동 조건은? (RHS 또는 RHA 중 답하시오)',
      answer: 'RHS',
      explanation: '$\\\\triangle OAP$와 $\\\\triangle OBP$에서:\\n• $\\\\angle OAP = \\\\angle OBP = 90°$ (수선)\\n• $\\\\overline{OP}$: 공통 (빗변)\\n• $\\\\overline{PA} = \\\\overline{PB}$ (조건)\\n→ **RHS 합동**\\n따라서 $\\\\overline{OA} = \\\\overline{OB}$',
    },
  ],
  realLifeExample: '건물의 지붕 트러스 구조에서 직각삼각형의 합동이 활용돼요. 좌우 대칭인 지붕을 설계할 때, 한쪽 직각삼각형과 반대쪽 직각삼각형이 RHS 합동이면 정확히 같은 모양이 되어 안정적인 구조를 만들 수 있습니다.',
};

export default dayContent;
