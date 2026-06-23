# Brightside Studio — Design Standards

A reference for building consistent, on-brand interfaces across the Brightside Studio website.

---

## Brand Identity

Brightside Studio communicates **coastal professionalism** — trustworthy and grounded (deep blue), with warm, optimistic energy (sunrise gold). The visual language should feel clean, editorial, and approachable.

---

## Color Palette

### Primary — Deep Coastal Blue

The core brand color. Use generously for structure and identity.

| Token | HEX | RGB | Usage |
|-------|-----|-----|-------|
| `--color-primary` | `#0F4C8A` | 15, 76, 138 | Headings, logo, navigation, links, primary buttons |
| `--color-primary-dark` | `#0A3A6A` | 10, 58, 106 | Hover states on primary elements, pressed states |
| `--color-primary-light` | `#E8F0F8` | 232, 240, 248 | Subtle backgrounds, highlights, input fills |

### Accent — Sunrise Gold

Use **sparingly** to draw attention. Overuse dilutes its impact.

| Token | HEX | RGB | Usage |
|-------|-----|-----|-------|
| `--color-accent` | `#F5A623` | 245, 166, 35 | CTA buttons, key highlights |
| `--color-accent-dark` | `#D9910F` | 217, 145, 15 | CTA hover, active states |
| `--color-accent-light` | `#FEF6E8` | 254, 246, 232 | Icon hover backgrounds, subtle highlights |

### Neutrals

| Token | HEX | Usage |
|-------|-----|-------|
| `--color-white` | `#FFFFFF` | Cards, navbar, elevated surfaces |
| `--color-background` | `#FAFBFC` | Page background |
| `--color-text` | `#1A2B3C` | Body copy |
| `--color-text-muted` | `#5A6B7D` | Secondary text, captions, metadata |
| `--color-border` | `#DCE5EF` | Dividers, input borders |
| `--color-border-light` | `#EEF2F6` | Subtle separators |

### Color Rules

- **60 / 30 / 10 rule:** ~60% neutrals/white, ~30% primary blue, ~10% accent gold.
- Never use gold for large background areas or long passages of text.
- Body text should be `--color-text`, not primary blue — reserve blue for headings, links, and UI chrome.
- Ensure WCAG AA contrast: primary blue on white passes; gold buttons use primary blue text.

---

## Typography

### Font Families

| Role | Font | CSS Variable | Usage |
|------|------|--------------|-------|
| Titles | **Cormorant** | `--font-title` | Headings, logo, hero titles, pull quotes |
| Body | **Open Sans** | `--font-body` | Paragraphs, navigation, buttons, labels, forms |

### Type Scale

| Token | Size | Usage |
|-------|------|-------|
| `--text-xs` | 12px / 0.75rem | Fine print, legal |
| `--text-sm` | 14px / 0.875rem | Nav links, buttons, captions |
| `--text-base` | 16px / 1rem | Body copy (default) |
| `--text-lg` | 18px / 1.125rem | Lead paragraphs, mobile nav |
| `--text-xl` | 24px / 1.5rem | H4, logo, card titles |
| `--text-2xl` | 32px / 2rem | H3, section headings |
| `--text-3xl` | 48px / 3rem | H2, page titles |
| — | 64px+ | H1, hero headlines (use Cormorant) |

### Line Height

| Token | Value | Usage |
|-------|-------|-------|
| `--leading-tight` | 1.2 | Headings |
| `--leading-normal` | 1.5 | Body text, UI |
| `--leading-relaxed` | 1.65 | Long-form reading |

### Typography Rules

- Headings always use **Cormorant** in `--color-primary`.
- Body copy always uses **Open Sans** in `--color-text`.
- Nav links: Open Sans, medium weight (500), uppercase on desktop optional.
- Maximum line length for body text: **65–75 characters** (~680px).
- Letter-spacing: slight tracking (`0.02–0.04em`) on uppercase labels and buttons.

---

## Spacing

Built on an **8px base grid**. Always use spacing tokens — avoid arbitrary pixel values.

| Token | Value | Common Use |
|-------|-------|------------|
| `--space-1` | 4px | Tight icon gaps |
| `--space-2` | 8px | Inline spacing, small gaps |
| `--space-3` | 12px | Button padding (vertical) |
| `--space-4` | 16px | Component padding, list gaps |
| `--space-5` | 24px | Nav link gaps, card padding |
| `--space-6` | 32px | Section sub-blocks |
| `--space-7` | 40px | Horizontal page padding (desktop) |
| `--space-8` | 48px | Section spacing |
| `--space-9` | 64px | Section vertical padding |
| `--space-10` | 80px | Large section breaks |

