'use client';

import type { ReactElement } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useProfile } from '@/hooks/useProfile';
import { getQuickActionEmoji3d } from '@/lib/emoji-3d';
import { PROFILE_MENU, PROFILE_QUICK_ACTIONS } from '@/lib/profile';
import {
  formatPhone,
  initialsFromName,
  logoutSession,
  shareReferral,
} from '@/lib/profile-store';
import { Emoji3D } from '@/components/ui/Emoji3D';
import { ProfileLogin } from './ProfileLogin';

function MenuIcon({ id }: { id: string }) {
  const s = 'currentColor';
  const icons: Record<string, ReactElement> = {
    plans: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={s} strokeWidth="1.75"><rect x="4" y="6" width="16" height="12" rx="2" /><path d="M8 10h8" /></svg>,
    wallet: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={s} strokeWidth="1.75"><rect x="3" y="6" width="18" height="13" rx="2" /><path d="M16 12h2" /></svg>,
    membership: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={s} strokeWidth="1.75"><circle cx="12" cy="12" r="8" /><path d="M12 8v4l2 2" /></svg>,
    rating: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={s} strokeWidth="1.75"><path d="M12 3l2.4 5.6L20 9.3l-4 3.9.9 5.8L12 16.8 7.1 19l.9-5.8-4-3.9 5.6-.7z" /></svg>,
    addresses: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={s} strokeWidth="1.75"><path d="M12 21s6-5.2 6-10a6 6 0 10-12 0c0 4.8 6 10 6 10z" /><circle cx="12" cy="11" r="2" /></svg>,
    payments: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={s} strokeWidth="1.75"><rect x="3" y="6" width="18" height="12" rx="2" /><path d="M3 10h18" /></svg>,
    settings: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={s} strokeWidth="1.75"><circle cx="12" cy="12" r="3" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>,
    about: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={s} strokeWidth="1.75"><rect x="5" y="5" width="14" height="14" rx="2" /><path d="M9 10h6M9 14h4" /></svg>,
  };
  return icons[id] ?? icons.about;
}

function Chevron() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M9 6l6 6-6 6" />
    </svg>
  );
}

export function ProfileScreen() {
  const router = useRouter();
  const { profile, isLoggedIn, ready } = useProfile();
  const [referMsg, setReferMsg] = useState('');

  if (!ready) return null;

  if (!isLoggedIn || !profile) {
    return (
      <div className="profile-page">
        <header className="profile-header profile-header--compact">
          <h1 className="profile-name">Account</h1>
        </header>
        <main className="profile-main">
          <ProfileLogin />
        </main>
      </div>
    );
  }

  const { user } = profile;
  const initials = initialsFromName(user.name);

  async function onRefer() {
    const result = await shareReferral(user.referralCode);
    setReferMsg(
      result === 'shared'
        ? 'Referral shared! ₹100 credited to your wallet when friends book.'
        : `Code copied: ${user.referralCode}. ₹100 bonus applied to your wallet.`
    );
  }

  function onLogout() {
    logoutSession();
    router.refresh();
  }

  return (
    <div className="profile-page">
      <header className="profile-header">
        <div className="profile-header-top">
          <div className="profile-identity">
            <span className="profile-avatar" aria-hidden="true">{initials}</span>
            <div className="profile-identity-text">
              <div className="profile-header-main">
                <h1 className="profile-name">{user.name}</h1>
                <Link href="/profile/edit" className="profile-edit" aria-label="Edit profile">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 20h9M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4 12.5-12.5z" />
                  </svg>
                </Link>
              </div>
              <p className="profile-contact">{formatPhone(user.phone)}</p>
              <p className="profile-contact">{user.email}</p>
            </div>
          </div>
        </div>
      </header>

      <main className="profile-main">
        <div className="profile-quick-actions" role="list">
          {PROFILE_QUICK_ACTIONS.map((item) => (
            <Link key={item.id} href={item.href} className="profile-quick-card" role="listitem">
              <span className="profile-quick-icon" aria-hidden="true">
                <Emoji3D {...getQuickActionEmoji3d(item.id)} className="profile-quick-emoji" />
              </span>
              <span>{item.label}</span>
            </Link>
          ))}
        </div>

        <nav className="profile-menu-card" aria-label="Account">
          {PROFILE_MENU.map((item) => (
            <Link key={item.id} href={item.href} className="profile-menu-item">
              <span className="profile-menu-icon" aria-hidden="true"><MenuIcon id={item.id} /></span>
              <span className="profile-menu-label">{item.label}</span>
              <Chevron />
            </Link>
          ))}
        </nav>

        <section className="profile-referral" aria-label="Refer and earn">
          <div className="profile-referral-text">
            <h2>Refer &amp; earn ₹100</h2>
            <p>Get ₹100 when your friend completes their first booking</p>
            <p className="profile-meta">{profile.referralCount} friends referred · Code: {user.referralCode}</p>
            <button type="button" className="btn-refer" onClick={onRefer}>Refer now</button>
            {referMsg && <p className="profile-refer-msg" role="status">{referMsg}</p>}
          </div>
          <span className="profile-referral-gift" aria-hidden="true">🎁</span>
        </section>

        <button type="button" className="btn-profile-logout" onClick={onLogout}>Logout</button>
        <p className="profile-version">VSolveHub v0.1.0</p>
      </main>
    </div>
  );
}
