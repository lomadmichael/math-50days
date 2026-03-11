import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 31,
  part: 6,
  title: '미니테스트 + 복습',
  subtitle: 'PART 6 총정리 — 도형 기초',
  isTest: true,
  lectures: [],
  concepts: [
    {
      id: 'f6d31-c1',
      title: '도형 넓이 공식 모음',
      content:
        '• 삼각형: $\\\\frac{밑변 \\\\times 높이}{2}$\\n• 직사각형: 가로 $\\\\times$ 세로\\n• 평행사변형: 밑변 $\\\\times$ 높이\\n• 사다리꼴: $\\\\frac{(윗변+아랫변) \\\\times 높이}{2}$\\n• 마름모: $\\\\frac{대각선1 \\\\times 대각선2}{2}$\\n• 원: $\\\\pi \\\\times r^2$',
      type: 'tip',
    },
    {
      id: 'f6d31-c2',
      title: '합동과 대칭 요약',
      content:
        '합동 조건: SSS, SAS, ASA\\n선대칭: 대칭축으로 접으면 겹침\\n점대칭: 중심점 기준 $180°$ 회전하면 겹침',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'fd31-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '삼각형의 세 내각의 합은?',
      options: ['$90°$', '$180°$', '$270°$', '$360°$'],
      answer: '$180°$',
      explanation: '삼각형의 세 내각의 합은 항상 $180°$입니다.',
    },
    {
      id: 'fd31-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: '밑변 12cm, 높이 7cm인 평행사변형의 넓이는 몇 $cm^2$인가요?',
      answer: '84',
      explanation: '평행사변형 넓이 = $12 \\\\times 7 = 84cm^2$',
    },
    {
      id: 'fd31-p3',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '반지름 3cm인 원의 넓이는? (원주율 = 3.14)',
      options: ['$9.42cm^2$', '$18.84cm^2$', '$28.26cm^2$', '$6.28cm^2$'],
      answer: '$28.26cm^2$',
      explanation: '원 넓이 = $3.14 \\\\times 3 \\\\times 3 = 28.26cm^2$',
    },
    {
      id: 'fd31-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question:
        '윗변 5cm, 아랫변 9cm, 높이 4cm인 사다리꼴의 넓이는?',
      options: ['$20cm^2$', '$28cm^2$', '$36cm^2$', '$56cm^2$'],
      answer: '$28cm^2$',
      explanation:
        '사다리꼴 넓이 = $\\\\frac{(5+9) \\\\times 4}{2} = \\\\frac{56}{2} = 28cm^2$',
    },
    {
      id: 'fd31-p5',
      type: 'short-answer',
      difficulty: 'challenge',
      question:
        '두 대각선의 길이가 8cm, 14cm인 마름모의 넓이는 몇 $cm^2$인가요?',
      answer: '56',
      explanation:
        '마름모 넓이 = $\\\\frac{8 \\\\times 14}{2} = 56cm^2$',
    },
    {
      id: 'fd31-p6',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '다음 중 선대칭도형이면서 점대칭도형인 것은?',
      options: ['정삼각형', '직사각형', '이등변삼각형', '부등변삼각형'],
      answer: '직사각형',
      explanation:
        '직사각형은 대칭축 2개(선대칭)가 있고, 대각선 교점을 중심으로 $180°$ 회전해도 겹치므로(점대칭) 둘 다 해당합니다.',
    },
  ],
  realLifeExample:
    '건축가는 건물을 설계할 때 도형의 넓이와 대칭을 활용해요. 아파트 평면도를 보면 직사각형, 사다리꼴 등 다양한 도형으로 나눠져 있습니다!',
};

export default dayContent;
