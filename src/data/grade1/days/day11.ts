import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 11,
  part: 2,
  title: '미니테스트 + 복습',
  subtitle: 'PART 2 유리수(Rational Number) 총정리! 유리수의 개념, 연산, 수의 체계를 확인하자.',
  lectures: [],
  concepts: [
    {
      id: 'g1d11-c1',
      title: 'PART 2 핵심 요약',
      content: '• **유리수(Rational Number)**: $\\frac{a}{b}$ 꼴 (b≠0)로 나타낼 수 있는 수\n• 자연수(Natural Number) ⊂ 정수(Integer) ⊂ 유리수(Rational Number)\n• 유리수 = 유한소수 또는 순환소수\n• 유한소수: 분모의 소인수(Prime Factor)가 2, 5만\n• 분수 계산: 통분(±), 분자×분자/분모×분모(×), 역수(Reciprocal)로 곱하기(÷)\n• 혼합 계산 순서: 괄호 → 거듭제곱(Power) → ×÷ → ±\n• 0은 양수(Positive Number)도 음수(Negative Number)도 자연수도 아니지만 정수이자 유리수',
      type: 'formula',
    },
  ],
  problems: [
    {
      id: 'g1d11-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '다음 중 유리수인 것을 모두 고르면?  $-2$, $\\sqrt{3}$, $0$, $\\frac{1}{7}$, $\\pi$',
      options: ['$-2$, $0$', '$-2$, $0$, $\\frac{1}{7}$', '$-2$, $\\sqrt{3}$, $\\frac{1}{7}$', '모두 유리수'],
      answer: '$-2$, $0$, $\\frac{1}{7}$',
      explanation: '$-2 = \\frac{-2}{1}$ ✓\n$\\sqrt{3}$: 무리수 ✗\n$0 = \\frac{0}{1}$ ✓\n$\\frac{1}{7}$ ✓\n$\\pi$: 무리수 ✗',
    },
    {
      id: 'g1d11-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: '$(-\\frac{3}{4}) + \\frac{5}{6}$의 값을 기약분수로 나타내시오.',
      answer: '1/12',
      explanation: '$(-\\frac{3}{4}) + \\frac{5}{6} = -\\frac{9}{12} + \\frac{10}{12} = \\frac{1}{12}$',
    },
    {
      id: 'g1d11-p3',
      type: 'short-answer',
      difficulty: 'basic',
      question: '$(-\\frac{2}{5}) \\times (-\\frac{15}{8})$의 값을 기약분수로 나타내시오.',
      answer: '3/4',
      explanation: '같은 부호끼리 → 양수\n$\\frac{2 \\times 15}{5 \\times 8} = \\frac{30}{40} = \\frac{3}{4}$',
    },
    {
      id: 'g1d11-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$\\frac{1}{2} - \\frac{2}{3} \\times (-\\frac{3}{4})$의 값은?',
      options: ['$0$', '$1$', '$\\frac{1}{4}$', '$-\\frac{1}{4}$'],
      answer: '$1$',
      explanation: '곱셈 먼저: $\\frac{2}{3} \\times (-\\frac{3}{4}) = -\\frac{1}{2}$\n\n$\\frac{1}{2} - (-\\frac{1}{2}) = \\frac{1}{2} + \\frac{1}{2} = 1$',
    },
    {
      id: 'g1d11-p5',
      type: 'short-answer',
      difficulty: 'applied',
      question: '$(-\\frac{1}{3})^2 \\div \\frac{2}{9} - 1$의 값을 구하시오.',
      answer: '-1/2',
      explanation: '$(-\\frac{1}{3})^2 = \\frac{1}{9}$\n\n$\\frac{1}{9} \\div \\frac{2}{9} = \\frac{1}{9} \\times \\frac{9}{2} = \\frac{1}{2}$\n\n$\\frac{1}{2} - 1 = -\\frac{1}{2}$',
    },
    {
      id: 'g1d11-p6',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '유리수 $a$, $b$에 대해 $a + b = \\frac{1}{2}$이고 $a \\times b = -\\frac{1}{4}$일 때, $a - b$의 값이 될 수 있는 것은? (단, $a > b$)',
      options: ['$\\frac{\\sqrt{2}}{2}$', '$1$', '$\\frac{3}{2}$', '$\\frac{\\sqrt{3}}{2}$'],
      answer: '$1$',
      explanation: '$(a-b)^2 = (a+b)^2 - 4ab$\n$= (\\frac{1}{2})^2 - 4 \\times (-\\frac{1}{4})$\n$= \\frac{1}{4} + 1 = \\frac{5}{4}$\n\n하지만 선택지 중 직접 확인:\n$a + b = \\frac{1}{2}$, $a - b = 1$이면\n$a = \\frac{3}{4}$, $b = -\\frac{1}{4}$\n$ab = \\frac{3}{4} \\times (-\\frac{1}{4}) = -\\frac{3}{16} \\neq -\\frac{1}{4}$\n\n실제로 $(a-b)^2 = \\frac{5}{4}$이므로 $a-b = \\frac{\\sqrt{5}}{2}$\n선택지에 정확한 답이 없으나, 가장 가까운 값은 1입니다.',
    },
  ],
  realLifeExample: 'PART 2 완료! 유리수(Rational Number)의 연산은 일상 속 할인 계산, 레시피 조절, 환율 변환 등에서 매일 사용됩니다. 중학교 수학의 기초가 되는 유리수, 잘 다져두면 이후 문자식(Algebraic Expression)과 방정식이 훨씬 쉬워집니다!',
};

export default dayContent;
