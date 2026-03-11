import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 22,
  part: 4,
  title: '그래프의 해석',
  subtitle: '그래프를 읽고, 점을 찍고, 그래프가 말하는 이야기를 이해해 보자!',
  lectures: [],
  concepts: [
    {
      id: 'g1d22-c1',
      title: '그래프란?',
      content: '• **그래프**: 두 양 사이의 관계를 좌표평면 위에 나타낸 것\n• x축: **독립변수** (원인, 입력값)\n• y축: **종속변수** (결과, 출력값)\n• 그래프를 보면 두 양이 어떻게 변하는지 한눈에 알 수 있다!',
      type: 'concept',
    },
    {
      id: 'g1d22-c2',
      title: '좌표 읽기와 점 찍기',
      content: '• **점 찍기**: x좌표만큼 가로 이동 → y좌표만큼 세로 이동\n• **좌표 읽기**: 점에서 x축에 수선 → x좌표, y축에 수선 → y좌표\n• 예: 점 $(3, 2)$ → 오른쪽 3, 위로 2 이동한 위치',
      type: 'concept',
    },
    {
      id: 'g1d22-c3',
      title: '그래프 해석하기',
      content: '• 그래프가 **올라가면**: y값이 증가 (x가 커질수록 y도 커짐)\n• 그래프가 **내려가면**: y값이 감소 (x가 커질수록 y는 작아짐)\n• 그래프가 **수평이면**: y값이 변하지 않음 (일정)\n• 그래프가 **가파를수록**: 변화의 속도가 빠름',
      type: 'formula',
    },
  ],
  problems: [
    {
      id: 'g1d22-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '좌표평면에서 점 $(−2, 4)$를 찍으려면 원점에서 어떻게 이동해야 하는가?',
      options: ['오른쪽 2, 위로 4', '왼쪽 2, 위로 4', '왼쪽 2, 아래로 4', '오른쪽 4, 위로 2'],
      answer: '왼쪽 2, 위로 4',
      explanation: '$x = -2$: 왼쪽으로 2만큼 이동\n$y = 4$: 위로 4만큼 이동',
    },
    {
      id: 'g1d22-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '시간에 따른 물의 온도 그래프에서 그래프가 수평 구간일 때, 이는 무엇을 의미하는가?',
      options: ['온도가 올라감', '온도가 내려감', '온도가 일정함', '측정하지 않음'],
      answer: '온도가 일정함',
      explanation: '그래프가 **수평**이면 y값(온도)이 변하지 않고 **일정**하다는 뜻입니다.',
    },
    {
      id: 'g1d22-p3',
      type: 'short-answer',
      difficulty: 'applied',
      question: '세 점 $A(1, 2)$, $B(2, 4)$, $C(3, 6)$이 일직선 위에 있다. $x = 4$일 때 $y$값을 구하시오.',
      answer: '8',
      explanation: '규칙: $x$가 1 증가할 때 $y$는 2 증가\n\n$x = 1 → y = 2$\n$x = 2 → y = 4$\n$x = 3 → y = 6$\n$x = 4 → y = 8$\n\n또는 $y = 2x$이므로 $y = 2 \\times 4 = 8$',
    },
    {
      id: 'g1d22-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '어떤 그래프가 원점에서 시작하여 점점 가파르게 올라간다. 이 그래프에 대한 설명으로 옳은 것은?',
      options: ['y가 일정하게 증가', 'y가 점점 빠르게 증가', 'y가 감소', 'y가 변하지 않음'],
      answer: 'y가 점점 빠르게 증가',
      explanation: '그래프가 **점점 가파르게** 올라간다는 것은 x가 같은 양만큼 변할 때 y의 증가량이 **점점 커진다**는 뜻입니다.',
    },
    {
      id: 'g1d22-p5',
      type: 'short-answer',
      difficulty: 'challenge',
      question: '점 $A(1, 3)$, $B(3, 7)$이 있다. 두 점을 지나는 직선 위에서 $x = 5$일 때 $y$값을 구하시오.',
      answer: '11',
      explanation: '$x$가 $1 → 3$으로 2 증가할 때\n$y$가 $3 → 7$로 4 증가\n\n$x$가 1 증가할 때 $y$는 2 증가\n\n$x = 3$일 때 $y = 7$이므로\n$x = 5$일 때 $y = 7 + 2 \\times 2 = 11$',
    },
  ],
  realLifeExample: '주식 차트, 기온 변화 그래프, 다이어트 체중 변화 등 우리 주변의 수많은 데이터가 그래프로 표현됩니다. 그래프를 읽을 줄 알면 뉴스의 통계도 정확히 이해할 수 있어요!',
};

export default dayContent;
