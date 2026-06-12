'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { BOOKING_STATUSES, Booking, getBooking } from '@/lib/data';
import { getProfileData } from '@/lib/profile-store';

export function StatusTimeline() {
  const [booking, setBooking] = useState<Booking | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const b = getBooking() ?? getProfileData().bookings[0] ?? null;
    setBooking(b);
    setReady(true);
  }, []);

  if (!ready) return null;

  if (!booking) {
    return (
      <div className="bookings-empty bookings-empty--inline">
        <h2>No active booking to track</h2>
        <p>Book a service or open an existing booking from your list.</p>
        <Link href="/profile/bookings" className="btn-primary bookings-empty-cta">View my bookings</Link>
      </div>
    );
  }

  const currentStep = BOOKING_STATUSES.find((s) => s.id === booking.status)?.step ?? 1;

  return (
    <div className="status-timeline">
      <p className="booking-ref">Booking <strong>{booking.bookingId}</strong></p>
      <ol className="timeline">
        {BOOKING_STATUSES.map((status) => (
          <li
            key={status.id}
            className={`timeline-step${status.step <= currentStep ? ' is-done' : ''}${status.step === currentStep ? ' is-current' : ''}`}
          >
            <span className="timeline-dot" />
            <span className="timeline-label">{status.label}</span>
          </li>
        ))}
      </ol>
      <p className="booking-step-hint">{booking.serviceName} · {booking.date} · {booking.location}</p>
    </div>
  );
}
