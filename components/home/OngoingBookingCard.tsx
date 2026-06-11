import Link from 'next/link';
import { DEMO_ONGOING_BOOKING } from '@/lib/data';
import { Icon } from '@/components/ui/Icon';

export function OngoingBookingCard() {
  const b = DEMO_ONGOING_BOOKING;
  return (
    <section className="home-section" aria-label="Ongoing booking">
      <Link href="/booking/track" className="ongoing-card">
        <div className="ongoing-card-top">
          <span className="ongoing-badge">
            <span className="ongoing-badge-dot" aria-hidden="true" />
            Ongoing booking
          </span>
          <span className="ongoing-role-icon" aria-hidden="true">
            <Icon name={b.icon} />
          </span>
        </div>
        <p className="ongoing-name">{b.workerName}</p>
        <p className="ongoing-role">{b.role}</p>
        <div className="ongoing-footer">
          <span className="ongoing-status">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <rect x="1" y="6" width="15" height="10" rx="1" /><path d="M16 10h4l3 4v2h-7v-6z" /><circle cx="6" cy="18" r="2" /><circle cx="18" cy="18" r="2" />
            </svg>
            {b.status}
          </span>
          <span className="btn-track">Track</span>
        </div>
      </Link>
    </section>
  );
}
