'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { MobileMenu } from './MobileMenu';

type SiteHeaderProps = {
  bookHref?: string;
  bookLabel?: string;
  minimal?: boolean;
};

export function SiteHeader({
  bookHref = '/#book',
  bookLabel = 'Book',
  minimal = false,
}: SiteHeaderProps) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  if (minimal) {
    return (
      <header className="site-header site-header--minimal">
        <Link href="/" className="logo" aria-label="VSolveHub home">
          <span className="logo-mark">VSolveHub</span>
        </Link>
      </header>
    );
  }

  const onHome = pathname === '/';

  return (
    <>
      <header className="site-header">
        <div className="header-leading">
          <Link href="/" className="logo" aria-label="VSolveHub home">
            <span className="logo-mark">VSolveHub</span>
          </Link>
          {onHome && (
            <button type="button" className="location-pill" aria-label="Change location">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M12 21s7-4.5 7-11a7 7 0 10-14 0c0 6.5 7 11 7 11z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
              <span>Hyderabad</span>
            </button>
          )}
        </div>
        <div className="header-actions">
          <Link href={bookHref} className="btn-header-cta">
            {bookLabel}
          </Link>
          <button
            type="button"
            className="btn-menu"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              {menuOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </header>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} bookHref={bookHref} bookLabel={bookLabel} />
    </>
  );
}
