import { motion } from 'framer-motion';
import { Cpu, Shield, Zap, BarChart3, Key, Layers } from 'lucide-react';
import { Section } from '@/components/layout/Section';

const FEATURES = [
  {
    icon: <Cpu className="w-8 h-8 text-brand-green" />,
    title: "Expert Advisors",
    description: "Acesse nossa curadoria de robôs validados. Plugue, ative e comece a operar automaticamente."
  },
  {
    icon: <Key className="w-8 h-8 text-brand-gold" />,
    title: "Licenciamento",
    description: "Sistema próprio de emissão de licenças para garantir o funcionamento correto e autorizado dos seus robôs."
  },
  {
    icon: <Zap className="w-8 h-8 text-blue-500" />,
    title: "Brokers de Baixa Latência",
    description: "Trabalhamos apenas com as melhores corretoras globais para garantir execução rápida e precisa das ordens."
  },
  {
    icon: <Shield className="w-8 h-8 text-purple-500" />,
    title: "Segurança Total",
    description: "Seu dinheiro nunca sai da sua conta. As operações são executadas diretamente na sua corretora."
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-orange-500" />,
    title: "Histórico Verificado",
    description: "Transparência é nossa prioridade. Acompanhe o histórico de operações de cada estratégia via MyFxBook, com acesso direto ao registro completo."
  },
  {
    icon: <Layers className="w-8 h-8 text-pink-500" />,
    title: "Desenvolvimento On Demand",
    description: "Tem um setup vencedor? Nossa equipe pode desenvolver e automatizar sua estratégia personalizada."
  }
];

export const FeatureGrid = () => {
  return (
    <Section id="features" className="bg-brand-dark relative overflow-hidden py-32">
       {/* Background Grid */}
       <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
       <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent pointer-events-none" />
       
      <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
         <h2 className="text-3xl md:text-5xl font-bold bg-white bg-clip-text text-transparent mb-6">
           Tudo que você precisa para <span className="text-brand-green">operar de forma automatizada.</span>
         </h2>
         <p className="text-white text-lg">
           Um conjunto de ferramentas que reúne estratégias algorítmicas, gestão de licenças e educação — tudo sem que o seu capital saia da sua própria conta de corretora. Comece quando quiser, pare quando quiser. Seu dinheiro, suas regras.
         </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
         {FEATURES.map((feature, idx) => (
           <motion.div
             key={idx}
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: idx * 0.1 }}
             className="p-8 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-brand-green/50 transition-all duration-300 group hover:shadow-[0_0_30px_-5px_rgba(34,197,94,0.15)] relative overflow-hidden"
           >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="w-14 h-14 rounded-xl bg-brand-dark border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-brand-green/50 group-hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] transition-all duration-300 relative z-10">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-white leading-relaxed">{feature.description}</p>
           </motion.div>
         ))}
      </div>
    </Section>
  );
};
