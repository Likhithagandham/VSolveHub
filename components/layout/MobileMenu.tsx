'use client';

import Link from 'next/link';

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
  bookHref: string;
  bookLabel: string;
};

export function MobileMenu({ open, onClose, bookHref, bookLabel }: MobileMenuProps) {
  return (
    <div id="mobile-menu" className="mobile-menu" hidden={!open}>
      <nav aria-label="Mobile navigation">
        <Link href="/" onClick={onClose}>Home</Link>
        <Link href="/services" onClick={onClose}>Services</Link>
        <Link href="/about" onClick={onClose}>About</Link>
        <Link href="/gallery" onClick={onClose}>Gallery</Link>
        <Link href="/faq" onClick={onClose}>FAQ</Link>
        <Link href="/contact" onClick={onClose}>Contact</Link>
        <Link href={bookHref} className="mobile-menu-cta" onClick={onClose}>
          {bookLabel}
        </Link>
      </nav>
    </div>
  );
}
