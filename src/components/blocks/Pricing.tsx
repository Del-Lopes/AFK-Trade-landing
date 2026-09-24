import { ArrowRight, Check, X } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Backdrop } from '@/components/ui/Backdrop';
import { Reveal } from '@/components/ui/Reveal';
import { cn } from '@/lib/cn';

export const Pricing = () => {
  return (
    <Section id="pricing" divider>
      <Backdrop variant="glow" />

      <SectionHeader
        eyebrow="Acesso"
        title={<>Oferta de <span className="text-gradient-brand">Lançamento</span></>}
        description="Acesso gratuito vitalício* para quem se cadastrar durante o lançamento. Condições completas nos Termos de Uso."
      />

      <div className="mx-auto grid max-w-4xl grid-cols-1 items-stretch gap-6 md:grid-cols-2">
        {/* Card: Standard Info (Future Price) */}
        <Reveal className="h-full">
          <div className="glass-card flex h-full flex-col p-7 sm:p-8">
            <div className="mb-8">
              <h3 className="mb-2 text-xl font-semibold text-white">Membro Trader AFK</h3>
              <p className="text-sm text-brand-muted">Valor padrão após o período de lançamento</p>
            </div>

            <div className="mb-8 flex items-baseline gap-1 border-b border-white/[0.06] pb-8">
              <span className="font-display text-5xl font-semibold tracking-tight text-white">R$ 97</span>
              <span className="text-brand-subtle">/ano</span>
            </div>

            <ul className="mb-8 flex-1 space-y-4">
              <ListItem>Acesso ao catálogo de estratégias</ListItem>
              <ListItem>Acesso à biblioteca de cursos</ListItem>
              <ListItem>Atualizações constantes</ListItem>
              <ListItem negative>Renovação anual grátis</ListItem>
            </ul>

            <Button variant="outline" className="mt-auto w-full" disabled>
              Disponível após o lançamento
            </Button>
          </div>
        </Reveal>

        {/* Card: Condição de lançamento */}
        {/* TODO: só reintroduzir escassez com contador real */}
        <Reveal delay={100} className="relative h-full">
          {/* Halo difuso */}
          <div aria-hidden className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-brand-green/[0.07] blur-3xl" />

          {/* Borda em gradiente verde */}
          <div className="relative h-full rounded-2xl bg-gradient-to-b from-brand-green/60 via-brand-green/20 to-white/[0.06] p-px">
            <div className="relative flex h-full flex-col rounded-[calc(1rem-1px)] bg-gradient-to-b from-[#0f1a13] to-brand-surface p-7 sm:p-8">
              <div aria-hidden className="hairline absolute inset-x-8 -top-px" />

              <div className="mb-8 flex flex-col-reverse items-start gap-4 sm:flex-row sm:justify-between">
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-white">Condição de Lançamento</h3>
                  <p className="text-sm text-brand-green/80">Para quem se cadastrar durante o lançamento</p>
                </div>
                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-brand-green/30 bg-brand-green/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-brand-green">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
                  LANÇAMENTO
                </span>
              </div>

              <div className="mb-8 flex items-baseline gap-1 border-b border-white/[0.06] pb-8">
                <span className="font-display text-5xl font-semibold tracking-tight text-white">R$ 0</span>
                <span className="text-brand-muted">/vitalício*</span>
              </div>

              <ul className="mb-8 flex-1 space-y-4">
                <ListItem active>Acesso gratuito vitalício*</ListItem>
                <ListItem active>Acesso Imediato ao Ecossistema</ListItem>
                <ListItem active>Acesso à biblioteca de cursos</ListItem>
                <ListItem active>Condições especiais dos primeiros parceiros</ListItem>
              </ul>

              <p className="mb-6 rounded-lg border border-white/[0.08] bg-white/[0.02] p-3 text-xs leading-relaxed text-brand-muted">
                *Enquanto o produto estiver disponível; condições nos Termos de Uso.
              </p>

              <Button className="mt-auto w-full" onClick={() => window.open('https://app.traderafk.com', '_blank')}>
                Criar Minha Conta Grátis
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
};

const ListItem = ({ children, active, negative }: { children: React.ReactNode; active?: boolean; negative?: boolean }) => {
  return (
    <li className={cn('flex items-start gap-3 text-sm', active ? 'text-neutral-200' : 'text-brand-muted')}>
      <div
        className={cn(
          'mt-0.5 shrink-0 rounded-full border p-0.5',
          active
            ? 'border-brand-green/40 bg-brand-green/15 text-brand-green'
            : negative
              ? 'border-red-400/30 bg-red-500/10 text-red-400'
              : 'border-white/10 bg-white/[0.04] text-neutral-300'
        )}
      >
        {negative ? <X size={12} /> : <Check size={12} />}
      </div>
      <span className={negative ? 'opacity-70' : ''}>{children}</span>
    </li>
  );
};
