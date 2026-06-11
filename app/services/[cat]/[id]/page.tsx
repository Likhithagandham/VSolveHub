import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SubcategoryServicesScreen } from '@/components/services/SubcategoryServicesScreen';
import { BookingForm } from '@/components/services/BookingForm';
import { SaveServiceButton } from '@/components/profile/SaveServiceButton';
import { Icon } from '@/components/ui/Icon';
import {
  getCategory,
  getServiceById,
  getServicesBySubCategory,
  getSubCategoryBySlug,
  slugifySubCategory,
} from '@/lib/data';

export function generateMetadata({ params }: { params: Promise<{ cat: string; id: string }> }) {
  return params.then(({ cat, id }) => {
    if (/^\d+$/.test(id)) {
      const service = getServiceById(id);
      return { title: service ? `${service.name} — VSolveHub` : 'Service — VSolveHub' };
    }
    const sub = getSubCategoryBySlug(cat, id);
    const category = getCategory(cat);
    return {
      title: sub && category ? `${sub.name} — ${category.name} — VSolveHub` : 'Services — VSolveHub',
    };
  });
}

function ServiceDetailPage({ cat, id }: { cat: string; id: string }) {
  const service = getServiceById(id);
  const category = getCategory(cat);

  if (!service || !category || service.category !== cat) notFound();

  const subSlug = service.subCategory ? slugifySubCategory(service.subCategory) : null;

  return (
    <div className="page-service-detail">
      <header className="service-detail-header">
        <Link href={subSlug ? `/services/${cat}/${subSlug}` : `/services/${cat}`} className="services-back" aria-label="Go back">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M15 6l-6 6 6 6" />
          </svg>
        </Link>
        <nav className="services-breadcrumb services-breadcrumb--inverse" aria-label="Breadcrumb">
          <Link href="/services">Services</Link>
          <span aria-hidden="true">/</span>
          <Link href={`/services/${cat}`}>{category.shortName}</Link>
          {service.subCategory ? (
            <>
              <span aria-hidden="true">/</span>
              <Link href={`/services/${cat}/${subSlug}`}>{service.subCategory}</Link>
            </>
          ) : null}
        </nav>
      </header>

      <main className="service-detail-main">
        <section className="service-detail-hero">
          <div className="service-detail-icon">
            <Icon name={service.icon} />
          </div>
          <p className="service-detail-eyebrow">{category.name}</p>
          <h1 className="service-detail-title">{service.name}</h1>
          {service.subCategory ? <p className="service-detail-sub">{service.subCategory}</p> : null}
          <p className="service-detail-desc">{service.description}</p>
          <p className="service-detail-price">{service.price}</p>
          <SaveServiceButton serviceId={service.id} />
        </section>

        <section id="book" className="service-booking-panel" aria-labelledby="book-heading">
          <h2 id="book-heading" className="services-section-title">Book this service</h2>
          <p className="service-detail-hint">Fill in your details — we&apos;ll confirm availability and call you back.</p>
          <BookingForm serviceId={service.id} serviceName={service.name} categoryId={cat} />
        </section>
      </main>
    </div>
  );
}

export default async function ServiceSegmentPage({ params }: { params: Promise<{ cat: string; id: string }> }) {
  const { cat, id } = await params;
  const category = getCategory(cat);
  if (!category) notFound();

  if (/^\d+$/.test(id)) {
    return <ServiceDetailPage cat={cat} id={id} />;
  }

  const sub = getSubCategoryBySlug(cat, id);
  if (!sub) notFound();

  const count = getServicesBySubCategory(cat, sub.name).length;

  return (
    <div className="page-services-hub">
      <SubcategoryServicesScreen
        categoryId={cat}
        categoryName={category.name}
        categoryShortName={category.shortName}
        subCategory={sub.name}
        count={count}
      />
    </div>
  );
}
