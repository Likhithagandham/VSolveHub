import Link from 'next/link';
import { getSubCategoryGroups } from '@/lib/data';
import { CategoryHeaderEmoji } from './CategoryHeaderEmoji';
import { SubcategoryList } from './SubcategoryList';

type CategoryServicesScreenProps = {
  categoryId: string;
  name: string;
  tagline: string;
  count: number;
};

export function CategoryServicesScreen({
  categoryId,
  name,
  tagline,
  count,
}: CategoryServicesScreenProps) {
  const subCount = getSubCategoryGroups(categoryId).length;

  return (
    <div className="services-page services-page--category">
      <header className="services-header">
        <Link href="/services" className="services-back" aria-label="Back to all services">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M15 6l-6 6 6 6" />
          </svg>
        </Link>
        <div className="services-header-text services-header-text--with-icon">
          <CategoryHeaderEmoji categoryId={categoryId} />
          <div>
            <p className="services-eyebrow">Service category</p>
            <h1>{name}</h1>
            <p className="services-tagline">{tagline}</p>
            <p className="services-count">
              {subCount} sub-categor{subCount !== 1 ? 'ies' : 'y'} · {count} services
            </p>
          </div>
        </div>
      </header>

      <main className="services-main">
        <nav className="services-breadcrumb" aria-label="Breadcrumb">
          <Link href="/services">Services</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{name}</span>
        </nav>
        <h2 className="services-section-title">Choose a sub-category</h2>
        <SubcategoryList categoryId={categoryId} />
      </main>
    </div>
  );
}
