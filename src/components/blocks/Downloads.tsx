import { Download, Monitor, Apple, Smartphone, FileText, BarChart2, Settings, ArrowRight } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';
import { Backdrop } from '@/components/ui/Backdrop';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Reveal } from '@/components/ui/Reveal';
import { cn } from '@/lib/cn';

const DOWNLOAD_CATEGORIES = [
  {
    icon: <Monitor size={22} />,
    title: 'MetaTrader 5 — Windows',
    description: 'Versão desktop completa para Windows 7 ou superior.',
    tag: 'Recomendado',
    tagColor: 'brand-green',
    size: '17 MB',
    color: '#22c55e',
  },
  {
    icon: <Apple size={22} />,
    title: 'MetaTrader 5 — Mac',
    description: 'Instale via Wine ou use a versão web no navegador.',
    tag: 'Guia incluso',
    tagColor: 'blue-400',
    size: 'Web / Wine',
    color: '#60a5fa',
  },
  {
    icon: <Smartphone size={22} />,
    title: 'MetaTrader 5 — Mobile',
    description: 'Monitore suas operações no iOS e Android em tempo real.',
    tag: 'iOS & Android',
    tagColor: 'purple-400',
    size: 'App Store / Google Play',
    color: '#c084fc',
  },
  {
    icon: <BarChart2 size={22} />,
    title: 'Indicadores Técnicos',
    description: 'Pacote de indicadores customizados para suporte à análise.',
    tag: 'Exclusivo',
    tagColor: 'brand-gold',
    size: '3 MB',
    color: '#f59e0b',
  },
  {
    icon: <FileText size={22} />,
    title: 'Manuais e Documentação',
    description: 'Guias em PDF para instalação, configuração e uso dos robôs.',
    tag: 'PDF',
    tagColor: 'red-400',
    size: '12 MB',
    color: '#f87171',
  },
  {
    icon: <Settings size={22} />,
    title: 'Utilitários e Scripts',
    description: 'Ferramentas auxiliares para gerenciamento de ordens e risco.',
    tag: 'Membro',
    tagColor: 'emerald-400',
    size: '1.4 MB',
    color: '#34d399',
  },
];

export const Downloads = () => {
  return (
    <Section id="downloads" divider>
      <Backdrop variant="grid" />

      <SectionHeader
        eyebrow="Centro de Downloads"
        title={
          <>
            Tudo que você precisa, <br className="hidden sm:block" />
            <span className="text-gradient-brand">em um só lugar.</span>
          </>
        }
        description="Plataformas, indicadores, manuais e utilitários — centralizados para você não perder tempo procurando."
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {DOWNLOAD_CATEGORIES.map((item, idx) => (
          <Reveal key={item.title} delay={idx * 70} className="h-full">
            <div className="glass-card glass-card-hover group flex h-full cursor-pointer flex-col p-6 hover:-translate-y-1">
              <div aria-hidden className="hairline absolute inset-x-6 -top-px opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

              <div className="mb-5 flex items-start justify-between gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-brand-green transition-colors duration-300 group-hover:border-brand-green/40">
                  {item.icon}
                </div>
                <span
                  className={cn(
                    'rounded-full border px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.12em]',
                    item.tagColor === 'brand-green'
                      ? 'border-brand-green/30 bg-brand-green/[0.08] text-brand-green'
                      : 'border-white/10 bg-white/[0.03] text-brand-muted'
                  )}
                >
                  {item.tag}
                </span>
              </div>

              <h3 className="mb-1.5 text-base font-semibold text-white">{item.title}</h3>
              <p className="mb-5 text-sm leading-relaxed text-brand-muted">{item.description}</p>

              <div className="mt-auto flex items-center justify-between gap-3 border-t border-white/[0.06] pt-4">
                <span className="truncate font-mono text-xs text-brand-subtle">{item.size}</span>
                <span className="flex shrink-0 items-center gap-1 text-xs font-medium text-brand-green opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <Download size={12} />
                  Baixar
                </span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-12 text-center">
        <Button size="lg" variant="outline" className="w-full sm:w-auto" onClick={() => window.open('https://app.traderafk.com', '_blank')}>
          Acessar Centro de Downloads
          <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
        </Button>
        <p className="mt-3 text-xs text-brand-subtle">Downloads completos disponíveis para membros da plataforma</p>
      </Reveal>
    </Section>
  );
};
