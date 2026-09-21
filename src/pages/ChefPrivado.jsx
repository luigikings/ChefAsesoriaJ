import siteConfig from '../siteConfig'
import { usePageMeta } from '../lib/usePageMeta'
import { getIcon } from '../lib/icons'
import PageHero from '../components/PageHero'
import BulletList from '../components/BulletList'
import Reveal from '../components/Reveal'

function AreaSection({ area, dark }) {
  const Icon = getIcon(area.icono)
  return (
    <section id={area.id} className={`scroll-mt-24 py-16 sm:py-20 ${dark ? 'bg-charcoal' : 'bg-cream'}`}>
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${dark ? 'bg-cream/10' : 'bg-olive/10'}`}>
            <Icon className={`h-6 w-6 ${dark ? 'text-terracotta' : 'text-olive'}`} strokeWidth={1.5} />
          </div>
          <h2 className={`mt-4 font-serif text-2xl font-semibold sm:text-3xl ${dark ? 'text-cream' : 'text-charcoal'}`}>
            {area.titulo}
          </h2>
          {area.texto && <p className={`mt-3 max-w-2xl text-base ${dark ? 'text-cream/70' : 'text-charcoal/70'}`}>{area.texto}</p>}
        </Reveal>

        {area.items && (
          <Reveal delay={100} className="mt-6 max-w-3xl">
            <BulletList items={area.items} columns dark={dark} />
          </Reveal>
        )}

        {area.subareas && (
          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            {area.subareas.map((sub, i) => (
              <Reveal key={sub.titulo} delay={i * 80}>
                <h3 className={`font-serif text-lg font-semibold ${dark ? 'text-cream' : 'text-charcoal'}`}>{sub.titulo}</h3>
                <div className="mt-3">
                  <BulletList items={sub.items} dark={dark} />
                </div>
              </Reveal>
            ))}
          </div>
        )}

        {area.extra && (
          <Reveal delay={150} className="mt-8 max-w-3xl rounded-2xl border border-terracotta/25 bg-terracotta/5 p-6">
            <h3 className={`font-serif text-base font-semibold ${dark ? 'text-cream' : 'text-charcoal'}`}>{area.extra.titulo}</h3>
            <p className={`mt-2 text-sm ${dark ? 'text-cream/70' : 'text-charcoal/70'}`}>{area.extra.items.join(' · ')}</p>
          </Reveal>
        )}
      </div>
    </section>
  )
}

export default function ChefPrivado() {
  const { chefPrivado, meta } = siteConfig
  usePageMeta(meta.chefPrivado.title, meta.chefPrivado.description)

  return (
    <>
      <PageHero kicker={chefPrivado.hero.kicker} titulo={chefPrivado.hero.titulo} texto={chefPrivado.hero.texto}>
        <nav aria-label="Áreas de Chef Privado" className="mt-8 flex flex-wrap justify-center gap-x-5 gap-y-2">
          {chefPrivado.areas.map((area) => (
            <a key={area.id} href={`#${area.id}`} className="text-sm font-medium text-charcoal/70 hover:text-terracotta">
              {area.titulo}
            </a>
          ))}
        </nav>
      </PageHero>

      {chefPrivado.areas.map((area, i) => (
        <AreaSection key={area.id} area={area} dark={i % 2 === 1} />
      ))}

      {/* PROYECTOS ESPECIALES */}
      <section className="bg-olive py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-cream/60">Además</p>
            <h2 className="mt-3 font-serif text-2xl font-semibold text-cream sm:text-3xl">{chefPrivado.proyectosEspeciales.titulo}</h2>
          </Reveal>
          <Reveal delay={100} className="mt-6 max-w-3xl">
            <BulletList items={chefPrivado.proyectosEspeciales.items} columns dark />
          </Reveal>
        </div>
      </section>
    </>
  )
}
