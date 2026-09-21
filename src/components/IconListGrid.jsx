import { Check } from 'lucide-react'
import { getIcon } from '../lib/icons'
import Reveal from './Reveal'

// Grid de tarjetas icono + título + lista de puntos.
// Se usa para categorías de la Shop, áreas de servicio de consultoría,
// áreas de Chef Privado, etc.
export default function IconListGrid({ items, columns = 'sm:grid-cols-2 lg:grid-cols-3', dark = false }) {
  return (
    <div className={`grid gap-6 ${columns}`}>
      {items.map((item, i) => {
        const Icon = getIcon(item.icono)
        return (
          <Reveal key={item.titulo} delay={i * 60}>
            <div
              className={`h-full rounded-2xl border p-6 ${
                dark ? 'border-cream/10 bg-cream/[0.04]' : 'border-charcoal/10 bg-white/60 shadow-sm'
              }`}
            >
              <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${dark ? 'bg-cream/10' : 'bg-olive/10'}`}>
                <Icon className={`h-5 w-5 ${dark ? 'text-cream' : 'text-olive'}`} strokeWidth={1.5} />
              </div>
              <h3 className={`mt-4 font-serif text-lg font-semibold ${dark ? 'text-cream' : 'text-charcoal'}`}>
                {item.titulo}
              </h3>
              {item.texto && (
                <p className={`mt-2 text-sm leading-relaxed ${dark ? 'text-cream/70' : 'text-charcoal/65'}`}>{item.texto}</p>
              )}
              {item.items && (
                <ul className="mt-3 space-y-1.5">
                  {item.items.map((point) => (
                    <li key={point} className={`flex items-start gap-2 text-sm ${dark ? 'text-cream/70' : 'text-charcoal/65'}`}>
                      <Check className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-terracotta" strokeWidth={2.5} />
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </Reveal>
        )
      })}
    </div>
  )
}
