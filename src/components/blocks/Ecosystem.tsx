import { BookOpen, PlayCircle, ArrowRight, FileText, ChevronRight } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';
import { Backdrop } from '@/components/ui/Backdrop';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Reveal } from '@/components/ui/Reveal';

const MODULES = [
  { number: '01', title: 'Fundamentos do Trading Algorítmico', lessons: 6, duration: '1h 20min' },
  { number: '02', title: 'Configurando seu MetaTrader 5', lessons: 4, duration: '45min' },
  { number: '03', title: 'Instalando e Ativando Expert Advisors', lessons: 5, duration: '1h 05min' },
  { number: '04', title: 'Gestão de Risco e Sizing de Posição', lessons: 7, duration: '1h 40min' },
];

export const Ecosystem = () => {
  return (
    <Section id="academy" divider>
      <Backdrop variant="lines" />

      <SectionHeader
        eyebrow="Biblioteca de Conteúdo"
        title={
          <>
            Aprenda enquanto <span className="text-gradient-brand">seus robôs operam.</span>
          </>
        }
        description="Cursos estruturados em módulos, análises de mercado publicadas regularmente e artigos educacionais — tudo dentro da plataforma, acessível em qualquer dispositivo."
      />

      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left: Course structure */}
        <Reveal className="min-w-0">
          <div className="mb-6 flex items-center gap-2.5">
            <PlayCircle size={18} className="shrink-0 text-brand-green" />
            <h3 className="text-xl font-semibold text-white">Cursos em Vídeo</h3>
            <span className="ml-auto text-[10px] font-medium uppercase tracking-[0.2em] text-brand-subtle">Estrutura Modular</span>
          </div>

          <div className="mb-8 space-y-2.5">
            {MODULES.map((mod, idx) => (
              <Reveal
                key={mod.number}
                delay={idx * 80}
                className="group flex cursor-pointer items-center gap-4 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 transition-all duration-300 hover:border-brand-green/30 hover:bg-white/[0.04]"
              >
                <span className="w-6 shrink-0 font-mono text-xs text-brand-green/70">{mod.number}</span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-white">{mod.title}</p>
                  <p className="mt-0.5 text-xs text-brand-subtle">{mod.lessons} aulas · {mod.duration}</p>
                </div>
                <ChevronRight size={16} className="shrink-0 text-white/20 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-brand-green" />
              </Reveal>
            ))}
          </div>

          <div className="mb-8 flex items-start gap-3 border-l border-brand-gold/50 py-1 pl-4">
            <BookOpen size={18} className="mt-0.5 shrink-0 text-brand-gold" />
            <p className="text-sm leading-relaxed text-brand-muted">
              <span className="font-medium text-white">Conteúdo gratuito e premium</span> — membros têm acesso ilimitado a todos os módulos e futuras atualizações.
            </p>
          </div>

          <Button size="lg" variant="outline" className="w-full sm:w-auto" onClick={() => window.open('https://app.traderafk.com', '_blank')}>
            Explorar a Biblioteca
            <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </Reveal>

        {/* Right: Articles + Videos */}
        <div className="min-w-0 space-y-4">
          {/* Article card */}
          <Reveal delay={0} className="glass-card glass-card-hover group cursor-pointer p-6">
            <div aria-hidden className="hairline absolute inset-x-6 -top-px opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
            <div className="mb-4 flex items-center justify-between">
              <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-brand-green">Análise de Mercado</span>
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-brand-green transition-colors duration-300 group-hover:border-brand-green/40">
                <FileText size={16} />
              </div>
            </div>
            <h3 className="mb-2 text-lg font-semibold text-white">EURUSD — Perspectivas para a semana</h3>
            <p className="mb-4 text-sm leading-relaxed text-brand-muted">Análise técnica e fundamentalista com zonas de entrada, alvos e níveis de stop para o par mais negociado do mundo.</p>
            <div className="flex items-center gap-3 text-xs text-brand-subtle">
              <span>8 min leitura</span>
              <span>·</span>
              <span>Por Time Trader AFK</span>
            </div>
          </Reveal>

          {/* Video card */}
          <Reveal delay={100} className="glass-card glass-card-hover group cursor-pointer p-6">
            <div aria-hidden className="hairline absolute inset-x-6 -top-px opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
            <div className="mb-4 flex items-center justify-between">
              <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-brand-green">Aula em Vídeo</span>
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-brand-green transition-colors duration-300 group-hover:border-brand-green/40">
                <PlayCircle size={16} />
              </div>
            </div>
            <h3 className="mb-2 text-lg font-semibold text-white">Instalando o AFK Trader no MT5 do zero</h3>
            <p className="mb-4 text-sm leading-relaxed text-brand-muted">Passo a passo completo: desde o download até o primeiro robô operando na sua conta.</p>
            <div className="flex items-center gap-3 text-xs text-brand-subtle">
              <span>15 min</span>
              <span>·</span>
              <span>4 aulas no módulo</span>
            </div>
          </Reveal>

          {/* Article card 2 */}
          <Reveal delay={200} className="glass-card glass-card-hover group cursor-pointer p-6">
            <div aria-hidden className="hairline absolute inset-x-6 -top-px opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
            <div className="mb-4 flex items-center justify-between">
              <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-brand-green">Artigo Educacional</span>
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-brand-green transition-colors duration-300 group-hover:border-brand-green/40">
                <BookOpen size={16} />
              </div>
            </div>
            <h3 className="mb-2 text-lg font-semibold text-white">A Psicologia do Trading Automatizado</h3>
            <p className="mb-4 text-sm leading-relaxed text-brand-muted">Por que tantos traders abandonam o próprio plano, e como regras automatizadas ajudam a manter a disciplina.</p>
            <div className="flex items-center gap-3 text-xs text-brand-subtle">
              <span>5 min leitura</span>
              <span>·</span>
              <span>Por Time Trader AFK</span>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
};
