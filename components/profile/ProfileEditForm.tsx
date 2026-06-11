'use client';

import { FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { useProfile } from '@/hooks/useProfile';
import { updateUser } from '@/lib/profile-store';
import { ProfileSubPage } from './ProfileSubPage';

export function ProfileEditForm() {
  const router = useRouter();
  const { profile, ready } = useProfile();

  if (!ready || !profile) return null;

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value.trim();
    const phone = (form.elements.namedItem('phone') as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem('email') as HTMLInputElement).value.trim();
    updateUser({ name, phone: phone.replace(/\D/g, ''), email });
    router.push('/profile');
  }

  return (
    <ProfileSubPage title="Edit profile">
      <form className="profile-form profile-card" onSubmit={onSubmit}>
        <div className="form-field">
          <label htmlFor="edit-name">Full name</label>
          <input id="edit-name" name="name" type="text" defaultValue={profile.user.name} required />
        </div>
        <div className="form-field">
          <label htmlFor="edit-phone">Mobile number</label>
          <input
            id="edit-phone"
            name="phone"
            type="tel"
            defaultValue={profile.user.phone}
            inputMode="numeric"
            pattern="[0-9]{10}"
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="edit-email">Email</label>
          <input id="edit-email" name="email" type="email" defaultValue={profile.user.email} required />
        </div>
        <button type="submit" className="btn-primary">Save changes</button>
      </form>
    </ProfileSubPage>
  );
}
