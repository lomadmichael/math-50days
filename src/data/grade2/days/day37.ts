import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 37,
  part: 6,
  title: '평행선과 선분의 비 (1)',
  subtitle: '삼각형에서 평행선이 만드는 선분의 비를 알아보자!',
  lectures: [],
  concepts: [
    {
      id: 'g2d37-c1',
      title: '삼각형에서 평행선과 선분의 비',
      content: '$\\\\triangle ABC$에서 $\\\\overline{BC} \\\\parallel \\\\overline{DE}$ ($D$는 $\\\\overline{AB}$ 위, $E$는 $\\\\overline{AC}$ 위)이면:\\n\\n$$\\\\frac{\\\\overline{AD}}{\\\\overline{DB}} = \\\\frac{\\\\overline{AE}}{\\\\overline{EC}}$$\\n\\n또한:\\n$$\\\\frac{\\\\overline{AD}}{\\\\overline{AB}} = \\\\frac{\\\\overline{AE}}{\\\\overline{AC}} = \\\\frac{\\\\overline{DE}}{\\\\overline{BC}}$$',
      type: 'formula',
    },
    {
      id: 'g2d37-c2',
      title: '평행선과 선분의 비의 역',
      content: '$\\\\triangle ABC$에서 $\\\\overline{AB}$ 위의 점 $D$, $\\\\overline{AC}$ 위의 점 $E$에 대해\\n$$\\\\frac{\\\\overline{AD}}{\\\\overline{DB}} = \\\\frac{\\\\overline{AE}}{\\\\overline{EC}}$$\\n이면 $\\\\overline{DE} \\\\parallel \\\\overline{BC}$\\n\\n즉, 선분의 비가 같으면 평행!',
      type: 'formula',
    },
    {
      id: 'g2d37-c3',
      title: '평행선 사이의 선분의 비',
      content: '세 평행선 $l \\\\parallel m \\\\parallel n$이 두 직선과 만날 때:\\n\\n한 직선에서의 선분의 비 = 다른 직선에서의 선분의 비\\n$$\\\\frac{a}{b} = \\\\frac{a\'}{b\'}$$\\n\\n이 성질은 평행선이 몇 개든 확장됩니다!',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'g2d37-p1',
      type: 'short-answer',
      difficulty: 'basic',
      question: '$\\\\triangle ABC$에서 $\\\\overline{DE} \\\\parallel \\\\overline{BC}$이고 $\\\\overline{AD} = 4$, $\\\\overline{DB} = 6$, $\\\\overline{AE} = 3$일 때, $\\\\overline{EC}$의 길이를 구하시오.',
      answer: '4.5',
      explanation: '$\\\\frac{\\\\overline{AD}}{\\\\overline{DB}} = \\\\frac{\\\\overline{AE}}{\\\\overline{EC}}$\\n$\\\\frac{4}{6} = \\\\frac{3}{\\\\overline{EC}}$\\n$\\\\overline{EC} = \\\\frac{6 \\\\times 3}{4} = 4.5$',
    },
    {
      id: 'g2d37-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$\\\\triangle ABC$에서 $\\\\overline{DE} \\\\parallel \\\\overline{BC}$이고 $\\\\overline{AD} = 3$, $\\\\overline{AB} = 9$, $\\\\overline{BC} = 12$일 때, $\\\\overline{DE}$는?',
      options: ['$3$', '$4$', '$6$', '$8$'],
      answer: '$4$',
      explanation: '$\\\\frac{\\\\overline{AD}}{\\\\overline{AB}} = \\\\frac{\\\\overline{DE}}{\\\\overline{BC}}$\\n$\\\\frac{3}{9} = \\\\frac{\\\\overline{DE}}{12}$\\n$\\\\overline{DE} = \\\\frac{3 \\\\times 12}{9} = 4$',
    },
    {
      id: 'g2d37-p3',
      type: 'short-answer',
      difficulty: 'applied',
      question: '$\\\\triangle ABC$에서 $\\\\overline{AB}$ 위의 점 $D$, $\\\\overline{AC}$ 위의 점 $E$에 대해 $\\\\overline{AD} = 5$, $\\\\overline{DB} = 10$, $\\\\overline{AE} = 3$, $\\\\overline{EC} = 6$이다. $\\\\overline{DE} \\\\parallel \\\\overline{BC}$인지 판별하시오. (평행 또는 평행아님)',
      answer: '평행',
      explanation: '$\\\\frac{\\\\overline{AD}}{\\\\overline{DB}} = \\\\frac{5}{10} = \\\\frac{1}{2}$\\n$\\\\frac{\\\\overline{AE}}{\\\\overline{EC}} = \\\\frac{3}{6} = \\\\frac{1}{2}$\\n\\n비가 같으므로 $\\\\overline{DE} \\\\parallel \\\\overline{BC}$',
    },
    {
      id: 'g2d37-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question: '세 평행선 $l \\\\parallel m \\\\parallel n$이 두 직선과 만나서 한 직선에서 $3$cm, $5$cm, 다른 직선에서 $6$cm, $x$cm를 잘랐다. $x$의 값을 구하시오.',
      answer: '10',
      explanation: '평행선 사이 선분의 비:\\n$\\\\frac{3}{5} = \\\\frac{6}{x}$\\n$3x = 30$ → $x = 10$',
    },
    {
      id: 'g2d37-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '$\\\\triangle ABC$에서 $\\\\overline{DE} \\\\parallel \\\\overline{BC}$이고 $\\\\overline{AD} : \\\\overline{DB} = 2 : 3$일 때, $\\\\triangle ADE$와 $\\\\triangle ABC$의 넓이비는?',
      options: ['$2 : 3$', '$4 : 9$', '$4 : 25$', '$2 : 5$'],
      answer: '$4 : 25$',
      explanation: '$\\\\overline{AD} : \\\\overline{AB} = 2 : 5$\\n$\\\\triangle ADE \\\\sim \\\\triangle ABC$ (AA 닮음)\\n닮음비 $= 2 : 5$\\n\\n넓이비 $= 2^2 : 5^2 = 4 : 25$',
    },
  ],
  realLifeExample: '건축에서 축소 모형을 만들 때 평행선과 선분의 비 원리가 사용돼요! 건물의 각 층 높이 비율을 유지하면서 축소하면, 평행한 층 사이의 비율이 그대로 보존됩니다. 사진 촬영에서 원근법도 같은 원리예요.',
};

export default dayContent;
