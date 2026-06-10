import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { WhatsAppFab } from '@/components/layout/WhatsAppFab';
import { GalleryGrid } from '@/components/gallery/GalleryGrid';

export const metadata = { title: 'Gallery — VSolveHub' };

export default function GalleryPage() {
  return (
    <div className="page-gallery">
      <SiteHeader />
      <main>
        <section className="page-hero page-hero--gallery" aria-labelledby="gallery-heading">
          <div className="page-hero-content section-inner">
            <p className="hero-eyebrow">Our Work</p>
            <h1 id="gallery-heading">Gallery</h1>
            <p className="hero-tagline">Photos from events, construction, beauty and technician projects across India.</p>
          </div>
        </section>
        <section className="section gallery-section">
          <div className="section-inner">
            <GalleryGrid />
          </div>
        </section>
      </main>
      <SiteFooter />
      <WhatsAppFab message="Hi VSolveHub, I saw your gallery and want to book a service" />
    </div>
  );
}
