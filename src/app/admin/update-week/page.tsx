'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

/**
 * 관리자용 주간 메일 파싱 페이지.
 * 아빠가 학교 메일을 받으면 여기에 붙여넣고 AI 가 파싱 → 생성된 TS 코드를 복사해서
 * `src/data/thisWeek.ts` 에 덮어쓰기.
 *
 * Gmail API 자동 수신은 향후 확장 (envvar GMAIL_REFRESH_TOKEN 설정 필요).
 */

interface ParsedWeek {
  weekOf: string;
  thisWeek: { covered: string[] };
  nextWeek: {
    quiz?: { date: string; topics: string[] };
    newTopics: string[];
    notes?: string[];
  };
}

export default function UpdateWeekPage() {
  const [emailText, setEmailText] = useState('');
  const [receivedAt, setReceivedAt] = useState(new Date().toISOString().slice(0, 10));
  const [from, setFrom] = useState('Mutte (담임 선생님)');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [parsed, setParsed] = useState<ParsedWeek | null>(null);
  const [copied, setCopied] = useState(false);

  const handleParse = async () => {
    setLoading(true);
    setError(null);
    setParsed(null);
    try {
      const res = await fetch('/api/parse-school-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ emailText, receivedAt, from }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || '파싱 실패');
      }
      const data = (await res.json()) as { parsed: ParsedWeek };
      setParsed(data.parsed);
    } catch (e) {
      setError(String(e));
    } finally {
      setLoading(false);
    }
  };

  const generatedTs = parsed
    ? `import { WeeklySchedule } from '@/lib/types';

/**
 * 이번 주 학교 학습 대비 (관리자 파서로 자동 생성)
 * 생성일: ${new Date().toISOString().slice(0, 10)}
 */

export const thisWeek: WeeklySchedule = ${JSON.stringify(
        {
          weekOf: parsed.weekOf,
          sourceEmail: {
            from,
            receivedAt,
          },
          thisWeek: parsed.thisWeek,
          nextWeek: parsed.nextWeek,
          prep: [
            // TODO: Claude Code 에 "새 thisWeek 로 prep 섹션 채워줘" 요청해서 자동 생성
          ],
        },
        null,
        2
      ).replace(/"([a-zA-Z_]\w*)":/g, '$1:')};

export default thisWeek;
`
    : '';

  const copyGenerated = async () => {
    await navigator.clipboard.writeText(generatedTs);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background pb-16">
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-background/80 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-3">
          <Link
            href="/"
            className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-white/10 transition-all"
            aria-label="홈"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </Link>
          <div className="flex-1">
            <h1 className="text-lg font-bold text-foreground flex items-center gap-2">
              <span>🔧</span>
              <span>주간 메일 업데이트 (관리자)</span>
            </h1>
            <p className="text-xs text-muted-foreground">학교 메일 → AI 파싱 → thisWeek.ts 생성</p>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 space-y-6">
        {/* 안내 */}
        <div className="rounded-2xl border border-blue-500/20 bg-blue-500/5 p-5">
          <div className="flex items-start gap-3">
            <div className="text-xl">💡</div>
            <div className="text-sm text-foreground/85 space-y-1">
              <p className="font-medium">사용법</p>
              <ol className="list-decimal list-inside text-xs text-muted-foreground space-y-0.5">
                <li>학교에서 받은 주간 메일 전체 본문을 아래에 붙여넣기</li>
                <li>수신일·발신자 확인 → "AI 로 파싱"</li>
                <li>파싱 결과 확인 → "TypeScript 코드 복사"</li>
                <li>
                  <code className="text-violet-300 bg-violet-500/10 px-1 rounded">src/data/thisWeek.ts</code> 에 덮어쓰기 → 커밋 → 배포
                </li>
              </ol>
              <p className="text-xs text-muted-foreground/80 mt-2">
                ✨ 참고: prep 섹션(연습 문제·개념 설명) 은 자동 채워지지 않음. Claude Code 에 "새 thisWeek 기반 prep 섹션 만들어줘" 요청하세요.
              </p>
            </div>
          </div>
        </div>

        {/* 메타데이터 */}
        <div className="grid grid-cols-2 gap-3">
          <label className="block">
            <span className="text-xs text-muted-foreground mb-1 block">수신일</span>
            <input
              type="date"
              value={receivedAt}
              onChange={(e) => setReceivedAt(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-card border border-white/10 text-sm text-foreground outline-none focus:border-violet-500/50"
            />
          </label>
          <label className="block">
            <span className="text-xs text-muted-foreground mb-1 block">발신자</span>
            <input
              type="text"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-card border border-white/10 text-sm text-foreground outline-none focus:border-violet-500/50"
            />
          </label>
        </div>

        {/* 메일 본문 */}
        <label className="block">
          <span className="text-xs text-muted-foreground mb-1 block">메일 본문</span>
          <textarea
            value={emailText}
            onChange={(e) => setEmailText(e.target.value)}
            placeholder={`Hello guardians,\n\nThis week in class:\n- ...\n\nNext week in class:\n- ...`}
            className="w-full h-64 px-4 py-3 rounded-xl bg-card border border-white/10 text-foreground text-sm resize-y outline-none focus:border-violet-500/50 font-mono"
          />
        </label>

        <div className="flex items-center gap-3">
          <button
            onClick={handleParse}
            disabled={loading || emailText.trim().length < 20}
            className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-violet-500 to-cyan-500 text-white text-sm font-semibold hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {loading ? '파싱 중...' : '🤖 AI 로 파싱'}
          </button>
          {error && <span className="text-xs text-rose-400">{error}</span>}
        </div>

        {/* 결과 */}
        {parsed && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            {/* 요약 */}
            <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-5 space-y-3">
              <h3 className="text-sm font-semibold text-emerald-300">✅ 파싱 결과</h3>
              <div className="text-xs text-foreground/85 space-y-2">
                <div>
                  <span className="text-muted-foreground">다음 주:</span> {parsed.weekOf}
                </div>
                {parsed.thisWeek.covered.length > 0 && (
                  <div>
                    <span className="text-muted-foreground">이번 주 배운 것:</span>{' '}
                    {parsed.thisWeek.covered.join(' · ')}
                  </div>
                )}
                {parsed.nextWeek.quiz && (
                  <div className="text-amber-300">
                    🎯 Quiz {parsed.nextWeek.quiz.date}: {parsed.nextWeek.quiz.topics.join(', ')}
                  </div>
                )}
                <div>
                  <span className="text-muted-foreground">새 주제:</span>{' '}
                  {parsed.nextWeek.newTopics.join(' · ')}
                </div>
                {parsed.nextWeek.notes && parsed.nextWeek.notes.length > 0 && (
                  <div>
                    <span className="text-muted-foreground">공지:</span>{' '}
                    {parsed.nextWeek.notes.join(' · ')}
                  </div>
                )}
              </div>
            </div>

            {/* TypeScript 코드 */}
            <div className="rounded-xl border border-white/10 bg-card overflow-hidden">
              <div className="flex items-center justify-between px-4 py-2 border-b border-white/5 bg-white/[0.02]">
                <span className="text-xs text-muted-foreground">
                  thisWeek.ts 에 덮어쓸 코드
                </span>
                <button
                  onClick={copyGenerated}
                  className="text-xs text-violet-400 hover:text-violet-300"
                >
                  {copied ? '✓ 복사됨' : '📋 복사'}
                </button>
              </div>
              <pre className="p-4 overflow-x-auto text-xs text-foreground/90 font-mono leading-relaxed max-h-[400px]">
                {generatedTs}
              </pre>
            </div>
          </motion.div>
        )}

        {/* Gmail 자동화 향후 확장 안내 */}
        <div className="rounded-xl border border-white/5 bg-muted/10 p-5">
          <h3 className="text-sm font-medium text-foreground mb-2">🔮 향후: Gmail 자동 수신</h3>
          <div className="text-xs text-muted-foreground leading-relaxed space-y-1">
            <p>
              현재는 메일을 수동으로 붙여넣는 방식. Gmail API OAuth 설정 후에는 자동으로
              특정 발신자의 최신 메일을 수신해서 파싱할 수 있음.
            </p>
            <p className="mt-2">
              <strong>설정 필요 사항</strong>:
            </p>
            <ul className="list-disc list-inside ml-2 space-y-0.5">
              <li>Google Cloud Console 에 OAuth 2.0 클라이언트 생성</li>
              <li>Gmail API 활성화 + 범위 readonly</li>
              <li>환경변수: <code className="text-violet-300">GOOGLE_CLIENT_ID</code>, <code className="text-violet-300">GOOGLE_CLIENT_SECRET</code>, <code className="text-violet-300">GMAIL_REFRESH_TOKEN</code></li>
              <li>Vercel Cron 으로 매주 월요일 자동 체크 (vercel.json)</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
