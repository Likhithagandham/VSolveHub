'use client';

import { FormEvent, useState } from 'react';
import { loginSession, updateUser } from '@/lib/profile-store';

const DEMO_OTP = '123456';

export function ProfileLogin() {
  const [step, setStep] = useState<'phone' | 'otp'>('phone');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  function onPhoneSubmit(e: FormEvent) {
    e.preventDefault();
    const digits = phone.replace(/\D/g, '');
    if (digits.length !== 10) {
      setError('Enter a valid 10-digit mobile number.');
      return;
    }
    setError('');
    setStep('otp');
  }

  function onOtpSubmit(e: FormEvent) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const otp = (form.elements.namedItem('otp') as HTMLInputElement).value.trim();
    if (otp !== DEMO_OTP) {
      setError('Invalid OTP. Use 123456 for demo.');
      return;
    }
    const digits = phone.replace(/\D/g, '');
    if (name.trim()) updateUser({ name: name.trim(), phone: digits });
    else updateUser({ phone: digits });
    loginSession(digits);
    setError('');
  }

  return (
    <div className="profile-login">
      <h2>Sign in to VSolveHub</h2>
      <p className="profile-login-hint">Book faster, track orders, and manage your account.</p>

      {step === 'phone' ? (
        <form className="profile-form" onSubmit={onPhoneSubmit}>
          <div className="form-field">
            <label htmlFor="login-name">Name (optional)</label>
            <input
              id="login-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
            />
          </div>
          <div className="form-field">
            <label htmlFor="login-phone">Mobile number</label>
            <input
              id="login-phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="10-digit number"
              inputMode="numeric"
              pattern="[0-9]{10}"
              required
            />
          </div>
          {error && <p className="profile-form-error">{error}</p>}
          <button type="submit" className="btn-primary">Send OTP</button>
        </form>
      ) : (
        <form className="profile-form" onSubmit={onOtpSubmit}>
          <p className="profile-login-hint">
            Demo OTP for +91 {phone}: <strong>{DEMO_OTP}</strong>
          </p>
          <div className="form-field">
            <label htmlFor="login-otp">6-digit OTP</label>
            <input
              id="login-otp"
              name="otp"
              type="text"
              inputMode="numeric"
              pattern="[0-9]{6}"
              maxLength={6}
              required
            />
          </div>
          {error && <p className="profile-form-error">{error}</p>}
          <button type="submit" className="btn-primary">Verify &amp; sign in</button>
          <button type="button" className="btn-secondary profile-form-secondary" onClick={() => setStep('phone')}>
            Change number
          </button>
        </form>
      )}
    </div>
  );
}
