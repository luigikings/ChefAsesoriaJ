import { MessageCircle } from 'lucide-react'
import siteConfig from '../siteConfig'

export default function WhatsAppButton() {
  const { whatsappNumero, whatsappMensajePredefinido } = siteConfig.contacto
  const url = `https://wa.me/${whatsappNumero}?text=${encodeURIComponent(whatsappMensajePredefinido)}`

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40 sm:bottom-6 sm:right-6"
    >
      <MessageCircle className="h-7 w-7" strokeWidth={1.75} fill="currentColor" />
      <span className="sr-only">Escribir por WhatsApp</span>
    </a>
  )
}
