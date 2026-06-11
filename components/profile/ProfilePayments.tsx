'use client';

import { FormEvent, useState } from 'react';
import { useProfile } from '@/hooks/useProfile';
import { addPaymentMethod, removePaymentMethod, setDefaultPayment } from '@/lib/profile-store';
import { ProfileSubPage } from './ProfileSubPage';

export function ProfilePayments() {
  const { profile, ready, refresh } = useProfile();
  const [showForm, setShowForm] = useState(false);

  if (!ready || !profile) return null;

  function onAdd(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const type = (form.elements.namedItem('type') as HTMLSelectElement).value as 'upi' | 'card';
    const label = (form.elements.namedItem('label') as HTMLInputElement).value.trim();
    const detail = (form.elements.namedItem('detail') as HTMLInputElement).value.trim();
    addPaymentMethod({
      type,
      label,
      detail,
      isDefault: (form.elements.namedItem('isDefault') as HTMLInputElement).checked,
    });
    form.reset();
    setShowForm(false);
    refresh();
  }

  return (
    <ProfileSubPage title="Payment methods">
      <ul className="profile-list">
        {profile.paymentMethods.map((pm) => (
          <li key={pm.id} className="profile-card">
            <div className="profile-booking-top">
              <strong>{pm.label}</strong>
              {pm.isDefault && <span className="profile-badge profile-badge--active">Default</span>}
            </div>
            <p className="profile-meta">{pm.type === 'upi' ? 'UPI' : 'Card'} · {pm.detail}</p>
            <div className="profile-saved-actions">
              {!pm.isDefault && (
                <button type="button" className="btn-secondary btn-sm" onClick={() => { setDefaultPayment(pm.id); refresh(); }}>
                  Set default
                </button>
              )}
              <button type="button" className="btn-text-danger" onClick={() => { removePaymentMethod(pm.id); refresh(); }}>
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>

      {showForm ? (
        <form className="profile-form profile-card" onSubmit={onAdd}>
          <div className="form-field">
            <label htmlFor="pm-type">Type</label>
            <select id="pm-type" name="type" defaultValue="upi">
              <option value="upi">UPI</option>
              <option value="card">Debit / Credit card</option>
            </select>
          </div>
          <div className="form-field">
            <label htmlFor="pm-label">Label</label>
            <input id="pm-label" name="label" placeholder="Google Pay, HDFC…" required />
          </div>
          <div className="form-field">
            <label htmlFor="pm-detail">UPI ID or last 4 digits</label>
            <input id="pm-detail" name="detail" placeholder="name@upi or •••• 4242" required />
          </div>
          <label className="profile-check">
            <input type="checkbox" name="isDefault" /> Set as default
          </label>
          <button type="submit" className="btn-primary">Save payment method</button>
          <button type="button" className="btn-secondary profile-form-secondary" onClick={() => setShowForm(false)}>
            Cancel
          </button>
        </form>
      ) : (
        <button type="button" className="btn-primary profile-add-btn" onClick={() => setShowForm(true)}>
          + Add payment method
        </button>
      )}
    </ProfileSubPage>
  );
}
