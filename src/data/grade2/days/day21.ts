import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 21,
  part: 3,
  title: '연립방정식 활용',
  subtitle: '연립방정식으로 다양한 실생활 문제를 해결하자!',
  lectures: [],
  concepts: [
    {
      id: 'g2d21-c1',
      title: '연립방정식 활용 문제 풀이 순서',
      content: '**① 미지수 정하기**: 구하려는 것을 $x$, $y$로 놓기\n**② 연립방정식 세우기**: 두 가지 조건을 식으로\n**③ 연립방정식 풀기**: 가감법 또는 대입법\n**④ 답 확인하기**: 문제 조건에 맞는지 확인',
      type: 'tip',
    },
    {
      id: 'g2d21-c2',
      title: '수에 관한 문제',
      content: '두 자리 자연수의 십의 자리 숫자가 $x$, 일의 자리 숫자가 $y$이면\n그 수는 $10x + y$로 나타냅니다.\n\n십의 자리와 일의 자리를 바꾼 수: $10y + x$\n\n예: 두 자리 수의 각 자릿수의 합이 9이고, 십의 자리와 일의 자리를 바꾸면 27이 커진다.\n$\\begin{cases} x + y = 9 \\\\ (10y + x) - (10x + y) = 27 \\end{cases}$\n정리: $\\begin{cases} x + y = 9 \\\\ -9x + 9y = 27 \\end{cases}$ → $x = 3$, $y = 6$ → 36',
      type: 'example',
    },
    {
      id: 'g2d21-c3',
      title: '거리/속력/시간 문제',
      content: '**거리 = 속력 $\\times$ 시간**\n\n올라갈 때 시속 $3$ km, 내려올 때 시속 $5$ km로 같은 길을 왕복하는 데 총 $4$시간이 걸렸다면?\n\n거리를 $d$ km로 놓으면:\n$\\frac{d}{3} + \\frac{d}{5} = 4$\n$\\frac{5d + 3d}{15} = 4$ → $d = 7.5$ km',
      type: 'example',
    },
    {
      id: 'g2d21-c4',
      title: '농도 문제',
      content: '**소금물 섞기**: 소금의 양의 합 = 섞은 후 소금의 양\n\n5% 소금물 $x$ g과 10% 소금물 $y$ g을 섞어 8% 소금물 500 g을 만들려면:\n$\\begin{cases} x + y = 500 \\\\ 0.05x + 0.1y = 0.08 \\times 500 \\end{cases}$\n$\\begin{cases} x + y = 500 \\\\ 5x + 10y = 4000 \\end{cases}$\n→ $x = 200$, $y = 300$',
      type: 'formula',
    },
  ],
  problems: [
    {
      id: 'g2d21-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '사과 3개와 배 2개의 값이 5,500원, 사과 2개와 배 3개의 값이 6,000원일 때, 사과 한 개의 가격은?',
      options: ['700원', '800원', '900원', '1,000원'],
      answer: '900원',
      explanation: '$\\begin{cases} 3x + 2y = 5500 \\\\ 2x + 3y = 6000 \\end{cases}$\n\n① $\\times 3$: $9x + 6y = 16500$\n② $\\times 2$: $4x + 6y = 12000$\n빼면: $5x = 4500$ → $x = 900$\n\n사과 한 개는 900원, 배 한 개는 1,150원',
    },
    {
      id: 'g2d21-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: '현재 아버지의 나이는 아들 나이의 3배이고, 10년 후에는 아들 나이의 2배가 됩니다. 현재 아들의 나이를 구하시오.',
      answer: '10',
      explanation: '아들의 나이: $x$, 아버지의 나이: $y$\n$\\begin{cases} y = 3x \\\\ y + 10 = 2(x + 10) \\end{cases}$\n\n②에 ①을 대입: $3x + 10 = 2x + 20$\n$x = 10$\n\n현재 아들은 10세, 아버지는 30세\n10년 후: 아들 20세, 아버지 40세 = $2 \\times 20$ ✓',
    },
    {
      id: 'g2d21-p3',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '두 자리 자연수에서 각 자릿수의 합이 11이고, 십의 자리와 일의 자리를 바꾸면 원래 수보다 9가 작아진다. 원래 수는?',
      options: ['56', '65', '74', '83'],
      answer: '65',
      explanation: '$\\begin{cases} x + y = 11 \\\\ (10y + x) = (10x + y) - 9 \\end{cases}$\n\n②: $10y + x = 10x + y - 9$ → $-9x + 9y = -9$ → $x - y = 1$\n\n$x + y = 11$, $x - y = 1$\n더하면: $2x = 12$ → $x = 6$, $y = 5$\n원래 수: 65',
    },
    {
      id: 'g2d21-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question: '8% 소금물 $x$ g과 3% 소금물 $y$ g을 섞어 5% 소금물 400 g을 만들려면, $x$는 얼마인가?',
      answer: '160',
      explanation: '$\\begin{cases} x + y = 400 \\\\ 0.08x + 0.03y = 0.05 \\times 400 \\end{cases}$\n\n$\\begin{cases} x + y = 400 \\\\ 8x + 3y = 2000 \\end{cases}$\n\n①에서 $y = 400 - x$, ②에 대입:\n$8x + 3(400 - x) = 2000$\n$8x + 1200 - 3x = 2000$\n$5x = 800$ → $x = 160$',
    },
    {
      id: 'g2d21-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: 'A 지점에서 B 지점까지 갈 때 시속 4 km로 걷고, 올 때 시속 6 km로 걸었더니 왕복 총 2시간 30분이 걸렸다. A에서 B까지의 거리는?',
      options: ['5 km', '6 km', '7 km', '8 km'],
      answer: '6 km',
      explanation: '거리를 $d$ km로 놓으면:\n$\\frac{d}{4} + \\frac{d}{6} = 2.5$\n\n양변에 12를 곱하면:\n$3d + 2d = 30$\n$5d = 30$ → $d = 6$\n\nA에서 B까지의 거리는 6 km',
    },
  ],
  realLifeExample: '편의점에서 음료수와 과자를 샀는데 영수증을 잃어버렸습니다. 단, 음료수 2개와 과자 1개에 3,500원, 음료수 1개와 과자 2개에 4,000원이라는 것을 기억한다면? 연립방정식으로 각각의 가격을 알 수 있습니다!',
};

export default dayContent;
