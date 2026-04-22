# math-50days (50일 수학) 작업 인수인계

> 최근 업데이트: 2026-04-22 (심야 Auto mode 세션)
> 라이브 URL: https://math-50days.vercel.app
> GitHub: https://github.com/lomadmichael/math-50days
> 브랜치: `master` (최신 커밋 `b203808`)

## 프로젝트 개요
중학교 1학년 아들(2012년 7월생, 캐나다 BC주 Surrey교육청 Grandview Heights Secondary Grade 8)을 위한 "50일 수학" 웹 앱.
Next.js 16 + Vercel 배포. 4개 독립 코스 (기초탄탄, 중1, 중2, 중3) × 각 50일.

---

## 2026-04-22 밤 세션 — BC Grade 6-7 + Grade 9 전체 콘텐츠 완성

### 🇨🇦 BC 캐나다 과정 3개 학년 모두 풀 콘텐츠로 완성 (커밋 `144c4e1`)

| 학년 | Days | PARTs | 상태 |
|---|---|---|---|
| BC Grade 6-7 | 30 | 5 | ✅ 신규 완성 |
| BC Grade 8 | 30 | 5 | ✅ 기존 |
| BC Grade 9 | 35 | 6 | ✅ 신규 완성 |

### BC Grade 6-7 주제 (30 Days)
- PART 1 Number Sense (Day 1-8): Place Value, Integers, GCF/LCM, BEDMAS, Powers intro
- PART 2 Fractions/Decimals/% (Day 9-14): F/D/% 변환, 연산
- PART 3 Ratios (Day 15-18): Ratios, Unit Rates, Proportions
- PART 4 Geometry (Day 19-24): Angles, Triangles, Circle, Volume
- PART 5 Data/Probability (Day 25-30): Graphs, Mean/Median/Mode, Probability, Mini Test

### BC Grade 9 주제 (35 Days)
- PART 1 Powers (Day 1-6): Laws of Exponents, Scientific Notation
- PART 2 Polynomials (Day 7-13): FOIL, Word Problems
- PART 3 Linear Eq & Ineq (Day 14-20): Multi-step, Fractions, Inequalities
- PART 4 Linear Relations (Day 21-26): Slope, Intercept, Parallel/Perpendicular
- PART 5 Geometry (Day 27-30): Similarity, Composite Solids
- PART 6 Stats & Probability (Day 31-35): Central Tendency, Scatter Plots, Final Test

### 영상 매핑 (63개 추가)
**Khan Academy** (공식 채널, WebSearch 검증): G6-7 29개 + G9 34개
**정승제 재활용** (한국어 보조):
- G6-7: 양수/음수, 정수 사칙, 공약수/공배수, 분수의 모든 것, 소수 사칙연산
- G9: 지수법칙, 다항식과 일차식, 단항식 곱셈나눗셈, 방정식 개념, 일차함수, 함수 기본 개념

### 작업 방법
6개 Sonnet 서브에이전트 병렬 디스패치:
- 콘텐츠 4개 (G6-7 1-15, 16-30, G9 1-18, 19-35)
- Khan Academy 2개 (G6-7, G9)
- 모두 TypeScript 타입 체크 통과

---

## 2026-04-22 저녁 세션 — Grade 8 대규모 업그레이드 (9개 기능)

3개 서브에이전트 병렬 디스패치 + Phase A·E 직접 구현.

### Phase A (직접 구현)
- **A1. 이미지 업로드 → 샘 vision (커밋 `6bb9a46`)**
  - AITutor 에 📷 버튼 + 클립보드 붙여넣기
  - Claude multimodal content block (text + image)
  - 최대 3장·5MB
  - 학교 워크시트·시험지 사진 찍어 바로 풀이 요청
- **A2. 오답 노트 `/mistakes` (커밋 `6bb9a46`)**
  - `useMistakeNotebook` localStorage 영속 저장
  - 필터: 현재 틀림 / 한 번이라도 틀림 / 전체
  - 출처별 그룹핑, 시도 이력, 해결됨/틀림 시각 구분

### Phase B (에이전트 1, 커밋 `fe6bb09`)
- **B1. Day 완료 셀러브레이션**: canvas-confetti, 코스별 색상
- **B2. 북마크**: `useBookmarks`, Day 헤더 별 아이콘, `/bookmarks`
- **B3. 검색**: `/search` 전체 Day 풀텍스트, 키워드 하이라이트

