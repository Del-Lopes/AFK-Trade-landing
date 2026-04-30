import { motion } from 'framer-motion';
import { BookOpen, PlayCircle, ArrowRight, FileText, GraduationCap, ChevronRight } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';

const MODULES = [
  { number: '01', title: 'Fundamentos do Trading Algorítmico', lessons: 6, duration: '1h 20min' },
  { number: '02', title: 'Configurando seu MetaTrader 5', lessons: 4, duration: '45min' },
  { number: '03', title: 'Instalando e Ativando Expert Advisors', lessons: 5, duration: '1h 05min' },
  { number: '04', title: 'Gestão de Risco e Sizing de Posição', lessons: 7, duration: '1h 40min' },
];

export const Ecosystem = () => {
  return (
    <Section id="academy" className="py-32 bg-gradient-to-b from-brand-dark to-[#0a101f] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px] opacity-30 pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-20 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-gold/10 border border-brand-gold/20 rounded-full text-brand-gold text-sm font-medium mb-6">
          <GraduationCap size={14} />
          <span>Biblioteca de Conteúdo</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Aprenda enquanto <span className="text-brand-gold">seus robôs operam.</span>
        </h2>
        <p className="text-white/70 text-lg max-w-2xl mx-auto">
          Cursos estruturados em módulos, análises de mercado publicadas regularmente e artigos educacionais — tudo dentro da plataforma, acessível em qualquer dispositivo.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start relative z-10">
        {/* Left: Course structure */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 mb-6">
            <PlayCircle size={18} className="text-brand-gold" />
            <h3 className="text-xl font-bold text-white">Cursos em Vídeo</h3>
            <span className="ml-auto text-xs text-white/40 font-medium">Estrutura Modular</span>
          </div>

          <div className="space-y-3 mb-8">
            {MODULES.map((mod, idx) => (
              <motion.div
                key={mod.number}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-brand-gold/30 hover:bg-white/8 cursor-pointer transition-all duration-200"
              >
                <span className="text-xs font-mono text-brand-gold/60 w-6 shrink-0">{mod.number}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-white truncate">{mod.title}</p>
                  <p className="text-xs text-white/40 mt-0.5">{mod.lessons} aulas · {mod.duration}</p>
                </div>
                <ChevronRight size={16} className="text-white/20 group-hover:text-brand-gold transition-colors shrink-0" />
              </motion.div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-brand-gold/5 border border-brand-gold/20 flex items-center gap-3 mb-8">
            <BookOpen size={18} className="text-brand-gold shrink-0" />
            <p className="text-sm text-white/70">
              <span className="text-white font-medium">Conteúdo gratuito e premium</span> — membros têm acesso ilimitado a todos os módulos e futuras atualizações.
            </p>
          </div>

          <Button size="lg" variant="outline" onClick={() => window.open('https://app.traderafk.com', '_blank')}>
            Explorar a Biblioteca <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>

        {/* Right: Articles + Videos */}
        <div className="space-y-5">
          {/* Article card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-slate-900/60 backdrop-blur-md border border-white/10 hover:border-brand-green/40 transition-colors group cursor-pointer shadow-xl"
          >
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs font-bold text-brand-green uppercase tracking-wide">Análise de Mercado</span>
              <div className="p-2 bg-white/5 rounded-lg text-white/60 group-hover:text-brand-green transition-colors">
                <FileText size={16} />
              </div>
            </div>
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-green transition-colors">EURUSD — Perspectivas para a semana</h3>
            <p className="text-sm text-white/60 mb-4">Análise técnica e fundamentalista com zonas de entrada, alvos e níveis de stop para o par mais negociado do mundo.</p>
            <div className="flex items-center gap-3 text-xs text-white/40">
              <span>8 min leitura</span>
              <span>·</span>
              <span>Por Time Trader AFK</span>
            </div>
          </motion.div>

          {/* Video card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-6 rounded-2xl bg-slate-900/60 backdrop-blur-md border border-white/10 hover:border-brand-gold/40 transition-colors group cursor-pointer shadow-xl"
          >
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs font-bold text-brand-gold uppercase tracking-wide">Aula em Vídeo</span>
              <div className="p-2 bg-white/5 rounded-lg text-white/60 group-hover:text-brand-gold transition-colors">
                <PlayCircle size={16} />
              </div>
            </div>
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-gold transition-colors">Instalando o AFK Trader no MT5 do zero</h3>
            <p className="text-sm text-white/60 mb-4">Passo a passo completo: desde o download até o primeiro robô operando na sua conta.</p>
            <div className="flex items-center gap-3 text-xs text-white/40">
              <span>15 min</span>
              <span>·</span>
              <span>4 aulas no módulo</span>
            </div>
          </motion.div>

          {/* Article card 2 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-6 rounded-2xl bg-slate-900/60 backdrop-blur-md border border-white/10 hover:border-purple-400/40 transition-colors group cursor-pointer shadow-xl"
          >
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs font-bold text-purple-400 uppercase tracking-wide">Artigo Educacional</span>
              <div className="p-2 bg-white/5 rounded-lg text-white/60 group-hover:text-purple-400 transition-colors">
                <BookOpen size={16} />
              </div>
            </div>
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">A Psicologia do Trading Automatizado</h3>
            <p className="text-sm text-white/60 mb-4">Por que 90% dos traders falham mesmo com sistemas vencedores, e como corrigir isso com automação.</p>
            <div className="flex items-center gap-3 text-xs text-white/40">
              <span>5 min leitura</span>
              <span>·</span>
              <span>Por Time Trader AFK</span>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};
