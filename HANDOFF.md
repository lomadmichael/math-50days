# math-50days (50일 수학) 작업 인수인계

> 생성일: 2026-04-21
> 이전 채팅 마지막 커밋: `16a1318` feat: AI 튜터 모델을 Sonnet 4.5로 업그레이드
> 브랜치: `master`
> 라이브 URL: https://math-50days.vercel.app

## 프로젝트 개요
중학교 1학년 아들을 위한 "50일 수학" 웹 앱. Next.js 16 + Vercel 배포.
4개 독립 코스 (기초탄탄, 중1, 중2, 중3) × 각 50일 = 총 200 Day.
정승제 선생님의 EBS "50일 수학" 커리큘럼 기반.

## 지금 하던 일
이번 세션에서 AI 튜터 기능 추가 + EBS 강의 번호 안내 UI + 영상 버그 수정까지 일단락.
라이브 배포 완료된 상태로 사용자가 아들과 실제 사용 테스트할 차례.

## 이번 세션 주요 작업 (모두 배포 완료)

### 1. YouTube 영상 ID 11개 수정 (`af20d68`)
- 플레이리스트에서 삭제/비공개 전환된 영상 IDs를 실제 ID로 교체
- grade3: 5개, grade2: 2개, grade1: 1개, foundation: 3개
- 파일: `src/data/videoMappings.ts`

### 2. Day 잠금 기능 해제 (`bb864ad`)
- 기존: Day1 완료해야 Day2 볼 수 있던 순차 잠금
- 변경: 모든 Day 자유롭게 접근 가능 (테스트 기간 탐색 자유도 ↑)
- 파일: `src/app/[grade]/page.tsx`, `src/app/[grade]/day/[dayNumber]/page.tsx`

### 3. AI 튜터 "샘(Sam)" 추가 (`0d4edf1`, `a57713a`, `16a1318`)
- 정리 탭에 중학생 눈높이 Q&A 채팅 기능 추가
- **모델**: `claude-sonnet-4-5` (초기 haiku-4-5 → 업그레이드 완료)
- Day별 맥락(제목, 개념) 자동 전달 → 컨텍스트 있는 답변
- KaTeX 수식 렌더링 (`$...$`, `$$...$$`) + 마크다운 bold
- 제안 질문 4개, 스트리밍 UI, 로딩 애니메이션
- 파일:
  - `src/app/api/ai-tutor/route.ts` (API 엔드포인트)
  - `src/components/AITutor.tsx` (UI 컴포넌트)
  - `src/components/MathRenderer.tsx` (재사용)

### 4. EBS 강의 번호 안내 UI (`22e1a47`)
- 기존: "EBS 풀강의 보러가기" 버튼만 있어서 69강 중 어떤 강인지 모름
- 변경: Day별로 추천 EBS 강의 번호+제목 표시
  - 예: "🎯 이 주제는 EBS 42강을 보세요 — 함수 [유형05-24~유형05-25]"
- 69강 카탈로그 + 200 Day 매핑 완성
- 파일:
  - `src/data/ebsLectures.ts` (신규)
  - `src/components/YouTubePlayer.tsx` (UI 업데이트)

## 다음 할 일

### 사용자 테스트 피드백 대기
- [ ] 아들이 실제로 샘(Sam)에게 질문해보고 답변 품질 피드백
- [ ] Sonnet 4.5 품질이 충분한지, Opus까지 올릴 필요 있는지 판단
- [ ] EBS 강의 번호 매핑이 실제 주제와 잘 맞는지 검증 (특히 중1/중2 매핑은 EBS가 고1 레벨이라 완벽하게 맞진 않음)

### 잠재 개선 항목 (우선순위 낮음)
- [ ] 제안 질문을 Day 주제에 맞게 동적으로 생성 (현재는 고정 4개)
- [ ] AI 답변 기록 저장 기능 (지금은 페이지 이동 시 초기화)
- [ ] 틀린 문제를 샘에게 "이거 어떻게 풀어?" 바로 물어볼 수 있는 딥링크
- [ ] 통계/확률 Part 처럼 EBS 대응 강의 없는 Day에 대체 자료 추가
- [ ] 유튜브 영상 없는 Day에 embed 가능한 대체 영상 추가 (EBS는 iframe 불가)

