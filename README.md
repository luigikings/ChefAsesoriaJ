<div align="center">

# 👨‍🍳 Chef Consulting — One-Page Website

**A premium, single-page marketing site for a restaurant kitchen consultant.**
Built with React, Vite and Tailwind CSS — no backend, no database, fully content-driven.

[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/License-MIT-gray)](#license)

English · [Español](#español)

</div>

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Editing Content](#editing-content)
- [Contact Form Setup](#contact-form-setup)
- [Deployment](#deployment)
  - [Deploying to Hostinger](#deploying-to-hostinger)
  - [Other Static Hosts](#other-static-hosts)
- [Pre-Launch Checklist](#pre-launch-checklist)
- [License](#license)

---

## Overview

This project is a one-page website for a **freelance chef offering gastronomic consulting services to restaurant owners** — kitchen audits, menu engineering, cost control, staff training, food-safety processes, and executive-chef-for-hire engagements.

The goal of the page is simple: let a restaurant owner understand the offer in seconds, build trust, and drive a single action — **get in touch** (contact form or WhatsApp).

There is no backend or database. All copy, contact details, services, FAQ, and color tokens live in a single file — [`src/siteConfig.js`](src/siteConfig.js) — so the site can be fully rebranded without touching component code.

## Features

- **Mobile-first, one-page layout** with smooth anchor scrolling and subtle scroll-reveal animations (respects `prefers-reduced-motion`).
- **12 sections**: navbar, hero, pain points, services, working method, results, about, testimonials, target audience, FAQ accordion, contact form, footer.
- **Accessible contact form**: client-side validation, clear error/success/loading states, an anti-spam honeypot field, and a `sendForm()` function ready to be wired to any form backend.
- **Floating WhatsApp button** with a pre-filled message.
- **SEO-ready**: `<title>`, meta description, Open Graph / Twitter tags, and `ProfessionalService` JSON-LD structured data.
- **Design system** driven by Tailwind tokens (cream background, charcoal text, terracotta accent, dark olive secondary) and Google Fonts (Playfair Display + Inter).
- **No photos yet?** No problem — elegant gradient placeholders stand in for every image, clearly marked with `// TODO: reemplazar por foto real`.

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | [React 18](https://react.dev) |
| Build tool | [Vite 5](https://vitejs.dev) |
| Styling | [Tailwind CSS 3](https://tailwindcss.com) |
| Icons | [lucide-react](https://lucide.dev) |
| Fonts | Playfair Display (headings) + Inter (body), via Google Fonts |
| Backend | None — static site, form submission via a third-party endpoint |

## Project Structure

```
├── index.html                # SEO tags, Open Graph, JSON-LD, font preloads
├── src/
│   ├── main.jsx               # React entry point
│   ├── App.jsx                # Assembles all sections in order
│   ├── index.css              # Tailwind directives + scroll-reveal animation
│   ├── siteConfig.js          # 🔧 ALL editable content lives here
│   ├── lib/
│   │   └── icons.js           # String → lucide-react icon map (used by siteConfig)
│   └── components/
│       ├── Navbar.jsx
│       ├── Hero.jsx
│       ├── Problems.jsx       # "Problems I solve" section
│       ├── Services.jsx
│       ├── Method.jsx         # "How I work" (4 steps)
│       ├── Results.jsx
│       ├── About.jsx
│       ├── Testimonials.jsx
│       ├── ForWhom.jsx        # "Who this is for"
│       ├── FAQ.jsx            # Accessible accordion
│       ├── Contact.jsx        # Form + direct contact details
│       ├── Footer.jsx
│       ├── WhatsAppButton.jsx # Floating CTA
│       ├── ImagePlaceholder.jsx
│       └── Reveal.jsx         # Scroll-reveal wrapper (IntersectionObserver)
├── tailwind.config.js         # Color tokens, fonts, animation keyframes
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

You should almost never need to touch a component file. Nearly everything — chef's name, city, contact info, headlines, service descriptions, FAQ, testimonials, trust numbers, color tokens — is defined in [`src/siteConfig.js`](src/siteConfig.js) as a single exported object.

Placeholders are written in **UPPERCASE with brackets** (e.g. `[NOMBRE DEL CHEF]`, `[CIUDAD]`, `[AÑOS DE EXPERIENCIA]`) so they're easy to find and replace before launch.

Icons referenced in `siteConfig.js` (e.g. `"ClipboardCheck"`) are resolved through [`src/lib/icons.js`](src/lib/icons.js) — add new [lucide-react](https://lucide.dev/icons) icons there if you introduce new content that needs one.

## Contact Form Setup

The form in [`src/components/Contact.jsx`](src/components/Contact.jsx) validates on the client (required fields, email format, minimum message length, privacy-policy checkbox) and includes a hidden honeypot field for basic spam protection.

By default, submissions are **simulated** (no data leaves the browser). To connect a real backend:

1. Create a form endpoint with a service like [Formspree](https://formspree.io), [Getform](https://getform.io) or [Basin](https://usebasin.com).
2. Set the `FORM_ENDPOINT` constant at the top of `Contact.jsx` to that URL.
3. `sendForm()` will automatically POST the form data as JSON once the constant is non-empty.

## Deployment

The site builds to static files (`dist/`) and can be hosted anywhere that serves static assets — no Node.js runtime required in production.

### Deploying to Hostinger

1. **Build the project locally:**
   ```bash
   npm run build
   ```
   This generates a `dist/` folder containing `index.html` and an `assets/` folder.

2. **Upload via hPanel File Manager:**
   - Log in to [Hostinger hPanel](https://hpanel.hostinger.com).
   - Go to **Files → File Manager** and open `public_html`.
   - Remove any default files already there.
   - Upload the **contents** of `dist/` (not the folder itself) into `public_html`, so `index.html` sits at the root.

   *Alternatively*, use an FTP client (e.g. [FileZilla](https://filezilla-project.org)) with the credentials from **hPanel → Files → FTP Accounts**, and drag the contents of `dist/` into `public_html`.

3. **Domain & SSL:** if your domain is already pointed to Hostinger, SSL activates automatically. Since this is a static single-page site with only anchor links (no client-side router), no additional rewrite rules are needed.

4. **Before going live**, make sure `src/siteConfig.js` is filled with real content and `FORM_ENDPOINT` is configured — otherwise the contact form will only simulate submissions.

### Other Static Hosts

The same `dist/` output works out of the box on [Vercel](https://vercel.com), [Netlify](https://netlify.com), [Cloudflare Pages](https://pages.cloudflare.com), or GitHub Pages.

## Pre-Launch Checklist

- [ ] Replace every `[BRACKETED PLACEHOLDER]` in `src/siteConfig.js` with real content.
- [ ] Add real photos (hero, about) in place of `ImagePlaceholder` components.
- [ ] Design and add a final logo (replaces the `ChefHat` icon + text lockup in `Navbar.jsx` / `Footer.jsx`).
- [ ] Add a real Open Graph image at `public/og-image.jpg` (1200×630px) and update `index.html` meta tags.
- [ ] Set a final favicon (`public/favicon.svg`).
- [ ] Configure `FORM_ENDPOINT` in `Contact.jsx` for real form submissions.
- [ ] Update the JSON-LD block in `index.html` with the real business address, phone and email.
- [ ] Replace `#aviso-legal` / `#privacidad` placeholder anchors with real legal pages (have them reviewed by a legal professional).
- [ ] Update social links in `siteConfig.js` → `redes`.

## License

MIT — feel free to adapt this template for your own consulting or personal-brand website.

---
---

<div align="center" id="español">

# 👨‍🍳 Web One-Page — Consultoría Gastronómica

**Sitio de una sola página para un chef consultor de cocina.**
Construido con React, Vite y Tailwind CSS — sin backend, sin base de datos, totalmente editable por contenido.

[English](#-chef-consulting--one-page-website) · Español

</div>

---

## Índice

- [Descripción general](#descripción-general)
- [Funcionalidades](#funcionalidades)
- [Stack tecnológico](#stack-tecnológico)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Cómo empezar](#cómo-empezar)
- [Cómo editar el contenido](#cómo-editar-el-contenido)
- [Configurar el formulario de contacto](#configurar-el-formulario-de-contacto)
- [Despliegue](#despliegue)
  - [Subir a Hostinger](#subir-a-hostinger)
  - [Otros hostings estáticos](#otros-hostings-estáticos)
- [Checklist antes de publicar](#checklist-antes-de-publicar)
- [Licencia](#licencia)

---

## Descripción general

Este proyecto es una web de una sola página para un **chef independiente que ofrece servicios de consultoría gastronómica a dueños de restaurante**: auditorías de cocina, ingeniería de menú, control de costes, formación de equipo, procesos de seguridad alimentaria y dirección de cocina ejecutiva por temporada.

El objetivo de la página es simple: que el dueño de un restaurante entienda la propuesta en segundos, confíe en el chef, y realice una única acción — **contactar** (formulario o WhatsApp).

No hay backend ni base de datos. Todo el copy, los datos de contacto, los servicios, las preguntas frecuentes y los colores viven en un único archivo — [`src/siteConfig.js`](src/siteConfig.js) — de modo que el sitio puede rebrandearse por completo sin tocar el código de los componentes.

## Funcionalidades

- **Diseño mobile-first de una sola página**, con scroll suave por anclas y animaciones sutiles de aparición al hacer scroll (respeta `prefers-reduced-motion`).
- **12 secciones**: navbar, hero, dolores del cliente, servicios, método de trabajo, resultados, sobre mí, testimonios, para quién es, FAQ en acordeón, formulario de contacto y footer.
- **Formulario de contacto accesible**: validación en cliente, estados claros de error/éxito/envío, campo honeypot anti-spam y una función `sendForm()` lista para conectarse a cualquier backend de formularios.
- **Botón flotante de WhatsApp** con mensaje predefinido.
- **Preparado para SEO**: `<title>`, meta description, etiquetas Open Graph / Twitter y datos estructurados JSON-LD tipo `ProfessionalService`.
- **Sistema de diseño** basado en tokens de Tailwind (fondo crema, texto carbón, acento terracota, secundario verde oliva oscuro) y tipografías de Google Fonts (Playfair Display + Inter).
- **¿Aún sin fotos?** No hay problema — bloques con degradado elegante sustituyen cada imagen, marcados claramente con `// TODO: reemplazar por foto real`.

## Stack tecnológico

| Capa | Elección |
|---|---|
| Framework | [React 18](https://react.dev) |
| Build tool | [Vite 5](https://vitejs.dev) |
| Estilos | [Tailwind CSS 3](https://tailwindcss.com) |
| Iconos | [lucide-react](https://lucide.dev) |
| Tipografías | Playfair Display (títulos) + Inter (texto), vía Google Fonts |
| Backend | Ninguno — sitio estático, envío de formulario vía un endpoint externo |

## Estructura del proyecto

```
├── index.html                # Etiquetas SEO, Open Graph, JSON-LD, precarga de fuentes
├── src/
│   ├── main.jsx               # Punto de entrada de React
│   ├── App.jsx                # Ensambla todas las secciones en orden
│   ├── index.css              # Directivas de Tailwind + animación de scroll
│   ├── siteConfig.js          # 🔧 TODO el contenido editable vive aquí
│   ├── lib/
│   │   └── icons.js           # Mapa de string → icono de lucide-react (usado por siteConfig)
│   └── components/
│       ├── Navbar.jsx
│       ├── Hero.jsx
│       ├── Problems.jsx       # Sección "Problemas que resuelvo"
│       ├── Services.jsx
│       ├── Method.jsx         # "Cómo trabajo" (4 pasos)
│       ├── Results.jsx
│       ├── About.jsx
│       ├── Testimonials.jsx
│       ├── ForWhom.jsx        # "Para quién es"
│       ├── FAQ.jsx            # Acordeón accesible
│       ├── Contact.jsx        # Formulario + datos de contacto directo
│       ├── Footer.jsx
│       ├── WhatsAppButton.jsx # CTA flotante
│       ├── ImagePlaceholder.jsx
│       └── Reveal.jsx         # Envoltorio de aparición al scroll (IntersectionObserver)
├── tailwind.config.js         # Tokens de color, tipografías, keyframes de animación
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

Casi nunca vas a necesitar tocar un archivo de componente. Prácticamente todo —nombre del chef, ciudad, datos de contacto, titulares, descripciones de servicios, FAQ, testimonios, cifras de confianza, colores— está definido en [`src/siteConfig.js`](src/siteConfig.js) como un único objeto exportado.

Los marcadores están escritos **en mayúsculas y entre corchetes** (p. ej. `[NOMBRE DEL CHEF]`, `[CIUDAD]`, `[AÑOS DE EXPERIENCIA]`) para que sean fáciles de encontrar y sustituir antes de publicar.

Los iconos referenciados en `siteConfig.js` (p. ej. `"ClipboardCheck"`) se resuelven a través de [`src/lib/icons.js`](src/lib/icons.js) — añade ahí nuevos iconos de [lucide-react](https://lucide.dev/icons) si incorporas contenido nuevo que los necesite.

## Configurar el formulario de contacto

El formulario en [`src/components/Contact.jsx`](src/components/Contact.jsx) valida en el cliente (campos obligatorios, formato de email, longitud mínima del mensaje, casilla de política de privacidad) e incluye un campo honeypot oculto como protección básica anti-spam.

Por defecto, los envíos se **simulan** (no sale ningún dato del navegador). Para conectar un backend real:

1. Crea un endpoint de formulario con un servicio como [Formspree](https://formspree.io), [Getform](https://getform.io) o [Basin](https://usebasin.com).
2. Define la constante `FORM_ENDPOINT` al inicio de `Contact.jsx` con esa URL.
3. `sendForm()` enviará automáticamente los datos del formulario como JSON en cuanto la constante deje de estar vacía.

## Despliegue

El sitio se compila a archivos estáticos (`dist/`) y puede alojarse en cualquier lugar que sirva contenido estático — no necesita un entorno Node.js en producción.

### Subir a Hostinger

1. **Genera el build en tu ordenador:**
   ```bash
   npm run build
   ```
   Esto crea una carpeta `dist/` con `index.html` y una carpeta `assets/`.

2. **Súbelo con el Administrador de Archivos de hPanel:**
   - Entra a [Hostinger hPanel](https://hpanel.hostinger.com).
   - Ve a **Archivos → Administrador de archivos** y abre `public_html`.
   - Elimina los archivos por defecto que haya ahí.
   - Sube el **contenido** de `dist/` (no la carpeta en sí) dentro de `public_html`, de modo que `index.html` quede en la raíz.

   *Alternativa*: usa un cliente FTP (p. ej. [FileZilla](https://filezilla-project.org)) con las credenciales de **hPanel → Archivos → Cuentas FTP**, y arrastra el contenido de `dist/` hacia `public_html`.

3. **Dominio y SSL:** si tu dominio ya apunta a Hostinger, el SSL se activa automáticamente. Al ser un sitio estático de una sola página con solo anclas (`#servicios`, `#contacto`...) y sin router del lado del cliente, no hace falta ninguna regla de redirección adicional.

4. **Antes de publicar**, asegúrate de que `src/siteConfig.js` tiene el contenido real y de que `FORM_ENDPOINT` está configurado — si no, el formulario de contacto solo simulará los envíos.

### Otros hostings estáticos

El mismo resultado de `dist/` funciona sin configuración adicional en [Vercel](https://vercel.com), [Netlify](https://netlify.com), [Cloudflare Pages](https://pages.cloudflare.com) o GitHub Pages.

## Checklist antes de publicar

- [ ] Sustituir cada `[MARCADOR ENTRE CORCHETES]` en `src/siteConfig.js` por contenido real.
- [ ] Añadir fotos reales (hero, sobre mí) en lugar de los componentes `ImagePlaceholder`.
- [ ] Diseñar y añadir un logo definitivo (sustituye el icono `ChefHat` + texto en `Navbar.jsx` / `Footer.jsx`).
- [ ] Añadir una imagen real de Open Graph en `public/og-image.jpg` (1200×630px) y actualizar las meta etiquetas en `index.html`.
- [ ] Definir un favicon definitivo (`public/favicon.svg`).
- [ ] Configurar `FORM_ENDPOINT` en `Contact.jsx` para envíos reales del formulario.
- [ ] Actualizar el bloque JSON-LD en `index.html` con la dirección, teléfono y email reales del negocio.
- [ ] Sustituir las anclas placeholder `#aviso-legal` / `#privacidad` por páginas legales reales (revisadas por un profesional).
- [ ] Actualizar los enlaces sociales en `siteConfig.js` → `redes`.

## Licencia

MIT — siéntete libre de adaptar esta plantilla para tu propia web de consultoría o marca personal.
