'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { LectureMapping } from '@/lib/types';
import type { EbsLecture } from '@/data/ebsLectures';

interface YouTubePlayerProps {
  lecture: LectureMapping;
  onWatched?: () => void;
  /** Day별 추천 EBS 강의 (강의 번호+제목 표시용) */
  ebsLectures?: EbsLecture[];
}

export default function YouTubePlayer({ lecture, onWatched, ebsLectures }: YouTubePlayerProps) {
  const [watched, setWatched] = useState(false);

  const hasVideo = !!lecture.youtubeVideoId;
  const hasEbs = !!lecture.ebsLectureUrl;
  const ebsList = ebsLectures ?? [];

  // Case 4: 둘 다 없음 → 플레이스홀더
  if (!hasVideo && !hasEbs) {
    return (
      <div className="rounded-xl bg-muted/30 border border-white/5 p-8 text-center">
        <div className="text-4xl mb-3">📺</div>
        <p className="text-muted-foreground text-sm">
          영상이 아직 등록되지 않았습니다
        </p>
      </div>
    );
  }

  // Case 3: YouTube 없음, EBS만 있음 → EBS 링크 카드
  if (!hasVideo && hasEbs) {
    return (
      <EbsLinkCard
        url={lecture.ebsLectureUrl!}
        title={lecture.title}
        description={lecture.description}
        ebsLectures={ebsList}
      />
    );
  }

  // Case 1 & 2: YouTube 있음 (+ 선택적 EBS 링크)
  const params = new URLSearchParams({
    rel: '0',
    modestbranding: '1',
    ...(lecture.startTime ? { start: String(lecture.startTime) } : {}),
    ...(lecture.endTime ? { end: String(lecture.endTime) } : {}),
  });

  return (
    <div className="space-y-3">
      {/* YouTube Video */}
      <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black">
        <iframe
          src={`https://www.youtube.com/embed/${lecture.youtubeVideoId}?${params.toString()}`}
          className="absolute inset-0 w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={lecture.title}
        />
      </div>

      {/* Info bar */}
      <div className="flex items-center justify-between">
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-foreground truncate">{lecture.title}</p>
          <p className="text-xs text-muted-foreground truncate">{lecture.description}</p>
          {lecture.startTime !== undefined && lecture.endTime !== undefined && (
            <p className="text-xs text-muted-foreground mt-1">
              📍 {formatTime(lecture.startTime)} ~ {formatTime(lecture.endTime)} 구간 시청
            </p>
          )}
        </div>
        <button
          onClick={() => {
            setWatched(true);
            onWatched?.();
          }}
          className={`ml-3 px-3 py-1.5 rounded-lg text-sm font-medium transition-all shrink-0 ${
            watched
              ? 'bg-emerald-500/10 text-emerald-400'
              : 'bg-muted text-muted-foreground hover:bg-muted/80'
          }`}
        >
          {watched ? '✓ 시청 완료' : '시청 완료'}
        </button>
      </div>

      {/* EBS 풀강의 링크 (YouTube + EBS 모두 있을 때) */}
      {hasEbs && <EbsSmallLink url={lecture.ebsLectureUrl!} ebsLectures={ebsList} />}
    </div>
  );
}

// ── EBS 풀강의 링크 카드 (YouTube 없을 때 메인으로 표시) ──
function EbsLinkCard({
  url,
  title,
  description,
  ebsLectures,
}: {
  url: string;
  title: string;
  description: string;
  ebsLectures: EbsLecture[];
}) {
  const hasMatch = ebsLectures.length > 0;

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-xl bg-gradient-to-br from-blue-500/10 via-cyan-500/5 to-blue-500/10
                 border border-blue-500/20 p-6
                 hover:border-blue-400/40 hover:from-blue-500/15 hover:to-cyan-500/10
                 transition-all duration-300 group cursor-pointer"
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
    >
      <div className="text-center mb-4">
        <div className="text-4xl mb-3">📺</div>
        <p className="text-sm font-semibold text-foreground mb-1">{title}</p>
        <p className="text-xs text-muted-foreground">{description}</p>
      </div>

      {/* 추천 EBS 강의 번호 목록 */}
      {hasMatch ? (
        <div className="mb-4 px-4 py-3 rounded-lg bg-blue-500/10 border border-blue-500/20">
          <p className="text-xs text-blue-300 font-medium mb-2 flex items-center gap-1.5">
            <span>🎯</span>
            <span>이 주제는 EBS 강의 {ebsLectures.length === 1 ? '아래 강을' : `${ebsLectures.length}강을`} 보세요</span>
          </p>
          <ul className="space-y-1.5">
            {ebsLectures.map((l) => (
              <li key={l.number} className="flex items-start gap-2 text-left">
                <span className="inline-flex items-center justify-center shrink-0 w-7 h-7 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold">
                  {l.number}
                </span>
                <span className="text-xs text-foreground/90 leading-[1.75rem]">
                  {l.fullTitle.replace(/^\d+강\s*/, '')}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="mb-4 px-4 py-3 rounded-lg bg-amber-500/5 border border-amber-500/15">
          <p className="text-xs text-amber-300/90 text-center">
            💡 이 주제는 EBS 전체 강의 목록에서 관련 강의를 찾아보세요
          </p>
        </div>
      )}

      <div className="flex justify-center">
        <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg
                        bg-blue-500/15 text-blue-400 text-sm font-medium
                        group-hover:bg-blue-500/25 group-hover:text-blue-300 transition-all">
          <span>EBS 강의 목록 열기</span>
          <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </div>
      </div>
    </motion.a>
  );
}

// ── EBS 작은 링크 (YouTube 아래에 추가) ──
function EbsSmallLink({ url, ebsLectures }: { url: string; ebsLectures: EbsLecture[] }) {
  const hasMatch = ebsLectures.length > 0;
  const label = hasMatch
    ? `EBS ${ebsLectures.map((l) => `${l.number}강`).join(', ')} 풀강의 보러가기`
    : 'EBS 풀강의 보러가기';

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg
                 bg-blue-500/8 border border-blue-500/15
                 text-sm text-blue-400 font-medium
                 hover:bg-blue-500/15 hover:border-blue-500/25 hover:text-blue-300
                 transition-all duration-200 group"
    >
      <span>📺</span>
      <span>{label}</span>
      <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>
    </a>
  );
}

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, '0')}`;
}
