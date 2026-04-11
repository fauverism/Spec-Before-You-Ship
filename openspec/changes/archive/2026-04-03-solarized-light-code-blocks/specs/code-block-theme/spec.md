## ADDED Requirements

### Requirement: Code block background and foreground use Solarized Light base colors
All `<pre>` elements SHALL use `#fdf6e3` (Solarized base3) as background. Default code text SHALL use `#657b83` (Solarized base00) as foreground.

#### Scenario: Pre element background
- **WHEN** any `<pre>` block is rendered on a lesson page
- **THEN** its background color is `#fdf6e3`

#### Scenario: Default code text color
- **WHEN** unstyled code text is rendered inside a `<pre>` block
- **THEN** its color is `#657b83`

### Requirement: Syntax tokens use canonical Solarized Light accent colors
Token span classes SHALL use the following Solarized Light accent values:
- `.t-comment` — `#93a1a1` (base1), italic
- `.t-keyword` — `#859900` (green)
- `.t-string` — `#2aa198` (cyan)
- `.t-type` — `#268bd2` (blue)
- `.t-number` — `#cb4b16` (orange)
- `.t-prop` — `#268bd2` (blue)
- `.t-fn` — `#268bd2` (blue)
- `.t-op` — `#657b83` (base00)
- `.t-plain` — `#657b83` (base00)
- `.t-dim` — `#93a1a1` (base1)
- `.t-shell-out` — `#859900` (green)

#### Scenario: Comment token color
- **WHEN** a `.t-comment` span is rendered
- **THEN** its color is `#93a1a1` and it is italic

#### Scenario: Keyword token color
- **WHEN** a `.t-keyword` span is rendered
- **THEN** its color is `#859900`

#### Scenario: String token color
- **WHEN** a `.t-string` span is rendered
- **THEN** its color is `#2aa198`

### Requirement: Block chrome uses Solarized base2
`.code-header`, `.dialogue-header`, and block borders SHALL use `#eee8d5` (Solarized base2) as background/border color. Header label text SHALL use `#93a1a1` (base1).

#### Scenario: Code block header background
- **WHEN** a `.code-header` or `.dialogue-header` bar is rendered
- **THEN** its background is `#eee8d5`

#### Scenario: Block border color
- **WHEN** a `.code-block` or `.dialogue` element is rendered
- **THEN** its border color is `#eee8d5`

### Requirement: Dialogue token classes use Solarized Light accent colors
Dialogue-specific classes SHALL use the following values:
- `.d-label` — `#93a1a1` (base1), italic
- `.d-you` — `#268bd2` (blue)
- `.d-ai` — `#2aa198` (cyan)
- `.d-you-bad` — `#cb4b16` (orange)
- `.d-comment` — `#93a1a1` (base1), italic

#### Scenario: "You" message color
- **WHEN** a `.d-you` span is rendered in a dialogue block
- **THEN** its color is `#268bd2`

#### Scenario: AI message color
- **WHEN** a `.d-ai` span is rendered in a dialogue block
- **THEN** its color is `#2aa198`

#### Scenario: Bad example color
- **WHEN** a `.d-you-bad` span is rendered in a dialogue block
- **THEN** its color is `#cb4b16`
