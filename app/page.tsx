import Link from 'next/link';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { CategoryGrid } from '@/components/home/CategoryGrid';
import { TestimonialCarousel } from '@/components/home/TestimonialCarousel';
import { LeadForm } from '@/components/home/LeadForm';
import { WhatsAppStrip } from '@/components/home/WhatsAppStrip';

export default function HomePage() {
  return (
    <div className="page-home">
      <SiteHeader />
      <main>
        <section className="hero-banner" aria-labelledby="hero-heading">
          <div className="hero-banner-media" role="img" aria-label="VSolveHub doorstep services" />
          <div className="hero-banner-content">
            <p className="hero-eyebrow">Quick Service Hub</p>
            <h1 id="hero-heading">Every doorstep service,<br />one trusted app</h1>
            <p className="hero-tagline">From plumbers to bridal makeup — skilled workers at your door across India.</p>
            <Link href="#book" className="btn-hero-cta">Book Now</Link>
          </div>
        </section>

        <section id="categories" className="section category-section" aria-labelledby="categories-heading">
          <div className="section-inner">
            <h2 id="categories-heading" className="section-title">Browse Services</h2>
            <p className="section-subtitle">9 categories — tap to explore sub-services</p>
            <CategoryGrid />
          </div>
        </section>

        <section id="how-it-works" className="section steps-section" aria-labelledby="steps-heading">
          <div className="section-inner">
            <h2 id="steps-heading" className="section-title">How It Works</h2>
            <div className="steps-grid">
              <article className="step-card">
                <div className="step-illustration" aria-hidden="true">
                  <span className="step-number">1</span>
                  <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="2"><rect x="16" y="12" width="48" height="56" rx="4" /><path d="M28 28h24M28 40h16" /></svg>
                </div>
                <h3>Choose a Service</h3>
                <p>Pick from 9 categories — construction, technicians, stays, beauty, events and more.</p>
              </article>
              <article className="step-card">
                <div className="step-illustration" aria-hidden="true">
                  <span className="step-number">2</span>
                  <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="40" cy="32" r="12" /><path d="M20 64c0-12 9-20 20-20s20 8 20 20" /></svg>
                </div>
                <h3>Book in Minutes</h3>
                <p>Share your phone, date and location. No long forms — we call you back fast.</p>
              </article>
              <article className="step-card">
                <div className="step-illustration" aria-hidden="true">
                  <span className="step-number">3</span>
                  <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 40l16 16 32-32" /></svg>
                </div>
                <h3>Worker Arrives</h3>
                <p>Verified skilled worker reaches your doorstep. Track status in the app.</p>
              </article>
            </div>
          </div>
        </section>

        <section id="testimonials" className="section testimonials-section" aria-labelledby="testimonials-heading">
          <div className="section-inner">
            <h2 id="testimonials-heading" className="section-title">What People Say</h2>
            <TestimonialCarousel />
          </div>
        </section>

        <section id="book" className="section lead-section">
          <div className="section-inner">
            <h2 className="section-title">Get Started</h2>
            <p className="lead-hint">Tell us what you need — we&apos;ll call you back within 30 minutes.</p>
            <LeadForm />
          </div>
        </section>
      </main>
      <SiteFooter />
      <WhatsAppStrip />
    </div>
  );
}
