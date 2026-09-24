import { Info } from 'lucide-react';
import { cn } from '@/lib/cn';

export const BROKER_DISCLAIMER =
  'As corretoras citadas são estrangeiras e não são autorizadas pela CVM ou pelo Banco Central a ofertar serviços no Brasil. A Trader AFK não intermedeia, não recomenda corretora específica e pode receber remuneração da corretora (rebate) sobre o volume operado pelos clientes indicados.';

export const CUSTODY_DISCLAIMER =
  'A Trader AFK não custodia recursos. Os fundos ficam na corretora escolhida, sujeita à regulação do país dela, sem proteção da CVM ou do BCB.';

/**
 * Aviso regulatório sobre corretoras estrangeiras. Usar perto de qualquer
 * link de abertura de conta em corretora.
 */
export const BrokerDisclaimer = ({ className, withCustody = false }: { className?: string; withCustody?: boolean }) => (
  <div
    role="note"
    className={cn(
      'flex gap-3 rounded-xl border border-white/[0.08] bg-white/[0.02] p-4 text-left text-xs leading-relaxed text-brand-muted',
      className
    )}
  >
    <Info size={16} className="mt-0.5 shrink-0 text-brand-gold" aria-hidden />
    <div className="space-y-2">
      <p>{BROKER_DISCLAIMER}</p>
      {withCustody && <p>{CUSTODY_DISCLAIMER}</p>}
    </div>
  </div>
);
