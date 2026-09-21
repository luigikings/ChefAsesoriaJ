import { Quote } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

// Componente reutilizable: recibe título + lista de testimonios por props
// para poder usarse en cualquier página (Nosotros, Home, etc.).
export default function Testimonials({ titulo, lista }) {
  return (
    <section className="bg-charcoal py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader titulo={titulo} light />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {lista.map((t, i) => (
            <Reveal key={t.nombre + i} delay={i * 80}>
              <figure className="flex h-full flex-col rounded-2xl border border-cream/10 bg-cream/[0.04] p-7">
                <Quote className="h-7 w-7 text-terracotta" strokeWidth={1.5} />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-cream/80">{t.texto}</blockquote>
                <figcaption className="mt-6 border-t border-cream/10 pt-4">
                  <p className="text-sm font-semibold text-cream">{t.nombre}</p>
                  <p className="text-xs text-cream/55">{t.cargo}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
