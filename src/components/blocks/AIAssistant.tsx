import { motion } from 'framer-motion';
import {
  MessagesSquare,
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
    <Section id="assistant" className="py-32 bg-slate-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(96,165,250,0.06),transparent_60%)] pointer-events-none" />
      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-1/3 h-1/2 bg-brand-gold/8 blur-[120px] rounded-full pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left: chat mockup (order-2 on mobile to keep text on top) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative order-2 lg:order-1"
        >
          {/* Background glow */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/10 via-transparent to-brand-gold/10 blur-2xl rounded-3xl pointer-events-none" />

          <div className="relative rounded-2xl border border-white/10 bg-slate-900/85 backdrop-blur-xl shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/5 bg-white/[0.02]">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-400/30 to-brand-gold/20 border border-white/10 flex items-center justify-center">
                  <Sparkles size={14} className="text-blue-300" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white leading-tight">Assistente Trader AFK</p>
                  <p className="text-[10px] text-brand-green flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-brand-green rounded-full animate-pulse" />
                    Online · IA treinada
                  </p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-400/15 text-blue-200 border border-blue-400/30">
                <Bot size={9} />
                IA
              </span>
            </div>

            {/* Messages */}
            <div className="p-5 space-y-4 max-h-[360px] overflow-hidden">
              {/* User message */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex justify-end"
              >
                <div className="max-w-[80%] bg-brand-green/15 border border-brand-green/25 px-4 py-2.5 rounded-2xl rounded-tr-md">
                  <p className="text-sm text-white leading-relaxed">
                    Como ativo a licença do AFK Trader na minha conta MT5?
                  </p>
                </div>
              </motion.div>

              {/* Assistant message */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-start gap-2.5"
              >
                <div className="shrink-0 w-7 h-7 rounded-lg bg-gradient-to-br from-blue-400/30 to-brand-gold/20 border border-white/10 flex items-center justify-center mt-1">
                  <Sparkles size={12} className="text-blue-300" />
                </div>
                <div className="max-w-[85%]">
                  <div className="bg-white/[0.04] border border-white/10 px-4 py-3 rounded-2xl rounded-tl-md">
                    <p className="text-sm text-white/85 leading-relaxed mb-2">
                      É bem simples. Siga estes passos:
                    </p>
                    <ol className="text-xs text-white/70 space-y-1.5 list-decimal list-inside leading-relaxed">
                      <li>Acesse <span className="text-brand-green font-medium">Licenças</span> no menu lateral</li>
                      <li>Selecione o robô <span className="font-mono">AFK Trader</span></li>
                      <li>Cole o número da sua conta MT5 e envie</li>
                      <li>Após aprovação, instale o EA e libere o WebRequest no MT5</li>
                    </ol>
                  </div>

                  {/* Feedback buttons */}
                  <div className="flex items-center gap-2 mt-2 pl-1">
                    <span className="text-[10px] text-white/35">Esta resposta foi útil?</span>
                    <button
                      type="button"
                      aria-label="Resposta útil"
                      className="w-7 h-7 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-brand-green hover:border-brand-green/30 hover:bg-brand-green/5 transition-colors"
                    >
                      <ThumbsUp size={11} />
                    </button>
                    <button
                      type="button"
                      aria-label="Resposta não útil"
                      className="w-7 h-7 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-red-300 hover:border-red-400/30 hover:bg-red-400/5 transition-colors"
                    >
                      <ThumbsDown size={11} />
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Suggested chips */}
            <div className="px-5 pb-3">
              <p className="text-[10px] uppercase tracking-wider text-white/30 mb-2">Sugestões rápidas</p>
              <div className="flex flex-wrap gap-2">
                {SUGGESTED.map((s) => (
                  <button
                    key={s}
                    type="button"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] bg-white/5 border border-white/10 text-white/65 hover:bg-white/10 hover:border-white/20 hover:text-white transition-colors"
                  >
                    <Sparkles size={10} className="text-brand-gold/80" />
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Input bar */}
            <div className="px-5 py-3 border-t border-white/5 bg-white/[0.02] flex items-center gap-3">
              <div className="flex-1 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-xs text-white/40">
                Digite sua dúvida sobre licenças, robôs ou plataforma…
              </div>
              <button
                type="button"
                aria-label="Enviar mensagem"
                className="w-9 h-9 rounded-lg bg-brand-green text-brand-dark flex items-center justify-center shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_28px_rgba(34,197,94,0.45)] transition-shadow"
              >
                <Send size={14} />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Right: text */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="order-1 lg:order-2"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-400/10 border border-blue-400/20 rounded-full text-blue-300 text-sm font-medium mb-6">
            <MessagesSquare size={14} />
            <span>Assistente de IA</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Suporte que responde em <span className="text-blue-300">segundos, 24/7.</span>
          </h2>

          <p className="text-white/65 text-lg leading-relaxed mb-8">
            Um assistente de IA treinado para o universo Trader AFK — tira dúvidas sobre licenças, ajuda na instalação dos robôs no MT5 e guia o trader pela plataforma sem precisar abrir um ticket.
          </p>

          {/* Highlights grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {HIGHLIGHTS.map((h) => (
              <div key={h.title} className="flex gap-3">
                <span className="shrink-0 w-9 h-9 rounded-lg bg-blue-400/10 border border-blue-400/20 flex items-center justify-center text-blue-300">
                  {h.icon}
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-white mb-0.5">{h.title}</h3>
                  <p className="text-xs text-white/55 leading-relaxed">{h.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-start gap-3 p-4 rounded-xl bg-blue-400/5 border border-blue-400/20 mb-8">
            <Zap size={18} className="text-blue-300 shrink-0 mt-0.5" />
            <p className="text-sm text-white/70 leading-relaxed">
              <span className="text-white font-medium">Menos espera, mais operação.</span> Dúvidas resolvidas no mesmo segundo em que aparecem — e a equipe foca no que realmente exige atenção humana.
            </p>
          </div>

          <Button size="lg" onClick={() => window.open('https://app.traderafk.com', '_blank')}>
            Conversar com o Assistente <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </Section>
  );
};
