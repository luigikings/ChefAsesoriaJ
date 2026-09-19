import { useState } from 'react'
import { Mail, MapPin, MessageCircle, Phone, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import siteConfig from '../siteConfig'
import Reveal from './Reveal'

// -------------------------------------------------------------
// Sin backend todavía. Cuando tengas un endpoint (Formspree,
// Getform, Basin...) pega la URL aquí y sendForm() lo usará
// automáticamente en lugar de simular el envío.
// -------------------------------------------------------------
const FORM_ENDPOINT = ''

async function sendForm(data) {
  if (!FORM_ENDPOINT) {
    // Modo simulación: sin backend configurado todavía.
    await new Promise((resolve) => setTimeout(resolve, 900))
    return { ok: true }
  }

  const response = await fetch(FORM_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    throw new Error('No se pudo enviar el formulario')
  }

  return { ok: true }
}

const initialState = {
  nombre: '',
  email: '',
  telefono: '',
  tipoNegocio: '',
  ciudad: '',
  mensaje: '',
  privacidad: false,
  // Honeypot anti-spam: los bots suelen rellenar todos los campos, las personas no ven este.
  website: '',
}

function validate(values) {
  const errors = {}

  if (!values.nombre.trim()) errors.nombre = 'Indica tu nombre.'

  if (!values.email.trim()) {
    errors.email = 'Indica un email de contacto.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'El email no parece válido.'
  }

  if (values.telefono.trim() && !/^[+\d][\d\s-]{6,}$/.test(values.telefono.trim())) {
    errors.telefono = 'El teléfono no parece válido.'
  }

  if (!values.tipoNegocio) errors.tipoNegocio = 'Selecciona el tipo de negocio.'

  if (!values.ciudad.trim()) errors.ciudad = 'Indica la ciudad de tu negocio.'

  if (!values.mensaje.trim()) {
    errors.mensaje = 'Cuéntame brevemente tu situación.'
  } else if (values.mensaje.trim().length < 10) {
    errors.mensaje = 'Añade un poco más de detalle (mínimo 10 caracteres).'
  }

  if (!values.privacidad) errors.privacidad = 'Debes aceptar la política de privacidad.'

  return errors
}

export default function Contact() {
  const { contactoForm, contacto, chef } = siteConfig
  const [values, setValues] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const whatsappUrl = `https://wa.me/${contacto.whatsappNumero}?text=${encodeURIComponent(
    contacto.whatsappMensajePredefinido
  )}`

  const handleChange = (field) => (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setValues((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Honeypot: si este campo oculto viene relleno, es un bot. Fingimos éxito y no enviamos nada.
    if (values.website) {
      setStatus('sent')
      return
    }

    const validationErrors = validate(values)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return

    setStatus('sending')
    try {
      await sendForm(values)
      setStatus('sent')
      setValues(initialState)
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <section id="contacto" className="bg-olive py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <h2 className="font-serif text-3xl font-semibold text-cream sm:text-4xl">{contactoForm.titulo}</h2>
          <p className="mt-4 text-lg text-cream/75">{contactoForm.subtitulo}</p>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <Reveal delay={100}>
            <div className="space-y-6">
              <ContactRow icon={MessageCircle} label="WhatsApp" href={whatsappUrl} value="Escríbeme directamente" external />
              <ContactRow icon={Mail} label="Email" href={`mailto:${contacto.email}`} value={contacto.email} />
              <ContactRow icon={Phone} label="Teléfono" href={`tel:${contacto.telefono}`} value={contacto.telefonoVisible} />
              <ContactRow icon={MapPin} label="Zona de trabajo" value={contacto.zonaDeTrabajo} />

              <p className="pt-4 text-sm leading-relaxed text-cream/55">
                Toda la información que compartas sobre tu restaurante ({chef.nombre} lo trata como consultor) es
                estrictamente confidencial.
              </p>
            </div>
          </Reveal>

          <Reveal delay={180}>
            <form onSubmit={handleSubmit} noValidate className="rounded-2xl bg-cream p-6 shadow-xl sm:p-8">
              {/* Honeypot anti-spam: oculto para personas, visible para bots */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="website">No rellenar este campo</label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={values.website}
                  onChange={handleChange('website')}
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Nombre" htmlFor="nombre" error={errors.nombre}>
                  <input
                    id="nombre"
                    type="text"
                    autoComplete="name"
                    value={values.nombre}
                    onChange={handleChange('nombre')}
                    className={inputClass(errors.nombre)}
                  />
                </Field>

                <Field label="Email" htmlFor="email" error={errors.email}>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    value={values.email}
                    onChange={handleChange('email')}
                    className={inputClass(errors.email)}
                  />
                </Field>

                <Field label="Teléfono" htmlFor="telefono" error={errors.telefono} optional>
                  <input
                    id="telefono"
                    type="tel"
                    autoComplete="tel"
                    value={values.telefono}
                    onChange={handleChange('telefono')}
                    className={inputClass(errors.telefono)}
                  />
                </Field>

                <Field label="Tipo de negocio" htmlFor="tipoNegocio" error={errors.tipoNegocio}>
                  <select
                    id="tipoNegocio"
                    value={values.tipoNegocio}
                    onChange={handleChange('tipoNegocio')}
                    className={inputClass(errors.tipoNegocio)}
                  >
                    <option value="">Selecciona una opción</option>
                    {contactoForm.tiposDeNegocio.map((tipo) => (
                      <option key={tipo} value={tipo}>
                        {tipo}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field label="Ciudad" htmlFor="ciudad" error={errors.ciudad} className="sm:col-span-2">
                  <input
                    id="ciudad"
                    type="text"
                    autoComplete="address-level2"
                    value={values.ciudad}
                    onChange={handleChange('ciudad')}
                    className={inputClass(errors.ciudad)}
                  />
                </Field>

                <Field label="Cuéntame tu situación" htmlFor="mensaje" error={errors.mensaje} className="sm:col-span-2">
                  <textarea
                    id="mensaje"
                    rows={4}
                    value={values.mensaje}
                    onChange={handleChange('mensaje')}
                    className={inputClass(errors.mensaje)}
                  />
                </Field>
              </div>

              <div className="mt-5">
                <label htmlFor="privacidad" className="flex cursor-pointer items-start gap-3 text-sm text-charcoal/75">
                  <input
                    id="privacidad"
                    type="checkbox"
                    checked={values.privacidad}
                    onChange={handleChange('privacidad')}
                    className="mt-0.5 h-4 w-4 flex-shrink-0 rounded border-charcoal/30 text-terracotta focus:ring-terracotta"
                  />
                  <span>
                    He leído y acepto la{' '}
                    <a href="#privacidad" className="underline decoration-terracotta/50 underline-offset-2 hover:text-terracotta">
                      política de privacidad
                    </a>
                    .
                  </span>
                </label>
                {errors.privacidad && <p className="mt-1.5 text-xs font-medium text-terracotta-dark">{errors.privacidad}</p>}
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-terracotta px-7 py-3.5 text-base font-semibold text-cream shadow-md transition-colors hover:bg-terracotta-dark disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
              >
                {status === 'sending' ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Enviar solicitud
                  </>
                )}
              </button>

              <div aria-live="polite" className="mt-4">
                {status === 'sent' && (
                  <p className="flex items-center gap-2 text-sm font-medium text-olive">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
                    Mensaje enviado. Te responderé personalmente en breve.
                  </p>
                )}
                {status === 'error' && (
                  <p className="flex items-center gap-2 text-sm font-medium text-terracotta-dark">
                    <AlertCircle className="h-5 w-5 flex-shrink-0" />
                    Algo ha fallado al enviar el formulario. Escríbeme directamente por WhatsApp o email.
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function inputClass(error) {
  return `w-full rounded-lg border bg-white px-4 py-2.5 text-sm text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:ring-2 focus:ring-terracotta/40 ${
    error ? 'border-terracotta-dark' : 'border-charcoal/15 focus:border-terracotta'
  }`
}

function Field({ label, htmlFor, error, optional, className = '', children }) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-charcoal">
        {label} {optional && <span className="font-normal text-charcoal/40">(opcional)</span>}
      </label>
      {children}
      {error && <p className="mt-1.5 text-xs font-medium text-terracotta-dark">{error}</p>}
    </div>
  )
}

function ContactRow({ icon: Icon, label, value, href, external }) {
  const content = (
    <div className="flex items-start gap-4">
      <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-cream/10">
        <Icon className="h-5 w-5 text-cream" strokeWidth={1.5} />
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-cream/50">{label}</p>
        <p className="mt-0.5 text-base font-medium text-cream">{value}</p>
      </div>
    </div>
  )

  if (!href) return content

  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="block transition-opacity hover:opacity-80"
    >
      {content}
    </a>
  )
}
