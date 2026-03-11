import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 43,
  part: 7,
  title: '미니테스트 + 복습',
  subtitle: 'PART 7 입체도형 총정리! 다면체부터 구까지 모두 확인해 보자.',
  lectures: [],
  concepts: [
    {
      id: 'g1d43-c1',
      title: 'PART 7 핵심 요약: 입체도형의 종류',
      content: '• **다면체**: 다각형 면으로 둘러싸인 입체도형\n  - 각기둥($n$각기둥): 꼭짓점 $2n$, 모서리 $3n$, 면 $n+2$\n  - 각뿔($n$각뿔): 꼭짓점 $n+1$, 모서리 $2n$, 면 $n+1$\n• **정다면체**: 5가지 (정사면체, 정육면체, 정팔면체, 정십이면체, 정이십면체)\n• **오일러 공식**: $V - E + F = 2$\n• **회전체**: 원기둥(직사각형 회전), 원뿔(직각삼각형 회전), 구(반원 회전)',
      type: 'formula',
    },
    {
      id: 'g1d43-c2',
      title: 'PART 7 핵심 요약: 겉넓이와 부피 공식',
      content: '| 도형 | 겉넓이 | 부피 |\n|---|---|---|\n| 각기둥 | $2 \\times$ 밑넓이 $+$ 옆넓이 | 밑넓이 $\\times h$ |\n| 원기둥 | $2\\pi r(r+h)$ | $\\pi r^2 h$ |\n| 각뿔 | 밑넓이 $+$ 옆넓이 | $\\frac{1}{3} \\times$ 밑넓이 $\\times h$ |\n| 원뿔 | $\\pi r(r+l)$ | $\\frac{1}{3}\\pi r^2 h$ |\n| 구 | $4\\pi r^2$ | $\\frac{4}{3}\\pi r^3$ |\n\n🔑 **뿔 = 기둥의 $\\frac{1}{3}$**, 모선 $l = \\sqrt{r^2 + h^2}$',
      type: 'formula',
    },
  ],
  problems: [
    {
      id: 'g1d43-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '사각기둥의 면의 수는?',
      options: ['4', '5', '6', '8'],
      answer: '6',
      explanation: '$n$각기둥의 면의 수 = $n + 2$\n\n사각기둥: $4 + 2 = 6$개\n(밑면 2개 + 옆면 4개)',
    },
    {
      id: 'g1d43-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: '어떤 다면체의 꼭짓점이 5개, 모서리가 8개일 때, 면의 수를 구하시오.',
      answer: '5',
      explanation: '오일러 공식 $V - E + F = 2$\n\n$5 - 8 + F = 2$\n$F = 2 - 5 + 8 = 5$\n\n면의 수는 **5개** (사각뿔)',
    },
    {
      id: 'g1d43-p3',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '반원을 지름을 축으로 1회전시키면 생기는 입체도형은?',
      options: ['원기둥', '원뿔', '구', '반구'],
      answer: '구',
      explanation: '반원을 지름을 축으로 1회전 시키면 **구**가 만들어집니다.',
    },
    {
      id: 'g1d43-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question: '밑면의 반지름이 $5\\text{cm}$, 높이가 $6\\text{cm}$인 원기둥의 부피를 구하시오. ($a\\pi$ 형태로, $a$의 값만 답하시오)',
      answer: '150',
      explanation: '$V = \\pi r^2 h$\n$= \\pi \\times 5^2 \\times 6$\n$= \\pi \\times 25 \\times 6$\n$= 150\\pi\\text{cm}^3$',
    },
    {
      id: 'g1d43-p5',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '밑면이 한 변 $6\\text{cm}$인 정사각형이고 높이가 $15\\text{cm}$인 사각뿔의 부피는?',
      options: ['$120\\text{cm}^3$', '$150\\text{cm}^3$', '$180\\text{cm}^3$', '$540\\text{cm}^3$'],
      answer: '$180\\text{cm}^3$',
      explanation: '$V = \\frac{1}{3} \\times \\text{(밑넓이)} \\times h$\n$= \\frac{1}{3} \\times 6^2 \\times 15$\n$= \\frac{1}{3} \\times 36 \\times 15$\n$= \\frac{540}{3} = 180\\text{cm}^3$',
    },
    {
      id: 'g1d43-p6',
      type: 'short-answer',
      difficulty: 'challenge',
      question: '반지름이 $3\\text{cm}$인 구의 부피를 구하시오. ($a\\pi$ 형태로, $a$의 값만 답하시오)',
      answer: '36',
      explanation: '$V = \\frac{4}{3}\\pi r^3$\n$= \\frac{4}{3}\\pi \\times 3^3$\n$= \\frac{4}{3}\\pi \\times 27$\n$= 36\\pi\\text{cm}^3$',
    },
    {
      id: 'g1d43-p7',
      type: 'short-answer',
      difficulty: 'challenge',
      question: '밑면의 반지름이 $3\\text{cm}$, 높이가 $4\\text{cm}$인 원뿔의 겉넓이를 구하시오. ($a\\pi$ 형태로, $a$의 값만 답하시오)',
      answer: '24',
      explanation: '모선의 길이: $l = \\sqrt{3^2 + 4^2} = \\sqrt{9+16} = \\sqrt{25} = 5\\text{cm}$\n\n겉넓이 $= \\pi r(r + l) = \\pi \\times 3 \\times (3 + 5) = 24\\pi\\text{cm}^2$\n\n따라서 $a = 24$',
    },
  ],
  realLifeExample: 'PART 7 총정리! 입체도형의 공식은 건축, 제조, 포장 설계에 필수입니다. 건물 설계 시 기둥과 뿔의 부피 계산, 공 모양 제품의 재료비 산출, 음료 용기의 용량 설계 등에 모두 활용됩니다!',
};

export default dayContent;
