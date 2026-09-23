import React from 'react';
import { cn } from '@/lib/cn';

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
  /** Versão em pílula com ponto pulsante, usada no hero e em badges de status. */
  pill?: boolean;
}

export const Eyebrow = ({ children, className, pill = false }: EyebrowProps) => {
  if (pill) {
    return (
      <span
        className={cn(
          'inline-flex max-w-full items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[10px] md:text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-300 backdrop-blur',
          className
        )}
      >
        <span className="relative flex h-1.5 w-1.5 shrink-0">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-green opacity-60" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-green" />
        </span>
        <span className="truncate">{children}</span>
      </span>
    );
  }

  return <p className={cn('eyebrow', className)}>{children}</p>;
};
