function renderFaqCategories(filter = '') {
  const container = document.getElementById('faq-categories');
  const noResults = document.getElementById('faq-no-results');
  const q = filter.toLowerCase().trim();

  let totalVisible = 0;

  container.innerHTML = FAQ_DATA.map((cat) => {
    const items = cat.items.filter((item) => {
      if (!q) return true;
      return item.q.toLowerCase().includes(q) || item.a.toLowerCase().includes(q);
    });

    if (items.length === 0) return '';

    totalVisible += items.length;

    const itemsHtml = items.map((item) => `
      <details class="faq-item" data-question="${item.q.toLowerCase()}">
        <summary class="faq-question">${item.q}</summary>
        <div class="faq-answer">
          <div class="faq-answer-inner">
            <p>${item.a}</p>
          </div>
        </div>
      </details>
    `).join('');

    return `
      <section class="faq-category" data-category="${cat.category}">
        <h2 class="faq-category-title">${cat.title}</h2>
        <div class="faq-accordion">${itemsHtml}</div>
      </section>
    `;
  }).join('');

  noResults.hidden = totalVisible > 0;
}

document.addEventListener('DOMContentLoaded', () => {
  renderFaqCategories();

  const search = document.getElementById('faq-search');
  search?.addEventListener('input', (e) => {
    renderFaqCategories(e.target.value);
  });

  const waUrl = getWhatsAppUrl('Hi VSolveHub, I have a question');
  document.getElementById('faq-whatsapp')?.setAttribute('href', waUrl);
  document.getElementById('footer-whatsapp')?.setAttribute('href', waUrl);
});
