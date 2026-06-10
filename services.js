let activeSubCategory = 'all';
let currentCategoryId = '';

function getCategoryFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const cat = params.get('cat');
  return getCategory(cat) ? cat : CATEGORIES[0].id;
}

function renderServiceCard(service) {
  return `
    <article class="sub-service-card">
      <div class="sub-service-icon" aria-hidden="true">${ICONS[service.icon]}</div>
      <div class="sub-service-body">
        <h3 class="sub-service-title">${service.name}</h3>
        <p class="sub-service-desc">${service.description}</p>
        <p class="sub-service-price">${service.price}</p>
        <button type="button" class="btn-action sub-service-book" data-service-id="${service.id}" aria-label="Book ${service.name}">
          ${ARROW_SVG}
        </button>
      </div>
    </article>
  `;
}

function getFilteredServices(categoryId) {
  const all = getServicesByCategory(categoryId);
  if (activeSubCategory === 'all') return all;
  return all.filter((s) => s.subCategory === activeSubCategory);
}

function renderSubcategoryFilters(categoryId) {
  const container = document.getElementById('subcategory-filters');
  const subCats = getSubCategories(categoryId);

  if (subCats.length === 0) {
    container.hidden = true;
    return;
  }

  container.hidden = false;
  container.innerHTML = `
    <button type="button" class="gallery-filter active" data-sub="all" role="tab" aria-selected="true">All</button>
    ${subCats.map((sc) => `
      <button type="button" class="gallery-filter" data-sub="${sc}" role="tab" aria-selected="false">${sc}</button>
    `).join('')}
  `;

  container.querySelectorAll('.gallery-filter').forEach((btn) => {
    btn.addEventListener('click', () => {
      activeSubCategory = btn.dataset.sub;
      container.querySelectorAll('.gallery-filter').forEach((b) => {
        const on = b.dataset.sub === activeSubCategory;
        b.classList.toggle('active', on);
        b.setAttribute('aria-selected', on);
      });
      renderServicesGrid(categoryId);
    });
  });
}

function slugify(text) {
  return text.replace(/[^a-zA-Z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function renderGroupedServices(catalog, services) {
  return catalog.map((group) => {
    const groupServices = services.filter((s) => s.subCategory === group.subCategory);
    if (groupServices.length === 0) return '';
    const slug = slugify(group.subCategory);
    return `
      <section class="subcategory-group" aria-labelledby="sub-${slug}">
        <h3 class="subcategory-title" id="sub-${slug}">${group.subCategory}</h3>
        <div class="sub-services-grid">${groupServices.map(renderServiceCard).join('')}</div>
      </section>
    `;
  }).join('');
}

function renderServicesGrid(categoryId) {
  const services = getFilteredServices(categoryId);
  const container = document.getElementById('sub-services-container');
  const countEl = document.getElementById('services-count');
  const catalog = getCategoryCatalog(categoryId);

  countEl.textContent = `${services.length} service${services.length !== 1 ? 's' : ''} available`;

  if (catalog && activeSubCategory === 'all') {
    container.innerHTML = renderGroupedServices(catalog, services);
  } else {
    container.innerHTML = `<div class="sub-services-grid">${services.map(renderServiceCard).join('')}</div>`;
  }

  bindBookButtons();
  populateServiceSelect(services, catalog);
}

function populateServiceSelect(services, catalog) {
  const serviceSelect = document.getElementById('enquiry-service');
  serviceSelect.innerHTML = '<option value="">Select a service</option>';

  if (catalog && activeSubCategory === 'all') {
    catalog.forEach((group) => {
      const groupServices = services.filter((s) => s.subCategory === group.subCategory);
      if (groupServices.length === 0) return;
      const optgroup = document.createElement('optgroup');
      optgroup.label = group.subCategory;
      groupServices.forEach((s) => {
        const opt = document.createElement('option');
        opt.value = s.id;
        opt.textContent = s.name;
        optgroup.appendChild(opt);
      });
      serviceSelect.appendChild(optgroup);
    });
  } else {
    services.forEach((s) => {
      const opt = document.createElement('option');
      opt.value = s.id;
      opt.textContent = s.subCategory ? `${s.name} (${s.subCategory})` : s.name;
      serviceSelect.appendChild(opt);
    });
  }
}

function bindBookButtons() {
  const serviceSelect = document.getElementById('enquiry-service');
  document.querySelectorAll('.sub-service-book').forEach((btn) => {
    btn.addEventListener('click', () => {
      serviceSelect.value = btn.dataset.serviceId;
      document.getElementById('enquiry').scrollIntoView({ behavior: 'smooth' });
      document.getElementById('enquiry-name').focus();
    });
  });
}

function renderCategoryPage(categoryId) {
  const category = getCategory(categoryId);
  if (!category) return;

  currentCategoryId = categoryId;
  activeSubCategory = 'all';

  document.title = `${category.name} — VSolveHub`;
  document.getElementById('breadcrumb-current').textContent = category.name;
  document.getElementById('category-eyebrow').textContent = 'Service Category';
  document.getElementById('category-title').textContent = category.name;
  document.getElementById('category-tagline').textContent = category.tagline;

  renderSubcategoryFilters(categoryId);
  renderServicesGrid(categoryId);

  const today = new Date().toISOString().split('T')[0];
  document.getElementById('enquiry-date').min = today;

  const waMsg = `Hi VSolveHub, I'm interested in ${category.name} services`;
  const waUrl = getWhatsAppUrl(waMsg);
  document.getElementById('whatsapp-fab').href = waUrl;
  document.getElementById('footer-whatsapp')?.setAttribute('href', waUrl);
}

function initEnquiryForm(categoryId) {
  const form = document.getElementById('enquiry-form');
  const category = getCategory(categoryId);
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('enquiry-name').value.trim();
    const phone = document.getElementById('enquiry-phone').value.trim();
    const serviceId = document.getElementById('enquiry-service').value;
    const serviceName = document.getElementById('enquiry-service').selectedOptions[0].text;
    const date = document.getElementById('enquiry-date').value;
    const location = document.getElementById('enquiry-location').value.trim();

    const booking = {
      bookingId: generateBookingId(),
      name,
      phone,
      serviceId,
      serviceName,
      categoryId,
      categoryName: category?.name || '',
      date,
      location,
      status: 'pending',
      createdAt: new Date().toISOString(),
    };

    saveBooking(booking);

    if (isReturningUser(phone)) {
      booking.status = 'confirmed';
      booking.otpVerified = true;
      saveBooking(booking);
      window.location.href = 'confirm.html';
    } else {
      window.location.href = 'booking-otp.html';
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const categoryId = getCategoryFromUrl();
  renderCategoryPage(categoryId);
  initEnquiryForm(categoryId);
});
