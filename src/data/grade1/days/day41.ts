import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 41,
  part: 7,
  title: '뿔의 겉넓이(Surface Area)와 부피(Volume)',
  subtitle: '각뿔(Pyramid)과 원뿔(Cone)의 겉넓이(Surface Area)와 부피(Volume)를 구해 보자!',
  lectures: [],
  concepts: [
    {
      id: 'g1d41-c1',
      title: '각뿔(Pyramid)의 겉넓이(Surface Area)와 부피(Volume)',
      content: '**각뿔(Pyramid)의 겉넓이(Surface Area)**\n$\\text{(겉넓이)} = \\text{(밑넓이)} + \\text{(옆넓이)}$\n\n• 옆면(Lateral Face)은 삼각형 → 각 옆면(Lateral Face)의 넓이를 더함\n\n**각뿔(Pyramid)의 부피(Volume)**\n$V = \\frac{1}{3} \\times \\text{(밑넓이)} \\times \\text{(높이)}$\n\n🔑 **핵심 포인트**: 뿔의 부피(Volume)는 같은 밑면(Base), 같은 높이의 **기둥 부피(Volume)의 $\\frac{1}{3}$**',
      type: 'formula',
    },
    {
      id: 'g1d41-c2',
      title: '원뿔(Cone)의 겉넓이(Surface Area)와 부피(Volume)',
      content: '밑면(Base)의 반지름 $r$, 모선의 길이 $l$, 높이 $h$인 **원뿔(Cone)**\n\n**겉넓이(Surface Area)**\n$\\text{(겉넓이)} = \\pi r^2 + \\pi rl = \\pi r(r + l)$\n\n• 밑넓이 = $\\pi r^2$\n• 옆넓이(Lateral Face Area) = $\\pi rl$ (부채꼴)\n\n**부피(Volume)**\n$V = \\frac{1}{3} \\pi r^2 h$\n\n• **모선의 길이**: 꼭짓점(Vertex)에서 밑면(Base) 둘레까지의 거리\n• 피타고라스: $l^2 = r^2 + h^2$',
      type: 'formula',
    },
  ],
  problems: [
    {
      id: 'g1d41-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '밑면이 한 변 $6\\text{cm}$인 정사각형이고 높이가 $9\\text{cm}$인 사각뿔의 부피는?',
      options: ['$54\\text{cm}^3$', '$108\\text{cm}^3$', '$162\\text{cm}^3$', '$324\\text{cm}^3$'],
      answer: '$108\\text{cm}^3$',
      explanation: '$V = \\frac{1}{3} \\times \\text{(밑넓이)} \\times \\text{(높이)}$\n$= \\frac{1}{3} \\times 6^2 \\times 9$\n$= \\frac{1}{3} \\times 36 \\times 9$\n$= \\frac{324}{3} = 108\\text{cm}^3$',
    },
    {
      id: 'g1d41-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: '밑면의 반지름이 $3\\text{cm}$, 높이가 $12\\text{cm}$인 원뿔의 부피를 구하시오. ($a\\pi$ 형태로, $a$의 값만 답하시오)',
      answer: '36',
      explanation: '$V = \\frac{1}{3} \\pi r^2 h$\n$= \\frac{1}{3} \\times \\pi \\times 3^2 \\times 12$\n$= \\frac{1}{3} \\times 108\\pi$\n$= 36\\pi\\text{cm}^3$\n\n따라서 $a = 36$',
    },
    {
      id: 'g1d41-p3',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '밑면의 반지름이 $5\\text{cm}$, 모선의 길이가 $13\\text{cm}$인 원뿔의 옆넓이는?',
      options: ['$50\\pi\\text{cm}^2$', '$55\\pi\\text{cm}^2$', '$60\\pi\\text{cm}^2$', '$65\\pi\\text{cm}^2$'],
      answer: '$65\\pi\\text{cm}^2$',
      explanation: '$\\text{(옆넓이)} = \\pi rl$\n$= \\pi \\times 5 \\times 13$\n$= 65\\pi\\text{cm}^2$',
    },
    {
      id: 'g1d41-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question: '밑면의 반지름이 $6\\text{cm}$, 높이가 $8\\text{cm}$인 원뿔의 모선의 길이를 구하시오. (단위: cm)',
      answer: '10',
      explanation: '피타고라스 정리: $l^2 = r^2 + h^2$\n\n$l^2 = 6^2 + 8^2 = 36 + 64 = 100$\n\n$l = \\sqrt{100} = 10\\text{cm}$',
    },
    {
      id: 'g1d41-p5',
      type: 'short-answer',
      difficulty: 'challenge',
      question: '밑면의 반지름이 $3\\text{cm}$, 높이가 $4\\text{cm}$인 원뿔의 겉넓이를 구하시오. ($a\\pi$ 형태로, $a$의 값만 답하시오)',
      answer: '24',
      explanation: '먼저 모선의 길이를 구합니다.\n$l = \\sqrt{r^2 + h^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5\\text{cm}$\n\n겉넓이 $= \\pi r(r + l)$\n$= \\pi \\times 3 \\times (3 + 5)$\n$= \\pi \\times 3 \\times 8$\n$= 24\\pi\\text{cm}^2$\n\n따라서 $a = 24$',
    },
  ],
  realLifeExample: '피라미드는 대표적인 각뿔 모양 건축물입니다. 이집트 쿠푸 왕의 대피라미드는 밑면이 한 변 약 230m, 높이 약 146m인 사각뿔로, 부피가 약 260만 $\\text{m}^3$에 달합니다!',
};

export default dayContent;
