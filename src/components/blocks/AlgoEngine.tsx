import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { Cpu, Database, Globe, Layers, Network, Shield } from 'lucide-react';

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

      <div className="relative max-w-4xl mx-auto h-[500px] md:h-[600px] flex items-center justify-center">
        {/* Central Core */}
        <motion.div 
          animate={{ scale: [1, 1.05, 1], rotate: 360 }}
          transition={{ scale: { duration: 4, repeat: Infinity }, rotate: { duration: 100, repeat: Infinity, ease: "linear" } }}
          className="relative z-20 w-48 h-48 md:w-64 md:h-64 rounded-full border border-brand-green/30 flex items-center justify-center bg-brand-dark/80 backdrop-blur-xl shadow-[0_0_60px_rgba(34,197,94,0.2)]"
        >
          <div className="text-center">
            <div className="flex justify-center mb-2">
              <img src="/images/logo-icon.png" alt="Core" className="w-12 h-12 opacity-80" />
            </div>
            <span className="text-brand-green font-bold text-xl tracking-wider">AFK ENGINE</span>
            <div className="text-xs text-brand-green/60 mt-2 font-mono">STATUS: ONLINE</div>
          </div>
          
          {/* Inner Rings */}
          <div className="absolute inset-0 border border-brand-green/10 rounded-full animate-ping [animation-duration:3s]" />
          <div className="absolute -inset-4 border border-brand-green/5 rounded-full" />
        </motion.div>

        {/* Orbiting Satellite Nodes */}
        <Satellite angle={0} icon={<Cpu size={20} />} label="Forex Algo" delay={0} />
        <Satellite angle={60} icon={<Globe size={20} />} label="Crypto Bot" delay={1} />
        <Satellite angle={120} icon={<Shield size={20} />} label="Risk Guard" delay={2} />
        <Satellite angle={180} icon={<Database size={20} />} label="Big Data" delay={3} />
        <Satellite angle={240} icon={<Network size={20} />} label="Copy Trading" delay={4} />
        <Satellite angle={300} icon={<Layers size={20} />} label="HFT Layer" delay={5} />
        
        {/* Connecting Lines (Decorative SVG) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20 z-0">
           <circle cx="50%" cy="50%" r="35%" fill="none" stroke="currentColor" className="text-brand-green" strokeDasharray="4 4" />
           <circle cx="50%" cy="50%" r="20%" fill="none" stroke="currentColor" className="text-brand-green" />
        </svg>

      </div>
    </Section>
  );
};

const Satellite = ({ angle, icon, label, delay }: { angle: number, icon: React.ReactNode, label: string, delay: number }) => {
  return (
    <motion.div
      className="absolute"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, rotate: 360 }}
      transition={{ 
        opacity: { duration: 1 },
        rotate: { duration: 60, repeat: Infinity, ease: "linear", delay: -delay * 10 } // Negative delay creates offset
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
        className="absolute w-16 h-16 md:w-20 md:h-20 bg-slate-800/80 border border-white/10 rounded-xl flex flex-col items-center justify-center gap-1 backdrop-blur-md shadow-lg"
        style={{
            transform: `rotate(${angle}deg) translate(140px) rotate(-${angle}deg)`, // Fixed position in orbit
            // Note: The parent rotates, so we need to counter-rotate carefully if we want the text upright, 
            // OR we just position them absolutely with math.
            // Let's rely on a simpler orbit css approach if possible, but for now simple transform is easier.
            // Actually, to make them orbit "around", the parent container is rotating.
            // To keep text upright while orbiting requires counter-rotation.
        }}
      >
        {/* Counter-rotate the content to keep it upright while the parent container spins */}
         <motion.div 
            animate={{ rotate: -360 }} 
            transition={{ duration: 60, repeat: Infinity, ease: "linear", delay: -delay * 10 }}
            className="flex flex-col items-center"
         >
            <div className="text-brand-green mb-1">{icon}</div>
            <span className="text-[10px] font-bold text-gray-300 uppercase">{label}</span>
         </motion.div>
      </div>
    </motion.div>
  );
};
