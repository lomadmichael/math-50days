import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 40,
  part: 9,
  title: '표와 그래프 읽기',
  subtitle: '도수분포표 — 자료를 정리하는 방법',
  lectures: [],
  concepts: [
    {
      id: 'f9d40-c1',
      title: '자료 정리하기',
      content:
        '자료를 표로 정리하면 한눈에 파악할 수 있습니다.\\n• 줄기와 잎 그림: 십의 자리(줄기)와 일의 자리(잎)로 분리\\n• 도수분포표: 구간(계급)별로 자료의 수(도수)를 세어 정리',
      type: 'definition',
    },
    {
      id: 'f9d40-c2',
      title: '도수분포표 용어',
      content:
        '• 계급: 자료를 나누는 구간 (예: 60점 이상 70점 미만)\\n• 도수: 각 계급에 속하는 자료의 수\\n• 계급의 크기: 구간의 폭 (예: 70 - 60 = 10)\\n• 계급값: 계급의 가운데 값 (예: $\\frac{60+70}{2} = 65$)',
      type: 'definition',
    },
    {
      id: 'f9d40-c3',
      title: '그래프의 종류',
      content:
        '• 막대그래프: 양을 막대 길이로 비교\\n• 꺾은선그래프: 시간에 따른 변화를 선으로 표현\\n• 원그래프: 전체에 대한 각 부분의 비율\\n• 띠그래프: 전체를 띠 모양으로 나누어 비율 표현',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'fd40-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question:
        '학생 30명의 수학 점수를 10점 간격으로 나눌 때, "80점 이상 90점 미만"에 해당하는 학생이 8명이면 이 계급의 도수는?',
      options: ['10', '8', '80', '90'],
      answer: '8',
      explanation: '도수는 해당 계급에 속하는 자료의 수이므로 8명입니다.',
    },
    {
      id: 'fd40-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question:
        '계급이 "50 이상 60 미만"일 때, 계급값은?',
      answer: '55',
      explanation:
        '계급값 = $\\frac{50 + 60}{2} = 55$',
    },
    {
      id: 'fd40-p3',
      type: 'multiple-choice',
      difficulty: 'applied',
      question:
        '시간에 따른 기온 변화를 나타내기에 가장 적합한 그래프는?',
      options: ['막대그래프', '원그래프', '꺾은선그래프', '띠그래프'],
      answer: '꺾은선그래프',
      explanation:
        '꺾은선그래프는 시간에 따른 변화(추이)를 나타내기에 가장 적합합니다.',
    },
    {
      id: 'fd40-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question:
        '도수분포표에서 각 계급의 도수가 3, 5, 8, 10, 4일 때, 전체 자료의 수는?',
      answer: '30',
      explanation:
        '전체 자료 수 = 모든 도수의 합 = $3 + 5 + 8 + 10 + 4 = 30$',
    },
    {
      id: 'fd40-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question:
        '원그래프에서 "운동" 항목이 $90°$를 차지한다면 전체의 몇 %인가요?',
      options: ['9%', '25%', '30%', '90%'],
      answer: '25%',
      explanation:
        '원 전체가 $360°$이므로 $\\frac{90}{360} \\times 100 = 25$%',
    },
  ],
  realLifeExample:
    '뉴스에서 보는 코로나 확진자 수 그래프, 선거 득표율 원그래프, 기온 변화 꺾은선그래프 등 우리 주변에 그래프가 아주 많아요. 그래프를 읽을 줄 알면 세상을 더 잘 이해할 수 있어요!',
};

export default dayContent;
