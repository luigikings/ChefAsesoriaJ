import { useState } from 'react'
import siteConfig from '../../siteConfig'
import { sendForm } from '../../lib/sendForm'
import { TextField, TextareaField, CheckboxField, FileField, Honeypot } from '../form/FormControls'
import { SubmitButton, StatusMessage } from '../form/SubmitStatus'

// Pega aquí la URL de tu proveedor de formularios cuando esté lista.
const FORM_ENDPOINT = ''

const initialState = {
  nombre: '',
  perfil: '',
  experiencia: '',
  ciudad: '',
  movilidad: '',
  disponibilidad: '',
  expectativa: '',
  linkedin: '',
  informacionAdicional: '',
  privacidad: false,
  website: '',
}

function validate(values) {
  const errors = {}
  if (!values.nombre.trim()) errors.nombre = 'Indica tu nombre.'
  if (!values.perfil.trim()) errors.perfil = 'Indica tu perfil profesional.'
  if (!values.experiencia.trim()) errors.experiencia = 'Indica tu experiencia.'
  if (!values.ciudad.trim()) errors.ciudad = 'Indica tu ciudad.'
  if (!values.privacidad) errors.privacidad = 'Debes aceptar la política de privacidad.'
  return errors
}

export default function UneteRedForm() {
  const { rrhh } = siteConfig.consulting
  const [values, setValues] = useState(initialState)
  const [file, setFile] = useState(null)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

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
      await sendForm(FORM_ENDPOINT, { ...values, cv: file || undefined })
      setStatus('sent')
      setValues(initialState)
      setFile(null)
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="rounded-2xl border border-charcoal/10 bg-white/60 p-6 shadow-sm sm:p-8">
      <h3 className="font-serif text-xl font-semibold text-charcoal">{rrhh.profesionales.titulo}</h3>
      <p className="mt-2 text-sm text-charcoal/70">{rrhh.profesionales.texto}</p>

      <form onSubmit={handleSubmit} noValidate className="mt-6">
        <Honeypot value={values.website} onChange={handleChange('website')} />

        <div className="grid gap-5 sm:grid-cols-2">
          <TextField label="Nombre" id="up-nombre" value={values.nombre} onChange={handleChange('nombre')} error={errors.nombre} />
          <TextField label="Perfil" id="up-perfil" value={values.perfil} onChange={handleChange('perfil')} error={errors.perfil} />
          <TextField label="Experiencia" id="up-experiencia" value={values.experiencia} onChange={handleChange('experiencia')} error={errors.experiencia} />
          <TextField label="Ciudad" id="up-ciudad" value={values.ciudad} onChange={handleChange('ciudad')} error={errors.ciudad} />
          <TextField label="Movilidad" id="up-movilidad" optional value={values.movilidad} onChange={handleChange('movilidad')} />
          <TextField label="Disponibilidad" id="up-disponibilidad" optional value={values.disponibilidad} onChange={handleChange('disponibilidad')} />
          <TextField label="Expectativa profesional" id="up-expectativa" optional className="sm:col-span-2" value={values.expectativa} onChange={handleChange('expectativa')} />
          <TextField label="LinkedIn" id="up-linkedin" optional className="sm:col-span-2" value={values.linkedin} onChange={handleChange('linkedin')} />
          <FileField label="CV" id="up-cv" optional className="sm:col-span-2" file={file} onChange={(e) => setFile(e.target.files?.[0] || null)} />
        </div>

        <TextareaField
          label="Información adicional"
          id="up-info"
          optional
          className="mt-5"
          value={values.informacionAdicional}
          onChange={handleChange('informacionAdicional')}
        />

        <div className="mt-5">
          <CheckboxField
            id="up-privacidad"
            checked={values.privacidad}
            onChange={handleChange('privacidad')}
            error={errors.privacidad}
            label="La participación es voluntaria y acepto la política de privacidad y tratamiento de datos."
          />
        </div>

        <SubmitButton status={status} label={rrhh.profesionales.cta} />
        <StatusMessage
          status={status}
          successText="¡Listo! Ya formas parte de la red profesional para oportunidades."
          errorText="Algo ha fallado al enviar el formulario. Escríbenos directamente por WhatsApp o email."
        />
      </form>
    </div>
  )
}
