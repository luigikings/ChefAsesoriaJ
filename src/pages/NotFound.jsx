import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { usePageMeta } from '../lib/usePageMeta'
import Reveal from '../components/Reveal'

export default function NotFound() {
  usePageMeta('Página no encontrada · Gatrobatos', 'Esta página no existe o se ha movido.')

  return (
    <section className="flex min-h-[70vh] items-center bg-cream pt-24">
      <div className="mx-auto max-w-md px-5 text-center sm:px-8">
        <Reveal>
          <p className="font-serif text-6xl font-semibold text-terracotta">404</p>
          <h1 className="mt-4 font-serif text-2xl font-semibold text-charcoal">Esta página no existe</h1>
          <p className="mt-3 text-base text-charcoal/70">Puede que se haya movido o que la dirección no sea correcta.</p>
          <Link
            to="/"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-terracotta px-7 py-3.5 text-base font-semibold text-cream shadow-md transition-colors hover:bg-terracotta-dark"
          >
            Volver al inicio
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
