import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 26,
  part: 5,
  title: '미니테스트 + 복습',
  subtitle: 'PART 5 총정리 — 비와 비율',
  isTest: true,
  lectures: [],
  concepts: [
    {
      id: 'f5d26-c1',
      title: '비와 비율 핵심 정리',
      content:
        '비: 두 수를 비교할 때 $a : b$로 나타냅니다.\\n비율: $\\frac{a}{b}$ 또는 $a \\div b$로 계산합니다.\\n비의 값이 같으면 "비가 같다"고 합니다.',
      type: 'tip',
    },
    {
      id: 'f5d26-c2',
      title: '백분율과 할푼리',
      content:
        '백분율: 비율에 100을 곱한 값 → $\\frac{a}{b} \\times 100$%\\n할푼리: 1할 = 10%, 1푼 = 1%, 1리 = 0.1%',
      type: 'formula',
    },
  ],
  problems: [
    {
      id: 'fd26-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '3 : 5의 비율을 소수로 나타내면?',
      options: ['0.3', '0.5', '0.6', '1.5'],
      answer: '0.6',
      explanation:
        '$3 \\div 5 = 0.6$입니다. 비율은 (비교하는 양) $\\div$ (기준량)으로 구합니다.',
    },
    {
      id: 'fd26-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '20명 중 8명이 안경을 쓴다면 백분율은?',
      options: ['8%', '20%', '40%', '80%'],
      answer: '40%',
      explanation:
        '$\\frac{8}{20} \\times 100 = 40$%입니다.',
    },
    {
      id: 'fd26-p3',
      type: 'short-answer',
      difficulty: 'applied',
      question: '소금물 200g에 소금이 30g 녹아 있습니다. 소금의 비율을 백분율로 구하세요.',
      answer: '15%',
      explanation:
        '$\\frac{30}{200} \\times 100 = 15$%입니다.',
    },
    {
      id: 'fd26-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '6 : 8과 비의 값이 같은 것은?',
      options: ['3 : 5', '9 : 12', '2 : 3', '4 : 5'],
      answer: '9 : 12',
      explanation:
        '6 : 8의 비율은 $\\frac{6}{8} = 0.75$이고, 9 : 12의 비율은 $\\frac{9}{12} = 0.75$로 같습니다.',
    },
    {
      id: 'fd26-p5',
      type: 'short-answer',
      difficulty: 'challenge',
      question:
        '야구 선수의 타율이 3할 2푼 5리입니다. 백분율로 나타내세요.',
      answer: '32.5%',
      explanation:
        '3할 = 30%, 2푼 = 2%, 5리 = 0.5%이므로 합하면 32.5%입니다.',
    },
  ],
  realLifeExample:
    '마트에서 "30% 할인"이라고 적혀 있으면, 원래 가격의 30%만큼 깎아 준다는 뜻이에요. 10,000원짜리 물건이라면 3,000원을 빼고 7,000원에 살 수 있어요!',
};

export default dayContent;
