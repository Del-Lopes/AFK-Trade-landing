import { HelmetProvider, Helmet } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/blocks/Hero';
import { SocialProof } from '@/components/blocks/SocialProof';
import { Manifesto } from '@/components/blocks/Manifesto';
import { Robots } from '@/components/blocks/Robots';
import { AlgoEngine } from '@/components/blocks/AlgoEngine';
import { Licensing } from '@/components/blocks/Licensing';
import { Onboarding } from '@/components/blocks/Onboarding';
import { Ecosystem } from '@/components/blocks/Ecosystem';
import { Downloads } from '@/components/blocks/Downloads';
import { Partners } from '@/components/blocks/Partners';
import { Profiles } from '@/components/blocks/Profiles';
import { Pricing } from '@/components/blocks/Pricing';
import { FAQ } from '@/components/blocks/FAQ';
import { FinalCTA } from '@/components/blocks/FinalCTA';
import { Comparison } from '@/components/blocks/Comparison';
import { FeatureGrid } from '@/components/blocks/FeatureGrid';
import { TradingJournal } from '@/components/blocks/TradingJournal';
import { AIAssistant } from '@/components/blocks/AIAssistant';
import { SparklesCore } from '@/components/ui/SparklesCore';

function LandingPage() {
  return (
    <div className="min-h-screen bg-brand-dark text-white font-sans">
      <Helmet>
        <title>Trader AFK | Plataforma de Trading Algorítmico com Robôs Forex e MT5</title>
        <meta name="description" content="Plataforma SaaS completa para trading automatizado. Robôs forex (Expert Advisors), licenças MT5, cursos, análises de mercado e programa de parceiros. Opere 24/7 no piloto automático." />
        <meta name="keywords" content="robô forex, trading automatizado brasil, MetaTrader 5 robô, expert advisor MT5, robô de trading, trading algorítmico, AFK Trader, Trader AFK" />
        <meta property="og:title" content="Trader AFK | Plataforma de Trading Algorítmico com Robôs Forex" />
        <meta property="og:description" content="Robôs de trading, licenças MT5, educação completa e programa de parceiros — tudo em uma única plataforma. Opere 24/7 no piloto automático." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://traderafk.com" />
        <meta property="og:image" content="https://traderafk.com/images/og-image.png" />
        <meta property="og:locale" content="pt_BR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Trader AFK | Trading Algorítmico com Robôs Forex" />
        <meta name="twitter:description" content="Opere no piloto automático com os melhores Expert Advisors para MetaTrader 5." />
        <link rel="canonical" href="https://traderafk.com" />
      </Helmet>

      <Navbar />

      {/* Background Sparkles */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.4}
          maxSize={1.2}
          particleDensity={28}
          className="w-full h-full opacity-60"
          particleColor="#FFFFFF"
          speed={2}
        />
      </div>

      <main className="relative z-10">
        {/* 1. Hero */}
        <Hero />

        {/* 2. Social Proof (logos + stats + depoimentos) */}
        <SocialProof />

        {/* 3. Manifesto / Filosofia */}
        <Manifesto />

        {/* 4. Comparativo Manual vs Automatizado */}
        <Comparison />

        {/* 5. Robôs / Expert Advisors */}
        <Robots />

        {/* 6. Ecossistema visual / AlgoEngine */}
        <AlgoEngine />

        {/* 7. Gestão de Licenças MT5 */}
        <Licensing />

        {/* 8. Onboarding guiado (7 passos) */}
        <Onboarding />

        {/* 9. Diário de Operações */}
        <TradingJournal />

        {/* 10. Biblioteca de Conteúdo (cursos + artigos) */}
        <Ecosystem />

        {/* 11. Centro de Downloads */}
        <Downloads />

        {/* 12. Assistente de IA */}
        <AIAssistant />

        {/* 13. Programa de Parceiros */}
        <Partners />

        {/* 12. Para Quem É (4 perfis) */}
        <Profiles />

        {/* 13. Features gerais */}
        <FeatureGrid />

        {/* 14. Preços */}
        <Pricing />

        {/* 15. FAQ */}
        <FAQ />

        {/* 16. CTA Final */}
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}

import { HFMPage } from '@/pages/HFMPage';
import { StartPage } from '@/pages/StartPage';
import { MissionPage } from '@/pages/MissionPage';
import { PartnersPage } from '@/pages/PartnersPage';
import { HantecPage } from '@/pages/HantecPage';
import { VantagePage } from '@/pages/VantagePage';
import { RoboForexPage } from '@/pages/RoboForexPage';

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
          <Route path="/hantec" element={<HantecPage />} />
          <Route path="/vantage" element={<VantagePage />} />
          <Route path="/roboforex" element={<RoboForexPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
