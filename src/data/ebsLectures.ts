/**
 * EBS "정승제의 50일 수학" 69강 카탈로그
 * 코스 URL: https://www.ebsi.co.kr/ebs/lms/lmsx/retrieveSbjtDtl.ebs?courseId=S20160001150#lecture
 *
 * 각 강의는 EBS 코스 페이지 내 재생 팝업에서 열리므로 직접 딥링크는 불가.
 * 학생에게 "이 주제는 EBS XX강" 을 알려주어 목록에서 찾아 수강하도록 안내한다.
 */

export { EBS_COURSE_URL } from './videoMappings';

export interface EbsLecture {
  /** 강의 번호 (1~69) */
  number: number;
  /** 전체 제목 (예: "01강 다항식 [유형01-01 ~ 유형01-02]") */
  fullTitle: string;
  /** 주제 대분류 (예: "다항식", "복소수") */
  topic: string;
  /** EBS 내부 강의 ID (팝업 연동용, 현재는 참고용) */
  lectureId: string;
}

export const EBS_LECTURES: EbsLecture[] = [
  { number: 1, fullTitle: '01강 다항식 [유형01-01 ~ 유형01-02]', topic: '다항식', lectureId: 'LS000000170517' },
  { number: 2, fullTitle: '02강 다항식 [유형01-03 ~ 유형01-08]', topic: '다항식', lectureId: 'LS000000170518' },
  { number: 3, fullTitle: '03강 다항식 [유형01-09 ~ 유형01-14]', topic: '다항식', lectureId: 'LS000000170769' },
  { number: 4, fullTitle: '04강 다항식 [유형01-15 ~ 유형01-20]', topic: '다항식', lectureId: 'LS000000170770' },
  { number: 5, fullTitle: '05강 다항식 [유형01-21 ~ 유형01-23]', topic: '다항식', lectureId: 'LS000000171183' },
  { number: 6, fullTitle: '06강 다항식 [유형01-24 ~ 유형01-28]', topic: '다항식', lectureId: 'LS000000171184' },
  { number: 7, fullTitle: '07강 다항식 [유형01-29 ~ 유형01-36]', topic: '다항식', lectureId: 'LS000000171340' },
  { number: 8, fullTitle: '08강 다항식 [유형01-37 ~ 유형01-44]', topic: '다항식', lectureId: 'LS000000171341' },
  { number: 9, fullTitle: '09강 다항식 [유형01-45 ~ 유형01-48]', topic: '다항식', lectureId: 'LS000000171661' },
  { number: 10, fullTitle: '10강 다항식 [유형01-49 ~ 유형01-53]', topic: '다항식', lectureId: 'LS000000171662' },
  { number: 11, fullTitle: '11강 다항식 [유형01-54 ~ 유형01-59]', topic: '다항식', lectureId: 'LS000000171754' },
  { number: 12, fullTitle: '12강 다항식 [유형01-60]', topic: '다항식', lectureId: 'LS000000171755' },
  { number: 13, fullTitle: '13강 다항식 [유형 01-60~유형 01~63]', topic: '다항식', lectureId: 'LS000000172115' },
  { number: 14, fullTitle: '14강 다항식 [유형 01-63~유형 01~65]', topic: '다항식', lectureId: 'LS000000172116' },
  { number: 15, fullTitle: '15강 다항식 [유형 01-66~유형 01-68]', topic: '다항식', lectureId: 'LS000000172117' },
  { number: 16, fullTitle: '16강 다항식 [유형01-69~유형01-71]', topic: '다항식', lectureId: 'LS000000172427' },
  { number: 17, fullTitle: '17강 복소수 [유형02-01~유형02-03]', topic: '복소수', lectureId: 'LS000000172428' },
  { number: 18, fullTitle: '18강 복소수 [유형02-04~유형02-09]', topic: '복소수', lectureId: 'LS000000172429' },
  { number: 19, fullTitle: '19강 복소수 [유형 02-10~유형 02-16]', topic: '복소수', lectureId: 'LS000000172936' },
  { number: 20, fullTitle: '20강 복소수 [유형 02-16~유형 02-21]', topic: '복소수', lectureId: 'LS000000172937' },
  { number: 21, fullTitle: '21강 복소수 [유형 02-22~유형 02-28]', topic: '복소수', lectureId: 'LS000000172938' },
  { number: 22, fullTitle: '22강 복소수 [유형 02-29~유형 02-30]', topic: '복소수', lectureId: 'LS000000172939' },
  { number: 23, fullTitle: '23강 복소수[유형 02-31~유형 02-32]', topic: '복소수', lectureId: 'LS000000173145' },
  { number: 24, fullTitle: '24강 방정식[유형 03-1~유형 03-6]', topic: '방정식', lectureId: 'LS000000173146' },
  { number: 25, fullTitle: '25강 방정식 [유형 03-7~유형 03-12]', topic: '방정식', lectureId: 'LS000000173298' },
  { number: 26, fullTitle: '26강 방정식 [유형 03-13~유형 03-16]', topic: '방정식', lectureId: 'LS000000173299' },
  { number: 27, fullTitle: '27강 방정식[유형03-16~유형03-21]', topic: '방정식', lectureId: 'LS000000173968' },
  { number: 28, fullTitle: '28강 방정식[유형03-22,유형03-25]', topic: '방정식', lectureId: 'LS000000174695' },
  { number: 29, fullTitle: '29강 방정식[유형03-26,유형03-28]', topic: '방정식', lectureId: 'LS000000174696' },
  { number: 30, fullTitle: '30강 방정식 (유형03-28~유형03-30)', topic: '방정식', lectureId: 'LS000000174925' },
  { number: 31, fullTitle: '31강 방정식 (유형03-31~유형03-35)', topic: '방정식', lectureId: 'LS000000174926' },
  { number: 32, fullTitle: '32강 방정식[유형03-35]/부등식[유형04-1~유형04-9]', topic: '방정식·부등식', lectureId: 'LS000000175236' },
  { number: 33, fullTitle: '33강 부등식[유형 04-9~유형 04-13]', topic: '부등식', lectureId: 'LS000000175237' },
  { number: 34, fullTitle: '34강 부등식[유형 04-14~유형 04-15]', topic: '부등식', lectureId: 'LS000000175759' },
  { number: 35, fullTitle: '35강 함수 [유형05-1 ~ 유형05-3]', topic: '함수', lectureId: 'LS000000176389' },
  { number: 36, fullTitle: '36강 함수 [유형05-4~유형05-5]', topic: '함수', lectureId: 'LS000000176696' },
  { number: 37, fullTitle: '37강 함수 [유형05-5~유형05-8]', topic: '함수', lectureId: 'LS000000176697' },
  { number: 38, fullTitle: '38강 함수 [유형05-9~유형05-13]', topic: '함수', lectureId: 'LS000000179119' },
  { number: 39, fullTitle: '39강 함수 [유형05-14]', topic: '함수', lectureId: 'LS000000179120' },
  { number: 40, fullTitle: '40강 함수 [유형05-14~유형05-19]', topic: '함수', lectureId: 'LS000000179412' },
  { number: 41, fullTitle: '41강 함수 [유형05-20~유형05-24]', topic: '함수', lectureId: 'LS000000180084' },
  { number: 42, fullTitle: '42강 함수 [유형05-24~유형05-25]', topic: '함수', lectureId: 'LS000000180085' },
  { number: 43, fullTitle: '43강 함수[유형05-26~유형05-27]', topic: '함수', lectureId: 'LS000000180861' },
  { number: 44, fullTitle: '44강 함수[유형05-28~유형05-29]', topic: '함수', lectureId: 'LS000000180862' },
  { number: 45, fullTitle: '45강 함수[유형05-29 ~ 유형05-32]', topic: '함수', lectureId: 'LS000000181065' },
  { number: 46, fullTitle: '46강 함수[유형05-31~유형05-33] / 도형[유형06-1~유형06-9]', topic: '함수·도형', lectureId: 'LS000000181483' },
  { number: 47, fullTitle: '47강 도형[유형06-9~유형06-24]', topic: '도형', lectureId: 'LS000000181632' },
  { number: 48, fullTitle: '48강 도형[유형06-24~유형06-33]', topic: '도형', lectureId: 'LS000000181945' },
  { number: 49, fullTitle: '49강 도형[유형06-34~유형06-55]', topic: '도형', lectureId: 'LS000000181946' },
  { number: 50, fullTitle: '50강 도형[유형06-56~유형06-63]', topic: '도형', lectureId: 'LS000000182434' },
  { number: 51, fullTitle: '51강 도형[유형06-64~유형06-74]', topic: '도형', lectureId: 'LS000000182435' },
  { number: 52, fullTitle: '52강 도형[유형06-75 ~ 유형06-84]', topic: '도형', lectureId: 'LS000000183696' },
  { number: 53, fullTitle: '53강 도형[유형06-85 ~ 유형06-100]', topic: '도형', lectureId: 'LS000000183697' },
  { number: 54, fullTitle: '54강 도형 [유형06-101 ~ 유형06-112]', topic: '도형', lectureId: 'LS000000184753' },
  { number: 55, fullTitle: '55강 도형 [유형06-113 ~ 유형06-133]', topic: '도형', lectureId: 'LS000000184981' },
  { number: 56, fullTitle: '56강 도형의 방정식 [유형07-01 ~ 유형07-02]', topic: '도형의 방정식', lectureId: 'LS000000185120' },
  { number: 57, fullTitle: '57강 도형의 방정식 [유형07-02 ~ 유형07-05]', topic: '도형의 방정식', lectureId: 'LS000000185119' },
  { number: 58, fullTitle: '58강 도형의 방정식 [유형07-05 ~ 유형07-07]', topic: '도형의 방정식', lectureId: 'LS000000185173' },
  { number: 59, fullTitle: '59강 도형의 방정식 [유형07-07 ~ 유형07-08]', topic: '도형의 방정식', lectureId: 'LS000000185174' },
  { number: 60, fullTitle: '60강 도형의 방정식 [유형07-09 ~ 유형07-10]', topic: '도형의 방정식', lectureId: 'LS000000185425' },
  { number: 61, fullTitle: '61강 도형의 방정식 [유형07-10 ~ 유형07-12]', topic: '도형의 방정식', lectureId: 'LS000000185426' },
  { number: 62, fullTitle: '62강 도형의 방정식 [유형07-12 ~ 유형07-14]', topic: '도형의 방정식', lectureId: 'LS000000185578' },
  { number: 63, fullTitle: '63강 도형의 방정식 [유형07-14 ~ 유형07-16]', topic: '도형의 방정식', lectureId: 'LS000000185579' },
  { number: 64, fullTitle: '64강 도형의 방정식 [유형07-17 ~ 유형07-18]', topic: '도형의 방정식', lectureId: 'LS000000185580' },
  { number: 65, fullTitle: '65강 도형의 방정식 [유형07-18 ~ 유형07-21]', topic: '도형의 방정식', lectureId: 'LS000000185581' },
  { number: 66, fullTitle: '66강 도형의 방정식 [유형07-21 ~ 유형07-22]', topic: '도형의 방정식', lectureId: 'LS000000185645' },
  { number: 67, fullTitle: '67강 도형의 방정식 [유형07-22 ~ 유형07-23]', topic: '도형의 방정식', lectureId: 'LS000000185646' },
  { number: 68, fullTitle: '68강 도형의 방정식 [유형07-23]', topic: '도형의 방정식', lectureId: 'LS000000185647' },
  { number: 69, fullTitle: '69강 50일 수학 제자들을 위한 고교수학 학습 로드맵', topic: '학습 로드맵', lectureId: 'LS000000185648' },
];

