
import { Helmet } from 'react-helmet-async';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Globe, Clock, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';


export const MissionPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-brand-dark text-white selection:bg-brand-green/30 font-sans">
      <Helmet>
        <title>Nossa Missão | Trader AFK</title>
        <meta name="description" content="Liberdade para viver. A Trader AFK nasceu para libertar você das telas e devolver seu tempo através da tecnologia de trading automatizado." />
      </Helmet>
      <Navbar />

      <main>
        {/* Hero Section */}
        <Section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-brand-dark relative overflow-hidden">
           {/* Background Effects */}
           <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
              <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[80%] h-[80%] bg-brand-green/5 rounded-full blur-[150px]" />
           </div>

           <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
              <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8 }}
              >
                 <span className="text-brand-green font-bold tracking-wider uppercase text-sm mb-4 block">
                    Nossa Filosofia
                 </span>
                 <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                    Mude sua relação com o <br />
                    <span className="text-brand-green">Tempo e Dinheiro.</span>
                 </h1>
                 <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                    AFK não é apenas uma sigla para "Away From Keyboard". É um manifesto por uma vida onde a tecnologia trabalha para você, não o contrário.
                 </p>
              </motion.div>
           </div>
        </Section>

        {/* The Problem: Manual Trading */}
        <Section className="bg-white/5 border-y border-white/5">
           <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1">
                 <h2 className="text-3xl md:text-4xl font-bold mb-6">A Armadilha do Trading Manual</h2>
                 <p className="text-gray-400 text-lg leading-relaxed mb-6">
                    A maioria das pessoas entra no mercado financeiro buscando liberdade, mas acaba encontrando uma nova prisão. 
                    Passar horas analisando gráficos, sofrendo com o estresse emocional e perdendo momentos importantes da vida não é liberdade.
                 </p>
                 <p className="text-gray-400 text-lg leading-relaxed">
                    Se você precisa estar presente para ganhar dinheiro, você não tem um investimento, você tem um segundo emprego.
                 </p>
              </div>
              <div className="order-1 md:order-2 flex justify-center">
                 <div className="relative w-full aspect-square max-w-md bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-full blur-3xl absolute opacity-20" />
                 <Clock className="w-48 h-48 text-gray-700 relative z-10 opacity-50" strokeWidth={1} />
              </div>
           </div>
        </Section>

        {/* The Solution: Automation */}
        <Section>
           <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Liberdade Física e Financeira</h2>
              <p className="text-xl text-gray-400">
                 A verdadeira liberdade é ter controle sobre o seu tempo. Nossos algoritmos operam 24 horas por dia, automatizando a execução enquanto você vive sua vida.
              </p>
           </div>

           <div className="grid md:grid-cols-3 gap-8">
              <PhilosophyCard 
                 icon={<Globe className="w-8 h-8 text-brand-green" />}
                 title="Liberdade Geográfica"
                 description="Opere de qualquer lugar do mundo. Tudo o que você precisa é de uma conexão com a internet para monitorar as operações automatizadas."
              />
              <PhilosophyCard 
                 icon={<Zap className="w-8 h-8 text-brand-green" />}
                 title="Execução Perfeita"
                 description="Elimine o fator emocional. Robôs não sentem medo, ganância ou hesitação. Eles executam a estratégia com precisão milimétrica."
              />
              <PhilosophyCard 
                 icon={<ShieldCheck className="w-8 h-8 text-brand-green" />}
                 title="Segurança Patrimonial"
                 description="Seu capital fica na sua conta, em corretoras reguladas. Você mantém o controle total dos seus fundos o tempo todo."
              />
           </div>
        </Section>

        {/* CTA */}
        <Section className="bg-brand-green/5 border-t border-brand-green/10">
           <div className="text-center max-w-3xl mx-auto space-y-8">
              <h2 className="text-4xl font-bold">Pronto para viver o estilo de vida AFK?</h2>
              <p className="text-xl text-gray-400">
                 Junte-se a centenas de pessoas que já automatizaram suas operações e recuperaram o controle do seu tempo.
              </p>
              <Button size="lg" onClick={() => navigate('/start')}>
                 Começar Agora <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
           </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
};

const PhilosophyCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-green/30 transition-all duration-300"
  >
    <div className="mb-6 bg-brand-dark/50 p-4 rounded-xl inline-block border border-white/5">{icon}</div>
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-gray-400 leading-relaxed text-lg">
      {description}
    </p>
  </motion.div>
);
