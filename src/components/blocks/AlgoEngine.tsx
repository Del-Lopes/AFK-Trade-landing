import type React from 'react';
import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { Backdrop } from '@/components/ui/Backdrop';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Cpu, Database, Globe, Layers, Network, Shield, TrendingUp } from 'lucide-react';

export const AlgoEngine = () => {
  return (
    <Section divider>
      <Backdrop variant="glow" />

      <SectionHeader
        eyebrow="Ecossistema"
        title={
          <>
            Um Ecossistema de <span className="text-gradient-brand">Trading Automatizado</span>
          </>
        }
        description="Não dependa de uma única estratégia. Nossa plataforma oferece múltiplos algoritmos para você se conectar e diversificar seu risco."
        className="mb-4 sm:mb-6"
      />

      {/* Wrapper reduz a órbita no mobile sem alterar o layout interno */}
      <div className="relative mx-auto h-[360px] max-w-4xl sm:h-[600px] md:h-[650px]">
      <div className="absolute left-1/2 top-1/2 flex h-[650px] w-[896px] max-w-none -translate-x-1/2 -translate-y-1/2 scale-[0.52] items-center justify-center sm:scale-[0.9] md:scale-100">
        {/* Halo difuso atrás do núcleo */}
        <div aria-hidden className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-green/[0.06] blur-[100px]" />

        {/* Central Core */}
        <motion.div 
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ scale: { duration: 5, repeat: Infinity, ease: "easeInOut" } }}
          className="relative z-20 flex h-48 w-48 items-center justify-center rounded-full border border-brand-green/30 bg-brand-dark/80 shadow-[0_30px_80px_-30px_rgba(34,197,94,0.45)] backdrop-blur-xl"
        >
          <div className="text-center">
            <div className="flex justify-center mb-2">
              <img src="/images/logo-icon.png" alt="Core" className="w-10 h-10 opacity-80" />
            </div>
            <span className="font-display text-lg font-bold tracking-wider text-gradient-brand">TRADER AFK</span>
            <div className="mt-1 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-brand-muted">ALGO TRADING</div>
          </div>
          
          {/* Inner Rings */}
          <div className="absolute -inset-4 rounded-full border border-brand-green/10" />
          <div className="absolute -inset-10 rounded-full border border-white/[0.04]" />
        </motion.div>

        {/* Orbiting Satellite Nodes - Inner Ring (System) */}
        <Satellite angle={0} icon={<Cpu size={20} />} label="Forex Algo" delay={0} distance={150} duration={60} />
        <Satellite angle={60} icon={<Globe size={20} />} label="Crypto Bot" delay={1} distance={150} duration={60} />
        <Satellite angle={120} icon={<Shield size={20} />} label="Risk Guard" delay={2} distance={150} duration={60} />
        <Satellite angle={180} icon={<Database size={20} />} label="AlgoTrading" delay={3} distance={150} duration={60} />
        <Satellite angle={240} icon={<Network size={20} />} label="Copy Trading" delay={4} distance={150} duration={60} />
        <Satellite angle={300} icon={<Layers size={20} />} label="Expert Advisors" delay={5} distance={150} duration={60} />

        {/* Orbiting Satellite Nodes - Outer Ring (Strategies) */}
        <Satellite angle={0} icon={<TrendingUp size={16} />} label="Black Soldier" subLabel="Hantec" delay={0} distance={260} duration={90} />
        <Satellite angle={72} icon={<TrendingUp size={16} />} label="Snow Ball" subLabel="HFM" delay={1} distance={260} duration={90} />
        <Satellite angle={144} icon={<TrendingUp size={16} />} label="Golden Soldier" subLabel="Vantage" delay={2} distance={260} duration={90} />
        <Satellite angle={216} icon={<TrendingUp size={16} />} label="Osher EA" subLabel="Hantec" delay={3} distance={260} duration={90} />
        <Satellite angle={288} icon={<TrendingUp size={16} />} label="Domus" subLabel="RoboForex" delay={4} distance={260} duration={90} />
        
        {/* Connecting Lines (Decorative SVG) */}
        <svg aria-hidden className="absolute inset-0 w-full h-full pointer-events-none opacity-25 z-0">
           {/* Outer Ring */}
           <circle cx="50%" cy="50%" r="260" fill="none" stroke="currentColor" className="text-brand-green" strokeDasharray="4 4" />
           {/* Inner Ring */}
           <circle cx="50%" cy="50%" r="150" fill="none" stroke="currentColor" className="text-brand-green" strokeDasharray="2 2" />
        </svg>

      </div>
      </div>
    </Section>
  );
};

interface SatelliteProps {
    angle: number;
    icon: React.ReactNode;
    label: string;
    subLabel?: string;
    delay: number;
    distance: number;
    duration: number;
}

const Satellite = ({ angle, icon, label, subLabel, delay, distance, duration }: SatelliteProps) => {
  return (
    <motion.div
      className="absolute"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, rotate: 360 }}
      transition={{ 
        opacity: { duration: 1 },
        rotate: { duration: duration, repeat: Infinity, ease: "linear", delay: -delay * (duration/6) }
      }}
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div 
        className="absolute flex h-24 w-24 flex-col items-center justify-center rounded-full border border-white/10 bg-brand-surface/85 p-2 shadow-lg shadow-black/50 backdrop-blur-md transition-colors duration-500 hover:border-brand-green/40"
        style={{
            transform: `rotate(${angle}deg) translate(${distance}px) rotate(-${angle}deg)`, 
        }}
      >
        {/* Counter-rotate the content */}
         <motion.div 
            animate={{ rotate: -360 }} 
            transition={{ duration: duration, repeat: Infinity, ease: "linear", delay: -delay * (duration/6) }}
            className="flex flex-col items-center text-center leading-tight w-full"
         >
            <div className="flex items-center gap-1 text-brand-green mb-0.5">
               {icon}
            </div>
            
            <span className="px-1 font-display text-[10px] font-semibold uppercase tracking-wide text-neutral-200 line-clamp-2">{label}</span>
            {subLabel && <span className="mt-0.5 text-[8px] font-medium uppercase tracking-[0.15em] text-brand-subtle">{subLabel}</span>}
         </motion.div>
      </div>
    </motion.div>
  );
};
