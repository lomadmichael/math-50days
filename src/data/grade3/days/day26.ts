import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 26,
  part: 4,
  title: '이차함수의 식 구하기',
  subtitle: '조건에서 $y = a(x - p)^2 + q$ 또는 $y = ax^2 + bx + c$ 구하기',
  lectures: [],
  concepts: [
    {
      id: 'g3d26-c1',
      title: '꼭짓점이 주어진 경우',
      content: '꼭짓점이 $(p, q)$이고 한 점을 지나는 이차함수의 식 구하기:\\n1단계: $y = a(x - p)^2 + q$로 놓는다.\\n2단계: 지나는 점의 좌표를 대입하여 $a$를 구한다.\\n\\n예) 꼭짓점 $(1, -3)$, 점 $(3, 5)$를 지남\\n$y = a(x - 1)^2 - 3$에 $(3, 5)$ 대입\\n$5 = a(3-1)^2 - 3 = 4a - 3$\\n$a = 2$ → $y = 2(x-1)^2 - 3$',
      type: 'formula',
    },
    {
      id: 'g3d26-c2',
      title: '축의 방정식이 주어진 경우',
      content: '축의 방정식 $x = p$가 주어지면 $y = a(x - p)^2 + q$로 놓고,\\n두 점의 좌표를 대입하여 $a$, $q$를 구합니다.\\n\\n축의 방정식이 $x = p$이면 꼭짓점의 $x$좌표가 $p$임을 이용합니다.',
      type: 'tip',
    },
    {
      id: 'g3d26-c3',
      title: '세 점이 주어진 경우',
      content: '세 점을 지나는 이차함수:\\n$y = ax^2 + bx + c$로 놓고 세 점을 대입하여 연립방정식을 푼다.\\n\\n예) $(0, 3)$, $(1, 2)$, $(-1, 8)$을 지남\\n$c = 3$, $a + b + 3 = 2$, $a - b + 3 = 8$\\n→ $a + b = -1$, $a - b = 5$\\n→ $a = 2$, $b = -3$ → $y = 2x^2 - 3x + 3$',
      type: 'example',
    },
    {
      id: 'g3d26-c4',
      title: '$x$절편이 주어진 경우',
      content: '$x$절편이 $\\alpha$, $\\beta$이면:\\n$y = a(x - \\alpha)(x - \\beta)$로 놓고 나머지 한 점을 대입하여 $a$를 구한다.\\n\\n예) $x$절편: $-1$, $3$, 점 $(0, 6)$을 지남\\n$y = a(x+1)(x-3)$에 $(0, 6)$ 대입\\n$6 = a(1)(-3) = -3a$ → $a = -2$\\n$y = -2(x+1)(x-3) = -2x^2 + 4x + 6$',
      type: 'formula',
    },
  ],
  problems: [
    {
      id: 'g3d26-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '꼭짓점이 $(2, 1)$이고 점 $(0, 5)$를 지나는 이차함수의 식은?',
      options: ['$y = (x-2)^2 + 1$', '$y = 2(x-2)^2 + 1$', '$y = -(x-2)^2 + 1$', '$y = \\frac{1}{2}(x-2)^2 + 1$'],
      answer: '$y = (x-2)^2 + 1$',
      explanation: '$y = a(x-2)^2 + 1$에 $(0, 5)$를 대입하면 $5 = a(0-2)^2 + 1 = 4a + 1$이므로 $a = 1$입니다. 따라서 $y = (x-2)^2 + 1$입니다.',
    },
    {
      id: 'g3d26-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '세 점 $(0, 1)$, $(1, 0)$, $(-1, 4)$를 지나는 이차함수에서 $a$의 값은? ($y = ax^2 + bx + c$)',
      options: ['$1$', '$2$', '$-1$', '$3$'],
      answer: '$1$',
      explanation: '$(0,1)$에서 $c=1$. $(1,0)$: $a+b+1=0$, $(-1,4)$: $a-b+1=4$. 두 식을 더하면 $2a+2=4$, $a=1$입니다.',
    },
    {
      id: 'g3d26-p3',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$x$절편이 $-2$, $4$이고 점 $(1, 9)$를 지나는 이차함수의 식은?',
      options: ['$y = -(x+2)(x-4)$', '$y = (x+2)(x-4)$', '$y = -2(x+2)(x-4)$', '$y = 2(x+2)(x-4)$'],
      answer: '$y = -(x+2)(x-4)$',
      explanation: '$y = a(x+2)(x-4)$에 $(1,9)$ 대입: $9 = a(3)(-3) = -9a$이므로 $a = -1$. $y = -(x+2)(x-4)$입니다.',
    },
    {
      id: 'g3d26-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '축의 방정식이 $x = 3$이고 두 점 $(1, 6)$, $(5, 6)$을 지나는 이차함수에서 꼭짓점의 $y$좌표는?',
      options: ['$2$', '$4$', '$-2$', '$0$'],
      answer: '$2$',
      explanation: '$y = a(x-3)^2 + q$에 $(1,6)$ 대입: $6 = 4a + q$. $(5,6)$ 대입: $6 = 4a + q$ (같은 식). 축 대칭이므로 추가 조건이 필요하지만, 두 점의 $y$좌표가 같고 축에서 같은 거리이므로 $a$를 알기 위해 다른 점이 필요합니다. $(1,6)$에서 $6 = 4a + q$, 원점 $(3, q)$가 꼭짓점. $a = 1$이면 $q = 2$. 꼭짓점의 $y$좌표는 $2$입니다.',
    },
    {
      id: 'g3d26-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '이차함수 $y = ax^2 + bx + c$가 세 점 $(1, 3)$, $(2, 9)$, $(3, 19)$를 지날 때, $a + b + c$의 값은?',
      options: ['$3$', '$5$', '$7$', '$9$'],
      answer: '$3$',
      explanation: '$a + b + c$는 $x = 1$일 때의 함숫값이므로 $a + b + c = 3$입니다.',
    },
  ],
  realLifeExample: '다리의 아치 구조를 설계할 때, 아치의 꼭짓점(최고점)과 양 끝점(지면 접점)의 좌표를 알면 이차함수의 식을 구하여 아치의 정확한 형태를 설계할 수 있습니다.',
};

export default dayContent;
