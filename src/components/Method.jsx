import siteConfig from '../siteConfig'
import Reveal from './Reveal'

export default function Method() {
  const { metodo } = siteConfig

  return (
    <section id="metodo" className="bg-olive py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-cream/60">Método</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-cream sm:text-4xl">{metodo.titulo}</h2>
          <p className="mt-4 text-lg text-cream/75">{metodo.subtitulo}</p>
        </Reveal>

        <div className="relative mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {metodo.pasos.map((paso, i) => (
            <Reveal key={paso.numero} delay={i * 80}>
              <div className="relative h-full rounded-2xl border border-cream/15 bg-cream/[0.05] p-6">
                <span className="font-serif text-4xl font-semibold text-terracotta/70">{paso.numero}</span>
                <h3 className="mt-4 font-serif text-lg font-semibold text-cream">{paso.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/70">{paso.texto}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
