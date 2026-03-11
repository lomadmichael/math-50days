import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 44,
  part: 10,
  title: '음수의 세계 첫걸음',
  subtitle: '중1 정수 — 0보다 작은 수',
  lectures: [],
  concepts: [
    {
      id: 'f10d44-c1',
      title: '양수와 음수',
      content:
        '양수(+): 0보다 큰 수 → $+1, +2, +3, ...$\\n음수(-): 0보다 작은 수 → $-1, -2, -3, ...$\\n0은 양수도 음수도 아닙니다.\\n\\n정수: ..., $-3, -2, -1, 0, +1, +2, +3, ...$',
      type: 'definition',
    },
    {
      id: 'f10d44-c2',
      title: '수직선에서 음수',
      content:
        '수직선에서 오른쪽은 양수, 왼쪽은 음수\\n$-3$은 $0$에서 왼쪽으로 3칸\\n절댓값: 수직선에서 0까지의 거리 → $|-3| = 3$, $|5| = 5$',
      type: 'definition',
    },
    {
      id: 'f10d44-c3',
      title: '정수의 덧셈과 뺄셈',
      content:
        '같은 부호끼리 더하기: 절댓값을 더하고 공통 부호 붙이기\\n$(+3) + (+5) = +8$, $(-3) + (-5) = -8$\\n\\n다른 부호끼리 더하기: 절댓값의 차에 절댓값이 큰 쪽의 부호\\n$(+7) + (-3) = +4$, $(-7) + (+3) = -4$\\n\\n빼기는 부호를 바꿔서 더하기: $5 - (-3) = 5 + 3 = 8$',
      type: 'formula',
    },
  ],
  problems: [
    {
      id: 'fd44-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$-5$의 절댓값은?',
      options: ['$-5$', '$0$', '$5$', '$10$'],
      answer: '$5$',
      explanation:
        '절댓값은 0까지의 거리이므로 $|-5| = 5$',
    },
    {
      id: 'fd44-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: '$(+4) + (-9)$의 값은?',
      answer: '-5',
      explanation:
        '절댓값의 차: $9 - 4 = 5$, 절댓값이 큰 $-9$의 부호를 따라 $-5$',
    },
    {
      id: 'fd44-p3',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$(-6) - (-2)$의 값은?',
      options: ['$-8$', '$-4$', '$4$', '$8$'],
      answer: '$-4$',
      explanation:
        '$(-6) - (-2) = (-6) + (+2) = -4$',
    },
    {
      id: 'fd44-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question:
        '$-3, +7, -1, 0, +2$를 작은 수부터 순서대로 나열할 때, 두 번째로 작은 수는?',
      answer: '-1',
      explanation:
        '순서: $-3, -1, 0, +2, +7$ → 두 번째로 작은 수는 $-1$',
    },
    {
      id: 'fd44-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '$(-3) + (+8) + (-5) + (+2)$의 값은?',
      options: ['$-2$', '$0$', '$2$', '$18$'],
      answer: '$2$',
      explanation:
        '양수 합: $8 + 2 = 10$, 음수 합: $3 + 5 = 8$, 결과: $10 - 8 = 2$',
    },
  ],
  realLifeExample:
    '겨울철 기온이 영하 5도($-5°C$)라고 할 때 음수를 사용해요. 엘리베이터 지하 2층은 $-2$층, 빚이 있으면 재산이 마이너스인 거예요!',
};

export default dayContent;
