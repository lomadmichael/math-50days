import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 33,
  part: 5,
  title: '여러 가지 사각형',
  subtitle: '직사각형, 마름모, 정사각형의 성질과 관계를 알아보자!',
  lectures: [],
  concepts: [
    {
      id: 'g2d33-c1',
      title: '직사각형',
      content: '**직사각형**: 네 각이 모두 직각인 사각형\\n\\n• 평행사변형의 성질을 모두 가짐\\n• 추가 성질: **두 대각선의 길이가 같다** ($\\overline{AC} = \\overline{BD}$)\\n• 평행사변형에서 한 내각이 $90°$이면 직사각형!',
      type: 'definition',
    },
    {
      id: 'g2d33-c2',
      title: '마름모',
      content: '**마름모**: 네 변의 길이가 모두 같은 사각형\\n\\n• 평행사변형의 성질을 모두 가짐\\n• 추가 성질: **두 대각선이 서로 수직** ($\\overline{AC} \\perp \\overline{BD}$)\\n• 평행사변형에서 이웃한 두 변의 길이가 같으면 마름모!',
      type: 'definition',
    },
    {
      id: 'g2d33-c3',
      title: '정사각형',
      content: '**정사각형**: 네 변의 길이가 같고 네 각이 모두 직각인 사각형\\n\\n• 직사각형 + 마름모의 성질을 모두 가짐\\n• 대각선의 길이가 같고 서로 수직이등분\\n\\n포함 관계: 정사각형 ⊂ 직사각형 ⊂ 평행사변형\\n정사각형 ⊂ 마름모 ⊂ 평행사변형',
      type: 'definition',
    },
    {
      id: 'g2d33-c4',
      title: '사각형의 포함 관계 정리',
      content: '사각형 → 사다리꼴 → 평행사변형 → 직사각형 → 정사각형\\n사각형 → 사다리꼴 → 평행사변형 → 마름모 → 정사각형\\n\\n• **사다리꼴**: 한 쌍의 대변이 평행\\n• **등변사다리꼴**: 평행하지 않은 두 변의 길이가 같은 사다리꼴',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'g2d33-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '다음 중 직사각형의 성질이 아닌 것은?',
      options: ['네 각이 모두 직각이다', '두 대각선의 길이가 같다', '두 대각선이 서로 수직이다', '두 대각선이 서로를 이등분한다'],
      answer: '두 대각선이 서로 수직이다',
      explanation: '대각선이 서로 수직인 것은 **마름모**의 성질입니다.\\n직사각형은 대각선의 길이가 같고 서로 이등분하지만, 반드시 수직은 아닙니다.',
    },
    {
      id: 'g2d33-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '마름모의 한 변의 길이가 $6$cm일 때, 둘레의 길이는?',
      options: ['$12$cm', '$18$cm', '$24$cm', '$36$cm'],
      answer: '$24$cm',
      explanation: '마름모는 네 변의 길이가 모두 같으므로\\n둘레 $= 4 \\times 6 = 24$(cm)',
    },
    {
      id: 'g2d33-p3',
      type: 'short-answer',
      difficulty: 'applied',
      question: '직사각형 $ABCD$에서 두 대각선의 교점을 $O$라 하고, $\\overline{AC} = 10$cm일 때, $\\overline{OB}$의 길이를 구하시오.',
      answer: '5',
      explanation: '직사각형에서 두 대각선의 길이가 같으므로\\n$\\overline{BD} = \\overline{AC} = 10$cm\\n\\n대각선이 서로 이등분하므로\\n$\\overline{OB} = \\frac{1}{2} \\times 10 = 5$(cm)',
    },
    {
      id: 'g2d33-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question: '마름모 $ABCD$에서 $\\overline{AC} = 8$cm, $\\overline{BD} = 6$cm일 때, 마름모의 넓이를 구하시오.',
      answer: '24',
      explanation: '마름모의 넓이 $= \\frac{1}{2} \\times$ 대각선 $\\times$ 대각선\\n$= \\frac{1}{2} \\times 8 \\times 6 = 24$(cm$^2$)',
    },
    {
      id: 'g2d33-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '평행사변형 $ABCD$가 마름모가 되기 위한 추가 조건으로 옳지 않은 것은?',
      options: [
        '$\\overline{AB} = \\overline{BC}$',
        '$\\overline{AC} \\perp \\overline{BD}$',
        '$\\overline{AC} = \\overline{BD}$',
        '$\\angle ABC$의 이등분선이 대각선 $\\overline{AC}$와 일치',
      ],
      answer: '$\\overline{AC} = \\overline{BD}$',
      explanation: '두 대각선의 길이가 같은 평행사변형은 **직사각형**이지 마름모가 아닙니다.\\n\\n마름모 조건: 이웃한 두 변이 같거나, 대각선이 수직이거나, 대각선이 각을 이등분',
    },
  ],
  realLifeExample: '야구 다이아몬드는 정사각형이에요! 한 변의 길이가 약 27.4m인 정사각형으로, 대각선이 서로 수직이등분하는 성질 덕분에 투수 마운드가 정확히 대각선 위에 놓입니다. 일상 속 타일, 초콜릿, 다이아몬드 모양도 마름모의 예시랍니다.',
};

export default dayContent;
