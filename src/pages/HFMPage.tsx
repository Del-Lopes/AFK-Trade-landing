
import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Section } from '@/components/layout/Section';
import { Shield, TrendingUp, Users, Globe, ArrowRight, CheckCircle } from 'lucide-react';

export const HFMPage = () => {
  return (
    <div className="min-h-screen bg-brand-dark text-white selection:bg-brand-green/30 font-sans">
      <Navbar />

      <main>
        {/* Hero Section */}
        <Section className="pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/10 border border-brand-green/20 text-brand-green text-sm font-medium mb-6">
              <Shield size={14} />
              <span>Parceria Oficial</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight flex items-center justify-center gap-4 flex-wrap">
              AFK Trade <span className="text-gray-500 mx-2">×</span> 
              <img src="/partners/HFM_Logo.webp" alt="HFM" className="h-12 md:h-20 object-contain" />
            </h1>
            
            <p className="text-xl text-gray-400 max-w-2xl mb-10">
              Unimos nossa tecnologia proprietária à infraestrutura de uma das maiores corretoras do mundo para oferecer a melhor experiência de copy trading.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://www.hfm.com/int/pt/copy-trading" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-brand-green text-brand-dark font-bold hover:bg-brand-green/90 transition-colors"
              >
                Conheça o HFcopy
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </Section>

        {/* Partnership Details */}
        <Section className="bg-white/5 border-y border-white/5">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Por que escolhemos a HFM?</h2>
              <div className="space-y-6">
                <FeatureItem 
                  title="Execução Ultra-rápida" 
                  description="Servidores otimizados para garantir que suas ordens sejam executadas no melhor preço possível."
                />
                <FeatureItem 
                  title="Regulação Global" 
                  description="Uma corretora multipremiada e regulada por diversas autoridades financeiras globais, garantindo segurança para seu capital."
                />
                <FeatureItem 
                  title="Spreads Competitivos" 
                  description="Condições de negociação favoráveis que maximizam o retorno das nossas estratégias automatizadas."
                />
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-brand-dark/50 p-8">
               <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/10 rounded-full blur-3xl -z-10" />
               <div className="flex flex-col items-center justify-center text-center space-y-6">
                  <div className="w-32 h-32 bg-white/5 rounded-full flex items-center justify-center mb-4 p-6 border border-white/10 backdrop-blur-sm">
                    <img src="/partners/HFM_Logo.webp" alt="HFM" className="w-full h-full object-contain" />
                  </div>
                  <h3 className="text-2xl font-bold">Parceria Estratégica</h3>
                  <p className="text-gray-400">
                    A AFK Trade utiliza a infraestrutura HFcopy para distribuir suas estratégias de forma transparente e segura.
                  </p>
               </div>
            </div>
          </div>
        </Section>

        {/* HFcopy Section */}
        <Section>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">HF copy: O Poder do Social Trading</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Copie automaticamente as operações dos nossos algoritmos diretamente na sua conta HFM.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card 
              icon={<Users className="w-8 h-8 text-brand-green" />}
              title="Para Seguidores"
              description="Ideal para quem quer investir mas não tem tempo ou experiência para operar. Siga a AFK Trade e replique nossos resultados."
            />
            <Card 
              icon={<TrendingUp className="w-8 h-8 text-brand-green" />}
              title="Controle Total"
              description="Mantenha o controle da sua conta. Pause, pare ou retire seus fundos a qualquer momento. Você está no comando."
            />
             <Card 
              icon={<Globe className="w-8 h-8 text-brand-green" />}
              title="Acesso Global"
              description="Junte-se a uma comunidade global de traders e investidores com acesso aos mercados mundiais 24/5."
            />
          </div>

          <div className="mt-16 bg-brand-green/5 rounded-2xl p-8 border border-brand-green/20">
             <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                   <h3 className="text-2xl font-bold mb-2">Pronto para começar?</h3>
                   <p className="text-gray-400">Abra sua conta na HFM e conecte-se às estratégias da AFK Trade hoje mesmo.</p>
                </div>
                <a 
                  href="https://www.hfm.com/int/pt/copy-trading" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-8 py-3 rounded-lg bg-white text-brand-dark font-bold hover:bg-gray-100 transition-colors whitespace-nowrap"
                >
                  Abrir Conta HFM
                </a>
             </div>
          </div>
        </Section>

      </main>
      <Footer />
    </div>
  );
};

const FeatureItem = ({ title, description }: { title: string, description: string }) => (
  <div className="flex gap-4">
    <div className="mt-1">
      <CheckCircle className="w-6 h-6 text-brand-green" />
    </div>
    <div>
      <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
  </div>
);

const Card = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-green/30 transition-colors">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);
