'use client';

import { useProfile } from '@/hooks/useProfile';
import { ProfileSubPage } from './ProfileSubPage';

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' });
}

export function ProfileRating() {
  const { profile, ready } = useProfile();

  if (!ready || !profile) return null;

  return (
    <ProfileSubPage title="My rating">
      <div className="profile-card profile-rating-summary">
        <p className="profile-rating-score">★ {profile.rating.toFixed(1)}</p>
        <p className="profile-meta">Based on {profile.ratingCount} completed bookings</p>
      </div>

      <h2 className="profile-section-label">Your reviews</h2>
      {profile.reviews.length === 0 ? (
        <p className="profile-meta">Complete a booking to leave your first review.</p>
      ) : (
        <ul className="profile-list">
          {profile.reviews.map((r) => (
            <li key={r.id} className="profile-card">
              <div className="profile-booking-top">
                <strong>{r.proName}</strong>
                <span className="profile-rating-stars">{'★'.repeat(r.rating)}</span>
              </div>
              <p className="profile-meta">{r.serviceName} · {formatDate(r.date)}</p>
              <p>{r.comment}</p>
            </li>
          ))}
        </ul>
      )}
    </ProfileSubPage>
  );
}
