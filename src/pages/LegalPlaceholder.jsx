import { usePageMeta } from '../lib/usePageMeta'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'

// Página placeholder para Aviso Legal y Política de Privacidad.
// TODO: sustituir por el texto legal definitivo, revisado por un profesional.
export default function LegalPlaceholder({ titulo }) {
  usePageMeta(`${titulo} · Gatrobatos`, `${titulo} de Gatrobatos.`)

  return (
    <>
      <PageHero kicker="Legal" titulo={titulo} />
      <section className="bg-cream pb-24">
        <div className="mx-auto max-w-2xl px-5 sm:px-8">
          <Reveal>
            <p className="text-base leading-relaxed text-charcoal/70">
              Este contenido está pendiente de redactar. Sustituye este texto por el {titulo.toLowerCase()} definitivo de
              Gatrobatos, revisado por un profesional legal, antes de publicar la web.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  )
}
