import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 49,
  part: 10,
  title: '종합 테스트',
  subtitle: '전체 범위 — 기초탄탄 최종 점검',
  isTest: true,
  lectures: [],
  concepts: [
    {
      id: 'f10d49-c1',
      title: '기초탄탄 전체 범위',
      content:
        'PART 5: 비와 비율, 백분율\\nPART 6: 도형의 종류, 넓이, 원, 합동·대칭\\nPART 7: 단위 환산, 입체도형, 겉넓이·부피\\nPART 8: 규칙 찾기, 문자식, 등식 풀기\\nPART 9: 표·그래프, 평균, 경우의 수·확률\\nPART 10: 음수, 문자식, 좌표, 기본도형',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'fd49-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '4 : 5의 비율을 백분율로 나타내면? (PART 5)',
      options: ['40%', '45%', '80%', '125%'],
      answer: '80%',
      explanation:
        '$\\frac{4}{5} \\times 100 = 80$%',
    },
    {
      id: 'fd49-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question:
        '밑변 14cm, 높이 6cm인 삼각형의 넓이는 몇 $cm^2$인가요? (PART 6)',
      answer: '42',
      explanation:
        '$\\frac{14 \\times 6}{2} = 42cm^2$',
    },
    {
      id: 'fd49-p3',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$4.5L$는 몇 $cm^3$인가요? (PART 7)',
      options: ['$45$', '$450$', '$4500$', '$45000$'],
      answer: '$4500$',
      explanation: '$1L = 1000cm^3$이므로 $4.5 \\times 1000 = 4500cm^3$',
    },
    {
      id: 'fd49-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question: '$3x + 7 = 22$일 때, $x$의 값은? (PART 8)',
      answer: '5',
      explanation: '$3x = 15$, $x = 5$',
    },
    {
      id: 'fd49-p5',
      type: 'multiple-choice',
      difficulty: 'applied',
      question:
        '60, 70, 80, 90, 100의 평균은? (PART 9)',
      options: ['70', '75', '80', '85'],
      answer: '80',
      explanation:
        '$\\frac{60+70+80+90+100}{5} = \\frac{400}{5} = 80$',
    },
    {
      id: 'fd49-p6',
      type: 'short-answer',
      difficulty: 'challenge',
      question:
        '$(-5) + (+8) - (-3)$의 값은? (PART 10)',
      answer: '6',
      explanation:
        '$(-5) + 8 + 3 = -5 + 11 = 6$',
    },
    {
      id: 'fd49-p7',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question:
        '가로 6cm, 세로 4cm, 높이 5cm인 직육면체의 겉넓이는? (PART 7)',
      options: ['$94cm^2$', '$120cm^2$', '$148cm^2$', '$240cm^2$'],
      answer: '$148cm^2$',
      explanation:
        '$2(6 \\times 4 + 4 \\times 5 + 6 \\times 5) = 2(24 + 20 + 30) = 2 \\times 74 = 148cm^2$',
    },
    {
      id: 'fd49-p8',
      type: 'short-answer',
      difficulty: 'challenge',
      question:
        '주사위를 던져 3 이하가 나올 확률을 기약분수로 나타내세요. (PART 9) (예: 1/2)',
      answer: '1/2',
      explanation:
        '3 이하: 1, 2, 3 → 3가지, 확률 = $\\frac{3}{6} = \\frac{1}{2}$',
    },
  ],
  realLifeExample:
    '50일간의 기초탄탄 과정을 거의 끝냈어요! 이 과정에서 배운 수학은 모두 실생활과 연결되어 있습니다. 비율은 요리에서, 도형은 건축에서, 통계는 뉴스에서, 방정식은 프로그래밍에서 매일 사용됩니다!',
};

export default dayContent;
