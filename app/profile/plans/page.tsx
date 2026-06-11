import { ProfilePlans } from '@/components/profile/ProfilePlans';

export const metadata = { title: 'My Plans — VSolveHub' };

export default function ProfilePlansPage() {
  return (
    <div className="page-profile">
      <ProfilePlans />
    </div>
  );
}
