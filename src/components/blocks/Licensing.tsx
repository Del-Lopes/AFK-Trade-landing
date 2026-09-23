import { Key, CheckCircle2, ArrowRight, RefreshCw, ShieldCheck, Cpu } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { Backdrop } from '@/components/ui/Backdrop';
import { Button } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';

const STEPS = [
  {
    step: '01',
    icon: <Key size={20} />,
    title: 'Solicitar Licença',
    description: 'Escolha o robô e informe o número da sua conta MT5. Solicitação enviada em segundos.',
  },
  {
    step: '02',
    icon: <ShieldCheck size={20} />,
    title: 'Aprovação',
    description: 'Nossa equipe valida a conta e emite a licença vinculada exclusivamente ao seu número MT5.',
  },
  {
    step: '03',
    icon: <Cpu size={20} />,
    title: 'Ativar no MT5',
    description: 'Instale o EA na sua corretora, conecte a licença e o robô começa a operar automaticamente.',
  },
];

const BENEFITS = [
  'Licença vinculada ao seu número de conta MT5',
  'Múltiplos robôs com licenças independentes',
  'Controle de validade e renovação no painel',
  'Nenhuma senha ou dado sensível é compartilhado',
  'Funcionamento exclusivo na sua conta de corretora',
  'Revogação e transferência de licença sob demanda',
];

export const Licensing = () => {
  return (
    <Section id="licensing" divider>
      <Backdrop variant="lines" />

      <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16">
        {/* Left: Text */}
        <div>
          <Reveal>
            <Eyebrow>Gestão de Licenças</Eyebrow>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="mt-5 mb-6 text-3xl font-bold leading-[1.08] text-white sm:text-4xl md:text-5xl">
              Segurança e controle <br />
              <span className="text-gradient-brand">total sobre seus robôs.</span>
            </h2>
          </Reveal>

          <Reveal delay={160}>
            <p className="mb-8 text-base leading-relaxed text-brand-muted md:text-lg">
              Nosso sistema de licenciamento vincula cada robô diretamente ao número da sua conta MetaTrader 5. Seu dinheiro nunca sai da sua corretora — você mantém controle absoluto.
            </p>
          </Reveal>

          <Reveal delay={220}>
            <ul className="mb-10 grid gap-3 border-t border-white/[0.06] pt-6">
              {BENEFITS.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-brand-muted">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-brand-green" />
                  {b}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={280}>
            <Button size="lg" className="w-full sm:w-auto" onClick={() => window.open('https://app.traderafk.com', '_blank')}>
              Solicitar Minha Licença
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Reveal>
        </div>

        {/* Right: Steps */}
        <div className="relative space-y-4">
          {/* Connecting line */}
          <div aria-hidden className="absolute left-[2.875rem] top-10 bottom-24 hidden w-px bg-gradient-to-b from-brand-green/40 via-brand-green/10 to-transparent md:block" />

          {STEPS.map((s, idx) => (
            <Reveal key={s.step} delay={idx * 100}>
              <div className="glass-card glass-card-hover group relative flex gap-5 p-6">
                <div
                  aria-hidden
                  className="hairline absolute inset-x-6 -top-px opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                />
                <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-brand-dark text-brand-green transition-colors duration-500 group-hover:border-brand-green/40">
                  {s.icon}
                </div>
                <div>
                  <div className="mb-1.5 flex items-baseline gap-2.5">
                    <span className="font-mono text-xs text-brand-green/70">{s.step}</span>
                    <h3 className="text-lg font-bold text-white">{s.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-brand-muted">{s.description}</p>
                </div>
              </div>
            </Reveal>
          ))}

          {/* Renewal hint */}
          <Reveal delay={360}>
            <div className="mt-2 flex items-center gap-3 rounded-xl border border-brand-green/20 bg-brand-green/[0.04] p-4">
              <RefreshCw size={18} className="shrink-0 text-brand-green" />
              <p className="text-sm text-brand-muted">
                <span className="font-medium text-white">Renovação simples:</span> acompanhe a validade de cada licença direto no painel e renove com um clique.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
};
