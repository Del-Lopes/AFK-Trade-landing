import { motion } from 'framer-motion';
import { ArrowRight, Bot, BookOpen, Key } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';

const PLATFORM_URL = 'https://app.traderafk.com';

const PILLS = [
  { icon: Bot, text: '4 Robôs de Trading' },
  { icon: Key, text: 'Licenças MT5' },
  { icon: BookOpen, text: 'Educação Completa' },
];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      {/* Ambientação */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid-fade opacity-60" />
        <div className="absolute left-1/2 top-[38%] hidden h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-green/[0.06] blur-[160px] sm:block" />
        <div className="absolute -left-40 top-24 h-[480px] w-[480px] rounded-full bg-brand-green/[0.07] blur-[120px]" />
        <div className="hairline absolute inset-x-0 top-[26%] opacity-50" />
        <svg className="absolute inset-0 hidden h-full w-full md:block" viewBox="0 0 1000 600" preserveAspectRatio="none">
          <defs>
            <linearGradient id="hero-line" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#22c55e" stopOpacity="0" />
              <stop offset="50%" stopColor="#5eea96" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M -20 360 C 220 340, 400 230, 560 260 S 880 300, 1040 240"
            fill="none"
            stroke="url(#hero-line)"
            strokeWidth="1.2"
            strokeDasharray="1200"
            className="animate-line-flow"
          />
        </svg>
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-brand-green/[0.05] to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Texto */}
        <div className="mx-auto flex max-w-4xl flex-col items-center space-y-6 text-center sm:space-y-7">
          <motion.div {...fadeUp(0)}>
            <Eyebrow pill>Plataforma completa de trading algorítmico</Eyebrow>
          </motion.div>

          <motion.h1
            {...fadeUp(0.1)}
            className="text-[2.6rem] font-bold leading-[1.02] text-white sm:text-6xl md:text-7xl lg:text-[5.5rem]"
          >
            Opere no <br className="hidden sm:block" />
            <span className="text-gradient-brand">piloto automático.</span>
          </motion.h1>

          <motion.p {...fadeUp(0.2)} className="max-w-2xl text-base leading-relaxed text-brand-muted sm:text-lg">
            Robôs de trading, licenças MT5, educação completa e programa de parceiros — tudo em uma única plataforma.
            Enquanto você vive sua vida, nossos algoritmos trabalham por você 24/7.
          </motion.p>

          <motion.div {...fadeUp(0.3)} className="flex w-full flex-col justify-center gap-3 pt-2 sm:w-auto sm:flex-row">
            <Button size="lg" onClick={() => window.open(PLATFORM_URL, '_blank')}>
              Comece Agora — É Grátis
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => window.open(PLATFORM_URL, '_blank')}>
              Acessar a Plataforma
            </Button>
          </motion.div>

          <motion.ul {...fadeUp(0.4)} className="flex flex-wrap justify-center gap-x-6 gap-y-2 pt-1">
            {PILLS.map(({ icon: Icon, text }) => (
              <li key={text} className="inline-flex items-center gap-2 text-xs text-neutral-400">
                <Icon size={14} className="text-brand-green" />
                {text}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mt-16 max-w-5xl sm:mt-20"
        >
          <div aria-hidden className="absolute -inset-x-10 -top-10 bottom-0 animate-halo rounded-[3rem] bg-brand-green/[0.08] blur-3xl" />

          <div className="relative rounded-2xl border border-white/10 bg-white/[0.02] p-1.5 shadow-[0_40px_120px_-40px_rgba(34,197,94,0.35)] backdrop-blur">
            <div className="hairline absolute inset-x-10 -top-px" />
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-white/[0.06] bg-brand-surface">
              <img
                src="/images/hero-dashboard.png"
                alt="Interface do painel Trader AFK"
                className="h-full w-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute left-4 top-4 flex items-center gap-2 rounded-lg border border-white/10 bg-brand-dark/80 px-3 py-2 backdrop-blur-md sm:left-6 sm:top-6"
              >
                <span className="h-2 w-2 animate-pulse rounded-full bg-brand-green" />
                <span className="text-xs font-medium text-white">AFK Trader — Ativo</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-4 right-4 hidden w-52 rounded-xl border border-white/10 bg-brand-dark/80 p-4 backdrop-blur-md sm:bottom-6 sm:right-6 sm:block"
              >
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-xs text-neutral-400">P&amp;L (24h)</span>
                  <span className="select-none text-xs font-bold text-brand-green blur-[4px]">+2.4%</span>
                </div>
                <div className="h-1 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[70%] rounded-full bg-gradient-to-r from-brand-green-deep to-brand-green-bright" />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
