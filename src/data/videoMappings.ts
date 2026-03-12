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

  // ── 중1 코스: 8개 영상 ──
  grade1: [
    {
      youtubeVideoId: 'Uzu68a5NBo4',
      title: '수의 개념',
      description: '수학 기초 1도 모르는 자들을 위한 수의 개념',
      days: [1, 2],
    },
    {
      youtubeVideoId: 'LWa3JRiASFM',
      title: '최대공약수와 최소공배수',
      description: '가슴 뻥 뚫리는 최대공약수와 최소공배수 완벽 정리',
      days: [3, 4],
    },
    {
      youtubeVideoId: 'HJUUcTyWXKw',
      title: '양수와 음수',
      description: '양수와 음수 개념 끝내기 (수의 체계)',
      days: [5, 6],
    },
    {
      youtubeVideoId: 'wVayYzfT0Fo',
      title: '정수와 유리수의 사칙연산',
      description: '쉽고 간단하게 끝내는 정수와 유리수의 사칙연산',
      days: [7, 8, 9],
    },
    {
      youtubeVideoId: 'I1xUUV3lVAQ',
      title: '지수법칙',
      description: '지수법칙을 이해하는 법칙은 바로 정승제',
      days: [10, 11],
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
      days: [21, 22],
    },
    {
      youtubeVideoId: 'N5hFCBekUlk',
      title: '삼각형과 평행선',
      description: '너무 중요한 삼각형과 평행선 완벽정리',
      days: [27, 28, 29],
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
