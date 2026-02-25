# Implementação do Formulário de Parceiros com Modal

Substituir o redirecionamento direto para WhatsApp por um formulário modal premium que envia os dados para contato@afktrade.com.br via Formspree.

## 1. Análise e Preparação
- [ ] Criar o componente `PartnerFormModal.tsx` usando Framer Motion para animações.
- [ ] Implementar máscara de telefone (padrão Brasil).
- [ ] Configurar integração com Formspree.

## 2. Desenvolvimento do Componente UI
- [ ] Criar `src/components/partners/PartnerFormModal.tsx`.
- [ ] Campos requisitados: Nome, Telefone (com máscara), E-mail, Mensagem (opcional).
- [ ] Estilização: Dark mode, glassmorphism, botões em `brand-green`.

## 3. Integração na Página
- [ ] Atualizar `src/pages/PartnersPage.tsx` para gerenciar o estado do modal.
- [ ] Trocar `window.open` pelo trigger do modal nos botões de CTA.

## 4. Validação e Finalização
- [ ] Testar feedback visual de envio (sucesso/erro).
- [ ] Processo Git: add, commit e push.
