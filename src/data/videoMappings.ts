// 정승제 선생님 "50일 수학" YouTube 플레이리스트 영상 매핑
// 플레이리스트: https://www.youtube.com/playlist?list=PLcMveqN_07mZiQuv2zD-Fwh7Fi2s4dv25
// EBS 원본 강의: https://www.ebsi.co.kr/ebs/lms/lmsx/retrieveSbjtDtl.ebs?courseId=S20160001150

export const EBS_COURSE_URL =
  'https://www.ebsi.co.kr/ebs/lms/lmsx/retrieveSbjtDtl.ebs?courseId=S20160001150#lecture';

export interface VideoMapping {
  youtubeVideoId: string;
  title: string;
  description: string;
  days: number[];
}

// 4개 코스별 YouTube 영상 → Day 매핑
export const videoMappings: Record<string, VideoMapping[]> = {
  // ── 중3 코스: 14개 영상 ──
  grade3: [
    {
      youtubeVideoId: 'n-dmilxPb8M',
      title: '수의 체계 완벽 정리',
      description: '정수, 유리수, 무리수, 실수의 관계를 완벽 정리',
      days: [1, 2, 3],
    },
    {
      youtubeVideoId: 'gWuykLl6auk',
      title: '루트 특강 (제곱근)',
      description: '루트가 뭔지, 제곱근 정복 20분 완성',
      days: [1, 2, 3, 4],
    },
    {
      youtubeVideoId: 'pB-6MXUb8RU',
      title: '절댓값 완벽 이해',
      description: '절댓값의 개념과 활용',
      days: [2],
    },
    {
      youtubeVideoId: 'vrt6oCreY7M',
      title: '곱셈공식',
      description: '고등학교 수포자들을 구할 곱셈공식 총정리',
      days: [8, 9, 10],
    },
    {
      youtubeVideoId: '4PR6bPQu3Ek',
      title: '완전제곱식 인수분해',
      description: '완전제곱식을 인수분해 하는 방법',
      days: [11],
    },
    {
      youtubeVideoId: 'GCXqyEyards',
      title: '인수분해 기초',
      description: '기초 수학 개념을 끌어 올려줄 인수분해',
      days: [12, 13],
    },
    {
      youtubeVideoId: 'FoJcTLfhSUQ',
      title: '인수분해 총정리',
      description: '대한민국 1타강사의 인수분해 총정리',
      days: [12, 13, 14],
    },
    {
      youtubeVideoId: '2FK8cyjXvKU',
      title: '인수정리와 조립제법',
      description: '인수정리와 조립제법 완벽 정리',
      days: [13, 14],
    },
    {
      youtubeVideoId: 'LD_r_l0_OTs',
      title: '고차방정식 (인수분해 활용)',
      description: '인수분해가 무조건 되는 패턴만 출제하는 고차방정식',
      days: [14],
    },
    {
      youtubeVideoId: 'C6buQsgsDhY',
      title: '이차방정식 근의 공식',
      description: '이차방정식 근의 공식 이걸로 끝내면 됩니다',
      days: [15, 16, 17, 18],
    },
    {
      youtubeVideoId: 'ULlvimOimU4',
      title: '이차방정식 심화',
      description: '가슴에 와닿는 이차방정식 수업',
      days: [19, 20, 21],
    },
    {
      youtubeVideoId: 'A6MDR3vNHpo',
      title: '평행이동',
      description: '이차함수를 이해하기 위한 필수조건 평행이동',
      days: [27, 28],
    },
    {
      youtubeVideoId: '6JgRGuT4ItE',
      title: '피타고라스 정리',
      description: '반드시 알아야 하는 피타고라스 정리 10분 완벽 정리',
      days: [31, 32, 33],
    },
    {
      youtubeVideoId: '2kcycGNYWls',
      title: '원의 방정식',
      description: '고1 수학에서 꼭 나오는 원의 방정식',
      days: [39, 40, 41, 42],
    },
  ],

  // ── 중1 코스: 정승제 8개 영상 (각 Day 주제에 맞춰 정확히 매핑) ──
  // NOTE: 기존 매핑이 Day 주제와 어긋나던 것을 정정. Day 4(양수와 음수)에 최대공약수가
  // 매핑되어 있던 것 등. 주제 일치 우선, 누락 Day는 추후 다른 채널에서 보강.
  grade1: [
    {
      youtubeVideoId: 'Uzu68a5NBo4',
      title: '수의 개념',
      description: '수학 기초 1도 모르는 자들을 위한 수의 개념',
      // 유리수·수 체계 정리에 적합 (Day 8·10)
      days: [8, 10],
    },
    {
      youtubeVideoId: 'LWa3JRiASFM',
      title: '최대공약수와 최소공배수',
      description: '가슴 뻥 뚫리는 최대공약수와 최소공배수 완벽 정리',
      days: [3],
    },
    {
      youtubeVideoId: 'HJUUcTyWXKw',
      title: '양수와 음수',
      description: '양수와 음수 개념 끝내기 (수의 체계)',
      // Day 4 주제가 "양수와 음수의 탄생" 이라 정확히 일치
      days: [4],
    },
    {
      youtubeVideoId: 'wVayYzfT0Fo',
      title: '정수와 유리수의 사칙연산',
      description: '쉽고 간단하게 끝내는 정수와 유리수의 사칙연산',
      // Day 5 덧뺄셈, Day 6 곱나눗셈, Day 9 유리수 사칙연산까지 커버
      days: [5, 6, 9],
    },
    {
      youtubeVideoId: 'I1xUUV3lVAQ',
      title: '지수법칙',
      description: '지수법칙을 이해하는 법칙은 바로 정승제',
      // 소수와 소인수분해 (거듭제곱) 에 맞춤. 중2 지수법칙 맛보기로도 활용 가능.
      days: [2],
    },
    {
      youtubeVideoId: 'AbOSkFWlZrM',
      title: '문자를 사용한 식',
      description: '숫자에서 문자로! 문자의 사용과 식의 계산',
      days: [12, 13],
    },
    {
      youtubeVideoId: 'TI75fW6w71k',
      title: '함수의 기본 개념',
      description: '함수가 되려면 필요한 두 가지 조건',
      // 좌표평면·그래프·정비례·반비례 전반 (Day 21~25)
      days: [21, 22, 23, 24, 25],
    },
    {
      youtubeVideoId: 'N5hFCBekUlk',
      title: '삼각형과 평행선',
      description: '너무 중요한 삼각형과 평행선 완벽정리',
      // 평행선 동위각·엇각 (Day 29)
      days: [29],
    },

    // ── 정승제의50일수학 (신규 발견 - 중1 전용 영상) ──
    {
      youtubeVideoId: 'r-bIFWGmf9k',
      title: '방정식 개념 종결 — 일차방정식 풀이',
      description: '정승제의50일수학 · 재밌는 거 왔다! 중1 수학 · 수포자 탈출',
      days: [17],
    },

    // ── EBS 수학의 답 (공식 중1 교과 시리즈) ──
    {
      youtubeVideoId: '6RER1_-9n0w',
      title: '일차식의 덧셈과 뺄셈',
      description: 'EBS 수학의 답 · 동류항 정리로 일차식 덧뺄셈 정복',
      days: [14],
    },
    {
      youtubeVideoId: 'uMls_t2lj3o',
      title: '일차식과 수의 곱셈·나눗셈',
      description: 'EBS 수학의 답 · 분배법칙으로 일차식 곱셈과 나눗셈',
      days: [15],
    },
    {
      youtubeVideoId: 'QKsVgnARexU',
      title: '등식의 성질',
      description: 'EBS 수학의 답 · 등식의 양변에 같은 수를 더하거나 곱하거나',
      days: [16],
    },
    {
      youtubeVideoId: 'ScpCoL8luwc',
      title: '일차방정식의 활용 — 나이 문제',
      description: 'EBS 수학의 답 · 나이 문제로 배우는 일차방정식 활용',
      days: [18],
    },
    {
      youtubeVideoId: 'd_BezE15byI',
      title: '일차방정식의 활용 — 소금물(농도) 문제',
      description: 'EBS 수학의 답 · 농도 문제 완벽 정리',
      days: [19],
    },

    // ── 수악중독중학수학 (@SAJDJS, 중등 전용 채널) ──
    {
      youtubeVideoId: '1edwauXgGOM',
      title: '삼각형의 작도',
      description: '수악중독중학수학 · 자와 컴퍼스로 삼각형 그리기',
      days: [30],
    },
    {
      youtubeVideoId: 'gBI4DZV3AB8',
      title: '삼각형의 합동 조건 (SSS·SAS·ASA)',
      description: '수악중독중학수학 · 합동조건 3가지 완벽 정리',
      days: [31],
    },
    {
      youtubeVideoId: 'YjxpU1uYtTk',
      title: 'n각형 대각선의 개수',
      description: '수악중독중학수학 · 다각형 대각선 총 개수 공식 유도',
      days: [33],
    },
    {
      youtubeVideoId: 'zLi9UYfkAuI',
      title: 'n각형의 내각과 외각',
      description: '수악중독중학수학 · 내각 합 · 외각 합 공식',
      days: [34],
    },
    {
      youtubeVideoId: '4xl9VRoOcQI',
      title: '원과 부채꼴',
      description: '수악중독중학수학 · 호, 현, 활꼴, 부채꼴, 중심각',
      days: [35],
    },
    {
      youtubeVideoId: '-r2-ulO0GM4',
      title: '부채꼴의 호의 길이와 넓이',
      description: '수악중독중학수학 · 중심각으로 호와 넓이 구하기',
      days: [36],
    },
    {
      youtubeVideoId: 'e05G2YJ8QRg',
      title: '정다면체와 다면체',
      description: '수악중독중학수학 · 각기둥 · 각뿔 · 정다면체 5종',
      days: [38],
    },
    {
      youtubeVideoId: 'ZESpmQNmiEQ',
      title: '회전체',
      description: '수악중독중학수학 · 회전체의 종류와 단면',
      days: [39],
    },
    {
      youtubeVideoId: 'FSSuhoraPyM',
      title: '기둥의 겉넓이와 부피',
      description: '수악중독중학수학 · 각기둥 · 원기둥의 겉넓이와 부피',
      days: [40],
    },
    {
      youtubeVideoId: 'x04SB4k5aC0',
      title: '뿔의 겉넓이와 부피',
      description: '수악중독중학수학 · 각뿔 · 원뿔의 겉넓이와 부피',
      days: [41],
    },
    {
      youtubeVideoId: 'GdAm-MReoIg',
      title: '구의 겉넓이와 부피',
      description: '수악중독중학수학 · S = 4πr², V = (4/3)πr³',
      days: [42],
    },
    {
      youtubeVideoId: '7Klf0khPMnQ',
      title: '줄기와 잎 그림',
      description: '수악중독중학수학 · 자료를 줄기·잎으로 정리',
      days: [44],
    },
    {
      youtubeVideoId: 'dwSZZ8jOuzs',
      title: '도수분포표·히스토그램·도수분포다각형',
      description: '수악중독중학수학 · 3가지 자료 정리법을 한번에',
      // Day 45 도수분포표+히스토그램, Day 46 도수분포다각형까지 한 영상 커버
      days: [45, 46],
    },
    {
      youtubeVideoId: 'CR4HRmhC3Mg',
      title: '상대도수',
      description: '수악중독중학수학 · 상대도수와 도수분포표 활용',
      days: [47],
    },

    // ── EBS Learning (대푯값 보강, 수악중독에 없는 주제) ──
    {
      youtubeVideoId: 'sv0eCvKa16s',
      title: '대푯값 — 평균',
      description: 'EBS 수학의 답 · 자료의 대푯값으로서 평균',
      days: [47],
    },
  ],

  // ── 중2 코스: 7개 영상 ──
  grade2: [
    {
      youtubeVideoId: 'H6treQu1_uY',
      title: '다항식과 일차식',
      description: '다항식과 일차식은 식은 죽 먹기',
      days: [1, 2, 3],
    },
    {
      youtubeVideoId: '8kHMKr9nLRI',
      title: '단항식의 곱셈과 나눗셈',
      description: '단항식의 곱셈과 나눗셈 확실하게 정리',
      days: [4, 5],
    },
    {
      youtubeVideoId: 'Mp1Xy92GV5c',
      title: '부등식의 영역',
      description: '문제를 잘 풀기 위한 부등식의 영역 15분 정리',
      days: [10, 11, 12, 13, 14],
    },
    {
      youtubeVideoId: 'VrZnF99Np2w',
      title: '연립방정식',
      description: '세상에서 제일 쉬운 연립방정식 수업 (대입법과 가감법)',
      days: [17, 18, 19],
    },
    {
      youtubeVideoId: '5Yo8mkqnk_w',
      title: '일차함수와 일차방정식',
      description: '머릿속이 환해지는 일차함수 & 일차방정식 10분 끝내기',
      days: [23, 24, 25],
    },
    {
      youtubeVideoId: 'LZTVYHUIwP4',
      title: '평행사변형',
      description: '이 영상 하나로 끝내 드릴게 평행사변형 완벽 정리',
      days: [30, 31, 32],
    },
    {
      youtubeVideoId: 'heUtEqpeQv8',
      title: '삼각형의 외심과 내심',
      description: '잊을만 하면 나타나서 괴롭히는 삼각형의 외심과 내심 총정리',
      days: [33, 34],
    },
  ],

  // ── BC Grade 8: Khan Academy 29개 + 정승제 재활용 ──
  'bc-g8': [
    // PART 1: Number (Squares, Roots, Pythagorean)
    {
      youtubeVideoId: 'mbc3_e5lWw0',
      title: 'Introduction to square roots (Khan Academy)',
      description: 'Khan Academy · Grade 8 · Perfect squares and square root symbol',
      days: [1, 2],
    },
    {
      youtubeVideoId: 'Lh7NMBPFVZw',
      title: 'How to approximate square roots (Khan Academy)',
      description: 'Khan Academy · Grade 8 · Estimating non-perfect square roots',
      days: [3],
    },
    {
      youtubeVideoId: 'gWuykLl6auk',
      title: '루트 특강 (정승제)',
      description: '정승제 · 루트가 뭔지, 제곱근 정복 20분 완성 (한국어 보조)',
      days: [2, 3],
    },
    {
      youtubeVideoId: 's9t7rNhaBp8',
      title: 'Introduction to the Pythagorean theorem (Khan Academy)',
      description: 'Khan Academy · Geometry · a² + b² = c² intro',
      days: [4, 5],
    },
    {
      youtubeVideoId: '6JgRGuT4ItE',
      title: '피타고라스 정리 (정승제)',
      description: '정승제 · 반드시 알아야 하는 피타고라스 정리 10분 (한국어 보조)',
      days: [4, 5, 6, 7],
    },
    {
      youtubeVideoId: 'O64YFlX1_aI',
      title: 'Pythagorean theorem: Finding a leg (Khan Academy)',
      description: 'Khan Academy · Find unknown leg using a²+b²=c²',
      days: [6],
    },
    {
      youtubeVideoId: 'q-crbytGCoE',
      title: 'Pythagorean theorem word problems (Khan Academy)',
      description: 'Khan Academy · Real-world applications',
      days: [7],
    },
    // PART 2: Measurement (Surface Area, Volume)
    {
      youtubeVideoId: 'EeaSMjBKRcA',
      title: 'Surface area of rectangular prisms (Khan Academy)',
      description: 'Khan Academy · Grade 8 · Lateral and total surface area',
      days: [8],
    },
    {
      youtubeVideoId: 'zFPCdP_zaa8',
      title: 'Surface area of triangular prisms (Khan Academy)',
      description: 'Khan Academy · Grade 8',
      days: [9],
    },
    {
      youtubeVideoId: 'QJ69ms9xLU8',
      title: 'Surface area of cylinders (Khan Academy)',
      description: 'Khan Academy · Grade 8 · 2πr² + 2πrh',
      days: [10],
    },
    {
      youtubeVideoId: 'I9efKVtLCf4',
      title: 'Volume of rectangular prisms (Khan Academy)',
      description: 'Khan Academy · Pre-Algebra · V = l × w × h',
      days: [11],
    },
    {
      youtubeVideoId: 'ZqzAOZ9pP9Q',
      title: 'Volume of triangular prism (Khan Academy)',
      description: 'Khan Academy · Geometry · base area × length',
      days: [12],
    },
    {
      youtubeVideoId: 'gL3HxBQyeg0',
      title: 'Cylinder volume and surface area (Khan Academy)',
      description: 'Khan Academy · Geometry · V = πr²h',
      days: [13],
    },
    // PART 3: Number Operations
    {
      youtubeVideoId: 'd8lP5tR2R3Q',
      title: 'Multiplying and dividing negative numbers (Khan Academy)',
      description: 'Khan Academy · Pre-Algebra · Sign rules',
      days: [14],
    },
    {
      youtubeVideoId: 'm-pRnFIeoNA',
      title: 'Dividing fractions example (Khan Academy)',
      description: 'Khan Academy · Pre-Algebra · KCF / reciprocals',
      days: [15],
    },
    {
      youtubeVideoId: '-lUEWEEpmIo',
      title: 'Percentage of a whole number (Khan Academy)',
      description: 'Khan Academy · Decimals & percents',
      days: [16],
    },
    {
      youtubeVideoId: 'X2jVap1YgwI',
      title: 'Growing by a percentage — increase/decrease (Khan Academy)',
      description: 'Khan Academy · Algebra I · Markups, discounts',
      days: [17],
    },
    {
      youtubeVideoId: 'HpdMJaKaXXc',
      title: 'Introduction to ratios (Khan Academy)',
      description: 'Khan Academy · Pre-Algebra · a:b notation',
      days: [18],
    },
    {
      youtubeVideoId: 'Zm0KaIw-35k',
      title: 'Solving unit rates problem (Khan Academy)',
      description: 'Khan Academy · Pre-Algebra · per-unit comparison',
      days: [19],
    },
    {
      youtubeVideoId: 'GO5ajwbFqVQ',
      title: 'Solving proportions (Khan Academy)',
      description: 'Khan Academy · 7th grade · cross multiplication',
      days: [20],
    },
    // PART 4: Linear Relations
    {
      youtubeVideoId: 'AZroE4fJqtQ',
      title: 'Recognizing linear functions (Khan Academy)',
      description: 'Khan Academy · Grade 8 · Linear vs nonlinear',
      days: [21],
    },
    {
      youtubeVideoId: 'rgvysb9emcQ',
      title: 'Graphs of linear equations (Khan Academy)',
      description: 'Khan Academy · Grade 8 · Plotting on coordinate plane',
      days: [22],
    },
    {
      youtubeVideoId: 'TI75fW6w71k',
      title: '함수의 기본 개념 (정승제)',
      description: '정승제 · 함수가 되려면 필요한 두 가지 조건 (한국어 보조)',
      days: [21, 22],
    },
    {
      youtubeVideoId: 'Iqws-qzyZwc',
      title: 'Slope and rate of change (Khan Academy)',
      description: 'Khan Academy · Algebra Basics · rise over run',
      days: [23],
    },
    {
      youtubeVideoId: 'IL3UCuXrUzE',
      title: 'Slope-intercept form (Khan Academy)',
      description: 'Khan Academy · Algebra I · y = mx + b',
      days: [24],
    },
    {
      youtubeVideoId: '5Yo8mkqnk_w',
      title: '일차함수와 일차방정식 (정승제)',
      description: '정승제 · 머릿속이 환해지는 일차함수 10분 끝내기 (한국어 보조)',
      days: [23, 24],
    },
    {
      youtubeVideoId: 'kbqO0YTUyAY',
      title: 'Intuition for solving one-step equations (Khan Academy)',
      description: 'Khan Academy · Algebra I · Balance principle',
      days: [25],
    },
    {
      youtubeVideoId: 'tuVd355R-OQ',
      title: 'Two-step equations example (Khan Academy)',
      description: 'Khan Academy · Algebra I · Multi-step solving',
      days: [26],
    },
    {
      youtubeVideoId: 'r-bIFWGmf9k',
      title: '방정식 개념 종결 (정승제)',
      description: '정승제 · 일차방정식 풀이 (한국어 보조)',
      days: [25, 26],
    },
    // PART 5: Probability & Data
    {
      youtubeVideoId: 'xSc4oLA9e8o',
      title: 'Compound probability of independent events (Khan Academy)',
      description: 'Khan Academy · Probability · P(A and B) = P(A) × P(B)',
      days: [27],
    },
    {
      youtubeVideoId: 'Zxvc6iPKdec',
      title: 'Count outcomes using tree diagram (Khan Academy)',
      description: 'Khan Academy · Grade 7 · Compound outcomes',
      days: [28],
    },
    {
      youtubeVideoId: 'h8EYEJ32oQ8',
      title: 'Mean, median, and mode (Khan Academy)',
      description: 'Khan Academy · Grade 6 · Measures of central tendency',
      days: [29],
    },
  ],

  // ── 기초탄탄 코스: 3개 영상 ──
  foundation: [
    {
      youtubeVideoId: 'k8VnUHUMNSk',
      title: '분수의 모든 것',
      description: '분수를 가장 쉽게 한 번에 이해하는 법',
      days: [6, 7, 8, 9, 10, 11],
    },
    {
      youtubeVideoId: 'PNb7prOGowE',
      title: '소수의 사칙연산',
      description: '수학 명의가 핵심만 짚어주는 소수의 사칙연산',
      days: [12, 13, 14, 15],
    },
    {
      youtubeVideoId: 'ADBtgOxs8e8',
      title: '공약수와 공배수',
      description: '모든 것이 쉬워진다! 공약수와 공배수',
      days: [16, 17, 18, 19],
    },
  ],
};

/**
 * 특정 코스의 특정 Day에 매칭되는 YouTube 영상 목록을 반환
 */
export function getVideosForDay(
  grade: string,
  day: number
): VideoMapping[] {
  const gradeVideos = videoMappings[grade] || [];
  return gradeVideos.filter((v) => v.days.includes(day));
}
