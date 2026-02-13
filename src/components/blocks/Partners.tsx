import { ArrowRight, Users, DollarSign, Globe } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';

export const Partners = () => {
  return (
    <Section id="partners" className="bg-brand-dark py-24 relative overflow-hidden">
       {/* Background Decoration */}
       <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 grayscale"></div>
       <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-brand-green/10 blur-[100px] rounded-full pointer-events-none"></div>

       <div className="relative z-10 max-w-5xl mx-auto bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-3xl p-8 md:p-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-white text-sm font-medium mb-8">
             <Users size={16} />
             <span>Programa de Parceria</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
             Cresça junto com a <span className="text-brand-green">AFK Trade</span>.
          </h2>
          
          <p className="text-lg text-white mb-12 max-w-2xl mx-auto">
             Ganhe comissões vitalícias e recorrentes. Ecossistema de trading automatizado com alcance global. <br /> Promova para traders em mais de 100 países.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 text-left">
             <div className="bg-brand-dark/50 p-6 rounded-xl border border-white/5">
                <DollarSign className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Performance Fee</h3>
                <p className="text-sm text-white">Ganhe até 10% do lucro em todas as indicações.</p>
             </div>
             <div className="bg-brand-dark/50 p-6 rounded-xl border border-white/5">
                <Globe className="w-10 h-10 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Rebate</h3>
                <p className="text-sm text-white">Participação no lucro das corretoras.</p>
             </div>
             <div className="bg-brand-dark/50 p-6 rounded-xl border border-white/5">
                <Users className="w-10 h-10 text-brand-gold mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Licenciatura White Label</h3>
                <p className="text-sm text-white">Participe dos lucros gerados pela venda de licenças para novos parceiros.</p>
             </div>
          </div>

          <Button size="lg" onClick={() => window.open('https://afktrade.com.br', '_blank')}>
             Seja um Parceiro <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
       </div>
    </Section>
  );
};
