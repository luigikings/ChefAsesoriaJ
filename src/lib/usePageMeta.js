import { useEffect } from 'react'

// Actualiza <title> y la meta description en cada página.
// Sitio sin SSR: es la forma más simple de tener SEO por ruta
// sin añadir una dependencia como react-helmet.
export function usePageMeta(title, description) {
  useEffect(() => {
    if (title) document.title = title

    if (description) {
      let tag = document.querySelector('meta[name="description"]')
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute('name', 'description')
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', description)
    }
  }, [title, description])
}
