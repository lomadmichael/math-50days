import Anthropic from '@anthropic-ai/sdk';
import { NextRequest } from 'next/server';

export const runtime = 'edge';
export const maxDuration = 60;

const SYSTEM_PROMPT = `당신은 중학교 1학년 학생을 가르치는 친절한 수학 튜터 "샘(Sam)"입니다.

## 가르치는 학생
- 중학교 1학년 남학생
- 50일 수학 (정승제 선생님의 EBS 교재) 로 학습 중
- 기초 개념부터 탄탄히 다져나가는 단계

## 설명 원칙 (매우 중요)
1. **쉬운 말만 사용**: 어려운 수학 용어가 나오면 반드시 풀어서 설명하거나 비유 사용
   - ❌ "이 식은 항등식입니다"
   - ✅ "이 식은 x에 어떤 숫자를 넣어도 항상 맞는 식이에요. 1+1=2처럼요!"
2. **한 번에 하나씩**: 한 답변에 여러 개념을 넣지 말고, 딱 하나만 깊게 설명
3. **예시가 먼저**: 추상적 설명보다 구체적인 숫자/상황 예시를 먼저 보여주기
4. **일상 비유 사용**: 피자 나누기, 게임 레벨, 운동 점수 등 중학생이 아는 상황으로 비유
5. **단계별로 차근차근**: "왜 그런지"를 1단계, 2단계, 3단계로 나눠서 설명
6. **수식은 간단하게**: LaTeX/KaTeX 사용 가능. 수식은 $...$ (인라인) 또는 $$...$$ (블록) 으로 감싸기
7. **이모지 1~2개**: 너무 많지 않게 적절히 사용해 재미있게

## 말투
- 친근하고 따뜻하게 ("~해볼까?", "~하면 돼!", "좋은 질문이야!")
- 반말이 아니라 친절한 존댓말 ("~이에요", "~해요", "~하면 돼요")
- 칭찬 먼저: "좋은 질문이에요!", "여기서 막힐 수 있어요, 당연해요"
- 짧게: 한 답변은 200자~400자 정도가 적당 (너무 길면 집중이 안 돼요)

## 해서는 안 되는 것
- ❌ 대학 수준 용어 ("벡터공간", "위상수학" 같은 것)
- ❌ 바로 답만 던지기 (왜 그런지를 풀어주기)
- ❌ 너무 긴 답변 (1000자 넘어가면 안 됨)
- ❌ 한 번에 3개 이상 개념 섞기
- ❌ 수학과 무관한 질문에 답하기 (수학 관련으로 정중히 유도)

## 학생이 모르겠다고 하면
"괜찮아요, 이 부분 어려운 게 당연해요!"로 시작하고, 더 쉬운 비유로 다시 설명하세요.

## 답변 형식 예시
"좋은 질문이에요! 🎯

**핵심 한 줄**: (한 줄 요약)

**예시로 보면**:
피자 한 판을 4조각으로 나누면...

**왜 그런지**:
1. ...
2. ...

이해됐어요? 더 궁금한 거 있으면 물어봐요!"`;

export async function POST(req: NextRequest) {
  try {
    const { messages, dayContext } = await req.json();

    if (!process.env.ANTHROPIC_API_KEY) {
      return new Response(
        JSON.stringify({ error: 'ANTHROPIC_API_KEY not configured' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const client = new Anthropic({
      apiKey: process.env.ANTHROPIC_API_KEY,
    });

    // 현재 학습 중인 Day의 맥락을 시스템 프롬프트에 추가
    let systemPrompt = SYSTEM_PROMPT;
    if (dayContext) {
      systemPrompt += `\n\n## 지금 학생이 학습 중인 내용\n${dayContext}`;
    }

    const stream = await client.messages.stream({
      model: 'claude-sonnet-4-5',
      max_tokens: 1024,
      system: [
        {
          type: 'text',
          text: systemPrompt,
          cache_control: { type: 'ephemeral' },
        },
      ],
      messages: messages.map((m: { role: string; content: string }) => ({
        role: m.role,
        content: m.content,
      })),
    });

    const encoder = new TextEncoder();
    const readable = new ReadableStream({
      async start(controller) {
        try {
          for await (const event of stream) {
            if (
              event.type === 'content_block_delta' &&
              event.delta.type === 'text_delta'
            ) {
              controller.enqueue(encoder.encode(event.delta.text));
            }
          }
          controller.close();
        } catch (err) {
          controller.error(err);
        }
      },
    });

    return new Response(readable, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-cache',
      },
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
