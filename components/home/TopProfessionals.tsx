import Link from 'next/link';
import { TOP_PROFESSIONALS } from '@/lib/data';

export function TopProfessionals() {
  return (
    <section className="home-section" aria-labelledby="top-pros-heading">
      <div className="home-section-head">
        <h2 id="top-pros-heading" className="home-section-title">Top professionals</h2>
        <Link href="/services/technician" className="home-section-link">View all</Link>
      </div>
      <div className="pros-scroll">
        {TOP_PROFESSIONALS.map((pro) => (
          <Link key={pro.id} href={`/services/${pro.categoryId}`} className="pro-card">
            <div className="pro-card-top">
              <span className="pro-avatar" aria-hidden="true">{pro.initials}</span>
              <svg className="pro-verified" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <p className="pro-name">{pro.name}</p>
            <p className="pro-role">{pro.role}</p>
            <p className="pro-rating">
              ★ {pro.rating} <span>({pro.reviews})</span>
            </p>
            <span className="btn-pro-book">Book now</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
