'use client';

import { useProfile } from '@/hooks/useProfile';
import { toggleMembership } from '@/lib/profile-store';
import { ProfileSubPage } from './ProfileSubPage';

const BENEFITS = [
  'Free rescheduling on all bookings',
  'Priority technician assignment',
  '10% off on beauty & cleaning services',
  'Dedicated support line',
];

export function ProfileMembership() {
  const { profile, ready, refresh } = useProfile();

  if (!ready || !profile) return null;
  const { membership } = profile;

  return (
    <ProfileSubPage title="Plus membership">
      <div className="profile-card profile-membership-hero">
        <h2>{membership.planName}</h2>
        <p className="profile-meta">₹499/year · Save up to ₹2,000</p>
        {membership.active ? (
          <>
            <p className="profile-membership-status">Active till {membership.expiresAt}</p>
            <p className="profile-meta">You&apos;ve saved ₹{membership.savingsTotal} so far</p>
          </>
        ) : (
          <p className="profile-membership-status profile-membership-status--inactive">Not subscribed</p>
        )}
        <button
          type="button"
          className="btn-primary"
          onClick={() => {
            toggleMembership();
            refresh();
          }}
        >
          {membership.active ? 'Cancel membership' : 'Join Plus — ₹499/year'}
        </button>
      </div>

      <h2 className="profile-section-label">Member benefits</h2>
      <ul className="profile-benefits">
        {BENEFITS.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </ProfileSubPage>
  );
}
