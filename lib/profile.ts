export const PROFILE_QUICK_ACTIONS = [
  { id: 'bookings', label: 'My bookings', href: '/profile/bookings' },
  { id: 'saved', label: 'Saved services', href: '/profile/saved' },
  { id: 'help', label: 'Help & support', href: '/faq' },
] as const;

export const PROFILE_MENU = [
  { id: 'plans', label: 'My plans', href: '/profile/plans' },
  { id: 'wallet', label: 'Wallet', href: '/profile/wallet' },
  { id: 'membership', label: 'Plus membership', href: '/profile/membership' },
  { id: 'rating', label: 'My rating', href: '/profile/rating' },
  { id: 'addresses', label: 'Manage addresses', href: '/profile/addresses' },
  { id: 'payments', label: 'Manage payment methods', href: '/profile/payments' },
  { id: 'settings', label: 'Settings', href: '/profile/settings' },
  { id: 'about', label: 'About VSolveHub', href: '/about' },
] as const;
