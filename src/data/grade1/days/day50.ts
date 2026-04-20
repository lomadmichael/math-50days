import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 50,
  part: 8,
  title: '총정리 + 중2 로드맵',
  subtitle: '중1 수학 완주! 중2로 가는 길을 안내합니다.',
  lectures: [],
  concepts: [
    {
      id: 'g1d50-c1',
      title: '중1 수학 완주 정리',
      content: '50일 동안 배운 **중1 수학 전체 로드맵**:\n\n**PART 1** 수와 연산 → 수의 세계를 넓혔다! (자연수 → 정수 → 유리수)\n**PART 2** 문자와 식 → 문자로 수학을 표현하는 법을 배웠다!\n**PART 3** 일차방정식 → 미지수를 구하는 강력한 도구를 얻었다!\n**PART 4** 좌표평면과 그래프 → 수를 그림으로 표현했다!\n**PART 5** 기본 도형 → 도형의 기본 요소와 성질을 알았다!\n**PART 6** 작도와 합동 → 삼각형을 만들고 비교했다!\n**PART 7** 평면·입체도형 → 겉넓이(Surface Area)와 부피(Volume)를 계산했다! (다면체(Polyhedron), 회전체(Solid of Revolution), 각기둥(Prism), 각뿔(Pyramid), 원기둥(Cylinder), 원뿔(Cone), 구(Sphere))\n**PART 8** 자료의 정리 → 자료(Data)를 정리하고 분석했다! (줄기와 잎 그림(Stem-and-Leaf Plot), 도수분포표(Frequency Distribution Table), 히스토그램(Histogram), 상대도수(Relative Frequency), 대푯값(Representative Value))',
      type: 'definition',
    },
    {
      id: 'g1d50-c2',
      title: '수학 공부 꿀팁',
      content: '**효과적인 수학 공부법:**\n• **개념 먼저**: 공식을 외우기 전에 "왜?"를 이해하기\n• **오답노트**: 틀린 문제는 반드시 다시 풀기 (3일 후, 7일 후, 30일 후)\n• **손으로 풀기**: 머리로만 생각하지 말고 직접 써보기\n• **연결 짓기**: 새 단원이 이전 단원과 어떻게 연결되는지 생각하기\n• **꾸준히**: 하루 30분이 몰아서 3시간보다 효과적!',
      type: 'definition',
    },
    {
      id: 'g1d50-c3',
      title: '중2 수학 미리보기',
      content: '중2에서 배울 내용:\n\n• **수와 식**: 유리수 → **순환소수**, **식의 계산** (단항식·다항식 곱셈·나눗셈)\n• **부등식과 연립방정식**: 일차부등식, 미지수 2개인 **연립방정식**\n• **함수**: 일차함수 $y = ax + b$의 그래프와 성질\n• **도형**: 삼각형·사각형의 성질, **닮음**의 개념\n• **확률(Probability)**: 경우의 수(Number of Cases), **확률(Probability)**의 기본\n\n중1 내용을 탄탄히 하면 중2가 훨씬 수월해요!',
      type: 'definition',
    },
  ],
  problems: [
    {
      id: 'g1d50-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$(-3)^2 + (-2)^3$의 값은?',
      options: ['1', '-1', '17', '-17'],
      answer: '1',
      explanation: '$(-3)^2 = 9$ (짝수 거듭제곱 → 양수)\n$(-2)^3 = -8$ (홀수 거듭제곱 → 음수)\n\n$9 + (-8) = 1$',
    },
    {
      id: 'g1d50-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: '$x = -2$일 때, $3x^2 - 5x + 1$의 값은?',
      answer: '23',
      explanation: '$3(-2)^2 - 5(-2) + 1$\n$= 3 \\times 4 + 10 + 1$\n$= 12 + 10 + 1 = 23$',
    },
    {
      id: 'g1d50-p3',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '일차방정식 $\\frac{x+3}{2} = \\frac{2x-1}{3}$의 해는?',
      options: ['$x = 7$', '$x = 9$', '$x = 11$', '$x = 13$'],
      answer: '$x = 11$',
      explanation: '양변에 6을 곱하면:\n$3(x+3) = 2(2x-1)$\n$3x + 9 = 4x - 2$\n$9 + 2 = 4x - 3x$\n$x = 11$',
    },
    {
      id: 'g1d50-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question: '중심각이 $120°$이고 반지름이 9cm인 부채꼴의 넓이를 구하시오. (결과에 $\\pi$를 포함)',
      answer: '27π',
      explanation: '부채꼴의 넓이 = $\\pi r^2 \\times \\frac{\\text{중심각}}{360°}$\n\n$= \\pi \\times 9^2 \\times \\frac{120}{360}$\n$= 81\\pi \\times \\frac{1}{3}$\n$= 27\\pi$ (cm²)',
    },
    {
      id: 'g1d50-p5',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '자료 4, 7, 7, 10, 12의 평균과 최빈값을 차례로 구하면?',
      options: ['7, 7', '8, 7', '8, 10', '7, 4'],
      answer: '8, 7',
      explanation: '평균 = $\\frac{4+7+7+10+12}{5} = \\frac{40}{5} = 8$\n\n최빈값 = 7 (2번 등장으로 가장 많음)\n\n따라서 평균 **8**, 최빈값 **7**',
    },
  ],
  realLifeExample: '축하합니다! 50일간의 중1 수학 여정을 완주했습니다! 매일 조금씩 꾸준히 공부한 여러분은 이미 훌륭한 수학적 사고력을 갖추었습니다. 중1 수학은 중학교와 고등학교 수학의 뿌리입니다. 캐나다 학교에서도 Prism(각기둥), Cylinder(원기둥), Pyramid(각뿔), Cone(원뿔), Sphere(구), Surface Area(겉넓이), Volume(부피), Histogram(히스토그램), Mean/Median/Mode(평균/중앙값/최빈값) 등 이 용어들을 그대로 사용합니다. 오늘까지 쌓은 기초 위에 중2 수학이라는 새로운 층을 올려보세요. 수학은 쌓아갈수록 더 재미있어집니다!',
};

export default dayContent;
