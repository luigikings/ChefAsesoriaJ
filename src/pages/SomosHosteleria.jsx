import { useState } from 'react'
import siteConfig from '../siteConfig'
import { usePageMeta } from '../lib/usePageMeta'
import { sendForm } from '../lib/sendForm'
import PageHero from '../components/PageHero'
import SectionHeader from '../components/SectionHeader'
import IconLabelGrid from '../components/IconLabelGrid'
import BulletList from '../components/BulletList'
import Reveal from '../components/Reveal'
import { TextField, SelectField, TextareaField, CheckboxField, CheckboxGroupField, FileField, Honeypot } from '../components/form/FormControls'
import { SubmitButton, StatusMessage } from '../components/form/SubmitStatus'

// Pega aquí la URL de tu proveedor de formularios (Formspree, Getform...)
// cuando esté lista. Mientras esté vacía, el envío se simula.
const FORM_ENDPOINT = ''

const initialState = {
  nombre: '',
  ciudad: '',
  email: '',
  telefono: '',
  puesto: '',
  experiencia: '',
  situacion: '',
  empresaActual: '',
  areasInteres: [],
  linkedin: '',
  instagram: '',
  web: '',
  pregunta: '',
  privacidad: false,
  website: '', // honeypot
}

function validate(values) {
  const errors = {}
  if (!values.nombre.trim()) errors.nombre = 'Indica tu nombre y apellidos.'
  if (!values.ciudad.trim()) errors.ciudad = 'Indica tu ciudad o provincia.'
  if (!values.email.trim()) {
    errors.email = 'Indica un email de contacto.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'El email no parece válido.'
  }
  if (!values.telefono.trim()) errors.telefono = 'Indica un teléfono de contacto.'
  if (!values.puesto.trim()) errors.puesto = 'Indica tu puesto actual (o el último).'
  if (!values.experiencia.trim()) errors.experiencia = 'Indica tus años de experiencia.'
  if (!values.situacion) errors.situacion = 'Selecciona tu situación actual.'
  if (!values.privacidad) errors.privacidad = 'Debes aceptar la política de privacidad.'
  return errors
}

