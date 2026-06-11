'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { useProfile } from '@/hooks/useProfile';
import { BOOKING_STATUSES } from '@/lib/data';
import type { Booking } from '@/lib/data';
import { Emoji3D } from '@/components/ui/Emoji3D';
import { getQuickActionEmoji3d } from '@/lib/emoji-3d';
import { ProfileSubPage } from './ProfileSubPage';

type Filter = 'all' | 'active' | 'completed';

function isActiveStatus(status: string) {
  return status !== 'completed';
}

function formatDate(date: string) {
  try {
    return new Date(date).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  } catch {
    return date;
  }
}

function statusMeta(status: string) {
  return BOOKING_STATUSES.find((s) => s.id === status);
}

function BookingCard({ booking }: { booking: Booking }) {
  const meta = statusMeta(booking.status);
  const step = meta?.step ?? 0;
  const active = isActiveStatus(booking.status);
  const isLive = booking.status === 'in_progress';

  return (
    <Link
      href="/booking/track"
      className={`bookings-card${active ? ' bookings-card--active' : ''}`}
    >
      <div className="bookings-card-top">
        <span className={`bookings-status-badge bookings-status-badge--${booking.status}`}>
          {isLive && <span className="bookings-live-dot" aria-hidden="true" />}
          {meta?.label ?? booking.status}
        </span>
        <span className="bookings-ref">{booking.bookingId}</span>
      </div>

      <h2 className="bookings-service">{booking.serviceName}</h2>
      <p className="bookings-category">{booking.categoryName}</p>

      <div className="bookings-meta-row">
        <span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <rect x="4" y="5" width="16" height="15" rx="2" /><path d="M8 3v4M16 3v4M4 10h16" />
          </svg>
          {formatDate(booking.date)}
        </span>
        <span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M12 21s6-5.2 6-10a6 6 0 10-12 0c0 4.8 6 10 6 10z" /><circle cx="12" cy="11" r="2" />
          </svg>
          {booking.location}
        </span>
      </div>

      <div className="bookings-progress" aria-hidden="true">
        {BOOKING_STATUSES.map((s) => (
          <span
            key={s.id}
            className={`bookings-progress-step${s.step <= step ? ' is-done' : ''}${s.step === step ? ' is-current' : ''}`}
          />
        ))}
      </div>

      <div className="bookings-card-footer">
        <span className="bookings-pro">{booking.name}</span>
        <span className="bookings-track-btn">Track</span>
      </div>
    </Link>
  );
}

export function ProfileBookings() {
  const { profile, ready } = useProfile();
  const [filter, setFilter] = useState<Filter>('all');

  const bookings = profile?.bookings ?? [];

  const counts = useMemo(() => {
    const active = bookings.filter((b) => isActiveStatus(b.status)).length;
    return { all: bookings.length, active, completed: bookings.length - active };
  }, [bookings]);

  const filtered = useMemo(() => {
    if (filter === 'active') return bookings.filter((b) => isActiveStatus(b.status));
    if (filter === 'completed') return bookings.filter((b) => !isActiveStatus(b.status));
    return bookings;
  }, [bookings, filter]);

  return (
    <ProfileSubPage title="My bookings">
      {!ready || !profile ? (
        <p className="bookings-summary">Loading your bookings…</p>
      ) : (
        <>
      {bookings.length > 0 ? (
        <>
          <p className="bookings-summary">
            {counts.all} booking{counts.all === 1 ? '' : 's'}
            {counts.active > 0 ? ` · ${counts.active} active` : ''}
          </p>

          <div className="bookings-filters" role="tablist" aria-label="Filter bookings">
            {(
              [
                { id: 'all' as const, label: `All (${counts.all})` },
                { id: 'active' as const, label: `Active (${counts.active})` },
                { id: 'completed' as const, label: `Done (${counts.completed})` },
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={filter === tab.id}
                className={`bookings-filter${filter === tab.id ? ' is-active' : ''}`}
                onClick={() => setFilter(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </>
      ) : null}

      {bookings.length === 0 ? (
        <div className="bookings-empty">
          <span className="bookings-empty-icon" aria-hidden="true">
            <Emoji3D {...getQuickActionEmoji3d('bookings')} className="bookings-empty-emoji" />
          </span>
          <h2>No bookings yet</h2>
          <p>Book a service and track your pro here — we&apos;ll call you within 30 minutes.</p>
          <Link href="/services" className="btn-primary bookings-empty-cta">Browse services</Link>
        </div>
      ) : filtered.length === 0 ? (
        <p className="bookings-no-match">No {filter} bookings right now.</p>
      ) : (
        <ul className="bookings-list">
          {filtered.map((b) => (
            <li key={b.bookingId}>
              <BookingCard booking={b} />
            </li>
          ))}
        </ul>
      )}
        </>
      )}
    </ProfileSubPage>
  );
}
