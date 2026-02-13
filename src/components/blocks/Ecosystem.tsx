import { motion } from 'framer-motion';
import { BookOpen, PlayCircle, ArrowRight } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';

export const Ecosystem = () => {
  return (
    <Section id="academy" className="py-24 bg-gradient-to-b from-brand-dark to-[#0a101f] relative overflow-hidden">
       {/* Background Grid */}
       <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px] opacity-30 pointer-events-none" />

       <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-gold/10 border border-brand-gold/20 rounded-full text-brand-gold text-sm font-medium mb-6">
               <BookOpen size={16} />
               <span>Biblioteca AFK</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Conhecimento liberta. <br />
              <span className="text-white">Domine o mercado.</span>
            </h2>
            
            <p className="text-lg text-white mb-8 leading-relaxed">
              Entre para uma comunidade de traders de elite. Tenha acesso a conteúdos exclusivos para se manter lucrativo a longo prazo.
            </p>
            
            <ul className="space-y-4 mb-8">
               {[
                 'Como gastar direto em dólar', 
                 'Masterclass de Gestão de Risco', 
                 'Tutoriais detalhados', 
                 'Guias de depósito e saque'
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white">
                    <div className="w-6 h-6 rounded-full bg-brand-green/20 flex items-center justify-center text-brand-green">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    {item}
                  </li>
               ))}
            </ul>
            
            <Button size="lg" variant="outline" onClick={() => window.open('https://app.afktrade.com.br', '_blank')}>
               Explorar a Biblioteca <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
          
          <div className="relative">
              {/* Illustration Backdrop */}
              <div className="absolute -top-20 -right-20 w-[140%] h-[140%] opacity-40 pointer-events-none z-0">
                 <div className="absolute inset-0 bg-brand-dark/20 z-10" />
                 <img 
                    src="/images/ecosystem-library.png" 
                    alt="AFK Library" 
                    className="w-full h-full object-contain animate-pulse [animation-duration:8s]"
                 />
              </div>

              <div className="grid grid-cols-1 gap-6 relative z-10">
                  {/* Card 1: Article/Guide replacement */}
                   <motion.div 
                     initial={{ opacity: 0, x: 50 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     className="p-6 rounded-2xl bg-slate-900/60 backdrop-blur-md border border-white/10 hover:border-brand-green/40 transition-colors group cursor-pointer shadow-xl"
                  >
                     <div className="flex justify-between items-center mb-4">
                        <span className="text-xs font-bold text-brand-green uppercase tracking-wide">Novo Artigo</span>
                        <div className="p-2 bg-white/5 rounded-lg text-white group-hover:text-white transition-colors">
                           <BookOpen size={18} />
                        </div>
                     </div>
                     <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-green transition-colors">A Psicologia do Trading Automatizado</h3>
                     <p className="text-sm text-white mb-4">Por que 90% dos traders falham mesmo com sistemas vencedores, e como corrigir.</p>
                     <div className="flex items-center gap-2 text-xs text-white/70">
                        <span>5 min leitura</span>
                        <span>•</span>
                        <span>Por Time AFK</span>
                     </div>
                  </motion.div>

                  {/* Card 2: Video replacement */}
                   <motion.div 
                     initial={{ opacity: 0, x: 50 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: 0.1 }}
                     className="p-6 rounded-2xl bg-slate-900/60 backdrop-blur-md border border-white/10 hover:border-brand-gold/40 transition-colors group cursor-pointer shadow-xl"
                  >
                     <div className="flex justify-between items-center mb-4">
                        <span className="text-xs font-bold text-brand-gold uppercase tracking-wide">Aula em Vídeo</span>
                        <div className="p-2 bg-white/5 rounded-lg text-white group-hover:text-white transition-colors">
                            <PlayCircle size={18} />
                        </div>
                     </div>
                     <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-gold transition-colors">Criando conta e seguindo sua primeira estratégia</h3>
                     <p className="text-sm text-white mb-4">Guia passo a passo para atingir seus primeiros lucros longe das telas (AFK).</p>
                     <div className="flex items-center gap-2 text-xs text-white/70">
                        <span>12 min</span>
                        <span>•</span>
                        <span>3 aulas</span>
                     </div>
                  </motion.div>
              </div>
           </div>
       </div>
    </Section>
  );
};
