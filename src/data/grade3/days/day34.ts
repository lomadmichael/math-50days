import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 34,
  part: 5,
  title: '삼각비를 이용한 길이 구하기',
  subtitle: '직각삼각형에서 변의 길이 계산',
  lectures: [],
  concepts: [
    {
      id: 'g3d34-c1',
      title: '직각삼각형에서 변의 길이',
      content: '직각삼각형 ABC ($\\angle C = 90°$)에서:\\n빗변 $c$, 각 $A$가 주어지면:\\n• $a = c \\sin A$ (대변)\\n• $b = c \\cos A$ (인접변)\\n\\n한 변과 각이 주어지면:\\n• $a$와 $A$가 주어지면: $c = \\frac{a}{\\sin A}$, $b = \\frac{a}{\\tan A}$',
      type: 'formula',
    },
    {
      id: 'g3d34-c2',
      title: '일반 삼각형에서 높이와 변의 길이',
      content: '예각삼각형에서 꼭짓점 $A$에서 $BC$에 내린 수선의 발을 $H$라 하면:\\n$AH = AB \\sin B = AC \\sin C$\\n$BH = AB \\cos B$\\n$CH = AC \\cos C$\\n\\n이를 이용해 다양한 길이를 구할 수 있습니다.',
      type: 'example',
    },
    {
      id: 'g3d34-c3',
      title: '풀이 전략',
      content: '① 직각삼각형을 찾거나 만든다 (수선 내리기)\\n② 알고 있는 변과 각을 확인한다\\n③ 구하려는 변과의 관계에 맞는 삼각비를 선택한다\\n④ 방정식을 세우고 풀어 길이를 구한다',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'g3d34-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '빗변이 $10$이고 한 예각이 $30°$인 직각삼각형에서, $30°$의 대변의 길이는?',
      options: ['$5$', '$5\\sqrt{3}$', '$5\\sqrt{2}$', '$10$'],
      answer: '$5$',
      explanation: '대변 $= 10 \\sin 30° = 10 \\times \\frac{1}{2} = 5$.',
    },
    {
      id: 'g3d34-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '빗변이 $8$이고 한 예각이 $45°$인 직각삼각형에서 두 직각변의 길이는?',
      options: ['$4$', '$4\\sqrt{2}$', '$4\\sqrt{3}$', '$8\\sqrt{2}$'],
      answer: '$4\\sqrt{2}$',
      explanation: '직각변 $= 8 \\sin 45° = 8 \\times \\frac{\\sqrt{2}}{2} = 4\\sqrt{2}$. $45°$-$45°$-$90°$ 삼각형이므로 두 직각변이 같습니다.',
    },
    {
      id: 'g3d34-p3',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '직각삼각형에서 한 직각변이 $6$이고, 그 변의 대각이 $60°$일 때, 빗변의 길이는?',
      options: ['$4\\sqrt{3}$', '$6\\sqrt{3}$', '$12$', '$4$'],
      answer: '$4\\sqrt{3}$',
      explanation: '$\\sin 60° = \\frac{6}{c}$에서 $c = \\frac{6}{\\sin 60°} = \\frac{6}{\\frac{\\sqrt{3}}{2}} = \\frac{12}{\\sqrt{3}} = 4\\sqrt{3}$.',
    },
    {
      id: 'g3d34-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$\\triangle ABC$에서 $\\angle B = 45°$, $\\angle C = 60°$, $BC = 10$일 때, 꼭짓점 $A$에서 $BC$에 내린 수선의 길이 $h$는?',
      options: ['$\\frac{10(\\sqrt{6} - \\sqrt{2})}{2}$', '$\\frac{10\\sqrt{3}}{1 + \\sqrt{3}}$', '$5(\\sqrt{3} - 1)$', '$\\frac{10\\sqrt{6}}{\\sqrt{2} + \\sqrt{6}}$'],
      answer: '$\\frac{10\\sqrt{3}}{1 + \\sqrt{3}}$',
      explanation: '수선의 발 $H$에서 $BH = \\frac{h}{\\tan 45°} = h$, $CH = \\frac{h}{\\tan 60°} = \\frac{h}{\\sqrt{3}}$. $h + \\frac{h}{\\sqrt{3}} = 10$, $h\\left(1 + \\frac{1}{\\sqrt{3}}\\right) = 10$, $h = \\frac{10\\sqrt{3}}{\\sqrt{3} + 1}$.',
    },
    {
      id: 'g3d34-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '정삼각형의 한 변의 길이가 $6$일 때, 높이는?',
      options: ['$3$', '$3\\sqrt{2}$', '$3\\sqrt{3}$', '$6\\sqrt{3}$'],
      answer: '$3\\sqrt{3}$',
      explanation: '꼭짓점에서 밑변에 수선을 내리면 $30°$-$60°$-$90°$ 삼각형. 높이 $= 6 \\sin 60° = 6 \\times \\frac{\\sqrt{3}}{2} = 3\\sqrt{3}$.',
    },
  ],
  realLifeExample: '등산로에서 경사가 $30°$인 길을 500m 걸어 올라갔다면, 실제 높이 변화는 $500 \\sin 30° = 250$m이고, 수평 이동 거리는 $500 \\cos 30° \\approx 433$m입니다.',
};

export default dayContent;
