import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 3,
  part: 1,
  title: '곱셈과 나눗셈의 원리',
  subtitle: '곱셈과 나눗셈을 확실히 다지면 중학교 정수의 곱셈·나눗셈이 훨씬 쉬워져요!',
  lectures: [],
  concepts: [
    {
      id: 'f1d3-c1',
      title: '곱셈의 원리',
      content: '곱셈은 같은 수를 여러 번 더하는 것입니다.\n\n$5 \\times 3 = 5 + 5 + 5 = 15$\n\n**두 자리 × 한 자리:**\n$23 \\times 4 = (20 + 3) \\times 4 = 80 + 12 = 92$\n\n**두 자리 × 두 자리:**\n$23 \\times 14 = 23 \\times 10 + 23 \\times 4 = 230 + 92 = 322$\n\n이것이 중학교 **분배법칙**의 기초입니다!',
      type: 'definition',
    },
    {
      id: 'f1d3-c2',
      title: '나눗셈의 원리',
      content: '나눗셈은 곱셈의 **반대 연산**입니다.\n\n$15 \\div 3 = 5$ ← $5 \\times 3 = 15$이므로\n\n**나눗셈의 검산:**\n$몫 \\times 나누는 수 + 나머지 = 나누어지는 수$\n\n예: $47 \\div 6 = 7 \\cdots 5$\n검산: $7 \\times 6 + 5 = 42 + 5 = 47$ ✓',
      type: 'definition',
    },
    {
      id: 'f1d3-c3',
      title: '곱셈의 편리한 계산',
      content: '**곱셈의 교환법칙:** $a \\times b = b \\times a$\n예: $4 \\times 25 = 25 \\times 4 = 100$\n\n**곱셈의 결합법칙:** $(a \\times b) \\times c = a \\times (b \\times c)$\n예: $25 \\times 12 = 25 \\times 4 \\times 3 = 100 \\times 3 = 300$\n\n이 법칙들은 중학교에서도 계속 사용됩니다!',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'fd3-p1',
      type: 'short-answer',
      difficulty: 'basic',
      question: '$35 \\times 12$를 계산하시오.',
      answer: '420',
      explanation: '$35 \\times 12 = 35 \\times 10 + 35 \\times 2 = 350 + 70 = 420$',
    },
    {
      id: 'fd3-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: '$156 \\div 12$를 계산하시오.',
      answer: '13',
      explanation: '$156 \\div 12$\n$12 \\times 10 = 120$, $156 - 120 = 36$\n$12 \\times 3 = 36$\n\n따라서 $156 \\div 12 = 13$',
    },
    {
      id: 'fd3-p3',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$84 \\div 5$의 몫과 나머지를 바르게 구한 것은?',
      options: ['몫 $16$, 나머지 $4$', '몫 $17$, 나머지 $1$', '몫 $16$, 나머지 $2$', '몫 $15$, 나머지 $9$'],
      answer: '몫 $16$, 나머지 $4$',
      explanation: '$5 \\times 16 = 80$, $84 - 80 = 4$\n따라서 몫은 $16$, 나머지는 $4$\n\n검산: $16 \\times 5 + 4 = 80 + 4 = 84$ ✓',
    },
    {
      id: 'fd3-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$25 \\times 32$를 가장 편리하게 계산하는 방법은?',
      options: [
        '$25 \\times 30 + 25 \\times 2$',
        '$25 \\times 4 \\times 8$',
        '$20 \\times 32 + 5 \\times 32$',
        '모두 같은 결과이다',
      ],
      answer: '모두 같은 결과이다',
      explanation: '세 가지 방법 모두 $800$이 됩니다.\n- $25 \\times 30 + 25 \\times 2 = 750 + 50 = 800$\n- $25 \\times 4 \\times 8 = 100 \\times 8 = 800$\n- $20 \\times 32 + 5 \\times 32 = 640 + 160 = 800$\n\n이것이 분배법칙과 결합법칙입니다!',
    },
    {
      id: 'fd3-p5',
      type: 'short-answer',
      difficulty: 'applied',
      question: '사탕 $250$개를 $8$명에게 똑같이 나눠주면 한 사람에게 몇 개씩 줄 수 있고, 몇 개가 남는지 나머지를 구하시오.',
      answer: '2',
      explanation: '$250 \\div 8 = 31 \\cdots 2$\n\n$8 \\times 31 = 248$, $250 - 248 = 2$\n\n한 사람에게 $31$개씩 줄 수 있고, $2$개가 남습니다.',
    },
    {
      id: 'fd3-p6',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '어떤 수를 $7$로 나누었을 때 나올 수 있는 나머지가 아닌 것은?',
      options: ['$0$', '$5$', '$7$', '$6$'],
      answer: '$7$',
      explanation: '나머지는 항상 나누는 수보다 작아야 합니다.\n\n$7$로 나누면 나머지는 $0, 1, 2, 3, 4, 5, 6$ 중 하나입니다.\n\n따라서 나머지가 $7$이 되는 것은 불가능합니다.',
    },
  ],
  realLifeExample: '학교에서 학생 156명을 12명씩 모둠으로 나누면 몇 모둠이 될까요? 156 ÷ 12 = 13모둠! 나눗셈은 공정하게 나누는 데 필수입니다.',
};

export default dayContent;
