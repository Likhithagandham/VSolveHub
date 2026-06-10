'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { FAQ_DATA } from '@/lib/data';

export function FaqSection() {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return FAQ_DATA;
    return FAQ_DATA.map((cat) => ({
      ...cat,
      items: cat.items.filter(
        (item) => item.q.toLowerCase().includes(q) || item.a.toLowerCase().includes(q),
      ),
    })).filter((cat) => cat.items.length > 0);
  }, [query]);

  return (
    <>
      <div className="faq-search-wrap">
        <label htmlFor="faq-search" className="visually-hidden">Search FAQs</label>
        <input
          type="search"
          id="faq-search"
          placeholder="Search questions…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="faq-list">
        {filtered.map((cat) => (
          <section key={cat.category} className="faq-category">
            <h2 className="faq-category-title">{cat.title}</h2>
            {cat.items.map((item) => (
              <details key={item.q} className="faq-item">
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </section>
        ))}
        {filtered.length === 0 && <p className="lead-hint">No matching questions. Try another keyword.</p>}
      </div>
      <div className="faq-cta">
        <p>Still have questions?</p>
        <div className="faq-cta-buttons">
          <Link href="/contact" className="btn-primary">Contact Us</Link>
          <Link href="/#book" className="btn-secondary">Book a Service</Link>
        </div>
      </div>
    </>
  );
}
