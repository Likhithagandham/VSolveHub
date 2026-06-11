import Link from 'next/link';
import { ARROW_SVG, getSubCategoryGroups } from '@/lib/data';
import { Icon } from '@/components/ui/Icon';

type SubcategoryListProps = {
  categoryId: string;
};

export function SubcategoryList({ categoryId }: SubcategoryListProps) {
  const groups = getSubCategoryGroups(categoryId);

  return (
    <div className="subcategory-list" role="list">
      {groups.map((group: { slug: string; name: string; icon: string; count: number }) => (
        <Link
          key={group.slug}
          href={`/services/${categoryId}/${group.slug}`}
          className="subcategory-list-item"
          role="listitem"
        >
          <span className="subcategory-list-icon" aria-hidden="true">
            <Icon name={group.icon} />
          </span>
          <span className="subcategory-list-body">
            <span className="subcategory-list-title">{group.name}</span>
            <span className="subcategory-list-meta">
              {group.count} service{group.count !== 1 ? 's' : ''}
            </span>
          </span>
          <span
            className="subcategory-list-arrow"
            aria-hidden="true"
            dangerouslySetInnerHTML={{ __html: ARROW_SVG }}
          />
        </Link>
      ))}
    </div>
  );
}
