# [NOMBRE DEL CHEF] · Consultoría Gastronómica

Web one-page (React + Vite + Tailwind CSS) para un chef que ofrece servicios de consultoría gastronómica a restaurantes. Sin backend: todo el contenido vive en `src/siteConfig.js`.

## Desarrollo

```bash
npm install
npm run dev       # servidor de desarrollo
npm run build     # build de producción en dist/
npm run preview   # previsualizar el build
```

## Estructura

```
src/
  siteConfig.js        # TODO el contenido editable (textos, datos de contacto, servicios, FAQ...)
  App.jsx               # ensambla las secciones
  index.css             # Tailwind + animaciones de scroll
  lib/icons.js           # mapa de iconos (lucide-react) usado por siteConfig
  components/
    Navbar.jsx           Hero.jsx           Problems.jsx
    Services.jsx         Method.jsx         Results.jsx
    About.jsx            Testimonials.jsx   ForWhom.jsx
    FAQ.jsx               Contact.jsx        Footer.jsx
    WhatsAppButton.jsx    ImagePlaceholder.jsx  Reveal.jsx
```

## Qué cambiar cuando tengas datos reales

### 1. Contenido (`src/siteConfig.js`)
- Sustituir todos los marcadores en mayúsculas: `[NOMBRE DEL CHEF]`, `[CIUDAD]`, `[AÑOS DE EXPERIENCIA]`, `[EMAIL]`, `[TELÉFONO]`, etc.
- Rellenar `contacto.whatsappNumero` con el número real (solo dígitos, con prefijo de país, sin `+` ni espacios).
- Actualizar `hero.datosConfianza`, `resultados.lista` y los testimonios con cifras y citas reales.
- Revisar/ajustar el copy de cada sección a la voz real del chef.

### 2. Imágenes y logo
- Sustituir cada `ImagePlaceholder` (hero, sobre mí) por una foto real: basta con reemplazar el componente por una etiqueta `<img>` optimizada (o `next/image` si se migra a otro framework).
- Diseñar un logo definitivo y sustituir el icono `ChefHat` + texto del `Navbar.jsx` y `Footer.jsx`.
- Añadir una imagen real para Open Graph en `public/og-image.jpg` (1200×630px) y actualizar las etiquetas `og:image` / `twitter:image` en `index.html`.
- Crear un favicon definitivo en `public/favicon.svg` (o `.ico`).

### 3. Formulario de contacto (`src/components/Contact.jsx`)
- Definir `FORM_ENDPOINT` con la URL de un servicio como Formspree, Getform o Basin para que `sendForm()` envíe datos reales en lugar de simular el envío.
- Revisar que el proveedor elegido soporte el campo honeypot (`website`) o adaptar la lógica anti-spam si es necesario.

### 4. SEO y datos estructurados (`index.html`)
- Actualizar `title`, `meta description`, `og:url`, `canonical` con el dominio real.
- Completar el bloque JSON-LD (`ProfessionalService`) con dirección, teléfono, email y ciudad reales.

### 5. Páginas legales
- Las secciones "Aviso legal" y "Política de privacidad" enlazadas desde el footer y el formulario (`#aviso-legal`, `#privacidad`) son anclas placeholder. Cuando existan páginas reales, deben apuntar a rutas/páginas legales completas (recomendable revisarlas con un profesional legal).

### 6. Redes sociales (`src/siteConfig.js` → `redes`)
- Sustituir las URLs de Instagram y LinkedIn por los perfiles reales, o eliminar los iconos del `Footer.jsx` si no aplica.
