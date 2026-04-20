import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 20,
  part: 3,
  title: '여러 가지 연립방정식',
  subtitle: '괄호, 분수, 소수가 있는 연립방정식도 정리하면 간단해져!',
  lectures: [],
  concepts: [
    {
      id: 'g2d20-c1',
      title: '괄호가 있는 연립방정식',
      content: '먼저 괄호를 풀고 정리한 후 가감법 또는 대입법으로 풉니다.\n\n$\\begin{cases} 2(x - 1) + y = 5 \\\\ x + 3(y + 1) = 14 \\end{cases}$\n\n정리: $\\begin{cases} 2x + y = 7 \\\\ x + 3y = 11 \\end{cases}$\n\n① $\\times 3$: $6x + 3y = 21$, ②: $x + 3y = 11$\n빼면: $5x = 10$ → $x = 2$, $y = 3$',
      type: 'example',
    },
    {
      id: 'g2d20-c2',
      title: '분수가 있는 연립방정식',
      content: '각 방정식에 분모의 최소공배수를 곱하여 **정수 계수**로 바꿉니다.\n\n$\\begin{cases} \\frac{x}{2} + \\frac{y}{3} = 2 \\\\ \\frac{x}{4} - \\frac{y}{2} = 1 \\end{cases}$\n\n① $\\times 6$: $3x + 2y = 12$\n② $\\times 4$: $x - 2y = 4$\n\n더하면: $4x = 16$ → $x = 4$, $y = 0$',
      type: 'formula',
    },
    {
      id: 'g2d20-c3',
      title: '소수가 있는 연립방정식',
      content: '양변에 10, 100 등을 곱하여 **소수를 정수로** 바꿉니다.\n\n$\\begin{cases} 0.3x + 0.2y = 1.6 \\\\ x - y = 2 \\end{cases}$\n\n① $\\times 10$: $3x + 2y = 16$\n②에서 $x = y + 2$를 ①에 대입:\n$3(y + 2) + 2y = 16$ → $5y = 10$ → $y = 2$, $x = 4$',
      type: 'formula',
    },
    {
      id: 'g2d20-c4',
      title: '$A = B = C$ 형태',
      content: '$A = B = C$ 형태는 두 개의 방정식으로 분리합니다.\n\n$\\frac{x + y}{2} = \\frac{x - y}{3} = 2$\n\n→ $\\begin{cases} x + y = 4 \\\\ x - y = 6 \\end{cases}$\n\n더하면: $2x = 10$ → $x = 5$, $y = -1$',
      type: 'example',
    },
  ],
  problems: [
    {
      id: 'g2d20-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$\\begin{cases} \\frac{x}{2} + y = 5 \\\\ x - y = 1 \\end{cases}$의 해는?',
      options: ['$x = 4, y = 3$', '$x = 2, y = 4$', '$x = 6, y = 2$', '$x = 3, y = 2$'],
      answer: '$x = 4, y = 3$',
      explanation: '① $\\times 2$: $x + 2y = 10$\n②: $x - y = 1$\n빼면: $3y = 9$ → $y = 3$, $x = 1 + 3 = 4$',
    },
    {
      id: 'g2d20-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: '$\\begin{cases} 0.3x + 0.2y = 1.6 \\\\ x - y = 2 \\end{cases}$에서 $x$의 값을 구하시오.',
      answer: '4',
      explanation: '① $\\times 10$: $3x + 2y = 16$\n②에서 $x = y + 2$, 대입:\n$3(y + 2) + 2y = 16$ → $5y + 6 = 16$ → $y = 2$\n$x = 2 + 2 = 4$',
    },
    {
      id: 'g2d20-p3',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$\\begin{cases} 2x + y = 7 \\\\ x + 3y = 11 \\end{cases}$의 해는?',
      options: ['$x = 1, y = 4$', '$x = 2, y = 3$', '$x = 3, y = 3$', '$x = 2, y = 5$'],
      answer: '$x = 2, y = 3$',
      explanation: '① $\\times 3$: $6x + 3y = 21$\n②: $x + 3y = 11$\n빼면: $5x = 10$ → $x = 2$\n②에 대입: $2 + 3y = 11$ → $y = 3$\n\n검산: $2(2) + 3 = 7$ ✓, $2 + 3(3) = 11$ ✓',
    },
    {
      id: 'g2d20-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question: '$\\begin{cases} \\frac{x + y}{2} = 3 \\\\ \\frac{x - y}{4} = 1 \\end{cases}$에서 $x$의 값을 구하시오.',
      answer: '5',
      explanation: '$x + y = 6$, $x - y = 4$\n더하면: $2x = 10$ → $x = 5$\n$y = 6 - 5 = 1$',
    },
    {
      id: 'g2d20-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '$\\frac{x + y}{3} = \\frac{x - y}{2} = 2$일 때, $x + 2y$의 값은?',
      options: ['$3$', '$4$', '$6$', '$7$'],
      answer: '$7$',
      explanation: '$\\frac{x + y}{3} = 2$ → $x + y = 6$\n$\\frac{x - y}{2} = 2$ → $x - y = 4$\n\n더하면: $2x = 10$ → $x = 5$, $y = 1$\n\n$x + 2y = 5 + 2 = 7$',
    },
  ],
  realLifeExample: '환전할 때 달러와 유로를 합쳐 10장 바꾸면서 총 90만 원을 냈다면? 달러 환율 1,300원, 유로 환율 1,400원일 때 $\\begin{cases} x + y = 10 \\\\ 1300x + 1400y = 900000 \\end{cases}$을 풀면 각각 몇 장인지 알 수 있습니다.',
};

export default dayContent;
