// -------------------------------------------------------------
// Envío de formularios sin backend propio.
// Mientras el FORM_ENDPOINT de cada formulario esté vacío, se
// simula el envío (útil para desarrollo y para lanzar la web
// antes de tener un proveedor de formularios contratado).
// Cuando definas un FORM_ENDPOINT (Formspree, Getform, Basin...),
// esta función hace el POST real. Si `data` incluye un File
// (por ejemplo el CV), se envía como multipart/form-data;
// si no, se envía como JSON.
// -------------------------------------------------------------
export async function sendForm(endpoint, data) {
  if (!endpoint) {
    await new Promise((resolve) => setTimeout(resolve, 900))
    return { ok: true }
  }

  const hasFile = Object.values(data).some((value) => value instanceof File)

  const response = hasFile
    ? await fetch(endpoint, { method: 'POST', headers: { Accept: 'application/json' }, body: toFormData(data) })
    : await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      })

  if (!response.ok) {
    throw new Error('No se pudo enviar el formulario')
  }

  return { ok: true }
}

function toFormData(data) {
  const formData = new FormData()
  Object.entries(data).forEach(([key, value]) => {
    if (value === undefined || value === null) return
    if (Array.isArray(value)) {
      value.forEach((item) => formData.append(key, item))
    } else {
      formData.append(key, value)
    }
  })
  return formData
}
