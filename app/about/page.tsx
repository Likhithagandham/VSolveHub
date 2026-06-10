import Link from 'next/link';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';

export const metadata = { title: 'About Us — VSolveHub' };

const TEAM = [
  { initials: 'RK', name: 'Rajesh Kumar', role: 'Founder & CEO' },
  { initials: 'SP', name: 'Sunita Patel', role: 'Head of Operations' },
  { initials: 'AM', name: 'Arun Mehta', role: 'Technology Lead' },
  { initials: 'DL', name: 'Deepa Lakshmi', role: 'Worker Partnerships' },
];

export default function AboutPage() {
  return (
    <div className="page-about">
      <SiteHeader />
      <main>
        <section className="page-hero page-hero--about" aria-labelledby="about-heading">
          <div className="page-hero-content section-inner">
            <p className="hero-eyebrow">Our Story</p>
            <h1 id="about-heading">About VSolveHub</h1>
            <p className="hero-tagline">Building India&apos;s most trusted doorstep services network — one city, one worker at a time.</p>
          </div>
        </section>
        <section className="stats-strip" aria-label="Platform statistics">
          <div className="stats-inner section-inner">
            <div className="stat-item"><span className="stat-value">24+</span><span className="stat-label">Cities</span></div>
            <div className="stat-item"><span className="stat-value">5,000+</span><span className="stat-label">Workers</span></div>
            <div className="stat-item"><span className="stat-value">50,000+</span><span className="stat-label">Bookings</span></div>
          </div>
        </section>
        <section className="section story-section">
          <div className="section-inner story-grid">
            <article className="story-block">
              <h2 className="section-title">Our Story</h2>
              <p>VSolveHub started with a simple idea: finding a reliable plumber, electrician, or beautician shouldn&apos;t require asking ten neighbours. We built a platform that connects customers in Tier 2 and Tier 3 cities with verified skilled workers — at their doorstep, on their schedule.</p>
            </article>
            <article className="story-block">
              <h2 className="section-title">Vision</h2>
              <p>To become India&apos;s most accessible super-app for doorstep services — where every household and every skilled worker benefits from technology that is simple, fair, and local.</p>
            </article>
            <article className="story-block">
              <h2 className="section-title">Mission</h2>
              <p>Empower workers with steady income and dignified work. Give customers fast, trustworthy service booking with large touch targets, minimal forms, and support in their language.</p>
            </article>
          </div>
        </section>
        <section className="section team-section" aria-labelledby="team-heading">
          <div className="section-inner">
            <h2 id="team-heading" className="section-title">Our Team</h2>
            <p className="section-subtitle">The people building Quick Service Hub</p>
            <div className="team-grid">
              {TEAM.map((m) => (
                <article key={m.name} className="team-card">
                  <div className="team-avatar" aria-hidden="true">{m.initials}</div>
                  <h3>{m.name}</h3>
                  <p className="team-role">{m.role}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="section cta-section">
          <div className="section-inner cta-inner">
            <h2 className="section-title">Ready to get started?</h2>
            <p>Book a service as a customer, or register as a worker to start earning.</p>
            <div className="cta-buttons">
              <Link href="/#book" className="btn-hero-cta">Book a Service</Link>
              <Link href="/jobs" className="btn-secondary btn-secondary--dark">Join as Worker</Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter whatsappMessage="Hi VSolveHub, I have a question about your services" />
    </div>
  );
}
