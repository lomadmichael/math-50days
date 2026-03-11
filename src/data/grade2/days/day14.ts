import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 14,
  part: 2,
  title: '일차부등식 활용 (2)',
  subtitle: '농도, 가격, 도형 문제를 부등식으로 해결하자!',
  lectures: [],
  concepts: [
    {
      id: 'g2d14-c1',
      title: '농도 문제',
      content: '**소금물의 농도** 공식:\n$$\\\\text{농도}(\\\\%) = \\\\frac{\\\\text{소금의 양}}{\\\\text{소금물의 양}} \\\\times 100$$\n\n예: 10%의 소금물 200 g에 물을 넣어 농도를 5% 이하로 만들려면?\n소금의 양: $200 \\\\times 0.1 = 20$ g\n물 $x$ g을 넣으면: $\\\\frac{20}{200 + x} \\\\times 100 \\\\leq 5$\n$\\\\frac{20}{200 + x} \\\\leq 0.05$\n$20 \\\\leq 0.05(200 + x)$\n$400 \\\\leq 200 + x$\n$x \\\\geq 200$',
      type: 'example',
    },
    {
      id: 'g2d14-c2',
      title: '가격/할인 문제',
      content: '원가에 이익을 붙여 정가를 정하고, 할인 판매하는 문제:\n\n- **정가** = 원가 $\\\\times$ $(1 + \\\\text{이익률})$\n- **판매가** = 정가 $\\\\times$ $(1 - \\\\text{할인율})$\n- **이익** = 판매가 $-$ 원가\n\n원가 10,000원인 물건에 40% 이익을 붙인 정가에서 $x$% 할인해도 이익이 나려면:\n$14000 \\\\times (1 - \\\\frac{x}{100}) > 10000$',
      type: 'formula',
    },
    {
      id: 'g2d14-c3',
      title: '도형에 관한 문제',
      content: '도형의 넓이, 둘레 조건을 부등식으로 세웁니다.\n\n가로가 세로보다 3 cm 긴 직사각형의 둘레가 30 cm 이하일 때,\n세로 = $x$ cm, 가로 = $(x+3)$ cm\n$2(x + x + 3) \\\\leq 30$\n$2(2x + 3) \\\\leq 30$\n$4x + 6 \\\\leq 30$\n$x \\\\leq 6$\n\n세로는 최대 6 cm',
      type: 'example',
    },
  ],
  problems: [
    {
      id: 'g2d14-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '원가 8,000원인 물건에 30%의 이익을 붙인 정가는?',
      options: ['10,000원', '10,400원', '11,000원', '10,800원'],
      answer: '10,400원',
      explanation: '정가 = 원가 $\\\\times$ $(1 + 0.3)$\n$= 8000 \\\\times 1.3 = 10400$원',
    },
    {
      id: 'g2d14-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: '세로가 $x$ cm, 가로가 $2x$ cm인 직사각형의 둘레가 36 cm 이하일 때, $x$의 최댓값을 구하시오.',
      answer: '6',
      explanation: '$2(x + 2x) \\\\leq 36$\n$2 \\\\times 3x \\\\leq 36$\n$6x \\\\leq 36$\n$x \\\\leq 6$\n\n$x$의 최댓값은 6',
    },
    {
      id: 'g2d14-p3',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '원가 5,000원인 물건에 60%의 이익을 붙인 정가에서 $x$% 할인해도 원가 이상으로 팔 수 있으려면?',
      options: ['$x \\\\leq 37.5$', '$x \\\\leq 40$', '$x < 37.5$', '$x \\\\leq 30$'],
      answer: '$x \\\\leq 37.5$',
      explanation: '정가 = $5000 \\\\times 1.6 = 8000$원\n$8000 \\\\times (1 - \\\\frac{x}{100}) \\\\geq 5000$\n$1 - \\\\frac{x}{100} \\\\geq \\\\frac{5000}{8000} = 0.625$\n$\\\\frac{x}{100} \\\\leq 0.375$\n$x \\\\leq 37.5$',
    },
    {
      id: 'g2d14-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question: '8%의 소금물 300 g에서 물을 증발시켜 농도를 12% 이상으로 만들려면 최소 몇 g의 물을 증발시켜야 합니까?',
      answer: '100',
      explanation: '소금의 양: $300 \\\\times 0.08 = 24$ g\n물 $x$ g을 증발시키면:\n$\\\\frac{24}{300 - x} \\\\geq 0.12$\n$24 \\\\geq 0.12(300 - x)$\n$24 \\\\geq 36 - 0.12x$\n$0.12x \\\\geq 12$\n$x \\\\geq 100$\n\n최소 100 g의 물을 증발시켜야 합니다.',
    },
    {
      id: 'g2d14-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '삼각형의 세 변의 길이가 5, 8, $x$일 때, $x$의 범위는? (삼각형 성립 조건: 두 변의 합 > 나머지 한 변)',
      options: ['$3 < x < 13$', '$3 \\\\leq x \\\\leq 13$', '$0 < x < 13$', '$3 < x < 8$'],
      answer: '$3 < x < 13$',
      explanation: '삼각형 성립 조건:\n$5 + 8 > x$ → $x < 13$\n$5 + x > 8$ → $x > 3$\n$8 + x > 5$ → $x > -3$ (항상 성립)\n\n따라서 $3 < x < 13$',
    },
  ],
  realLifeExample: '마트에서 1+1 행사를 해도 가게가 손해 보지 않는 이유! 원가 1,000원인 과자를 2,000원에 팔면 2개에 2,000원이므로 개당 1,000원. $2000 \\\\geq 1000 \\\\times 2$이어야 손해가 나지 않으므로, 원가의 100% 이상 이익을 붙여야 합니다.',
};

export default dayContent;
