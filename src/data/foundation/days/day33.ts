import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 33,
  part: 7,
  title: '직육면체의 겉넓이와 부피',
  subtitle: '기둥의 겉넓이/부피 — 3차원 계산',
  lectures: [],
  concepts: [
    {
      id: 'f7d33-c1',
      title: '직육면체의 부피',
      content:
        '직육면체 부피 = 가로 $\\\\times$ 세로 $\\\\times$ 높이\\n정육면체 부피 = 한 변 $\\\\times$ 한 변 $\\\\times$ 한 변 = $a^3$',
      type: 'formula',
    },
    {
      id: 'f7d33-c2',
      title: '직육면체의 겉넓이',
      content:
        '직육면체는 3쌍의 직사각형 면으로 이루어져 있습니다.\\n겉넓이 = $2 \\\\times (가로 \\\\times 세로 + 세로 \\\\times 높이 + 가로 \\\\times 높이)$\\n정육면체 겉넓이 = $6 \\\\times a^2$',
      type: 'formula',
    },
    {
      id: 'f7d33-c3',
      title: '각기둥의 부피',
      content:
        '모든 각기둥의 부피 = 밑넓이 $\\\\times$ 높이\\n삼각기둥: 밑면(삼각형 넓이) $\\\\times$ 높이\\n원기둥: $\\\\pi \\\\times r^2 \\\\times$ 높이',
      type: 'formula',
    },
  ],
  problems: [
    {
      id: 'fd33-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '가로 4cm, 세로 3cm, 높이 5cm인 직육면체의 부피는?',
      options: ['$12cm^3$', '$47cm^3$', '$60cm^3$', '$94cm^3$'],
      answer: '$60cm^3$',
      explanation: '부피 = $4 \\\\times 3 \\\\times 5 = 60cm^3$',
    },
    {
      id: 'fd33-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: '한 변이 6cm인 정육면체의 부피는 몇 $cm^3$인가요?',
      answer: '216',
      explanation: '$6 \\\\times 6 \\\\times 6 = 216cm^3$',
    },
    {
      id: 'fd33-p3',
      type: 'multiple-choice',
      difficulty: 'applied',
      question:
        '가로 5cm, 세로 4cm, 높이 3cm인 직육면체의 겉넓이는?',
      options: ['$60cm^2$', '$94cm^2$', '$47cm^2$', '$120cm^2$'],
      answer: '$94cm^2$',
      explanation:
        '$2 \\\\times (5 \\\\times 4 + 4 \\\\times 3 + 5 \\\\times 3) = 2 \\\\times (20 + 12 + 15) = 2 \\\\times 47 = 94cm^2$',
    },
    {
      id: 'fd33-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question:
        '밑면이 넓이 $20cm^2$인 삼각형이고 높이가 10cm인 삼각기둥의 부피는 몇 $cm^3$인가요?',
      answer: '200',
      explanation:
        '각기둥 부피 = 밑넓이 $\\\\times$ 높이 = $20 \\\\times 10 = 200cm^3$',
    },
    {
      id: 'fd33-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question:
        '한 변이 10cm인 정육면체의 겉넓이는?',
      options: ['$100cm^2$', '$600cm^2$', '$1000cm^3$', '$6000cm^2$'],
      answer: '$600cm^2$',
      explanation:
        '정육면체 겉넓이 = $6 \\\\times 10^2 = 6 \\\\times 100 = 600cm^2$',
    },
  ],
  realLifeExample:
    '택배 상자의 크기를 정할 때 부피와 겉넓이를 모두 생각해요. 부피가 크면 물건이 많이 들어가고, 겉넓이가 크면 골판지가 더 많이 필요하니까요!',
};

export default dayContent;
