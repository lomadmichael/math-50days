import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 18,
  part: 3,
  title: '연립방정식 - 가감법',
  subtitle: '두 식을 더하거나 빼서 미지수 하나를 없애자!',
  lectures: [],
  concepts: [
    {
      id: 'g2d18-c1',
      title: '가감법이란?',
      content: '두 방정식을 더하거나 빼서 **미지수 하나를 소거**하는 방법입니다.\n\n$\\begin{cases} x + y = 5 \\cdots ① \\\\ x - y = 1 \\cdots ② \\end{cases}$\n\n① + ②: $2x = 6$ → $x = 3$\n①에 대입: $3 + y = 5$ → $y = 2$',
      type: 'definition',
    },
    {
      id: 'g2d18-c2',
      title: '계수를 맞추어 가감법 사용하기',
      content: '소거할 미지수의 **계수의 절댓값을 같게** 만든 후 더하거나 뺍니다.\n\n$\\begin{cases} 2x + 3y = 12 \\cdots ① \\\\ 5x - 2y = 1 \\cdots ② \\end{cases}$\n\n$y$를 소거: ① $\\times 2$: $4x + 6y = 24$\n② $\\times 3$: $15x - 6y = 3$\n두 식을 더하면: $19x = 27$ → $x = \\frac{27}{19}$\n\n또는 $x$를 소거: ① $\\times 5$: $10x + 15y = 60$\n② $\\times 2$: $10x - 4y = 2$\n빼면: $19y = 58$ → $y = \\frac{58}{19}$',
      type: 'formula',
    },
    {
      id: 'g2d18-c3',
      title: '가감법 풀이 순서',
      content: '**① 계수 맞추기**: 소거할 미지수의 계수의 절댓값을 같게\n**② 더하기 또는 빼기**: 같은 부호면 빼기, 다른 부호면 더하기\n**③ 한 미지수 구하기**\n**④ 대입하여 나머지 구하기**\n**⑤ 검산하기**',
      type: 'tip',
    },
    {
      id: 'g2d18-c4',
      title: '어떤 미지수를 소거할까?',
      content: '계수가 더 간단해지는 미지수를 소거하면 편합니다.\n\n$\\begin{cases} 3x + 2y = 8 \\\\ x + 2y = 4 \\end{cases}$\n\n$y$의 계수가 같으므로 바로 빼면 됩니다!\n위 - 아래: $2x = 4$ → $x = 2$\n$2 + 2y = 4$ → $y = 1$',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'g2d18-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$\\begin{cases} 2x + y = 7 \\\\ x + y = 4 \\end{cases}$의 해는?',
      options: ['$x = 3, y = 1$', '$x = 2, y = 3$', '$x = 1, y = 3$', '$x = 3, y = 2$'],
      answer: '$x = 3, y = 1$',
      explanation: '위 - 아래: $x = 3$\n$3 + y = 4$ → $y = 1$\n\n검산: $2(3) + 1 = 7$ ✓',
    },
    {
      id: 'g2d18-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: '$\\begin{cases} x + 3y = 11 \\\\ x - 3y = -1 \\end{cases}$에서 $x$의 값을 구하시오.',
      answer: '5',
      explanation: '두 식을 더하면:\n$2x = 10$ → $x = 5$\n\n$5 + 3y = 11$ → $y = 2$',
    },
    {
      id: 'g2d18-p3',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$\\begin{cases} 3x + 2y = 16 \\\\ 5x - 3y = 14 \\end{cases}$의 해는?',
      options: ['$x = 4, y = 2$', '$x = 2, y = 5$', '$x = 3, y = 3$', '$x = 5, y = 1$'],
      answer: '$x = 4, y = 2$',
      explanation: '① $\\times 3$: $9x + 6y = 48$\n② $\\times 2$: $10x - 6y = 28$\n더하면: $19x = 76$ → $x = 4$\n\n$12 + 2y = 16$ → $y = 2$\n\n검산: $5(4) - 3(2) = 20 - 6 = 14$ ✓',
    },
    {
      id: 'g2d18-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question: '$\\begin{cases} 4x - 5y = 2 \\\\ 3x + 2y = 13 \\end{cases}$에서 $x + y$의 값을 구하시오.',
      answer: '5',
      explanation: '① $\\times 2$: $8x - 10y = 4$\n② $\\times 5$: $15x + 10y = 65$\n더하면: $23x = 69$ → $x = 3$\n\n②에 대입: $9 + 2y = 13$ → $y = 2$\n\n검산: $4(3) - 5(2) = 12 - 10 = 2$ ✓\n\n$x + y = 3 + 2 = 5$',
    },
    {
      id: 'g2d18-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '$\\begin{cases} 2x + 3y = 1 \\\\ 4x + 6y = 5 \\end{cases}$의 해는?',
      options: ['$x = 1, y = 0$', '$x = 0, y = 1$', '해가 없다', '해가 무수히 많다'],
      answer: '해가 없다',
      explanation: '①의 양변에 2를 곱하면: $4x + 6y = 2$\n그런데 ②는 $4x + 6y = 5$\n\n$4x + 6y$가 동시에 2이면서 5일 수는 없으므로 **해가 없습니다**.',
    },
  ],
  realLifeExample: '문구점에서 연필과 지우개를 샀는데, 연필 2자루와 지우개 3개에 2,600원, 연필 3자루와 지우개 2개에 2,900원이었다면? 연립방정식 $\\begin{cases} 2x + 3y = 2600 \\\\ 3x + 2y = 2900 \\end{cases}$을 풀면 연필 한 자루 700원, 지우개 하나 400원입니다!',
};

export default dayContent;
