import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 35,
  part: 6,
  title: '원과 부채꼴',
  subtitle: '원의 구성 요소와 부채꼴의 개념을 알아보자!',
  lectures: [],
  concepts: [
    {
      id: 'g1d35-c1',
      title: '원의 구성 요소',
      content: '• **원**: 한 점(중심)에서 같은 거리에 있는 점들의 집합\n• **중심(O)**: 원의 가운데 점\n• **반지름(r)**: 중심에서 원 위의 한 점까지의 거리 (모두 같음)\n• **지름(d)**: 원 위의 두 점을 중심을 지나도록 이은 선분 → $d = 2r$\n• **현**: 원 위의 두 점을 이은 선분 (지름은 가장 긴 현)\n• **호**: 원 위의 두 점 사이의 원의 일부분',
      type: 'definition',
    },
    {
      id: 'g1d35-c2',
      title: '부채꼴',
      content: '• **부채꼴**: 두 반지름과 호로 이루어진 도형\n• **중심각**: 부채꼴에서 두 반지름이 이루는 각\n• 중심각이 클수록 호의 길이와 부채꼴의 넓이가 커짐\n• 중심각이 $360°$이면 부채꼴 = 원 전체\n• 중심각이 $180°$이면 부채꼴 = 반원',
      type: 'definition',
    },
    {
      id: 'g1d35-c3',
      title: '원과 부채꼴의 성질',
      content: '• 한 원에서 반지름의 길이는 모두 같다\n• 한 원에서 지름의 길이는 모두 같다\n• **지름은 가장 긴 현**이다\n• 한 호에 대한 중심각의 크기는 하나로 정해진다\n• 중심각의 크기가 같으면 호의 길이도 같다\n• **호의 길이와 부채꼴의 넓이는 중심각의 크기에 정비례**한다',
      type: 'definition',
    },
  ],
  problems: [
    {
      id: 'g1d35-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '원에서 가장 긴 현은 무엇인가?',
      options: ['반지름', '지름', '호', '접선'],
      answer: '지름',
      explanation: '원에서 **지름**은 중심을 지나는 현으로, 원에서 가장 긴 현입니다.\n\n반지름은 현이 아니며(중심에서 원 위의 점까지), 호는 직선이 아닌 곡선입니다.',
    },
    {
      id: 'g1d35-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: '반지름의 길이가 $8\\text{cm}$인 원의 지름의 길이를 구하시오. (단위: cm)',
      answer: '16',
      explanation: '지름 = 반지름 $\\times 2$\n\n$d = 2r = 2 \\times 8 = 16\\text{cm}$',
    },
    {
      id: 'g1d35-p3',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '반지름이 $6\\text{cm}$인 원에서 중심각이 $90°$인 부채꼴에 대한 설명으로 옳지 않은 것은?',
      options: [
        '호의 길이는 원 둘레의 $\\dfrac{1}{4}$이다',
        '부채꼴의 넓이는 원 넓이의 $\\dfrac{1}{4}$이다',
        '중심각을 2배로 하면 호의 길이도 2배가 된다',
        '이 부채꼴의 호는 원에서 가장 긴 현이다',
      ],
      answer: '이 부채꼴의 호는 원에서 가장 긴 현이다',
      explanation: '호는 곡선이므로 **현이 아닙니다**.\n\n가장 긴 현은 지름입니다.\n\n나머지는 모두 옳은 설명입니다:\n• $\\dfrac{90°}{360°} = \\dfrac{1}{4}$이므로 호의 길이와 넓이 모두 원 전체의 $\\dfrac{1}{4}$\n• 호의 길이는 중심각에 정비례',
    },
    {
      id: 'g1d35-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question: '한 원에서 중심각이 $60°$인 부채꼴의 호의 길이가 $4\\text{cm}$일 때, 중심각이 $120°$인 부채꼴의 호의 길이를 구하시오. (단위: cm)',
      answer: '8',
      explanation: '호의 길이는 중심각의 크기에 정비례합니다.\n\n$120° = 60° \\times 2$이므로\n\n호의 길이도 2배: $4 \\times 2 = 8\\text{cm}$',
    },
    {
      id: 'g1d35-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '지름이 $20\\text{cm}$인 원에서 중심으로부터 $6\\text{cm}$ 떨어진 현의 길이를 구하면? (원의 중심에서 현에 내린 수선은 현을 이등분한다)',
      options: ['$14\\text{cm}$', '$16\\text{cm}$', '$18\\text{cm}$', '$20\\text{cm}$'],
      answer: '$16\\text{cm}$',
      explanation: '반지름 $r = 10\\text{cm}$, 중심에서 현까지의 거리 $d = 6\\text{cm}$\n\n중심에서 현에 수선을 내리면 현을 이등분하므로:\n\n현의 반 = $\\sqrt{r^2 - d^2} = \\sqrt{10^2 - 6^2} = \\sqrt{64} = 8\\text{cm}$\n\n현의 길이 = $2 \\times 8 = 16\\text{cm}$',
    },
  ],
  realLifeExample: '피자를 자를 때 만들어지는 조각이 바로 부채꼴입니다! 8등분하면 중심각이 45°인 부채꼴, 6등분하면 60°인 부채꼴이 됩니다. 시계의 분침이 움직이는 영역도 부채꼴이에요!',
};

export default dayContent;
