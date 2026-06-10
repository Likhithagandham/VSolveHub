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
  bookLabel = 'Book Now',
  minimal = false,
}: SiteHeaderProps) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState('EN');

  if (minimal) {
    return (
      <header className="site-header site-header--minimal">
        <Link href="/" className="logo">
          <span className="logo-mark">VSH</span>
        </Link>
      </header>
    );
  }

  const navLink = (href: string, label: string) => {
    const active = pathname === href || (href.startsWith('/#') && pathname === '/');
    return (
      <Link href={href} aria-current={active ? 'page' : undefined}>
        {label}
      </Link>
    );
  };

  return (
    <>
      <header className="site-header">
        <Link href="/" className="logo" aria-label="VSolveHub home">
          <span className="logo-mark">VSH</span>
        </Link>
        <nav className="nav-desktop" aria-label="Main navigation">
          {navLink('/', 'Home')}
          {navLink('/#categories', 'Services')}
          {navLink('/about', 'About')}
          {navLink('/gallery', 'Gallery')}
          {navLink('/contact', 'Contact')}
        </nav>
        <div className="header-actions">
          <button
            type="button"
            className="lang-toggle"
            aria-label="Change language"
            title="English / తెలుగు / हिंदी"
            onClick={() => setLang((l) => (l === 'EN' ? 'TE' : l === 'TE' ? 'HI' : 'EN'))}
          >
            <span className="lang-icon">🌐</span>
            <span className="lang-label">{lang}</span>
          </button>
          <Link href={bookHref} className="btn-store">
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
            {menuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </header>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} bookHref={bookHref} bookLabel={bookLabel} />
    </>
  );
}
