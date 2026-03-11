import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 20,
  part: 3,
  title: '미니테스트 + 복습',
  subtitle: 'PART 3 문자와 식 총정리!',
  lectures: [],
  concepts: [
    {
      id: 'g1d20-c1',
      title: 'PART 3 핵심 요약: 문자와 식, 등식',
      content: '• **문자 사용**: $a \\times b = ab$, $a \\div b = \\dfrac{a}{b}$, $a \\times 1 = a$\n• **다항식**: 항의 합, **차수**는 가장 높은 항의 차수\n• **동류항**: 문자와 차수가 같은 항 → 계수끼리 계산\n• **등식의 성질**: 양변에 같은 수를 더하기/빼기/곱하기/나누기(≠0) 가능\n• **이항**: 부호를 바꾸어 반대편으로 옮기기',
      type: 'formula',
    },
    {
      id: 'g1d20-c2',
      title: 'PART 3 핵심 요약: 일차방정식과 활용',
      content: '• **일차방정식**: $ax + b = 0$ ($a \\neq 0$) 꼴의 방정식\n• **풀이 순서**: 괄호 풀기 → 이항 → 동류항 정리 → 계수로 나누기\n• **활용 4단계**: 미지수 정하기 → 방정식 세우기 → 풀기 → 확인\n• **거리 공식**: 거리 = 속력 $\\times$ 시간\n• **퍼센트**: $a$의 $p$% = $a \\times \\dfrac{p}{100}$\n• **농도**: $\\dfrac{\\text{소금}}{\\text{소금물}} \\times 100$%',
      type: 'formula',
    },
  ],
  problems: [
    {
      id: 'g1d20-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '다음 중 일차방정식인 것은?',
      options: ['$x^2 + 3 = 0$', '$2x - 5 = x + 1$', '$3x + 2$', '$x + 1 = x + 1$'],
      answer: '$2x - 5 = x + 1$',
      explanation: '• $x^2 + 3 = 0$: 이차방정식 (차수가 2) ✗\n• $2x - 5 = x + 1$: 정리하면 $x = 6$인 일차방정식 ✓\n• $3x + 2$: 등호가 없으므로 방정식이 아님 ✗\n• $x + 1 = x + 1$: 항등식 (항상 참) ✗',
    },
    {
      id: 'g1d20-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: '$3(x + 4) = 2(x + 7)$의 해를 구하시오.',
      answer: '2',
      explanation: '분배법칙:\n$3x + 12 = 2x + 14$\n\n이항:\n$3x - 2x = 14 - 12$\n$x = 2$\n\n**검산**: $3(2+4) = 18$, $2(2+7) = 18$ ✓',
    },
    {
      id: 'g1d20-p3',
      type: 'short-answer',
      difficulty: 'basic',
      question: '$\\dfrac{x}{4} + 1 = 3$일 때, $x$의 값을 구하시오.',
      answer: '8',
      explanation: '$\\dfrac{x}{4} + 1 = 3$\n$\\dfrac{x}{4} = 2$\n$x = 8$\n\n**검산**: $\\dfrac{8}{4} + 1 = 2 + 1 = 3$ ✓',
    },
    {
      id: 'g1d20-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '어떤 수의 5배에서 8을 빼면 그 수의 3배보다 4가 크다. 어떤 수는?',
      options: ['4', '5', '6', '7'],
      answer: '6',
      explanation: '어떤 수를 $x$라 하면:\n$5x - 8 = 3x + 4$\n$5x - 3x = 4 + 8$\n$2x = 12$\n$x = 6$\n\n**확인**: $5(6) - 8 = 22$, $3(6) + 4 = 22$ ✓',
    },
    {
      id: 'g1d20-p5',
      type: 'short-answer',
      difficulty: 'applied',
      question: '형과 동생이 동시에 집에서 출발하여 반대 방향으로 걸었다. 형은 시속 5km, 동생은 시속 3km로 걸었을 때, 두 사람 사이의 거리가 24km가 되는 것은 몇 시간 후인지 구하시오.',
      answer: '3',
      explanation: '$x$시간 후라 하면:\n$5x + 3x = 24$\n$8x = 24$\n$x = 3$\n\n**확인**: $5 \\times 3 + 3 \\times 3 = 15 + 9 = 24$km ✓',
    },
    {
      id: 'g1d20-p6',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '연속하는 세 홀수의 합이 57일 때, 가장 큰 수는?',
      options: ['17', '19', '21', '23'],
      answer: '21',
      explanation: '가장 작은 홀수를 $x$라 하면 세 홀수는 $x$, $x+2$, $x+4$\n\n$x + (x+2) + (x+4) = 57$\n$3x + 6 = 57$\n$3x = 51$\n$x = 17$\n\n세 홀수: 17, 19, 21\n가장 큰 수: **21**',
    },
    {
      id: 'g1d20-p7',
      type: 'short-answer',
      difficulty: 'challenge',
      question: '원가에 40%의 이익을 붙여 정가를 정했다가, 정가에서 20% 할인하여 팔았더니 이익이 2,400원이었다. 원가를 구하시오.',
      answer: '20000',
      explanation: '원가를 $x$원이라 하면:\n정가 = $x \\times 1.4 = 1.4x$\n판매가 = $1.4x \\times 0.8 = 1.12x$\n\n이익 = 판매가 - 원가:\n$1.12x - x = 2400$\n$0.12x = 2400$\n$x = 20000$\n\n**확인**: 원가 20,000원 → 정가 28,000원 → 판매가 22,400원\n이익: $22400 - 20000 = 2400$원 ✓',
    },
  ],
  realLifeExample: 'PART 3 총정리! 문자와 식은 프로그래밍의 변수 개념과 같고, 일차방정식은 가격 비교, 여행 계획, 요리 레시피 조절 등 일상의 "모르는 값 찾기" 문제를 해결하는 강력한 도구입니다!',
};

export default dayContent;
