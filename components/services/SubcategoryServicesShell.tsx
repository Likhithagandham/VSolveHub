'use client';

import { useMemo, useState } from 'react';
import { searchServicesInSubCategory } from '@/lib/data';
import { ServicesSearchBar } from './ServicesSearchBar';
import { ServiceListing } from './ServiceListing';

type SubcategoryServicesShellProps = {
  categoryId: string;
  subCategory: string;
  children: React.ReactNode;
};

export function SubcategoryServicesShell({
  categoryId,
  subCategory,
  children,
}: SubcategoryServicesShellProps) {
  const [query, setQuery] = useState('');
  const trimmed = query.trim();
  const searching = trimmed.length > 0;

  const filteredServices = useMemo(
    () => searchServicesInSubCategory(categoryId, subCategory, trimmed),
    [categoryId, subCategory, trimmed],
  );

  return (
    <>
      <ServicesSearchBar
        value={query}
        onChange={setQuery}
        placeholder={`Search ${subCategory} services…`}
        label={`Search ${subCategory} services`}
      />

      {searching ? (
        <section className="services-results" aria-live="polite">
          <p className="services-results-meta">
            {filteredServices.length} result{filteredServices.length !== 1 ? 's' : ''} for &ldquo;{trimmed}&rdquo;
          </p>
          {filteredServices.length === 0 ? (
            <p className="services-empty">No services match your search in {subCategory}.</p>
          ) : (
            <ServiceListing categoryId={categoryId} services={filteredServices} />
          )}
        </section>
      ) : (
        <>
          <p className="services-section-sub">
            Tap a service to view details and book — we&apos;ll confirm within 30 minutes.
          </p>
          {children}
        </>
      )}
    </>
  );
}
