import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 30,
  part: 4,
  title: '미니테스트 + 복습',
  subtitle: 'PART 4 총정리: 이차함수',
  isTest: true,
  lectures: [],
  concepts: [
    {
      id: 'g3d30-c1',
      title: 'PART 4 핵심 정리: 이차함수',
      content: '① $y = ax^2 + bx + c = a(x - p)^2 + q$\\n② 꼭짓점: $(p, q) = \\left(-\\frac{b}{2a}, -\\frac{b^2-4ac}{4a}\\right)$\\n③ 축의 방정식: $x = p$\\n④ $a > 0$: 아래로 볼록(최솟값 $q$), $a < 0$: 위로 볼록(최댓값 $q$)\\n⑤ 판별식 $D = b^2 - 4ac$로 $x$축 교점 개수 판단',
      type: 'tip',
    },
    {
      id: 'g3d30-c2',
      title: '이차함수 식 구하기 총정리',
      content: '• 꼭짓점 + 1점 → $y = a(x-p)^2 + q$\\n• $x$절편 2개 + 1점 → $y = a(x-\\alpha)(x-\\beta)$\\n• 3점 → $y = ax^2 + bx + c$ (연립방정식)\\n• 축 + 2점 → $y = a(x-p)^2 + q$ (연립방정식)',
      type: 'formula',
    },
  ],
  problems: [
    {
      id: 'g3d30-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$y = -3(x+2)^2 + 7$의 꼭짓점의 좌표는?',
      options: ['$(2, 7)$', '$(-2, 7)$', '$(2, -7)$', '$(-2, -7)$'],
      answer: '$(-2, 7)$',
      explanation: '$y = a(x - p)^2 + q$에서 꼭짓점은 $(p, q)$. $y = -3(x-(-2))^2 + 7$이므로 꼭짓점은 $(-2, 7)$.',
    },
    {
      id: 'g3d30-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$y = 2x^2 - 12x + 20$을 $y = a(x-p)^2 + q$ 꼴로 변환하면?',
      options: ['$y = 2(x-3)^2 + 2$', '$y = 2(x-3)^2 + 20$', '$y = 2(x+3)^2 + 2$', '$y = 2(x-6)^2 + 2$'],
      answer: '$y = 2(x-3)^2 + 2$',
      explanation: '$y = 2(x^2 - 6x) + 20 = 2(x-3)^2 - 18 + 20 = 2(x-3)^2 + 2$.',
    },
    {
      id: 'g3d30-p3',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '꼭짓점이 $(1, -4)$이고 점 $(3, 0)$을 지나는 이차함수의 $y$절편은?',
      options: ['$-3$', '$-2$', '$0$', '$-1$'],
      answer: '$-3$',
      explanation: '$y = a(x-1)^2 - 4$에 $(3,0)$: $0 = 4a - 4$, $a = 1$. $y = (x-1)^2 - 4$. $y$절편: $x=0$ 대입, $y = 1 - 4 = -3$.',
    },
    {
      id: 'g3d30-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$y = -x^2 + 6x - 5$의 최댓값은?',
      options: ['$4$', '$5$', '$6$', '$9$'],
      answer: '$4$',
      explanation: '$y = -(x^2 - 6x) - 5 = -(x-3)^2 + 9 - 5 = -(x-3)^2 + 4$. $a < 0$이므로 최댓값 $4$.',
    },
    {
      id: 'g3d30-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '$y = x^2 - 2kx + k + 6$의 그래프가 $x$축과 접할 때, 양수 $k$의 값은?',
      options: ['$2$', '$3$', '$6$', '$-2$'],
      answer: '$3$',
      explanation: '접하려면 $D = 0$. $D = 4k^2 - 4(k+6) = 4k^2 - 4k - 24 = 0$. $k^2 - k - 6 = 0$, $(k-3)(k+2) = 0$. 양수이므로 $k = 3$.',
    },
    {
      id: 'g3d30-p6',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '길이가 40m인 철조망으로 직사각형 모양의 목장을 만들 때, 넓이의 최댓값은?',
      options: ['$100\\text{m}^2$', '$160\\text{m}^2$', '$80\\text{m}^2$', '$200\\text{m}^2$'],
      answer: '$100\\text{m}^2$',
      explanation: '가로 $x$, 세로 $20-x$. $S = x(20-x) = -(x-10)^2 + 100$. $x = 10$일 때 최대 넓이 $100\\text{m}^2$.',
    },
  ],
  realLifeExample: '이차함수는 물리학의 포물선 운동, 경제학의 이윤 최적화, 건축의 아치 설계 등 다양한 분야에서 핵심적으로 활용됩니다. PART 4에서 배운 내용은 고등수학의 기초가 됩니다.',
};

export default dayContent;