export default function SomosHosteleria() {
  const { somosHosteleria, meta } = siteConfig
  usePageMeta(meta.somosHosteleria.title, meta.somosHosteleria.description)

  const [values, setValues] = useState(initialState)
  const [file, setFile] = useState(null)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  const handleChange = (field) => (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setValues((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  const toggleInteres = (opt) => {
    setValues((prev) => ({
      ...prev,
      areasInteres: prev.areasInteres.includes(opt) ? prev.areasInteres.filter((a) => a !== opt) : [...prev.areasInteres, opt],
    }))
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
      await sendForm(FORM_ENDPOINT, { ...values, cv: file || undefined })
      setStatus('sent')
      setValues(initialState)
      setFile(null)
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <PageHero kicker={somosHosteleria.hero.kicker} titulo={somosHosteleria.hero.titulo} texto={somosHosteleria.hero.texto}>
        <p className="mx-auto mt-4 max-w-2xl text-sm italic text-charcoal/55">{somosHosteleria.hero.nota}</p>
        <a
          href="#inscripcion"
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-terracotta px-7 py-3.5 text-base font-semibold text-cream shadow-md transition-colors hover:bg-terracotta-dark"
        >
          {somosHosteleria.hero.cta}
        </a>
      </PageHero>

      {/* PERFILES */}
      <section className="bg-cream pb-20 sm:pb-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeader titulo={somosHosteleria.perfiles.titulo} center />
          <div className="mt-10">
            <IconLabelGrid items={somosHosteleria.perfiles.lista} />
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="bg-olive py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <SectionHeader titulo={somosHosteleria.beneficios.titulo} light center />
          <Reveal delay={100} className="mt-8">
            <BulletList items={somosHosteleria.beneficios.lista} dark columns />
          </Reveal>
        </div>
      </section>

      {/* FORMULARIO */}
      <section id="inscripcion" className="bg-cream py-20 sm:py-28 scroll-mt-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <SectionHeader
            kicker="Únete a la red"
            titulo={somosHosteleria.form.titulo}
            texto={somosHosteleria.form.subtitulo}
            center
          />

          <Reveal delay={100}>
            <form onSubmit={handleSubmit} noValidate className="mt-10 rounded-2xl border border-charcoal/10 bg-white/60 p-6 shadow-sm sm:p-8">
              <Honeypot value={values.website} onChange={handleChange('website')} />

              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-terracotta">Datos</p>
              <div className="grid gap-5 sm:grid-cols-2">
                <TextField label="Nombre y apellidos" id="nombre" autoComplete="name" value={values.nombre} onChange={handleChange('nombre')} error={errors.nombre} />
                <TextField label="Ciudad / provincia" id="ciudad" value={values.ciudad} onChange={handleChange('ciudad')} error={errors.ciudad} />
                <TextField label="Correo electrónico" id="email" type="email" autoComplete="email" value={values.email} onChange={handleChange('email')} error={errors.email} />
                <TextField label="Teléfono" id="telefono" type="tel" autoComplete="tel" value={values.telefono} onChange={handleChange('telefono')} error={errors.telefono} />
              </div>

              <p className="mb-2 mt-8 text-xs font-semibold uppercase tracking-widest text-terracotta">Perfil profesional</p>
              <div className="grid gap-5 sm:grid-cols-2">
                <TextField label="Puesto actual" id="puesto" value={values.puesto} onChange={handleChange('puesto')} error={errors.puesto} />
                <TextField label="Años de experiencia" id="experiencia" value={values.experiencia} onChange={handleChange('experiencia')} error={errors.experiencia} />
                <SelectField
                  label="Situación"
                  id="situacion"
                  options={somosHosteleria.form.tiposSituacion}
                  value={values.situacion}
                  onChange={handleChange('situacion')}
                  error={errors.situacion}
                />
                <TextField label="Empresa actual" id="empresaActual" optional value={values.empresaActual} onChange={handleChange('empresaActual')} />
              </div>

              <CheckboxGroupField
                legend="Áreas de interés"
                options={somosHosteleria.form.areasInteres}
                values={values.areasInteres}
                onToggle={toggleInteres}
                className="mt-8"
              />

              <p className="mb-2 mt-8 text-xs font-semibold uppercase tracking-widest text-terracotta">Perfil profesional online</p>
              <div className="grid gap-5 sm:grid-cols-2">
                <TextField label="LinkedIn" id="linkedin" optional value={values.linkedin} onChange={handleChange('linkedin')} />
                <TextField label="Instagram profesional" id="instagram" optional value={values.instagram} onChange={handleChange('instagram')} />
                <TextField label="Web" id="web" optional className="sm:col-span-2" value={values.web} onChange={handleChange('web')} />
                <FileField
                  label="CV"
                  id="cv"
                  optional
                  className="sm:col-span-2"
                  file={file}
                  onChange={(e) => setFile(e.target.files?.[0] || null)}
                />
              </div>

              <TextareaField
                label="¿Qué esperas encontrar o qué puedes aportar a Somos Hostelería?"
                id="pregunta"
                className="mt-8"
                value={values.pregunta}
                onChange={handleChange('pregunta')}
              />

              <div className="mt-6">
                <CheckboxField id="privacidad" checked={values.privacidad} onChange={handleChange('privacidad')} error={errors.privacidad} label={somosHosteleria.form.notaPrivacidad} />
              </div>

              <SubmitButton status={status} label="Unirme a Somos Hostelería" />
              <StatusMessage
                status={status}
                successText="Solicitud enviada. En breve te confirmamos tu acceso a la comunidad."
                errorText="Algo ha fallado al enviar el formulario. Escríbenos directamente por WhatsApp o email."
              />
            </form>
          </Reveal>
        </div>
      </section>
    </>
  )
}
