import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 39,
  part: 6,
  title: '원과 직선 - 현의 성질',
  subtitle: '원의 중심에서 현까지의 거리와 현의 길이',
  lectures: [],
  concepts: [
    {
      id: 'g3d39-c1',
      title: '현의 정의',
      content: '원 위의 두 점을 잇는 선분을 현(弦)이라 합니다.\\n지름은 가장 긴 현입니다.\\n\\n원의 중심에서 현에 내린 수선은 현을 이등분합니다.\\n(원의 중심에서 현에 수선 → 수선의 발이 현의 중점)',
      type: 'definition',
    },
    {
      id: 'g3d39-c2',
      title: '현의 수직이등분선',
      content: '원에서 현의 수직이등분선은 반드시 원의 중심을 지나갑니다.\\n\\n역도 성립: 원의 중심에서 현에 수선을 내리면 현을 이등분합니다.\\n\\n이 성질을 이용하면 피타고라스 정리로 현의 길이, 원의 중심에서의 거리 등을 구할 수 있습니다.',
      type: 'formula',
    },
    {
      id: 'g3d39-c3',
      title: '현의 길이와 중심 거리의 관계',
      content: '반지름이 $r$인 원에서 현의 길이가 $2l$이고 중심에서 현까지의 거리가 $d$이면:\\n$r^2 = l^2 + d^2$ (피타고라스 정리)\\n\\n따라서 $l = \\\\sqrt{r^2 - d^2}$, 현의 길이 $= 2\\\\sqrt{r^2 - d^2}$\\n\\n같은 원에서 중심으로부터 같은 거리에 있는 두 현의 길이는 같습니다.',
      type: 'formula',
    },
  ],
  problems: [
    {
      id: 'g3d39-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '반지름이 $5$인 원에서 중심에서 현까지의 거리가 $3$일 때, 현의 길이는?',
      options: ['$4$', '$6$', '$8$', '$10$'],
      answer: '$8$',
      explanation: '현의 반 $= \\\\sqrt{5^2 - 3^2} = \\\\sqrt{16} = 4$. 현의 길이 $= 2 \\\\times 4 = 8$.',
    },
    {
      id: 'g3d39-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '반지름이 $10$인 원에서 길이가 $12$인 현의 중심으로부터의 거리는?',
      options: ['$6$', '$8$', '$4$', '$5$'],
      answer: '$8$',
      explanation: '현의 반 $= 6$. $d = \\\\sqrt{10^2 - 6^2} = \\\\sqrt{64} = 8$.',
    },
    {
      id: 'g3d39-p3',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '반지름이 $13$인 원에서 중심에서 $5$만큼 떨어진 현의 길이는?',
      options: ['$16$', '$24$', '$20$', '$18$'],
      answer: '$24$',
      explanation: '현의 반 $= \\\\sqrt{13^2 - 5^2} = \\\\sqrt{144} = 12$. 현의 길이 $= 24$.',
    },
    {
      id: 'g3d39-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '원 위의 현 $AB$의 길이가 $16$이고, 원의 중심 $O$에서 $AB$까지의 거리가 $6$이다. 이 원의 반지름은?',
      options: ['$8$', '$10$', '$12$', '$14$'],
      answer: '$10$',
      explanation: '현의 반 $= 8$. $r = \\\\sqrt{8^2 + 6^2} = \\\\sqrt{100} = 10$.',
    },
    {
      id: 'g3d39-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '반지름이 $r$인 원에서 두 현 $AB$, $CD$의 중심으로부터 거리가 각각 $3$, $4$이다. $AB > CD$이면, 두 현의 길이의 차는? ($r = 5$)',
      options: ['$2$', '$4$', '$6$', '$8$'],
      answer: '$2$',
      explanation: '$AB = 2\\\\sqrt{25 - 9} = 2\\\\sqrt{16} = 8$, $CD = 2\\\\sqrt{25 - 16} = 2\\\\sqrt{9} = 6$. 차: $8 - 6 = 2$.',
    },
  ],
  realLifeExample: '터널을 원형 단면으로 설계할 때, 도로(현)의 폭과 터널 반지름을 알면 도로 위 천장까지의 높이(중심 거리)를 계산할 수 있습니다. 이는 차량 통행 가능 여부를 결정하는 중요한 설계 요소입니다.',
};

export default dayContent;
