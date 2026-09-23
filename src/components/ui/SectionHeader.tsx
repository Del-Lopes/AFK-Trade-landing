import React from 'react';
import { cn } from '@/lib/cn';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';

interface SectionHeaderProps {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: 'center' | 'left';
  className?: string;
}

/**
 * Cabeçalho padrão das seções: eyebrow + título display + descrição.
 * Para destacar parte do título, envolva em <span className="text-gradient-brand">.
 */
export const SectionHeader = ({ eyebrow, title, description, align = 'center', className }: SectionHeaderProps) => (
  <div
    className={cn(
      'mb-14 sm:mb-16 space-y-5',
      align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl text-left',
      className
    )}
  >
    {eyebrow && (
      <Reveal>
        <Eyebrow>{eyebrow}</Eyebrow>
      </Reveal>
    )}
    <Reveal delay={80}>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.08] text-white">{title}</h2>
    </Reveal>
    {description && (
      <Reveal delay={160}>
        <p className="text-base md:text-lg leading-relaxed text-brand-muted">{description}</p>
      </Reveal>
    )}
  </div>
);
