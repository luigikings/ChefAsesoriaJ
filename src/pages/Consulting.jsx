import siteConfig from '../siteConfig'
import { usePageMeta } from '../lib/usePageMeta'
import { getIcon } from '../lib/icons'
import PageHero from '../components/PageHero'
import SectionHeader from '../components/SectionHeader'
import IconLabelGrid from '../components/IconLabelGrid'
import BulletList from '../components/BulletList'
import Reveal from '../components/Reveal'
import BuscoProfesionalesForm from '../components/forms/BuscoProfesionalesForm'
import UneteRedForm from '../components/forms/UneteRedForm'

function ServiceSection({ block, dark }) {
  const Icon = getIcon(block.icono)
  return (
    <section id={block.id} className={`scroll-mt-24 py-16 sm:py-20 ${dark ? 'bg-charcoal' : 'bg-cream'}`}>
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_1.4fr] lg:gap-16">
          <Reveal>
            <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${dark ? 'bg-cream/10' : 'bg-olive/10'}`}>
              <Icon className={`h-6 w-6 ${dark ? 'text-terracotta' : 'text-olive'}`} strokeWidth={1.5} />
            </div>
            <h2 className={`mt-4 font-serif text-2xl font-semibold sm:text-3xl ${dark ? 'text-cream' : 'text-charcoal'}`}>
              {block.titulo}
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <BulletList items={block.items} columns dark={dark} />
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default function Consulting() {
  const { consulting, meta } = siteConfig
  usePageMeta(meta.consulting.title, meta.consulting.description)

  return (
    <>
      <PageHero kicker={consulting.hero.kicker} titulo={consulting.hero.titulo} texto={consulting.hero.texto} />

      {/* QUIÉNES */}
      <section className="bg-cream pb-16 sm:pb-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeader titulo={consulting.quienes.titulo} center />
          <div className="mt-10">
            <IconLabelGrid items={consulting.quienes.lista} />
          </div>
        </div>
      </section>

      {/* SUB-NAV */}
      <nav aria-label="Secciones de consultoría" className="border-y border-charcoal/10 bg-cream/95 py-4 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-x-6 gap-y-2 px-5 sm:px-8">
          {consulting.nav.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-charcoal/70 hover:text-terracotta">
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      <ServiceSection block={consulting.operativa} dark={false} />
      <ServiceSection block={consulting.foodCost} dark />
      <ServiceSection block={consulting.oferta} dark={false} />
      <ServiceSection block={consulting.aperturas} dark />
      <ServiceSection block={consulting.formacion} dark={false} />

      {/* RR. HH. HORECA */}
      <section id={consulting.rrhh.id} className="scroll-mt-24 bg-charcoal py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeader kicker={consulting.rrhh.hero.kicker} titulo={consulting.rrhh.hero.titulo} texto={consulting.rrhh.hero.texto} light center />
          <Reveal delay={100} className="mx-auto mt-4 max-w-2xl text-center">
            <p className="text-sm italic text-cream/60">{consulting.rrhh.hero.diferencia}</p>
          </Reveal>

          {/* Perfiles */}
          <div className="mt-14">
            <h3 className="text-center font-serif text-xl font-semibold text-cream">{consulting.rrhh.perfiles.titulo}</h3>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {consulting.rrhh.perfiles.grupos.map((grupo, i) => (
                <Reveal key={grupo.titulo} delay={i * 80}>
                  <div className="h-full rounded-2xl border border-cream/10 bg-cream/[0.04] p-6">
                    <h4 className="font-serif text-lg font-semibold text-terracotta">{grupo.titulo}</h4>
                    <ul className="mt-3 space-y-1.5 text-sm text-cream/70">
                      {grupo.lista.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Proceso */}
          <div className="mt-16">
            <h3 className="text-center font-serif text-xl font-semibold text-cream">{consulting.rrhh.proceso.titulo}</h3>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {consulting.rrhh.proceso.pasos.map((paso, i) => (
                <Reveal key={paso.numero} delay={i * 60}>
                  <div className="h-full rounded-2xl border border-cream/15 bg-cream/[0.05] p-5">
                    <span className="font-serif text-3xl font-semibold text-terracotta/70">{paso.numero}</span>
                    <h4 className="mt-3 font-serif text-base font-semibold text-cream">{paso.titulo}</h4>
                    <p className="mt-1.5 text-xs leading-relaxed text-cream/65">{paso.texto}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={100} className="mx-auto mt-12 max-w-2xl text-center">
            <p className="text-sm leading-relaxed text-cream/60">{consulting.rrhh.relacionComunidad}</p>
          </Reveal>

          {/* Formularios */}
          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            <Reveal>
              <BuscoProfesionalesForm />
            </Reveal>
            <Reveal delay={100}>
              <UneteRedForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
