import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 36,
  part: 6,
  title: '부채꼴(Sector)의 호의 길이(Arc Length)와 넓이(Area)',
  subtitle: '부채꼴(Sector)의 호의 길이(Arc Length)와 넓이(Area)를 공식으로 구해 보자!',
  lectures: [],
  concepts: [
    {
      id: 'g1d36-c1',
      title: '원(Circle)의 둘레와 넓이(Area)',
      content: '• 원주율 $\\pi$(Pi): 원(Circle)의 지름(Diameter)에 대한 둘레의 비 (약 3.14159...)\n• **원(Circle)의 둘레**: $2\\pi r$ (또는 $\\pi d$)\n• **원(Circle)의 넓이(Area)**: $\\pi r^2$\n• 예) 반지름(Radius) $5\\text{cm}$인 원(Circle)의 둘레: $2\\pi \\times 5 = 10\\pi\\text{(cm)}$\n• 예) 반지름(Radius) $5\\text{cm}$인 원(Circle)의 넓이(Area): $\\pi \\times 5^2 = 25\\pi\\text{(cm}^2\\text{)}$',
      type: 'formula',
    },
    {
      id: 'g1d36-c2',
      title: '부채꼴(Sector)의 호의 길이(Arc Length)',
      content: '• 중심각(Central Angle)이 $x°$이고 반지름(Radius)이 $r$인 부채꼴(Sector)의 **호의 길이(Arc Length)**:\n$$l = 2\\pi r \\times \\dfrac{x}{360}$$\n• 예) $r = 6\\text{cm}$, $x = 120°$일 때:\n$l = 2\\pi \\times 6 \\times \\dfrac{120}{360} = 12\\pi \\times \\dfrac{1}{3} = 4\\pi\\text{(cm)}$',
      type: 'formula',
    },
    {
      id: 'g1d36-c3',
      title: '부채꼴(Sector)의 넓이(Area)',
      content: '• 중심각(Central Angle)이 $x°$이고 반지름(Radius)이 $r$인 부채꼴(Sector)의 **넓이(Area)**:\n$$S = \\pi r^2 \\times \\dfrac{x}{360}$$\n• 또는 호의 길이(Arc Length) $l$을 알 때: $S = \\dfrac{1}{2} l r$\n• 예) $r = 6\\text{cm}$, $x = 120°$일 때:\n$S = \\pi \\times 36 \\times \\dfrac{120}{360} = 36\\pi \\times \\dfrac{1}{3} = 12\\pi\\text{(cm}^2\\text{)}$',
      type: 'formula',
    },
  ],
  problems: [
    {
      id: 'g1d36-p1',
      type: 'short-answer',
      difficulty: 'basic',
      question: '반지름이 $9\\text{cm}$이고 중심각이 $80°$인 부채꼴의 호의 길이를 구하시오. (결과를 $a\\pi$ 형태로 나타낼 때 $a$의 값)',
      answer: '4',
      explanation: '$l = 2\\pi r \\times \\dfrac{x}{360}$\n\n$= 2\\pi \\times 9 \\times \\dfrac{80}{360}$\n\n$= 18\\pi \\times \\dfrac{2}{9} = 4\\pi\\text{(cm)}$\n\n따라서 $a = 4$',
    },
    {
      id: 'g1d36-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: '반지름이 $6\\text{cm}$이고 중심각이 $60°$인 부채꼴의 넓이를 구하시오. (결과를 $a\\pi$ 형태로 나타낼 때 $a$의 값)',
      answer: '6',
      explanation: '$S = \\pi r^2 \\times \\dfrac{x}{360}$\n\n$= \\pi \\times 36 \\times \\dfrac{60}{360}$\n\n$= 36\\pi \\times \\dfrac{1}{6} = 6\\pi\\text{(cm}^2\\text{)}$\n\n따라서 $a = 6$',
    },
    {
      id: 'g1d36-p3',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '반지름이 $12\\text{cm}$이고 호의 길이가 $8\\pi\\text{cm}$인 부채꼴의 중심각의 크기는?',
      options: ['$100°$', '$110°$', '$120°$', '$150°$'],
      answer: '$120°$',
      explanation: '$l = 2\\pi r \\times \\dfrac{x}{360}$\n\n$8\\pi = 2\\pi \\times 12 \\times \\dfrac{x}{360}$\n\n$8\\pi = 24\\pi \\times \\dfrac{x}{360}$\n\n$\\dfrac{x}{360} = \\dfrac{8}{24} = \\dfrac{1}{3}$\n\n$x = 120°$',
    },
    {
      id: 'g1d36-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question: '호의 길이가 $10\\pi\\text{cm}$이고 반지름이 $15\\text{cm}$인 부채꼴의 넓이를 구하시오. (결과를 $a\\pi$ 형태로 나타낼 때 $a$의 값)',
      answer: '75',
      explanation: '$S = \\dfrac{1}{2} l r$을 이용합니다.\n\n$S = \\dfrac{1}{2} \\times 10\\pi \\times 15 = 75\\pi\\text{(cm}^2\\text{)}$\n\n따라서 $a = 75$',
    },
    {
      id: 'g1d36-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '반지름이 $4\\text{cm}$인 원에서 중심각이 $90°$인 부채꼴 2개를 잘라냈을 때, 남은 부분의 넓이는?',
      options: ['$4\\pi\\text{cm}^2$', '$6\\pi\\text{cm}^2$', '$8\\pi\\text{cm}^2$', '$12\\pi\\text{cm}^2$'],
      answer: '$8\\pi\\text{cm}^2$',
      explanation: '원의 넓이: $\\pi \\times 4^2 = 16\\pi\\text{cm}^2$\n\n부채꼴 1개의 넓이: $16\\pi \\times \\dfrac{90}{360} = 4\\pi\\text{cm}^2$\n\n부채꼴 2개의 넓이: $4\\pi \\times 2 = 8\\pi\\text{cm}^2$\n\n남은 부분: $16\\pi - 8\\pi = 8\\pi\\text{cm}^2$',
    },
  ],
  realLifeExample: '스프링클러가 회전하며 물을 뿌리는 영역이 부채꼴(Sector)입니다. 회전 각도(중심각(Central Angle))와 뿌리는 거리(반지름(Radius))를 알면 물이 닿는 면적(넓이(Area))을 계산할 수 있어요. 와이퍼가 닦는 유리 면적도 부채꼴(Sector) 넓이(Area) 공식으로 구할 수 있습니다!',
};

export default dayContent;
