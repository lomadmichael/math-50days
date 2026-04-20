import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 48,
  part: 7,
  title: '상자 그림과 통계 활용',
  subtitle: '사분위수와 상자 그림 해석',
  lectures: [],
  concepts: [
    {
      id: 'g3d48-c1',
      title: '사분위수',
      content: '자료를 크기순으로 나열했을 때:\\n• $Q_1$ (제1사분위수): 하위 $25\\%$ 위치의 값\\n• $Q_2$ (제2사분위수): 중앙값 ($50\\%$)\\n• $Q_3$ (제3사분위수): 상위 $25\\%$ 위치의 값\\n\\n사분위 범위(IQR) $= Q_3 - Q_1$\\n(자료의 중간 $50\\%$가 퍼져 있는 범위)',
      type: 'definition',
    },
    {
      id: 'g3d48-c2',
      title: '상자 그림(Box Plot)',
      content: '상자 그림의 구성 요소:\\n• 상자의 왼쪽 변: $Q_1$\\n• 상자 안의 선: $Q_2$ (중앙값)\\n• 상자의 오른쪽 변: $Q_3$\\n• 왼쪽 수염: 최솟값\\n• 오른쪽 수염: 최댓값\\n\\n상자의 너비가 IQR을 나타냅니다.',
      type: 'definition',
    },
    {
      id: 'g3d48-c3',
      title: '상자 그림의 해석',
      content: '상자 그림으로 알 수 있는 것:\\n• 자료의 대략적인 분포 형태\\n• 중앙값의 위치\\n• 자료의 산포도 (IQR, 범위)\\n• 두 자료의 분포 비교\\n\\n상자가 길수록(IQR이 클수록) 자료가 많이 흩어져 있습니다.',
      type: 'tip',
    },
    {
      id: 'g3d48-c4',
      title: '통계 활용의 주의점',
      content: '통계를 해석할 때 주의할 점:\\n• 평균만으로 자료 전체를 판단하지 않기 (산포도 확인)\\n• 극단값(이상치)의 영향 고려\\n• 표본의 크기와 대표성 확인\\n• 상관관계와 인과관계 구분하기',
      type: 'warning',
    },
  ],
  problems: [
    {
      id: 'g3d48-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '자료 $1, 3, 5, 7, 9, 11, 13$에서 $Q_1$은?',
      options: ['$1$', '$3$', '$5$', '$7$'],
      answer: '$3$',
      explanation: '중앙값($Q_2$) $= 7$. 하위 자료 $1, 3, 5$의 중앙값이 $Q_1 = 3$.',
    },
    {
      id: 'g3d48-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '같은 자료에서 사분위 범위(IQR)는?',
      options: ['$6$', '$8$', '$10$', '$12$'],
      answer: '$8$',
      explanation: '$Q_3 = 11$ (상위 자료 $9, 11, 13$의 중앙값). $IQR = Q_3 - Q_1 = 11 - 3 = 8$.',
    },
    {
      id: 'g3d48-p3',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '상자 그림에서 상자의 왼쪽 변이 $20$, 오른쪽 변이 $60$일 때, 자료의 중간 $50\\%$가 분포하는 범위는?',
      options: ['$20$에서 $60$', '$0$에서 $80$', '알 수 없다', '$40$ 부근'],
      answer: '$20$에서 $60$',
      explanation: '상자의 왼쪽 변은 $Q_1 = 20$, 오른쪽 변은 $Q_3 = 60$. 자료의 중간 $50\\%$는 $20$에서 $60$ 사이에 분포합니다.',
    },
    {
      id: 'g3d48-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: 'A반의 IQR이 $10$이고 B반의 IQR이 $25$일 때, 어느 반의 성적이 더 고르게 분포하는가?',
      options: ['A반', 'B반', '같다', '판단할 수 없다'],
      answer: 'A반',
      explanation: 'IQR이 작을수록 중간 $50\\%$ 자료가 좁은 범위에 모여 있으므로 A반이 더 고르게 분포합니다.',
    },
    {
      id: 'g3d48-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '자료 $2, 5, 7, 8, 10, 12, 15, 18$에서 $Q_1$, $Q_2$, $Q_3$를 바르게 나열한 것은?',
      options: ['$6, 9, 13.5$', '$5, 9, 15$', '$6, 9, 13$', '$7, 9, 12$'],
      answer: '$6, 9, 13.5$',
      explanation: '$Q_2 = \\frac{8+10}{2} = 9$. 하위: $2, 5, 7, 8$ → $Q_1 = \\frac{5+7}{2} = 6$. 상위: $10, 12, 15, 18$ → $Q_3 = \\frac{12+15}{2} = 13.5$.',
    },
  ],
  realLifeExample: '프로야구에서 타자들의 타율을 상자 그림으로 나타내면, 팀 간 실력 분포를 한눈에 비교할 수 있습니다. 상자가 높은 위치에 있으면서 좁은 팀은 전체적으로 타율이 높고 균일하다는 것을 의미합니다.',
};

export default dayContent;
