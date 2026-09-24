import { Star, Quote } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { Backdrop } from '@/components/ui/Backdrop';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { cn } from '@/lib/cn';

const LOGOS = [
  { name: 'Hantec', url: '/hantec' },
  { name: 'Vantage', url: '/vantage' },
  { name: 'HFM', url: '/hfm' },
  { name: 'RoboForex', url: '/roboforex' },
  { name: 'MetaTrader 5', url: '#' },
];

// Sem números de base de clientes: só reintroduzir com dado real e verificável.
const STATS = [
  { value: 'MT5', label: 'Plataforma Suportada' },
  { value: '4', label: 'Expert Advisors' },
  { value: '24/5', label: 'Horário do Forex' },
  { value: '4', label: 'Corretoras Compatíveis' },
];

// TODO: confirmar que os depoimentos são reais e autorizados pelos autores antes de publicar; se não forem, remover a seção.
const TESTIMONIALS = [
  {
    name: 'Carlos M.',
    role: 'Trader desde 2021',
    avatar: 'CM',
    text: 'Depois que comecei a usar o AFK Trader na Hantec, parei de passar horas na frente do gráfico. A instalação foi simples e o suporte me ajudou a configurar o risco por operação.',
    stars: 5,
  },
  {
    name: 'Fernanda L.',
    role: 'Investidora iniciante',
    avatar: 'FL',
    text: 'O onboarding da plataforma me guiou desde o zero. Em menos de uma semana já estava com o Snow Ball operando. A biblioteca de cursos fez toda a diferença.',
    stars: 5,
  },
  {
    name: 'Rafael T.',
    role: 'Parceiro Trader AFK',
    avatar: 'RT',
    text: 'Como parceiro, o painel de gestão de prospects é incrível. Consigo acompanhar cada lead pelo pipeline e os materiais de marketing pouparam horas de trabalho.',
    stars: 5,
  },
];

const LogoRow = ({ copy }: { copy: number }) => (
  <div
    className="flex min-w-full shrink-0 animate-infinite-scroll items-center justify-around gap-16 pr-16 sm:gap-20 sm:pr-20"
    aria-hidden={copy > 1 ? 'true' : undefined}
  >
    {LOGOS.map((logo, idx) => (
      <a
        href={logo.url}
        key={`${logo.name}-${copy}-${idx}`}
        className={cn(
          'flex items-center justify-center text-neutral-500 transition-colors duration-500 hover:text-white',
          logo.url !== '#' ? 'cursor-pointer' : 'cursor-default'
        )}
      >
        <span className="whitespace-nowrap font-display text-xl font-semibold tracking-tight sm:text-2xl">{logo.name}</span>
      </a>
    ))}
  </div>
);

export const SocialProof = () => {
  return (
    <>
      {/* Logo carousel */}
      <Section divider className="py-12 sm:py-14">
        <p className="eyebrow mb-8 text-center text-brand-subtle!">Compatível com corretoras que oferecem MT5</p>

        <div className="relative flex overflow-hidden">
          <div className="absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-brand-dark to-transparent sm:w-28" />
          <div className="absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-brand-dark to-transparent sm:w-28" />

          <div className="flex w-full select-none overflow-hidden">
            <LogoRow copy={1} />
            <LogoRow copy={2} />
          </div>
        </div>
      </Section>

      {/* Stats */}
      <Section divider className="py-12 sm:py-16">
        <Reveal>
          <dl className="grid grid-cols-2 border-y border-white/[0.06] md:grid-cols-4">
            {STATS.map((stat, idx) => (
              <div
                key={stat.label}
                className={cn(
                  'flex flex-col-reverse px-4 py-8 text-center',
                  idx % 2 === 1 && 'border-l border-white/[0.06]',
                  idx >= 2 && 'border-t border-white/[0.06] md:border-t-0',
                  idx === 2 && 'md:border-l'
                )}
              >
                <dt className="mt-2 text-[11px] uppercase tracking-[0.2em] text-brand-subtle">{stat.label}</dt>
                <dd className="font-display text-3xl font-semibold text-white sm:text-4xl">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Section>

      {/* Testimonials */}
      <Section id="testimonials" divider>
        <Backdrop variant="grid" />

        <SectionHeader
          eyebrow="Depoimentos"
          title={
            <>
              O que os traders <span className="text-gradient-brand">estão dizendo</span>
            </>
          }
          description="Relatos de membros sobre a experiência de uso da plataforma. Resultados individuais variam e não representam desempenho típico."
        />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <Reveal key={t.name} delay={idx * 80} className="h-full">
              <figure className="glass-card glass-card-hover group flex h-full flex-col p-7 hover:-translate-y-1">
                <div
                  aria-hidden
                  className="hairline absolute inset-x-6 -top-px opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                />

                <Quote size={24} className="mb-5 text-brand-green/40" />

                <blockquote className="mb-8 flex-1 text-sm leading-relaxed text-brand-muted">"{t.text}"</blockquote>

                <figcaption className="flex items-center justify-between border-t border-white/[0.06] pt-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-xs font-semibold text-brand-green transition-colors duration-500 group-hover:border-brand-green/40">
                      {t.avatar}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">{t.name}</p>
                      <p className="text-xs text-brand-subtle">{t.role}</p>
                    </div>
                  </div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.stars }).map((_, i) => (
                      <Star key={i} size={12} className="fill-current text-brand-gold" />
                    ))}
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
};
