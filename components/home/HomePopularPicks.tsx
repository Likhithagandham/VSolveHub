import Link from 'next/link';
import { FEATURED_PICKS } from '@/lib/data';

export function HomePopularPicks() {
  return (
    <section className="home-section" aria-labelledby="home-popular-heading">
      <div className="home-section-head">
        <h2 id="home-popular-heading" className="home-section-title">Popular right now</h2>
        <Link href="/services" className="home-section-link">See all</Link>
      </div>
      <div className="home-featured-scroll">
        {FEATURED_PICKS.map((pick) => (
          <Link
            key={`${pick.categoryId}-${pick.slug}`}
            href={`/services/${pick.categoryId}/${pick.slug}`}
            className="home-featured-card"
          >
            <span className="home-featured-label">{pick.label}</span>
            <span className="home-featured-sub">{pick.subtitle}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
