import type { Booking } from '@/lib/data';

const PROFILE_KEY = 'vsh_profile';
const SESSION_KEY = 'vsh_session';

export type UserProfile = {
  name: string;
  phone: string;
  email: string;
  referralCode: string;
};

export type Address = {
  id: string;
  label: string;
  line1: string;
  city: string;
  pincode: string;
  isDefault: boolean;
};

export type PaymentMethod = {
  id: string;
  type: 'upi' | 'card';
  label: string;
  detail: string;
  isDefault: boolean;
};

export type ServicePlan = {
  id: string;
  name: string;
  validUntil: string;
  bookingsLeft: number;
  status: 'active' | 'expired';
};

export type WalletTransaction = {
  id: string;
  type: 'credit' | 'debit';
  amount: number;
  label: string;
  date: string;
};

export type ProfileReview = {
  id: string;
  proName: string;
  serviceName: string;
  rating: number;
  comment: string;
  date: string;
};

export type ProfileSettings = {
  notifications: boolean;
  smsAlerts: boolean;
  whatsappUpdates: boolean;
  language: string;
};

export type ProfileData = {
  user: UserProfile;
  walletBalance: number;
  walletTransactions: WalletTransaction[];
  membership: {
    active: boolean;
    planName: string;
    expiresAt: string | null;
    savingsTotal: number;
  };
  rating: number;
  ratingCount: number;
  reviews: ProfileReview[];
  addresses: Address[];
  paymentMethods: PaymentMethod[];
  savedServiceIds: number[];
  settings: ProfileSettings;
  plans: ServicePlan[];
  referralCount: number;
  bookings: Booking[];
};

export type Session = {
  phone: string;
  loggedInAt: string;
};

function uid() {
  return `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`;
}

export function initialsFromName(name: string) {
  return (
    name
      .trim()
      .split(/\s+/)
      .map((w) => w[0])
      .join('')
      .slice(0, 2)
      .toUpperCase() || 'U'
  );
}

function defaultProfile(): ProfileData {
  const today = new Date();
  const nextMonth = new Date(today);
  nextMonth.setMonth(nextMonth.getMonth() + 1);

  return {
    user: {
      name: 'Rahul',
      phone: '9000000000',
      email: 'rahul@example.com',
      referralCode: 'VSHRAHUL',
    },
    walletBalance: 250,
    walletTransactions: [
      { id: 'wt1', type: 'credit', amount: 100, label: 'Welcome bonus', date: today.toISOString() },
      { id: 'wt2', type: 'credit', amount: 150, label: 'Referral reward', date: today.toISOString() },
    ],
    membership: {
      active: false,
      planName: 'VSolveHub Plus',
      expiresAt: null,
      savingsTotal: 0,
    },
    rating: 4.8,
    ratingCount: 12,
    reviews: [
      {
        id: 'rv1',
        proName: 'Suresh K.',
        serviceName: 'Plumbing repair',
        rating: 5,
        comment: 'Fixed the leak quickly and cleanly.',
        date: new Date(today.getTime() - 86400000 * 5).toISOString(),
      },
      {
        id: 'rv2',
        proName: 'Meena R.',
        serviceName: 'Bridal makeup trial',
        rating: 5,
        comment: 'Loved the look — very professional.',
        date: new Date(today.getTime() - 86400000 * 12).toISOString(),
      },
    ],
    addresses: [
      {
        id: 'addr1',
        label: 'Home',
        line1: 'Flat 204, Green Heights, Gachibowli',
        city: 'Hyderabad',
        pincode: '500032',
        isDefault: true,
      },
      {
        id: 'addr2',
        label: 'Office',
        line1: 'HITEC City, Phase 2',
        city: 'Hyderabad',
        pincode: '500081',
        isDefault: false,
      },
    ],
    paymentMethods: [
      {
        id: 'pm1',
        type: 'upi',
        label: 'Google Pay',
        detail: 'rahul@okaxis',
        isDefault: true,
      },
    ],
    savedServiceIds: [2001, 2002, 2003],
    settings: {
      notifications: true,
      smsAlerts: true,
      whatsappUpdates: true,
      language: 'en',
    },
    plans: [
      {
        id: 'plan1',
        name: 'Home Care Pack',
        validUntil: nextMonth.toISOString().split('T')[0],
        bookingsLeft: 2,
        status: 'active',
      },
    ],
    referralCount: 3,
    bookings: [],
  };
}

