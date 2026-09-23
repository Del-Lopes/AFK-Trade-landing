import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UserPlus, CreditCard, Cpu, Key, BookOpen, Users, LayoutDashboard, ChevronRight, CheckCircle2, ArrowRight } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';
import { Backdrop } from '@/components/ui/Backdrop';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Reveal } from '@/components/ui/Reveal';
import { cn } from '@/lib/cn';

const STEPS = [
  {
    number: 1,
    icon: <UserPlus size={22} />,
    title: 'Crie sua conta',
    description: 'Cadastro simples e gratuito. Informe nome, e-mail e senha. Em menos de 1 minuto você já está dentro da plataforma.',
    detail: 'Sem necessidade de cartão de crédito. Acesso imediato após o cadastro.',
    color: '#22c55e',
  },
  {
    number: 2,
    icon: <LayoutDashboard size={22} />,
    title: 'Conheça o Painel',
    description: 'O tour interativo apresenta cada seção da plataforma. Você saberá exatamente o que cada menu faz antes de começar a operar.',
    detail: 'O onboarding guiado garante que nenhuma funcionalidade passe despercebida.',
    color: '#60a5fa',
  },
  {
    number: 3,
    icon: <CreditCard size={22} />,
    title: 'Abra uma conta na corretora',
    description: 'Escolha uma das corretoras parceiras homologadas. Clique no link e siga o guia de abertura de conta da sua corretora.',
    detail: 'Hantec, HFM, Vantage e RoboForex — todas regulamentadas internacionalmente.',
    color: '#a78bfa',
  },
  {
    number: 4,
    icon: <Key size={22} />,
    title: 'Solicite sua licença MT5',
    description: 'Escolha o robô, informe o número da sua conta MT5 e aguarde a aprovação. Processo 100% dentro da plataforma.',
    detail: 'A licença é vinculada ao seu número de conta — segurança máxima.',
    color: '#f59e0b',
  },
  {
    number: 5,
    icon: <Cpu size={22} />,
    title: 'Instale e ative o Expert Advisor',
    description: 'Faça o download do EA, instale no MetaTrader 5 e ative com sua licença. Guia passo a passo disponível na biblioteca.',
    detail: 'Suporte disponível via chat para auxiliar na instalação.',
    color: '#34d399',
  },
  {
    number: 6,
    icon: <BookOpen size={22} />,
    title: 'Explore a biblioteca',
    description: 'Acesse cursos, análises e artigos para aprofundar seu conhecimento enquanto o robô opera por você.',
    detail: 'Conteúdo novo publicado toda semana pela equipe Trader AFK.',
    color: '#fb923c',
  },
  {
    number: 7,
    icon: <Users size={22} />,
    title: 'Torne-se Parceiro (opcional)',
    description: 'Indique outros traders, gerencie seus leads e receba participações recorrentes baseadas em volume pelo painel de parceiros.',
    detail: 'Programa de parceria disponível para todos os membros ativos.',
    color: '#f472b6',
  },
];

export const Onboarding = () => {
  const [active, setActive] = useState(0);
  const current = STEPS[active];

  return (
    <Section id="onboarding" divider>
      <Backdrop variant="glow" />

      <SectionHeader
        eyebrow="Onboarding Guiado"
        title={
          <>
            Do zero ao primeiro robô <br className="hidden sm:block" />
            <span className="text-gradient-brand">em 7 passos.</span>
          </>
        }
        description="Curva de aprendizado mínima. Cada etapa é apresentada interativamente dentro da plataforma para que você sinta segurança desde o primeiro acesso."
      />

      <div className="mx-auto grid max-w-5xl grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-12">
        {/* Step list */}
        <Reveal className="space-y-1.5">
          {STEPS.map((step, idx) => {
            const isActive = active === idx;
            return (
              <button
                key={step.number}
                onClick={() => setActive(idx)}
                className={cn(
                  'group flex w-full items-center gap-4 rounded-xl border p-3.5 text-left transition-all duration-300 sm:p-4',
                  isActive
                    ? 'border-brand-green/30 bg-white/[0.04]'
                    : 'border-transparent hover:border-white/[0.08] hover:bg-white/[0.02]'
                )}
              >
                <div
                  className={cn(
                    'flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border transition-colors duration-300',
                    isActive
                      ? 'border-brand-green/40 bg-brand-green/10 text-brand-green'
                      : 'border-white/10 bg-white/[0.03] text-brand-subtle group-hover:text-brand-muted'
                  )}
                >
                  {step.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-3">
                    <span
                      className={cn(
                        'font-mono text-xs transition-colors',
                        isActive ? 'text-brand-green' : 'text-white/25'
                      )}
                    >
                      {String(step.number).padStart(2, '0')}
                    </span>
                    <span
                      className={cn(
                        'text-sm font-medium transition-colors',
                        isActive ? 'text-white' : 'text-brand-muted group-hover:text-white'
                      )}
                    >
                      {step.title}
                    </span>
                  </div>
                </div>
                <ChevronRight
                  size={14}
                  className={cn(
                    'shrink-0 transition-all duration-300',
                    isActive ? 'translate-x-0 text-brand-green opacity-100' : '-translate-x-1 opacity-0'
                  )}
                />
              </button>
            );
          })}
        </Reveal>

        {/* Detail panel */}
        <Reveal delay={120} className="lg:sticky lg:top-28">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="glass-card overflow-hidden p-6 sm:p-8"
            >
              <div aria-hidden className="hairline absolute inset-x-8 -top-px" />

              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-brand-green/30 bg-brand-green/[0.06] text-brand-green">
                {current.icon}
              </div>

              <p className="eyebrow mb-3">
                Passo {current.number} de {STEPS.length}
              </p>

              <h3 className="mb-4 text-2xl font-semibold text-white">{current.title}</h3>
              <p className="mb-6 leading-relaxed text-brand-muted">{current.description}</p>

              <div className="flex items-start gap-2.5 rounded-lg border border-white/[0.06] bg-white/[0.02] p-3.5 text-sm">
                <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-brand-green" />
                <span className="text-brand-muted">{current.detail}</span>
              </div>

              {/* Progress dots */}
              <div className="mt-7 flex items-center gap-1.5">
                {STEPS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={cn(
                      'h-1.5 rounded-full transition-all duration-300',
                      i === active ? 'w-5 bg-brand-green' : 'w-1.5 bg-white/15 hover:bg-white/30'
                    )}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-6 flex justify-center">
            <Button size="lg" className="w-full sm:w-auto" onClick={() => window.open('https://app.traderafk.com', '_blank')}>
              Começar Agora — É Grátis
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
        </Reveal>
      </div>
    </Section>
  );
};
