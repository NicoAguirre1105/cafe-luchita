# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Café Luchita** is a single-page marketing website for a Ecuadorian coffee brand. It is a Next.js static site with no backend — contact forms are handled via Formspree.

## Commands

```bash
npm run dev    # Start development server (http://localhost:3000)
npm run build  # Build for production
npm start      # Start production server
npm run lint   # Run ESLint
```

## Architecture

Single-page application with anchor-based navigation (`#Inicio`, `#Producto`, `#SobreNosotros`). All UI lives in `app/`:

- **`app/page.tsx`** — Root client component. Owns `isContactModalOpen` state and composes all sections in order.
- **`app/_sections/`** — Full-width page sections (Header, Hero, Properties, Product, AboutUs, CTA, ContactModal, Footer). These receive props/handlers from `page.tsx`.
- **`app/_components/`** — Reusable primitives used within sections (Product_Card, Property_Card, Slide, InfoModal, Spinner).
- **`app/layout.tsx`** — Root layout with Montserrat font, metadata, and OpenGraph config.

## Contact Form

Formspree (`id: mrerpaww`) is used in `ContactModal.tsx`. Fields: `full-name`, `client-phone`, `subject`, `message`. The form auto-resets 4 seconds after successful submission.

## SEO / Metadata

- Language: Spanish (`lang="es"`, locale `es_EC`)
- Canonical URL: `https://cafe-luchita.com`
- OpenGraph image: `https://cafe-luchita.com/landing-bg.jpeg`
- `app/robots.ts` and `app/sitemap.ts` are present for crawl configuration.

## Design

Full design explanation lives in design_brief.md
