import { ChefHat, Instagram, Linkedin } from 'lucide-react'
import siteConfig from '../siteConfig'

export default function Footer() {
  const { chef, footer, nav, redes, contacto } = siteConfig

  return (
    <footer className="bg-charcoal py-12 text-cream/70">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <a href="#inicio" className="flex items-center gap-2">
              <ChefHat className="h-5 w-5 text-terracotta" strokeWidth={1.5} />
              <span className="font-serif text-lg font-semibold text-cream">{chef.nombre}</span>
            </a>
            <p className="mt-3 max-w-xs text-sm leading-relaxed">{footer.descripcion}</p>
            <div className="mt-4 flex gap-3">
              <a
                href={redes.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/15 transition-colors hover:border-terracotta hover:text-terracotta"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={redes.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/15 transition-colors hover:border-terracotta hover:text-terracotta"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-cream/40">Navegación</p>
            <ul className="mt-4 space-y-2 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="transition-colors hover:text-terracotta">
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#contacto" className="transition-colors hover:text-terracotta">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-cream/40">Legal</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="#aviso-legal" className="transition-colors hover:text-terracotta">
                  Aviso legal
                </a>
              </li>
              <li>
                <a href="#privacidad" className="transition-colors hover:text-terracotta">
                  Política de privacidad
                </a>
              </li>
              <li>
                <a href={`mailto:${contacto.email}`} className="transition-colors hover:text-terracotta">
                  {contacto.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-cream/10 pt-6 text-xs text-cream/40">{footer.copyright}</div>
      </div>
    </footer>
  )
}
