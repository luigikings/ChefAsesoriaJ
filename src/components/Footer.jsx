import { ChefHat, Instagram, Linkedin } from 'lucide-react'
import { Link } from 'react-router-dom'
import siteConfig from '../siteConfig'

export default function Footer() {
  const { brand, footer, redes, contacto } = siteConfig

  return (
    <footer className="bg-charcoal py-12 text-cream/70">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-4">
          <div className="sm:col-span-2">
            <Link to="/" className="flex items-center gap-2">
              <ChefHat className="h-5 w-5 text-terracotta" strokeWidth={1.5} />
              <span className="font-serif text-lg font-semibold text-cream">{brand.nombre}</span>
            </Link>
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

          {footer.columnas.map((columna) => (
            <div key={columna.titulo}>
              <p className="text-xs font-semibold uppercase tracking-widest text-cream/40">{columna.titulo}</p>
              <ul className="mt-4 space-y-2 text-sm">
                {columna.enlaces.map((enlace) => (
                  <li key={enlace.to}>
                    <Link to={enlace.to} className="transition-colors hover:text-terracotta">
                      {enlace.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 border-t border-cream/10 pt-6 sm:flex sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs text-cream/50">
            <Link to="/aviso-legal" className="hover:text-terracotta">
              Aviso legal
            </Link>
            <Link to="/privacidad" className="hover:text-terracotta">
              Política de privacidad
            </Link>
            <a href={`mailto:${contacto.email}`} className="hover:text-terracotta">
              {contacto.email}
            </a>
          </div>
          <p className="text-xs text-cream/40">{footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
