import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 25,
  part: 4,
  title: '정비례/반비례 활용',
  subtitle: '정비례와 반비례를 실생활 문제에 적용해 보자!',
  lectures: [],
  concepts: [
    {
      id: 'g1d25-c1',
      title: '정비례 활용 패턴',
      content: '• **$y = ax$ 형태를 찾아라!**\n• 속력 일정 → 거리 = 속력 $\\times$ 시간 (거리와 시간이 정비례)\n• 단가 일정 → 가격 = 단가 $\\times$ 개수 (가격과 개수가 정비례)\n• 비율 일정 → 한 양이 커지면 다른 양도 같은 비율로 커짐',
      type: 'definition',
    },
    {
      id: 'g1d25-c2',
      title: '반비례 활용 패턴',
      content: '• **$y = \\frac{a}{x}$ 또는 $xy = a$ 형태를 찾아라!**\n• 거리 일정 → 속력 $\\times$ 시간 = 거리 (속력과 시간이 반비례)\n• 넓이 일정 → 가로 $\\times$ 세로 = 넓이 (가로와 세로가 반비례)\n• 총량 일정 → 인원 $\\times$ 1인당 몫 = 총량',
      type: 'definition',
    },
    {
      id: 'g1d25-c3',
      title: '정비례 vs 반비례 구별법',
      content: '• **정비례**: 하나가 커지면 다른 것도 커짐 → $\\frac{y}{x} = a$ (비가 일정)\n• **반비례**: 하나가 커지면 다른 것은 작아짐 → $x \\times y = a$ (곱이 일정)\n• 문제 풀이 순서: ① 관계 파악 → ② 비례상수 구하기 → ③ 식 세우기 → ④ 답 구하기',
      type: 'formula',
    },
  ],
  problems: [
    {
      id: 'g1d25-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '1개에 500원인 사탕을 $x$개 살 때 가격을 $y$원이라 하면, $y$와 $x$의 관계는?',
      options: ['정비례', '반비례', '둘 다 아님', '알 수 없음'],
      answer: '정비례',
      explanation: '$y = 500x$\n\n$y = ax$ 형태이므로 **정비례**입니다.\n비례상수 $a = 500$',
    },
    {
      id: 'g1d25-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: '시속 $x$ km로 달려서 240 km를 가는 데 $y$시간이 걸린다. $x = 80$일 때 $y$의 값을 구하시오.',
      answer: '3',
      explanation: '$x \\times y = 240$ (거리 일정) → 반비례\n$y = \\frac{240}{x}$\n\n$x = 80$ 대입:\n$y = \\frac{240}{80} = 3$\n\n시속 80km로 240km를 가려면 **3시간**',
    },
    {
      id: 'g1d25-p3',
      type: 'short-answer',
      difficulty: 'applied',
      question: '물탱크에 1분에 5L씩 물을 넣는다. $x$분 후 물의 양 $y$ L가 정비례할 때, 30L를 채우려면 몇 분이 걸리는가?',
      answer: '6',
      explanation: '$y = 5x$ (정비례, $a = 5$)\n\n$y = 30$ 대입:\n$30 = 5x$\n$x = 6$\n\n**6분**이 걸립니다.',
    },
    {
      id: 'g1d25-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '넓이가 36 cm$^2$인 직사각형에서 가로 $x$ cm와 세로 $y$ cm의 관계를 나타낸 그래프가 지나는 사분면은? (단, $x > 0, y > 0$)',
      options: ['제1사분면', '제1, 3사분면', '제2, 4사분면', '모든 사분면'],
      answer: '제1사분면',
      explanation: '$x \\times y = 36$ → $y = \\frac{36}{x}$\n\n$a = 36 > 0$이므로 제1, 3사분면을 지나지만\n가로와 세로는 양수여야 하므로 ($x > 0, y > 0$)\n\n실제로는 **제1사분면**에서만 의미가 있습니다.',
    },
    {
      id: 'g1d25-p5',
      type: 'short-answer',
      difficulty: 'challenge',
      question: '어떤 일을 하는 데 6명이 하면 10일이 걸린다. 같은 일을 15명이 하면 며칠이 걸리는가? (1인당 작업량이 같다고 가정)',
      answer: '4',
      explanation: '사람 수와 일수는 반비례 (총 작업량 일정)\n\n$a = 6 \\times 10 = 60$\n$y = \\frac{60}{x}$\n\n$x = 15$ 대입:\n$y = \\frac{60}{15} = 4$\n\n15명이 하면 **4일**이 걸립니다.',
    },
  ],
  realLifeExample: '요리할 때 레시피를 2배로 늘리면 재료도 2배 필요한 것은 정비례! 피자를 나눠 먹을 때 사람이 많아지면 1인당 양이 줄어드는 것은 반비례! 일상 속에서 정비례와 반비례를 찾아보세요.',
};

export default dayContent;
