'use client';

import { useEffect, useRef } from 'react';
import katex from 'katex';

interface MathRendererProps {
  content: string;
  className?: string;
}

export default function MathRenderer({ content, className = '' }: MathRendererProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Replace $...$ with rendered KaTeX
    const html = content.replace(
      /\$\$(.*?)\$\$|\$(.*?)\$/g,
      (match, display, inline) => {
        try {
          const tex = display || inline;
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
    let formatted = html
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/\n/g, '<br />');

    containerRef.current.innerHTML = formatted;
  }, [content]);

  return <div ref={containerRef} className={`math-content ${className}`} />;
}
