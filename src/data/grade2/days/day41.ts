import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 41,
  part: 6,
  title: '미니테스트 + 복습',
  subtitle: 'PART 6 도형의 닮음 총정리! 닮음, 평행선, 피타고라스를 점검하자.',
  isTest: true,
  lectures: [],
  concepts: [
    {
      id: 'g2d41-c1',
      title: 'PART 6 핵심 요약: 닮음',
      content: '• **닮음**: 확대/축소하여 합동 → 대응변 비 일정, 대응각 같음\\n• **닮음비** $m : n$ → 넓이비 $m^2 : n^2$\\n• **닮음 조건**: AA, SAS, SSS\\n• **평행선과 선분의 비**: $\\overline{DE} \\parallel \\overline{BC}$이면 $\\frac{AD}{DB} = \\frac{AE}{EC}$\\n• **중점연결정리**: 두 변의 중점 연결 → 나머지 변에 평행, 길이 절반',
      type: 'formula',
    },
    {
      id: 'g2d41-c2',
      title: 'PART 6 핵심 요약: 피타고라스 정리',
      content: '• $a^2 + b^2 = c^2$ (직각삼각형, $c$는 빗변)\\n• 두 점 사이 거리: $\\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$\\n• 정삼각형 높이: $\\frac{\\sqrt{3}}{2}a$ (한 변 $a$)\\n• 정사각형 대각선: $\\sqrt{2}a$ (한 변 $a$)\\n• 피타고라스 수: $(3,4,5)$, $(5,12,13)$, $(8,15,17)$',
      type: 'formula',
    },
  ],
  problems: [
    {
      id: 'g2d41-p1',
      type: 'short-answer',
      difficulty: 'basic',
      question: '$\\triangle ABC \\sim \\triangle DEF$이고 닮음비가 $2 : 3$이다. $\\overline{AB} = 8$cm일 때, $\\overline{DE}$를 구하시오.',
      answer: '12',
      explanation: '$\\frac{8}{\\overline{DE}} = \\frac{2}{3}$\\n$\\overline{DE} = \\frac{8 \\times 3}{2} = 12$(cm)',
    },
    {
      id: 'g2d41-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '직각삼각형에서 빗변이 $17$cm, 한 변이 $8$cm일 때, 나머지 한 변은?',
      options: ['$9$cm', '$12$cm', '$15$cm', '$20$cm'],
      answer: '$15$cm',
      explanation: '$b = \\sqrt{17^2 - 8^2} = \\sqrt{289 - 64} = \\sqrt{225} = 15$(cm)',
    },
    {
      id: 'g2d41-p3',
      type: 'short-answer',
      difficulty: 'applied',
      question: '$\\triangle ABC$에서 $\\overline{DE} \\parallel \\overline{BC}$이고 $\\overline{AD} = 6$, $\\overline{AB} = 15$, $\\overline{BC} = 20$일 때, $\\overline{DE}$를 구하시오.',
      answer: '8',
      explanation: '$\\frac{\\overline{AD}}{\\overline{AB}} = \\frac{\\overline{DE}}{\\overline{BC}}$\\n$\\frac{6}{15} = \\frac{\\overline{DE}}{20}$\\n$\\overline{DE} = \\frac{6 \\times 20}{15} = 8$',
    },
    {
      id: 'g2d41-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question: '두 점 $A(-1, 3)$, $B(3, 0)$ 사이의 거리를 구하시오.',
      answer: '5',
      explanation: '$\\overline{AB} = \\sqrt{(3-(-1))^2 + (0-3)^2} = \\sqrt{16 + 9} = \\sqrt{25} = 5$',
    },
    {
      id: 'g2d41-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '닮음비가 $3 : 5$인 두 삼각형에서 작은 삼각형의 넓이가 $18$cm$^2$일 때, 큰 삼각형의 넓이는?',
      options: ['$30$cm$^2$', '$40$cm$^2$', '$45$cm$^2$', '$50$cm$^2$'],
      answer: '$50$cm$^2$',
      explanation: '넓이비 $= 3^2 : 5^2 = 9 : 25$\\n$\\frac{18}{S} = \\frac{9}{25}$\\n$S = \\frac{18 \\times 25}{9} = 50$(cm$^2$)',
    },
    {
      id: 'g2d41-p6',
      type: 'short-answer',
      difficulty: 'challenge',
      question: '사다리꼴 $ABCD$에서 $\\overline{AD} \\parallel \\overline{BC}$, $\\overline{AD} = 4$, $\\overline{BC} = 10$이다. 대각선 $\\overline{AC}$와 $\\overline{BD}$의 교점을 $O$라 할 때, $\\overline{AO} : \\overline{OC}$를 구하시오. (a:b 형태)',
      answer: '2:5',
      explanation: '$\\triangle AOD \\sim \\triangle COB$ (AA 닮음)\\n닮음비 $= \\overline{AD} : \\overline{BC} = 4 : 10 = 2 : 5$\\n따라서 $\\overline{AO} : \\overline{OC} = 2 : 5$',
    },
  ],
  realLifeExample: 'PART 6 총정리! 닮음은 지도, 모형, 사진에서, 피타고라스 정리는 건축, 항해, GPS에서 활용됩니다. 특히 피타고라스 정리는 수학 역사상 가장 많이 응용되는 정리 중 하나로, 3D 게임 엔진에서도 거리 계산에 사용해요!',
};

export default dayContent;
