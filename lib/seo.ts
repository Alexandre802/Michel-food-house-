import { business, fullAddress, mapsDirectionsUrl } from './business';
import { categories, products } from './catalog';

/**
 * Termos de busca do negócio, agrupados por intenção.
 *
 * Estes termos alimentam conteúdo visível, metadata e textos alternativos.
 * Não existe bloco escondido para robô: o SEO local usa conteúdo útil e
 * consistente com os dados reais do estabelecimento.
 */
export const searchTerms = {
  marca: [
    'Michel Food House', 'Michel Food House Jacareí', 'Michel Food House Parque dos Sinos',
    'cardápio Michel Food House', 'preços Michel Food House', 'pedido Michel Food House',
    'WhatsApp Michel Food House', 'telefone Michel Food House', 'endereço Michel Food House',
    'Michel Food House delivery', 'Michel Food House avaliações', 'Michel Food House 4,8 estrelas',
    'lanches Michel Food House', 'Michel Food House Parque dos Sinos Jacareí',
  ],
  lugar: [
    'lanchonete em Jacareí', 'lanchonete Parque dos Sinos', 'lanche em Jacareí', 'lanches em Jacareí',
    'restaurante em Jacareí', 'restaurante Parque dos Sinos Jacareí', 'comida em Jacareí',
    'onde comer lanche em Jacareí', 'onde comer hambúrguer em Jacareí',
    'onde comer à noite em Jacareí', 'jantar em Jacareí', 'fast food Jacareí',
    'lanche Parque dos Sinos Jacareí', 'delivery Parque dos Sinos',
    'lanchonete perto de mim Jacareí', 'hambúrguer perto de mim Jacareí',
    'lanche perto de mim Jacareí', 'delivery perto de mim Jacareí', 'comida perto de mim Jacareí',
    'lanche tradicional perto de mim',
  ],
  tradicionais: [
    'lanche tradicional', 'lanches tradicionais', 'hambúrguer em Jacareí', 'hambúrguer tradicional',
    'x salada Jacareí', 'x bacon Jacareí', 'x egg Jacareí', 'x egg bacon Jacareí', 'x tudo Jacareí',
    'x burguer Jacareí', 'x frango Jacareí', 'x frango bacon Jacareí', 'x frango egg Jacareí',
    'x frangão Jacareí', 'x calabresa Jacareí', 'x churrasco Jacareí', 'hot dog Jacareí',
    'hot bacon Jacareí', 'hot frango Jacareí', 'hot calabresa Jacareí', 'hot cheddar Jacareí',
    'hot catupiry Jacareí', 'hot egg Jacareí', 'hot misto Jacareí', 'salsichão Jacareí',
    'misto quente Jacareí', 'queijo quente Jacareí', 'bauru Jacareí', 'americano lanche Jacareí',
  ],
  beirutes: [
    'beirute Jacareí', 'beirute de frango Jacareí', 'beirute de carne Jacareí',
    'beirute de calabresa Jacareí', 'beirute vegetariano Jacareí', 'beirute americano Jacareí',
    'beirute de hambúrguer Jacareí', 'beirute frango bacon Jacareí', 'beirute frango egg Jacareí',
    'beirute especial Jacareí',
  ],
  combosPorcoes: [
    'lanche master Jacareí', 'master de frango Jacareí', 'master tudo Jacareí',
    'combo lanche Jacareí', 'combo hot dog Jacareí', 'combo x salada Jacareí',
    'combo x egg Jacareí', 'combo x egg bacon Jacareí', 'combo infantil Jacareí',
    'lanche kids Jacareí', 'porção de batata Jacareí', 'batata frita Jacareí',
    'batata simples Jacareí', 'lanche com porção de batata', 'hambúrguer com batata frita',
    'combo para família Jacareí',
  ],
  gourmet: [
    'lanche gourmet Jacareí', 'x salada gourmet Jacareí', 'x burguer gourmet Jacareí',
    'x bacon gourmet Jacareí', 'especial da casa Jacareí', 'bacon cheddar Jacareí',
    'hambúrguer 180g Jacareí', 'pão brioche hambúrguer', 'hambúrguer caseiro Jacareí',
    'hambúrguer bovino Jacareí', 'lanche caseiro Jacareí',
  ],
  acaiBebidas: [
    'açaí Jacareí', 'açaí 300 ml Jacareí', 'açaí 500 ml Jacareí', 'açaí delivery Jacareí',
    'suco natural Jacareí', 'suco laranja Jacareí', 'suco goiaba Jacareí',
    'suco maracujá Jacareí', 'suco manga Jacareí',
  ],
  ingredientes: [
    'lanche com cheddar Jacareí', 'lanche com bacon Jacareí', 'lanche com frango Jacareí',
    'lanche com calabresa Jacareí', 'lanche com ovo Jacareí', 'lanche com catupiry Jacareí',
    'lanche com vinagrete Jacareí', 'lanche com tomate Jacareí', 'lanche com alface Jacareí',
    'lanche com batata palha', 'lanche com presunto e queijo', 'lanche com contra filé Jacareí',
  ],
  pedido: [
    'comida delivery Jacareí', 'delivery de lanche Jacareí', 'delivery Jacareí',
    'entrega de lanche Jacareí', 'pedido de lanche online', 'pedir lanche online Jacareí',
    'lanche no WhatsApp Jacareí', 'pedir pelo WhatsApp Jacareí', 'retirada de lanche Jacareí',
    'lanche para retirada Jacareí', 'lanche para entrega Jacareí', 'lanchonete delivery Jacareí',
    'lanchonete aberta à noite Jacareí', 'lanche noturno Jacareí',
  ],
  publico: [
    'lanche bem servido Jacareí', 'lanche caprichado Jacareí', 'lanche delicioso Jacareí',
    'melhor lanche Jacareí', 'lanche barato Jacareí', 'lanche custo benefício Jacareí',
    'lanche R$ 20 a R$ 40 Jacareí', 'lanche para família Jacareí', 'lanchonete familiar Jacareí',
    'lanche para casal Jacareí', 'lanche para crianças Jacareí', 'lanche completo Jacareí',
    'lanche grande Jacareí', 'lanche reforçado Jacareí',
  ],
} as const;

