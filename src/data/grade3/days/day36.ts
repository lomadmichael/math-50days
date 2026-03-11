import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 36,
  part: 5,
  title: '삼각비를 이용한 넓이 구하기',
  subtitle: '$S = \\\\frac{1}{2}ab\\\\sin C$',
  lectures: [],
  concepts: [
    {
      id: 'g3d36-c1',
      title: '삼각형의 넓이 공식',
      content: '삼각형의 두 변 $a$, $b$와 그 끼인각 $C$가 주어질 때:\\n$S = \\\\frac{1}{2}ab\\\\sin C$\\n\\n이 공식은 높이를 직접 구하지 않고 넓이를 계산할 수 있어 매우 유용합니다.\\n\\n유도: 높이 $h = b\\\\sin C$이므로 $S = \\\\frac{1}{2} \\\\times a \\\\times h = \\\\frac{1}{2}ab\\\\sin C$',
      type: 'formula',
    },
    {
      id: 'g3d36-c2',
      title: '다양한 표현',
      content: '끼인각에 따라 세 가지로 표현 가능:\\n$S = \\\\frac{1}{2}ab\\\\sin C = \\\\frac{1}{2}bc\\\\sin A = \\\\frac{1}{2}ca\\\\sin B$\\n\\n중요: 반드시 두 변의 끼인각이어야 합니다!\\n두 변과 끼인각이 아닌 다른 각이 주어지면 직접 적용할 수 없습니다.',
      type: 'warning',
    },
    {
      id: 'g3d36-c3',
      title: '사각형의 넓이',
      content: '대각선이 이루는 각을 이용한 사각형 넓이:\\n두 대각선의 길이가 $p$, $q$이고 이루는 각이 $\\\\theta$일 때:\\n$S = \\\\frac{1}{2}pq\\\\sin \\\\theta$\\n\\n평행사변형: 두 변 $a$, $b$와 끼인각 $\\\\theta$\\n$S = ab\\\\sin \\\\theta$',
      type: 'formula',
    },
  ],
  problems: [
    {
      id: 'g3d36-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '두 변의 길이가 $6$, $8$이고 끼인각이 $30°$인 삼각형의 넓이는?',
      options: ['$12$', '$24$', '$6\\\\sqrt{3}$', '$24\\\\sqrt{3}$'],
      answer: '$12$',
      explanation: '$S = \\\\frac{1}{2} \\\\times 6 \\\\times 8 \\\\times \\\\sin 30° = \\\\frac{1}{2} \\\\times 6 \\\\times 8 \\\\times \\\\frac{1}{2} = 12$.',
    },
    {
      id: 'g3d36-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '두 변의 길이가 $4$, $6$이고 끼인각이 $60°$인 삼각형의 넓이는?',
      options: ['$6$', '$6\\\\sqrt{3}$', '$12$', '$12\\\\sqrt{3}$'],
      answer: '$6\\\\sqrt{3}$',
      explanation: '$S = \\\\frac{1}{2} \\\\times 4 \\\\times 6 \\\\times \\\\sin 60° = 12 \\\\times \\\\frac{\\\\sqrt{3}}{2} = 6\\\\sqrt{3}$.',
    },
    {
      id: 'g3d36-p3',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '정삼각형의 한 변의 길이가 $a$일 때, 넓이는?',
      options: ['$\\\\frac{a^2}{2}$', '$\\\\frac{\\\\sqrt{3}}{4}a^2$', '$\\\\frac{\\\\sqrt{3}}{2}a^2$', '$\\\\frac{a^2}{4}$'],
      answer: '$\\\\frac{\\\\sqrt{3}}{4}a^2$',
      explanation: '$S = \\\\frac{1}{2} \\\\times a \\\\times a \\\\times \\\\sin 60° = \\\\frac{1}{2}a^2 \\\\times \\\\frac{\\\\sqrt{3}}{2} = \\\\frac{\\\\sqrt{3}}{4}a^2$.',
    },
    {
      id: 'g3d36-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '평행사변형의 두 변이 $5$, $8$이고 끼인각이 $45°$일 때, 넓이는?',
      options: ['$20$', '$20\\\\sqrt{2}$', '$40$', '$10\\\\sqrt{2}$'],
      answer: '$20\\\\sqrt{2}$',
      explanation: '평행사변형 넓이 $= 5 \\\\times 8 \\\\times \\\\sin 45° = 40 \\\\times \\\\frac{\\\\sqrt{2}}{2} = 20\\\\sqrt{2}$.',
    },
    {
      id: 'g3d36-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '대각선의 길이가 $10$, $12$이고 대각선이 이루는 각이 $60°$인 사각형의 넓이는?',
      options: ['$30$', '$30\\\\sqrt{3}$', '$60$', '$60\\\\sqrt{3}$'],
      answer: '$30\\\\sqrt{3}$',
      explanation: '$S = \\\\frac{1}{2} \\\\times 10 \\\\times 12 \\\\times \\\\sin 60° = 60 \\\\times \\\\frac{\\\\sqrt{3}}{2} = 30\\\\sqrt{3}$.',
    },
  ],
  realLifeExample: '토지 측량에서 삼각형 모양의 땅의 넓이를 구할 때, 두 변의 길이와 끼인각만 측정하면 $S = \\\\frac{1}{2}ab\\\\sin C$ 공식으로 넓이를 바로 계산할 수 있어 높이를 직접 재지 않아도 됩니다.',
};

export default dayContent;
