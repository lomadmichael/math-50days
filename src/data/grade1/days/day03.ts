import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 3,
  part: 1,
  title: '최대공약수와 최소공배수',
  subtitle: '공약수, 공배수를 이해하고 최대공약수와 최소공배수를 소인수분해로 구하자!',
  lectures: [
    {
      lectureNumber: 2,
      youtubeVideoId: '',
      title: '02강 다항식 [유형01-03~유형01-04]',
      description: '이 강의에서 최대공약수와 최소공배수 부분을 시청하세요',
    },
  ],
  concepts: [
    {
      id: 'g1d3-c1',
      title: '공약수와 최대공약수',
      content: '**공약수**: 두 개 이상의 자연수의 **공통된 약수**\n\n**최대공약수(GCD)**: 공약수 중 **가장 큰 수**\n\n예: 12와 18의 공약수\n12의 약수: 1, 2, 3, 4, 6, 12\n18의 약수: 1, 2, 3, 6, 9, 18\n공약수: 1, 2, 3, 6\n**최대공약수: 6**',
      type: 'definition',
    },
    {
      id: 'g1d3-c2',
      title: '소인수분해로 최대공약수 구하기',
      content: '방법: **공통 소인수**의 **가장 낮은 거듭제곱**을 곱한다\n\n$12 = 2^2 \\times 3$\n$18 = 2 \\times 3^2$\n\n공통 소인수: 2, 3\n$\\text{GCD} = 2^1 \\times 3^1 = 6$\n\n쉽게 말해: 공통으로 가진 것 중 작은 쪽!',
      type: 'formula',
    },
    {
      id: 'g1d3-c3',
      title: '공배수와 최소공배수',
      content: '**공배수**: 두 개 이상의 자연수의 **공통된 배수**\n\n**최소공배수(LCM)**: 공배수 중 **가장 작은 수**\n\n예: 4와 6의 공배수\n4의 배수: 4, 8, 12, 16, 20, 24, ...\n6의 배수: 6, 12, 18, 24, 30, ...\n공배수: 12, 24, 36, ...\n**최소공배수: 12**',
      type: 'definition',
    },
    {
      id: 'g1d3-c4',
      title: '소인수분해로 최소공배수 구하기',
      content: '방법: **모든 소인수**의 **가장 높은 거듭제곱**을 곱한다\n\n$12 = 2^2 \\times 3$\n$18 = 2 \\times 3^2$\n\n모든 소인수: 2, 3\n$\\text{LCM} = 2^2 \\times 3^2 = 36$\n\n쉽게 말해: 둘 다 포함하려면 큰 쪽!',
      type: 'formula',
    },
    {
      id: 'g1d3-c5',
      title: '최대공약수와 최소공배수의 관계',
      content: '두 수 $a$, $b$에 대해:\n\n$a \\times b = \\text{GCD}(a,b) \\times \\text{LCM}(a,b)$\n\n예: $12 \\times 18 = 6 \\times 36 = 216$ ✓\n\n이 관계를 이용하면 하나를 알 때 다른 하나를 쉽게 구할 수 있어요!',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'g1d3-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '24와 36의 최대공약수는?',
      options: ['4', '6', '8', '12'],
      answer: '12',
      explanation: '$24 = 2^3 \\times 3$, $36 = 2^2 \\times 3^2$\n\n공통 소인수의 낮은 거듭제곱: $2^2 \\times 3^1 = 12$',
    },
    {
      id: 'g1d3-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '8과 12의 최소공배수는?',
      options: ['24', '36', '48', '96'],
      answer: '24',
      explanation: '$8 = 2^3$, $12 = 2^2 \\times 3$\n\n모든 소인수의 높은 거듭제곱: $2^3 \\times 3 = 24$',
    },
    {
      id: 'g1d3-p3',
      type: 'short-answer',
      difficulty: 'basic',
      question: '두 수 $2^3 \\times 3 \\times 5$와 $2^2 \\times 3^2 \\times 7$의 최대공약수를 구하시오.',
      answer: '12',
      explanation: '공통 소인수: 2, 3\n$\\text{GCD} = 2^2 \\times 3^1 = 4 \\times 3 = 12$\n\n5와 7은 공통이 아니므로 포함하지 않습니다.',
    },
    {
      id: 'g1d3-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question: '두 자연수의 최대공약수가 6이고 최소공배수가 72일 때, 두 수의 곱을 구하시오.',
      answer: '432',
      explanation: '$a \\times b = \\text{GCD} \\times \\text{LCM}$\n\n$= 6 \\times 72 = 432$',
    },
    {
      id: 'g1d3-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '어떤 두 자연수의 최대공약수가 12이고 최소공배수가 180일 때, 가능한 두 수의 쌍이 아닌 것은?',
      options: ['(12, 180)', '(36, 60)', '(24, 90)', '(60, 36)'],
      answer: '(24, 90)',
      explanation: '최대공약수가 12이므로 두 수는 모두 12의 배수여야 합니다.\n\n24와 90의 최대공약수 = 6 ≠ 12\n따라서 (24, 90)은 조건을 만족하지 않습니다.\n\n(12, 180): GCD=12, LCM=180 ✓\n(36, 60): GCD=12, LCM=180 ✓',
    },
  ],
  realLifeExample: '최대공약수와 최소공배수는 일상에서 정말 많이 쓰여요! 예를 들어 가로 24cm, 세로 36cm인 종이를 같은 크기의 정사각형으로 남김없이 자르려면? 한 변의 길이가 GCD(24,36)=12cm인 정사각형으로 자르면 됩니다!',
};

export default dayContent;
