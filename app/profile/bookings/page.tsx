import { ProfileBookings } from '@/components/profile/ProfileBookings';

export const metadata = { title: 'My Bookings — VSolveHub' };

export default function ProfileBookingsPage() {
  return (
    <div className="page-profile">
      <ProfileBookings />
    </div>
  );
}
