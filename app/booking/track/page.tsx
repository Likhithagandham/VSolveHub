import { StatusTimeline } from '@/components/booking/StatusTimeline';

export const metadata = { title: 'Track Booking — VSolveHub' };

export default function TrackPage() {
  return (
    <section className="booking-step-card">
      <h1>Track your booking</h1>
      <p className="booking-step-hint">Live status updates for your service request.</p>
      <StatusTimeline />
    </section>
  );
}
