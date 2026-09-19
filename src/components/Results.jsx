import siteConfig from '../siteConfig'
import Reveal from './Reveal'

export default function Results() {
  const { resultados } = siteConfig

  return (
    <section className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <h2 className="font-serif text-3xl font-semibold text-charcoal sm:text-4xl">{resultados.titulo}</h2>
          <p className="mt-4 text-lg text-charcoal/70">{resultados.subtitulo}</p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {resultados.lista.map((item, i) => (
            <Reveal key={item.label} delay={i * 60}>
              <div className="rounded-2xl border border-terracotta/20 bg-terracotta/5 p-7 text-center">
                <p className="font-serif text-4xl font-semibold text-terracotta">{item.valor}</p>
                <p className="mt-2 text-sm font-medium text-charcoal/70">{item.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-6 text-center text-xs italic text-charcoal/40">{resultados.nota}</p>
      </div>
    </section>
  )
}
