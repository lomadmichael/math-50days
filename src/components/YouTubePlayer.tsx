'use client';

import { useState } from 'react';
import { LectureMapping } from '@/lib/types';

interface YouTubePlayerProps {
  lecture: LectureMapping;
  onWatched?: () => void;
}

export default function YouTubePlayer({ lecture, onWatched }: YouTubePlayerProps) {
  const [watched, setWatched] = useState(false);

  if (!lecture.youtubeVideoId) {
    return (
      <div className="rounded-xl bg-muted/30 border border-white/5 p-8 text-center">
        <div className="text-4xl mb-3">📺</div>
        <p className="text-muted-foreground text-sm">
          영상이 아직 등록되지 않았습니다
        </p>
        <p className="text-xs text-muted-foreground mt-1">
          유튜브 업로드 후 영상 ID를 등록해주세요
        </p>
      </div>
    );
  }

  const params = new URLSearchParams({
    rel: '0',
    modestbranding: '1',
    ...(lecture.startTime ? { start: String(lecture.startTime) } : {}),
    ...(lecture.endTime ? { end: String(lecture.endTime) } : {}),
  });

  return (
    <div className="space-y-3">
      {/* Video */}
      <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black">
        <iframe
          src={`https://www.youtube.com/embed/${lecture.youtubeVideoId}?${params.toString()}`}
          className="absolute inset-0 w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={lecture.title}
        />
      </div>

      {/* Info */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-foreground">{lecture.title}</p>
          <p className="text-xs text-muted-foreground">{lecture.description}</p>
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
          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
            watched
              ? 'bg-emerald-500/10 text-emerald-400'
              : 'bg-muted text-muted-foreground hover:bg-muted/80'
          }`}
        >
          {watched ? '✓ 시청 완료' : '시청 완료'}
        </button>
      </div>
    </div>
  );
}

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, '0')}`;
}
