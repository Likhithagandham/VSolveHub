import { CategoryChips } from '@/components/home/CategoryChips';
import { HomeHeader } from '@/components/home/HomeHeader';
import { OngoingBookingCard } from '@/components/home/OngoingBookingCard';
import { TopProfessionals } from '@/components/home/TopProfessionals';

function greeting() {
  const h = new Date().getHours();
  if (h < 12) return 'Good morning';
  if (h < 17) return 'Good afternoon';
  return 'Good evening';
}

export default function HomePage() {
  return (
    <div className="page-home">
      <HomeHeader />

      <main className="home-main">
        <section className="home-greeting" aria-label="Welcome">
          <h1>{greeting()}, Rahul 👋</h1>
          <p>What service do you need today?</p>
        </section>

        <CategoryChips />
        <OngoingBookingCard />
        <TopProfessionals />
      </main>
    </div>
  );
}
