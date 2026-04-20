import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 19,
  part: 3,
  title: '일차방정식(Linear Equation) 활용 (2)',
  subtitle: '거리·속력·시간 문제(Speed / Rate Problem), 퍼센트 문제, 농도 문제(Concentration / Mixture Problem)를 정복하자!',
  lectures: [],
  concepts: [
    {
      id: 'g1d19-c1',
      title: '거리·속력·시간 문제(Speed / Rate Problem)',
      content: '**기본 공식**: $\\text{거리} = \\text{속력} \\times \\text{시간}$\n\n• 속력 = $\\dfrac{\\text{거리}}{\\text{시간}}$, 시간 = $\\dfrac{\\text{거리}}{\\text{속력}}$\n\n**자주 나오는 유형**:\n• 만남 문제: 두 사람이 마주 보고 출발 → 거리의 합 = 전체 거리\n• 따라잡기 문제: 같은 방향 출발 → 거리의 차 = 처음 차이\n• 왕복 문제: 갈 때와 올 때의 거리가 같음',
      type: 'formula',
    },
    {
      id: 'g1d19-c2',
      title: '퍼센트(%) 문제',
      content: '**퍼센트 기본**:\n• $a$의 $p$%: $a \\times \\dfrac{p}{100}$\n• $x$% 증가: $a \\times (1 + \\dfrac{x}{100})$\n• $x$% 감소: $a \\times (1 - \\dfrac{x}{100})$\n\n**예시**: 정가의 20% 할인 가격이 4,000원일 때 정가는?\n$x \\times (1 - \\dfrac{20}{100}) = 4000$\n$0.8x = 4000$\n$x = 5000$원',
      type: 'formula',
    },
    {
      id: 'g1d19-c3',
      title: '농도(Concentration / Mixture Problem) 문제',
      content: '**소금물 농도 공식**:\n$\\text{농도}(\\%) = \\dfrac{\\text{소금의 양}}{\\text{소금물의 양}} \\times 100$\n\n**핵심 원리**: 섞기 전후 **소금의 양**은 변하지 않는다!\n\n**예시**: 5% 소금물 200g과 10% 소금물 $x$g을 섞어 8% 소금물을 만들 때\n소금: $200 \\times 0.05 + x \\times 0.1 = (200 + x) \\times 0.08$\n$10 + 0.1x = 16 + 0.08x$\n$0.02x = 6$, $x = 300$g',
      type: 'example',
    },
  ],
  problems: [
    {
      id: 'g1d19-p1',
      type: 'short-answer',
      difficulty: 'basic',
      question: '시속 60km로 달리는 자동차가 $x$시간 동안 이동한 거리가 240km일 때, $x$의 값을 구하시오.',
      answer: '4',
      explanation: '거리 = 속력 $\\times$ 시간이므로:\n$60x = 240$\n$x = 4$\n\n따라서 4시간 동안 이동했습니다.',
    },
    {
      id: 'g1d19-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '어떤 물건의 정가에서 30% 할인한 가격이 7,000원이다. 정가는?',
      options: ['8,000원', '9,000원', '10,000원', '11,000원'],
      answer: '10,000원',
      explanation: '정가를 $x$원이라 하면:\n$x \\times (1 - 0.3) = 7000$\n$0.7x = 7000$\n$x = 10000$\n\n**확인**: $10000 \\times 0.7 = 7000$ ✓',
    },
    {
      id: 'g1d19-p3',
      type: 'short-answer',
      difficulty: 'applied',
      question: 'A는 시속 4km, B는 시속 6km로 같은 장소에서 동시에 반대 방향으로 출발했다. 두 사람 사이의 거리가 30km가 되는 것은 몇 시간 후인가?',
      answer: '3',
      explanation: '$x$시간 후라 하면 두 사람 사이의 거리:\nA의 이동 거리 + B의 이동 거리 = 30\n$4x + 6x = 30$\n$10x = 30$\n$x = 3$\n\n**확인**: $4 \\times 3 + 6 \\times 3 = 12 + 18 = 30$ ✓',
    },
    {
      id: 'g1d19-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question: '어떤 수의 40%는 그 수에서 18을 뺀 것과 같다. 어떤 수를 구하시오.',
      answer: '30',
      explanation: '어떤 수를 $x$라 하면:\n$0.4x = x - 18$\n$18 = x - 0.4x$\n$18 = 0.6x$\n$x = 30$\n\n**확인**: $30 \\times 0.4 = 12$, $30 - 18 = 12$ ✓',
    },
    {
      id: 'g1d19-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '8% 소금물 300g에 소금을 더 넣어 12% 소금물을 만들려고 한다. 넣어야 할 소금의 양은?',
      options: ['약 10.5g', '약 12.0g', '약 13.6g', '약 15.0g'],
      answer: '약 13.6g',
      explanation: '넣을 소금의 양을 $x$g이라 하면:\n기존 소금: $300 \\times 0.08 = 24$g\n새 소금물: $(300 + x)$g, 소금: $(24 + x)$g\n\n$\\dfrac{24 + x}{300 + x} = 0.12$\n$24 + x = 0.12(300 + x)$\n$24 + x = 36 + 0.12x$\n$0.88x = 12$\n$x = \\dfrac{12}{0.88} \\approx 13.6$g',
    },
  ],
  realLifeExample: '거리-속력-시간 문제(Speed / Rate Problem)는 내비게이션의 도착 예정 시간 계산에, 퍼센트는 할인 쇼핑과 세금 계산에, 농도 문제(Concentration / Mixture Problem)는 요리에서 양념 비율을 맞추거나 세제를 희석할 때 사용됩니다!',
};

export default dayContent;
