import Link from 'next/link';
import { ServiceListing } from './ServiceListing';

type SubcategoryServicesScreenProps = {
  categoryId: string;
  categoryName: string;
  categoryShortName: string;
  subCategory: string;
  count: number;
};

export function SubcategoryServicesScreen({
  categoryId,
  categoryName,
  categoryShortName,
  subCategory,
  count,
}: SubcategoryServicesScreenProps) {
  return (
    <div className="services-page services-page--subcategory">
      <header className="services-header">
        <Link
          href={`/services/${categoryId}`}
          className="services-back"
          aria-label={`Back to ${categoryName}`}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M15 6l-6 6 6 6" />
          </svg>
        </Link>
        <div className="services-header-text">
          <p className="services-eyebrow">{categoryName}</p>
          <h1>{subCategory}</h1>
          <p className="services-tagline">{count} service{count !== 1 ? 's' : ''} available</p>
        </div>
      </header>

      <main className="services-main">
        <nav className="services-breadcrumb" aria-label="Breadcrumb">
          <Link href="/services">Services</Link>
          <span aria-hidden="true">/</span>
          <Link href={`/services/${categoryId}`}>{categoryShortName}</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{subCategory}</span>
        </nav>
        <ServiceListing categoryId={categoryId} subCategory={subCategory} />
      </main>
    </div>
  );
}
