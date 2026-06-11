'use client';

import { useProfile } from '@/hooks/useProfile';
import { isServiceSaved, toggleSavedService } from '@/lib/profile-store';

export function SaveServiceButton({ serviceId }: { serviceId: number }) {
  const { refresh } = useProfile();
  const saved = isServiceSaved(serviceId);

  return (
    <button
      type="button"
      className={`btn-save-service${saved ? ' is-saved' : ''}`}
      onClick={() => {
        toggleSavedService(serviceId);
        refresh();
      }}
    >
      {saved ? '♥ Saved' : '♡ Save service'}
    </button>
  );
}
