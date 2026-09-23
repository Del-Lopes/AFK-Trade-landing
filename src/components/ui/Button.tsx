import React, { forwardRef } from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading, children, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          'group inline-flex items-center justify-center gap-2 rounded-md font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green/60 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark disabled:opacity-50 disabled:pointer-events-none cursor-pointer',
          {
            // Variants
            'bg-gradient-to-r from-brand-green-bright to-brand-green text-brand-dark font-semibold shadow-[0_10px_40px_-10px_rgba(34,197,94,0.55)] hover:brightness-110 hover:-translate-y-0.5 hover:shadow-[0_18px_50px_-12px_rgba(34,197,94,0.7)] active:translate-y-0':
              variant === 'primary',
            'bg-white/[0.06] text-white border border-white/10 hover:bg-white/10 hover:border-white/20 backdrop-blur-sm':
              variant === 'secondary',
            'border border-white/15 text-white hover:border-brand-green/60 hover:bg-brand-green/5':
              variant === 'outline',
            'text-neutral-400 hover:text-white hover:bg-white/5': variant === 'ghost',

            // Sizes
            'h-9 px-4 text-sm': size === 'sm',
            'h-11 px-6 text-sm': size === 'md',
            'h-13 px-7 text-base': size === 'lg',
          },
          className
        )}
        {...props}
      >
        {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
