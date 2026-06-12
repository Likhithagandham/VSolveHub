import { BookingOtpForm } from '@/components/booking/BookingOtpForm';

export const metadata = { title: 'Verify Phone — VSolveHub' };

export default function BookingOtpPage() {
  return (
    <section className="booking-step-card">
      <h1>Verify your phone</h1>
      <p className="booking-step-hint">Enter the 6-digit code we sent to your number.</p>
      <BookingOtpForm />
    </section>
  );
}
