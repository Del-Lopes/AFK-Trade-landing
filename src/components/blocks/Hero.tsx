import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/layout/Section';

export const Hero = () => {
  return (
    <Section className="pt-32 pb-20 md:pt-40 md:pb-32 min-h-screen flex items-center relative bg-white">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-green/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-gold/5 rounded-full blur-[120px]" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
           <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-green/10 border border-brand-green/20 rounded-full text-brand-green text-sm font-medium">
              <ShieldCheck size={14} />
              <span>Segurança e Rentabilidade</span>
           </div>
           
           <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight text-brand-dark">
             Liberdade para <br />
             <span className="bg-gradient-to-r from-brand-green to-brand-emerald bg-clip-text text-transparent">Viver.</span>
           </h1>
           
           <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
             Pare de olhar gráficos o dia toto. Deixe que os melhores robôs operem nas melhores corretoras pra você enquanto você desfruta sua vida longe das telas.
           </p>

           <div className="flex flex-col sm:flex-row gap-4">
             <Button size="lg" onClick={() => window.open('https://afktrade.com.br', '_blank')}>
               Começar a Automatizar <ArrowRight className="ml-2 w-5 h-5" />
             </Button>
           </div>
           
           <div className="pt-8 border-t border-gray-200 flex gap-8 text-gray-600 text-sm">
             <div>
               <strong className="block text-2xl text-brand-dark font-bold">100+</strong>
               <span>Traders Ativos</span>
             </div>
             <div>
               <strong className="block text-2xl text-brand-dark font-bold">$1M+</strong>
               <span>Volume Negociado</span>
             </div>
             <div>
                <strong className="block text-2xl text-brand-dark font-bold">24/7</strong>
                <span>Uptime</span>
             </div>
           </div>
        </motion.div>

        {/* Visual Mockup */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, delay: 0.2 }} 
           className="relative"
        >
           <div className="relative rounded-2xl border border-gray-200 bg-white/50 backdrop-blur-xl shadow-2xl shadow-brand-green/10 p-2 overflow-hidden aspect-[4/3] group">
              {/* Fake UI */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent pointer-events-none" />
              
              <div className="h-full w-full bg-slate-50 rounded-xl overflow-hidden relative border border-gray-200 flex items-center justify-center">
                 {/* This would be the dashboard image/video */}
                 <div className="text-center p-8">
                    <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-green animate-pulse">
                         <div className="w-20 h-20 absolute bg-brand-green/5 rounded-full animate-ping" />
                         <PlayCircle size={32} />
                    </div>
                    <p className="text-gray-600 font-medium">Passo a passo simplificado</p>
                    <span className="text-xs text-gray-500 mt-2 block">Video aulas e material de apoio</span>
                 </div>
                 
                 {/* Floating Card Element */}
                 <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-6 right-6 bg-white border border-gray-100 p-4 rounded-xl shadow-xl w-48"
                 >
                    <div className="flex justify-between items-center mb-2">
                       <span className="text-xs text-gray-500">Lucro (24h)</span>
                       <span className="text-xs text-brand-green font-bold">+2.4%</span>
                    </div>
                    <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                       <div className="h-full w-[70%] bg-brand-green rounded-full" />
                    </div>
                 </motion.div>
              </div>
           </div>
        </motion.div>
      </div>
    </Section>
  );
};
