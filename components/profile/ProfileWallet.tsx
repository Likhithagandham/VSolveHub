'use client';

import { useProfile } from '@/hooks/useProfile';
import { addWalletCredit } from '@/lib/profile-store';
import { ProfileSubPage } from './ProfileSubPage';

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
}

export function ProfileWallet() {
  const { profile, ready, refresh } = useProfile();

  if (!ready || !profile) return null;

  return (
    <ProfileSubPage title="Wallet">
      <div className="profile-wallet-balance profile-card">
        <p className="profile-wallet-label">Available balance</p>
        <p className="profile-wallet-amount">₹{profile.walletBalance}</p>
        <button
          type="button"
          className="btn-primary"
          onClick={() => {
            addWalletCredit(500, 'Added via UPI');
            refresh();
          }}
        >
          Add ₹500 (demo)
        </button>
      </div>

      <h2 className="profile-section-label">Recent transactions</h2>
      {profile.walletTransactions.length === 0 ? (
        <p className="profile-meta">No transactions yet.</p>
      ) : (
        <ul className="profile-list">
          {profile.walletTransactions.map((tx) => (
            <li key={tx.id} className="profile-card profile-tx-item">
              <div>
                <strong>{tx.label}</strong>
                <p className="profile-meta">{formatDate(tx.date)}</p>
              </div>
              <span className={tx.type === 'credit' ? 'profile-tx-credit' : 'profile-tx-debit'}>
                {tx.type === 'credit' ? '+' : '−'}₹{tx.amount}
              </span>
            </li>
          ))}
        </ul>
      )}
    </ProfileSubPage>
  );
}
