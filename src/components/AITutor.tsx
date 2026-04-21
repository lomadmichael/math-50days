'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useProblemAttempts, formatAttemptsForTutor } from '@/hooks/useProblemAttempts';
import MathRenderer from './MathRenderer';

/** 멀티모달 콘텐츠 블록 */
type ContentBlock =
  | { type: 'text'; text: string }
  | { type: 'image'; source: { type: 'base64'; media_type: string; data: string } };

interface Message {
  role: 'user' | 'assistant';
  /** string 이면 순수 텍스트, array 면 텍스트+이미지 혼합 (vision) */
  content: string | ContentBlock[];
}

/** 메시지에서 순수 텍스트만 추출 (렌더용) */
function extractText(content: Message['content']): string {
  if (typeof content === 'string') return content;
  return content
    .filter((c): c is { type: 'text'; text: string } => c.type === 'text')
    .map((c) => c.text)
    .join('\n');
}

/** 메시지에서 이미지만 추출 */
function extractImages(
  content: Message['content']
): Array<{ media_type: string; data: string }> {
  if (typeof content === 'string') return [];
  return content
    .filter((c): c is Extract<ContentBlock, { type: 'image' }> => c.type === 'image')
    .map((c) => c.source);
}

interface AITutorProps {
  dayTitle?: string;
  dayConcepts?: Array<{ title: string; content: string }>;
  gradeLabel?: string;
  /** true 이면 자체 헤더·카드 테두리를 숨김 (플로팅 패널 안에 임베드할 때 사용) */
  embedded?: boolean;
  /** 'en' 면 BC 커리큘럼 모드 (영어 메인 + 한국어 보조). 기본 'ko'. */
  languageMode?: 'ko' | 'en';
}

const SUGGESTED_QUESTIONS_DEFAULT = [
  '오늘 배운 내용을 한 줄로 정리해줘',
  '이 개념이 왜 중요해요?',
  '실생활에서 어디에 쓰여요?',
  '더 쉬운 예시로 설명해줄래요?',
];

const SUGGESTED_QUESTIONS_WITH_WRONG = [
  '내가 틀린 문제들 왜 틀렸는지 설명해줘',
  '오답 하나씩 다시 풀어보자',
  '이 개념이 헷갈려요, 쉽게 설명해줄래요?',
  '비슷한 연습문제 하나만 더 내줘',
];

const SUGGESTED_QUESTIONS_ALL_CORRECT = [
  '다 맞혔어! 더 어려운 문제 내줘',
  '오늘 배운 내용을 한 줄로 정리해줘',
  '실생활에서 어디에 쓰여요?',
  '다음엔 어떤 개념을 배우면 좋을까?',
];

/** File → base64 (no data: prefix) */
function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(reader.error);
    reader.onload = () => {
      const result = reader.result as string;
      // result = "data:image/png;base64,XXXX" → XXXX 만 반환
      const commaIdx = result.indexOf(',');
      resolve(commaIdx >= 0 ? result.slice(commaIdx + 1) : result);
    };
    reader.readAsDataURL(file);
  });
}

// BC 모드 (영어 메인) 용 제안 질문
const BC_SUGGESTED_DEFAULT = [
  "Can you explain this concept in simpler words?",
  "Give me a real-life example",
  "Walk me through an example problem",
  "쉽게 한국어로도 설명해줘",
];

const BC_SUGGESTED_WITH_WRONG = [
  "Why did I get these wrong? Explain each one",
  "Let's redo the wrong problems step by step",
  "I'm confused about this concept — help?",
  "Give me one more practice problem",
];

const BC_SUGGESTED_ALL_CORRECT = [
  "I got them all right! Give me a harder challenge",
  "Summarize what I learned today",
  "How is this used in the real world?",
  "What's the next topic I should learn?",
];

