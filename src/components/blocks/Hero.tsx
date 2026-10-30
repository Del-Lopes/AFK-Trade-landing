import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, BrainCircuit, CalendarClock, Flame, GraduationCap, Sparkles, Users } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { cn } from '@/lib/cn';

const PLATFORM_URL = 'https://app.traderafk.com';

const PILLS = [
  { icon: GraduationCap, text: 'Trilha interativa' },
  { icon: BrainCircuit, text: 'Ferramentas de IA' },
  { icon: Users, text: 'Comunidade de aprendizado' },
];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
});

// Mock estático do app: lição da Trilha Gain, análise por IA e calendário.
// Os valores são ilustrativos, não vêm da plataforma.
const QUIZ_OPTIONS = [
  { text: 'Os vendedores dominaram o período', correct: false },
  { text: 'Houve rejeição de preços mais baixos', correct: true },
  { text: 'O mercado está sem liquidez', correct: false },
];

const TIMEFRAMES = [
  { tf: 'M15', up: true },
  { tf: 'H1', up: true },
  { tf: 'H4', up: true },
  { tf: 'D1', up: false },
];

const CANDLES = [
  { o: 62, c: 48, h: 40, l: 70 },
  { o: 48, c: 54, h: 44, l: 60 },
  { o: 54, c: 40, h: 34, l: 58 },
  { o: 40, c: 46, h: 36, l: 52 },
  { o: 46, c: 32, h: 28, l: 50 },
  { o: 38, c: 33, h: 30, l: 82 },
];

