import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { Cpu, Database, Globe, Layers, Network, Shield, TrendingUp } from 'lucide-react';

export const AlgoEngine = () => {
  return (
    <Section className="py-24 overflow-hidden">
      <div className="text-center mb-20 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Um Ecossistema de <span className="text-brand-green">Renda Passiva</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-3xl mx-auto">
          Não dependa de uma única estratégia. Nossa plataforma conecta múltiplos algoritmos trabalhando simultaneamente para diversificar seu risco.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto h-[700px] md:h-[800px] flex items-center justify-center">
        {/* Central Core */}
        <motion.div 
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ scale: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
          className="relative z-20 w-32 h-32 md:w-48 md:h-48 rounded-full border border-brand-green/30 flex items-center justify-center bg-brand-dark/80 backdrop-blur-xl shadow-[0_0_60px_rgba(34,197,94,0.2)]"
        >
          <div className="text-center">
            <div className="flex justify-center mb-2">
              <img src="/images/logo-icon.png" alt="Core" className="w-10 h-10 opacity-80" />
            </div>
            <span className="text-brand-green font-bold text-lg tracking-wider">AFK DASHBOARD</span>
            <div className="text-[10px] text-white mt-1 font-mono uppercase font-medium">RENDA PASSIVA</div>
          </div>
          
          {/* Inner Rings */}
          <div className="absolute inset-0 border border-brand-green/10 rounded-full animate-ping [animation-duration:3s]" />
          <div className="absolute -inset-4 border border-brand-green/5 rounded-full" />
        </motion.div>

        {/* Orbiting Satellite Nodes - Inner Ring (System) */}
        <Satellite angle={0} icon={<Cpu size={20} />} label="Forex Algo" delay={0} distance={150} duration={60} />
        <Satellite angle={60} icon={<Globe size={20} />} label="Crypto Bot" delay={1} distance={150} duration={60} />
        <Satellite angle={120} icon={<Shield size={20} />} label="Risk Guard" delay={2} distance={150} duration={60} />
        <Satellite angle={180} icon={<Database size={20} />} label="AlgoTrading" delay={3} distance={150} duration={60} />
        <Satellite angle={240} icon={<Network size={20} />} label="Copy Trading" delay={4} distance={150} duration={60} />
        <Satellite angle={300} icon={<Layers size={20} />} label="Expert Advisors" delay={5} distance={150} duration={60} />

        {/* Orbiting Satellite Nodes - Outer Ring (Strategies) */}
        <Satellite angle={0} icon={<TrendingUp size={16} />} label="Black Soldier" subLabel="Hantec" performance="+12.4%" delay={0} distance={260} duration={90} />
        <Satellite angle={72} icon={<TrendingUp size={16} />} label="Snow Ball" subLabel="HFM" performance="+8.1%" delay={1} distance={260} duration={90} />
        <Satellite angle={144} icon={<TrendingUp size={16} />} label="Golden Soldier" subLabel="Vantage" performance="+15.3%" delay={2} distance={260} duration={90} />
        <Satellite angle={216} icon={<TrendingUp size={16} />} label="Osher EA" subLabel="Hantec" performance="+6.7%" delay={3} distance={260} duration={90} />
        <Satellite angle={288} icon={<TrendingUp size={16} />} label="Domus" subLabel="RoboForex" performance="+9.2%" delay={4} distance={260} duration={90} />
        
        {/* Connecting Lines (Decorative SVG) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20 z-0">
           {/* Outer Ring */}
           <circle cx="50%" cy="50%" r="260" fill="none" stroke="currentColor" className="text-brand-green" strokeDasharray="4 4" />
           {/* Inner Ring */}
           <circle cx="50%" cy="50%" r="150" fill="none" stroke="currentColor" className="text-brand-green" strokeDasharray="2 2" />
        </svg>

      </div>
    </Section>
  );
};

interface SatelliteProps {
    angle: number;
    icon: React.ReactNode;
    label: string;
    subLabel?: string;
    performance?: string;
    delay: number;
    distance: number;
    duration: number;
}

const Satellite = ({ angle, icon, label, subLabel, performance, delay, distance, duration }: SatelliteProps) => {
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
        className="absolute w-24 h-24 bg-slate-800/80 border border-white/10 rounded-full flex flex-col items-center justify-center p-2 backdrop-blur-md shadow-lg shadow-black/50"
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
               {performance && <span className="text-[10px] font-bold text-emerald-400">{performance}</span>}
            </div>
            
            <span className="text-[10px] font-bold text-gray-200 uppercase px-1 line-clamp-2">{label}</span>
            {subLabel && <span className="text-[8px] font-medium text-gray-500 mt-0.5">{subLabel}</span>}
         </motion.div>
      </div>
    </motion.div>
  );
};