export const allSearchTerms: string[] = Object.values(searchTerms).flat();

/** Blocos da seção visível de busca local. */
export const searchSections = [
  { title: 'Lanches tradicionais', terms: searchTerms.tradicionais },
  { title: 'Beirutes', terms: searchTerms.beirutes },
  { title: 'Combos, porções e Master', terms: searchTerms.combosPorcoes },
  { title: 'Linha gourmet', terms: searchTerms.gourmet },
  { title: 'Açaí e bebidas', terms: searchTerms.acaiBebidas },
  { title: 'Entrega e retirada', terms: searchTerms.pedido },
  { title: 'Parque dos Sinos e região', terms: searchTerms.lugar },
] as const;

/** JSON-LD Restaurant com dados oficiais do estabelecimento. */
export function restaurantJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: business.name,
    slogan: business.slogan,
    description: business.description,
    url: business.siteUrl,
    telephone: business.phoneE164,
    email: business.email,
    priceRange: business.priceRangeSchema,
    servesCuisine: ['Lanches', 'Hambúrguer', 'Beirute', 'Açaí'],
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.state,
      postalCode: business.address.postalCode,
      addressCountry: business.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: business.location.latitude,
      longitude: business.location.longitude,
    },
    hasMap: mapsDirectionsUrl,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Sunday'],
        opens: '18:30',
        closes: '23:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Friday', 'Saturday'],
        opens: '18:30',
        closes: '23:30',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: business.rating.value,
      reviewCount: business.rating.count,
      bestRating: 5,
    },
    hasMenu: {
      '@type': 'Menu',
      name: `Cardápio ${business.name}`,
      hasMenuSection: categories.map((category) => ({
        '@type': 'MenuSection',
        name: category.label,
        hasMenuItem: products
          .filter((p) => p.category === category.id && p.available)
          .map((p) => ({
            '@type': 'MenuItem',
            name: p.name,
            ...(p.description ? { description: p.description } : {}),
            offers: { '@type': 'Offer', price: p.price.toFixed(2), priceCurrency: 'BRL' },
          })),
      })),
    },
    acceptsReservations: false,
    publicAccess: true,
    smokingAllowed: false,
    keywords: allSearchTerms.join(', '),
    areaServed: { '@type': 'City', name: 'Jacareí' },
    additionalProperty: business.services.map((s) => ({
      '@type': 'PropertyValue',
      name: 'Serviço',
      value: s,
    })),
    alternateName: `${business.name} — ${fullAddress}`,
  };
}
