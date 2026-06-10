import { BookingSummary } from '@/components/booking/BookingSummary';

export const metadata = { title: 'Booking Confirmed — VSolveHub' };

export default function ConfirmPage() {
  return (
    <section className="section booking-card-section">
      <div className="section-inner booking-card">
        <h1 className="section-title">Booking confirmed</h1>
        <p className="lead-hint">We&apos;ve received your request. A VSolveHub coordinator will call you shortly.</p>
        <BookingSummary />
      </div>
    </section>
  );
}
