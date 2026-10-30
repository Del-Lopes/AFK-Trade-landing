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
import { Downloads } from '@/components/blocks/Downloads';
import { Partners } from '@/components/blocks/Partners';
import { Pricing } from '@/components/blocks/Pricing';
import { FAQ } from '@/components/blocks/FAQ';
import { FinalCTA } from '@/components/blocks/FinalCTA';
import { Comparison } from '@/components/blocks/Comparison';
import { FeatureGrid } from '@/components/blocks/FeatureGrid';
import { TradingJournal } from '@/components/blocks/TradingJournal';
import { AIAssistant } from '@/components/blocks/AIAssistant';
import { TrilhaGain } from '@/components/blocks/TrilhaGain';
import { EconCalendar } from '@/components/blocks/EconCalendar';
import { CryptoIntel } from '@/components/blocks/CryptoIntel';
import { Articles } from '@/components/blocks/Articles';
import { ResultsAnalysis } from '@/components/blocks/ResultsAnalysis';
import { SparklesCore } from '@/components/ui/SparklesCore';

function LandingPage() {
  return (
    <div className="min-h-screen bg-brand-dark text-white font-sans">
      <Helmet>
        <title>Trader AFK | Aprenda a operar com método, IA e comunidade</title>
        <meta name="description" content="Plataforma de aprendizado para traders: trilha interativa do zero ao avançado, ferramentas de IA para ler o mercado, calendário econômico interpretado e sessões ao vivo com a equipe. Comece grátis." />
        <meta name="keywords" content="aprender trading, curso de trading, educação para traders, análise de mercado com IA, calendário econômico, day trade para iniciantes, comunidade de traders, Trader AFK" />
        <meta property="og:title" content="Trader AFK | Do primeiro candle à sua própria leitura de mercado" />
        <meta property="og:description" content="Lições interativas, ferramentas de IA e uma comunidade de aprendizado em uma única plataforma. Comece grátis e receba tokens de boas-vindas para a IA de trading." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://traderafk.com" />
        <meta property="og:image" content="https://traderafk.com/images/og-image.png" />
        <meta property="og:locale" content="pt_BR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Trader AFK | Do primeiro candle à sua própria leitura de mercado" />
        <meta name="twitter:description" content="Lições interativas, ferramentas de IA e uma comunidade de aprendizado em uma única plataforma. Comece grátis." />
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

        {/* 3. Trilha Gain */}
        <TrilhaGain />

        {/* 4. Calendário Econômico com análise por IA */}
        <EconCalendar />

        {/* 5. Crypto */}
        <CryptoIntel />

        {/* 6. Artigos e Análises + Biblioteca */}
        <Articles />

        {/* 7. Manifesto / Filosofia */}
        <Manifesto />

        {/* 8. Comparativo Manual vs Automatizado */}
        <Comparison />

        {/* 9. Robôs / Expert Advisors */}
        <Robots />

        {/* 10. Ecossistema visual / AlgoEngine */}
        <AlgoEngine />

        {/* 11. Gestão de Licenças MT5 */}
        <Licensing />

        {/* 12. Onboarding guiado */}
        <Onboarding />

        {/* 13. Diário de Operações */}
        <TradingJournal />

        {/* 14. Centro de Downloads */}
        <Downloads />

        {/* 15. Assistente de IA */}
        <AIAssistant />

        {/* 16. Programa de Parceiros */}
        <Partners />

        {/* 17. Análise de Resultados (relatórios MT5) */}
        <ResultsAnalysis />

        {/* 18. Features gerais */}
        <FeatureGrid />

        {/* 19. Preços */}
        <Pricing />

        {/* 20. FAQ */}
        <FAQ />

        {/* 21. CTA Final */}
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
