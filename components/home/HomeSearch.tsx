'use client';

import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
import { CATEGORIES } from '@/lib/data';

export function HomeSearch() {
  const router = useRouter();
  const [query, setQuery] = useState('');

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const q = query.trim().toLowerCase();
    if (!q) {
      router.push('/services');
      return;
    }
    const match =
      CATEGORIES.find((c) => c.name.toLowerCase().includes(q) || c.shortName.toLowerCase().includes(q)) ??
      CATEGORIES.find((c) => c.tagline.toLowerCase().includes(q));
    router.push(match ? `/services/${match.id}` : '/services');
  }

  return (
    <div className="home-search-wrap">
      <form className="home-search" onSubmit={onSubmit} role="search">
        <label htmlFor="home-search-input" className="visually-hidden">
          Search services
        </label>
        <span className="home-search-icon" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="7" /><path d="M20 20l-3.5-3.5" />
          </svg>
        </span>
        <input
          id="home-search-input"
          type="search"
          placeholder="Search for technicians, painters…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          enterKeyHint="search"
          autoComplete="off"
        />
        <button type="button" className="home-search-mic" aria-label="Voice search (coming soon)">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="9" y="2" width="6" height="12" rx="3" /><path d="M5 10a7 7 0 0014 0M12 17v4" />
          </svg>
        </button>
      </form>
    </div>
  );
}
