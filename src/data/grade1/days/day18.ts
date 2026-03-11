import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 18,
  part: 3,
  title: '일차방정식 활용 (1)',
  subtitle: '문장을 방정식으로! 수에 대한 문제와 나이 문제를 풀어보자.',
  lectures: [],
  concepts: [
    {
      id: 'g1d18-c1',
      title: '일차방정식 활용 풀이 순서',
      content: '**일차방정식 활용 문제 풀이 4단계**:\n\n① **미지수 정하기**: 구하려는 것을 $x$로 놓기\n② **방정식 세우기**: 문제의 조건을 등식으로 표현\n③ **방정식 풀기**: 이항과 정리를 통해 $x$ 값 구하기\n④ **확인하기**: 구한 답이 문제 조건에 맞는지 검산',
      type: 'formula',
    },
    {
      id: 'g1d18-c2',
      title: '수에 대한 문제',
      content: '**자주 나오는 표현과 식 세우기**:\n• 연속하는 두 정수: $x$, $x + 1$\n• 연속하는 두 짝수(홀수): $x$, $x + 2$\n• 어떤 수의 3배보다 5 큰 수: $3x + 5$\n• 십의 자리 $a$, 일의 자리 $b$인 두 자리 수: $10a + b$\n\n**예시**: 어떤 수에 7을 더하면 그 수의 3배와 같다.\n→ $x + 7 = 3x$ → $7 = 2x$ → $x = \\dfrac{7}{2}$',
      type: 'example',
    },
    {
      id: 'g1d18-c3',
      title: '나이 문제',
      content: '**나이 문제의 핵심**: 시간이 흘러도 나이 차이는 변하지 않는다!\n\n**예시**: 현재 아버지는 42세, 아들은 12세이다. 아버지 나이가 아들 나이의 2배가 되는 것은 몇 년 후인가?\n\n$x$년 후라 하면:\n아버지: $42 + x$, 아들: $12 + x$\n\n$42 + x = 2(12 + x)$\n$42 + x = 24 + 2x$\n$42 - 24 = 2x - x$\n$x = 18$\n\n→ **18년 후**',
      type: 'example',
    },
  ],
  problems: [
    {
      id: 'g1d18-p1',
      type: 'short-answer',
      difficulty: 'basic',
      question: '어떤 수의 4배에서 3을 빼면 21이 된다. 어떤 수를 구하시오.',
      answer: '6',
      explanation: '어떤 수를 $x$라 하면:\n$4x - 3 = 21$\n$4x = 24$\n$x = 6$\n\n**확인**: $4 \\times 6 - 3 = 24 - 3 = 21$ ✓',
    },
    {
      id: 'g1d18-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: '연속하는 세 정수의 합이 48이다. 가장 작은 수를 구하시오.',
      answer: '15',
      explanation: '가장 작은 수를 $x$라 하면 세 수는 $x$, $x+1$, $x+2$\n\n$x + (x+1) + (x+2) = 48$\n$3x + 3 = 48$\n$3x = 45$\n$x = 15$\n\n**확인**: $15 + 16 + 17 = 48$ ✓',
    },
    {
      id: 'g1d18-p3',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '현재 어머니는 38세, 딸은 10세이다. 어머니 나이가 딸 나이의 3배가 되는 것은 몇 년 후인가?',
      options: ['2년 후', '3년 후', '4년 후', '5년 후'],
      answer: '4년 후',
      explanation: '$x$년 후라 하면:\n$38 + x = 3(10 + x)$\n$38 + x = 30 + 3x$\n$38 - 30 = 3x - x$\n$8 = 2x$\n$x = 4$\n\n**확인**: 4년 후 어머니 42세, 딸 14세 → $42 = 3 \\times 14$ ✓',
    },
    {
      id: 'g1d18-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question: '어떤 수에 5를 더한 것의 2배는 그 수에 3을 더한 것의 3배와 같다. 어떤 수를 구하시오.',
      answer: '1',
      explanation: '어떤 수를 $x$라 하면:\n$2(x + 5) = 3(x + 3)$\n$2x + 10 = 3x + 9$\n$10 - 9 = 3x - 2x$\n$x = 1$\n\n**확인**: $2(1+5) = 12$, $3(1+3) = 12$ ✓',
    },
    {
      id: 'g1d18-p5',
      type: 'short-answer',
      difficulty: 'challenge',
      question: '두 자리 자연수가 있다. 십의 자리 숫자와 일의 자리 숫자의 합은 11이고, 십의 자리 숫자와 일의 자리 숫자를 바꾸면 원래 수보다 27이 크다. 원래 수를 구하시오.',
      answer: '47',
      explanation: '십의 자리를 $x$, 일의 자리를 $y$라 하면:\n조건 1: $x + y = 11$ → $y = 11 - x$\n\n원래 수: $10x + y$, 바꾼 수: $10y + x$\n조건 2: $10y + x = 10x + y + 27$\n$9y - 9x = 27$\n$y - x = 3$\n\n$y = 11 - x$를 대입:\n$(11 - x) - x = 3$\n$11 - 2x = 3$\n$2x = 8$, $x = 4$\n$y = 11 - 4 = 7$\n\n원래 수: $47$\n**확인**: $4 + 7 = 11$ ✓, $74 - 47 = 27$ ✓',
    },
  ],
  realLifeExample: '방정식 활용은 "추리"와 비슷합니다! 탐정이 단서를 모아 범인을 찾듯, 문제에서 조건(단서)을 모아 방정식을 세우고 미지수(범인)를 찾는 거예요. 나이 문제, 가격 문제 등 실생활 곳곳에서 활용됩니다.',
};

export default dayContent;