function readProfile(): ProfileData {
  if (typeof window === 'undefined') return defaultProfile();
  try {
    const raw = localStorage.getItem(PROFILE_KEY);
    if (!raw) return defaultProfile();
    const parsed = JSON.parse(raw) as ProfileData;
    return { ...defaultProfile(), ...parsed, user: { ...defaultProfile().user, ...parsed.user } };
  } catch {
    return defaultProfile();
  }
}

function writeProfile(data: ProfileData) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(PROFILE_KEY, JSON.stringify(data));
  window.dispatchEvent(new Event('vsh-profile-update'));
}

export function getProfileData(): ProfileData {
  return readProfile();
}

export function saveProfileData(data: ProfileData) {
  writeProfile(data);
}

export function getSession(): Session | null {
  if (typeof window === 'undefined') return null;
  try {
    return JSON.parse(localStorage.getItem(SESSION_KEY) || 'null');
  } catch {
    return null;
  }
}

export function isLoggedIn() {
  return !!getSession();
}

export function loginSession(phone: string) {
  if (typeof window === 'undefined') return;
  const session: Session = { phone, loggedInAt: new Date().toISOString() };
  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  const profile = readProfile();
  if (profile.user.phone !== phone) {
    profile.user.phone = phone;
    writeProfile(profile);
  }
  window.dispatchEvent(new Event('vsh-profile-update'));
}

export function logoutSession() {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(SESSION_KEY);
  window.dispatchEvent(new Event('vsh-profile-update'));
}

/** Seed session on first visit so profile works out of the box */
export function ensureDefaultSession() {
  if (typeof window === 'undefined') return;
  if (!getSession()) {
    const profile = readProfile();
    loginSession(profile.user.phone);
  }
  if (!localStorage.getItem(PROFILE_KEY)) {
    writeProfile(defaultProfile());
  }
}

export function updateUser(patch: Partial<UserProfile>) {
  const data = readProfile();
  data.user = { ...data.user, ...patch };
  if (patch.name) {
    data.user.referralCode = `VSH${patch.name.replace(/\s/g, '').slice(0, 6).toUpperCase()}`;
  }
  writeProfile(data);
  return data.user;
}

export function addBookingToHistory(booking: Booking) {
  const data = readProfile();
  const exists = data.bookings.some((b) => b.bookingId === booking.bookingId);
  if (!exists) {
    data.bookings.unshift(booking);
  } else {
    data.bookings = data.bookings.map((b) =>
      b.bookingId === booking.bookingId ? booking : b
    );
  }
  if (booking.name && booking.phone) {
    data.user.name = booking.name;
    data.user.phone = booking.phone;
  }
  writeProfile(data);
}

export function toggleSavedService(serviceId: number) {
  const data = readProfile();
  const idx = data.savedServiceIds.indexOf(serviceId);
  if (idx >= 0) data.savedServiceIds.splice(idx, 1);
  else data.savedServiceIds.push(serviceId);
  writeProfile(data);
  return data.savedServiceIds.includes(serviceId);
}

export function isServiceSaved(serviceId: number) {
  return readProfile().savedServiceIds.includes(serviceId);
}

export function addAddress(addr: Omit<Address, 'id'>) {
  const data = readProfile();
  const entry: Address = { ...addr, id: uid() };
  if (entry.isDefault) {
    data.addresses = data.addresses.map((a) => ({ ...a, isDefault: false }));
  }
  data.addresses.push(entry);
  writeProfile(data);
  return entry;
}

export function updateAddress(id: string, patch: Partial<Address>) {
  const data = readProfile();
  data.addresses = data.addresses.map((a) => {
    if (a.id !== id) return patch.isDefault ? { ...a, isDefault: false } : a;
    return { ...a, ...patch };
  });
  writeProfile(data);
}

