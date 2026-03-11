import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 20,
  part: 4,
  title: '약분과 통분 완전정복',
  subtitle: '약분과 통분을 자유자재로! 중학교 분수식 계산의 기초를 완성해요.',
  lectures: [],
  concepts: [
    {
      id: 'f4d20-c1',
      title: '약분',
      content: '분자와 분모를 **같은 수로 나누는** 것이 **약분**입니다.\n\n$\\frac{24}{36}$을 약분:\n$\\frac{24}{36} = \\frac{24 \\div 2}{36 \\div 2} = \\frac{12}{18} = \\frac{12 \\div 6}{18 \\div 6} = \\frac{2}{3}$\n\n한 번에 최대공약수로 나누면 바로 **기약분수**:\n$\\gcd(24, 36) = 12$\n$\\frac{24}{36} = \\frac{24 \\div 12}{36 \\div 12} = \\frac{2}{3}$\n\n**기약분수**: 더 이상 약분할 수 없는 분수',
      type: 'definition',
    },
    {
      id: 'f4d20-c2',
      title: '통분',
      content: '분모가 다른 분수들의 **분모를 같게 만드는** 것이 **통분**입니다.\n\n$\\frac{5}{12}$와 $\\frac{7}{18}$을 통분:\n$\\text{lcm}(12, 18) = 36$\n\n$\\frac{5}{12} = \\frac{5 \\times 3}{12 \\times 3} = \\frac{15}{36}$\n$\\frac{7}{18} = \\frac{7 \\times 2}{18 \\times 2} = \\frac{14}{36}$\n\n이제 비교 가능: $\\frac{15}{36} > \\frac{14}{36}$',
      type: 'formula',
    },
    {
      id: 'f4d20-c3',
      title: '약분과 통분의 활용',
      content: '**약분 활용 → 분수의 곱셈·나눗셈 간소화**\n$\\frac{8}{15} \\times \\frac{5}{12}$ → 미리 약분: $\\frac{2}{3} \\times \\frac{1}{3} = \\frac{2}{9}$\n\n**통분 활용 → 분수의 덧셈·뺄셈**\n$\\frac{5}{12} + \\frac{7}{18} = \\frac{15}{36} + \\frac{14}{36} = \\frac{29}{36}$\n\n중학교에서는 $\\frac{a}{b} + \\frac{c}{d} = \\frac{ad + bc}{bd}$ 공식도 사용합니다.',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'fd20-p1',
      type: 'short-answer',
      difficulty: 'basic',
      question: '$\\frac{42}{56}$을 기약분수로 나타내시오.',
      answer: '3/4',
      explanation: '$\\gcd(42, 56) = 14$\n\n$\\frac{42}{56} = \\frac{42 \\div 14}{56 \\div 14} = \\frac{3}{4}$',
    },
    {
      id: 'fd20-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$\\frac{5}{8}$과 $\\frac{7}{12}$를 통분했을 때 공통 분모는?',
      options: ['$96$', '$24$', '$48$', '$20$'],
      answer: '$24$',
      explanation: '$\\text{lcm}(8, 12) = 24$\n\n$\\frac{5}{8} = \\frac{15}{24}$, $\\frac{7}{12} = \\frac{14}{24}$',
    },
    {
      id: 'fd20-p3',
      type: 'short-answer',
      difficulty: 'basic',
      question: '$\\frac{5}{8} + \\frac{7}{12}$를 계산하시오. (대분수로)',
      answer: '1 5/24',
      explanation: '통분 (공통 분모 $24$):\n$\\frac{5}{8} = \\frac{15}{24}$, $\\frac{7}{12} = \\frac{14}{24}$\n\n$\\frac{15}{24} + \\frac{14}{24} = \\frac{29}{24} = 1\\frac{5}{24}$',
    },
    {
      id: 'fd20-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$\\frac{18}{45}$, $\\frac{24}{60}$, $\\frac{14}{35}$ 중 기약분수로 바꾸었을 때 같은 값인 것끼리 짝지은 것은?',
      options: [
        '세 분수 모두 같다',
        '$\\frac{18}{45}$와 $\\frac{24}{60}$만 같다',
        '$\\frac{18}{45}$와 $\\frac{14}{35}$만 같다',
        '모두 다르다',
      ],
      answer: '세 분수 모두 같다',
      explanation: '$\\frac{18}{45} = \\frac{2}{5}$ ($\\gcd = 9$)\n$\\frac{24}{60} = \\frac{2}{5}$ ($\\gcd = 12$)\n$\\frac{14}{35} = \\frac{2}{5}$ ($\\gcd = 7$)\n\n세 분수 모두 $\\frac{2}{5}$로 같습니다!',
    },
    {
      id: 'fd20-p5',
      type: 'short-answer',
      difficulty: 'applied',
      question: '$\\frac{7}{15} - \\frac{3}{10} + \\frac{1}{6}$을 계산하시오. (기약분수로)',
      answer: '1/3',
      explanation: '$\\text{lcm}(15, 10, 6) = 30$\n\n$\\frac{7}{15} = \\frac{14}{30}$, $\\frac{3}{10} = \\frac{9}{30}$, $\\frac{1}{6} = \\frac{5}{30}$\n\n$\\frac{14}{30} - \\frac{9}{30} + \\frac{5}{30} = \\frac{10}{30} = \\frac{1}{3}$',
    },
    {
      id: 'fd20-p6',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '$\\frac{a}{24}$가 기약분수가 되려면 $a$($1 \\leq a \\leq 23$)가 될 수 있는 값의 개수는?',
      options: ['$6$개', '$8$개', '$10$개', '$12$개'],
      answer: '$8$개',
      explanation: '$\\frac{a}{24}$가 기약분수 → $\\gcd(a, 24) = 1$\n\n$24 = 2^3 \\times 3$이므로 $a$는 $2$와 $3$의 배수가 아니어야 합니다.\n\n$1$~$23$ 중 $2$의 배수도 $3$의 배수도 아닌 수:\n$1, 5, 7, 11, 13, 17, 19, 23$ → $8$개\n\n이것을 **오일러 함수** $\\phi(24) = 8$이라 합니다.',
    },
  ],
  realLifeExample: '레시피에서 밀가루 3/4컵, 설탕 2/3컵, 버터 5/8컵을 섞으려면? 통분해서 같은 단위로 맞춘 뒤 계산하면 정확한 양을 알 수 있어요!',
};

export default dayContent;
