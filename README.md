# VSolveHub — Quick Service Hub

Public marketing website for VSolveHub, India's all-in-one doorstep services marketplace.

Built with **Next.js 15** (App Router), React, and the existing VSolveHub design system.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Production build:

```bash
npm run build
npm start
```

## Routes

| Page | Route |
|------|-------|
| Home | `/` |
| Category listing | `/services/[cat]` |
| Service detail + booking | `/services/[cat]/[id]` |
| About | `/about` |
| Contact | `/contact` |
| Gallery | `/gallery` |
| FAQ | `/faq` |
| Jobs (worker registration) | `/jobs` |
| Booking OTP | `/booking/otp` |
| Booking confirm | `/booking/confirm` |
| Track booking | `/booking/track` |

Category IDs: `construction`, `technician`, `manpower`, `beautician`, `events`, `rental`, `vehicle`, `accommodation`, `jobs`

## Project structure

```
app/              Next.js pages & layouts
components/       React UI (header, forms, listings, booking)
lib/data.ts       Categories, catalogs, services, FAQ, booking helpers
app/globals.css   Design system (from DESIGN.md)
legacy/           Original static HTML/JS site (archived)
```

## Customer booking flow

```
Home → /services/[cat] → /services/[cat]/[id] → /booking/otp → /booking/confirm → /booking/track
```

Returning users (phone seen before) skip OTP.

## Design

See `DESIGN.md` for tokens (cream, lime, Syne + DM Sans).
