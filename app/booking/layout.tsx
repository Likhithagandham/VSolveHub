import { BookingFlowHeader } from '@/components/booking/BookingFlowHeader';

export default function BookingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="page-booking">
      <BookingFlowHeader />
      <main className="booking-main">{children}</main>
    </div>
  );
}
