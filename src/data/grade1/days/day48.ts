import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 48,
  part: 8,
  title: '미니테스트 + 복습',
  subtitle: 'PART 8 자료의 정리 총정리! 통계의 기본기를 확인하자.',
  lectures: [],
  concepts: [
    {
      id: 'g1d48-c1',
      title: 'PART 8 핵심 요약: 자료 정리 방법',
      content: '• **줄기와 잎 그림**: 원래 데이터를 보존하며 분포 파악\n• **도수분포표**: 계급(구간)별 도수 정리, 계급값 = $\\frac{\\text{위 끝 + 아래 끝}}{2}$\n• **히스토그램**: 도수분포표를 막대그래프로 (막대 사이 빈틈 없음)\n• **도수분포다각형**: 계급값 위에 점 찍고 선분 연결, 두 집단 비교에 유리\n• **상대도수**: $\\frac{\\text{그 계급의 도수}}{\\text{전체 도수}}$, 합 = 1\n• **대푯값**: 평균, 중앙값(가운데 값), 최빈값(가장 많은 값)',
      type: 'formula',
    },
    {
      id: 'g1d48-c2',
      title: 'PART 8 핵심 요약: 주의할 점',
      content: '• 도수분포표에서는 **원래 자료의 정확한 값**을 알 수 없음\n• 상대도수는 **자료 수가 다른 두 집단 비교**에 필수\n• **극단값**이 있으면 평균보다 중앙값이 적절\n• 도수분포다각형의 넓이 = 히스토그램의 넓이 = 계급의 크기 $\\times$ 도수의 합',
      type: 'concept',
    },
  ],
  problems: [
    {
      id: 'g1d48-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '줄기와 잎 그림에서 줄기가 3이고 잎이 2, 5, 8일 때, 이 세 자료의 값은?',
      options: ['3, 2, 5, 8', '32, 35, 38', '23, 53, 83', '320, 350, 380'],
      answer: '32, 35, 38',
      explanation: '줄기 = 십의 자리 = 3\n잎 = 일의 자리 = 2, 5, 8\n\n따라서 자료: **32, 35, 38**',
    },
    {
      id: 'g1d48-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: '계급이 20이상~30미만일 때, 계급의 크기와 계급값을 차례로 구하시오. (쉼표로 구분)',
      answer: '10, 25',
      explanation: '계급의 크기 = $30 - 20 = 10$\n계급값 = $\\frac{20 + 30}{2} = 25$',
    },
    {
      id: 'g1d48-p3',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '히스토그램과 일반 막대그래프의 가장 큰 차이점은?',
      options: [
        '히스토그램은 색깔이 있다',
        '히스토그램은 막대 사이에 빈틈이 없다',
        '히스토그램은 세로로만 그린다',
        '히스토그램은 3개 이상의 막대가 필요하다',
      ],
      answer: '히스토그램은 막대 사이에 빈틈이 없다',
      explanation: '히스토그램은 연속적인 자료를 구간별로 나타내므로 막대 사이에 **빈틈이 없습니다**. 일반 막대그래프는 범주형 자료를 나타내므로 막대 사이에 간격이 있습니다.',
    },
    {
      id: 'g1d48-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question: '전체 학생 수가 40명이고 어떤 계급의 상대도수가 0.35일 때, 이 계급의 도수는?',
      answer: '14',
      explanation: '상대도수 $= \\frac{\\text{도수}}{\\text{전체}}$\n\n$0.35 = \\frac{\\text{도수}}{40}$\n\n도수 $= 40 \\times 0.35 = 14$',
    },
    {
      id: 'g1d48-p5',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '자료 1, 3, 5, 5, 7, 9에서 평균, 중앙값, 최빈값을 구하면?',
      options: [
        '평균 5, 중앙값 5, 최빈값 5',
        '평균 5, 중앙값 4, 최빈값 5',
        '평균 6, 중앙값 5, 최빈값 5',
        '평균 5, 중앙값 5, 최빈값 3',
      ],
      answer: '평균 5, 중앙값 5, 최빈값 5',
      explanation: '평균 = $\\frac{1+3+5+5+7+9}{6} = \\frac{30}{6} = 5$\n\n중앙값: 6개(짝수)이므로 3번째와 4번째의 평균 = $\\frac{5+5}{2} = 5$\n\n최빈값: 5가 2번으로 가장 많음 → 5\n\n모두 **5**로 같습니다!',
    },
    {
      id: 'g1d48-p6',
      type: 'short-answer',
      difficulty: 'challenge',
      question: 'A반(20명)에서 70점 이상의 상대도수가 0.6이고, B반(30명)에서 70점 이상의 상대도수가 0.4일 때, 두 반을 합친 70점 이상의 상대도수는? (소수 둘째 자리까지)',
      answer: '0.48',
      explanation: 'A반 70점 이상: $20 \\times 0.6 = 12$명\nB반 70점 이상: $30 \\times 0.4 = 12$명\n\n합계: 70점 이상 $= 12 + 12 = 24$명\n전체: $20 + 30 = 50$명\n\n상대도수 $= \\frac{24}{50} = 0.48$',
    },
    {
      id: 'g1d48-p7',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '도수분포표에서 계급의 크기가 5이고, 도수분포다각형과 가로축 사이의 넓이가 150일 때, 상대도수의 합은?',
      options: ['0.5', '1', '30', '150'],
      answer: '1',
      explanation: '상대도수의 합은 항상 **1**입니다.\n\n넓이 $= 150$이고 계급의 크기 $= 5$이므로\n도수의 합 $= \\frac{150}{5} = 30$\n\n하지만 상대도수의 합은 도수나 넓이에 관계없이 항상 $1$입니다.',
    },
  ],
  realLifeExample: '통계는 모든 분야의 기초입니다! 병원에서 환자 데이터를 분석할 때, 회사에서 매출 추이를 볼 때, 선거 여론조사를 할 때 모두 오늘 배운 도수분포표와 대푯값을 사용합니다. 데이터를 읽는 능력은 21세기 필수 역량이에요!',
};

export default dayContent;
