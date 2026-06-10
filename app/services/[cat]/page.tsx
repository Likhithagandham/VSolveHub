import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { WhatsAppFab } from '@/components/layout/WhatsAppFab';
import { ServiceListing } from '@/components/services/ServiceListing';
import { CATEGORIES, getCategory, getServicesByCategory } from '@/lib/data';

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ cat: c.id }));
}

export function generateMetadata({ params }: { params: Promise<{ cat: string }> }) {
  return params.then(({ cat }) => {
    const category = getCategory(cat);
    return { title: category ? `${category.name} — VSolveHub` : 'Services — VSolveHub' };
  });
}

export default async function CategoryPage({ params }: { params: Promise<{ cat: string }> }) {
  const { cat } = await params;
  const category = getCategory(cat);
  if (!category) notFound();

  const count = getServicesByCategory(cat).length;
  const waMsg = `Hi VSolveHub, I'm interested in ${category.name} services`;

  return (
    <div className="page-services">
      <SiteHeader bookHref="/#categories" bookLabel="Browse" />
      <main>
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <ol>
            <li><Link href="/">Home</Link></li>
            <li aria-current="page">{category.name}</li>
          </ol>
        </nav>
        <section className="category-hero" aria-labelledby="category-title">
          <div className="category-hero-media" role="img" aria-hidden="true" />
          <div className="category-hero-content">
            <p className="category-hero-eyebrow">Service Category</p>
            <h1 id="category-title">{category.name}</h1>
            <p id="category-tagline">{category.tagline}</p>
          </div>
        </section>
        <section className="section sub-services-section" aria-labelledby="sub-services-heading">
          <div className="section-inner">
            <h2 id="sub-services-heading" className="section-title">Available Services</h2>
            <p className="section-subtitle">{count} service{count !== 1 ? 's' : ''} available</p>
            <ServiceListing categoryId={cat} />
          </div>
        </section>
      </main>
      <SiteFooter whatsappMessage={waMsg} />
      <WhatsAppFab message={waMsg} />
    </div>
  );
}
