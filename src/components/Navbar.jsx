import { useEffect, useState } from 'react'
import { ChefHat, Menu, X } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
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

  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors hover:text-terracotta ${isActive ? 'text-terracotta' : 'text-charcoal/80'}`

  const mobileLinkClass = ({ isActive }) =>
    `rounded-md px-3 py-2.5 text-base font-medium hover:bg-charcoal/5 ${isActive ? 'text-terracotta' : 'text-charcoal/80'}`

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-cream/95 shadow-sm backdrop-blur' : 'bg-cream/80 backdrop-blur-sm'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link to="/" className="flex items-center gap-2">
          <ChefHat className="h-6 w-6 text-terracotta" strokeWidth={1.5} />
          <span className="font-serif text-lg font-semibold tracking-tight text-charcoal">{siteConfig.brand.nombre}</span>
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          {siteConfig.nav.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClass} end={item.to === '/'}>
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/contacto"
            className="rounded-full bg-terracotta px-5 py-2.5 text-sm font-semibold text-cream shadow-sm transition-colors hover:bg-terracotta-dark"
          >
            Contactar
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-charcoal lg:hidden"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-charcoal/10 bg-cream lg:hidden">
          <div className="flex flex-col gap-1 px-5 py-4">
            {siteConfig.nav.map((item) => (
              <NavLink key={item.to} to={item.to} onClick={handleNavClick} className={mobileLinkClass} end={item.to === '/'}>
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/contacto"
              onClick={handleNavClick}
              className="mt-2 rounded-full bg-terracotta px-5 py-3 text-center text-sm font-semibold text-cream"
            >
              Contactar
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
