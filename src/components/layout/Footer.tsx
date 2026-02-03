import { Section } from '@/components/layout/Section';
import { Twitter, Instagram, Linkedin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-brand-dark border-t border-white/5 pt-16 pb-8">
      <Section className="py-0">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2 space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-brand-green to-brand-emerald bg-clip-text text-transparent">
              AFK Trade
            </h3>
            <p className="text-gray-400 max-w-sm">
              Automated trading solutions for the modern investor. Institutional grade security, retail accessibility.
            </p>
            <div className="flex gap-4 text-gray-400">
              <a href="#" className="hover:text-brand-green transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-brand-green transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-brand-green transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6">Product</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-brand-green transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-brand-green transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-brand-green transition-colors">Live Performance</a></li>
              <li><a href="#" className="hover:text-brand-green transition-colors">Roadmap</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-brand-green transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-green transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-brand-green transition-colors">Risk Disclosure</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center bg-brand-dark">
           <p className="text-xs text-gray-500">
             © {new Date().getFullYear()} AFK Trade. All rights reserved.
           </p>
           <p className="text-xs text-gray-600 mt-2 md:mt-0">
             Trading involves substantial risk and is not suitable for every investor.
           </p>
        </div>
      </Section>
    </footer>
  );
};
