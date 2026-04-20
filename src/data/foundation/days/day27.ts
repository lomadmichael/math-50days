import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 27,
  part: 6,
  title: '삼각형/사각형의 종류와 성질',
  subtitle: '기본도형 — 변과 각으로 분류하기',
  lectures: [],
  concepts: [
    {
      id: 'f6d27-c1',
      title: '삼각형의 분류',
      content:
        '변의 길이로 분류:\\n• 정삼각형: 세 변의 길이가 모두 같음\\n• 이등변삼각형: 두 변의 길이가 같음\\n• 부등변삼각형: 세 변의 길이가 모두 다름\\n\\n각의 크기로 분류:\\n• 예각삼각형: 세 각이 모두 $90°$보다 작음\\n• 직각삼각형: 한 각이 $90°$\\n• 둔각삼각형: 한 각이 $90°$보다 큼',
      type: 'definition',
    },
    {
      id: 'f6d27-c2',
      title: '삼각형 내각의 합',
      content:
        '삼각형의 세 내각의 합은 항상 $180°$입니다.\\n예) 세 각이 $60° + 70° + 50° = 180°$',
      type: 'formula',
    },
    {
      id: 'f6d27-c3',
      title: '사각형의 종류',
      content:
        '• 정사각형: 네 변의 길이가 같고 네 각이 $90°$\\n• 직사각형: 네 각이 $90°$ (마주보는 변의 길이가 같음)\\n• 평행사변형: 마주보는 두 쌍의 변이 평행\\n• 마름모: 네 변의 길이가 같음\\n• 사다리꼴: 한 쌍의 변만 평행',
      type: 'definition',
    },
    {
      id: 'f6d27-c4',
      title: '사각형 내각의 합',
      content:
        '사각형의 네 내각의 합은 항상 $360°$입니다.\\n사각형은 대각선으로 두 삼각형으로 나눌 수 있어서 $180° \\times 2 = 360°$',
      type: 'formula',
    },
  ],
  problems: [
    {
      id: 'fd27-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '세 변의 길이가 5cm, 5cm, 8cm인 삼각형은 어떤 삼각형인가요?',
      options: ['정삼각형', '이등변삼각형', '부등변삼각형', '직각삼각형'],
      answer: '이등변삼각형',
      explanation: '두 변의 길이(5cm)가 같으므로 이등변삼각형입니다.',
    },
    {
      id: 'fd27-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: '삼각형의 두 각이 $45°$와 $70°$입니다. 나머지 한 각은 몇 도인가요?',
      answer: '65',
      explanation:
        '삼각형 내각의 합은 $180°$이므로 $180° - 45° - 70° = 65°$입니다.',
    },
    {
      id: 'fd27-p3',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '마주보는 두 쌍의 변이 평행하고 네 변의 길이가 모두 같은 도형은?',
      options: ['직사각형', '평행사변형', '마름모', '사다리꼴'],
      answer: '마름모',
      explanation:
        '마주보는 변이 평행하면서 네 변의 길이가 같은 사각형은 마름모입니다.',
    },
    {
      id: 'fd27-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question:
        '평행사변형에서 한 각이 $110°$입니다. 이웃한 각의 크기는 몇 도인가요?',
      answer: '70',
      explanation:
        '평행사변형에서 이웃한 두 각의 합은 $180°$이므로 $180° - 110° = 70°$입니다.',
    },
    {
      id: 'fd27-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '다음 중 정사각형의 성질이 아닌 것은?',
      options: [
        '네 변의 길이가 모두 같다',
        '네 각이 모두 직각이다',
        '두 대각선의 길이가 다르다',
        '두 대각선이 서로 수직으로 만난다',
      ],
      answer: '두 대각선의 길이가 다르다',
      explanation:
        '정사각형의 두 대각선은 길이가 같고, 서로 수직으로 만납니다.',
    },
  ],
  realLifeExample:
    '건물 지붕은 삼각형 모양이 많아요. 삼각형은 힘을 잘 분산시켜서 튼튼하기 때문이에요. 다리를 지을 때도 삼각형 구조(트러스)를 많이 씁니다!',
};

export default dayContent;
