import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 40,
  part: 6,
  title: '원의 접선',
  subtitle: '접선의 성질과 접선의 길이',
  lectures: [],
  concepts: [
    {
      id: 'g3d40-c1',
      title: '원의 접선의 성질',
      content: '원의 접선은 접점에서 반지름과 수직입니다.\\n\\n원 $O$의 접선 $l$과 접점 $T$에 대하여:\\n$OT \\perp l$\\n\\n이 성질은 접선 문제의 핵심입니다.',
      type: 'definition',
    },
    {
      id: 'g3d40-c2',
      title: '원 밖의 한 점에서 그은 접선의 길이',
      content: '원 밖의 한 점 $P$에서 원에 두 접선을 그으면:\\n두 접선의 길이는 같습니다 ($PA = PB$, $A$, $B$는 접점)\\n\\n증명: $\\triangle OPA \\equiv \\triangle OPB$ (RHS 합동)\\n따라서 $PA = PB$이고 $\\angle OPA = \\angle OPB$',
      type: 'formula',
    },
    {
      id: 'g3d40-c3',
      title: '접선의 길이 구하기',
      content: '원의 중심 $O$, 반지름 $r$, 외부 점 $P$, 접점 $T$에서:\\n$PT^2 = OP^2 - OT^2 = OP^2 - r^2$\\n따라서 접선의 길이 $PT = \\sqrt{OP^2 - r^2}$\\n\\n직각삼각형 $OTP$에서 피타고라스 정리를 이용합니다.',
      type: 'formula',
    },
    {
      id: 'g3d40-c4',
      title: '삼각형의 내접원',
      content: '삼각형의 세 변에 모두 접하는 원을 내접원이라 합니다.\\n내접원의 반지름 $r$과 삼각형의 넓이 $S$, 둘레 $2s$의 관계:\\n$S = rs$ (여기서 $s$는 반둘레)\\n\\n내접원의 중심은 세 내각의 이등분선의 교점입니다.',
      type: 'example',
    },
  ],
  problems: [
    {
      id: 'g3d40-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '반지름이 $3$인 원의 중심에서 $5$만큼 떨어진 점에서 그은 접선의 길이는?',
      options: ['$2$', '$3$', '$4$', '$\\sqrt{34}$'],
      answer: '$4$',
      explanation: '접선의 길이 $= \\sqrt{5^2 - 3^2} = \\sqrt{16} = 4$.',
    },
    {
      id: 'g3d40-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '원 밖의 점 $P$에서 접선 $PA$의 길이가 $8$, 원의 반지름이 $6$일 때, $OP$의 길이는?',
      options: ['$10$', '$14$', '$\\sqrt{100}$', '$2\\sqrt{7}$'],
      answer: '$10$',
      explanation: '$OP = \\sqrt{PA^2 + OA^2} = \\sqrt{64 + 36} = \\sqrt{100} = 10$.',
    },
    {
      id: 'g3d40-p3',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '세 변의 길이가 $3$, $4$, $5$인 직각삼각형의 내접원의 반지름은?',
      options: ['$\\frac{1}{2}$', '$1$', '$\\frac{3}{2}$', '$2$'],
      answer: '$1$',
      explanation: '넓이 $S = \\frac{1}{2} \\times 3 \\times 4 = 6$. 반둘레 $s = \\frac{3+4+5}{2} = 6$. $r = \\frac{S}{s} = \\frac{6}{6} = 1$.',
    },
    {
      id: 'g3d40-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '원 밖의 점 $P$에서 원에 두 접선 $PA$, $PB$를 그었다. $\\angle APB = 60°$이고 $PA = 6$일 때, 원의 반지름은?',
      options: ['$2\\sqrt{3}$', '$3\\sqrt{3}$', '$3$', '$6$'],
      answer: '$2\\sqrt{3}$',
      explanation: '$\\angle OPA = 30°$ ($\\angle APB$의 절반). $\\tan 30° = \\frac{r}{6}$에서 $r = 6\\tan 30° = 6 \\times \\frac{\\sqrt{3}}{3} = 2\\sqrt{3}$.',
    },
    {
      id: 'g3d40-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '삼각형 $ABC$의 내접원이 $AB$, $BC$, $CA$에 각각 접점 $D$, $E$, $F$를 가진다. $AB = 13$, $BC = 14$, $CA = 15$일 때, $AD$의 길이는?',
      options: ['$7$', '$6$', '$8$', '$5$'],
      answer: '$7$',
      explanation: '$AD = AF = x$, $BD = BE = y$, $CE = CF = z$. $x + y = 13$, $y + z = 14$, $z + x = 15$. 세 식을 더하면 $2(x+y+z) = 42$, $x+y+z = 21$. $x = 21 - 14 = 7$.',
    },
  ],
  realLifeExample: '자전거 체인이 두 기어(원)를 감싸는 부분은 접선의 원리와 같습니다. 기어의 크기와 중심 거리를 알면 필요한 체인의 길이를 접선의 길이 공식으로 계산할 수 있습니다.',
};

export default dayContent;
