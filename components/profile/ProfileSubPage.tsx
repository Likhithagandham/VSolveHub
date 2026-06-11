'use client';

import { useRouter } from 'next/navigation';

type ProfileSubPageProps = {
  title: string;
  children: React.ReactNode;
};

export function ProfileSubPage({ title, children }: ProfileSubPageProps) {
  const router = useRouter();

  return (
    <div className="profile-subpage">
      <header className="profile-subheader">
        <button
          type="button"
          className="profile-back"
          aria-label="Go back"
          onClick={() => router.push('/profile')}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M15 6l-6 6 6 6" />
          </svg>
        </button>
        <h1>{title}</h1>
      </header>
      <main className="profile-submain">{children}</main>
    </div>
  );
}
