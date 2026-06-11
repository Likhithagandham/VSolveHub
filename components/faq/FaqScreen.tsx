'use client';

import { useRouter } from 'next/navigation';
import { FaqSection } from './FaqSection';

export function FaqScreen() {
  const router = useRouter();

  return (
    <div className="faq-page">
      <header className="faq-header">
        <button
          type="button"
          className="faq-back"
          aria-label="Go back"
          onClick={() => router.push('/profile')}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M15 6l-6 6 6 6" />
          </svg>
        </button>
        <div className="faq-header-text">
          <p className="faq-eyebrow">Help &amp; support</p>
          <h1>FAQs</h1>
          <p className="faq-tagline">Answers about booking, workers, payments and more.</p>
        </div>
      </header>
      <main className="faq-main">
        <FaqSection />
      </main>
    </div>
  );
}
