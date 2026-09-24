import { TrendingUp, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { Backdrop } from '@/components/ui/Backdrop';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeader } from '@/components/ui/SectionHeader';

const ROBOTS = [
  {
    name: 'AFK Trader',
    description: 'O robô principal da plataforma. Estratégia multi-ativo com gestão de risco avançada, ideal para quem quer começar a operar de forma automatizada.',
    pair: 'EURUSD / XAUUSD',
    status: 'Ativo',
    version: 'v3.1',
    color: 'brand-green',
    colorHex: '#22c55e',
    badge: 'Principal',
    highlights: ['Gestão de risco automática', 'Opera nos dias de mercado', 'Relatórios em tempo real'],
  },
  {
    name: 'Snow Ball',
    description: 'Estratégia de acumulação progressiva: adiciona posições conforme o mercado confirma a tendência. Atenção: por adicionar posições, pode ampliar perdas em movimentos contrários.',
    pair: 'EURUSD',
    status: 'Ativo',
    version: 'v2.3',
    color: 'blue-400',
    colorHex: '#60a5fa',
    badge: 'Acumulação',
    highlights: ['Acumulação progressiva', 'Pensada para mercados em tendência', 'Indicada para perfis que toleram mais risco'],
  },
  {
    name: 'Boleta Pro',
    description: 'Execução baseada em regras objetivas, com entradas definidas e saídas disciplinadas por stop e alvo.',
    pair: 'XAUUSD',
    status: 'Ativo',
    version: 'v1.8',
    color: 'brand-gold',
    colorHex: '#f59e0b',
    badge: 'Execução',
    highlights: ['Entradas por regras definidas', 'Stop & Target dinâmico', 'Análise de volatilidade'],
  },
  {
    name: 'FX Squad',
    description: 'Operação em conjunto com múltiplos pares de moedas simultaneamente. Diversificação automática para distribuir exposição entre diferentes ativos.',
    pair: 'Multi-par (EURUSD, GBPUSD, USDJPY)',
    status: 'Ativo',
    version: 'v2.0',
    color: 'purple-400',
    colorHex: '#c084fc',
    badge: 'Multi-par',
    highlights: ['Operação simultânea', 'Diversificação automática', 'Correlação inteligente'],
  },
];

export const Robots = () => {
  return (
    <Section id="robots" divider>
      <Backdrop variant="grid" />

      <SectionHeader
        eyebrow="Estratégias Algorítmicas"
        title={
          <>
            Nossos <span className="text-gradient-brand">Expert Advisors</span>
          </>
        }
        description="Quatro robôs de trading com estratégias distintas. Escolha um ou combine estratégias, lembrando que combinar não elimina o risco."
      />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
        {ROBOTS.map((robot, idx) => (
          <Reveal key={robot.name} delay={idx * 80} className="h-full">
            <div className="glass-card glass-card-hover group flex h-full flex-col p-6 hover:-translate-y-1 sm:p-8">
              <div
                aria-hidden
                className="hairline absolute inset-x-6 -top-px opacity-0 transition-opacity duration-700 group-hover:opacity-100"
              />

              <div className="mb-6 flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-brand-green transition-colors duration-500 group-hover:border-brand-green/40">
                    <TrendingUp size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{robot.name}</h3>
                    <span className="font-mono text-xs text-brand-subtle">{robot.version}</span>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.15em] text-neutral-300">
                    {robot.badge}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs font-medium text-brand-green">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-green" />
                    {robot.status}
                  </span>
                </div>
              </div>

              <p className="mb-6 text-sm leading-relaxed text-brand-muted">{robot.description}</p>

              {/* Stats row — par de moedas apenas */}
              <div className="mb-6 flex items-center gap-6 border-y border-white/[0.06] py-4">
                <div className="min-w-0">
                  <span className="mb-0.5 block text-[11px] uppercase tracking-[0.15em] text-brand-subtle">Par</span>
                  <span className="font-mono text-sm text-white">{robot.pair}</span>
                </div>
                {/* Sem número de rentabilidade na landing: histórico só mediante solicitação */}
                <div className="ml-auto shrink-0 text-right">
                  <span className="mb-0.5 block text-[11px] uppercase tracking-[0.15em] text-brand-subtle">Histórico</span>
                  <span className="text-sm text-white">Mediante solicitação</span>
                </div>
              </div>

              {/* Highlights */}
              <ul className="mb-8 flex-1 space-y-2.5">
                {robot.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2.5 text-sm text-brand-muted">
                    <CheckCircle2 size={14} className="shrink-0 text-brand-green" />
                    {h}
                  </li>
                ))}
              </ul>

              <Button
                variant="outline"
                size="sm"
                className="w-full"
                onClick={() => window.open('https://app.traderafk.com', '_blank')}
              >
                Ver Estratégia
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-14 text-center">
        <p className="mx-auto mb-6 max-w-2xl text-xs leading-relaxed text-brand-subtle sm:text-sm">
          Histórico disponível mediante solicitação. Trading envolve risco — resultados passados não garantem resultados futuros.
        </p>
        <Button size="lg" onClick={() => window.open('https://app.traderafk.com', '_blank')}>
          Ver Todas as Estratégias
          <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
        </Button>
      </Reveal>
    </Section>
  );
};
