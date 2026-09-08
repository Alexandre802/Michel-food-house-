import { business, whatsappUrl } from '@/lib/business';
import { WhatsAppIcon } from '../ui/Icons';
import { Reveal } from '../ui/Reveal';
import { SplitHeading } from '../ui/Motion';

/**
 * Área institucional das quartas promocionais.
 * Nenhuma oferta específica é anunciada aqui: a proposta é comunicar que
 * toda quarta-feira acontece uma promoção diferente e levar o cliente ao CTA.
 */
export default function Promocoes() {
  return (
    <section id="promocoes" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto w-full max-w-[86rem] px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.06] px-6 py-10 shadow-2xl backdrop-blur-xl sm:px-10 sm:py-14 lg:px-14 lg:py-16">
            <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-orange-500/25 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-red-500/20 blur-3xl" />

            <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-14">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-orange-300/30 bg-orange-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.28em] text-orange-200">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-orange-300" />
                  Toda quarta é diferente
                </div>

                <p className="mt-7 text-xs font-extrabold uppercase tracking-[0.35em] text-white/65">
                  Quarta-feira na {business.name}
                </p>

                <SplitHeading
                  text="Quarta tem surpresa por aqui"
                  className="mt-3 max-w-4xl text-[clamp(2.5rem,7vw,5.5rem)] font-black leading-[0.92] tracking-[-0.04em] text-white"
                />

                <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
                  Toda quarta-feira acontece uma promoção diferente na {business.name}. A oferta muda,
                  mas a missão é sempre a mesma: deixar sua quarta ainda mais gostosa.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a
                    href={whatsappUrl(
                      `Olá! Quero saber qual é a promoção desta quarta-feira na ${business.name}.`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 rounded-full bg-white px-7 py-4 font-black text-black transition-all hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl"
                  >
                    <WhatsAppIcon className="h-5 w-5" />
                    Quero saber a promoção da quarta
                  </a>

                  <span className="text-center text-sm font-bold text-white/55 sm:text-left">
                    A promoção muda toda semana.
                  </span>
                </div>
              </div>

              <div className="relative mx-auto flex h-56 w-56 shrink-0 items-center justify-center sm:h-64 sm:w-64 lg:h-72 lg:w-72">
                <div className="absolute inset-0 rounded-full border border-white/10 bg-white/[0.04]" />
                <div className="absolute inset-4 rounded-full border border-dashed border-orange-300/30" />
                <div className="relative text-center">
                  <span className="block text-xs font-black uppercase tracking-[0.35em] text-orange-200">
                    Toda
                  </span>
                  <span className="mt-2 block text-[4.4rem] font-black leading-none tracking-[-0.08em] text-white sm:text-[5.3rem]">
                    4ª
                  </span>
                  <span className="mt-2 block text-sm font-black uppercase tracking-[0.24em] text-white/70">
                    tem novidade
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
