import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 43,
  part: 7,
  title: '경우의 수 (2)',
  subtitle: '순열과 조합의 기초 개념을 배워 보자!',
  lectures: [],
  concepts: [
    {
      id: 'g2d43-c1',
      title: '순열이란?',
      content: '서로 다른 $n$개에서 $r$개를 택하여 **일렬로 나열**하는 경우의 수:\\n\\n$$_nP_r = n \\times (n-1) \\times (n-2) \\times \\cdots \\times (n-r+1)$$\\n\\n순서가 중요! A→B와 B→A는 다른 경우\\n\\n예) 5명 중 반장, 부반장 뽑기: $_5P_2 = 5 \\times 4 = 20$가지',
      type: 'formula',
    },
    {
      id: 'g2d43-c2',
      title: '조합이란?',
      content: '서로 다른 $n$개에서 $r$개를 택하는 경우의 수 (순서 상관없음):\\n\\n$$_nC_r = \\frac{_nP_r}{r!} = \\frac{n!}{r!(n-r)!}$$\\n\\n순서가 상관없음! {A, B}와 {B, A}는 같은 경우\\n\\n예) 5명 중 대표 2명 뽑기: $_5C_2 = \\frac{5 \\times 4}{2 \\times 1} = 10$가지',
      type: 'formula',
    },
    {
      id: 'g2d43-c3',
      title: '순열 vs 조합 구분법',
      content: '**순열** (순서 O): 줄 세우기, 자리 배정, 반장·부반장 등 **역할이 다를 때**\\n**조합** (순서 X): 대표 뽑기, 팀 구성 등 **역할이 같을 때**\\n\\n핵심 질문: "뽑힌 것들의 역할(순서)이 구분되는가?"\\n→ 구분된다면 순열, 구분 안 되면 조합!',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'g2d43-p1',
      type: 'short-answer',
      difficulty: 'basic',
      question: '서로 다른 $4$개의 문자 $A$, $B$, $C$, $D$에서 $2$개를 뽑아 나열하는 경우의 수를 구하시오.',
      answer: '12',
      explanation: '$_4P_2 = 4 \\times 3 = 12$가지\\n(AB, AC, AD, BA, BC, BD, CA, CB, CD, DA, DB, DC)',
    },
    {
      id: 'g2d43-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: '$6$명의 학생 중 대표 $2$명을 뽑는 경우의 수를 구하시오.',
      answer: '15',
      explanation: '순서 상관없이 뽑으므로 조합:\\n$_6C_2 = \\frac{6 \\times 5}{2 \\times 1} = 15$가지',
    },
    {
      id: 'g2d43-p3',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$5$명을 일렬로 세우는 경우의 수는?',
      options: ['$20$', '$60$', '$120$', '$720$'],
      answer: '$120$',
      explanation: '$_5P_5 = 5! = 5 \\times 4 \\times 3 \\times 2 \\times 1 = 120$가지',
    },
    {
      id: 'g2d43-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question: '$0$, $1$, $2$, $3$, $4$ 다섯 개의 숫자 중 서로 다른 $3$개를 택하여 만들 수 있는 세 자리 자연수의 개수를 구하시오.',
      answer: '48',
      explanation: '백의 자리: $0$을 제외한 $4$가지 ($1, 2, 3, 4$)\\n십의 자리: 백의 자리에 쓴 수와 $0$을 제외하지 않으므로 남은 $4$가지\\n일의 자리: 나머지 $3$가지\\n\\n$4 \\times 4 \\times 3 = 48$가지',
    },
    {
      id: 'g2d43-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '남학생 $4$명, 여학생 $3$명 중에서 남녀 각각 $1$명씩 대표를 뽑는 경우의 수는?',
      options: ['$7$', '$12$', '$21$', '$35$'],
      answer: '$12$',
      explanation: '남학생 중 $1$명: $4$가지\\n여학생 중 $1$명: $3$가지\\n곱의 법칙: $4 \\times 3 = 12$가지',
    },
  ],
  realLifeExample: '식당 메뉴 선택이 순열과 조합의 좋은 예예요! 세트 메뉴에서 메인 1개, 사이드 1개, 음료 1개를 고르면 곱의 법칙이고, 토핑 5개 중 2개를 고르는 건 조합이에요. 순서가 중요한지 아닌지가 핵심이랍니다!',
};

export default dayContent;
