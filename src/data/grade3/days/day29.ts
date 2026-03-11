import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 29,
  part: 4,
  title: '이차함수 활용',
  subtitle: '실생활 문제를 이차함수로 모델링하기',
  lectures: [],
  concepts: [
    {
      id: 'g3d29-c1',
      title: '이차함수 활용 문제 풀이 전략',
      content: '1단계: 변수 설정 - 구하려는 양을 $x$로 놓기\\n2단계: 이차함수식 세우기 - 관계를 $y = ax^2 + bx + c$로 표현\\n3단계: 최댓값/최솟값 구하기 - 꼭짓점 좌표 이용\\n4단계: 답 확인 - 문제 조건에 맞는지 검증',
      type: 'tip',
    },
    {
      id: 'g3d29-c2',
      title: '넓이의 최댓값 문제',
      content: '예) 둘레가 20cm인 직사각형의 넓이의 최댓값\\n가로를 $x$cm라 하면 세로는 $(10 - x)$cm\\n넓이: $y = x(10 - x) = -x^2 + 10x = -(x - 5)^2 + 25$\\n$x = 5$일 때 최대 넓이 $25\\\\text{cm}^2$ (정사각형)',
      type: 'example',
    },
    {
      id: 'g3d29-c3',
      title: '포물선 운동 문제',
      content: '높이가 $h(t) = -5t^2 + v_0 t + h_0$ (단위: m, 초)일 때:\\n• $v_0$: 초기 속도, $h_0$: 초기 높이\\n• 최고 높이: $t = \\\\frac{v_0}{10}$초일 때\\n• 최고 높이: $h_0 + \\\\frac{v_0^2}{20}$m\\n• 지면 도달 시간: $h(t) = 0$의 양의 근',
      type: 'formula',
    },
    {
      id: 'g3d29-c4',
      title: '수의 관계에서 이차함수',
      content: '합이 일정한 두 수의 곱의 최댓값:\\n두 수의 합이 $S$일 때, 한 수를 $x$라 하면 다른 수는 $S - x$\\n곱: $y = x(S - x) = -x^2 + Sx$\\n$x = \\\\frac{S}{2}$일 때 곱이 최대 → 두 수가 같을 때!',
      type: 'example',
    },
  ],
  problems: [
    {
      id: 'g3d29-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '둘레가 24cm인 직사각형의 넓이의 최댓값은?',
      options: ['$24\\\\text{cm}^2$', '$36\\\\text{cm}^2$', '$48\\\\text{cm}^2$', '$144\\\\text{cm}^2$'],
      answer: '$36\\\\text{cm}^2$',
      explanation: '가로 $x$, 세로 $12-x$. $y = x(12-x) = -(x-6)^2 + 36$. $x = 6$일 때 최대 넓이 $36\\\\text{cm}^2$.',
    },
    {
      id: 'g3d29-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '합이 10인 두 자연수의 곱의 최댓값은?',
      options: ['$20$', '$25$', '$24$', '$21$'],
      answer: '$25$',
      explanation: '한 수를 $x$라 하면 곱은 $x(10-x) = -(x-5)^2 + 25$. $x = 5$일 때 최댓값 $25$.',
    },
    {
      id: 'g3d29-p3',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '지면에서 초속 30m로 위로 던진 공의 최고 높이는? ($h = -5t^2 + 30t$)',
      options: ['$30$m', '$45$m', '$60$m', '$90$m'],
      answer: '$45$m',
      explanation: '$h = -5(t^2 - 6t) = -5(t - 3)^2 + 45$. $t = 3$초일 때 최고 높이 $45$m.',
    },
    {
      id: 'g3d29-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '한 변의 길이가 $x$m인 정사각형 모양의 꽃밭을 벽에 붙여서 만든다. 울타리 길이가 12m일 때, 꽃밭 넓이의 최댓값은? (세 변만 울타리)',
      options: ['$9\\\\text{m}^2$', '$12\\\\text{m}^2$', '$18\\\\text{m}^2$', '$16\\\\text{m}^2$'],
      answer: '$18\\\\text{m}^2$',
      explanation: '가로 $x$, 세로 $y$. $x + 2y = 12$이므로 $x = 12 - 2y$. 넓이 $= y(12 - 2y) = -2(y - 3)^2 + 18$. $y = 3$일 때 최대 $18\\\\text{m}^2$.',
    },
    {
      id: 'g3d29-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '어떤 상품의 가격을 $x$원 올리면 판매량이 $x$개 줄어든다. 현재 가격 100원, 판매량 200개일 때, 매출이 최대가 되는 가격 인상액은?',
      options: ['$30$원', '$50$원', '$40$원', '$60$원'],
      answer: '$50$원',
      explanation: '매출 $= (100 + x)(200 - x) = -x^2 + 100x + 20000 = -(x - 50)^2 + 22500$. $x = 50$원 인상 시 매출 최대.',
    },
  ],
  realLifeExample: '축구에서 프리킥을 찰 때 공의 궤적은 포물선입니다. 초기 속도와 각도를 조절하여 이차함수의 최댓값(최고 높이)을 계산하면 벽을 넘기면서도 골대 안에 넣을 수 있는 최적의 킥을 설계할 수 있습니다.',
};

export default dayContent;
