import { AlertCircle, CheckCircle2, Loader2, Send } from 'lucide-react'

// Botón de envío + mensajes de estado (enviando / enviado / error).
// Compartido por todos los formularios de la web.
export function SubmitButton({ status, label = 'Enviar solicitud', sendingLabel = 'Enviando...' }) {
  return (
    <button
      type="submit"
      disabled={status === 'sending'}
      className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-terracotta px-7 py-3.5 text-base font-semibold text-cream shadow-md transition-colors hover:bg-terracotta-dark disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
    >
      {status === 'sending' ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" />
          {sendingLabel}
        </>
      ) : (
        <>
          <Send className="h-4 w-4" />
          {label}
        </>
      )}
    </button>
  )
}

export function StatusMessage({ status, successText, errorText }) {
  return (
    <div aria-live="polite" className="mt-4">
      {status === 'sent' && (
        <p className="flex items-center gap-2 text-sm font-medium text-olive">
          <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
          {successText}
        </p>
      )}
      {status === 'error' && (
        <p className="flex items-center gap-2 text-sm font-medium text-terracotta-dark">
          <AlertCircle className="h-5 w-5 flex-shrink-0" />
          {errorText}
        </p>
      )}
    </div>
  )
}
