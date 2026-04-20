'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MathRenderer from './MathRenderer';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface AITutorProps {
  dayTitle?: string;
  dayConcepts?: Array<{ title: string; content: string }>;
  gradeLabel?: string;
}

const SUGGESTED_QUESTIONS = [
  '오늘 배운 내용을 한 줄로 정리해줘',
  '이 개념이 왜 중요해요?',
  '실생활에서 어디에 쓰여요?',
  '더 쉬운 예시로 설명해줄래요?',
];

export default function AITutor({ dayTitle, dayConcepts, gradeLabel }: AITutorProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [streamingText, setStreamingText] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

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
    return parts.join('\n');
  };

  const sendMessage = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || isLoading) return;

    const userMsg: Message = { role: 'user', content: trimmed };
    const nextMessages = [...messages, userMsg];
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

  return (
    <div className="rounded-xl border border-violet-500/20 bg-gradient-to-br from-violet-500/5 to-cyan-500/5 overflow-hidden">
      {/* Header */}
      <div className="px-4 py-3 border-b border-white/5 flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center text-base">
          🤖
        </div>
        <div className="flex-1">
          <h3 className="text-sm font-semibold text-foreground">샘(Sam)에게 물어보기</h3>
          <p className="text-xs text-muted-foreground">모르는 건 언제든지 물어봐요. 쉽게 설명해줄게요!</p>
        </div>
      </div>

      {/* Messages */}
      <div
        ref={scrollRef}
        className="max-h-[360px] min-h-[200px] overflow-y-auto px-4 py-3 space-y-3"
      >
        {messages.length === 0 && !streamingText && (
          <div className="py-4">
            <p className="text-xs text-muted-foreground mb-3 text-center">
              💡 이런 질문을 해볼 수 있어요
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              {SUGGESTED_QUESTIONS.map((q) => (
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
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-violet-500 text-white rounded-br-sm whitespace-pre-wrap'
                    : 'bg-card border border-white/10 text-foreground rounded-bl-sm'
                }`}
              >
                {msg.role === 'assistant' ? (
                  <MathRenderer content={msg.content} />
                ) : (
                  msg.content
                )}
              </div>
            </motion.div>
          ))}

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
      <form onSubmit={handleSubmit} className="border-t border-white/5 p-3">
        <div className="flex gap-2 items-end">
          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="궁금한 점을 물어보세요..."
            rows={1}
            disabled={isLoading}
            className="flex-1 px-3 py-2 rounded-lg bg-card border border-white/10 text-foreground text-sm resize-none outline-none focus:border-violet-500/50 transition-colors placeholder:text-muted-foreground/50 disabled:opacity-50 max-h-24"
            style={{ minHeight: '40px' }}
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
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
