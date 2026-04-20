import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 28,
  part: 4,
  title: '두 일차함수의 그래프와 연립방정식',
  subtitle: '두 직선의 교점이 연립방정식의 해가 되는 원리를 알아보자!',
  lectures: [],
  concepts: [
    {
      id: 'g2d28-c1',
      title: '두 직선의 교점 = 연립방정식의 해',
      content: '두 일차함수 $y = a_1x + b_1$과 $y = a_2x + b_2$의 그래프의 **교점의 좌표**는\\n연립방정식\\n$$\\begin{cases} y = a_1x + b_1 \\\\ y = a_2x + b_2 \\end{cases}$$\\n의 **해**와 같습니다.\\n\\n그래프로 교점을 읽거나, 연립방정식을 풀어서 교점을 구할 수 있어요!',
      type: 'definition',
    },
    {
      id: 'g2d28-c2',
      title: '두 직선의 위치 관계',
      content: '두 직선 $y = a_1x + b_1$, $y = a_2x + b_2$에서:\\n\\n• **한 점에서 만남** ($a_1 \\neq a_2$): 연립방정식의 해가 1개\\n• **평행** ($a_1 = a_2$, $b_1 \\neq b_2$): 해가 없음 (불능)\\n• **일치** ($a_1 = a_2$, $b_1 = b_2$): 해가 무수히 많음 (부정)',
      type: 'formula',
    },
    {
      id: 'g2d28-c3',
      title: '그래프를 이용한 연립방정식 풀이',
      content: '두 직선의 교점을 그래프에서 읽어 연립방정식의 해를 구할 수 있습니다.\\n\\n① 두 일차함수의 그래프를 그린다\\n② 교점의 좌표 $(p, q)$를 읽는다\\n③ $x = p$, $y = q$가 연립방정식의 해\\n\\n⚠️ 그래프에서 읽은 해는 반드시 원래 식에 대입하여 검산!',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'g2d28-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '두 직선 $y = x + 1$과 $y = -x + 5$의 교점의 좌표는?',
      options: ['$(1, 2)$', '$(2, 3)$', '$(3, 4)$', '$(4, 5)$'],
      answer: '$(2, 3)$',
      explanation: '$x + 1 = -x + 5$\\n$2x = 4$ → $x = 2$\\n$y = 2 + 1 = 3$\\n\\n교점: $(2, 3)$',
    },
    {
      id: 'g2d28-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '두 직선 $y = 2x + 3$과 $y = 2x - 1$의 위치 관계는?',
      options: ['한 점에서 만난다', '평행하다', '일치한다', '수직이다'],
      answer: '평행하다',
      explanation: '두 직선의 기울기가 $2$로 같고, $y$절편이 $3$과 $-1$로 다르므로 **평행**합니다.\\n연립방정식의 해가 없습니다.',
    },
    {
      id: 'g2d28-p3',
      type: 'short-answer',
      difficulty: 'applied',
      question: '연립방정식 $\\begin{cases} y = 3x - 2 \\\\ y = -x + 6 \\end{cases}$의 해 $x + y$의 값을 구하시오.',
      answer: '6',
      explanation: '$3x - 2 = -x + 6$\\n$4x = 8$ → $x = 2$\\n$y = 3 \\times 2 - 2 = 4$\\n\\n$x + y = 2 + 4 = 6$',
    },
    {
      id: 'g2d28-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question: '두 직선 $y = ax + 1$과 $y = 2x + b$가 점 $(3, 7)$에서 만날 때, $a + b$의 값을 구하시오.',
      answer: '3',
      explanation: '점 $(3, 7)$이 $y = ax + 1$ 위:\\n$7 = 3a + 1$ → $a = 2$\\n\\n점 $(3, 7)$이 $y = 2x + b$ 위:\\n$7 = 6 + b$ → $b = 1$\\n\\n$a + b = 2 + 1 = 3$',
    },
    {
      id: 'g2d28-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '연립방정식 $\\begin{cases} 2x - y = 1 \\\\ ax + 2y = 5 \\end{cases}$의 해가 없을 때, 상수 $a$의 값은?',
      options: ['$-4$', '$-2$', '$2$', '$4$'],
      answer: '$-4$',
      explanation: '해가 없으려면 두 직선이 평행해야 합니다.\\n$y = 2x - 1$ (기울기 $2$)\\n$y = -\\frac{a}{2}x + \\frac{5}{2}$ (기울기 $-\\frac{a}{2}$)\\n\\n기울기가 같아야 하므로: $2 = -\\frac{a}{2}$ → $a = -4$\\n$y$절편: $-1 \\neq \\frac{5}{2}$이므로 평행 확인!',
    },
  ],
  realLifeExample: '두 친구가 각각 다른 요금제 택시를 탔을 때, 어느 거리에서 요금이 같아지는지 알려면 두 일차함수의 교점을 구하면 돼요! 연립방정식은 "두 조건을 동시에 만족하는 값"을 구하는 도구랍니다.',
};

export default dayContent;
