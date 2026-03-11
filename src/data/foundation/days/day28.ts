import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 28,
  part: 6,
  title: '삼각형/사각형의 넓이',
  subtitle: '평면도형 넓이 — 공식 유도와 활용',
  lectures: [],
  concepts: [
    {
      id: 'f6d28-c1',
      title: '삼각형의 넓이',
      content:
        '삼각형의 넓이 = $\\\\frac{밑변 \\\\times 높이}{2}$\\n\\n직사각형을 대각선으로 자르면 삼각형 2개가 되므로, 삼각형의 넓이는 직사각형 넓이의 절반입니다.',
      type: 'formula',
    },
    {
      id: 'f6d28-c2',
      title: '사각형의 넓이',
      content:
        '• 직사각형: 가로 $\\\\times$ 세로\\n• 정사각형: 한 변 $\\\\times$ 한 변\\n• 평행사변형: 밑변 $\\\\times$ 높이\\n• 사다리꼴: $\\\\frac{(윗변 + 아랫변) \\\\times 높이}{2}$\\n• 마름모: $\\\\frac{대각선1 \\\\times 대각선2}{2}$',
      type: 'formula',
    },
    {
      id: 'f6d28-c3',
      title: '높이의 위치에 주의!',
      content:
        '넓이를 구할 때 "높이"는 밑변에 수직인 거리입니다.\\n빗변의 길이가 아니라 밑변에서 꼭짓점까지의 수직 거리를 사용해야 해요.',
      type: 'warning',
    },
  ],
  problems: [
    {
      id: 'fd28-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '밑변이 10cm, 높이가 6cm인 삼각형의 넓이는?',
      options: ['$16cm^2$', '$30cm^2$', '$60cm^2$', '$36cm^2$'],
      answer: '$30cm^2$',
      explanation:
        '삼각형 넓이 = $\\\\frac{10 \\\\times 6}{2} = 30cm^2$입니다.',
    },
    {
      id: 'fd28-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: '가로 8cm, 세로 5cm인 직사각형의 넓이는 몇 $cm^2$인가요?',
      answer: '40',
      explanation: '$8 \\\\times 5 = 40cm^2$입니다.',
    },
    {
      id: 'fd28-p3',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '윗변 4cm, 아랫변 8cm, 높이 5cm인 사다리꼴의 넓이는?',
      options: ['$20cm^2$', '$30cm^2$', '$40cm^2$', '$60cm^2$'],
      answer: '$30cm^2$',
      explanation:
        '사다리꼴 넓이 = $\\\\frac{(4 + 8) \\\\times 5}{2} = \\\\frac{60}{2} = 30cm^2$',
    },
    {
      id: 'fd28-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question:
        '평행사변형의 넓이가 $48cm^2$이고 밑변이 8cm일 때, 높이는 몇 cm인가요?',
      answer: '6',
      explanation:
        '넓이 = 밑변 $\\\\times$ 높이이므로 $48 = 8 \\\\times$ 높이, 높이 = $48 \\\\div 8 = 6$cm',
    },
    {
      id: 'fd28-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question:
        '마름모의 두 대각선이 각각 12cm, 10cm입니다. 넓이는?',
      options: ['$22cm^2$', '$60cm^2$', '$120cm^2$', '$30cm^2$'],
      answer: '$60cm^2$',
      explanation:
        '마름모 넓이 = $\\\\frac{12 \\\\times 10}{2} = 60cm^2$',
    },
  ],
  realLifeExample:
    '집 마당이나 공원의 넓이를 구할 때 도형의 넓이 공식을 사용해요. 복잡한 모양의 땅도 삼각형이나 사각형으로 나누면 전체 넓이를 구할 수 있습니다!',
};

export default dayContent;
