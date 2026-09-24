import type React from 'react';
import { Section } from '@/components/layout/Section';
import { Backdrop } from '@/components/ui/Backdrop';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { CheckCircle2, XCircle, Clock, Coffee, Activity, Zap } from 'lucide-react';
import { cn } from '@/lib/cn';

export const Comparison = () => {
  return (
    <Section divider>
      <Backdrop variant="glow" />

      <SectionHeader
        eyebrow="Comparativo"
        title={
          <>
            A Evolução do <span className="text-gradient-brand">Trader</span>
          </>
        }
        description="A diferença entre operar no impulso e operar com regras definidas e automatizadas."
      />

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
        {/* The Old Way */}
        <Reveal className="h-full">
          <div className="relative h-full overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.015] p-7 sm:p-8">
            <div aria-hidden className="absolute right-0 top-0 p-4 text-white opacity-[0.04]">
              <Activity size={100} />
            </div>

            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-red-500/20 bg-red-500/[0.06] text-red-400">
                <XCircle size={22} />
              </div>
              <h3 className="text-xl font-bold text-white sm:text-2xl">O Trader "Tela"</h3>
            </div>

            <ul className="space-y-5">
              <ListItem icon={<Clock size={18} />} text="12 horas/dia analisando gráficos" bad />
              <ListItem icon={<Activity size={18} />} text="Estresse emocional constante" bad />
              <ListItem icon={<XCircle size={18} />} text="Perde oportunidades enquanto dorme" bad />
              <ListItem icon={<XCircle size={18} />} text="Decisões baseadas em medo/ganância" bad />
            </ul>
          </div>
        </Reveal>

        {/* The AFK Way */}
        <Reveal delay={120} className="h-full">
          <div className="glass-card glass-card-hover group h-full overflow-hidden border-brand-green/25 p-7 sm:p-8">
            <div aria-hidden className="hairline absolute inset-x-6 -top-px" />
            <div aria-hidden className="absolute right-0 top-0 p-4 text-brand-green opacity-[0.07]">
              <Zap size={100} />
            </div>

            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-brand-green/30 bg-brand-green/[0.06] text-brand-green">
                <CheckCircle2 size={22} />
              </div>
              <h3 className="text-xl font-bold text-white sm:text-2xl">O Trader AFK</h3>
            </div>

            <ul className="space-y-5">
              <ListItem icon={<Coffee size={18} />} text="Acompanha as operações sem ficar preso à tela" good />
              <ListItem icon={<CheckCircle2 size={18} />} text="Regras sistemáticas e risco definido" good />
              <ListItem icon={<Zap size={18} />} text="Execução automática nos dias de mercado" good />
              <ListItem icon={<CheckCircle2 size={18} />} text="Liberdade geográfica e temporal" good />
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
};

const ListItem = ({ icon, text, good = false, bad = false }: { icon: React.ReactNode, text: string, good?: boolean, bad?: boolean }) => (
  <li className="flex items-center gap-4">
    <div className={cn(
      'shrink-0 rounded-lg border p-2',
      good && 'border-brand-green/20 bg-brand-green/[0.06] text-brand-green',
      bad && 'border-red-500/15 bg-red-500/[0.05] text-red-400',
      !good && !bad && 'border-white/10 bg-white/[0.03] text-white'
    )}>
      {icon}
    </div>
    <span className={cn(
      'text-base sm:text-lg',
      good ? 'font-medium text-white' : 'text-brand-muted'
    )}>{text}</span>
  </li>
);
