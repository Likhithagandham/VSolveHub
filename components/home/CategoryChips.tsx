import Link from 'next/link';
import { CATEGORIES } from '@/lib/data';
import { getCategoryEmoji3d } from '@/lib/emoji-3d';
import { Emoji3D } from '@/components/ui/Emoji3D';

export function CategoryChips() {
  return (
    <section className="home-categories" aria-labelledby="home-categories-heading">
      <div className="home-section-head">
        <h2 id="home-categories-heading" className="home-section-title">Categories</h2>
        <Link href="/services" className="home-section-link">View all</Link>
      </div>
      <div className="category-grid" role="list">
        {CATEGORIES.map((cat) => (
          <Link
            key={cat.id}
            href={`/services/${cat.id}`}
            className="category-grid-item"
            role="listitem"
          >
            <span className="category-grid-icon-wrap" aria-hidden="true">
              <Emoji3D {...getCategoryEmoji3d(cat.id)} className="category-grid-emoji" />
              {cat.eta ? (
                <span className="category-grid-badge">{cat.eta}</span>
              ) : null}
            </span>
            <span className="category-grid-label">
              {cat.gridLabel ?? cat.shortName}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
