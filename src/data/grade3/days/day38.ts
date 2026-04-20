import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 38,
  part: 5,
  title: '미니테스트 + 복습',
  subtitle: 'PART 5 총정리: 삼각비',
  isTest: true,
  lectures: [],
  concepts: [
    {
      id: 'g3d38-c1',
      title: 'PART 5 핵심 정리: 삼각비',
      content: '① $\\sin A = \\frac{\\text{대변}}{\\text{빗변}}$, $\\cos A = \\frac{\\text{인접변}}{\\text{빗변}}$, $\\tan A = \\frac{\\text{대변}}{\\text{인접변}}$\\n② 특수각: $30°(\\frac{1}{2}, \\frac{\\sqrt{3}}{2}, \\frac{\\sqrt{3}}{3})$, $45°(\\frac{\\sqrt{2}}{2}, \\frac{\\sqrt{2}}{2}, 1)$, $60°(\\frac{\\sqrt{3}}{2}, \\frac{1}{2}, \\sqrt{3})$\\n③ $\\sin^2 A + \\cos^2 A = 1$, $\\sin A = \\cos(90° - A)$\\n④ 넓이: $S = \\frac{1}{2}ab\\sin C$',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'g3d38-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$\\cos 30° \\times \\tan 60°$의 값은?',
      options: ['$\\frac{1}{2}$', '$\\frac{3}{2}$', '$\\frac{\\sqrt{3}}{2}$', '$1$'],
      answer: '$\\frac{3}{2}$',
      explanation: '$\\cos 30° \\times \\tan 60° = \\frac{\\sqrt{3}}{2} \\times \\sqrt{3} = \\frac{3}{2}$.',
    },
    {
      id: 'g3d38-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$\\sin A = \\frac{3}{5}$일 때, $\\tan A$의 값은?',
      options: ['$\\frac{3}{4}$', '$\\frac{4}{3}$', '$\\frac{4}{5}$', '$\\frac{5}{4}$'],
      answer: '$\\frac{3}{4}$',
      explanation: '$\\cos A = \\frac{4}{5}$ ($\\sin^2 A + \\cos^2 A = 1$에서). $\\tan A = \\frac{\\sin A}{\\cos A} = \\frac{3/5}{4/5} = \\frac{3}{4}$.',
    },
    {
      id: 'g3d38-p3',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '빗변이 $12$이고 한 예각이 $60°$인 직각삼각형의 넓이는?',
      options: ['$18$', '$18\\sqrt{3}$', '$36$', '$36\\sqrt{3}$'],
      answer: '$18\\sqrt{3}$',
      explanation: '두 직각변: $12\\sin 60° = 6\\sqrt{3}$, $12\\cos 60° = 6$. 넓이 $= \\frac{1}{2} \\times 6\\sqrt{3} \\times 6 = 18\\sqrt{3}$.',
    },
    {
      id: 'g3d38-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '탑으로부터 $50$m 떨어진 곳에서 탑 꼭대기를 올려다본 앙각이 $30°$일 때, 탑의 높이는? (눈높이 무시)',
      options: ['$\\frac{50}{\\sqrt{3}}$m', '$50\\sqrt{3}$m', '$25$m', '$\\frac{50\\sqrt{3}}{3}$m'],
      answer: '$\\frac{50\\sqrt{3}}{3}$m',
      explanation: '$h = 50\\tan 30° = 50 \\times \\frac{\\sqrt{3}}{3} = \\frac{50\\sqrt{3}}{3}$m.',
    },
    {
      id: 'g3d38-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '두 변이 $8$, $10$이고 끼인각이 $45°$인 삼각형의 넓이는?',
      options: ['$20$', '$20\\sqrt{2}$', '$40$', '$40\\sqrt{2}$'],
      answer: '$20\\sqrt{2}$',
      explanation: '$S = \\frac{1}{2} \\times 8 \\times 10 \\times \\sin 45° = 40 \\times \\frac{\\sqrt{2}}{2} = 20\\sqrt{2}$.',
    },
    {
      id: 'g3d38-p6',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '$\\sin 20° = a$일 때, $\\sin^2 70° + \\sin^2 20°$의 값은?',
      options: ['$a^2$', '$1$', '$2a^2$', '$1 - a^2$'],
      answer: '$1$',
      explanation: '$\\sin 70° = \\cos 20°$이므로 $\\sin^2 70° + \\sin^2 20° = \\cos^2 20° + \\sin^2 20° = 1$.',
    },
  ],
  realLifeExample: '삼각비는 건축, 측량, 항해, 천문학 등 거의 모든 과학기술 분야에서 기본 도구로 사용됩니다. 고등학교에서는 삼각함수로 확장되어 파동, 진동, 회전 운동 등을 설명하는 핵심 수학이 됩니다.',
};

export default dayContent;
