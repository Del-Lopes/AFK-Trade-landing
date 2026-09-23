const COLUMNS = [
  {
    title: 'Produto',
    links: [
      { label: 'Robôs', href: '#robots' },
      { label: 'Licenças', href: '#licensing' },
      { label: 'Funcionalidades', href: '#features' },
      { label: 'Preços', href: '#pricing' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Política de Privacidade', href: '#' },
      { label: 'Termos de Serviço', href: '#' },
      { label: 'Aviso de Risco', href: '#' },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="relative border-t border-white/[0.06] bg-brand-dark">
      <div aria-hidden className="hairline absolute inset-x-0 -top-px opacity-60" />
      <div className="mx-auto max-w-7xl px-4 pb-10 pt-16 sm:px-6">
        <div className="mb-14 grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-2.5">
              <img src="/images/logo-icon.png" alt="" className="h-8 w-auto" />
              <span className="font-display text-xl font-semibold tracking-tight text-white">Trader AFK</span>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-brand-muted">
              Soluções de trading automatizado para o investidor moderno. Tecnologia trabalhando ao seu favor.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="eyebrow mb-5 !text-neutral-500">{col.title}</h4>
              <ul className="space-y-3 text-sm">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-neutral-300 transition-colors hover:text-brand-green">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3 border-t border-white/[0.06] pt-8 text-xs text-brand-subtle md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Trader AFK. Todos os direitos reservados.</p>
          <p className="max-w-xl md:text-right">
            Trading envolve riscos substanciais e não é adequado para todos os investidores.
          </p>
        </div>
      </div>
    </footer>
  );
};
