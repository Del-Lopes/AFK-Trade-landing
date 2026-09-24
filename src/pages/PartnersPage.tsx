import { ArrowRight, CheckCircle2, DollarSign, Globe, Users, TrendingUp, ShieldCheck } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { PartnerFormModal } from '@/components/partners/PartnerFormModal';


export const PartnersPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-brand-dark text-white font-sans selection:bg-brand-green/30">
      <Helmet>
        <title>Programa de Parceiros | Trader AFK</title>
        <meta name="description" content="Junte-se ao programa de parceiros da Trader AFK. Participações recorrentes baseadas em volume por indicar a plataforma de trading algorítmico." />
      </Helmet>
      <Navbar />
      
      <main className="pt-24 relative z-10">
        {/* Hero Section */}
        <Section className="py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 grayscale pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-brand-green/10 blur-[120px] rounded-full pointer-events-none"></div>
          
          <div className="text-center max-w-4xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-green/10 border border-brand-green/20 rounded-full text-brand-green text-sm font-medium mb-6">
                <Users size={16} />
                <span>Programa de Parceiros AFK</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
                Indique a Trader AFK <br />
                <span className="text-brand-green">com transparência.</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                Apresente nossa plataforma de trading algorítmico à sua audiência. A remuneração é calculada sobre o volume operado pelos clientes que você indicar diretamente, conforme o regulamento do programa.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" onClick={() => setIsModalOpen(true)}>
                  Torne-se um Parceiro <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </motion.div>
          </div>
        </Section>

        {/* Benefits Section */}
        <Section className="py-20 bg-white/2 border-y border-white/5">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Porque ser um parceiro?</h2>
            <p className="text-white text-lg max-w-2xl mx-auto">
              Regras claras, ferramentas profissionais e suporte para quem deseja apresentar a Trader AFK.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <BenefitCard 
              icon={<DollarSign className="w-10 h-10 text-brand-green" />}
              title="Participações Recorrentes"
              description="Receba uma participação baseada no volume de operações gerado pelos seus indicados enquanto estiverem ativos na plataforma."
            />
            <BenefitCard 
              icon={<Globe className="w-10 h-10 text-blue-400" />}
              title="Alcance Global"
              description="Não se limite a fronteiras. Nossa tecnologia funciona em qualquer lugar do mundo, 24 horas por dia."
            />
            <BenefitCard 
              icon={<ShieldCheck className="w-10 h-10 text-brand-gold" />}
              title="Ferramentas que Retêm"
              description="Seus indicados contam com gestão de risco configurável, conteúdo educacional e suporte, o que favorece a permanência na plataforma."
            />
            <BenefitCard 
              icon={<TrendingUp className="w-10 h-10 text-purple-400" />}
              title="Rebate de Corretagem"
              description="Parte da remuneração pode vir do rebate que a corretora paga sobre o volume negociado pelos seus indicados diretos. Esse conflito de interesse é informado aos clientes."
            />
            <BenefitCard 
              icon={<Users className="w-10 h-10 text-pink-400" />}
              title="Suporte Dedicado"
              description="Tenha um gerente de conta exclusivo para apoiar sua estratégia de indicação e maximizar conversões."
            />
            <BenefitCard 
              icon={<CheckCircle2 className="w-10 h-10 text-cyan-400" />}
              title="Material de Marketing"
              description="Acesso a banners, landing pages, vídeos e copys validadas para facilitar sua divulgação."
            />
          </div>
        </Section>

        {/* Use Cases / Who is this for Section */}
        <Section className="py-24 bg-brand-dark">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
                <div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
                        Para quem é este programa?
                    </h2>
                    <ul className="space-y-6">
                        <li className="flex gap-4">
                            <div className="bg-brand-green/10 p-2 rounded-lg h-fit">
                                <Users className="text-brand-green w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Influenciadores Financeiros</h3>
                                <p className="text-white">Apresente à sua audiência uma ferramenta de automação de trading com gestão de risco, sem promessa de resultado.</p>
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <div className="bg-brand-green/10 p-2 rounded-lg h-fit">
                                <TrendingUp className="text-brand-green w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Educadores e Mentores</h3>
                                <p className="text-white">Agregue valor aos seus cursos oferecendo ferramentas de automação para seus alunos.</p>
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <div className="bg-brand-green/10 p-2 rounded-lg h-fit">
                                <Globe className="text-brand-green w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Empreendedores Digitais</h3>
                                <p className="text-white">Inclua no seu portfólio uma ferramenta de trading automatizado sem precisar desenvolver um produto do zero.</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="relative">
                    <div className="absolute inset-0 bg-brand-green/20 blur-[100px] rounded-full opacity-30"></div>
                     <div className="relative bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl">
                        <div className="text-center mb-8">
                            <p className="text-sm text-white uppercase tracking-wider mb-2">Como a remuneração é calculada</p>
                            <h3 className="text-4xl font-bold text-brand-green">Critério claro</h3>
                        </div>
                        <div className="space-y-4">
                            <div className="bg-white/5 p-4 rounded-lg text-sm text-white leading-relaxed">
                                Comissão calculada sobre o volume operado pelos clientes indicados, conforme o regulamento do programa.
                            </div>
                            <div className="bg-white/5 p-4 rounded-lg text-sm text-white leading-relaxed">
                                Remuneração apenas sobre clientes indicados diretamente. Não há remuneração por recrutar outros parceiros.
                            </div>
                            <div className="bg-white/5 p-4 rounded-lg border border-brand-green/30 text-sm text-white leading-relaxed">
                                Parte do valor pode vir de rebate pago pela corretora sobre o volume operado, o que é informado ao cliente.
                            </div>
                        </div>
                        <p className="text-xs text-center text-white mt-6 opacity-60">
                            Não há valor mínimo nem ganho garantido. A remuneração depende do volume efetivamente operado pelos clientes e das condições das corretoras, e pode ser zero.
                        </p>
                     </div>
                </div>
            </div>
        </Section>

        {/* Steps Section */}
        <Section className="py-24 bg-white/2 border-t border-white/5">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Como começar?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
             <StepCard number="1" title="Cadastre-se" description="Preencha o formulário de aplicação para nossa equipe analisar seu perfil." />
             <StepCard number="2" title="Receba seu Link" description="Aprovado, você recebe um link exclusivo de parceiro e acesso ao painel." />
             <StepCard number="3" title="Comece a Indicar" description="Apresente a plataforma à sua audiência e acompanhe suas indicações no painel." />
             
             {/* Connecting Line (Desktop) */}
             <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-transparent via-brand-green/30 to-transparent -z-10"></div>
          </div>

          <div className="text-center mt-16">
            <Button size="lg" onClick={() => setIsModalOpen(true)}>
                Quero ser Parceiro <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </Section>
      </main>

      <PartnerFormModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />

      <Footer />
    </div>
  );
};

const BenefitCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="bg-white/5 border border-white/5 hover:border-brand-green/50 p-8 rounded-2xl transition-all duration-300 hover:bg-white/10 group">
    <div className="mb-6 bg-brand-dark p-3 rounded-xl w-fit group-hover:scale-110 transition-transform duration-300 border border-white/10">{icon}</div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-white leading-relaxed">{description}</p>
  </div>
);

const StepCard = ({ number, title, description }: { number: string, title: string, description: string }) => (
    <div className="text-center relative z-10 bg-brand-dark p-6 rounded-2xl border border-white/5">
        <div className="w-12 h-12 bg-brand-green text-brand-dark font-bold text-xl rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_20px_rgba(34,197,94,0.4)]">
            {number}
        </div>
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-white">{description}</p>
    </div>
);
