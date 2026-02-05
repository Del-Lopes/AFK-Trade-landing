import { Section } from '@/components/layout/Section';

export const Footer = () => {
  return (
    <footer className="bg-brand-dark border-t border-white/5 pt-16 pb-8">
      <Section className="py-0">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
               <img src="/images/logo-icon.png" alt="AFK Trade Logo" className="h-8 w-auto" />
               <span className="text-2xl font-bold text-white tracking-tight">
                  AFK Trade
               </span>
            </div>
            <p className="text-gray-400 max-w-sm">
              Soluções de trading automatizado para o investidor moderno. Tecnologia trabalhando ao seu favor.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6">Produto</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-brand-green transition-colors">Funcionalidades</a></li>
              <li><a href="#pricing" className="hover:text-brand-green transition-colors">Preços</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-brand-green transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-brand-green transition-colors">Termos de Serviço</a></li>
              <li><a href="#" className="hover:text-brand-green transition-colors">Aviso de Risco</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center bg-brand-dark">
           <p className="text-xs text-gray-500">
             © {new Date().getFullYear()} AFK Trade. Todos os direitos reservados.
           </p>
           <p className="text-xs text-gray-600 mt-2 md:mt-0">
             Trading envolve riscos substanciais e não é adequado para todos os investidores.
           </p>
        </div>
      </Section>
    </footer>
  );
};