export default function AITutor({
  dayTitle,
  dayConcepts,
  gradeLabel,
  embedded = false,
  languageMode = 'ko',
}: AITutorProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [streamingText, setStreamingText] = useState('');
  /** 전송 전 대기 중인 이미지 (최대 3장) */
  const [pendingImages, setPendingImages] = useState<
    Array<{ media_type: string; data: string; previewUrl: string }>
  >([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const attemptsCtx = useProblemAttempts();
  const attempts = attemptsCtx?.attempts ?? [];
  const wrongCount = attempts.filter((a) => !a.isCorrect).length;

  // 문제 풀이 상황 + 언어 모드에 따라 제안 질문 달라지게
  const suggestedQuestions = (() => {
    const isBC = languageMode === 'en';
    if (attempts.length === 0) {
      return isBC ? BC_SUGGESTED_DEFAULT : SUGGESTED_QUESTIONS_DEFAULT;
    }
    if (wrongCount > 0) {
      return isBC ? BC_SUGGESTED_WITH_WRONG : SUGGESTED_QUESTIONS_WITH_WRONG;
    }
    return isBC ? BC_SUGGESTED_ALL_CORRECT : SUGGESTED_QUESTIONS_ALL_CORRECT;
  })();

  // Auto scroll on new messages
  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: 'smooth',
    });
  }, [messages, streamingText]);

  // Build day context for system prompt
  const buildDayContext = () => {
    const parts: string[] = [];
    if (gradeLabel) parts.push(`코스: ${gradeLabel}`);
    if (dayTitle) parts.push(`오늘의 주제: ${dayTitle}`);
    if (dayConcepts && dayConcepts.length > 0) {
      parts.push('오늘 배운 개념:');
      dayConcepts.forEach((c, i) => {
        parts.push(`${i + 1}. ${c.title}: ${c.content}`);
      });
    }
    // 학생 문제 풀이 상황 (있으면)
    const attemptsBlock = formatAttemptsForTutor(attempts);
    if (attemptsBlock) {
      parts.push('');
      parts.push(attemptsBlock);
    }
    return parts.join('\n');
  };

  /** 이미지 파일 선택/드롭 처리 */
  const handleFilePicked = async (files: FileList | null) => {
    if (!files || files.length === 0) return;
    const newImages: typeof pendingImages = [];
    for (let i = 0; i < files.length && pendingImages.length + newImages.length < 3; i++) {
      const f = files[i];
      if (!f.type.startsWith('image/')) continue;
      if (f.size > 5 * 1024 * 1024) {
        alert(`${f.name} 은 5MB 넘어서 업로드 못해요. 더 작은 이미지로 시도해주세요.`);
        continue;
      }
      const data = await fileToBase64(f);
      const previewUrl = URL.createObjectURL(f);
      newImages.push({ media_type: f.type, data, previewUrl });
    }
    if (newImages.length) setPendingImages((prev) => [...prev, ...newImages]);
  };

  const removePendingImage = (idx: number) => {
    setPendingImages((prev) => {
      URL.revokeObjectURL(prev[idx].previewUrl);
      return prev.filter((_, i) => i !== idx);
    });
  };

  /** 클립보드 이미지 붙여넣기 지원 */
  const handlePaste = async (e: React.ClipboardEvent<HTMLTextAreaElement>) => {
    const items = e.clipboardData?.items;
    if (!items) return;
    const files: File[] = [];
    for (const it of items) {
      if (it.kind === 'file' && it.type.startsWith('image/')) {
        const f = it.getAsFile();
        if (f) files.push(f);
      }
    }
    if (files.length) {
      e.preventDefault();
      const dt = new DataTransfer();
      files.forEach((f) => dt.items.add(f));
      await handleFilePicked(dt.files);
    }
  };

  const sendMessage = async (text: string) => {
    const trimmed = text.trim();
    if ((!trimmed && pendingImages.length === 0) || isLoading) return;

    // 이미지가 있으면 멀티모달 content 배열, 없으면 순수 텍스트
    let userContent: Message['content'];
    if (pendingImages.length > 0) {
      const blocks: ContentBlock[] = [];
      pendingImages.forEach((img) => {
        blocks.push({
          type: 'image',
          source: { type: 'base64', media_type: img.media_type, data: img.data },
        });
      });
      if (trimmed) blocks.push({ type: 'text', text: trimmed });
      else blocks.push({ type: 'text', text: '(이미지 문제를 풀어주세요 / Please solve this problem)' });
      userContent = blocks;
    } else {
      userContent = trimmed;
    }

    const userMsg: Message = { role: 'user', content: userContent };
    const nextMessages = [...messages, userMsg];
    // 전송 직후 pending 이미지 URL 해제 + 상태 초기화
    pendingImages.forEach((img) => URL.revokeObjectURL(img.previewUrl));
    setPendingImages([]);
    setMessages(nextMessages);
    setInput('');
    setIsLoading(true);
    setStreamingText('');

    try {
      const res = await fetch('/api/ai-tutor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: nextMessages,
          dayContext: buildDayContext(),
          languageMode,
        }),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({ error: 'Unknown error' }));
        throw new Error(err.error || 'API 호출 실패');
      }

      const reader = res.body?.getReader();
      if (!reader) throw new Error('응답을 읽을 수 없어요');

      const decoder = new TextDecoder();
      let assistantText = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        assistantText += chunk;
        setStreamingText(assistantText);
      }

      setMessages([...nextMessages, { role: 'assistant', content: assistantText }]);
      setStreamingText('');
    } catch (err) {
      const message = err instanceof Error ? err.message : '알 수 없는 오류';
      setMessages([
        ...nextMessages,
        {
          role: 'assistant',
          content: `죄송해요, 답변을 가져오지 못했어요. (${message})\n\n잠시 후 다시 시도해주세요!`,
        },
      ]);
      setStreamingText('');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  // embedded 모드에서는 flex-1 로 부모 flex-col 안에서 남은 공간을 모두 채움
  // (h-full 은 중간 래퍼에서 계산이 끊겨 overflow 가 동작하지 않음)
  const containerClass = embedded
    ? 'flex flex-col flex-1 min-h-0'
    : 'rounded-xl border border-violet-500/20 bg-gradient-to-br from-violet-500/5 to-cyan-500/5 overflow-hidden';

  const messagesClass = embedded
    ? 'flex-1 min-h-0 overflow-y-auto px-4 py-3 space-y-3'
    : 'max-h-[360px] min-h-[200px] overflow-y-auto px-4 py-3 space-y-3';

  return (
    <div className={containerClass}>
      {/* Header (embedded 모드에서는 외부 컨테이너가 헤더를 담당) */}
      {!embedded && (
        <div className="px-4 py-3 border-b border-white/5 flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center text-base">
            🤖
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-semibold text-foreground">샘(Sam)에게 물어보기</h3>
            <p className="text-xs text-muted-foreground">모르는 건 언제든지 물어봐요. 쉽게 설명해줄게요!</p>
          </div>
        </div>
      )}

      {/* 문제 풀이 상황 배지 (있을 때만) */}
      {attempts.length > 0 && (
        <div className="px-4 py-2 border-b border-white/5 bg-white/[0.02]">
          <div className="flex items-center justify-between text-xs">
            <span className="text-muted-foreground flex items-center gap-1.5">
              <span>📋</span>
              <span>샘이 보고 있어요:</span>
            </span>
            <span className="flex items-center gap-2.5">
              <span className="text-emerald-400">
                ✓ {attempts.filter((a) => a.isCorrect).length}
              </span>
              {wrongCount > 0 && (
                <span className="text-rose-400 font-medium">✗ {wrongCount}</span>
              )}
              <span className="text-muted-foreground/70">/ 총 {attempts.length}</span>
            </span>
          </div>
        </div>
      )}

      {/* Messages */}
      <div ref={scrollRef} className={messagesClass}>
        {messages.length === 0 && !streamingText && (
          <div className="py-4">
            <p className="text-xs text-muted-foreground mb-3 text-center">
              💡 이런 질문을 해볼 수 있어요
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              {suggestedQuestions.map((q) => (
                <button
                  key={q}
                  onClick={() => sendMessage(q)}
                  disabled={isLoading}
                  className="text-xs px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-foreground/80 transition-colors disabled:opacity-50"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        )}

        <AnimatePresence initial={false}>
          {messages.map((msg, i) => {
            const text = extractText(msg.content);
            const images = extractImages(msg.content);
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed space-y-2 ${
                    msg.role === 'user'
                      ? 'bg-violet-500 text-white rounded-br-sm whitespace-pre-wrap'
                      : 'bg-card border border-white/10 text-foreground rounded-bl-sm'
                  }`}
                >
                  {images.length > 0 && (
                    <div className="flex gap-1.5 flex-wrap">
                      {images.map((img, idx) => (
                        <img
                          key={idx}
                          src={`data:${img.media_type};base64,${img.data}`}
                          alt="업로드한 문제 이미지"
                          className="max-h-40 rounded-lg border border-white/20"
                        />
                      ))}
                    </div>
                  )}
                  {text &&
                    (msg.role === 'assistant' ? (
                      <MathRenderer content={text} />
                    ) : (
                      <div>{text}</div>
                    ))}
                </div>
              </motion.div>
            );
          })}

          {streamingText && (
            <motion.div
              key="streaming"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-start"
            >
              <div className="max-w-[85%] px-3.5 py-2.5 rounded-2xl rounded-bl-sm text-sm leading-relaxed bg-card border border-white/10 text-foreground">
                <MathRenderer content={streamingText} />
                <span className="inline-block w-1.5 h-4 bg-violet-400 ml-0.5 animate-pulse align-middle" />
              </div>
            </motion.div>
          )}

          {isLoading && !streamingText && (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-start"
            >
              <div className="px-3.5 py-2.5 rounded-2xl rounded-bl-sm bg-card border border-white/10">
                <div className="flex gap-1">
                  <span className="w-1.5 h-1.5 bg-violet-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-1.5 h-1.5 bg-violet-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-1.5 h-1.5 bg-violet-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="border-t border-white/5 p-3 space-y-2">
        {/* Pending images 프리뷰 */}
        {pendingImages.length > 0 && (
          <div className="flex gap-1.5 flex-wrap">
            {pendingImages.map((img, idx) => (
              <div key={idx} className="relative">
                <img
                  src={img.previewUrl}
                  alt="업로드 대기 중"
                  className="h-16 w-16 object-cover rounded-lg border border-violet-500/30"
                />
                <button
                  type="button"
                  onClick={() => removePendingImage(idx)}
                  className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-rose-500 text-white text-xs flex items-center justify-center hover:bg-rose-600"
                  aria-label="이미지 제거"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Hidden file input */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          multiple
          className="hidden"
          onChange={(e) => {
            handleFilePicked(e.target.files);
            // 같은 파일 다시 올릴 수 있게 리셋
            if (fileInputRef.current) fileInputRef.current.value = '';
          }}
        />

        <div className="flex gap-2 items-end">
          {/* 이미지 업로드 버튼 */}
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            disabled={isLoading || pendingImages.length >= 3}
            title="문제 사진 업로드 (최대 3장·5MB·붙여넣기도 가능)"
            className="h-10 w-10 shrink-0 rounded-lg bg-white/5 border border-white/10 text-muted-foreground hover:text-violet-300 hover:border-violet-400/40 hover:bg-violet-500/10 flex items-center justify-center transition-all disabled:opacity-40 disabled:cursor-not-allowed"
            aria-label="사진 업로드"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="M21 15l-5-5L5 21" />
            </svg>
          </button>

          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            onPaste={handlePaste}
            placeholder={
              pendingImages.length > 0
                ? '이 문제 풀이 도와줘... 또는 바로 전송'
                : '궁금한 점을 물어보세요. 📷 버튼으로 문제 사진도 업로드 OK'
            }
            rows={1}
            disabled={isLoading}
            className="flex-1 px-3 py-2 rounded-lg bg-card border border-white/10 text-foreground text-sm resize-none outline-none focus:border-violet-500/50 transition-colors placeholder:text-muted-foreground/50 disabled:opacity-50 max-h-24"
            style={{ minHeight: '40px' }}
          />
          <button
            type="submit"
            disabled={isLoading || (!input.trim() && pendingImages.length === 0)}
            className="h-10 px-4 rounded-lg bg-gradient-to-r from-violet-500 to-cyan-500 text-white text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1.5"
          >
            <span>전송</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12l14 0M13 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        {messages.length > 0 && (
          <button
            type="button"
            onClick={() => {
              setMessages([]);
              setStreamingText('');
            }}
            className="mt-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            대화 초기화
          </button>
        )}
      </form>
    </div>
  );
}
