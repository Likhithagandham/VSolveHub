'use client';

import { useProfile } from '@/hooks/useProfile';
import { updateSettings } from '@/lib/profile-store';
import { ProfileSubPage } from './ProfileSubPage';

export function ProfileSettings() {
  const { profile, ready, refresh } = useProfile();

  if (!ready || !profile) return null;
  const { settings } = profile;

  function toggle(key: 'notifications' | 'smsAlerts' | 'whatsappUpdates') {
    updateSettings({ [key]: !settings[key] });
    refresh();
  }

  return (
    <ProfileSubPage title="Settings">
      <div className="profile-card profile-settings-group">
        <h2 className="profile-section-label">Notifications</h2>
        <label className="profile-toggle">
          <span>Push notifications</span>
          <input
            type="checkbox"
            checked={settings.notifications}
            onChange={() => toggle('notifications')}
          />
        </label>
        <label className="profile-toggle">
          <span>SMS alerts</span>
          <input type="checkbox" checked={settings.smsAlerts} onChange={() => toggle('smsAlerts')} />
        </label>
        <label className="profile-toggle">
          <span>WhatsApp updates</span>
          <input
            type="checkbox"
            checked={settings.whatsappUpdates}
            onChange={() => toggle('whatsappUpdates')}
          />
        </label>
      </div>

      <div className="profile-card profile-settings-group">
        <h2 className="profile-section-label">Language</h2>
        <div className="form-field">
          <label htmlFor="settings-lang">App language</label>
          <select
            id="settings-lang"
            value={settings.language}
            onChange={(e) => {
              updateSettings({ language: e.target.value });
              refresh();
            }}
          >
            <option value="en">English</option>
            <option value="hi">Hindi</option>
            <option value="te">Telugu</option>
          </select>
        </div>
      </div>
    </ProfileSubPage>
  );
}
