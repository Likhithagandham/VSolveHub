import { ProfileEditForm } from '@/components/profile/ProfileEditForm';

export const metadata = { title: 'Edit Profile — VSolveHub' };

export default function ProfileEditPage() {
  return (
    <div className="page-profile">
      <ProfileEditForm />
    </div>
  );
}
