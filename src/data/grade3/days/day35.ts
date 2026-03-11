import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 35,
  part: 5,
  title: '삼각비를 이용한 높이 구하기',
  subtitle: '앙각, 부각을 이용한 높이 측정',
  lectures: [],
  concepts: [
    {
      id: 'g3d35-c1',
      title: '앙각과 부각',
      content: '• 앙각(仰角): 수평선에서 위쪽 대상을 올려다볼 때의 각도\\n• 부각(俯角) 또는 내려다보는 각: 수평선에서 아래쪽 대상을 내려다볼 때의 각도\\n\\n앙각과 부각 모두 수평선과 시선이 이루는 예각입니다.',
      type: 'definition',
    },
    {
      id: 'g3d35-c2',
      title: '앙각을 이용한 높이 구하기',
      content: '관측자가 수평 거리 $d$에서 앙각 $\\\\theta$로 건물 꼭대기를 올려다볼 때:\\n건물 높이 $h = d \\\\tan \\\\theta + h_0$\\n($h_0$: 관측자의 눈높이)\\n\\n눈높이를 무시하면 $h = d \\\\tan \\\\theta$',
      type: 'formula',
    },
    {
      id: 'g3d35-c3',
      title: '두 지점에서 관측하여 높이 구하기',
      content: '같은 건물을 두 지점에서 관측할 때:\\n가까운 지점에서 앙각 $\\\\alpha$, 먼 지점에서 앙각 $\\\\beta$ ($\\\\alpha > \\\\beta$)\\n두 지점 사이의 거리가 $d$일 때:\\n$h = \\\\frac{d \\\\tan \\\\alpha \\\\times \\\\tan \\\\beta}{\\\\tan \\\\alpha - \\\\tan \\\\beta}$',
      type: 'formula',
    },
    {
      id: 'g3d35-c4',
      title: '부각을 이용한 거리 구하기',
      content: '높이 $h$인 곳에서 부각 $\\\\theta$로 내려다볼 때:\\n수평 거리 $d = \\\\frac{h}{\\\\tan \\\\theta} = h \\\\times \\\\frac{\\\\cos \\\\theta}{\\\\sin \\\\theta}$\\n\\n대상까지의 직선 거리 $l = \\\\frac{h}{\\\\sin \\\\theta}$',
      type: 'example',
    },
  ],
  problems: [
    {
      id: 'g3d35-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '건물로부터 수평 거리 $20$m인 지점에서 앙각이 $60°$일 때, 건물의 높이는? (눈높이 무시)',
      options: ['$20$m', '$20\\\\sqrt{3}$m', '$10\\\\sqrt{3}$m', '$40$m'],
      answer: '$20\\\\sqrt{3}$m',
      explanation: '$h = 20 \\\\tan 60° = 20\\\\sqrt{3}$m.',
    },
    {
      id: 'g3d35-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '나무의 그림자 길이가 $10$m이고, 태양의 앙각이 $45°$일 때 나무의 높이는?',
      options: ['$5$m', '$10$m', '$10\\\\sqrt{2}$m', '$10\\\\sqrt{3}$m'],
      answer: '$10$m',
      explanation: '$h = 10 \\\\tan 45° = 10 \\\\times 1 = 10$m.',
    },
    {
      id: 'g3d35-p3',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '높이가 $50$m인 전망대에서 부각 $30°$로 배를 내려다볼 때, 배까지의 수평 거리는?',
      options: ['$25\\\\sqrt{3}$m', '$50\\\\sqrt{3}$m', '$\\\\frac{50\\\\sqrt{3}}{3}$m', '$100$m'],
      answer: '$50\\\\sqrt{3}$m',
      explanation: '$d = \\\\frac{50}{\\\\tan 30°} = \\\\frac{50}{\\\\frac{\\\\sqrt{3}}{3}} = 50\\\\sqrt{3}$m.',
    },
    {
      id: 'g3d35-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '한 지점에서 탑의 꼭대기를 올려다본 앙각이 $30°$이고, 탑 쪽으로 $20$m 다가갔더니 앙각이 $60°$가 되었다. 탑의 높이는?',
      options: ['$10\\\\sqrt{3}$m', '$20\\\\sqrt{3}$m', '$15\\\\sqrt{3}$m', '$30$m'],
      answer: '$10\\\\sqrt{3}$m',
      explanation: '탑까지 남은 거리를 $x$라 하면 $h = x\\\\tan 60°$, $h = (x+20)\\\\tan 30°$. $x\\\\sqrt{3} = \\\\frac{x+20}{\\\\sqrt{3}}$, $3x = x + 20$, $x = 10$. $h = 10\\\\sqrt{3}$m.',
    },
    {
      id: 'g3d35-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '높이 $h$인 절벽 위에서 호수 반대편 끝을 부각 $30°$로, 바로 아래 호수 가장자리를 부각 $60°$로 내려다본다. 호수의 폭은?',
      options: ['$\\\\frac{2\\\\sqrt{3}h}{3}$', '$\\\\frac{2h}{\\\\sqrt{3}}$', '$\\\\frac{h}{3}$', '$2h$'],
      answer: '$\\\\frac{2\\\\sqrt{3}h}{3}$',
      explanation: '아래 가장자리까지 거리: $\\\\frac{h}{\\\\tan 60°} = \\\\frac{h}{\\\\sqrt{3}}$. 반대편까지: $\\\\frac{h}{\\\\tan 30°} = h\\\\sqrt{3}$. 호수 폭: $h\\\\sqrt{3} - \\\\frac{h}{\\\\sqrt{3}} = \\\\frac{3h - h}{\\\\sqrt{3}} = \\\\frac{2h}{\\\\sqrt{3}} = \\\\frac{2\\\\sqrt{3}h}{3}$.',
    },
  ],
  realLifeExample: '소방관이 사다리차를 이용할 때, 건물의 높이와 건물까지의 거리를 측정한 후 삼각비로 필요한 사다리 길이와 각도를 계산합니다. 이는 구조 작업의 안전성을 확보하는 데 핵심적입니다.',
};

export default dayContent;
