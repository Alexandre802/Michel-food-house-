import { headers } from 'next/headers';
import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { business, fullAddress } from '@/lib/business';
import { allSearchTerms, restaurantJsonLd } from '@/lib/seo';
import RegistrarSW from '@/components/pwa/RegistrarSW';
import './globals.css';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jakarta',
});

const googleSiteVerification =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim();

export const metadata: Metadata = {
  metadataBase: new URL(business.siteUrl),
  title: {
    default: `${business.name} | Lanches em Jacareí`,
    template: `%s | ${business.name}`,
  },
  description: business.description,
  keywords: allSearchTerms,
  applicationName: business.name,
  alternates: { canonical: '/' },
  ...(googleSiteVerification
    ? { verification: { google: googleSiteVerification } }
    : {}),
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: business.siteUrl,
    siteName: business.name,
    title: `${business.name} | Lanches em Jacareí`,
    description: business.description,
    images: [{ url: '/og.png', width: 1200, height: 630, alt: `${business.name} — ${business.slogan}` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${business.name} | Lanches em Jacareí`,
    description: business.description,
    images: ['/og.png'],
  },
  robots: { index: true, follow: true },
  manifest: '/manifest.webmanifest',
  appleWebApp: {
    capable: true,
    title: business.name,
    statusBarStyle: 'black-translucent',
  },
  icons: {
    apple: [{ url: '/icones/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    icon: [
      { url: '/icones/icone-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icones/icone-512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  other: {
    'geo.placename': `${business.address.city}, ${business.address.state}`,
    'geo.region': 'BR-SP',
  },
};

export const viewport: Viewport = {
  themeColor: '#f2620c',
  colorScheme: 'dark',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const nonce = (await headers()).get('x-nonce') ?? undefined;

  return (
    <html lang="pt-BR" className={jakarta.variable}>
      <body className="antialiased">
        <a
          href="#cardapio"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-5 focus:py-3 focus:font-bold focus:text-cocoa"
        >
          Pular para o cardápio
        </a>
        {children}
        <RegistrarSW />
        <script
          nonce={nonce}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd()) }}
        />
        <script
          nonce={nonce}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: business.name,
              url: business.siteUrl,
              description: `${business.name} — ${fullAddress}`,
            }),
          }}
        />
      </body>
    </html>
  );
}
