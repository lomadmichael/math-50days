import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 30,
  part: 6,
  title: '합동과 대칭',
  subtitle: '합동 조건 — 도형의 닮음과 대칭',
  lectures: [],
  concepts: [
    {
      id: 'f6d30-c1',
      title: '합동이란?',
      content:
        '두 도형의 모양과 크기가 완전히 같을 때 "합동"이라고 합니다.\\n합동인 두 도형은 포개었을 때 완전히 겹칩니다.\\n대응하는 변의 길이가 같고, 대응하는 각의 크기가 같습니다.',
      type: 'definition',
    },
    {
      id: 'f6d30-c2',
      title: '삼각형의 합동 조건',
      content:
        '다음 중 하나를 만족하면 두 삼각형은 합동입니다.\\n• SSS: 세 변의 길이가 각각 같을 때\\n• SAS: 두 변의 길이와 그 끼인각이 같을 때\\n• ASA: 한 변의 길이와 양 끝 각이 같을 때',
      type: 'formula',
    },
    {
      id: 'f6d30-c3',
      title: '선대칭과 점대칭',
      content:
        '선대칭: 한 직선을 중심으로 접었을 때 완전히 겹치는 도형\\n→ 그 직선을 "대칭축"이라 합니다.\\n\\n점대칭: 한 점을 중심으로 $180°$ 돌렸을 때 원래와 겹치는 도형\\n→ 그 점을 "대칭의 중심"이라 합니다.',
      type: 'definition',
    },
  ],
  problems: [
    {
      id: 'fd30-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '두 삼각형이 합동이 되려면 반드시 같아야 하는 것은?',
      options: [
        '색깔',
        '위치',
        '대응하는 변과 각',
        '둘레의 길이만',
      ],
      answer: '대응하는 변과 각',
      explanation:
        '합동은 모양과 크기가 같은 것이므로 대응하는 변의 길이와 각의 크기가 모두 같아야 합니다.',
    },
    {
      id: 'fd30-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '정사각형의 대칭축은 몇 개인가요?',
      options: ['1개', '2개', '4개', '8개'],
      answer: '4개',
      explanation:
        '정사각형은 가로, 세로, 두 대각선 방향으로 총 4개의 대칭축이 있습니다.',
    },
    {
      id: 'fd30-p3',
      type: 'multiple-choice',
      difficulty: 'applied',
      question:
        '두 삼각형의 세 변이 각각 3cm, 4cm, 5cm와 3cm, 4cm, 5cm입니다. 어떤 합동 조건에 해당하나요?',
      options: ['SSS', 'SAS', 'ASA', '합동이 아니다'],
      answer: 'SSS',
      explanation:
        '세 변의 길이가 각각 같으므로 SSS(세 변) 합동 조건입니다.',
    },
    {
      id: 'fd30-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '다음 중 점대칭도형인 것은?',
      options: ['정삼각형', '평행사변형', '이등변삼각형', '반원'],
      answer: '평행사변형',
      explanation:
        '평행사변형은 대각선의 교점을 중심으로 $180°$ 돌리면 원래 도형과 겹칩니다.',
    },
    {
      id: 'fd30-p5',
      type: 'short-answer',
      difficulty: 'challenge',
      question:
        '정육각형의 대칭축은 몇 개인가요?',
      answer: '6',
      explanation:
        '정육각형은 마주보는 꼭짓점을 잇는 선 3개, 마주보는 변의 중점을 잇는 선 3개, 총 6개의 대칭축이 있습니다.',
    },
  ],
  realLifeExample:
    '나비의 양쪽 날개는 선대칭이에요. 트럼프 카드의 무늬를 위아래로 돌려보면 점대칭인 것을 알 수 있답니다!',
};

export default dayContent;
