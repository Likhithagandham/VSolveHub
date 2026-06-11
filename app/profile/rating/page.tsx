import { ProfileRating } from '@/components/profile/ProfileRating';

export const metadata = { title: 'My Rating — VSolveHub' };

export default function ProfileRatingPage() {
  return (
    <div className="page-profile">
      <ProfileRating />
    </div>
  );
}
