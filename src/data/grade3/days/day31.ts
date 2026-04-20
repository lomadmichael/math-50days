import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 31,
  part: 5,
  title: '삼각비의 뜻',
  subtitle: '$\\sin$, $\\cos$, $\\tan$의 정의',
  lectures: [],
  concepts: [
    {
      id: 'g3d31-c1',
      title: '삼각비의 정의',
      content: '직각삼각형에서 $\\angle A$에 대하여:\\n$\\sin A = \\frac{\\text{(빗변에 대한 대변)}}{\\text{빗변}} = \\frac{a}{c}$\\n$\\cos A = \\frac{\\text{(빗변에 대한 인접변)}}{\\text{빗변}} = \\frac{b}{c}$\\n$\\tan A = \\frac{\\text{대변}}{\\text{인접변}} = \\frac{a}{b}$\\n\\n여기서 $a$: 대변, $b$: 인접변, $c$: 빗변',
      type: 'definition',
    },
    {
      id: 'g3d31-c2',
      title: '삼각비 외우는 법',
      content: 'SOH-CAH-TOA로 기억하세요!\\n• $\\sin$ = Opposite / Hypotenuse (대변/빗변)\\n• $\\cos$ = Adjacent / Hypotenuse (인접변/빗변)\\n• $\\tan$ = Opposite / Adjacent (대변/인접변)\\n\\n$\\tan A = \\frac{\\sin A}{\\cos A}$도 성립합니다.',
      type: 'tip',
    },
    {
      id: 'g3d31-c3',
      title: '삼각비의 기본 성질',
      content: '• $0 < \\sin A < 1$, $0 < \\cos A < 1$ (예각일 때)\\n• $\\tan A > 0$ (예각일 때)\\n• $\\sin^2 A + \\cos^2 A = 1$ (피타고라스 정리에서 유도)\\n\\n증명: $\\sin^2 A + \\cos^2 A = \\frac{a^2}{c^2} + \\frac{b^2}{c^2} = \\frac{a^2 + b^2}{c^2} = \\frac{c^2}{c^2} = 1$',
      type: 'formula',
    },
  ],
  problems: [
    {
      id: 'g3d31-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '직각삼각형에서 빗변이 $5$, 대변이 $3$, 인접변이 $4$일 때, $\\sin A$는?',
      options: ['$\\frac{3}{5}$', '$\\frac{4}{5}$', '$\\frac{3}{4}$', '$\\frac{5}{3}$'],
      answer: '$\\frac{3}{5}$',
      explanation: '$\\sin A = \\frac{\\text{대변}}{\\text{빗변}} = \\frac{3}{5}$',
    },
    {
      id: 'g3d31-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '같은 삼각형에서 $\\cos A$는?',
      options: ['$\\frac{3}{5}$', '$\\frac{4}{5}$', '$\\frac{3}{4}$', '$\\frac{5}{4}$'],
      answer: '$\\frac{4}{5}$',
      explanation: '$\\cos A = \\frac{\\text{인접변}}{\\text{빗변}} = \\frac{4}{5}$',
    },
    {
      id: 'g3d31-p3',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '같은 삼각형에서 $\\tan A$는?',
      options: ['$\\frac{3}{5}$', '$\\frac{4}{3}$', '$\\frac{3}{4}$', '$\\frac{5}{3}$'],
      answer: '$\\frac{3}{4}$',
      explanation: '$\\tan A = \\frac{\\text{대변}}{\\text{인접변}} = \\frac{3}{4}$',
    },
    {
      id: 'g3d31-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$\\sin A = \\frac{5}{13}$일 때, $\\cos A$의 값은? (직각삼각형)',
      options: ['$\\frac{12}{13}$', '$\\frac{5}{12}$', '$\\frac{8}{13}$', '$\\frac{13}{12}$'],
      answer: '$\\frac{12}{13}$',
      explanation: '$\\sin^2 A + \\cos^2 A = 1$에서 $\\cos^2 A = 1 - \\frac{25}{169} = \\frac{144}{169}$. $\\cos A = \\frac{12}{13}$ (예각이므로 양수).',
    },
    {
      id: 'g3d31-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '$\\tan A = 2$일 때, $\\sin A \\times \\cos A$의 값은?',
      options: ['$\\frac{1}{5}$', '$\\frac{2}{5}$', '$\\frac{3}{5}$', '$\\frac{4}{5}$'],
      answer: '$\\frac{2}{5}$',
      explanation: '대변 $= 2k$, 인접변 $= k$라 하면 빗변 $= \\sqrt{5}k$. $\\sin A = \\frac{2}{\\sqrt{5}}$, $\\cos A = \\frac{1}{\\sqrt{5}}$. $\\sin A \\times \\cos A = \\frac{2}{5}$.',
    },
  ],
  realLifeExample: '측량사가 건물의 높이를 잴 때, 건물까지의 거리와 올려다보는 각도를 측정하면 삼각비($\\tan$)를 이용하여 직접 올라가지 않고도 건물의 높이를 정확히 계산할 수 있습니다.',
};

export default dayContent;
