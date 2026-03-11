import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 50,
  part: 7,
  title: '총정리 + 고등 수학 로드맵',
  subtitle: '중3 수학 완성, 고등 수학으로의 도약',
  lectures: [],
  concepts: [
    {
      id: 'g3d50-c1',
      title: '중3 수학 전체 정리',
      content: 'PART 1~3 (Day 1~25): 실수, 다항식, 이차방정식\\n• 제곱근과 실수의 성질\\n• 다항식의 곱셈과 인수분해\\n• 이차방정식의 풀이와 활용\\n\\nPART 4 (Day 26~30): 이차함수\\n• $y = a(x-p)^2 + q$의 그래프, 최댓값/최솟값, 이차방정식과의 관계\\n\\nPART 5 (Day 31~38): 삼각비\\n• $\\\\sin$, $\\\\cos$, $\\\\tan$, 특수각, 길이/높이/넓이 구하기\\n\\nPART 6 (Day 39~46): 원의 성질\\n• 현, 접선, 원주각, 내접 사각형, 멱의 정리\\n\\nPART 7 (Day 47~50): 통계\\n• 분산, 표준편차, 상자 그림',
      type: 'tip',
    },
    {
      id: 'g3d50-c2',
      title: '고등 수학 로드맵',
      content: '고등학교에서 배울 수학 과목들:\\n\\n수학(고1): 다항식 → 방정식 → 부등식 → 함수 → 경우의 수\\n수학I: 지수/로그 → 삼각함수 → 수열\\n수학II: 함수의 극한 → 미분 → 적분\\n확률과 통계: 경우의 수 → 확률 → 통계\\n미적분: 수열의 극한 → 미분법 → 적분법\\n기하: 이차곡선 → 벡터 → 공간도형',
      type: 'definition',
    },
    {
      id: 'g3d50-c3',
      title: '중3에서 고등으로의 연결',
      content: '• 이차함수 → 함수의 개념 확장 (지수, 로그, 삼각함수)\\n• 삼각비 → 삼각함수 (호도법, 삼각함수의 그래프)\\n• 인수분해 → 고차방정식, 나머지 정리\\n• 원의 성질 → 원의 방정식, 이차곡선\\n• 통계 → 확률분포, 정규분포, 추정\\n\\n중3 내용이 탄탄하면 고등 수학이 훨씬 수월합니다!',
      type: 'tip',
    },
    {
      id: 'g3d50-c4',
      title: '수학 공부 조언',
      content: '① 개념을 정확히 이해하기 (암기가 아닌 이해)\\n② 기본 문제를 충분히 풀어 개념 체화하기\\n③ 틀린 문제 다시 풀기 (오답 노트 활용)\\n④ 매일 조금씩 꾸준히 공부하기\\n⑤ 어려우면 이전 단원으로 돌아가기\\n\\n여기까지 50일을 완주한 여러분, 정말 대단합니다!',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'g3d50-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '이차함수 $y = 3(x - 1)^2 - 5$의 꼭짓점은?',
      options: ['$(1, -5)$', '$(-1, -5)$', '$(1, 5)$', '$(3, -5)$'],
      answer: '$(1, -5)$',
      explanation: '$y = a(x-p)^2 + q$에서 꼭짓점 $(p, q) = (1, -5)$.',
    },
    {
      id: 'g3d50-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$\\\\tan 45° + \\\\sin 30°$의 값은?',
      options: ['$\\\\frac{1}{2}$', '$1$', '$\\\\frac{3}{2}$', '$2$'],
      answer: '$\\\\frac{3}{2}$',
      explanation: '$\\\\tan 45° + \\\\sin 30° = 1 + \\\\frac{1}{2} = \\\\frac{3}{2}$.',
    },
    {
      id: 'g3d50-p3',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '반지름 $8$인 원에서 중심 거리가 $5$인 현의 길이는?',
      options: ['$2\\\\sqrt{39}$', '$\\\\sqrt{39}$', '$6\\\\sqrt{2}$', '$10$'],
      answer: '$2\\\\sqrt{39}$',
      explanation: '현의 반 $= \\\\sqrt{64 - 25} = \\\\sqrt{39}$. 현의 길이 $= 2\\\\sqrt{39}$.',
    },
    {
      id: 'g3d50-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '자료 $2, 4, 6, 8, 10$의 표준편차는?',
      options: ['$2$', '$2\\\\sqrt{2}$', '$4$', '$8$'],
      answer: '$2\\\\sqrt{2}$',
      explanation: '평균 $= 6$. 분산 $= \\\\frac{16+4+0+4+16}{5} = 8$. 표준편차 $= \\\\sqrt{8} = 2\\\\sqrt{2}$.',
    },
    {
      id: 'g3d50-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '이차함수 $y = -x^2 + 4x$와 직선 $y = x$의 교점의 $x$좌표의 합은?',
      options: ['$3$', '$4$', '$5$', '$0$'],
      answer: '$3$',
      explanation: '$-x^2 + 4x = x$에서 $x^2 - 3x = 0$, $x(x-3) = 0$. $x = 0$ 또는 $x = 3$. 합: $0 + 3 = 3$.',
    },
    {
      id: 'g3d50-p6',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '원에 내접하는 사각형 $ABCD$에서 $\\\\angle A = 2\\\\angle C$일 때, $\\\\angle A$는?',
      options: ['$100°$', '$120°$', '$60°$', '$90°$'],
      answer: '$120°$',
      explanation: '$\\\\angle A + \\\\angle C = 180°$이고 $\\\\angle A = 2\\\\angle C$이므로 $3\\\\angle C = 180°$, $\\\\angle C = 60°$, $\\\\angle A = 120°$.',
    },
  ],
  realLifeExample: '50일간의 수학 여행을 마친 여러분은 이제 고등 수학을 향한 단단한 기초를 갖추었습니다. 수학은 과학, 공학, 경제학, 컴퓨터 과학 등 현대 사회의 거의 모든 분야의 언어입니다. 지금 쌓은 실력이 여러분의 미래를 밝게 만들어줄 것입니다. 축하합니다!',
};

export default dayContent;
