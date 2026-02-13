import { HelmetProvider, Helmet } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/blocks/Hero';
import { SocialProof } from '@/components/blocks/SocialProof';
import { FeatureGrid } from '@/components/blocks/FeatureGrid';
import { Ecosystem } from '@/components/blocks/Ecosystem';
import { Partners } from '@/components/blocks/Partners';
import { Manifesto } from '@/components/blocks/Manifesto';
import { Comparison } from '@/components/blocks/Comparison';
import { AlgoEngine } from '@/components/blocks/AlgoEngine';
import { Pricing } from '@/components/blocks/Pricing';
import { PlatformTour } from '@/components/blocks/PlatformTour';
import { SparklesCore } from '@/components/ui/SparklesCore';

function LandingPage() {
  return (
    <div className="min-h-screen bg-brand-dark text-white selection:bg-brand-green/30 font-sans">
      <Helmet>
        <title>AFK Trade | Automatize seus Lucros</title>
        <meta name="description" content="Institutional-grade automated trading systems. Stop staring at charts and start profiting with AFK Trade." />
      </Helmet>
      
      <Navbar />
      
      {/* Background Sparkles */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={40}
          className="w-full h-full"
          particleColor="#FFFFFF"
          speed={2}
        />
      </div>
      
      <main className="relative z-10">
        <Hero />
        <SocialProof />
        <Manifesto />
        <AlgoEngine />
        <Comparison />
        <FeatureGrid />
        <PlatformTour />
        <Ecosystem />
        <Pricing />
        <Partners />
      </main>
      <Footer />
    </div>
  );
}

import { HFMPage } from '@/pages/HFMPage';
import { StartPage } from '@/pages/StartPage';
import { MissionPage } from '@/pages/MissionPage';
import { PartnersPage } from '@/pages/PartnersPage';


function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/hfm" element={<HFMPage />} />
          <Route path="/start" element={<StartPage />} />
          <Route path="/mission" element={<MissionPage />} />
          <Route path="/partners" element={<PartnersPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
