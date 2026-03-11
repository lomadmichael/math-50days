import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 37,
  part: 5,
  title: '삼각비 종합 활용',
  subtitle: '길이, 높이, 넓이를 종합적으로 구하기',
  lectures: [],
  concepts: [
    {
      id: 'g3d37-c1',
      title: '종합 활용 전략',
      content: '삼각비 문제 풀이 순서:\\n① 그림을 그리고 주어진 조건 표시\\n② 직각삼각형 찾기 (없으면 수선 내리기)\\n③ 적절한 삼각비 선택 ($\\\\sin$, $\\\\cos$, $\\\\tan$)\\n④ 방정식 세우기\\n⑤ 계산 후 답 검증',
      type: 'tip',
    },
    {
      id: 'g3d37-c2',
      title: '정사각형과 삼각비',
      content: '정사각형의 대각선 길이가 $d$이면 한 변의 길이는 $\\\\frac{d}{\\\\sqrt{2}} = \\\\frac{d\\\\sqrt{2}}{2}$\\n(대각선이 $45°$를 이루므로)\\n\\n정육각형의 한 변이 $a$이면 넓이는 $6 \\\\times \\\\frac{\\\\sqrt{3}}{4}a^2 = \\\\frac{3\\\\sqrt{3}}{2}a^2$',
      type: 'example',
    },
    {
      id: 'g3d37-c3',
      title: '3차원 도형에서의 삼각비',
      content: '직육면체에서 대각선과 면이 이루는 각:\\n가로 $a$, 세로 $b$, 높이 $c$일 때\\n공간 대각선 $= \\\\sqrt{a^2 + b^2 + c^2}$\\n바닥면 대각선 $= \\\\sqrt{a^2 + b^2}$\\n공간 대각선과 바닥면이 이루는 각 $\\\\theta$: $\\\\tan \\\\theta = \\\\frac{c}{\\\\sqrt{a^2 + b^2}}$',
      type: 'formula',
    },
  ],
  problems: [
    {
      id: 'g3d37-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '한 변이 $4$인 정삼각형의 높이와 넓이는?',
      options: ['높이 $2\\\\sqrt{3}$, 넓이 $4\\\\sqrt{3}$', '높이 $4\\\\sqrt{3}$, 넓이 $8\\\\sqrt{3}$', '높이 $2\\\\sqrt{3}$, 넓이 $8\\\\sqrt{3}$', '높이 $2$, 넓이 $4$'],
      answer: '높이 $2\\\\sqrt{3}$, 넓이 $4\\\\sqrt{3}$',
      explanation: '높이 $= 4\\\\sin 60° = 2\\\\sqrt{3}$. 넓이 $= \\\\frac{1}{2} \\\\times 4 \\\\times 2\\\\sqrt{3} = 4\\\\sqrt{3}$.',
    },
    {
      id: 'g3d37-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '경사각 $30°$인 비탈길을 $100$m 올라갔을 때, 수직으로 올라간 높이는?',
      options: ['$50$m', '$50\\\\sqrt{3}$m', '$\\\\frac{100\\\\sqrt{3}}{3}$m', '$100$m'],
      answer: '$50$m',
      explanation: '수직 높이 $= 100\\\\sin 30° = 100 \\\\times \\\\frac{1}{2} = 50$m.',
    },
    {
      id: 'g3d37-p3',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '마름모의 한 변이 $6$이고 한 내각이 $120°$일 때, 넓이는?',
      options: ['$18$', '$18\\\\sqrt{3}$', '$36$', '$9\\\\sqrt{3}$'],
      answer: '$18\\\\sqrt{3}$',
      explanation: '마름모 넓이 $= 6 \\\\times 6 \\\\times \\\\sin 60° = 36 \\\\times \\\\frac{\\\\sqrt{3}}{2} = 18\\\\sqrt{3}$. ($120°$의 보각 $60°$를 사용. $\\\\sin 120° = \\\\sin 60°$)',
    },
    {
      id: 'g3d37-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '강 건너편 나무의 높이를 재기 위해 강 이쪽 두 지점 $A$, $B$ ($AB = 30$m)에서 나무 꼭대기를 올려다본 앙각이 각각 $60°$, $30°$이다. 나무의 높이는?',
      options: ['$15\\\\sqrt{3}$m', '$10\\\\sqrt{3}$m', '$\\\\frac{15\\\\sqrt{3}}{2}$m', '$20\\\\sqrt{3}$m'],
      answer: '$15\\\\sqrt{3}$m',
      explanation: '나무까지 거리를 $x$라 하면 $h = x\\\\tan 60°$, $h = (x+30)\\\\tan 30°$. $x\\\\sqrt{3} = \\\\frac{x+30}{\\\\sqrt{3}}$, $3x = x + 30$, $x = 15$. $h = 15\\\\sqrt{3}$m.',
    },
    {
      id: 'g3d37-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '한 변이 $2$인 정육각형의 넓이는?',
      options: ['$6$', '$6\\\\sqrt{3}$', '$4\\\\sqrt{3}$', '$3\\\\sqrt{3}$'],
      answer: '$6\\\\sqrt{3}$',
      explanation: '정육각형은 한 변이 $2$인 정삼각형 6개. 정삼각형 넓이 $= \\\\frac{\\\\sqrt{3}}{4} \\\\times 4 = \\\\sqrt{3}$. 전체 $= 6\\\\sqrt{3}$.',
    },
  ],
  realLifeExample: '건축가가 지붕의 경사각과 건물 폭을 알면 삼각비로 서까래의 길이, 지붕의 높이, 지붕 면의 넓이를 모두 계산할 수 있습니다. 이 계산은 자재 수량과 비용을 결정하는 데 직접 활용됩니다.',
};

export default dayContent;
