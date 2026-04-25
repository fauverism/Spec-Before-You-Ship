# Spec-Before-You-Ship

A small learning site and example repository for using OpenSpec to plan, scope, and ship changes. Built with [Astro](https://astro.build) and deployed as a static site.

## What's inside

- `src/pages/lessons/` – 8 Astro lesson pages
- `src/pages/` – `index.astro` (home) and `contact.astro`
- `src/layouts/` – `LessonLayout.astro` and `PageLayout.astro`
- `src/data/lessons.ts` – central lesson registry (slug, title, number)
- `public/assets/` – shared CSS (site.css, lesson.css, lesson-01.css)
- `openspec/` – OpenSpec metadata, change drafts, and specs
- `CHANGELOG.md` – repository change history

## Dev commands

```bash
npm run dev      # Start local dev server at localhost:4321
npm run build    # Build static site to dist/
npm run preview  # Preview the built site locally
```

## License

This project is available under the terms of the included `LICENSE`.
