import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/cn';

const PLATFORM_URL = 'https://app.traderafk.com';

const navLinks = [
  { name: 'Robôs', href: '#robots' },
  { name: 'Licenças', href: '#licensing' },
  { name: 'Biblioteca', href: '#academy' },
  { name: 'Parceiros', href: '#partners' },
  { name: 'Preços', href: '#pricing' },
  { name: 'FAQ', href: '#faq' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav
        className={cn(
          'fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300',
          isScrolled || isMobileMenuOpen
            ? 'border-white/[0.06] bg-brand-dark/75 backdrop-blur-xl'
            : 'border-transparent bg-transparent'
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
          <Link to="/" className="group flex shrink-0 items-center gap-2.5">
            <img src="/images/logo-icon.png" alt="" className="h-8 w-auto transition-transform duration-300 group-hover:scale-105" />
            <span className="font-display text-lg font-semibold tracking-tight text-white">Trader AFK</span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="rounded-md px-3 py-2 text-sm text-neutral-400 transition-colors hover:text-white"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex">
            <Button size="sm" onClick={() => window.open(PLATFORM_URL, '_blank')}>
              Acessar Plataforma
              <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Button>
          </div>

          <button
            className="-mr-2 p-2 text-white md:hidden"
            aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 overflow-y-auto bg-brand-dark/95 px-6 pt-24 backdrop-blur-xl md:hidden"
          >
            <p className="eyebrow mb-6">Navegação</p>
            <div className="flex flex-col">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.04 * i }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between border-b border-white/[0.06] py-4 font-display text-2xl font-medium text-white"
                >
                  {link.name}
                  <ArrowUpRight size={18} className="text-neutral-600" />
                </motion.a>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 pb-10">
              <Button size="lg" className="w-full" onClick={() => window.open(PLATFORM_URL, '_blank')}>
                Criar Conta Grátis
              </Button>
              <a
                href={`${PLATFORM_URL}/login`}
                className="py-2 text-center text-sm text-neutral-400 transition-colors hover:text-white"
              >
                Acessar Área de Membros
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
