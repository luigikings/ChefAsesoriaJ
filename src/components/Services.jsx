import siteConfig from '../siteConfig'
import { getIcon } from '../lib/icons'
import Reveal from './Reveal'

export default function Services() {
  const { servicios } = siteConfig

  return (
    <section id="servicios" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-terracotta">Servicios</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-charcoal sm:text-4xl">{servicios.titulo}</h2>
          <p className="mt-4 text-lg text-charcoal/70">{servicios.subtitulo}</p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {servicios.lista.map((item, i) => {
            const Icon = getIcon(item.icono)
            return (
              <Reveal key={item.titulo} delay={i * 60}>
                <div className="h-full rounded-2xl border border-charcoal/10 bg-white/60 p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-olive/10">
                    <Icon className="h-6 w-6 text-olive" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-5 font-serif text-xl font-semibold text-charcoal">{item.titulo}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-charcoal/70">{item.texto}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
