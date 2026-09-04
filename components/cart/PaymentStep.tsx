'use client';

import { formatPrice } from '@/lib/catalog';
import { ROTULO_FORMA, type FormaPagamento } from '@/lib/pagamento';
import { useShop, type CartLine, type FulfillmentMode } from '@/lib/store';
import { orderTotal } from '@/lib/store';
import { Button } from '../ui/Button';

/**
 * Forma de pagamento do Michel Food House.
 *
 * O cliente escolhe apenas Pix ou cartão. O pagamento não acontece dentro do
 * site: ele é feito diretamente com a casa no momento da entrega ou da
 * retirada. Mantemos a prop `onlineDisponivel` por compatibilidade com o fluxo
 * atual do checkout, mas ela é intencionalmente ignorada.
 */
export default function PaymentStep({
  lines,
  mode,
  onBack,
  onDone,
}: {
  lines: CartLine[];
  mode: FulfillmentMode;
  onlineDisponivel: boolean;
  onBack: () => void;
  onDone: () => void;
}) {
  const payment = useShop((s) => s.payment);
  const setPayment = useShop((s) => s.setPayment);
  const total = orderTotal(lines, mode);

  const formas: FormaPagamento[] = ['pix', 'cartao'];

  const escolherForma = (forma: FormaPagamento) => {
    setPayment({
      forma,
      momento: 'na-entrega',
      precisaTroco: false,
      trocoPara: null,
    });
  };

  return (
    <div className="flex flex-col gap-5">
      <fieldset>
        <legend className="mb-3 text-sm font-bold text-white">Forma de pagamento</legend>
        <div className="flex flex-col gap-2.5">
          {formas.map((forma) => (
            <button
              key={forma}
              type="button"
              onClick={() => escolherForma(forma)}
              aria-pressed={payment.forma === forma}
              className={`flex items-center justify-between rounded-2xl px-5 py-4 text-left transition-all ${
                payment.forma === forma
                  ? 'bg-gradient-to-r from-white/30 to-white/20 ring-2 ring-inset ring-white'
                  : 'bg-white/15 ring-1 ring-inset ring-white/35 hover:ring-white/55'
              }`}
            >
              <span>
                <span className="block font-extrabold text-white">{ROTULO_FORMA[forma]}</span>
                <span className="block text-xs text-muted">{DICA_FORMA[forma]}</span>
              </span>
              <span
                className={`h-4 w-4 shrink-0 rounded-full ring-2 ${
                  payment.forma === forma ? 'bg-white ring-white' : 'ring-muted/50'
                }`}
              />
            </button>
          ))}
        </div>
      </fieldset>

      <p className="rounded-2xl border border-white/40 bg-white/12 px-4 py-3 text-sm leading-relaxed text-white/90">
        O pagamento é feito <strong className="font-extrabold text-white">somente na {mode === 'entrega' ? 'entrega' : 'retirada'}</strong>.
        O site não faz cobrança antecipada.
      </p>

      <div className="glass rounded-2xl px-5 py-4">
        <div className="flex items-baseline justify-between">
          <span className="text-sm font-bold text-muted">Total</span>
          <span className="text-2xl font-extrabold text-white">{formatPrice(total)}</span>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Button size="lg" className="w-full" onClick={onDone}>
          Revisar o pedido
        </Button>
        <Button variant="ghost" className="w-full" onClick={onBack}>
          Voltar
        </Button>
      </div>
    </div>
  );
}

const DICA_FORMA: Partial<Record<FormaPagamento, string>> = {
  pix: 'Pague na entrega ou na retirada',
  cartao: 'Crédito ou débito na entrega ou retirada',
};
