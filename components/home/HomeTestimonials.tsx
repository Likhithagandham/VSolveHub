import { TESTIMONIALS } from '@/lib/data';

export function HomeTestimonials() {
  return (
    <section className="home-section" aria-labelledby="home-reviews-heading">
      <h2 id="home-reviews-heading" className="home-section-title">What customers say</h2>
      <div className="home-testimonials">
        {TESTIMONIALS.map((t) => (
          <blockquote key={`${t.author}-${t.city}`} className="home-testimonial">
            <p>&ldquo;{t.quote}&rdquo;</p>
            <footer>
              <strong>{t.author}</strong>
              <span>{t.city}</span>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
