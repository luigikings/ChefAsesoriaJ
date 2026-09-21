import { Check } from 'lucide-react'

// Lista simple de puntos con check, sin icono por elemento.
export default function BulletList({ items, columns = false, dark = false }) {
  return (
    <ul className={`space-y-2 ${columns ? 'sm:columns-2 sm:gap-x-8' : ''}`}>
      {items.map((item) => (
        <li key={item} className={`flex items-start gap-2.5 text-sm leading-relaxed ${dark ? 'text-cream/75' : 'text-charcoal/75'} break-inside-avoid`}>
          <Check className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-terracotta" strokeWidth={2.5} />
          {item}
        </li>
      ))}
    </ul>
  )
}
