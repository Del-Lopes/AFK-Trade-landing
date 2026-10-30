import { BookOpen, FileText, Library, LineChart, Newspaper, PlayCircle } from 'lucide-react';
import { FeatureShowcase, MockFrame } from '@/components/ui/FeatureShowcase';

const HIGHLIGHTS = [
  { icon: <LineChart size={18} />, title: 'Análises de mercado', description: 'Leituras do contexto e dos ativos, publicadas pela equipe.' },
  { icon: <BookOpen size={18} />, title: 'Conteúdo de estudo', description: 'Artigos sobre gestão de risco, psicologia do trader e fundamentos do mercado.' },
  { icon: <PlayCircle size={18} />, title: 'Cursos em vídeo', description: 'A Biblioteca reúne cursos com aulas em vídeo e material de apoio.' },
  { icon: <Library size={18} />, title: 'Tudo dentro do app', description: 'Leia, assista e volte quando quiser, no mesmo lugar onde você estuda e opera.' },
];

// Títulos ilustrativos.
const ARTICLES = [
  {
    category: 'Análise',
    title: 'Payroll acima do esperado: o que muda para o ouro',
    excerpt: 'Como o dado de emprego dos EUA mexe com juros, dólar e metais.',
  },
  {
    category: 'Gestão de risco',
    title: 'Quanto arriscar por operação?',
    excerpt: 'O tamanho da posição como primeira linha de defesa da sua conta.',
  },
  {
    category: 'Psicologia',
    title: 'Viés de confirmação no trading',
    excerpt: 'Por que procuramos sinais que confirmam o que já queremos fazer.',
  },
];

const ArticlesMock = () => (
  <MockFrame
    icon={<Newspaper size={14} />}
    title="Artigos e Análises"
    meta="títulos ilustrativos"
    ariaLabel="Ilustração da sessão de Artigos e Análises: lista de artigos com categorias"
  >
    <ul className="divide-y divide-white/[0.05]">
      {ARTICLES.map((a) => (
        <li key={a.title} className="flex gap-4 px-4 py-4 sm:px-5">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg border border-white/[0.06] bg-gradient-to-br from-brand-green/15 to-transparent text-brand-green">
            <FileText size={18} />
          </span>
          <div className="min-w-0">
            <p className="mb-1 text-[10px] font-medium uppercase tracking-[0.2em] text-brand-green/90">{a.category}</p>
            <p className="mb-1 text-sm font-medium leading-snug text-white">{a.title}</p>
            <p className="text-xs leading-relaxed text-brand-muted">{a.excerpt}</p>
          </div>
        </li>
      ))}
    </ul>
    <div className="flex items-center gap-2 border-t border-white/[0.06] px-4 py-3 text-[11px] text-brand-subtle sm:px-5">
      <PlayCircle size={12} className="text-brand-green" />
      Biblioteca: cursos em vídeo com material de apoio
    </div>
  </MockFrame>
);

export const Articles = () => (
  <FeatureShowcase
    id="artigos"
    eyebrow="Artigos e Análises"
    reverse
    title={
      <>
        Conteúdo de estudo <span className="text-gradient-brand">que acompanha o mercado.</span>
      </>
    }
    description="Análises e artigos da equipe para você entender o que está acontecendo e aprofundar os fundamentos, além da Biblioteca de cursos em vídeo."
    highlights={HIGHLIGHTS}
    mock={<ArticlesMock />}
  />
);
