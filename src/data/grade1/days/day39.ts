import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 39,
  part: 7,
  title: '회전체(Solid of Revolution)',
  subtitle: '평면도형을 회전시키면 어떤 입체도형이 될까?',
  lectures: [],
  concepts: [
    {
      id: 'g1d39-c1',
      title: '회전체(Solid of Revolution)란?',
      content: '**회전체(Solid of Revolution)**는 평면도형을 한 직선(회전축, Axis of Rotation)을 중심으로 1회전 시킬 때 생기는 입체도형입니다.\n\n• **원기둥(Cylinder)**: 직사각형을 한 변을 축으로 회전\n• **원뿔(Cone)**: 직각삼각형을 직각을 낀 한 변을 축으로 회전\n• **구(Sphere)**: 반원을 지름을 축으로 회전\n\n회전체의 특징:\n- 회전축(Axis of Rotation)을 포함하는 평면으로 자르면 항상 **대칭**인 도형\n- 회전축에 수직인 평면으로 자르면 항상 **원**',
      type: 'definition',
    },
    {
      id: 'g1d39-c2',
      title: '회전체의 단면(Cross Section)',
      content: '회전체를 평면으로 잘랐을 때 나타나는 단면(Cross Section):\n\n| 회전체 | 회전축 포함 단면 | 회전축 수직 단면 |\n|---|---|---|\n| 원기둥(Cylinder) | 직사각형 | 원 (합동) |\n| 원뿔(Cone) | 이등변삼각형 | 원 (크기 변화) |\n| 구(Sphere) | 원 | 원 (크기 변화) |\n\n• 구(Sphere)를 중심을 지나는 평면으로 자른 단면(Cross Section)이 **가장 큰 원** (대원)',
      type: 'definition',
    },
  ],
  problems: [
    {
      id: 'g1d39-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '직사각형을 한 변을 축으로 1회전 시키면 어떤 입체도형이 생기는가?',
      options: ['원뿔', '원기둥', '구', '각기둥'],
      answer: '원기둥',
      explanation: '직사각형을 한 변을 축으로 1회전 시키면 **원기둥**이 만들어집니다.\n\n축이 되는 변의 길이가 높이, 다른 변의 길이가 밑면의 반지름이 됩니다.',
    },
    {
      id: 'g1d39-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '원뿔을 회전축을 포함하는 평면으로 자른 단면의 모양은?',
      options: ['원', '직사각형', '이등변삼각형', '정삼각형'],
      answer: '이등변삼각형',
      explanation: '원뿔을 회전축을 포함하는 평면으로 자르면 **이등변삼각형** 모양의 단면이 나타납니다.\n\n회전축이 대칭축이 되기 때문입니다.',
    },
    {
      id: 'g1d39-p3',
      type: 'short-answer',
      difficulty: 'applied',
      question: '반지름이 $5\\text{cm}$인 반원을 지름을 축으로 1회전 시키면 생기는 구의 지름은 몇 cm인가?',
      answer: '10',
      explanation: '반지름이 $5\\text{cm}$인 반원을 지름을 축으로 1회전하면 **구**가 생깁니다.\n\n이 구의 반지름은 반원의 반지름과 같으므로 $5\\text{cm}$\n\n따라서 지름 $= 2 \\times 5 = 10\\text{cm}$',
    },
    {
      id: 'g1d39-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '원기둥을 회전축에 수직인 평면으로 잘랐을 때, 단면에 대한 설명으로 옳은 것은?',
      options: [
        '항상 직사각형이다',
        '어디서 잘라도 합동인 원이다',
        '자르는 위치에 따라 원의 크기가 달라진다',
        '항상 타원이다',
      ],
      answer: '어디서 잘라도 합동인 원이다',
      explanation: '원기둥을 회전축에 수직인 평면으로 자르면 **어디서 잘라도 합동인 원**이 나타납니다.\n\n원기둥의 밑면의 반지름과 같은 크기의 원입니다.',
    },
    {
      id: 'g1d39-p5',
      type: 'short-answer',
      difficulty: 'challenge',
      question: '가로 $3\\text{cm}$, 세로 $7\\text{cm}$인 직사각형을 긴 변을 축으로 1회전 시킬 때, 생기는 원기둥의 밑면의 반지름은 몇 cm인가?',
      answer: '3',
      explanation: '세로(긴 변) $7\\text{cm}$를 축으로 회전하면:\n\n• 원기둥의 높이 = 축의 길이 = $7\\text{cm}$\n• 원기둥의 밑면의 반지름 = 가로의 길이 = $3\\text{cm}$\n\n따라서 밑면의 반지름은 $3\\text{cm}$',
    },
  ],
  realLifeExample: '회전체(Solid of Revolution)는 일상에서 매우 흔합니다. 음료수 캔은 원기둥(Cylinder), 아이스크림 콘은 원뿔(Cone), 공은 구(Sphere)입니다. 도자기를 만들 때 물레를 돌리는 것도 회전체의 원리를 이용한 것이에요!',
};

export default dayContent;
