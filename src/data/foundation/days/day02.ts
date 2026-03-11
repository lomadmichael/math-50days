import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 2,
  part: 1,
  title: '덧셈과 뺄셈의 원리',
  subtitle: '받아올림과 받아내림을 완벽히 익혀서 정수의 연산 기초를 다져요!',
  lectures: [],
  concepts: [
    {
      id: 'f1d2-c1',
      title: '덧셈의 원리: 받아올림',
      content: '같은 자리끼리 더하고, 합이 $10$ 이상이면 **받아올림**합니다.\n\n예: $367 + 458$\n- 일의 자리: $7 + 8 = 15$ → $5$ 쓰고 $1$ 올림\n- 십의 자리: $6 + 5 + 1 = 12$ → $2$ 쓰고 $1$ 올림\n- 백의 자리: $3 + 4 + 1 = 8$\n\n답: $825$',
      type: 'definition',
    },
    {
      id: 'f1d2-c2',
      title: '뺄셈의 원리: 받아내림',
      content: '같은 자리끼리 빼고, 뺄 수 없으면 윗자리에서 **받아내림**합니다.\n\n예: $503 - 267$\n- 일의 자리: $3 - 7$ → 못 빼므로 십의 자리에서 받아내림\n- 십의 자리가 $0$이므로 백의 자리에서 받아내림\n- $503 = 4(100) + 9(10) + 13(1)$\n- $13 - 7 = 6$, $9 - 6 = 3$, $4 - 2 = 2$\n\n답: $236$',
      type: 'definition',
    },
    {
      id: 'f1d2-c3',
      title: '검산하는 방법',
      content: '**덧셈의 검산:** 결과에서 한 수를 빼면 다른 수가 나와야 합니다.\n$367 + 458 = 825$ → $825 - 458 = 367$ ✓\n\n**뺄셈의 검산:** 결과에 뺀 수를 더하면 원래 수가 나와야 합니다.\n$503 - 267 = 236$ → $236 + 267 = 503$ ✓\n\n중학교에서 **등식의 성질**을 배울 때 이 원리가 사용됩니다!',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'fd2-p1',
      type: 'short-answer',
      difficulty: 'basic',
      question: '$748 + 365$를 계산하시오.',
      answer: '1113',
      explanation: '일의 자리: $8 + 5 = 13$ → $3$ 쓰고 $1$ 올림\n십의 자리: $4 + 6 + 1 = 11$ → $1$ 쓰고 $1$ 올림\n백의 자리: $7 + 3 + 1 = 11$\n\n답: $1113$',
    },
    {
      id: 'fd2-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: '$1000 - 387$을 계산하시오.',
      answer: '613',
      explanation: '$1000$에서 $387$을 빼려면 연속 받아내림이 필요합니다.\n$1000 = 0(100) + 9(10) + 10(1)$ → 아직 부족\n$1000 = 9(100) + 9(10) + 10(1)$\n\n$10 - 7 = 3$, $9 - 8 = 1$, $9 - 3 = 6$\n\n답: $613$',
    },
    {
      id: 'fd2-p3',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$256 + $☐$ = 500$일 때, ☐의 값은?',
      options: ['$234$', '$244$', '$254$', '$344$'],
      answer: '$244$',
      explanation: '☐ $= 500 - 256 = 244$\n\n검산: $256 + 244 = 500$ ✓',
    },
    {
      id: 'fd2-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '어떤 수에 $175$를 더해야 할 것을 잘못하여 빼었더니 $450$이 되었습니다. 바르게 계산한 답은?',
      options: ['$625$', '$700$', '$800$', '$275$'],
      answer: '$800$',
      explanation: '잘못한 계산: 어떤 수 $- 175 = 450$\n어떤 수 $= 450 + 175 = 625$\n\n바른 계산: $625 + 175 = 800$',
    },
    {
      id: 'fd2-p5',
      type: 'short-answer',
      difficulty: 'applied',
      question: '$A + B = 1200$이고 $A - B = 400$일 때, $A$의 값을 구하시오.',
      answer: '800',
      explanation: '두 식을 더하면: $(A + B) + (A - B) = 1200 + 400$\n$2A = 1600$\n$A = 800$\n\n이것은 중학교 **연립방정식**의 기초입니다!',
    },
    {
      id: 'fd2-p6',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '$\\overline{AB} + \\overline{BA} = 132$일 때, $A + B$의 값은? (여기서 $\\overline{AB}$는 두 자리 수)',
      options: ['$10$', '$11$', '$12$', '$13$'],
      answer: '$12$',
      explanation: '$\\overline{AB} = 10A + B$, $\\overline{BA} = 10B + A$\n\n$(10A + B) + (10B + A) = 132$\n$11A + 11B = 132$\n$11(A + B) = 132$\n$A + B = 12$',
    },
  ],
  realLifeExample: '마트에서 장을 볼 때 여러 물건의 가격을 더하고, 가진 돈에서 빼서 거스름돈을 계산하죠? 이런 덧셈·뺄셈 능력은 실생활의 기본입니다!',
};

export default dayContent;
