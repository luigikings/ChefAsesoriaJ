<div align="center">

# 👨‍🍳 Gatrobatos — Multi-Page Marketing Site

**The marketing website for Gatrobatos, a brand grouping four hospitality-industry projects: a professional community, a tools shop, a gastronomic consultancy, and private-chef services.**
Built with React, Vite, React Router and Tailwind CSS — no backend, no database, fully content-driven.

[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![React Router](https://img.shields.io/badge/React_Router-6-CA4245?logo=reactrouter&logoColor=white)](https://reactrouter.com)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/License-MIT-gray)](#license)

English · [Español](#español)

</div>

---

## Table of Contents

- [Overview](#overview)
- [Sitemap](#sitemap)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Editing Content](#editing-content)
- [Forms](#forms)
- [Deployment](#deployment)
  - [Deploying to Hostinger](#deploying-to-hostinger)
  - [Other Static Hosts](#other-static-hosts)
- [Pre-Launch Checklist](#pre-launch-checklist)
- [License](#license)

---

## Overview

**Gatrobatos** is an umbrella brand grouping four hospitality-industry projects under one identity:

| Project | What it is |
|---|---|
| **Somos Hostelería** | A free professional community/network for hospitality workers (chefs, F&B directors, sommeliers, suppliers, job seekers...). |
| **Gatrobatos Shop** | A catalog of professional management tools and document packs (cost control, technical sheets, HACCP checklists...). |
| **I+Chef Consulting** | Gastronomic consulting: operations, food cost, menu engineering, openings, training, and a HORECA recruitment (RR. HH.) service. |
| **Chef Privado** | Private-chef and event services: private dining, brand partnerships, gastronomic experiences, corporate events, multi-day stays. |

The site is a **multi-page** React app (client-side routed with React Router) rather than a single long scroll — each project gets its own dedicated page, its own SEO metadata, and (where relevant) its own lead-capture form. There is no backend or database: all copy, contact details, catalog content, and form field configuration live in a single file — [`src/siteConfig.js`](src/siteConfig.js).

## Sitemap

| Route | Page | Purpose |
|---|---|---|
| `/` | Home | Landing page introducing Gatrobatos and linking to all four pillars |
| `/somos-hosteleria` | Somos Hostelería | Community pitch + membership sign-up form |
| `/shop` | Gatrobatos Shop | Tool categories + professional packs (catalog, no online checkout yet). **Currently hidden** — see [Hiding the Shop](#hiding-the-shop) |
| `/consultoria` | I+Chef Consulting | All consulting service lines + the two RR. HH. HORECA forms |
| `/chef-privado` | Chef Privado | The six private-chef/event service areas |
| `/nosotros` | Nosotros | Brand story, founder bio, roadmap, testimonials |
| `/contacto` | Contacto | General contact form + direct contact details |
| `/aviso-legal`, `/privacidad` | Legal | Placeholder legal pages |

## Features

- **Multi-page architecture** with React Router, per-page `<title>`/meta description (via a lightweight `usePageMeta` hook — no SSR needed for a client-rendered SPA), and scroll-reset on navigation.
- **Four lead-capture forms**, each validated client-side with a spam honeypot field and a shared `sendForm()` helper ready to be wired to a form backend:
  - Somos Hostelería membership sign-up (multi-select interest areas, optional CV upload).
  - RR. HH. HORECA — "I'm hiring" (company side).
  - RR. HH. HORECA — "I want opportunities" (professional side, optional CV upload).
  - General contact form with an inquiry-type selector.
- **Reusable content components** (`IconListGrid`, `IconLabelGrid`, `BulletList`, `PillarCard`, `Accordion`, `Testimonials`) so every page is built by composing `siteConfig.js` data rather than hardcoding markup.
- **Floating WhatsApp button** with a pre-filled message, present on every page.
- **SEO-ready**: per-page meta tags, Open Graph / Twitter tags, and `Organization` JSON-LD structured data.
- **Accessible**: labeled form fields, keyboard-navigable accordion and mobile menu, visible focus states.
- **Scroll-reveal animations** that respect `prefers-reduced-motion`.
- **No photos yet?** Elegant gradient placeholders stand in for every image, marked with `// TODO: reemplazar por foto real`.

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | [React 18](https://react.dev) |
| Routing | [React Router 6](https://reactrouter.com) (client-side, `BrowserRouter`) |
| Build tool | [Vite 5](https://vitejs.dev) |
| Styling | [Tailwind CSS 3](https://tailwindcss.com) |
| Icons | [lucide-react](https://lucide.dev) |
| Fonts | Playfair Display (headings) + Inter (body), via Google Fonts |
| Backend | None — static site, form submissions via a third-party endpoint |

## Project Structure

```
├── index.html                      # SEO tags, Open Graph, JSON-LD, font preloads
├── public/
│   └── .htaccess                   # SPA fallback rewrite (needed on Apache hosts like Hostinger)
├── src/
│   ├── main.jsx                     # React entry point, wraps <App/> in <BrowserRouter>
│   ├── App.jsx                      # Route definitions
│   ├── index.css                    # Tailwind directives + scroll-reveal animation
│   ├── siteConfig.js                # 🔧 ALL editable content lives here, keyed per page
│   ├── layouts/
│   │   └── Layout.jsx                # Navbar + <Outlet/> + Footer + WhatsAppButton, shared by every route
│   ├── lib/
│   │   ├── icons.js                  # String → lucide-react icon map (used by siteConfig)
│   │   ├── sendForm.js               # Shared submit helper (JSON or multipart if a file is attached)
│   │   └── usePageMeta.js            # Sets <title> + meta description per page
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── SomosHosteleria.jsx
│   │   ├── Shop.jsx
│   │   ├── Consulting.jsx            # Includes the RR. HH. HORECA sub-section + both forms
│   │   ├── ChefPrivado.jsx
│   │   ├── Nosotros.jsx
│   │   ├── Contacto.jsx
│   │   ├── LegalPlaceholder.jsx
│   │   └── NotFound.jsx
│   └── components/
│       ├── Navbar.jsx, Footer.jsx, WhatsAppButton.jsx, ScrollToTop.jsx
│       ├── PageHero.jsx, SectionHeader.jsx, PillarCard.jsx
│       ├── IconListGrid.jsx, IconLabelGrid.jsx, BulletList.jsx
│       ├── Accordion.jsx, Testimonials.jsx
│       ├── ImagePlaceholder.jsx, Reveal.jsx
│       ├── form/
│       │   ├── FormControls.jsx      # TextField, SelectField, TextareaField, CheckboxField, CheckboxGroupField, FileField, Honeypot
│       │   └── SubmitStatus.jsx      # Shared submit button + success/error message
│       └── forms/
│           ├── BuscoProfesionalesForm.jsx   # RR. HH. HORECA — company side
│           └── UneteRedForm.jsx             # RR. HH. HORECA — professional side
├── tailwind.config.js               # Color tokens, fonts, animation keyframes
├── postcss.config.js
└── vite.config.js
```

## Getting Started

Requires [Node.js](https://nodejs.org) 18 or later.

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (http://localhost:5173)
npm run dev

# 3. Build for production → outputs to dist/
npm run build

# 4. Preview the production build locally
npm run preview
```

## Editing Content

You should almost never need to touch a page or component file. Nearly everything — brand name, contact info, per-page hero copy, service lists, shop catalog, FAQ, testimonials, roadmap, form field options — is defined in [`src/siteConfig.js`](src/siteConfig.js) as a single exported object, organized by page (`home`, `somosHosteleria`, `shop`, `consulting`, `chefPrivado`, `nosotros`, `contactoPage`).

Placeholders are written in **UPPERCASE with brackets** (e.g. `[NOMBRE DEL CHEF]`, `[CIUDAD]`, `[AÑOS DE EXPERIENCIA]`) so they're easy to find and replace before launch.

Icons referenced in `siteConfig.js` (e.g. `"ChefHat"`) are resolved through [`src/lib/icons.js`](src/lib/icons.js) — add new [lucide-react](https://lucide.dev/icons) icons there if you introduce content that needs one.

### Hiding the Shop

The Shop is currently **hidden** (there are no products for sale yet) but its page and content are kept intact. It's controlled by a single toggle at the top of [`src/siteConfig.js`](src/siteConfig.js):

```js
const features = {
  shop: false, // set to true to show the Shop again
}
```

With `shop: false`, the `/shop` route is disabled (it shows the 404 page) and every link, home card, FAQ entry and contact-form option pointing to it is removed. Setting it back to `true` restores all of them. The only thing the toggle can't reach is the static SEO text in `index.html` — re-add the Shop mention there by hand when you re-enable it.

## Forms

All four forms share the same pattern: client-side validation, a hidden honeypot field for basic spam protection, and a `sendForm(endpoint, data)` call from [`src/lib/sendForm.js`](src/lib/sendForm.js).

By default, every `FORM_ENDPOINT` constant is **empty**, so submissions are simulated (no data leaves the browser). To connect a real backend for a given form:

1. Create a form endpoint with a service like [Formspree](https://formspree.io), [Getform](https://getform.io) or [Basin](https://usebasin.com) — pick one that supports file uploads if you'll use the CV field (Somos Hostelería and the RR. HH. "professional" form both have one).
2. Set the `FORM_ENDPOINT` constant at the top of the relevant file to that URL:
   - [`src/pages/SomosHosteleria.jsx`](src/pages/SomosHosteleria.jsx)
   - [`src/components/forms/BuscoProfesionalesForm.jsx`](src/components/forms/BuscoProfesionalesForm.jsx)
   - [`src/components/forms/UneteRedForm.jsx`](src/components/forms/UneteRedForm.jsx)
   - [`src/pages/Contacto.jsx`](src/pages/Contacto.jsx)
3. `sendForm()` automatically POSTs as `multipart/form-data` when a file is attached, or as JSON otherwise.

## Deployment

The site builds to static files (`dist/`) and can be hosted anywhere that serves static assets — no Node.js runtime required in production. Because it uses React Router with real URLs (`/shop`, `/consultoria`...), **the host must rewrite unknown paths back to `index.html`** so direct links and page refreshes work — see below.

### Deploying to Hostinger

1. **Build the project locally:**
   ```bash
   npm run build
   ```
   This generates a `dist/` folder containing `index.html`, an `assets/` folder, and `.htaccess`.

2. **Upload via hPanel File Manager:**
   - Log in to [Hostinger hPanel](https://hpanel.hostinger.com).
   - Go to **Files → File Manager** and open `public_html`.
   - Remove any default files already there.
   - Upload the **contents** of `dist/` (not the folder itself) into `public_html`, so `index.html` and `.htaccess` sit at the root.

   *Alternatively*, use an FTP client (e.g. [FileZilla](https://filezilla-project.org)) with the credentials from **hPanel → Files → FTP Accounts**, and drag the contents of `dist/` into `public_html`.

3. **Confirm `.htaccess` uploaded.** It's a hidden file — make sure your FTP client or the File Manager is set to show hidden files, and that it exists at `public_html/.htaccess`. Without it, visiting `/shop` directly (instead of clicking there from `/`) will show a 404 from Apache instead of the page.

4. **Domain & SSL:** if your domain is already pointed to Hostinger, SSL activates automatically.

5. **Before going live**, make sure `src/siteConfig.js` is filled with real content and the `FORM_ENDPOINT` constants are configured — otherwise the forms will only simulate submissions.

### Other Static Hosts

The same `dist/` output works out of the box on [Vercel](https://vercel.com) and [Netlify](https://netlify.com) (both rewrite unknown paths to `index.html` for SPAs by default) or [Cloudflare Pages](https://pages.cloudflare.com) (enable "Single Page Application" mode). GitHub Pages needs an extra `404.html` → `index.html` redirect trick since it has no server-side rewrite support.

## Pre-Launch Checklist

- [ ] Replace every `[BRACKETED PLACEHOLDER]` in `src/siteConfig.js` with real content (city, email, phone, WhatsApp number, founder's name and years of experience).
- [ ] Add real photos in place of `ImagePlaceholder` components (Home hero, Nosotros founder photo).
- [ ] Design and add a final logo (replaces the `ChefHat` icon + text lockup in `Navbar.jsx` / `Footer.jsx`).
- [ ] Add a real Open Graph image at `public/og-image.jpg` (1200×630px) and update `index.html` meta tags.
- [ ] Set a final favicon (`public/favicon.svg`).
- [ ] Configure the four `FORM_ENDPOINT` constants (see [Forms](#forms)) for real submissions.
- [ ] Update the JSON-LD block in `index.html` with the real business address, phone and email.
- [ ] Write the real legal pages at `/aviso-legal` and `/privacidad` (have them reviewed by a legal professional) — replace `LegalPlaceholder.jsx` content.
- [ ] Update social links in `siteConfig.js` → `redes`.
- [ ] Replace placeholder testimonials in `siteConfig.js` → `nosotros.testimonios` with real client quotes once available.
- [ ] Decide on real pricing/purchase flow for Gatrobatos Shop when ready to move beyond "catalog + contact."

## License

MIT — feel free to adapt this template for your own multi-brand or consulting website.

---
---

<div align="center" id="español">

# 👨‍🍳 Gatrobatos — Web Multi-página

**Web de marketing de Gatrobatos, una marca que agrupa cuatro proyectos del sector hostelero: una comunidad profesional, una tienda de herramientas, una consultora gastronómica y servicios de chef privado.**
Construida con React, Vite, React Router y Tailwind CSS — sin backend, sin base de datos, totalmente editable por contenido.

[English](#-gatrobatos--multi-page-marketing-site) · Español

</div>

---

## Índice

- [Descripción general](#descripción-general)
- [Mapa del sitio](#mapa-del-sitio)
- [Funcionalidades](#funcionalidades)
- [Stack tecnológico](#stack-tecnológico)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Cómo empezar](#cómo-empezar)
- [Cómo editar el contenido](#cómo-editar-el-contenido)
- [Formularios](#formularios)
- [Despliegue](#despliegue)
  - [Subir a Hostinger](#subir-a-hostinger)
  - [Otros hostings estáticos](#otros-hostings-estáticos)
- [Checklist antes de publicar](#checklist-antes-de-publicar)
- [Licencia](#licencia)

---

## Descripción general

**Gatrobatos** es una marca paraguas que agrupa cuatro proyectos del sector hostelero bajo una misma identidad:

| Proyecto | Qué es |
|---|---|
| **Somos Hostelería** | Red profesional gratuita para trabajadores de hostelería (chefs, directores de F&B, sumilleres, proveedores, personas en búsqueda de empleo...). |
| **Gatrobatos Shop** | Catálogo de herramientas de gestión y packs de documentos profesionales (control de costes, fichas técnicas, checklists APPCC...). |
| **I+Chef Consulting** | Consultoría gastronómica: operaciones, food cost, ingeniería de menú, aperturas, formación y un servicio de selección HORECA (RR. HH.). |
| **Chef Privado** | Servicios de chef privado y eventos: comidas privadas, colaboraciones de marca, experiencias gastronómicas, eventos corporativos, estancias de varios días. |

El sitio es una app de React **multi-página** (con enrutamiento del lado del cliente vía React Router) en lugar de un scroll largo único: cada proyecto tiene su propia página, sus propios metadatos SEO y, donde corresponde, su propio formulario de captación de leads. No hay backend ni base de datos: todo el copy, los datos de contacto, el contenido del catálogo y la configuración de los campos de formulario viven en un único archivo — [`src/siteConfig.js`](src/siteConfig.js).

## Mapa del sitio

| Ruta | Página | Propósito |
|---|---|---|
| `/` | Inicio | Landing que presenta Gatrobatos y enlaza a los cuatro pilares |
| `/somos-hosteleria` | Somos Hostelería | Presentación de la comunidad + formulario de inscripción |
| `/shop` | Gatrobatos Shop | Categorías de herramientas + packs profesionales (catálogo, sin compra online todavía). **Oculta de momento** — ver [Ocultar la tienda](#ocultar-la-tienda) |
| `/consultoria` | I+Chef Consulting | Todas las líneas de consultoría + los dos formularios de RR. HH. HORECA |
| `/chef-privado` | Chef Privado | Las seis áreas de servicio de chef privado / eventos |
| `/nosotros` | Nosotros | Historia de la marca, biografía del fundador, roadmap, testimonios |
| `/contacto` | Contacto | Formulario de contacto general + datos de contacto directo |
| `/aviso-legal`, `/privacidad` | Legal | Páginas legales placeholder |

## Funcionalidades

- **Arquitectura multi-página** con React Router, `<title>`/meta description por página (mediante un hook ligero `usePageMeta` — sin necesidad de SSR en una SPA renderizada en cliente) y reinicio del scroll al navegar.
- **Cuatro formularios de captación**, cada uno validado en cliente con campo honeypot anti-spam y una función compartida `sendForm()` lista para conectarse a un backend de formularios:
  - Inscripción a Somos Hostelería (áreas de interés multi-selección, CV opcional).
  - RR. HH. HORECA — "Busco profesionales" (lado empresa).
  - RR. HH. HORECA — "Quiero oportunidades" (lado profesional, CV opcional).
  - Formulario de contacto general con selector de tipo de consulta.
- **Componentes de contenido reutilizables** (`IconListGrid`, `IconLabelGrid`, `BulletList`, `PillarCard`, `Accordion`, `Testimonials`) para que cada página se construya componiendo datos de `siteConfig.js` en lugar de HTML fijo.
- **Botón flotante de WhatsApp** con mensaje predefinido, presente en todas las páginas.
- **Preparado para SEO**: meta etiquetas por página, etiquetas Open Graph / Twitter y datos estructurados JSON-LD tipo `Organization`.
- **Accesible**: campos de formulario con label, acordeón y menú móvil navegables por teclado, estados de foco visibles.
- **Animaciones de aparición al hacer scroll** que respetan `prefers-reduced-motion`.
- **¿Aún sin fotos?** Bloques con degradado elegante sustituyen cada imagen, marcados con `// TODO: reemplazar por foto real`.

## Stack tecnológico

| Capa | Elección |
|---|---|
| Framework | [React 18](https://react.dev) |
| Enrutamiento | [React Router 6](https://reactrouter.com) (del lado del cliente, `BrowserRouter`) |
| Build tool | [Vite 5](https://vitejs.dev) |
| Estilos | [Tailwind CSS 3](https://tailwindcss.com) |
| Iconos | [lucide-react](https://lucide.dev) |
| Tipografías | Playfair Display (títulos) + Inter (texto), vía Google Fonts |
| Backend | Ninguno — sitio estático, envíos de formulario vía un endpoint externo |

## Estructura del proyecto

```
├── index.html                      # Etiquetas SEO, Open Graph, JSON-LD, precarga de fuentes
├── public/
│   └── .htaccess                   # Redirección SPA (necesaria en hosting Apache como Hostinger)
├── src/
│   ├── main.jsx                     # Punto de entrada, envuelve <App/> en <BrowserRouter>
│   ├── App.jsx                      # Definición de rutas
│   ├── index.css                    # Directivas de Tailwind + animación de scroll
│   ├── siteConfig.js                # 🔧 TODO el contenido editable, organizado por página
│   ├── layouts/
│   │   └── Layout.jsx                # Navbar + <Outlet/> + Footer + WhatsAppButton, compartido por todas las rutas
│   ├── lib/
│   │   ├── icons.js                  # Mapa de string → icono de lucide-react (usado por siteConfig)
│   │   ├── sendForm.js               # Función de envío compartida (JSON o multipart si hay un archivo adjunto)
│   │   └── usePageMeta.js            # Define <title> + meta description por página
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── SomosHosteleria.jsx
│   │   ├── Shop.jsx
│   │   ├── Consulting.jsx            # Incluye la subsección de RR. HH. HORECA + ambos formularios
│   │   ├── ChefPrivado.jsx
│   │   ├── Nosotros.jsx
│   │   ├── Contacto.jsx
│   │   ├── LegalPlaceholder.jsx
│   │   └── NotFound.jsx
│   └── components/
│       ├── Navbar.jsx, Footer.jsx, WhatsAppButton.jsx, ScrollToTop.jsx
│       ├── PageHero.jsx, SectionHeader.jsx, PillarCard.jsx
│       ├── IconListGrid.jsx, IconLabelGrid.jsx, BulletList.jsx
│       ├── Accordion.jsx, Testimonials.jsx
│       ├── ImagePlaceholder.jsx, Reveal.jsx
│       ├── form/
│       │   ├── FormControls.jsx      # TextField, SelectField, TextareaField, CheckboxField, CheckboxGroupField, FileField, Honeypot
│       │   └── SubmitStatus.jsx      # Botón de envío + mensaje de éxito/error compartidos
│       └── forms/
│           ├── BuscoProfesionalesForm.jsx   # RR. HH. HORECA — lado empresa
│           └── UneteRedForm.jsx             # RR. HH. HORECA — lado profesional
├── tailwind.config.js               # Tokens de color, tipografías, keyframes de animación
├── postcss.config.js
└── vite.config.js
```

## Cómo empezar

Necesitas tener instalado [Node.js](https://nodejs.org) 18 o superior.

```bash
# 1. Instalar dependencias
npm install

# 2. Levantar el servidor de desarrollo (http://localhost:5173)
npm run dev

# 3. Generar el build de producción → se guarda en dist/
npm run build

# 4. Previsualizar el build de producción en local
npm run preview
```

## Cómo editar el contenido

Casi nunca vas a necesitar tocar un archivo de página o componente. Prácticamente todo —nombre de marca, datos de contacto, copy de cada hero, listas de servicios, catálogo de la tienda, FAQ, testimonios, roadmap, opciones de los formularios— está definido en [`src/siteConfig.js`](src/siteConfig.js) como un único objeto exportado, organizado por página (`home`, `somosHosteleria`, `shop`, `consulting`, `chefPrivado`, `nosotros`, `contactoPage`).

Los marcadores están escritos **en mayúsculas y entre corchetes** (p. ej. `[NOMBRE DEL CHEF]`, `[CIUDAD]`, `[AÑOS DE EXPERIENCIA]`) para que sean fáciles de encontrar y sustituir antes de publicar.

Los iconos referenciados en `siteConfig.js` (p. ej. `"ChefHat"`) se resuelven a través de [`src/lib/icons.js`](src/lib/icons.js) — añade ahí nuevos iconos de [lucide-react](https://lucide.dev/icons) si incorporas contenido que los necesite.

### Ocultar la tienda

La tienda está **oculta** de momento (todavía no hay productos a la venta), pero su página y su contenido se conservan intactos. Se controla con un único interruptor al inicio de [`src/siteConfig.js`](src/siteConfig.js):

```js
const features = {
  shop: false, // pon true para volver a mostrar la tienda
}
```

Con `shop: false`, la ruta `/shop` queda desactivada (muestra la página 404) y desaparecen todos los enlaces, la tarjeta de la home, la pregunta del FAQ y la opción del formulario de contacto que apuntan a ella. Al volver a ponerlo en `true` reaparece todo. Lo único que el interruptor no controla son los textos SEO estáticos de `index.html`: al reactivarla, vuelve a añadir ahí la mención a la tienda a mano.

## Formularios

Los cuatro formularios comparten el mismo patrón: validación en cliente, un campo honeypot oculto como protección básica anti-spam, y una llamada a `sendForm(endpoint, data)` desde [`src/lib/sendForm.js`](src/lib/sendForm.js).

Por defecto, todas las constantes `FORM_ENDPOINT` están **vacías**, así que los envíos se simulan (no sale ningún dato del navegador). Para conectar un backend real a un formulario concreto:

1. Crea un endpoint con un servicio como [Formspree](https://formspree.io), [Getform](https://getform.io) o [Basin](https://usebasin.com) — elige uno que soporte subida de archivos si vas a usar el campo de CV (lo tienen tanto Somos Hostelería como el formulario "profesional" de RR. HH.).
2. Define la constante `FORM_ENDPOINT` al inicio del archivo correspondiente con esa URL:
   - [`src/pages/SomosHosteleria.jsx`](src/pages/SomosHosteleria.jsx)
   - [`src/components/forms/BuscoProfesionalesForm.jsx`](src/components/forms/BuscoProfesionalesForm.jsx)
   - [`src/components/forms/UneteRedForm.jsx`](src/components/forms/UneteRedForm.jsx)
   - [`src/pages/Contacto.jsx`](src/pages/Contacto.jsx)
3. `sendForm()` envía automáticamente como `multipart/form-data` cuando hay un archivo adjunto, o como JSON en caso contrario.

## Despliegue

El sitio se compila a archivos estáticos (`dist/`) y puede alojarse en cualquier lugar que sirva contenido estático — no necesita un entorno Node.js en producción. Como usa React Router con URLs reales (`/shop`, `/consultoria`...), **el hosting debe redirigir las rutas desconocidas hacia `index.html`** para que los enlaces directos y los refrescos de página funcionen — ver más abajo.

### Subir a Hostinger

1. **Genera el build en tu ordenador:**
   ```bash
   npm run build
   ```
   Esto crea una carpeta `dist/` con `index.html`, una carpeta `assets/` y `.htaccess`.

2. **Súbelo con el Administrador de Archivos de hPanel:**
   - Entra a [Hostinger hPanel](https://hpanel.hostinger.com).
   - Ve a **Archivos → Administrador de archivos** y abre `public_html`.
   - Elimina los archivos por defecto que haya ahí.
   - Sube el **contenido** de `dist/` (no la carpeta en sí) dentro de `public_html`, de modo que `index.html` y `.htaccess` queden en la raíz.

   *Alternativa*: usa un cliente FTP (p. ej. [FileZilla](https://filezilla-project.org)) con las credenciales de **hPanel → Archivos → Cuentas FTP**, y arrastra el contenido de `dist/` hacia `public_html`.

3. **Confirma que `.htaccess` se subió.** Es un archivo oculto — asegúrate de que tu cliente FTP o el Administrador de Archivos muestre archivos ocultos, y de que exista en `public_html/.htaccess`. Sin él, entrar directamente a `/shop` (en vez de llegar haciendo clic desde `/`) mostrará un 404 de Apache en lugar de la página.

4. **Dominio y SSL:** si tu dominio ya apunta a Hostinger, el SSL se activa automáticamente.

5. **Antes de publicar**, asegúrate de que `src/siteConfig.js` tiene el contenido real y de que las constantes `FORM_ENDPOINT` están configuradas — si no, los formularios solo simularán los envíos.

### Otros hostings estáticos

El mismo resultado de `dist/` funciona sin configuración adicional en [Vercel](https://vercel.com) y [Netlify](https://netlify.com) (ambos redirigen rutas desconocidas a `index.html` para SPAs por defecto) o [Cloudflare Pages](https://pages.cloudflare.com) (activando el modo "Single Page Application"). GitHub Pages necesita el truco adicional de un `404.html` → `index.html`, ya que no tiene redirecciones del lado del servidor.

## Checklist antes de publicar

- [ ] Sustituir cada `[MARCADOR ENTRE CORCHETES]` en `src/siteConfig.js` por contenido real (ciudad, email, teléfono, número de WhatsApp, nombre del fundador y años de experiencia).
- [ ] Añadir fotos reales en lugar de los componentes `ImagePlaceholder` (hero de Inicio, foto del fundador en Nosotros).
- [ ] Diseñar y añadir un logo definitivo (sustituye el icono `ChefHat` + texto en `Navbar.jsx` / `Footer.jsx`).
- [ ] Añadir una imagen real de Open Graph en `public/og-image.jpg` (1200×630px) y actualizar las meta etiquetas en `index.html`.
- [ ] Definir un favicon definitivo (`public/favicon.svg`).
- [ ] Configurar las cuatro constantes `FORM_ENDPOINT` (ver [Formularios](#formularios)) para envíos reales.
- [ ] Actualizar el bloque JSON-LD en `index.html` con la dirección, teléfono y email reales del negocio.
- [ ] Redactar las páginas legales reales en `/aviso-legal` y `/privacidad` (revisadas por un profesional legal) — sustituir el contenido de `LegalPlaceholder.jsx`.
- [ ] Actualizar los enlaces sociales en `siteConfig.js` → `redes`.
- [ ] Sustituir los testimonios placeholder en `siteConfig.js` → `nosotros.testimonios` por citas reales de clientes cuando estén disponibles.
- [ ] Decidir el flujo real de precios/compra de Gatrobatos Shop cuando se quiera ir más allá de "catálogo + contacto".

## Licencia

MIT — siéntete libre de adaptar esta plantilla para tu propia web multi-marca o de consultoría.
