document.addEventListener('DOMContentLoaded', () => {
  const booking = getBooking();
  if (!booking || !booking.bookingId) {
    window.location.href = 'index.html';
    return;
  }

  document.getElementById('booking-summary').innerHTML = `
    <div class="summary-row"><dt>Booking ID</dt><dd><strong>${booking.bookingId}</strong></dd></div>
    <div class="summary-row"><dt>Service</dt><dd>${booking.serviceName}</dd></div>
    <div class="summary-row"><dt>Date</dt><dd>${booking.date}</dd></div>
    <div class="summary-row"><dt>Location</dt><dd>${booking.location}</dd></div>
    <div class="summary-row"><dt>Contact</dt><dd>${booking.name} · +91 ${booking.phone}</dd></div>
  `;
});
