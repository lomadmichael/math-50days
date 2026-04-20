import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 44,
  part: 6,
  title: '접선과 현이 이루는 각',
  subtitle: '접선-현 각도와 원주각의 관계',
  lectures: [],
  concepts: [
    {
      id: 'g3d44-c1',
      title: '접선과 현이 이루는 각',
      content: '원의 접선과 그 접점을 지나는 현이 이루는 각은\\n그 각 안에 포함된 호에 대한 원주각과 같습니다.\\n\\n접점 $T$에서 접선 $l$과 현 $TA$가 이루는 각 $\\alpha$는\\n호 $TA$ (각 안쪽)에 대한 원주각과 같다.',
      type: 'formula',
    },
    {
      id: 'g3d44-c2',
      title: '접선과 현이 이루는 각의 증명 개요',
      content: '접선과 현이 이루는 각의 크기가 원주각과 같은 이유:\\n현이 지름인 경우: 접선과 지름은 $90°$, 반원에 대한 원주각도 $90°$\\n일반 경우: 지름을 보조선으로 그어 증명할 수 있습니다.\\n\\n이 정리는 원에서 접선이 등장하는 많은 문제의 핵심입니다.',
      type: 'tip',
    },
    {
      id: 'g3d44-c3',
      title: '할선과 접선의 관계',
      content: '원 밖의 점 $P$에서 접선과 할선을 그을 때:\\n접선의 길이를 $t$, 할선이 원과 만나는 두 점까지의 거리를 $a$, $b$라 하면:\\n$t^2 = a \\times b$ (접선과 할선의 관계, 멱의 정리)\\n\\n이 공식은 접선의 길이나 할선의 길이를 구하는 데 활용됩니다.',
      type: 'formula',
    },
  ],
  problems: [
    {
      id: 'g3d44-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '원의 접선과 접점을 지나는 현이 이루는 각이 $40°$일 때, 그 호에 대한 원주각은?',
      options: ['$20°$', '$40°$', '$80°$', '$50°$'],
      answer: '$40°$',
      explanation: '접선과 현이 이루는 각은 그 호에 대한 원주각과 같으므로 $40°$입니다.',
    },
    {
      id: 'g3d44-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '접점 $T$에서 접선과 현 $TA$가 이루는 각이 $55°$일 때, 호 $TA$에 대한 중심각은?',
      options: ['$55°$', '$110°$', '$27.5°$', '$125°$'],
      answer: '$110°$',
      explanation: '접선과 현이 이루는 각 $55°$ = 원주각. 중심각 $= 2 \\times 55° = 110°$.',
    },
    {
      id: 'g3d44-p3',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '원 밖의 점 $P$에서 접선의 길이가 $6$이고, 같은 점에서 할선이 원과 만나는 두 점까지의 거리가 $4$, $x$일 때 $x$는?',
      options: ['$8$', '$9$', '$10$', '$12$'],
      answer: '$9$',
      explanation: '$t^2 = a \\times b$에서 $36 = 4 \\times x$, $x = 9$.',
    },
    {
      id: 'g3d44-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '원의 접선 $PT$와 현 $TB$가 이루는 각이 $65°$이고, $\\angle TAB = 35°$ ($A$는 호 $TB$ 위의 점)일 때, $\\angle ATB$는?',
      options: ['$80°$', '$100°$', '$65°$', '$85°$'],
      answer: '$80°$',
      explanation: '호 $TB$ (큰 호)에 대한 원주각 = 접선-현 각도 $= 65°$. 삼각형 $ATB$에서 $\\angle ATB = 180° - 35° - 65° = 80°$.',
    },
    {
      id: 'g3d44-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '원 밖의 점 $P$에서 접선 $PT$의 길이가 $8$이고, 점 $P$에서 원의 중심까지의 거리가 $10$일 때, 점 $P$에서 원의 가장 가까운 점까지의 거리는?',
      options: ['$2$', '$4$', '$6$', '$8$'],
      answer: '$4$',
      explanation: '반지름 $r = \\sqrt{10^2 - 8^2} = \\sqrt{36} = 6$. 가장 가까운 점까지의 거리 $= OP - r = 10 - 6 = 4$.',
    },
  ],
  realLifeExample: '당구에서 쿠션(접선)에 맞은 공이 반사될 때, 입사각과 반사각은 접선과 현이 이루는 각의 원리와 유사합니다. 프로 당구 선수들은 이런 기하학적 원리를 활용하여 정밀한 쿠션 샷을 구사합니다.',
};

export default dayContent;
