import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { business, whatsappUrl } from '@/lib/business';
import { WhatsAppIcon } from '@/components/ui/Icons';

export const metadata: Metadata = {
  title: 'Quarta Especial',
  description: `Toda quarta-feira a ${business.name} prepara uma promoção diferente. Confira a novidade da semana e fale com a gente pelo WhatsApp.`,
  alternates: { canonical: '/quarta' },
  openGraph: {
    title: `Quarta Especial | ${business.name}`,
    description: `Toda quarta-feira tem uma promoção diferente na ${business.name}.`,
    url: `${business.siteUrl}/quarta`,
  },
};

export default function QuartaPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-28">
        <section className="relative overflow-hidden py-20 sm:py-28">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.16),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.10),transparent_35%)]" />

          <div className="mx-auto w-full max-w-5xl px-5 text-center sm:px-8">
            <span className="inline-flex rounded-full border border-white/35 bg-white/10 px-5 py-2 text-xs font-extrabold uppercase tracking-[0.3em] text-white backdrop-blur-md">
              Toda quarta é diferente
            </span>

            <h1 className="mt-7 text-[clamp(3rem,9vw,6.5rem)] font-black leading-[0.9] tracking-[-0.05em] text-white">
              QUARTA TEM
              <span className="block text-white/70">SURPRESA.</span>
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl">
              Toda quarta-feira a {business.name} prepara uma promoção diferente. A oferta muda toda semana, então vale a pena ficar de olho.
            </p>

            <div className="mx-auto mt-12 max-w-3xl rounded-[2rem] border border-white/25 bg-white/10 p-7 shadow-2xl backdrop-blur-xl sm:p-10">
              <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-white/65">A promoção da semana</p>
              <p className="mt-4 text-2xl font-black text-white sm:text-3xl">
                Descubra na quarta-feira 👀
              </p>
              <p className="mx-auto mt-3 max-w-xl text-white/75">
                A promoção é divulgada conforme a semana. Chame no WhatsApp e descubra a da vez.
              </p>

              <a
                href={whatsappUrl(`Olá! Qual é a promoção desta quarta-feira na ${business.name}?`)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-base font-black text-ember transition-transform hover:-translate-y-1"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Quero saber a promoção da quarta
              </a>
            </div>

            <Link
              href="/"
              className="mt-8 inline-flex text-sm font-bold text-white/75 underline-offset-4 hover:text-white hover:underline"
            >
              Voltar para o site
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
