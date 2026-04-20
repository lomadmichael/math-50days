import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 50,
  part: 7,
  title: '총정리 + 중3 로드맵',
  subtitle: '중2 과정을 마무리하고, 중3에서 배울 내용을 미리 살펴보자!',
  lectures: [],
  concepts: [
    {
      id: 'g2d50-c1',
      title: '중2 과정 전체 요약',
      content: '**PART 4 - 일차함수**\\n• $y = ax + b$의 그래프, 기울기와 절편\\n• 일차함수의 식 구하기 (기울기+절편, 두 점 등)\\n• 일차방정식과의 관계, 연립방정식의 그래프 해석\\n\\n**PART 5 - 도형의 성질**\\n• 이등변삼각형, 직각삼각형 합동 조건\\n• 평행사변형, 직사각형, 마름모, 정사각형',
      type: 'definition',
    },
    {
      id: 'g2d50-c2',
      title: '중2 과정 전체 요약 (계속)',
      content: '**PART 6 - 도형의 닮음**\\n• 닮음의 뜻과 닮음비 (넓이비 $= m^2 : n^2$)\\n• 삼각형 닮음 조건 (AA, SAS, SSS)\\n• 평행선과 선분의 비, 중점연결정리\\n• 피타고라스 정리 ($a^2 + b^2 = c^2$)\\n\\n**PART 7 - 확률**\\n• 합의 법칙, 곱의 법칙, 순열, 조합\\n• 확률의 뜻과 성질, 여사건, 연속 사건',
      type: 'definition',
    },
    {
      id: 'g2d50-c3',
      title: '중3에서 배울 내용 미리보기',
      content: '**중3 주요 단원:**\\n• **제곱근과 실수**: $\\sqrt{2}$, 무리수의 세계\\n• **다항식의 곱셈과 인수분해**: 전개, 인수분해 공식\\n• **이차방정식**: $ax^2 + bx + c = 0$의 풀이\\n• **이차함수**: $y = ax^2 + bx + c$의 그래프\\n• **삼각비**: $\\sin$, $\\cos$, $\\tan$\\n• **원의 성질**: 원주각, 접선 등\\n• **통계**: 대푯값, 산포도',
      type: 'tip',
    },
    {
      id: 'g2d50-c4',
      title: '중3 준비를 위한 조언',
      content: '중3 수학을 잘하려면 중2에서 꼭 다져야 할 것:\\n\\n1. **일차함수**: 그래프와 식 변환 능력 → 이차함수의 기초\\n2. **도형 증명**: 논리적 사고력 → 원의 성질 증명에 필요\\n3. **피타고라스 정리**: 삼각비의 기초\\n4. **확률 개념**: 통계와 연결\\n\\n중2 과정 50일 완주를 축하합니다!',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'g2d50-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '다음 중 일차함수인 것은?',
      options: ['$y = x^2 + 1$', '$y = \\frac{3}{x}$', '$y = -5x + 2$', '$xy = 6$'],
      answer: '$y = -5x + 2$',
      explanation: '일차함수: $y = ax + b$ ($a \\neq 0$) 형태\\n$y = -5x + 2$만 이 형태에 해당합니다.',
    },
    {
      id: 'g2d50-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: '이등변삼각형에서 꼭지각이 $40°$일 때, 밑각의 크기를 구하시오.',
      answer: '70',
      explanation: '밑각 $= \\frac{180° - 40°}{2} = \\frac{140°}{2} = 70°$',
    },
    {
      id: 'g2d50-p3',
      type: 'short-answer',
      difficulty: 'applied',
      question: '두 점 $(0, -2)$, $(3, 4)$를 지나는 일차함수의 식을 구하시오.',
      answer: 'y = 2x - 2',
      explanation: '기울기 $= \\frac{4-(-2)}{3-0} = \\frac{6}{3} = 2$\\n$y$절편 $= -2$\\n$y = 2x - 2$',
    },
    {
      id: 'g2d50-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '세 변의 길이가 $5, 12, 13$인 삼각형은?',
      options: ['예각삼각형', '직각삼각형', '둔각삼각형', '삼각형이 안 됨'],
      answer: '직각삼각형',
      explanation: '$5^2 + 12^2 = 25 + 144 = 169 = 13^2$\\n$a^2 + b^2 = c^2$이므로 직각삼각형!',
    },
    {
      id: 'g2d50-p5',
      type: 'short-answer',
      difficulty: 'challenge',
      question: '동전 $2$개와 주사위 $1$개를 동시에 던질 때, 동전은 모두 앞면이고 주사위는 $3$의 배수가 나올 확률을 기약분수로 구하시오.',
      answer: '1/12',
      explanation: '동전 모두 앞면: $\\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{4}$\\n주사위 $3$의 배수: $\\frac{2}{6} = \\frac{1}{3}$\\n\\n독립사건이므로: $\\frac{1}{4} \\times \\frac{1}{3} = \\frac{1}{12}$',
    },
  ],
  realLifeExample: '축하합니다! 중2 수학 50일 과정을 모두 마쳤어요! 일차함수로 세상의 변화를 읽고, 도형의 성질로 구조를 이해하며, 닮음과 피타고라스로 측정하고, 확률로 미래를 예측하는 능력을 갖추었습니다. 이 모든 것이 중3 수학의 든든한 기초가 될 거예요. 중3 코스에서 또 만나요!',
};

export default dayContent;
