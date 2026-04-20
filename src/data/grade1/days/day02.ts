import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 2,
  part: 1,
  title: '소수(Prime Number)와 소인수분해(Prime Factorization)',
  subtitle: '약수가 1과 자기 자신뿐인 특별한 수, 소수(Prime Number)! 그리고 모든 수를 소수로 쪼개는 소인수분해(Prime Factorization)!',
  lectures: [
    {
      lectureNumber: 1,
      youtubeVideoId: '',
      title: '01강 다항식 [유형01-01~유형01-02]',
      description: '이 강의에서 소수와 소인수분해 부분을 시청하세요',
    },
  ],
  concepts: [
    {
      id: 'g1d2-c1',
      title: '소수(素數, Prime Number)란?',
      content: '**소수(Prime Number)**: 1보다 큰 자연수(Natural Number) 중에서 약수(Divisor)가 **1과 자기 자신뿐**인 수\n\n예: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, ...\n\n주의: **1은 소수가 아닙니다!**\n주의: **2는 유일한 짝수 소수(Prime Number)입니다!**',
      type: 'definition',
    },
    {
      id: 'g1d2-c2',
      title: '소수(Prime Number) 판별법',
      content: '어떤 수 $n$이 소수(Prime Number)인지 확인하려면:\n\n$\\sqrt{n}$ 이하의 소수로 나누어 보면 됩니다.\n\n예: 37이 소수인가?\n$\\sqrt{37} \\approx 6.08$\n2, 3, 5로 나누어 떨어지지 않으므로 → **37은 소수!**',
      type: 'tip',
    },
    {
      id: 'g1d2-c3',
      title: '소인수분해(Prime Factorization)',
      content: '자연수를 **소인수(Prime Factor, 소수인 약수)**들의 곱으로 나타내는 것\n\n예: $60 = 2^2 \\times 3 \\times 5$\n\n방법: 작은 소수부터 나누기\n$60 \\div 2 = 30$\n$30 \\div 2 = 15$\n$15 \\div 3 = 5$\n$5$는 소수 → 끝!\n\n$60 = 2 \\times 2 \\times 3 \\times 5 = 2^2 \\times 3 \\times 5$',
      type: 'formula',
    },
    {
      id: 'g1d2-c4',
      title: '소인수분해(Prime Factorization)로 약수(Divisor) 구하기',
      content: '$n = a^p \\times b^q \\times c^r$일 때\n\n약수의 개수 $= (p+1)(q+1)(r+1)$\n\n예: $60 = 2^2 \\times 3^1 \\times 5^1$\n약수의 개수 $= (2+1)(1+1)(1+1) = 3 \\times 2 \\times 2 = 12$개',
      type: 'formula',
    },
  ],
  problems: [
    {
      id: 'g1d2-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '다음 중 소수인 것은?',
      options: ['1', '9', '15', '23'],
      answer: '23',
      explanation: '1은 소수가 아닙니다. $9 = 3^2$, $15 = 3 \\times 5$이므로 소수가 아닙니다.\n23은 약수가 1과 23뿐이므로 **소수**입니다.',
    },
    {
      id: 'g1d2-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$72$를 소인수분해하면?',
      options: [
        '$2^3 \\times 3^2$',
        '$2^2 \\times 3^3$',
        '$2^3 \\times 9$',
        '$8 \\times 9$',
      ],
      answer: '$2^3 \\times 3^2$',
      explanation: '$72 = 2 \\times 36 = 2 \\times 2 \\times 18 = 2 \\times 2 \\times 2 \\times 9 = 2^3 \\times 3^2$\n\n$2^3 \\times 9$는 9가 소수가 아니므로 소인수분해가 아닙니다.',
    },
    {
      id: 'g1d2-p3',
      type: 'short-answer',
      difficulty: 'basic',
      question: '10 이하의 소수는 모두 몇 개인가?',
      answer: '4',
      explanation: '10 이하의 소수: 2, 3, 5, 7 → **4개**\n\n1은 소수가 아니고, 4(=2x2), 6(=2x3), 8(=2x2x2), 9(=3x3), 10(=2x5)은 합성수입니다.',
    },
    {
      id: 'g1d2-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question: '$2^3 \\times 3 \\times 5^2$의 약수의 개수를 구하시오.',
      answer: '24',
      explanation: '약수의 개수 공식: $(p+1)(q+1)(r+1)$\n\n$= (3+1)(1+1)(2+1) = 4 \\times 2 \\times 3 = 24$개',
    },
    {
      id: 'g1d2-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '$n = 2^a \\times 3^b$의 약수의 개수가 12개일 때, 가능한 $(a, b)$를 고르시오.',
      options: ['(2, 3)', '(3, 2)', '(5, 1)', '(2, 3)과 (3, 2) 모두'],
      answer: '(2, 3)과 (3, 2) 모두',
      explanation: '$(a+1)(b+1) = 12$를 만족하는 자연수 쌍:\n\n$3 \\times 4 = 12$ → $(a,b) = (2,3)$\n$4 \\times 3 = 12$ → $(a,b) = (3,2)$\n$6 \\times 2 = 12$ → $(a,b) = (5,1)$\n$2 \\times 6 = 12$ → $(a,b) = (1,5)$\n\n선택지 중 (2,3)과 (3,2) 모두 가능합니다.',
    },
  ],
  realLifeExample: '소수(Prime Number)는 암호학에서 아주 중요해요! 인터넷 뱅킹, 카카오톡 메시지 암호화 등 모두 큰 소수의 곱셈을 이용합니다. 두 큰 소수를 곱하면 쉽지만, 결과에서 원래 소수를 찾는 건 매우 어렵기 때문이에요!',
};

export default dayContent;
