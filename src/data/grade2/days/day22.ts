import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 22,
  part: 3,
  title: '미니테스트 + 복습',
  subtitle: 'PART 3 총정리! 연립방정식의 풀이와 활용을 점검하자!',
  isTest: true,
  lectures: [],
  concepts: [
    {
      id: 'g2d22-c1',
      title: 'PART 3 핵심 정리',
      content: '**1. 연립방정식의 뜻**\n- 미지수 2개, 방정식 2개를 동시에 만족하는 해\n\n**2. 가감법**: 계수 맞추고 더하기/빼기로 소거\n**3. 대입법**: 한 식을 정리해서 다른 식에 대입\n\n**4. 여러 가지 연립방정식**\n- 괄호 → 전개, 분수 → 최소공배수 곱하기, 소수 → 10배\n\n**5. 활용**: 미지수 설정 → 식 세우기 → 풀기 → 확인\n\n**특수한 경우**: 해가 무수히 많거나 해가 없는 경우',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'g2d22-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$\\\\begin{cases} 3x + y = 10 \\\\\\\\ x + y = 4 \\\\end{cases}$의 해는?',
      options: ['$x = 2, y = 2$', '$x = 3, y = 1$', '$x = 4, y = 0$', '$x = 1, y = 3$'],
      answer: '$x = 3, y = 1$',
      explanation: '① - ②: $2x = 6$ → $x = 3$\n$3 + y = 4$ → $y = 1$\n\n검산: $3(3) + 1 = 10$ ✓',
    },
    {
      id: 'g2d22-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: '$\\\\begin{cases} y = 3x - 2 \\\\\\\\ 2x + y = 8 \\\\end{cases}$에서 $x$의 값을 구하시오.',
      answer: '2',
      explanation: '①을 ②에 대입: $2x + (3x - 2) = 8$\n$5x - 2 = 8$ → $5x = 10$ → $x = 2$\n$y = 3(2) - 2 = 4$',
    },
    {
      id: 'g2d22-p3',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$\\\\begin{cases} \\\\frac{x}{2} + \\\\frac{y}{3} = 3 \\\\\\\\ x - y = 1 \\\\end{cases}$의 해는?',
      options: ['$x = 3, y = 2$', '$x = 4, y = 3$', '$x = 5, y = 4$', '$x = 2, y = 1$'],
      answer: '$x = 4, y = 3$',
      explanation: '① $\\\\times 6$: $3x + 2y = 18$\n②에서 $x = y + 1$, 대입:\n$3(y + 1) + 2y = 18$ → $5y + 3 = 18$ → $y = 3$, $x = 4$\n\n검산: $\\\\frac{4}{2} + \\\\frac{3}{3} = 2 + 1 = 3$ ✓, $4 - 3 = 1$ ✓',
    },
    {
      id: 'g2d22-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question: '연필 5자루와 지우개 3개의 값이 4,400원이고, 연필 3자루와 지우개 5개의 값이 3,600원입니다. 연필 한 자루의 가격을 구하시오.',
      answer: '700',
      explanation: '$\\\\begin{cases} 5x + 3y = 4400 \\\\\\\\ 3x + 5y = 3600 \\\\end{cases}$\n\n① $\\\\times 5$: $25x + 15y = 22000$\n② $\\\\times 3$: $9x + 15y = 10800$\n빼면: $16x = 11200$ → $x = 700$\n\n연필 한 자루: 700원, 지우개 한 개: 300원',
    },
    {
      id: 'g2d22-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '두 자리 자연수의 각 자릿수의 합이 7이고, 십의 자리와 일의 자리를 바꾸면 원래 수보다 27이 커진다. 원래 수는?',
      options: ['25', '34', '43', '52'],
      answer: '25',
      explanation: '$\\\\begin{cases} x + y = 7 \\\\\\\\ (10y + x) - (10x + y) = 27 \\\\end{cases}$\n\n②: $9y - 9x = 27$ → $y - x = 3$\n\n$x + y = 7$, $y - x = 3$\n더하면: $2y = 10$ → $y = 5$, $x = 2$\n\n원래 수: 25\n바꾼 수: 52, $52 - 25 = 27$ ✓',
    },
    {
      id: 'g2d22-p6',
      type: 'short-answer',
      difficulty: 'challenge',
      question: '10% 소금물과 4% 소금물을 섞어 6% 소금물 600 g을 만들려면, 10% 소금물은 몇 g이 필요합니까?',
      answer: '200',
      explanation: '$\\\\begin{cases} x + y = 600 \\\\\\\\ 0.1x + 0.04y = 0.06 \\\\times 600 \\\\end{cases}$\n\n$\\\\begin{cases} x + y = 600 \\\\\\\\ 10x + 4y = 3600 \\\\end{cases}$\n\n① $\\\\times 4$: $4x + 4y = 2400$\n② - ①$\\\\times$4: $6x = 1200$ → $x = 200$\n\n10% 소금물 200 g, 4% 소금물 400 g',
    },
  ],
  realLifeExample: 'PART 3에서 배운 연립방정식은 경제학(수요와 공급), 화학(화학 반응식의 균형), 물리학(힘의 균형) 등 다양한 분야에서 핵심적으로 사용됩니다. 두 조건이 주어지면 두 미지수를 구할 수 있다는 것이 핵심입니다!',
};

export default dayContent;
