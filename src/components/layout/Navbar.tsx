import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ExternalLink } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Funcionalidades', href: '#features' },
    { name: 'Academia', href: '#academy' },
    { name: 'Parceiros', href: '#partners' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          isScrolled
            ? 'bg-brand-dark/80 backdrop-blur-lg border-white/5 py-4'
            : 'bg-transparent border-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
             <img src="/images/logo-icon.png" alt="AFK Trade Logo" className="h-10 w-auto transition-transform group-hover:scale-105" />
             <span className="text-xl font-bold text-white tracking-tight group-hover:text-brand-green transition-colors">AFK Trade</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a href="https://app.afktrade.com/login" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-white hover:text-brand-green transition-colors">
              Entrar
            </a>
            <Button size="sm" onClick={() => window.open('https://app.afktrade.com/register', '_blank')}>
              Começar Agora <ExternalLink size={14} className="ml-2" />
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-brand-dark pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col space-y-6 pt-20 px-6">
              <div className="flex items-center gap-2 mb-4">
                  <img src="/images/logo-icon.png" alt="AFK Trade" className="h-8 w-auto" /> 
                  <span className="text-xl font-bold text-white">AFK Trade</span>
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-bold text-white hover:text-brand-green"
                >
                  {link.name}
                </a>
              ))}
              <div className="h-px bg-white/10 w-full my-4" />
              <Button size="lg" className="w-full" onClick={() => window.open('https://app.afktrade.com/register', '_blank')}>
                Criar Conta
              </Button>
               <a href="https://app.afktrade.com/login" className="text-lg text-gray-400 hover:text-white py-2">
                  Acessar Área de Membros
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
