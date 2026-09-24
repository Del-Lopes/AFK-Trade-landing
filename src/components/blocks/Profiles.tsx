import { User, Users, Anchor, ShieldCheck, Check, ArrowRight } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Backdrop } from '@/components/ui/Backdrop';
import { Reveal } from '@/components/ui/Reveal';
import { cn } from '@/lib/cn';

const PROFILES = [
  {
    icon: <User size={20} />,
    role: 'Cliente',
    tagline: 'Para quem quer operar',
    description: 'Acesso completo ao ecossistema de trading automatizado. Ideal para quem quer operar com Expert Advisors no MetaTrader 5.',
    features: [
      'Catálogo de Expert Advisors',
      'Gestão de licenças MT5',
      'Biblioteca de cursos e vídeos',
      'Análises e artigos de mercado',
      'Centro de downloads',
      'Painel do usuário',
    ],
    color: '#22c55e',
    cta: 'Começar como Cliente',
    highlight: false,
  },
  {
    icon: <Users size={20} />,
    role: 'Parceiro',
    tagline: 'Para quem quer crescer',
    description: 'Tudo do Cliente mais o painel completo de afiliados. Indique traders e receba participação sobre o volume operado pelos seus indicados diretos.',
    features: [
      'Tudo do Cliente',
      'Painel de gestão de prospects',
      'Materiais de marketing prontos',
      'Links personalizados rastreáveis',
      'Pipeline de vendas visual',
      'Participação por volume (fee + rebate da corretora), divulgada ao cliente',
    ],
    color: '#60a5fa',
    cta: 'Ser Parceiro',
    highlight: true,
  },
  {
    icon: <Anchor size={20} />,
    role: 'First Mate',
    tagline: 'Para quem quer liderar',
    description: 'Nível avançado com acesso à tesouraria financeira e relatórios consolidados da operação.',
    features: [
      'Tudo do Parceiro',
      'Módulo de tesouraria',
      'Relatórios financeiros completos',
      'Gestão de equipe de parceiros',
      'Acesso a métricas avançadas',
    ],
    color: '#f59e0b',
    cta: 'Saber mais',
    highlight: false,
  },
  {
    icon: <ShieldCheck size={20} />,
    role: 'Admin',
    tagline: 'Controle total',
    description: 'Acesso irrestrito à plataforma. Gerencia usuários, licenças, conteúdo e configurações globais.',
    features: [
      'Tudo do First Mate',
      'Gestão de usuários e papéis',
      'Controle de licenças emitidas',
      'Publicação de conteúdo',
      'Configurações da plataforma',
    ],
    color: '#c084fc',
    cta: 'Contato',
    highlight: false,
  },
];

export const Profiles = () => {
  return (
    <Section id="profiles" divider>
      <Backdrop variant="lines" />

      <SectionHeader
        eyebrow="Perfis de acesso"
        title={<>Para quem é o <span className="text-gradient-brand">Trader AFK?</span></>}
        description="Quatro perfis de acesso, cada um com ferramentas específicas para o seu momento. Do iniciante ao operador avançado."
      />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
        {PROFILES.map((profile, idx) => (
          <Reveal key={profile.role} delay={idx * 80} className="h-full">
            <div
              className={cn(
                'glass-card glass-card-hover group flex h-full flex-col p-7',
                profile.highlight && 'border-brand-green/40 bg-brand-green/[0.03]'
              )}
            >
              <div
                aria-hidden
                className={cn(
                  'hairline absolute inset-x-6 -top-px transition-opacity duration-700',
                  profile.highlight ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                )}
              />

              <div className="mb-5 flex items-start justify-between gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-brand-green transition-colors duration-500 group-hover:border-brand-green/40">
                  {profile.icon}
                </div>
                {profile.highlight && (
                  <span className="rounded-full border border-brand-green/30 bg-brand-green/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-brand-green">
                    MAIS POPULAR
                  </span>
                )}
              </div>

              <h3 className="mb-1 text-xl font-semibold text-white">{profile.role}</h3>
              <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-brand-green">{profile.tagline}</p>
              <p className="mb-6 text-sm leading-relaxed text-brand-muted">{profile.description}</p>

              <ul className="mb-8 flex-1 space-y-2.5 border-t border-white/[0.06] pt-5">
                {profile.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-neutral-300">
                    <Check size={14} className="mt-0.5 shrink-0 text-brand-green" />
                    {f}
                  </li>
                ))}
              </ul>

              <Button
                variant={profile.highlight ? 'primary' : 'outline'}
                size="sm"
                className="mt-auto w-full"
                onClick={() => window.open('https://app.traderafk.com', '_blank')}
              >
                {profile.cta}
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10">
        <p className="mx-auto max-w-3xl text-center text-xs leading-relaxed text-brand-subtle">
          Transparência: a Trader AFK e seus parceiros podem receber remuneração das corretoras (rebate) sobre o volume operado pelos
          clientes indicados. Isso representa um conflito de interesse, que divulgamos para que você decida com informação. Não há
          remuneração por recrutamento de parceiros.
        </p>
      </Reveal>
    </Section>
  );
};
