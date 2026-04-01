# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Nebula API Docs — a Chinese-language documentation site for a model API relay/proxy service (nebulatrip.com). Built with Astro 5, MDX, Tailwind CSS 4, and Pagefind for full-text search.

## Commands

```bash
npm run dev            # Start Astro dev server
npm run build          # Production build + Pagefind indexing
npm run dev:search     # Build + Pagefind index + preview (test search locally)
npm run preview        # Preview production build
```

Search only works after `npm run build` (Pagefind indexes the built HTML in `dist/`).

## Architecture

### Routing

- `src/pages/index.astro` — Landing page
- `src/pages/docs/[...slug].astro` — Dynamic catch-all route that renders all doc pages from the `docs` content collection

### Content System

All documentation lives in `src/content/docs/` as MDX files. The collection schema is defined in `src/content.config.ts`:

- **Required**: `title` (string)
- **Optional**: `description`, `section`, `order` (number, for sorting), `prev`/`next` (objects with `title` and `href` for inter-page navigation)

Slug is derived from the file path under `src/content/docs/` (e.g., `installation/windows.mdx` → `/docs/installation/windows`).

### Navigation

Sidebar structure is defined in `src/config/navigation.ts` — a flat array of `SidebarSection` objects, each containing items with `label`, `href`, `icon` (icon name string), and `color` (Tailwind class). When adding a new doc page, you must also add its entry here.

### Layouts

- `BaseLayout.astro` — Root HTML shell (dark mode detection via `localStorage`, font loading)
- `DocsLayout.astro` — Wraps doc pages with Header + Sidebar + TOC + PrevNext

### Key Components

Components live in `src/components/`. Notable ones:
- `Callout.astro` — Used in MDX for info/warning/tip/important boxes
- `SearchModal.astro` — Pagefind-powered search UI triggered from header
- `TOC.astro` — Auto-generated table of contents from headings

### Styling

Tailwind CSS 4 via Vite plugin (not PostCSS). Global theme in `src/styles/global.css`:
- Fonts: Plus Jakarta Sans (display), Inter (body), JetBrains Mono (code)
- Primary color: `#8b5cf6` (purple)
- Dark/light mode via CSS variables and `.dark` class

### Path Alias

`@/*` maps to `src/*` (configured in `tsconfig.json`).

## Adding a New Doc Page

1. Create an MDX file in the appropriate `src/content/docs/<section>/` directory
2. Add frontmatter with at least `title`; set `section`, `order`, `prev`, `next` as needed
3. Add a sidebar entry in `src/config/navigation.ts`
4. Import `Callout` from a relative path if needed (MDX imports are relative to file location)

## Content Language

All user-facing documentation is written in Chinese. Code comments and component names are in English.
