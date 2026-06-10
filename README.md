# VSolveHub ΓÇö Quick Service Hub

**VSolveHub** is a public marketing and booking website for an India-focused doorstep services marketplace. Customers browse nine service categories, open individual service pages, and submit enquiries. Workers can register for job opportunities. The UI is designed for first-time smartphone users in Tier 2 and Tier 3 cities ΓÇö large touch targets, minimal forms, and a calm cream-and-lime visual language.

This repository contains the **customer-facing website** only. Worker app, customer app, and admin dashboard flows are documented in `FLOWS.md` as product reference; they are not implemented here.

---

## Table of contents

- [Features](#features)
- [Tech stack](#tech-stack)
- [Getting started](#getting-started)
- [Available scripts](#available-scripts)
- [Pages and routes](#pages-and-routes)
- [Service categories](#service-categories)
- [Booking flow](#booking-flow)
- [Project structure](#project-structure)
- [Data layer](#data-layer)
- [Design system](#design-system)
- [Deployment](#deployment)
- [Legacy static site](#legacy-static-site)
- [Related docs](#related-docs)

---

## Features

- **Home page** ΓÇö hero, 9-category grid, how-it-works steps, testimonial carousel, lead callback form, sticky WhatsApp strip
- **Category listings** ΓÇö sub-category filter tabs, grouped service sections, breadcrumb navigation
- **Service detail pages** ΓÇö per-service description, pricing, and dedicated booking form
- **Booking journey** ΓÇö phone OTP (demo), confirmation summary, status timeline (client-side session storage)
- **Worker registration** ΓÇö skill-based signup with OTP verification on `/jobs`
- **Content pages** ΓÇö About, Contact (with map), Gallery (filters + lightbox), FAQ (searchable accordions)
- **Responsive layout** ΓÇö mobile menu, WhatsApp FAB, newsletter footer with app QR placeholder
- **1,000+ catalogued services** ΓÇö structured data with sub-categories across all verticals

---

## Tech stack

| Layer | Choice |
|-------|--------|
| Framework | [Next.js 15](https://nextjs.org/) (App Router) |
| UI | [React 19](https://react.dev/) |
| Language | TypeScript |
| Styling | Global CSS design system (`app/globals.css`) |
| Fonts | [Syne](https://fonts.google.com/specimen/Syne) + [DM Sans](https://fonts.google.com/specimen/DM+Sans) via `next/font` |
| Package manager | [pnpm](https://pnpm.io/) 11.x |
| Persistence (demo) | `sessionStorage` / `localStorage` for bookings and returning users |

No external database or API is wired yet ΓÇö forms and OTP are front-end demos suitable for prototyping and demos.

---

## Getting started

### Prerequisites

- **Node.js** 20 or later (22+ recommended with pnpm 11)
- **pnpm** 11.x ΓÇö install and activate via Corepack:

```bash
corepack enable
corepack prepare pnpm@11.2.2 --activate
```

### Install and run

```bash
git clone https://github.com/Likhithagandham/VSolveHub.git
cd VSolveHub
pnpm install
pnpm dev
```

Open **http://localhost:3000** in your browser.

> **Connection refused?** The site only runs when the dev server is active. Start it with `pnpm dev` before opening the URL.

### Production build

```bash
pnpm build
pnpm start
```

Serves the optimized build on port 3000 by default.

---

## Available scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start the Next.js development server with hot reload |
| `pnpm build` | Create an optimized production build |
| `pnpm start` | Serve the production build locally |
| `pnpm lint` | Run the Next.js ESLint integration |

---

## Pages and routes

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Category grid, testimonials, lead form |
| Category listing | `/services/[cat]` | Filterable sub-services for one category |
| Service detail | `/services/[cat]/[id]` | Service info + booking form |
| About | `/about` | Story, vision, mission, team, stats |
| Contact | `/contact` | Enquiry form, phone/email/WhatsApp strip, map |
| Gallery | `/gallery` | Masonry grid with category filters and lightbox |
| FAQ | `/faq` | Searchable accordion by topic |
| Jobs | `/jobs` | Worker registration with OTP |
| Booking OTP | `/booking/otp` | Phone verification for new customers |
| Booking confirm | `/booking/confirm` | Booking reference and summary |
| Track booking | `/booking/track` | Status timeline |

### Example URLs

```
http://localhost:3000/
http://localhost:3000/services/technician
http://localhost:3000/services/accommodation/7001
http://localhost:3000/jobs
http://localhost:3000/booking/otp
```

Category pages are statically generated at build time. Service detail pages are rendered on demand.

---

## Service categories

Nine top-level categories, each with sub-categories and individual bookable services defined in `lib/data.ts`.

| ID | Name | Services |
|----|------|----------|
| `construction` | Construction Labour | 85 |
| `technician` | Technician Services | 176 |
| `manpower` | Manpower & Support | 54 |
| `beautician` | Beautician & Wedding | 98 |
| `events` | Events & Media | 109 |
| `rental` | Equipment Rental | 101 |
| `vehicle` | Vehicle Services | 133 |
| `accommodation` | Rooms / PG / Hostel | 94 |
| `jobs` | Job Opportunities | 222 |

**Total:** 1,072 catalogued services.

Service IDs are assigned by range: construction `1001+`, technician `2001+`, beautician `3001+`, events `4001+`, rental `5001+`, vehicle `6001+`, accommodation `7001+`, jobs `8001+`, manpower `9001+`.

---

## Booking flow

```
Home
  ΓåÆ /services/[cat]           Browse and filter services
  ΓåÆ /services/[cat]/[id]      View service + submit booking form
  ΓåÆ /booking/otp              Verify phone (new users only)
  ΓåÆ /booking/confirm          Booking reference + summary
  ΓåÆ /booking/track            Status timeline
```

**Returning users** ΓÇö if the phone number exists in `localStorage` (`vsh_users`), OTP is skipped and the user goes straight to confirmation.

**Booking state** ΓÇö stored in `sessionStorage` under `vsh_booking` until the session ends.

**Status progression:** Pending ΓåÆ Confirmed ΓåÆ In Progress ΓåÆ Completed

**Demo OTP** ΓÇö a six-digit code is displayed on screen for testing; no SMS is sent.

---

## Project structure

```
VSolveHub/
Γö£ΓöÇΓöÇ app/                          # Next.js App Router
Γöé   Γö£ΓöÇΓöÇ layout.tsx                # Root layout, fonts, metadata
Γöé   Γö£ΓöÇΓöÇ page.tsx                  # Home
Γöé   Γö£ΓöÇΓöÇ globals.css               # Full design system
Γöé   Γö£ΓöÇΓöÇ about/
Γöé   Γö£ΓöÇΓöÇ contact/
Γöé   Γö£ΓöÇΓöÇ faq/
Γöé   Γö£ΓöÇΓöÇ gallery/
Γöé   Γö£ΓöÇΓöÇ jobs/
Γöé   Γö£ΓöÇΓöÇ booking/                  # OTP, confirm, track (+ shared layout)
Γöé   ΓööΓöÇΓöÇ services/
Γöé       ΓööΓöÇΓöÇ [cat]/
Γöé           Γö£ΓöÇΓöÇ page.tsx          # Category listing
Γöé           ΓööΓöÇΓöÇ [id]/page.tsx     # Service detail + booking
Γö£ΓöÇΓöÇ components/
Γöé   Γö£ΓöÇΓöÇ layout/                   # Header, footer, mobile menu, WhatsApp FAB
Γöé   Γö£ΓöÇΓöÇ home/                     # Category grid, carousel, lead form
Γöé   Γö£ΓöÇΓöÇ services/                 # Service listing, booking form
Γöé   Γö£ΓöÇΓöÇ booking/                  # OTP, summary, timeline
Γöé   Γö£ΓöÇΓöÇ contact/                  # Contact enquiry form
Γöé   Γö£ΓöÇΓöÇ gallery/                  # Masonry grid + lightbox
Γöé   Γö£ΓöÇΓöÇ faq/                      # Search + accordions
Γöé   Γö£ΓöÇΓöÇ jobs/                     # Worker registration
Γöé   ΓööΓöÇΓöÇ ui/                       # Shared icon renderer
Γö£ΓöÇΓöÇ lib/
Γöé   ΓööΓöÇΓöÇ data.ts                   # Catalogs, services, FAQ, booking helpers
Γö£ΓöÇΓöÇ legacy/                       # Archived pre-Next.js static site
Γö£ΓöÇΓöÇ DESIGN.md                     # Design tokens and component spec
Γö£ΓöÇΓöÇ FLOWS.md                      # Product flows (customer, worker, admin)
Γö£ΓöÇΓöÇ pnpm-workspace.yaml           # pnpm config (allowBuilds for sharp)
Γö£ΓöÇΓöÇ package.json
ΓööΓöÇΓöÇ tsconfig.json
```

---

## Data layer

All service data lives in **`lib/data.ts`**, migrated from the original `data.js` spreadsheet catalogs.

**Key exports:**

- `CATEGORIES` ΓÇö nine category definitions
- `SERVICES` ΓÇö flat array of all bookable services (~1,072 items)
- `getCategory`, `getServiceById`, `getServicesByCategory`, `getSubCategories`
- `FAQ_DATA`, `GALLERY_ITEMS`, `TESTIMONIALS`
- `saveBooking`, `getBooking`, `isReturningUser`, `markUserRegistered`
- `getWhatsAppUrl`, contact constants

**Service object shape:**

```ts
{
  id: number;
  name: string;
  subCategory: string;
  price: string;
  description: string;
  category: string;
  icon: string;
}
```

To add or edit services, update the relevant `*_CATALOG` array in `lib/data.ts` and rebuild.

---

## Design system

Visual design follows **`DESIGN.md`** ΓÇö a minimalist e-commerce-inspired system:

| Token | Value | Usage |
|-------|-------|-------|
| `bg-cream` | `#EDE8DF` | Page background |
| `accent-lime` | `#C8FF00` | CTAs, action buttons |
| `text-primary` | `#0A0A0A` | Body and headings |
| `footer-dark` | `#141414` | Footer background |

- **Typography:** Syne (display, uppercase headings) + DM Sans (body)
- **Touch targets:** minimum 48├ù48px
- **Spacing:** 8px base grid
- **Components:** category cards, sub-service cards, filter pills, enquiry forms, booking timeline

---

## Deployment

The app is a standard Next.js project and deploys to any platform that supports Node.js:

**Vercel (recommended)**

```bash
pnpm build
# Connect the GitHub repo in Vercel ΓÇö framework preset: Next.js
```

**Node server**

```bash
pnpm build
pnpm start
```

Set the start command to `pnpm start` and the build command to `pnpm install && pnpm build`. Ensure **pnpm** is available in the build environment (Corepack or global install).

No environment variables are required for the current demo. When connecting a real backend, you will likely need API URLs and WhatsApp/contact configuration.

---

## Legacy static site

The original HTML + vanilla JS implementation is preserved in **`legacy/`** for reference. It is not served by Next.js. All active routes use the App Router paths documented above.

---

## Related docs

| File | Contents |
|------|----------|
| [`DESIGN.md`](./DESIGN.md) | Color tokens, typography, spacing, component rules |
| [`FLOWS.md`](./FLOWS.md) | Customer, worker, admin, and onboarding flows |
| [`.cursor/rules/git-commits.mdc`](./.cursor/rules/git-commits.mdc) | Git commit conventions for this repo |

---

## License

Private project. All rights reserved ┬⌐ 2026 VSolveHub.
