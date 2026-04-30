import { motion } from 'framer-motion';
import { Download, Monitor, Apple, Smartphone, FileText, BarChart2, Settings, ArrowRight } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';

const DOWNLOAD_CATEGORIES = [
  {
    icon: <Monitor size={22} />,
    title: 'MetaTrader 5 — Windows',
    description: 'Versão desktop completa para Windows 7 ou superior.',
    tag: 'Recomendado',
    tagColor: 'brand-green',
    size: '17 MB',
    color: '#22c55e',
  },
  {
    icon: <Apple size={22} />,
    title: 'MetaTrader 5 — Mac',
    description: 'Instale via Wine ou use a versão web no navegador.',
    tag: 'Guia incluso',
    tagColor: 'blue-400',
    size: 'Web / Wine',
    color: '#60a5fa',
  },
  {
    icon: <Smartphone size={22} />,
    title: 'MetaTrader 5 — Mobile',
    description: 'Monitore suas operações no iOS e Android em tempo real.',
    tag: 'iOS & Android',
    tagColor: 'purple-400',
    size: 'App Store / Google Play',
    color: '#c084fc',
  },
  {
    icon: <BarChart2 size={22} />,
    title: 'Indicadores Técnicos',
    description: 'Pacote de indicadores customizados para suporte à análise.',
    tag: 'Exclusivo',
    tagColor: 'brand-gold',
    size: '3 MB',
    color: '#f59e0b',
  },
  {
    icon: <FileText size={22} />,
    title: 'Manuais e Documentação',
    description: 'Guias em PDF para instalação, configuração e uso dos robôs.',
    tag: 'PDF',
    tagColor: 'red-400',
    size: '12 MB',
    color: '#f87171',
  },
  {
    icon: <Settings size={22} />,
    title: 'Utilitários e Scripts',
    description: 'Ferramentas auxiliares para gerenciamento de ordens e risco.',
    tag: 'Membro',
    tagColor: 'emerald-400',
    size: '1.4 MB',
    color: '#34d399',
  },
];

export const Downloads = () => {
  return (
    <Section id="downloads" className="py-32 bg-brand-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="text-center mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white/60 text-sm font-medium mb-6">
          <Download size={14} />
          <span>Centro de Downloads</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Tudo que você precisa, <br />
          <span className="text-brand-green">em um só lugar.</span>
        </h2>
        <p className="text-white/60 text-lg max-w-2xl mx-auto">
          Plataformas, indicadores, manuais e utilitários — centralizados para você não perder tempo procurando.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 relative z-10">
        {DOWNLOAD_CATEGORIES.map((item, idx) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08 }}
            className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)] overflow-hidden"
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ background: `radial-gradient(ellipse at top left, ${item.color}08, transparent 60%)` }}
            />

            <div className="flex items-start justify-between mb-4">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: `${item.color}15`, border: `1px solid ${item.color}25` }}
              >
                <span style={{ color: item.color }}>{item.icon}</span>
              </div>
              <span
                className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                style={{ background: `${item.color}20`, color: item.color }}
              >
                {item.tag}
              </span>
            </div>

            <h3 className="text-base font-bold text-white mb-1.5 group-hover:text-white transition-colors">{item.title}</h3>
            <p className="text-sm text-white/50 leading-relaxed mb-4">{item.description}</p>

            <div className="flex items-center justify-between">
              <span className="text-xs text-white/30 font-mono">{item.size}</span>
              <span className="flex items-center gap-1 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: item.color }}>
                <Download size={12} />
                Baixar
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 text-center relative z-10">
        <Button size="lg" variant="outline" onClick={() => window.open('https://app.traderafk.com', '_blank')}>
          Acessar Centro de Downloads <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
        <p className="text-xs text-white/30 mt-3">Downloads completos disponíveis para membros da plataforma</p>
      </div>
    </Section>
  );
};
