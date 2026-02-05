import { ArrowRight, Check, X } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';

export const Pricing = () => {
  return (
    <Section id="pricing" className="py-24 bg-brand-dark relative">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px] opacity-50" />
      
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Comece agora. <span className="text-brand-green">Sem custos fixos.</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Nosso modelo de negócios é desenhado para o seu sucesso. Escolha como quer operar.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto relative z-10 px-4">
        {/* Card: Particular (Standard) */}
        <div className="border border-white/10 rounded-2xl p-8 bg-white/5 flex flex-col grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300">
          <div className="mb-8">
            <h3 className="text-xl font-bold text-white mb-2">Conta Particular</h3>
            <p className="text-sm text-gray-400">Para quem já tem conta em corretora</p>
          </div>
          
          <div className="mb-8">
            <span className="text-4xl font-bold text-white">R$ 97</span>
            <span className="text-gray-500">/mês</span>
          </div>

          <ul className="space-y-4 mb-8 flex-1">
            <ListItem>Acesso aos Robôs</ListItem>
            <ListItem>Suporte via Ticket</ListItem>
            <ListItem negative>VPS não inclusa (custo extra)</ListItem>
            <ListItem negative>Taxa de adesão R$ 200</ListItem>
          </ul>

          <Button variant="outline" className="w-full mt-auto" disabled>
            Em breve
          </Button>
        </div>

        {/* Card: Parceiro (Featured) */}
        <div className="border-2 border-brand-green rounded-2xl p-8 bg-brand-green/5 flex flex-col relative transform md:scale-105 shadow-2xl shadow-brand-green/20">
          <div className="absolute top-0 right-0 bg-brand-green text-brand-dark text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
            RECOMENDADO
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-bold text-white mb-2">Conta Parceira</h3>
            <p className="text-sm text-brand-green/80">Via Corretora Parceira</p>
          </div>
          
          <div className="mb-8">
            <span className="text-4xl font-bold text-white">R$ 0</span>
            <span className="text-gray-500">/mês</span>
          </div>

          <ul className="space-y-4 mb-8 flex-1">
            <ListItem active>Acesso ilimitado aos Robôs</ListItem>
            <ListItem active>VPS Institucional Inclusa (Grátis)</ListItem>
            <ListItem active>Suporte VIP no WhatsApp</ListItem>
            <ListItem active>Zero taxa de adesão</ListItem>
          </ul>

          <Button className="w-full mt-auto" onClick={() => window.open('https://afktrade.com.br', '_blank')}>
            Criar Conta Grátis <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          
          <p className="text-xs text-center text-gray-500 mt-4">
            *A corretora paga sua licença enquanto você operar.
          </p>
        </div>
      </div>
    </Section>
  );
};

const ListItem = ({ children, active, negative }: { children: React.ReactNode; active?: boolean; negative?: boolean }) => {
  return (
    <li className={`flex items-start gap-3 text-sm ${active ? 'text-white' : 'text-gray-400'}`}>
      <div className={`mt-0.5 rounded-full p-0.5 ${active ? 'bg-brand-green text-brand-dark' : negative ? 'bg-red-500/20 text-red-500' : 'bg-gray-800 text-gray-400'}`}>
        {negative ? <X size={12} /> : <Check size={12} />}
      </div>
      <span className={negative ? 'opacity-70' : ''}>{children}</span>
    </li>
  );
};
