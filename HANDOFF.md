# math-50days (50일 수학) 작업 인수인계

> 최근 업데이트: 2026-04-21 (심야 세션)
> 라이브 URL: https://math-50days.vercel.app
> GitHub: https://github.com/lomadmichael/math-50days
> 브랜치: `master` (최신 커밋 `ec637bd`)

## 프로젝트 개요
중학교 1학년 아들(2012년 7월생, 캐나다 BC주 Surrey교육청 Grandview Heights Secondary Grade 8)을 위한 "50일 수학" 웹 앱.
Next.js 16 + Vercel 배포. 4개 독립 코스 (기초탄탄, 중1, 중2, 중3) × 각 50일.

---

## 이번 세션 완료 작업 (심야, 사용자 취침 중 Auto mode)

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
