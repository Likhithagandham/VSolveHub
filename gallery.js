let activeFilter = 'all';
let visibleItems = [];
let lightboxIndex = 0;

function getAspectClass(aspect) {
  return `gallery-item--${aspect}`;
}

function buildPlaceholderSvg(item) {
  const h = item.aspect === 'tall' ? 320 : item.aspect === 'wide' ? 180 : 240;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="${h}"><rect fill="${item.color}" width="400" height="${h}"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#0A0A0A" font-family="sans-serif" font-size="14" opacity="0.4">${item.title}</text></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

function renderFilters() {
  const container = document.getElementById('gallery-filters');
  container.innerHTML = GALLERY_FILTERS.map((f) => `
    <button type="button" class="gallery-filter${f.id === activeFilter ? ' active' : ''}"
      data-filter="${f.id}" role="tab" aria-selected="${f.id === activeFilter}">
      ${f.label}
    </button>
  `).join('');

  container.querySelectorAll('.gallery-filter').forEach((btn) => {
    btn.addEventListener('click', () => {
      activeFilter = btn.dataset.filter;
      container.querySelectorAll('.gallery-filter').forEach((b) => {
        const on = b.dataset.filter === activeFilter;
        b.classList.toggle('active', on);
        b.setAttribute('aria-selected', on);
      });
      renderGallery();
    });
  });
}

function renderGallery() {
  const masonry = document.getElementById('gallery-masonry');
  const empty = document.getElementById('gallery-empty');

  visibleItems = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((i) => i.category === activeFilter);

  if (visibleItems.length === 0) {
    masonry.innerHTML = '';
    empty.hidden = false;
    return;
  }

  empty.hidden = true;
  masonry.innerHTML = visibleItems.map((item, index) => `
    <button type="button" class="gallery-item ${getAspectClass(item.aspect)} is-loading"
      data-index="${index}" aria-label="View ${item.title}">
      <div class="gallery-skeleton" aria-hidden="true"></div>
      <img data-src="${buildPlaceholderSvg(item)}" alt="${item.title}" loading="lazy" decoding="async">
      <span class="gallery-item-label">${item.title}</span>
    </button>
  `).join('');

  masonry.querySelectorAll('.gallery-item').forEach((el) => {
    const img = el.querySelector('img');
    const reveal = () => el.classList.remove('is-loading');

    if (img.complete) reveal();
    else {
      img.addEventListener('load', reveal);
      img.addEventListener('error', reveal);
    }
    img.src = img.dataset.src;

    el.addEventListener('click', () => openLightbox(Number(el.dataset.index)));
  });
}

function openLightbox(index) {
  lightboxIndex = index;
  const lightbox = document.getElementById('lightbox');
  lightbox.hidden = false;
  document.body.style.overflow = 'hidden';
  updateLightbox();
}

function closeLightbox() {
  document.getElementById('lightbox').hidden = true;
  document.body.style.overflow = '';
}

function updateLightbox() {
  const item = visibleItems[lightboxIndex];
  const wrap = document.getElementById('lightbox-image-wrap');
  document.getElementById('lightbox-caption').textContent = item.title;
  wrap.innerHTML = `<img src="${buildPlaceholderSvg(item)}" alt="${item.title}">`;
}

function initLightbox() {
  document.getElementById('lightbox-close')?.addEventListener('click', closeLightbox);
  document.getElementById('lightbox-prev')?.addEventListener('click', () => {
    lightboxIndex = (lightboxIndex - 1 + visibleItems.length) % visibleItems.length;
    updateLightbox();
  });
  document.getElementById('lightbox-next')?.addEventListener('click', () => {
    lightboxIndex = (lightboxIndex + 1) % visibleItems.length;
    updateLightbox();
  });
  document.getElementById('lightbox')?.addEventListener('click', (e) => {
    if (e.target.id === 'lightbox') closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (document.getElementById('lightbox').hidden) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') document.getElementById('lightbox-prev')?.click();
    if (e.key === 'ArrowRight') document.getElementById('lightbox-next')?.click();
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderFilters();
  renderGallery();
  initLightbox();
  document.getElementById('whatsapp-fab')?.setAttribute('href', getWhatsAppUrl('Hi VSolveHub, I saw your gallery'));
  document.getElementById('footer-whatsapp')?.setAttribute('href', getWhatsAppUrl('Hi VSolveHub'));
});
