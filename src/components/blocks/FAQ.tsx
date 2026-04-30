import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { Section } from '@/components/layout/Section';

const FAQS = [
  {
    question: 'Como funciona o licenciamento dos robôs?',
    answer: 'Cada robô é licenciado diretamente para o número da sua conta MetaTrader 5. Você solicita a licença dentro da plataforma, nossa equipe valida e emite em até 24h. Após isso, basta instalar o EA na sua conta MT5 e ativar com a licença recebida. Seu dinheiro permanece 100% na sua corretora.',
  },
  {
    question: 'Preciso ter experiência em programação para usar os robôs?',
    answer: 'Não. Os robôs são plug-and-play — você só precisa instalar o arquivo no MetaTrader 5 e inserir a licença. A plataforma oferece guias passo a passo em vídeo e PDF, e nosso suporte auxilia em toda a configuração inicial.',
  },
  {
    question: 'Os robôs funcionam no MetaTrader 5?',
    answer: 'Sim. Todos os Expert Advisors (EAs) da plataforma são desenvolvidos exclusivamente para o MetaTrader 5, a principal plataforma de trading profissional do mundo. O MT5 está disponível para Windows, Mac (via Wine ou web) e dispositivos móveis.',
  },
  {
    question: 'Como me torno parceiro?',
    answer: 'Basta se cadastrar na plataforma, acessar a seção "Parceiros" e preencher o formulário de adesão. Após aprovação, você recebe acesso ao painel completo com gestão de prospects, materiais de marketing, links personalizados e acompanhamento de comissões.',
  },
  {
    question: 'O que está incluído nos cursos da biblioteca?',
    answer: 'A biblioteca contém cursos modulares em vídeo (do básico ao avançado), análises de mercado publicadas semanalmente, artigos educacionais sobre trading algorítmico, gestão de risco, psicologia do trader e tutoriais de configuração dos robôs. Membros têm acesso ilimitado a todo o conteúdo.',
  },
  {
    question: 'Existe suporte ao cliente?',
    answer: 'Sim. Oferecemos suporte via chat dentro da plataforma e por e-mail. Nossa equipe está disponível para auxiliar na instalação dos EAs, configuração das licenças, abertura de conta nas corretoras parceiras e dúvidas sobre a plataforma.',
  },
  {
    question: 'Meu dinheiro fica seguro na corretora?',
    answer: 'Sim. A Trader AFK não tem acesso ao seu dinheiro em nenhum momento. Os robôs operam diretamente na sua conta da corretora através do MetaTrader 5. Você mantém controle total dos seus fundos, podendo depositar, sacar e fechar posições quando quiser.',
  },
  {
    question: 'Posso usar mais de um robô ao mesmo tempo?',
    answer: 'Sim. Cada EA tem sua própria licença e pode operar de forma independente na mesma ou em contas diferentes. Recomendamos diversificar entre os EAs para reduzir o risco de concentração em uma única estratégia.',
  },
];

export const FAQ = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <Section id="faq" className="py-32 bg-brand-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.015] bg-[size:50px_50px] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white/50 text-sm font-medium mb-6">
            <HelpCircle size={14} />
            <span>Perguntas Frequentes</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ficou com <span className="text-brand-green">alguma dúvida?</span>
          </h2>
          <p className="text-white/50 text-lg">
            Respondemos as perguntas mais comuns de quem está conhecendo a plataforma.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                openIdx === idx
                  ? 'border-brand-green/30 bg-brand-green/5'
                  : 'border-white/8 bg-white/5 hover:border-white/15'
              }`}
            >
              <button
                className="w-full flex items-center gap-4 p-5 text-left"
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              >
                <span className="flex-1 text-base font-semibold text-white">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIdx === idx ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className={`shrink-0 transition-colors ${openIdx === idx ? 'text-brand-green' : 'text-white/30'}`}
                >
                  <ChevronDown size={18} />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                  >
                    <div className="px-5 pb-5 text-white/65 text-sm leading-relaxed border-t border-white/5 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-white/40 text-sm">
            Não encontrou o que procurava?{' '}
            <a href="mailto:contato@traderafk.com" className="text-brand-green hover:underline transition-colors">
              Fale com nosso suporte
            </a>
          </p>
        </div>
      </div>
    </Section>
  );
};
