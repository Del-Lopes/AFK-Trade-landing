import { motion } from 'framer-motion';
import {
  Sparkles,
  ThumbsUp,
  ThumbsDown,
  Zap,
  Bot,
  Clock,
  Library,
  History,
  ArrowRight,
  Send,
} from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';
import { Backdrop } from '@/components/ui/Backdrop';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';

const HIGHLIGHTS = [
  {
    icon: <Clock size={18} />,
    title: 'Atendimento instantâneo',
    description: 'Widget flutuante disponível 24/7 dentro da plataforma — sem precisar abrir um ticket.',
  },
  {
    icon: <Bot size={18} />,
    title: 'Especializado no Trader AFK',
    description: 'Treinado para licenças, robôs, instalação, educação e navegação. Não é um chatbot genérico.',
  },
  {
    icon: <Zap size={18} />,
    title: 'Apoio na instalação dos robôs',
    description: 'Passo a passo para configurar o Expert Advisor na conta MT5, com orientação contextual.',
  },
  {
    icon: <History size={18} />,
    title: 'Histórico persistente',
    description: 'Continua a conversa de onde parou, com as últimas mensagens carregadas automaticamente.',
  },
  {
    icon: <ThumbsUp size={18} />,
    title: 'Feedback contínuo',
    description: 'Avalie cada resposta com 👍 ou 👎 — a equipe refina o assistente continuamente.',
  },
  {
    icon: <Library size={18} />,
    title: 'Base de conhecimento curada',
    description: 'Respostas técnicas validadas pela equipe, garantindo precisão sobre robôs e licenças.',
  },
];

const SUGGESTED = [
  'Como instalar o AFK Trader?',
  'Solicitar licença MT5',
  'Renovar licença',
];

