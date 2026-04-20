import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 40,
  part: 7,
  title: '기둥의 겉넓이(Surface Area)와 부피(Volume)',
  subtitle: '각기둥(Prism)과 원기둥(Cylinder)의 겉넓이(Surface Area)와 부피(Volume)를 구해 보자!',
  lectures: [],
  concepts: [
    {
      id: 'g1d40-c1',
      title: '각기둥(Prism)의 겉넓이(Surface Area)와 부피(Volume)',
      content: '**각기둥(Prism)의 겉넓이(Surface Area)**\n$\\text{(겉넓이)} = 2 \\times \\text{(밑넓이)} + \\text{(옆넓이)}$\n\n• 옆넓이(Lateral Face Area) = 밑면(Base)의 둘레 $\\times$ 높이\n\n**각기둥(Prism)의 부피(Volume)**\n$V = \\text{(밑넓이)} \\times \\text{(높이)}$\n$V = S \\times h$\n\n예) 밑면(Base)이 한 변 $4\\text{cm}$인 정사각형, 높이 $10\\text{cm}$인 사각기둥\n$V = 4^2 \\times 10 = 160\\text{cm}^3$',
      type: 'formula',
    },
    {
      id: 'g1d40-c2',
      title: '원기둥(Cylinder)의 겉넓이(Surface Area)와 부피(Volume)',
      content: '밑면(Base)의 반지름이 $r$, 높이가 $h$인 **원기둥(Cylinder)**\n\n**겉넓이(Surface Area)**\n$\\text{(겉넓이)} = 2\\pi r^2 + 2\\pi rh$\n$= 2\\pi r(r + h)$\n\n• 밑넓이 = $\\pi r^2$ (2개)\n• 옆넓이(Lateral Face Area) = $2\\pi r \\times h$ (밑면의 둘레 $\\times$ 높이)\n\n**부피(Volume)**\n$V = \\pi r^2 h$',
      type: 'formula',
    },
  ],
  problems: [
    {
      id: 'g1d40-p1',
      type: 'short-answer',
      difficulty: 'basic',
      question: '밑면이 한 변 $5\\text{cm}$인 정사각형이고 높이가 $8\\text{cm}$인 사각기둥의 부피를 구하시오. (단위: $\\text{cm}^3$)',
      answer: '200',
      explanation: '$V = \\text{(밑넓이)} \\times \\text{(높이)}$\n$= 5^2 \\times 8$\n$= 25 \\times 8 = 200\\text{cm}^3$',
    },
    {
      id: 'g1d40-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '밑면의 반지름이 $3\\text{cm}$, 높이가 $10\\text{cm}$인 원기둥의 부피는?',
      options: ['$30\\pi\\text{cm}^3$', '$60\\pi\\text{cm}^3$', '$90\\pi\\text{cm}^3$', '$180\\pi\\text{cm}^3$'],
      answer: '$90\\pi\\text{cm}^3$',
      explanation: '$V = \\pi r^2 h$\n$= \\pi \\times 3^2 \\times 10$\n$= \\pi \\times 9 \\times 10$\n$= 90\\pi\\text{cm}^3$',
    },
    {
      id: 'g1d40-p3',
      type: 'short-answer',
      difficulty: 'applied',
      question: '밑면의 반지름이 $2\\text{cm}$, 높이가 $5\\text{cm}$인 원기둥의 옆넓이를 구하시오. ($\\pi$를 사용하여 $a\\pi$ 형태로, $a$의 값만 답하시오)',
      answer: '20',
      explanation: '$\\text{(옆넓이)} = 2\\pi r \\times h$\n$= 2\\pi \\times 2 \\times 5$\n$= 20\\pi\\text{cm}^2$\n\n따라서 $a = 20$',
    },
    {
      id: 'g1d40-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '밑면이 가로 $6\\text{cm}$, 세로 $4\\text{cm}$인 직사각형이고 높이가 $5\\text{cm}$인 사각기둥의 겉넓이는?',
      options: ['$128\\text{cm}^2$', '$148\\text{cm}^2$', '$168\\text{cm}^2$', '$188\\text{cm}^2$'],
      answer: '$148\\text{cm}^2$',
      explanation: '밑넓이 $= 6 \\times 4 = 24\\text{cm}^2$\n밑면의 둘레 $= 2(6 + 4) = 20\\text{cm}$\n옆넓이 $= 20 \\times 5 = 100\\text{cm}^2$\n\n겉넓이 $= 2 \\times 24 + 100 = 48 + 100 = 148\\text{cm}^2$',
    },
    {
      id: 'g1d40-p5',
      type: 'short-answer',
      difficulty: 'challenge',
      question: '밑면의 반지름이 $4\\text{cm}$, 높이가 $6\\text{cm}$인 원기둥의 겉넓이를 구하시오. ($a\\pi$ 형태로, $a$의 값만 답하시오)',
      answer: '80',
      explanation: '$\\text{(겉넓이)} = 2\\pi r(r + h)$\n$= 2\\pi \\times 4 \\times (4 + 6)$\n$= 2\\pi \\times 4 \\times 10$\n$= 80\\pi\\text{cm}^2$\n\n따라서 $a = 80$',
    },
  ],
  realLifeExample: '기둥의 부피(Volume) 계산은 실생활에서 매우 유용합니다. 물탱크에 담을 수 있는 물의 양, 통조림 캔의 용량, 건물의 기둥 설계 등에 모두 기둥의 부피(Volume) 공식이 사용됩니다!',
};

export default dayContent;
