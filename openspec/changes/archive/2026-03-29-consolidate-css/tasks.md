## 1. Extract Shared CSS

- [x] 1.1 Identify the shared CSS block in `index.html` (reset, `:root` variables, `html`/`body`, `.site-header`, `.site-footer` and their children)
- [x] 1.2 Create `assets/site.css` with the extracted shared CSS block
- [x] 1.3 Verify `assets/site.css` contains `:root`, header, and footer styles

## 2. Update index.html

- [x] 2.1 Add `<link rel="stylesheet" href="../assets/site.css">` to `<head>` in `index.html`
- [x] 2.2 Remove the shared CSS from `index.html`'s `<style>` block, keeping only page-specific styles
- [x] 2.3 Visually verify `index.html` renders correctly (header, footer, intro, curriculum all intact)

## 3. Update contact.html

- [x] 3.1 Add `<link rel="stylesheet" href="../assets/site.css">` to `<head>` in `contact.html`
- [x] 3.2 Remove shared CSS from `contact.html`'s `<style>` block, keeping only contact-specific styles
- [x] 3.3 Visually verify `contact.html` renders correctly

## 4. Update Lesson Pages

- [x] 4.1 Update `01-the-chaos-tax.html` — add link, remove shared CSS
- [x] 4.2 Update `02-install-and-init.html` — add link, remove shared CSS
- [x] 4.3 Update `03-your-first-change.html` — add link, remove shared CSS
- [x] 4.4 Update `04-the-proposal.html` — add link, remove shared CSS
- [x] 4.5 Update `05-the-specs-and-scenarios.html` — add link, remove shared CSS
- [x] 4.6 Update `06-the-design-doc.html` — add link, remove shared CSS
- [x] 4.7 Update `07-tasks.html` — add link, remove shared CSS
- [x] 4.8 Update `08-fast-forward.html` — add link, remove shared CSS
- [x] 4.9 Update `09-implement.html` — add link, remove shared CSS
- [x] 4.10 Update `10-mid-flight-edits.html` — add link, remove shared CSS
- [x] 4.11 Update `11-final.html` — add link, remove shared CSS

## 5. Verify

- [x] 5.1 Open each lesson page and confirm header and footer render correctly
- [x] 5.2 Confirm no `<style>` block in any page contains duplicated `:root` or `.site-header` declarations
- [x] 5.3 Confirm `assets/site.css` is the single source of shared styles
