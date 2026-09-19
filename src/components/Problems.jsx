import siteConfig from '../siteConfig'
import { getIcon } from '../lib/icons'
import Reveal from './Reveal'

export default function Problems() {
  const { problemas } = siteConfig

  return (
    <section className="bg-charcoal py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <h2 className="font-serif text-3xl font-semibold text-cream sm:text-4xl">{problemas.titulo}</h2>
          <p className="mt-4 text-lg text-cream/70">{problemas.subtitulo}</p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {problemas.lista.map((item, i) => {
            const Icon = getIcon(item.icono)
            return (
              <Reveal key={item.titulo} delay={i * 60}>
                <div className="h-full rounded-2xl border border-cream/10 bg-cream/[0.04] p-6 transition-colors hover:border-terracotta/40 hover:bg-cream/[0.06]">
                  <Icon className="h-8 w-8 text-terracotta" strokeWidth={1.5} />
                  <h3 className="mt-4 font-serif text-lg font-semibold text-cream">{item.titulo}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/65">{item.texto}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
