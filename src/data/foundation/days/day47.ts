import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 47,
  part: 10,
  title: '도형의 성질 첫걸음',
  subtitle: '중1 기본도형 — 직선, 각, 위치 관계',
  lectures: [],
  concepts: [
    {
      id: 'f10d47-c1',
      title: '직선, 반직선, 선분',
      content:
        '• 직선: 양쪽으로 끝없이 뻗은 곧은 선 (직선 AB ↔)\\n• 반직선: 한 점에서 한 방향으로 뻗은 선 (반직선 AB →)\\n• 선분: 두 점을 잇는 곧은 선 (선분 AB ─)',
      type: 'definition',
    },
    {
      id: 'f10d47-c2',
      title: '각의 종류와 관계',
      content:
        '• 맞꼭지각: 두 직선이 만날 때 마주보는 각 → 크기가 같음\\n• 동위각: 평행선과 한 직선이 만들 때 같은 위치의 각\\n• 엇각: 평행선과 한 직선이 만들 때 엇갈린 위치의 각\\n\\n평행선에서: 동위각의 크기가 같고, 엇각의 크기가 같습니다.',
      type: 'formula',
    },
    {
      id: 'f10d47-c3',
      title: '수직과 평행',
      content:
        '수직($\\perp$): 두 직선이 $90°$로 만남\\n평행($\\parallel$): 두 직선이 만나지 않음 (같은 평면 위에서)\\n\\n점과 직선 사이의 거리: 점에서 직선에 내린 수선의 길이 (최단 거리)',
      type: 'definition',
    },
  ],
  problems: [
    {
      id: 'fd47-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '두 직선이 만날 때 생기는 맞꼭지각의 관계는?',
      options: [
        '항상 $90°$',
        '합이 $180°$',
        '크기가 같다',
        '합이 $360°$',
      ],
      answer: '크기가 같다',
      explanation: '맞꼭지각은 항상 크기가 같습니다.',
    },
    {
      id: 'fd47-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question:
        '맞꼭지각 중 하나가 $65°$이면, 맞은편 각은 몇 도인가요?',
      answer: '65',
      explanation: '맞꼭지각은 크기가 같으므로 $65°$입니다.',
    },
    {
      id: 'fd47-p3',
      type: 'multiple-choice',
      difficulty: 'applied',
      question:
        '두 평행선을 한 직선이 지날 때, 동위각 중 하나가 $110°$이면 그 엇각은?',
      options: ['$70°$', '$90°$', '$110°$', '$180°$'],
      answer: '$110°$',
      explanation:
        '평행선에서 동위각과 엇각은 크기가 같으므로 엇각도 $110°$입니다.',
    },
    {
      id: 'fd47-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question:
        '두 직선이 만들어내는 한 각이 $130°$일 때, 이웃한 각은 몇 도인가요?',
      answer: '50',
      explanation:
        '이웃한 두 각의 합은 $180°$이므로 $180° - 130° = 50°$',
    },
    {
      id: 'fd47-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question:
        '다각형의 내각의 합이 $720°$인 도형은?',
      options: ['사각형', '오각형', '육각형', '칠각형'],
      answer: '육각형',
      explanation:
        '$n$각형의 내각의 합 = $(n-2) \\times 180°$이므로 $(n-2) \\times 180 = 720$ → $n-2 = 4$ → $n = 6$ (육각형)',
    },
  ],
  realLifeExample:
    '철도 레일은 서로 평행하고, 기차가 교차로에서 다른 선로를 만날 때 생기는 각도는 동위각과 엇각의 원리를 따릅니다. 건축에서도 기둥은 수직, 바닥은 수평으로 만들어요!',
};

export default dayContent;
