import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 41,
  part: 6,
  title: '원주각과 중심각',
  subtitle: '원주각은 중심각의 절반',
  lectures: [],
  concepts: [
    {
      id: 'g3d41-c1',
      title: '중심각과 원주각의 정의',
      content: '• 중심각: 원의 중심에서 두 반지름이 이루는 각\\n• 원주각: 원 위의 한 점에서 호의 양 끝점을 이은 두 선분이 이루는 각\\n\\n같은 호에 대한 원주각과 중심각의 관계:\\n원주각 $= \\\\frac{1}{2} \\\\times$ 중심각',
      type: 'definition',
    },
    {
      id: 'g3d41-c2',
      title: '원주각의 성질',
      content: '① 한 호에 대한 원주각의 크기는 모두 같다.\\n② 한 호에 대한 원주각은 중심각의 $\\\\frac{1}{2}$이다.\\n③ 반원에 대한 원주각은 $90°$이다. (지름을 현으로 하는 원주각)\\n④ 같은 호에 대한 원주각끼리는 크기가 같다.',
      type: 'formula',
    },
    {
      id: 'g3d41-c3',
      title: '원주각과 호의 관계',
      content: '같은 원에서:\\n• 같은 크기의 원주각에 대한 호의 길이는 같다.\\n• 같은 크기의 호에 대한 원주각은 같다.\\n• 원주각의 크기는 호의 길이에 비례한다.\\n\\n호의 길이가 2배 → 원주각도 2배',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'g3d41-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '중심각이 $80°$일 때, 같은 호에 대한 원주각은?',
      options: ['$40°$', '$80°$', '$160°$', '$20°$'],
      answer: '$40°$',
      explanation: '원주각 $= \\\\frac{1}{2} \\\\times 80° = 40°$.',
    },
    {
      id: 'g3d41-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '원주각이 $35°$일 때, 같은 호에 대한 중심각은?',
      options: ['$17.5°$', '$35°$', '$70°$', '$105°$'],
      answer: '$70°$',
      explanation: '중심각 $= 2 \\\\times 35° = 70°$.',
    },
    {
      id: 'g3d41-p3',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '반원(지름)에 대한 원주각의 크기는?',
      options: ['$45°$', '$90°$', '$180°$', '$120°$'],
      answer: '$90°$',
      explanation: '반원에 대한 중심각은 $180°$이므로 원주각은 $\\\\frac{180°}{2} = 90°$입니다.',
    },
    {
      id: 'g3d41-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '원 위의 네 점 $A$, $B$, $C$, $D$에서 $\\\\angle ACB = 25°$일 때, 같은 호 $AB$에 대한 $\\\\angle ADB$의 크기는?',
      options: ['$25°$', '$50°$', '$12.5°$', '$75°$'],
      answer: '$25°$',
      explanation: '같은 호 $AB$에 대한 원주각은 모두 같으므로 $\\\\angle ADB = \\\\angle ACB = 25°$.',
    },
    {
      id: 'g3d41-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '원에 내접하는 삼각형 $ABC$에서 $BC$가 지름이고 $\\\\angle ABC = 30°$일 때, $\\\\angle BAC$의 크기는?',
      options: ['$60°$', '$90°$', '$30°$', '$120°$'],
      answer: '$90°$',
      explanation: '$BC$가 지름이므로 $\\\\angle BAC = 90°$ (반원에 대한 원주각). $\\\\angle BCA = 180° - 90° - 30° = 60°$.',
    },
  ],
  realLifeExample: '원형 경기장에서 관중석의 어느 자리에 앉든 경기장 지름에 대한 시야각(원주각)은 $90°$로 일정합니다. 이 원리는 원형 극장이나 콘서트홀의 좌석 배치 설계에 활용됩니다.',
};

export default dayContent;
