const TIMELINE = [
  { id: 'pending', label: 'Pending', desc: 'Booking received — assigning worker' },
  { id: 'confirmed', label: 'Confirmed', desc: 'Worker assigned — will call you soon' },
  { id: 'in_progress', label: 'In Progress', desc: 'Worker is on the way or at your location' },
  { id: 'completed', label: 'Completed', desc: 'Job finished — thank you!' },
];

function getStatusIndex(statusId) {
  return TIMELINE.findIndex((s) => s.id === statusId);
}

document.addEventListener('DOMContentLoaded', () => {
  const booking = getBooking();
  if (!booking || !booking.bookingId) {
    window.location.href = 'index.html';
    return;
  }

  document.getElementById('track-ref').textContent = booking.bookingId;
  document.getElementById('track-service').textContent =
    `${booking.serviceName} · ${booking.date} · ${booking.location}`;

  const currentIdx = getStatusIndex(booking.status || 'confirmed');

  document.getElementById('status-timeline').innerHTML = TIMELINE.map((step, i) => {
    let state = 'upcoming';
    if (i < currentIdx) state = 'done';
    else if (i === currentIdx) state = 'current';

    return `
      <li class="timeline-step timeline-step--${state}">
        <span class="timeline-dot" aria-hidden="true"></span>
        <div class="timeline-body">
          <strong>${step.label}</strong>
          <span>${step.desc}</span>
        </div>
      </li>
    `;
  }).join('');

  const now = new Date();
  document.getElementById('track-updated').textContent =
    `Last updated: ${now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}`;

  document.getElementById('track-whatsapp').href =
    getWhatsAppUrl(`Hi VSolveHub, tracking booking ${booking.bookingId}`);
});
