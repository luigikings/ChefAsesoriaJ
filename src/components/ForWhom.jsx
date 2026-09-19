import siteConfig from '../siteConfig'
import { getIcon } from '../lib/icons'
import Reveal from './Reveal'

export default function ForWhom() {
  const { paraQuienEs } = siteConfig

  return (
    <section className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <h2 className="font-serif text-3xl font-semibold text-charcoal sm:text-4xl">{paraQuienEs.titulo}</h2>
          <p className="mt-4 text-lg text-charcoal/70">{paraQuienEs.subtitulo}</p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {paraQuienEs.lista.map((item, i) => {
            const Icon = getIcon(item.icono)
            return (
              <Reveal key={item.titulo} delay={i * 60}>
                <div className="flex h-full flex-col items-start rounded-2xl border border-charcoal/10 bg-white/60 p-6">
                  <Icon className="h-7 w-7 text-terracotta" strokeWidth={1.5} />
                  <h3 className="mt-4 font-serif text-base font-semibold text-charcoal">{item.titulo}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal/65">{item.texto}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
