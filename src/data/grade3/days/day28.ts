import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 28,
  part: 4,
  title: '이차함수와 이차방정식의 관계',
  subtitle: '그래프의 $x$절편과 이차방정식의 근',
  lectures: [],
  concepts: [
    {
      id: 'g3d28-c1',
      title: '이차함수의 그래프와 $x$축의 교점',
      content: '이차함수 $y = ax^2 + bx + c$의 그래프가 $x$축과 만나는 점의 $x$좌표는\\n이차방정식 $ax^2 + bx + c = 0$의 근과 같습니다.\\n\\n$y = 0$을 대입하면 이차방정식이 되기 때문입니다.',
      type: 'definition',
    },
    {
      id: 'g3d28-c2',
      title: '판별식과 교점의 개수',
      content: '판별식 $D = b^2 - 4ac$에 따라:\\n• $D > 0$: $x$축과 서로 다른 두 점에서 만남 (근 2개)\\n• $D = 0$: $x$축에 접함 (중근, 1개)\\n• $D < 0$: $x$축과 만나지 않음 (근 없음)',
      type: 'formula',
    },
    {
      id: 'g3d28-c3',
      title: '이차함수의 그래프와 직선의 교점',
      content: '$y = ax^2 + bx + c$와 $y = mx + n$의 교점:\\n$ax^2 + bx + c = mx + n$을 정리하여\\n$ax^2 + (b-m)x + (c-n) = 0$의 근을 구합니다.\\n이 방정식의 판별식으로 교점의 개수를 판단할 수 있습니다.',
      type: 'example',
    },
  ],
  problems: [
    {
      id: 'g3d28-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$y = x^2 - 5x + 6$의 그래프와 $x$축의 교점의 $x$좌표는?',
      options: ['$2, 3$', '$-2, -3$', '$1, 6$', '$-1, -6$'],
      answer: '$2, 3$',
      explanation: '$x^2 - 5x + 6 = 0$을 인수분해하면 $(x-2)(x-3) = 0$이므로 $x = 2$ 또는 $x = 3$입니다.',
    },
    {
      id: 'g3d28-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$y = x^2 - 4x + 4$의 그래프는 $x$축과 어떻게 만나는가?',
      options: ['두 점에서 만남', '한 점에서 접함', '만나지 않음', '세 점에서 만남'],
      answer: '한 점에서 접함',
      explanation: '$D = (-4)^2 - 4(1)(4) = 16 - 16 = 0$이므로 $x$축에 접합니다. $(x-2)^2 = 0$에서 $x = 2$ (중근).',
    },
    {
      id: 'g3d28-p3',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$y = 2x^2 + kx + 8$의 그래프가 $x$축에 접할 때, 양수 $k$의 값은?',
      options: ['$4$', '$8$', '$16$', '$6$'],
      answer: '$8$',
      explanation: '접할 조건: $D = k^2 - 4(2)(8) = k^2 - 64 = 0$. $k^2 = 64$, $k = \\pm 8$. 양수이므로 $k = 8$.',
    },
    {
      id: 'g3d28-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$y = x^2 - 2x + 3$의 그래프가 $x$축과 만나지 않음을 보이려면?',
      options: ['$D = 0$ 확인', '$D > 0$ 확인', '$D < 0$ 확인', '$a > 0$ 확인'],
      answer: '$D < 0$ 확인',
      explanation: '$D = (-2)^2 - 4(1)(3) = 4 - 12 = -8 < 0$이므로 $x$축과 만나지 않습니다.',
    },
    {
      id: 'g3d28-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '$y = x^2$과 $y = 2x + 3$의 교점의 $x$좌표의 합은?',
      options: ['$2$', '$3$', '$-1$', '$5$'],
      answer: '$2$',
      explanation: '$x^2 = 2x + 3$에서 $x^2 - 2x - 3 = 0$, $(x-3)(x+1) = 0$. 교점의 $x$좌표: $3, -1$. 합: $3 + (-1) = 2$.',
    },
  ],
  realLifeExample: '로켓을 발사하면 높이가 이차함수로 변합니다. 로켓이 지면에 도달하는 시점(높이 = 0)은 이차방정식의 근으로 구할 수 있으며, 근이 2개이면 발사 시점과 착지 시점을 의미합니다.',
};

export default dayContent;
