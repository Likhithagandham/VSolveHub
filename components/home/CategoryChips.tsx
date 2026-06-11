import Link from 'next/link';
import { CATEGORIES } from '@/lib/data';
import { getCategoryEmoji3d } from '@/lib/emoji-3d';
import { Emoji3D } from '@/components/ui/Emoji3D';

export function CategoryChips() {
  return (
    <div className="home-categories">
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
    </div>
  );
}
