import Link from 'next/link';
import { ARROW_SVG, CATEGORIES } from '@/lib/data';
import { Icon } from '@/components/ui/Icon';

export function CategoryGrid() {
  return (
    <div className="category-grid">
      {CATEGORIES.map((cat) => (
        <Link key={cat.id} href={`/services/${cat.id}`} className="category-card" data-category={cat.id}>
          <div className="category-card-icon">
            <Icon name={cat.icon} />
          </div>
          <div className="category-card-body">
            <h3 className="category-card-title">{cat.name}</h3>
            <p className="category-card-tagline">{cat.tagline}</p>
            <span className="category-card-count">{cat.count} services</span>
          </div>
          <span className="category-card-arrow" aria-hidden="true" dangerouslySetInnerHTML={{ __html: ARROW_SVG }} />
        </Link>
      ))}
    </div>
  );
}
