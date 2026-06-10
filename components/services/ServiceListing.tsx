'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import {
  ARROW_SVG,
  getCategoryCatalog,
  getServicesByCategory,
  getSubCategories,
} from '@/lib/data';
import { Icon } from '@/components/ui/Icon';

type ServiceListingProps = {
  categoryId: string;
};

function slugify(text: string) {
  return text.replace(/[^a-zA-Z0-9]+/g, '-').replace(/^-|-$/g, '');
}

export function ServiceListing({ categoryId }: ServiceListingProps) {
  const [activeSub, setActiveSub] = useState('all');
  const catalog = getCategoryCatalog(categoryId);
  const subCats = getSubCategories(categoryId);
  const allServices = getServicesByCategory(categoryId);

  const services = useMemo(
    () => (activeSub === 'all' ? allServices : allServices.filter((s) => s.subCategory === activeSub)),
    [activeSub, allServices],
  );

  const card = (service: (typeof allServices)[0]) => (
    <Link key={service.id} href={`/services/${categoryId}/${service.id}`} className="sub-service-card">
      <div className="sub-service-icon">
        <Icon name={service.icon} />
      </div>
      <div className="sub-service-body">
        <h3 className="sub-service-title">{service.name}</h3>
        <p className="sub-service-desc">{service.description}</p>
        <p className="sub-service-price">{service.price}</p>
        <span className="btn-action sub-service-book" aria-hidden="true" dangerouslySetInnerHTML={{ __html: ARROW_SVG }} />
      </div>
    </Link>
  );

  return (
    <>
      {subCats.length > 0 && (
        <div className="subcategory-filters" role="tablist" aria-label="Sub-categories">
          <button
            type="button"
            className={`gallery-filter${activeSub === 'all' ? ' active' : ''}`}
            role="tab"
            aria-selected={activeSub === 'all'}
            onClick={() => setActiveSub('all')}
          >
            All
          </button>
          {subCats.map((sc: string) => (
            <button
              key={sc}
              type="button"
              className={`gallery-filter${activeSub === sc ? ' active' : ''}`}
              role="tab"
              aria-selected={activeSub === sc}
              onClick={() => setActiveSub(sc)}
            >
              {sc}
            </button>
          ))}
        </div>
      )}
      {catalog && activeSub === 'all' ? (
        catalog.map((group: { subCategory: string }) => {
          const groupServices = services.filter((s) => s.subCategory === group.subCategory);
          if (groupServices.length === 0) return null;
          const slug = slugify(group.subCategory);
          return (
            <section key={group.subCategory} className="subcategory-group" aria-labelledby={`sub-${slug}`}>
              <h3 className="subcategory-title" id={`sub-${slug}`}>{group.subCategory}</h3>
              <div className="sub-services-grid">{groupServices.map(card)}</div>
            </section>
          );
        })
      ) : (
        <div className="sub-services-grid">{services.map(card)}</div>
      )}
    </>
  );
}
