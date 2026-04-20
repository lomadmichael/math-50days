import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 32,
  part: 7,
  title: '길이/넓이/부피 단위 환산',
  subtitle: '입체도형 계산 — 단위 사이의 관계',
  lectures: [],
  concepts: [
    {
      id: 'f7d32-c1',
      title: '길이 단위 환산',
      content:
        '1km = 1000m\\n1m = 100cm\\n1cm = 10mm\\n\\n큰 단위 → 작은 단위: $\\times$\\n작은 단위 → 큰 단위: $\\div$',
      type: 'formula',
    },
    {
      id: 'f7d32-c2',
      title: '넓이 단위 환산',
      content:
        '넓이는 길이를 두 번 곱하므로 환산 배수가 제곱됩니다.\\n$1m^2 = 10000cm^2$ ($100 \\times 100$)\\n$1km^2 = 1000000m^2$ ($1000 \\times 1000$)\\n$1ha = 10000m^2$, $1a = 100m^2$',
      type: 'formula',
    },
    {
      id: 'f7d32-c3',
      title: '부피 단위 환산',
      content:
        '부피는 길이를 세 번 곱하므로 환산 배수가 세제곱됩니다.\\n$1m^3 = 1000000cm^3$ ($100^3$)\\n$1L = 1000mL = 1000cm^3$\\n$1m^3 = 1000L$',
      type: 'formula',
    },
    {
      id: 'f7d32-c4',
      title: '단위 환산 팁',
      content:
        '단위가 바뀔 때마다 0의 개수를 세어보세요.\\n길이: 한 단계에 0이 1~3개\\n넓이: 0의 개수가 2배\\n부피: 0의 개수가 3배',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'fd32-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '3.5m는 몇 cm인가요?',
      options: ['35cm', '350cm', '3500cm', '0.35cm'],
      answer: '350cm',
      explanation: '$1m = 100cm$이므로 $3.5 \\times 100 = 350cm$',
    },
    {
      id: 'fd32-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: '$2m^2$는 몇 $cm^2$인가요?',
      answer: '20000',
      explanation:
        '$1m^2 = 10000cm^2$이므로 $2 \\times 10000 = 20000cm^2$',
    },
    {
      id: 'fd32-p3',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '5000mL는 몇 L인가요?',
      options: ['0.5L', '5L', '50L', '500L'],
      answer: '5L',
      explanation: '$1L = 1000mL$이므로 $5000 \\div 1000 = 5L$',
    },
    {
      id: 'fd32-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question: '$0.5m^3$는 몇 L인가요?',
      answer: '500',
      explanation:
        '$1m^3 = 1000L$이므로 $0.5 \\times 1000 = 500L$',
    },
    {
      id: 'fd32-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '한 변이 2m인 정사각형 모양의 화단의 넓이는 몇 $cm^2$인가요?',
      options: ['$400cm^2$', '$4000cm^2$', '$40000cm^2$', '$400000cm^2$'],
      answer: '$40000cm^2$',
      explanation:
        '넓이 = $2 \\times 2 = 4m^2$, $4 \\times 10000 = 40000cm^2$',
    },
  ],
  realLifeExample:
    '물 1L는 정확히 $1000cm^3$이에요. 가로, 세로, 높이가 각각 10cm인 정육면체 그릇에 물을 가득 담으면 딱 1L가 됩니다!',
};

export default dayContent;
