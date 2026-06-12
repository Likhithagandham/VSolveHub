import Link from 'next/link';
import { ARROW_SVG, getCategory, getServicesByCategory } from '@/lib/data';
import { Icon } from '@/components/ui/Icon';

type Service = ReturnType<typeof getServicesByCategory>[number];

export function ServiceResultCard({
  categoryId,
  service,
}: {
  categoryId: string;
  service: Service;
}) {
  const category = getCategory(categoryId);
  return (
    <Link href={`/services/${categoryId}/${service.id}`} className="services-result-card">
      <div className="services-result-icon">
        <Icon name={service.icon} />
      </div>
      <div className="services-result-body">
        {category ? <p className="services-result-cat">{category.shortName}</p> : null}
        <h3 className="services-result-title">{service.name}</h3>
        <p className="services-result-desc">{service.description}</p>
        <p className="services-result-price">{service.price}</p>
      </div>
      <span className="services-result-arrow" aria-hidden="true" dangerouslySetInnerHTML={{ __html: ARROW_SVG }} />
    </Link>
  );
}
