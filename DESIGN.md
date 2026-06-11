# VSolveHub Design System

> Quick Service Hub — public website design tokens derived from reference UI.

## Brand

- **Product name:** VSolveHub
- **Tagline:** Quick Service Hub
- **Audience:** First-time smartphone users in Tier 2/3 Indian cities

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `bg-cream` | `#FFF1F0` | Page background |
| `bg-card` | `#F9C5C3` | Service card image placeholder |
| `text-primary` | `#1A0A0A` | Headings, body, icons |
| `accent` | `#FD4C4A` | CTAs, inputs, action buttons |
| `accent-light` | `#FFE8E7` | Subtle highlights, skeletons |
| `accent-mid` | `#F57E7C` | Gradients, secondary surfaces |
| `accent-dark` | `#8B2E2C` | Hover states, page heroes |
| `footer-dark` | `#3A1514` | Footer background |
| `text-inverse` | `#FFFFFF` | Text on accent/dark surfaces |
| `whatsapp` | `#25D366` | Floating WhatsApp button |

## Typography

- **All UI:** Roboto (400 body, 500 labels, 700 headings) — Google Stitch mobile style
- **Case:** Sentence case (no forced uppercase)
- **Footer wordmark:** Roboto 700, oversized watermark

### Scale

- Hero title: `clamp(1.35rem, 5vw, 1.75rem)`
- Section title: `1.15rem` / weight 700
- Card title: `0.95rem` / weight 700
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

- Corner radius: `12px`
- Shadow: `0 2px 12px rgba(0,0,0,0.08)`
- Internal padding: `16px`
- Image aspect ratio: `1:1`

### Mobile shell

- Bottom nav: 64px fixed (Home, Services, Bookings, Profile)
- Sticky header with location pill on home
- Horizontal category chips with scroll
- Single-column layouts below 768px

### Filter Pills

- Height: `48px` (mobile), `40px` (desktop)
- Border radius: `999px`
- Active state: filled black, white text
- Inactive: transparent with `1px` black border

### Primary CTA

- Full-width on mobile forms
- Background: `accent`
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
