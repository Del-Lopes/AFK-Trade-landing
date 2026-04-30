import { motion } from 'framer-motion';
import { ArrowRight, Users, DollarSign, Globe, BarChart2, Share2, FileImage, Link2, ChevronRight } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';
import { useNavigate } from 'react-router-dom';

const PIPELINE_STAGES = [
  { label: 'Novo Lead', color: '#60a5fa', count: 12 },
  { label: 'Contatado', color: '#a78bfa', count: 8 },
  { label: 'Negociando', color: '#f59e0b', count: 4 },
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
    icon: <DollarSign className="w-10 h-10 text-brand-green" />,
    title: 'Performance Fee',
    desc: 'Ganhe até 10% do lucro gerado em todas as suas indicações convertidas.',
  },
  {
    icon: <Globe className="w-10 h-10 text-blue-400" />,
    title: 'Rebate de Corretora',
    desc: 'Participação nos spreads e comissões das corretoras parceiras.',
  },
  {
    icon: <Users className="w-10 h-10 text-brand-gold" />,
    title: 'White Label',
    desc: 'Participe dos lucros gerados pela venda de licenças para novos parceiros da sua rede.',
  },
];

export const Partners = () => {
  const navigate = useNavigate();

  return (
    <Section id="partners" className="bg-brand-dark py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-brand-green/8 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-green/20 to-transparent" />

      {/* Header */}
      <div className="text-center mb-20 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white/60 text-sm font-medium mb-6">
          <Users size={14} />
          <span>Programa de Parceiros</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Cresça junto com a <span className="text-brand-green">Trader AFK.</span>
        </h2>
        <p className="text-white/60 text-lg max-w-2xl mx-auto">
          Torne-se parceiro, indique traders, gerencie seus leads com um painel profissional e ganhe comissões recorrentes. Renda passiva de verdade.
        </p>
      </div>

      {/* Benefits row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 relative z-10">
        {BENEFITS.map((b, idx) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white/5 p-7 rounded-2xl border border-white/10 hover:border-brand-green/20 transition-all duration-300 group"
          >
            <div className="mb-4 group-hover:scale-110 transition-transform duration-300 w-fit">{b.icon}</div>
            <h3 className="text-xl font-bold text-white mb-2">{b.title}</h3>
            <p className="text-sm text-white/60 leading-relaxed">{b.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Two columns: Pipeline + Marketing Materials */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14 relative z-10">
        {/* Pipeline preview */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-2xl bg-white/5 border border-white/10"
        >
          <div className="flex items-center gap-2 mb-6">
            <BarChart2 size={18} className="text-brand-green" />
            <h3 className="text-lg font-bold text-white">Pipeline de Vendas</h3>
          </div>
          <p className="text-sm text-white/50 mb-6">Gerencie seus prospects em tempo real com visão do funil completo.</p>

          <div className="space-y-3">
            {PIPELINE_STAGES.map((stage) => (
              <div key={stage.label} className="flex items-center gap-3">
                <span className="text-sm text-white/60 w-24 shrink-0">{stage.label}</span>
                <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(stage.count / 21) * 100}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="h-full rounded-full"
                    style={{ background: stage.color }}
                  />
                </div>
                <span className="text-sm font-bold w-6 text-right" style={{ color: stage.color }}>{stage.count}</span>
              </div>
            ))}
          </div>

          <p className="text-xs text-white/30 mt-5">
            Acompanhe: Novo → Contatado → Negociando → Convertido
          </p>
        </motion.div>

        {/* Marketing Materials */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-2xl bg-white/5 border border-white/10"
        >
          <div className="flex items-center gap-2 mb-6">
            <Share2 size={18} className="text-brand-gold" />
            <h3 className="text-lg font-bold text-white">Materiais de Marketing</h3>
          </div>
          <p className="text-sm text-white/50 mb-6">Tudo pronto para você divulgar sem precisar criar nada do zero.</p>

          <div className="space-y-3">
            {MATERIALS.map((mat) => (
              <div key={mat.title} className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors cursor-pointer group">
                <div className="w-9 h-9 rounded-lg bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold shrink-0">
                  {mat.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-white">{mat.title}</p>
                  <p className="text-xs text-white/40 mt-0.5">{mat.desc}</p>
                </div>
                <ChevronRight size={14} className="text-white/20 group-hover:text-brand-gold transition-colors mt-1 shrink-0" />
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* CTA */}
      <div className="text-center relative z-10">
        <Button size="lg" onClick={() => navigate('/partners')}>
          Quero Ser Parceiro <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
        <p className="text-sm text-white/40 mt-3">Acesso ao painel completo após aprovação do cadastro</p>
      </div>
    </Section>
  );
};
