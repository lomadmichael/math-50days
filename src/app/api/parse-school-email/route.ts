import Anthropic from '@anthropic-ai/sdk';
import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';
export const maxDuration = 60;

/**
 * 학교 주간 메일 텍스트를 받아서 구조화된 WeeklySchedule JSON 으로 파싱.
 * 결과는 src/data/thisWeek.ts 에 바로 붙여 쓸 수 있는 형태.
 *
 * POST body: { emailText: string, receivedAt?: string (YYYY-MM-DD), from?: string }
 */

const PARSE_SYSTEM_PROMPT = `당신은 학교 주간 메일을 구조화 JSON 으로 변환하는 파서입니다.
학생(캐나다 BC Grade 8, Grandview Heights Secondary) 담임 선생님 주간 안내 이메일이 주어집니다.

## 출력 형식 (엄격한 JSON 만 반환)
\`\`\`json
{
  "weekOf": "YYYY-MM-DD",           // 다음 주 월요일 추정
  "thisWeek": {
    "covered": ["주제1", "주제2"]    // "This week in class:" 섹션에서 배운 주제들 (영어 용어 그대로 + 한국어 괄호)
  },
  "nextWeek": {
    "quiz": {                        // Quiz/Test 일정 있을 때만
      "date": "YYYY-MM-DD",
      "topics": ["범위1", "범위2"]
    },
    "newTopics": ["새 주제1", "새 주제2"],  // 영어 + 한국어 괄호 병기
    "notes": ["조기 하교", "기타 공지"]     // 시험 외 공지사항
  }
}
\`\`\`

## 규칙
1. **영어 용어 원문 유지 + 한국어 병기**: "Linear Equations (일차방정식·일차함수)"
2. **날짜 추정**: 메일 수신일 기반으로 다음 주 날짜 계산. quiz date 는 요일 언급 보고 YYYY-MM-DD 산정
3. **주제 분류**:
   - "This week in class" → thisWeek.covered
   - "Next week in class" → nextWeek.newTopics + quiz/notes
4. **JSON 외 다른 텍스트 출력 금지**. 순수 JSON 만.
5. **불확실하면 빈 배열/null** 로 두고 억지로 채우지 말 것`;

export async function POST(req: NextRequest) {
  try {
    const { emailText, receivedAt, from } = (await req.json()) as {
      emailText: string;
      receivedAt?: string;
      from?: string;
    };

    if (!emailText || emailText.trim().length < 20) {
      return NextResponse.json(
        { error: '이메일 텍스트가 너무 짧거나 비어있습니다.' },
        { status: 400 }
      );
    }

    if (!process.env.ANTHROPIC_API_KEY) {
      return NextResponse.json(
        { error: 'ANTHROPIC_API_KEY not configured' },
        { status: 500 }
      );
    }

    const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

    const userPrompt = `수신일: ${receivedAt ?? '(미상)'}
발신자: ${from ?? '(미상)'}

---메일 내용---
${emailText}
---끝---

위 내용을 JSON 으로 파싱하세요.`;

    const res = await client.messages.create({
      model: 'claude-sonnet-4-5',
      max_tokens: 2048,
      system: PARSE_SYSTEM_PROMPT,
      messages: [{ role: 'user', content: userPrompt }],
    });

    const textBlock = res.content.find((b) => b.type === 'text');
    if (!textBlock || textBlock.type !== 'text') {
      return NextResponse.json({ error: 'Empty response' }, { status: 500 });
    }

    // 코드블록 벗겨내기
    let raw = textBlock.text.trim();
    raw = raw.replace(/^```(?:json)?\s*/, '').replace(/\s*```$/, '');

    try {
      const parsed = JSON.parse(raw);
      return NextResponse.json({
        parsed,
        meta: {
          receivedAt: receivedAt ?? new Date().toISOString().slice(0, 10),
          from,
        },
      });
    } catch (e) {
      return NextResponse.json(
        {
          error: 'JSON 파싱 실패 — AI 가 올바른 JSON 을 반환하지 않았어요',
          raw,
          parseError: String(e),
        },
        { status: 500 }
      );
    }
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
