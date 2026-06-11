'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { FAQ_DATA } from '@/lib/data';

export function FaqSection() {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return FAQ_DATA.map((cat) => ({
      ...cat,
      items: cat.items.filter((item) => {
        const matchesCat = activeCategory === 'all' || cat.category === activeCategory;
        if (!matchesCat) return false;
        if (!q) return true;
        return item.q.toLowerCase().includes(q) || item.a.toLowerCase().includes(q);
      }),
    })).filter((cat) => cat.items.length > 0);
  }, [query, activeCategory]);

  const totalCount = filtered.reduce((n, cat) => n + cat.items.length, 0);

  return (
    <>
      <div className="faq-search-bar">
        <span className="faq-search-icon" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="7" /><path d="M20 20l-3-3" />
          </svg>
        </span>
        <label htmlFor="faq-search" className="visually-hidden">Search FAQs</label>
        <input
          type="search"
          id="faq-search"
          className="faq-search-input"
          placeholder="Search questions…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <div className="faq-chips" role="tablist" aria-label="FAQ categories">
        <button
          type="button"
          role="tab"
          aria-selected={activeCategory === 'all'}
          className={`faq-chip${activeCategory === 'all' ? ' is-active' : ''}`}
          onClick={() => setActiveCategory('all')}
        >
          All
        </button>
        {FAQ_DATA.map((cat) => (
          <button
            key={cat.category}
            type="button"
            role="tab"
            aria-selected={activeCategory === cat.category}
            className={`faq-chip${activeCategory === cat.category ? ' is-active' : ''}`}
            onClick={() => setActiveCategory(cat.category)}
          >
            {cat.title}
          </button>
        ))}
      </div>

      {totalCount === 0 ? (
        <p className="faq-empty">No matching questions. Try another keyword or category.</p>
      ) : (
        <div className="faq-list">
          {filtered.map((cat) => (
            <section key={cat.category} className="faq-category">
              <h2 className="faq-category-title">{cat.title}</h2>
              <div className="faq-accordion">
                {cat.items.map((item) => (
                  <details key={item.q} className="faq-item">
                    <summary className="faq-question">{item.q}</summary>
                    <div className="faq-answer">
                      <div className="faq-answer-inner">
                        <p>{item.a}</p>
                      </div>
                    </div>
                  </details>
                ))}
              </div>
            </section>
          ))}
        </div>
      )}

      <section className="faq-cta" aria-label="Need more help">
        <h2>Still have questions?</h2>
        <p>Our team responds within 30 minutes on WhatsApp and phone.</p>
        <div className="faq-cta-actions">
          <Link href="/contact" className="btn-primary">Contact us</Link>
          <Link href="/services" className="btn-secondary">Book a service</Link>
        </div>
      </section>
    </>
  );
}