### Phase C (에이전트 2, 커밋 `fe6bb09`)
- **C1. 단원평가 모드**: UnitTestMode 컴포넌트
  - 타이머 (일반 20분 / isTest Day 30분)
  - 힌트 숨김 → 제출 후 결과 + 오답 해설
  - 오답 자동 노트 기록
- **C2. Spaced Repetition**: `useReviewScheduler`
  - SM-2 변형: 맞힘 간격 2배 (최대 64일) / 틀림 1일 리셋
  - Day 완료 시 개념 자동 등록
  - `/review` + 홈 "오늘의 복습" 카드

### Phase D (에이전트 3, 커밋 `fe6bb09`)
- **D1. 영어 수학 용어 플래시카드 95장**: `/flashcards`
  - BC G8 + 한국 중1 + both, 8개 주제 분류
  - 카드 flip 애니메이션, "알아요"/"다시 볼게요"
- **D2. Day별 프린트 페이지**: `/print/[grade]/[dayNumber]`
  - @media print 최적화 · A4 한 페이지
- **D3. 학부모 주간 리포트**: `/parent-report`
  - 완료 Day · 정답률 · 오답 현황 · 주제별 강약

### Phase E (직접 구현, 커밋 `fe6bb09`)
- **E. 주간 메일 AI 파서**: `/admin/update-week`
  - `/api/parse-school-email` Claude Sonnet 4.5 구조화 파싱
  - 메일 본문 → WeeklySchedule JSON → TS 코드 자동 생성
  - Gmail API 자동 수신 향후 확장 가이드 포함
  - 현재는 수동 복붙 → 코드 복사 → thisWeek.ts 덮어쓰기

### 라우트 맵 (총 16개)
```
/                       — 랜딩 허브
/kr , /ca               — 권역별 과정 목록
/[grade]                — 코스 대시보드 (7종)
/[grade]/day/[dayNumber]— Day 학습 페이지
/this-week              — 이번 주 학교 대비
/mistakes               — 오답 노트
/bookmarks              — 북마크
/search                 — 전체 검색
/review                 — 오늘의 복습
/flashcards             — 영어 용어 플래시카드
/parent-report          — 학부모 주간 리포트
/print/[grade]/[dayNumber] — 프린트용
/admin/update-week      — 주간 메일 파서
/profile                — 학습 프로필
/api/ai-tutor           — 샘 (multimodal)
/api/parse-school-email — 주간 메일 파서
```

---

## 2026-04-22 오후 세션 — 캐나다 BC 커리큘럼 추가

### 🇨🇦 BC Grade 6-7 / 8 / 9 과정 신설 (커밋 `33fbf42`)
한국 과정은 그대로 유지하고, 아들 학교(BC Surrey Grandview Heights Secondary) 커리큘럼을 **별도 과정**으로 추가.

**홈 화면 재구성**:
- 🇰🇷 한국 과정 (기초탄탄·중1·중2·중3) — 기존 유지
- 🇨🇦 캐나다 BC 과정 (Grade 6-7·Grade 8·Grade 9) — 신규

### BC Grade 8 (30 Days, 완성) ⭐ 아들 현재 학년
| PART | 주제 | Days |
|---|---|---|
| 1 Number | Perfect Squares, Square Roots, Pythagorean Theorem | 1~7 |
| 2 Measurement | Surface Area & Volume (Prisms, Cylinders) | 8~13 |
| 3 Number Operations | Integers, Fractions, Percents, Ratios, Proportions | 14~20 |
| 4 Linear Relations | Graphing, Slope, Y-intercept, 1-2 step Equations | 21~26 |
| 5 Probability & Data | Independent Events, Tree Diagrams, Mean/Median/Mode, Review | 27~30 |

**콘텐츠 특징**:
- 영어 메인 + 한국어 보조 (용어 첫 등장 시 괄호 병기)
- 문제는 영어로만 (학교 시험 동일 스타일)
- realLifeExample 영어 + 한국어 요약

**영상 매핑**:
- **Khan Academy 29개** (공식 채널, WebSearch 검증)
- **정승제 5개 재활용** (루트·피타고라스·함수·일차함수·방정식) — 한국어 보조

### AI 튜터 "샘" BC 모드
- `course.primaryLanguage === 'en'` 이면 `languageMode='en'` 자동 전달
- API `BC_MODE_ADDENDUM`: 영어 주 언어, 한국어 요약 섹션(💡 한국어로:)
- 제안 질문도 BC 모드 전용 영어 버전으로 자동 전환

### BC Grade 6-7, Grade 9 — 프레임만
- Grade 6-7: 30 Days 5 PARTs 구조 정의 (콘텐츠 추후)
- Grade 9: 35 Days 6 PARTs 구조 정의 (콘텐츠 추후, 내년 대비)
- Grade 8 실사용 검증 후 점진 확장

