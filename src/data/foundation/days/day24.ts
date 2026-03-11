import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 24,
  part: 5,
  title: '비례식과 비례배분',
  subtitle: '비례식의 성질을 이용해 미지수를 구하고, 비례배분으로 공정하게 나눠봐요!',
  lectures: [],
  concepts: [
    {
      id: 'f5d24-c1',
      title: '비례식이란?',
      content: '비율이 같은 두 비를 등호로 연결한 식이 **비례식**입니다.\n\n$2 : 3 = 4 : 6$ → 비례식\n\n비례식에서:\n- $2$와 $6$: **외항** (바깥쪽)\n- $3$과 $4$: **내항** (안쪽)\n\n**비례식의 성질:**\n외항의 곱 $=$ 내항의 곱\n$2 \\times 6 = 3 \\times 4 = 12$ ✓',
      type: 'definition',
    },
    {
      id: 'f5d24-c2',
      title: '비례식으로 미지수 구하기',
      content: '**외항의 곱 = 내항의 곱**을 이용합니다.\n\n$3 : 5 = x : 20$\n\n외항의 곱: $3 \\times 20 = 60$\n내항의 곱: $5 \\times x = 5x$\n\n$5x = 60$\n$x = 12$\n\n이것이 중학교 **일차방정식**의 기초입니다!',
      type: 'formula',
    },
    {
      id: 'f5d24-c3',
      title: '비례배분',
      content: '전체를 주어진 비로 나누는 것이 **비례배분**입니다.\n\n$100$을 $3 : 2$로 비례배분:\n\n전체 비의 합: $3 + 2 = 5$\n- 첫 번째: $100 \\times \\frac{3}{5} = 60$\n- 두 번째: $100 \\times \\frac{2}{5} = 40$\n\n검산: $60 + 40 = 100$ ✓\n\n일반화: $A$를 $m : n$으로 비례배분\n→ $A \\times \\frac{m}{m+n}$, $A \\times \\frac{n}{m+n}$',
      type: 'formula',
    },
  ],
  problems: [
    {
      id: 'fd24-p1',
      type: 'short-answer',
      difficulty: 'basic',
      question: '$4 : 7 = 12 : x$에서 $x$의 값을 구하시오.',
      answer: '21',
      explanation: '외항의 곱 = 내항의 곱\n$4 \\times x = 7 \\times 12$\n$4x = 84$\n$x = 21$',
    },
    {
      id: 'fd24-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$240$을 $5 : 3$으로 비례배분하면 큰 쪽은?',
      options: ['$90$', '$120$', '$150$', '$180$'],
      answer: '$150$',
      explanation: '비의 합: $5 + 3 = 8$\n\n큰 쪽: $240 \\times \\frac{5}{8} = 150$\n작은 쪽: $240 \\times \\frac{3}{8} = 90$\n\n검산: $150 + 90 = 240$ ✓',
    },
    {
      id: 'fd24-p3',
      type: 'short-answer',
      difficulty: 'basic',
      question: '$x : 6 = 15 : 10$에서 $x$의 값을 구하시오.',
      answer: '9',
      explanation: '외항의 곱 = 내항의 곱\n$x \\times 10 = 6 \\times 15$\n$10x = 90$\n$x = 9$',
    },
    {
      id: 'fd24-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '형과 동생이 $35000$원을 $4 : 3$으로 나누면 형은 얼마를 받나?',
      options: ['$15000$원', '$20000$원', '$21000$원', '$25000$원'],
      answer: '$20000$원',
      explanation: '비의 합: $4 + 3 = 7$\n\n형: $35000 \\times \\frac{4}{7} = 20000$원\n동생: $35000 \\times \\frac{3}{7} = 15000$원',
    },
    {
      id: 'fd24-p5',
      type: 'short-answer',
      difficulty: 'applied',
      question: '삼각형의 세 각의 크기의 비가 $2 : 3 : 4$일 때, 가장 큰 각의 크기를 구하시오. (도 단위)',
      answer: '80',
      explanation: '삼각형의 세 각의 합: $180°$\n비의 합: $2 + 3 + 4 = 9$\n\n가장 큰 각: $180 \\times \\frac{4}{9} = 80°$',
    },
    {
      id: 'fd24-p6',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '$\\frac{x}{3} = \\frac{y}{5}$일 때, $\\frac{x + y}{y}$의 값은?',
      options: ['$\\frac{3}{5}$', '$\\frac{8}{5}$', '$\\frac{5}{3}$', '$\\frac{8}{3}$'],
      answer: '$\\frac{8}{5}$',
      explanation: '$\\frac{x}{3} = \\frac{y}{5} = k$로 놓으면\n$x = 3k$, $y = 5k$\n\n$\\frac{x + y}{y} = \\frac{3k + 5k}{5k} = \\frac{8k}{5k} = \\frac{8}{5}$\n\n이것이 중학교에서 자주 나오는 **비례식 활용** 문제입니다!',
    },
  ],
  realLifeExample: '반에서 투표할 때 찬성:반대 = 3:2이고 전체가 30명이면? 비례배분으로 찬성 18명, 반대 12명이에요. 비례배분은 민주주의의 수학!',
};

export default dayContent;
