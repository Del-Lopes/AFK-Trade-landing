import { ArrowRight, Check, X } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';

export const Pricing = () => {
  return (
    <Section id="pricing" className="py-24 bg-brand-dark relative">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px] opacity-50" />
      
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Oferta de <span className="text-brand-green">Lançamento</span>
        </h2>
        <p className="text-white text-lg max-w-2xl mx-auto">
          Garanta seu acesso vitalício ou antecipado. Condição exclusiva para os membros fundadores.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto relative z-10 px-4">
        {/* Card: Standard Info (Future Price) */}
        <div className="border border-white/10 rounded-2xl p-8 bg-white/5 flex flex-col transition-all duration-300">
          <div className="mb-8">
            <h3 className="text-xl font-bold text-white mb-2">Membro AFK</h3>
            <p className="text-sm text-white">Valor padrão após o lote promocional</p>
          </div>
          
          <div className="mb-8">
            <span className="text-4xl font-bold text-white">R$ 97</span>
            <span className="text-white">/ano</span>
          </div>

          <ul className="space-y-4 mb-8 flex-1">
            <ListItem>Acesso ao catálogo de estratégias</ListItem>
            <ListItem>Acesso à biblioteca de cursos</ListItem>
            <ListItem>Atualizações constantes</ListItem>
            <ListItem negative>Renovação anual grátis</ListItem>
          </ul>

          <Button variant="outline" className="w-full mt-auto" disabled>
            Aguarde o próximo lote
          </Button>
        </div>

        {/* Card: Promo Launch (Scarcity) */}
        <div className="border-2 border-brand-green rounded-2xl p-8 bg-brand-green/5 flex flex-col relative transform md:scale-105 shadow-2xl shadow-brand-green/20">
          <div className="absolute top-0 right-0 bg-brand-green text-brand-dark text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg animate-pulse">
            RESTAM POUCAS VAGAS
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-bold text-white mb-2">Condição de Lançamento</h3>
            <p className="text-sm text-brand-green/80">Exclusivo para os 100 primeiros</p>
          </div>
          
          <div className="mb-8">
            <span className="text-4xl font-bold text-white">R$ 0</span>
            <span className="text-white">/vitalício*</span>
          </div>

          <ul className="space-y-4 mb-8 flex-1">
            <ListItem active>Acesso Gratuito Vitalício</ListItem>
            <ListItem active>Acesso Imediato ao Ecossistema</ListItem>
            <ListItem active>Acesso à biblioteca de cursos</ListItem>
            <ListItem active>Condições especiais dos primeiros parceiros</ListItem>
          </ul>

          <div className="mb-6 bg-brand-dark/50 rounded-lg p-3 border border-white/10">
             <div className="flex justify-between text-xs text-gray-400 mb-1">
                <span>Vagas Preenchidas</span>
                <span>63%</span>
             </div>
             <div className="w-full bg-gray-700 rounded-full h-1.5">
                <div className="bg-brand-green h-1.5 rounded-full" style={{ width: '63%' }}></div>
             </div>
          </div>

          <Button className="w-full mt-auto" onClick={() => window.open('https://app.afktrade.com.br', '_blank')}>
            Garantir Minha Vaga Grátis <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </Section>
  );
};

const ListItem = ({ children, active, negative }: { children: React.ReactNode; active?: boolean; negative?: boolean }) => {
  return (
    <li className={`flex items-start gap-3 text-sm ${active ? 'text-white' : 'text-white'}`}>
      <div className={`mt-0.5 rounded-full p-0.5 ${active ? 'bg-brand-green text-brand-dark' : negative ? 'bg-red-500/20 text-red-500' : 'bg-white/10 text-white'}`}>
        {negative ? <X size={12} /> : <Check size={12} />}
      </div>
      <span className={negative ? 'opacity-70' : ''}>{children}</span>
    </li>
  );
};
