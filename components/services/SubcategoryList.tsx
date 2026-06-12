'use client';

import Link from 'next/link';
import { ARROW_SVG, getSubCategoryGroups } from '@/lib/data';
import { Icon } from '@/components/ui/Icon';

type SubCategoryGroup = {
  slug: string;
  name: string;
  icon: string;
  count: number;
  preview?: string;
};

type SubcategoryListProps = {
  categoryId: string;
  groups?: SubCategoryGroup[];
};

export function SubcategoryList({ categoryId, groups }: SubcategoryListProps) {
  const items = groups ?? getSubCategoryGroups(categoryId);

  return (
    <div className="subcategory-list" role="list">
      {items.map((group: SubCategoryGroup) => (
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
            {group.preview ? (
              <span className="subcategory-list-preview">{group.preview}</span>
            ) : null}
            <span className="subcategory-list-meta">
              {group.count} service{group.count !== 1 ? 's' : ''} available
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
