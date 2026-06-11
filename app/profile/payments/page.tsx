import { ProfilePayments } from '@/components/profile/ProfilePayments';

export const metadata = { title: 'Payment Methods — VSolveHub' };

export default function ProfilePaymentsPage() {
  return (
    <div className="page-profile">
      <ProfilePayments />
    </div>
  );
}
