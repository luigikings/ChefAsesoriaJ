import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import siteConfig from '../siteConfig'
import { usePageMeta } from '../lib/usePageMeta'
import Reveal from '../components/Reveal'
import ImagePlaceholder from '../components/ImagePlaceholder'
import PillarCard from '../components/PillarCard'
import SectionHeader from '../components/SectionHeader'
import Accordion from '../components/Accordion'
import { getIcon } from '../lib/icons'

export default function Home() {
  const { home, meta, brand } = siteConfig
  usePageMeta(meta.home.title, meta.home.description)
  const BrandIcon = getIcon('ChefHat')

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-cream pt-28 sm:pt-32">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 15% 20%, #B5532E 0, transparent 35%), radial-gradient(circle at 85% 15%, #3F4A3C 0, transparent 35%)',
          }}
        />
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:pb-24">
          <Reveal>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-terracotta/30 bg-terracotta/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-terracotta">
              {home.hero.kicker}
            </p>
            <h1 className="font-serif text-4xl font-semibold leading-tight text-charcoal sm:text-5xl lg:text-[3.25rem]">
              {home.hero.titulo}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-charcoal/75">{home.hero.subtitulo}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {home.hero.accesos.map((acceso, i) => (
                <Link
                  key={acceso.to}
                  to={acceso.to}
                  className={
                    i === 0
                      ? 'inline-flex items-center justify-center gap-2 rounded-full bg-terracotta px-7 py-3.5 text-base font-semibold text-cream shadow-md transition-colors hover:bg-terracotta-dark'
                      : 'inline-flex items-center justify-center gap-2 rounded-full border-2 border-charcoal/15 bg-transparent px-7 py-3.5 text-base font-semibold text-charcoal transition-colors hover:border-olive hover:text-olive'
                  }
                >
                  {acceso.label}
                  {i === 0 && <ArrowRight className="h-4 w-4" />}
                </Link>
              ))}
            </div>
          </Reveal>

          <Reveal delay={150}>
            <ImagePlaceholder icon={BrandIcon} label={brand.nombre} aspect="aspect-[4/5] lg:aspect-square" />
          </Reveal>
        </div>
      </section>

      {/* PILARES */}
      <section className="bg-cream py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeader kicker="Varios proyectos, una misma experiencia" titulo="Todo lo que necesitas dentro de Gatrobatos" />
          <div className={`mt-12 grid gap-6 sm:grid-cols-2 ${home.pilares.length === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'}`}>
            {home.pilares.map((pilar, i) => (
              <PillarCard key={pilar.to} {...pilar} delay={i * 60} />
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="bg-olive py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-cream/60">{home.aboutTeaser.kicker}</p>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-cream sm:text-4xl">{home.aboutTeaser.titulo}</h2>
            <p className="mt-5 text-base leading-relaxed text-cream/75">{home.aboutTeaser.texto}</p>
            <Link
              to={home.aboutTeaser.to}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-cream px-6 py-3 text-sm font-semibold text-charcoal transition-colors hover:bg-cream/90"
            >
              {home.aboutTeaser.cta}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <Reveal delay={120}>
            <ImagePlaceholder icon={getIcon('Users')} label="Equipo de Gatrobatos" aspect="aspect-[4/5] lg:aspect-[4/3]" />
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <SectionHeader titulo={home.faq.titulo} center />
          <div className="mt-10">
            <Accordion items={home.faq.lista} idPrefix="home-faq" />
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-charcoal py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <Reveal>
            <h2 className="font-serif text-2xl font-semibold text-cream sm:text-3xl">¿Empezamos a hablar de tu proyecto?</h2>
            <Link
              to="/contacto"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-terracotta px-7 py-3.5 text-base font-semibold text-cream shadow-md transition-colors hover:bg-terracotta-dark"
            >
              Ir a contacto
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
