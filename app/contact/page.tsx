import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { ContactForm } from '@/components/contact/ContactForm';
import {
  CONTACT_ADDRESS,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  getWhatsAppUrl,
  MAPS_EMBED_URL,
} from '@/lib/data';

export const metadata = { title: 'Contact Us — VSolveHub' };

export default function ContactPage() {
  const waUrl = getWhatsAppUrl('Hi VSolveHub, I have an enquiry');

  return (
    <div className="page-contact">
      <SiteHeader bookHref="#enquiry" bookLabel="Enquire" />
      <main>
        <section className="page-hero page-hero--contact" aria-labelledby="contact-heading">
          <div className="page-hero-content section-inner">
            <p className="hero-eyebrow">Get in Touch</p>
            <h1 id="contact-heading">Contact Us</h1>
            <p className="hero-tagline">Questions about booking, partnerships or support — we&apos;re here to help.</p>
          </div>
        </section>
        <section className="contact-strip" aria-label="Contact channels">
          <div className="contact-strip-inner section-inner">
            <a href={waUrl} className="contact-strip-item" target="_blank" rel="noopener noreferrer">
              <span className="contact-strip-icon" aria-hidden="true">💬</span>
              <span className="contact-strip-label">WhatsApp</span>
              <span className="contact-strip-value">Chat now</span>
            </a>
            <a href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`} className="contact-strip-item">
              <span className="contact-strip-icon" aria-hidden="true">📞</span>
              <span className="contact-strip-label">Phone</span>
              <span className="contact-strip-value">{CONTACT_PHONE}</span>
            </a>
            <a href={`mailto:${CONTACT_EMAIL}`} className="contact-strip-item">
              <span className="contact-strip-icon" aria-hidden="true">✉</span>
              <span className="contact-strip-label">Email</span>
              <span className="contact-strip-value">{CONTACT_EMAIL}</span>
            </a>
          </div>
        </section>
        <div className="contact-layout section-inner">
          <section id="enquiry" className="section contact-form-section">
            <h2 className="section-title">Send an Enquiry</h2>
            <p className="lead-hint">We&apos;ll respond within one business day.</p>
            <ContactForm />
          </section>
          <aside className="contact-aside">
            <section className="map-section" aria-labelledby="map-heading">
              <h2 id="map-heading" className="section-title">Find Us</h2>
              <p className="map-address">{CONTACT_ADDRESS}</p>
              <div className="map-embed-wrap">
                <iframe title="VSolveHub office location on Google Maps" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src={MAPS_EMBED_URL} allowFullScreen />
              </div>
            </section>
          </aside>
        </div>
      </main>
      <SiteFooter whatsappMessage="Hi VSolveHub, I have an enquiry" />
    </div>
  );
}
