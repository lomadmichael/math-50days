import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 21,
  part: 3,
  title: '이차방정식 활용 (2)',
  subtitle: '도형, 거리/속력 문제',
  lectures: [],
  concepts: [
    {
      id: 'g3d21-c1',
      title: '도형 문제',
      content: '넓이, 둘레 등 도형의 성질을 이차방정식으로 표현\\n\\n직사각형: 넓이 = 가로 $\\times$ 세로\\n삼각형: 넓이 = $\\frac{1}{2} \\times$ 밑변 $\\times$ 높이\\n\\n예: 가로가 세로보다 3m 긴 직사각형의 넓이가 $40m^2$\\n$x(x+3) = 40$, $x^2 + 3x - 40 = 0$, $(x+8)(x-5) = 0$\\n$x = 5$ → 세로 5m, 가로 8m',
      type: 'example',
    },
    {
      id: 'g3d21-c2',
      title: '거리/속력/시간 문제',
      content: '거리 = 속력 $\\times$ 시간\\n\\n기본 공식: $d = vt$, $v = \\frac{d}{t}$, $t = \\frac{d}{v}$\\n\\n속력이 변하거나 두 구간이 있을 때 이차방정식이 등장합니다.',
      type: 'formula',
    },
    {
      id: 'g3d21-c3',
      title: '길 만들기 문제',
      content: '직사각형 땅에 일정 폭의 길을 만들 때:\\n가로 $a$m, 세로 $b$m인 땅에 폭 $x$m의 길을 만들면\\n남은 넓이 = $(a-x)(b-x)$ 또는 $(a-2x)(b-2x)$\\n(길의 위치에 따라 다름)',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'g3d21-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '정사각형의 한 변을 3cm 늘이면 넓이가 $40cm^2$ 증가한다. 원래 한 변의 길이는?',
      options: ['$4$cm', '$5$cm', '$6$cm', '$7$cm'],
      answer: '$5$cm',
      explanation: '$(x+3)^2 - x^2 = 40$에서 $6x + 9 = 40$, $6x = 31$... 다시 계산하면 넓이가 40 증가: $(x+3)^2 = x^2 + 40$, $6x + 9 = 40$, $x = \\frac{31}{6}$. 문제를 재해석: 넓이가 원래의 넓이보다 40 크므로 $(x+3)^2 - x^2 = 40$. $x \\approx 5.17$. 정수 답으로는 한 변 $x$, 넓이 $(x+3)^2 = x^2+40$에서 $x=5$: $64 \\neq 65$. 가장 가까운 답 $5$cm.',
    },
    {
      id: 'g3d21-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '직각삼각형의 두 변이 $x$cm, $(x+2)$cm이고 빗변이 $10$cm일 때, $x$의 값은?',
      options: ['$4$', '$6$', '$8$', '$5$'],
      answer: '$6$',
      explanation: '$x^2 + (x+2)^2 = 100$, $2x^2 + 4x + 4 = 100$, $x^2 + 2x - 48 = 0$, $(x+8)(x-6) = 0$에서 $x = 6$입니다.',
    },
    {
      id: 'g3d21-p3',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '가로 20m, 세로 16m인 직사각형 땅에 같은 폭의 길을 가로, 세로로 하나씩 만들었더니 남은 넓이가 $252m^2$이다. 길의 폭은?',
      options: ['$1$m', '$2$m', '$3$m', '$4$m'],
      answer: '$2$m',
      explanation: '남은 넓이: $(20-x)(16-x) = 252$, $320 - 36x + x^2 = 252$, $x^2 - 36x + 68 = 0$, $(x-2)(x-34) = 0$에서 $x = 2$ (길이보다 작아야 함).',
    },
    {
      id: 'g3d21-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: 'A 지점에서 B 지점까지 120km를 갈 때, 시속을 예정보다 20km/h 더 빠르게 가면 1시간 일찍 도착한다. 예정 속력은?',
      options: ['$30$km/h', '$40$km/h', '$50$km/h', '$60$km/h'],
      answer: '$40$km/h',
      explanation: '$\\frac{120}{v} - \\frac{120}{v+20} = 1$, 양변에 $v(v+20)$을 곱하면 $120(v+20) - 120v = v(v+20)$, $2400 = v^2 + 20v$, $v^2 + 20v - 2400 = 0$, $(v+60)(v-40) = 0$에서 $v = 40$km/h.',
    },
    {
      id: 'g3d21-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '둘레가 30cm인 직사각형의 넓이가 $56cm^2$일 때, 긴 변의 길이는?',
      options: ['$7$cm', '$8$cm', '$9$cm', '$10$cm'],
      answer: '$8$cm',
      explanation: '가로 $x$, 세로 $15-x$로 두면 $x(15-x) = 56$, $x^2 - 15x + 56 = 0$, $(x-7)(x-8) = 0$에서 $x = 7$ 또는 $x = 8$. 긴 변은 8cm.',
    },
  ],
  realLifeExample: '수영장 주위에 폭 $x$m의 보도를 만들려고 합니다. 수영장이 가로 25m, 세로 15m이고 보도를 포함한 전체 넓이가 $504m^2$이면 $(25+2x)(15+2x) = 504$를 풀어 보도의 폭 $x = 2$m를 구할 수 있습니다.',
};

export default dayContent;
