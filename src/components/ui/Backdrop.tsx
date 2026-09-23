import { cn } from '@/lib/cn';

interface BackdropProps {
  /** grid: grid esmaecido; lines: linhas finas horizontais; glow: só brilhos difusos. */
  variant?: 'grid' | 'lines' | 'glow';
  className?: string;
}

/**
 * Ambientação de fundo das seções, no estilo Osher: grid ou linhas finas
 * em gradiente e brilhos verdes bem difusos. Sempre decorativo.
 */
export const Backdrop = ({ variant = 'glow', className }: BackdropProps) => (
  // Ocupa a largura toda da viewport (a Section corta o excesso), para os brilhos não formarem bordas no container.
  <div
    aria-hidden
    className={cn('pointer-events-none absolute inset-y-0 left-1/2 w-screen -translate-x-1/2', className)}
  >
    {variant === 'grid' && <div className="absolute inset-0 bg-grid-fade" />}
    {variant === 'lines' && (
      <>
        <div className="hairline absolute inset-x-0 top-1/3 opacity-70" />
        <div className="hairline absolute inset-x-0 bottom-1/3 opacity-40" />
      </>
    )}
    <div className="absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-brand-green/[0.05] blur-[120px]" />
    <div className="absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-brand-green/[0.035] blur-[120px]" />
  </div>
);
