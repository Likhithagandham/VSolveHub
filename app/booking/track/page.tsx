import { StatusTimeline } from '@/components/booking/StatusTimeline';

export const metadata = { title: 'Track Booking — VSolveHub' };

export default function TrackPage() {
  return (
    <section className="section booking-card-section">
      <div className="section-inner booking-card">
        <h1 className="section-title">Track your booking</h1>
        <StatusTimeline />
      </div>
    </section>
  );
}
