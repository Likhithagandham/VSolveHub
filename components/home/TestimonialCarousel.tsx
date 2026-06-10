'use client';

import { useEffect, useState } from 'react';
import { TESTIMONIALS } from '@/lib/data';

export function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setCurrent((c) => (c + 1) % TESTIMONIALS.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="carousel" id="testimonials-carousel">
      <div className="carousel-track" style={{ transform: `translateX(-${current * 100}%)` }}>
        {TESTIMONIALS.map((t, i) => (
          <blockquote key={i} className="carousel-slide" data-index={i}>
            <p>&ldquo;{t.quote}&rdquo;</p>
            <cite>— {t.author}, {t.city}</cite>
          </blockquote>
        ))}
      </div>
      <div className="carousel-controls">
        <button type="button" className="carousel-btn" aria-label="Previous testimonial" onClick={() => setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}>←</button>
        <div className="carousel-dots">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`carousel-dot${i === current ? ' active' : ''}`}
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => setCurrent(i)}
            />
          ))}
        </div>
        <button type="button" className="carousel-btn" aria-label="Next testimonial" onClick={() => setCurrent((c) => (c + 1) % TESTIMONIALS.length)}>→</button>
      </div>
    </div>
  );
}
