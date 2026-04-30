import { motion } from 'framer-motion';
import { User, Users, Anchor, ShieldCheck, Check, ArrowRight } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';

const PROFILES = [
  {
    icon: <User size={24} />,
    role: 'Cliente',
    tagline: 'Para quem quer operar',
    description: 'Acesso completo ao ecossistema de trading automatizado. Ideal para quem quer operar com Expert Advisors no MetaTrader 5.',
    features: [
      'Catálogo de Expert Advisors',
      'Gestão de licenças MT5',
      'Biblioteca de cursos e vídeos',
      'Análises e artigos de mercado',
      'Centro de downloads',
      'Painel do usuário',
    ],
    color: '#22c55e',
    cta: 'Começar como Cliente',
    highlight: false,
  },
  {
    icon: <Users size={24} />,
    role: 'Parceiro',
    tagline: 'Para quem quer crescer',
    description: 'Tudo do Cliente mais o painel completo de afiliados. Indique traders e receba participações recorrentes baseadas em volume.',
    features: [
      'Tudo do Cliente',
      'Painel de gestão de prospects',
      'Materiais de marketing prontos',
      'Links personalizados rastreáveis',
      'Pipeline de vendas visual',
      'Participação por volume (fee + rebate)',
    ],
    color: '#60a5fa',
    cta: 'Ser Parceiro',
    highlight: true,
  },
  {
    icon: <Anchor size={24} />,
    role: 'First Mate',
    tagline: 'Para quem quer liderar',
    description: 'Nível avançado com acesso à tesouraria financeira e relatórios consolidados da operação.',
    features: [
      'Tudo do Parceiro',
      'Módulo de tesouraria',
      'Relatórios financeiros completos',
      'Gestão de equipe de parceiros',
      'Acesso a métricas avançadas',
    ],
    color: '#f59e0b',
    cta: 'Saber mais',
    highlight: false,
  },
  {
    icon: <ShieldCheck size={24} />,
    role: 'Admin',
    tagline: 'Controle total',
    description: 'Acesso irrestrito à plataforma. Gerencia usuários, licenças, conteúdo e configurações globais.',
    features: [
      'Tudo do First Mate',
      'Gestão de usuários e papéis',
      'Controle de licenças emitidas',
      'Publicação de conteúdo',
      'Configurações da plataforma',
    ],
    color: '#c084fc',
    cta: 'Contato',
    highlight: false,
  },
];

export const Profiles = () => {
  return (
    <Section id="profiles" className="py-32 bg-gradient-to-b from-slate-900 to-brand-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px] pointer-events-none" />

      <div className="text-center mb-16 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Para quem é o <span className="text-brand-green">Trader AFK?</span>
        </h2>
        <p className="text-white/60 text-lg max-w-2xl mx-auto">
          Quatro perfis de acesso, cada um com ferramentas específicas para o seu momento. Do iniciante ao operador avançado.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 relative z-10">
        {PROFILES.map((profile, idx) => (
          <motion.div
            key={profile.role}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className={`relative flex flex-col p-7 rounded-2xl border transition-all duration-300 overflow-hidden ${
              profile.highlight
                ? 'border-2 bg-white/8 shadow-2xl'
                : 'border-white/10 bg-white/5 hover:border-white/20'
            }`}
            style={profile.highlight ? { borderColor: profile.color } : {}}
          >
            {/* Subtle background glow */}
            <div
              className="absolute inset-0 pointer-events-none opacity-30"
              style={{ background: `radial-gradient(ellipse at top, ${profile.color}10, transparent 60%)` }}
            />

            {profile.highlight && (
              <div
                className="absolute top-0 right-0 px-3 py-1 text-xs font-bold rounded-bl-xl rounded-tr-xl"
                style={{ background: profile.color, color: '#0f172a' }}
              >
                MAIS POPULAR
              </div>
            )}

            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
              style={{ background: `${profile.color}15`, border: `1px solid ${profile.color}30` }}
            >
              <span style={{ color: profile.color }}>{profile.icon}</span>
            </div>

            <h3 className="text-xl font-bold text-white mb-1">{profile.role}</h3>
            <p className="text-xs font-medium mb-3" style={{ color: profile.color }}>{profile.tagline}</p>
            <p className="text-sm text-white/60 leading-relaxed mb-6">{profile.description}</p>

            <ul className="space-y-2 mb-8 flex-1">
              {profile.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-white/70">
                  <Check size={13} style={{ color: profile.color }} className="mt-0.5 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            <Button
              variant={profile.highlight ? 'primary' : 'outline'}
              size="sm"
              className="w-full mt-auto"
              onClick={() => window.open('https://app.traderafk.com/register', '_blank')}
            >
              {profile.cta} <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
