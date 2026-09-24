
import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Section } from '@/components/layout/Section';
import { Shield, TrendingUp, Users, Globe, ArrowRight, CheckCircle } from 'lucide-react';

import { Helmet } from 'react-helmet-async';
import { BrokerDisclaimer } from '@/components/ui/BrokerDisclaimer';

export const HantecPage = () => {
  return (
    <div className="min-h-screen bg-brand-dark text-white selection:bg-brand-green/30 font-sans">
      <Helmet>
        <title>Hantec: corretora compatível | Trader AFK</title>
        <meta name="description" content="Trader AFK e Hantec Markets: corretora compatível com o software de automação da Trader AFK para MetaTrader 5. Entenda os riscos e as condições antes de abrir conta." />
      </Helmet>
      <Navbar />

      <main>
        {/* Hero Section */}
        <Section className="pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/10 border border-brand-green/20 text-brand-green text-sm font-medium mb-6">
              <Shield size={14} />
              <span>Corretora compatível</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight flex items-center justify-center gap-4 flex-wrap">
              <div className="flex items-center gap-3">
                <img src="/images/logo-icon.png" alt="Trader AFK" className="h-12 md:h-20 w-auto object-contain" />
                <span>Trader AFK</span>
              </div>
              <span className="text-gray-500 mx-2">×</span> 
              <img src="/partners/hantec_logo.webp" alt="Hantec Logo" className="h-12 md:h-20 object-contain" />
            </h1>
            
            <p className="text-xl text-gray-400 max-w-2xl mb-10">
              O software da Trader AFK roda no MetaTrader 5 da sua conta na Hantec. Você instala, configura o risco e mantém o controle da conta o tempo todo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://hmarkets.com/live-account-pre-registration/?refid=15990&cmp=0h1j9a8a+&ent=hm" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-brand-green text-brand-dark font-bold hover:bg-brand-green/90 transition-colors"
              >
                Conheça a Hantec
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </Section>

        {/* Partnership Details */}
        <Section className="bg-white/5 border-y border-white/5">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Sobre a Hantec</h2>
              <div className="space-y-6">
                <FeatureItem 
                  title="Execução"
                  description="Infraestrutura de execução da própria corretora, sujeita às condições de mercado, como slippage e variação de spread."
                />
                <FeatureItem 
                  title="Custódia dos Fundos"
                  description="A Trader AFK não custodia recursos. Os fundos ficam na corretora escolhida, sujeita à regulação do país dela, sem proteção da CVM ou do BCB."
                />
                <FeatureItem 
                  title="Condições Competitivas" 
                  description="Spreads competitivos que favorecem a execução eficiente das estratégias automatizadas."
                />
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-brand-dark/50 p-8">
               <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/10 rounded-full blur-3xl -z-10" />
               <div className="flex flex-col items-center justify-center text-center space-y-6">
                  <div className="w-32 h-32 mb-4">
                    <img src="/partners/logohantecredondo.webp" alt="hantec Logo redondo" className="w-full h-full object-contain rounded-full" />
                  </div>
                  <h3 className="text-2xl font-bold">Como funciona</h3>
                  <p className="text-gray-400">
                    Você abre a conta diretamente com a Hantec. O software da Trader AFK é uma licença que você instala e controla no seu MetaTrader 5.
                  </p>
               </div>
            </div>
          </div>
        </Section>

        {/* Copy Trading Section */}
        <Section>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Automação na sua conta Hantec</h2>
            


            <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-10">
              Instale o software da Trader AFK no MetaTrader 5 da sua conta Hantec e configure os parâmetros de risco. Recursos de copy trading da corretora, quando existirem, são serviços da própria Hantec.
            </p>
            <div className="flex justify-center mb-12">
               <a href="https://hmarkets.com/live-account-pre-registration/?refid=15990&cmp=0h1j9a8a+&ent=hm" target="_blank" rel="noopener noreferrer">
                 <img src="/partners/hantec_copy.webp" alt="Hantec Copy Trading" className="rounded-xl border border-white/10 shadow-2xl max-w-full md:max-w-3xl hover:opacity-95 transition-opacity" />
               </a>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card 
              icon={<Users className="w-8 h-8 text-brand-green" />}
              title="Para Seguidores"
              description="Ideal para quem quer operar de forma automatizada. Configure o EA na sua conta e acompanhe as operações em tempo real."
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
                   <p className="text-gray-400">Abra sua conta na Hantec e instale o software da Trader AFK no seu MetaTrader 5, com os parâmetros de risco que você definir.</p>
                </div>
                <a 
                  href="https://hmarkets.com/live-account-pre-registration/?refid=15990&cmp=0h1j9a8a+&ent=hm" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-8 py-3 rounded-lg bg-white text-brand-dark font-bold hover:bg-gray-100 transition-colors whitespace-nowrap"
                >
                  Abrir Conta Hantec
                </a>
             </div>
          </div>

          <BrokerDisclaimer className="mt-8" />
        
          <div className="flex justify-center mt-12">
               <a href="https://hmarkets.com/live-account-pre-registration/?refid=15990&cmp=0h1j9a8a+&ent=hm" target="_blank" rel="noopener noreferrer">
                 <img src="/partners/hantec_banner.webp" alt="Hantec Banner" className="max-w-full h-auto" />
               </a>
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
