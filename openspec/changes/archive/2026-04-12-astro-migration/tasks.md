## 1. Project Setup

- [x] 1.1 Initialize Astro project: `npm create astro@latest` (or manual scaffold) — select "Empty" template, TypeScript strict
- [x] 1.2 Install Vercel adapter: `npx astro add vercel`; set `output: 'static'` in `astro.config.mjs`
- [x] 1.3 Move `assets/site.css`, `assets/lesson.css`, `assets/lesson-01.css` → `public/assets/`
- [x] 1.4 Delete old `assets/` directory (now empty)
- [x] 1.5 Create `src/data/lessons.ts` with typed array of `{ num, slug, title }` for all 11 lessons

## 2. Layouts

- [x] 2.1 Create `src/layouts/LessonLayout.astro` — props: `title`, `lessonNum`; renders `<head>` (fonts, meta, `/assets/site.css`, `/assets/lesson.css`), mob-nav (prev/next derived from lessons array), sidebar (data-driven from `lessons.ts`, current lesson highlighted), `<slot />`, footer
- [x] 2.2 Create `src/layouts/PageLayout.astro` — props: `title`; renders `<head>`, `<slot />`, footer (no sidebar)
- [x] 2.3 Verify lesson 01 layout: `LessonLayout` conditionally adds `/assets/lesson-01.css` link when `lessonNum === 1`

## 3. Migrate Lesson Pages

- [x] 3.1 Create `src/pages/lessons/01-the-chaos-tax.astro` — frontmatter with title + lessonNum, `<style is:global>` block from existing lesson, `<LessonLayout>` wrapping existing `<main>` content
- [x] 3.2 Create `src/pages/lessons/02-install-and-init.astro` — include `<script is:inline>` with `pickTool()` tab picker function
- [x] 3.3 Create `src/pages/lessons/03-your-first-change.astro`
- [x] 3.4 Create `src/pages/lessons/04-the-proposal.astro`
- [x] 3.5 Create `src/pages/lessons/05-the-specs-and-scenarios.astro`
- [x] 3.6 Create `src/pages/lessons/06-the-design-doc.astro`
- [x] 3.7 Create `src/pages/lessons/07-tasks.astro`
- [x] 3.8 Create `src/pages/lessons/08-fast-forward.astro`
- [x] 3.9 Create `src/pages/lessons/09-implement.astro`
- [x] 3.10 Create `src/pages/lessons/10-mid-flight-edits.astro`
- [x] 3.11 Create `src/pages/lessons/11-final.astro`

## 4. Migrate Index and Contact Pages

- [x] 4.1 Create `src/pages/index.astro` using `PageLayout` — paste existing index body content into `<slot />`
- [x] 4.2 Create `src/pages/contact.astro` using `PageLayout` — paste existing contact body content into `<slot />`

## 5. Build and Verify

- [x] 5.1 Run `npm run build` — confirm zero errors
- [x] 5.2 Run `npm run preview` — open each lesson in browser and confirm layout, sidebar, and content render correctly
- [x] 5.3 Verify lesson 01 dialogue block renders correctly (`.d-you`/`.d-ai` colors from `lesson-01.css`)
- [x] 5.4 Verify lesson 02 tab picker works (click tool tabs)
- [x] 5.5 Verify lessons with `pre { padding }` override (04–11) render code blocks correctly
- [x] 5.6 Resize to ≤ 800px — confirm sidebar hides and layout stacks
- [x] 5.7 Confirm sidebar active state highlights the correct lesson on each page

## 6. Cleanup

- [x] 6.1 Delete `lessons/01-the-chaos-tax.html` through `lessons/11-final.html`
- [x] 6.2 Delete `lessons/index.html` and `lessons/contact.html`
- [x] 6.3 Update `README.md` to reflect Astro dev/build commands (`npm run dev`, `npm run build`)
- [x] 6.4 Confirm `.gitignore` includes `dist/` and `node_modules/`
