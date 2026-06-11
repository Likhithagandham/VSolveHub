'use client';

import { FormEvent, useState } from 'react';
import { useProfile } from '@/hooks/useProfile';
import { addAddress, removeAddress, updateAddress } from '@/lib/profile-store';
import { ProfileSubPage } from './ProfileSubPage';

export function ProfileAddresses() {
  const { profile, ready, refresh } = useProfile();
  const [showForm, setShowForm] = useState(false);

  if (!ready || !profile) return null;

  function onAdd(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    addAddress({
      label: (form.elements.namedItem('label') as HTMLInputElement).value.trim(),
      line1: (form.elements.namedItem('line1') as HTMLInputElement).value.trim(),
      city: (form.elements.namedItem('city') as HTMLInputElement).value.trim(),
      pincode: (form.elements.namedItem('pincode') as HTMLInputElement).value.trim(),
      isDefault: (form.elements.namedItem('isDefault') as HTMLInputElement).checked,
    });
    form.reset();
    setShowForm(false);
    refresh();
  }

  return (
    <ProfileSubPage title="Manage addresses">
      <ul className="profile-list">
        {profile.addresses.map((addr) => (
          <li key={addr.id} className="profile-card">
            <div className="profile-booking-top">
              <strong>{addr.label}</strong>
              {addr.isDefault && <span className="profile-badge profile-badge--active">Default</span>}
            </div>
            <p>{addr.line1}</p>
            <p className="profile-meta">{addr.city} · {addr.pincode}</p>
            <div className="profile-saved-actions">
              {!addr.isDefault && (
                <button
                  type="button"
                  className="btn-secondary btn-sm"
                  onClick={() => {
                    updateAddress(addr.id, { isDefault: true });
                    refresh();
                  }}
                >
                  Set default
                </button>
              )}
              <button
                type="button"
                className="btn-text-danger"
                onClick={() => {
                  removeAddress(addr.id);
                  refresh();
                }}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      {showForm ? (
        <form className="profile-form profile-card" onSubmit={onAdd}>
          <div className="form-field">
            <label htmlFor="addr-label">Label</label>
            <input id="addr-label" name="label" placeholder="Home, Office…" required />
          </div>
          <div className="form-field">
            <label htmlFor="addr-line1">Address</label>
            <input id="addr-line1" name="line1" placeholder="Flat, street, landmark" required />
          </div>
          <div className="form-field">
            <label htmlFor="addr-city">City</label>
            <input id="addr-city" name="city" defaultValue="Hyderabad" required />
          </div>
          <div className="form-field">
            <label htmlFor="addr-pincode">PIN code</label>
            <input id="addr-pincode" name="pincode" inputMode="numeric" pattern="[0-9]{6}" required />
          </div>
          <label className="profile-check">
            <input type="checkbox" name="isDefault" /> Set as default address
          </label>
          <button type="submit" className="btn-primary">Save address</button>
          <button type="button" className="btn-secondary profile-form-secondary" onClick={() => setShowForm(false)}>
            Cancel
          </button>
        </form>
      ) : (
        <button type="button" className="btn-primary profile-add-btn" onClick={() => setShowForm(true)}>
          + Add new address
        </button>
      )}
    </ProfileSubPage>
  );
}
