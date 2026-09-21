import Reveal from './Reveal'

// Cabecera reutilizable: kicker + título + (opcional) texto, en fondo claro u oscuro.
export default function SectionHeader({ kicker, titulo, texto, light = false, center = false, className = '' }) {
  return (
    <Reveal className={`${center ? 'mx-auto text-center' : ''} max-w-2xl ${className}`}>
      {kicker && (
        <p className={`text-xs font-semibold uppercase tracking-widest ${light ? 'text-cream/60' : 'text-terracotta'}`}>
          {kicker}
        </p>
      )}
      {titulo && (
        <h2 className={`mt-3 font-serif text-3xl font-semibold sm:text-4xl ${light ? 'text-cream' : 'text-charcoal'}`}>
          {titulo}
        </h2>
      )}
      {texto && <p className={`mt-4 text-lg ${light ? 'text-cream/75' : 'text-charcoal/70'}`}>{texto}</p>}
    </Reveal>
  )
}
