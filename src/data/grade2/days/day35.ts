import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 35,
  part: 6,
  title: '닮음의 뜻과 닮음비',
  subtitle: '도형의 닮음이란 무엇이고, 닮음비는 어떻게 구할까?',
  lectures: [],
  concepts: [
    {
      id: 'g2d35-c1',
      title: '닮음의 뜻',
      content: '한 도형을 일정한 비율로 확대 또는 축소하여 다른 도형과 합동이 되면, 두 도형은 **닮음**이라 합니다.\\n\\n기호: $\\\\triangle ABC \\\\sim \\\\triangle DEF$\\n\\n• 대응변의 길이의 **비**가 일정\\n• 대응각의 **크기**가 같음',
      type: 'definition',
    },
    {
      id: 'g2d35-c2',
      title: '닮음비',
      content: '닮은 두 도형에서 대응변의 길이의 비를 **닮음비**라 합니다.\\n\\n$\\\\triangle ABC \\\\sim \\\\triangle DEF$이고 닮음비가 $m : n$이면:\\n$$\\\\frac{\\\\overline{AB}}{\\\\overline{DE}} = \\\\frac{\\\\overline{BC}}{\\\\overline{EF}} = \\\\frac{\\\\overline{CA}}{\\\\overline{FD}} = \\\\frac{m}{n}$$\\n\\n• 넓이비 $= m^2 : n^2$\\n• 부피비 $= m^3 : n^3$ (입체도형)',
      type: 'formula',
    },
    {
      id: 'g2d35-c3',
      title: '닮음의 위치',
      content: '한 점(닮음의 중심)에서 같은 비율로 확대 또는 축소한 두 도형은 **닮음의 위치**에 있다고 합니다.\\n\\n• 닮음의 중심에서 대응점까지의 거리의 비 = 닮음비\\n• 대응변은 평행',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'g2d35-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$\\\\triangle ABC \\\\sim \\\\triangle DEF$이고 $\\\\overline{AB} = 6$cm, $\\\\overline{DE} = 9$cm일 때, 닮음비는?',
      options: ['$1 : 2$', '$2 : 3$', '$3 : 4$', '$3 : 2$'],
      answer: '$2 : 3$',
      explanation: '닮음비 $= \\\\overline{AB} : \\\\overline{DE} = 6 : 9 = 2 : 3$',
    },
    {
      id: 'g2d35-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: '$\\\\triangle ABC \\\\sim \\\\triangle DEF$이고 닮음비가 $3 : 5$이다. $\\\\overline{BC} = 12$cm일 때, $\\\\overline{EF}$의 길이를 구하시오.',
      answer: '20',
      explanation: '$\\\\frac{\\\\overline{BC}}{\\\\overline{EF}} = \\\\frac{3}{5}$\\n$\\\\frac{12}{\\\\overline{EF}} = \\\\frac{3}{5}$\\n$\\\\overline{EF} = \\\\frac{12 \\\\times 5}{3} = 20$(cm)',
    },
    {
      id: 'g2d35-p3',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '닮음비가 $2 : 5$인 두 닮은 삼각형의 넓이비는?',
      options: ['$2 : 5$', '$4 : 10$', '$4 : 25$', '$8 : 125$'],
      answer: '$4 : 25$',
      explanation: '넓이비 $= $ (닮음비)$^2 = 2^2 : 5^2 = 4 : 25$',
    },
    {
      id: 'g2d35-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question: '닮은 두 직사각형의 넓이비가 $9 : 16$일 때, 닮음비를 구하시오. (a:b 형태로)',
      answer: '3:4',
      explanation: '넓이비 $= $ (닮음비)$^2$이므로\\n닮음비 $= \\\\sqrt{9} : \\\\sqrt{16} = 3 : 4$',
    },
    {
      id: 'g2d35-p5',
      type: 'short-answer',
      difficulty: 'challenge',
      question: '$\\\\triangle ABC \\\\sim \\\\triangle DEF$이고 닮음비가 $3 : 4$이다. $\\\\triangle ABC$의 넓이가 $27$cm$^2$일 때, $\\\\triangle DEF$의 넓이를 구하시오.',
      answer: '48',
      explanation: '넓이비 $= 3^2 : 4^2 = 9 : 16$\\n$\\\\frac{27}{\\\\triangle DEF} = \\\\frac{9}{16}$\\n$\\\\triangle DEF = \\\\frac{27 \\\\times 16}{9} = 48$(cm$^2$)',
    },
  ],
  realLifeExample: '지도는 닮음의 대표적인 예시예요! 축척 1:50000인 지도는 실제 거리를 50000분의 1로 축소한 것이므로 닮음비가 1:50000입니다. 모형 자동차, 건축 모형, 사진 확대/축소도 모두 닮음 개념이 적용돼요.',
};

export default dayContent;
