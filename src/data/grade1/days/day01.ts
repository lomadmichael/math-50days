import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 1,
  part: 1,
  title: '약수와 배수 복습',
  subtitle: '초등에서 배운 약수와 배수를 다시 한번 정리하고, 소인수분해로 가는 첫걸음!',
  lectures: [
    {
      lectureNumber: 1,
      youtubeVideoId: '', // 유튜브 업로드 후 입력
      title: '01강 다항식 [유형01-01~유형01-02]',
      description: '이 강의에서 약수와 배수의 기초 부분을 시청하세요',
    },
  ],
  concepts: [
    {
      id: 'g1d1-c1',
      title: '약수란?',
      content: '어떤 수를 나누어 떨어지게 하는 수를 **약수**라고 합니다.\n\n예: 12의 약수 → 1, 2, 3, 4, 6, 12\n\n$12 \\div 1 = 12$, $12 \\div 2 = 6$, $12 \\div 3 = 4$\n$12 \\div 4 = 3$, $12 \\div 6 = 2$, $12 \\div 12 = 1$\n\n약수는 항상 **짝**으로 나옵니다!',
      type: 'definition',
    },
    {
      id: 'g1d1-c2',
      title: '배수란?',
      content: '어떤 수에 1, 2, 3, 4, ... 를 곱한 수를 **배수**라고 합니다.\n\n예: 3의 배수 → 3, 6, 9, 12, 15, 18, ...\n\n$3 \\times 1 = 3$, $3 \\times 2 = 6$, $3 \\times 3 = 9$, ...\n\n배수는 **무한히** 많습니다!',
      type: 'definition',
    },
    {
      id: 'g1d1-c3',
      title: '약수 빠르게 찾기',
      content: '약수를 찾을 때는 작은 수부터 나누어보면서 **짝**으로 찾으세요.\n\n예: 24의 약수 찾기\n$1 \\times 24$, $2 \\times 12$, $3 \\times 8$, $4 \\times 6$\n\n→ 약수: 1, 2, 3, 4, 6, 8, 12, 24 (총 8개)',
      type: 'tip',
    },
    {
      id: 'g1d1-c4',
      title: '약수와 배수의 관계',
      content: '$12 = 3 \\times 4$일 때,\n\n- 3은 12의 **약수**, 12는 3의 **배수**\n- 4는 12의 **약수**, 12는 4의 **배수**\n\n약수와 배수는 동전의 앞뒷면 같은 관계!',
      type: 'formula',
    },
  ],
  problems: [
    {
      id: 'g1d1-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '18의 약수가 아닌 것은?',
      options: ['2', '4', '6', '9'],
      answer: '4',
      explanation: '$18 \\div 4 = 4.5$로 나누어 떨어지지 않으므로 4는 18의 약수가 아닙니다.\n\n18의 약수: 1, 2, 3, 6, 9, 18',
      relatedConcept: 'g1d1-c1',
    },
    {
      id: 'g1d1-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '다음 중 7의 배수는?',
      options: ['27', '35', '40', '45'],
      answer: '35',
      explanation: '$35 = 7 \\times 5$이므로 35는 7의 배수입니다.\n\n$27 \\div 7 = 3.86...$, $40 \\div 7 = 5.71...$, $45 \\div 7 = 6.43...$',
      relatedConcept: 'g1d1-c2',
    },
    {
      id: 'g1d1-p3',
      type: 'short-answer',
      difficulty: 'basic',
      question: '30의 약수의 개수를 구하시오.',
      answer: '8',
      explanation: '$30 = 1 \\times 30 = 2 \\times 15 = 3 \\times 10 = 5 \\times 6$\n\n약수: 1, 2, 3, 5, 6, 10, 15, 30 → **8개**',
      relatedConcept: 'g1d1-c3',
    },
    {
      id: 'g1d1-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '두 자연수 $a$, $b$에 대해 $a = 5b$일 때, 다음 중 옳은 것은?',
      options: [
        '$a$는 $b$의 약수이다',
        '$b$는 $a$의 배수이다',
        '$a$는 5의 배수이다',
        '$b$는 5의 약수이다',
      ],
      answer: '$a$는 5의 배수이다',
      explanation: '$a = 5b$이므로 $a$는 $b$의 배수이고, $b$는 $a$의 약수입니다.\n또한 $a = 5 \\times b$이므로 $a$는 5의 배수입니다 (정확히는 $a$는 $5b$라서 5의 배수).',
      relatedConcept: 'g1d1-c4',
    },
    {
      id: 'g1d1-p5',
      type: 'short-answer',
      difficulty: 'applied',
      question: '1부터 50까지의 자연수 중 6의 배수의 개수를 구하시오.',
      answer: '8',
      explanation: '6의 배수: 6, 12, 18, 24, 30, 36, 42, 48\n\n$50 \\div 6 = 8.33...$이므로 6의 배수는 **8개**입니다.',
      relatedConcept: 'g1d1-c2',
    },
    {
      id: 'g1d1-p6',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '어떤 자연수의 약수의 개수가 홀수일 때, 이 자연수는 어떤 수인가?',
      options: ['소수', '완전제곱수', '짝수', '홀수'],
      answer: '완전제곱수',
      explanation: '약수는 보통 짝으로 나타납니다 ($a \\times b = n$). 하지만 $a = b$인 경우 (완전제곱수) 한 쌍이 하나로 합쳐져서 약수의 개수가 홀수가 됩니다.\n\n예: $16 = 4^2$, 약수: 1, 2, 4, 8, 16 → 5개 (홀수)',
      relatedConcept: 'g1d1-c3',
    },
  ],
  realLifeExample: '마트에서 과자 18개를 친구들에게 똑같이 나눠줄 때, 몇 명에게 나눠줄 수 있을까요? 18의 약수만큼의 인원에게 나눠줄 수 있습니다! (1명, 2명, 3명, 6명, 9명, 18명)',
};

export default dayContent;
