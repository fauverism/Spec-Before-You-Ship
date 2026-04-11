## Context

Code block colors are split across two layers:

1. **`assets/site.css`** — defines `--code-*` CSS custom properties used everywhere
2. **Per-lesson `<style>` blocks** — define `.t-*` token classes (referencing the variables) and `.d-*` dialogue classes (hardcoded hex values, not using variables)

Structural chrome colors (`.code-header` bg, `.dialogue-header` bg, block borders) are also hardcoded in per-lesson styles, not pulled from variables.

The current palette is a custom dark theme (near-black `#18171a` background, Dracula/Material-ish accent colors). The site's page background is `#faf9f7` — warm off-white, close to Solarized Light's base3 (`#fdf6e3`).

## Goals / Non-Goals

**Goals:**
- All `<pre>`/`<code>` blocks across all lesson pages use Solarized Light colors
- Token semantics preserved (comments stay muted, keywords distinct, etc.)
- Chrome elements (headers, borders) updated to Solarized base2 (`#eee8d5`)

**Non-Goals:**
- Pulling `.d-*` hardcoded colors into CSS variables (separate refactor)
- Dark mode support
- Changing fonts, layout, or any non-color properties

## Decisions

**Use base3 (`#fdf6e3`) as code block background, not base2**
Base2 (`#eee8d5`) would create more separation from the page, but the editorial intent is integration, not contrast. Base3 harmonizes with the page's warm cream. Borders and the slightly darker base2 header chrome provide enough visual structure.

**Use base2 (`#eee8d5`) for block header chrome and borders**
The `.code-header` and `.dialogue-header` strips need to be visually distinct from the block body. One step darker (base2) achieves this subtly.

**Token → Solarized accent mapping follows canonical Solarized semantics:**

| Token | Variable | Solarized value | Solarized name |
|-------|----------|-----------------|----------------|
| background | `--code-bg` | `#fdf6e3` | base3 |
| foreground | `--code-fg` | `#657b83` | base00 |
| comment | `--code-comment` | `#93a1a1` | base1 |
| keyword | `--code-keyword` | `#859900` | green |
| string | `--code-string` | `#2aa198` | cyan |
| type | `--code-type` | `#268bd2` | blue |
| number | `--code-number` | `#cb4b16` | orange |
| prop | `--code-prop` | `#268bd2` | blue |
| fn | `--code-fn` | `#268bd2` | blue |
| op | `--code-op` | `#657b83` | base00 |

**Dialogue token mapping:**

| Class | Current | Solarized value | Role |
|-------|---------|-----------------|------|
| `.d-label` | `#807d88` | `#93a1a1` | muted label (base1) |
| `.d-you` | `#89ddff` | `#268bd2` | "you" messages (blue) |
| `.d-ai` | `#c3e88d` | `#2aa198` | AI messages (cyan) |
| `.d-you-bad` | `#f78c6c` | `#cb4b16` | bad examples (orange) |
| `.d-comment` | `#504d5a` | `#93a1a1` | asides (base1) |

**Shell output color:**
`.t-shell-out` currently `#6a9f6a` → `#859900` (Solarized green)

**`.t-dim` color:**
Currently `#504d5a` → `#93a1a1` (base1, consistent with comment/muted role)

## Risks / Trade-offs

- **`--warn-bg` is already `#fdf6e3`** — same as new `--code-bg`. Warning callout boxes and code blocks will share a background color. Visually distinguishable by border treatment and context. Acceptable.
- **11 files with identical hardcoded color blocks** — copy-paste risk. Mitigation: tasks list exact values; implementer does one file first, visually verifies, then repeats.

## Migration Plan

Static HTML, no deployment complexity. No rollback risk beyond reverting the commit.
