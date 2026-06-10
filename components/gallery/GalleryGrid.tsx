'use client';

import { useEffect, useState } from 'react';
import { GALLERY_FILTERS, GALLERY_ITEMS } from '@/lib/data';

function getAspectClass(aspect: string) {
  return `gallery-item--${aspect}`;
}

function buildPlaceholderSvg(item: (typeof GALLERY_ITEMS)[0]) {
  const h = item.aspect === 'tall' ? 320 : item.aspect === 'wide' ? 180 : 240;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="${h}"><rect fill="${item.color}" width="400" height="${h}"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#0A0A0A" font-family="sans-serif" font-size="14" opacity="0.4">${item.title}</text></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

export function GalleryGrid() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const visibleItems = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((i) => i.category === activeFilter);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') setLightboxIndex((i) => (i! + 1) % visibleItems.length);
      if (e.key === 'ArrowLeft') setLightboxIndex((i) => (i! - 1 + visibleItems.length) % visibleItems.length);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxIndex, visibleItems.length]);

  return (
    <>
      <div className="gallery-filters" id="gallery-filters" role="tablist">
        {GALLERY_FILTERS.map((f) => (
          <button
            key={f.id}
            type="button"
            className={`gallery-filter${f.id === activeFilter ? ' active' : ''}`}
            role="tab"
            aria-selected={f.id === activeFilter}
            onClick={() => setActiveFilter(f.id)}
          >
            {f.label}
          </button>
        ))}
      </div>
      {visibleItems.length === 0 ? (
        <p id="gallery-empty">No items in this category.</p>
      ) : (
        <div className="gallery-masonry" id="gallery-masonry">
          {visibleItems.map((item, index) => (
            <button
              key={item.id}
              type="button"
              className={`gallery-item ${getAspectClass(item.aspect)}`}
              aria-label={`View ${item.title}`}
              onClick={() => setLightboxIndex(index)}
            >
              <img src={buildPlaceholderSvg(item)} alt={item.title} loading="lazy" decoding="async" />
              <span className="gallery-item-label">{item.title}</span>
            </button>
          ))}
        </div>
      )}
      {lightboxIndex !== null && (
        <div className="lightbox is-open" role="dialog" aria-modal="true" onClick={() => setLightboxIndex(null)}>
          <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="lightbox-close" aria-label="Close" onClick={() => setLightboxIndex(null)}>×</button>
            <img src={buildPlaceholderSvg(visibleItems[lightboxIndex])} alt={visibleItems[lightboxIndex].title} />
            <p>{visibleItems[lightboxIndex].title}</p>
          </div>
        </div>
      )}
    </>
  );
}
