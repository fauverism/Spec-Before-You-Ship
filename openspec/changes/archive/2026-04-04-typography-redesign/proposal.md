## Why

The current type stack (Geist + Instrument Serif + JetBrains Mono at 16px base) is functional but generic — it looks like most developer documentation sites. The course author has a design background and wants the site's typography to reflect that, feeling more considered, editorial, and original.

## What Changes

- Font stack replaced: Source Sans Pro (sans), Source Serif 4 (serif), Google Sans Code (mono)
- Base font size increased: 16px → 20px (all rem-based values scale proportionally)
- Layout expanded: wider content columns, more generous padding throughout
- Google Fonts import URLs updated in all 13 HTML files and `assets/site.css`

## Capabilities

### New Capabilities
- `site-typography`: The visual type system — font families, base size, and layout scale used across the entire site

### Modified Capabilities
<!-- None — no existing spec-level behavior changes. This is a visual/presentational change only. -->

## Impact

- `assets/site.css` — font variables, base font-size, layout widths, padding
- All 13 HTML files in `lessons/` — Google Fonts `<link>` tags updated
- No content, structure, or functionality changes
