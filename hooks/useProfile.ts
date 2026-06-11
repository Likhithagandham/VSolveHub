'use client';

import { useCallback, useEffect, useState } from 'react';
import {
  ensureDefaultSession,
  getProfileData,
  getSession,
  type ProfileData,
  type Session,
} from '@/lib/profile-store';

export function useProfile() {
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [ready, setReady] = useState(false);

  const refresh = useCallback(() => {
    ensureDefaultSession();
    setProfile(getProfileData());
    setSession(getSession());
    setReady(true);
  }, []);

  useEffect(() => {
    refresh();
    const onUpdate = () => refresh();
    window.addEventListener('vsh-profile-update', onUpdate);
    return () => window.removeEventListener('vsh-profile-update', onUpdate);
  }, [refresh]);

  return {
    profile,
    session,
    ready,
    isLoggedIn: !!session,
    refresh,
  };
}
