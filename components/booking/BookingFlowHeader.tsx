'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const STEPS = ['Book', 'OTP', 'Confirm', 'Track'] as const;

function getActiveStep(pathname: string) {
  if (pathname === '/booking/track') return 3;
  if (pathname === '/booking/confirm') return 2;
  if (pathname === '/booking/otp') return 1;
  return 0;
}

export function BookingFlowHeader() {
  const pathname = usePathname();
  const active = getActiveStep(pathname);

  return (
    <header className="booking-flow-header">
      <Link href="/" className="booking-flow-brand">
        VSolveHub
      </Link>
      <nav className="booking-flow-steps" aria-label="Booking progress">
        {STEPS.map((label, index) => (
          <span
            key={label}
            className={`booking-flow-step${index < active ? ' is-done' : ''}${index === active ? ' is-active' : ''}`}
          >
            {label}
          </span>
        ))}
      </nav>
    </header>
  );
}
