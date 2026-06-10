'use client';

import Link from 'next/link';
import { FormEvent } from 'react';
import { getWhatsAppUrl } from '@/lib/data';

type SiteFooterProps = {
  whatsappMessage?: string;
};

export function SiteFooter({ whatsappMessage = 'Hi VSolveHub, I need help with a service' }: SiteFooterProps) {
  const waUrl = getWhatsAppUrl(whatsappMessage);

  function onNewsletter(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert('Thanks for subscribing to VSolveHub updates!');
    e.currentTarget.reset();
  }

  return (
    <footer className="site-footer" id="contact">
      <div className="footer-inner">
        <div className="newsletter">
          <h2>Sign up to our newsletter</h2>
          <form className="newsletter-form" onSubmit={onNewsletter}>
            <label htmlFor="newsletter-email" className="visually-hidden">Your email</label>
            <input type="email" id="newsletter-email" placeholder="Your email" required />
            <button type="submit" aria-label="Subscribe">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M7 17L17 7M17 7H9M17 7v8" />
              </svg>
            </button>
          </form>
        </div>
        <div className="footer-grid">
          <div className="footer-links">
            <div className="footer-col">
              <Link href="/">Home</Link>
              <Link href="/faq">FAQ</Link>
              <Link href="/contact">Contact</Link>
            </div>
            <div className="footer-col">
              <Link href="/gallery">Gallery</Link>
              <Link href="/about">About</Link>
              <Link href="/jobs">Jobs</Link>
            </div>
            <div className="footer-col footer-social">
              <a href="#" rel="noopener">Facebook</a>
              <a href="#" rel="noopener">Instagram</a>
              <a href={waUrl} rel="noopener noreferrer" target="_blank">WhatsApp</a>
            </div>
          </div>
          <div className="footer-qr">
            <div className="qr-placeholder" aria-label="QR code to download VSolveHub app">
              <svg viewBox="0 0 100 100" aria-hidden="true">
                <rect width="100" height="100" fill="#fff" />
                <rect x="8" y="8" width="28" height="28" fill="#0A0A0A" />
                <rect x="64" y="8" width="28" height="28" fill="#0A0A0A" />
                <rect x="8" y="64" width="28" height="28" fill="#0A0A0A" />
                <rect x="14" y="14" width="16" height="16" fill="#fff" />
                <rect x="70" y="14" width="16" height="16" fill="#fff" />
                <rect x="14" y="70" width="16" height="16" fill="#fff" />
                <rect x="44" y="44" width="12" height="12" fill="#0A0A0A" />
              </svg>
            </div>
            <p className="qr-label">Scan to download<br />Customer App</p>
          </div>
        </div>
        <div className="footer-legal">
          <span>© 2026 VSolveHub. All rights reserved.</span>
        </div>
      </div>
      <div className="footer-wordmark" aria-hidden="true">VSolveHub</div>
    </footer>
  );
}
