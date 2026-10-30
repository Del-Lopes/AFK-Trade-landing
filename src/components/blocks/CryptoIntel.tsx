import { Activity, Bitcoin, BrainCircuit, Flame, Layers, LockOpen, Star } from 'lucide-react';
import { FeatureShowcase, MockFrame } from '@/components/ui/FeatureShowcase';
import { cn } from '@/lib/cn';

const HIGHLIGHTS = [
  { icon: <Activity size={18} />, title: 'Termômetro do mercado', description: 'O pulso do mercado cripto num só lugar, atualizado ao longo do dia.' },
  { icon: <Flame size={18} />, title: 'Maiores altas e trending', description: 'As moedas que mais subiram e as mais buscadas do momento.' },
  { icon: <Layers size={18} />, title: 'Narrativas por setor', description: 'Quais setores estão ganhando ou perdendo força: IA, Layer 2, DeFi e outros.' },
  { icon: <LockOpen size={18} />, title: 'DeFi e desbloqueios', description: 'Valor travado em DeFi e o calendário de desbloqueios de tokens.' },
  { icon: <Star size={18} />, title: 'Minha lista', description: 'Acompanhe as moedas que você escolher, com cotação atualizada.' },
  { icon: <BrainCircuit size={18} />, title: 'Relatório por IA', description: 'Um panorama das narrativas do momento, escrito pela IA. Usa tokens.' },
];

const TABS = ['Maiores altas', 'Trending', 'Narrativas', 'Minha lista', 'Relatório IA'];

// Valores ilustrativos.
const NARRATIVES = [
  { name: 'Inteligência Artificial', change: 8.4 },
  { name: 'Layer 2', change: 3.1 },
  { name: 'DeFi', change: 1.2 },
  { name: 'Memes', change: -2.6 },
];

const CryptoMock = () => {
  const max = Math.max(...NARRATIVES.map((n) => Math.abs(n.change)));
  return (
    <MockFrame
      icon={<Bitcoin size={14} />}
      title="Crypto"
      ariaLabel="Ilustração da sessão Crypto: narrativas por setor e trecho de relatório escrito por IA"
    >
      <div className="flex gap-1.5 overflow-hidden border-b border-white/[0.06] px-4 py-3 sm:px-5">
        {TABS.map((t) => (
          <span
            key={t}
            className={cn(
              'shrink-0 rounded-md border px-2.5 py-1 text-[11px]',
              t === 'Narrativas' ? 'border-brand-green/40 bg-brand-green/10 text-white' : 'border-white/[0.06] text-brand-subtle'
            )}
          >
            {t}
          </span>
        ))}
      </div>

      <ul className="space-y-3 px-4 py-4 sm:px-5">
        {NARRATIVES.map((n) => {
          const up = n.change >= 0;
          return (
            <li key={n.name}>
              <div className="mb-1.5 flex items-center justify-between gap-2 text-xs">
                <span className="truncate text-neutral-200">{n.name}</span>
                <span className={cn('font-mono font-medium', up ? 'text-brand-green' : 'text-red-400')}>
                  {up ? '+' : '−'}
                  {Math.abs(n.change).toFixed(1).replace('.', ',')}%
                </span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                <div
                  className={cn('h-full rounded-full', up ? 'bg-gradient-to-r from-brand-green-deep to-brand-green-bright' : 'bg-red-400/70')}
                  style={{ width: `${(Math.abs(n.change) / max) * 100}%` }}
                />
              </div>
            </li>
          );
        })}
      </ul>

      <div className="border-t border-white/[0.06] px-4 py-4 sm:px-5">
        <div className="rounded-lg border border-brand-green/25 bg-brand-green/[0.05] p-3">
          <p className="mb-1 flex items-center gap-1.5 text-[11px] font-medium text-brand-green">
            <BrainCircuit size={12} />
            Panorama de narrativas por IA
          </p>
          <p className="text-xs leading-relaxed text-neutral-300">
            Projetos ligados a inteligência artificial lideram o interesse da semana, enquanto memecoins perdem
            tração. O volume segue concentrado nas maiores moedas.
          </p>
        </div>
      </div>
    </MockFrame>
  );
};

export const CryptoIntel = () => (
  <FeatureShowcase
    id="crypto"
    eyebrow="Crypto"
    backdrop="glow"
    title={
      <>
        Inteligência de mercado <span className="text-gradient-brand">para cripto.</span>
      </>
    }
    description="Tendências, narrativas e dados de DeFi organizados num painel só, com relatórios escritos por IA para você entender o que está movendo o mercado cripto."
    highlights={HIGHLIGHTS}
    mock={<CryptoMock />}
    note="Conteúdo informativo, não é recomendação de investimento. Criptoativos são voláteis e operar envolve risco de perda."
  />
);
