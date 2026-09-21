import { useState } from 'react'
import siteConfig from '../../siteConfig'
import { sendForm } from '../../lib/sendForm'
import { TextField, SelectField, TextareaField, CheckboxField, Honeypot } from '../form/FormControls'
import { SubmitButton, StatusMessage } from '../form/SubmitStatus'

// Pega aquí la URL de tu proveedor de formularios cuando esté lista.
const FORM_ENDPOINT = ''

const initialState = {
  empresa: '',
  personaContacto: '',
  telefono: '',
  email: '',
  ciudad: '',
  tipoEstablecimiento: '',
  puesto: '',
  fechaIncorporacion: '',
  bandaSalarial: '',
  descripcion: '',
  privacidad: false,
  website: '',
}

function validate(values) {
  const errors = {}
  if (!values.empresa.trim()) errors.empresa = 'Indica el nombre de la empresa.'
  if (!values.personaContacto.trim()) errors.personaContacto = 'Indica la persona de contacto.'
  if (!values.telefono.trim()) errors.telefono = 'Indica un teléfono de contacto.'
  if (!values.email.trim()) {
    errors.email = 'Indica un email de contacto.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'El email no parece válido.'
  }
  if (!values.ciudad.trim()) errors.ciudad = 'Indica la ciudad.'
  if (!values.tipoEstablecimiento) errors.tipoEstablecimiento = 'Selecciona el tipo de establecimiento.'
  if (!values.puesto.trim()) errors.puesto = 'Indica el puesto que necesitas cubrir.'
  if (!values.descripcion.trim()) errors.descripcion = 'Añade una breve descripción del puesto.'
  if (!values.privacidad) errors.privacidad = 'Debes aceptar la política de privacidad.'
  return errors
}

export default function BuscoProfesionalesForm() {
  const { rrhh } = siteConfig.consulting
  const [values, setValues] = useState(initialState)
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
      await sendForm(FORM_ENDPOINT, values)
      setStatus('sent')
      setValues(initialState)
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="rounded-2xl border border-charcoal/10 bg-white/60 p-6 shadow-sm sm:p-8">
      <h3 className="font-serif text-xl font-semibold text-charcoal">{rrhh.empresas.titulo}</h3>
      <p className="mt-2 text-sm text-charcoal/70">{rrhh.empresas.texto}</p>

      <form onSubmit={handleSubmit} noValidate className="mt-6">
        <Honeypot value={values.website} onChange={handleChange('website')} />

        <div className="grid gap-5 sm:grid-cols-2">
          <TextField label="Empresa" id="ba-empresa" value={values.empresa} onChange={handleChange('empresa')} error={errors.empresa} />
          <TextField label="Persona de contacto" id="ba-contacto" value={values.personaContacto} onChange={handleChange('personaContacto')} error={errors.personaContacto} />
          <TextField label="Teléfono" id="ba-telefono" type="tel" value={values.telefono} onChange={handleChange('telefono')} error={errors.telefono} />
          <TextField label="Email" id="ba-email" type="email" value={values.email} onChange={handleChange('email')} error={errors.email} />
          <TextField label="Ciudad" id="ba-ciudad" value={values.ciudad} onChange={handleChange('ciudad')} error={errors.ciudad} />
          <SelectField
            label="Tipo de establecimiento"
            id="ba-tipo"
            options={rrhh.empresas.tiposEstablecimiento}
            value={values.tipoEstablecimiento}
            onChange={handleChange('tipoEstablecimiento')}
            error={errors.tipoEstablecimiento}
          />
          <TextField label="Puesto que necesita cubrir" id="ba-puesto" value={values.puesto} onChange={handleChange('puesto')} error={errors.puesto} />
          <TextField label="Fecha prevista de incorporación" id="ba-fecha" optional value={values.fechaIncorporacion} onChange={handleChange('fechaIncorporacion')} />
          <TextField label="Banda salarial aproximada" id="ba-salario" optional className="sm:col-span-2" value={values.bandaSalarial} onChange={handleChange('bandaSalarial')} />
        </div>

        <TextareaField
          label="Descripción del puesto"
          id="ba-descripcion"
          className="mt-5"
          value={values.descripcion}
          onChange={handleChange('descripcion')}
          error={errors.descripcion}
        />

        <div className="mt-5">
          <CheckboxField
            id="ba-privacidad"
            checked={values.privacidad}
            onChange={handleChange('privacidad')}
            error={errors.privacidad}
            label="He leído y acepto la política de privacidad."
          />
        </div>

        <SubmitButton status={status} label={rrhh.empresas.cta} />
        <StatusMessage
          status={status}
          successText="Solicitud enviada. Te contactaremos para conocer mejor tu necesidad."
          errorText="Algo ha fallado al enviar el formulario. Escríbenos directamente por WhatsApp o email."
        />
      </form>
    </div>
  )
}
