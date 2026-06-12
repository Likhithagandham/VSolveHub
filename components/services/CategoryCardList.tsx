import Link from 'next/link';
import { ARROW_SVG, CATEGORIES, getServicesByCategory } from '@/lib/data';
import { getCategoryEmoji3d } from '@/lib/emoji-3d';
import { Emoji3D } from '@/components/ui/Emoji3D';

type Category = (typeof CATEGORIES)[number];

type CategoryCardListProps = {
  categories: Category[];
};

export function CategoryCardList({ categories }: CategoryCardListProps) {
  return (
    <div className="services-category-cards" role="list">
      {categories.map((cat) => {
        const count = getServicesByCategory(cat.id).length;
        return (
          <Link
            key={cat.id}
            href={`/services/${cat.id}`}
            className="services-category-card"
            role="listitem"
          >
            <span className="services-category-card-icon" aria-hidden="true">
              <Emoji3D {...getCategoryEmoji3d(cat.id)} className="category-grid-emoji" />
            </span>
            <span className="services-category-card-body">
              <span className="services-category-card-title">{cat.name}</span>
              <span className="services-category-card-tagline">{cat.tagline}</span>
              <span className="services-category-card-meta">
                {count} services{cat.eta ? ` · ~${cat.eta}` : ''}
              </span>
            </span>
            {cat.eta ? <span className="services-category-card-badge">{cat.eta}</span> : null}
            <span
              className="services-category-card-arrow"
              aria-hidden="true"
              dangerouslySetInnerHTML={{ __html: ARROW_SVG }}
            />
          </Link>
        );
      })}
    </div>
  );
}
