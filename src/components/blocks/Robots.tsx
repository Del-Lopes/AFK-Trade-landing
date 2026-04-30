import { motion } from 'framer-motion';
import { TrendingUp, ArrowRight, Activity, CheckCircle2 } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';

const ROBOTS = [
  {
    name: 'AFK Trader',
    description: 'O robô principal da plataforma. Estratégia multi-ativo com gestão de risco avançada, ideal para quem quer começar a operar no piloto automático.',
    pair: 'EURUSD / XAUUSD',
    profitability: '+12.4%',
    status: 'Ativo',
    version: 'v3.1',
    color: 'brand-green',
    colorHex: '#22c55e',
    badge: 'Principal',
    highlights: ['Gestão de risco automática', 'Operações 24/7', 'Relatórios em tempo real'],
  },
  {
    name: 'Snow Ball',
    description: 'Estratégia de acumulação progressiva. Aumenta posições de forma inteligente conforme o mercado confirma a tendência, maximizando ganhos em movimentos fortes.',
    pair: 'EURUSD',
    profitability: '+8.1%',
    status: 'Ativo',
    version: 'v2.3',
    color: 'blue-400',
    colorHex: '#60a5fa',
    badge: 'Acumulação',
    highlights: ['Acumulação progressiva', 'Ideal para tendências', 'Baixo drawdown'],
  },
  {
    name: 'Boleta Pro',
    description: 'Execução profissional de alta precisão. Replica o comportamento de traders profissionais com entradas milimetradas e saídas disciplinadas.',
    pair: 'XAUUSD',
    profitability: '+15.3%',
    status: 'Ativo',
    version: 'v1.8',
    color: 'brand-gold',
    colorHex: '#f59e0b',
    badge: 'Alto Desempenho',
    highlights: ['Entradas de alta precisão', 'Stop & Target dinâmico', 'Análise de volatilidade'],
  },
  {
    name: 'FX Squad',
    description: 'Operação em conjunto com múltiplos pares de moedas simultaneamente. Diversificação máxima para reduzir risco e aumentar consistência dos resultados.',
    pair: 'Multi-par (EURUSD, GBPUSD, USDJPY)',
    profitability: '+9.2%',
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
    <Section id="robots" className="py-32 bg-gradient-to-b from-brand-dark to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-green/30 to-transparent" />

      <div className="text-center mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-green/10 border border-brand-green/20 rounded-full text-brand-green text-sm font-medium mb-6">
          <Activity size={14} />
          <span>Estratégias Algorítmicas</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Nossos <span className="text-brand-green">Expert Advisors</span>
        </h2>
        <p className="text-white text-lg max-w-2xl mx-auto">
          Quatro robôs de trading validados, cada um com estratégia própria e histórico auditado. Escolha um ou combine todos para diversificar seu risco.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
        {ROBOTS.map((robot, idx) => (
          <motion.div
            key={robot.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.12 }}
            className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden hover:shadow-[0_0_40px_-10px_rgba(34,197,94,0.15)]"
          >
            {/* Subtle glow on hover */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
              style={{ background: `radial-gradient(ellipse at top left, ${robot.colorHex}08, transparent 60%)` }}
            />

            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: `${robot.colorHex}15`, border: `1px solid ${robot.colorHex}30` }}
                >
                  <TrendingUp size={22} style={{ color: robot.colorHex }} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{robot.name}</h3>
                  <span className="text-xs text-white/50 font-mono">{robot.version}</span>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <span
                  className="text-xs font-bold px-2 py-0.5 rounded-full"
                  style={{ background: `${robot.colorHex}20`, color: robot.colorHex }}
                >
                  {robot.badge}
                </span>
                <span className="flex items-center gap-1 text-xs text-brand-green font-medium">
                  <span className="w-1.5 h-1.5 bg-brand-green rounded-full animate-pulse" />
                  {robot.status}
                </span>
              </div>
            </div>

            <p className="text-white/70 text-sm leading-relaxed mb-6">{robot.description}</p>

            {/* Stats row */}
            <div className="flex items-center gap-6 mb-6 py-4 border-t border-b border-white/5">
              <div>
                <span className="text-xs text-white/40 block mb-0.5">Par</span>
                <span className="text-sm font-mono text-white">{robot.pair}</span>
              </div>
              <div className="ml-auto text-right">
                <span className="text-xs text-white/40 block mb-0.5">Rentabilidade</span>
                <span className="text-xl font-bold text-brand-green">{robot.profitability}</span>
              </div>
            </div>

            {/* Highlights */}
            <ul className="space-y-2 mb-6">
              {robot.highlights.map((h) => (
                <li key={h} className="flex items-center gap-2 text-sm text-white/70">
                  <CheckCircle2 size={13} style={{ color: robot.colorHex }} className="shrink-0" />
                  {h}
                </li>
              ))}
            </ul>

            <Button
              variant="outline"
              size="sm"
              className="w-full group-hover:border-brand-green/50 group-hover:text-brand-green transition-colors"
              onClick={() => window.open('https://app.traderafk.com', '_blank')}
            >
              Solicitar Licença <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 text-center relative z-10">
        <p className="text-white/50 text-sm mb-4">Resultados auditados via MyFxBook. Performance passada não garante resultados futuros.</p>
        <Button size="lg" onClick={() => window.open('https://app.traderafk.com', '_blank')}>
          Ver Todas as Estratégias <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </div>
    </Section>
  );
};
