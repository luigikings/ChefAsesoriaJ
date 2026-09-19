import { UserRound } from 'lucide-react'
import siteConfig from '../siteConfig'
import ImagePlaceholder from './ImagePlaceholder'
import Reveal from './Reveal'

export default function About() {
  const { sobreMi } = siteConfig

  return (
    <section id="sobre-mi" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[minmax(0,0.85fr)_1fr] lg:gap-16">
        <Reveal>
          <ImagePlaceholder icon={UserRound} label="Foto de [NOMBRE DEL CHEF]" aspect="aspect-[4/5]" />
        </Reveal>

        <Reveal delay={120}>
          <p className="text-xs font-semibold uppercase tracking-widest text-terracotta">Sobre mí</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-charcoal sm:text-4xl">{sobreMi.titulo}</h2>

          <div className="mt-6 space-y-4">
            {sobreMi.parrafos.map((p, i) => (
              <p key={i} className="text-base leading-relaxed text-charcoal/75">
                {p}
              </p>
            ))}
          </div>

          <div className="mt-8 border-t border-charcoal/10 pt-6">
            <p className="font-serif text-xl font-semibold text-charcoal">{sobreMi.firma}</p>
            <p className="text-sm text-charcoal/60">{sobreMi.cargo}</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
