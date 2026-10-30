import { CalendarRange, FileUp, LineChart, PieChart, Scale, ShieldAlert, Upload } from 'lucide-react';
import { FeatureShowcase, MockFrame } from '@/components/ui/FeatureShowcase';
import { cn } from '@/lib/cn';

const HIGHLIGHTS = [
  { icon: <FileUp size={18} />, title: 'Envie o relatório do MT5', description: 'Exporte o histórico em HTML no MetaTrader 5 e faça o upload. A plataforma mostra o passo a passo.' },
  { icon: <Scale size={18} />, title: 'Indicadores que importam', description: 'Lucro líquido, fator de lucro, fator de recuperação, maior lucro e maior perda.' },
  { icon: <ShieldAlert size={18} />, title: 'Drawdown', description: 'Drawdown máximo, absoluto e relativo, para medir o risco que você realmente correu.' },
  { icon: <LineChart size={18} />, title: 'Evolução do resultado', description: 'A curva da conta ao longo do tempo, operação a operação.' },
  { icon: <PieChart size={18} />, title: 'Acertos em compras e vendas', description: 'Descubra em qual lado do mercado você opera melhor.' },
  { icon: <CalendarRange size={18} />, title: 'Por par e por dia da semana', description: 'Veja onde e quando seus resultados vêm, e onde eles escapam.' },
];

// Valores ilustrativos.
const KPIS = [
  { k: 'Fator de lucro', v: '1,42' },
  { k: 'Acertos', v: '58%' },
  { k: 'Total de trades', v: '126' },
  { k: 'Drawdown máx.', v: '8,3%', warn: true },
];

const CURVE = [0, 4, 3, 8, 6, 11, 9, 14, 12, 13, 18, 16, 21, 19, 24];

const WEEKDAYS = [
  { d: 'Seg', v: 6 },
  { d: 'Ter', v: 9 },
  { d: 'Qua', v: -4 },
  { d: 'Qui', v: 7 },
  { d: 'Sex', v: -2 },
];

const ResultsMock = () => {
  const w = 300;
  const h = 90;
  const max = Math.max(...CURVE);
  const pts = CURVE.map((v, i) => `${(i / (CURVE.length - 1)) * w},${h - (v / max) * (h - 8) - 4}`).join(' ');
  const dayMax = Math.max(...WEEKDAYS.map((d) => Math.abs(d.v)));

  return (
    <MockFrame
      icon={<LineChart size={14} />}
      title="Análise de Resultados"
      ariaLabel="Ilustração da Análise de Resultados: indicadores, curva de evolução e resultado por dia da semana a partir do relatório do MT5"
    >
      <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-2.5 text-[11px] text-brand-muted sm:px-5">
        <Upload size={12} className="text-brand-green" />
        <span className="truncate font-mono">relatorio-mt5.html</span>
        <span className="ml-auto shrink-0 text-brand-green">processado</span>
      </div>

      <div className="grid grid-cols-2 border-b border-white/[0.06] sm:grid-cols-4 sm:divide-x sm:divide-white/[0.06]">
        {KPIS.map((m) => (
          <div key={m.k} className="flex flex-col justify-between gap-1 px-4 py-3.5 sm:px-5">
            <p className="text-[10px] uppercase tracking-[0.15em] text-brand-subtle">{m.k}</p>
            <p className={cn('font-display text-lg font-semibold', m.warn ? 'text-amber-300' : 'text-white')}>{m.v}</p>
          </div>
        ))}
      </div>

      <div className="border-b border-white/[0.06] px-4 py-4 sm:px-5">
        <p className="mb-2 text-[10px] uppercase tracking-[0.18em] text-brand-subtle">Evolução do resultado</p>
        <svg viewBox={`0 0 ${w} ${h}`} className="h-24 w-full" preserveAspectRatio="none" aria-hidden>
          <defs>
            <linearGradient id="results-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#22c55e" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
            </linearGradient>
          </defs>
          <polygon points={`0,${h} ${pts} ${w},${h}`} fill="url(#results-fill)" />
          <polyline points={pts} fill="none" stroke="#5eea96" strokeWidth="1.6" vectorEffect="non-scaling-stroke" />
        </svg>
      </div>

      <div className="px-4 py-4 sm:px-5">
        <p className="mb-3 text-[10px] uppercase tracking-[0.18em] text-brand-subtle">Resultado por dia da semana</p>
        <div className="flex gap-3">
          {WEEKDAYS.map((d) => (
            <div key={d.d} className="flex flex-1 flex-col items-center">
              <div className="flex h-9 w-full items-end justify-center">
                {d.v > 0 && <div className="w-4 rounded-t bg-brand-green/70" style={{ height: `${(d.v / dayMax) * 36}px` }} />}
              </div>
              <div className="h-px w-full bg-white/10" />
              <div className="flex h-9 w-full items-start justify-center">
                {d.v < 0 && <div className="w-4 rounded-b bg-red-400/70" style={{ height: `${(-d.v / dayMax) * 36}px` }} />}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-1 flex gap-3">
          {WEEKDAYS.map((d) => (
            <span key={d.d} className="flex-1 text-center text-[10px] text-brand-subtle">
              {d.d}
            </span>
          ))}
        </div>
      </div>
    </MockFrame>
  );
};

export const ResultsAnalysis = () => (
  <FeatureShowcase
    id="resultados"
    eyebrow="Análise de Resultados"
    title={
      <>
        Seu relatório do MT5, <span className="text-gradient-brand">lido de verdade.</span>
      </>
    }
    description="Envie o relatório do MetaTrader 5 e veja seus números organizados: indicadores, curva de evolução, drawdown e onde estão seus pontos fortes e fracos. Disciplina começa por medir."
    highlights={HIGHLIGHTS}
    mock={<ResultsMock />}
    note="Os números do exemplo são ilustrativos. Resultados passados não garantem resultados futuros."
  />
);
