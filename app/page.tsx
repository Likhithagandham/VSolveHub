import Link from 'next/link';
import { CategoryCardList } from '@/components/services/CategoryCardList';
import { CategoryChips } from '@/components/home/CategoryChips';
import { HomeHeader } from '@/components/home/HomeHeader';
import { HomeHowItWorks } from '@/components/home/HomeHowItWorks';
import { HomePopularPicks } from '@/components/home/HomePopularPicks';
import { HomeTestimonials } from '@/components/home/HomeTestimonials';
import { HomeTrustStrip } from '@/components/home/HomeTrustStrip';
import { OngoingBookingCard } from '@/components/home/OngoingBookingCard';
import { TopProfessionals } from '@/components/home/TopProfessionals';
import { CATEGORIES, getTotalServiceCount } from '@/lib/data';

function greeting() {
  const h = new Date().getHours();
  if (h < 12) return 'Good morning';
  if (h < 17) return 'Good afternoon';
  return 'Good evening';
}

export default function HomePage() {
  const total = getTotalServiceCount();

  return (
    <div className="page-home">
      <HomeHeader />

      <main className="home-main">
        <section className="home-greeting" aria-label="Welcome">
          <h1>{greeting()}, Rahul 👋</h1>
          <p>What service do you need today?</p>
        </section>

        <div className="home-stats" aria-label="Service highlights">
          <div className="home-stat">
            <strong>{total}+</strong>
            <span>Services</span>
          </div>
          <div className="home-stat">
            <strong>{CATEGORIES.length}</strong>
            <span>Categories</span>
          </div>
          <div className="home-stat">
            <strong>30m</strong>
            <span>Callback</span>
          </div>
        </div>

        <CategoryChips />
        <HomePopularPicks />
        <OngoingBookingCard />
        <TopProfessionals />

        <section className="home-section" aria-labelledby="home-browse-heading">
          <div className="home-section-head">
            <h2 id="home-browse-heading" className="home-section-title">Browse all categories</h2>
            <Link href="/services" className="home-section-link">Services hub</Link>
          </div>
          <p className="home-section-sub">Pick a category, then a sub-category, then book your service.</p>
          <CategoryCardList categories={CATEGORIES} />
        </section>

        <HomeHowItWorks />
        <HomeTestimonials />
        <HomeTrustStrip />
      </main>
    </div>
  );
}
