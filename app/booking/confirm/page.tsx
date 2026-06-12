import { BookingSummary } from '@/components/booking/BookingSummary';

export const metadata = { title: 'Booking Confirmed — VSolveHub' };

export default function ConfirmPage() {
  return (
    <section className="booking-confirm">
      <div className="booking-confirm-hero">
        <span className="confirm-icon" aria-hidden="true">✓</span>
        <h1>Booking confirmed</h1>
        <p>We&apos;ve received your request. A VSolveHub coordinator will call you shortly.</p>
      </div>
      <BookingSummary />
    </section>
  );
}
