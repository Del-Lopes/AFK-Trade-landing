import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, Send, Phone, Mail, User, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { LEGAL_URLS, PARTNER_APPLY_URL } from '@/lib/legal';

interface PartnerFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PartnerFormModal = ({ isOpen, onClose }: PartnerFormModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    website: '', // honeypot: invisível para pessoas; bots costumam preencher
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Máscara para telefone brasileiro (99) 99999-9999
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);
    
    if (value.length > 2) {
      value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    }
    if (value.length > 10) {
      value = `${value.slice(0, 10)}-${value.slice(10)}`;
    }
    
    setFormData(prev => ({ ...prev, phone: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch(PARTNER_APPLY_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.status === 429) {
        setError('Recebemos várias solicitações em pouco tempo. Tente novamente mais tarde.');
        return;
      }
      if (response.status === 400) {
        setError('Confira os dados: nome, e-mail válido e telefone com DDD.');
        return;
      }
      if (!response.ok) {
        throw new Error(`Falha no envio (HTTP ${response.status})`);
      }

      setIsSuccess(true);
    } catch (err) {
      console.error('Erro ao enviar formulário:', err);
      setError('Não foi possível enviar sua solicitação agora. Tente novamente em instantes.');
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-brand-dark/80 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-lg bg-brand-dark border border-white/10 rounded-3xl p-8 shadow-2xl overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/20 blur-[60px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-gold/10 blur-[60px] rounded-full pointer-events-none" />

            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2"
            >
              <X size={24} />
            </button>

            {isSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-brand-green/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="text-brand-green w-10 h-10" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Solicitação Enviada!</h3>
                <p className="text-gray-300">
                  Obrigado pelo seu interesse. Nossa equipe entrará em contato com você em breve.
                </p>
                <Button className="mt-8 w-full" onClick={onClose}>
                  Fechar
                </Button>
              </motion.div>
            ) : (
              <>
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-white mb-2">Seja um Parceiro</h2>
                  <p className="text-gray-400">Preencha os dados abaixo e entraremos em contato.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1.5 ml-1">Nome Completo</label>
                    <div className="relative">
                      <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-green" />
                      <input
                        required
                        type="text"
                        placeholder="Seu nome"
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-brand-green/50 focus:ring-1 focus:ring-brand-green/50 transition-all"
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1.5 ml-1">E-mail</label>
                      <div className="relative">
                        <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-green" />
                        <input
                          required
                          type="email"
                          placeholder="ex@email.com"
                          className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-brand-green/50 focus:ring-1 focus:ring-brand-green/50 transition-all"
                          value={formData.email}
                          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1.5 ml-1">Telefone (WhatsApp)</label>
                      <div className="relative">
                        <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-green" />
                        <input
                          required
                          type="tel"
                          placeholder="(00) 00000-0000"
                          className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-brand-green/50 focus:ring-1 focus:ring-brand-green/50 transition-all"
                          value={formData.phone}
                          onChange={handlePhoneChange}
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1.5 ml-1">Mensagem (Opcional)</label>
                    <div className="relative">
                      <MessageSquare size={18} className="absolute left-4 top-4 text-brand-green" />
                      <textarea
                        rows={3}
                        placeholder="Como podemos ajudar você?"
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-brand-green/50 focus:ring-1 focus:ring-brand-green/50 transition-all resize-none"
                        value={formData.message}
                        onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      />
                    </div>
                  </div>

                  {/* Honeypot anti-spam: fora da tela e fora da navegação por teclado. */}
                  <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
                    <label>
                      Site
                      <input
                        type="text"
                        name="website"
                        tabIndex={-1}
                        autoComplete="off"
                        value={formData.website}
                        onChange={(e) => setFormData(prev => ({ ...prev, website: e.target.value }))}
                      />
                    </label>
                  </div>

                  {error && (
                    <p role="alert" className="rounded-xl border border-brand-red/30 bg-brand-red/10 px-4 py-3 text-sm text-red-300">
                      {error}
                    </p>
                  )}

                  <Button
                    type="submit" 
                    size="lg" 
                    className="w-full mt-4" 
                    isLoading={isSubmitting}
                  >
                    Enviar Solicitação <Send className="ml-2 w-5 h-5" />
                  </Button>
                </form>

                <p className="text-xs text-center text-gray-500 mt-6 leading-relaxed">
                  Usaremos seus dados apenas para contato sobre o programa de parceiros. Saiba mais na{' '}
                  <a
                    href={LEGAL_URLS.privacy}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-green underline-offset-4 hover:underline"
                  >
                    Política de Privacidade
                  </a>
                  .
                </p>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
