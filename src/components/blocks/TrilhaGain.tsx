import { BarChart3, Check, CheckCircle2, Coins, Flame, GraduationCap, Lightbulb, ListChecks, Lock, MousePointerClick, ToggleLeft } from 'lucide-react';
import { FeatureShowcase, MockFrame } from '@/components/ui/FeatureShowcase';
import { cn } from '@/lib/cn';

const HIGHLIGHTS = [
  { icon: <Lightbulb size={18} />, title: 'Conceito', description: 'O essencial de cada tema, explicado sem jargão e em poucos minutos.' },
  { icon: <BarChart3 size={18} />, title: 'Leitura de gráfico', description: 'Aprenda a enxergar o que os candles estão mostrando.' },
  { icon: <MousePointerClick size={18} />, title: 'Monte a ordem', description: 'Pratique a montagem de uma operação sem arriscar dinheiro.' },
  { icon: <ListChecks size={18} />, title: 'Quiz', description: 'Confira se o conceito ficou claro antes de seguir.' },
  { icon: <ToggleLeft size={18} />, title: 'Verdadeiro ou falso', description: 'Desfaça os mitos mais comuns do mercado.' },
  { icon: <Coins size={18} />, title: 'Coins e sequência', description: 'Cada lição concluída rende Coins e mantém sua sequência de dias.' },
];

type UnitState = 'done' | 'current' | 'locked';

// Unidades ilustrativas: o conteúdo real da trilha é publicado pela equipe no app.
const UNITS: { n: number; title: string; lessons: string; state: UnitState; progress?: number }[] = [
  { n: 1, title: 'Como o mercado funciona', lessons: '6 lições', state: 'done' },
  { n: 2, title: 'Leitura de candles', lessons: '8 lições', state: 'current', progress: 60 },
  { n: 3, title: 'Suporte e resistência', lessons: '7 lições', state: 'locked' },
  { n: 4, title: 'Gestão de risco', lessons: '6 lições', state: 'locked' },
];

const UnitNode = ({ state, n }: { state: UnitState; n: number }) => (
  <span
    className={cn(
      'relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border font-display text-sm font-semibold',
      state === 'done' && 'border-brand-green/50 bg-brand-green/15 text-brand-green',
      state === 'current' && 'border-brand-green bg-brand-green text-brand-dark shadow-[0_0_24px_-4px_rgba(34,197,94,0.7)]',
      state === 'locked' && 'border-white/10 bg-white/[0.03] text-neutral-500'
    )}
  >
    {state === 'done' ? <Check size={16} /> : state === 'locked' ? <Lock size={14} /> : n}
  </span>
);

const TrilhaMock = () => (
  <MockFrame
    icon={<GraduationCap size={14} />}
    title="Trilha Gain"
    ariaLabel="Ilustração da Trilha Gain: mapa de unidades com progresso, Coins e sequência de dias"
  >
    <div className="flex items-center justify-between gap-3 border-b border-white/[0.06] px-4 py-3 sm:px-5">
      <p className="text-xs text-brand-muted">Jornada do Trader</p>
      <div className="flex items-center gap-2">
        <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] px-2 py-0.5 text-[11px] text-neutral-200">
          <Coins size={12} className="text-brand-gold" />
          340
        </span>
        <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] px-2 py-0.5 text-[11px] text-neutral-200">
          <Flame size={12} className="text-orange-400" />5
        </span>
      </div>
    </div>

    <div className="relative px-4 py-5 sm:px-5">
      <div aria-hidden className="absolute top-8 bottom-8 left-[2.2rem] w-px bg-gradient-to-b from-brand-green/60 via-brand-green/25 to-white/10 sm:left-[2.45rem]" />
      <ul className="space-y-4">
        {UNITS.map((u) => (
          <li key={u.n} className="flex items-center gap-4">
            <UnitNode state={u.state} n={u.n} />
            <div
              className={cn(
                'min-w-0 flex-1 rounded-lg border px-3.5 py-2.5',
                u.state === 'current' ? 'border-brand-green/40 bg-brand-green/[0.06]' : 'border-white/[0.06] bg-white/[0.02]'
              )}
            >
              <div className="flex items-center justify-between gap-2">
                <p className={cn('truncate text-sm font-medium', u.state === 'locked' ? 'text-neutral-500' : 'text-white')}>
                  {u.title}
                </p>
                <span className="shrink-0 text-[10px] text-brand-subtle">{u.lessons}</span>
              </div>
              {u.state === 'current' && (
                <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full rounded-full bg-gradient-to-r from-brand-green-deep to-brand-green-bright" style={{ width: `${u.progress}%` }} />
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>

    <div className="flex items-center justify-between gap-3 border-t border-white/[0.06] px-4 py-3 text-[11px] sm:px-5">
      <span className="flex min-w-0 items-center gap-1.5 text-brand-muted">
        <CheckCircle2 size={12} className="shrink-0 text-brand-green" />
        <span className="truncate">Próxima: Martelo e estrela cadente</span>
      </span>
      <span className="shrink-0 text-brand-subtle">~4 min</span>
    </div>
  </MockFrame>
);

export const TrilhaGain = () => (
  <FeatureShowcase
    id="aprender"
    eyebrow="Trilha Gain"
    title={
      <>
        Aprenda o mercado <span className="text-gradient-brand">uma lição por vez.</span>
      </>
    }
    description="A Trilha Gain transforma teoria em prática com lições curtas e interativas, do zero ao avançado. Você lê o gráfico, monta a ordem e responde ao quiz, no seu ritmo."
    highlights={HIGHLIGHTS}
    mock={<TrilhaMock />}
  />
);
