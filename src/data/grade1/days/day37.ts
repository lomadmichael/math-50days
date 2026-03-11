import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 37,
  part: 6,
  title: '미니테스트 + 복습',
  subtitle: 'PART 6 평면도형 총정리! 다각형부터 부채꼴까지 핵심을 확인하자.',
  lectures: [],
  concepts: [
    {
      id: 'g1d37-c1',
      title: 'PART 6 핵심 요약: 다각형',
      content: '• **정다각형**: 모든 변의 길이와 모든 내각의 크기가 같은 다각형\n• 대각선의 총 개수: $\\dfrac{n(n-3)}{2}$\n• **내각의 합**: $(n-2) \\times 180°$\n• **외각의 합**: 항상 $360°$\n• 정$n$각형의 한 내각: $\\dfrac{(n-2) \\times 180°}{n}$, 한 외각: $\\dfrac{360°}{n}$',
      type: 'formula',
    },
    {
      id: 'g1d37-c2',
      title: 'PART 6 핵심 요약: 원과 부채꼴',
      content: '• 원의 둘레: $2\\pi r$, 넓이: $\\pi r^2$\n• 부채꼴의 호의 길이: $l = 2\\pi r \\times \\dfrac{x}{360}$\n• 부채꼴의 넓이: $S = \\pi r^2 \\times \\dfrac{x}{360} = \\dfrac{1}{2}lr$\n• 호의 길이와 넓이는 **중심각에 정비례**\n• 지름은 가장 긴 현, $d = 2r$',
      type: 'formula',
    },
  ],
  problems: [
    {
      id: 'g1d37-p1',
      type: 'short-answer',
      difficulty: 'basic',
      question: '구각형의 대각선의 총 개수를 구하시오.',
      answer: '27',
      explanation: '$\\dfrac{n(n-3)}{2} = \\dfrac{9 \\times 6}{2} = \\dfrac{54}{2} = 27$개',
    },
    {
      id: 'g1d37-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: '정오각형의 한 내각의 크기를 구하시오. (단위: 도)',
      answer: '108',
      explanation: '정오각형의 한 내각: $\\dfrac{(5-2) \\times 180°}{5} = \\dfrac{540°}{5} = 108°$',
    },
    {
      id: 'g1d37-p3',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '다음 중 원에 대한 설명으로 옳지 않은 것은?',
      options: [
        '한 원에서 반지름의 길이는 모두 같다',
        '지름은 원에서 가장 긴 현이다',
        '현은 항상 원의 중심을 지난다',
        '지름은 반지름의 2배이다',
      ],
      answer: '현은 항상 원의 중심을 지난다',
      explanation: '현은 원 위의 두 점을 이은 선분으로, 중심을 지나지 않는 현도 있습니다.\n\n중심을 지나는 현이 바로 **지름**입니다.',
    },
    {
      id: 'g1d37-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question: '한 외각의 크기가 $30°$인 정다각형의 내각의 합을 구하시오. (단위: 도)',
      answer: '1800',
      explanation: '한 외각: $\\dfrac{360°}{n} = 30°$ → $n = 12$ (정십이각형)\n\n내각의 합: $(12-2) \\times 180° = 10 \\times 180° = 1800°$',
    },
    {
      id: 'g1d37-p5',
      type: 'short-answer',
      difficulty: 'applied',
      question: '반지름이 $10\\text{cm}$이고 중심각이 $72°$인 부채꼴의 호의 길이를 구하시오. (결과를 $a\\pi$ 형태로 나타낼 때 $a$의 값)',
      answer: '4',
      explanation: '$l = 2\\pi \\times 10 \\times \\dfrac{72}{360} = 20\\pi \\times \\dfrac{1}{5} = 4\\pi\\text{(cm)}$\n\n따라서 $a = 4$',
    },
    {
      id: 'g1d37-p6',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '대각선의 총 개수가 54개인 다각형의 내각의 합은?',
      options: ['$1440°$', '$1620°$', '$1800°$', '$2160°$'],
      answer: '$1800°$',
      explanation: '$\\dfrac{n(n-3)}{2} = 54$\n\n$n(n-3) = 108$\n\n$n = 12$일 때: $12 \\times 9 = 108$ ✓\n\n내각의 합: $(12-2) \\times 180° = 1800°$',
    },
    {
      id: 'g1d37-p7',
      type: 'short-answer',
      difficulty: 'challenge',
      question: '반지름이 $8\\text{cm}$인 원에서 중심각이 $135°$인 부채꼴의 넓이를 구하시오. (결과를 $a\\pi$ 형태로 나타낼 때 $a$의 값)',
      answer: '24',
      explanation: '$S = \\pi r^2 \\times \\dfrac{x}{360}$\n\n$= \\pi \\times 64 \\times \\dfrac{135}{360}$\n\n$= 64\\pi \\times \\dfrac{3}{8} = 24\\pi\\text{(cm}^2\\text{)}$\n\n따라서 $a = 24$',
    },
  ],
  realLifeExample: 'PART 6 총정리! 건축에서 다각형의 내각 계산은 필수이고, 원과 부채꼴은 시계, 피자, 스프링클러, 자동차 와이퍼 등 일상 곳곳에 등장합니다. 평면도형의 성질을 알면 세상이 수학으로 보여요!',
};

export default dayContent;
