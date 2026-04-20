import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 46,
  part: 10,
  title: '좌표평면 첫걸음',
  subtitle: '중1 좌표와 그래프 — 점의 위치 나타내기',
  lectures: [],
  concepts: [
    {
      id: 'f10d46-c1',
      title: '좌표평면',
      content:
        '가로축(x축)과 세로축(y축)이 원점 O에서 만나 좌표평면을 만듭니다.\\n점의 위치는 순서쌍 $(x, y)$로 나타냅니다.\\n• $x$좌표: 가로 방향 위치 (오른쪽 +, 왼쪽 -)\\n• $y$좌표: 세로 방향 위치 (위쪽 +, 아래쪽 -)',
      type: 'definition',
    },
    {
      id: 'f10d46-c2',
      title: '사분면',
      content:
        '좌표평면은 4개의 영역(사분면)으로 나뉩니다.\\n• 제1사분면: $(+, +)$ → 오른쪽 위\\n• 제2사분면: $(-, +)$ → 왼쪽 위\\n• 제3사분면: $(-, -)$ → 왼쪽 아래\\n• 제4사분면: $(+, -)$ → 오른쪽 아래\\n축 위의 점은 어떤 사분면에도 속하지 않습니다.',
      type: 'definition',
    },
    {
      id: 'f10d46-c3',
      title: '정비례 그래프 맛보기',
      content:
        '$y = ax$ 형태의 식을 좌표평면에 그리면 원점을 지나는 직선입니다.\\n$a > 0$: 오른쪽 위로 올라감\\n$a < 0$: 오른쪽 아래로 내려감',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'fd46-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '점 $(3, -2)$는 어느 사분면에 있나요?',
      options: ['제1사분면', '제2사분면', '제3사분면', '제4사분면'],
      answer: '제4사분면',
      explanation:
        '$x$좌표가 양수(+), $y$좌표가 음수(-)이면 제4사분면입니다.',
    },
    {
      id: 'fd46-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '원점의 좌표는?',
      options: ['$(1, 1)$', '$(0, 1)$', '$(0, 0)$', '$(1, 0)$'],
      answer: '$(0, 0)$',
      explanation: '원점은 x축과 y축이 만나는 점이므로 $(0, 0)$입니다.',
    },
    {
      id: 'fd46-p3',
      type: 'short-answer',
      difficulty: 'applied',
      question:
        '점 $(-4, 5)$는 제 몇 사분면에 있나요? (숫자만)',
      answer: '2',
      explanation:
        '$x$좌표가 음수(-), $y$좌표가 양수(+)이면 제2사분면입니다.',
    },
    {
      id: 'fd46-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question:
        '$y = 2x$에서 $x = 3$일 때 $y$의 값은?',
      options: ['$2$', '$3$', '$5$', '$6$'],
      answer: '$6$',
      explanation: '$y = 2 \\times 3 = 6$',
    },
    {
      id: 'fd46-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question:
        '점 $(a, b)$가 제3사분면에 있을 때, 점 $(-a, -b)$는 어느 사분면에 있나요?',
      options: ['제1사분면', '제2사분면', '제3사분면', '제4사분면'],
      answer: '제1사분면',
      explanation:
        '제3사분면에서 $a < 0, b < 0$이므로 $-a > 0, -b > 0$ → 제1사분면',
    },
  ],
  realLifeExample:
    '지도에서 위도와 경도로 위치를 나타내는 것은 좌표와 같아요. 게임에서 캐릭터의 위치(x, y)를 표시하는 것도 좌표평면 원리입니다!',
};

export default dayContent;
