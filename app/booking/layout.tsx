import Link from 'next/link';

export default function BookingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="page-booking">
      <header className="site-header site-header--minimal">
        <Link href="/" className="logo"><span className="logo-mark">VSH</span></Link>
        <nav className="flow-steps" aria-label="Booking progress">
          <span className="flow-step done">Book</span>
          <span className="flow-step">OTP</span>
          <span className="flow-step">Confirm</span>
          <span className="flow-step">Track</span>
        </nav>
      </header>
      <main className="booking-main">{children}</main>
    </div>
  );
}
