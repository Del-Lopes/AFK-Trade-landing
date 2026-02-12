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

function LandingPage() {
  return (
    <div className="min-h-screen bg-brand-dark text-white selection:bg-brand-green/30 font-sans">
      <Helmet>
        <title>AFK Trade | Automatize seus Lucros</title>
        <meta name="description" content="Institutional-grade automated trading systems. Stop staring at charts and start profiting with AFK Trade." />
      </Helmet>
      
      <Navbar />
      
      <main>
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

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/hfm" element={<HFMPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
