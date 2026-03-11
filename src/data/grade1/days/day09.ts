import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 9,
  part: 2,
  title: '유리수의 사칙연산',
  subtitle: '분수의 덧셈, 뺄셈, 곱셈, 나눗셈을 정수의 부호 규칙과 함께 마스터하자!',
  lectures: [
    {
      lectureNumber: 2,
      youtubeVideoId: '',
      title: '02강 다항식 [유형01-03~유형01-04]',
      description: '이 강의에서 분수 연산 부분을 시청하세요',
    },
  ],
  concepts: [
    {
      id: 'g1d9-c1',
      title: '유리수의 덧셈과 뺄셈',
      content: '정수의 부호 규칙 + 분수 계산을 합치면 됩니다!\n\n**같은 부호**: 절댓값을 더하고 공통 부호\n$\\frac{2}{3} + \\frac{1}{4} = \\frac{8}{12} + \\frac{3}{12} = \\frac{11}{12}$\n\n**다른 부호**: 절댓값의 차, 큰 쪽 부호\n$\\frac{2}{3} + (-\\frac{5}{6}) = \\frac{4}{6} - \\frac{5}{6} = -\\frac{1}{6}$\n\n**뺄셈**: 부호 바꿔서 더하기!\n$\\frac{1}{2} - \\frac{3}{4} = \\frac{1}{2} + (-\\frac{3}{4}) = -\\frac{1}{4}$',
      type: 'formula',
    },
    {
      id: 'g1d9-c2',
      title: '유리수의 곱셈',
      content: '**분자끼리 곱하고, 분모끼리 곱한다!**\n\n$\\frac{a}{b} \\times \\frac{c}{d} = \\frac{a \\times c}{b \\times d}$\n\n부호는 정수와 같은 규칙:\n$\\frac{2}{3} \\times (-\\frac{3}{4}) = -\\frac{6}{12} = -\\frac{1}{2}$\n\n**팁**: 약분을 먼저 하면 계산이 쉬워요!\n$\\frac{2}{3} \\times \\frac{3}{4} = \\frac{\\cancel{2}}{\\cancel{3}} \\times \\frac{\\cancel{3}}{\\cancel{4}_2} = \\frac{1}{2}$',
      type: 'formula',
    },
    {
      id: 'g1d9-c3',
      title: '유리수의 나눗셈 (역수)',
      content: '**역수**: 곱해서 1이 되는 수\n$\\frac{a}{b}$의 역수 = $\\frac{b}{a}$\n\n예: $\\frac{3}{4}$의 역수 = $\\frac{4}{3}$\n$-2$의 역수 = $-\\frac{1}{2}$\n\n**나눗셈 = 역수를 곱하기!**\n$\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c}$\n\n예: $\\frac{2}{3} \\div (-\\frac{4}{5}) = \\frac{2}{3} \\times (-\\frac{5}{4}) = -\\frac{10}{12} = -\\frac{5}{6}$',
      type: 'formula',
    },
    {
      id: 'g1d9-c4',
      title: '혼합 계산 순서',
      content: '여러 연산이 섞였을 때 계산 순서:\n\n1. **괄호** 안을 먼저\n2. **거듭제곱** 계산\n3. **곱셈·나눗셈** (왼쪽부터)\n4. **덧셈·뺄셈** (왼쪽부터)\n\n예: $\\frac{1}{2} + \\frac{2}{3} \\times (-\\frac{3}{4})$\n$= \\frac{1}{2} + (-\\frac{1}{2})$  (곱셈 먼저)\n$= 0$',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'g1d9-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$\\frac{3}{4} + (-\\frac{1}{2})$의 값은?',
      options: ['$\\frac{1}{4}$', '$-\\frac{1}{4}$', '$\\frac{5}{4}$', '$\\frac{1}{2}$'],
      answer: '$\\frac{1}{4}$',
      explanation: '$\\frac{3}{4} + (-\\frac{1}{2}) = \\frac{3}{4} - \\frac{2}{4} = \\frac{1}{4}$',
    },
    {
      id: 'g1d9-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$(-\\frac{2}{3}) \\times \\frac{9}{4}$의 값은?',
      options: ['$-\\frac{3}{2}$', '$\\frac{3}{2}$', '$-\\frac{2}{3}$', '$\\frac{2}{3}$'],
      answer: '$-\\frac{3}{2}$',
      explanation: '$(-\\frac{2}{3}) \\times \\frac{9}{4} = -\\frac{18}{12} = -\\frac{3}{2}$\n\n(약분: $\\frac{2}{3} \\times \\frac{9}{4} = \\frac{2 \\times 9}{3 \\times 4} = \\frac{18}{12} = \\frac{3}{2}$, 부호: $-$)',
    },
    {
      id: 'g1d9-p3',
      type: 'short-answer',
      difficulty: 'basic',
      question: '$\\frac{5}{6} \\div (-\\frac{5}{3})$의 값을 분수로 나타내시오.',
      answer: '-1/2',
      explanation: '$\\frac{5}{6} \\div (-\\frac{5}{3}) = \\frac{5}{6} \\times (-\\frac{3}{5})$\n$= -\\frac{15}{30} = -\\frac{1}{2}$',
    },
    {
      id: 'g1d9-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question: '$(-\\frac{1}{2})^2 \\times 4 - \\frac{1}{3}$의 값을 분수로 나타내시오.',
      answer: '2/3',
      explanation: '$(-\\frac{1}{2})^2 = \\frac{1}{4}$\n\n$\\frac{1}{4} \\times 4 = 1$\n\n$1 - \\frac{1}{3} = \\frac{2}{3}$',
    },
    {
      id: 'g1d9-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '$\\frac{1}{2} \\times (-\\frac{2}{3}) + \\frac{1}{3} \\times (-\\frac{2}{3})$을 분배법칙으로 간단히 계산하면?',
      options: ['$-\\frac{5}{9}$', '$-\\frac{1}{3}$', '$\\frac{5}{9}$', '$-\\frac{2}{9}$'],
      answer: '$-\\frac{5}{9}$',
      explanation: '분배법칙 역이용:\n$= (-\\frac{2}{3}) \\times (\\frac{1}{2} + \\frac{1}{3})$\n$= (-\\frac{2}{3}) \\times \\frac{5}{6}$\n$= -\\frac{10}{18} = -\\frac{5}{9}$',
    },
  ],
  realLifeExample: '요리할 때 레시피에 "설탕 $\\frac{3}{4}$컵"이라 되어있는데 반만 만들고 싶다면? $\\frac{3}{4} \\times \\frac{1}{2} = \\frac{3}{8}$컵! 유리수의 곱셈이 일상에서 바로 쓰이는 예시입니다.',
};

export default dayContent;
