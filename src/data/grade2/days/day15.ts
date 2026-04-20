import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 15,
  part: 2,
  title: '연립부등식',
  subtitle: '두 개의 부등식을 동시에 만족하는 해를 구하자!',
  lectures: [],
  concepts: [
    {
      id: 'g2d15-c1',
      title: '연립부등식이란?',
      content: '두 개 이상의 부등식을 **동시에 만족**하는 해를 구하는 것을 **연립부등식**이라 합니다.\n\n$\\begin{cases} 2x + 1 > 3 \\\\ x - 3 < 2 \\end{cases}$\n\n각각 풀면:\n$x > 1$ 그리고 $x < 5$\n→ 공통 범위: $1 < x < 5$',
      type: 'definition',
    },
    {
      id: 'g2d15-c2',
      title: '연립부등식 풀이 방법',
      content: '**① 각 부등식을 따로 풀기**\n**② 수직선 위에 해를 표시**\n**③ 공통 부분 찾기**\n\n예: $\\begin{cases} x - 2 \\geq 1 \\\\ 3x + 1 \\leq 16 \\end{cases}$\n\n$x \\geq 3$ 그리고 $x \\leq 5$\n→ 공통: $3 \\leq x \\leq 5$',
      type: 'formula',
    },
    {
      id: 'g2d15-c3',
      title: '$A < B < C$ 형태',
      content: '$a < 2x + 1 < b$ 형태는 두 부등식으로 나눌 수 있습니다.\n\n$-3 < 2x - 1 \\leq 5$\n→ $\\begin{cases} 2x - 1 > -3 \\\\ 2x - 1 \\leq 5 \\end{cases}$\n\n$2x > -2$ → $x > -1$\n$2x \\leq 6$ → $x \\leq 3$\n\n→ $-1 < x \\leq 3$',
      type: 'example',
    },
    {
      id: 'g2d15-c4',
      title: '해가 없는 경우',
      content: '두 부등식의 해에 공통 부분이 없으면 **해가 없습니다**.\n\n$\\begin{cases} x > 5 \\\\ x < 2 \\end{cases}$\n\n$x > 5$와 $x < 2$를 동시에 만족하는 $x$는 없습니다.\n→ **해가 없다**',
      type: 'warning',
    },
  ],
  problems: [
    {
      id: 'g2d15-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '연립부등식 $\\begin{cases} x + 3 > 5 \\\\ x - 1 < 6 \\end{cases}$의 해는?',
      options: ['$2 < x < 7$', '$x > 2$', '$x < 7$', '$2 \\leq x \\leq 7$'],
      answer: '$2 < x < 7$',
      explanation: '$x + 3 > 5$ → $x > 2$\n$x - 1 < 6$ → $x < 7$\n\n공통: $2 < x < 7$',
    },
    {
      id: 'g2d15-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: '$-1 \\leq 3x + 2 < 11$을 만족하는 정수 $x$의 개수를 구하시오.',
      answer: '4',
      explanation: '$-1 \\leq 3x + 2$ → $3x \\geq -3$ → $x \\geq -1$\n$3x + 2 < 11$ → $3x < 9$ → $x < 3$\n\n$-1 \\leq x < 3$을 만족하는 정수: $-1, 0, 1, 2$ → **4개**',
    },
    {
      id: 'g2d15-p3',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '연립부등식 $\\begin{cases} 2x - 3 \\geq x + 1 \\\\ 3x + 2 < 5x - 6 \\end{cases}$의 해는?',
      options: ['$4 \\leq x$', '$x < 4$', '$4 < x$', '$4 \\leq x < 8$'],
      answer: '$4 < x$',
      explanation: '$2x - 3 \\geq x + 1$ → $x \\geq 4$\n$3x + 2 < 5x - 6$ → $-2x < -8$ → $x > 4$\n\n$x \\geq 4$와 $x > 4$의 공통: $x > 4$',
    },
    {
      id: 'g2d15-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question: '$1 < \\frac{x+3}{2} \\leq 4$를 만족하는 정수 $x$의 합을 구하시오.',
      answer: '15',
      explanation: '양변에 2를 곱하면: $2 < x + 3 \\leq 8$\n각 변에서 3을 빼면: $-1 < x \\leq 5$\n\n정수: $0, 1, 2, 3, 4, 5$\n합: $0 + 1 + 2 + 3 + 4 + 5 = 15$',
    },
    {
      id: 'g2d15-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '연립부등식 $\\begin{cases} 2x - a > 0 \\\\ x - 3 < 0 \\end{cases}$의 해가 존재하지 않도록 하는 상수 $a$의 범위는?',
      options: ['$a \\geq 6$', '$a > 6$', '$a \\leq 6$', '$a < 6$'],
      answer: '$a \\geq 6$',
      explanation: '첫째: $x > \\frac{a}{2}$\n둘째: $x < 3$\n\n해가 없으려면: $\\frac{a}{2} \\geq 3$\n$a \\geq 6$\n\n$a \\geq 6$이면 $x > 3$ 이상이면서 $x < 3$인 것이 없으므로 해가 없습니다.',
    },
  ],
  realLifeExample: '냉장고의 온도를 $2$도 이상 $8$도 이하로 유지해야 음식이 안전합니다. 이것은 연립부등식 $2 \\leq T \\leq 8$입니다. 냉동실은 $-18 \\leq T \\leq -15$입니다.',
};

export default dayContent;
