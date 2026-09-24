import { ArrowRight, ShieldCheck, Bot, Zap } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Backdrop } from '@/components/ui/Backdrop';
import { Reveal } from '@/components/ui/Reveal';

const GUARANTEES = [
  { icon: <ShieldCheck size={16} />, text: 'Cadastro 100% gratuito' },
  { icon: <Bot size={16} />, text: 'Robôs com risco configurável' },
  { icon: <Zap size={16} />, text: 'Suporte incluso' },
];

export const FinalCTA = () => {
  return (
    <Section divider>
      <Backdrop variant="grid" />

      <Reveal className="relative mx-auto max-w-5xl">
        {/* Halo central bem difuso */}
        <div aria-hidden className="pointer-events-none absolute inset-x-10 -inset-y-10 rounded-[3rem] bg-brand-green/[0.06] blur-3xl" />

        <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-b from-brand-elevated/80 to-brand-surface/40 px-5 py-14 text-center backdrop-blur-xl sm:px-12 sm:py-20">
          {/* Hairlines */}
          <div aria-hidden className="hairline absolute inset-x-10 top-0" />
          <div aria-hidden className="hairline-neutral absolute inset-x-10 bottom-0" />
          <div aria-hidden className="pointer-events-none absolute left-1/2 top-0 h-48 w-[36rem] max-w-full -translate-x-1/2 rounded-full bg-brand-green/[0.08] blur-[90px]" />

          <div className="relative">
            <div className="mb-8">
              <Eyebrow pill>Condição de lançamento</Eyebrow>
            </div>

            <h2 className="mb-6 text-[2.2rem] font-bold leading-[1.05] text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Automatize sua operação <br className="hidden sm:block" />
              <span className="text-gradient-brand">com regras claras.</span>
            </h2>

            <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-brand-muted sm:text-lg">
              Crie sua conta, escolha seu robô e ative a licença MT5. Você define os parâmetros de risco antes de ativar e pode pausar o EA quando quiser.
            </p>

            {/* CTA Buttons */}
            <div className="mb-10 flex flex-col justify-center gap-3 sm:flex-row">
              <Button size="lg" onClick={() => window.open('https://app.traderafk.com', '_blank')}>
                Criar Minha Conta Grátis
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => window.open('https://app.traderafk.com', '_blank')}>
                Acessar a Plataforma
              </Button>
            </div>

            {/* Guarantees */}
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {GUARANTEES.map((g) => (
                <li key={g.text} className="inline-flex items-center gap-2 text-sm text-brand-muted">
                  <span className="text-brand-green">{g.icon}</span>
                  {g.text}
                </li>
              ))}
            </ul>

            {/* Disclaimer */}
            <div className="mt-12 border-t border-white/[0.06] pt-8">
              <p className="mx-auto max-w-2xl text-xs leading-relaxed text-brand-subtle">
                Operar forex, CFDs e criptoativos envolve alto risco e pode resultar em perdas superiores ao capital. Rentabilidade passada não garante resultados futuros. Opere apenas com recursos que você pode perder.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
};
