'use client';

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

  return (
    <div className="booking-summary">
      <p className="booking-ref">Reference: <strong>{booking.bookingId}</strong></p>
      <ul className="booking-details">
        <li><span>Service</span><span>{booking.serviceName}</span></li>
        <li><span>Category</span><span>{booking.categoryName}</span></li>
        <li><span>Name</span><span>{booking.name}</span></li>
        <li><span>Phone</span><span>+91 {booking.phone}</span></li>
        <li><span>Date</span><span>{booking.date}</span></li>
        <li><span>Location</span><span>{booking.location}</span></li>
        <li><span>Status</span><span className="status-badge status-confirmed">Confirmed</span></li>
      </ul>
      <Link href="/booking/track" className="btn-primary">Track Booking</Link>
    </div>
  );
}
