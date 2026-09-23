import { motion } from 'framer-motion';
import {
  BookText,
  Star,
  Camera,
  Filter,
  TrendingUp,
  TrendingDown,
  Heart,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';
import { Backdrop } from '@/components/ui/Backdrop';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { cn } from '@/lib/cn';

const HIGHLIGHTS = [
  {
    icon: <BookText size={18} />,
    title: 'Registro completo',
    description:
      'Ativo, tipo, volume, preços de entrada e saída, datas de abertura e fechamento — tudo em um só lugar.',
  },
  {
    icon: <Sparkles size={18} />,
    title: 'Cálculo automático',
    description: 'Resultado em moeda e em pips/pontos é calculado automaticamente a cada operação registrada.',
  },
  {
    icon: <Heart size={18} />,
    title: 'Mapeamento emocional',
    description: 'Tags pré-definidas e espaço para descrever o estado emocional durante o trade.',
  },
  {
    icon: <Star size={18} />,
    title: 'Avaliação 1–5 estrelas',
    description: 'Auto-avalie a qualidade técnica e disciplinar de cada operação para reconhecer padrões.',
  },
  {
    icon: <Camera size={18} />,
    title: 'Screenshot do gráfico',
    description: 'Anexe a imagem do setup direto no registro para revisar o contexto da entrada e da saída.',
  },
  {
    icon: <Filter size={18} />,
    title: 'Filtros poderosos',
    description: 'Por período (7/30/90/365 dias), tipo, resultado e busca textual livre.',
  },
];

interface TradeRow {
  symbol: string;
  type: 'Compra' | 'Venda';
  result: 'win' | 'loss' | 'open';
  pips: string;
  rating: number;
  emotion: string;
}

const TRADES: TradeRow[] = [
  { symbol: 'EURUSD', type: 'Compra', result: 'win', pips: '+ 42 pips', rating: 4, emotion: 'Confiante' },
  { symbol: 'XAUUSD', type: 'Venda', result: 'loss', pips: '− 18 pips', rating: 2, emotion: 'Ansioso' },
  { symbol: 'GBPUSD', type: 'Compra', result: 'win', pips: '+ 27 pips', rating: 5, emotion: 'Disciplinado' },
  { symbol: 'USDJPY', type: 'Compra', result: 'open', pips: 'Em aberto', rating: 3, emotion: 'Atento' },
];

const resultStyles: Record<TradeRow['result'], { badge: string; text: string; pill: string }> = {
  win: {
    badge: 'bg-brand-green/10 text-brand-green border-brand-green/25',
    text: 'text-brand-green',
    pill: 'Ganho',
  },
  loss: {
    badge: 'bg-brand-red/10 text-red-400 border-brand-red/25',
    text: 'text-red-400',
    pill: 'Perda',
  },
  open: {
    badge: 'bg-white/[0.04] text-brand-muted border-white/10',
    text: 'text-brand-muted',
    pill: 'Aberta',
  },
};

const Rating = ({ value }: { value: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        size={10}
        className={i < value ? 'fill-brand-gold/80 text-brand-gold/80' : 'text-white/15'}
      />
    ))}
  </div>
);

