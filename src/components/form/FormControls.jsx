// -------------------------------------------------------------
// Piezas de formulario reutilizables (usadas en Contacto, el
// formulario de Somos Hostelería y los dos formularios de RR. HH.
// dentro de I+Chef Consulting). Mantienen estilos y accesibilidad
// consistentes sin repetir markup en cada formulario.
// -------------------------------------------------------------
import { Paperclip } from 'lucide-react'

export function inputClass(error) {
  return `w-full rounded-lg border bg-white px-4 py-2.5 text-sm text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:ring-2 focus:ring-terracotta/40 ${
    error ? 'border-terracotta-dark' : 'border-charcoal/15 focus:border-terracotta'
  }`
}

export function Field({ label, htmlFor, error, optional, className = '', children }) {
  return (
    <div className={className}>
      {label && (
        <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-charcoal">
          {label} {optional && <span className="font-normal text-charcoal/40">(opcional)</span>}
        </label>
      )}
      {children}
      {error && <p className="mt-1.5 text-xs font-medium text-terracotta-dark">{error}</p>}
    </div>
  )
}

export function TextField({ label, id, error, optional, className, type = 'text', ...rest }) {
  return (
    <Field label={label} htmlFor={id} error={error} optional={optional} className={className}>
      <input id={id} type={type} className={inputClass(error)} {...rest} />
    </Field>
  )
}

export function TextareaField({ label, id, error, optional, className, rows = 4, ...rest }) {
  return (
    <Field label={label} htmlFor={id} error={error} optional={optional} className={className}>
      <textarea id={id} rows={rows} className={inputClass(error)} {...rest} />
    </Field>
  )
}

export function SelectField({ label, id, error, optional, className, options, placeholder = 'Selecciona una opción', ...rest }) {
  return (
    <Field label={label} htmlFor={id} error={error} optional={optional} className={className}>
      <select id={id} className={inputClass(error)} {...rest}>
        <option value="">{placeholder}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </Field>
  )
}

export function CheckboxField({ id, label, checked, onChange, error }) {
  return (
    <div>
      <label htmlFor={id} className="flex cursor-pointer items-start gap-3 text-sm text-charcoal/75">
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="mt-0.5 h-4 w-4 flex-shrink-0 rounded border-charcoal/30 text-terracotta focus:ring-terracotta"
        />
        <span>{label}</span>
      </label>
      {error && <p className="mt-1.5 text-xs font-medium text-terracotta-dark">{error}</p>}
    </div>
  )
}

export function CheckboxGroupField({ legend, options, values, onToggle, error, className = '' }) {
  return (
    <fieldset className={className}>
      <legend className="mb-2 text-sm font-medium text-charcoal">{legend}</legend>
      <div className="grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-3">
        {options.map((opt) => (
          <label key={opt} className="flex cursor-pointer items-center gap-2 text-sm text-charcoal/75">
            <input
              type="checkbox"
              checked={values.includes(opt)}
              onChange={() => onToggle(opt)}
              className="h-4 w-4 flex-shrink-0 rounded border-charcoal/30 text-terracotta focus:ring-terracotta"
            />
            {opt}
          </label>
        ))}
      </div>
      {error && <p className="mt-1.5 text-xs font-medium text-terracotta-dark">{error}</p>}
    </fieldset>
  )
}

export function FileField({ label, id, error, optional, className, file, onChange, accept = '.pdf,.doc,.docx' }) {
  return (
    <Field label={label} htmlFor={id} error={error} optional={optional} className={className}>
      <label
        htmlFor={id}
        className={`flex cursor-pointer items-center gap-2 rounded-lg border border-dashed bg-white px-4 py-2.5 text-sm text-charcoal/60 hover:border-terracotta ${
          error ? 'border-terracotta-dark' : 'border-charcoal/25'
        }`}
      >
        <Paperclip className="h-4 w-4 flex-shrink-0" />
        <span className="truncate">{file ? file.name : 'Adjuntar archivo (PDF o Word)'}</span>
      </label>
      <input id={id} type="file" accept={accept} onChange={onChange} className="sr-only" />
    </Field>
  )
}

// Campo honeypot anti-spam: oculto para personas, visible para bots.
export function Honeypot({ value, onChange }) {
  return (
    <div className="hidden" aria-hidden="true">
      <label htmlFor="website">No rellenar este campo</label>
      <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" value={value} onChange={onChange} />
    </div>
  )
}
