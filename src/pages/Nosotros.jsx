import { UserRound } from 'lucide-react'
import siteConfig from '../siteConfig'
import { usePageMeta } from '../lib/usePageMeta'
import PageHero from '../components/PageHero'
import SectionHeader from '../components/SectionHeader'
import ImagePlaceholder from '../components/ImagePlaceholder'
import BulletList from '../components/BulletList'
import Reveal from '../components/Reveal'
import Testimonials from '../components/Testimonials'

export default function Nosotros() {
  const { nosotros, meta } = siteConfig
  usePageMeta(meta.nosotros.title, meta.nosotros.description)

  return (
    <>
      <PageHero kicker={nosotros.hero.kicker} titulo={nosotros.hero.titulo} texto={nosotros.hero.texto} />

      {/* MISIÓN */}
      <section className="bg-cream pb-16 sm:pb-20">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <SectionHeader titulo={nosotros.mision.titulo} texto={nosotros.mision.texto} center />
        </div>
      </section>

      {/* FUNDADOR */}
      <section className="bg-olive py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[minmax(0,0.85fr)_1fr] lg:gap-16">
          <Reveal>
            <ImagePlaceholder icon={UserRound} label={`Foto de ${nosotros.fundador.firma}`} aspect="aspect-[4/5]" />
          </Reveal>
          <Reveal delay={100}>
            <p className="text-xs font-semibold uppercase tracking-widest text-cream/60">{nosotros.fundador.titulo}</p>
            <div className="mt-4 space-y-4">
              {nosotros.fundador.parrafos.map((p, i) => (
                <p key={i} className="text-base leading-relaxed text-cream/80">
                  {p}
                </p>
              ))}
            </div>
            <div className="mt-6 border-t border-cream/15 pt-5">
              <p className="font-serif text-lg font-semibold text-cream">{nosotros.fundador.firma}</p>
              <p className="text-sm text-cream/60">{nosotros.fundador.cargo}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* VISIÓN */}
      <section className="bg-cream py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <SectionHeader titulo={nosotros.vision.titulo} texto={nosotros.vision.texto} center />
        </div>
      </section>

      {/* ROADMAP */}
      <section className="bg-olive py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <SectionHeader kicker="Roadmap" titulo={nosotros.roadmap.titulo} texto={nosotros.roadmap.subtitulo} light center />
          <Reveal delay={100} className="mt-8">
            <BulletList items={nosotros.roadmap.lista} columns dark />
          </Reveal>
        </div>
      </section>

      <Testimonials titulo={nosotros.testimonios.titulo} lista={nosotros.testimonios.lista} />
    </>
  )
}
