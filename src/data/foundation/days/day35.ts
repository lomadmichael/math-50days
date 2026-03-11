import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 35,
  part: 7,
  title: '미니테스트 + 복습',
  subtitle: 'PART 7 총정리 — 측정과 단위',
  isTest: true,
  lectures: [],
  concepts: [
    {
      id: 'f7d35-c1',
      title: '단위 환산 핵심',
      content:
        '길이: 1km = 1000m, 1m = 100cm, 1cm = 10mm\\n넓이: $1m^2 = 10000cm^2$\\n부피: $1m^3 = 1000000cm^3$, $1L = 1000cm^3$',
      type: 'tip',
    },
    {
      id: 'f7d35-c2',
      title: '입체 공식 핵심',
      content:
        '직육면체 부피 = 가로 $\\\\times$ 세로 $\\\\times$ 높이\\n직육면체 겉넓이 = $2(ab + bc + ac)$\\n각기둥 부피 = 밑넓이 $\\\\times$ 높이',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'fd35-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '2.5km는 몇 m인가요?',
      options: ['25m', '250m', '2500m', '25000m'],
      answer: '2500m',
      explanation: '$2.5 \\\\times 1000 = 2500m$',
    },
    {
      id: 'fd35-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: '가로 5cm, 세로 3cm, 높이 4cm인 직육면체의 부피는 몇 $cm^3$?',
      answer: '60',
      explanation: '$5 \\\\times 3 \\\\times 4 = 60cm^3$',
    },
    {
      id: 'fd35-p3',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '3L는 몇 $cm^3$인가요?',
      options: ['30', '300', '3000', '30000'],
      answer: '3000',
      explanation: '$1L = 1000cm^3$이므로 $3 \\\\times 1000 = 3000cm^3$',
    },
    {
      id: 'fd35-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '사각뿔의 면의 수는?',
      options: ['4개', '5개', '6개', '8개'],
      answer: '5개',
      explanation: '사각뿔: 사각형 밑면 1개 + 삼각형 옆면 4개 = 5개',
    },
    {
      id: 'fd35-p5',
      type: 'short-answer',
      difficulty: 'challenge',
      question:
        '한 변이 8cm인 정육면체의 겉넓이는 몇 $cm^2$인가요?',
      answer: '384',
      explanation: '$6 \\\\times 8^2 = 6 \\\\times 64 = 384cm^2$',
    },
    {
      id: 'fd35-p6',
      type: 'short-answer',
      difficulty: 'challenge',
      question:
        '밑면이 가로 6cm, 세로 4cm인 직사각형이고 높이가 10cm인 사각기둥의 부피는 몇 $cm^3$?',
      answer: '240',
      explanation:
        '밑넓이 = $6 \\\\times 4 = 24cm^2$, 부피 = $24 \\\\times 10 = 240cm^3$',
    },
  ],
  realLifeExample:
    '수영장에 물을 채울 때 부피를 계산해요. 가로 25m, 세로 10m, 깊이 2m인 수영장의 부피는 $25 \\\\times 10 \\\\times 2 = 500m^3$, 이것은 500,000L(50만 리터)입니다!',
};

export default dayContent;
