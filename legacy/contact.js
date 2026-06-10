document.addEventListener('DOMContentLoaded', () => {
  const waUrl = getWhatsAppUrl('Hi VSolveHub, I have an enquiry');

  document.getElementById('strip-whatsapp')?.setAttribute('href', waUrl);
  document.getElementById('social-whatsapp')?.setAttribute('href', waUrl);
  document.getElementById('footer-whatsapp')?.setAttribute('href', waUrl);

  document.getElementById('strip-phone-text').textContent = CONTACT_PHONE;
  document.getElementById('strip-email-text').textContent = CONTACT_EMAIL;
  document.getElementById('strip-phone')?.setAttribute('href', `tel:${CONTACT_PHONE.replace(/\s/g, '')}`);
  document.getElementById('strip-email')?.setAttribute('href', `mailto:${CONTACT_EMAIL}`);

  document.getElementById('map-address').textContent = CONTACT_ADDRESS;
  document.getElementById('map-iframe')?.setAttribute('src', MAPS_EMBED_URL);

  document.getElementById('contact-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contact-name').value;
    alert(`Thank you ${name}! We've received your enquiry and will respond soon.`);
    e.target.reset();
  });
});
