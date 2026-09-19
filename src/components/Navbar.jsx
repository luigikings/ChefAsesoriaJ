import { useEffect, useState } from 'react'
import { ChefHat, Menu, X } from 'lucide-react'
import siteConfig from '../siteConfig'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = () => setOpen(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-cream/95 shadow-sm backdrop-blur' : 'bg-cream/80 backdrop-blur-sm'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#inicio" className="flex items-center gap-2 group">
          <ChefHat className="h-6 w-6 text-terracotta" strokeWidth={1.5} />
          <span className="font-serif text-lg font-semibold tracking-tight text-charcoal">
            {siteConfig.chef.nombre}
          </span>
          <span className="hidden h-4 w-px bg-charcoal/20 sm:block" />
          <span className="hidden font-sans text-xs uppercase tracking-widest text-charcoal/60 sm:block">
            {siteConfig.chef.tituloProfesional}
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-charcoal/80 transition-colors hover:text-terracotta"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="rounded-full bg-terracotta px-5 py-2.5 text-sm font-semibold text-cream shadow-sm transition-colors hover:bg-terracotta-dark"
          >
            Contactar
          </a>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-charcoal md:hidden"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-charcoal/10 bg-cream md:hidden">
          <div className="flex flex-col gap-1 px-5 py-4">
            {siteConfig.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className="rounded-md px-3 py-2.5 text-base font-medium text-charcoal/80 hover:bg-charcoal/5"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={handleNavClick}
              className="mt-2 rounded-full bg-terracotta px-5 py-3 text-center text-sm font-semibold text-cream"
            >
              Contactar
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
