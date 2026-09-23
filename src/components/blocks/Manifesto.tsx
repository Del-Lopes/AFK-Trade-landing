import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Section } from '@/components/layout/Section';
import { Backdrop } from '@/components/ui/Backdrop';
import { Button } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';

export const Manifesto = () => {
  const navigate = useNavigate();

  return (
    <Section divider className="py-24 sm:py-36">
      <Backdrop variant="lines" />

      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <Eyebrow>A Filosofia AFK</Eyebrow>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="mt-6 text-4xl font-bold leading-[1.05] text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Você não nasceu para viver <br className="hidden sm:block" />
            <span className="text-gradient-brand">na frente de uma tela.</span>
          </h2>
        </Reveal>

        <Reveal delay={160}>
          <div aria-hidden className="hairline mx-auto my-10 w-40 sm:my-12" />
        </Reveal>

        <div className="mx-auto max-w-2xl space-y-6 text-base leading-relaxed text-brand-muted sm:text-lg">
          <Reveal delay={200}>
            <p>
              O mercado financeiro foi desenhado para consumir duas coisas: seu dinheiro ou seu tempo.
              Se você opera manualmente, você está pagando com sua vida.
            </p>
          </Reveal>
          <Reveal delay={260}>
            <p>
              <span className="font-medium text-white">AFK (Away From Keyboard)</span> não é apenas um nome. É um movimento.
              Acreditamos que a tecnologia deve libertar, não prender.
              Enquanto você viaja, dorme ou passa tempo com quem ama, nossos algoritmos continuam caçando oportunidades.
            </p>
          </Reveal>
        </div>

        <Reveal delay={320}>
          <p className="mt-12 font-display text-2xl font-medium tracking-tight text-white sm:text-3xl">
            A tecnologia é o meio. <span className="text-gradient-brand">A liberdade é o fim.</span>
          </p>
        </Reveal>

        <Reveal delay={400}>
          <div className="mt-12">
            <Button size="lg" variant="outline" onClick={() => navigate('/mission')}>
              Conheça nossa Missão
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
        </Reveal>
      </div>
    </Section>
  );
};
