import { motion } from 'framer-motion';
import { ArrowRight, Users, DollarSign, Globe, BarChart2, Share2, FileImage, Link2, ChevronRight } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Backdrop } from '@/components/ui/Backdrop';
import { Reveal } from '@/components/ui/Reveal';
import { useNavigate } from 'react-router-dom';

// Rampa monocromática: o funil "acende" em verde conforme avança
const PIPELINE_STAGES = [
  { label: 'Novo Lead', color: 'rgb(34 197 94 / 0.3)', count: 12 },
  { label: 'Contatado', color: 'rgb(34 197 94 / 0.5)', count: 8 },
  { label: 'Negociando', color: 'rgb(34 197 94 / 0.7)', count: 4 },
  { label: 'Convertido', color: '#22c55e', count: 21 },
];

const MATERIALS = [
  { icon: <FileImage size={16} />, title: 'Kit de Redes Sociais', desc: 'Posts prontos para Instagram, Facebook e WhatsApp' },
  { icon: <FileImage size={16} />, title: 'Apresentação PDF', desc: 'Pitch deck profissional para apresentar a plataforma' },
  { icon: <Link2 size={16} />, title: 'Links Personalizados', desc: 'URLs únicas com rastreamento de conversão' },
  { icon: <Share2 size={16} />, title: 'Materiais de Vídeo', desc: 'Roteiros e vídeos curtos para conteúdo digital' },
];

const BENEFITS = [
  {
    icon: DollarSign,
    title: 'Participação por Volume',
    desc: 'Calculada sobre o volume operado pelos clientes que você indicar diretamente, conforme o regulamento do programa.',
  },
  {
    icon: Globe,
    title: 'Rebate de Corretora',
    desc: 'Parte do rebate pago pela corretora sobre o volume dos seus indicados diretos. Esse conflito de interesse é informado ao cliente.',
  },
  {
    icon: Users,
    title: 'White Label',
    desc: 'Licencie a plataforma com a sua marca para atender os seus próprios clientes, em condições definidas em contrato.',
  },
];

export const Partners = () => {
  const navigate = useNavigate();

  return (
    <Section id="partners" divider>
      <Backdrop variant="grid" />

      <SectionHeader
        eyebrow="Programa de Parceiros"
        title={<>Cresça junto com a <span className="text-gradient-brand">Trader AFK.</span></>}
        description="Torne-se parceiro, indique traders e gerencie seus leads com um painel profissional. A participação é calculada sobre o volume operado pelos clientes que você indicar diretamente."
      />

      {/* Benefits row */}
      <div className="mb-5 grid grid-cols-1 gap-5 md:grid-cols-3">
        {BENEFITS.map(({ icon: Icon, title, desc }, idx) => (
          <Reveal key={title} delay={idx * 80} className="h-full">
            <div className="glass-card glass-card-hover group h-full p-7 hover:-translate-y-1">
              <div aria-hidden className="hairline absolute inset-x-6 -top-px opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] transition-colors duration-500 group-hover:border-brand-green/40">
                <Icon size={20} className="text-brand-green" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white">{title}</h3>
              <p className="text-sm leading-relaxed text-brand-muted">{desc}</p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Two columns: Pipeline + Marketing Materials */}
      <div className="mb-14 grid grid-cols-1 gap-5 lg:grid-cols-2">
        {/* Pipeline preview */}
        <Reveal className="h-full">
          <div className="glass-card h-full p-6 sm:p-8">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03]">
                <BarChart2 size={16} className="text-brand-green" />
              </div>
              <h3 className="text-lg font-semibold text-white">Pipeline de Vendas</h3>
            </div>
            <p className="mb-6 text-sm text-brand-muted">Gerencie seus prospects em tempo real com visão do funil completo.</p>

            <div className="space-y-3">
              {PIPELINE_STAGES.map((stage) => (
                <div key={stage.label} className="flex items-center gap-3">
                  <span className="w-24 shrink-0 text-sm text-brand-muted">{stage.label}</span>
                  <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/[0.06]">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(stage.count / 21) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      className="h-full rounded-full"
                      style={{ background: stage.color }}
                    />
                  </div>
                  <span className="w-6 text-right font-mono text-sm text-white">{stage.count}</span>
                </div>
              ))}
            </div>

            <p className="mt-5 text-xs text-brand-subtle">
              Acompanhe: Novo → Contatado → Negociando → Convertido
            </p>
          </div>
        </Reveal>

        {/* Marketing Materials */}
        <Reveal delay={80} className="h-full">
          <div className="glass-card h-full p-6 sm:p-8">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03]">
                <Share2 size={16} className="text-brand-green" />
              </div>
              <h3 className="text-lg font-semibold text-white">Materiais de Marketing</h3>
            </div>
            <p className="mb-6 text-sm text-brand-muted">Tudo pronto para você divulgar sem precisar criar nada do zero.</p>

            <div className="space-y-1">
              {MATERIALS.map((mat) => (
                <div
                  key={mat.title}
                  className="group flex cursor-pointer items-start gap-3 rounded-xl border border-transparent p-3 transition-colors duration-300 hover:border-white/[0.06] hover:bg-white/[0.03]"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-brand-green transition-colors duration-300 group-hover:border-brand-green/40">
                    {mat.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-white">{mat.title}</p>
                    <p className="mt-0.5 text-xs text-brand-subtle">{mat.desc}</p>
                  </div>
                  <ChevronRight size={14} className="mt-1 shrink-0 text-white/20 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-brand-green" />
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      {/* CTA */}
      <Reveal className="text-center">
        <Button size="lg" onClick={() => navigate('/partners')}>
          Quero Ser Parceiro
          <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
        </Button>
        <p className="mt-3 text-sm text-brand-subtle">Acesso ao painel completo após aprovação do cadastro</p>
        <p className="mx-auto mt-2 max-w-2xl text-xs leading-relaxed text-brand-subtle">
          Não há remuneração por recrutar outros parceiros nem valor mínimo garantido. A remuneração depende do volume efetivamente operado pelos clientes indicados.
        </p>
      </Reveal>
    </Section>
  );
};
