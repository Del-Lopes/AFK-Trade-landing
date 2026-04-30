import { motion } from 'framer-motion';
import { Key, CheckCircle2, ArrowRight, RefreshCw, ShieldCheck, Cpu } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';

const STEPS = [
  {
    step: '01',
    icon: <Key size={20} />,
    title: 'Solicitar Licença',
    description: 'Escolha o robô e informe o número da sua conta MT5. Solicitação enviada em segundos.',
  },
  {
    step: '02',
    icon: <ShieldCheck size={20} />,
    title: 'Aprovação',
    description: 'Nossa equipe valida a conta e emite a licença vinculada exclusivamente ao seu número MT5.',
  },
  {
    step: '03',
    icon: <Cpu size={20} />,
    title: 'Ativar no MT5',
    description: 'Instale o EA na sua corretora, conecte a licença e o robô começa a operar automaticamente.',
  },
];

const BENEFITS = [
  'Licença vinculada ao seu número de conta MT5',
  'Múltiplos robôs com licenças independentes',
  'Controle de validade e renovação no painel',
  'Nenhuma senha ou dado sensível é compartilhado',
  'Funcionamento exclusivo na sua conta de corretora',
  'Revogação e transferência de licença sob demanda',
];

export const Licensing = () => {
  return (
    <Section id="licensing" className="py-32 bg-slate-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-green/20 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(34,197,94,0.05),transparent_60%)] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-green/10 border border-brand-green/20 rounded-full text-brand-green text-sm font-medium mb-6">
            <Key size={14} />
            <span>Gestão de Licenças</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Segurança e controle <br />
            <span className="text-brand-green">total sobre seus robôs.</span>
          </h2>

          <p className="text-white/70 text-lg leading-relaxed mb-8">
            Nosso sistema de licenciamento vincula cada robô diretamente ao número da sua conta MetaTrader 5. Seu dinheiro nunca sai da sua corretora — você mantém controle absoluto.
          </p>

          <ul className="space-y-3 mb-10">
            {BENEFITS.map((b) => (
              <li key={b} className="flex items-start gap-3 text-white/80 text-sm">
                <CheckCircle2 size={16} className="text-brand-green mt-0.5 shrink-0" />
                {b}
              </li>
            ))}
          </ul>

          <Button size="lg" onClick={() => window.open('https://app.traderafk.com', '_blank')}>
            Solicitar Minha Licença <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>

        {/* Right: Steps */}
        <div className="space-y-5 relative">
          {/* Connecting line */}
          <div className="absolute left-6 top-8 bottom-8 w-px bg-gradient-to-b from-brand-green/40 via-brand-green/10 to-transparent hidden md:block" />

          {STEPS.map((s, idx) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="relative flex gap-5 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-green/30 hover:bg-white/8 transition-all duration-300 group"
            >
              <div className="shrink-0 w-12 h-12 rounded-xl bg-brand-dark border border-brand-green/30 flex items-center justify-center text-brand-green group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(34,197,94,0.2)] transition-all duration-300">
                {s.icon}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-mono text-brand-green/60">{s.step}</span>
                  <h3 className="text-lg font-bold text-white">{s.title}</h3>
                </div>
                <p className="text-white/60 text-sm leading-relaxed">{s.description}</p>
              </div>
            </motion.div>
          ))}

          {/* Renewal hint */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-3 p-4 rounded-xl bg-brand-green/5 border border-brand-green/20 mt-4"
          >
            <RefreshCw size={18} className="text-brand-green shrink-0" />
            <p className="text-sm text-white/70">
              <span className="text-white font-medium">Renovação simples:</span> acompanhe a validade de cada licença direto no painel e renove com um clique.
            </p>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};
