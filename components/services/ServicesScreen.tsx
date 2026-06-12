'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import {
  CATEGORIES,
  FEATURED_PICKS,
  POPULAR_SEARCHES,
  filterCategories,
  getServicesByCategory,
  getTotalServiceCount,
  searchServices,
} from '@/lib/data';
import { CategoryCardList } from './CategoryCardList';
import { ServicesSearchBar } from './ServicesSearchBar';
import { ServiceResultCard } from './ServiceResultCard';

export function ServicesScreen() {
  const [query, setQuery] = useState('');
  const total = getTotalServiceCount();
  const trimmed = query.trim();
  const searching = trimmed.length > 0;

  const filteredCategories = useMemo(() => filterCategories(trimmed), [trimmed]);
  const serviceResults = useMemo(() => {
    if (!searching) return [];
    return searchServices(trimmed);
  }, [trimmed, searching]);

  return (
    <div className="services-page" id="categories">
      <header className="services-header services-header--hub">
        <div className="services-header-text">
          <p className="services-eyebrow">Browse catalog</p>
          <h1>Services</h1>
          <p className="services-tagline">{total}+ doorstep services across {CATEGORIES.length} categories</p>
        </div>
        <div className="services-stats" aria-label="Service highlights">
          <div className="services-stat">
            <strong>{total}+</strong>
            <span>Services</span>
          </div>
          <div className="services-stat">
            <strong>{CATEGORIES.length}</strong>
            <span>Categories</span>
          </div>
          <div className="services-stat">
            <strong>30m</strong>
            <span>Callback</span>
          </div>
        </div>
      </header>

      <main className="services-main services-main--hub">
        <ServicesSearchBar
          value={query}
          onChange={setQuery}
          placeholder="Search categories or services (electrician, cleaning…)"
          label="Search categories and services"
        />

        <div className="services-quick-chips" role="list" aria-label="Popular searches">
          {POPULAR_SEARCHES.map((term) => (
            <button
              key={term}
              type="button"
              role="listitem"
              className="services-quick-chip"
              onClick={() => setQuery(term)}
            >
              {term}
            </button>
          ))}
        </div>

        {searching ? (
          <section className="services-results" aria-live="polite">
            {filteredCategories.length > 0 ? (
              <section className="services-cat-grid-section" aria-label="Matching categories">
                <p className="services-results-meta">
                  {filteredCategories.length} categor{filteredCategories.length !== 1 ? 'ies' : 'y'} for &ldquo;{trimmed}&rdquo;
                </p>
                <CategoryCardList categories={filteredCategories} />
              </section>
            ) : null}

            {serviceResults.length > 0 ? (
              <>
                <p className="services-results-meta services-results-meta--spaced">
                  {serviceResults.length} service{serviceResults.length !== 1 ? 's' : ''} for &ldquo;{trimmed}&rdquo;
                </p>
                <div className="services-results-list">
                  {serviceResults.map((service) => (
                    <ServiceResultCard key={service.id} categoryId={service.category} service={service} />
                  ))}
                </div>
              </>
            ) : null}

            {filteredCategories.length === 0 && serviceResults.length === 0 ? (
              <p className="services-empty">No categories or services match your search.</p>
            ) : null}
          </section>
        ) : (
          <>
            <section className="services-featured" aria-label="Popular services">
              <h2 className="services-section-title">Popular right now</h2>
              <div className="services-featured-scroll">
                {FEATURED_PICKS.map((pick) => (
                  <Link
                    key={`${pick.categoryId}-${pick.slug}`}
                    href={`/services/${pick.categoryId}/${pick.slug}`}
                    className="services-featured-card"
                  >
                    <span className="services-featured-label">{pick.label}</span>
                    <span className="services-featured-sub">{pick.subtitle}</span>
                  </Link>
                ))}
              </div>
            </section>

            <section className="services-cat-grid-section" aria-label="Service categories">
              <h2 className="services-section-title">All categories</h2>
              <p className="services-section-sub">Pick a category, then a sub-category, then book your service.</p>
              <CategoryCardList categories={CATEGORIES} />
            </section>

            <section className="services-trust" aria-label="Why VSolveHub">
              <div className="services-trust-item">
                <strong>Verified pros</strong>
                <span>Background-checked workers</span>
              </div>
              <div className="services-trust-item">
                <strong>Transparent pricing</strong>
                <span>No hidden charges</span>
              </div>
              <div className="services-trust-item">
                <strong>Quick callback</strong>
                <span>We call within 30 minutes</span>
              </div>
            </section>
          </>
        )}
      </main>
    </div>
  );
}
