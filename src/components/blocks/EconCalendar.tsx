import { BrainCircuit, CalendarClock, CalendarDays, Gauge, Star, Target } from 'lucide-react';
import { FeatureShowcase, MockFrame } from '@/components/ui/FeatureShowcase';
import { cn } from '@/lib/cn';

const HIGHLIGHTS = [
  {
    icon: <CalendarDays size={18} />,
    title: 'Os eventos que movem o mercado',
    description: 'Indicadores de média e alta importância de hoje, de amanhã e dos próximos 7 dias.',
  },
  {
    icon: <Target size={18} />,
    title: 'Projeção, anterior e resultado',
    description: 'Assim que o dado sai, a surpresa em relação à projeção aparece calculada.',
  },
  {
    icon: <BrainCircuit size={18} />,
    title: 'Análise automática por IA',
    description: 'Cada divulgação explicada em português, com os cenários acima, em linha e abaixo do esperado.',
  },
  {
    icon: <Gauge size={18} />,
    title: 'Reação por ativo',
    description: 'Como XAUUSD, NAS100, US30, WIN, WDO e BTC costumam reagir, com a sensibilidade de cada um.',
  },
];

// Valores ilustrativos.
const REACTIONS: { asset: string; dir: 'up' | 'down'; level: 'alta' | 'média' }[] = [
  { asset: 'XAUUSD', dir: 'down', level: 'alta' },
  { asset: 'NAS100', dir: 'down', level: 'média' },
  { asset: 'US30', dir: 'down', level: 'média' },
  { asset: 'WIN', dir: 'down', level: 'média' },
  { asset: 'WDO', dir: 'up', level: 'alta' },
  { asset: 'BTC', dir: 'down', level: 'média' },
];

const Importance = ({ value }: { value: number }) => (
  <span className="flex gap-0.5" aria-hidden>
    {[1, 2, 3].map((i) => (
      <Star key={i} size={10} className={i <= value ? 'fill-brand-gold/80 text-brand-gold/80' : 'text-white/15'} />
    ))}
  </span>
);

const CalendarMock = () => (
  <MockFrame
    icon={<CalendarClock size={14} />}
    title="Calendário · Hoje"
    ariaLabel="Ilustração do Calendário Econômico: evento Payroll com projeção, resultado, interpretação por IA e reação por ativo"
  >
    {/* Evento em destaque, expandido */}
    <div className="border-b border-white/[0.06] px-4 py-4 sm:px-5">
      <div className="mb-3 flex items-center gap-2.5">
        <span className="font-mono text-xs text-brand-subtle">09:30</span>
        <span className="rounded border border-white/10 px-1.5 py-px font-mono text-[10px] text-neutral-300">USD</span>
        <p className="min-w-0 flex-1 truncate text-sm font-medium text-white">Payroll</p>
        <Importance value={3} />
      </div>

      <div className="mb-4 grid grid-cols-4 gap-1.5 text-center">
        {[
          { k: 'Anterior', v: '175K' },
          { k: 'Projeção', v: '180K' },
          { k: 'Aconteceu', v: '212K', hl: true },
          { k: 'Surpresa', v: '+32K', hl: true },
        ].map((c) => (
          <div key={c.k} className="rounded-md border border-white/[0.06] bg-white/[0.02] px-1 py-2">
            <p className="text-[9px] uppercase tracking-[0.12em] text-brand-subtle sm:text-[10px]">{c.k}</p>
            <p className={cn('font-mono text-xs font-semibold sm:text-sm', c.hl ? 'text-brand-green' : 'text-white')}>{c.v}</p>
          </div>
        ))}
      </div>

      <div className="mb-4 rounded-lg border border-brand-green/25 bg-brand-green/[0.05] p-3">
        <p className="mb-1 flex items-center gap-1.5 text-[11px] font-medium text-brand-green">
          <BrainCircuit size={12} />
          Interpretação por IA
        </p>
        <p className="text-xs leading-relaxed text-neutral-300">
          Mercado de trabalho mais forte que o esperado reforça a leitura de juros altos por mais tempo. Cenário
          hawkish: o dólar tende a ganhar força.
        </p>
      </div>

      <p className="mb-2 text-[10px] uppercase tracking-[0.18em] text-brand-subtle">Como o mercado pode reagir</p>
      <div className="grid grid-cols-3 gap-1.5 sm:grid-cols-6">
        {REACTIONS.map((r) => (
          <div key={r.asset} className="rounded-md border border-white/[0.06] bg-white/[0.02] py-1.5 text-center">
            <p className="font-mono text-[10px] text-neutral-300">{r.asset}</p>
            <p className={cn('text-xs font-semibold', r.dir === 'up' ? 'text-brand-green' : 'text-red-400')}>
              {r.dir === 'up' ? '▲' : '▼'}
            </p>
            <p className="text-[9px] text-brand-subtle">{r.level}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Próximos eventos, recolhidos */}
    {[
      { t: '11:00', c: 'USD', name: 'ISM de Serviços', imp: 2 },
      { t: '15:00', c: 'USD', name: 'Discurso do Fed', imp: 3 },
    ].map((e) => (
      <div key={e.name} className="flex items-center gap-2.5 border-b border-white/[0.04] px-4 py-3 last:border-b-0 sm:px-5">
        <span className="font-mono text-xs text-brand-subtle">{e.t}</span>
        <span className="rounded border border-white/10 px-1.5 py-px font-mono text-[10px] text-neutral-300">{e.c}</span>
        <p className="min-w-0 flex-1 truncate text-sm text-neutral-300">{e.name}</p>
        <Importance value={e.imp} />
      </div>
    ))}
  </MockFrame>
);

export const EconCalendar = () => (
  <FeatureShowcase
    id="ia"
    eyebrow="Calendário Econômico"
    reverse
    title={
      <>
        Cada notícia econômica, <span className="text-gradient-brand">analisada por IA.</span>
      </>
    }
    description="O calendário reúne os eventos que movem o mercado e, a cada divulgação, a IA explica o que o dado significa e como os principais ativos costumam reagir. Você entende o contexto antes de decidir."
    highlights={HIGHLIGHTS}
    mock={<CalendarMock />}
    note="Conteúdo informativo, gerado com apoio de IA. Não é recomendação de investimento. Operar envolve risco de perda."
  />
);
