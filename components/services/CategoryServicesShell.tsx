'use client';

import { useMemo, useState } from 'react';
import { filterSubCategoryGroups, searchServices } from '@/lib/data';
import { ServicesSearchBar } from './ServicesSearchBar';
import { ServiceResultCard } from './ServiceResultCard';
import { SubcategoryList } from './SubcategoryList';

type CategoryServicesShellProps = {
  categoryId: string;
  categoryName: string;
  children: React.ReactNode;
};

export function CategoryServicesShell({
  categoryId,
  categoryName,
  children,
}: CategoryServicesShellProps) {
  const [query, setQuery] = useState('');
  const trimmed = query.trim();
  const searching = trimmed.length > 0;

  const filteredSubcategories = useMemo(
    () => filterSubCategoryGroups(categoryId, trimmed),
    [categoryId, trimmed],
  );

  const serviceResults = useMemo(() => {
    if (!searching) return [];
    return searchServices(trimmed, categoryId);
  }, [trimmed, searching, categoryId]);

  return (
    <>
      <ServicesSearchBar
        value={query}
        onChange={setQuery}
        placeholder={`Search ${categoryName} sub-categories or services…`}
        label={`Search ${categoryName}`}
      />

      {searching ? (
        <section className="services-results" aria-live="polite">
          {filteredSubcategories.length > 0 ? (
            <>
              <p className="services-results-meta">
                {filteredSubcategories.length} sub-categor{filteredSubcategories.length !== 1 ? 'ies' : 'y'} for &ldquo;{trimmed}&rdquo;
              </p>
              <SubcategoryList categoryId={categoryId} groups={filteredSubcategories} />
            </>
          ) : null}

          {serviceResults.length > 0 ? (
            <>
              <p className="services-results-meta services-results-meta--spaced">
                {serviceResults.length} service{serviceResults.length !== 1 ? 's' : ''} for &ldquo;{trimmed}&rdquo;
              </p>
              <div className="services-results-list">
                {serviceResults.map((service) => (
                  <ServiceResultCard key={service.id} categoryId={categoryId} service={service} />
                ))}
              </div>
            </>
          ) : null}

          {filteredSubcategories.length === 0 && serviceResults.length === 0 ? (
            <p className="services-empty">No sub-categories or services match your search.</p>
          ) : null}
        </section>
      ) : (
        <>
          <h2 className="services-section-title">Choose a sub-category</h2>
          <p className="services-section-sub">Each trade has its own list of bookable services.</p>
          {children}
        </>
      )}
    </>
  );
}
