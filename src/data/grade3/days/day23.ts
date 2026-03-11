import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 23,
  part: 4,
  title: '이차함수 $y=ax^2$의 그래프',
  subtitle: '포물선의 기본형과 성질',
  lectures: [],
  concepts: [
    {
      id: 'g3d23-c1',
      title: '이차함수의 정의',
      content: '$y = ax^2 + bx + c$ ($a \\\\neq 0$) 꼴의 함수를 이차함수라 합니다.\\n\\n가장 기본적인 형태: $y = ax^2$\\n이차함수의 그래프는 포물선입니다.',
      type: 'definition',
    },
    {
      id: 'g3d23-c2',
      title: '$y = ax^2$의 그래프 성질',
      content: '꼭짓점: 원점 $(0, 0)$\\n대칭축: $y$축 (직선 $x = 0$)\\n\\n$a > 0$: 아래로 볼록 (∪ 모양), 위로 열림\\n$a < 0$: 위로 볼록 (∩ 모양), 아래로 열림\\n\\n$|a|$가 클수록 그래프의 폭이 좁아짐 (급경사)\\n$|a|$가 작을수록 그래프의 폭이 넓어짐 (완만)',
      type: 'formula',
    },
    {
      id: 'g3d23-c3',
      title: '$y = ax^2$과 $y = -ax^2$의 관계',
      content: '$y = ax^2$의 그래프와 $y = -ax^2$의 그래프는 $x$축에 대하여 대칭입니다.\\n\\n예: $y = 2x^2$ ↔ $y = -2x^2$는 $x$축 대칭\\n둘 다 꼭짓점은 원점, 대칭축은 $y$축이지만\\n열리는 방향이 반대입니다.',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'g3d23-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$y = 3x^2$의 그래프에 대한 설명으로 옳은 것은?',
      options: ['위로 볼록', '꼭짓점이 $(3, 0)$', '아래로 볼록', '대칭축이 $x$축'],
      answer: '아래로 볼록',
      explanation: '$a = 3 > 0$이므로 아래로 볼록(위로 열림)합니다. 꼭짓점은 원점, 대칭축은 $y$축입니다.',
    },
    {
      id: 'g3d23-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$y = -\\\\frac{1}{2}x^2$의 그래프에 대한 설명으로 옳은 것은?',
      options: ['아래로 볼록', '위로 볼록', '꼭짓점이 $(0, -\\\\frac{1}{2})$', '대칭축이 $x = -\\\\frac{1}{2}$'],
      answer: '위로 볼록',
      explanation: '$a = -\\\\frac{1}{2} < 0$이므로 위로 볼록(아래로 열림)합니다.',
    },
    {
      id: 'g3d23-p3',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$y = ax^2$의 그래프가 점 $(2, 12)$를 지날 때, $a$의 값은?',
      options: ['$2$', '$3$', '$4$', '$6$'],
      answer: '$3$',
      explanation: '$12 = a \\\\times 2^2 = 4a$이므로 $a = 3$입니다.',
    },
    {
      id: 'g3d23-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '다음 중 그래프의 폭이 가장 좁은 것은?',
      options: ['$y = x^2$', '$y = 2x^2$', '$y = \\\\frac{1}{3}x^2$', '$y = -5x^2$'],
      answer: '$y = -5x^2$',
      explanation: '$|a|$가 가장 큰 것이 폭이 가장 좁습니다. $|{-5}| = 5$가 가장 크므로 $y = -5x^2$입니다.',
    },
    {
      id: 'g3d23-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '$y = ax^2$의 그래프가 점 $(-3, -18)$을 지날 때, $y = -ax^2$의 그래프가 지나는 점은?',
      options: ['$(1, 2)$', '$(1, -2)$', '$(2, -8)$', '$(2, 8)$'],
      answer: '$(2, 8)$',
      explanation: '$-18 = 9a$에서 $a = -2$. $y = -ax^2 = 2x^2$이므로 $x=2$일 때 $y = 8$. 점 $(2, 8)$을 지납니다.',
    },
    {
      id: 'g3d23-p6',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '$y = 2x^2$ 위의 점 중 $x$좌표와 $y$좌표가 같은 점의 좌표는? (원점 제외)',
      options: ['$(1, 1)$', '$(2, 2)$', '$(\\\\frac{1}{2}, \\\\frac{1}{2})$', '$(\\\\frac{1}{4}, \\\\frac{1}{4})$'],
      answer: '$(\\\\frac{1}{2}, \\\\frac{1}{2})$',
      explanation: '$y = 2x^2$에서 $x = 2x^2$, $2x^2 - x = 0$, $x(2x-1) = 0$이므로 $x = \\\\frac{1}{2}$ (원점 제외). $y = 2 \\\\times \\\\frac{1}{4} = \\\\frac{1}{2}$.',
    },
  ],
  realLifeExample: '분수의 물줄기는 포물선 모양입니다. 물줄기의 높이를 $y = -0.5x^2 + 2x$로 모델링할 수 있으며, $a$의 절댓값이 클수록 물줄기가 좁고 높아집니다. 분수 디자이너는 이차함수의 $a$ 값을 조절하여 원하는 물줄기 형태를 만듭니다.',
};

export default dayContent;
