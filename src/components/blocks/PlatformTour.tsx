import { Section } from '@/components/layout/Section';
import { BookOpen, ShoppingBag, Key, Users, LayoutDashboard, PlayCircle } from 'lucide-react';

const MODULES = [
  {
    icon: <LayoutDashboard size={24} />,
    title: "Dashboard Central",
    description: "Visão consolidada de todas as suas contas e performance em tempo real."
  },
  {
    icon: <PlayCircle size={24} />,
    title: "Tutoriais Passo a Passo",
    description: "Guias detalhados do zero ao avançado. Aprenda a configurar seu VPS e ativar seu primeiro robô em minutos."
  },
  {
    icon: <ShoppingBag size={24} />,
    title: "Catálogo de Estratégias",
    description: "Acesse nosso marketplace de robôs verificados. Filtre por risco, retorno e ativo."
  },
  {
    icon: <Key size={24} />,
    title: "Gestão de Licenças",
    description: "Painel administrativo para ativar, pausar ou transferir suas licenças de trading instantaneamente."
  },
  {
    icon: <Users size={24} />,
    title: "Hub de Parceiros",
    description: "Área exclusiva com links de indicação, banners de marketing e relatórios de comissões."
  },
  {
    icon: <BookOpen size={24} />,
    title: "Documentação Técnica",
    description: "Parâmetros detalhados de cada algoritmo para quem deseja customizar suas operações."
  }
];

export const PlatformTour = () => {
    return (
      <Section className="bg-brand-dark relative z-10 border-t border-white/5">
        <div className="text-center mb-16">
          <span className="text-brand-green font-bold tracking-wider uppercase text-sm mb-4 block">
            Por dentro da Plataforma
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Controle total. <span className="text-gray-500">Zero complexidade.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Uma área de membros desenhada para te dar autonomia. Tudo que você precisa em um único login.
          </p>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MODULES.map((module, index) => (
            <div 
              key={index}
              className="group p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-brand-green/30 hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-brand-dark rounded-xl flex items-center justify-center text-brand-green mb-4 group-hover:scale-110 transition-transform">
                {module.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{module.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {module.description}
              </p>
            </div>
          ))}
        </div>
      </Section>
    );
  };