### 작업 방법
4개 Sonnet 서브에이전트 병렬 디스패치:
- Day 1-10 콘텐츠 생성
- Day 11-20 콘텐츠 생성
- Day 21-30 콘텐츠 생성
- Khan Academy 29개 영상 WebSearch 검증

---

## 2026-04-22 심야 세션 추가 작업 (Auto mode)

### 6. LaTeX 수식 렌더링 이슈 대량 수정 (커밋 `252d6f8`)
사용자 지적: Day 15 realLifeExample 에 `$\times 0.7$` 가 수식이 아닌 평문으로 노출됨.

**원인 분석**:
1. `realLifeExample` 필드가 Day 페이지에서 plain text 로 렌더링됨
2. Day 제목에 LaTeX 포함된 경우 (grade3 Day 23~25) 평문 노출
3. **grade2/grade3/foundation 121개 파일에 이중 이스케이프 (`\\\\frac`)** 존재
   - grade1 은 `\\frac` 으로 정상, 나머지 grade 는 `\\\\frac` 으로 깨짐
   - JS 문자열: `\\frac` → KaTeX `\\` + `frac` = 줄바꿈 + 깨짐

**수정**:
- `MathRenderer` 컴포넌트: `inline` 프롭 추가 (span 렌더 지원)
- Day 페이지: `realLifeExample`, `title` 을 MathRenderer 로 감쌈
- Python 스크립트로 121개 파일에서 `\\\\` → `\\` 일괄 교정
  - matrix/cases 의 `\\\\\\\\` (8) → `\\\\` (4) = 정상 유지
- 수정 전: grade2 1184 wrong, grade3 1525 wrong, foundation 259 wrong
- 수정 후: 모든 grade wrong=0, correct=5433

### 7. grade1 전체 영어 용어 병기 (커밋 `b203808`)
아들이 캐나다 Grade 8 영어 수업 따라가는 중이라 한국 수학 개념과 영어 용어 매칭 필요.

**작업 방법**:
4개 Sonnet 서브에이전트 병렬 디스패치 (Day 1~13, 14~26, 27~37, 38~50)
- title, subtitle, concepts, realLifeExample 에 영어 병기
- 첫 등장 시에만 병기 (시각적 혼잡 방지)
- 수식/problems 는 미수정

**추가된 영어 용어** (~400개 병기):

| 영역 | 주요 용어 |
|---|---|
| 수와 연산 | Integer, Rational Number, Prime Factorization, GCD, LCM, Absolute Value |
| 문자와 식 | Polynomial, Linear Equation, Distributive Property, Solution, Transposition |
| 좌표 | Coordinate Plane, Quadrant, Direct/Inverse Proportion |
| 도형 | Congruence (SSS·SAS·ASA), Polygon, Interior/Exterior Angle, Circle, Sector |
| 입체도형 | Polyhedron, Prism, Cylinder, Pyramid, Cone, Sphere, Surface Area, Volume |
| 통계 | Stem-and-Leaf Plot, Histogram, Relative Frequency, Mean/Median/Mode |

---

## 이전 세션 완료 작업 (심야, 사용자 취침 중 Auto mode)

### 1. 이번 주 학습 대비 페이지 `/this-week` (커밋 `c455d36`)
학교 선생님 주간 메일 기반으로 다음 주 학습 대비 페이지 신설.
- `src/data/thisWeek.ts`: 주간 메일 데이터 (이번 주: Slope/Intercepts/Cuboid Volume/Spatial Reasoning)
- `src/app/this-week/page.tsx`: Quiz 대비 + 새 주제 예습 섹션
- `src/lib/types.ts`: `WeeklySchedule`, `WeeklyPrepItem` 타입 추가
- 홈 상단에 /this-week 배너 카드 (NEW 뱃지)
- 아들 프로필(영어 수업·Grade 8)을 AI 튜터 샘에 전달 → 영어/한국어 용어 매칭 답변

**매주 업데이트 방법**: 새 학교 메일 → Claude Code에 복붙 → `src/data/thisWeek.ts` 갱신 → 커밋·배포

### 2. 샘(AI 튜터) → 플로팅 버튼 (커밋 `17f7065`)
기존 인라인 챗 → 우측 하단 플로팅 버블로 전환.
- `src/components/FloatingAITutor.tsx` 신설: 버블 + 패널 래퍼
  - 데스크탑: 420px 폭, 최대 640px 높이 플로팅 패널
  - 모바일: 바텀시트 + 백드롭 + body 스크롤 잠금
  - ESC 키 닫기, 첫 사용 전 펄스 링
