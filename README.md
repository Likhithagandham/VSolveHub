VSolveHub — Quick Service Hub

VSolveHub is a public marketing and booking website for an India-focused doorstep services marketplace. Customers browse nine service categories, open individual service pages, and submit enquiries. Workers can register for job opportunities. The UI is designed for first-time smartphone users in Tier 2 and Tier 3 cities — large touch targets, minimal forms, and a calm cream-and-lime visual language.

This repository contains the customer-facing website only. Worker app, customer app, and admin dashboard flows are documented in FLOWS.md as product reference; they are not implemented here.



Table of contents





Features



Tech stack



Getting started



Available scripts



Pages and routes



Service categories



Booking flow



Project structure



Data layer



Design system



Deployment



Legacy static site



Related docs



Features





Home page — hero, 9-category grid, how-it-works steps, testimonial carousel, lead callback form, sticky WhatsApp strip



Category listings — sub-category filter tabs, grouped service sections, breadcrumb navigation



Service detail pages — per-service description, pricing, and dedicated booking form



Booking journey — phone OTP (demo), confirmation summary, status timeline (client-side session storage)



Worker registration — skill-based signup with OTP verification on /jobs



Content pages — About, Contact (with map), Gallery (filters + lightbox), FAQ (searchable accordions)



Responsive layout — mobile menu, WhatsApp FAB, newsletter footer with app QR placeholder



1,000+ catalogued services — structured data with sub-categories across all verticals



Tech stack







Layer



Choice





Framework



Next.js 15 (App Router)





UI



React 19





Language



TypeScript





Styling



Global CSS design system (app/globals.css)





Fonts



Syne + DM Sans via next/font





Package manager



pnpm 11.x





Persistence (demo)



sessionStorage / localStorage for bookings and returning users

No external database or API is wired yet — forms and OTP are front-end demos suitable for prototyping and demos.



Getting started

Prerequisites





Node.js 20 or later (22+ recommended with pnpm 11)



pnpm 11.x — install and activate via Corepack:

corepack enable
corepack prepare pnpm@11.2.2 --activate

Install and run

git clone https://github.com/Likhithagandham/VSolveHub.git
cd VSolveHub
pnpm install
pnpm dev

Open http://localhost:3000 in your browser.



Connection refused? The site only runs when the dev server is active. Start it with pnpm dev before opening the URL.

Production build

pnpm build
pnpm start

Serves the optimized build on port 3000 by default.



Available scripts







Command



Description





pnpm dev



Start the Next.js development server with hot reload





pnpm build



Create an optimized production build





pnpm start



Serve the production build locally





pnpm lint



Run the Next.js ESLint integration



Pages and routes







Page



Route



Description





Home



/



Category grid, testimonials, lead form





Category listing



/services/[cat]



Filterable sub-services for one category





Service detail



/services/[cat]/[id]



Service info + booking form





About



/about



Story, vision, mission, team, stats





Contact



/contact



Enquiry form, phone/email/WhatsApp strip, map





Gallery



/gallery



Masonry grid with category filters and lightbox





FAQ



/faq



Searchable accordion by topic





Jobs



/jobs



Worker registration with OTP





Booking OTP



/booking/otp



Phone verification for new customers





Booking confirm



/booking/confirm



Booking reference and summary





Track booking



/booking/track



Status timeline

Example URLs

http://localhost:3000/
http://localhost:3000/services/technician
http://localhost:3000/services/accommodation/7001
http://localhost:3000/jobs
http://localhost:3000/booking/otp

Category pages are statically generated at build time. Service detail pages are rendered on demand.



Service categories

Nine top-level categories, each with sub-categories and individual bookable services defined in lib/data.ts.







ID



Name



Services





construction



Construction Labour



85





technician



Technician Services



176





manpower



Manpower & Support



54





beautician



Beautician & Wedding



98





events



Events & Media



109





rental



Equipment Rental



101





vehicle



Vehicle Services



133





accommodation



Rooms / PG / Hostel



94





jobs



Job Opportunities



222

Total: 1,072 catalogued services.

Service IDs are assigned by range: construction 1001+, technician 2001+, beautician 3001+, events 4001+, rental 5001+, vehicle 6001+, accommodation 7001+, jobs 8001+, manpower 9001+.



