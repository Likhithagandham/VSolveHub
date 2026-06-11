'use client';

import Link from 'next/link';
import { useProfile } from '@/hooks/useProfile';
import { initialsFromName } from '@/lib/profile-store';
import { HomeSearch } from './HomeSearch';

const DEFAULT_AVATAR_INITIALS = 'R';

export function HomeHeader() {
  const { profile, ready } = useProfile();
  const initials =
    ready && profile ? initialsFromName(profile.user.name) : DEFAULT_AVATAR_INITIALS;
  return (
    <header className="home-header">
      <div className="home-header-top">
        <div style={{ display: 'flex', alignItems: 'center', minWidth: 0 }}>
          <Link href="/" className="home-brand">
            VSolveHub
          </Link>
          <button type="button" className="home-location" aria-label="Change location">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M12 21s7-4.5 7-11a7 7 0 10-14 0c0 6.5 7 11 7 11z" />
              <circle cx="12" cy="10" r="2.5" />
            </svg>
            Hyderabad
          </button>
        </div>
        <div className="home-header-actions">
          <button type="button" className="home-icon-btn" aria-label="Notifications">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M18 8A6 6 0 106 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" />
            </svg>
            <span className="home-notify-badge" aria-hidden="true" />
          </button>
          <Link href="/profile" className="home-avatar" aria-label="Your profile">
            {initials}
          </Link>
        </div>
      </div>
      <HomeSearch />
    </header>
  );
}
