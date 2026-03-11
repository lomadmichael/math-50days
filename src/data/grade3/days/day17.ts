import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 17,
  part: 3,
  title: '완전제곱식을 이용한 풀이',
  subtitle: '$(x+p)^2 = q$ 꼴로 변형하여 풀기',
  lectures: [],
  concepts: [
    {
      id: 'g3d17-c1',
      title: '완전제곱식을 이용한 풀이 원리',
      content: '$x^2 = k$ ($k \\\\geq 0$)이면 $x = \\\\pm\\\\sqrt{k}$\\n$(x+p)^2 = q$ ($q \\\\geq 0$)이면 $x+p = \\\\pm\\\\sqrt{q}$\\n$\\\\therefore x = -p \\\\pm \\\\sqrt{q}$\\n\\n인수분해가 어려운 경우에 유용한 풀이법입니다.',
      type: 'formula',
    },
    {
      id: 'g3d17-c2',
      title: '완전제곱식 만들기',
      content: '$x^2 + bx$에 $\\\\left(\\\\frac{b}{2}\\\\right)^2$을 더하면 완전제곱식!\\n\\n$x^2 + bx + \\\\left(\\\\frac{b}{2}\\\\right)^2 = \\\\left(x + \\\\frac{b}{2}\\\\right)^2$\\n\\n예: $x^2 + 6x$ → $x^2 + 6x + 9 = (x+3)^2$\\n$x^2 - 4x$ → $x^2 - 4x + 4 = (x-2)^2$',
      type: 'formula',
    },
    {
      id: 'g3d17-c3',
      title: '풀이 절차',
      content: '$x^2 + 6x + 2 = 0$\\n① 상수항을 이항: $x^2 + 6x = -2$\\n② 양변에 $\\\\left(\\\\frac{6}{2}\\\\right)^2 = 9$를 더함: $x^2 + 6x + 9 = 7$\\n③ 완전제곱식: $(x+3)^2 = 7$\\n④ 제곱근: $x+3 = \\\\pm\\\\sqrt{7}$\\n⑤ $x = -3 \\\\pm \\\\sqrt{7}$',
      type: 'example',
    },
  ],
  problems: [
    {
      id: 'g3d17-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$(x-2)^2 = 5$의 해는?',
      options: ['$x = 2 \\\\pm \\\\sqrt{5}$', '$x = -2 \\\\pm \\\\sqrt{5}$', '$x = \\\\pm \\\\sqrt{5}$', '$x = 2 \\\\pm 5$'],
      answer: '$x = 2 \\\\pm \\\\sqrt{5}$',
      explanation: '$x - 2 = \\\\pm\\\\sqrt{5}$이므로 $x = 2 \\\\pm \\\\sqrt{5}$입니다.',
    },
    {
      id: 'g3d17-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$x^2 + 4x$를 완전제곱식으로 만들려면 더해야 할 수는?',
      options: ['$2$', '$4$', '$8$', '$16$'],
      answer: '$4$',
      explanation: '$\\\\left(\\\\frac{4}{2}\\\\right)^2 = 4$를 더하면 $x^2 + 4x + 4 = (x+2)^2$입니다.',
    },
    {
      id: 'g3d17-p3',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$x^2 - 8x + 7 = 0$을 완전제곱식으로 풀면?',
      options: ['$x = 1, 7$', '$x = 4 \\\\pm 3$', '$x = 1, 7$과 $x = 4 \\\\pm 3$ 모두', '$x = -1, -7$'],
      answer: '$x = 1, 7$',
      explanation: '$x^2 - 8x = -7$, $x^2 - 8x + 16 = 9$, $(x-4)^2 = 9$, $x-4 = \\\\pm 3$이므로 $x = 7$ 또는 $x = 1$입니다.',
    },
    {
      id: 'g3d17-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$x^2 + 2x - 5 = 0$의 해는?',
      options: ['$x = -1 \\\\pm \\\\sqrt{6}$', '$x = 1 \\\\pm \\\\sqrt{6}$', '$x = -1 \\\\pm \\\\sqrt{5}$', '$x = -2 \\\\pm \\\\sqrt{6}$'],
      answer: '$x = -1 \\\\pm \\\\sqrt{6}$',
      explanation: '$x^2 + 2x = 5$, $x^2 + 2x + 1 = 6$, $(x+1)^2 = 6$이므로 $x = -1 \\\\pm \\\\sqrt{6}$입니다.',
    },
    {
      id: 'g3d17-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '$2x^2 - 8x + 3 = 0$의 해는?',
      options: ['$x = 2 \\\\pm \\\\frac{\\\\sqrt{10}}{2}$', '$x = 4 \\\\pm \\\\sqrt{10}$', '$x = 2 \\\\pm \\\\sqrt{10}$', '$x = 1 \\\\pm \\\\frac{\\\\sqrt{10}}{2}$'],
      answer: '$x = 2 \\\\pm \\\\frac{\\\\sqrt{10}}{2}$',
      explanation: '$x^2 - 4x + \\\\frac{3}{2} = 0$, $x^2 - 4x = -\\\\frac{3}{2}$, $(x-2)^2 = 4 - \\\\frac{3}{2} = \\\\frac{5}{2}$이므로 $x = 2 \\\\pm \\\\sqrt{\\\\frac{5}{2}} = 2 \\\\pm \\\\frac{\\\\sqrt{10}}{2}$입니다.',
    },
  ],
  realLifeExample: '로켓의 높이가 $h = -t^2 + 6t + 7$일 때, 높이가 $12$m가 되는 시각은 $-t^2 + 6t + 7 = 12$, 즉 $t^2 - 6t + 5 = 0$. 완전제곱식으로 $(t-3)^2 = 4$, $t = 1$ 또는 $t = 5$초에 12m를 지나갑니다.',
};

export default dayContent;
