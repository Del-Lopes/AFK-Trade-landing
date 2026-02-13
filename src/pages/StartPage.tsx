
import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';
import { UserPlus, Wallet, BarChart3, Rocket, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const StartPage = () => {
  return (
    <div className="min-h-screen bg-brand-dark text-white selection:bg-brand-green/30 font-sans">
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
              description="Trabalhamos apenas com corretoras regulamentadas e de confiança global. A HFM é nossa parceira recomendada pela execução rápida e baixos spreads."
              icon={<CheckCircle2 className="w-10 h-10 text-brand-green" />}
              action={
                <Button onClick={() => window.open('/hfm', '_blank')} variant="outline" className="mt-4">
                  Conhecer a HFM <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              }
              align="left"
            />

            {/* Step 2 */}
            <Step 
              number="02"
              title="Cadastre-se e Abra sua Conta"
              description="Complete o processo de registro na corretora escolhida. É rápido, seguro e 100% digital. Certifique-se de verificar sua identidade para desbloquear todas as funcionalidades."
              icon={<UserPlus className="w-10 h-10 text-brand-green" />}
              action={
                <Button onClick={() => window.open('https://register.hfm.com/sv/en/new-live-account/?refid=30501091', '_blank')} className="mt-4">
                  Abrir Conta Agora <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              }
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
              description="Navegue pelas estratégias disponíveis na plataforma de Copy Trading da corretora. Analise o histórico de rentabilidade e escolha a que melhor se adapta ao seu perfil de investidor."
              icon={<BarChart3 className="w-10 h-10 text-brand-green" />}
              align="right"
            />

            {/* Step 5 */}
            <Step 
              number="05"
              title="Comece a Lucrar"
              description="Ative a cópia e pronto! Nossos algoritmos operarão automaticamente na sua conta. Acompanhe seus lucros em tempo real pelo celular ou computador."
              icon={<Rocket className="w-10 h-10 text-brand-green" />}
              align="left"
            />

          </div>
          
          <div className="text-center mt-24">
             <div className="p-8 rounded-2xl bg-brand-green/10 border border-brand-green/20 max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold mb-4">Ainda com dúvidas?</h3>
                <p className="text-gray-400 mb-6">
                   Nossa equipe de suporte está pronta para te ajudar em cada etapa do processo.
                </p>
                <Button onClick={() => window.open('https://wa.me/5548991253005', '_blank')} variant="secondary">
                   Falar com Suporte
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
      className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${align === 'right' ? 'md:flex-row-reverse' : ''}`}
    >
      <div className={`flex-1 text-center ${align === 'left' ? 'md:text-right' : 'md:text-left'}`}>
        <div className={`inline-flex items-center justify-center p-4 bg-brand-green/10 rounded-2xl mb-6 md:hidden`}>
           {icon}
        </div>
        <h3 className="text-4xl font-bold text-white mb-4">
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

      <div className="relative z-10 hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-brand-dark border-4 border-brand-green shadow-[0_0_20px_rgba(34,197,94,0.3)]">
         {icon}
      </div>

      <div className="flex-1 hidden md:block" />
    </motion.div>
  );
}
