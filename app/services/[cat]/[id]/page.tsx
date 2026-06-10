import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { WhatsAppFab } from '@/components/layout/WhatsAppFab';
import { BookingForm } from '@/components/services/BookingForm';
import { Icon } from '@/components/ui/Icon';
import { getCategory, getServiceById } from '@/lib/data';

export function generateMetadata({ params }: { params: Promise<{ cat: string; id: string }> }) {
  return params.then(({ id }) => {
    const service = getServiceById(id);
    return { title: service ? `${service.name} — VSolveHub` : 'Service — VSolveHub' };
  });
}

export default async function ServicePage({ params }: { params: Promise<{ cat: string; id: string }> }) {
  const { cat, id } = await params;
  const service = getServiceById(id);
  const category = getCategory(cat);

  if (!service || !category || service.category !== cat) notFound();

  const waMsg = `Hi VSolveHub, I'd like to book ${service.name}`;

  return (
    <div className="page-service">
      <SiteHeader bookHref="#book" bookLabel="Book Now" />
      <main>
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <ol>
            <li><Link href="/">Home</Link></li>
            <li><Link href={`/services/${cat}`}>{category.name}</Link></li>
            <li aria-current="page">{service.name}</li>
          </ol>
        </nav>
        <section className="section service-detail-section">
          <div className="section-inner service-detail-grid">
            <div className="service-detail-info">
              <div className="service-detail-icon">
                <Icon name={service.icon} />
              </div>
              <p className="service-detail-eyebrow">{category.name}</p>
              <h1 className="service-detail-title">{service.name}</h1>
              {service.subCategory && <p className="service-detail-sub">{service.subCategory}</p>}
              <p className="service-detail-desc">{service.description}</p>
              <p className="service-detail-price">{service.price}</p>
              <Link href={`/services/${cat}`} className="btn-secondary service-back-link">
                ← All {category.shortName} services
              </Link>
            </div>
            <section id="book" className="service-booking-panel" aria-labelledby="book-heading">
              <h2 id="book-heading" className="section-title">Book this service</h2>
              <p className="lead-hint">Fill in your details — we&apos;ll confirm availability and call you back.</p>
              <BookingForm serviceId={service.id} serviceName={service.name} categoryId={cat} />
            </section>
          </div>
        </section>
      </main>
      <SiteFooter whatsappMessage={waMsg} />
      <WhatsAppFab message={waMsg} />
    </div>
  );
}
