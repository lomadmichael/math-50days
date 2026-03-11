import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 42,
  part: 7,
  title: '구의 겉넓이와 부피',
  subtitle: '가장 완벽한 입체도형, 구의 겉넓이와 부피를 배워 보자!',
  lectures: [],
  concepts: [
    {
      id: 'g1d42-c1',
      title: '구의 겉넓이',
      content: '반지름이 $r$인 **구의 겉넓이**\n\n$S = 4\\pi r^2$\n\n• 구의 겉넓이 = 대원 넓이($\\pi r^2$)의 **4배**\n• 대원: 구의 중심을 지나는 평면으로 자른 단면 (가장 큰 원)\n\n예) 반지름 $5\\text{cm}$인 구의 겉넓이\n$S = 4\\pi \\times 5^2 = 100\\pi\\text{cm}^2$',
      type: 'formula',
    },
    {
      id: 'g1d42-c2',
      title: '구의 부피와 반구',
      content: '반지름이 $r$인 **구의 부피**\n\n$V = \\frac{4}{3}\\pi r^3$\n\n**반구** (구를 반으로 자른 도형)\n• 반구의 부피 = $\\frac{1}{2} \\times \\frac{4}{3}\\pi r^3 = \\frac{2}{3}\\pi r^3$\n• 반구의 겉넓이 = 곡면 + 단면 = $2\\pi r^2 + \\pi r^2 = 3\\pi r^2$\n\n예) 반지름 $3\\text{cm}$인 구의 부피\n$V = \\frac{4}{3}\\pi \\times 3^3 = \\frac{4}{3}\\pi \\times 27 = 36\\pi\\text{cm}^3$',
      type: 'formula',
    },
  ],
  problems: [
    {
      id: 'g1d42-p1',
      type: 'short-answer',
      difficulty: 'basic',
      question: '반지름이 $7\\text{cm}$인 구의 겉넓이를 구하시오. ($a\\pi$ 형태로, $a$의 값만 답하시오)',
      answer: '196',
      explanation: '$S = 4\\pi r^2$\n$= 4\\pi \\times 7^2$\n$= 4\\pi \\times 49$\n$= 196\\pi\\text{cm}^2$\n\n따라서 $a = 196$',
    },
    {
      id: 'g1d42-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '반지름이 $6\\text{cm}$인 구의 부피는?',
      options: ['$144\\pi\\text{cm}^3$', '$216\\pi\\text{cm}^3$', '$288\\pi\\text{cm}^3$', '$864\\pi\\text{cm}^3$'],
      answer: '$288\\pi\\text{cm}^3$',
      explanation: '$V = \\frac{4}{3}\\pi r^3$\n$= \\frac{4}{3}\\pi \\times 6^3$\n$= \\frac{4}{3}\\pi \\times 216$\n$= \\frac{864}{3}\\pi = 288\\pi\\text{cm}^3$',
    },
    {
      id: 'g1d42-p3',
      type: 'short-answer',
      difficulty: 'applied',
      question: '겉넓이가 $64\\pi\\text{cm}^2$인 구의 반지름을 구하시오. (단위: cm)',
      answer: '4',
      explanation: '$4\\pi r^2 = 64\\pi$\n$r^2 = 16$\n$r = 4\\text{cm}$\n\n따라서 반지름은 $4\\text{cm}$',
    },
    {
      id: 'g1d42-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '반지름이 $4\\text{cm}$인 반구의 겉넓이는?',
      options: ['$32\\pi\\text{cm}^2$', '$48\\pi\\text{cm}^2$', '$64\\pi\\text{cm}^2$', '$80\\pi\\text{cm}^2$'],
      answer: '$48\\pi\\text{cm}^2$',
      explanation: '반구의 겉넓이 = 곡면 넓이 + 단면(원) 넓이\n$= 2\\pi r^2 + \\pi r^2 = 3\\pi r^2$\n\n$= 3\\pi \\times 4^2 = 3\\pi \\times 16 = 48\\pi\\text{cm}^2$',
    },
    {
      id: 'g1d42-p5',
      type: 'short-answer',
      difficulty: 'challenge',
      question: '구의 반지름이 2배가 되면 부피는 몇 배가 되는가?',
      answer: '8',
      explanation: '원래 구의 부피: $V_1 = \\frac{4}{3}\\pi r^3$\n\n반지름이 2배인 구의 부피: $V_2 = \\frac{4}{3}\\pi (2r)^3 = \\frac{4}{3}\\pi \\times 8r^3$\n\n$\\frac{V_2}{V_1} = \\frac{8r^3}{r^3} = 8$\n\n따라서 부피는 **8배**가 됩니다.',
    },
  ],
  realLifeExample: '지구는 반지름 약 6,371km인 거대한 구입니다. 구의 겉넓이 공식으로 지구 표면적을 계산하면 약 5.1억 $\\text{km}^2$이고, 그중 약 71%가 바다입니다!',
};

export default dayContent;
