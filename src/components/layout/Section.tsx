import React from 'react';
import { cn } from '@/lib/cn';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  containerClassName?: string;
  /** Linha fina no topo, separando a seção da anterior (padrão Osher). */
  divider?: boolean;
}

export const Section = ({ className, containerClassName, divider = false, children, ...props }: SectionProps) => {
  return (
    <section
      className={cn('py-20 sm:py-28 relative overflow-hidden', divider && 'border-t border-white/[0.06]', className)}
      {...props}
    >
      <div className={cn('max-w-7xl mx-auto px-4 sm:px-6 relative z-10', containerClassName)}>
        {children}
      </div>
    </section>
  );
};