### Spacing Rules

- **Component internal padding:** multiples of 4px (prefer 16px or 24px).
- **Between related elements:** 8–16px.
- **Between sections:** 64–80px on desktop, 48px on mobile.
- **Page horizontal padding:** 40px desktop (`--section-padding-x`), 24px mobile.
- **Navbar height:** 72px (`--navbar-height`).

---

## Layout

| Token | Value | Usage |
|-------|-------|-------|
| `--container-max` | 1200px | Max content width for inner sections |
| `--section-padding-x` | 40px | Page side gutters |
| `--section-padding-y` | 64px | Section top/bottom padding |
| `--navbar-height` | 72px | Fixed header offset |

### Breakpoints

| Name | Width | Notes |
|------|-------|-------|
| Mobile | < 640px | Single column, stacked layouts |
| Tablet | 640–900px | Transitional layouts |
| Desktop | > 900px | Full nav, multi-column |

### Layout Rules

- Full-bleed elements (navbar, hero) span 100% viewport width.
- Content sections may use `--container-max` with auto margins for readability.
- Mobile-first: design for small screens, enhance at breakpoints.

---

## Components

### Buttons

**Primary CTA (accent)**
- Background: `--color-accent`
- Text: `--color-primary`, Open Sans 600
- Padding: 12px 24px
- Border-radius: 8px
- Hover: `--color-accent-dark`, subtle lift (`translateY(-1px)`)

**Secondary (outline)**
- Background: transparent
- Border: 1px solid `--color-primary`
- Text: `--color-primary`
- Hover: `--color-primary-light` background

### Links

- Default: `--color-primary`, no underline
- Hover: gold underline (`--color-accent`, 2px) or `--color-primary-dark` text
- Visited: same as default (no purple)

### Navigation

- Background: white with subtle shadow
- Logo: Cormorant, `--text-xl`, primary blue
- Links: Open Sans, `--text-sm`, primary blue, gold underline on hover
- CTA separated by a light vertical divider on desktop

### Icons

- Default color: `--color-primary`
- Hover/highlight: `--color-accent`
- Social icons: 18px inside 36px tap targets

---

## Effects

### Shadows

| Token | Usage |
|-------|-------|
| `--shadow-sm` | Navbar, subtle elevation |
| `--shadow-md` | Cards, dropdowns, hover states |
| `--shadow-lg` | Modals, overlays |

### Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | 4px | Tags, small elements |
| `--radius-md` | 8px | Buttons, inputs, cards |
| `--radius-lg` | 12px | Large cards, images |
| `--radius-full` | 9999px | Avatars, icon buttons |

### Motion

| Token | Value | Usage |
|-------|-------|-------|
| `--transition-fast` | 150ms ease | Color, opacity |
| `--transition-base` | 250ms ease | Transforms, expand/collapse |

- Keep animations subtle and purposeful.
- Respect `prefers-reduced-motion` for accessibility (add when implementing global styles).

---

## Imagery & Media

- Photography: bright, natural light, coastal or creative workspace themes.
- Avoid heavy filters; let gold accents in the UI provide warmth.
- Image border-radius: `--radius-lg` for featured images.
- Always include meaningful `alt` text.

---

## Accessibility

- Minimum tap target: **44×44px** on mobile.
- Color is never the sole indicator of state — pair with underline, icon, or weight change.
- Focus states: 2px outline in `--color-accent` with 2px offset.
- Semantic HTML: `<header>`, `<nav>`, `<main>`, heading hierarchy.
- Form labels always visible; placeholder is not a label.

---

## File Reference

Design tokens live in `src/styles/tokens.css` and are imported globally via `src/index.css`. Use CSS variables in all new components rather than hard-coded values.

```css
.my-component {
  color: var(--color-primary);
  font-family: var(--font-body);
  padding: var(--space-5);
  border-radius: var(--radius-md);
}
```

---

## Do / Don't

| Do | Don't |
|----|-------|
| Use gold for one primary CTA per viewport | Fill sections with gold backgrounds |
| Pair Cormorant headings with Open Sans body | Mix Cormorant into body paragraphs |
| Use the 8px spacing scale | Use random values like 13px or 27px |
| Keep the navbar clean and spacious | Crowd nav with too many items |
| Use `--color-text` for long reading | Use primary blue for paragraphs |
