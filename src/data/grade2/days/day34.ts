import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 34,
  part: 5,
  title: '미니테스트 + 복습',
  subtitle: 'PART 5 도형의 성질 총정리! 삼각형과 사각형의 성질을 점검하자.',
  isTest: true,
  lectures: [],
  concepts: [
    {
      id: 'g2d34-c1',
      title: 'PART 5 핵심 요약: 삼각형',
      content: '• **이등변삼각형**: 두 밑각이 같다, 꼭지각 이등분선이 밑변을 수직이등분\\n• 두 각이 같으면 → 이등변삼각형\\n• **직각삼각형 합동**: RHS (빗변+한변), RHA (빗변+한예각)',
      type: 'formula',
    },
    {
      id: 'g2d34-c2',
      title: 'PART 5 핵심 요약: 사각형',
      content: '• **평행사변형**: 대변 같음, 대각 같음, 대각선이 서로 이등분\\n• **직사각형**: 네 각 직각 + 대각선 길이 같음\\n• **마름모**: 네 변 같음 + 대각선 수직\\n• **정사각형**: 직사각형 + 마름모 (대각선 같고 수직이등분)',
      type: 'formula',
    },
  ],
  problems: [
    {
      id: 'g2d34-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '이등변삼각형에서 꼭지각이 $80°$일 때, 밑각의 크기는?',
      options: ['$40°$', '$50°$', '$60°$', '$80°$'],
      answer: '$50°$',
      explanation: '밑각 $= \\frac{180° - 80°}{2} = \\frac{100°}{2} = 50°$',
    },
    {
      id: 'g2d34-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: '평행사변형 $ABCD$에서 $\\angle A = 55°$일 때, $\\angle D$의 크기를 구하시오.',
      answer: '125',
      explanation: '$\\angle A + \\angle D = 180°$ (이웃한 각)\\n$\\angle D = 180° - 55° = 125°$',
    },
    {
      id: 'g2d34-p3',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '마름모 $ABCD$에서 $\\overline{AC} = 10$cm, $\\overline{BD} = 24$cm일 때, 한 변의 길이는?',
      options: ['$10$cm', '$12$cm', '$13$cm', '$15$cm'],
      answer: '$13$cm',
      explanation: '마름모의 대각선은 서로 수직이등분하므로\\n반대각선 $= 5$cm, $12$cm\\n\\n한 변 $= \\sqrt{5^2 + 12^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13$(cm)',
    },
    {
      id: 'g2d34-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question: '직사각형 $ABCD$에서 $\\overline{AC}$와 $\\overline{BD}$의 교점을 $O$라 하자. $\\angle AOB = 60°$이고 $\\overline{AC} = 12$cm일 때, $\\triangle AOB$의 넓이를 구하시오.',
      answer: '\\frac{36\\sqrt{3}}{4}',
      explanation: '$\\overline{OA} = \\overline{OB} = 6$cm (대각선 이등분)\\n$\\overline{AC} = \\overline{BD}$이므로 $\\triangle AOB$는 이등변삼각형\\n$\\angle AOB = 60°$이므로 정삼각형!\\n넓이 $= \\frac{\\sqrt{3}}{4} \\times 6^2 = 9\\sqrt{3}$(cm$^2$)',
    },
    {
      id: 'g2d34-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '다음 중 항상 옳은 것은?',
      options: [
        '마름모의 대각선의 길이는 같다',
        '직사각형의 대각선은 서로 수직이다',
        '정사각형의 대각선은 각 꼭짓점에서의 각을 이등분한다',
        '평행사변형의 대각선의 길이는 같다',
      ],
      answer: '정사각형의 대각선은 각 꼭짓점에서의 각을 이등분한다',
      explanation: '정사각형은 마름모의 성질을 갖고, 마름모의 대각선은 각 꼭짓점의 각을 이등분합니다.\\n\\n정사각형의 각 꼭짓점 $90°$를 대각선이 $45°$씩 이등분!',
    },
    {
      id: 'g2d34-p6',
      type: 'short-answer',
      difficulty: 'challenge',
      question: '평행사변형 $ABCD$의 둘레의 길이가 $40$cm이고 $\\overline{AB} : \\overline{BC} = 3 : 2$일 때, $\\overline{AB}$의 길이를 구하시오.',
      answer: '12',
      explanation: '$\\overline{AB} = \\overline{CD}$, $\\overline{BC} = \\overline{AD}$\\n둘레 $= 2(\\overline{AB} + \\overline{BC}) = 40$\\n$\\overline{AB} + \\overline{BC} = 20$\\n\\n$3 : 2$ 비율이므로 $\\overline{AB} = 20 \\times \\frac{3}{5} = 12$(cm)',
    },
  ],
  realLifeExample: 'PART 5 총정리! 도형의 성질은 건축, 디자인, 공학 등 다양한 분야의 기초가 됩니다. 다리의 트러스 구조(삼각형), 건물의 벽돌 패턴(평행사변형), 타일 디자인(마름모와 정사각형)에서 이 성질들이 실제로 활용돼요!',
};

export default dayContent;
