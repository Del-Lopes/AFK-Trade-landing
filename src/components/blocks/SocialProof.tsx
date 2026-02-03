import { Section } from '@/components/layout/Section';

const LOGOS = [
  { name: 'MetaTrader 4', url: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Metatrader_4_logo.svg' },
  { name: 'MetaTrader 5', url: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/MetaTrader_5_logo.svg' },
  { name: 'Binance', url: 'https://upload.wikimedia.org/wikipedia/commons/5/57/Binance_Logo.png' },
  { name: 'IC Markets', url: 'https://www.icmarkets.com/assets/images/icmarkets-logo.svg' }, // Svg placeholder if needed
  { name: 'Vantage', url: 'https://www.vantagemarkets.com/wp-content/uploads/2021/10/vantage-logo-blue.svg' },
  // Duplicates for infinite scroll
  { name: 'MetaTrader 4', url: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Metatrader_4_logo.svg' },
  { name: 'MetaTrader 5', url: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/MetaTrader_5_logo.svg' },
  { name: 'Binance', url: 'https://upload.wikimedia.org/wikipedia/commons/5/57/Binance_Logo.png' },
];

export const SocialProof = () => {
  return (
    <Section className="py-10 border-y border-white/5 bg-white/2">
      <div className="text-center mb-8">
        <p className="text-sm font-medium text-gray-500 uppercase tracking-widest">Compatible with Major Brokers & Platforms</p>
      </div>

      <div className="relative flex overflow-hidden mask-gradient">
        {/* Helper mask for fading edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-brand-dark to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-brand-dark to-transparent z-10" />

        <div className="flex animate-infinite-scroll gap-12 whitespace-nowrap px-6">
          {/* We repeat the logos to ensure seamless loop */}
           {[...LOGOS, ...LOGOS, ...LOGOS].map((logo, idx) => (
             <div key={`${logo.name}-${idx}`} className="flex items-center justify-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                <span className="text-xl font-bold text-gray-400">{logo.name}</span>
                {/* 
                  Ideally we use actual SVGs here. 
                  For now I'm using text/placeholders to avoid broken image links 
                  until we have local assets.
                */}
             </div>
           ))}
        </div>
      </div>
    </Section>
  );
};
