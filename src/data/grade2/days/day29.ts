import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 29,
  part: 4,
  title: '미니테스트 + 복습',
  subtitle: 'PART 4 일차함수 총정리! 지금까지 배운 내용을 점검해 보자.',
  isTest: true,
  lectures: [],
  concepts: [
    {
      id: 'g2d29-c1',
      title: 'PART 4 핵심 요약: 일차함수',
      content: '• **일차함수**: $y = ax + b$ ($a \\\\neq 0$)\\n• **기울기** $a$: $\\\\frac{y\\\\text{의 증가량}}{x\\\\text{의 증가량}}$, 양수면 오른쪽 위, 음수면 오른쪽 아래\\n• **$y$절편** $b$: 그래프가 $y$축과 만나는 점의 $y$좌표\\n• **$x$절편**: $y = 0$ 대입 → $x = -\\\\frac{b}{a}$\\n• 평행 이동: $y = ax$ → $y = ax + b$ ($y$축 방향 $b$만큼)',
      type: 'formula',
    },
    {
      id: 'g2d29-c2',
      title: 'PART 4 핵심 요약: 일차함수의 식과 연립방정식',
      content: '• **식 구하기**: 기울기+$y$절편 / 기울기+한 점 / 두 점 → $y = ax + b$\\n• **일차방정식** $ax + by + c = 0$ ↔ 일차함수 그래프 (직선)\\n• $x = k$: $y$축에 평행 / $y = k$: $x$축에 평행\\n• **교점 = 연립방정식의 해**: 기울기 다르면 1개, 같으면 0개 또는 무수히 많음',
      type: 'formula',
    },
  ],
  problems: [
    {
      id: 'g2d29-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '일차함수 $y = -3x + 6$의 $x$절편과 $y$절편의 합은?',
      options: ['$4$', '$6$', '$8$', '$10$'],
      answer: '$8$',
      explanation: '$y$절편: $b = 6$\\n$x$절편: $y = 0$ 대입 → $0 = -3x + 6$ → $x = 2$\\n\\n합: $2 + 6 = 8$',
    },
    {
      id: 'g2d29-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: '두 점 $(-1, 4)$, $(3, -8)$을 지나는 일차함수의 기울기를 구하시오.',
      answer: '-3',
      explanation: '기울기 $= \\\\frac{-8 - 4}{3 - (-1)} = \\\\frac{-12}{4} = -3$',
    },
    {
      id: 'g2d29-p3',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '일차함수 $y = 2x + a$의 그래프가 점 $(1, 5)$를 지날 때, 이 그래프의 $x$절편은?',
      options: ['$-\\\\frac{1}{2}$', '$-\\\\frac{3}{2}$', '$\\\\frac{3}{2}$', '$3$'],
      answer: '$-\\\\frac{3}{2}$',
      explanation: '$(1, 5)$ 대입: $5 = 2 + a$ → $a = 3$\\n$y = 2x + 3$\\n\\n$x$절편: $0 = 2x + 3$ → $x = -\\\\frac{3}{2}$',
    },
    {
      id: 'g2d29-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question: '두 일차함수 $y = x + 3$과 $y = -2x + 9$의 교점의 $y$좌표를 구하시오.',
      answer: '5',
      explanation: '$x + 3 = -2x + 9$\\n$3x = 6$ → $x = 2$\\n$y = 2 + 3 = 5$\\n\\n교점: $(2, 5)$이므로 $y$좌표는 $5$',
    },
    {
      id: 'g2d29-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '두 직선 $y = (a-1)x + 3$과 $y = 2x + b$가 평행할 때, $a$의 값은?',
      options: ['$1$', '$2$', '$3$', '$4$'],
      answer: '$3$',
      explanation: '평행 조건: 기울기가 같고 $y$절편이 다름\\n$a - 1 = 2$ → $a = 3$\\n\\n이때 $y$절편은 $3$과 $b$이므로 $b \\\\neq 3$이면 평행',
    },
    {
      id: 'g2d29-p6',
      type: 'short-answer',
      difficulty: 'challenge',
      question: '일차함수 $y = ax + b$의 그래프가 $x$절편이 $-2$, $y$절편이 $4$일 때, $a \\\\times b$의 값을 구하시오.',
      answer: '8',
      explanation: '$y$절편: $b = 4$\\n$x$절편이 $-2$: 점 $(-2, 0)$을 지남\\n$0 = a \\\\times (-2) + 4$ → $2a = 4$ → $a = 2$\\n\\n$a \\\\times b = 2 \\\\times 4 = 8$',
    },
  ],
  realLifeExample: 'PART 4 총정리! 일차함수는 일상 속 비례 관계를 수학적으로 표현하는 강력한 도구예요. 요금 계산, 속도-거리 관계, 온도 변환 등에서 일차함수를 만나게 됩니다. 연립방정식은 두 조건이 동시에 성립하는 상황을 해결해 줍니다!',
};

export default dayContent;
