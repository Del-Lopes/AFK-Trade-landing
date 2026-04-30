import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Bot, Zap } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';

const GUARANTEES = [
  { icon: <ShieldCheck size={16} />, text: 'Cadastro 100% gratuito' },
  { icon: <Bot size={16} />, text: 'Robôs prontos para operar' },
  { icon: <Zap size={16} />, text: 'Suporte incluso' },
];

export const FinalCTA = () => {
  return (
    <Section className="py-32 relative overflow-hidden bg-brand-dark">
      {/* Background ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-brand-green/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-brand-emerald/8 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(34,197,94,0.04),transparent_60%)]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-green/10 border border-brand-green/20 rounded-full text-brand-green text-sm font-medium mb-8">
            <span className="w-1.5 h-1.5 bg-brand-green rounded-full animate-pulse" />
            <span>Vagas de lançamento disponíveis</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Comece a operar no <br />
            <span className="text-brand-green drop-shadow-[0_0_20px_rgba(34,197,94,0.4)]">piloto automático hoje.</span>
          </h2>

          <p className="text-xl text-white/65 max-w-2xl mx-auto mb-12 leading-relaxed">
            Crie sua conta, escolha seu robô e ative a licença MT5. Em menos de uma hora você pode ter seu primeiro Expert Advisor operando por você.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="shadow-[0_0_40px_rgba(34,197,94,0.25)] hover:shadow-[0_0_60px_rgba(34,197,94,0.35)] transition-shadow"
              onClick={() => window.open('https://app.traderafk.com/register', '_blank')}
            >
              Criar Minha Conta Grátis <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => window.open('https://app.traderafk.com', '_blank')}
            >
              Acessar a Plataforma
            </Button>
          </div>

          {/* Guarantees */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {GUARANTEES.map((g) => (
              <div key={g.text} className="flex items-center gap-2 text-white/50 text-sm">
                <span className="text-brand-green">{g.icon}</span>
                {g.text}
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="mt-16 pt-10 border-t border-white/5">
            <p className="text-xs text-white/25 max-w-2xl mx-auto leading-relaxed">
              Trading em forex e ativos financeiros envolve risco substancial e não é adequado para todos os investidores. Performance passada não garante resultados futuros. Invista apenas o que você pode perder.
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};
