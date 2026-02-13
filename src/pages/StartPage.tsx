
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';
import { UserPlus, Wallet, BarChart3, Rocket, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';


export const StartPage = () => {
  const [showBrokers, setShowBrokers] = useState(false);

  const brokers = [
    { name: 'HFM', url: 'https://register.hfm.com/sv/en/new-live-account/?refid=30501091', logo: '/partners/HFM_Logo.webp' },
    { name: 'Hantec', url: '#', logo: '' }, // Add Hantec URL and logo when available
    { name: 'Vantage', url: '#', logo: '' }, // Add Vantage URL and logo when available
    { name: 'RoboForex', url: '#', logo: '' }, // Add RoboForex URL and logo when available
  ];

  return (
    <div className="min-h-screen bg-brand-dark text-white selection:bg-brand-green/30 font-sans relative">
      <Helmet>
        <title>Comece Agora | AFK Trade</title>
        <meta name="description" content="Siga nosso guia passo a passo para começar a automatizar seus investimentos com a AFK Trade. Escolha sua corretora e ative o copy trading." />
      </Helmet>
      <Navbar />

      <main>
        <Section className="pt-32 pb-20 md:pt-40 md:pb-32">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Comece a Automatizar <br />
              <span className="text-brand-green">em 5 Passos Simples</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Siga o guia abaixo para configurar sua conta e começar a copiar nossas estratégias vencedoras hoje mesmo.
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-24 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-green/0 via-brand-green/30 to-brand-green/0 -translate-x-1/2" />

            {/* Step 1 */}
            <Step 
              number="01"
              title="Escolha uma Corretora Parceira"
              description="Trabalhamos apenas com corretoras regulamentadas e de confiança global. Escolha a que melhor se adapta às suas necessidades."
              icon={<CheckCircle2 className="w-10 h-10 text-brand-green" />}
              action={
                <div className="flex flex-col items-end w-full">
                    <Button onClick={() => setShowBrokers(!showBrokers)} variant="outline" className="mt-4">
                      {showBrokers ? 'Ocultar Corretoras' : 'Ver Corretoras'} <ArrowRight className={`ml-2 w-4 h-4 transition-transform duration-300 ${showBrokers ? '-rotate-90' : 'rotate-90'}`} />
                    </Button>
                    
                    <AnimatePresence>
                        {showBrokers && (
                            <motion.div 
                                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                                animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
                                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                                className="w-full max-w-md overflow-hidden bg-brand-dark/50 border border-white/10 rounded-xl"
                            >
                                <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                     {brokers.map((broker) => (
                                      <a
                                        key={broker.name}
                                        href={broker.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex flex-col items-center justify-center p-4 bg-white/5 border border-white/5 rounded-lg hover:bg-white/10 hover:border-brand-green/30 transition-all group"
                                      >
                                        {broker.logo ? (
                                            <img src={broker.logo} alt={broker.name} className="h-6 object-contain mb-2 grayscale group-hover:grayscale-0 transition-all opacity-70 group-hover:opacity-100" />
                                        ) : (
                                            <span className="text-lg font-bold text-white mb-2">{broker.name}</span>
                                        )}
                                        <span className="text-xs text-brand-green font-medium group-hover:underline">Abrir Conta</span>
                                      </a>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
              }
              align="left"
            />

            {/* Step 2 */}
            <Step 
              number="02"
              title="Cadastre-se e Abra sua Conta"
              description="Complete o processo de registro na corretora escolhida através dos nossos links parceiros. É rápido, seguro e 100% digital. Certifique-se de verificar sua identidade."
              icon={<UserPlus className="w-10 h-10 text-brand-green" />}
              align="right"
            />

            {/* Step 3 */}
            <Step 
              number="03"
              title="Faça seu Primeiro Depósito"
              description="Adicione fundos à sua conta de negociação. Nossas estratégias são flexíveis e permitem começar com diferentes níveis de capital. Recomendamos um mínimo de $100 para melhor gestão de risco."
              icon={<Wallet className="w-10 h-10 text-brand-green" />}
              align="left"
            />

            {/* Step 4 */}
            <Step 
              number="04"
              title="Escolha uma Estratégia"
              description="Acesse a sessão de estratégias no nosso App, analise o histórico de rentabilidade e escolha a que melhor se adapta ao seu perfil de investidor."
              icon={<BarChart3 className="w-10 h-10 text-brand-green" />}
              align="right"
            />

            {/* Step 5 */}
            <Step 
              number="05"
              title="Defina suas Metas e Comece"
              description="Defina suas metas de ganho (Take Profit) e limite de perda (Stop Loss) para um gerenciamento de risco saudável. Ative a cópia e acompanhe seus lucros em tempo real."
              icon={<Rocket className="w-10 h-10 text-brand-green" />}
              align="left"
            />

          </div>
          
          <div className="text-center mt-24">
             <div className="p-8 rounded-2xl bg-brand-green/10 border border-brand-green/20 max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold mb-4">Ainda com dúvidas?</h3>
                <p className="text-gray-400 mb-6">
                   Cadastre-se gratuitamente no nosso App e tenha acesso ao passo a passo detalhado em vídeo para cada etapa do processo.
                </p>
                <Button onClick={() => window.open('https://app.afktrade.com.br', '_blank')} variant="secondary">
                   Acessar App AFK
                </Button>
             </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
};

const Step = ({ number, title, description, icon, action, align }: { number: string, title: string, description: string, icon: React.ReactNode, action?: React.ReactNode, align: 'left' | 'right' }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${align === 'right' ? 'md:flex-row-reverse text-right' : 'text-left'}`}
    >
      <div className={`flex-1 ${align === 'left' ? 'md:text-right' : 'md:text-left'} text-center md:text-inherit`}>
        <div className={`inline-flex items-center justify-center p-4 bg-brand-green/10 rounded-2xl mb-6 md:hidden`}>
           {icon}
        </div>
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
           <span className="text-brand-green text-lg block font-mono mb-2">PASSO {number}</span>
           {title}
        </h3>
        <p className="text-gray-400 text-lg leading-relaxed mb-6">
          {description}
        </p>
        {action && (
          <div className={`flex ${align === 'left' ? 'md:justify-end' : 'md:justify-start'} justify-center`}>
            {action}
          </div>
        )}
      </div>

      <motion.div 
         initial={{ scale: 1, boxShadow: "0 0 20px rgba(34,197,94,0.3)" }}
         whileInView={{ scale: 1.3, boxShadow: "0 0 40px rgba(34,197,94,0.8)" }}
         viewport={{ margin: "-10% 0px -45% 0px" }}
         transition={{ duration: 0.4, ease: "easeOut" }}
         className="relative z-10 hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-brand-dark border-4 border-brand-green shrink-0"
      >
         {icon}
      </motion.div>

      <div className="flex-1 hidden md:block" />
    </motion.div>
  );
}
