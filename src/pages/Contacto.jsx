import { useState } from 'react'
import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import siteConfig from '../siteConfig'
import { usePageMeta } from '../lib/usePageMeta'
import { sendForm } from '../lib/sendForm'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { TextField, SelectField, TextareaField, CheckboxField, Honeypot } from '../components/form/FormControls'
import { SubmitButton, StatusMessage } from '../components/form/SubmitStatus'

// Pega aquí la URL de tu proveedor de formularios cuando esté lista.
const FORM_ENDPOINT = ''

const initialState = {
  nombre: '',
  email: '',
  telefono: '',
  tipoConsulta: '',
  ciudad: '',
  mensaje: '',
  privacidad: false,
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
  if (!values.tipoConsulta) errors.tipoConsulta = 'Selecciona sobre qué quieres hablar.'
  if (!values.mensaje.trim()) {
    errors.mensaje = 'Cuéntanos brevemente qué necesitas.'
  } else if (values.mensaje.trim().length < 10) {
    errors.mensaje = 'Añade un poco más de detalle (mínimo 10 caracteres).'
  }
  if (!values.privacidad) errors.privacidad = 'Debes aceptar la política de privacidad.'
  return errors
}

export default function Contacto() {
  const { contactoPage, contacto, meta } = siteConfig
  usePageMeta(meta.contacto.title, meta.contacto.description)

  const [values, setValues] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  const whatsappUrl = `https://wa.me/${contacto.whatsappNumero}?text=${encodeURIComponent(contacto.whatsappMensajePredefinido)}`

  const handleChange = (field) => (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setValues((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (values.website) {
      setStatus('sent')
      return
    }
    const validationErrors = validate(values)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return

    setStatus('sending')
    try {
      await sendForm(FORM_ENDPOINT, values)
      setStatus('sent')
      setValues(initialState)
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <PageHero kicker={contactoPage.hero.kicker} titulo={contactoPage.hero.titulo} texto={contactoPage.hero.texto} />

      <section className="bg-olive pb-20 sm:pb-28">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <Reveal>
            <div className="space-y-6">
              <ContactRow icon={MessageCircle} label="WhatsApp" href={whatsappUrl} value="Escríbenos directamente" external />
              <ContactRow icon={Mail} label="Email" href={`mailto:${contacto.email}`} value={contacto.email} />
              <ContactRow icon={Phone} label="Teléfono" href={`tel:${contacto.telefono}`} value={contacto.telefonoVisible} />
              <ContactRow icon={MapPin} label="Zona de trabajo" value={contacto.zonaDeTrabajo} />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <form onSubmit={handleSubmit} noValidate className="rounded-2xl bg-cream p-6 shadow-xl sm:p-8">
              <Honeypot value={values.website} onChange={handleChange('website')} />

              <div className="grid gap-5 sm:grid-cols-2">
                <TextField label="Nombre" id="c-nombre" autoComplete="name" value={values.nombre} onChange={handleChange('nombre')} error={errors.nombre} />
                <TextField label="Email" id="c-email" type="email" autoComplete="email" value={values.email} onChange={handleChange('email')} error={errors.email} />
                <TextField label="Teléfono" id="c-telefono" type="tel" optional autoComplete="tel" value={values.telefono} onChange={handleChange('telefono')} error={errors.telefono} />
                <SelectField
                  label="¿Sobre qué quieres hablar?"
                  id="c-tipo"
                  options={contactoPage.tiposConsulta}
                  value={values.tipoConsulta}
                  onChange={handleChange('tipoConsulta')}
                  error={errors.tipoConsulta}
                />
                <TextField label="Ciudad" id="c-ciudad" optional className="sm:col-span-2" value={values.ciudad} onChange={handleChange('ciudad')} />
                <TextareaField label="Mensaje" id="c-mensaje" className="sm:col-span-2" value={values.mensaje} onChange={handleChange('mensaje')} error={errors.mensaje} />
              </div>

              <div className="mt-5">
                <CheckboxField
                  id="c-privacidad"
                  checked={values.privacidad}
                  onChange={handleChange('privacidad')}
                  error={errors.privacidad}
                  label="He leído y acepto la política de privacidad."
                />
              </div>

              <SubmitButton status={status} />
              <StatusMessage
                status={status}
                successText="Mensaje enviado. Te responderemos personalmente en breve."
                errorText="Algo ha fallado al enviar el formulario. Escríbenos directamente por WhatsApp o email."
              />
            </form>
          </Reveal>
        </div>
      </section>
    </>
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
    <a href={href} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined} className="block transition-opacity hover:opacity-80">
      {content}
    </a>
  )
}
