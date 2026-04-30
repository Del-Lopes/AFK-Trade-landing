import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Bot, BookOpen, Key } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/layout/Section';

export const Hero = () => {
  return (
    <Section className="pt-32 pb-20 md:pt-40 md:pb-32 min-h-screen flex items-center relative">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <motion.div
          animate={{ y: [-30, 30, -30], x: [-20, 20, -20], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] right-[10%] w-40 h-40 bg-brand-emerald/30 rounded-full blur-[60px] mix-blend-screen"
        />
        <motion.div
          animate={{ y: [40, -40, 40], x: [30, -30, 30], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[30%] left-[5%] w-56 h-56 bg-brand-green/15 rounded-full blur-[70px] mix-blend-screen"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-brand-green text-sm font-medium">
            <ShieldCheck size={14} />
            <span>Plataforma Completa de Trading Algorítmico</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight text-white drop-shadow-[0_0_25px_rgba(34,197,94,0.4)]">
            Opere no<br />
            <span className="relative inline-block">
              <span className="absolute inset-0 text-[#22c55e] blur-lg animate-pulse opacity-80 select-none pointer-events-none" aria-hidden="true">Piloto Automático.</span>
              <span className="text-[#22c55e] drop-shadow-[0_0_15px_rgba(34,197,94,0.8)] relative z-10">Piloto Automático.</span>
            </span>
          </h1>

          <p className="text-white text-lg max-w-lg leading-relaxed">
            Robôs de trading, licenças MT5, educação completa e programa de parceiros — tudo em uma única plataforma. Enquanto você vive sua vida, nossos algoritmos trabalham por você 24/7.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" onClick={() => window.open('https://app.traderafk.com/register', '_blank')}>
              Comece Agora — É Grátis <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => window.open('https://app.traderafk.com', '_blank')}>
              Acessar a Plataforma
            </Button>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap gap-3 pt-2">
            {[
              { icon: <Bot size={13} />, text: '4 Robôs de Trading' },
              { icon: <Key size={13} />, text: 'Licenças MT5' },
              { icon: <BookOpen size={13} />, text: 'Educação Completa' },
            ].map((pill) => (
              <span key={pill.text} className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/70">
                <span className="text-brand-green">{pill.icon}</span>
                {pill.text}
              </span>
            ))}
          </div>

          <div className="pt-8 border-t border-white/5 flex gap-8 text-white text-sm">
            <div>
              <strong className="block text-2xl text-white font-bold">100+</strong>
              <span>Traders Ativos</span>
            </div>
            <div>
              <strong className="block text-2xl text-white font-bold">4</strong>
              <span>Expert Advisors</span>
            </div>
            <div>
              <strong className="block text-2xl text-white font-bold">24/7</strong>
              <span>Operando</span>
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
          <div className="relative rounded-2xl border border-white/10 bg-brand-dark/50 backdrop-blur-xl shadow-2xl shadow-brand-green/10 p-2 overflow-hidden aspect-[4/3] group">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none z-10" />

            <div className="h-full w-full bg-slate-900 rounded-xl overflow-hidden relative border border-white/5 flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-700">
              <img
                src="/images/hero-dashboard.png"
                alt="Trader AFK Dashboard Interface"
                className="w-full h-full object-cover opacity-90"
              />

              {/* Floating Card Element */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-6 right-6 bg-slate-900/90 backdrop-blur-md border border-brand-green/20 p-4 rounded-xl shadow-xl w-48 z-20"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-white">Lucro (24h)</span>
                  <span className="text-xs text-brand-green font-bold">+2.4%</span>
                </div>
                <div className="h-1 bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full w-[70%] bg-brand-green rounded-full shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                </div>
              </motion.div>

              {/* Robot Active Badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-6 left-6 bg-slate-900/90 backdrop-blur-md border border-brand-green/30 px-3 py-2 rounded-lg shadow-xl z-20 flex items-center gap-2"
              >
                <span className="w-2 h-2 bg-brand-green rounded-full animate-pulse" />
                <span className="text-xs text-white font-medium">AFK Trader — Ativo</span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};
