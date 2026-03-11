import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 48,
  part: 7,
  title: '미니테스트 + 복습',
  subtitle: 'PART 7 확률 총정리! 경우의 수와 확률을 점검하자.',
  isTest: true,
  lectures: [],
  concepts: [
    {
      id: 'g2d48-c1',
      title: 'PART 7 핵심 요약: 경우의 수',
      content: '• **합의 법칙**: "또는" → 더하기 (동시에 일어나지 않을 때)\\n• **곱의 법칙**: "그리고" → 곱하기 (연이어 일어날 때)\\n• **순열** $_nP_r$: 순서 O (줄 세우기, 역할 다를 때)\\n• **조합** $_nC_r$: 순서 X (뽑기, 역할 같을 때)\\n• $_nC_r = \\\\frac{_nP_r}{r!}$',
      type: 'formula',
    },
    {
      id: 'g2d48-c2',
      title: 'PART 7 핵심 요약: 확률',
      content: '• $P(A) = \\\\frac{\\\\text{사건의 경우의 수}}{\\\\text{전체 경우의 수}}$, $0 \\\\leq P(A) \\\\leq 1$\\n• **여사건**: $P(A^c) = 1 - P(A)$ ("적어도"에 활용)\\n• **독립사건**: $P(A \\\\cap B) = P(A) \\\\times P(B)$\\n• **종속사건**: 비복원 추출 등, 앞의 결과가 뒤에 영향\\n• 복원 → 독립, 비복원 → 종속',
      type: 'formula',
    },
  ],
  problems: [
    {
      id: 'g2d48-p1',
      type: 'short-answer',
      difficulty: 'basic',
      question: '서로 다른 $5$권의 책 중 $2$권을 뽑는 경우의 수를 구하시오.',
      answer: '10',
      explanation: '순서 상관없이 뽑으므로 조합:\\n$_5C_2 = \\\\frac{5 \\\\times 4}{2 \\\\times 1} = 10$가지',
    },
    {
      id: 'g2d48-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '두 개의 주사위를 던질 때, 눈의 합이 $5$가 될 확률은?',
      options: ['$\\\\frac{1}{12}$', '$\\\\frac{1}{9}$', '$\\\\frac{1}{6}$', '$\\\\frac{5}{36}$'],
      answer: '$\\\\frac{1}{9}$',
      explanation: '합이 $5$: $(1,4), (2,3), (3,2), (4,1)$ → $4$가지\\n전체: $36$가지\\n$P = \\\\frac{4}{36} = \\\\frac{1}{9}$',
    },
    {
      id: 'g2d48-p3',
      type: 'short-answer',
      difficulty: 'applied',
      question: '동전 $3$개를 동시에 던질 때, 앞면이 정확히 $2$개 나올 확률을 기약분수로 구하시오.',
      answer: '3/8',
      explanation: '전체: $2^3 = 8$가지\\n앞면 2개: (앞앞뒤), (앞뒤앞), (뒤앞앞) → $3$가지\\n$P = \\\\frac{3}{8}$',
    },
    {
      id: 'g2d48-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '흰 공 $5$개, 검은 공 $3$개에서 비복원으로 $2$개를 뽑을 때, 모두 흰 공일 확률은?',
      options: ['$\\\\frac{5}{14}$', '$\\\\frac{25}{64}$', '$\\\\frac{5}{28}$', '$\\\\frac{1}{4}$'],
      answer: '$\\\\frac{5}{14}$',
      explanation: '비복원 추출:\\n$P = \\\\frac{5}{8} \\\\times \\\\frac{4}{7} = \\\\frac{20}{56} = \\\\frac{5}{14}$\\n\\n또는 조합: $\\\\frac{_5C_2}{_8C_2} = \\\\frac{10}{28} = \\\\frac{5}{14}$',
    },
    {
      id: 'g2d48-p5',
      type: 'short-answer',
      difficulty: 'challenge',
      question: '주사위를 $2$번 던질 때, 적어도 $1$번은 $6$이 나올 확률을 기약분수로 구하시오.',
      answer: '11/36',
      explanation: '여사건: $2$번 모두 $6$이 아닌 경우\\n$P(6\\\\text{아님}) = \\\\frac{5}{6}$\\n$P(\\\\text{모두 6아님}) = \\\\frac{5}{6} \\\\times \\\\frac{5}{6} = \\\\frac{25}{36}$\\n\\n$P(\\\\text{적어도 1번 6}) = 1 - \\\\frac{25}{36} = \\\\frac{11}{36}$',
    },
    {
      id: 'g2d48-p6',
      type: 'short-answer',
      difficulty: 'challenge',
      question: '남학생 $4$명, 여학생 $3$명을 일렬로 세울 때, 양 끝에 남학생이 서는 경우의 수를 구하시오.',
      answer: '1440',
      explanation: '양 끝 남학생 선택: $_4P_2 = 12$가지\\n나머지 $5$명 배열: $5! = 120$가지\\n\\n$12 \\\\times 120 = 1440$가지',
    },
  ],
  realLifeExample: 'PART 7 총정리! 경우의 수와 확률은 데이터 분석, AI, 보험, 게임 설계 등 현대 사회의 핵심 도구입니다. 특히 여사건의 활용과 독립/종속의 구분은 실생활 의사결정에서 매우 중요한 개념이에요!',
};

export default dayContent;