export function removeAddress(id: string) {
  const data = readProfile();
  data.addresses = data.addresses.filter((a) => a.id !== id);
  if (data.addresses.length && !data.addresses.some((a) => a.isDefault)) {
    data.addresses[0].isDefault = true;
  }
  writeProfile(data);
}

export function addPaymentMethod(method: Omit<PaymentMethod, 'id'>) {
  const data = readProfile();
  const entry: PaymentMethod = { ...method, id: uid() };
  if (entry.isDefault) {
    data.paymentMethods = data.paymentMethods.map((m) => ({ ...m, isDefault: false }));
  }
  data.paymentMethods.push(entry);
  writeProfile(data);
  return entry;
}

export function removePaymentMethod(id: string) {
  const data = readProfile();
  data.paymentMethods = data.paymentMethods.filter((m) => m.id !== id);
  if (data.paymentMethods.length && !data.paymentMethods.some((m) => m.isDefault)) {
    data.paymentMethods[0].isDefault = true;
  }
  writeProfile(data);
}

export function setDefaultPayment(id: string) {
  const data = readProfile();
  data.paymentMethods = data.paymentMethods.map((m) => ({
    ...m,
    isDefault: m.id === id,
  }));
  writeProfile(data);
}

export function addWalletCredit(amount: number, label: string) {
  const data = readProfile();
  data.walletBalance += amount;
  data.walletTransactions.unshift({
    id: uid(),
    type: 'credit',
    amount,
    label,
    date: new Date().toISOString(),
  });
  writeProfile(data);
}

export function useWalletBalance(amount: number, label: string) {
  const data = readProfile();
  if (data.walletBalance < amount) return false;
  data.walletBalance -= amount;
  data.walletTransactions.unshift({
    id: uid(),
    type: 'debit',
    amount,
    label,
    date: new Date().toISOString(),
  });
  writeProfile(data);
  return true;
}

export function toggleMembership() {
  const data = readProfile();
  if (data.membership.active) {
    data.membership.active = false;
    data.membership.expiresAt = null;
  } else {
    const expires = new Date();
    expires.setMonth(expires.getMonth() + 12);
    data.membership.active = true;
    data.membership.expiresAt = expires.toISOString().split('T')[0];
    data.membership.savingsTotal = 480;
  }
  writeProfile(data);
  return data.membership.active;
}

export function updateSettings(patch: Partial<ProfileSettings>) {
  const data = readProfile();
  data.settings = { ...data.settings, ...patch };
  writeProfile(data);
}

export function applyReferralBonus() {
  const data = readProfile();
  data.referralCount += 1;
  data.walletBalance += 100;
  data.walletTransactions.unshift({
    id: uid(),
    type: 'credit',
    amount: 100,
    label: 'Referral shared',
    date: new Date().toISOString(),
  });
  writeProfile(data);
}

export async function shareReferral(code: string): Promise<'shared' | 'copied'> {
  const text = `Book doorstep services on VSolveHub! Use my code ${code} — we both earn ₹100 on your first booking.`;
  const url = typeof window !== 'undefined' ? window.location.origin : 'https://vsolvehub.com';
  if (typeof navigator !== 'undefined' && navigator.share) {
    await navigator.share({ title: 'VSolveHub Refer & Earn', text, url });
    applyReferralBonus();
    return 'shared';
  }
  if (typeof navigator !== 'undefined' && navigator.clipboard) {
    await navigator.clipboard.writeText(`${text}\n${url}`);
    applyReferralBonus();
    return 'copied';
  }
  applyReferralBonus();
  return 'copied';
}

export function formatPhone(phone: string) {
  const digits = phone.replace(/\D/g, '');
  if (digits.length === 10) return `+91 ${digits.slice(0, 5)} ${digits.slice(5)}`;
  if (digits.length === 12 && digits.startsWith('91')) {
    return `+91 ${digits.slice(2, 7)} ${digits.slice(7)}`;
  }
  return phone;
}
