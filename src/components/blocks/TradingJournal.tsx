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
    badge: 'bg-brand-green/15 text-brand-green border-brand-green/30',
    text: 'text-brand-green',
    pill: 'Ganho',
  },
  loss: {
    badge: 'bg-red-400/15 text-red-300 border-red-400/30',
    text: 'text-red-300',
    pill: 'Perda',
  },
  open: {
    badge: 'bg-amber-400/15 text-amber-300 border-amber-400/30',
    text: 'text-amber-200',
    pill: 'Aberta',
  },
};

const Rating = ({ value }: { value: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        size={10}
        className={i < value ? 'fill-brand-gold text-brand-gold' : 'text-white/15'}
      />
    ))}
  </div>
);

export const TradingJournal = () => {
  return (
    <Section id="journal" className="py-32 bg-gradient-to-b from-brand-dark to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-1/3 h-1/2 bg-brand-green/8 blur-[120px] rounded-full pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left: copy + bullets */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-green/10 border border-brand-green/20 rounded-full text-brand-green text-sm font-medium mb-6">
            <BookText size={14} />
            <span>Diário de Operações</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Cada trade vira <span className="text-brand-green">aprendizado.</span>
          </h2>

          <p className="text-white/65 text-lg leading-relaxed mb-8">
            Registre, reflita e evolua. O Diário de Operações transforma sua rotina no MT5 em um sistema de melhoria contínua — com métricas, emoções e screenshots no mesmo lugar.
          </p>

          {/* Highlights grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {HIGHLIGHTS.map((h) => (
              <div key={h.title} className="flex gap-3">
                <span className="shrink-0 w-9 h-9 rounded-lg bg-brand-green/10 border border-brand-green/20 flex items-center justify-center text-brand-green">
                  {h.icon}
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-white mb-0.5">{h.title}</h3>
                  <p className="text-xs text-white/55 leading-relaxed">{h.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-start gap-3 p-4 rounded-xl bg-brand-green/5 border border-brand-green/20 mb-8">
            <CheckCircle2 size={18} className="text-brand-green shrink-0 mt-0.5" />
            <p className="text-sm text-white/70 leading-relaxed">
              <span className="text-white font-medium">Trades isolados viram padrões.</span> Identifique gatilhos emocionais, erros recorrentes e pontos fortes — e cresça com método.
            </p>
          </div>

          <Button size="lg" onClick={() => window.open('https://app.traderafk.com', '_blank')}>
            Acessar Plataforma <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>

        {/* Right: mockup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          {/* Background glow */}
          <div className="absolute -inset-4 bg-gradient-to-br from-brand-green/10 via-transparent to-brand-gold/10 blur-2xl rounded-3xl pointer-events-none" />

          {/* Mockup container */}
          <div className="relative rounded-2xl border border-white/10 bg-slate-900/80 backdrop-blur-xl shadow-2xl overflow-hidden">
            {/* Top bar */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-white/5 bg-white/[0.02]">
              <div className="flex items-center gap-2">
                <BookText size={14} className="text-brand-green" />
                <span className="text-sm font-semibold text-white">Diário de Operações</span>
              </div>
              <div className="hidden sm:flex items-center gap-1 px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[10px] text-white/50">
                <Filter size={10} />
                Últimos 30 dias
              </div>
            </div>

            {/* Metrics card */}
            <div className="p-5 border-b border-white/5 bg-white/[0.02]">
              <div className="grid grid-cols-4 gap-3">
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-white/40 mb-1">Operações</p>
                  <p className="text-lg font-bold text-white">42</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-white/40 mb-1">Win rate</p>
                  <p className="text-lg font-bold text-brand-green">68%</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-white/40 mb-1">Resultado</p>
                  <p
                    className="text-lg font-bold text-brand-green select-none"
                    style={{ filter: 'blur(5px)' }}
                    aria-hidden="true"
                  >
                    +██ pips
                  </p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-white/40 mb-1">Avaliação</p>
                  <div className="flex items-center gap-1">
                    <Star size={12} className="fill-brand-gold text-brand-gold" />
                    <p className="text-lg font-bold text-white">3.8</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Trade rows */}
            <div className="divide-y divide-white/5">
              {TRADES.map((trade) => {
                const styles = resultStyles[trade.result];
                return (
                  <div key={trade.symbol} className="px-5 py-3.5 flex items-center gap-3 hover:bg-white/[0.02] transition-colors">
                    {/* Symbol + type */}
                    <div className="flex items-center gap-2 w-28 shrink-0">
                      <span className={`w-7 h-7 rounded-md flex items-center justify-center ${styles.badge} border`}>
                        {trade.type === 'Compra' ? (
                          <TrendingUp size={13} />
                        ) : (
                          <TrendingDown size={13} />
                        )}
                      </span>
                      <div className="min-w-0">
                        <p className="text-xs font-semibold text-white font-mono">{trade.symbol}</p>
                        <p className="text-[10px] text-white/40">{trade.type}</p>
                      </div>
                    </div>

                    {/* Result pips (some blurred to avoid promises) */}
                    <div className="flex-1 min-w-0">
                      <p className={`text-xs font-bold ${styles.text}`}>{trade.pips}</p>
                      <p className="text-[10px] text-white/35 truncate">{trade.emotion}</p>
                    </div>

                    {/* Rating */}
                    <Rating value={trade.rating} />

                    {/* Result pill */}
                    <span className={`hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold border ${styles.badge}`}>
                      {styles.pill}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Footer hint */}
            <div className="px-5 py-3 border-t border-white/5 flex items-center justify-between text-[11px] text-white/40">
              <span className="flex items-center gap-1.5">
                <Camera size={11} />
                Screenshots anexados
              </span>
              <span>Tags emocionais ativas</span>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};
