import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 42,
  part: 9,
  title: '가능성과 경우의 수',
  subtitle: '확률 기초 — 일어날 수 있는 경우 세기',
  lectures: [],
  concepts: [
    {
      id: 'f9d42-c1',
      title: '경우의 수',
      content:
        '어떤 일이 일어날 수 있는 모든 가짓수\\n• 동전 1개: 앞면, 뒷면 → 2가지\\n• 주사위 1개: 1, 2, 3, 4, 5, 6 → 6가지\\n• 동전 2개: (앞,앞), (앞,뒤), (뒤,앞), (뒤,뒤) → 4가지',
      type: 'definition',
    },
    {
      id: 'f9d42-c2',
      title: '경우의 수 곱의 법칙',
      content:
        '두 가지 일이 동시에 일어날 때:\\n전체 경우의 수 = 경우의 수1 $\\\\times$ 경우의 수2\\n\\n예) 상의 3벌, 하의 4벌 → 조합 = $3 \\\\times 4 = 12$가지',
      type: 'formula',
    },
    {
      id: 'f9d42-c3',
      title: '가능성(확률)의 기초',
      content:
        '확률 = $\\\\frac{원하는 경우의 수}{전체 경우의 수}$\\n\\n• 확률은 0과 1 사이의 값 (0% ~ 100%)\\n• 반드시 일어남 → 확률 = 1\\n• 절대 안 일어남 → 확률 = 0\\n• "반반" → 확률 = $\\\\frac{1}{2}$',
      type: 'formula',
    },
  ],
  problems: [
    {
      id: 'fd42-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '주사위를 던져서 짝수가 나오는 경우의 수는?',
      options: ['1가지', '2가지', '3가지', '6가지'],
      answer: '3가지',
      explanation: '짝수: 2, 4, 6 → 3가지',
    },
    {
      id: 'fd42-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question:
        '동전 1개를 던져서 앞면이 나올 확률을 분수로 나타내세요. (예: 1/2)',
      answer: '1/2',
      explanation:
        '전체 2가지 중 앞면 1가지이므로 $\\\\frac{1}{2}$',
    },
    {
      id: 'fd42-p3',
      type: 'multiple-choice',
      difficulty: 'applied',
      question:
        '빨강, 파랑, 노랑 모자 3개와 흰색, 검정 가방 2개가 있습니다. 모자와 가방을 한 개씩 고르는 경우의 수는?',
      options: ['5가지', '6가지', '8가지', '9가지'],
      answer: '6가지',
      explanation: '곱의 법칙: $3 \\\\times 2 = 6$가지',
    },
    {
      id: 'fd42-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question:
        '1부터 10까지 적힌 카드 중 한 장을 뽑을 때, 3의 배수가 나올 확률을 분수로 나타내세요. (예: 3/10)',
      answer: '3/10',
      explanation:
        '3의 배수: 3, 6, 9 → 3가지, 확률 = $\\\\frac{3}{10}$',
    },
    {
      id: 'fd42-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question:
        '주사위 2개를 동시에 던질 때 전체 경우의 수는?',
      options: ['6가지', '12가지', '24가지', '36가지'],
      answer: '36가지',
      explanation:
        '주사위 1개가 6가지이므로 $6 \\\\times 6 = 36$가지',
    },
  ],
  realLifeExample:
    '가위바위보에서 이길 확률은 $\\\\frac{1}{3}$이에요. 로또 1등에 당첨될 확률은 약 $\\\\frac{1}{8145060}$으로 매우 작아요. 확률을 알면 합리적인 판단을 할 수 있답니다!',
};

export default dayContent;
