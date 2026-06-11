import { ProfileSettings } from '@/components/profile/ProfileSettings';

export const metadata = { title: 'Settings — VSolveHub' };

export default function ProfileSettingsPage() {
  return (
    <div className="page-profile">
      <ProfileSettings />
    </div>
  );
}
