import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

import { useNavigate } from 'react-router-dom';

export const Manifesto = () => {
  const navigate = useNavigate();

  return (
    <Section className="relative overflow-hidden py-32 bg-brand-dark">
      {/* Background Ambience */}
      <div className="absolute inset-0">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-brand-green/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-brand-emerald/10 rounded-full blur-[120px]" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.03)_0%,transparent_50%)]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <span className="text-brand-green font-bold tracking-wider uppercase text-sm mb-6 block">
            A Filosofia AFK
          </span>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-8">
            Você não nasceu para viver <br />
            <span className="text-white">na frente de uma tela.</span>
          </h2>

          <div className="space-y-6 text-xl text-white leading-relaxed font-light">
            <p>
              O mercado financeiro foi desenhado para consumir duas coisas: seu dinheiro ou seu tempo.
              Se você opera manualmente, você está pagando com sua vida.
            </p>
            <p>
              <span className="text-white font-medium">AFK (Away From Keyboard)</span> não é apenas um nome. É um movimento.
              Acreditamos que a tecnologia deve libertar, não prender. 
              Enquanto você viaja, dorme ou passa tempo com quem ama, nossos algoritmos continuam caçando oportunidades.
            </p>
            <p className="text-2xl text-white font-medium pt-4">
              O lucro é o meio. A liberdade é o fim.
            </p>
          </div>

          <div className="mt-12">
            <Button size="lg" variant="outline" className="border-brand-green/30 hover:bg-brand-green/10 text-brand-green" onClick={() => navigate('/mission')}>
              Conheça nossa Missão <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};
