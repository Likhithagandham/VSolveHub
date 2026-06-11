'use client';

import Link from 'next/link';
import { useProfile } from '@/hooks/useProfile';
import { ProfileSubPage } from './ProfileSubPage';

export function ProfilePlans() {
  const { profile, ready } = useProfile();

  if (!ready || !profile) return null;

  return (
    <ProfileSubPage title="My plans">
      {profile.plans.length === 0 ? (
        <div className="profile-empty profile-card">
          <p>No active service packs.</p>
          <Link href="/services" className="btn-primary">Browse services</Link>
        </div>
      ) : (
        <ul className="profile-list">
          {profile.plans.map((plan) => (
            <li key={plan.id} className="profile-card">
              <div className="profile-booking-top">
                <strong>{plan.name}</strong>
                <span className={`profile-badge${plan.status === 'active' ? ' profile-badge--active' : ''}`}>
                  {plan.status}
                </span>
              </div>
              <p className="profile-meta">Valid till {plan.validUntil}</p>
              <p className="profile-meta">{plan.bookingsLeft} bookings remaining</p>
            </li>
          ))}
        </ul>
      )}
    </ProfileSubPage>
  );
}
