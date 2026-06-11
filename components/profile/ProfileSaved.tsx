'use client';

import Link from 'next/link';
import { useProfile } from '@/hooks/useProfile';
import { getServiceById } from '@/lib/data';
import { toggleSavedService } from '@/lib/profile-store';
import { ProfileSubPage } from './ProfileSubPage';

export function ProfileSaved() {
  const { profile, ready, refresh } = useProfile();

  if (!ready || !profile) return null;

  const saved = profile.savedServiceIds
    .map((id) => getServiceById(id))
    .filter(Boolean);

  return (
    <ProfileSubPage title="Saved services">
      {saved.length === 0 ? (
        <div className="profile-empty profile-card">
          <p>Save services you like while browsing.</p>
          <Link href="/services" className="btn-primary">Explore services</Link>
        </div>
      ) : (
        <ul className="profile-list">
          {saved.map((service) => (
            <li key={service!.id} className="profile-card profile-saved-item">
              <div>
                <strong>{service!.name}</strong>
                <p className="profile-meta">{service!.price}</p>
              </div>
              <div className="profile-saved-actions">
                <Link href={`/services/${service!.category}/${service!.id}`} className="btn-secondary btn-sm">
                  View
                </Link>
                <button
                  type="button"
                  className="btn-text-danger"
                  onClick={() => {
                    toggleSavedService(service!.id);
                    refresh();
                  }}
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </ProfileSubPage>
  );
}
