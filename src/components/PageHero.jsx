import Reveal from './Reveal'

// Cabecera de página (bajo el navbar fijo) para las páginas internas
// (Somos Hostelería, Shop, Consultoría, Chef Privado, Nosotros, Contacto).
export default function PageHero({ kicker, titulo, texto, children }) {
  return (
    <section className="relative overflow-hidden bg-cream pb-16 pt-32 sm:pb-20 sm:pt-40">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 15% 20%, #B5532E 0, transparent 35%), radial-gradient(circle at 85% 15%, #3F4A3C 0, transparent 35%)',
        }}
      />
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          {kicker && (
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-terracotta/30 bg-terracotta/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-terracotta">
              {kicker}
            </p>
          )}
          <h1 className="font-serif text-4xl font-semibold leading-tight text-charcoal sm:text-5xl">{titulo}</h1>
          {texto && <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-charcoal/75">{texto}</p>}
          {children}
        </Reveal>
      </div>
    </section>
  )
}
