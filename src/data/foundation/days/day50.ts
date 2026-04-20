import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 50,
  part: 10,
  title: '총정리 + 중1 코스 가이드',
  subtitle: '기초탄탄 완주 — 다음 단계로!',
  lectures: [],
  concepts: [
    {
      id: 'f10d50-c1',
      title: 'PART 5~6 정리: 비율과 도형',
      content:
        '비와 비율: $\\frac{비교하는 양}{기준량}$, 백분율 = 비율 $\\times$ 100\\n\\n도형 넓이: 삼각형 $\\frac{밑변 \\times 높이}{2}$, 원 $\\pi r^2$\\n합동 조건: SSS, SAS, ASA\\n대칭: 선대칭(접으면 겹침), 점대칭($180°$ 회전)',
      type: 'tip',
    },
    {
      id: 'f10d50-c2',
      title: 'PART 7~8 정리: 측정과 식',
      content:
        '단위 환산: 넓이는 제곱, 부피는 세제곱으로 환산\\n직육면체 부피 = 가로 $\\times$ 세로 $\\times$ 높이\\n\\n문자식: 곱셈 기호 생략, 나눗셈은 분수로\\n등식 풀기: $x$를 한쪽으로 모아 역연산',
      type: 'tip',
    },
    {
      id: 'f10d50-c3',
      title: 'PART 9~10 정리: 자료와 중학 연결',
      content:
        '평균 = $\\frac{합계}{개수}$, 확률 = $\\frac{원하는 경우}{전체 경우}$\\n\\n정수: 양수, 0, 음수 → 절댓값은 0까지 거리\\n좌표평면: $(x, y)$로 위치 표시, 4개 사분면\\n기본도형: 맞꼭지각, 동위각, 엇각',
      type: 'tip',
    },
    {
      id: 'f10d50-c4',
      title: '중1 코스 미리보기',
      content:
        '기초탄탄을 완주한 여러분, 축하합니다! 중1 코스에서는 이런 내용을 더 깊이 배웁니다:\\n\\n• 정수와 유리수의 사칙연산\\n• 문자와 식 (일차식의 계산)\\n• 일차방정식 (활용 문제)\\n• 좌표평면과 그래프 (정비례, 반비례)\\n• 기본도형과 작도\\n• 평면도형과 입체도형의 성질\\n• 통계 (도수분포표, 히스토그램)\\n\\n기초가 탄탄하면 중학 수학이 훨씬 쉬워집니다!',
      type: 'definition',
    },
  ],
  problems: [
    {
      id: 'fd50-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '이 과정에서 배운 삼각형 넓이 공식은?',
      options: [
        '가로 $\\times$ 세로',
        '$\\frac{밑변 \\times 높이}{2}$',
        '$\\pi r^2$',
        '밑변 $\\times$ 높이',
      ],
      answer: '$\\frac{밑변 \\times 높이}{2}$',
      explanation:
        '삼각형 넓이는 $\\frac{밑변 \\times 높이}{2}$입니다.',
    },
    {
      id: 'fd50-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: '$|-7| + |3|$의 값은?',
      answer: '10',
      explanation: '$|-7| = 7$, $|3| = 3$이므로 $7 + 3 = 10$',
    },
    {
      id: 'fd50-p3',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '중학교에서 $x + 3 = 10$과 같은 식을 무엇이라 부르나요?',
      options: ['문자식', '부등식', '방정식', '함수'],
      answer: '방정식',
      explanation:
        '미지수를 포함하고 등호로 연결된 식을 방정식이라 합니다.',
    },
    {
      id: 'fd50-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question:
        '다음 중 중1에서 배우는 새로운 수 체계는?',
      options: ['자연수', '분수', '유리수', '소수(소수점)'],
      answer: '유리수',
      explanation:
        '중1에서는 정수와 분수를 합쳐 "유리수"라는 새로운 수 체계를 배웁니다. 유리수 = $\\frac{a}{b}$ ($b \\neq 0$)',
    },
    {
      id: 'fd50-p5',
      type: 'short-answer',
      difficulty: 'challenge',
      question:
        '$2x - 1 = 9$에서 $x$의 값을 구하고, 그 $x$를 $x^2 + x$에 대입한 결과는?',
      answer: '30',
      explanation:
        '$2x = 10$, $x = 5$. $x^2 + x = 25 + 5 = 30$',
    },
  ],
  realLifeExample:
    '50일간의 여정을 완주했습니다! 수학은 계단과 같아서, 한 단계를 확실히 밟아야 다음 단계를 오를 수 있어요. 기초탄탄 과정에서 다진 실력은 중학교 수학의 든든한 기반이 될 것입니다. 중1 코스에서 만나요!',
};

export default dayContent;
