import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { ShoppingBag, Users, LayoutDashboard, PlayCircle, Wallet, MessageCircle } from 'lucide-react';

const MODULES = [
  {
    icon: <LayoutDashboard size={24} />,
    title: "Painel de Controle",
    description: "Gestão simplificada. Ative, pause e gerencie todas as suas estratégias conectadas em um único lugar."
  },
  {
    icon: <PlayCircle size={24} />,
    title: "Tutoriais Passo a Passo",
    description: "Guias detalhados do zero ao avançado. Aprenda tudo para iniciar a rentabilizar seu capital com poucos cliques."
  },
  {
    icon: <ShoppingBag size={24} />,
    title: "Catálogo de Estratégias",
    description: "Nosso 'Cardápio' de oportunidades. Acesse robôs validados e diversifique seu capital entre diferentes perfis de risco."
  },
  {
    icon: <Wallet size={24} />,
    title: "Acessibilidade Real",
    description: "Não exige grandes capitais. Inicie sua jornada de rentabilização automatizada com bancas a partir de R$ 250."
  },
  {
    icon: <Users size={24} />,
    title: "Hub de Parceiros",
    description: "Materiais de apoio, apresentações, links exclusivos com comissões recorrentes e vídeo aulas para parceiros."
  },
  {
    icon: <MessageCircle size={24} />,
    title: "Linguagem Simplificada",
    description: "Feito para todos. Eliminamos o 'economês' e a complexidade técnica para que qualquer pessoa possa lucrar."
  }
];

export const PlatformTour = () => {
    return (
      <Section className="bg-slate-900 relative z-10 border-t border-white/5 py-32">
        {/* Subtle Background Highlight */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-green/50 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.05),transparent_50%)] pointer-events-none" />

        <div className="text-center mb-16 relative z-10">
          <span className="text-brand-green font-bold tracking-wider uppercase text-sm mb-4 block">
            Por dentro da Plataforma
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Controle total. <span className="text-white">Zero complexidade.</span>
          </h2>
          <p className="text-white text-lg max-w-2xl mx-auto">
            Uma área de membros desenhada para te dar autonomia. Tudo que você precisa em um único login.
          </p>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {MODULES.map((module, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-brand-green/30 hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-brand-dark rounded-xl flex items-center justify-center text-brand-green mb-4 group-hover:scale-110 transition-transform">
                {module.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{module.title}</h3>
              <p className="text-white text-sm leading-relaxed">
                {module.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>
    );
  };
