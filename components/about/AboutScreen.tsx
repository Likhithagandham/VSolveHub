'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

const STATS = [
  { value: '24+', label: 'Cities' },
  { value: '5,000+', label: 'Workers' },
  { value: '50K+', label: 'Bookings' },
];

const PILLARS = [
  {
    id: 'story',
    title: 'Our story',
    text: "VSolveHub started with a simple idea: finding a reliable plumber, electrician, or beautician shouldn't mean asking ten neighbours. We connect Tier 2 and Tier 3 cities with verified pros at your doorstep.",
    emoji: '🏠',
  },
  {
    id: 'vision',
    title: 'Vision',
    text: "India's most accessible super-app for doorstep services — where every household and every skilled worker benefits from technology that is simple, fair, and local.",
    emoji: '🎯',
  },
  {
    id: 'mission',
    title: 'Mission',
    text: 'Empower workers with steady income and dignified work. Give customers fast, trustworthy booking with large touch targets, minimal forms, and support in their language.',
    emoji: '🤝',
  },
];

const TEAM = [
  { initials: 'RK', name: 'Rajesh Kumar', role: 'Founder & CEO' },
  { initials: 'SP', name: 'Sunita Patel', role: 'Head of Operations' },
  { initials: 'AM', name: 'Arun Mehta', role: 'Technology Lead' },
  { initials: 'DL', name: 'Deepa Lakshmi', role: 'Worker Partnerships' },
];

const TRUST = [
  'Verified professionals',
  'Doorstep service',
  'Call-back in 30 mins',
  '8 service categories',
];

export function AboutScreen() {
  const router = useRouter();

  return (
    <div className="about-page">
      <header className="about-header">
        <button
          type="button"
          className="about-back"
          aria-label="Go back"
          onClick={() => router.push('/profile')}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M15 6l-6 6 6 6" />
          </svg>
        </button>
        <div className="about-header-text">
          <p className="about-eyebrow">Quick Service Hub</p>
          <h1>About VSolveHub</h1>
          <p className="about-tagline">
            Building India&apos;s most trusted doorstep services network — one city, one worker at a time.
          </p>
        </div>
      </header>

      <main className="about-main">
        <section className="about-stats" aria-label="Platform statistics">
          {STATS.map((s) => (
            <div key={s.label} className="about-stat-card">
              <span className="about-stat-value">{s.value}</span>
              <span className="about-stat-label">{s.label}</span>
            </div>
          ))}
        </section>

        <section className="about-trust" aria-label="Why VSolveHub">
          {TRUST.map((item) => (
            <span key={item} className="about-trust-pill">{item}</span>
          ))}
        </section>

        <section className="about-pillars" aria-label="Our story, vision and mission">
          {PILLARS.map((p) => (
            <article key={p.id} className="about-card">
              <span className="about-card-icon" aria-hidden="true">{p.emoji}</span>
              <h2>{p.title}</h2>
              <p>{p.text}</p>
            </article>
          ))}
        </section>

        <section className="about-team-section" aria-labelledby="about-team-heading">
          <h2 id="about-team-heading" className="about-section-title">Our team</h2>
          <p className="about-section-sub">The people building Quick Service Hub</p>
          <div className="about-team-grid">
            {TEAM.map((m) => (
              <article key={m.name} className="about-team-card">
                <span className="about-team-avatar" aria-hidden="true">{m.initials}</span>
                <h3>{m.name}</h3>
                <p>{m.role}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="about-cta" aria-label="Get started">
          <h2>Ready to get started?</h2>
          <p>Book a doorstep service in minutes — we&apos;ll call you back fast.</p>
          <div className="about-cta-actions">
            <Link href="/" className="btn-primary">Book a service</Link>
            <Link href="/contact" className="btn-secondary">Contact us</Link>
          </div>
        </section>
      </main>
    </div>
  );
}
