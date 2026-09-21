import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { getIcon } from '../lib/icons'
import Reveal from './Reveal'

// Tarjeta usada en Home para enlazar a cada uno de los 4 pilares de Gatrobatos.
export default function PillarCard({ icono, titulo, subtitulo, texto, to, cta, delay = 0 }) {
  const Icon = getIcon(icono)

  return (
    <Reveal delay={delay}>
      <Link
        to={to}
        className="group flex h-full flex-col rounded-2xl border border-charcoal/10 bg-white/60 p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-terracotta/30 hover:shadow-lg"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-olive/10">
          <Icon className="h-6 w-6 text-olive" strokeWidth={1.5} />
        </div>
        <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-terracotta">{subtitulo}</p>
        <h3 className="mt-1.5 font-serif text-xl font-semibold text-charcoal">{titulo}</h3>
        <p className="mt-2.5 flex-1 text-sm leading-relaxed text-charcoal/70">{texto}</p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-terracotta">
          {cta}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </Link>
    </Reveal>
  )
}
