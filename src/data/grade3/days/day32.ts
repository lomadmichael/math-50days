import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 32,
  part: 5,
  title: '특수각의 삼각비',
  subtitle: '$30\\\\degree$, $45\\\\degree$, $60\\\\degree$의 삼각비 값',
  lectures: [],
  concepts: [
    {
      id: 'g3d32-c1',
      title: '특수각의 삼각비 표',
      content: '| 각도 | $\\\\sin$ | $\\\\cos$ | $\\\\tan$ |\\n|------|---------|---------|---------|\\n| $30°$ | $\\\\frac{1}{2}$ | $\\\\frac{\\\\sqrt{3}}{2}$ | $\\\\frac{1}{\\\\sqrt{3}} = \\\\frac{\\\\sqrt{3}}{3}$ |\\n| $45°$ | $\\\\frac{\\\\sqrt{2}}{2}$ | $\\\\frac{\\\\sqrt{2}}{2}$ | $1$ |\\n| $60°$ | $\\\\frac{\\\\sqrt{3}}{2}$ | $\\\\frac{1}{2}$ | $\\\\sqrt{3}$ |',
      type: 'formula',
    },
    {
      id: 'g3d32-c2',
      title: '$30°$-$60°$-$90°$ 삼각형',
      content: '정삼각형(한 변의 길이 $2$)을 반으로 나누면:\\n변의 비 = $1 : \\\\sqrt{3} : 2$ (짧은변 : 긴변 : 빗변)\\n\\n$30°$: 대변 $= 1$, 인접변 $= \\\\sqrt{3}$, 빗변 $= 2$\\n$60°$: 대변 $= \\\\sqrt{3}$, 인접변 $= 1$, 빗변 $= 2$',
      type: 'definition',
    },
    {
      id: 'g3d32-c3',
      title: '$45°$-$45°$-$90°$ 삼각형',
      content: '직각이등변삼각형에서:\\n변의 비 = $1 : 1 : \\\\sqrt{2}$\\n\\n$\\\\sin 45° = \\\\cos 45° = \\\\frac{1}{\\\\sqrt{2}} = \\\\frac{\\\\sqrt{2}}{2}$\\n$\\\\tan 45° = 1$',
      type: 'definition',
    },
    {
      id: 'g3d32-c4',
      title: '$0°$와 $90°$의 삼각비',
      content: '극한의 개념으로:\\n$\\\\sin 0° = 0$, $\\\\cos 0° = 1$, $\\\\tan 0° = 0$\\n$\\\\sin 90° = 1$, $\\\\cos 90° = 0$, $\\\\tan 90°$: 정의되지 않음\\n\\n각이 커질수록 $\\\\sin$은 증가, $\\\\cos$은 감소합니다.',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'g3d32-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$\\\\sin 30° + \\\\cos 60°$의 값은?',
      options: ['$\\\\frac{1}{2}$', '$1$', '$\\\\frac{\\\\sqrt{3}}{2}$', '$\\\\sqrt{3}$'],
      answer: '$1$',
      explanation: '$\\\\sin 30° = \\\\frac{1}{2}$, $\\\\cos 60° = \\\\frac{1}{2}$. 합: $\\\\frac{1}{2} + \\\\frac{1}{2} = 1$.',
    },
    {
      id: 'g3d32-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$\\\\tan 60°$의 값은?',
      options: ['$1$', '$\\\\frac{\\\\sqrt{3}}{3}$', '$\\\\sqrt{3}$', '$\\\\frac{1}{2}$'],
      answer: '$\\\\sqrt{3}$',
      explanation: '$\\\\tan 60° = \\\\frac{\\\\sin 60°}{\\\\cos 60°} = \\\\frac{\\\\frac{\\\\sqrt{3}}{2}}{\\\\frac{1}{2}} = \\\\sqrt{3}$.',
    },
    {
      id: 'g3d32-p3',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$\\\\sin^2 45° + \\\\cos^2 45°$의 값은?',
      options: ['$\\\\frac{1}{2}$', '$1$', '$\\\\sqrt{2}$', '$2$'],
      answer: '$1$',
      explanation: '$\\\\sin^2 45° + \\\\cos^2 45° = \\\\left(\\\\frac{\\\\sqrt{2}}{2}\\\\right)^2 + \\\\left(\\\\frac{\\\\sqrt{2}}{2}\\\\right)^2 = \\\\frac{1}{2} + \\\\frac{1}{2} = 1$. ($\\\\sin^2 A + \\\\cos^2 A = 1$이 항상 성립)',
    },
    {
      id: 'g3d32-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$2\\\\sin 30° \\\\times \\\\tan 45° - \\\\cos 60°$의 값은?',
      options: ['$\\\\frac{1}{2}$', '$1$', '$\\\\frac{3}{2}$', '$0$'],
      answer: '$\\\\frac{1}{2}$',
      explanation: '$2 \\\\times \\\\frac{1}{2} \\\\times 1 - \\\\frac{1}{2} = 1 - \\\\frac{1}{2} = \\\\frac{1}{2}$.',
    },
    {
      id: 'g3d32-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '$\\\\frac{\\\\tan 60° - \\\\tan 30°}{1 + \\\\tan 60° \\\\times \\\\tan 30°}$의 값은?',
      options: ['$\\\\frac{\\\\sqrt{3}}{3}$', '$1$', '$\\\\sqrt{3}$', '$\\\\frac{\\\\sqrt{3}}{2}$'],
      answer: '$\\\\frac{\\\\sqrt{3}}{3}$',
      explanation: '$\\\\frac{\\\\sqrt{3} - \\\\frac{\\\\sqrt{3}}{3}}{1 + \\\\sqrt{3} \\\\times \\\\frac{\\\\sqrt{3}}{3}} = \\\\frac{\\\\frac{2\\\\sqrt{3}}{3}}{1 + 1} = \\\\frac{\\\\frac{2\\\\sqrt{3}}{3}}{2} = \\\\frac{\\\\sqrt{3}}{3}$. (이 식은 $\\\\tan 30°$과 같습니다.)',
    },
  ],
  realLifeExample: '정삼각형 모양의 도로 표지판에서 한 변이 60cm라면, 높이는 $60 \\\\times \\\\sin 60° = 60 \\\\times \\\\frac{\\\\sqrt{3}}{2} \\\\approx 51.96$cm입니다. 특수각의 삼각비를 알면 정삼각형, 정사각형 등의 도형 크기를 빠르게 계산할 수 있습니다.',
};

export default dayContent;