/**
 * 코스+Day → 추천 EBS 강의 번호(복수)
 * 주제가 직접 대응되는 Day만 매핑. 매핑 없는 Day는 EBS 전체 목록으로 링크.
 *
 * 키 형식: `${gradeId}-${dayNumber}`
 */
const DAY_TO_EBS_LECTURES: Record<string, number[]> = {
  // ============ grade3 (중3, 7 PART 50 Days) ============
  // PART 1: 수의 체계 (Day 1~5) — 다항식/복소수 아닌 기초지만 17~20강 복소수와 연결
  'grade3-1': [17], 'grade3-2': [17], 'grade3-3': [17, 18],
  'grade3-4': [18], 'grade3-5': [19],
  // PART 2: 다항식의 계산 (Day 6~12)
  'grade3-6': [1], 'grade3-7': [2], 'grade3-8': [3], 'grade3-9': [4],
  'grade3-10': [5, 6], 'grade3-11': [7, 8], 'grade3-12': [9],
  // PART 3: 인수분해 (Day 13~20)
  'grade3-13': [5], 'grade3-14': [6], 'grade3-15': [7], 'grade3-16': [8],
  'grade3-17': [9], 'grade3-18': [10], 'grade3-19': [11], 'grade3-20': [11, 12],
  // PART 4: 방정식 (Day 21~30)
  'grade3-21': [24], 'grade3-22': [25], 'grade3-23': [26], 'grade3-24': [27],
  'grade3-25': [28], 'grade3-26': [29], 'grade3-27': [30], 'grade3-28': [31],
  'grade3-29': [13, 14], 'grade3-30': [15, 16],
  // PART 5: 함수 (Day 31~38)
  'grade3-31': [35], 'grade3-32': [36], 'grade3-33': [37], 'grade3-34': [38],
  'grade3-35': [39, 40], 'grade3-36': [41, 42], 'grade3-37': [43, 44], 'grade3-38': [45],
  // PART 6: 도형 (Day 39~45)
  'grade3-39': [47], 'grade3-40': [48], 'grade3-41': [49], 'grade3-42': [50, 51],
  'grade3-43': [52, 53], 'grade3-44': [54], 'grade3-45': [55],
  // PART 7: 도형의 방정식 (Day 46~50)
  'grade3-46': [56, 57], 'grade3-47': [58, 59], 'grade3-48': [60, 61],
  'grade3-49': [62, 63, 64], 'grade3-50': [65, 66, 67, 68],

  // ============ grade2 (중2) ============
  // PART 1: 수와 식 (Day 1~7) — 다항식/일차식 기초
  'grade2-1': [1], 'grade2-2': [2], 'grade2-3': [3],
  'grade2-4': [4], 'grade2-5': [5], 'grade2-6': [6], 'grade2-7': [7],
  // PART 2: 부등식 (Day 8~13)
  'grade2-8': [32], 'grade2-9': [33], 'grade2-10': [33, 34], 'grade2-11': [34],
  'grade2-12': [34], 'grade2-13': [34],
  // PART 3: 연립방정식 (Day 14~19)
  'grade2-14': [24], 'grade2-15': [25], 'grade2-16': [26],
  'grade2-17': [27], 'grade2-18': [28], 'grade2-19': [29],
  // PART 4: 일차함수 (Day 20~26)
  'grade2-20': [35], 'grade2-21': [36], 'grade2-22': [37],
  'grade2-23': [38], 'grade2-24': [39], 'grade2-25': [40], 'grade2-26': [41],
  // PART 5: 도형의 성질 (Day 27~35)
  'grade2-27': [47], 'grade2-28': [48], 'grade2-29': [49],
  'grade2-30': [50], 'grade2-31': [51], 'grade2-32': [52],
  'grade2-33': [53], 'grade2-34': [54], 'grade2-35': [55],
  // PART 6: 확률과 통계 기초 (Day 36~42) — 50일 수학에서 직접 대응 강의 없음
  // PART 7: 총정리 (Day 43~50)
  'grade2-43': [1, 2], 'grade2-44': [24, 25], 'grade2-45': [35, 36],
  'grade2-46': [47, 48], 'grade2-47': [56, 57], 'grade2-48': [69],
  'grade2-49': [69], 'grade2-50': [69],

  // ============ grade1 (중1) ============
  // 실제 Day 주제를 기준으로 EBS 50일 수학(고1) 강의와 가장 가까운 것을 매핑.
  // 중1 초기 주제(약수, 소수, 정수연산)는 EBS 고1 대응 강의가 없어 비워둠.
  //
  // Part 1 — 수와 연산 (Day 1~11)
  // Day 1 약수와배수 복습, Day 2 소인수분해, Day 3 최대공약수 → EBS 없음 (초등~중1 기초)
  'grade1-4': [17, 18],        // 양수와 음수 → 복소수(수의 체계) 맛보기
  'grade1-5': [17], 'grade1-6': [17],  // 정수 덧뺄/곱나눗 (수 체계 감각)
  // Day 7 미니테스트, Day 8 유리수 개념 → 수의 체계
  'grade1-8': [17], 'grade1-9': [17],
  'grade1-10': [17, 18],       // 수의 체계 정리
  // Day 11 미니테스트
  //
  // Part 2 — 문자와 식 (Day 12~20)
  'grade1-12': [1],            // 왜 문자를 쓸까 → 다항식 01강
  'grade1-13': [2],            // 식의 값 구하기 → 02강
  'grade1-14': [3],            // 일차식 덧뺄셈 → 03강
  'grade1-15': [4],            // 일차식 곱나눗셈 → 04강
  'grade1-16': [24],           // 등식의 성질 → 방정식 24강
  'grade1-17': [24, 25],       // 일차방정식 풀이 → 24~25강
  'grade1-18': [25],           // 일차방정식 활용(1) → 25강
  'grade1-19': [25, 26],       // 일차방정식 활용(2) → 25~26강
  // Day 20 미니테스트
  //
  // Part 3 — 좌표와 그래프 (Day 21~26)
  'grade1-21': [35],           // 좌표평면 → 함수 35강
  'grade1-22': [35, 36],       // 그래프의 해석
  'grade1-23': [37],           // 정비례
  'grade1-24': [38],           // 반비례
  'grade1-25': [39, 40],       // 정비례·반비례 활용
  // Day 26 미니테스트
  //
  // Part 4 — 기본도형 (Day 27~32)
  'grade1-27': [47],           // 점·선·면·각 → 도형 47강
  'grade1-28': [47],           // 위치 관계
  'grade1-29': [48],           // 평행선의 성질 (동위각/엇각)
  'grade1-30': [48, 49],       // 삼각형의 작도
  'grade1-31': [49],           // 삼각형의 합동 조건
  // Day 32 미니테스트
  //
  // Part 5 — 평면도형 (Day 33~37)
  'grade1-33': [50],           // 다각형의 성질
  'grade1-34': [50, 51],       // 다각형의 내각/외각
  'grade1-35': [52],           // 원과 부채꼴
  'grade1-36': [52, 53],       // 부채꼴의 호의 길이·넓이
  // Day 37 미니테스트
  //
  // Part 6 — 입체도형 (Day 38~43)
  // EBS 50일 수학(고1)은 도형의 방정식 중심이라 중1 입체도형 직접 대응 강의 없음
  //
  // Part 7 — 자료의 정리 (Day 44~50)
  // 통계 단원도 EBS 50일 수학에 없음
  'grade1-50': [69],           // 총정리 & 로드맵

  // ============ foundation (기초탄탄) ============
  // PART 1~10: 초등 수준 기초. EBS 50일 수학은 고1 레벨이라 대응 강의 제한적.
  // 69강 학습 로드맵만 마지막 Day에 안내.
  'foundation-50': [69],
};

/**
 * 해당 Day에 추천되는 EBS 강의 목록 반환
 */
export function getEbsLecturesForDay(gradeId: string, dayNumber: number): EbsLecture[] {
  const key = `${gradeId}-${dayNumber}`;
  const numbers = DAY_TO_EBS_LECTURES[key] || [];
  return numbers
    .map((n) => EBS_LECTURES.find((l) => l.number === n))
    .filter((l): l is EbsLecture => !!l);
}
