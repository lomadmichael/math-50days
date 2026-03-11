import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 42,
  part: 7,
  title: '경우의 수 (1)',
  subtitle: '합의 법칙과 곱의 법칙으로 경우의 수를 구해 보자!',
  lectures: [],
  concepts: [
    {
      id: 'g2d42-c1',
      title: '경우의 수란?',
      content: '어떤 사건이 일어날 수 있는 가짓수를 **경우의 수**라 합니다.\\n\\n예) 주사위를 던질 때 나올 수 있는 눈의 경우의 수: $6$가지\\n예) 동전을 던질 때: $2$가지 (앞면, 뒷면)',
      type: 'definition',
    },
    {
      id: 'g2d42-c2',
      title: '합의 법칙',
      content: '두 사건 $A$, $B$가 **동시에 일어나지 않을 때** (배반사건):\\n\\n$$n(A \\\\text{ 또는 } B) = n(A) + n(B)$$\\n\\n"또는"이 키워드! A가 일어나거나 B가 일어나는 경우의 수\\n\\n예) 주사위에서 3의 배수(2가지) 또는 5의 배수(1가지)\\n→ $2 + 1 = 3$가지',
      type: 'formula',
    },
    {
      id: 'g2d42-c3',
      title: '곱의 법칙',
      content: '두 사건 $A$, $B$가 **연이어 일어날 때**:\\n\\n$$n(A \\\\text{ 그리고 } B) = n(A) \\\\times n(B)$$\\n\\n"그리고"가 키워드! A가 일어나고 이어서 B가 일어나는 경우의 수\\n\\n예) 동전 1개 + 주사위 1개를 던지는 경우의 수\\n→ $2 \\\\times 6 = 12$가지',
      type: 'formula',
    },
    {
      id: 'g2d42-c4',
      title: '합의 법칙 vs 곱의 법칙 구분',
      content: '**합의 법칙**: "~이거나", "~또는" → 더하기\\n**곱의 법칙**: "~이고", "~그리고", "연이어" → 곱하기\\n\\n⚠️ 주의: "동시에 일어나지 않는" 조건 확인!\\n만약 겹치는 경우가 있다면 빼야 합니다.',
      type: 'warning',
    },
  ],
  problems: [
    {
      id: 'g2d42-p1',
      type: 'short-answer',
      difficulty: 'basic',
      question: '서울에서 대전까지 가는 기차가 $3$편, 버스가 $5$편 있다. 서울에서 대전까지 가는 경우의 수를 구하시오.',
      answer: '8',
      explanation: '기차 또는 버스를 타는 것이므로 합의 법칙:\\n$3 + 5 = 8$가지',
    },
    {
      id: 'g2d42-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: '상의 $4$벌과 하의 $3$벌이 있을 때, 상의와 하의를 하나씩 골라 입는 경우의 수를 구하시오.',
      answer: '12',
      explanation: '상의를 고르고 하의를 고르는 것이므로 곱의 법칙:\\n$4 \\\\times 3 = 12$가지',
    },
    {
      id: 'g2d42-p3',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$1$부터 $20$까지의 자연수 중에서 $3$의 배수 또는 $5$의 배수인 것의 개수는?',
      options: ['$9$개', '$10$개', '$11$개', '$12$개'],
      answer: '$9$개',
      explanation: '$3$의 배수: $3, 6, 9, 12, 15, 18$ → $6$개\\n$5$의 배수: $5, 10, 15, 20$ → $4$개\\n$15$의 배수(겹침): $15$ → $1$개\\n\\n$6 + 4 - 1 = 9$개',
    },
    {
      id: 'g2d42-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question: '두 개의 주사위를 동시에 던질 때, 나오는 모든 경우의 수를 구하시오.',
      answer: '36',
      explanation: '첫 번째 주사위: $6$가지\\n두 번째 주사위: $6$가지\\n곱의 법칙: $6 \\\\times 6 = 36$가지',
    },
    {
      id: 'g2d42-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: 'A 도시에서 B 도시로 가는 길이 $3$가지, B에서 C로 가는 길이 $2$가지, A에서 직접 C로 가는 길이 $1$가지일 때, A에서 C로 가는 모든 경우의 수는?',
      options: ['$5$', '$6$', '$7$', '$8$'],
      answer: '$7$',
      explanation: '① A → B → C: 곱의 법칙 $3 \\\\times 2 = 6$가지\\n② A → C (직접): $1$가지\\n\\n①과 ②는 동시에 일어나지 않으므로 합의 법칙:\\n$6 + 1 = 7$가지',
    },
  ],
  realLifeExample: '비밀번호를 설정할 때 경우의 수가 중요해요! 4자리 숫자 비밀번호는 각 자리에 0~9가 가능하므로 곱의 법칙으로 10 x 10 x 10 x 10 = 10,000가지입니다. 영문자를 섞으면 경우의 수가 훨씬 늘어나 보안이 강화되죠!',
};

export default dayContent;