export const AIAssistant = () => {
  return (
    <Section id="assistant" divider>
      <Backdrop variant="glow" />

      <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16">
        {/* Left: chat mockup (order-2 on mobile to keep text on top) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative order-2 min-w-0 lg:order-1"
        >
          {/* Halo difuso */}
          <div aria-hidden className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-brand-green/[0.05] blur-3xl" />

          <div className="relative rounded-2xl border border-white/10 bg-white/[0.02] p-1.5 shadow-[0_40px_120px_-50px_rgba(34,197,94,0.3)] backdrop-blur">
            <div aria-hidden className="hairline absolute inset-x-10 -top-px" />

            <div className="overflow-hidden rounded-xl border border-white/[0.06] bg-brand-surface/85 backdrop-blur-xl">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-3.5 sm:px-5">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03]">
                    <Sparkles size={14} className="text-brand-green" />
                  </div>
                  <div>
                    <p className="text-sm font-medium leading-tight text-white">Assistente Trader AFK</p>
                    <p className="flex items-center gap-1.5 text-[10px] text-brand-subtle">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
                      Online · IA treinada
                    </p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.15em] text-brand-muted">
                  <Bot size={9} />
                  IA
                </span>
              </div>

              {/* Messages */}
              <div className="max-h-[360px] space-y-5 overflow-hidden p-4 sm:p-5">
                {/* User message */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15, duration: 0.5 }}
                  className="flex justify-end"
                >
                  <div className="max-w-[85%] rounded-2xl rounded-tr-md border border-white/[0.08] bg-white/[0.06] px-4 py-2.5">
                    <p className="text-sm leading-relaxed text-neutral-200">
                      Como ativo a licença do AFK Trader na minha conta MT5?
                    </p>
                  </div>
                </motion.div>

                {/* Assistant message */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="flex items-start gap-2.5"
                >
                  <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03]">
                    <Sparkles size={12} className="text-brand-green" />
                  </div>
                  <div className="min-w-0 max-w-[85%]">
                    <div className="rounded-2xl rounded-tl-md border border-white/[0.06] bg-white/[0.025] px-4 py-3">
                      <p className="mb-2 text-sm leading-relaxed text-neutral-200">
                        É bem simples. Siga estes passos:
                      </p>
                      <ol className="list-inside list-decimal space-y-1.5 text-xs leading-relaxed text-brand-muted marker:text-brand-subtle">
                        <li>Acesse <span className="font-medium text-brand-green">Licenças</span> no menu lateral</li>
                        <li>Selecione o robô <span className="font-mono text-neutral-300">AFK Trader</span></li>
                        <li>Cole o número da sua conta MT5 e envie</li>
                        <li>Após aprovação, instale o EA e libere o WebRequest no MT5</li>
                      </ol>
                    </div>

                    {/* Feedback buttons */}
                    <div className="mt-2 flex items-center gap-2 pl-1">
                      <span className="text-[10px] text-brand-subtle">Esta resposta foi útil?</span>
                      <button
                        type="button"
                        aria-label="Resposta útil"
                        className="flex h-7 w-7 items-center justify-center rounded-md border border-white/[0.08] bg-white/[0.03] text-brand-subtle transition-colors hover:border-brand-green/30 hover:text-brand-green"
                      >
                        <ThumbsUp size={11} />
                      </button>
                      <button
                        type="button"
                        aria-label="Resposta não útil"
                        className="flex h-7 w-7 items-center justify-center rounded-md border border-white/[0.08] bg-white/[0.03] text-brand-subtle transition-colors hover:border-brand-red/30 hover:text-red-400"
                      >
                        <ThumbsDown size={11} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Suggested chips */}
              <div className="px-4 pb-4 sm:px-5">
                <p className="mb-2.5 text-[10px] uppercase tracking-[0.2em] text-brand-subtle">Sugestões rápidas</p>
                <div className="flex flex-wrap gap-2">
                  {SUGGESTED.map((s) => (
                    <button
                      key={s}
                      type="button"
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-[11px] text-brand-muted transition-colors duration-300 hover:border-brand-green/30 hover:text-white"
                    >
                      <Sparkles size={10} className="text-brand-green/70" />
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Input bar */}
              <div className="flex items-center gap-3 border-t border-white/[0.06] px-4 py-3 sm:px-5">
                <div className="min-w-0 flex-1 truncate rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-2 text-xs text-brand-subtle">
                  Digite sua dúvida sobre licenças, robôs ou plataforma…
                </div>
                <button
                  type="button"
                  aria-label="Enviar mensagem"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-brand-green-bright to-brand-green text-brand-dark transition-[filter] duration-300 hover:brightness-110"
                >
                  <Send size={14} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: text */}
        <div className="order-1 lg:order-2">
          <Reveal>
            <Eyebrow className="mb-5">Assistente de IA</Eyebrow>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="mb-6 text-3xl font-bold leading-[1.08] text-white sm:text-4xl md:text-5xl">
              Suporte que responde em <span className="text-gradient-brand">segundos, 24/7.</span>
            </h2>
          </Reveal>

          <Reveal delay={160}>
            <p className="mb-10 text-base leading-relaxed text-brand-muted md:text-lg">
              Um assistente de IA treinado para o universo Trader AFK — tira dúvidas sobre licenças, ajuda na instalação dos robôs no MT5 e guia o trader pela plataforma sem precisar abrir um ticket.
            </p>
          </Reveal>

          {/* Highlights grid */}
          <div className="mb-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {HIGHLIGHTS.map((h, i) => (
              <Reveal key={h.title} delay={i * 60} className="group flex gap-3.5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-brand-green transition-colors duration-300 group-hover:border-brand-green/40">
                  {h.icon}
                </span>
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-white">{h.title}</h3>
                  <p className="text-xs leading-relaxed text-brand-muted">{h.description}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mb-10 flex items-start gap-3 border-l border-brand-green/40 py-1 pl-4">
              <Zap size={18} className="mt-0.5 shrink-0 text-brand-green" />
              <p className="text-sm leading-relaxed text-brand-muted">
                <span className="font-medium text-white">Menos espera, mais operação.</span> Dúvidas resolvidas no mesmo segundo em que aparecem — e a equipe foca no que realmente exige atenção humana.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <Button size="lg" className="w-full sm:w-auto" onClick={() => window.open('https://app.traderafk.com', '_blank')}>
              Conversar com o Assistente
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Reveal>
        </div>
      </div>
    </Section>
  );
};
