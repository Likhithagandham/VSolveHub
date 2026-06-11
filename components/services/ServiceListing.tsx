'use client';

import Link from 'next/link';
import { ARROW_SVG, getServicesByCategory, getServicesBySubCategory } from '@/lib/data';
import { Icon } from '@/components/ui/Icon';

type ServiceListingProps = {
  categoryId: string;
  subCategory?: string;
  subSlug?: string;
};

export function ServiceListing({ categoryId, subCategory }: ServiceListingProps) {
  const services = subCategory
    ? getServicesBySubCategory(categoryId, subCategory)
    : getServicesByCategory(categoryId);

  return (
    <div className="sub-services-grid">
      {services.map((service) => (
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
      ))}
    </div>
  );
}
