import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 48,
  part: 10,
  title: '미니테스트 + 복습',
  subtitle: 'PART 10 총정리 — 중학 연결',
  isTest: true,
  lectures: [],
  concepts: [
    {
      id: 'f10d48-c1',
      title: '중학 연결 핵심 정리',
      content:
        '• 정수: 양수, 0, 음수 / 절댓값 = 0까지의 거리\\n• 문자식: 곱셈 기호 생략, 대입하여 식의 값 구하기\\n• 좌표평면: $(x, y)$로 점의 위치, 4개의 사분면\\n• 기본도형: 맞꼭지각(같음), 동위각·엇각(평행선에서 같음)',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'fd48-p1',
      type: 'short-answer',
      difficulty: 'basic',
      question: '$(-8) + (+3)$의 값은?',
      answer: '-5',
      explanation: '$|-8| - |+3| = 5$, 절댓값이 큰 쪽의 부호(-) → $-5$',
    },
    {
      id: 'fd48-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '점 $(-2, -7)$는 제 몇 사분면에 있나요?',
      options: ['제1사분면', '제2사분면', '제3사분면', '제4사분면'],
      answer: '제3사분면',
      explanation: '$x < 0, y < 0$이면 제3사분면입니다.',
    },
    {
      id: 'fd48-p3',
      type: 'short-answer',
      difficulty: 'applied',
      question: '$5a - 3b$에 $a = 2, b = 4$를 대입한 값은?',
      answer: '-2',
      explanation: '$5 \\times 2 - 3 \\times 4 = 10 - 12 = -2$',
    },
    {
      id: 'fd48-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question:
        '맞꼭지각 중 하나가 $75°$일 때, 이웃한 각의 크기는?',
      options: ['$75°$', '$105°$', '$115°$', '$180°$'],
      answer: '$105°$',
      explanation: '이웃한 각의 합은 $180°$이므로 $180° - 75° = 105°$',
    },
    {
      id: 'fd48-p5',
      type: 'short-answer',
      difficulty: 'challenge',
      question: '$(-2)^3$의 값은?',
      answer: '-8',
      explanation:
        '$(-2)^3 = (-2) \\times (-2) \\times (-2) = 4 \\times (-2) = -8$',
    },
    {
      id: 'fd48-p6',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question:
        '$y = -3x$에서 $x = -2$일 때 점 $(x, y)$는 어느 사분면에 있나요?',
      options: ['제1사분면', '제2사분면', '제3사분면', '제4사분면'],
      answer: '제2사분면',
      explanation:
        '$y = -3 \\times (-2) = 6$이므로 점 $(-2, 6)$ → $x < 0, y > 0$ → 제2사분면',
    },
  ],
  realLifeExample:
    '중학교 수학은 초등 수학의 확장이에요. 음수, 문자, 좌표평면은 과학, 공학, 경제학 등 거의 모든 분야에서 사용되는 기초 도구랍니다!',
};

export default dayContent;
