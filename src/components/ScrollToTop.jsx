import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Con react-router, cambiar de ruta no reinicia el scroll por defecto.
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) return // deja que el navegador resuelva anclas (#rrhh, etc.)
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
  }, [pathname, hash])

  return null
}