- `src/components/AITutor.tsx`: `embedded` 프롭 추가
- `/this-week`, `/[grade]/day/[dayNumber]` 양쪽에서 플로팅 샘 사용

### 3. 문제 풀이 상황 자동 공유 (커밋 `e8ad442`)
샘이 "어떤 문제였어?" 되묻지 않고 바로 틀린 문제 분석하도록.
- `src/hooks/useProblemAttempts.tsx`: Context API로 풀이 기록 공유
  - `recordAttempt()`: 문제 채점 시 저장
  - `formatAttemptsForTutor()`: 시스템 프롬프트용 요약 생성
- `Problem.tsx`: 채점 시 context에 기록
- `AITutor.tsx`: dayContext에 풀이 상황 자동 포함
  - 헤더 아래 `📋 샘이 보고 있어요: ✓N ✗M / 총 K` 배지
  - 제안 질문이 풀이 상황 따라 3가지 버전 동적 변경
- API 시스템 프롬프트: 풀이 상황 처리 지침 추가 ("되묻지 말고 바로 분석")

### 4. 샘 채팅 스크롤 수정 (커밋 `a553241`)
flexbox 높이 계산 체인 문제. 패널 고정 높이 + flex-1 min-h-0 로 해결.

### 5. grade1 영상 매핑 대대적 확장 (커밋 `ec637bd`)
**기존 8개 → 25개 영상**으로 확대. 중1 교과 과정 거의 전 영역 커버.

#### 정정
Day 4(양수와 음수)에 최대공약수 영상이 잘못 매핑 등 오매핑 수정.

#### 신규 발견 채널 & 영상 (17개 추가)
- **정승제의50일수학 중1 영상** 추가 발견: `r-bIFWGmf9k` (일차방정식) → Day 17
- **EBS 수학의 답** (공식 중1 교과 시리즈): 일차식·등식·방정식 활용·대푯값
- **수악중독중학수학 (@SAJDJS)**: 삼각형 작도/합동, 다각형, 원·부채꼴, 입체도형, 통계 — 13개

#### 최종 Day별 영상 커버리지
- 50 Days 중 **38 Days**에 영상 매핑 (기존 14 Days)
- 영상 없는 12 Days: 미니테스트 8개 + 초기 기초(약수배수 등) 4개
- 모든 영상 ID는 WebSearch 검증 완료 (추측 없음)

#### 서브에이전트 활용
3개 병렬 디스패치 (Sonnet):
1. 일차방정식 영상 검색 → EBS/정승제 7개 영상
2. 도형 영상 검색 → 수악중독중학수학 11개 영상
3. 통계 영상 검색 → 수악중독/EBS 6개 영상

---

## 누적 영상 인벤토리

### grade1 영상 25개 매핑
```
Day 2   지수법칙 (정승제)                    I1xUUV3lVAQ
Day 3   최대공약수 (정승제)                  LWa3JRiASFM
Day 4   양수와 음수 (정승제)                 HJUUcTyWXKw
Day 5-6,9 정수·유리수 사칙연산 (정승제)       wVayYzfT0Fo
Day 8,10 수의 개념 (정승제)                 Uzu68a5NBo4
Day 12-13 문자를 사용한 식 (정승제)          AbOSkFWlZrM
Day 14  일차식 덧뺄셈 (EBS)                 6RER1_-9n0w
Day 15  일차식 곱나눗셈 (EBS)               uMls_t2lj3o
Day 16  등식의 성질 (EBS)                   QKsVgnARexU
Day 17  방정식 개념 종결 (정승제)            r-bIFWGmf9k
Day 18  일차방정식 활용(나이) (EBS)          ScpCoL8luwc
Day 19  일차방정식 활용(농도) (EBS)          d_BezE15byI
Day 21-25 함수의 기본 개념 (정승제)          TI75fW6w71k
Day 29  삼각형과 평행선 (정승제)             N5hFCBekUlk
Day 30  삼각형 작도 (수악중독)               1edwauXgGOM
Day 31  삼각형 합동조건 (수악중독)           gBI4DZV3AB8
Day 33  다각형 대각선 (수악중독)             YjxpU1uYtTk
Day 34  내각과 외각 (수악중독)               zLi9UYfkAuI
Day 35  원과 부채꼴 (수악중독)               4xl9VRoOcQI
Day 36  부채꼴 호·넓이 (수악중독)            -r2-ulO0GM4
Day 38  정다면체 (수악중독)                  e05G2YJ8QRg
Day 39  회전체 (수악중독)                    ZESpmQNmiEQ
Day 40  기둥 겉넓이 부피 (수악중독)          FSSuhoraPyM
Day 41  뿔 겉넓이 부피 (수악중독)            x04SB4k5aC0
Day 42  구 겉넓이 부피 (수악중독)            GdAm-MReoIg
Day 44  줄기와 잎 그림 (수악중독)            7Klf0khPMnQ
Day 45-46 도수분포표·히스토그램 (수악중독)   dwSZZ8jOuzs
Day 47  상대도수 (수악중독) + 평균 (EBS)    CR4HRmhC3Mg, sv0eCvKa16s
```

