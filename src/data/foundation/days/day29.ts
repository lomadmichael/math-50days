import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 29,
  part: 6,
  title: '원의 둘레와 넓이',
  subtitle: '부채꼴 호/넓이 — 원주율의 세계',
  lectures: [],
  concepts: [
    {
      id: 'f6d29-c1',
      title: '원주율(파이)',
      content:
        '원주율 $\\\\pi$는 원의 지름에 대한 둘레의 비율입니다.\\n$\\\\pi \\\\approx 3.14$ (보통 3.14로 계산)\\n어떤 크기의 원이든 $\\\\frac{원의 둘레}{지름} = \\\\pi$',
      type: 'definition',
    },
    {
      id: 'f6d29-c2',
      title: '원의 둘레와 넓이',
      content:
        '원의 둘레 = $2 \\\\times \\\\pi \\\\times r$ = $\\\\pi \\\\times d$ (r: 반지름, d: 지름)\\n원의 넓이 = $\\\\pi \\\\times r^2$ = $\\\\pi \\\\times r \\\\times r$',
      type: 'formula',
    },
    {
      id: 'f6d29-c3',
      title: '부채꼴',
      content:
        '부채꼴은 원의 일부분입니다.\\n• 부채꼴의 호의 길이 = 원둘레 $\\\\times \\\\frac{중심각}{360°}$\\n• 부채꼴의 넓이 = 원넓이 $\\\\times \\\\frac{중심각}{360°}$',
      type: 'formula',
    },
  ],
  problems: [
    {
      id: 'fd29-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '반지름이 5cm인 원의 둘레는? (원주율 = 3.14)',
      options: ['15.7cm', '25.12cm', '31.4cm', '78.5cm'],
      answer: '31.4cm',
      explanation:
        '원의 둘레 = $2 \\\\times 3.14 \\\\times 5 = 31.4$cm',
    },
    {
      id: 'fd29-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: '지름이 10cm인 원의 넓이는 몇 $cm^2$인가요? (원주율 = 3.14)',
      answer: '78.5',
      explanation:
        '반지름 = 5cm, 넓이 = $3.14 \\\\times 5 \\\\times 5 = 78.5cm^2$',
    },
    {
      id: 'fd29-p3',
      type: 'multiple-choice',
      difficulty: 'applied',
      question:
        '반지름 6cm, 중심각 $90°$인 부채꼴의 넓이는? (원주율 = 3.14)',
      options: ['$9.42cm^2$', '$18.84cm^2$', '$28.26cm^2$', '$113.04cm^2$'],
      answer: '$28.26cm^2$',
      explanation:
        '원넓이 = $3.14 \\\\times 6 \\\\times 6 = 113.04$, 부채꼴 = $113.04 \\\\times \\\\frac{90}{360} = 28.26cm^2$',
    },
    {
      id: 'fd29-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question:
        '원의 둘레가 62.8cm일 때 반지름은 몇 cm인가요? (원주율 = 3.14)',
      answer: '10',
      explanation:
        '$62.8 = 2 \\\\times 3.14 \\\\times r$, $r = \\\\frac{62.8}{6.28} = 10$cm',
    },
    {
      id: 'fd29-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question:
        '반지름 4cm인 반원의 둘레(직선 부분 포함)는? (원주율 = 3.14)',
      options: ['12.56cm', '20.56cm', '25.12cm', '8.56cm'],
      answer: '20.56cm',
      explanation:
        '반원 호 = $\\\\frac{2 \\\\times 3.14 \\\\times 4}{2} = 12.56$cm, 지름 = 8cm, 합 = $12.56 + 8 = 20.56$cm',
    },
  ],
  realLifeExample:
    '피자 한 판은 원 모양이에요. 피자 한 조각은 부채꼴이죠! 12인치 피자의 둘레를 구하면 피자 가장자리(크러스트)의 길이를 알 수 있어요.',
};

export default dayContent;
