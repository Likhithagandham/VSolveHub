'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import {
  ARROW_SVG,
  CATEGORIES,
  getCategory,
  getServicesByCategory,
  getTotalServiceCount,
  searchServices,
} from '@/lib/data';
import { getCategoryEmoji3d } from '@/lib/emoji-3d';
import { Emoji3D } from '@/components/ui/Emoji3D';
import { Icon } from '@/components/ui/Icon';

function ServiceResultCard({
  categoryId,
  service,
}: {
  categoryId: string;
  service: ReturnType<typeof getServicesByCategory>[number];
}) {
  const category = getCategory(categoryId);
  return (
    <Link href={`/services/${categoryId}/${service.id}`} className="services-result-card">
      <div className="services-result-icon">
        <Icon name={service.icon} />
      </div>
      <div className="services-result-body">
        <p className="services-result-cat">{category?.shortName ?? categoryId}</p>
        <h3 className="services-result-title">{service.name}</h3>
        <p className="services-result-desc">{service.description}</p>
        <p className="services-result-price">{service.price}</p>
      </div>
      <span className="services-result-arrow" aria-hidden="true" dangerouslySetInnerHTML={{ __html: ARROW_SVG }} />
    </Link>
  );
}

export function ServicesScreen() {
  const [query, setQuery] = useState('');
  const total = getTotalServiceCount();
  const trimmed = query.trim();
  const searching = trimmed.length > 0;

  const searchResults = useMemo(() => {
    if (!searching) return [];
    return searchServices(trimmed);
  }, [trimmed, searching]);

  return (
    <div className="services-page" id="categories">
      <header className="services-header">
        <div className="services-header-text">
          <p className="services-eyebrow">Browse catalog</p>
          <h1>Services</h1>
          <p className="services-tagline">{total}+ doorstep services across {CATEGORIES.length} categories</p>
        </div>
      </header>

      <main className="services-main">
        <div className="services-search-bar">
          <span className="services-search-icon" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="7" /><path d="M20 20l-3.5-3.5" />
            </svg>
          </span>
          <input
            type="search"
            className="services-search-input"
            placeholder="Search services (electrician, cleaning, rental…)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search services"
          />
        </div>

        {searching ? (
          <section className="services-results" aria-live="polite">
            <p className="services-results-meta">
              {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} for &ldquo;{trimmed}&rdquo;
            </p>
            {searchResults.length === 0 ? (
              <p className="services-empty">No services match your search. Try another keyword.</p>
            ) : (
              <div className="services-results-list">
                {searchResults.map((service) => (
                  <ServiceResultCard key={service.id} categoryId={service.category} service={service} />
                ))}
              </div>
            )}
          </section>
        ) : (
          <section className="services-cat-grid-section" aria-label="Service categories">
            <h2 className="services-section-title">Choose a category</h2>
            <div className="category-grid" role="list">
              {CATEGORIES.map((cat) => {
                const count = getServicesByCategory(cat.id).length;
                return (
                  <Link
                    key={cat.id}
                    href={`/services/${cat.id}`}
                    className="category-grid-item"
                    role="listitem"
                  >
                    <span className="category-grid-icon-wrap" aria-hidden="true">
                      <Emoji3D {...getCategoryEmoji3d(cat.id)} className="category-grid-emoji" />
                      {cat.eta ? <span className="category-grid-badge">{cat.eta}</span> : null}
                    </span>
                    <span className="category-grid-label">{cat.gridLabel ?? cat.shortName}</span>
                    <span className="category-grid-count">{count} services</span>
                  </Link>
                );
              })}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
