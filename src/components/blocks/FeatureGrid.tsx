import { motion } from 'framer-motion';
import { Cpu, Shield, Zap, BarChart3, Key, Layers } from 'lucide-react';
import { Section } from '@/components/layout/Section';

const FEATURES = [
  {
    icon: <Cpu className="w-8 h-8 text-brand-green" />,
    title: "Expert Advisors",
    description: "Acesse nossa biblioteca de robôs verificados. Plugue, ative e lucre."
  },
  {
    icon: <Key className="w-8 h-8 text-brand-gold" />,
    title: "Licenciamento Instantâneo",
    description: "Gerencie suas licenças em tempo real. Ative ou revogue acesso instantaneamente."
  },
  {
    icon: <Zap className="w-8 h-8 text-blue-500" />,
    title: "Latência Ultra-Baixa",
    description: "Construído em infraestrutura de alta performance para garantir execução no preço perfeito."
  },
  {
    icon: <Shield className="w-8 h-8 text-purple-500" />,
    title: "Segurança Verificada",
    description: "Criptografia de nível institucional protege suas estratégias e dados pessoais."
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-orange-500" />,
    title: "Analytics em Tempo Real",
    description: "Acompanhe a performance de todas as suas contas conectadas em um único painel."
  },
  {
    icon: <Layers className="w-8 h-8 text-pink-500" />,
    title: "Construtor de Estratégias",
    description: "Desenhe sua própria lógica personalizada sem escrever uma única linha de código."
  }
];

export const FeatureGrid = () => {
  return (
    <Section id="features" className="bg-brand-dark relative overflow-hidden py-32">
       {/* Background Grid */}
       <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
       <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent" />
       
      <div className="text-center max-w-2xl mx-auto mb-16 relative z-10">
         <h2 className="text-3xl md:text-5xl font-bold bg-white bg-clip-text text-transparent mb-6">
           Tudo que você precisa para <span className="text-brand-green">automatizar</span> riqueza.
         </h2>
         <p className="text-gray-400 text-lg">
           De estratégias de algotrading testadas a um gerenciamento de licenças perfeito. AFK Trade é o sistema operacional completo para traders modernos.
         </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         {FEATURES.map((feature, idx) => (
           <motion.div
             key={idx}
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: idx * 0.1 }}
             className="p-8 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-brand-green/30 transition-all group"
           >
              <div className="w-14 h-14 rounded-xl bg-brand-dark border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
           </motion.div>
         ))}
      </div>
    </Section>
  );
};
