## 1. Update assets/site.css

- [x] 1.1 Replace `--sans`, `--serif`, `--mono` variable values with Source Sans Pro, Source Serif 4, Google Sans Code
- [x] 1.2 Change `html { font-size: 16px }` to `html { font-size: 20px }`
- [x] 1.3 Update layout widths: `.col` max-width → 860px, `.layout` max-width → 1200px

## 2. Update Lesson Page Styles

- [x] 2.1 Update `.main` max-width → 800px and padding → 4rem 4.5rem 6rem in lesson CSS (check if in site.css or per-page)
- [x] 2.2 Update sidebar width → 260px in lesson CSS
- [x] 2.3 Add `font-variation-settings: "opsz" 40` to `h1` rule on lesson pages for Source Serif 4 display cut

## 3. Update Index Page Styles

- [x] 3.1 Add `font-variation-settings: "opsz" 40` to `.intro-heading` rule in `index.html`

## 4. Update Google Fonts Link in All HTML Files

- [x] 4.1 Verify Google Sans Code is available via Google Fonts CSS API; if not, use DM Mono
- [x] 4.2 Update Google Fonts `<link>` tag in `index.html`
- [x] 4.3 Update Google Fonts `<link>` tag in `contact.html`
- [x] 4.4 Update Google Fonts `<link>` tags in all 11 lesson pages (01–11)

## 5. Verify

- [x] 5.1 Open index page — confirm Source Sans Pro body, Source Serif 4 headings, Google Sans Code labels
- [x] 5.2 Open a lesson page — confirm 20px base, expanded column, code blocks in Google Sans Code
- [ ] 5.3 Check mobile breakpoint on a lesson page — confirm nothing feels cramped
