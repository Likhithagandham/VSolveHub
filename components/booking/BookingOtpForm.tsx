'use client';

import { FormEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getBooking, markUserRegistered, saveBooking } from '@/lib/data';

function generateOtp() {
  return String(Math.floor(100000 + Math.random() * 900000));
}

export function BookingOtpForm() {
  const router = useRouter();
  const [booking, setBooking] = useState(getBooking());
  const [otpCode, setOtpCode] = useState<string | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const b = getBooking();
    if (!b) {
      router.replace('/');
      return;
    }
    setBooking(b);
    setOtpCode(generateOtp());
  }, [router]);

  if (!booking || !otpCode) return null;

  function resend() {
    setOtpCode(generateOtp());
    setError('');
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const entered = (e.currentTarget.elements.namedItem('otp') as HTMLInputElement).value.trim();
    if (entered !== otpCode) {
      setError('Invalid OTP. Please try again.');
      return;
    }
    markUserRegistered(booking!.phone);
    const updated = { ...booking!, otpVerified: true, status: 'confirmed' };
    saveBooking(updated);
    router.push('/booking/confirm');
  }

  return (
    <>
      <p className="lead-hint">
        Confirm booking for {booking.serviceName}. Verify +91 {booking.phone}.
      </p>
      <p className="lead-hint" id="otp-demo-hint">
        Demo OTP: {otpCode} (sent to +91 {booking.phone.slice(0, 2)}******{booking.phone.slice(-2)})
      </p>
      <form id="booking-otp-form" onSubmit={onSubmit}>
        <div className="form-field">
          <label htmlFor="booking-otp">6-digit OTP</label>
          <input type="text" id="booking-otp" name="otp" inputMode="numeric" pattern="[0-9]{6}" maxLength={6} required />
          {error && <span className="field-hint" style={{ color: 'crimson' }}>{error}</span>}
        </div>
        <button type="submit" className="btn-primary">Verify &amp; Confirm</button>
        <button type="button" className="btn-secondary" style={{ marginTop: 12 }} onClick={resend}>
          Resend OTP
        </button>
      </form>
    </>
  );
}
