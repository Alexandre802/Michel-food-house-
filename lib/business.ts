/**
 * Dados oficiais do Michel Food House.
 * Este arquivo é o ponto único de verdade para endereço, telefone, WhatsApp,
 * mapa, SEO e dados estruturados do site.
 */

/**
 * Endereço de produção enquanto não há domínio próprio.
 * É o alias estável que o cliente já divulga.
 */
const PRODUCAO_ATUAL = 'https://teste-steel-five-45.vercel.app';

export const business = {
  name: 'Michel Food House',
  slogan: 'O sabor que impressiona na primeira mordida.',
  description:
    'Michel Food House em Jacareí: lanches tradicionais, beirutes, combos, porções, hot dog, açaí e bebidas no Bandeira Branca I, com pedidos por WhatsApp e delivery na região.',

  phoneDisplay: '(12) 98844-7711',
  phoneE164: '+5512988447711',
  whatsapp: '5512988447711',
  email: 'contato@michelfoodhouse.com.br',

  address: {
    street: 'R. Fidêncio José de Souza, 100',
    district: 'Bandeira Branca I',
    city: 'Jacareí',
    state: 'SP',
    postalCode: '12323-390',
    country: 'BR',
  },

  opensAt: '18:30',
  openingNote: 'Ter–Qui e Dom 18:30–23:00 • Sex–Sáb 18:30–23:30 • Segunda fechado',
  openingHours: {
    monday: null,
    tuesday: { opens: '18:30', closes: '23:00' },
    wednesday: { opens: '18:30', closes: '23:00' },
    thursday: { opens: '18:30', closes: '23:00' },
    friday: { opens: '18:30', closes: '23:30' },
    saturday: { opens: '18:30', closes: '23:30' },
    sunday: { opens: '18:30', closes: '23:00' },
  },

  rating: { value: 4.8, count: 46, source: 'Google' },
  priceRange: 'R$ 20–40 por pessoa',
  priceRangeSchema: '$$',

  services: ['Refeição no local', 'Retirada na porta', 'Entrega sem contato'],

  mapsQuery:
    'Michel Food House, R. Fidêncio José de Souza, 100, Bandeira Branca I, Jacareí - SP, 12323-390',

  /**
   * Endereço público do site, usado em canônico, Open Graph, sitemap e JSON-LD.
   * NEXT_PUBLIC_SITE_URL permite migrar para domínio próprio sem alterar código.
   */
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL}`
      : PRODUCAO_ATUAL),
} as const;

export const fullAddress = `${business.address.street} - ${business.address.district}, ${business.address.city} - ${business.address.state}, ${business.address.postalCode}`;

export const mapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(business.mapsQuery)}`;
export const mapsEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(business.mapsQuery)}&output=embed`;

export function whatsappUrl(message: string): string {
  return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;
}

/**
 * Depoimentos reais do perfil do Google. Não editar o sentido do texto
 * nem acrescentar avaliações que não existam.
 */
export const reviews = [
  { text: 'Lugar familiar e agradável. A família gostou, lanche top.' },
  { text: 'Excelente comida, atendimento rápido e boa localização.' },
  { text: 'Boas opções de lanches, deliciosos lanches servidos!' },
  { text: 'Super recomendo, atendimento nota 10, lanche maravilhoso. Vale a pena conferir.' },
  { text: 'Lanche delicioso, super caprichado, preço muito bom, produtos de qualidade.' },
] as const;

export const differentials = [
  {
    title: 'Lanches bem servidos',
    text: 'Porção generosa no pão, no recheio e no acompanhamento. Você sente no peso da embalagem.',
  },
  {
    title: 'Ingredientes de qualidade',
    text: 'Carne, frango, bacon e queijo selecionados, montados na hora do seu pedido.',
  },
  {
    title: 'Atendimento que conquista',
    text: 'Pedido conferido, entrega combinada e um time que trata cliente como vizinho.',
  },
] as const;

export const aboutText =
  'Lanches caprichados, porções generosas e aquele sabor que faz você querer voltar. Na Michel Food House, cada pedido é preparado para entregar uma experiência simples, saborosa e bem servida.';
