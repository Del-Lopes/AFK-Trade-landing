import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, PlayCircle, ArrowRight } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';

export const Ecosystem = () => {
  return (
    <Section id="academy" className="py-24 bg-gradient-to-b from-brand-dark to-[#0a101f]">
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-gold/10 border border-brand-gold/20 rounded-full text-brand-gold text-sm font-medium mb-6">
               <GraduationCap size={16} />
               <span>AFK Academy</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              More than software. <br />
              <span className="text-gray-400">Master the markets.</span>
            </h2>
            
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Join a community of elite traders. Get access to exclusive masterclasses, daily market analysis, and psychological training to keep you profitable.
            </p>
            
            <ul className="space-y-4 mb-8">
               {['Algo Trading Fundamentals', 'Risk Management Masterclass', 'Python for Traders', 'Live Strategy Reviews'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-300">
                    <div className="w-6 h-6 rounded-full bg-brand-green/20 flex items-center justify-center text-brand-green">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    {item}
                  </li>
               ))}
            </ul>
            
            <Button size="lg" variant="outline" onClick={() => window.open('https://app.afktrade.com/login', '_blank')}>
               Explore the Academy <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
              {/* Featured Article Card */}
              <motion.div 
                 initial={{ opacity: 0, x: 50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 className="p-6 rounded-2xl bg-slate-800/50 border border-white/10 hover:border-brand-green/40 transition-colors group cursor-pointer"
              >
                 <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-bold text-brand-green uppercase tracking-wide">New Article</span>
                    <BookOpen className="text-gray-500" size={20} />
                 </div>
                 <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-green transition-colors">The Psychology of Automated Trading</h3>
                 <p className="text-sm text-gray-400 mb-4">Why 90% of traders fail even with winning systems, and how to fix it.</p>
                 <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span>5 min read</span>
                    <span>•</span>
                    <span>By AFK Team</span>
                 </div>
              </motion.div>

              {/* Featured Video Card */}
               <motion.div 
                 initial={{ opacity: 0, x: 50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.1 }}
                 className="p-6 rounded-2xl bg-slate-800/50 border border-white/10 hover:border-brand-gold/40 transition-colors group cursor-pointer"
              >
                 <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-bold text-brand-gold uppercase tracking-wide">Video Lesson</span>
                    <PlayCircle className="text-gray-500" size={20} />
                 </div>
                 <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-gold transition-colors">Setup your first MT5 VPS</h3>
                 <p className="text-sm text-gray-400 mb-4">Step-by-step guide to achieving 1ms latency execution.</p>
                 <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span>12 min watch</span>
                    <span>•</span>
                    <span>Hardware</span>
                 </div>
              </motion.div>
          </div>
       </div>
    </Section>
  );
};
