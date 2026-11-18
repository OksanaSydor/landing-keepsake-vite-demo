# Keepsake landing page

Responsive recreation of the Keepsake design agency landing page from Lab 07, migrated to Vite, Pug, and Sass for Lab 09. No UI framework is used.

## Requirements

- Node.js 20 or newer (LTS recommended)
- npm

## Commands

```sh
npm install
npm run dev
npm run build
npm run preview
```

## Project structure

- `src/pages/index.pug` extends the shared layout.
- `src/layouts/` contains the page shell and its overridable blocks.
- `src/components/` contains the header, footer, and individual page sections.
- `src/data/site-data.pug` stores repeated page content as arrays of objects.
- `src/mixins/mixins.pug` contains shared button, icon, picture, and project card mixins.
- `src/styles/abstracts/` contains design tokens, the breakpoint map, Sass function, and mixins.
- `src/styles/base/`, `layout/`, and `components/` divide reset, shared layout, and component styles.
- `src/styles/main.scss` is the only stylesheet entry point.

All author-written page markup lives in Pug. The Sass architecture uses `@use` and `@forward`; Sass and the Vite/Pug tooling are build-time dependencies in `devDependencies`.
