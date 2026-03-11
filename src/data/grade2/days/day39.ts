import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 39,
  part: 6,
  title: '피타고라스 정리 (1)',
  subtitle: '피타고라스 정리의 증명과 기본 이해를 시작하자!',
  lectures: [],
  concepts: [
    {
      id: 'g2d39-c1',
      title: '피타고라스 정리',
      content: '직각삼각형에서 빗변의 길이를 $c$, 나머지 두 변의 길이를 $a$, $b$라 하면:\\n\\n$$a^2 + b^2 = c^2$$\\n\\n빗변의 제곱 = 나머지 두 변의 제곱의 합\\n\\n이것은 직각삼각형에서만 성립합니다!',
      type: 'formula',
    },
    {
      id: 'g2d39-c2',
      title: '피타고라스 정리의 증명 (넓이 이용)',
      content: '한 변의 길이가 $(a + b)$인 정사각형 안에 빗변 $c$인 직각삼각형 4개를 배치하면:\\n\\n큰 정사각형 넓이 $= (a+b)^2$\\n안쪽 정사각형 넓이 + 삼각형 4개 넓이\\n$= c^2 + 4 \\\\times \\\\frac{1}{2}ab$\\n\\n$(a+b)^2 = c^2 + 2ab$\\n$a^2 + 2ab + b^2 = c^2 + 2ab$\\n$$a^2 + b^2 = c^2$$',
      type: 'example',
    },
    {
      id: 'g2d39-c3',
      title: '피타고라스 정리의 역',
      content: '삼각형의 세 변의 길이 $a$, $b$, $c$ ($c$가 가장 김)에서:\\n\\n• $a^2 + b^2 = c^2$ → **직각삼각형** (빗변 $c$)\\n• $a^2 + b^2 > c^2$ → **예각삼각형**\\n• $a^2 + b^2 < c^2$ → **둔각삼각형**',
      type: 'formula',
    },
    {
      id: 'g2d39-c4',
      title: '자주 나오는 피타고라스 수',
      content: '정수로 이루어진 피타고라스 수를 외워두면 편해요!\\n\\n• $(3, 4, 5)$ → $9 + 16 = 25$\\n• $(5, 12, 13)$ → $25 + 144 = 169$\\n• $(8, 15, 17)$ → $64 + 225 = 289$\\n• $(7, 24, 25)$ → $49 + 576 = 625$\\n\\n배수도 성립: $(6, 8, 10)$, $(9, 12, 15)$, ...',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'g2d39-p1',
      type: 'short-answer',
      difficulty: 'basic',
      question: '직각삼각형에서 두 변의 길이가 $3$cm, $4$cm일 때, 빗변의 길이를 구하시오.',
      answer: '5',
      explanation: '$c^2 = 3^2 + 4^2 = 9 + 16 = 25$\\n$c = \\\\sqrt{25} = 5$(cm)',
    },
    {
      id: 'g2d39-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: '직각삼각형에서 빗변이 $13$cm, 한 변이 $5$cm일 때, 나머지 한 변의 길이를 구하시오.',
      answer: '12',
      explanation: '$b^2 = 13^2 - 5^2 = 169 - 25 = 144$\\n$b = \\\\sqrt{144} = 12$(cm)',
    },
    {
      id: 'g2d39-p3',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '세 변의 길이가 $6$, $8$, $11$인 삼각형은 어떤 삼각형인가?',
      options: ['예각삼각형', '직각삼각형', '둔각삼각형', '삼각형이 안 됨'],
      answer: '둔각삼각형',
      explanation: '가장 긴 변 $c = 11$\\n$a^2 + b^2 = 6^2 + 8^2 = 36 + 64 = 100$\\n$c^2 = 11^2 = 121$\\n\\n$100 < 121$이므로 $a^2 + b^2 < c^2$ → **둔각삼각형**',
    },
    {
      id: 'g2d39-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question: '직각삼각형에서 두 변의 길이가 $6$cm, $8$cm이다. 이 삼각형의 넓이를 구하시오. (단, 두 변이 직각을 끼는 변이다)',
      answer: '24',
      explanation: '두 변이 직각을 끼는 변이므로:\\n넓이 $= \\\\frac{1}{2} \\\\times 6 \\\\times 8 = 24$(cm$^2$)',
    },
    {
      id: 'g2d39-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '다음 중 직각삼각형의 세 변이 될 수 없는 것은?',
      options: ['$9, 12, 15$', '$5, 12, 13$', '$8, 15, 17$', '$7, 12, 15$'],
      answer: '$7, 12, 15$',
      explanation: '$7^2 + 12^2 = 49 + 144 = 193$\\n$15^2 = 225$\\n$193 \\\\neq 225$이므로 직각삼각형이 아닙니다.\\n\\n나머지는 모두 $a^2 + b^2 = c^2$ 성립!',
    },
  ],
  realLifeExample: '목수가 벽과 바닥이 직각인지 확인할 때 3-4-5 법칙을 써요! 한 변을 3m, 다른 변을 4m로 재고 대각선이 정확히 5m면 직각! 건설 현장에서 2000년 넘게 사용되어 온 피타고라스 정리의 실전 응용이랍니다.',
};

export default dayContent;
