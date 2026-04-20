import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 2,
  part: 1,
  title: '유리수와 순환소수 (2)',
  subtitle: '순환소수를 분수로 변환하는 마법의 공식을 익히자!',
  lectures: [],
  concepts: [
    {
      id: 'g2d2-c1',
      title: '순환소수 → 분수 변환 (기본 원리)',
      content: '순환소수를 $x$로 놓고, 순환마디만큼 10의 거듭제곱을 곱하여 빼는 방법입니다.\n\n예: $x = 0.\\dot{3}$일 때\n$10x = 3.\\dot{3}$\n$10x - x = 3.\\dot{3} - 0.\\dot{3}$\n$9x = 3$\n$x = \\frac{3}{9} = \\frac{1}{3}$',
      type: 'formula',
    },
    {
      id: 'g2d2-c2',
      title: '순환마디가 두 자리 이상인 경우',
      content: '순환마디가 $n$자리이면 $10^n$을 곱합니다.\n\n예: $x = 0.\\dot{1}\\dot{2}$ (순환마디 12, 2자리)\n$100x = 12.\\dot{1}\\dot{2}$\n$100x - x = 12$\n$99x = 12$\n$x = \\frac{12}{99} = \\frac{4}{33}$',
      type: 'example',
    },
    {
      id: 'g2d2-c3',
      title: '순환하지 않는 부분이 있는 경우',
      content: '순환하지 않는 부분과 순환마디가 함께 있을 때:\n\n예: $x = 0.1\\dot{6}$ (순환마디 6)\n$10x = 1.\\dot{6}$\n$100x = 16.\\dot{6}$\n$100x - 10x = 16.\\dot{6} - 1.\\dot{6} = 15$\n$90x = 15$\n$x = \\frac{15}{90} = \\frac{1}{6}$',
      type: 'formula',
    },
    {
      id: 'g2d2-c4',
      title: '빠른 변환 공식',
      content: '**순환소수 → 분수 빠른 공식**\n\n$0.\\dot{a}\\dot{b} = \\frac{ab}{99}$, $0.\\dot{a}\\dot{b}\\dot{c} = \\frac{abc}{999}$\n\n순환하지 않는 부분이 있으면:\n$0.a\\dot{b}\\dot{c} = \\frac{abc - a}{990}$\n\n분모: 순환마디 자릿수만큼 9, 순환하지 않는 자릿수만큼 0',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'g2d2-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '순환소수 $0.\\dot{7}$을 분수로 나타내면?',
      options: ['$\\frac{7}{10}$', '$\\frac{7}{9}$', '$\\frac{7}{99}$', '$\\frac{7}{90}$'],
      answer: '$\\frac{7}{9}$',
      explanation: '$x = 0.\\dot{7}$로 놓으면\n$10x = 7.\\dot{7}$\n$10x - x = 7$\n$9x = 7$\n$x = \\frac{7}{9}$',
    },
    {
      id: 'g2d2-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: '순환소수 $0.\\dot{2}\\dot{7}$을 기약분수로 나타내시오. (분자/분모 형태로 답하시오)',
      answer: '3/11',
      explanation: '$x = 0.\\dot{2}\\dot{7}$\n$100x = 27.\\dot{2}\\dot{7}$\n$100x - x = 27$\n$99x = 27$\n$x = \\frac{27}{99} = \\frac{3}{11}$',
    },
    {
      id: 'g2d2-p3',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$0.\\dot{1}2\\dot{3}$의 순환마디는?',
      options: ['1', '12', '123', '23'],
      answer: '123',
      explanation: '$0.\\dot{1}2\\dot{3} = 0.123123123...$\n\n순환마디의 양 끝에 점이 찍혀 있으므로, 순환마디는 123입니다.',
    },
    {
      id: 'g2d2-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question: '$0.2\\dot{3}$을 기약분수로 나타내시오. (분자/분모 형태로 답하시오)',
      answer: '7/30',
      explanation: '$x = 0.2\\dot{3}$\n$10x = 2.\\dot{3}$\n$100x = 23.\\dot{3}$\n$100x - 10x = 21$\n$90x = 21$\n$x = \\frac{21}{90} = \\frac{7}{30}$',
    },
    {
      id: 'g2d2-p5',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$1.\\dot{5}$를 분수로 나타내면?',
      options: ['$\\frac{14}{9}$', '$\\frac{15}{9}$', '$\\frac{5}{9}$', '$\\frac{15}{10}$'],
      answer: '$\\frac{14}{9}$',
      explanation: '$x = 1.\\dot{5}$\n$10x = 15.\\dot{5}$\n$10x - x = 14$\n$9x = 14$\n$x = \\frac{14}{9}$',
    },
    {
      id: 'g2d2-p6',
      type: 'short-answer',
      difficulty: 'challenge',
      question: '$0.\\dot{9}$를 분수로 나타내면 얼마인가?',
      answer: '1',
      explanation: '$x = 0.\\dot{9}$\n$10x = 9.\\dot{9}$\n$10x - x = 9$\n$9x = 9$\n$x = 1$\n\n놀랍게도 $0.\\dot{9} = 1$입니다! 이것은 수학에서 유명한 결과입니다.',
    },
  ],
  realLifeExample: '피자를 3명이 똑같이 나눠 먹으면 한 사람 몫은 $\\frac{1}{3} = 0.\\dot{3}$입니다. 반대로 계산기에서 0.333...이라는 소수가 나왔다면, 이것은 정확히 $\\frac{1}{3}$이라는 분수를 의미합니다.',
};

export default dayContent;