### 장기 (별도 프로젝트 가능성)
- [ ] 별도 도메인에 YouTube 일부공개 영상으로 더 풍부한 강의 제공 (MEMORY 참고)

## 결정/합의사항 (이번 세션)

- **AI 튜터 모델은 Sonnet 4.5**: Haiku보다 3배 비싸지만 개인 사용엔 무시 가능($1~$3/월), 교사 역할에서 품질 차이 체감 큼. Opus는 과도함.
- **KaTeX 렌더링 필수**: AI가 `$x^2$` 같은 수식 보내면 교과서처럼 보여야 중학생이 이해. 기존 `MathRenderer` 컴포넌트 재사용 (ConceptNote와 일관성).
- **Day 잠금 해제 유지**: 테스트 기간/개인 사용이라 순차 학습 강제하지 않음.
- **EBS 딥링크 불가 → 강의 번호 명시 방식**: EBS 페이지가 `popupLectureMedia()` JS 팝업이라 직접 링크 불가. 대신 "N강" 명확히 표시해서 학생이 목록에서 바로 찾게 함.
- **시스템 프롬프트 지침 고정**: 중1 눈높이 / 쉬운 말 / 한 번에 한 개념 / 200~400자 / 일상 비유 / 친절한 존댓말 ("괜찮아요, 어려운 게 당연해요" 톤).

## 막혔던 지점 / 주의할 점

- **EBS 프레임 차단**: `X-Frame-Options`로 iframe embed 불가 → 외부 링크 + 번호 안내로 우회.
- **EBS 강의 직접 링크 불가**: 각 강의가 JS 팝업 함수(`popupLectureMedia('LS000000XXX')`)로 열려서 딥링크 URL 없음.
- **YouTube 영상 삭제 가능성**: 정승제 플레이리스트 영상도 시간 지나면 삭제될 수 있음. 주기적 검증 필요 (이번에 11개 발견).
- **중1·foundation 레벨은 EBS 대응 적음**: EBS 50일 수학은 고1 완성 과정이라 중학 초기 주제(분수, 약수 등)는 직접 대응 강의가 없거나 제한적.

## 관련 파일 (주요 수정 대상)

### 핵심 데이터
- `src/data/curriculum.ts` — 4개 코스 PART 구조
- `src/data/videoMappings.ts` — YouTube 영상 → Day 매핑 (32개)
- `src/data/ebsLectures.ts` — EBS 69강 카탈로그 + Day 매핑 (신규, 이번 세션)
- `src/data/{grade}/days/dayXX.ts` — 200개 Day 콘텐츠

### 핵심 UI
- `src/app/[grade]/day/[dayNumber]/page.tsx` — Day 학습 페이지 (3탭: 강의/연습/정리)
- `src/app/[grade]/page.tsx` — 코스 대시보드
- `src/components/YouTubePlayer.tsx` — 영상+EBS 링크 (4-state 렌더)
- `src/components/AITutor.tsx` — AI 튜터 채팅 (신규, 이번 세션)
- `src/components/MathRenderer.tsx` — KaTeX + 마크다운 파서
- `src/components/ConceptNote.tsx` — 핵심 정리 카드

### API
- `src/app/api/ai-tutor/route.ts` — Claude Sonnet 4.5 스트리밍 엔드포인트 (신규)

## 배포/빌드 상태

**✅ Production Ready**

- 라이브: https://math-50days.vercel.app
- 마지막 배포: 2026-04-21, `vercel --prod` 수동 트리거
- GitHub: https://github.com/lomadmichael/math-50days (master 브랜치)
- Vercel 환경변수: `ANTHROPIC_API_KEY` 설정 완료 (사용자 확인)

## 새 채팅 첫 메시지 (이것만 복사해서 붙여넣으면 됨)

```
C:\Users\hongk\Desktop\ClaudeCode\math-50days\HANDOFF.md 읽고 이어서 작업해줘
```
