import { Section } from '@/components/layout/Section';

const LOGOS = [
  { name: 'Hantec', url: '#' },
  { name: 'Vantage', url: '#' },
  { name: 'HFM', url: '#' },
  { name: 'RoboForex', url: '#' },
  { name: 'MetaTrader 5', url: '#' },
];

export const SocialProof = () => {
  return (
    <Section className="py-10 border-y border-white/5 bg-white/2">
      <div className="text-center mb-8">
        <p className="text-sm font-medium text-gray-500 uppercase tracking-widest">PRESENTE NAS PRINCIPAIS CORRETORAS</p>
      </div>

      <div className="relative flex overflow-hidden mask-gradient">
        {/* Helper mask for fading edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-brand-dark to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-brand-dark to-transparent z-10" />

        <div className="flex w-full overflow-hidden mask-gradient select-none">
          <div className="flex min-w-full shrink-0 animate-infinite-scroll items-center justify-around gap-20 pr-20">
            {LOGOS.map((logo, idx) => (
              <div key={`${logo.name}-1-${idx}`} className="flex items-center justify-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                <span className="text-2xl font-bold text-gray-400 whitespace-nowrap">{logo.name}</span>
              </div>
            ))}
          </div>
          <div className="flex min-w-full shrink-0 animate-infinite-scroll items-center justify-around gap-20 pr-20" aria-hidden="true">
            {LOGOS.map((logo, idx) => (
              <div key={`${logo.name}-2-${idx}`} className="flex items-center justify-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                <span className="text-2xl font-bold text-gray-400 whitespace-nowrap">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};