const LessonCard = () => (
  <div className="glass-card flex h-full flex-col p-4 sm:p-5">
    <div className="mb-4 flex items-center justify-between gap-3">
      <div className="flex min-w-0 items-center gap-2">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-brand-green/30 bg-brand-green/10 text-brand-green">
          <BookOpen size={14} />
        </span>
        <div className="min-w-0">
          <p className="truncate text-[11px] uppercase tracking-[0.18em] text-brand-subtle">Trilha Gain</p>
          <p className="truncate text-sm font-medium text-white">Leitura de candles</p>
        </div>
      </div>
      <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] px-2 py-0.5 text-[11px] text-neutral-300">
        <Flame size={12} className="text-brand-gold" />5 dias
      </span>
    </div>

    <div className="mb-4 h-1 overflow-hidden rounded-full bg-white/10">
      <div className="h-full w-[60%] rounded-full bg-gradient-to-r from-brand-green-deep to-brand-green-bright" />
    </div>

    <div className="flex flex-1 flex-col gap-4 sm:flex-row">
      <svg viewBox="0 0 120 100" className="h-28 w-full shrink-0 self-center rounded-lg border border-white/[0.06] bg-brand-dark/60 sm:h-36 sm:w-40" aria-hidden>
        {CANDLES.map((k, i) => {
          const x = 14 + i * 18;
          const up = k.c < k.o;
          const last = i === CANDLES.length - 1;
          return (
            <g key={i} opacity={last ? 1 : 0.55}>
              <line x1={x} x2={x} y1={k.h} y2={k.l} stroke={up ? '#22c55e' : '#ef4444'} strokeWidth="1.2" />
              <rect
                x={x - 4}
                y={Math.min(k.o, k.c)}
                width="8"
                height={Math.max(Math.abs(k.o - k.c), 2)}
                rx="1"
                fill={up ? '#22c55e' : '#ef4444'}
              />
              {last && <circle cx={x} cy={k.l - 6} r="7" fill="none" stroke="#5eea96" strokeDasharray="2 2" />}
            </g>
          );
        })}
      </svg>

      <div className="min-w-0 flex-1">
        <p className="mb-3 text-sm leading-snug text-neutral-200">
          O que a sombra inferior longa do último candle indica?
        </p>
        <ul className="space-y-2">
          {QUIZ_OPTIONS.map((opt) => (
            <li
              key={opt.text}
              className={cn(
                'rounded-md border px-3 py-2 text-xs',
                opt.correct
                  ? 'border-brand-green/50 bg-brand-green/10 text-white'
                  : 'border-white/[0.08] bg-white/[0.02] text-brand-muted'
              )}
            >
              {opt.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const AnalysisCard = () => (
  <div className="glass-card p-4 sm:p-5">
    <div className="mb-3 flex items-center justify-between gap-2">
      <div className="flex items-center gap-2">
        <BrainCircuit size={15} className="text-brand-green" />
        <p className="text-sm font-medium text-white">Análise por IA</p>
      </div>
      <span className="font-mono text-[11px] text-brand-subtle">XAU/USD</span>
    </div>
    <div className="mb-3 grid grid-cols-4 gap-1.5">
      {TIMEFRAMES.map(({ tf, up }) => (
        <div key={tf} className="rounded-md border border-white/[0.06] bg-white/[0.02] py-1.5 text-center">
          <p className="font-mono text-[10px] text-brand-subtle">{tf}</p>
          <p className={cn('text-xs font-semibold', up ? 'text-brand-green' : 'text-red-400')}>{up ? '▲' : '▼'}</p>
        </div>
      ))}
    </div>
    <p className="text-xs leading-relaxed text-brand-muted">
      Tendência de alta no curto prazo, com médias alinhadas. O diário segue lateral: atenção ao dado de emprego dos EUA.
    </p>
  </div>
);

const CalendarCard = () => (
  <div className="glass-card p-4 sm:p-5">
    <div className="mb-3 flex items-center gap-2">
      <CalendarClock size={15} className="text-brand-green" />
      <p className="text-sm font-medium text-white">Payroll (EUA)</p>
      <span className="ml-auto rounded-full border border-red-400/30 bg-red-500/10 px-2 py-0.5 text-[10px] uppercase tracking-[0.15em] text-red-300">
        Alta
      </span>
    </div>
    <div className="space-y-1.5 text-xs">
      <div className="flex justify-between gap-2">
        <span className="text-brand-muted">Acima do esperado</span>
        <span className="text-neutral-200">dólar tende a subir</span>
      </div>
      <div className="flex justify-between gap-2">
        <span className="text-brand-muted">Abaixo do esperado</span>
        <span className="text-neutral-200">ouro tende a subir</span>
      </div>
    </div>
  </div>
);

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
            <Eyebrow pill>Plataforma de aprendizado para traders</Eyebrow>
          </motion.div>

          <motion.h1
            {...fadeUp(0.1)}
            className="text-[2.4rem] font-bold leading-[1.04] text-white sm:text-6xl md:text-7xl"
          >
            Do primeiro candle à <br className="hidden sm:block" />
            <span className="text-gradient-brand">sua própria leitura de mercado.</span>
          </motion.h1>

          <motion.p {...fadeUp(0.2)} className="max-w-2xl text-base leading-relaxed text-brand-muted sm:text-lg">
            Aprenda com lições interativas, analise o contexto com IA e acompanhe a equipe ao vivo, com método e
            disciplina, tudo em uma única plataforma.
          </motion.p>

          <motion.div {...fadeUp(0.3)} className="flex w-full flex-col items-center gap-3 pt-2">
            <div className="flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
              <Button size="lg" onClick={() => window.open(PLATFORM_URL, '_blank')}>
                Começar grátis
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => document.getElementById('aprender')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ver como funciona
              </Button>
            </div>
            <p className="inline-flex items-center gap-1.5 text-xs text-brand-green/90">
              <Sparkles size={13} />
              Tokens de boas-vindas para a IA de trading
            </p>
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

        {/* Visual: mosaico do app */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mt-16 max-w-5xl sm:mt-20"
        >
          <div aria-hidden className="absolute -inset-x-10 -top-10 bottom-0 animate-halo rounded-[3rem] bg-brand-green/[0.08] blur-3xl" />

          <div
            role="img"
            aria-label="Ilustração da plataforma Trader AFK: lição da Trilha Gain, análise por IA e calendário econômico"
            className="relative rounded-2xl border border-white/10 bg-white/[0.02] p-1.5 shadow-[0_40px_120px_-40px_rgba(34,197,94,0.35)] backdrop-blur"
          >
            <div className="hairline absolute inset-x-10 -top-px" />
            <div className="relative overflow-hidden rounded-xl border border-white/[0.06] bg-brand-surface p-3 text-left sm:p-5">
              <div className="grid gap-3 sm:gap-4 md:grid-cols-5">
                <div className="md:col-span-3">
                  <LessonCard />
                </div>
                <div className="grid gap-3 sm:gap-4 md:col-span-2">
                  <AnalysisCard />
                  <div className="hidden sm:block">
                    <CalendarCard />
                  </div>
                </div>
              </div>

              <div className="mt-3 flex flex-col-reverse gap-3 sm:mt-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                  Imagem ilustrativa · conteúdo informativo, não é recomendação
                </p>
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="flex w-fit items-center gap-2 rounded-lg border border-white/10 bg-brand-dark/85 px-3 py-2 backdrop-blur-md"
                >
                  <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
                  <span className="text-xs font-medium text-white">Ao vivo agora · Sala ao Vivo</span>
                </motion.div>
              </div>
            </div>
          </div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-5 -left-6 hidden items-center gap-2 rounded-xl border border-brand-green/30 bg-brand-dark/90 px-3.5 py-2.5 backdrop-blur-md sm:flex"
          >
            <Sparkles size={14} className="text-brand-green" />
            <span className="text-xs font-medium text-white">Lição concluída · +Coins</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
