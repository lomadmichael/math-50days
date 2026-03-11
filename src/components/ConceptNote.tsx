'use client';

import { useState } from 'react';
import { ConceptBlock } from '@/lib/types';
import MathRenderer from './MathRenderer';

interface ConceptNoteProps {
  concepts: ConceptBlock[];
}

const typeStyles: Record<ConceptBlock['type'], { icon: string; border: string; bg: string }> = {
  definition: { icon: '📖', border: 'border-blue-500/20', bg: 'bg-blue-500/5' },
  formula: { icon: '📐', border: 'border-purple-500/20', bg: 'bg-purple-500/5' },
  example: { icon: '✏️', border: 'border-emerald-500/20', bg: 'bg-emerald-500/5' },
  tip: { icon: '💡', border: 'border-amber-500/20', bg: 'bg-amber-500/5' },
  warning: { icon: '⚠️', border: 'border-rose-500/20', bg: 'bg-rose-500/5' },
};

export default function ConceptNote({ concepts }: ConceptNoteProps) {
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set(concepts.map(c => c.id)));

  const toggle = (id: string) => {
    setExpandedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  if (concepts.length === 0) {
    return (
      <div className="rounded-xl bg-muted/20 border border-white/5 p-6 text-center">
        <p className="text-muted-foreground text-sm">이 Day의 개념 노트는 준비 중입니다</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {concepts.map(concept => {
        const style = typeStyles[concept.type];
        const isExpanded = expandedIds.has(concept.id);

        return (
          <div
            key={concept.id}
            className={`rounded-xl border ${style.border} ${style.bg} overflow-hidden transition-all`}
          >
            <button
              onClick={() => toggle(concept.id)}
              className="w-full px-4 py-3 flex items-center gap-3 text-left"
            >
              <span className="text-lg">{style.icon}</span>
              <span className="text-sm font-medium text-foreground flex-1">
                <MathRenderer content={concept.title} />
              </span>
              <svg
                width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className={`text-muted-foreground transition-transform ${isExpanded ? 'rotate-180' : ''}`}
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            {isExpanded && (
              <div className="px-4 pb-4 text-sm text-foreground/80 leading-relaxed">
                <MathRenderer content={concept.content} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
