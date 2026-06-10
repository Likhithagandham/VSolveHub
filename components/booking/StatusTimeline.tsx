'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { BOOKING_STATUSES, Booking, getBooking } from '@/lib/data';

export function StatusTimeline() {
  const router = useRouter();
  const [booking, setBooking] = useState<Booking | null>(null);

  useEffect(() => {
    const b = getBooking();
    if (!b) {
      router.replace('/');
      return;
    }
    setBooking(b);
  }, [router]);

  if (!booking) return null;

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
      <p className="lead-hint">{booking.serviceName} · {booking.date} · {booking.location}</p>
    </div>
  );
}
