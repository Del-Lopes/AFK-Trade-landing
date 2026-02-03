import { motion } from 'framer-motion';
import { Cpu, Shield, Zap, BarChart3, Key, Layers } from 'lucide-react';
import { Section } from '@/components/layout/Section';

const FEATURES = [
  {
    icon: <Cpu className="w-8 h-8 text-brand-green" />,
    title: "Expert Advisors",
    description: "Access our library of verified trading bots. Plug, play, and profit."
  },
  {
    icon: <Key className="w-8 h-8 text-brand-gold" />,
    title: "Instant Licensing",
    description: "Manage your trading licenses in real-time. Activate or revoke access instantly."
  },
  {
    icon: <Zap className="w-8 h-8 text-blue-500" />,
    title: "Ultra-Low Latency",
    description: "Built on high-performance infrastructure to ensure execution at the perfect price."
  },
  {
    icon: <Shield className="w-8 h-8 text-purple-500" />,
    title: "Verified Security",
    description: "Institutional-grade encryption protects your strategies and personal data."
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-orange-500" />,
    title: "Live Analytics",
    description: "Track performance across all your connected accounts in one dashboard."
  },
  {
    icon: <Layers className="w-8 h-8 text-pink-500" />,
    title: "Strategy Builder",
    description: "Design your own custom logic without writing a single line of code."
  }
];

export const FeatureGrid = () => {
  return (
    <Section id="features" className="bg-brand-dark relative">
      <div className="text-center max-w-2xl mx-auto mb-16">
         <h2 className="text-3xl md:text-5xl font-bold bg-white bg-clip-text text-transparent mb-6">
           Everything you need to <span className="text-brand-green">automate</span> wealth.
         </h2>
         <p className="text-gray-400 text-lg">
           From battle-tested algo strategies to seamless license management. AFK Trade is the complete operating system for modern traders.
         </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         {FEATURES.map((feature, idx) => (
           <motion.div
             key={idx}
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: idx * 0.1 }}
             className="p-8 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-brand-green/30 transition-all group"
           >
              <div className="w-14 h-14 rounded-xl bg-brand-dark border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
           </motion.div>
         ))}
      </div>
    </Section>
  );
};
