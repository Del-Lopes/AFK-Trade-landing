import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { CheckCircle2, XCircle, Clock, Coffee, Activity, Zap } from 'lucide-react';
import { clsx } from 'clsx';

export const Comparison = () => {
  return (
    <Section className="bg-gradient-to-b from-brand-dark to-slate-900 py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold bg-white bg-clip-text text-transparent mb-6">
          A Evolução do Trader
        </h2>
        <p className="text-white text-lg max-w-2xl mx-auto">
          A diferença entre trabalhar para o mercado e fazer o mercado trabalhar para você.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* The Old Way */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative bg-white/5 border border-white/5 rounded-2xl p-8 overflow-hidden grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-500"
        >
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Activity size={100} />
          </div>
          
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center text-red-500">
              <XCircle size={24} />
            </div>
            <h3 className="text-2xl font-bold text-white">O Trader "Tela"</h3>
          </div>

          <ul className="space-y-6">
            <ListItem icon={<Clock size={20} />} text="12 horas/dia analisando gráficos" bad />
            <ListItem icon={<Activity size={20} />} text="Estresse emocional constante" bad />
            <ListItem icon={<XCircle size={20} />} text="Perde oportunidades enquanto dorme" bad />
            <ListItem icon={<XCircle size={20} />} text="Decisões baseadas em medo/ganância" bad />
          </ul>
        </motion.div>

        {/* The AFK Way */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative bg-brand-green/5 border border-brand-green/20 rounded-2xl p-8 overflow-hidden shadow-2xl shadow-brand-green/10"
        >
          <div className="absolute top-0 right-0 p-4 opacity-10 text-brand-green">
            <Zap size={100} />
          </div>

          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-brand-green/20 flex items-center justify-center text-brand-green">
              <CheckCircle2 size={24} />
            </div>
            <h3 className="text-2xl font-bold text-white">O Trader AFK</h3>
          </div>

          <ul className="space-y-6">
            <ListItem icon={<Coffee size={20} />} text="5 min/dia para checar resultados" good />
            <ListItem icon={<CheckCircle2 size={20} />} text="100% Racional e Sistemático" good />
            <ListItem icon={<Zap size={20} />} text="Opera 24/7 em alta frequência" good />
            <ListItem icon={<CheckCircle2 size={20} />} text="Liberdade geográfica e temporal" good />
          </ul>
        </motion.div>
      </div>
    </Section>
  );
};

const ListItem = ({ icon, text, good = false, bad = false }: { icon: React.ReactNode, text: string, good?: boolean, bad?: boolean }) => (
  <li className="flex items-center gap-4">
    <div className={clsx(
      "p-2 rounded-lg",
      good && "bg-brand-green/10 text-brand-green",
      bad && "bg-red-500/10 text-red-400",
      !good && !bad && "bg-white/5 text-white"
    )}>
      {icon}
    </div>
    <span className={clsx(
      "text-lg",
      good ? "text-white font-medium" : "text-white"
    )}>{text}</span>
  </li>
);
