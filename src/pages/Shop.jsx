import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import siteConfig from '../siteConfig'
import { usePageMeta } from '../lib/usePageMeta'
import PageHero from '../components/PageHero'
import SectionHeader from '../components/SectionHeader'
import IconListGrid from '../components/IconListGrid'
import Reveal from '../components/Reveal'
import { getIcon } from '../lib/icons'

export default function Shop() {
  const { shop, meta } = siteConfig
  usePageMeta(meta.shop.title, meta.shop.description)

  return (
    <>
      <PageHero kicker={shop.hero.kicker} titulo={shop.hero.titulo} texto={shop.hero.texto} />

      {/* CATEGORÍAS */}
      <section className="bg-cream pb-20 sm:pb-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeader kicker="Categorías" titulo="Herramientas listas para tu cocina" center />
          <div className="mt-12">
            <IconListGrid items={shop.categorias} />
          </div>
        </div>
      </section>

      {/* PACKS */}
      <section className="bg-charcoal py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeader kicker="Packs" titulo={shop.packs.titulo} texto={shop.packs.subtitulo} light />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {shop.packs.lista.map((pack, i) => {
              const Icon = getIcon(pack.icono)
              return (
                <Reveal key={pack.titulo} delay={i * 60}>
                  <div className="flex h-full flex-col rounded-2xl border border-cream/10 bg-cream/[0.04] p-6">
                    <Icon className="h-8 w-8 text-terracotta" strokeWidth={1.5} />
                    <h3 className="mt-4 font-serif text-lg font-semibold text-cream">{pack.titulo}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-cream/65">{pack.texto}</p>
                    <Link
                      to="/contacto"
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-terracotta hover:text-terracotta-light"
                    >
                      Solicitar información
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-2xl px-5 text-center sm:px-8">
          <Reveal>
            <h2 className="font-serif text-2xl font-semibold text-charcoal sm:text-3xl">{shop.cta.titulo}</h2>
            <p className="mt-3 text-base text-charcoal/70">{shop.cta.texto}</p>
            <Link
              to="/contacto"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-terracotta px-7 py-3.5 text-base font-semibold text-cream shadow-md transition-colors hover:bg-terracotta-dark"
            >
              Contactar
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