### 영상 없는 12 Days
Day 1 (약수와 배수 복습), 7 (미니테스트), 11 (미니테스트),
Day 20 (미니테스트), 26 (미니테스트), 27 (점선면각), 28 (위치관계),
Day 32, 37, 43, 48 (미니테스트), 49 (종합테스트), 50 (총정리)

---

## 다음 할 일

### 즉시 (아들 사용 검증)
- [ ] 아들이 실제로 /this-week에서 Quiz 대비 문제 풀어보고 샘에게 질문 (영어/한국어 용어 매칭 답변 확인)
- [ ] Day 14~19 (일차방정식 단원)에서 EBS 수학의 답 영상 품질 체크
- [ ] Day 30~47 (도형·통계)에서 수악중독중학수학 영상 품질 체크
- [ ] 샘 플로팅 버튼 UX 피드백 (위치, 크기, 알림 정도)

### 다음 주 메일 도착 시
1. `src/data/thisWeek.ts` 갱신 (Claude에게 복붙하면 자동 업데이트)
2. `git commit && vercel --prod`

### 잠재 개선 (우선순위 낮음)
- [ ] grade2 (중2), foundation 영상 매핑도 grade1과 같은 방식으로 확장
  - 주로 수악중독중학수학·EBS 수학의 답 활용 가능
- [ ] 틀린 문제 → 샘에게 "이거 설명해줘" 원클릭 딥링크
- [ ] 이번 주 학습 대비 아카이브 (지난 주 리포트 모아보기)
- [ ] AI 답변 기록 localStorage 저장

### 장기
- [ ] 중2, 중3 영상 매핑 확장
- [ ] 별도 도메인에 YouTube 비공개 영상으로 풍부한 강의

---

## 비용 모니터링
- 첫날 사용량: 약 **200원/일**
- 월 환산 예상: **약 6,000원 ($4~5)**
- Sonnet 4.5 모델, prompt caching 적용
- 모니터링: https://console.anthropic.com/usage

### 비용 폭증 방지 안전장치 (이미 적용)
- 페이지 이동 시 대화 자동 초기화
- max_tokens 1024 제한
- 시스템 프롬프트 캐싱 (2번째 턴부터 90% 절감)

---

## 핵심 파일

### 데이터
- `src/data/curriculum.ts` — 4개 코스 PART 구조
- `src/data/videoMappings.ts` — YouTube 영상 매핑 **(이번에 대폭 확장)**
- `src/data/ebsLectures.ts` — EBS 69강 카탈로그 + Day 매핑 **(이번에 재조정)**
- `src/data/thisWeek.ts` — 이번 주 학교 메일 기반 학습 대비 데이터 **(신규)**
- `src/data/{grade}/days/dayXX.ts` — 200개 Day 콘텐츠

### UI
- `src/app/this-week/page.tsx` — 이번 주 학습 대비 페이지 **(신규)**
- `src/app/[grade]/day/[dayNumber]/page.tsx` — Day 학습 페이지 (3탭)
- `src/components/FloatingAITutor.tsx` — 플로팅 샘 버튼 **(신규)**
- `src/components/AITutor.tsx` — 샘 챗 (embedded 프롭 지원)
- `src/components/Problem.tsx` — 문제 + context 기록

### Hooks & Context
- `src/hooks/useProblemAttempts.tsx` — 풀이 상황 공유 Context **(신규)**
- `src/hooks/useProgress.ts` — 기존 학습 진도
- `src/hooks/useLocalStorage.ts` — 기존

### API
- `src/app/api/ai-tutor/route.ts` — 샘 API (Sonnet 4.5 스트리밍, 풀이 상황 처리 지침 포함)

---

## 새 채팅 첫 메시지

```
C:\Users\hongk\Desktop\ClaudeCode\math-50days\HANDOFF.md 읽고 이어서 작업해줘
```
