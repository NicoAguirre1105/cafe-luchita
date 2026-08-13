# Café Luchita

Sitio web de una sola página (landing) para la marca de café ecuatoriano Café Luchita. Es un sitio estático con Next.js, sin backend — el formulario de contacto se maneja con Formspree.

## Stack

- Next.js (App Router)
- React
- Tailwind CSS
- Formspree (formulario de contacto)

## Requisitos

- Node.js 18+
- npm

## Comandos

```bash
npm install    # Instalar dependencias
npm run dev    # Servidor de desarrollo (http://localhost:3000)
npm run build  # Build de producción
npm start      # Servidor de producción
npm run lint   # Linter (ESLint)
```

## Estructura

Navegación por anclas (`#Inicio`, `#Producto`, `#SobreNosotros`) sobre una sola página. Todo el UI vive en `app/`:

- `app/page.tsx` — Componente raíz. Controla el estado del modal de contacto y compone las secciones.
- `app/_sections/` — Secciones de página completa (Header, Hero, Properties, Product, AboutUs, CTA, ContactModal, Footer).
- `app/_components/` — Componentes reutilizables (Product_Card, Property_Card, Slide, InfoModal, Spinner).
- `app/layout.tsx` — Layout raíz: fuente Montserrat, metadata, OpenGraph.

## Formulario de contacto

Formspree (`id: mrerpaww`) en `app/_sections/ContactModal.tsx`. Campos: `full-name`, `client-phone`, `subject`, `message`. Se resetea automáticamente 4 segundos después de un envío exitoso.

## SEO

- Idioma: español (`lang="es"`, locale `es_EC`)
- Canonical: `https://cafe-luchita.com`
- `app/robots.ts` y `app/sitemap.ts` para configuración de crawling.

## Documentación adicional

- [CLAUDE.md](CLAUDE.md) — guía para trabajar en el repo con Claude Code.
- [design_brief.md](design_brief.md) — explicación completa del diseño.
