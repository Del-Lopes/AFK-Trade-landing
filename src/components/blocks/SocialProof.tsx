import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Section } from '@/components/layout/Section';

const LOGOS = [
  { name: 'Hantec', url: '/hantec' },
  { name: 'Vantage', url: '/vantage' },
  { name: 'HFM', url: '/hfm' },
  { name: 'RoboForex', url: '/roboforex' },
  { name: 'MetaTrader 5', url: '#' },
];

const STATS = [
  { value: '100+', label: 'Traders Ativos', color: '#22c55e' },
  { value: '4', label: 'Expert Advisors', color: '#60a5fa' },
  { value: '24/7', label: 'Operação Contínua', color: '#a78bfa' },
  { value: '5+', label: 'Corretoras Parceiras', color: '#f59e0b' },
];

const TESTIMONIALS = [
  {
    name: 'Carlos M.',
    role: 'Trader desde 2021',
    avatar: 'CM',
    text: 'Depois que comecei a usar o AFK Trader na Hantec, minha rentabilidade ficou muito mais consistente. Antes eu ficava horas na frente do gráfico e nem assim conseguia resultados assim.',
    stars: 5,
    color: '#22c55e',
  },
  {
    name: 'Fernanda L.',
    role: 'Investidora iniciante',
    avatar: 'FL',
    text: 'O onboarding da plataforma me guiou desde o zero. Em menos de uma semana já estava com o Snow Ball operando. A biblioteca de cursos fez toda a diferença.',
    stars: 5,
    color: '#60a5fa',
  },
  {
    name: 'Rafael T.',
    role: 'Parceiro Trader AFK',
    avatar: 'RT',
    text: 'Como parceiro, o painel de gestão de prospects é incrível. Consigo acompanhar cada lead pelo pipeline e os materiais de marketing pouparam horas de trabalho.',
    stars: 5,
    color: '#f59e0b',
  },
];

export const SocialProof = () => {
  return (
    <>
      {/* Logo carousel */}
      <Section className="py-10 border-y border-white/5 bg-white/2">
        <div className="text-center mb-8">
          <p className="text-sm font-medium text-white/50 uppercase tracking-widest">Presente nas principais corretoras</p>
        </div>

        <div className="relative flex overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-brand-dark to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-brand-dark to-transparent z-10" />

          <div className="flex w-full overflow-hidden select-none">
            <div className="flex min-w-full shrink-0 animate-infinite-scroll items-center justify-around gap-20 pr-20">
              {LOGOS.map((logo, idx) => (
                <a
                  href={logo.url}
                  key={`${logo.name}-1-${idx}`}
                  className={`flex items-center justify-center opacity-50 hover:opacity-100 transition-all duration-300 ${logo.url !== '#' ? 'cursor-pointer' : 'cursor-default'}`}
                >
                  <span className="text-2xl font-bold text-white whitespace-nowrap hover:text-brand-green transition-colors">{logo.name}</span>
                </a>
              ))}
            </div>
            <div className="flex min-w-full shrink-0 animate-infinite-scroll items-center justify-around gap-20 pr-20" aria-hidden="true">
              {LOGOS.map((logo, idx) => (
                <a
                  href={logo.url}
                  key={`${logo.name}-2-${idx}`}
                  className={`flex items-center justify-center opacity-50 hover:opacity-100 transition-all duration-300 ${logo.url !== '#' ? 'cursor-pointer' : 'cursor-default'}`}
                >
                  <span className="text-2xl font-bold text-white whitespace-nowrap hover:text-brand-green transition-colors">{logo.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Stats */}
      <Section className="py-16 bg-brand-dark border-b border-white/5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
          {STATS.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center p-6 rounded-2xl bg-white/5 border border-white/5"
            >
              <strong className="block text-4xl font-bold mb-1" style={{ color: stat.color }}>{stat.value}</strong>
              <span className="text-sm text-white/60">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section id="testimonials" className="py-24 bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px] pointer-events-none" />

        <div className="text-center mb-14 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            O que os traders <span className="text-brand-green">estão dizendo</span>
          </h2>
          <p className="text-white/50 text-base max-w-xl mx-auto">
            Depoimentos reais de membros da plataforma Trader AFK.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12 }}
              className="relative p-7 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 group overflow-hidden"
            >
              <div
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(ellipse at top left, ${t.color}08, transparent 60%)` }}
              />

              <Quote size={28} className="mb-4 opacity-20" style={{ color: t.color }} />

              <p className="text-white/75 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{ background: `${t.color}20`, color: t.color }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{t.name}</p>
                    <p className="text-xs text-white/40">{t.role}</p>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} size={12} className="fill-current text-brand-gold" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
};
