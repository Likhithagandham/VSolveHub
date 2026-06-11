import type { Metadata, Viewport } from 'next';
import { Roboto } from 'next/font/google';
import { MobileBottomNav } from '@/components/layout/MobileBottomNav';
import './globals.css';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: 'VSolveHub — Quick Service Hub',
  description: "India's all-in-one doorstep services marketplace.",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#FD4C4A',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={roboto.variable}>
      <body>
        <div className="app-shell">{children}</div>
        <MobileBottomNav />
      </body>
    </html>
  );
}
