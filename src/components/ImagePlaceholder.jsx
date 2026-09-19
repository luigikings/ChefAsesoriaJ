// TODO: reemplazar por foto real
// Bloque de imagen provisional con degradado cálido + icono grande.
// Úsalo en cualquier sitio donde falte una foto real (hero, sobre mí, etc.)
export default function ImagePlaceholder({ icon: Icon, label, className = '', aspect = 'aspect-[4/5]' }) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-olive via-olive-dark to-charcoal shadow-xl ${aspect} ${className}`}
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, rgba(247,243,236,0.4) 0, transparent 40%), radial-gradient(circle at 80% 70%, rgba(181,83,46,0.5) 0, transparent 45%)',
        }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
        {Icon && <Icon className="h-12 w-12 text-cream/70" strokeWidth={1.25} />}
        {label && <span className="text-sm font-medium tracking-wide text-cream/70">{label}</span>}
      </div>
      <div className="absolute inset-0 border border-cream/10 rounded-2xl" />
    </div>
  )
}
