import { ArrowRight, ChefHat, MessageCircle } from 'lucide-react'
import siteConfig from '../siteConfig'
import ImagePlaceholder from './ImagePlaceholder'
import Reveal from './Reveal'

export default function Hero() {
  const { hero, contacto } = siteConfig
  const whatsappUrl = `https://wa.me/${contacto.whatsappNumero}?text=${encodeURIComponent(
    contacto.whatsappMensajePredefinido
  )}`

  return (
    <section id="inicio" className="relative overflow-hidden bg-cream pt-28 sm:pt-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 15% 20%, #B5532E 0, transparent 35%), radial-gradient(circle at 85% 15%, #3F4A3C 0, transparent 35%)',
        }}
      />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:pb-24">
        <Reveal>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-terracotta/30 bg-terracotta/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-terracotta">
            {hero.kicker}
          </p>
          <h1 className="font-serif text-4xl font-semibold leading-tight text-charcoal sm:text-5xl lg:text-[3.25rem]">
            {hero.titulo}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-charcoal/75">{hero.subtitulo}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-terracotta px-7 py-3.5 text-base font-semibold text-cream shadow-md transition-colors hover:bg-terracotta-dark"
            >
              {hero.ctaPrimario}
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-charcoal/15 bg-transparent px-7 py-3.5 text-base font-semibold text-charcoal transition-colors hover:border-olive hover:text-olive"
            >
              <MessageCircle className="h-4 w-4" />
              {hero.ctaSecundario}
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-4 border-t border-charcoal/10 pt-8">
            {hero.datosConfianza.map((dato) => (
              <div key={dato.label}>
                <dt className="sr-only">{dato.label}</dt>
                <dd className="font-serif text-2xl font-semibold text-terracotta sm:text-3xl">{dato.valor}</dd>
                <dd className="mt-1 text-xs leading-snug text-charcoal/60 sm:text-sm">{dato.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={150}>
          <ImagePlaceholder icon={ChefHat} label="Foto del chef en cocina" aspect="aspect-[4/5] lg:aspect-square" />
        </Reveal>
      </div>
    </section>
  )
}
