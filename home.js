function renderCategoryGrid() {
  const grid = document.getElementById('category-grid');
  if (!grid) return;

  grid.innerHTML = CATEGORIES.map((cat) => `
    <a href="services.html?cat=${cat.id}" class="category-card" data-category="${cat.id}">
      <div class="category-card-icon" aria-hidden="true">${ICONS[cat.icon]}</div>
      <h3 class="category-card-title">${cat.name}</h3>
      <p class="category-card-tagline">${cat.tagline}</p>
      <span class="category-card-count">${cat.count} services</span>
      <span class="category-card-arrow" aria-hidden="true">${ARROW_SVG}</span>
    </a>
  `).join('');
}

function populateLeadSelect() {
  const select = document.getElementById('lead-service');
  if (!select) return;
  CATEGORIES.forEach((cat) => {
    const opt = document.createElement('option');
    opt.value = cat.id;
    opt.textContent = cat.name;
    select.appendChild(opt);
  });
}

function initTestimonialCarousel() {
  const track = document.getElementById('carousel-track');
  const dotsContainer = document.getElementById('carousel-dots');
  const prevBtn = document.getElementById('carousel-prev');
  const nextBtn = document.getElementById('carousel-next');
  if (!track || !dotsContainer) return;

  let current = 0;

  track.innerHTML = TESTIMONIALS.map((t, i) => `
    <blockquote class="carousel-slide" data-index="${i}">
      <p>"${t.quote}"</p>
      <cite>— ${t.author}, ${t.city}</cite>
    </blockquote>
  `).join('');

  dotsContainer.innerHTML = TESTIMONIALS.map((_, i) => `
    <button type="button" class="carousel-dot${i === 0 ? ' active' : ''}" data-index="${i}" aria-label="Go to testimonial ${i + 1}"></button>
  `).join('');

  const slides = track.querySelectorAll('.carousel-slide');
  const dots = dotsContainer.querySelectorAll('.carousel-dot');

  function goTo(index) {
    current = (index + TESTIMONIALS.length) % TESTIMONIALS.length;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === current));
  }

  prevBtn?.addEventListener('click', () => goTo(current - 1));
  nextBtn?.addEventListener('click', () => goTo(current + 1));
  dots.forEach((dot) => {
    dot.addEventListener('click', () => goTo(Number(dot.dataset.index)));
  });

  let autoplay = setInterval(() => goTo(current + 1), 5000);
  track.closest('.carousel')?.addEventListener('mouseenter', () => clearInterval(autoplay));
  track.closest('.carousel')?.addEventListener('mouseleave', () => {
    autoplay = setInterval(() => goTo(current + 1), 5000);
  });
}

function initLeadForm() {
  const form = document.getElementById('lead-form');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const phone = document.getElementById('lead-phone').value;
    const serviceName = document.getElementById('lead-service').selectedOptions[0].text;
    alert(`Thank you! We'll call ${phone} about ${serviceName} within 30 minutes.`);
    form.reset();
  });
}

function initWhatsAppLinks() {
  const msg = 'Hi VSolveHub, I need help with a service';
  const url = getWhatsAppUrl(msg);
  document.getElementById('whatsapp-strip-link')?.setAttribute('href', url);
  document.getElementById('footer-whatsapp')?.setAttribute('href', url);
}

document.addEventListener('DOMContentLoaded', () => {
  renderCategoryGrid();
  populateLeadSelect();
  initTestimonialCarousel();
  initLeadForm();
  initWhatsAppLinks();
});
