import { ArrowRight, Users, DollarSign, Globe } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';

export const Partners = () => {
  return (
    <Section id="partners" className="bg-brand-dark py-24 relative overflow-hidden">
       {/* Background Decoration */}
       <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 grayscale"></div>
       <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-brand-green/10 blur-[100px] rounded-full pointer-events-none"></div>

       <div className="relative z-10 max-w-5xl mx-auto bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-3xl p-8 md:p-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-white text-sm font-medium mb-8">
             <Users size={16} />
             <span>Partner Program</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
             Grow with <span className="text-brand-green">AFK Trade</span>.
          </h2>
          
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
             Earn lifetime commissions by referring traders to the most advanced automated trading ecosystem. Get paid for every license and subscription.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 text-left">
             <div className="bg-brand-dark/50 p-6 rounded-xl border border-white/5">
                <DollarSign className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">High Commissions</h3>
                <p className="text-sm text-gray-400">Up to 30% recurring revenue share on all referrals.</p>
             </div>
             <div className="bg-brand-dark/50 p-6 rounded-xl border border-white/5">
                <Globe className="w-10 h-10 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Global Reach</h3>
                <p className="text-sm text-gray-400">Promote to traders in over 100+ countries with localized assets.</p>
             </div>
             <div className="bg-brand-dark/50 p-6 rounded-xl border border-white/5">
                <Users className="w-10 h-10 text-brand-gold mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Dedicated Support</h3>
                <p className="text-sm text-gray-400">Get a personal account manager to help you scale.</p>
             </div>
          </div>

          <Button size="lg" onClick={() => window.open('https://app.afktrade.com/register?type=partner', '_blank')}>
             Become a Partner <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
       </div>
    </Section>
  );
};
