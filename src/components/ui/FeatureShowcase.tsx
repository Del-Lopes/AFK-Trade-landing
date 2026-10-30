import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Info } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { Backdrop } from '@/components/ui/Backdrop';
import { Button } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { cn } from '@/lib/cn';

const PLATFORM_URL = 'https://app.traderafk.com';

export interface ShowcaseHighlight {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface FeatureShowcaseProps {
  id: string;
  eyebrow: string;
  title: React.ReactNode;
  description: React.ReactNode;
  highlights: ShowcaseHighlight[];
  /** Mock do app, montado com <MockFrame>. */
  mock: React.ReactNode;
  /** Aviso de risco ou de escopo, exibido abaixo dos destaques. */
  note?: React.ReactNode;
  /** Mock à esquerda no desktop, para alternar o ritmo entre seções vizinhas. */
  reverse?: boolean;
  backdrop?: 'grid' | 'lines' | 'glow';
}

/**
 * Seção dedicada a uma sessão do app: texto e destaques de um lado, mock do outro.
 * Mesmo padrão visual do Diário de Operações.
 */
export const FeatureShowcase = ({
  id,
  eyebrow,
  title,
  description,
  highlights,
  mock,
  note,
  reverse = false,
  backdrop = 'grid',
}: FeatureShowcaseProps) => (
  <Section id={id} divider>
    <Backdrop variant={backdrop} />

    <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16">
      <div className={cn(reverse && 'lg:order-2')}>
        <Reveal>
          <Eyebrow className="mb-5">{eyebrow}</Eyebrow>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="mb-6 text-3xl font-bold leading-[1.08] text-white sm:text-4xl md:text-5xl">{title}</h2>
        </Reveal>

        <Reveal delay={160}>
          <p className="mb-10 text-base leading-relaxed text-brand-muted md:text-lg">{description}</p>
        </Reveal>

        <div className="mb-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {highlights.map((h, i) => (
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

        {note && (
          <Reveal>
            <div className="mb-10 flex items-start gap-3 border-l border-brand-green/40 py-1 pl-4">
              <Info size={16} className="mt-0.5 shrink-0 text-brand-green" />
              <p className="text-xs leading-relaxed text-brand-muted">{note}</p>
            </div>
          </Reveal>
        )}

        <Reveal>
          <Button size="lg" className="w-full sm:w-auto" onClick={() => window.open(PLATFORM_URL, '_blank')}>
            Começar grátis
            <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </Reveal>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className={cn('relative min-w-0', reverse && 'lg:order-1')}
      >
        {mock}
      </motion.div>
    </div>
  </Section>
);

interface MockFrameProps {
  icon: React.ReactNode;
  title: string;
  /** Texto pequeno à direita da barra, ex.: "dados ilustrativos". */
  meta?: string;
  children: React.ReactNode;
  ariaLabel: string;
}

/** Moldura de "janela do app" usada nos mocks das seções. */
export const MockFrame = ({ icon, title, meta = 'dados ilustrativos', children, ariaLabel }: MockFrameProps) => (
  <div role="img" aria-label={ariaLabel}>
    <div aria-hidden className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-brand-green/[0.05] blur-3xl" />
    <div className="relative rounded-2xl border border-white/10 bg-white/[0.02] p-1.5 shadow-[0_40px_120px_-50px_rgba(34,197,94,0.3)] backdrop-blur">
      <div aria-hidden className="hairline absolute inset-x-10 -top-px" />
      <div className="overflow-hidden rounded-xl border border-white/[0.06] bg-brand-surface/90">
        <div className="flex items-center justify-between gap-3 border-b border-white/[0.06] px-4 py-3 sm:px-5">
          <div className="flex min-w-0 items-center gap-2">
            <span className="shrink-0 text-brand-green">{icon}</span>
            <span className="truncate text-sm font-medium text-white">{title}</span>
          </div>
          <span className="shrink-0 rounded-md border border-white/[0.08] bg-white/[0.03] px-2 py-0.5 text-[10px] text-brand-subtle">
            {meta}
          </span>
        </div>
        {children}
      </div>
    </div>
  </div>
);
