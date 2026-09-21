import { getIcon } from '../lib/icons'
import Reveal from './Reveal'

// Grid compacto de icono + etiqueta corta (perfiles de la comunidad,
// tipos de negocio a los que prestamos servicio, etc.)
export default function IconLabelGrid({ items, dark = false }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
      {items.map((item, i) => {
        const Icon = getIcon(item.icono)
        return (
          <Reveal key={item.label} delay={i * 30}>
            <div
              className={`flex h-full items-center gap-3 rounded-xl border px-4 py-3.5 ${
                dark ? 'border-cream/10 bg-cream/[0.04]' : 'border-charcoal/10 bg-white/60'
              }`}
            >
              <Icon className={`h-5 w-5 flex-shrink-0 ${dark ? 'text-terracotta' : 'text-terracotta'}`} strokeWidth={1.5} />
              <span className={`text-sm font-medium leading-snug ${dark ? 'text-cream/85' : 'text-charcoal/80'}`}>
                {item.label}
              </span>
            </div>
          </Reveal>
        )
      })}
    </div>
  )
}
