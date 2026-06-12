'use client';

import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Booking, getBooking } from '@/lib/data';

export function BookingSummary() {
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

  const rows: { label: string; value: ReactNode }[] = [
    { label: 'Service', value: booking.serviceName },
    { label: 'Category', value: booking.categoryName },
    { label: 'Name', value: booking.name },
    { label: 'Phone', value: `+91 ${booking.phone}` },
    { label: 'Date', value: booking.date },
    { label: 'Location', value: booking.location },
    {
      label: 'Status',
      value: <span className="status-badge status-confirmed">Confirmed</span>,
    },
  ];

  return (
    <div className="booking-summary">
      <p className="booking-ref">
        Reference <strong>{booking.bookingId}</strong>
      </p>
      <ul className="booking-details">
        {rows.map((row) => (
          <li key={row.label}>
            <span className="booking-details-label">{row.label}</span>
            <span className="booking-details-value">{row.value}</span>
          </li>
        ))}
      </ul>
      <div className="booking-actions">
        <Link href="/booking/track" className="btn-primary booking-track-btn">
          Track booking
        </Link>
        <Link href="/profile/bookings" className="btn-secondary booking-list-btn">
          View all bookings
        </Link>
      </div>
    </div>
  );
}
