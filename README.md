# VSolveHub — Quick Service Hub

Public marketing website for VSolveHub, India's all-in-one doorstep services marketplace.

## Quick Start

Open `index.html` in a browser, or serve locally:

```bash
npx serve .
```

Then visit `http://localhost:3000`.

## Pages

| Page | File | Spec |
|------|------|------|
| **W1 Home** | `index.html` | Hero, 9-category grid, How It Works, testimonials carousel, sticky WhatsApp strip, footer + QR |
| **W2 Service Listing** | `services.html?cat={id}` | Breadcrumb, category hero, sub-service cards, enquiry form, WhatsApp FAB |
| **W3 Job Opportunities** | `jobs.html` | Worker registration form with OTP, hiring process, benefits |
| **W4 About Us** | `about.html` | Story, vision, mission, team cards, stats strip |
| **W5 Contact Us** | `contact.html` | Enquiry form, WhatsApp/phone/email strip, responsive map, social links |
| **W6 Gallery** | `gallery.html` | Masonry grid, category filters, lightbox, lazy-load + skeletons |
| **W7 FAQ** | `faq.html` | Category accordions, search filter, contact CTA |
| **Flows** | `flows.html` + `FLOWS.md` | Key user flows reference (Customer, Worker, Admin, Onboarding) |

## Customer Booking Flow (Website)

```
Home → services.html → Booking Form → OTP → confirm.html → track.html
```

Returning users (phone seen before) skip OTP. Demo OTP shown on screen for new users.

Category IDs: `construction`, `technician`, `manpower`, `beautician`, `events`, `rental`, `vehicle`, `accommodation`, `jobs` (222 roles)

## What's Included

- **W1 Home Page** — full-width hero, 4-col/2-col category grid, 3-step How It Works, carousel
- **W2 Service Listing** — one template reused for all 9 categories
- **Lead / enquiry forms** with minimal text entry
- **Newsletter** + **QR code** in footer
- **DESIGN.md** design system (Google Stitch workflow)

## Design

Based on the reference minimalist e-commerce UI:

- Cream background (`#EDE8DF`)
- Black typography
- Neon lime (`#C8FF00`) accent CTAs
- Dark footer with oversized brand wordmark

## Customize

- Update WhatsApp number in `index.html` (`wa.me/919000000000`)
- Edit services in `app.js` (`SERVICES` array)
- Design tokens in `DESIGN.md` and `styles.css` `:root`

## Products (Roadmap)

| Product | Status |
|---------|--------|
| Public Website | This repo |
| Customer Mobile App | Planned |
| Worker / Rider App | Planned |
| Admin Dashboard | Planned |
