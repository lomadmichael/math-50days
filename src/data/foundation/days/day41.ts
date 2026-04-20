import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 41,
  part: 9,
  title: '평균 구하기',
  subtitle: '대푯값 — 자료를 대표하는 값',
  lectures: [],
  concepts: [
    {
      id: 'f9d41-c1',
      title: '평균(산술평균)',
      content:
        '평균 = $\\frac{모든 값의 합}{값의 개수}$\\n\\n예) 시험 점수 80, 90, 70, 100의 평균\\n$\\frac{80 + 90 + 70 + 100}{4} = \\frac{340}{4} = 85$점',
      type: 'formula',
    },
    {
      id: 'f9d41-c2',
      title: '중앙값과 최빈값',
      content:
        '중앙값: 자료를 크기순으로 나열했을 때 가운데 값\\n• 자료 수가 홀수: 가운데 하나\\n• 자료 수가 짝수: 가운데 두 수의 평균\\n\\n최빈값: 가장 자주 나타나는 값',
      type: 'definition',
    },
    {
      id: 'f9d41-c3',
      title: '평균의 함정',
      content:
        '극단적인 값(이상치)이 있으면 평균이 크게 변합니다.\\n예) 5명의 용돈: 5000, 5000, 6000, 5000, 100000원\\n평균 = 24200원이지만 실제 대부분은 5000~6000원\\n이런 경우 중앙값(5000원)이 더 대표적일 수 있어요.',
      type: 'warning',
    },
  ],
  problems: [
    {
      id: 'fd41-p1',
      type: 'short-answer',
      difficulty: 'basic',
      question: '4, 6, 8, 10, 12의 평균은?',
      answer: '8',
      explanation:
        '$\\frac{4 + 6 + 8 + 10 + 12}{5} = \\frac{40}{5} = 8$',
    },
    {
      id: 'fd41-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '3, 5, 5, 7, 9에서 중앙값은?',
      options: ['3', '5', '7', '9'],
      answer: '5',
      explanation:
        '이미 크기순으로 나열되어 있고, 5개 중 가운데(3번째) 값은 5입니다.',
    },
    {
      id: 'fd41-p3',
      type: 'short-answer',
      difficulty: 'applied',
      question:
        '5번의 시험에서 평균이 82점이 되려면 총 몇 점이어야 하나요?',
      answer: '410',
      explanation:
        '평균 $\\times$ 개수 = 합계이므로 $82 \\times 5 = 410$점',
    },
    {
      id: 'fd41-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question:
        '2, 3, 3, 5, 3, 7, 8에서 최빈값은?',
      options: ['2', '3', '5', '7'],
      answer: '3',
      explanation: '3이 3번으로 가장 많이 나타나므로 최빈값은 3입니다.',
    },
    {
      id: 'fd41-p5',
      type: 'short-answer',
      difficulty: 'challenge',
      question:
        '4번의 시험 평균이 85점입니다. 5번째 시험에서 몇 점을 받아야 전체 평균이 88점이 되나요?',
      answer: '100',
      explanation:
        '4번 합계 = $85 \\times 4 = 340$점, 5번 합계 목표 = $88 \\times 5 = 440$점, 5번째 점수 = $440 - 340 = 100$점',
    },
  ],
  realLifeExample:
    '학교 성적표의 평균 점수, 프로야구 선수의 타율, 날씨 예보의 평균 기온 등 평균은 일상에서 가장 많이 쓰이는 통계값이에요!',
};

export default dayContent;