export const TradingJournal = () => {
  return (
    <Section id="journal" divider>
      <Backdrop variant="grid" />

      <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16">
        {/* Left: copy + bullets */}
        <div>
          <Reveal>
            <Eyebrow className="mb-5">Diário de Operações</Eyebrow>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="mb-6 text-3xl font-bold leading-[1.08] text-white sm:text-4xl md:text-5xl">
              Cada trade vira <span className="text-gradient-brand">aprendizado.</span>
            </h2>
          </Reveal>

          <Reveal delay={160}>
            <p className="mb-10 text-base leading-relaxed text-brand-muted md:text-lg">
              Registre, reflita e evolua. O Diário de Operações transforma sua rotina no MT5 em um sistema de melhoria contínua — com métricas, emoções e screenshots no mesmo lugar.
            </p>
          </Reveal>

          {/* Highlights grid */}
          <div className="mb-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {HIGHLIGHTS.map((h, i) => (
              <Reveal key={h.title} delay={i * 60} className="group flex gap-3.5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-brand-green transition-colors duration-300 group-hover:border-brand-green/40">
                  {h.icon}
                </span>
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-white">{h.title}</h3>
                  <p className="text-xs leading-relaxed text-brand-muted">{h.description}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mb-10 flex items-start gap-3 border-l border-brand-green/40 py-1 pl-4">
              <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand-green" />
              <p className="text-sm leading-relaxed text-brand-muted">
                <span className="font-medium text-white">Trades isolados viram padrões.</span> Identifique gatilhos emocionais, erros recorrentes e pontos fortes — e cresça com método.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <Button size="lg" className="w-full sm:w-auto" onClick={() => window.open('https://app.traderafk.com', '_blank')}>
              Acessar Plataforma
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Reveal>
        </div>

        {/* Right: mockup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative min-w-0"
        >
          {/* Halo difuso */}
          <div aria-hidden className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-brand-green/[0.05] blur-3xl" />

          {/* Mockup container */}
          <div className="relative rounded-2xl border border-white/10 bg-white/[0.02] p-1.5 shadow-[0_40px_120px_-50px_rgba(34,197,94,0.3)] backdrop-blur">
            <div aria-hidden className="hairline absolute inset-x-10 -top-px" />
            <div className="overflow-hidden rounded-xl border border-white/[0.06] bg-brand-surface/90">
              {/* Top bar */}
              <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-3 sm:px-5">
                <div className="flex items-center gap-2">
                  <BookText size={14} className="text-brand-green" />
                  <span className="text-sm font-medium text-white">Diário de Operações</span>
                </div>
                <div className="hidden items-center gap-1 rounded-md border border-white/[0.08] bg-white/[0.03] px-2 py-0.5 text-[10px] text-brand-subtle sm:flex">
                  <Filter size={10} />
                  Últimos 30 dias
                </div>
              </div>

              {/* Metrics card */}
              <div className="grid grid-cols-2 border-b border-white/[0.06] sm:grid-cols-4 sm:divide-x sm:divide-white/[0.06]">
                <div className="px-4 py-4 sm:px-5">
                  <p className="mb-1 text-[10px] uppercase tracking-[0.18em] text-brand-subtle">Operações</p>
                  <p className="font-display text-lg font-semibold text-white">42</p>
                </div>
                <div className="px-4 py-4 sm:px-5">
                  <p className="mb-1 text-[10px] uppercase tracking-[0.18em] text-brand-subtle">Win rate</p>
                  <p className="font-display text-lg font-semibold text-brand-green">68%</p>
                </div>
                <div className="px-4 py-4 sm:px-5">
                  <p className="mb-1 text-[10px] uppercase tracking-[0.18em] text-brand-subtle">Resultado</p>
                  <p
                    className="select-none font-display text-lg font-semibold text-brand-green"
                    style={{ filter: 'blur(5px)' }}
                    aria-hidden="true"
                  >
                    +██ pips
                  </p>
                </div>
                <div className="px-4 py-4 sm:px-5">
                  <p className="mb-1 text-[10px] uppercase tracking-[0.18em] text-brand-subtle">Avaliação</p>
                  <div className="flex items-center gap-1">
                    <Star size={12} className="fill-brand-gold/80 text-brand-gold/80" />
                    <p className="font-display text-lg font-semibold text-white">3.8</p>
                  </div>
                </div>
              </div>

              {/* Trade rows */}
              <div className="divide-y divide-white/[0.05]">
                {TRADES.map((trade) => {
                  const styles = resultStyles[trade.result];
                  return (
                    <div key={trade.symbol} className="flex items-center gap-3 px-4 py-3.5 transition-colors hover:bg-white/[0.02] sm:px-5">
                      {/* Symbol + type */}
                      <div className="flex w-24 shrink-0 items-center gap-2 sm:w-28">
                        <span className={cn('flex h-7 w-7 items-center justify-center rounded-md border', styles.badge)}>
                          {trade.type === 'Compra' ? (
                            <TrendingUp size={13} />
                          ) : (
                            <TrendingDown size={13} />
                          )}
                        </span>
                        <div className="min-w-0">
                          <p className="font-mono text-xs font-medium text-white">{trade.symbol}</p>
                          <p className="text-[10px] text-brand-subtle">{trade.type}</p>
                        </div>
                      </div>

                      {/* Result pips (some blurred to avoid promises) */}
                      <div className="min-w-0 flex-1">
                        <p className={cn('font-mono text-xs font-medium', styles.text)}>{trade.pips}</p>
                        <p className="truncate text-[10px] text-brand-subtle">{trade.emotion}</p>
                      </div>

                      {/* Rating */}
                      <Rating value={trade.rating} />

                      {/* Result pill */}
                      <span className={cn('hidden items-center rounded-full border px-2 py-0.5 text-[10px] font-medium sm:inline-flex', styles.badge)}>
                        {styles.pill}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Footer hint */}
              <div className="flex items-center justify-between gap-3 border-t border-white/[0.06] px-4 py-3 text-[11px] text-brand-subtle sm:px-5">
                <span className="flex items-center gap-1.5">
                  <Camera size={11} />
                  Screenshots anexados
                </span>
                <span>Tags emocionais ativas</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};
