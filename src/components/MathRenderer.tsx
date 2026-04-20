'use client';

import { useEffect, useRef } from 'react';
import katex from 'katex';

interface MathRendererProps {
  content: string;
  className?: string;
  /** true 면 <span>으로 렌더 (인라인 사용시). 기본 false → <div>. */
  inline?: boolean;
}

export default function MathRenderer({ content, className = '', inline = false }: MathRendererProps) {
  const containerRef = useRef<HTMLDivElement | HTMLSpanElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Replace $...$ with rendered KaTeX
    const html = content.replace(
      /\$\$(.*?)\$\$|\$(.*?)\$/g,
      (match, display, inlineTex) => {
        try {
          const tex = display || inlineTex;
          const isDisplay = !!display;
          return katex.renderToString(tex, {
            displayMode: isDisplay,
            throwOnError: false,
            trust: true,
          });
        } catch {
          return match;
        }
      }
    );

    // Handle markdown-like formatting
    const formatted = html
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/\n/g, '<br />');

    containerRef.current.innerHTML = formatted;
  }, [content]);

  if (inline) {
    return (
      <span
        ref={containerRef as React.RefObject<HTMLSpanElement>}
        className={`math-content ${className}`}
      />
    );
  }
  return (
    <div
      ref={containerRef as React.RefObject<HTMLDivElement>}
      className={`math-content ${className}`}
    />
  );
}
