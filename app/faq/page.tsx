import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { FaqSection } from '@/components/faq/FaqSection';

export const metadata = { title: 'FAQ — VSolveHub' };

export default function FaqPage() {
  return (
    <div className="page-faq">
      <SiteHeader />
      <main>
        <section className="page-hero page-hero--faq" aria-labelledby="faq-heading">
          <div className="page-hero-content section-inner">
            <p className="hero-eyebrow">Help Center</p>
            <h1 id="faq-heading">Frequently Asked Questions</h1>
            <p className="hero-tagline">Answers about booking, workers, payments and more.</p>
          </div>
        </section>
        <section className="section faq-section">
          <div className="section-inner">
            <FaqSection />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