Booking flow

Home
  → /services/[cat]           Browse and filter services
  → /services/[cat]/[id]      View service + submit booking form
  → /booking/otp              Verify phone (new users only)
  → /booking/confirm          Booking reference + summary
  → /booking/track            Status timeline

Returning users — if the phone number exists in localStorage (vsh_users), OTP is skipped and the user goes straight to confirmation.

Booking state — stored in sessionStorage under vsh_booking until the session ends.

Status progression: Pending → Confirmed → In Progress → Completed

Demo OTP — a six-digit code is displayed on screen for testing; no SMS is sent.



Project structure

VSolveHub/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout, fonts, metadata
│   ├── page.tsx                  # Home
│   ├── globals.css               # Full design system
│   ├── about/
│   ├── contact/
│   ├── faq/
│   ├── gallery/
│   ├── jobs/
│   ├── booking/                  # OTP, confirm, track (+ shared layout)
│   └── services/
│       └── [cat]/
│           ├── page.tsx          # Category listing
│           └── [id]/page.tsx     # Service detail + booking
├── components/
│   ├── layout/                   # Header, footer, mobile menu, WhatsApp FAB
│   ├── home/                     # Category grid, carousel, lead form
│   ├── services/                 # Service listing, booking form
│   ├── booking/                  # OTP, summary, timeline
│   ├── contact/                  # Contact enquiry form
│   ├── gallery/                  # Masonry grid + lightbox
│   ├── faq/                      # Search + accordions
│   ├── jobs/                     # Worker registration
│   └── ui/                       # Shared icon renderer
├── lib/
│   └── data.ts                   # Catalogs, services, FAQ, booking helpers
├── legacy/                       # Archived pre-Next.js static site
├── DESIGN.md                     # Design tokens and component spec
├── FLOWS.md                      # Product flows (customer, worker, admin)
├── pnpm-workspace.yaml           # pnpm config (allowBuilds for sharp)
├── package.json
└── tsconfig.json



Data layer

All service data lives in lib/data.ts, migrated from the original data.js spreadsheet catalogs.

Key exports:





CATEGORIES — nine category definitions



SERVICES — flat array of all bookable services (~1,072 items)



getCategory, getServiceById, getServicesByCategory, getSubCategories



FAQ_DATA, GALLERY_ITEMS, TESTIMONIALS



saveBooking, getBooking, isReturningUser, markUserRegistered



getWhatsAppUrl, contact constants

Service object shape:

{
  id: number;
  name: string;
  subCategory: string;
  price: string;
  description: string;
  category: string;
  icon: string;
}

To add or edit services, update the relevant *_CATALOG array in lib/data.ts and rebuild.



Design system

Visual design follows DESIGN.md — a minimalist e-commerce-inspired system:







Token



Value



Usage





bg-cream



#EDE8DF



Page background





accent-lime



#C8FF00



CTAs, action buttons





text-primary



#0A0A0A



Body and headings





footer-dark



#141414



Footer background





Typography: Syne (display, uppercase headings) + DM Sans (body)



Touch targets: minimum 48×48px



Spacing: 8px base grid



Components: category cards, sub-service cards, filter pills, enquiry forms, booking timeline



Deployment

The app is a standard Next.js project and deploys to any platform that supports Node.js:

Vercel (recommended)

pnpm build
# Connect the GitHub repo in Vercel — framework preset: Next.js

Node server

pnpm build
pnpm start

Set the start command to pnpm start and the build command to pnpm install && pnpm build. Ensure pnpm is available in the build environment (Corepack or global install).

No environment variables are required for the current demo. When connecting a real backend, you will likely need API URLs and WhatsApp/contact configuration.



Legacy static site

The original HTML + vanilla JS implementation is preserved in legacy/ for reference. It is not served by Next.js. All active routes use the App Router paths documented above.



Related docs







File



Contents





[DESIGN.md](./DESIGN.md)



Color tokens, typography, spacing, component rules





[FLOWS.md](./FLOWS.md)



Customer, worker, admin, and onboarding flows





[.cursor/rules/git-commits.mdc](./.cursor/rules/git-commits.mdc)



Git commit conventions for this repo



License

Private project. All rights reserved © 2026 VSolveHub.
