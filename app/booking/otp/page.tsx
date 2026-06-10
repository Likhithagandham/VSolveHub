import { BookingOtpForm } from '@/components/booking/BookingOtpForm';

export const metadata = { title: 'Verify Phone — VSolveHub' };

export default function BookingOtpPage() {
  return (
    <section className="section booking-card-section">
      <div className="section-inner booking-card">
        <h1 className="section-title">Verify your phone</h1>
        <BookingOtpForm />
      </div>
    </section>
  );
}
