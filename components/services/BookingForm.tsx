'use client';

import { FormEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Booking,
  generateBookingId,
  getCategory,
  isReturningUser,
  saveBooking,
} from '@/lib/data';
import { addBookingToHistory, getProfileData, loginSession } from '@/lib/profile-store';

type BookingFormProps = {
  serviceId: number;
  serviceName: string;
  categoryId: string;
};

export function BookingForm({ serviceId, serviceName, categoryId }: BookingFormProps) {
  const router = useRouter();
  const category = getCategory(categoryId);
  const today = new Date().toISOString().split('T')[0];
  const [defaults, setDefaults] = useState({ name: '', phone: '' });

  useEffect(() => {
    const profile = getProfileData();
    setDefaults({ name: profile.user.name, phone: profile.user.phone });
  }, []);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value.trim();
    const phone = (form.elements.namedItem('phone') as HTMLInputElement).value.trim();
    const date = (form.elements.namedItem('date') as HTMLInputElement).value;
    const location = (form.elements.namedItem('location') as HTMLInputElement).value.trim();

    const booking: Booking = {
      bookingId: generateBookingId(),
      name,
      phone,
      serviceId,
      serviceName,
      categoryId,
      categoryName: category?.name || '',
      date,
      location,
      status: 'pending',
      createdAt: new Date().toISOString(),
    };

    loginSession(phone);

    if (isReturningUser(phone)) {
      booking.status = 'confirmed';
      booking.otpVerified = true;
      saveBooking(booking);
      addBookingToHistory(booking);
      router.push('/booking/confirm');
    } else {
      saveBooking(booking);
      router.push('/booking/otp');
    }
  }

  return (
    <form className="enquiry-form" onSubmit={onSubmit}>
      <div className="form-field">
        <label htmlFor="booking-name">Your Name</label>
        <input type="text" id="booking-name" name="name" placeholder="Full name" defaultValue={defaults.name} required />
      </div>
      <div className="form-field">
        <label htmlFor="booking-phone">Phone Number</label>
        <input type="tel" id="booking-phone" name="phone" placeholder="10-digit mobile number" inputMode="numeric" pattern="[0-9]{10}" defaultValue={defaults.phone} required />
        <span className="field-hint">We&apos;ll call to confirm your booking</span>
      </div>
      <div className="form-field">
        <label htmlFor="booking-date">Preferred Date</label>
        <input type="date" id="booking-date" name="date" min={today} required />
      </div>
      <div className="form-field">
        <label htmlFor="booking-location">Location / Area</label>
        <input type="text" id="booking-location" name="location" placeholder="City, area or landmark" required />
        <span className="field-hint">Helps us assign the nearest worker</span>
      </div>
      <button type="submit" className="btn-primary">Submit Booking</button>
    </form>
  );
}
