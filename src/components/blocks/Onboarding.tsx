import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UserPlus, CreditCard, Cpu, Key, BookOpen, Users, LayoutDashboard, ChevronRight, CheckCircle2 } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';

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
    description: 'Indique outros traders, gerencie seus leads e ganhe comissões recorrentes pelo painel de parceiros.',
    detail: 'Programa de parceria disponível para todos os membros ativos.',
    color: '#f472b6',
  },
];

export const Onboarding = () => {
  const [active, setActive] = useState(0);

  return (
    <Section id="onboarding" className="py-32 bg-slate-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(34,197,94,0.04),transparent_50%)] pointer-events-none" />

      <div className="text-center mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white/60 text-sm font-medium mb-6">
          <CheckCircle2 size={14} />
          <span>Onboarding Guiado</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Do zero ao primeiro robô <br />
          <span className="text-brand-green">em 7 passos.</span>
        </h2>
        <p className="text-white/60 text-lg max-w-2xl mx-auto">
          Curva de aprendizado mínima. Cada etapa é apresentada interativamente dentro da plataforma para que você sinta segurança desde o primeiro acesso.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start relative z-10 max-w-5xl mx-auto">
        {/* Step list */}
        <div className="space-y-2">
          {STEPS.map((step, idx) => (
            <button
              key={step.number}
              onClick={() => setActive(idx)}
              className={`w-full text-left flex items-center gap-4 p-4 rounded-xl transition-all duration-200 group ${
                active === idx
                  ? 'bg-white/10 border border-white/15'
                  : 'hover:bg-white/5 border border-transparent'
              }`}
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-all duration-200"
                style={{
                  background: active === idx ? `${step.color}20` : 'rgba(255,255,255,0.05)',
                  border: `1px solid ${active === idx ? step.color + '50' : 'transparent'}`,
                  color: active === idx ? step.color : '#ffffff60',
                }}
              >
                {step.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono" style={{ color: active === idx ? step.color : '#ffffff30' }}>
                    {String(step.number).padStart(2, '0')}
                  </span>
                  <span className={`text-sm font-semibold transition-colors ${active === idx ? 'text-white' : 'text-white/60'}`}>
                    {step.title}
                  </span>
                </div>
              </div>
              <ChevronRight
                size={14}
                className="shrink-0 transition-colors"
                style={{ color: active === idx ? step.color : 'transparent' }}
              />
            </button>
          ))}
        </div>

        {/* Detail panel */}
        <div className="lg:sticky lg:top-28">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 relative overflow-hidden"
            >
              <div
                className="absolute inset-0 pointer-events-none opacity-40"
                style={{ background: `radial-gradient(ellipse at top left, ${STEPS[active].color}12, transparent 60%)` }}
              />

              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                style={{ background: `${STEPS[active].color}15`, border: `1px solid ${STEPS[active].color}30` }}
              >
                <span style={{ color: STEPS[active].color }}>{STEPS[active].icon}</span>
              </div>

              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono" style={{ color: STEPS[active].color }}>
                  Passo {STEPS[active].number} de {STEPS.length}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">{STEPS[active].title}</h3>
              <p className="text-white/70 leading-relaxed mb-4">{STEPS[active].description}</p>

              <div
                className="flex items-start gap-2 p-3 rounded-xl text-sm"
                style={{ background: `${STEPS[active].color}08`, border: `1px solid ${STEPS[active].color}20` }}
              >
                <CheckCircle2 size={15} style={{ color: STEPS[active].color }} className="mt-0.5 shrink-0" />
                <span className="text-white/60">{STEPS[active].detail}</span>
              </div>

              {/* Progress dots */}
              <div className="flex items-center gap-1.5 mt-6">
                {STEPS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className="rounded-full transition-all duration-200"
                    style={{
                      width: i === active ? 20 : 6,
                      height: 6,
                      background: i === active ? STEPS[active].color : 'rgba(255,255,255,0.15)',
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-6 text-center">
            <Button size="lg" onClick={() => window.open('https://app.traderafk.com/register', '_blank')}>
              Começar Agora — É Grátis
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};
