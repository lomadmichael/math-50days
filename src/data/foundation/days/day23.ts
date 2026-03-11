import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 23,
  part: 5,
  title: '비율과 백분율',
  subtitle: '비율은 비를 하나의 수로 나타낸 것! 백분율(%)은 일상에서 가장 많이 쓰이는 비율이에요.',
  lectures: [],
  concepts: [
    {
      id: 'f5d23-c1',
      title: '비율이란?',
      content: '**비율** = 기준량에 대한 비교하는 양의 크기\n\n$a : b$의 비율 = $\\frac{a}{b}$ 또는 $a \\div b$\n\n예: $3 : 5$의 비율 = $\\frac{3}{5} = 0.6$\n\n**비율의 의미:**\n기준량($b$)을 $1$로 보았을 때 비교하는 양($a$)의 크기',
      type: 'definition',
    },
    {
      id: 'f5d23-c2',
      title: '백분율(%)',
      content: '**백분율**: 기준량을 $100$으로 보았을 때의 비율\n\n비율 → 백분율: 비율에 $100$을 곱하고 % 붙이기\n\n$\\frac{3}{5} = 0.6 = 60\\%$\n$\\frac{1}{4} = 0.25 = 25\\%$\n$\\frac{7}{10} = 0.7 = 70\\%$\n\n백분율 → 비율: $\\%$ 떼고 $100$으로 나누기\n$35\\% = \\frac{35}{100} = 0.35$',
      type: 'formula',
    },
    {
      id: 'f5d23-c3',
      title: '할인, 이익률 계산',
      content: '**할인율 계산:**\n원가 $10000$원, 판매가 $8000$원\n할인금액: $10000 - 8000 = 2000$원\n할인율: $\\frac{2000}{10000} \\times 100 = 20\\%$\n\n**이익률 계산:**\n원가 $5000$원, 판매가 $6500$원\n이익: $6500 - 5000 = 1500$원\n이익률: $\\frac{1500}{5000} \\times 100 = 30\\%$\n\n이것이 중학교 **일차방정식 활용문제**의 기초!',
      type: 'example',
    },
  ],
  problems: [
    {
      id: 'fd23-p1',
      type: 'short-answer',
      difficulty: 'basic',
      question: '$4 : 5$의 비율을 백분율로 나타내시오. (% 포함)',
      answer: '80%',
      explanation: '$\\frac{4}{5} = 0.8 = 80\\%$',
    },
    {
      id: 'fd23-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$45\\%$를 기약분수로 나타내면?',
      options: ['$\\frac{45}{100}$', '$\\frac{9}{20}$', '$\\frac{9}{25}$', '$\\frac{4}{5}$'],
      answer: '$\\frac{9}{20}$',
      explanation: '$45\\% = \\frac{45}{100}$\n\n$\\gcd(45, 100) = 5$\n\n$\\frac{45}{100} = \\frac{9}{20}$',
    },
    {
      id: 'fd23-p3',
      type: 'short-answer',
      difficulty: 'basic',
      question: '전체 $40$명 중 $14$명이 안경을 쓴다면, 안경 착용률은 몇 %인가?',
      answer: '35',
      explanation: '$\\frac{14}{40} \\times 100 = \\frac{1400}{40} = 35\\%$',
    },
    {
      id: 'fd23-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '원가 $8000$원인 물건을 $25\\%$ 할인하면 판매가는?',
      options: ['$2000$원', '$6000$원', '$6500$원', '$7500$원'],
      answer: '$6000$원',
      explanation: '할인금액: $8000 \\times \\frac{25}{100} = 2000$원\n\n판매가: $8000 - 2000 = 6000$원\n\n또는: $8000 \\times (1 - 0.25) = 8000 \\times 0.75 = 6000$원',
    },
    {
      id: 'fd23-p5',
      type: 'short-answer',
      difficulty: 'applied',
      question: '시험에서 $80$점을 받았고, 이것이 전체의 $64\\%$에 해당합니다. 만점은 몇 점인가요?',
      answer: '125',
      explanation: '$80$점 = $64\\%$\n\n만점(전체) = $\\frac{80}{0.64} = \\frac{80 \\times 100}{64} = \\frac{8000}{64} = 125$점',
    },
    {
      id: 'fd23-p6',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '원가에 $30\\%$ 이익을 붙여 정가를 매긴 후, 정가에서 $20\\%$ 할인하여 팔면 원가 대비 이익률은?',
      options: ['$10\\%$ 이익', '$4\\%$ 이익', '$4\\%$ 손해', '$10\\%$ 손해'],
      answer: '$4\\%$ 이익',
      explanation: '원가를 $100$으로 놓으면:\n정가: $100 \\times 1.3 = 130$\n판매가: $130 \\times 0.8 = 104$\n\n이익: $104 - 100 = 4$\n이익률: $\\frac{4}{100} \\times 100 = 4\\%$',
    },
  ],
  realLifeExample: '마트에서 "30% 할인!" 표시를 보면 원래 10000원짜리가 7000원이 되는 거예요. 비율과 백분율을 알면 진짜 좋은 할인인지 계산할 수 있습니다!',
};

export default dayContent;
