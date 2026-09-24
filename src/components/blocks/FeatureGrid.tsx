import { Cpu, Shield, Zap, BarChart3, Key, Layers } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Backdrop } from '@/components/ui/Backdrop';
import { Reveal } from '@/components/ui/Reveal';

const FEATURES = [
  {
    icon: Cpu,
    title: "Expert Advisors",
    description: "Acesse nossa curadoria de robôs. Instale na sua conta, configure o risco e ative quando quiser."
  },
  {
    icon: Key,
    title: "Licenciamento",
    description: "Sistema próprio de emissão de licenças para garantir o funcionamento correto e autorizado dos seus robôs."
  },
  {
    icon: Zap,
    title: "Corretoras Compatíveis",
    description: "Funciona em corretoras que oferecem MetaTrader 5. A qualidade da execução depende da corretora e das condições de mercado."
  },
  {
    icon: Shield,
    title: "Custódia na Corretora",
    description: "A Trader AFK não custodia recursos. Os fundos ficam na corretora escolhida, sujeita à regulação do país dela, sem proteção da CVM ou do BCB."
  },
  {
    icon: BarChart3,
    title: "Histórico de Operações",
    description: "Histórico das estratégias disponível mediante solicitação. Resultados passados não garantem resultados futuros."
  },
  {
    icon: Layers,
    title: "Desenvolvimento On Demand",
    description: "Tem um setup próprio? Nossa equipe pode desenvolver e automatizar sua estratégia personalizada."
  }
];

export const FeatureGrid = () => {
  return (
    <Section id="features" divider>
      <Backdrop variant="grid" />

      <SectionHeader
        eyebrow="Plataforma"
        title={<>Tudo que você precisa para <span className="text-gradient-brand">operar de forma automatizada.</span></>}
        description="Um conjunto de ferramentas que reúne estratégias algorítmicas, gestão de licenças e educação — tudo sem que o seu capital saia da sua própria conta de corretora. Comece quando quiser, pare quando quiser. Seu dinheiro, suas regras."
      />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map(({ icon: Icon, title, description }, idx) => (
          <Reveal key={title} delay={idx * 80} className="h-full">
            <div className="glass-card glass-card-hover group h-full p-7 hover:-translate-y-1 sm:p-8">
              <div aria-hidden className="hairline absolute inset-x-6 -top-px opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
              <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] transition-colors duration-500 group-hover:border-brand-green/40">
                <Icon size={20} className="text-brand-green" />
              </div>
              <h3 className="mb-3 text-lg font-semibold text-white sm:text-xl">{title}</h3>
              <p className="text-sm leading-relaxed text-brand-muted sm:text-base">{description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};
