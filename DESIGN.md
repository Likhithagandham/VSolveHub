# VSolveHub Design System

> Quick Service Hub — public website design tokens derived from reference UI.

## Brand

- **Product name:** VSolveHub
- **Tagline:** Quick Service Hub
- **Audience:** First-time smartphone users in Tier 2/3 Indian cities

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `bg-cream` | `#EDE8DF` | Page background |
| `bg-card` | `#D4D0C8` | Service card image placeholder |
| `text-primary` | `#0A0A0A` | Headings, body, icons |
| `accent-lime` | `#C8FF00` | CTAs, inputs, action buttons |
| `footer-dark` | `#141414` | Footer background |
| `text-inverse` | `#FFFFFF` | Footer text |
| `whatsapp` | `#25D366` | Floating WhatsApp button |

## Typography

- **Display / Headings:** Syne (700–800), uppercase, tight tracking
- **Body / UI:** DM Sans (400–500)
- **Footer wordmark:** Syne Italic 800, oversized

### Scale

- Hero title: `clamp(3rem, 8vw, 6rem)`
- Section label: `0.75rem` uppercase, letter-spacing `0.12em`
- Card title: `0.875rem` uppercase
- Body: `1rem` / line-height `1.5`

## Spacing Grid

Base unit: **8px**

- `xs`: 8px
- `sm`: 16px
- `md`: 24px
- `lg`: 32px
- `xl`: 48px
- `2xl`: 64px

## Components

### Touch Targets

Minimum **48×48px** for all interactive elements.

### Cards

- Corner radius: `4px`
- Internal padding: `16px`
- Image aspect ratio: `1:1`

### Filter Pills

- Height: `48px` (mobile), `40px` (desktop)
- Border radius: `999px`
- Active state: filled black, white text
- Inactive: transparent with `1px` black border

### Primary CTA

- Full-width on mobile forms
- Background: `accent-lime`
- Min height: `52px`

### Status Indicators

- Pending: amber
- Confirmed: blue
- In Progress: purple
- Completed: green
- Cancelled: red

## Layout

- Max content width: `1280px`
- Desktop grid: 3 columns
- Mobile: single column list
- WhatsApp button: fixed bottom-right, `56×56px`

## Language Readiness

- Use `min-width` on buttons, not fixed widths
- Allow text wrap on labels
- Reserve 30% extra horizontal space for Telugu/Hindi strings
