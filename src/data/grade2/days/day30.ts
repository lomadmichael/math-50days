import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 30,
  part: 5,
  title: '이등변삼각형의 성질',
  subtitle: '이등변삼각형의 성질과 조건을 알아보자!',
  lectures: [],
  concepts: [
    {
      id: 'g2d30-c1',
      title: '이등변삼각형의 정의',
      content: '**이등변삼각형**: 두 변의 길이가 같은 삼각형\\n\\n• 같은 두 변 → **등변**\\n• 등변 사이의 각 → **꼭지각**\\n• 등변과 밑변이 이루는 각 → **밑각**',
      type: 'definition',
    },
    {
      id: 'g2d30-c2',
      title: '이등변삼각형의 성질',
      content: '**성질 1**: 이등변삼각형의 두 밑각의 크기는 같다.\\n$\\overline{AB} = \\overline{AC}$이면 $\\angle B = \\angle C$\\n\\n**성질 2**: 이등변삼각형의 꼭지각의 이등분선은 밑변을 수직이등분한다.\\n꼭지각의 이등분선은 밑변의 중점을 지나고, 밑변에 수직!',
      type: 'formula',
    },
    {
      id: 'g2d30-c3',
      title: '이등변삼각형이 되는 조건',
      content: '삼각형에서 두 내각의 크기가 같으면 이등변삼각형입니다.\\n\\n$\\angle B = \\angle C$이면 $\\overline{AB} = \\overline{AC}$\\n\\n이것은 이등변삼각형 성질의 **역**입니다.\\n두 각이 같은 삼각형을 발견하면 → 이등변삼각형!',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'g2d30-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '이등변삼각형 $ABC$에서 $\\overline{AB} = \\overline{AC}$이고 $\\angle A = 40°$일 때, $\\angle B$의 크기는?',
      options: ['$40°$', '$60°$', '$70°$', '$80°$'],
      answer: '$70°$',
      explanation: '삼각형의 내각의 합 $= 180°$\\n$\\angle B = \\angle C$ (이등변삼각형의 밑각)\\n\\n$40° + \\angle B + \\angle C = 180°$\\n$40° + 2\\angle B = 180°$\\n$\\angle B = 70°$',
    },
    {
      id: 'g2d30-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: '이등변삼각형 $ABC$에서 $\\overline{AB} = \\overline{AC}$이고 $\\angle B = 65°$일 때, 꼭지각 $\\angle A$의 크기를 구하시오.',
      answer: '50',
      explanation: '$\\angle B = \\angle C = 65°$ (밑각)\\n$\\angle A = 180° - 65° - 65° = 50°$',
    },
    {
      id: 'g2d30-p3',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '이등변삼각형 $ABC$에서 $\\overline{AB} = \\overline{AC} = 10$cm이고 꼭지각의 이등분선의 발을 $D$라 할 때, $\\overline{BD}$는? (단, $\\overline{BC} = 12$cm)',
      options: ['$4$cm', '$5$cm', '$6$cm', '$8$cm'],
      answer: '$6$cm',
      explanation: '꼭지각의 이등분선은 밑변을 이등분하므로\\n$\\overline{BD} = \\frac{1}{2} \\times \\overline{BC} = \\frac{1}{2} \\times 12 = 6$(cm)',
    },
    {
      id: 'g2d30-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question: '삼각형 $ABC$에서 $\\angle A = 36°$, $\\angle B = 72°$일 때, 이 삼각형에서 길이가 같은 두 변을 찾으시오. (예: AB=BC 형태로 답하시오)',
      answer: 'AB=BC',
      explanation: '$\\angle C = 180° - 36° - 72° = 72°$\\n$\\angle B = \\angle C = 72°$\\n\\n두 밑각이 같으므로 이등변삼각형이고\\n$\\angle B = \\angle C$의 대변이 같으므로 $\\overline{AB} = \\overline{BC}$',
    },
    {
      id: 'g2d30-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '이등변삼각형 $ABC$에서 $\\overline{AB} = \\overline{AC}$이고 $\\angle A$의 외각이 $100°$일 때, $\\angle B$의 크기는?',
      options: ['$40°$', '$50°$', '$60°$', '$80°$'],
      answer: '$50°$',
      explanation: '$\\angle A$의 외각 $= 100°$이므로\\n$\\angle A = 180° - 100° = 80°$\\n\\n이등변삼각형에서 $\\angle B = \\angle C$이므로\\n$\\angle B = \\frac{180° - 80°}{2} = 50°$',
    },
  ],
  realLifeExample: '에펠탑의 정면 모양이 이등변삼각형과 비슷해요! 건축물에서 이등변삼각형 구조는 좌우 대칭이라 힘을 고르게 분산시켜 안정적입니다. 지붕의 뾰족한 부분도 이등변삼각형 원리를 활용한 거예요.',
};

export default dayContent;
