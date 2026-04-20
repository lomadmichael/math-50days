import { WeeklySchedule } from '@/lib/types';

/**
 * 이번 주 학교 학습 대비 (학부모 주간 메일 기반)
 *
 * 업데이트 방법:
 * 1. 학교에서 받은 주간 메일을 Claude Code 에 붙여넣기
 * 2. "이번 주 데이터 업데이트해줘" 요청
 * 3. 이 파일이 갱신되면 커밋 + vercel --prod
 *
 * 영상 ID는 반드시 YouTube 에서 실제 확인 후 붙일 것 (추측 금지).
 */

export const thisWeek: WeeklySchedule = {
  weekOf: '2026-04-21',
  sourceEmail: {
    from: 'Mutte (담임 선생님)',
    receivedAt: '2026-04-18',
  },
  thisWeek: {
    covered: ['Algebra', 'Finding Intercepts (절편)', 'Finding Slope (기울기)'],
  },
  nextWeek: {
    quiz: {
      date: '2026-04-28',
      topics: ['Algebra', 'Linear Equations (일차방정식·일차함수)'],
    },
    newTopics: [
      'Calculating Volume for Cuboids (직육면체 부피)',
      'Spatial Reasoning (공간 추론)',
    ],
    notes: ['목요일(2026-04-23) 조기하교 — 선생님 성적표 마감'],
  },
  prep: [
    // ────────── Quiz 대비 ──────────
    {
      id: 'prep-slope',
      kind: 'quiz-review',
      englishTerm: 'Finding Slope',
      koreanTerm: '기울기',
      summary: '직선이 얼마나 기울어졌는지를 숫자로 표현한 것. y가 얼마나 변하는가 / x가 얼마나 변하는가.',
      concepts: [
        {
          id: 'c-slope-1',
          title: '기울기란? (What is Slope?)',
          type: 'definition',
          content:
            '**기울기(Slope)**는 직선이 얼마나 가파른지를 나타내는 숫자예요.\n\n한마디로: **x가 1칸 오른쪽으로 갈 때, y가 몇 칸 올라가는가?**\n\n- 계단을 생각해보면 쉬워요. 한 칸 옆으로 갈 때 얼마나 올라가는지가 바로 기울기!\n- 기울기가 크면 → 가파른 계단 🧗\n- 기울기가 0이면 → 평평한 길 🚗\n- 기울기가 음수면 → 내려가는 미끄럼틀 🛝',
        },
        {
          id: 'c-slope-2',
          title: '두 점으로 기울기 구하는 공식',
          type: 'formula',
          content:
            '두 점 $(x_1, y_1)$, $(x_2, y_2)$ 를 지나는 직선의 기울기:\n\n$$\\text{Slope} = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{\\text{y의 증가량}}{\\text{x의 증가량}}$$\n\n**기억법**: *"rise over run"* (올라간 만큼 / 옆으로 간 만큼)',
        },
        {
          id: 'c-slope-3',
          title: '예시로 확인',
          type: 'example',
          content:
            '두 점 $(1, 2)$ 와 $(4, 8)$ 을 지나는 직선의 기울기는?\n\n$$\\text{Slope} = \\frac{8 - 2}{4 - 1} = \\frac{6}{3} = 2$$\n\n→ x가 1칸 가면 y가 2칸 올라가는 직선이에요!',
        },
      ],
      problems: [
        {
          id: 'p-slope-1',
          type: 'short-answer',
          difficulty: 'basic',
          question: '두 점 $(0, 0)$ 과 $(2, 6)$ 을 지나는 직선의 기울기는?',
          answer: '3',
          explanation: '(6-0)/(2-0) = 6/2 = 3. x가 2 갈 때 y가 6 올라갔으니 기울기는 3.',
        },
        {
          id: 'p-slope-2',
          type: 'short-answer',
          difficulty: 'basic',
          question: '두 점 $(1, 5)$ 와 $(3, 1)$ 을 지나는 직선의 기울기는?',
          answer: '-2',
          explanation: '(1-5)/(3-1) = -4/2 = -2. y가 내려가니 기울기는 음수.',
        },
        {
          id: 'p-slope-3',
          type: 'multiple-choice',
          difficulty: 'applied',
          question: '직선 $y = 4x + 3$ 의 기울기는?',
          options: ['1', '3', '4', '7'],
          answer: '4',
          explanation: 'y = mx + b 꼴에서 m이 기울기. 여기서는 m = 4.',
        },
      ],
    },
    {
      id: 'prep-intercepts',
      kind: 'quiz-review',
      englishTerm: 'Finding Intercepts',
      koreanTerm: '절편 (x절편·y절편)',
      summary: '직선이 x축, y축과 만나는 점. x절편은 y=0일 때 x값, y절편은 x=0일 때 y값.',
      concepts: [
        {
          id: 'c-int-1',
          title: 'x절편과 y절편이란?',
          type: 'definition',
          content:
            '**절편(Intercept)** = 직선이 축과 만나는 점의 좌표예요.\n\n- **x절편 (x-intercept)**: 직선이 **x축**과 만나는 점 → 이때 $y = 0$\n- **y절편 (y-intercept)**: 직선이 **y축**과 만나는 점 → 이때 $x = 0$\n\n💡 **꿀팁**: 구하려는 축의 반대 축에 0을 대입하면 돼요.\n- x절편 구할 땐 → y에 0 넣기\n- y절편 구할 땐 → x에 0 넣기',
        },
        {
          id: 'c-int-2',
          title: 'y = mx + b 에서 절편 찾기',
          type: 'formula',
          content:
            '일차함수 $y = mx + b$ 에서:\n\n- **y절편** = $b$ (그냥 식에 있는 그 숫자!) 🎯\n- **x절편** = $-\\dfrac{b}{m}$ (y에 0을 대입해서 x 구하기)\n\n예: $y = 2x + 6$ 이면 → y절편 = 6, x절편 = -3',
        },
      ],
      problems: [
        {
          id: 'p-int-1',
          type: 'short-answer',
          difficulty: 'basic',
          question: '직선 $y = 3x - 12$ 의 y절편은?',
          answer: '-12',
          explanation: 'y = mx + b 에서 b가 y절편. 여기서 b = -12.',
        },
        {
          id: 'p-int-2',
          type: 'short-answer',
          difficulty: 'basic',
          question: '직선 $y = 3x - 12$ 의 x절편은?',
          answer: '4',
          explanation: 'y=0 대입: 0 = 3x - 12 → 3x = 12 → x = 4.',
        },
        {
          id: 'p-int-3',
          type: 'multiple-choice',
          difficulty: 'applied',
          question: '직선 $y = -2x + 8$ 의 x절편과 y절편을 바르게 짝지은 것은?',
          options: ['x절편 4, y절편 8', 'x절편 8, y절편 4', 'x절편 -4, y절편 8', 'x절편 4, y절편 -8'],
          answer: 'x절편 4, y절편 8',
          explanation: 'y절편: x=0 대입 → y=8. x절편: y=0 대입 → 0=-2x+8 → x=4.',
        },
      ],
    },
    // ────────── 새 주제 예습 ──────────
    {
      id: 'prep-cuboid-volume',
      kind: 'new-topic',
      englishTerm: 'Calculating Volume for Cuboids',
      koreanTerm: '직육면체의 부피',
      summary: '가로 × 세로 × 높이. 상자 안에 작은 1cm 큐브가 몇 개 들어가는지를 세는 것.',
      concepts: [
        {
          id: 'c-vol-1',
          title: '직육면체 부피 공식',
          type: 'formula',
          content:
            '**직육면체(Cuboid)의 부피**:\n\n$$V = l \\times w \\times h$$\n\n- $l$ = length (가로 / 길이)\n- $w$ = width (세로 / 폭)\n- $h$ = height (높이)\n\n단위: $\\text{cm}^3, \\text{m}^3$ 등 **세제곱** 단위 (three-dimensional!)',
        },
        {
          id: 'c-vol-2',
          title: '왜 곱하기 3번일까?',
          type: 'tip',
          content:
            '1cm짜리 작은 큐브를 상자 안에 채운다고 상상해봐요 📦\n\n- 바닥에 가로 × 세로로 큐브를 깔면: **면적** (2D)\n- 그 위로 높이만큼 쌓으면: **부피** (3D)\n\n즉 $\\text{부피} = \\text{밑면적} \\times \\text{높이} = (l \\times w) \\times h$\n\n📌 정육면체(Cube, 모든 모서리가 같음): $V = a^3$',
        },
        {
          id: 'c-vol-3',
          title: '예시',
          type: 'example',
          content:
            '가로 5cm, 세로 3cm, 높이 4cm 인 상자의 부피?\n\n$$V = 5 \\times 3 \\times 4 = 60 \\text{ cm}^3$$\n\n→ 1cm 큐브 60개가 들어가요.',
        },
      ],
      problems: [
        {
          id: 'p-vol-1',
          type: 'short-answer',
          difficulty: 'basic',
          question: '가로 2cm, 세로 3cm, 높이 5cm 인 직육면체의 부피는? (단위는 빼고 숫자만)',
          answer: '30',
          explanation: '2 × 3 × 5 = 30 cm³',
        },
        {
          id: 'p-vol-2',
          type: 'short-answer',
          difficulty: 'basic',
          question: '한 모서리가 4cm 인 정육면체의 부피는? (숫자만)',
          answer: '64',
          explanation: '4³ = 4 × 4 × 4 = 64 cm³',
        },
        {
          id: 'p-vol-3',
          type: 'multiple-choice',
          difficulty: 'applied',
          question: '부피가 48cm³ 인 직육면체가 있어요. 가로 4cm, 세로 3cm 라면 높이는?',
          options: ['2cm', '3cm', '4cm', '5cm'],
          answer: '4cm',
          explanation: '48 = 4 × 3 × h → 12h = 48 → h = 4cm.',
        },
      ],
    },
    {
      id: 'prep-spatial',
      kind: 'new-topic',
      englishTerm: 'Spatial Reasoning',
      koreanTerm: '공간 추론',
      summary: '입체 도형을 머릿속에서 돌려보거나 펼쳐보는 능력. 전개도, 단면, 숨은 면 찾기 등.',
      concepts: [
        {
          id: 'c-sp-1',
          title: '공간 추론이 뭐야?',
          type: 'definition',
          content:
            '**Spatial Reasoning(공간 추론)** 은 입체 도형을 머릿속으로 자유롭게 다루는 능력이에요.\n\n세 가지 흔한 유형:\n1. **전개도 (Net)**: 입체를 가위로 오려 평면에 펼친 모양\n2. **다른 각도에서 보기**: 위·앞·옆에서 본 모양 맞추기\n3. **숨은 면·부분 세기**: 쌓은 블록 개수, 안 보이는 면 찾기\n\n이건 계산이 아니라 **상상력 게임**! 🧩',
        },
        {
          id: 'c-sp-2',
          title: '직육면체의 전개도',
          type: 'tip',
          content:
            '직육면체는 **면 6개**로 이루어져 있어요. 펼치면 직사각형 6개가 됩니다:\n- 앞·뒤 (같은 크기 한 쌍)\n- 좌·우 (같은 크기 한 쌍)\n- 위·아래 (같은 크기 한 쌍)\n\n💡 전개도를 접었을 때 **마주 보는 면**은 항상 같은 크기예요.',
        },
      ],
      problems: [
        {
          id: 'p-sp-1',
          type: 'multiple-choice',
          difficulty: 'basic',
          question: '직육면체에는 몇 개의 면이 있을까요?',
          options: ['4개', '5개', '6개', '8개'],
          answer: '6개',
          explanation: '앞/뒤, 좌/우, 위/아래 → 총 6개.',
        },
        {
          id: 'p-sp-2',
          type: 'multiple-choice',
          difficulty: 'applied',
          question: '정육면체의 전개도에서 마주 보는 면끼리 색을 칠하려면 몇 쌍이 필요할까요?',
          options: ['2쌍', '3쌍', '4쌍', '6쌍'],
          answer: '3쌍',
          explanation: '면 6개가 2개씩 짝이 되므로 3쌍.',
        },
      ],
    },
  ],
};

export default thisWeek;
