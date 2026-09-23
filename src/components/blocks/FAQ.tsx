import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Backdrop } from '@/components/ui/Backdrop';
import { Reveal } from '@/components/ui/Reveal';
import { cn } from '@/lib/cn';

const FAQS = [
  {
    question: 'Como funciona o licenciamento dos robôs?',
    answer: 'Cada robô é licenciado diretamente para o número da sua conta MetaTrader 5. Você cadastra o numero da sua conta dentro da nossa plataforma, na sessão de licenças e nossa equipe valida em até 24h. Após isso, basta instalar o EA no seu MetaTrader e liberar o webrequest nas opções para a url: tradexperience.com.br.',
  },
  {
    question: 'Preciso ter experiência em programação para usar os robôs?',
    answer: 'Não. Os robôs são plug-and-play — você só precisa instalar o arquivo no MetaTrader 5 e cadastrar a conta na plataforma e permitir webrequest para a url: tradexperience.com.br. A plataforma oferece tutoriais passo a passo em vídeo e PDF, e nosso suporte auxilia em toda a configuração inicial.',
  },
  {
    question: 'Os robôs funcionam só no MetaTrader 5?',
    answer: 'Todos os Expert Advisors (EAs) da plataforma são desenvolvidos para o MetaTrader 5, estamos em transcrição para mt4 também, já temos os principais disponíveis.',
  },
  {
    question: 'Como me torno parceiro?',
    answer: 'Basta se cadastrar na plataforma, acessar a seção "Parceiros" e preencher o formulário de adesão. Após aprovação, você recebe acesso ao painel completo com gestão de prospectos, materiais de marketing, links personalizados e acompanhamento de comissões.',
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
    <Section id="faq" divider>
      <Backdrop variant="lines" />

      <div className="mx-auto max-w-3xl">
        <SectionHeader
          eyebrow="Perguntas Frequentes"
          title={<>Ficou com <span className="text-gradient-brand">alguma dúvida?</span></>}
          description="Respondemos as perguntas mais comuns de quem está conhecendo a plataforma."
        />

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <Reveal
                key={idx}
                delay={idx * 50}
                className={cn(
                  'glass-card overflow-hidden',
                  isOpen ? 'border-brand-green/35' : 'hover:border-white/15'
                )}
              >
                <button
                  className="flex w-full items-center gap-4 p-5 text-left sm:px-6"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                >
                  <span className="flex-1 text-[15px] font-medium text-white sm:text-base">{faq.question}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className={cn(
                      'flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-colors duration-300',
                      isOpen ? 'border-brand-green/40 text-brand-green' : 'border-white/10 text-brand-subtle'
                    )}
                  >
                    <Plus size={14} />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="border-t border-white/[0.06] px-5 pb-5 pt-4 text-sm leading-relaxed text-brand-muted sm:px-6">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-brand-subtle">
            Não encontrou o que procurava?{' '}
            <a href="mailto:contato@traderafk.com" className="text-brand-green underline-offset-4 transition-colors hover:underline">
              Fale com nosso suporte
            </a>
          </p>
        </div>
      </div>
    </Section>
  );
};
