import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  containerClassName?: string;
}

export const Section = ({ className, containerClassName, children, ...props }: SectionProps) => {
  return (
    <section className={cn('py-20 relative overflow-hidden', className)} {...props}>
       <div className={cn('max-w-7xl mx-auto px-6 relative z-10', containerClassName)}>
         {children}
       </div>
    </section>
  );
};
