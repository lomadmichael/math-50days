import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 47,
  part: 7,
  title: '대푯값과 산포도',
  subtitle: '분산과 표준편차 구하기',
  lectures: [],
  concepts: [
    {
      id: 'g3d47-c1',
      title: '대푯값 복습',
      content: '• 평균: $\\overline{x} = \\frac{x_1 + x_2 + \\cdots + x_n}{n}$\\n• 중앙값: 자료를 크기순으로 나열했을 때 가운데 값\\n  - 자료 수가 홀수: 가운데 값\\n  - 자료 수가 짝수: 가운데 두 값의 평균\\n• 최빈값: 가장 많이 나타나는 값',
      type: 'definition',
    },
    {
      id: 'g3d47-c2',
      title: '분산과 표준편차',
      content: '편차: 각 자료값에서 평균을 뺀 값 $= x_i - \\overline{x}$\\n(편차의 합은 항상 $0$)\\n\\n분산: $\\sigma^2 = \\frac{(x_1 - \\overline{x})^2 + (x_2 - \\overline{x})^2 + \\cdots + (x_n - \\overline{x})^2}{n}$\\n= (편차의 제곱의 평균)\\n\\n표준편차: $\\sigma = \\sqrt{\\text{분산}}$',
      type: 'formula',
    },
    {
      id: 'g3d47-c3',
      title: '분산의 간편 공식',
      content: '분산 $= (x^2\\text{의 평균}) - (\\text{평균})^2$\\n$\\sigma^2 = \\frac{x_1^2 + x_2^2 + \\cdots + x_n^2}{n} - \\overline{x}^2$\\n\\n이 공식이 계산이 더 편리한 경우가 많습니다.',
      type: 'formula',
    },
    {
      id: 'g3d47-c4',
      title: '분산과 표준편차의 의미',
      content: '• 분산/표준편차가 크면: 자료가 평균에서 멀리 흩어져 있음\\n• 분산/표준편차가 작으면: 자료가 평균 주위에 모여 있음\\n• 표준편차의 단위는 원래 자료와 같음 (분산은 제곱 단위)\\n• 두 자료의 산포도를 비교할 때 표준편차를 사용',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'g3d47-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '자료 $2, 4, 6, 8, 10$의 평균은?',
      options: ['$5$', '$6$', '$7$', '$8$'],
      answer: '$6$',
      explanation: '평균 $= \\frac{2+4+6+8+10}{5} = \\frac{30}{5} = 6$.',
    },
    {
      id: 'g3d47-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '자료 $3, 5, 7, 9, 11$에서 각 편차의 합은?',
      options: ['$0$', '$5$', '$7$', '$35$'],
      answer: '$0$',
      explanation: '편차의 합은 항상 $0$입니다. 평균 $= 7$. $(-4)+(-2)+0+2+4 = 0$.',
    },
    {
      id: 'g3d47-p3',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '자료 $1, 3, 5, 7, 9$의 분산은?',
      options: ['$4$', '$6$', '$8$', '$10$'],
      answer: '$8$',
      explanation: '평균 $= 5$. 편차: $-4, -2, 0, 2, 4$. 분산 $= \\frac{16+4+0+4+16}{5} = \\frac{40}{5} = 8$.',
    },
    {
      id: 'g3d47-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '자료 $4, 4, 4, 4, 4$의 표준편차는?',
      options: ['$0$', '$4$', '$1$', '$2$'],
      answer: '$0$',
      explanation: '모든 값이 같으면 평균과 모든 편차가 $0$이므로 분산 $= 0$, 표준편차 $= 0$.',
    },
    {
      id: 'g3d47-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '자료 $a$, $b$, $c$의 평균이 $5$이고 분산이 $2$일 때, $a^2 + b^2 + c^2$의 값은?',
      options: ['$75$', '$81$', '$77$', '$79$'],
      answer: '$81$',
      explanation: '분산 $= \\frac{a^2+b^2+c^2}{3} - 5^2 = 2$. $\\frac{a^2+b^2+c^2}{3} = 27$. $a^2+b^2+c^2 = 81$.',
    },
  ],
  realLifeExample: '학급 시험 성적의 표준편차가 크면 학생 간 실력 차이가 크다는 의미이고, 작으면 비슷한 수준이라는 의미입니다. 학교에서는 이를 통해 수준별 수업의 필요성을 판단합니다.',
};

export default dayContent;
