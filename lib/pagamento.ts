/**
 * Forma de pagamento do pedido.
 *
 * O Michel Food House oferece ao cliente Pix ou cartão e o pagamento acontece
 * presencialmente, no momento da entrega ou da retirada. Os tipos antigos de
 * dinheiro/online permanecem aqui apenas por compatibilidade interna com
 * partes legadas do checkout; a interface e a API de pedidos não os oferecem.
 */

import { formatPrice } from './catalog';

export type FormaPagamento = 'pix' | 'cartao' | 'dinheiro';

/** Onde o dinheiro troca de mãos. */
export type MomentoPagamento = 'online' | 'na-entrega';

export interface EscolhaPagamento {
  forma: FormaPagamento;
  momento: MomentoPagamento;
  precisaTroco: boolean;
  trocoPara: number | null;
}

export const ESCOLHA_PADRAO: EscolhaPagamento = {
  forma: 'pix',
  momento: 'na-entrega',
  precisaTroco: false,
  trocoPara: null,
};

export const ROTULO_FORMA: Record<FormaPagamento, string> = {
  pix: 'Pix',
  cartao: 'Cartão',
  dinheiro: 'Dinheiro',
};

/** Mantido por compatibilidade com a rota legada de checkout online. */
export function aceitaOnline(forma: FormaPagamento): boolean {
  return forma !== 'dinheiro';
}

export function lerValor(texto: string): number | null {
  const limpo = texto.replace(/[^\d,.]/g, '').replace(/\.(?=\d{3}\b)/g, '').replace(',', '.');
  if (!limpo) return null;
  const n = Number(limpo);
  return Number.isFinite(n) && n > 0 ? n : null;
}

export function validarTroco(escolha: EscolhaPagamento, total: number): string | null {
  if (escolha.forma !== 'dinheiro' || !escolha.precisaTroco) return null;
  if (escolha.trocoPara === null) return 'Informe para quanto precisa de troco.';
  if (escolha.trocoPara < total) {
    return `O valor precisa ser maior que o total do pedido (${formatPrice(total)}).`;
  }
  return null;
}

export function escolhaValida(escolha: EscolhaPagamento, total: number): boolean {
  return validarTroco(escolha, total) === null;
}

export function valorDoTroco(escolha: EscolhaPagamento, total: number): number | null {
  if (escolha.forma !== 'dinheiro' || !escolha.precisaTroco || escolha.trocoPara === null) {
    return null;
  }
  return Math.max(0, escolha.trocoPara - total);
}

/**
 * Linhas usadas no resumo enviado à casa.
 * Para o fluxo atual, Pix e cartão aparecem como pagamento presencial; a
 * mensagem específica de entrega ou retirada é acrescentada pela API do pedido.
 */
export function pagamentoEmLinhas(
  escolha: EscolhaPagamento,
  total: number,
  pagoOnline = false,
): string[] {
  const linhas = [`Pagamento: ${ROTULO_FORMA[escolha.forma]}`];

  if (pagoOnline) {
    linhas.push('Situação: pago pelo site ✅');
  } else if (escolha.forma === 'dinheiro') {
    if (escolha.precisaTroco && escolha.trocoPara !== null) {
      const volta = valorDoTroco(escolha, total);
      const sufixo = volta !== null && volta > 0 ? ` (levar ${formatPrice(volta)} de troco)` : '';
      linhas.push(`Troco para: ${formatPrice(escolha.trocoPara)}${sufixo}`);
    } else {
      linhas.push('Troco: não precisa');
    }
  } else {
    linhas.push('Situação: pagamento presencial');
  }

  return linhas;
}

export function pagamentoEmLinha(
  escolha: EscolhaPagamento,
  total: number,
  pagoOnline = false,
): string {
  return pagamentoEmLinhas(escolha, total, pagoOnline).join(' · ');
}
