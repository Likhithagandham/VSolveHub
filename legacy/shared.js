function initMobileMenu() {
  const menuBtn = document.querySelector('.btn-menu');
  const mobileMenu = document.getElementById('mobile-menu');
  if (!menuBtn || !mobileMenu) return;

  menuBtn.addEventListener('click', () => {
    const isOpen = !mobileMenu.hidden;
    mobileMenu.hidden = isOpen;
    menuBtn.setAttribute('aria-expanded', String(!isOpen));
    menuBtn.textContent = isOpen ? 'Menu' : 'Close';
  });

  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.hidden = true;
      menuBtn.setAttribute('aria-expanded', 'false');
      menuBtn.textContent = 'Menu';
    });
  });
}

function initLangToggle() {
  document.querySelector('.lang-toggle')?.addEventListener('click', () => {
    const label = document.querySelector('.lang-label');
    const cycle = { EN: 'TE', TE: 'HI', HI: 'EN' };
    label.textContent = cycle[label.textContent] || 'EN';
  });
}

function initNewsletterForm() {
  const form = document.getElementById('newsletter-form');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thanks for subscribing to VSolveHub updates!');
    form.reset();
  });
}

function initStickyWhatsAppStrip() {
  const strip = document.getElementById('whatsapp-strip');
  if (!strip) return;

  const showAfter = 300;
  const onScroll = () => {
    strip.classList.toggle('is-visible', window.scrollY > showAfter);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initLangToggle();
  initNewsletterForm();
  initStickyWhatsAppStrip();
});
